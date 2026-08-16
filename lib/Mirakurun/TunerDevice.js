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
const child_process = __importStar(require("child_process"));
const util = __importStar(require("util"));
const eventemitter3_1 = require("eventemitter3");
const common = __importStar(require("./common"));
const log = __importStar(require("./log"));
const status_1 = __importDefault(require("./status"));
const Event_1 = __importDefault(require("./Event"));
const client_1 = __importDefault(require("../client"));
const PROCESS_FAILURE_WINDOW = 60 * 1000;
class TunerDevice extends eventemitter3_1.EventEmitter {
    _index;
    _config;
    _channel = null;
    _command = null;
    _process = null;
    _stream = null;
    _users = new Set();
    _isAvailable = true;
    _isRemote = false;
    _isFault = false;
    _fatalCount = 0;
    _lastProcessFailureAt = 0;
    _exited = false;
    _closing = false;
    constructor(_index, _config) {
        super();
        this._index = _index;
        this._config = _config;
        this._isRemote = !!this._config.remoteMirakurunHost;
        Event_1.default.emit("tuner", "create", this.toJSON());
        log.debug("TunerDevice#%d initialized", this._index);
    }
    get index() {
        return this._index;
    }
    get config() {
        return this._config;
    }
    get channel() {
        return this._channel;
    }
    get command() {
        return this._command;
    }
    get pid() {
        return this._process ? this._process.pid : null;
    }
    get users() {
        return [...this._users].map(user => {
            return {
                id: user.id,
                priority: user.priority,
                agent: user.agent,
                url: user.url,
                disableDecoder: user.disableDecoder,
                streamSetting: user.streamSetting,
                streamInfo: user.streamInfo
            };
        });
    }
    get decoder() {
        if (this._isRemote && this._config.remoteMirakurunDecoder === true) {
            return null;
        }
        return this._config.decoder || null;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    get isRemote() {
        return this._isRemote;
    }
    get isFree() {
        return this._isAvailable === true && this._channel === null && this._users.size === 0;
    }
    get isUsing() {
        return this._isAvailable === true && this._channel !== null && this._users.size !== 0;
    }
    get isFault() {
        return this._isFault;
    }
    getPriority() {
        let priority = -2;
        for (const user of this._users) {
            if (user.priority > priority) {
                priority = user.priority;
            }
        }
        return priority;
    }
    toJSON() {
        return {
            index: this._index,
            name: this._config.name,
            types: this._config.types,
            command: this._command,
            pid: this.pid,
            users: this.users,
            isAvailable: this.isAvailable,
            isRemote: this.isRemote,
            isFree: this.isFree,
            isUsing: this.isUsing,
            isFault: this.isFault
        };
    }
    async kill() {
        await this._kill(true);
    }
    async startStream(user, stream, channel) {
        log.debug("TunerDevice#%d start stream for user `%s` (priority=%d)...", this._index, user.id, user.priority);
        if (this._isAvailable === false) {
            throw new Error(util.format("TunerDevice#%d is not available", this._index));
        }
        if (!channel && !this._stream) {
            throw new Error(util.format("TunerDevice#%d has not stream", this._index));
        }
        if (channel) {
            if (this._config.types.includes(channel.type) === false) {
                throw new Error(util.format("TunerDevice#%d is not supported for channel type `%s`", this._index, channel.type));
            }
            if (this._stream) {
                if (channel.channel !== this._channel.channel) {
                    if (user.priority <= this.getPriority()) {
                        throw new Error(util.format("TunerDevice#%d has higher priority user", this._index));
                    }
                    await this._kill(true);
                    this._spawn(channel);
                }
            }
            else {
                this._spawn(channel);
            }
        }
        log.info("TunerDevice#%d streaming to user `%s` (priority=%d)", this._index, user.id, user.priority);
        user._stream = stream;
        this._users.add(user);
        if (stream.closed === true) {
            this.endStream(user);
        }
        else {
            stream.once("close", () => this.endStream(user));
        }
        this._updated();
    }
    endStream(user) {
        log.debug("TunerDevice#%d end stream for user `%s` (priority=%d)...", this._index, user.id, user.priority);
        user._stream.end();
        this._users.delete(user);
        if (this._users.size === 0) {
            setTimeout(() => {
                if (this._users.size === 0 && this._process) {
                    this._kill(true).catch(log.error);
                }
            }, 3000);
        }
        log.info("TunerDevice#%d end streaming to user `%s` (priority=%d)", this._index, user.id, user.priority);
        this._updated();
    }
    async getRemotePrograms(query) {
        if (!this._isRemote) {
            throw new Error(util.format("TunerDevice#%d is not remote device", this._index));
        }
        const client = new client_1.default();
        client.host = this.config.remoteMirakurunHost;
        client.port = this.config.remoteMirakurunPort || 40772;
        client.userAgent = "Mirakurun (Remote)";
        log.debug("TunerDevice#%d fetching remote programs from %s:%d...", this._index, client.host, client.port);
        const programs = await client.getPrograms(query);
        log.info("TunerDevice#%d fetched %d remote programs", this._index, programs.length);
        return programs;
    }
    _spawn(ch) {
        log.debug("TunerDevice#%d spawn...", this._index);
        if (this._process) {
            throw new Error(util.format("TunerDevice#%d has process", this._index));
        }
        let cmd;
        if (this._isRemote === true) {
            cmd = "node lib/remote";
            cmd += " " + this._config.remoteMirakurunHost;
            cmd += " " + (this._config.remoteMirakurunPort || 40772);
            cmd += " " + ch.type;
            cmd += " " + ch.channel;
            if (this._config.remoteMirakurunDecoder === true) {
                cmd += " decode";
            }
        }
        else {
            cmd = this._config.command;
        }
        cmd = common.replaceCommandTemplate(cmd, {
            channel: ch.channel,
            type: ch.type,
            satelite: ch.commandVars?.satellite || "",
            space: 0,
            ...ch.commandVars
        });
        const parsed = common.parseCommandForSpawn(cmd);
        this._process = child_process.spawn(parsed.command, parsed.args);
        this._command = cmd;
        this._channel = ch;
        if (this._config.dvbDevicePath) {
            const cat = child_process.spawn("cat", [this._config.dvbDevicePath]);
            cat.once("error", (err) => {
                log.error("TunerDevice#%d cat process error `%s` (pid=%d)", this._index, err.name, cat.pid);
                this._kill(false);
            });
            cat.once("close", (code, signal) => {
                log.debug("TunerDevice#%d cat process has closed with code=%d by signal `%s` (pid=%d)", this._index, code, signal, cat.pid);
                if (this._exited === false) {
                    this._kill(false);
                }
            });
            this._process.once("exit", () => cat.kill("SIGKILL"));
            this._stream = cat.stdout;
        }
        else {
            this._stream = this._process.stdout;
        }
        this._process.once("exit", () => this._exited = true);
        let processFailureReported = false;
        const reportProcessFailure = () => {
            if (processFailureReported === true || this._closing === true) {
                return;
            }
            processFailureReported = true;
            const now = Date.now();
            if (now - this._lastProcessFailureAt > PROCESS_FAILURE_WINDOW) {
                this._fatalCount = 0;
            }
            this._lastProcessFailureAt = now;
            ++this._fatalCount;
            if (this._fatalCount >= 3) {
                log.fatal("TunerDevice#%d has something fault! **RESTART REQUIRED** after fix it.", this._index);
                this._isFault = true;
                this._closing = true;
            }
        };
        this._process.once("error", (err) => {
            log.fatal("TunerDevice#%d process error `%s` (pid=%d)", this._index, err.name, this._process.pid);
            reportProcessFailure();
            this._end();
            setTimeout(this._release.bind(this), this._config.dvbDevicePath ? 1000 : 100);
        });
        this._process.once("close", (code, signal) => {
            log.info("TunerDevice#%d process has closed with exit code=%d by signal `%s` (pid=%d)", this._index, code, signal, this._process.pid);
            reportProcessFailure();
            this._end();
            setTimeout(this._release.bind(this), this._config.dvbDevicePath ? 1000 : 100);
        });
        this._process.stderr.on("data", data => {
            log.debug("TunerDevice#%d > %s", this._index, data.toString().trim());
        });
        this._stream.on("data", this._streamOnData.bind(this));
        this._updated();
        log.info("TunerDevice#%d process has spawned by command `%s` (pid=%d)", this._index, cmd, this._process.pid);
    }
    _streamOnData(chunk) {
        for (const user of this._users) {
            user._stream.write(chunk);
        }
    }
    _end() {
        this._isAvailable = false;
        this._stream.removeAllListeners("data");
        if (this._closing === true) {
            for (const user of this._users) {
                user._stream.end();
            }
            this._users.clear();
        }
        this._updated();
    }
    async _kill(close) {
        log.debug("TunerDevice#%d kill...", this._index);
        if (!this._process || !this._process.pid) {
            throw new Error(util.format("TunerDevice#%d has not process", this._index));
        }
        else if (this._closing) {
            log.debug("TunerDevice#%d return because it is closing", this._index);
            return;
        }
        this._isAvailable = false;
        this._closing = close;
        this._updated();
        await new Promise(resolve => {
            this.once("release", resolve);
            if (process.platform === "win32") {
                const timer = setTimeout(() => this._process.kill(), 3000);
                this._process.once("exit", () => clearTimeout(timer));
                this._process.stdin.write("\n");
            }
            else if (/^dvbv5-zap /.test(this._command) === true) {
                this._process.kill("SIGKILL");
            }
            else {
                const timer = setTimeout(() => {
                    log.warn("TunerDevice#%d will force killed because SIGTERM timed out...", this._index);
                    this._process.kill("SIGKILL");
                }, 6000);
                this._process.once("exit", () => clearTimeout(timer));
                this._process.kill("SIGTERM");
            }
        });
    }
    _release() {
        if (this._process) {
            this._process.stderr.removeAllListeners();
            this._process.removeAllListeners();
        }
        if (this._stream) {
            this._stream.removeAllListeners();
        }
        this._command = null;
        this._process = null;
        this._stream = null;
        if (this._closing === false && this._users.size !== 0) {
            log.warn("TunerDevice#%d respawning because request has not closed", this._index);
            ++status_1.default.errorCount.tunerDeviceRespawn;
            this._spawn(this._channel);
            return;
        }
        this._fatalCount = 0;
        this._lastProcessFailureAt = 0;
        this._channel = null;
        this._users.clear();
        if (this._isFault === false) {
            this._isAvailable = true;
        }
        this._closing = false;
        this._exited = false;
        this.emit("release");
        log.info("TunerDevice#%d released", this._index);
        this._updated();
    }
    _updated() {
        Event_1.default.emit("tuner", "update", this.toJSON());
    }
}
exports.default = TunerDevice;
//# sourceMappingURL=TunerDevice.js.map