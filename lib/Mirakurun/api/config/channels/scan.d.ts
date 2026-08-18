import { Operation } from "express-openapi";
import * as apid from "../../../../../api";
interface ChannelScanOption {
    type: apid.ChannelType;
    startCh?: number;
    endCh?: number;
    startSubCh?: number;
    endSubCh?: number;
    useSubCh?: boolean;
    scanMode?: apid.ChannelScanMode;
    setDisabledOnAdd?: boolean;
    refresh?: boolean;
    channelNameFormat?: string;
}
export declare function parseOptionalNumberQuery(value: unknown): number | undefined;
interface ScanConfig {
    readonly channels: string[];
    readonly scanMode: apid.ChannelScanMode;
    readonly setDisabledOnAdd: boolean;
}
export declare const CHANNEL_SCAN_PRIORITY = -1;
export declare function generateScanConfig(option: ChannelScanOption): ScanConfig | undefined;
export declare function generateChannelItemForService(type: apid.ChannelType, channel: string, service: apid.Service, setDisabledOnAdd: boolean, commandVars?: Record<string, string | number>): apid.ConfigChannelsItem;
export declare function generateChannelItemForChannel(type: apid.ChannelType, channel: string, services: apid.Service[], setDisabledOnAdd: boolean, commandVars?: Record<string, string | number>): apid.ConfigChannelsItem;
export declare function generateChannelItems(scanMode: apid.ChannelScanMode, type: apid.ChannelType, channel: string, services: apid.Service[], setDisabledOnAdd: boolean, commandVars?: Record<string, string | number>): apid.ConfigChannels;
export declare const get: Operation;
export declare const put: Operation;
export declare const del: Operation;
export {};
