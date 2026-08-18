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

export const READY_FOR_JOB_MAX_ATTEMPTS = 6;
export const READY_FOR_JOB_RETRY_INTERVAL = 5000;

export async function waitForReadyTuner<T>(
    pick: () => T | null,
    sleep: (ms: number) => Promise<void>,
    maxAttempts = READY_FOR_JOB_MAX_ATTEMPTS,
    retryInterval = READY_FOR_JOB_RETRY_INTERVAL
): Promise<T | null> {
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
