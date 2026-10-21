# 余白珈琲

架空カフェのポートフォリオ。4ページ：ホーム、珈琲とおやつ、私たちについて、店舗案内。ブランドカラー：生成り #F3F0E8 / 深緑 #263F35。明朝体の大きな見出し、自然光の写真、文章と写真の余白で静かな時間を表現。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/cafe/

編集元は各HTML、style.css、app.js。build.cjsはHTMLを再生成する原稿ソース（生成先dist）。外部依存、CDN、解析、フォーム送信、Cookie、保存APIなし。来店デモはdialogのみ。地図は実在しない概念図。

## 画像と権利

掲載写真は、この架空ブランドのためにChatGPTで生成したイメージです。第三者の写真・ストック素材は使用していません。Web掲載時にはRGB変換とJPEG圧縮のみを行っています。

| Web画像 | 内容 |
| --- | --- |
| assets/interior.jpg | 自然光と木のカフェ内観 |
| assets/handdrip-coffee.jpg | 湯気の立つ、陶器のカップ入り珈琲 |
| assets/coffee-toast.jpg | 陶器の珈琲とバタートースト |
| assets/pudding.jpg | カラメルプリン |

## 参考と実装への適用

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。即時の押下反応、入力を妨げないUI、reduced-motion、可読性の原則を参考にした。
- 写真、コピー、ロゴ、レイアウトは本案件用に制作。他社画像やコピーの転用なし。

## 静的検査

4ページ、ページごとのh1、内部ファイル・アンカー、画像参照とalt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。
