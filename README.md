# Todo App

最新バージョンのNext.js (15.5.3) を使用して作成されたモダンなTodoアプリケーションです。

![Todo App Screenshot](https://github.com/user-attachments/assets/3ddfac5b-9d71-489b-a8bc-bda03159aa37)

## 機能

- ✅ タスクの追加
- ✅ タスクの完了/未完了の切り替え
- ✅ タスクの削除
- ✅ 完了済みタスクの一括削除
- ✅ アクティブ、完了済み、総タスク数の表示
- ✅ レスポンシブデザイン
- ✅ ダークモード対応
- ✅ TypeScript完全対応

![Todo App with Items](https://github.com/user-attachments/assets/7bb1d8dc-58f3-4ec9-b99d-4736b7659717)

## 技術スタック

- **Next.js 15.5.3** - React フレームワーク（最新版）
- **React 19.1.0** - UIライブラリ（最新版）
- **TypeScript** - 型安全性
- **Tailwind CSS 4.x** - スタイリング（最新版）
- **ESLint** - コード品質管理

## 開始方法

### 前提条件

- Node.js 18.x 以上
- npm 9.x 以上

### インストールと実行

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認

## 利用可能なコマンド

```bash
# 開発サーバー起動（Turbopack使用）
npm run dev

# プロダクションビルド（Turbopack使用）
npm run build

# プロダクションサーバー起動
npm run start

# ESLintによるコード検査
npm run lint
```

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css          # グローバルスタイル
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx             # メインページ（Todo App）
└── ...
```

## 使用方法

1. **タスクの追加**: 入力欄にタスクを入力して「Add」ボタンをクリックするか、Enterキーを押します
2. **タスクの完了**: チェックボックスをクリックしてタスクを完了済みにマークします
3. **タスクの削除**: 各タスクの×ボタンをクリックして個別に削除します
4. **完了済みタスクの一括削除**: 「Clear Completed」ボタンで完了済みタスクをまとめて削除します

## デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelに接続
2. 自動的にデプロイされます

### その他のプラットフォーム

```bash
npm run build
npm run start
```

詳細については [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
