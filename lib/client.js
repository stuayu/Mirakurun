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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ErrorResponse = void 0;
const fs = __importStar(require("fs"));
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const querystring = __importStar(require("querystring"));
const yaml = __importStar(require("js-yaml"));
const pkg = require("../package.json");
const spec = yaml.load(fs.readFileSync(__dirname + "/../api.yml", "utf8"));
class ErrorResponse {
    constructor(response) {
        this.status = response.status;
        this.statusText = response.statusText;
        this.contentType = response.contentType;
        this.headers = response.headers;
        this.isSuccess = response.isSuccess;
        this.body = response.body;
    }
}
exports.ErrorResponse = ErrorResponse;
class Client {
    basePath = spec.basePath;
    docsPath = "/docs";
    priority = 0;
    host = "";
    port = 40772;
    https = false;
    socketPath = process.platform === "win32" ? "\\\\.\\pipe\\mirakurun" : "/var/run/mirakurun.sock";
    agent;
    userAgent = "";
    _userAgent = `MirakurunClient/${pkg.version} Node/${process.version} (${process.platform})`;
    _docs;
    async getDocs() {
        if (!this._docs) {
            await this._getDocs();
        }
        return this._docs;
    }
    request(method, path, option = {}) {
        return new Promise((resolve, reject) => {
            this._httpRequest(method, path, option).then(res => {
                const ret = {
                    status: res.statusCode,
                    statusText: res.statusMessage,
                    contentType: res.headers["content-type"]?.split(";")[0] || "",
                    headers: res.headers,
                    isSuccess: (res.statusCode >= 200 && res.statusCode <= 202)
                };
                const chunks = [];
                res.on("data", chunk => chunks.push(chunk));
                res.on("end", () => {
                    const buffer = Buffer.concat(chunks);
                    if (ret.contentType === "application/json") {
                        ret.body = JSON.parse(buffer.toString("utf8"));
                    }
                    else if (ret.contentType === "text/plain") {
                        ret.body = buffer.toString("utf8");
                    }
                    else {
                        ret.body = buffer;
                    }
                    if (ret.isSuccess === true) {
                        resolve(ret);
                    }
                    else {
                        reject(ret);
                    }
                });
            }, err => {
                const ret = new ErrorResponse({
                    status: -1,
                    statusText: "Request Failure",
                    contentType: "",
                    headers: {},
                    isSuccess: false,
                    body: err
                });
                reject(ret);
            });
        });
    }
    async call(operationId, param = {}, option = {}) {
        if (!this._docs) {
            await this._getDocs();
        }
        let path;
        let method;
        let parameters;
        let operation;
        for (path in this._docs.paths) {
            const p = this._docs.paths[path];
            if (p.post?.operationId === operationId) {
                method = "POST";
                parameters = [...p.parameters, ...(p.post.parameters || [])];
                operation = p.post;
                break;
            }
            if (p.get?.operationId === operationId) {
                method = "GET";
                parameters = [...p.parameters, ...(p.get.parameters || [])];
                operation = p.get;
                break;
            }
            if (p.put?.operationId === operationId) {
                method = "PUT";
                parameters = [...p.parameters, ...(p.put.parameters || [])];
                operation = p.put;
                break;
            }
            if (p.delete?.operationId === operationId) {
                method = "DELETE";
                parameters = [...p.parameters, ...(p.delete.parameters || [])];
                operation = p.delete;
                break;
            }
        }
        if (!operation) {
            throw new Error(`operationId "${operationId}" is not found.`);
        }
        option = {
            headers: {},
            query: {},
            ...option
        };
        for (const p of parameters) {
            if (param[p.name] === undefined || param[p.name] === null) {
                if (p.required) {
                    throw new Error(`Required parameter "${p.name}" is undefined.`);
                }
                continue;
            }
            if (p.in === "path") {
                path = path.replace(`{${p.name}}`, param[p.name]);
            }
            else if (p.in === "header") {
                option.headers[p.name] = param[p.name];
            }
            else if (p.in === "query") {
                option.query[p.name] = param[p.name];
            }
            else if (p.in === "body" && p.name === "body") {
                option.body = param.body;
            }
        }
        if (operation.tags.indexOf("stream") !== -1) {
            return this._requestStream(method, path, option);
        }
        return this.request(method, path, option);
    }
    async getChannels(query) {
        const res = await this.call("getChannels", query);
        return res.body;
    }
    async getChannelsByType(type, query) {
        const res = await this.call("getChannelsByType", { type, ...query });
        return res.body;
    }
    async getChannel(type, channel) {
        const res = await this.call("getChannel", { type, channel });
        return res.body;
    }
    async getServicesByChannel(type, channel) {
        const res = await this.call("getServicesByChannel", { type, channel });
        return res.body;
    }
    async getServiceByChannel(type, channel, sid) {
        const res = await this.call("getServiceByChannel", { type, channel, sid });
        return res.body;
    }
    async getServiceStreamByChannel(...args) {
        let type;
        let channel;
        let sid;
        let decode;
        let priority;
        let signal;
        if (typeof args[0] === "object") {
            const opt = args[0];
            type = opt.type;
            channel = opt.channel;
            sid = opt.sid;
            decode = opt.decode;
            priority = opt.priority;
            signal = opt.signal;
        }
        else {
            type = args[0];
            channel = args[1];
            sid = args[2];
            decode = args[3];
            priority = args[4];
        }
        return this.call("getServiceStreamByChannel", {
            type,
            channel,
            sid,
            decode: decode ? 1 : 0
        }, { priority, signal });
    }
    async getChannelStream(...args) {
        let type;
        let channel;
        let decode;
        let priority;
        let signal;
        if (typeof args[0] === "object") {
            const opt = args[0];
            type = opt.type;
            channel = opt.channel;
            decode = opt.decode;
            priority = opt.priority;
            signal = opt.signal;
        }
        else {
            type = args[0];
            channel = args[1];
            decode = args[2];
            priority = args[3];
        }
        return this.call("getChannelStream", {
            type,
            channel,
            decode: decode ? 1 : 0
        }, { priority, signal });
    }
    async getPrograms(query) {
        const res = await this.call("getPrograms", query);
        return res.body;
    }
    async getProgram(id) {
        const res = await this.call("getProgram", { id });
        return res.body;
    }
    async getProgramStream(...args) {
        let id;
        let decode;
        let priority;
        let signal;
        if (typeof args[0] === "object") {
            const opt = args[0];
            id = opt.id;
            decode = opt.decode;
            priority = opt.priority;
            signal = opt.signal;
        }
        else {
            id = args[0];
            decode = args[1];
            priority = args[2];
        }
        return this.call("getProgramStream", {
            id,
            decode: decode ? 1 : 0
        }, { priority, signal });
    }
    async getServices(query) {
        const res = await this.call("getServices", query);
        return res.body;
    }
    async getService(id) {
        const res = await this.call("getService", { id });
        return res.body;
    }
    async getLogoImage(id) {
        const res = await this.call("getLogoImage", { id });
        return res.body;
    }
    async getServiceStream(...args) {
        let id;
        let decode;
        let priority;
        let signal;
        if (typeof args[0] === "object") {
            const opt = args[0];
            id = opt.id;
            decode = opt.decode;
            priority = opt.priority;
            signal = opt.signal;
        }
        else {
            id = args[0];
            decode = args[1];
            priority = args[2];
        }
        return this.call("getServiceStream", {
            id,
            decode: decode ? 1 : 0
        }, { priority, signal });
    }
    async getTuners() {
        const res = await this.call("getTuners");
        return res.body;
    }
    async getTuner(index) {
        const res = await this.call("getTuner", { index });
        return res.body;
    }
    async getTunerProcess(index) {
        const res = await this.call("getTunerProcess", { index });
        return res.body;
    }
    async killTunerProcess(index) {
        const res = await this.call("killTunerProcess", { index });
        return res.body;
    }
    async getEvents() {
        const res = await this.call("getEvents");
        return res.body;
    }
    async getEventsStream(query) {
        return this.call("getEventsStream", query);
    }
    async getChannelsConfig() {
        const res = await this.call("getChannelsConfig");
        return res.body;
    }
    async updateChannelsConfig(channels) {
        const res = await this.call("updateChannelsConfig", { body: channels });
        return res.body;
    }
    async channelScan(option) {
        return this.call("channelScan", option);
    }
    async getChannelScanStatus() {
        const res = await this.call("getChannelScanStatus");
        return res.body;
    }
    async stopChannelScan() {
        const res = await this.call("stopChannelScan");
        return res.body;
    }
    async getServerConfig() {
        const res = await this.call("getServerConfig");
        return res.body;
    }
    async updateServerConfig(server) {
        const res = await this.call("updateServerConfig", { body: server });
        return res.body;
    }
    async getTunersConfig() {
        const res = await this.call("getTunersConfig");
        return res.body;
    }
    async updateTunersConfig(tuners) {
        const res = await this.call("updateTunersConfig", { body: tuners });
        return res.body;
    }
    async getLog() {
        const res = await this.call("getLog");
        return res.body;
    }
    async getLogStream() {
        return this.call("getLogStream");
    }
    async checkVersion() {
        const res = await this.call("checkVersion");
        return res.body;
    }
    async updateVersion(force) {
        return this.call("updateVersion", { force });
    }
    async getStatus() {
        const res = await this.call("getStatus");
        return res.body;
    }
    async restart() {
        const res = await this.call("restart");
        return res.body;
    }
    _httpRequest(method, path, option = {}) {
        const opt = {
            method: method,
            path: this.basePath + path,
            headers: option.headers || {},
            agent: this.agent
        };
        if (this.host === "") {
            opt.socketPath = this.socketPath;
        }
        else {
            opt.host = this.host;
            opt.port = this.port;
        }
        if (this.userAgent === "") {
            opt.headers["User-Agent"] = this._userAgent;
        }
        else {
            opt.headers["User-Agent"] = this.userAgent + " " + this._userAgent;
        }
        if (opt.headers["X-Mirakurun-Priority"] === undefined) {
            if (option.priority === undefined) {
                option.priority = this.priority;
            }
            opt.headers["X-Mirakurun-Priority"] = option.priority.toString(10);
        }
        if (typeof option.query === "object") {
            opt.path += "?" + querystring.stringify(option.query);
        }
        if (typeof option.body === "object") {
            opt.headers["Content-Type"] = "application/json; charset=utf-8";
            option.body = JSON.stringify(option.body);
        }
        if (option.signal) {
            opt.signal = option.signal;
        }
        return new Promise((resolve, reject) => {
            const onResponse = (res) => {
                if (res.statusCode > 300 && res.statusCode < 400 && res.headers.location) {
                    if (/^\//.test(res.headers.location) === false) {
                        reject(new Error(`Redirecting location "${res.headers.location}" isn't supported.`));
                        return;
                    }
                    this._httpRequest(method, res.headers.location, option)
                        .then(resolve, reject);
                    return;
                }
                resolve(res);
            };
            const req = this.https === true ? https.request(opt, onResponse) : http.request(opt, onResponse);
            if (option.signal) {
                option.signal.addEventListener("abort", () => {
                    if (!req.destroyed) {
                        req.destroy();
                    }
                }, { once: true });
            }
            req.on("error", reject);
            if (typeof option.body === "string") {
                req.write(option.body + "\n");
            }
            req.end();
        });
    }
    async _requestStream(method, path, option = {}) {
        const res = await this._httpRequest(method, path, option);
        if (res.statusCode >= 200 && res.statusCode <= 202) {
            return res;
        }
        else {
            if (res.statusCode) {
                throw Object.assign(new Error(`Bad status respond (${res.statusCode} ${res.statusMessage}).`), {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage
                });
            }
            throw res;
        }
    }
    async _getDocs() {
        const res = await this.request("GET", this.docsPath);
        if (res.isSuccess !== true) {
            throw new Error(`Failed to get "${this.docsPath}".`);
        }
        this._docs = res.body;
    }
}
exports.Client = Client;
exports.default = Client;
//# sourceMappingURL=client.js.map