[**English**](Configuration.md) | [**日本語**](Configuration.ja.md)

# 設定

- 🗒️[server.yml](#serveryml) - サーバー設定
- 🗒️[tuners.yml](#tunersyml) - チューナー設定
- 🗒️[channels.yml](#channelsyml) - チャンネル設定

## ⚠️セキュリティ上の留意事項 (FYI)

- Mirakurun は LAN 内専用サーバーです。
- デフォルト設定でアクセス元をプライベート IP のみに制限しています。
- 任意のホスト名・ドメイン上のページからのアクセスを禁止しています。 → **DNS Rebinding / CSRF 攻撃対策**
  - `hostname`: Web UI にアクセスするためのホスト名を設定してください。
  - `allowOrigins`: 必要に応じて、許可するホスト名・ドメインを明示的に設定してください。
- 複数の手法を組み合わせて攻撃のリスクを緩和しています。
- 無暗に全てのドメインから API アクセスできるようにしたり、リバースプロキシの下に置かないでください。下記のような攻撃に対して脆弱になります。
  - 認証済みの BASIC 認証やセッション情報などを流用して攻撃する手法が存在します。
  - 最近はブラウザ自体もある程度保護していますが、過信しないでください。
  - リバースプロキシで HTTPS 化した場合、ブラウザ自体と Mirakurun の保護機能をいくつかバイパスする可能性があり、逆に危険度が増します。 → [保護されたコンテキスト](https://developer.mozilla.org/ja/docs/Web/Security/Secure_Contexts)
  - 代わりに VPN や SSH トンネル、トンネルサービスを活用してください。
    - 一部のトンネルサービスは `allowIPv4CidrRanges` の設定が必要です。第三者がアクセスできないように注意して設定してください。

> **DNS Rebinding 攻撃**: 攻撃者が管理するドメインで最初に正規サイトを返し、TTL期限後に攻撃者のサーバーを指すように変更する攻撃。これによりブラウザの同一オリジンポリシーを迂回し、ブラウザ経由で LAN 内のサーバーに不正アクセスする攻撃。

> **XSS/CSRF 攻撃**: 攻撃者が悪意のあるコードをウェブサイトに埋め込み、ブラウザ経由で LAN 内のサーバーに不正アクセスする攻撃。

- 攻撃例:
  - チューナーコマンド等を利用して任意のコードを実行
  - サーバーに不正なコードを仕込み、botnet 化
- 上記はあくまで攻撃の一例です。ブラウザやミドルウェアの脆弱性等により、日々様々な攻撃手法が考えられています。
- 近年増加傾向の Web ベースのアプリでは、ブラウザと同様の攻撃が可能な場合があります。注意しましょう。

## 🗒️server.yml

📛 Web UI 設定一部対応

### ファイルパス

- 環境変数: `SERVER_CONFIG_PATH`
- Docker ホスト (デフォルト): `/opt/mirakurun/config/server.yml`
- Linux (レガシー): `/usr/local/etc/mirakurun/server.yml`

### サーバー設定一覧

| プロパティ (🗒️server.yml) | 環境変数 (🐋Docker) | タイプ | デフォルト | 説明 |
|------------|------------------|-------|-----------|------|
| `logLevel` | `LOG_LEVEL` | Integer | `2` | ログレベル (`-1`: FATAL から `3`: DEBUG) |
| `maxLogHistory` | `MAX_LOG_HISTORY` | Integer | `1000` | ログの最大保持行数 |
| `path` | - | String, null | 🗒️`/var/run/mirakurun.sock` | Unix Socket Path **※Docker ではデフォルトパスに固定** |
| `port` | - | Integer, null | `40772` | サーバーポート **※Docker ではコンテナ側 `40772` 固定** |
| `hostname` | `HOSTNAME` | String | `localhost` | ホスト名 |
| `disableIPv6` | - | Boolean | `false` | IPv6の無効化 **※Docker では常に無効** |
| `jobMaxRunning` | `JOB_MAX_RUNNING` | Integer | 論理コア数 / 2, 最低 1, 最大 100 | 同時実行できる最大ジョブ数 |
| `jobMaxStandby` | `JOB_MAX_STANDBY` | Integer | 論理コア数 - 1, 最低 1, 最大 100 | 同時実行できる最大ジョブ準備数 |
| `maxBufferBytesBeforeReady` | `MAX_BUFFER_BYTES_BEFORE_READY` | Integer | `8388608` | 準備完了前の最大バッファサイズ (バイト)<br>**※番組開始の頭が欠ける場合は増やす** |
| `eventEndTimeout` | `EVENT_END_TIMEOUT` | Integer | `1000` | イベント終了タイムアウト (ミリ秒)<br>**※番組終了が誤判定される場合は長くする** |
| `programGCJobSchedule` | `PROGRAM_GC_JOB_SCHEDULE` | String | `45 * * * *` | 番組一覧の GC スケジュール (cron 風形式) |
| `epgGatheringJobSchedule` | `EPG_GATHERING_JOB_SCHEDULE` | String | `20,50 * * * *` | EPG 収集スケジュール (cron 風形式) |
| `epgRetrievalTime` | `EPG_RETRIEVAL_TIME` | Integer | `600000` | EPG 取得時間 (ミリ秒) |
| `serviceScanTimeout` | `SERVICE_SCAN_TIMEOUT` | Integer | `20000` (`BS4K` / `CS4K` は `40000`) | サービススキャンのタイムアウト (ミリ秒)<br>**※新4K8K衛星放送 (`BS4K` / `CS4K`) は選局に時間がかかるため既定値を長くしている。指定するとチャンネル種別によらずその値を使う** |
| `logoDataInterval` | `LOGO_DATA_INTERVAL` | Integer | `604800000` | ロゴデータ更新間隔 (ミリ秒) |
| `disableEITParsing` | `DISABLE_EIT_PARSING` | Boolean | `false` | ⚠️EIT パースの無効化 |
| `disableWebUI` | `DISABLE_WEB_UI` | Boolean | `false` | ⚠️Web UI の無効化 |
| `allowIPv4CidrRanges` | `ALLOW_IPV4_CIDR_RANGES` | String[] | `["10.0.0.0/8", "127.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]` | ⚠️許可する IPv4 CIDR ブロック |
| `allowIPv6CidrRanges` | `ALLOW_IPV6_CIDR_RANGES` | String[] | `["fc00::/7"]` | ⚠️許可する IPv6 CIDR ブロック |
| `allowOrigins` | `ALLOW_ORIGINS` | String[] | `["https://mirakurun-secure-contexts-api.pages.dev"]` | ⚠️🧪許可するオリジン (実験中) |
| `allowPNA` | `ALLOW_PNA` | Boolean | `true` | 🧪[PNA](https://github.com/WICG/private-network-access)/[LNA](https://github.com/explainers-by-googlers/local-network-access) 許可設定 (実験中) |
| `tsplayEndpoint` | `TSPLAY_ENDPOINT` | String | `https://mirakurun-secure-contexts-api.pages.dev/tsplay/` | 🧪TSPlay エンドポイント (実験中) |

## 🗒️tuners.yml

💯 Web UI 設定完全対応

### ファイルパス

- 環境変数: `TUNERS_CONFIG_PATH`
- Docker ホスト (デフォルト): `/opt/mirakurun/config/tuners.yml`
- Linux (レガシー): `/usr/local/etc/mirakurun/tuners.yml`

### 構造

```yaml
# 配列
- name: チューナー識別名 # String
  types: # (GR|BS|CS|SKY|NW1~NW40|BS4K|CS4K)[]
    - GR
    - BS
    - CS
    - SKY
    - BS4K # 新4K8K衛星放送 (BS)
    - CS4K # 新4K8K衛星放送 (CS)
  # chardev/dvb用
  # "<template>"は`commandVars[template]`または"(空)"に置き換えられます *@4.0.0~
  command: cmd <channel> --arg1 --arg2 <exampleArg1> <exampleArg2>... # String
  # dvb用
  dvbDevicePath: /dev/dvb/adapter/dvr/path # String
  # リモートMirakurunとの多重化用
  remoteMirakurunHost: 192.168.x.x # String
  remoteMirakurunPort: 40772 # Integer
  remoteMirakurunDecoder: false # Boolean
  # 以下はオプション
  decoder: cmd # String
  isDisabled: false # Boolean
```

#### decoder

必要に応じてCAS処理コマンドを指定します。

```
# 参考: MPEG-2 TS の流れ
+-------------+    +----------+    +---------+    +--------+
| TunerDevice | -> | TSFilter | -> | decoder | -> | (user) |
+-------------+    +----------+    +---------+    +--------+
               RAW           STRIPPED      DESCRAMBLED
```

```sh
# これは実装例です。テスト用のみ。
sudo npm install arib-b25-stream-test -g --unsafe-perm
```

## 🗒️channels.yml

💯 Web UI 設定完全対応

### ファイルパス

- 環境変数: `CHANNELS_CONFIG_PATH`
- Docker ホスト (デフォルト): `/opt/mirakurun/config/channels.yml`
- Linux (レガシー): `/usr/local/etc/mirakurun/channels.yml`

### 構造

```yaml
# 配列
- name: チャンネル識別名 # String
  type: GR # 列挙型 [GR|BS|CS|SKY|NW1~NW40|BS4K|CS4K]
  channel: '0' # String
  # 以下はオプション
  serviceId: 1234 # Integer - 指定しない場合、サービスは自動的にスキャンされます。
  tsmfRelTs: 1 # 数値: 1~15
  commandVars: # オプションのコマンド変数 *@4.0.0~
    satellite: EXAMPLE-SAT4A
    space: 0
    freq: 12345
    polarity: H
    exampleArg1: -arg0 -arg1=example
    exampleArg2: -arg2 "引用符を使用して空白を含むことができます"
  isDisabled: false # Boolean
```

### 新4K8K衛星放送 (`BS4K` / `CS4K`)

新4K8K衛星放送 (ISDB-S3) は MPEG-2 TS ではなく **MMT/TLV** で送出されるため、Mirakurun は
**フロントエンド側で MPEG-2 TS へ変換されたストリーム**を受け取る前提で対応している
(変換には [dantto4k](https://github.com/nekohkr/dantto4k) などを使う)。
変換後は通常の TS として扱えるため、EPG (MH-EIT 由来)・サービス情報・字幕はそのまま利用できる。

```yaml
# tuners.yml (例)
- name: BS4K-1
  types:
    - BS4K
  # Windows: BonDriver_dantto4k が復号と MPEG-2 TS への変換を行う
  command: BonRecTest.exe --space <space> --ch <channel> --pipe BonDriver_dantto4k.dll -
  # Linux: 受信コマンドの出力を dantto4k にパイプする
  # command: recisdb tune --device /dev/px4video0 --channel <channel> - | dantto4k --no-progress --no-stats - -
```

```yaml
# channels.yml (例)
- name: NHK BS4K
  type: BS4K
  channel: BS4K01_0 # チューナーコマンドのチャンネル空間に合わせる
  serviceId: 4011
```

注意点:

- `channel` に書く識別子は**チューナーコマンド (BonDriver など) のチャンネル空間に依存する**。
  チャンネルスキャン (`/api/config/channels/scan`) の既定は `BS4K` が `BS4K{ch00}_{subch}` (ch 1〜23 / subch 0〜3)、
  `CS4K` が `CS4K{ch}` (ch 2〜24) だが、環境に合わせて `channelNameFormat` で上書きできる
- MMT/TLV → MPEG-2 TS の変換は選局に 15〜20 秒程度かかることがあるため、サービススキャンのタイムアウトは
  `BS4K` / `CS4K` のとき既定で 40 秒になる。足りない場合は `serviceScanTimeout` を指定する
- 映像は HEVC (H.265)、音声は MPEG-4 AAC で出力されるため、視聴・録画するクライアント側の対応が必要
