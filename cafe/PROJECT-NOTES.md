# 余白珈琲

架空カフェのポートフォリオ。4ページ：ホーム、珈琲とおやつ、私たちについて、店舗案内。ブランドカラー：生成り #F3F0E8 / 深緑 #263F35。明朝体の大きな見出し、自然光の写真、文章と写真の余白で静かな時間を表現。

公開先： https://takumim080-creator.github.io/buhyeen-web-portfolio/cafe/

編集元は各HTML、style.css、app.js。build.cjsはHTMLを再生成する原稿ソース（生成先dist）。外部依存、CDN、解析、フォーム送信、Cookie、保存APIなし。来店デモはdialogのみ。地図は実在しない概念図。

## 画像と権利

親タスクでChatGPT新規生成。Library正規転送によりPCへ取得。第三者写真・ストック写真不使用。元PNGは作業フォルダincoming-imagesと親タスクのLibraryに保存。JPEGはRGB変換・圧縮のみで被写体を変更していない。

| Web画像 | Library ID | 内容 |
| --- | --- | --- |
| assets/interior.jpg | libfile_1f4bca02a3b48191bac7289fd2a4e2b7 | 自然光と木のカフェ内観 |
| assets/coffee-toast.jpg | libfile_ef6b7a63a7488191960808b1734f8dff | 陶器の珈琲とバタートースト |
| assets/pudding.jpg | libfile_f6dd9a0c74d88191b709d7e2ba57f104 | カラメルプリン |

元の生成プロンプトは親タスクが管理。この子タスクには完成画像IDのみ提供されたため、原文を推測して記録していない。

## 参考と実装への適用

- 指定の第三者UIスキル：https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md （Apple公式ではない）。即時の押下反応、入力を妨げないUI、reduced-motion、可読性の原則を参考にした。
- 写真、コピー、ロゴ、レイアウトは本案件用に制作。他社画像やコピーの転用なし。

## 静的検査

4ページ、ページごとのh1、内部ファイル・アンカー、画像参照とalt、架空表示、JavaScript構文チェック済み。実ブラウザ結果はQA.mdに追記。
