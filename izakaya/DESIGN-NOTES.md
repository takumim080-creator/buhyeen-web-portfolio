# ヨリミチ — 構図と操作の改修

料理と価格を最初に示す壁のお品書きへ変更。「串と煮込み」「もう一品」「飲みもの」の札を選ぶと、料理写真または店内写真、説明、価格と詳細リンクが切り替わります。続く宴会情報は集合料理写真に朱色の料金ポスターを重ね、7品・2時間飲み放題・税込3,800円の内容を早い段階で確認できる構成です。

PCでは札に触れたときだけ札が少し浮きます。スマホでは札を横並びの大きいタッチ操作へ変換。写真切替は180msの短いワイプのみで、カーソル追従・全体フェード・自動再生はありません。料理ページにはネイティブボタンのカテゴリ絞り込みを設け、選択中状態と件数ではなく表示カテゴリを通知します。JavaScriptなしでは全品を表示します。

Appleの重要度順序は「料理と価格→宴会条件→店の使い方」に、Carbonの表現的タイポグラフィは太い見出し・縦札・重なったポスターに対応。動きはカテゴリ選択時の写真変化と札の操作反応へ限定しています。料理・宴会・店舗案内も同じ文字組みへ揃え、金額・人数条件・お通しの扱いを維持しました。

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

飲みものの選択写真は宴会写真のビール部分を切り出したものへ変更。ジョッキ全体が見えるよう上側を優先し、選択中の商品と写真を一致させました。
