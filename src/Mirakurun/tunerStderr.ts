/*
   Copyright 2016 kanreisa

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const MAX_STDERR_REMAINDER_LENGTH = 8192;

export function isBonRecTestStartupError(message: string): boolean {
    return /^Error: .+/.test(message.trim());
}

export function consumeTunerStderr(
    remainder: string,
    data: Buffer | string
): { messages: string[]; remainder: string } {
    const parts = (remainder + data.toString()).split(/\r\n|[\r\n]/);
    let nextRemainder = parts.pop() || "";

    // Some Windows tuner tools update progress with a bare CR or emit a
    // partial line indefinitely. Keep the pending fragment bounded so repeated
    // concatenation cannot monopolize the event loop.
    if (nextRemainder.length > MAX_STDERR_REMAINDER_LENGTH) {
        nextRemainder = nextRemainder.slice(-MAX_STDERR_REMAINDER_LENGTH);
    }

    return {
        messages: parts.map(line => line.trim()).filter(line => line.length > 0),
        remainder: nextRemainder
    };
}
