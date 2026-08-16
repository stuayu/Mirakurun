import { EventEmitter } from "eventemitter3";
import * as common from "./common";
import * as apid from "../../api";
import ChannelItem from "./ChannelItem";
import TSFilter from "./TSFilter";
import { ProgramsQuery } from "../client";
interface User extends common.User {
    _stream?: TSFilter;
}
export interface TunerDeviceStatus {
    readonly index: number;
    readonly name: string;
    readonly types: apid.ChannelType[];
    readonly command: string;
    readonly pid: number;
    readonly users: common.User[];
    readonly isAvailable: boolean;
    readonly isRemote: boolean;
    readonly isFree: boolean;
    readonly isUsing: boolean;
    readonly isFault: boolean;
}
export default class TunerDevice extends EventEmitter {
    private _index;
    private _config;
    private _channel;
    private _command;
    private _process;
    private _stream;
    private _users;
    private _isAvailable;
    private _isRemote;
    private _isFault;
    private _fatalCount;
    private _lastProcessFailureAt;
    private _exited;
    private _closing;
    constructor(_index: number, _config: apid.ConfigTunersItem);
    get index(): number;
    get config(): apid.ConfigTunersItem;
    get channel(): ChannelItem;
    get command(): string;
    get pid(): number;
    get users(): User[];
    get decoder(): string | null;
    get isAvailable(): boolean;
    get isRemote(): boolean;
    get isFree(): boolean;
    get isUsing(): boolean;
    get isFault(): boolean;
    getPriority(): number;
    toJSON(): TunerDeviceStatus;
    kill(): Promise<void>;
    startStream(user: User, stream: TSFilter, channel?: ChannelItem): Promise<void>;
    endStream(user: User): void;
    getRemotePrograms(query?: ProgramsQuery): Promise<apid.Program[]>;
    private _spawn;
    private _streamOnData;
    private _end;
    private _kill;
    private _release;
    private _updated;
}
export {};
