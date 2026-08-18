"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBonRecTestStartupError = isBonRecTestStartupError;
exports.consumeTunerStderr = consumeTunerStderr;
const MAX_STDERR_REMAINDER_LENGTH = 8192;
function isBonRecTestStartupError(message) {
    return /^Error: .+/.test(message.trim());
}
function consumeTunerStderr(remainder, data) {
    const parts = (remainder + data.toString()).split(/\r\n|[\r\n]/);
    let nextRemainder = parts.pop() || "";
    if (nextRemainder.length > MAX_STDERR_REMAINDER_LENGTH) {
        nextRemainder = nextRemainder.slice(-MAX_STDERR_REMAINDER_LENGTH);
    }
    return {
        messages: parts.map(line => line.trim()).filter(line => line.length > 0),
        remainder: nextRemainder
    };
}
//# sourceMappingURL=tunerStderr.js.map