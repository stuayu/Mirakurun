export declare const READY_FOR_JOB_MAX_ATTEMPTS = 6;
export declare const READY_FOR_JOB_RETRY_INTERVAL = 5000;
export declare function waitForReadyTuner<T>(pick: () => T | null, sleep: (ms: number) => Promise<void>, maxAttempts?: number, retryInterval?: number): Promise<T | null>;
