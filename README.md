# Next.js Starter (TypeScript)

## Tech Stack
- [Next.js](https://nextjs.org/)
- [react](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-query](https://react-query.tanstack.com/)
- [react-hook-form](https://react-hook-form.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [storybook](https://storybook.js.org/)


## Getting Started
1. リポジトリをクローン
2. ライブラリのインストール
```bash
yarn install
```
3. dockerでサーバーを起動
```bash
docker-compose up
```
4.  [http://localhost:3000](http://localhost:3000) を開く


## ディレクトリ構成
```
.
├── __test__
├── component
│   ├── context
│   ├── layout
│   ├── pages
│   └── ui
├── constant
├── feature
│   └── sampleApi
│       ├── adapter
│       │   └── hooks.ts
│       ├── data
│       │   ├── mock.ts
│       │   └── repository.ts
│       ├── domain
│       │   ├── entity.ts
│       │   ├── interactor.ts
│       │   └── usecase.ts
│       └── index.ts
├── helper
├── hooks
├── lib
├── mock
├── pages
└── type
```

### component
- context / contextを定義する
- layout / ページのレイアウトを定義する
- pages / next.jsのpagesの実態
- ui / buttonやcheckboxなど再利用可能な最小限のコンポーネントを定義する。

### constant
- 定数を定義する

### feature
アプリケーションの機能を定義する。

clean architectureをベースにしたディレクトリ構成を採用。
application domainとdata layerまでを定義する。presentation layerはcomponentにHooksとして定義する。
- adapter / componentにHooksとして定義する
    - hooks / componentにHooksとして定義する

- data / データの取得や保存を行う
  - mock / モックデータを定義する
  - repository / データの取得や保存を行う

- domain / ビジネスロジックを定義する
  - entity / ドメインモデルを定義する
  - usecase / ユースケースを定義する
  - interactor / usecaseの実装を定義する
  - index.ts / featureのエントリーポイント

### helper
- アプリケーション全体で使用するヘルパー関数を定義する

### hooks
- アプリケーション全体で使用するHooksを定義する

### lib
- 外部ライブラリのラッパーやconfigを定義する

### mock
- mswのhandlerの定義を行う

### pages
- Next.jsのpagesディレクトリ。componentの実態はcomponent/pagesに定義する。

### type
- アプリケーション全体で使用する型定義を定義する
