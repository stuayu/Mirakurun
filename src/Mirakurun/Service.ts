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
import { join, dirname } from "path";
import { existsSync } from "fs";
import { stat, mkdir, readFile, writeFile } from "fs/promises";
import { sleep } from "./common";
import * as log from "./log";
import * as db from "./db";
import _ from "./_";
import Event from "./Event";
import ChannelItem from "./ChannelItem";
import ServiceItem from "./ServiceItem";

const { LOGO_DATA_DIR_PATH } = process.env;

/**
 * Service
 * * TVサービス処理についてのクラス
 */
export class Service {
    // * ロゴデータのパスを取得
    static getLogoDataPath(networkId: number, serviceId: number, logoId: number) {

        // BS/CS/CATVはロゴIDを使わずにサービスIDで対応する CATVのネットワークIDの範囲が不明なため60000以上で対応
        if (networkId === 4 || networkId === 6 || networkId === 7 || networkId > 60000) {
            return join(LOGO_DATA_DIR_PATH, `${networkId}_${serviceId}.png`);
        }

        if (typeof logoId !== "number" || logoId < 0) {
            throw new Error("Invalid `logoId`");
        }

        // 地上波はロゴIDで保存する
        return join(LOGO_DATA_DIR_PATH, `${networkId}_${logoId}.png`);
    }

    static async getLogoDataMTime(networkId: number, serviceId: number, logoId: number): Promise<number> {

        if (typeof logoId !== "number" || logoId < -1) {
            return 0;
        }

        try {
            return (await stat(Service.getLogoDataPath(networkId, serviceId, logoId))).mtimeMs;
        } catch (e) {
            return 0;
        }
    }

    static async isLogoDataExists(networkId: number, serviceId: number, logoId: number): Promise<boolean> {

        if (typeof logoId !== "number" || logoId < -1) {
            return false;
        }

        try {
            return (await stat(Service.getLogoDataPath(networkId, serviceId, logoId))).isFile();
        } catch (e) {
            return false;
        }
    }

    static async loadLogoData(networkId: number, serviceId: number, logoId: number): Promise<Buffer> {
        if (typeof logoId !== "number" || logoId < -1) {
            return null;
        }

        try {
            return await readFile(Service.getLogoDataPath(networkId, serviceId, logoId));
        } catch (e) {
            return null;
        }
    }

    /**
     * * 放送波からロゴデータを保存する
     * @param networkId ネットワークID(NID)
     * @param serviceId サービスID(SID)
     * @param logoId ロゴID
     * @param data バイナリロゴデータ
     * @param retrying リトライするかどうか
     * @returns
     */
    static async saveLogoData(networkId: number, serviceId: number, logoId: number, data: Uint8Array, retrying = false): Promise<void> {

        log.info("Service.saveLogoData(): saving... (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);

        const path = Service.getLogoDataPath(networkId, serviceId, logoId);

        try {
            await writeFile(path, data, { encoding: "binary" });
        } catch (e) {
            if (retrying === false) {
                // mkdir if not exists
                const dirPath = dirname(path);
                if (existsSync(dirPath) === false) {
                    log.warn("Service.saveLogoData(): making directory `%s`... (networkId=%d serviceId=%d logoId=%d)", dirPath, networkId, serviceId, logoId);
                    try {
                        await mkdir(dirPath, { recursive: true });
                    } catch (e) {
                        throw e;
                    }
                }
                // retry
                log.warn("Service.saveLogoData(): retrying... (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);
                return this.saveLogoData(networkId, serviceId, logoId, data, true);
            }
            throw e;
        }

        log.info("Service.saveLogoData(): saved. (networkId=%d serviceId=%d logoId=%d)", networkId, serviceId, logoId);
    }

    private _items: ServiceItem[] = [];
    private _saveTimerId: NodeJS.Timeout;

    get items(): ServiceItem[] {
        return this._items;
    }

    add(item: ServiceItem): void {
        if (this.get(item.id) !== null) {
            return;
        }

        this._items.push(item);

        Event.emit("service", "create", item.export());

        this.save();
    }

    get(id: number): ServiceItem;
    get(networkId: number, serviceId: number): ServiceItem;
    get(id: number, serviceId?: number) {
        if (serviceId === undefined) {
            const l = this._items.length;
            for (let i = 0; i < l; i++) {
                if (this._items[i].id === id) {
                    return this._items[i];
                }
            }
        } else {
            const l = this._items.length;
            for (let i = 0; i < l; i++) {
                if (this._items[i].networkId === id && this._items[i].serviceId === serviceId) {
                    return this._items[i];
                }
            }
        }

        return null;
    }

    exists(id: number): boolean;
    exists(networkId: number, serviceId: number): boolean;
    exists(id: number, serviceId?: number) {
        return this.get(id, serviceId) !== null;
    }

    findByChannel(channel: ChannelItem): ServiceItem[] {
        const items = [];

        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            for (const channels of this._items[i].channel) {
                if (channels === channel) {
                    items.push(this._items[i]);
                }
            }
        }

        return items;
    }

    findByNetworkId(networkId: number): ServiceItem[] {
        const items = [];

        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            if (this._items[i].networkId === networkId) {
                items.push(this._items[i]);
            }
        }

        return items;
    }

    findByNetworkIdWithLogoId(networkId: number, logoId: number): ServiceItem[] {
        const items = [];

        const l = this._items.length;
        for (let i = 0; i < l; i++) {
            if (this._items[i].networkId === networkId && this._items[i].logoId === logoId) {
                items.push(this._items[i]);
            }
        }

        return items;
    }

    save(): void {
        clearTimeout(this._saveTimerId);
        this._saveTimerId = setTimeout(() => this._save(), 1000 * 10);
    }

    async load(): Promise<void> {
        log.debug("loading services...");

        let updated = false;

        const services = await db.loadServices(_.configIntegrity.channels, true);
        for (const service of services) {
            const typelist = service.channel.map(ch => ch.type);
            const channellist = service.channel.map(ch => ch.channel);
            const channelItems: ChannelItem[] = [];

            for (let i = 0; i < typelist.length; i++) {
                channelItems.push(_.channel.get(typelist[i], channellist[i]));
            }

            if (channelItems.length <= 0) {
                updated = true;
                continue;
            }

            if (service.networkId === undefined || service.serviceId === undefined) {
                updated = true;
                continue;
            }

            // migrate logo data
            if (service.logoData) {
                const logoDataPath = Service.getLogoDataPath(service.networkId, service.serviceId, service.logoId);
                log.warn("migrating deprecated property `logoData` to file `%s` in service#%d (%s) db", logoDataPath, service.id, service.name);
                Service.saveLogoData(service.networkId, service.serviceId, service.logoId, Buffer.from(service.logoData, "base64"));

                // delete duplicates
                services.filter(s => s.networkId === service.networkId && s.serviceId === service.serviceId && s.logoId === service.logoId).forEach(s => {
                    delete s.logoData;
                });
                updated = true;
            }

            this.add(
                new ServiceItem(
                    channelItems,
                    service.networkId,
                    service.serviceId,
                    service.name,
                    service.type,
                    service.logoId,
                    service.remoteControlKeyId,
                    service.epgReady,
                    service.epgUpdatedAt
                )
            );
        }

        if (updated) {
            this.save();
        }

        setTimeout(() => this._initJobs(), 10000);
    }

    private async _initJobs(): Promise<void> {
        log.debug("init service jobs...");

        // add services from channel config
        for (const channelConfig of _.config.channels) {
            if (channelConfig.isDisabled || !channelConfig.serviceId) {
                continue;
            }
            const channel = _.channel.get(channelConfig.type, channelConfig.channel);
            if (!channel) {
                continue;
            }
            const serviceId = channelConfig.serviceId;
            if (this.findByChannel(channel).some(service => service.serviceId === serviceId)) {
                continue;
            }

            this._queueCheckToAdd(channel, serviceId);
        }

        // scan services (no service channel only)
        _.job.add({
            key: "Service.Add.Scan.Find-Channels",
            name: "Service Add Scan [Find Targets]",
            fn: async () => {
                for (const channel of _.channel.items) {
                    if (this.findByChannel(channel).length > 0) {
                        continue;
                    }

                    this._queueScanToAdd(channel);
                }
            },
            readyFn: async () => {
                // wait for all Service.Check-Add.* jobs to finish
                while (true) {
                    if (_.job.jobs.some(job => job.status !== "finished" && job.key.includes("Service.Add.Check."))) {
                        await sleep(1000);
                        continue;
                    }
                    return true;
                }
            }
        });

        // schedule service scan
        _.job.add({
            key: "Service.Updater.Add-Schedule",
            name: "Service Updater [Add Schedule]",
            fn: async () => {
                _.job.addSchedule({
                    key: "Service.Updater",
                    schedule: "5 6 * * *", // todo: config
                    job: {
                        key: "Service.Updater",
                        name: "Service Updater",
                        fn: async () => {
                            for (const channel of _.channel.items) {
                                if (this.findByChannel(channel).length === 0) {
                                    continue;
                                }

                                this._queueScanToUpdate(channel);
                            }
                        }
                    }
                });
            }
        });
    }

    private _save(): void {
        log.debug("saving services...");

        db.saveServices(
            this._items.map(service => service.export()),
            _.configIntegrity.channels
        );
    }

    private _queueCheckToAdd(channel: ChannelItem, serviceId: number): void {
        _.job.add({
            key: `Service.Add.Check.${channel.type}.${channel.channel}.${serviceId}`,
            name: `Service Add Check ${channel.type}/${channel.channel}/${serviceId}`,
            fn: () => this._checkToAdd(channel, serviceId),
            readyFn: () => _.tuner.readyForJob([channel]),
            retryOnFail: true,
            retryMax: (1000 * 60 * 60 * 12) / (1000 * 60 * 3), // (12時間 / retryDelay) = 12時間～
            retryDelay: 1000 * 60 * 3
        });
    }

    private _queueScanToAdd(channel: ChannelItem): void {
        _.job.add({
            key: `Service.Add.Scan.${channel.type}.${channel.channel}`,
            name: `Service Add Scan ${channel.type}/${channel.channel}`,
            fn: async () => this._scan(channel, true),
            readyFn: () => _.tuner.readyForJob([channel]),
            retryOnFail: true,
            retryMax: (1000 * 60 * 60 * 12) / (1000 * 60 * 3), // (12時間 / retryDelay) = 12時間～
            retryDelay: 1000 * 60 * 3
        });
    }

    private _queueScanToUpdate(channel: ChannelItem): void {
        _.job.add({
            key: `Service.Update.Scan.${channel.type}.${channel.channel}`,
            name: `Service Update Scan ${channel.type}/${channel.channel}`,
            fn: async () => this._scan(channel, false),
            readyFn: () => _.tuner.readyForJob([channel])
        });
    }

    private async _checkToAdd(channel: ChannelItem, serviceId: number): Promise<void> {
        log.info("ChannelItem#'%s' serviceId=%d check has started", channel.name, serviceId);

        let services: Awaited<ReturnType<typeof _.tuner.getServices>>;
        try {
            services = await _.tuner.getServices([channel]);
        } catch (e) {
            log.warn("ChannelItem#'%s' serviceId=%d check has failed [%s]", channel.name, serviceId, e);
            throw new Error("Service check failed");
        }

        const service = services.find(service => service.serviceId === serviceId);
        if (!service) {
            log.warn("ChannelItem#'%s' serviceId=%d check has failed [no service]", channel.name, serviceId);

            // retry after 1 hour
            setTimeout(() => this._queueCheckToAdd(channel, serviceId), 3600000);
            return;
        }

        log.debug("ChannelItem#'%s' serviceId=%d: %s", channel.name, serviceId, JSON.stringify(service, null, "  "));

        this.add(
            new ServiceItem([channel], service.networkId, service.serviceId, service.name, service.type, service.logoId)
        );

        log.info("ChannelItem#'%s' serviceId=%d check has finished", channel.name, serviceId);
    }

    private async _scan(channel: ChannelItem, add: boolean): Promise<void> {
        // チャンネルの並び替えのために追加
        const channelOrder = {
            GR: 1,
            BS: 2,
            CS: 3,
            SKY: 4,
            NW1: 5,
            NW2: 6,
            NW3: 7,
            NW4: 8,
            NW5: 9,
            NW6: 10,
            NW7: 11,
            NW8: 12,
            NW9: 13,
            NW10: 14,
            NW11: 15,
            NW12: 16,
            NW13: 17,
            NW14: 18,
            NW15: 19,
            NW16: 20,
            NW17: 21,
            NW18: 22,
            NW19: 23,
            NW20: 24,
            NW21: 25,
            NW22: 26,
            NW23: 27,
            NW24: 28,
            NW25: 29,
            NW26: 30,
            NW27: 31,
            NW28: 32,
            NW29: 33,
            NW30: 34,
            NW31: 35,
            NW32: 36,
            NW33: 37,
            NW34: 38,
            NW35: 39,
            NW36: 40,
            NW37: 41,
            NW38: 42,
            NW39: 43,
            NW40: 44,
            BS4K: 45,
            CS4K: 46
        };

        log.info("ChannelItem#'%s' service scan has started", channel.name);

        let services: Awaited<ReturnType<typeof _.tuner.getServices>>;
        try {
            services = await _.tuner.getServices([channel]);
        } catch (e) {
            log.warn("ChannelItem#'%s' service scan has failed [%s]", channel.name, e);
            throw new Error("Service scan failed");
        }

        log.debug("ChannelItem#'%s' services: %s", channel.name, JSON.stringify(services, null, "  "));

        services.forEach(service => {
            const item = this.get(service.networkId, service.serviceId);
            // すでに同一サービスが存在している
            if (item !== null) {
                item.name = service.name;
                item.type = service.type;
                if (service.logoId > -1) {
                    item.logoId = service.logoId;
                }
                item.remoteControlKeyId = service.remoteControlKeyId;

                // 同じタイプ(GR/BS/CS・・・)のチャンネルをすべて削除(停波などでチャンネルが削除された場合に対応)
                // 配列の末尾から先頭に向かってループ（spliceで削除してもインデックスがずれないようにするため）
                for (let i = item.channel.length - 1; i >= 0; i--) {
                    // 指定された channel.type と一致する要素を見つけたら
                    if (item.channel[i].type === channel.type) {
                        // その要素を配列から削除する
                        item.channel.splice(i, 1);
                    }
                }

                // チャンネルを追加
                item.channel.push(channel);
                // 新規で追加したチャンネルをソートする GR>BS>CS>...>NW40
                item.channel.sort((a, b) => channelOrder[a.type] - channelOrder[b.type]);
            } else if (add === true) {
                this.add(
                    new ServiceItem(
                        [channel],
                        service.networkId,
                        service.serviceId,
                        service.name,
                        service.type,
                        service.logoId,
                        service.remoteControlKeyId
                    )
                );
            }
        });

        log.info("ChannelItem#'%s' service scan has finished", channel.name);
    }
}

export default Service;
