"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.get = exports.CHANNEL_SCAN_PRIORITY = void 0;
exports.parseOptionalNumberQuery = parseOptionalNumberQuery;
exports.generateScanConfig = generateScanConfig;
exports.generateChannelItemForService = generateChannelItemForService;
exports.generateChannelItemForChannel = generateChannelItemForChannel;
exports.generateChannelItems = generateChannelItems;
const api = __importStar(require("../../../api"));
const config = __importStar(require("../../../config"));
const _1 = __importDefault(require("../../../_"));
const ChannelItem_1 = __importDefault(require("../../../ChannelItem"));
function parseBooleanQuery(value) {
    if (value === undefined) {
        return undefined;
    }
    return value === true || value === "true" || value === "1";
}
function parseOptionalNumberQuery(value) {
    return value === undefined ? undefined : Number(value);
}
const serviceTypes = [0x01, 0x02, 0xA1, 0xA4, 0xA5, 0xAD, 0xC0];
exports.CHANNEL_SCAN_PRIORITY = -1;
const compareOptions = {
    sensitivity: "base",
    numeric: true
};
const channelOrder = {
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
const CHANNEL_NAME_FORMAT_GR = "{ch}";
const CHANNEL_NAME_FORMAT_BS = "{ch}";
const CHANNEL_NAME_FORMAT_BS_SUBCH = "BS{ch00}_{subch}";
const CHANNEL_NAME_FORMAT_CS = "CS{ch}";
const CHANNEL_NAME_FORMAT_BS4K = "BS4K{ch00}_{subch}";
const CHANNEL_NAME_FORMAT_CS4K = "CS4K{ch}";
let isCancellationRequested = false;
const scanStatus = {
    isScanning: false,
    status: "not_started"
};
function range(start, end) {
    return Array.from({ length: (end - start + 1) }, (_, i) => i + start);
}
function formatChannelName(format, ch, subch) {
    const values = new Map();
    const placeholders = format.match(/({[\\_a-zA-Z0-9]+})/g);
    if (placeholders) {
        for (const placeholder of placeholders) {
            const chDigits = placeholder.match(/{ch([0]*)}/);
            if (chDigits) {
                const digits = chDigits[1] ? chDigits[1].length : 1;
                values.set(placeholder, (ch ?? 0).toString(10).padStart(digits, "0"));
            }
            const subchDigits = placeholder.match(/{subch([0]*)}/);
            if (subchDigits) {
                const digits = subchDigits[1] ? subchDigits[1].length : 1;
                values.set(placeholder, (subch ?? 0).toString(10).padStart(digits, "0"));
            }
        }
    }
    let formatted = format;
    for (const [key, value] of values) {
        while (formatted.includes(key)) {
            formatted = formatted.replace(key, value);
        }
    }
    return formatted;
}
function generateScanConfig(option) {
    Object.keys(option).forEach(key => option[key] === undefined && delete option[key]);
    if (option.type === "GR") {
        const grOptions = {
            startCh: 13,
            endCh: 62,
            scanMode: "Channel",
            setDisabledOnAdd: false,
            ...option
        };
        const channelFormat = grOptions.channelNameFormat || CHANNEL_NAME_FORMAT_GR;
        return {
            channels: range(grOptions.startCh, grOptions.endCh)
                .map(ch => formatChannelName(channelFormat, ch)),
            scanMode: grOptions.scanMode,
            setDisabledOnAdd: grOptions.setDisabledOnAdd
        };
    }
    if (/^NW(?:[1-9]|[1-3][0-9]|40)$/.test(option.type)) {
        const nwOptions = {
            ...option,
            startCh: Number.isInteger(option.startCh) && option.startCh >= 0 ? option.startCh : 0,
            endCh: Number.isInteger(option.endCh) && option.endCh >= 0 ? option.endCh : 62,
            scanMode: "Channel",
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
    const satelliteOptions = {
        scanMode: "Service",
        setDisabledOnAdd: true,
        ...option
    };
    if (option.type === "BS") {
        if (satelliteOptions.useSubCh) {
            const bsSubchOptions = {
                startCh: 1,
                endCh: 23,
                startSubCh: 0,
                endSubCh: 3,
                ...satelliteOptions
            };
            const channels = [];
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
    if (option.type === "BS4K") {
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
        const channels = [];
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
function generateChannelItemForService(type, channel, service, setDisabledOnAdd, commandVars) {
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
function generateChannelItemForChannel(type, channel, services, setDisabledOnAdd, commandVars) {
    const baseName = services[0].name;
    let matchIndex = baseName.length;
    for (let servicesIndex = 1; servicesIndex < services.length; servicesIndex++) {
        const service = services[servicesIndex];
        for (let nameIndex = 0; nameIndex < baseName.length && nameIndex < service.name.length; nameIndex++) {
            if (baseName[nameIndex] !== service.name[nameIndex]) {
                if (nameIndex === 0) {
                    break;
                }
                if (nameIndex < matchIndex) {
                    matchIndex = nameIndex;
                }
                break;
            }
            if (nameIndex + 1 >= service.name.length && service.name.length < matchIndex) {
                matchIndex = service.name.length;
                break;
            }
        }
    }
    let name = baseName.slice(0, matchIndex).trim();
    if (name.length === 0) {
        name = `${type}${channel}`;
    }
    return {
        name,
        type,
        channel,
        ...(commandVars ? { commandVars: { ...commandVars } } : {}),
        isDisabled: setDisabledOnAdd
    };
}
function generateChannelItems(scanMode, type, channel, services, setDisabledOnAdd, commandVars) {
    if (scanMode === "Service") {
        return services.map(service => generateChannelItemForService(type, channel, service, setDisabledOnAdd, commandVars));
    }
    return [generateChannelItemForChannel(type, channel, services, setDisabledOnAdd, commandVars)];
}
async function runChannelScan(scanConfig, dryRun, type, refresh, outputWriter, skipCh = [], space) {
    try {
        const scanLog = [];
        const oldChannelItems = await config.loadChannels();
        const result = oldChannelItems.filter(channel => channel.type !== type);
        let newCount = 0;
        let takeoverCount = 0;
        const now = Date.now();
        Object.assign(scanStatus, {
            status: "scanning",
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
        }
        else {
            delete scanStatus.space;
        }
        const updatePhaseStatus = (update, textOutput) => {
            scanStatus.status = update.status;
            if (update.channel) {
                scanStatus.currentChannel = update.channel;
            }
            appendToLog(textOutput);
        };
        const updateStepStatus = (update, textOutput) => {
            if (update.progress !== undefined) {
                scanStatus.progress = update.progress;
            }
            if (update.channel) {
                scanStatus.currentChannel = update.channel;
            }
            scanStatus.updateTime = Date.now();
            appendToLog(textOutput);
        };
        const updateResultStatus = (update, textOutput) => {
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
        const appendToLog = (textOutput) => {
            if (textOutput) {
                const trimmedText = textOutput.trim();
                scanStatus.scanLog.push(trimmedText);
                if (outputWriter) {
                    outputWriter(textOutput);
                }
            }
        };
        if (dryRun) {
            appendToLog("-- dry run --\n\n");
        }
        updateStepStatus({ status: "started", type }, `channel scanning... (type: "${type}")\n\n`);
        const totalChannels = scanConfig.channels.length;
        for (let i = 0; i < totalChannels; i++) {
            if (isCancellationRequested) {
                updatePhaseStatus({ status: "cancelled" }, "Channel scan was cancelled by user request.\n");
                break;
            }
            const channel = scanConfig.channels[i];
            const progressPercent = Math.round((i + 1) / totalChannels * 100);
            const channelNumber = parseInt(channel.replace(/[^0-9]/g, ""), 10);
            if (!isNaN(channelNumber) && skipCh.includes(channelNumber)) {
                updateStepStatus({
                    status: "skipped",
                    channel,
                    reason: "skip_parameter",
                    progress: progressPercent
                }, `channel: "${channel}" (${i + 1}/${totalChannels}) [${progressPercent}%] - skipped by skipCh parameter\n\n`);
                continue;
            }
            updateStepStatus({
                status: "scanning_channel",
                channel,
                progress: progressPercent
            }, `channel: "${channel}" (${i + 1}/${totalChannels}) [${progressPercent}%] ...\n`);
            if (!refresh) {
                const existingChannels = oldChannelItems.filter(item => item.type === type &&
                    item.channel === channel &&
                    !item.isDisabled);
                if (existingChannels.length > 0) {
                    const takeoverInfo = {
                        status: "takeover",
                        channel,
                        count: existingChannels.length,
                        items: existingChannels
                    };
                    updateStepStatus(takeoverInfo, `-> ${existingChannels.length} existing config found.\n`);
                    for (const channelItem of existingChannels) {
                        result.push(channelItem);
                        takeoverCount++;
                        scanStatus.takeoverCount = takeoverCount;
                        appendToLog(`-> ${JSON.stringify(channelItem)}\n`);
                    }
                    updateStepStatus({
                        status: "skipped",
                        channel,
                        reason: "existing_config"
                    }, `# scan has skipped due to the "refresh = false" option because an existing config was found.\n\n`);
                    continue;
                }
            }
            let services;
            try {
                const channelItem = new ChannelItem_1.default({
                    name: `${type}:${channel}`,
                    type,
                    channel,
                    ...(space !== undefined ? { commandVars: { space } } : {})
                });
                services = await _1.default.tuner.getServices([channelItem], {
                    id: "Mirakurun:API:channelScan",
                    priority: exports.CHANNEL_SCAN_PRIORITY
                });
            }
            catch (error) {
                const isNoSignalError = /stream has closed before get network/.test(String(error));
                const errorInfo = {
                    status: "error",
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
                continue;
            }
            services = services.filter(service => serviceTypes.includes(service.type));
            updateStepStatus({
                status: "services_found",
                channel,
                count: services.length
            }, `-> ${services.length} services found.\n`);
            if (services.length === 0) {
                appendToLog("\n");
                continue;
            }
            const scannedChannelItems = generateChannelItems(scanConfig.scanMode, type, channel, services, scanConfig.setDisabledOnAdd, space !== undefined ? { space } : undefined);
            const scannedItems = [];
            for (const newChannelItem of scannedChannelItems) {
                result.push(newChannelItem);
                newCount++;
                scanStatus.newCount = newCount;
                scannedItems.push(newChannelItem);
                appendToLog(`-> ${JSON.stringify(newChannelItem)}\n`);
            }
            updateStepStatus({
                status: "channels_found",
                channel,
                items: scannedItems
            }, `Found ${scannedItems.length} channels for ${channel}\n\n`);
        }
        result.sort((a, b) => {
            if (a.type === b.type) {
                return a.channel.localeCompare(b.channel, undefined, compareOptions);
            }
            else {
                return channelOrder[a.type] - channelOrder[b.type];
            }
        });
        const summaryData = {
            status: "summary",
            newCount,
            takeoverCount,
            totalTypeCount: newCount + takeoverCount,
            totalCount: result.length,
            type
        };
        updateResultStatus(summaryData, `-> total ${newCount + takeoverCount}/${result.length} (${type}/Any) channels configured.\n\n`);
        updateResultStatus({ status: "summary_new", newCount }, `-> new ${newCount} channels found.\n`);
        updateResultStatus({ status: "summary_takeover", takeoverCount }, `-> existing ${takeoverCount} channels merged.\n`);
        if (!isCancellationRequested) {
            if (!dryRun) {
                await config.saveChannels(result);
                updatePhaseStatus({ status: "completed", saved: true }, "channel scan has been completed and saved successfully.\n");
                updateResultStatus({ status: "restart_required" }, "**RESTART REQUIRED** to apply changes.\n");
            }
            else {
                updatePhaseStatus({ status: "completed", dryRun: true }, "channel scan has been completed.\n\n-- dry run --\n");
            }
        }
        updateResultStatus({
            status: "final_result",
            result
        }, `Final result: ${result.length} channels\n`);
        return result;
    }
    finally {
        scanStatus.isScanning = false;
        isCancellationRequested = false;
    }
}
const get = async (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    api.responseJSON(res, scanStatus);
};
exports.get = get;
exports.get.apiDoc = {
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
const put = async (req, res) => {
    if (scanStatus.isScanning === true) {
        api.responseError(res, 409, "Already Scanning");
        return;
    }
    scanStatus.isScanning = true;
    const asyncMode = parseBooleanQuery(req.query.async) === true;
    const dryRun = parseBooleanQuery(req.query.dryRun) === true;
    const type = req.query.type;
    const refresh = parseBooleanQuery(req.query.refresh) === true;
    const space = req.query.space !== undefined ? Number(req.query.space) : undefined;
    if (space !== undefined && (!Number.isInteger(space) || space < 0)) {
        scanStatus.isScanning = false;
        api.responseError(res, 400, "Invalid tuner space: expected a non-negative integer");
        return;
    }
    const skipCh = String(req.query?.skipCh || "")
        .split(",")
        .filter(value => value.trim() !== "")
        .map(value => Number(value.trim()))
        .filter(value => Number.isInteger(value));
    const channelOptions = {
        type,
        startCh: parseOptionalNumberQuery(req.query.minCh),
        endCh: parseOptionalNumberQuery(req.query.maxCh),
        startSubCh: parseOptionalNumberQuery(req.query.minSubCh),
        endSubCh: parseOptionalNumberQuery(req.query.maxSubCh),
        useSubCh: parseBooleanQuery(req.query.useSubCh),
        channelNameFormat: req.query.channelNameFormat,
        scanMode: req.query.scanMode,
        setDisabledOnAdd: parseBooleanQuery(req.query.setDisabledOnAdd)
    };
    const scanConfig = generateScanConfig(channelOptions);
    if (!scanConfig || scanConfig.channels.length === 0) {
        scanStatus.isScanning = false;
        api.responseError(res, 400, "Invalid scan configuration: no channels to scan");
        return;
    }
    if (asyncMode) {
        res.status(202);
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
            status: "accepted",
            message: "Channel scan started in async mode"
        });
        res.end();
        runChannelScan(scanConfig, dryRun, type, refresh, null, skipCh, space)
            .catch(error => {
            console.error("Channel scan error:", error);
            scanStatus.status = "error";
            scanStatus.scanLog.push(`Error: ${String(error)}`);
            scanStatus.isScanning = false;
        });
        return;
    }
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200);
    req.setTimeout(1000 * 60 * 30);
    try {
        const logTextOutput = (textContent) => {
            res.write(textContent);
        };
        await runChannelScan(scanConfig, dryRun, type, refresh, logTextOutput, skipCh, space);
        res.end();
    }
    catch (error) {
        console.error("Channel scan error:", error);
        scanStatus.status = "error";
        scanStatus.scanLog.push(`Error: ${String(error)}`);
        res.write(`Error during scan: ${error}\n`);
        res.end();
        scanStatus.isScanning = false;
    }
};
exports.put = put;
exports.put.apiDoc = {
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
            enum: ["Channel", "Service"],
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
const del = async (req, res) => {
    if (!scanStatus.isScanning) {
        api.responseError(res, 404, "No scan in progress");
        return;
    }
    if (isCancellationRequested) {
        api.responseError(res, 409, "Already Stopping");
        return;
    }
    isCancellationRequested = true;
    scanStatus.status = "cancelled";
    scanStatus.scanLog.push("Scan cancellation requested by user.");
    res.status(206);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({
        status: "stopping",
        message: "Channel scan stop has been requested"
    });
};
exports.del = del;
exports.del.apiDoc = {
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
//# sourceMappingURL=scan.js.map