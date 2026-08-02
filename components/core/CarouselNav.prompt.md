One-line: the carousel's prev/next control — a hairline ring with a thin chevron, filling with its tone on hover.

```jsx
<CarouselNav direction="prev" tone="gold" onClick={()=>go(-1)}/>
<CarouselNav direction="next" tone="gold" onClick={()=>go(1)}/>

<CarouselNav direction="next" tone="white"/>        // op de sage-band en op foto's
<CarouselNav direction="next" tone="deep" disabled/> // einde van een carousel die niet rondloopt
```

**A hairline, not a filled shape.** The ring and the chevron are the same drawn line as the gold rules under
the room captions and the hairlines in `PriceList` — a solid triangle belongs to a video player, not to this
brand. On hover the ring fills with its tone, the chevron flips to the contrasting colour and steps one
notch in its own direction.

**Always a pair, never alone**, and never the only way forward: the carousel also responds to swiping and to
the keyboard. A single arrow reads as "there is one more thing"; two read as "you can browse".

`tone` picks the field, not the mood: sage on white, `gold` on white, crème or bottle green — **never on a
sage band** (1.3:1, and the gold goes dull) — `deep` on light photos, `white` on sage, on the deep panel and
on dark photography.

`size` defaults to 44px, the touch minimum. Only go smaller in a dense desktop-only row, and never under 32.
