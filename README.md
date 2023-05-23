# Next.js Starter (TypeScript)

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/mxkx74/nextjs-typescript)

## 技術Stack

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,typescript,styledcomponents,jest,docker)](https://skillicons.dev)

- [Next.js](https://nextjs.org/)
- [react](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [tanstack/query](https://tanstack.com/query/latest)
- [react-hook-form](https://react-hook-form.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [storybook](https://storybook.js.org/)
- [docker](https://www.docker.com/)
<br><br>

## 初めに

1. リポジトリをクローン

```bash
git clone git@github.com:mxkx74/nextjs-clean-architecture-sample.git
```

2. ライブラリのインストール

```bash
yarn install
```

3. dockerでサーバーを起動

```bash
docker-compose up
```

4. [http://localhost:3000](http://localhost:3000) を開く
<br><br>

## アーキテクチャー

Clean Architectureをベースに、異なるレイヤー間の境界と関心の分離をする。domain、infrastructureをview frameworkから分離し依存しないようにすることで保守性、テスト性、スケーラビリティに優れたものにすることを意識する。

![68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3337323830342f63316536326265632d313231382d353335392d396337622d3865326634626136396131642e706e67](https://user-images.githubusercontent.com/11023893/236092356-0a3c1e5b-657c-4f03-aa4f-c786574bee9a.png)

本プロジェクトでのレイヤー構成は以下の通り。

- __Infrastructure Layer__ / データの取得や保存を行う
- __Domain Layer__ / ドメインモデルを定義する
- __Interface Adapters Layer__ / ドメインモデルをUIに適した形に変換する
- __Presentation Layer__ / ユーザーインターフェースを定義する

各レイヤーへの依存は[linter(eslint-plugin-strict-dependencies)](https://github.com/knowledge-work/eslint-plugin-strict-dependencies)で制限し外側のレイヤーにはアクセスできないようにする。<br>

### Infrastructure Layer

- datastore(未使用)
- repository
- mock data

Repositoryを通してデータの取得や保存を行う。<br>
データの取得先がapi以外にfirebaseやlocalstorageなどが必要になった場合はdatastoreを定義し、Repositoryはdatastoreを使用するようにする。<br>
reactやNext.jsなどのviewフレームワークライブラリに依存しない。

### Domain Layer

- entity
- usecase
- interactor

Entityにビジネスロジックを定義する。frontendの場合主にAPIの型を定義することになる。外部APIなどの複数のAPIを組み合わせてEntityを定義する場合は集約ルートを定義する。<br>

```typescript
// 集約rootの型定義
export type sampleEntity = {
  id: string;
  users: userEntity[]
};
```

usecaseにはinput portやoutput portなど型のみを定義し、interactorでusecaseの実装を行う。
interactorがRepositoryを使用することによって外側のレイヤーに依存することになるが、依存性逆転の原則を守るためにrepositoryのinterfaceをusecaseで定義し、interactorはinterfaceに依存するようにする。<br>
またentityからview modelへの変換もこのレイヤーで行う。

##### ・feature/domain/usecase.ts

```typescript
// repositoryのinterfaceをusecaseで定義
export type SampleRepository = {
  getSample: () => Promise<sampleEntity>;
};
```

##### ・feature/domain/interactor.ts

```typescript
import type { SampleRepository } from './usecase';

// interactorではrepositoryをimportせずinterfaceに依存する
export const sampleInteractor = (repository: SampleRepository) => {
  return {
    async findById(id: number) {
      return repository.findById(id)
        // entityからview modelへの変換しgetする
        .then((data) => convertToSampleResponseModel(data));
    },

    async create(data: SampleRequestParams) {
      return repository.create(convertToSampleRequestModel(data))
        // view modelからentityへの変換しpostする
        .then((data) => convertToSampleResponseModel(data));
    },
  };
};
```

### Interface Adapters Layer

- adapter

usecaseレイヤーとpresentationレイヤーの橋渡しを行う。<br>
tanstack/queryやSWRなどのキャッシュクライアントを使用する場合はここで定義する。
<br>
viewフレームワークに依存できる。

### Presentation Layer

- hooks
- components

viewフレームワークに依存するレイヤー。
<br><br>

## ディレクトリ構成

```
.
├── __test__
├── component
│   ├── context
│   ├── layout
│   ├── pages
│   ├── application
│   └── ui
├── constant
├── feature
│   └── sampleApi
│       ├── adapter
│       │   └── hooks.ts
│       ├── infrastructure
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

- __context__ / contextを定義する
- __layout__ / ページのレイアウトを定義する
- __pages__ / next.jsのpagesの実態
- __application__ / ヘッダーなどapplication固有の共通コンポーネント
- __ui__ / buttonやcheckboxなど再利用可能な最小限のコンポーネントを定義する。デザインシステムやuiフレームワークなどを使う場合は丸っと置き換えられるようにする。

 uiからpagesへの依存はlinterで制限する。

### constant

- 定数を定義する

### feature

アプリケーションの機能を定義する。<br>
clean architectureをベースにしたディレクトリ構成を採用。
application domainとdata layerまでを定義する。<br>
presentation layerはcomponentにHooksとして定義する。

- __adapter__ / usecaseレイヤーとpresentationレイヤーの橋渡しを行う
  - __hooks__ / interactorを持ち、presentationに最適な形でデータを提供する

- __infrastructure__ / データの取得や保存を行う
  - __mock__ / モックデータを定義する
  - __repository__ / データの取得や保存を行う

- __domain__ / ビジネスロジックを定義する
  - __entity__ / ドメインモデルを定義する
  - __usecase__ / infrastructureとdomainを繋ぐinterfaceを定義する
  - __interactor__ / usecaseの実装を定義する

### theme

- colorやfont sizeなどtoken、semanticな定数を定義する

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

## TODO

- App directory対応
- zero runtime css in jsの導入
- global stateをcontextからrecoilに変更
