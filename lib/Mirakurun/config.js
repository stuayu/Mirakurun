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
exports.loadServer = loadServer;
exports.saveServer = saveServer;
exports.loadTuners = loadTuners;
exports.saveTuners = saveTuners;
exports.loadChannels = loadChannels;
exports.saveChannels = saveChannels;
const child_process_1 = require("child_process");
const path_1 = require("path");
const os_1 = require("os");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const fs = __importStar(require("fs"));
const yaml = __importStar(require("js-yaml"));
const ipnum = __importStar(require("ip-num"));
const promise_queue_1 = __importDefault(require("promise-queue"));
const log = __importStar(require("./log"));
const Job_1 = require("./Job");
const { DOCKER, DOCKER_NETWORK, SERVER_CONFIG_PATH, TUNERS_CONFIG_PATH, CHANNELS_CONFIG_PATH, HOSTNAME, LOG_LEVEL, MAX_LOG_HISTORY, JOB_MAX_RUNNING, JOB_MAX_STANDBY, MAX_BUFFER_BYTES_BEFORE_READY, EVENT_END_TIMEOUT, PROGRAM_GC_JOB_SCHEDULE, EPG_GATHERING_JOB_SCHEDULE, EPG_RETRIEVAL_TIME, SERVICE_SCAN_TIMEOUT, LOGO_DATA_INTERVAL, DISABLE_EIT_PARSING, DISABLE_WEB_UI, ALLOW_IPV4_CIDR_RANGES, ALLOW_IPV6_CIDR_RANGES, ALLOW_ORIGINS, ALLOW_PNA, TSPLAY_ENDPOINT } = process.env;
const IS_DOCKER = DOCKER === "YES";
async function loadServer() {
    const path = SERVER_CONFIG_PATH;
    const dirPath = (0, path_1.dirname)(path);
    if ((0, fs_1.existsSync)(dirPath) === false) {
        log.info("missing directory `%s`", dirPath);
        try {
            log.info("making directory `%s`", dirPath);
            await (0, promises_1.mkdir)(dirPath, { recursive: true });
        }
        catch (e) {
            log.fatal("failed to make directory `%s`", dirPath);
            console.error(e);
            process.exit(1);
        }
    }
    if ((0, fs_1.existsSync)(path) === false) {
        log.info("missing server config `%s`", path);
        try {
            log.info("copying default server config to `%s`", path);
            if (process.platform === "win32") {
                fs.copyFileSync("config/server.win32.yml", path);
            }
            else {
                fs.copyFileSync("config/server.yml", path);
            }
        }
        catch (e) {
            log.fatal("failed to copy server config to `%s`", path);
            console.error(e);
            process.exit(1);
        }
    }
    const config = await load("server", path);
    if (!config.allowIPv4CidrRanges) {
        config.allowIPv4CidrRanges = ["10.0.0.0/8", "127.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.0.0.0/8"];
    }
    if (!config.allowIPv6CidrRanges) {
        config.allowIPv6CidrRanges = ["fc00::/7"];
    }
    if (!config.allowOrigins) {
        config.allowOrigins = [
            "https://mirakurun-secure-contexts-api.pages.dev"
        ];
    }
    if (typeof config.allowPNA !== "boolean") {
        config.allowPNA = true;
    }
    if (!config.tsplayEndpoint) {
        config.tsplayEndpoint = "https://mirakurun-secure-contexts-api.pages.dev/tsplay/";
    }
    if (!config.allowOrigins) {
        config.allowOrigins = [
            "https://mirakurun-secure-contexts-api.pages.dev"
        ];
    }
    if (IS_DOCKER) {
        config.path = "/var/run/mirakurun.sock";
        if (DOCKER_NETWORK !== "host") {
            config.port = 40772;
            config.disableIPv6 = true;
        }
        if (!config.hostname && typeof HOSTNAME !== "undefined" && HOSTNAME.trim().length > 0) {
            config.hostname = HOSTNAME.trim();
        }
        if (typeof LOG_LEVEL !== "undefined" && /^-?[0123]$/.test(LOG_LEVEL)) {
            config.logLevel = parseInt(LOG_LEVEL, 10);
        }
        if (typeof MAX_LOG_HISTORY !== "undefined" && /^[0-9]+$/.test(MAX_LOG_HISTORY)) {
            config.maxLogHistory = parseInt(MAX_LOG_HISTORY, 10);
        }
        if (typeof JOB_MAX_RUNNING !== "undefined" && /^[0-9]+$/.test(JOB_MAX_RUNNING)) {
            config.jobMaxRunning = parseInt(JOB_MAX_RUNNING, 10);
        }
        if (typeof JOB_MAX_STANDBY !== "undefined" && /^[0-9]+$/.test(JOB_MAX_STANDBY)) {
            config.jobMaxStandby = parseInt(JOB_MAX_STANDBY, 10);
        }
        if (typeof MAX_BUFFER_BYTES_BEFORE_READY !== "undefined" && /^[0-9]+$/.test(MAX_BUFFER_BYTES_BEFORE_READY)) {
            config.maxBufferBytesBeforeReady = parseInt(MAX_BUFFER_BYTES_BEFORE_READY, 10);
        }
        if (typeof EVENT_END_TIMEOUT !== "undefined" && /^[0-9]+$/.test(EVENT_END_TIMEOUT)) {
            config.eventEndTimeout = parseInt(EVENT_END_TIMEOUT, 10);
        }
        if (typeof PROGRAM_GC_JOB_SCHEDULE !== "undefined" && (0, Job_1.isValidCronExpression)(PROGRAM_GC_JOB_SCHEDULE)) {
            config.programGCJobSchedule = PROGRAM_GC_JOB_SCHEDULE;
        }
        if (typeof EPG_GATHERING_JOB_SCHEDULE !== "undefined" && (0, Job_1.isValidCronExpression)(EPG_GATHERING_JOB_SCHEDULE)) {
            config.epgGatheringJobSchedule = EPG_GATHERING_JOB_SCHEDULE;
        }
        if (typeof EPG_RETRIEVAL_TIME !== "undefined" && /^[0-9]+$/.test(EPG_RETRIEVAL_TIME)) {
            config.epgRetrievalTime = parseInt(EPG_RETRIEVAL_TIME, 10);
        }
        if (typeof SERVICE_SCAN_TIMEOUT !== "undefined" && /^[0-9]+$/.test(SERVICE_SCAN_TIMEOUT)) {
            config.serviceScanTimeout = parseInt(SERVICE_SCAN_TIMEOUT, 10);
        }
        if (typeof LOGO_DATA_INTERVAL !== "undefined" && /^[0-9]+$/.test(LOGO_DATA_INTERVAL)) {
            config.logoDataInterval = parseInt(LOGO_DATA_INTERVAL, 10);
        }
        if (DISABLE_EIT_PARSING === "true") {
            config.disableEITParsing = true;
        }
        if (DISABLE_WEB_UI === "true") {
            config.disableWebUI = true;
        }
        if (typeof ALLOW_IPV4_CIDR_RANGES !== "undefined" && ALLOW_IPV4_CIDR_RANGES.trim().length > 0) {
            config.allowIPv4CidrRanges = ALLOW_IPV4_CIDR_RANGES.split(",");
        }
        if (typeof ALLOW_IPV6_CIDR_RANGES !== "undefined" && ALLOW_IPV6_CIDR_RANGES.trim().length > 0) {
            config.allowIPv6CidrRanges = ALLOW_IPV6_CIDR_RANGES.split(",");
        }
        if (typeof ALLOW_ORIGINS !== "undefined" && ALLOW_ORIGINS.trim().length > 0) {
            config.allowOrigins = ALLOW_ORIGINS.split(",");
        }
        if (ALLOW_PNA === "true") {
            config.allowPNA = true;
        }
        else if (ALLOW_PNA === "false") {
            config.allowPNA = false;
        }
        if (typeof TSPLAY_ENDPOINT !== "undefined" && TSPLAY_ENDPOINT.trim().length > 0) {
            config.tsplayEndpoint = TSPLAY_ENDPOINT.trim();
        }
        log.info("load server config (merged w/ env): %s", JSON.stringify(config));
    }
    if (!config.hostname) {
        config.hostname = (0, os_1.hostname)();
        log.info("detected hostname: %s", config.hostname);
    }
    if (typeof config.jobMaxRunning !== "undefined") {
        if (typeof config.jobMaxRunning !== "number" || config.jobMaxRunning < 1 || config.jobMaxRunning > 100) {
            log.error("invalid server config property `jobMaxRunning`: %s", config.jobMaxRunning);
            delete config.jobMaxRunning;
        }
    }
    if (typeof config.jobMaxStandby !== "undefined") {
        if (typeof config.jobMaxStandby !== "number" || config.jobMaxStandby < 1 || config.jobMaxStandby > 100) {
            log.error("invalid server config property `jobMaxStandby`: %s", config.jobMaxStandby);
            delete config.jobMaxStandby;
        }
    }
    {
        const validRanges = [];
        for (const range of config.allowIPv4CidrRanges) {
            const [valid, errors] = ipnum.Validator.isValidIPv4CidrRange(range);
            if (valid) {
                validRanges.push(range);
                continue;
            }
            for (const error of errors) {
                log.error("invalid server config property `allowIPv4CidrRanges`: %s - %s", range, error);
            }
        }
        config.allowIPv4CidrRanges = validRanges;
    }
    {
        const validRanges = [];
        for (const range of config.allowIPv6CidrRanges) {
            const [valid, errors] = ipnum.Validator.isValidIPv6CidrRange(range);
            if (valid) {
                validRanges.push(range);
                continue;
            }
            for (const error of errors) {
                log.error("invalid server config property `allowIPv6CidrRanges`: %s - %s", range, error);
            }
        }
        config.allowIPv6CidrRanges = validRanges;
    }
    return config;
}
function saveServer(data) {
    return save("server", SERVER_CONFIG_PATH, data);
}
async function loadTuners() {
    const path = TUNERS_CONFIG_PATH;
    const dirPath = (0, path_1.dirname)(path);
    if ((0, fs_1.existsSync)(dirPath) === false) {
        log.info("missing directory `%s`", dirPath);
        try {
            log.info("making directory `%s`", dirPath);
            await (0, promises_1.mkdir)(dirPath, { recursive: true });
        }
        catch (e) {
            log.fatal("failed to make directory `%s`", dirPath);
            console.error(e);
            process.exit(1);
        }
    }
    if (process.platform === "linux" && fs.existsSync(path) === false) {
        log.info("missing tuners config `%s`", path);
        log.info("trying to detect tuners...");
        const tuners = [];
        try {
            (0, child_process_1.execSync)("which dvb-fe-tool");
            const adapters = (0, fs_1.readdirSync)("/dev/dvb").filter(name => /^adapter[0-9]+$/.test(name));
            for (let i = 0; i < adapters.length; i++) {
                log.info("detected DVB device: %s", adapters[i]);
                (0, child_process_1.execSync)("sleep 1");
                const properties = (0, child_process_1.execSync)(`dvb-fe-tool -a ${i} 2>&1 || true`, { encoding: "utf8" });
                const isISDBT = properties.includes("[ISDBT]");
                const isISDBS = properties.includes("[ISDBS]");
                if (!isISDBT && !isISDBS) {
                    continue;
                }
                const tuner = {
                    name: adapters[i],
                    types: undefined,
                    dvbDevicePath: `/dev/dvb/adapter${i}/dvr0`,
                    decoder: "arib-b25-stream-test"
                };
                if (isISDBT) {
                    tuner.types = ["GR"];
                    tuner.command = `dvbv5-zap -a ${i} -c ./config/dvbconf-for-isdb/conf/dvbv5_channels_isdbt.conf -r -P <channel>`;
                }
                else if (isISDBS) {
                    tuner.types = ["BS", "CS"];
                    tuner.command = `dvbv5-zap -a ${i} -c ./config/dvbconf-for-isdb/conf/dvbv5_channels_isdbs.conf -r -P <channel>`;
                }
                tuners.push(tuner);
                log.info("added tuner config (generated): %s", JSON.stringify(tuner));
            }
        }
        catch (e) {
            if (/which dvb-fe-tool/.test(e.message)) {
                log.warn("`dvb-fe-tool` is required to detect DVB devices. (%s)", e.message);
            }
            else {
                console.error(e);
            }
        }
        log.info("detected %d tuners!", tuners.length);
        if (tuners.length > 0) {
            try {
                log.info("writing auto generated tuners config to `%s`", path);
                await saveTuners(tuners);
            }
            catch (e) {
                log.fatal("failed to write tuners config to `%s`", path);
                console.error(e);
                process.exit(1);
            }
        }
    }
    if ((0, fs_1.existsSync)(path) === false) {
        log.info("missing tuners config `%s`", path);
        try {
            log.info("copying default tuners config to `%s`", path);
            if (process.platform === "win32") {
                fs.copyFileSync("config/tuners.win32.yml", path);
            }
            else {
                fs.copyFileSync("config/tuners.yml", path);
            }
        }
        catch (e) {
            log.fatal("failed to copy tuners config to `%s`", path);
            console.error(e);
            process.exit(1);
        }
    }
    return load("tuners", path);
}
function saveTuners(data) {
    return save("tuners", TUNERS_CONFIG_PATH, data);
}
async function loadChannels() {
    const path = CHANNELS_CONFIG_PATH;
    const dirPath = (0, path_1.dirname)(path);
    if ((0, fs_1.existsSync)(dirPath) === false) {
        log.info("missing directory `%s`", dirPath);
        try {
            log.info("making directory `%s`", dirPath);
            await (0, promises_1.mkdir)(dirPath, { recursive: true });
        }
        catch (e) {
            log.fatal("failed to make directory `%s`", dirPath);
            console.error(e);
            process.exit(1);
        }
    }
    if ((0, fs_1.existsSync)(path) === false) {
        log.info("missing channels config `%s`", path);
        try {
            log.info("copying default channels config to `%s`", path);
            if (process.platform === "win32") {
                fs.copyFileSync("config/channels.win32.yml", path);
            }
            else {
                fs.copyFileSync("config/channels.yml", path);
            }
        }
        catch (e) {
            log.fatal("failed to copy channels config to `%s`", path);
            console.error(e);
            process.exit(1);
        }
    }
    return load("channels", path);
}
function saveChannels(data) {
    return save("channels", CHANNELS_CONFIG_PATH, data);
}
const configIOQueue = new promise_queue_1.default(1, Infinity);
async function load(name, path) {
    log.info("load %s config `%s`", name, path);
    return configIOQueue.add(async () => {
        return yaml.load(await (0, promises_1.readFile)(path, "utf8"));
    });
}
async function save(name, path, data) {
    log.info("save %s config `%s`", name, path);
    await configIOQueue.add(async () => {
        await (0, promises_1.writeFile)(path, yaml.dump(data));
    });
}
process.on("beforeExit", () => {
    if (configIOQueue.getQueueLength() + configIOQueue.getPendingLength() === 0) {
        return;
    }
    log.warn("configIOQueue is not empty. waiting for completion...");
    setTimeout(() => {
        log.warn("try to exit again...");
    }, 100);
});
//# sourceMappingURL=config.js.map