const { describe, it } = require("node:test");
const assert = require("assert");

const { waitForReadyTuner } = require("../lib/Mirakurun/tunerRetry");

describe("[tuner-retry.spec] waitForReadyTuner()", () => {
    it("stops after the configured number of attempts", async () => {
        let attempts = 0;
        let sleeps = 0;

        const result = await waitForReadyTuner(
            () => {
                attempts++;
                return null;
            },
            async () => {
                sleeps++;
            },
            3,
            0
        );

        assert.strictEqual(result, null);
        assert.strictEqual(attempts, 3);
        assert.strictEqual(sleeps, 2);
    });

    it("returns immediately after a tuner becomes available", async () => {
        let attempts = 0;

        const result = await waitForReadyTuner(
            () => ++attempts === 2 ? "tuner" : null,
            async () => undefined,
            3,
            0
        );

        assert.strictEqual(result, "tuner");
        assert.strictEqual(attempts, 2);
    });
});
