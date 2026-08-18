import * as http from "http";
import { OpenAPIV2 } from "openapi-types";
import * as apid from "../api";
import { IncomingHttpHeaders } from "http";
export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";
export interface RequestOption {
    priority?: number;
    headers?: {
        [key: string]: string;
    };
    query?: {
        [key: string]: any;
    };
    body?: string | object;
    signal?: AbortSignal;
}
export interface Response {
    status: number;
    statusText: string;
    contentType: string;
    headers: IncomingHttpHeaders;
    isSuccess: boolean;
    body?: any | string | Buffer;
}
export interface ErrorResponse extends Response {
    body?: apid.Error;
}
export interface ChannelsQuery {
    type?: apid.ChannelType;
    channel?: string;
    name?: string;
}
export interface ProgramsQuery {
    networkId?: apid.NetworkId;
    serviceId?: apid.ServiceId;
    eventId?: apid.EventId;
}
export interface EventsQuery {
    resource?: apid.EventResource;
    type?: apid.EventType;
}
export interface ServicesQuery {
    serviceId?: apid.ServiceId;
    networkId?: apid.NetworkId;
    name?: string;
    type?: number;
    "channel.type"?: apid.ChannelType;
    "channel.channel"?: string;
}
export interface ChannelScanOption {
    dryRun?: boolean;
    type?: apid.ChannelType;
    minCh?: number;
    maxCh?: number;
    space?: number;
    minSubCh?: number;
    maxSubCh?: number;
    useSubCh?: boolean;
    scanMode?: apid.ChannelScanMode;
    setDisabledOnAdd?: boolean;
    refresh?: boolean;
    skipCh?: number[];
    channelNameFormat?: string;
    async?: boolean;
}
export declare class ErrorResponse implements ErrorResponse {
    constructor(response: ErrorResponse);
}
export declare class Client {
    basePath: string;
    docsPath: string;
    priority: number;
    host: string;
    port: number;
    https: boolean;
    socketPath: string;
    agent: http.Agent | boolean;
    userAgent: string;
    private _userAgent;
    private _docs;
    getDocs(): Promise<OpenAPIV2.Document<{}>>;
    request(method: RequestMethod, path: string, option?: RequestOption): Promise<Response> | Promise<ErrorResponse>;
    call(operationId: string, param?: {
        [key: string]: any;
    }, option?: RequestOption): Promise<any | http.IncomingMessage>;
    getChannels(query?: ChannelsQuery): Promise<apid.Channel[]>;
    getChannelsByType(type: apid.ChannelType, query?: ChannelsQuery): Promise<apid.Channel[]>;
    getChannel(type: apid.ChannelType, channel: string): Promise<apid.Channel>;
    getServicesByChannel(type: apid.ChannelType, channel: string): Promise<apid.Service[]>;
    getServiceByChannel(type: apid.ChannelType, channel: string, sid: apid.ServiceId): Promise<apid.Service>;
    getServiceStreamByChannel(opt: {
        type: apid.ChannelType;
        channel: string;
        sid: apid.ServiceId;
        decode?: boolean;
        priority?: number;
        signal?: AbortSignal;
    }): Promise<http.IncomingMessage>;
    getServiceStreamByChannel(type: apid.ChannelType, channel: string, sid: apid.ServiceId, decode?: boolean, priority?: number): Promise<http.IncomingMessage>;
    getChannelStream(opt: {
        type: apid.ChannelType;
        channel: string;
        decode?: boolean;
        priority?: number;
        signal?: AbortSignal;
    }): Promise<http.IncomingMessage>;
    getChannelStream(type: apid.ChannelType, channel: string, decode?: boolean, priority?: number): Promise<http.IncomingMessage>;
    getPrograms(query?: ProgramsQuery): Promise<apid.Program[]>;
    getProgram(id: apid.ProgramId): Promise<apid.Program>;
    getProgramStream(opt: {
        id: apid.ProgramId;
        decode?: boolean;
        priority?: number;
        signal?: AbortSignal;
    }): Promise<http.IncomingMessage>;
    getProgramStream(id: apid.ProgramId, decode?: boolean, priority?: number): Promise<http.IncomingMessage>;
    getServices(query?: ServicesQuery): Promise<apid.Service[]>;
    getService(id: apid.ServiceItemId): Promise<apid.Service>;
    getLogoImage(id: apid.ServiceItemId): Promise<Buffer>;
    getServiceStream(opt: {
        id: apid.ServiceItemId;
        decode?: boolean;
        priority?: number;
        signal?: AbortSignal;
    }): Promise<http.IncomingMessage>;
    getServiceStream(id: apid.ServiceItemId, decode?: boolean, priority?: number): Promise<http.IncomingMessage>;
    getTuners(): Promise<apid.TunerDevice[]>;
    getTuner(index: number): Promise<apid.TunerDevice>;
    getTunerProcess(index: number): Promise<apid.TunerProcess>;
    killTunerProcess(index: number): Promise<apid.TunerProcess>;
    getEvents(): Promise<apid.Event[]>;
    getEventsStream(query?: EventsQuery): Promise<http.IncomingMessage>;
    getChannelsConfig(): Promise<apid.ConfigChannels>;
    updateChannelsConfig(channels: apid.ConfigChannels): Promise<apid.ConfigChannels>;
    channelScan(option?: ChannelScanOption): Promise<http.IncomingMessage>;
    getChannelScanStatus(): Promise<apid.ChannelScanStatus>;
    stopChannelScan(): Promise<{
        status: string;
        message: string;
    }>;
    getServerConfig(): Promise<apid.ConfigServer>;
    updateServerConfig(server: apid.ConfigServer): Promise<apid.ConfigServer>;
    getTunersConfig(): Promise<apid.ConfigTuners>;
    updateTunersConfig(tuners: apid.ConfigTuners): Promise<apid.ConfigTuners>;
    getLog(): Promise<string>;
    getLogStream(): Promise<http.IncomingMessage>;
    checkVersion(): Promise<apid.Version>;
    updateVersion(force?: boolean): Promise<http.IncomingMessage>;
    getStatus(): Promise<apid.Status>;
    restart(): Promise<{}>;
    private _httpRequest;
    private _requestStream;
    private _getDocs;
}
export default Client;
