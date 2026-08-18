/*
   Copyright 2016 kanreisa

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
import { Writable } from "stream";
import * as common from "./common";
import * as log from "./log";
import * as apid from "../../api";
import _ from "./_";
import TunerDevice, { TunerDeviceStatus } from "./TunerDevice";
import ChannelItem from "./ChannelItem";
import ServiceItem from "./ServiceItem";
import TSFilter from "./TSFilter";
import TSDecoder from "./TSDecoder";
import { waitForReadyTuner } from "./tunerRetry";

/** サービススキャンの既定タイムアウト (ms) */
const SERVICE_SCAN_TIMEOUT = 1000 * 20;

/**
 * 新4K8K衛星放送 (MMT/TLV) の既定タイムアウト (ms)
 * MMT/TLV を MPEG-2 TS へ変換するフロントエンド (dantto4k 等) は選局に 15〜20 秒かかることがあり、
 * 既定の 20 秒ではサービス情報を取得しきれずスキャンが失敗する。
 */
const SERVICE_SCAN_TIMEOUT_4K = 1000 * 40;

/** 新4K8K衛星放送のチャンネル種別 */
const CHANNEL_TYPES_4K: apid.ChannelType[] = ["BS4K", "CS4K"];

/**
 * サービススキャンのタイムアウトを決める
 *
 * @param channel 対象チャンネル
 * @return タイムアウト (ms)
 */
function getServiceScanTimeout(channel: ChannelItem[]): number {
    if (typeof _.config.server.serviceScanTimeout === "number") {
        return _.config.server.serviceScanTimeout;
    }

    if (channel.some(ch => CHANNEL_TYPES_4K.includes(ch.type))) {
        return SERVICE_SCAN_TIMEOUT_4K;
    }

    return SERVICE_SCAN_TIMEOUT;
}

export class Tuner {
    private _devices: TunerDevice[] = [];
    private _readyForJobPickedDeviceSet: Set<TunerDevice> = new Set();

    constructor() {
        this._load();
    }

    get devices(): TunerDeviceStatus[] {
        return this._devices.map(device => device.toJSON());
    }

    get(index: number): TunerDevice {
        const l = this._devices.length;
        for (let i = 0; i < l; i++) {
            if (this._devices[i].index === index) {
                return this._devices[i];
            }
        }

        return null;
    }

    /**
     * readyFn
     */
    async readyForJob(channel: ChannelItem[]): Promise<boolean> {
        /**
         * チューナーグループとチャンネルの組み合わせが渡される
         * 想定としては次のように同一チャンネルが映るチューナー情報が渡される
         * {type: GR, channel: 0}{type: NW1, channel: 17}
         * ループを回し、GR側が利用中や利用不可の時にNW1側のチューナーを利用する
         */
        const devices: TunerDevice[] = []; // チューナーデバイスを格納
        const channels: ChannelItem[] = []; // チャンネル情報を格納

        for (const ch of channel) {
            const device = this._getDevicesByType(ch.type);
            // チューナーと同じ数チャンネル情報を複製
            for (let index = 0; index < device.length; index++) {
                devices.push(device[index]);
                channels.push(ch);
            }
        }

        if (devices.length === 0) {
            log.error("readyForJob: no tuners for channel type: %s", channels);
            return false;
        }

        const selected = await waitForReadyTuner(() => {
            // Keep each tuner paired with the channel it represents. Filtering
            // only the devices shifts the parallel channels array when a
            // tuner is already reserved, which can make us tune the wrong
            // channel on shared tuner configurations.
            const pickableIndices = devices
                .map((device, index) => ({ device, index }))
                .filter(item => !this._readyForJobPickedDeviceSet.has(item.device))
                .map(item => item.index);
            const pickableDevices = pickableIndices.map(index => devices[index]);
            const pickableChannels = pickableIndices.map(index => channels[index]);
            if (pickableDevices.length === 0) {
                log.debug("readyForJob: no pickable tuners for channel type: %s", channels);
                return null;
            }
            return this._pickTunerDevice(pickableDevices, pickableChannels, -1);
        }, common.sleep);

        if (selected === null) {
            log.warn("readyForJob: timed out waiting for a tuner for channels: %s", channels);
            return false;
        }

        // pick したチューナーを少し保持する
        this._readyForJobPickedDeviceSet.add(selected[0]);
        log.debug("readyForJob: picked device: #%d (%s)", selected[0].index, selected[0].config.name);

        setTimeout(() => {
            // 開放
            this._readyForJobPickedDeviceSet.delete(selected[0]);
            log.debug("readyForJob: released device: #%d (%s)", selected[0].index, selected[0].config.name);
        }, 1000 * 5);

        return true;
    }

    typeExists(type: apid.ChannelType): boolean {
        const l = this._devices.length;
        for (let i = 0; i < l; i++) {
            if (this._devices[i].config.types.includes(type) === true) {
                return true;
            }
        }

        return false;
    }

    initChannelStream(channel: ChannelItem[], userReq: common.UserRequest, output: Writable): Promise<TSFilter> {
        let networkId: number;

        const services = channel[0].getServices();
        if (services.length !== 0) {
            networkId = services[0].networkId;
        }

        return this._initTS({
            ...userReq,
            streamSetting: {
                channel: channel,
                networkId,
                parseEIT: true
            }
        }, output);
    }

    initServiceStream(service: ServiceItem, userReq: common.UserRequest, output: Writable): Promise<TSFilter> {
        return this._initTS({
            ...userReq,
            streamSetting: {
                channel: service.channel,
                serviceId: service.serviceId,
                networkId: service.networkId,
                parseEIT: true
            }
        }, output);
    }

    initProgramStream(program: apid.Program, userReq: common.UserRequest, output: Writable): Promise<TSFilter> {
        return this._initTS({
            ...userReq,
            streamSetting: {
                channel: _.service.get(program.networkId, program.serviceId).channel,
                serviceId: program.serviceId,
                eventId: program.eventId,
                networkId: program.networkId,
                parseEIT: true
            }
        }, output);
    }

    async getEPG(channel: ChannelItem[], time?: number): Promise<void> {
        let timeout: NodeJS.Timeout;
        if (!time) {
            time = _.config.server.epgRetrievalTime || 1000 * 60 * 10;
        }

        let networkId: number;
        let services: apid.Service[] = [];

        // 渡されてきたチャンネル情報から、最初のチャンネルのサービス情報を取得(どの場所でも同じサービス情報が取得できる)
        for (const ch of channel) {
            services.push(...ch.getServices());
        }
        // 重複を排除
        services = [...new Set(services)];

        if (services.length === 0) {
            throw new Error("no available services in channel");
        }

        networkId = services[0].networkId;

        const tsFilter = await this._initTS({
            id: "Mirakurun:getEPG()",
            priority: -1,
            disableDecoder: true,
            streamSetting: {
                channel: channel,
                networkId,
                parseEIT: true
            }
        });

        if (tsFilter === null) {
            return;
        }

        return new Promise<void>((resolve) => {
            const fin = () => {
                clearTimeout(timeout);
                tsFilter.close();
            };
            timeout = setTimeout(fin, time);
            tsFilter.once("epgReady", fin);
            tsFilter.once("close", () => {
                fin();
                resolve();
            });
        });
    }

    async getServices(channel: ChannelItem[], user: Partial<common.User> = {}): Promise<apid.Service[]> {
        const tsFilter = await this._initTS({
            id: "Mirakurun:getServices()",
            priority: -1,
            disableDecoder: true,
            streamSetting: {
                channel: channel,
                parseNIT: true,
                parseSDT: true
            },
            ...user
        });
        return new Promise<apid.Service[]>((resolve, reject) => {
            let network = {
                networkId: -1,
                areaCode: -1,
                remoteControlKeyId: -1
            };
            let services: apid.Service[] = null;

            let settled = false;
            let timeout: NodeJS.Timeout;

            const onNetwork = (_network: typeof network): void => {
                network = _network;
                finishIfReady();
            };

            const onServices = (_services: apid.Service[]): void => {
                // EDCB keeps waiting after an empty service-list notification.
                // A tuner can emit SDT before channel switching has completed.
                if (_services.length > 0) {
                    services = _services;
                    finishIfReady();
                }
            };

            const cleanup = (): void => {
                clearTimeout(timeout);
                tsFilter.removeListener("network", onNetwork);
                tsFilter.removeListener("services", onServices);
                tsFilter.removeListener("close", onClose);
            };

            const onClose = (): void => {
                if (settled) {
                    return;
                }
                settled = true;
                cleanup();

                if (network.networkId === -1) {
                    reject(new Error("stream has closed before get network"));
                } else {
                    reject(new Error("stream has closed before get services"));
                }
            };

            const finishIfReady = (): void => {
                if (settled || network.networkId === -1 || services === null || services.length === 0) {
                    return;
                }

                settled = true;
                cleanup();
                if (network.remoteControlKeyId !== -1) {
                    services.forEach(service => {
                        service.remoteControlKeyId = network.remoteControlKeyId;
                    });
                }
                tsFilter.close();
                resolve(services);
            };

            tsFilter.on("network", onNetwork);
            tsFilter.on("services", onServices);
            tsFilter.once("close", onClose);
            timeout = setTimeout(() => tsFilter.close(), getServiceScanTimeout(channel));
        });
    }

    private _load(): this {
        log.debug("loading tuners...");

        const tuners = _.config.tuners;

        tuners.forEach((tuner, i) => {
            if (!tuner.name || !tuner.types || (!tuner.remoteMirakurunHost && !tuner.command)) {
                log.error("missing required property in tuner#%s configuration", i);
                return;
            }

            if (typeof tuner.name !== "string") {
                log.error("invalid type of property `name` in tuner#%s configuration", i);
                return;
            }

            if (Array.isArray(tuner.types) === false) {
                log.debug(tuner);
                log.error("invalid type of property `types` in tuner#%s configuration", i);
                return;
            }

            if (!tuner.remoteMirakurunHost && typeof tuner.command !== "string") {
                log.error("invalid type of property `command` in tuner#%s configuration", i);
                return;
            }

            if (tuner.dvbDevicePath && typeof tuner.dvbDevicePath !== "string") {
                log.error("invalid type of property `dvbDevicePath` in tuner#%s configuration", i);
                return;
            }

            if (tuner.remoteMirakurunHost && typeof tuner.remoteMirakurunHost !== "string") {
                log.error("invalid type of property `remoteMirakurunHost` in tuner#%s configuration", i);
                return;
            }

            if (tuner.remoteMirakurunPort && Number.isInteger(tuner.remoteMirakurunPort) === false) {
                log.error("invalid type of property `remoteMirakurunPort` in tuner#%s configuration", i);
                return;
            }

            if (tuner.remoteMirakurunDecoder !== undefined && typeof tuner.remoteMirakurunDecoder !== "boolean") {
                log.error("invalid type of property `remoteMirakurunDecoder` in tuner#%s configuration", i);
                return;
            }

            if (tuner.isDisabled) {
                return;
            }

            this._devices.push(
                new TunerDevice(i, tuner)
            );
        });

        log.info("%s of %s tuners loaded", this._devices.length, tuners.length);

        return this;
    }

    private async _initTS(user: common.User, dest?: Writable): Promise<TSFilter | null> {
        const setting = user.streamSetting;

        if (_.config.server.disableEITParsing === true) {
            setting.parseEIT = false;
        }

        /**
         * チューナーグループとチャンネルの組み合わせが渡される
         * 想定としては次のように同一チャンネルが映るチューナー情報が渡される
         * {type: GR, channel: 0}{type: NW1, channel: 17}
         * ループを回し、GR側が利用中や利用不可の時にNW1側のチューナーを利用する
         */
        const devices: TunerDevice[] = []; // チューナーデバイスを格納
        const channels: ChannelItem[] = []; // チャンネル情報を格納

        for (const ch of setting.channel) {
            const device = this._getDevicesByType(ch.type);
            // チューナーと同じ数チャンネル情報を複製
            for (let index = 0; index < device.length; index++) {
                devices.push(device[index]);
                channels.push(ch);
            }
        }
        let tryCount = 10;

        if (!dest) {
            const remoteResult = await this._useRemoteData(user, devices);
            if (remoteResult) {
                return null;
            }
        }

        while (tryCount > 0) {
            const device = this._pickTunerDevice(devices, channels, user.priority);

            if (device === null) {
                // retry
                tryCount--;
                if (tryCount <= 0) {
                    throw new Error("no available tuners");
                }
                await new Promise(resolve => setTimeout(resolve, 250));
            } else {
                // found
                let output: Writable;
                if (user.disableDecoder === true || device[0].decoder === null) {
                    output = dest;
                } else {
                    output = new TSDecoder({
                        output: dest,
                        command: device[0].decoder
                    });
                }

                const tsFilter = new TSFilter({
                    output,
                    networkId: setting.networkId,
                    serviceId: setting.serviceId,
                    eventId: setting.eventId,
                    parseNIT: setting.parseNIT,
                    parseSDT: setting.parseSDT,
                    parseEIT: setting.parseEIT,
                    tsmfRelTs: device[1].tsmfRelTs
                });

                Object.defineProperty(user, "streamInfo", {
                    get: () => tsFilter.streamInfo
                });

                try {
                    await device[0].startStream(user, tsFilter, device[1]);
                    return tsFilter;
                } catch (err) {
                    tsFilter.end();
                    throw err;
                }
            }
        }
    }

    /**
     * リモートデータ利用 (EPG)
     */
    private async _useRemoteData(
        user: common.User,
        devices: TunerDevice[]
    ): Promise<boolean> {
        const setting = user.streamSetting;

        const remoteDevice = devices.find(device => device.isRemote);
        if (remoteDevice && setting.networkId !== undefined && setting.parseEIT === true) {
            try {
                const programs = await remoteDevice.getRemotePrograms({ networkId: setting.networkId });
                await common.sleep(1000);
                _.program.findByNetworkIdAndReplace(setting.networkId, programs);
                for (const service of _.service.findByNetworkId(setting.networkId)) {
                    service.epgReady = true;
                }
                await common.sleep(1000);
                return true;
            } catch (err) {
                throw err;
            }
        }

        return false;
    }

/**
 * 最適なチューナーデバイスを選択する
 *
 * @param devices 利用可能なチューナーデバイスのリスト
 * @param channels チューニングしたいチャンネルのリスト
 * @param priority このリクエストの優先度
 * @returns 選択されたチューナーデバイスとチューニングするチャンネルのタプル、または null
 */
private _pickTunerDevice(
    devices: TunerDevice[],
    channels: ChannelItem[],
    priority: number // user.priority の代わり
): [TunerDevice, ChannelItem] | null {

    // チャンネルリストが空なら何も選択できない
    if (channels.length === 0) {
        console.warn("チャンネルリストが空のため、デバイスを選択できませんでした。");
        return null;
    }

    // --- 選択ロジック開始 ---
    let selectedDevice: TunerDevice | null = null;
    let selectedChannel: ChannelItem | null = null;

    // 1. join to existing: 既に目的のチャンネルに合っているデバイスを探す
    for (const device of devices) {
        // device.channel が null でなく、かつ channels 配列内に存在するかチェック
        if (device.channel && device.isAvailable /* または isUsing? */) {
            const matchedChannel = channels.find(ch => ch === device.channel); // id などで比較
            if (matchedChannel) {
                selectedDevice = device;
                selectedChannel = matchedChannel;
                log.debug(`Found existing device ${selectedDevice.config.name} for channel ${selectedChannel.channel}`);
                break; // 見つかったらループを抜ける
            }
        }
    }

    // 2. start as new: 完全に空いているデバイスを探す
    if (selectedDevice === null) {
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].isFree === true) {
                selectedDevice = devices[i];
                selectedChannel = channels[i];
                log.debug(`Found free device ${selectedDevice.config.name} for new channel ${selectedChannel.channel}`);
                break; // 見つかったらループを抜ける
            }
        }
    }

    // 3. replace existing: チューニング済みだが誰も使っていないデバイスを探す
    if (selectedDevice === null) {
        for (let i = 0; i < devices.length; i++) {
            // isAvailable が true で、かつ users が空の場合
            if (devices[i].isAvailable === true && devices[i].users.length === 0) {
                selectedDevice = devices[i];
                selectedChannel = channels[i];
                log.debug(`Found idle device ${selectedDevice.config.name} to replace for channel ${selectedChannel.channel}`);
                break; // 見つかったらループを抜ける
            }
        }
    }

    // 4. takeover existing: 使用中だが優先度が低いデバイスを乗っ取る
    if (selectedDevice === null && priority >= 0) { // priority が負でない場合のみ乗っ取り
        // Keep the device and its channel paired while sorting. Sorting the two
        // arrays independently can tune a shared tuner to another route's channel.
        const sortedCandidates = devices
            .map((device, index) => ({ device, channel: channels[index] }))
            .sort((a, b) => a.device.getPriority() - b.device.getPriority());

        for (const candidate of sortedCandidates) {
            // isUsing で、かつ現在の優先度がリクエストの優先度より低い場合
            if (candidate.device.isUsing === true && candidate.device.getPriority() < priority) {
                selectedDevice = candidate.device;
                selectedChannel = candidate.channel;
                log.debug(`Taking over lower priority device ${selectedDevice.config.name} (priority ${selectedDevice.getPriority()}) for channel ${selectedChannel.channel} (request priority ${priority})`);
                break; // 見つかったらループを抜ける
            }
        }
    }

    // --- 結果を返す ---
    if (selectedDevice && selectedChannel) {
        return [selectedDevice, selectedChannel];
    } else {
        // log.debug("利用可能なチューナーデバイスが見つかりませんでした（指定された優先順位内）。");
        return null;
    }
}
    private _getDevicesByType(type: apid.ChannelType): TunerDevice[] {
        const devices = [];

        for (const device of this._devices) {
            if (device.config.types.includes(type) === true) {
                devices.push(device);
            }
        }

        return devices;
    }
}

export default Tuner;
