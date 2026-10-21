# 余白珈琲 — 構図と操作の改修

トップの主役をメニュー選択へ変更。珈琲・プリン・トーストを写真、説明、税込価格と同時に切り替える見開きとし、短い店便りを続けています。大きな写真、細い目次、ずれたキャプションで視線を動かし、同じ幅の帯やカードを繰り返さない構成です。

PCでは写真の内側だけが小さくポインタに応答します。スマホは横スワイプと44pxの前後ボタンを用意し、縦スクロールを妨げません。目次は矢印キー・Home・Endでも操作できます。写真切替は230ms、店便りの写真だけに一度の控えめな表示変化を使っています。店便りはネイティブdetailsで開閉。通常カーソルを維持しています。

Appleの重要度順序は「商品→価格→短い店便り→来店情報」に、Carbonの表現的タイポグラフィは目次と大小写真の非対称配置に対応。動きは商品選択の関係を補助し、価格・案内・実店舗でない旨は静止状態でも読めます。メニュー・店について・店舗案内も写真のずれと編集的な見出しへ揃えました。

## 公式記述と適用範囲

以下は公式ガイド本文の記述と、このWebサイトで選んだ設計の対応です。ネイティブアプリ固有の外観を再現したものではありません。

- [Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout): “Order content by relative importance.” 情報の重要度を配置順へ反映。段組みは狭い画面で読み順を保った縦配置に変わります。
- [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion): “Add motion purposefully, supporting the experience without overshadowing it.” 選択結果の短い変化を補助する動きに限定。状態は写真だけでなく見出し・価格・選択ボタン・読み上げ通知でも伝えます。
- [IBM Carbon Typography](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies): “not restricted to a container, card, or data table” 表現的な場面の写真と文字を均等カードへ閉じず、操作部分はコンパクトに整列させています。
- [IBM Carbon Motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview): “Reserve expressive motion for occasional, important moments” 常時再生やスクロールの強制を行わず、選択の瞬間に動きを絞っています。
- [W3C Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html): ボタンはネイティブ要素で、Enter / Spaceで操作可能。
- [W3C Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): 最低24 CSS pxという基準に対し、主要な選択・前後操作は高さ44px以上を確保。
- [W3C Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html): 非必須の操作起因アニメーションを無効にできる考え方に従い、OSの `prefers-reduced-motion` をCSSとJavaScriptで尊重。この項目はAAAの説明資料であり、サイト全体の適合認証を意味しません。

企業サイトの観察と公式ガイドラインは区別しています。他社の画像・コピー・コードは転用していません。


## 実画面レビューからの補正

商品選択肢にも税込価格を併記。高さの短いPC画面でも、選ぶ位置で名称と価格を確認できます。
