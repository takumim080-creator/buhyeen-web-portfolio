# SUIRO design rationale

A large photograph is the stage for choosing one product. Name, texture, size, price and background respond to the selection. The catalogue is a comparison ledger, not three repeated photo cards. Brand text is an optional note; the next chapter is the actual skincare sequence. The journal uses one reading column and a contents margin.

PC: bounded light and slight movement inside the product photo only; labelled choice buttons remain the primary control. Mobile: large horizontal choice buttons, native vertical scrolling, and an optional horizontal gesture. Keyboard has the same choices. The native cursor is never hidden.

## Official principles used

- [Apple HIG Layout](https://developer.apple.com/design/human-interface-guidelines/layout): prioritize product choice and price, then reveal supplemental brand reading. Preserve the same choices at different widths.
- [Apple HIG Motion](https://developer.apple.com/design/human-interface-guidelines/motion): motion supports the selection and is optional. Media-query reduction and an explicit control remove motion while leaving all information.
- [IBM Carbon Typography](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies): use an open editorial photographic space, with compact task controls and a clear scale difference.
- [IBM Carbon Motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview): reserve the more visible transition for product changes; keep hover feedback brief and avoid page-wide movement.

These are principles applied to a web portfolio, not claims of platform certification. No layout or code from the reference companies was copied.
