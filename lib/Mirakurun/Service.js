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
exports.Service = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const common_1 = require("./common");
const log = __importStar(require("./log"));
const db = __importStar(require("./db"));
const _1 = __importDefault(require("./_"));
const Event_1 = __importDefault(require("./Event"));
const ServiceItem_1 = __importDefault(require("./ServiceItem"));
const { LOGO_DATA_DIR_PATH } = process.env;
class Service {
    static getLogoDataPath(networkId, serviceId, logoId) {
        if (networkId === 4 || networkId === 6 || networkId === 7 || networkId > 60000) {
            return (0, path_1.join)(LOGO_DATA_DIR_PATH, `${networkId}_${serviceId}.png`);
        }
        if (typeof logoId !== "number" || logoId < 0) {
            throw new Error("Invalid `logoId`");
        }
        return (0, path_1.join)(LOGO_DATA_DIR_PATH, `${networkId}_${logoId}.png`);
    }
    static async getLogoDataMTime(networkId, serviceId, logoId) {
        if (typeof logoId !== "number" || logoId < -1) {
            return 0;
        }
        try {
            return (await (0, promises_1.stat)(Service.getLogoDataPath(networkId, serviceId, logoId))).mtimeMs;
        }
        catch (e) {
            return 0;
        }
    }
    static async isLogoDataExists(networkId, serviceId, logoId) {
        if (typeof logoId !== "number" || logoId < -1) {
            return false;
        }
        try {
            return (await (0, promises_1.stat)(Service.getLogoDataPath(networkId, serviceId, logoId))).isFile();
        }
        catch (e) {
            return false;
        }
    }
    static async loadLogoData(networkId, serviceId, logoId) {
        if (typeof logoId !== "number" || logoId < -1) {
            return null;
        }
        try {
            return await (0, promises_1.readFile)(Service.getLogoDataPath(networkId, serviceId, logoId));
        }
        catch (e) {
            return null;
        }
    }
    static async saveLogoData(networkId, serviceId, logoId, data, retrying = false) {
        log.info("Service.saveLogoData(): saving... (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);
        const path = Service.getLogoDataPath(networkId, serviceId, logoId);
        try {
            await (0, promises_1.writeFile)(path, data, { encoding: "binary" });
        }
        catch (e) {
            if (retrying === false) {
                const dirPath = (0, path_1.dirname)(path);
                if ((0, fs_1.existsSync)(dirPath) === false) {
                    log.warn("Service.saveLogoData(): making directory `%s`... (networkId=%d serviceId=%d logoId=%d)", dirPath, networkId, serviceId, logoId);
                    try {
                        await (0, promises_1.mkdir)(dirPath, { recursive: true });
                    }
                    catch (e) {
                        throw e;
                    }
                }
                log.warn("Service.saveLogoData(): retrying... (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);
                return this.saveLogoData(networkId, serviceId, logoId, data, true);
            }
            throw e;
        }
        log.info("Service.saveLogoData(): saved. (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);
    }
    _items = [];
    _saveTimerId;
    get items() {
        return this._items;
    }
    add(item) {
        if (this.get(item.id) !== null) {
            return;
        }
        this._items.push(item);
        Event_1.default.emit("service", "create", item.export());
        this.save();
    }
    get(id, serviceId) {
        if (serviceId === undefined) {
            const l = this._items.length;
            for (let i = 0; i < l; i++) {
                if (this._items[i].id === id) {
                    return this._items[i];
                }
            }
        }
        else {
            const l = this._items.length;
            for (let i = 0; i < l; i++) {
                if (this._items[i].networkId === id && this._items[i].serviceId === serviceId) {
                    return this._items[i];
                }
            }
        }
        return null;
    }
    exists(id, serviceId) {
        return this.get(id, serviceId) !== null;
    }
    findByChannel(channel) {
        const items = [];
        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            for (const channels of this._items[i].channel) {
                if (channels === channel) {
                    items.push(this._items[i]);
                }
            }
        }
        return items;
    }
    findByNetworkId(networkId) {
        const items = [];
        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            if (this._items[i].networkId === networkId) {
                items.push(this._items[i]);
            }
        }
        return items;
    }
    findByNetworkIdWithLogoId(networkId, logoId) {
        const items = [];
        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            if (this._items[i].networkId === networkId && this._items[i].logoId === logoId) {
                items.push(this._items[i]);
            }
        }
        return items;
    }
    save() {
        clearTimeout(this._saveTimerId);
        this._saveTimerId = setTimeout(() => this._save(), 1000 * 10);
    }
    async load() {
        log.debug("loading services...");
        let updated = false;
        const services = await db.loadServices(_1.default.configIntegrity.channels, true);
        for (const service of services) {
            const typelist = service.channel.map(ch => ch.type);
            const channellist = service.channel.map(ch => ch.channel);
            const channelItems = [];
            for (let i = 0; i < typelist.length; i++) {
                channelItems.push(_1.default.channel.get(typelist[i], channellist[i]));
            }
            if (channelItems.length <= 0) {
                updated = true;
                continue;
            }
            if (service.networkId === undefined || service.serviceId === undefined) {
                updated = true;
                continue;
            }
            if (service.logoData) {
                const logoDataPath = Service.getLogoDataPath(service.networkId, service.serviceId, service.logoId);
                log.warn("migrating deprecated property `logoData` to file `%s` in service#%d (%s) db", logoDataPath, service.id, service.name);
                Service.saveLogoData(service.networkId, service.serviceId, service.logoId, Buffer.from(service.logoData, "base64"));
                services.filter(s => s.networkId === service.networkId && s.serviceId === service.serviceId && s.logoId === service.logoId).forEach(s => {
                    delete s.logoData;
                });
                updated = true;
            }
            this.add(new ServiceItem_1.default(channelItems, service.networkId, service.serviceId, service.name, service.type, service.logoId, service.remoteControlKeyId, service.epgReady, service.epgUpdatedAt));
        }
        if (updated) {
            this.save();
        }
        setTimeout(() => this._initJobs(), 10000);
    }
    async _initJobs() {
        log.debug("init service jobs...");
        for (const channelConfig of _1.default.config.channels) {
            if (channelConfig.isDisabled || !channelConfig.serviceId) {
                continue;
            }
            const channel = _1.default.channel.get(channelConfig.type, channelConfig.channel);
            if (!channel) {
                continue;
            }
            const serviceId = channelConfig.serviceId;
            if (this.findByChannel(channel).some(service => service.serviceId === serviceId)) {
                continue;
            }
            this._queueCheckToAdd(channel, serviceId);
        }
        _1.default.job.add({
            key: "Service.Add.Scan.Find-Channels",
            name: "Service Add Scan [Find Targets]",
            fn: async () => {
                for (const channel of _1.default.channel.items) {
                    if (this.findByChannel(channel).length > 0) {
                        continue;
                    }
                    this._queueScanToAdd(channel);
                }
            },
            readyFn: async () => {
                while (true) {
                    if (_1.default.job.jobs.some(job => job.status !== "finished" && job.key.includes("Service.Add.Check."))) {
                        await (0, common_1.sleep)(1000);
                        continue;
                    }
                    return true;
                }
            }
        });
        _1.default.job.add({
            key: "Service.Updater.Add-Schedule",
            name: "Service Updater [Add Schedule]",
            fn: async () => {
                _1.default.job.addSchedule({
                    key: "Service.Updater",
                    schedule: "5 6 * * *",
                    job: {
                        key: "Service.Updater",
                        name: "Service Updater",
                        fn: async () => {
                            for (const channel of _1.default.channel.items) {
                                if (this.findByChannel(channel).length === 0) {
                                    continue;
                                }
                                this._queueScanToUpdate(channel);
                            }
                        }
                    }
                });
            }
        });
    }
    _save() {
        log.debug("saving services...");
        db.saveServices(this._items.map(service => service.export()), _1.default.configIntegrity.channels);
    }
    _queueCheckToAdd(channel, serviceId) {
        _1.default.job.add({
            key: `Service.Add.Check.${channel.type}.${channel.channel}.${serviceId}`,
            name: `Service Add Check ${channel.type}/${channel.channel}/${serviceId}`,
            fn: () => this._checkToAdd(channel, serviceId),
            readyFn: () => _1.default.tuner.readyForJob([channel]),
            retryOnFail: true,
            retryMax: (1000 * 60 * 60 * 12) / (1000 * 60 * 3),
            retryDelay: 1000 * 60 * 3
        });
    }
    _queueScanToAdd(channel) {
        _1.default.job.add({
            key: `Service.Add.Scan.${channel.type}.${channel.channel}`,
            name: `Service Add Scan ${channel.type}/${channel.channel}`,
            fn: async () => this._scan(channel, true),
            readyFn: () => _1.default.tuner.readyForJob([channel]),
            retryOnFail: true,
            retryMax: (1000 * 60 * 60 * 12) / (1000 * 60 * 3),
            retryDelay: 1000 * 60 * 3
        });
    }
    _queueScanToUpdate(channel) {
        _1.default.job.add({
            key: `Service.Update.Scan.${channel.type}.${channel.channel}`,
            name: `Service Update Scan ${channel.type}/${channel.channel}`,
            fn: async () => this._scan(channel, false),
            readyFn: () => _1.default.tuner.readyForJob([channel])
        });
    }
    async _checkToAdd(channel, serviceId) {
        log.info("ChannelItem#'%s' serviceId=%d check has started", channel.name, serviceId);
        let services;
        try {
            services = await _1.default.tuner.getServices([channel]);
        }
        catch (e) {
            log.warn("ChannelItem#'%s' serviceId=%d check has failed [%s]", channel.name, serviceId, e);
            throw new Error("Service check failed");
        }
        const service = services.find(service => service.serviceId === serviceId);
        if (!service) {
            log.warn("ChannelItem#'%s' serviceId=%d check has failed [no service]", channel.name, serviceId);
            setTimeout(() => this._queueCheckToAdd(channel, serviceId), 3600000);
            return;
        }
        log.debug("ChannelItem#'%s' serviceId=%d: %s", channel.name, serviceId, JSON.stringify(service, null, "  "));
        this.add(new ServiceItem_1.default([channel], service.networkId, service.serviceId, service.name, service.type, service.logoId));
        log.info("ChannelItem#'%s' serviceId=%d check has finished", channel.name, serviceId);
    }
    async _scan(channel, add) {
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
        log.info("ChannelItem#'%s' service scan has started", channel.name);
        let services;
        try {
            services = await _1.default.tuner.getServices([channel]);
        }
        catch (e) {
            log.warn("ChannelItem#'%s' service scan has failed [%s]", channel.name, e);
            throw new Error("Service scan failed");
        }
        log.debug("ChannelItem#'%s' services: %s", channel.name, JSON.stringify(services, null, "  "));
        services.forEach(service => {
            const item = this.get(service.networkId, service.serviceId);
            if (item !== null) {
                item.name = service.name;
                item.type = service.type;
                if (service.logoId > -1) {
                    item.logoId = service.logoId;
                }
                item.remoteControlKeyId = service.remoteControlKeyId;
                for (let i = item.channel.length - 1; i >= 0; i--) {
                    if (item.channel[i].type === channel.type) {
                        item.channel.splice(i, 1);
                    }
                }
                item.channel.push(channel);
                item.channel.sort((a, b) => channelOrder[a.type] - channelOrder[b.type]);
            }
            else if (add === true) {
                this.add(new ServiceItem_1.default([channel], service.networkId, service.serviceId, service.name, service.type, service.logoId, service.remoteControlKeyId));
            }
        });
        log.info("ChannelItem#'%s' service scan has finished", channel.name);
    }
}
exports.Service = Service;
exports.default = Service;
//# sourceMappingURL=Service.js.map