# 公開QA — 余白珈琲

公開URL： https://takumim080-creator.github.io/buhyeen-web-portfolio/cafe/

2026-10-22 JST、ユーザーPCのChrome実ブラウザからGitHub PagesのHTTPS URLで検証。ローカルfile表示やlocalhostは使用していない。

| 項目 | 結果 |
| --- | --- |
| 全4ページ | index / menu / about / access を公開URLで表示 |
| PC | 1440px、横はみ出しなし、画像欠けなし |
| スマホ・タブレット | 320 / 390 / 768pxで全4ページを確認、横はみ出し・画像欠けなし |
| ページリンク | 全ファイルとアンカーの静的照合にエラーなし。モバイルナビからメニューページへ実移動 |
| モバイルメニュー | タップ・Enterで開く、Escapeで閉じる。閉じたあとボタンにフォーカス復帰 |
| 来店デモ | Enterでdialogが開く、内容と架空表示確認、Escapeで閉じる |
| 収集・送信 | 個人情報入力欄、form、fetch/XHR、保存API、外部スクリプトなし |
| 表示内容 | 各ページのフッターに架空店舗・AI生成写真の表示あり |
| キーボード | focus-visible、スキップリンク、ネイティブdialog、メニューEnter/Escape確認 |
| JavaScript | 構文チェック成功、確認したページでブラウザエラーなし |

画面証拠： [PC](evidence/cafe-desktop.jpg) / [スマホ](evidence/cafe-mobile.jpg) / [来店デモ](evidence/cafe-demo.jpg)

編集元・画像ID・権利メモは [PROJECT-NOTES.md](PROJECT-NOTES.md)。依存関係のない静的HTML/CSS/JS。実店舗の営業や予約機能はない。

追加確認：メニューの珈琲と軽食で写真を分け、被写体に合わせたaltを確認。店舗案内に現金・クレジットカードの支払方法を明示しています。画像管理用IDは非公開台帳に保管しています。
