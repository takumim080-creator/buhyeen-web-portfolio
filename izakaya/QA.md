# 公開QA — 大衆酒場 ヨリミチ

公開URL： https://takumim080-creator.github.io/buhyeen-web-portfolio/izakaya/

2026-10-22 JST、ユーザーPCのChrome実ブラウザからGitHub PagesのHTTPS URLで検証。ローカルfile表示やlocalhostは使用していない。

| 項目 | 結果 |
| --- | --- |
| 全4ページ | index / menu / party / shop を公開URLで表示 |
| PC | 1536px、横はみ出しなし、画像欠けなし |
| スマホ・タブレット | 320 / 390 / 768pxで全4ページを確認、横はみ出し・画像欠けなし |
| モバイル見出し | QAで不自然な折返しを発見し、clampによるサイズ調整を実施。最終390pxで2行に収まることをスクリーンショットで確認 |
| ページリンク | 全ファイルとアンカーの静的照合にエラーなし。全4ページを公開URLで実表示 |
| モバイルメニュー | タップ・Enterで開く、Escapeで閉じる。ボタンにフォーカス復帰 |
| 宴会デモ | 8名・19:00 → 合計30,400円。タップとEnterで確認dialog、Escapeで閉じる |
| フォーム送信 | submitをpreventDefaultで停止。操作後もURL不変。名前・連絡先欄なし、fetch/XHR・保存API・決済なし |
| 架空表示 | 各ページのフッター、フォーム付近、確認画面に明示 |
| 画像整合 | 焼鳥6本・大根と肉の煮込み、商品画像の内容に合わせて原稿修正 |
| JavaScript | 構文チェック成功、検証時のブラウザエラーなし |

画面証拠： [PC](evidence/izakaya-desktop.jpg) / [修正後スマホ](evidence/izakaya-mobile.jpg) / [宴会デモ](evidence/izakaya-demo.jpg)

編集元・画像の案内・権利メモは [PROJECT-NOTES.md](PROJECT-NOTES.md)。CSS/JSに版付き参照を使い、GitHub Pagesの古いキャッシュから修正版に切り替わることを確認した。

追加確認：宴会専用の集合料理写真を使用。現金・クレジットカード、お通し330円（税込）、席料なし、宴会コースはお通し追加なしと記載。コース試算は人数×3,800円のままで、追加料金を加算しません。
