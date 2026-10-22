# 余白珈琲

架空カフェのポートフォリオ。4ページ：ホーム、珈琲とおやつ、私たちについて、店舗案内。ブランドカラー：生成り #F3F0E8 / 深緑 #263F35。明朝体の大きな見出し、自然光の写真、文章と写真の余白で静かな時間を表現。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/cafe/

編集元は各HTML、style.css、app.js。build.cjsはHTMLを再生成する原稿ソース（生成先dist）。外部依存、CDN、解析、フォーム送信、Cookie、保存APIなし。来店デモはdialogのみ。地図は実在しない概念図。

## 画像と権利

写真は架空店舗のイメージです。このサイトは架空ブランドの自主制作サンプルであり、実在の店舗や商品を示すものではありません。

| Web画像 | 内容 |
| --- | --- |
| assets/interior.jpg | 自然光と木のカフェ内観 |
| assets/handdrip-coffee.jpg | 湯気の立つ、陶器のカップ入り珈琲 |
| assets/coffee-toast.jpg | 陶器の珈琲とバタートースト |
| assets/pudding.jpg | カラメルプリン |

## 設計段階の参照と実装への適用

設計段階で参照された原則と、現在の実装で確認できる適用箇所を対応づけた記録です。

- [Starbucks 季節特設](https://www.starbucks.co.jp/cafe/blackberry/)：商品写真から味の説明、価格・商品情報へ進む階層を参考に、トップのおやつ紹介とメニューページを構成。珈琲専用写真と軽食写真を分け、各セクションに味の説明と税込価格を配置しています。
- [Apple公式 Layout](https://developer.apple.com/design/human-interface-guidelines/layout)：情報の優先順位・整列・画面への適応を参考に、見出しから本文、次の行動への順序を統一。PCの段組を狭い画面では縦に並べ、ナビゲーションを展開式に切り替えています。

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。即時の押下反応、入力を妨げないUI、reduced-motion、可読性の原則を参考にした。
- 画像、コピー、ロゴ、レイアウトは本サンプル用のものです。他社の画像・コピー・コードの無断転用は行っていません。

## 静的検査

4ページ、ページごとのh1、内部ファイル・アンカー、画像参照とalt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。


## 構図・操作の改修

最新の構図、PCとタッチの操作差、公式原文との対応は [DESIGN-NOTES.md](DESIGN-NOTES.md) に記録。トップ本文は source/home.html、追加表示は experience.css、操作は experience.js。build.cjs は同ディレクトリへ4ページを生成します。


最新トップの構図は source/home.html、追加の読みやすさと編集配置は editorial.css、記事・料理詳細の操作は experience.js。最新の参照観察と公式指針の対応は DESIGN-NOTES.md を参照。
