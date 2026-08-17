/*
   Copyright 2017 kanreisa

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { Operation } from "express-openapi";
import * as api from "../../../api";
import * as apid from "../../../../../api";
import * as config from "../../../config";
import _ from "../../../_";
import ChannelItem from "../../../ChannelItem";

/**
 * Options for a channel scan operation
 */
interface ChannelScanOption {
    type: apid.ChannelType;          // Channel type
    startCh?: number;                  // Start channel number
    endCh?: number;                    // End channel number
    startSubCh?: number;               // Start subchannel number (for BS)
    endSubCh?: number;                 // End subchannel number (for BS)
    useSubCh?: boolean;                // Use subchannel style (for BS)
    scanMode?: apid.ChannelScanMode;               // Scan mode
    setDisabledOnAdd?: boolean;        // Set disabled flag on newly added channels
    refresh?: boolean;                 // Refresh existing channel configs
    channelNameFormat?: string;        // Custom channel name format
}

function parseBooleanQuery(value: unknown): boolean | undefined {
    if (value === undefined) {
        return undefined;
    }

    return value === true || value === "true" || value === "1";
}

/**
 * Configuration for a scan operation
 */
interface ScanConfig {
    readonly channels: string[];         // List of channel identifiers to scan
    readonly scanMode: apid.ChannelScanMode;         // Scan mode to use
    readonly setDisabledOnAdd: boolean;  // Whether to set disabled on new channels
}

/**
 * Service types supported for scanning
 * 0x01 = デジタルTVサービス
 * 0x02 = デジタル音声サービス
 * 0xA1 = 臨時映像サービス
 * 0xA4 = エンジニアリングサービス
 * 0xA5 = プロモーション映像サービス
 * 0xAD = 超高精細度4K専用TVサービス
 * 0xC0 = データサービス
 */
const serviceTypes = [0x01, 0x02, 0xA1, 0xA4, 0xA5, 0xAD, 0xC0];

/**
 * Options for string comparison when sorting channels
 */
const compareOptions: Intl.CollatorOptions = {
    sensitivity: "base" as const,
    numeric: true
};

/**
 * Channel type order for sorting
 */
const channelOrder: Record<apid.ChannelType, number> = {
    GR: 1,
    BS: 2,
    CS: 3,
    SKY: 4,
    NW1: 5,
    NW2: 6,
    NW3: 7,
    NW4: 8,
    NW5: 9,
    NW6: 10,
    NW7: 11,
    NW8: 12,
    NW9: 13,
    NW10: 14,
    NW11: 15,
    NW12: 16,
    NW13: 17,
    NW14: 18,
    NW15: 19,
    NW16: 20,
    NW17: 21,
    NW18: 22,
    NW19: 23,
    NW20: 24,
    NW21: 25,
    NW22: 26,
    NW23: 27,
    NW24: 28,
    NW25: 29,
    NW26: 30,
    NW27: 31,
    NW28: 32,
    NW29: 33,
    NW30: 34,
    NW31: 35,
    NW32: 36,
    NW33: 37,
    NW34: 38,
    NW35: 39,
    NW36: 40,
    NW37: 41,
    NW38: 42,
    NW39: 43,
    NW40: 44,
    BS4K: 45,
    CS4K: 46
};

/**
 * Channel name format templates
 */
const CHANNEL_NAME_FORMAT_GR = "{ch}";                // GR channel format
const CHANNEL_NAME_FORMAT_BS = "{ch}";                // BS channel format
const CHANNEL_NAME_FORMAT_BS_SUBCH = "BS{ch00}_{subch}"; // BS subchannel format
const CHANNEL_NAME_FORMAT_CS = "CS{ch}";              // CS channel format
const CHANNEL_NAME_FORMAT_BS4K = "BS4K{ch00}_{subch}"; // BS 4K (新4K8K衛星放送) channel format
const CHANNEL_NAME_FORMAT_CS4K = "CS4K{ch}";           // CS 4K (新4K8K衛星放送) channel format

/**
 * Global flag to track if scan cancellation is requested
 */
let isCancellationRequested = false;

/**
 * Global object to track current scan status
 */
const scanStatus: apid.ChannelScanStatus = {
    isScanning: false,
    status: "not_started"
};

/**
 * Generate an array of numbers in a range
 *
 * @param start The start number of the range (inclusive)
 * @param end The end number of the range (inclusive)
 * @returns Array of numbers from start to end
 */
function range(start: number, end: number): number[] {
    return Array.from({ length: (end - start + 1) }, (_, i) => i + start);
}

/**
 * Format a channel name using placeholders
 *
 * @param format The format string with placeholders like {ch}, {ch00}, {subch}
 * @param ch The channel number
 * @param subch The optional subchannel number
 * @returns The formatted channel name
 *
 * Supported placeholder formats:
 * - {ch} - Channel number
 * - {ch0}, {ch00}, etc. - Channel number with zero padding
 * - {subch} - Subchannel number
 * - {subch0}, {subch00}, etc. - Subchannel number with zero padding
 */
function formatChannelName(format: string, ch: number, subch?: number): string {
    const values = new Map<string, string>();
    // Find all placeholders in format {name}
    const placeholders = format.match(/({[\\_a-zA-Z0-9]+})/g);

    if (placeholders) {
        for (const placeholder of placeholders) {
            // Handle {ch} or {ch00} style placeholders
            const chDigits = placeholder.match(/{ch([0]*)}/);
            if (chDigits) {
                const digits = chDigits[1] ? chDigits[1].length : 1;
                values.set(placeholder, (ch ?? 0).toString(10).padStart(digits, "0"));
            }

            // Handle {subch} or {subch00} style placeholders
            const subchDigits = placeholder.match(/{subch([0]*)}/);
            if (subchDigits) {
                const digits = subchDigits[1] ? subchDigits[1].length : 1;
                values.set(placeholder, (subch ?? 0).toString(10).padStart(digits, "0"));
            }
        }
    }

    // Replace all placeholders with their values
    let formatted = format;
    for (const [key, value] of values) {
        while (formatted.includes(key)) {
            formatted = formatted.replace(key, value);
        }
    }

    return formatted;
}

/**
 * Generates a scan configuration for a given channel type and options
 *
 * @param option The scan options including channel type, ranges, and formatting
 * @returns A scan configuration with channels to scan and associated settings
 */
export function generateScanConfig(option: ChannelScanOption): ScanConfig | undefined {
    // Remove undefined properties from options
    Object.keys(option).forEach(key => option[key] === undefined && delete option[key]);

    // Handle GR (Ground) channels
    if (option.type === "GR") {
        // Set GR-specific defaults
        const grOptions = {
            startCh: 13,
            endCh: 62,
            scanMode: "Channel" as const,
            setDisabledOnAdd: false,
            ...option
        };

        // Generate channel list using range and format
        const channelFormat = grOptions.channelNameFormat || CHANNEL_NAME_FORMAT_GR;
        return {
            channels: range(grOptions.startCh, grOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: grOptions.scanMode,
            setDisabledOnAdd: grOptions.setDisabledOnAdd
        };
    }

    // Network tuners use a zero-based numeric channel space.
    if (/^NW(?:[1-9]|[1-3][0-9]|40)$/.test(option.type)) {
        const nwOptions = {
            ...option,
            startCh: Number.isInteger(option.startCh) && option.startCh >= 0 ? option.startCh : 0,
            endCh: Number.isInteger(option.endCh) && option.endCh >= 0 ? option.endCh : 62,
            scanMode: "Channel" as const,
            setDisabledOnAdd: option.setDisabledOnAdd === true
        };

        if (nwOptions.endCh < nwOptions.startCh) {
            return undefined;
        }

        const channelFormat = nwOptions.channelNameFormat || CHANNEL_NAME_FORMAT_GR;
        return {
            channels: range(nwOptions.startCh, nwOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: nwOptions.scanMode,
            setDisabledOnAdd: nwOptions.setDisabledOnAdd
        };
    }

    // Default options for satellite channels (BS/CS)
    const satelliteOptions = {
        scanMode: "Service" as const,
        setDisabledOnAdd: true,
        ...option
    };

    // Handle BS (Broadcast Satellite) channels
    if (option.type === "BS") {
        // Handle subchannel style BS scanning (e.g. BS01_0)
        if (satelliteOptions.useSubCh) {
            const bsSubchOptions = {
                startCh: 1,
                endCh: 23,
                startSubCh: 0,
                endSubCh: 3,
                ...satelliteOptions
            };

            // Generate cross product of channels and subchannels
            const channels: string[] = [];
            const channelFormat = bsSubchOptions.channelNameFormat || CHANNEL_NAME_FORMAT_BS_SUBCH;

            for (const ch of range(bsSubchOptions.startCh, bsSubchOptions.endCh)) {
                for (const subCh of range(bsSubchOptions.startSubCh, bsSubchOptions.endSubCh)) {
                    channels.push(formatChannelName(channelFormat, ch, subCh));
                }
            }

            return {
                channels,
                scanMode: bsSubchOptions.scanMode,
                setDisabledOnAdd: bsSubchOptions.setDisabledOnAdd
            };
        }

        // Regular BS channel style (e.g. 101-256)
        const bsOptions = {
            startCh: 101,
            endCh: 256,
            ...satelliteOptions
        };

        const channelFormat = bsOptions.channelNameFormat || CHANNEL_NAME_FORMAT_BS;
        return {
            channels: range(bsOptions.startCh, bsOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: bsOptions.scanMode,
            setDisabledOnAdd: bsOptions.setDisabledOnAdd
        };
    }

    // Handle CS (Communication Satellite) channels
    if (option.type === "CS") {
        const csOptions = {
            startCh: 2,
            endCh: 24,
            ...satelliteOptions
        };

        const channelFormat = csOptions.channelNameFormat || CHANNEL_NAME_FORMAT_CS;
        return {
            channels: range(csOptions.startCh, csOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: csOptions.scanMode,
            setDisabledOnAdd: csOptions.setDisabledOnAdd
        };
    }

    // Handle BS 4K (新4K8K衛星放送) channels
    // MMT/TLV は BonDriver 等のフロントエンド側で MPEG-2 TS へ変換される前提のため、
    // チャンネル識別子はチューナーコマンドの空間に依存する。channelNameFormat で上書きできる。
    if (option.type === "BS4K") {
        // BonDriver-based tuners expose BS4K channels as zero-based indexes in a
        // tuner space rather than as BSxx_subchannel identifiers.
        if (satelliteOptions.useSubCh === false) {
            const bs4kIndexOptions = {
                startCh: 0,
                endCh: 91,
                ...satelliteOptions
            };
            const channelFormat = bs4kIndexOptions.channelNameFormat || CHANNEL_NAME_FORMAT_GR;
            return {
                channels: range(bs4kIndexOptions.startCh, bs4kIndexOptions.endCh)
                    .map(ch => formatChannelName(channelFormat, ch)),
                scanMode: bs4kIndexOptions.scanMode,
                setDisabledOnAdd: bs4kIndexOptions.setDisabledOnAdd
            };
        }

        const bs4kOptions = {
            startCh: 1,
            endCh: 23,
            startSubCh: 0,
            endSubCh: 3,
            ...satelliteOptions
        };

        const channels: string[] = [];
        const channelFormat = bs4kOptions.channelNameFormat || CHANNEL_NAME_FORMAT_BS4K;

        for (const ch of range(bs4kOptions.startCh, bs4kOptions.endCh)) {
            for (const subCh of range(bs4kOptions.startSubCh, bs4kOptions.endSubCh)) {
                channels.push(formatChannelName(channelFormat, ch, subCh));
            }
        }

        return {
            channels,
            scanMode: bs4kOptions.scanMode,
            setDisabledOnAdd: bs4kOptions.setDisabledOnAdd
        };
    }

    // Handle CS 4K (新4K8K衛星放送) channels
    if (option.type === "CS4K") {
        const cs4kOptions = {
            startCh: 2,
            endCh: 24,
            ...satelliteOptions
        };

        const channelFormat = cs4kOptions.channelNameFormat || CHANNEL_NAME_FORMAT_CS4K;
        return {
            channels: range(cs4kOptions.startCh, cs4kOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: cs4kOptions.scanMode,
            setDisabledOnAdd: cs4kOptions.setDisabledOnAdd
        };
    }

    return undefined;
}

/**
 * Generates a channel item for a specific service
 *
 * @param type The channel type (GR, BS, CS, SKY)
 * @param channel The channel identifier
 * @param service The service information
 * @param setDisabledOnAdd Whether to set the channel as disabled initially
 * @returns A channel configuration object
 */
export function generateChannelItemForService(
    type: apid.ChannelType,
    channel: string,
    service: apid.Service,
    setDisabledOnAdd: boolean,
    commandVars?: Record<string, string | number>
): apid.ConfigChannelsItem {
    // Use service name, or fallback to generated name if empty
    let name = service.name.trim();
    if (name.length === 0) {
        name = `${type}${channel}:${service.serviceId}`;
    }

    return {
        name,
        type,
        channel,
        serviceId: service.serviceId,
        ...(commandVars ? { commandVars: { ...commandVars } } : {}),
        isDisabled: setDisabledOnAdd
    };
}

/**
 * Generates a channel item for a channel with multiple services
 * Finding a common prefix among all service names for the channel name
 *
 * @param type The channel type (GR, BS, CS, SKY)
 * @param channel The channel identifier
 * @param services Array of services on this channel
 * @param setDisabledOnAdd Whether to set the channel as disabled initially
 * @returns A channel configuration object
 */
export function generateChannelItemForChannel(
    type: apid.ChannelType,
    channel: string,
    services: apid.Service[],
    setDisabledOnAdd: boolean,
    commandVars?: Record<string, string | number>
): apid.ConfigChannelsItem {
    // Find the common prefix among all service names
    const baseName = services[0].name;
    let matchIndex = baseName.length;

    // Compare each service name with the base name to find the common prefix
    for (let servicesIndex = 1; servicesIndex < services.length; servicesIndex++) {
        const service = services[servicesIndex];
        for (let nameIndex = 0; nameIndex < baseName.length && nameIndex < service.name.length; nameIndex++) {
            // If characters don't match
            if (baseName[nameIndex] !== service.name[nameIndex]) {
                if (nameIndex === 0) {
                    break; // No common prefix at all
                }
                if (nameIndex < matchIndex) {
                    matchIndex = nameIndex; // Update the match length
                }
                break;
            }
            // If this service name is shorter and is a prefix of the base name
            if (nameIndex + 1 >= service.name.length && service.name.length < matchIndex) {
                matchIndex = service.name.length;
                break;
            }
        }
    }

    // Extract and clean up the common prefix
    let name = baseName.slice(0, matchIndex).trim();
    if (name.length === 0) {
        name = `${type}${channel}`; // Fallback name if no common prefix
    }

    return {
        name,
        type,
        channel,
        ...(commandVars ? { commandVars: { ...commandVars } } : {}),
        isDisabled: setDisabledOnAdd
    };
}

/**
 * Generates channel items based on scan mode, either per service or per channel
 *
 * @param scanMode The scan mode (Service or Channel)
 * @param type The channel type (GR, BS, CS, SKY)
 * @param channel The channel identifier
 * @param services Array of services found on this channel
 * @param setDisabledOnAdd Whether to set new channels as disabled
 * @returns Array of channel configuration objects
 */
export function generateChannelItems(
    scanMode: apid.ChannelScanMode,
    type: apid.ChannelType,
    channel: string,
    services: apid.Service[],
    setDisabledOnAdd: boolean,
    commandVars?: Record<string, string | number>
): apid.ConfigChannels {
    // Service mode: create one channel item per service
    if (scanMode === "Service") {
        return services.map(service =>
            generateChannelItemForService(type, channel, service, setDisabledOnAdd, commandVars)
        );
    }

    // Channel mode: create one channel item for all services
    return [generateChannelItemForChannel(type, channel, services, setDisabledOnAdd, commandVars)];
}
/**
 * Base interface for scan status updates
 */
interface BaseScanStatusUpdate {
    channel?: string;
    type?: apid.ChannelType;
}

/**
 * Interface for phase status updates
 */
interface PhaseScanStatusUpdate extends BaseScanStatusUpdate {
    status: apid.ChannelScanPhase;
    error?: string;
    saved?: boolean;
    dryRun?: boolean;
}

/**
 * Interface for step status updates
 */
interface StepScanStatusUpdate extends BaseScanStatusUpdate {
    status: apid.ChannelScanStep;
    progress?: number;
    enabled?: boolean;
    reason?: string;
    items?: apid.ConfigChannels;
    count?: number;
}

/**
 * Interface for result status updates
 */
interface ResultScanStatusUpdate extends BaseScanStatusUpdate {
    status: apid.ChannelScanResultType;
    newCount?: number;
    takeoverCount?: number;
    result?: apid.ConfigChannels;
}

/**
 * Union type for all scan status updates
 */
type ScanStatusUpdate = PhaseScanStatusUpdate | StepScanStatusUpdate | ResultScanStatusUpdate;

/**
 * Executes the channel scanning process
 *
 * @param scanConfig Configuration for the scan including channels to scan
 * @param dryRun If true, don't save changes
 * @param type Channel type being scanned (GR, BS, CS, SKY)
 * @param refresh Whether to rescan channels that already exist
 * @param outputWriter Optional function to write output text during scan
 * @returns Promise resolving to the final channel list
 */
async function runChannelScan(
    scanConfig: ScanConfig,
    dryRun: boolean,
    type: apid.ChannelType,
    refresh: boolean,
    outputWriter?: (text: string) => void,
    skipCh: number[] = [],
    space?: number
): Promise<apid.ConfigChannels> {
    try {
        // Initialize scan data
        const scanLog: string[] = [];
        const oldChannelItems = await config.loadChannels();
        // Filter out channels of the type we're scanning (they'll be replaced)
        const result: apid.ConfigChannels = oldChannelItems.filter(channel => channel.type !== type);
        let newCount = 0;
        let takeoverCount = 0;

        // Initialize global scan status
        const now = Date.now();
        Object.assign(scanStatus, {
            status: "scanning" as const,
            type,
            dryRun,
            progress: 0,
            currentChannel: "",
            scanLog,
            newCount,
            takeoverCount,
            result: [],
            startTime: now,
            updateTime: now
        });
        if (space !== undefined) {
            scanStatus.space = space;
        } else {
            delete scanStatus.space;
        }

        /**
         * Updates scan phase status
         * @param update Phase status update
         * @param textOutput Optional text output for logs
         */
        const updatePhaseStatus = (update: PhaseScanStatusUpdate, textOutput?: string): void => {
            scanStatus.status = update.status;
            if (update.channel) {
                scanStatus.currentChannel = update.channel;
            }

            appendToLog(textOutput);
        };

        /**
         * Updates scan step status
         * @param update Step status update
         * @param textOutput Optional text output for logs
         */
        const updateStepStatus = (update: StepScanStatusUpdate, textOutput?: string): void => {
            if (update.progress !== undefined) {
                scanStatus.progress = update.progress;
            }
            if (update.channel) {
                scanStatus.currentChannel = update.channel;
            }
            scanStatus.updateTime = Date.now();

            appendToLog(textOutput);
        };

        /**
         * Updates scan result status
         * @param update Result status update
         * @param textOutput Optional text output for logs
         */
        const updateResultStatus = (update: ResultScanStatusUpdate, textOutput?: string): void => {
            if (update.newCount !== undefined) {
                scanStatus.newCount = update.newCount;
            }
            if (update.takeoverCount !== undefined) {
                scanStatus.takeoverCount = update.takeoverCount;
            }
            if (update.result) {
                scanStatus.result = update.result;
            }

            appendToLog(textOutput);
        };

        /**
         * Appends text to scan log and writes output
         * @param textOutput Text to append
         */
        const appendToLog = (textOutput?: string): void => {
            if (textOutput) {
                const trimmedText = textOutput.trim();
                scanStatus.scanLog.push(trimmedText);
                if (outputWriter) {
                    outputWriter(textOutput);
                }
            }
        };

        // Print dry run notice if applicable
        if (dryRun) {
            appendToLog("-- dry run --\n\n");
        }

        // Print scan start message
        updateStepStatus(
            { status: "started" as const, type },
            `channel scanning... (type: "${type}")\n\n`
        );

        // Process each channel in the scan configuration
        const totalChannels = scanConfig.channels.length;
        for (let i = 0; i < totalChannels; i++) {
            // Check if scanning has been cancelled
            if (isCancellationRequested) {
                updatePhaseStatus(
                    { status: "cancelled" as const },
                    "Channel scan was cancelled by user request.\n"
                );
                break;
            }
            const channel = scanConfig.channels[i];
            const progressPercent = Math.round((i + 1) / totalChannels * 100);

            // Check if this channel should be skipped based on skipCh parameter
            const channelNumber = parseInt(channel.replace(/[^0-9]/g, ""), 10);
            if (!isNaN(channelNumber) && skipCh.includes(channelNumber)) {
                updateStepStatus(
                    {
                        status: "skipped" as const,
                        channel,
                        reason: "skip_parameter",
                        progress: progressPercent
                    },
                    `channel: "${channel}" (${i + 1}/${totalChannels}) [${progressPercent}%] - skipped by skipCh parameter\n\n`
                );
                continue; // Skip to next channel
            }

            // Update status to show current channel being scanned
            updateStepStatus(
                {
                    status: "scanning_channel" as const,
                    channel,
                    progress: progressPercent
                },
                `channel: "${channel}" (${i + 1}/${totalChannels}) [${progressPercent}%] ...\n`
            );

            // Check for existing enabled channels if we're not refreshing
            if (!refresh) {
                const existingChannels = oldChannelItems.filter(
                    item => item.type === type &&
                           item.channel === channel &&
                           !item.isDisabled
                );

                // If there are existing channels, take them over instead of scanning
                if (existingChannels.length > 0) {
                    const takeoverInfo = {
                        status: "takeover" as const,
                        channel,
                        count: existingChannels.length,
                        items: existingChannels
                    };

                    updateStepStatus(
                        takeoverInfo,
                        `-> ${existingChannels.length} existing config found.\n`
                    );

                    // Add each existing channel to results
                    for (const channelItem of existingChannels) {
                        result.push(channelItem);
                        takeoverCount++;
                        scanStatus.takeoverCount = takeoverCount;
                        appendToLog(`-> ${JSON.stringify(channelItem)}\n`);
                    }

                    updateStepStatus(
                        {
                        status: "skipped" as const,
                            channel,
                            reason: "existing_config"
                        },
                        `# scan has skipped due to the "refresh = false" option because an existing config was found.\n\n`
                    );

                    continue; // Skip to next channel
                }
            }

            // Scan the channel for services
            let services: apid.Service[];
            try {
                // Get services from the tuner
                const channelItem = new ChannelItem({
                    name: `${type}:${channel}`,
                    type,
                    channel,
                    ...(space !== undefined ? { commandVars: { space } } : {})
                });
                services = await _.tuner.getServices([channelItem], {
                    id: "Mirakurun:API:channelScan",
                    priority: 1
                });
            } catch (error) {
                // Handle errors (often no signal)
                const isNoSignalError = /stream has closed before get network/.test(String(error));
                const errorInfo = {
                    status: "error" as const,
                    channel,
                    reason: isNoSignalError ? "no_signal" : String(error),
                    progress: progressPercent
                };

                let errorText = "-> no signal.";
                if (!isNoSignalError) {
                    errorText += ` [${error}]`;
                }
                errorText += "\n\n";

                updateStepStatus(errorInfo, errorText);
                continue; // Skip to next channel
            }

            // Filter services
            services = services.filter(service => serviceTypes.includes(service.type));

            updateStepStatus(
                {
                    status: "services_found" as const,
                    channel,
                    count: services.length
                },
                `-> ${services.length} services found.\n`
            );

            // Skip if no services found
            if (services.length === 0) {
                appendToLog("\n");
                continue;
            }

            // Generate channel items based on scan mode (Service or Channel)
            const scannedChannelItems = generateChannelItems(
                scanConfig.scanMode,
                type,
                channel,
                services,
                scanConfig.setDisabledOnAdd,
                space !== undefined ? { space } : undefined
            );

            // Add newly scanned items to results
            const scannedItems: apid.ConfigChannels = [];
            for (const newChannelItem of scannedChannelItems) {
                result.push(newChannelItem);
                newCount++;
                scanStatus.newCount = newCount;
                scannedItems.push(newChannelItem);
                appendToLog(`-> ${JSON.stringify(newChannelItem)}\n`);
            }

            updateStepStatus(
                {
                    status: "channels_found" as const,
                    channel,
                    items: scannedItems
                },
                `Found ${scannedItems.length} channels for ${channel}\n\n`
            );
        }

        // Sort results by type and channel number
        result.sort((a, b) => {
            if (a.type === b.type) {
                return a.channel.localeCompare(b.channel, undefined, compareOptions);
            } else {
                return channelOrder[a.type] - channelOrder[b.type];
            }
        });

        // Generate and display summary
        const summaryData = {
            status: "summary" as const,
            newCount,
            takeoverCount,
            totalTypeCount: newCount + takeoverCount,
            totalCount: result.length,
            type
        };

        updateResultStatus(
            summaryData,
            `-> total ${newCount + takeoverCount}/${result.length} (${type}/Any) channels configured.\n\n`
        );

        updateResultStatus(
            { status: "summary_new" as const, newCount },
            `-> new ${newCount} channels found.\n`
        );

        updateResultStatus(
            { status: "summary_takeover" as const, takeoverCount },
            `-> existing ${takeoverCount} channels merged.\n`
        );

        // If canceled, do not set to Completed
        if (!isCancellationRequested) {
            // Save results if not a dry run
            if (!dryRun) {
                await config.saveChannels(result);
                updatePhaseStatus(
                    { status: "completed" as const, saved: true },
                    "channel scan has been completed and saved successfully.\n"
                );
                updateResultStatus(
                    { status: "restart_required" as const },
                    "**RESTART REQUIRED** to apply changes.\n"
                );
            } else {
                updatePhaseStatus(
                    { status: "completed" as const, dryRun: true },
                    "channel scan has been completed.\n\n-- dry run --\n"
                );
            }
        }

        // Send final result
        updateResultStatus(
            {
                status: "final_result" as const,
                result
            },
            `Final result: ${result.length} channels\n`
        );

        return result;
    } finally {
        // Always reset scanning and cancellation flags when done
        scanStatus.isScanning = false;
        isCancellationRequested = false;
    }
}

/**
 * Get channel scan status - API handler
 */
export const get: Operation = async (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    // Return current scan status
    api.responseJSON(res, scanStatus as apid.ChannelScanStatus);
};

get.apiDoc = {
    tags: ["config"],
    summary: "チャンネルスキャン状態の取得 / Get Channel Scan Status",
    description: "現在実行中、または直近に完了したスキャンの状態と結果を返します。 / " +
        "Returns the current or last completed scan status and results.",
    operationId: "getChannelScanStatus",
    produces: [
        "application/json"
    ],
    responses: {
        200: {
            description: "取得成功 / OK",
            schema: {
                $ref: "#/definitions/ChannelScanStatus"
            }
        }
    }
};

/**
 * Initiate a channel scan - API handler
 */
export const put: Operation = async (req, res) => {
    // Check if a scan is already in progress
    if (scanStatus.isScanning === true) {
        api.responseError(res, 409, "Already Scanning");
        return;
    }

    // Set scanning flag
    scanStatus.isScanning = true;

    // Extract query parameters
    const asyncMode = parseBooleanQuery(req.query.async) === true;
    const dryRun = parseBooleanQuery(req.query.dryRun) === true;
    const type = req.query.type as apid.ChannelType;
    const refresh = parseBooleanQuery(req.query.refresh) === true;
    const space = req.query.space !== undefined ? Number(req.query.space) : undefined;

    if (space !== undefined && (!Number.isInteger(space) || space < 0)) {
        scanStatus.isScanning = false;
        api.responseError(res, 400, "Invalid tuner space: expected a non-negative integer");
        return;
    }

    // Parse skipCh parameter
    const skipCh: number[] = String(req.query?.skipCh || "")
        .split(",")
        .filter(value => value.trim() !== "")
        .map(value => Number(value.trim()))
        .filter(value => Number.isInteger(value));

    // Parse channel configuration options
    const channelOptions: ChannelScanOption = {
        type,
        startCh: req.query.minCh ? Number(req.query.minCh) : undefined,
        endCh: req.query.maxCh ? Number(req.query.maxCh) : undefined,
        startSubCh: req.query.minSubCh ? Number(req.query.minSubCh) : undefined,
        endSubCh: req.query.maxSubCh ? Number(req.query.maxSubCh) : undefined,
        useSubCh: parseBooleanQuery(req.query.useSubCh),
        channelNameFormat: req.query.channelNameFormat as string,
        scanMode: req.query.scanMode as apid.ChannelScanMode,
        setDisabledOnAdd: parseBooleanQuery(req.query.setDisabledOnAdd)
    };

    // Generate scan configuration
    const scanConfig = generateScanConfig(channelOptions);

    // Handle missing scan configuration
    if (!scanConfig || scanConfig.channels.length === 0) {
        scanStatus.isScanning = false;
        api.responseError(res, 400, "Invalid scan configuration: no channels to scan");
        return;
    }

    // Handle asynchronous scan mode
    if (asyncMode) {
        res.status(202);
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
            status: "accepted",
            message: "Channel scan started in async mode"
        });
        res.end();

        // Run scan in background
        runChannelScan(scanConfig, dryRun, type, refresh, null, skipCh, space)
            .catch(error => {
                console.error("Channel scan error:", error);
                // Error is used only when the scan is stopped
                scanStatus.status = "error" as const;
                scanStatus.scanLog.push(`Error: ${String(error)}`);
                scanStatus.isScanning = false;
            });

        return;
    }

    // Synchronous mode - wait for completion
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200);

    // Set longer timeout for synchronous scan mode
    req.setTimeout(1000 * 60 * 30); // 30 minutes

    try {
        // Stream output directly to response
        const logTextOutput = (textContent: string): void => {
            res.write(textContent);
        };

        // Run scan with output streaming
        await runChannelScan(scanConfig, dryRun, type, refresh, logTextOutput, skipCh, space);
        res.end();
    } catch (error) {
        console.error("Channel scan error:", error);
        // Error is used only when the scan is stopped
        scanStatus.status = "error" as const;
        scanStatus.scanLog.push(`Error: ${String(error)}`);
        res.write(`Error during scan: ${error}\n`);
        res.end();
        scanStatus.isScanning = false;
    }
};

/**
 * API documentation for the channel scan endpoint
 */
put.apiDoc = {
    tags: ["config"],
    summary: "チャンネルスキャン / Channel Scan",
    description: `## 日本語

設定の更新仕様:
- 指定した種別と範囲のチャンネルをスキャンし、検出した項目を設定ファイルへ保存します。
- \`refresh=false\` の場合、設定済みで有効なチャンネルはスキャンせず、その設定を引き継ぎます。
- 指定した種別のうちスキャン範囲外にある項目は削除されます。他の種別の項目は保持されます。
- 1回のスキャンは1つのチャンネル種別と1つの \`space\` の組み合わせを前提とします。Spaceが異なるチャンネルは、NW1・NW2など別の種別へ分けてください。同じ種別を複数Spaceで使用すると、別Spaceの設定が結果から除外される場合があります。

BSサブチャンネル形式:
- BSスキャンでは \`useSubCh=true\` にすると、\`BS01_0\` のようなサブチャンネル形式を使用できます。
- 範囲は \`minCh\`、\`maxCh\`、\`minSubCh\`、\`maxSubCh\` で指定します。
- WindowsのBonDriverなど、0起点のチャンネルインデックスを使う場合は \`useSubCh=false\` にしてください。

## English

Entry rewriting specifications:
- The scan is performed on a range of channels of the specified type and the entries for those channels, if any, are saved in the configuration file.
- If the channel to be scanned is described in the configuration file and is enabled, the scan will not be performed for that channel and the entries described will remain intact. If you do not want to keep the entries, use the \`refresh\` option.
- All entries outside the channel range of the specified type will be deleted.
- All entries of a type other than the specified type will remain.
- One scan targets one channel type and one \`space\`. Use separate types such as NW1 and NW2 for channels in different tuner spaces. Using multiple spaces with the same type may exclude the other spaces from the result.

About BS Subchannel Style:
- Only when scanning BS, you can specify the channel number in the subchannel style (e.g. BS01_0). To specify the channel number, use minSubCh and maxSubCh in addition to minCh and maxCh.
- The subchannel number parameters (minSubCh, maxSubCh) are used only if the type is BS and are ignored otherwise.
- Subchannel style scans scan in the following range:
    From \`BS\${minCh}_\${minSubCh}\` to \`BS\${maxCh}_\${maxSubCh}\`
- In the subchannel style, minCh and maxCh are zero padded to two digits. minSubCh and maxSubCh are not padded.
- BS "non" subchannel style scans and GR scans are basically the same. Note that if you scan the wrong channel range, the GR channel will be registered as BS and the BS channel will be registered as GR. This problem does not occur because CS scan uses a character string with \`CS\` added as a channel number prefix.`,
    operationId: "channelScan",
    produces: [
        "text/plain",
        "application/json"
    ],
    parameters: [
        {
            in: "query",
            name: "dryRun",
            type: "boolean",
            allowEmptyValue: true,
            default: false,
            description: "ドライランです。`true` の場合、結果を設定へ保存しません。 / " +
                "Dry run mode. If `true`, the scanned result will not be saved to configuration."
        },
        {
            in: "query",
            name: "type",
            type: "string",
            enum: ["GR", "BS", "CS",
                "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10",
                "NW11", "NW12", "NW13", "NW14", "NW15", "NW16", "NW17", "NW18", "NW19", "NW20",
                "NW21", "NW22", "NW23", "NW24", "NW25", "NW26", "NW27", "NW28", "NW29", "NW30",
                "NW31", "NW32", "NW33", "NW34", "NW35", "NW36", "NW37", "NW38", "NW39", "NW40",
                "BS4K", "CS4K"],
            default: "GR",
            description: "スキャンするチャンネル種別を指定します。 / Specifies the channel type to scan."
        },
        {
            in: "query",
            name: "minCh",
            type: "integer",
            description: "スキャン範囲の最小チャンネル番号です。 / Minimum channel number to scan."
        },
        {
            in: "query",
            name: "space",
            type: "integer",
            minimum: 0,
            description: "チューニングコマンドへ `commandVars.space` として渡すSpaceインデックスです。" +
                "WindowsのBonDriver系チューナーで主に使用します。 / " +
                "Tuner space index passed to the tuning command as `commandVars.space`. " +
                "This is commonly required by BonDriver-based tuners on Windows."
        },
        {
            in: "query",
            name: "maxCh",
            type: "integer",
            description: "スキャン範囲の最大チャンネル番号です。 / Maximum channel number to scan."
        },
        {
            in: "query",
            name: "skipCh",
            type: "array",
            items: {
                type: "integer"
            },
            collectionFormat: "csv",
            description: "スキップするチャンネル番号をカンマ区切りで指定します。例: `skipCh=13,14,15` / " +
                "Comma-separated channel numbers to skip. Example: `skipCh=13,14,15`."
        },
        {
            in: "query",
            name: "minSubCh",
            type: "integer",
            description: "最小サブチャンネル番号です。`type=BS` かつ `useSubCh=true` の場合のみ使用します。 / " +
                "Minimum subchannel number. Used only when type is `BS` and useSubCh is `true`."
        },
        {
            in: "query",
            name: "maxSubCh",
            type: "integer",
            description: "最大サブチャンネル番号です。`type=BS` かつ `useSubCh=true` の場合のみ使用します。 / " +
                "Maximum subchannel number. Used only when type is `BS` and useSubCh is `true`."
        },
        {
            in: "query",
            name: "useSubCh",
            type: "boolean",
            allowEmptyValue: true,
            default: true,
            description: "サブチャンネル形式を使用する場合は `true` にします（例: BS01_0）。 / " +
                "Set to `true` to use subchannel-style channel numbers (e.g. BS01_0)."
        },
        {
            in: "query",
            name: "channelNameFormat",
            type: "string",
            allowEmptyValue: true,
            description: "チャンネル名の書式を上書きします。{ch}、{ch00}、{subch}を使用できます。 / " +
                "Overrides the channel name format. Supports {ch}, {ch00}, and {subch}."
        },
        {
            in: "query",
            name: "scanMode",
            type: "string",
            enum: ["Channel", "Service"] as apid.ChannelScanMode[],
            description: "スキャンモードです。`Service` はサービスごとに個別の項目を作成します。 / " +
                "Scan mode. `Service` creates a separate entry for each service.\n\n" +
                "_GRの既定値 / Default for GR_: Channel\n" +
                "_BS/CSの既定値 / Default for BS/CS_: Service"
        },
        {
            in: "query",
            name: "setDisabledOnAdd",
            type: "boolean",
            allowEmptyValue: true,
            description: "`true` の場合、新しく検出したチャンネルを無効状態で追加します。 / " +
                "If `true`, newly discovered channels are added in disabled state.\n\n" +
                "_GRの既定値 / Default for GR_: false\n" +
                "_BS/CSの既定値 / Default for BS/CS_: true"
        },
        {
            in: "query",
            name: "refresh",
            type: "boolean",
            allowEmptyValue: true,
            default: false,
            description: "`true` の場合、既存設定を引き継がず再スキャンします。他の種別は常に保持されます。 / " +
                "If `true`, rescans without preserving existing channel configurations. " +
                "Channels of other types are always preserved."
        },
        {
            in: "query",
            name: "async",
            type: "boolean",
            allowEmptyValue: true,
            default: false,
            description: "`true` の場合、直ちに202を返して非同期でスキャンします。" +
                "進捗と結果は GET /config/channels/scan で取得します。 / " +
                "If `true`, returns 202 immediately and scans asynchronously. " +
                "Use GET /config/channels/scan to monitor progress and retrieve the result."
        }
    ],
    responses: {
        200: {
            description: "同期スキャン完了 / OK - Synchronous scan completed",
            schema: {
                type: "string",
                description: "スキャン処理のテキスト出力 / Text output of the scan process"
            }
        },
        202: {
            description: "非同期スキャン開始 / Accepted - Asynchronous scan started",
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        enum: ["accepted"]
                    },
                    message: {
                        type: "string"
                    }
                }
            }
        },
        400: {
            description: "スキャン設定が不正 / Invalid scan configuration",
            schema: {
                $ref: "#/definitions/Error"
            }
        },
        409: {
            description: "スキャン実行中 / Already scanning",
            schema: {
                $ref: "#/definitions/Error"
            }
        },
        default: {
            description: "予期しないエラー / Unexpected error",
            schema: {
                $ref: "#/definitions/Error"
            }
        }
    }
};

/**
 * Stop a channel scan in progress - API handler
 */
export const del: Operation = async (req, res) => {
    // Check if a scan is currently in progress
    if (!scanStatus.isScanning) {
        api.responseError(res, 404, "No scan in progress");
        return;
    }

    // Check if a cancellation is already requested
    if (isCancellationRequested) {
        api.responseError(res, 409, "Already Stopping");
        return;
    }

    // Set cancellation flag to true to request scan to stop
    isCancellationRequested = true;

    // Update the scan status
    scanStatus.status = "cancelled" as const;
    scanStatus.scanLog.push("Scan cancellation requested by user.");

    // Return success response
    res.status(206);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({
        status: "stopping",
        message: "Channel scan stop has been requested"
    });
};

/**
 * API documentation for the DELETE channel scan endpoint
 */
del.apiDoc = {
    tags: ["config"],
    summary: "チャンネルスキャンの停止 / Stop Channel Scan",
    description: "実行中のチャンネルスキャンを停止します。 / Stops the current channel scan.",
    operationId: "stopChannelScan",
    produces: [
        "application/json"
    ],
    responses: {
        206: {
            description: "停止要求を受理 / Accepted",
            schema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        enum: ["stopping"]
                    },
                    message: {
                        type: "string"
                    }
                }
            }
        },
        404: {
            description: "実行中のスキャンなし / No scan in progress",
            schema: {
                $ref: "#/definitions/Error"
            }
        },
        default: {
            description: "予期しないエラー / Unexpected error",
            schema: {
                $ref: "#/definitions/Error"
            }
        }
    }
};
