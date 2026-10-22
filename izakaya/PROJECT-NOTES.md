# 大衆酒場 ヨリミチ

架空大衆居酒屋のポートフォリオ。4ページ：ホーム、料理と飲み物、宴会、店舗案内。朱色 #BD3026、生成り、太い日本語見出しと料理の大写し。カフェとは構図・書体の役割・密度・導線の見せ方を変えている。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/izakaya/

編集元は各HTML、style.css、app.js。build.cjsはHTML原稿ソース（生成先dist）。外部依存、CDN、解析、保存APIなし。宴会デモは人数と時間帯のみ選択。submitはpreventDefault、dialogで税込合計を表示し、外部送信・決済・個人情報入力は行わない。実在住所・電話・レビュー・実績数値なし。

## 画像と権利

写真は架空店舗のイメージです。このサイトは架空ブランドの自主制作サンプルであり、実在の店舗や商品を示すものではありません。

| Web画像 | 内容 |
| --- | --- |
| assets/interior.jpg | 暖色の酒場内観 |
| assets/yakitori-nikomi.jpg | 焼鳥6本と大根・肉の煮込み |
| assets/banquet.jpg | 焼鳥・煮込み・唐揚げなどを囲む4人卓 |

## 設計段階の参照と実装への適用

設計段階で参照された原則と、現在の実装で確認できる適用箇所を対応づけた記録です。

- [塚田農場 公式サイト](https://www.tsukadanojo.jp/)：メニュー・宴会・店舗・予約を用途別に選べる導線を参考に、料理と飲み物、宴会、店舗案内を別ページへ整理。ヘッダーと各ページ末尾から次の行動を選べ、宴会ページには個人情報を扱わない相談デモを配置しています。
- [Apple公式 Layout](https://developer.apple.com/design/human-interface-guidelines/layout)：情報の優先順位・整列・画面への適応を参考に、料理写真と大きな見出しで要点を示し、その後に価格や条件を配置。狭い画面では写真と詳細を縦に並べ、価格リストの左右整列を維持しています。

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。押下時の即時反応、操作を止めない遷移、reduced-motion、明快な情報階層を参考にした。
- 他社サイトの画像・コピー・コードは転用していません。

## 静的検査

4ページ、h1数、内部リンク・アンカー、画像参照・alt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。


## 構図・操作の改修

最新の構図、PCとタッチの操作差、公式原文との対応は [DESIGN-NOTES.md](DESIGN-NOTES.md) に記録。トップ本文は source/home.html、追加表示は experience.css、操作は experience.js。build.cjs は同ディレクトリへ4ページを生成します。


最新トップの構図は source/home.html、追加の読みやすさと編集配置は editorial.css、記事・料理詳細の操作は experience.js。最新の参照観察と公式指針の対応は DESIGN-NOTES.md を参照。
