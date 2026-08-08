# AGENTS.md

このリポジトリで作業するエージェント向けのガイドです。対象範囲はリポジトリ全体です。

## 最優先

- 変更前に既存実装と設定を確認する。
- 不要なリファクタリングや整形変更はしない。
- 既存の未コミット変更は触らない。明示的な依頼がない限り巻き戻さない。
- 変更は最小差分で行う。

## プロジェクト概要

Mirakurun は、日本のデジタル TV チューナー向け API サーバーです。Node.js / TypeScript で実装され、サーバー側は Express 5 と express-openapi、Web UI は React 19、React Router 8、Blueprint UI 6、Sass、webpack を使用します。

## 主要ディレクトリ

- `src/Mirakurun`: サーバー本体、チューナー管理、EPG、ストリーム処理、設定読み込み。
- `src/Mirakurun/api`: express-openapi の operation 実装。ファイルパスが API パスに対応。
- `src/ui`: Web UI。React コンポーネント、ルート、Sass、UI 用 TypeScript 設定。
- `config`: 既定の設定ファイル。実行時に環境変数や Docker 設定とマージされる場合がある。
- `doc`: セットアップ、設定、プラットフォーム関連のドキュメント。依存パッケージの更新方針と `overrides` の意図は `doc/Dependencies.ja.md` を参照。
- `test`: Node.js 標準テストランナーのテスト。通常は `lib` のビルド済み JS を読む。
- `docker`: Dockerfile、Compose 設定、コンテナ初期化スクリプト。
- `lib`: ビルド出力。必要な場合以外は手編集しない。

## 開発コマンド

- 依存関係のインストール: `npm install`
- サーバーと UI のビルド: `npm run build`
- サーバーのみのビルドと TSLint: `npm run build:server`
- UI の webpack ビルド: `npm run build:webpack`
- テスト: `npm test`
- テストの watch 実行: `npm run test:watch`
- watch ビルド: `npm run watch`
- 開発起動: `npm run start`
- デバッグ起動: `npm run debug`
- クリーンアップ: `npm run clean`
- Docker ビルド: `npm run docker:build`
- Docker 起動: `npm run docker:run` または `npm run docker:up`
- Docker セットアップ起動: `npm run docker:run-setup`
- Docker コンテナ内シェル: `npm run docker:bash`
- Docker デバッグ起動: `npm run docker:debug`
- Docker 停止: `npm run docker:down`
- Docker ログ: `npm run docker:logs`

テストは `../lib/...` のビルド済み JS を参照することがあります。通常は `npm run build` の後に `npm test` を実行してください。

## コーディング規約

- TypeScript は `tslint.json` に従う。
- 既存コードに合わせて、ダブルクォート、セミコロン、スペースインデントを使う。
- 既存ファイルの Apache License ヘッダーは維持する。新規ファイルも周辺に合わせる。
- 公開 API や型を変える場合は、関連する定義も同時に更新する。
- JSON レスポンスは既存の `src/Mirakurun/api.ts` の helper を優先する。

## API 変更時の注意

- API の実装は `src/Mirakurun/api/**` に置く。
- `Operation` と `apiDoc` は既存パターンに合わせる。
- API パス、レスポンス、リクエスト body、定義型を変える場合は `api.yml` と整合させる。
- 公開型を変える場合は `api.d.ts` と必要に応じて `index.d.ts` も更新する。
- **`api.yml` は `GET /api/docs` がそのまま返す定義であり、クライアントライブラリ (npm `mirakurun`) は
  `/docs` の定義から operationId・パス・パラメータ位置を解決する。実装と食い違うとクライアント側の
  型解釈と実データがずれる。** レスポンス型を触るときは必ず「実装 (`src/Mirakurun/**` の `export()` /
  `toItem()` など)・`api.d.ts`・`api.yml`」の三者を突き合わせる。
  - 過去に `Service.channel` が実装・`api.d.ts` では配列、`api.yml` では単数 (`$ref: '#/definitions/Channel'`)
    になっていた不整合があった (2026-08-09 に `api.yml` を配列へ修正)。同種の不整合を再発させないこと。
  - `ChannelType` の enum はフォーク独自の `NW1`〜`NW40` を含む。`src/Mirakurun/common.ts` の
    `channelTypes` と `api.d.ts` と `api.yml` の 3 か所を必ず揃える。
- ストリーム系 API はチューナー資源、エラー変換、接続終了時の後処理に注意する。

## UI 変更時の注意

- UI は `src/ui/tsconfig.json` と `webpack.config.js` 経由でビルドされる。
- ルートは `src/ui/index.tsx`、画面実装は主に `src/ui/routes`、共通部品は `src/ui/components` にある。
- 既存の Blueprint UI、Blueprint Icons、Sass の設計に合わせる。
- 共有状態や RPC / REST 取得は `src/ui/modules/state.ts` の既存パターンを優先する。
- UI の表示時刻は Luxon の `Asia/Tokyo` / `ja` 前提を維持する。

## 設定と実行時挙動

- `config/server.yml`, `config/tuners.yml`, `config/channels.yml` は既定値。
- Docker 実行時は環境変数でサーバー設定が上書き・マージされる。
- 実機チューナー、DVB/ISDB デバイス、ネットワーク、Unix ドメインソケットに依存する処理は、ローカルで再現できない場合がある。
- 再現できない場合は、影響範囲を明記して、可能な範囲でユニットテストや静的検証を行う。

## 変更後の確認

- TypeScript / API / UI の変更では、基本的に `npm run build` を実行する。
- 挙動変更やロジック変更では、`npm run build` 後に `npm test` を実行する。
- ドキュメントのみの変更では、内容の目視確認でよい。
- 実行できなかった検証は、最終報告で理由を明記する。
