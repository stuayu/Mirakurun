"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READY_FOR_JOB_RETRY_INTERVAL = exports.READY_FOR_JOB_MAX_ATTEMPTS = void 0;
exports.waitForReadyTuner = waitForReadyTuner;
exports.READY_FOR_JOB_MAX_ATTEMPTS = 6;
exports.READY_FOR_JOB_RETRY_INTERVAL = 5000;
async function waitForReadyTuner(pick, sleep, maxAttempts = exports.READY_FOR_JOB_MAX_ATTEMPTS, retryInterval = exports.READY_FOR_JOB_RETRY_INTERVAL) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const picked = pick();
        if (picked !== null) {
            return picked;
        }
        if (attempt + 1 < maxAttempts) {
            await sleep(retryInterval);
        }
    }
    return null;
}
//# sourceMappingURL=tunerRetry.js.map