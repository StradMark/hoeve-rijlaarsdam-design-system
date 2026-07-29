One-line: bare solid triangle used as the only carousel control in the brand — no circle, no border, no shadow.

```jsx
<CarouselNav direction="prev" tone="sage" onClick={prev} />
<CarouselNav direction="next" tone="sage" onClick={next} />
```

Placed at the far left/right edge of the viewport, vertically centred on the strip it controls. Hover nudges 3px in its direction.

**Kleurregel.** `tone` verwijst naar de kleur van de driehoek, niet naar de band eronder. De standaard `sage` is bedoeld voor witte en crème banden; op een sage band is die onzichtbaar (zelfde kleur). Gebruik `light` op sage en donkergroen, `deep` op crème als je meer contrast wil, en `light` boven fotografie. `PhotoCarousel` kiest dit al automatisch op basis van zijn eigen band.
