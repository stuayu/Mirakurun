"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
process.title = "Mirakurun: Remote";
process.stdin.resume();
process.stdin.on("data", () => exit());
process.on("SIGTERM", () => exit());
const opt = {
    host: process.argv[2],
    port: parseInt(process.argv[3], 10),
    type: process.argv[4],
    channel: process.argv[5],
    decode: process.argv.includes("decode") === true
};
console.error("remote:", opt);
let stream;
const client = new client_1.default();
client.host = opt.host;
client.port = opt.port;
client.userAgent = "Mirakurun (Remote)";
client.getChannelStream(opt.type, opt.channel, opt.decode)
    .then(_stream => {
    stream = _stream;
    stream.pipe(process.stdout);
    stream.once("end", () => exit());
})
    .catch(err => {
    const cause = err.body || err;
    if (typeof err.statusCode === "number") {
        console.error("remote:", "(error)", "status", err.statusCode, err.statusMessage || err.message);
    }
    else {
        const detail = [cause.address, cause.code].filter(value => value !== null && value !== undefined).join(" ") || cause.message || String(cause);
        console.error("remote:", "(error)", detail);
    }
    exit(1);
});
function exit(code = 0) {
    console.error("remote:", "exit.");
    if (stream) {
        stream.unpipe();
    }
    process.exit(code);
}
//# sourceMappingURL=remote.js.map