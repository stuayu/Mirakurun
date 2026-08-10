"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = exports.channelTypes = void 0;
exports.updateObject = updateObject;
exports.sleep = sleep;
exports.getTimeFromMJD = getTimeFromMJD;
exports.getTimeFromBCD24 = getTimeFromBCD24;
exports.replaceCommandTemplate = replaceCommandTemplate;
exports.parseCommandForSpawn = parseCommandForSpawn;
const rfdc_1 = __importDefault(require("rfdc"));
exports.channelTypes = ["GR", "BS", "CS", "SKY", "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10",
    "NW11", "NW12", "NW13", "NW14", "NW15", "NW16", "NW17", "NW18", "NW19", "NW20",
    "NW21", "NW22", "NW23", "NW24", "NW25", "NW26", "NW27", "NW28", "NW29", "NW30",
    "NW31", "NW32", "NW33", "NW34", "NW35", "NW36", "NW37", "NW38", "NW39", "NW40",
    "BS4K", "CS4K"];
exports.deepClone = (0, rfdc_1.default)();
function updateObject(target, input) {
    let updated = false;
    for (const k in input) {
        if (Array.isArray(target[k]) && Array.isArray(input[k])) {
            updated = updateArray(target[k], input[k]) || updated;
            continue;
        }
        else if (target[k] === null && input[k] === null) {
            continue;
        }
        else if (typeof target[k] === "object" && typeof input[k] === "object") {
            updated = updateObject(target[k], input[k]) || updated;
            continue;
        }
        else if (target[k] === input[k]) {
            continue;
        }
        target[k] = input[k];
        updated = true;
    }
    return updated;
}
function updateArray(target, input) {
    const length = target.length;
    if (length !== input.length) {
        target.splice(0, length, ...input);
        return true;
    }
    let updated = false;
    for (let i = 0; i < length; i++) {
        if (Array.isArray(target[i]) && Array.isArray(input[i])) {
            updated = updateArray(target[i], input[i]) || updated;
            continue;
        }
        else if (target[i] === null && input[i] === null) {
            continue;
        }
        else if (typeof target[i] === "object" && typeof input[i] === "object") {
            updated = updateObject(target[i], input[i]) || updated;
            continue;
        }
        else if (target[i] === input[i]) {
            continue;
        }
        target[i] = input[i];
        updated = true;
    }
    return updated;
}
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
function getTimeFromMJD(buffer) {
    const mjd = (buffer[0] << 8) | buffer[1];
    const h = (buffer[2] >> 4) * 10 + (buffer[2] & 0x0F);
    const i = (buffer[3] >> 4) * 10 + (buffer[3] & 0x0F);
    const s = (buffer[4] >> 4) * 10 + (buffer[4] & 0x0F);
    return ((mjd - 40587) * 86400 + ((h - 9) * 60 * 60) + (i * 60) + s) * 1000;
}
function getTimeFromBCD24(buffer) {
    let time = ((buffer[0] >> 4) * 10 + (buffer[0] & 0x0F)) * 3600;
    time += ((buffer[1] >> 4) * 10 + (buffer[1] & 0x0F)) * 60;
    time += (buffer[2] >> 4) * 10 + (buffer[2] & 0x0F);
    return time * 1000;
}
function replaceCommandTemplate(template, vars) {
    return template.replace(/<([a-z0-9\-_\.]+)>/gi, (match, key) => {
        return vars[key] !== undefined ? String(vars[key]) : "";
    });
}
function parseCommandForSpawn(cmdString) {
    let inQuote = false;
    let quoteChar = "";
    let current = "";
    const parts = [];
    for (let i = 0; i < cmdString.length; i++) {
        const char = cmdString[i];
        if ((char === `"` || char === `'`) && (!inQuote || char === quoteChar)) {
            inQuote = !inQuote;
            quoteChar = inQuote ? char : "";
        }
        else if (char === " " && !inQuote) {
            if (current) {
                parts.push(current);
                current = "";
            }
        }
        else {
            current += char;
        }
    }
    if (current) {
        parts.push(current);
    }
    if (parts.length === 0) {
        throw new Error("Invalid command string");
    }
    const result = {
        command: parts[0],
        args: parts.slice(1)
    };
    return result;
}
//# sourceMappingURL=common.js.map