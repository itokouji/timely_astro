# Timely Badminton Club — Astro prototype

現在の https://www.timelybad.mydns.jp/ をベースにした、Astro + Tailwind CSS のトップページ・プロトタイプです。

## 必要環境

- Node.js
- npm

## 起動

```bash
npm install
npm run dev
```

ブラウザで表示されたURL（通常は http://localhost:4321/）を開きます。

## 文章を更新する場所

文章や予定は、`src/content/` 配下の Markdown ファイルで管理しています。サイトを更新する際は、原則として `.astro` ファイルではなく以下を編集してください。

| ファイル | 更新内容 |
| --- | --- |
| `src/content/index.md` | トップページの紹介文、次回練習、予定、お知らせ、参加案内 |
| `src/content/schedule.md` | スケジュールページの見出し・説明・練習予定 |
| `src/content/news.md` | ニュース一覧 |
| `src/content/about.md` | クラブ紹介カード |
| `src/content/site.md` | クラブ名、メニュー、フッターの共通文言 |

各ファイル先頭の `---` から `---` までが設定エリア（frontmatter）です。たとえば練習予定を追加する場合は、`practices:` の下に既存項目と同じ形式で追加します。

```md
  - date: "9/6"
    day: "SUN"
    place: "稲城市内体育館"
    time: "19:00 — 21:00"
```

保存後、開発サーバー（`npm run dev`）を開いていれば自動的に画面へ反映されます。

## 本番ビルド

```bash
npm run build
```

生成物は `dist/` に作成されます。

## GitHub Pagesで公開

このリポジトリには、`main` ブランチへの push をきっかけにビルドし、`gh-pages` ブランチへ公開する GitHub Actions を設定しています。外部の `actions/*` を使用しないため、外部 Action を禁止しているリポジトリでも実行できます。

1. GitHub にこのプロジェクトを push します（デフォルトブランチは `main` にします）。
2. リポジトリの **Settings > Pages > Build and deployment** で、Source に **Deploy from a branch**、Branch に **`gh-pages` / `/ (root)`** を選択します。
3. `main` に push すると、Actions の `Deploy Astro site to GitHub Pages` が実行されます。
4. 公開 URL は、リポジトリの **Settings > Pages** に表示されます。

プロジェクトサイト（`https://ユーザー名.github.io/リポジトリ名/`）に必要なパスは、Actions が `GITHUB_REPOSITORY` から自動設定します。独自ドメインを使う場合は、GitHub Pages の Custom domain に設定し、必要に応じて Actions の `SITE_URL` と `BASE_PATH` を調整してください。

## 次の段階

1. 実際の練習スケジュールを移植
2. MkDocsのニュースをMarkdown/Content Collectionsへ移行
3. 実際の活動写真をHero / Galleryへ追加
4. 参加方法・連絡先を現在のサイト内容に合わせて追加
5. GitLab CI/CDで自動ビルド・デプロイ
