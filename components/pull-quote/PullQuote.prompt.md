One-line: a person speaking — a chef on his craft, a guest on their day; never a slogan (that is `QuoteBar`).

```jsx
<PullQuote portrait={IMG.chefPortret} name="Wouter Berghuis" role="Chef-kok en patissier" tone="cream">
  Roos en ik kunnen lezen en schrijven met elkaar. We delen een gedachte zonder die uit te spreken.
</PullQuote>
```

Quotes are set in sentence case display serif at reading size, with curly quotes added automatically — do not type them yourself. Three tones (cream, sage, deep); the attribution is the only uppercase element. Without `portrait` the block centres at 920px and `align` applies.

**`compact` is de reviewvorm.** Zelfde stem, kaartformaat, geen portret — voor twee of drie reacties naast
elkaar boven de afsluiting. Dit was een eigen `TestimonialCard` in gespatieerde kapitalen; dat leest niemand
bij reviewlengte, dus staat ook deze vorm in gewone zin. De aanhalingstekens zeggen al dat het een citaat is.

**Compact staat nooit op sage.** Wit op sage haalt 2,6:1, en die band draagt alleen groot zetsel: de volle
vorm mag er wél staan (23px), een review van 16px met een bijschrift van 10,5px niet. Geef je toch
`tone="sage"` mee, dan valt de compacte vorm terug op crème.

Er zijn nu twee quote-vormen en het verschil is helder: een **band met een slogan** (`QuoteBar`) of een
**mens die iets zegt** (`PullQuote`, met of zonder portret, vol of compact).
