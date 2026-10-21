# 大衆酒場 ヨリミチ

架空大衆居酒屋のポートフォリオ。4ページ：ホーム、料理と飲み物、宴会、店舗案内。朱色 #BD3026、生成り、太い日本語見出しと料理の大写し。カフェとは構図・書体の役割・密度・導線の見せ方を変えている。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/izakaya/

編集元は各HTML、style.css、app.js。build.cjsはHTML原稿ソース（生成先dist）。外部依存、CDN、解析、保存APIなし。宴会デモは人数と時間帯のみ選択。submitはpreventDefault、dialogで税込合計を表示し、外部送信・決済・個人情報入力は行わない。実在住所・電話・レビュー・実績数値なし。

## 画像と権利

掲載写真は、この架空ブランドのためにChatGPTで生成したイメージです。第三者の写真・ストック素材は使用していません。Web掲載時にはRGB変換とJPEG圧縮のみを行っています。

| Web画像 | 内容 |
| --- | --- |
| assets/interior.jpg | 暖色の酒場内観 |
| assets/yakitori-nikomi.jpg | 焼鳥6本と大根・肉の煮込み |

## 参考と実装への適用

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。押下時の即時反応、操作を止めない遷移、reduced-motion、明快な情報階層を参考にした。
- 他社サイトの画像やコピーは転用していない。

## 静的検査

4ページ、h1数、内部リンク・アンカー、画像参照・alt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。
