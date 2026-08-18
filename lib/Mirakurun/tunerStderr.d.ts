export declare function isBonRecTestStartupError(message: string): boolean;
export declare function consumeTunerStderr(remainder: string, data: Buffer | string): {
    messages: string[];
    remainder: string;
};
