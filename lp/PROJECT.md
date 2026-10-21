# NOMA DRIP

架空の持ち運び用折りたたみドリップ器具のコンセプトサイト。トップLPと使い方・デモ注記の2ページ。紙白 #F6F7F4、墨 #202927、深緑 #456C55。生活写真から使用手順、コンセプト仕様、製品選択へ進む構成。各ページが編集可能な静的HTMLで、styles.css / app.js を使用。ビルドや外部ライブラリは不要。

公開先: https://takumim080-creator.github.io/buhyeen-web-portfolio/lp/

## デモ

カラーと数量を確認する画面だけで終了する。氏名・住所・メールなどの欄なし。form / fetch / XHR / sendBeacon / 保存API / 解析 / 決済なし。dialog は Esc で閉じ、元のボタンへフォーカスを戻す。メニューも Esc 対応。

## 画像・権利

ChatGPT built-in image_gen による本件用の生成写真。親担当から Library の正規転送でPCへ保存。第三者画像は不使用。WebPはファイル形式・圧縮のみで内容は変更していない。写真にはケースは写っていないため、写真の説明も器具本体に限定。折りたたみと付属ケースは架空コンセプト仕様であり、試験済み性能とは扱わない。

- hero.webp: lp-dripper-travel.png / libfile_bb3825e47ddc81918e95472790b313a6
- product.webp: lp-dripper-product.png / libfile_9ee9f5a1152881919e2e65e607df6963

生成プロンプト原文は assets/provenance.json に保存。

## 参考

- https://kinto.co.jp/collections/travel-tumbler — 生活シーンから道具の情報へ進む順序を参考。他社コピー・写真・部品は転用しない。
- https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md — 第三者UI資料（Apple公式ではない）。即時フィードバック、文字階層、操作の予測可能性、reduced-motionを適用。
- https://www.w3.org/WAI/WCAG22/Understanding/reflow.html — 320pxでのリフロー。
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html — 操作対象サイズ。主要操作は44px以上。

QA結果は QA.md に記録。
