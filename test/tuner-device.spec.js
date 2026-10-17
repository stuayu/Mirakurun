const { describe, it } = require("node:test");
const assert = require("assert");
const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const { consumeTunerStderr, isBonRecTestStartupError, isRemoteStartupError } = require("../lib/Mirakurun/tunerStderr");

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

    it("recognizes remote Mirakurun startup errors", () => {
        assert.strictEqual(isRemoteStartupError("remote: (error) status 404 Not Found"), true);
        assert.strictEqual(isRemoteStartupError("remote: (error) status 503 Service Unavailable"), true);
        assert.strictEqual(isRemoteStartupError("remote: (error) 127.0.0.1 ECONNREFUSED"), false);
        assert.strictEqual(isRemoteStartupError("remote: (error) undefined undefined"), false);
        assert.strictEqual(isRemoteStartupError("remote: exit."), false);
        assert.strictEqual(isRemoteStartupError("remote: connected"), false);
        assert.strictEqual(isRemoteStartupError("Error: connection lost"), false);
    });

    it("reports HTTP startup errors from lib/remote.js", async () => {
        const server = http.createServer((_req, res) => {
            if (_req.url === "/api/docs") {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                    paths: {
                        "/channels/{type}/{channel}/stream": {
                            parameters: [
                                { name: "type", in: "path", required: true },
                                { name: "channel", in: "path", required: true }
                            ],
                            get: { operationId: "getChannelStream", tags: ["stream"], parameters: [] }
                        }
                    }
                }));
                return;
            }
            res.statusCode = Number(server.statusCode);
            res.end();
        });
        await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
        const port = server.address().port;

        try {
            for (const [statusCode, expected] of [[404, "Not Found"], [503, "Service Unavailable"]]) {
                server.statusCode = statusCode;
                const result = await runRemote(port);
                const line = result.stderr.split(/\r?\n/).find(item => item.includes("(error) status"));

                assert.strictEqual(result.code, 1);
                assert.strictEqual(line, `remote: (error) status ${statusCode} ${expected}`, result.stderr);
                assert.strictEqual(isRemoteStartupError(line), true);
            }
        } finally {
            await new Promise(resolve => server.close(resolve));
        }
    });

    it("does not classify connection errors as remote startup errors", async () => {
        const server = http.createServer();
        await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
        const port = server.address().port;
        await new Promise(resolve => server.close(resolve));

        const result = await runRemote(port);
        const line = result.stderr.split(/\r?\n/).find(item => item.includes("(error)"));

        assert.strictEqual(result.code, 1);
        assert.match(line, /^remote: \(error\) 127\.0\.0\.1 ECONNREFUSED$/);
        assert.strictEqual(isRemoteStartupError(line), false);
    });
});

function runRemote(port) {
    return new Promise((resolve, reject) => {
        const child = spawn(process.execPath, [path.join(__dirname, "../lib/remote.js"), "127.0.0.1", String(port), "GR", "13"], {
            stdio: ["ignore", "pipe", "pipe"]
        });
        let stdout = "";
        let stderr = "";
        const timeout = setTimeout(() => child.kill("SIGKILL"), 5000);
        child.stdout.setEncoding("utf8").on("data", data => stdout += data);
        child.stderr.setEncoding("utf8").on("data", data => stderr += data);
        child.once("error", err => {
            clearTimeout(timeout);
            reject(err);
        });
        child.once("close", code => {
            clearTimeout(timeout);
            resolve({ code, stdout, stderr });
        });
    });
}
