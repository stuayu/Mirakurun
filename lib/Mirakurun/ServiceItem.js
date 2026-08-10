"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./_"));
const Event_1 = __importDefault(require("./Event"));
class ServiceItem {
    _channel;
    _networkId;
    _serviceId;
    _name;
    _type;
    _logoId;
    _remoteControlKeyId;
    _epgReady;
    _epgUpdatedAt;
    static getId(networkId, serviceId) {
        return parseInt(networkId + (serviceId / 100000).toFixed(5).slice(2), 10);
    }
    _id;
    constructor(_channel, _networkId, _serviceId, _name, _type, _logoId, _remoteControlKeyId, _epgReady = false, _epgUpdatedAt = 0) {
        this._channel = _channel;
        this._networkId = _networkId;
        this._serviceId = _serviceId;
        this._name = _name;
        this._type = _type;
        this._logoId = _logoId;
        this._remoteControlKeyId = _remoteControlKeyId;
        this._epgReady = _epgReady;
        this._epgUpdatedAt = _epgUpdatedAt;
        this._id = ServiceItem.getId(_networkId, _serviceId);
    }
    get id() {
        return this._id;
    }
    get networkId() {
        return this._networkId;
    }
    get serviceId() {
        return this._serviceId;
    }
    get name() {
        return this._name || "";
    }
    set name(name) {
        if (this._name !== name) {
            this._name = name;
            _1.default.service.save();
            this._updated();
        }
    }
    get type() {
        return this._type;
    }
    set type(type) {
        if (this._type !== type) {
            this._type = type;
            _1.default.service.save();
            this._updated();
        }
    }
    get logoId() {
        return this._logoId;
    }
    set logoId(logoId) {
        if (this._logoId !== logoId) {
            this._logoId = logoId;
            _1.default.service.save();
            this._updated();
        }
    }
    get remoteControlKeyId() {
        return this._remoteControlKeyId;
    }
    set remoteControlKeyId(id) {
        if (this._remoteControlKeyId !== id) {
            this._remoteControlKeyId = id;
            _1.default.service.save();
            this._updated();
        }
    }
    get epgReady() {
        return this._epgReady;
    }
    set epgReady(epgReady) {
        if (this._epgReady !== epgReady) {
            this._epgReady = epgReady;
            _1.default.service.save();
            this._updated();
        }
    }
    get epgUpdatedAt() {
        return this._epgUpdatedAt;
    }
    set epgUpdatedAt(time) {
        if (this._epgUpdatedAt !== time) {
            this._epgUpdatedAt = time;
            _1.default.service.save();
            this._updated();
        }
    }
    get channel() {
        return this._channel;
    }
    export() {
        const ret = {
            id: this._id,
            serviceId: this._serviceId,
            networkId: this._networkId,
            name: this._name || "",
            type: this._type,
            logoId: this._logoId,
            remoteControlKeyId: this._remoteControlKeyId,
            epgReady: this._epgReady,
            epgUpdatedAt: this._epgUpdatedAt,
            channel: this._channel
        };
        return ret;
    }
    getStream(userRequest, output) {
        return _1.default.tuner.initServiceStream(this, userRequest, output);
    }
    getOrder() {
        let order;
        switch (this._channel[0].type) {
            case "GR":
                order = "1";
                break;
            case "BS":
                order = "2";
                break;
            case "CS":
                order = "3";
                break;
            case "SKY":
                order = "4";
                break;
            case "NW1":
                order = "5";
                break;
            case "NW2":
                order = "6";
                break;
            case "NW3":
                order = "7";
                break;
            case "NW4":
                order = "8";
                break;
            case "NW5":
                order = "9";
                break;
            case "NW6":
                order = "10";
                break;
            case "NW7":
                order = "11";
                break;
            case "NW8":
                order = "12";
                break;
            case "NW9":
                order = "13";
                break;
            case "NW10":
                order = "14";
                break;
            case "NW11":
                order = "15";
                break;
            case "NW12":
                order = "16";
                break;
            case "NW13":
                order = "17";
                break;
            case "NW14":
                order = "18";
                break;
            case "NW15":
                order = "19";
                break;
            case "NW16":
                order = "20";
                break;
            case "NW17":
                order = "21";
                break;
            case "NW18":
                order = "22";
                break;
            case "NW19":
                order = "23";
                break;
            case "NW20":
                order = "24";
                break;
            case "NW21":
                order = "25";
                break;
            case "NW22":
                order = "26";
                break;
            case "NW23":
                order = "27";
                break;
            case "NW24":
                order = "28";
                break;
            case "NW25":
                order = "29";
                break;
            case "NW26":
                order = "30";
                break;
            case "NW27":
                order = "31";
                break;
            case "NW28":
                order = "32";
                break;
            case "NW29":
                order = "33";
                break;
            case "NW30":
                order = "34";
                break;
            case "NW31":
                order = "35";
                break;
            case "NW32":
                order = "36";
                break;
            case "NW33":
                order = "37";
                break;
            case "NW34":
                order = "38";
                break;
            case "NW35":
                order = "39";
                break;
            case "NW36":
                order = "40";
                break;
            case "NW37":
                order = "41";
                break;
            case "NW38":
                order = "42";
                break;
            case "NW39":
                order = "43";
                break;
            case "NW40":
                order = "44";
                break;
            case "BS4K":
                order = "45";
                break;
            case "CS4K":
                order = "46";
                break;
        }
        order += this._remoteControlKeyId ? (100 + this._remoteControlKeyId).toString(10) : "200";
        order += (10000 + this._serviceId).toString(10);
        return parseInt(order, 10);
    }
    _updated() {
        Event_1.default.emit("service", "update", this.export());
    }
}
exports.default = ServiceItem;
//# sourceMappingURL=ServiceItem.js.map