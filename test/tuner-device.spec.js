const { describe, it } = require("node:test");
const assert = require("assert");

const { consumeTunerStderr, isBonRecTestStartupError } = require("../lib/Mirakurun/tunerStderr");

describe("[tuner-device.spec] consumeTunerStderr()", () => {
    it("handles CR, LF, and CRLF progress delimiters", () => {
        const parsed = consumeTunerStderr("partial", " line\rprogress\nerror\r\ntail");

        assert.deepStrictEqual(parsed.messages, ["partial line", "progress", "error"]);
        assert.strictEqual(parsed.remainder, "tail");
    });

    it("keeps an unterminated stderr fragment bounded", () => {
        const parsed = consumeTunerStderr("", "x".repeat(9000));

        assert.strictEqual(parsed.messages.length, 0);
        assert.strictEqual(parsed.remainder.length, 8192);
    });

    it("recognizes BonRecTest startup errors", () => {
        assert.strictEqual(isBonRecTestStartupError("Error: Could not set channel"), true);
        assert.strictEqual(isBonRecTestStartupError("Abort!"), false);
        assert.strictEqual(isBonRecTestStartupError("Signal: 30dB"), false);
    });
});
