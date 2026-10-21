# 大衆酒場 ヨリミチ

架空大衆居酒屋のポートフォリオ。4ページ：ホーム、料理と飲み物、宴会、店舗案内。朱色 #BD3026、生成り、太い日本語見出しと料理の大写し。カフェとは構図・書体の役割・密度・導線の見せ方を変えている。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/izakaya/

編集元は各HTML、style.css、app.js。build.cjsはHTML原稿ソース（生成先dist）。外部依存、CDN、解析、保存APIなし。宴会デモは人数と時間帯のみ選択。submitはpreventDefault、dialogで税込合計を表示し、外部送信・決済・個人情報入力は行わない。実在住所・電話・レビュー・実績数値なし。

## 画像と権利

親タスクでChatGPT新規生成し、Library正規転送でPCへ取得。第三者写真不使用。元PNGは作業フォルダincoming-imagesおよび親タスクのLibraryに保存。JPEGはRGB変換・圧縮のみ。

| Web画像 | Library ID | 内容 |
| --- | --- | --- |
| assets/interior.jpg | libfile_b1f1937a0914819187c0dccd9d3ec04c | 暖色の酒場内観 |
| assets/yakitori-nikomi.jpg | libfile_d0fb9420b7e08191928393155d47ce6d | 焼鳥6本と大根・肉の煮込み |

元の生成プロンプトは親タスクが管理。この子タスクには完成画像IDのみ提供されたため、原文を推測して記録していない。写真を目視し、焼鳥を6本、煮込みを大根と肉、価格は990円の設定に合わせた。

## 参考と実装への適用

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。押下時の即時反応、操作を止めない遷移、reduced-motion、明快な情報階層を参考にした。
- 他社サイトの画像やコピーは転用していない。

## 静的検査

4ページ、h1数、内部リンク・アンカー、画像参照・alt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。
