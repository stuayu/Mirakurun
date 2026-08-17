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
exports.Tuner = void 0;
const common = __importStar(require("./common"));
const log = __importStar(require("./log"));
const _1 = __importDefault(require("./_"));
const TunerDevice_1 = __importDefault(require("./TunerDevice"));
const TSFilter_1 = __importDefault(require("./TSFilter"));
const TSDecoder_1 = __importDefault(require("./TSDecoder"));
const SERVICE_SCAN_TIMEOUT = 1000 * 20;
const SERVICE_SCAN_TIMEOUT_4K = 1000 * 40;
const CHANNEL_TYPES_4K = ["BS4K", "CS4K"];
function getServiceScanTimeout(channel) {
    if (typeof _1.default.config.server.serviceScanTimeout === "number") {
        return _1.default.config.server.serviceScanTimeout;
    }
    if (channel.some(ch => CHANNEL_TYPES_4K.includes(ch.type))) {
        return SERVICE_SCAN_TIMEOUT_4K;
    }
    return SERVICE_SCAN_TIMEOUT;
}
class Tuner {
    _devices = [];
    _readyForJobPickedDeviceSet = new Set();
    constructor() {
        this._load();
    }
    get devices() {
        return this._devices.map(device => device.toJSON());
    }
    get(index) {
        const l = this._devices.length;
        for (let i = 0; i < l; i++) {
            if (this._devices[i].index === index) {
                return this._devices[i];
            }
        }
        return null;
    }
    async readyForJob(channel) {
        const devices = [];
        const channels = [];
        for (const ch of channel) {
            const device = this._getDevicesByType(ch.type);
            for (let index = 0; index < device.length; index++) {
                devices.push(device[index]);
                channels.push(ch);
            }
        }
        if (devices.length === 0) {
            log.error("readyForJob: no tuners for channel type: %s", channels);
            return false;
        }
        while (true) {
            const pickableIndices = devices
                .map((device, index) => ({ device, index }))
                .filter(item => !this._readyForJobPickedDeviceSet.has(item.device))
                .map(item => item.index);
            const pickableDevices = pickableIndices.map(index => devices[index]);
            const pickableChannels = pickableIndices.map(index => channels[index]);
            if (pickableDevices.length === 0) {
                log.debug("readyForJob: no pickable tuners for channel type: %s", channels);
                await common.sleep(1000 * 10);
                continue;
            }
            const device = this._pickTunerDevice(pickableDevices, pickableChannels, -1);
            if (device === null) {
                await common.sleep(1000 * 10);
                continue;
            }
            this._readyForJobPickedDeviceSet.add(device[0]);
            log.debug("readyForJob: picked device: #%d (%s)", device[0].index, device[0].config.name);
            setTimeout(() => {
                this._readyForJobPickedDeviceSet.delete(device[0]);
                log.debug("readyForJob: released device: #%d (%s)", device[0].index, device[0].config.name);
            }, 1000 * 5);
            return true;
        }
    }
    typeExists(type) {
        const l = this._devices.length;
        for (let i = 0; i < l; i++) {
            if (this._devices[i].config.types.includes(type) === true) {
                return true;
            }
        }
        return false;
    }
    initChannelStream(channel, userReq, output) {
        let networkId;
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
    initServiceStream(service, userReq, output) {
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
    initProgramStream(program, userReq, output) {
        return this._initTS({
            ...userReq,
            streamSetting: {
                channel: _1.default.service.get(program.networkId, program.serviceId).channel,
                serviceId: program.serviceId,
                eventId: program.eventId,
                networkId: program.networkId,
                parseEIT: true
            }
        }, output);
    }
    async getEPG(channel, time) {
        let timeout;
        if (!time) {
            time = _1.default.config.server.epgRetrievalTime || 1000 * 60 * 10;
        }
        let networkId;
        let services = [];
        for (const ch of channel) {
            services.push(...ch.getServices());
        }
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
        return new Promise((resolve) => {
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
    async getServices(channel, user = {}) {
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
        return new Promise((resolve, reject) => {
            let network = {
                networkId: -1,
                areaCode: -1,
                remoteControlKeyId: -1
            };
            let services = null;
            let settled = false;
            let timeout;
            const onNetwork = (_network) => {
                network = _network;
                finishIfReady();
            };
            const onServices = (_services) => {
                if (_services.length > 0) {
                    services = _services;
                    finishIfReady();
                }
            };
            const cleanup = () => {
                clearTimeout(timeout);
                tsFilter.removeListener("network", onNetwork);
                tsFilter.removeListener("services", onServices);
                tsFilter.removeListener("close", onClose);
            };
            const onClose = () => {
                if (settled) {
                    return;
                }
                settled = true;
                cleanup();
                if (network.networkId === -1) {
                    reject(new Error("stream has closed before get network"));
                }
                else {
                    reject(new Error("stream has closed before get services"));
                }
            };
            const finishIfReady = () => {
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
    _load() {
        log.debug("loading tuners...");
        const tuners = _1.default.config.tuners;
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
            this._devices.push(new TunerDevice_1.default(i, tuner));
        });
        log.info("%s of %s tuners loaded", this._devices.length, tuners.length);
        return this;
    }
    async _initTS(user, dest) {
        const setting = user.streamSetting;
        if (_1.default.config.server.disableEITParsing === true) {
            setting.parseEIT = false;
        }
        const devices = [];
        const channels = [];
        for (const ch of setting.channel) {
            const device = this._getDevicesByType(ch.type);
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
                tryCount--;
                if (tryCount <= 0) {
                    throw new Error("no available tuners");
                }
                await new Promise(resolve => setTimeout(resolve, 250));
            }
            else {
                let output;
                if (user.disableDecoder === true || device[0].decoder === null) {
                    output = dest;
                }
                else {
                    output = new TSDecoder_1.default({
                        output: dest,
                        command: device[0].decoder
                    });
                }
                const tsFilter = new TSFilter_1.default({
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
                }
                catch (err) {
                    tsFilter.end();
                    throw err;
                }
            }
        }
    }
    async _useRemoteData(user, devices) {
        const setting = user.streamSetting;
        const remoteDevice = devices.find(device => device.isRemote);
        if (remoteDevice && setting.networkId !== undefined && setting.parseEIT === true) {
            try {
                const programs = await remoteDevice.getRemotePrograms({ networkId: setting.networkId });
                await common.sleep(1000);
                _1.default.program.findByNetworkIdAndReplace(setting.networkId, programs);
                for (const service of _1.default.service.findByNetworkId(setting.networkId)) {
                    service.epgReady = true;
                }
                await common.sleep(1000);
                return true;
            }
            catch (err) {
                throw err;
            }
        }
        return false;
    }
    _pickTunerDevice(devices, channels, priority) {
        if (channels.length === 0) {
            console.warn("チャンネルリストが空のため、デバイスを選択できませんでした。");
            return null;
        }
        let selectedDevice = null;
        let selectedChannel = null;
        for (const device of devices) {
            if (device.channel && device.isAvailable) {
                const matchedChannel = channels.find(ch => ch === device.channel);
                if (matchedChannel) {
                    selectedDevice = device;
                    selectedChannel = matchedChannel;
                    log.debug(`Found existing device ${selectedDevice.config.name} for channel ${selectedChannel.channel}`);
                    break;
                }
            }
        }
        if (selectedDevice === null) {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].isFree === true) {
                    selectedDevice = devices[i];
                    selectedChannel = channels[i];
                    log.debug(`Found free device ${selectedDevice.config.name} for new channel ${selectedChannel.channel}`);
                    break;
                }
            }
        }
        if (selectedDevice === null) {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].isAvailable === true && devices[i].users.length === 0) {
                    selectedDevice = devices[i];
                    selectedChannel = channels[i];
                    log.debug(`Found idle device ${selectedDevice.config.name} to replace for channel ${selectedChannel.channel}`);
                    break;
                }
            }
        }
        if (selectedDevice === null && priority >= 0) {
            const tmp = [];
            const sortedDevices = [...devices].sort((t1, t2) => {
                const diff = t1.getPriority() - t2.getPriority();
                tmp.push(diff);
                return diff;
            });
            const sortedChannels = [...channels].sort(() => {
                return tmp.shift();
            });
            for (let i = 0; i < sortedDevices.length; i++) {
                if (sortedDevices[i].isUsing === true && sortedDevices[i].getPriority() < priority) {
                    selectedDevice = sortedDevices[i];
                    selectedChannel = sortedChannels[i];
                    log.debug(`Taking over lower priority device ${selectedDevice.config.name} (priority ${selectedDevice.getPriority()}) for channel ${selectedChannel.channel} (request priority ${priority})`);
                    break;
                }
            }
        }
        if (selectedDevice && selectedChannel) {
            return [selectedDevice, selectedChannel];
        }
        else {
            return null;
        }
    }
    _getDevicesByType(type) {
        const devices = [];
        for (const device of this._devices) {
            if (device.config.types.includes(type) === true) {
                devices.push(device);
            }
        }
        return devices;
    }
}
exports.Tuner = Tuner;
exports.default = Tuner;
//# sourceMappingURL=Tuner.js.map
