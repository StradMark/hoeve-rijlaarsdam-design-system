One-line: the "veel opstellingen" / "Wat maakt het bijzonder" grid — big line icon on a sage tile, two or three lines of text, and the caption in gold UNDER the tile (as in the mockups).

```jsx
<InfoTile icon="assets/icons/opstelling-carre.svg" title="Carré" meta="2,5 m² p.p." body="…" />
<InfoTile caption="inside" tone="deep" title="Eigen keuken" body="…" />   // tegels op een gekleurde sectie
```

Nine floor plans live in `assets/icons/opstelling-*.svg`: theater, cabaret, school, u-vorm, carre, bestuurstafel,
banket, receptie, feest. Line drawings on a 96 grid — outlined tables with seams between the leaves, chairs seen
from above (rounded seat + back rail), a light room frame, platforms (podium, bar, buffet) at 70%. Default
`iconSize` 152 for the plans, 64–80 for feature tiles; the tile recolours the SVG per tone.

**Caption placement decides the colour.** `caption='below'` (default) puts it in gold on the page — that is the
mockup, and gold on white is allowed. `caption='inside'` puts a hairline and the caption in the tile, in white on
sage / dark green on soft sage / gold on cream and deep. Use it whenever the grid itself sits on a coloured band:
goud op sage is verboden.
