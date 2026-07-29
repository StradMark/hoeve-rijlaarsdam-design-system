One-line: the room tile for every "andere ruimtes" grid — photo, gold caption, and the two facts that decide (capacity, floor area).

```jsx
<RoomCard image="/assets/photo-hooiberg-gedekt.jpg" caption="Hooiberg"
  meta={['30 gasten','Boven, met balken']}
  summary="Intiem diner onder de oude kap."
  onReadMore={() => go('Hooiberg')} />
```

**Put the facts in `meta`, not behind a hover.** `reveal="always"` is the default for a reason: a
visitor comparing four rooms wants capacity side by side, and half of them are on a phone where
hover does not exist. `reveal="hover"` keeps the desktop scrim treatment for cases where the photo
must stay uncovered — never put the deciding number in it.

**One action per card.** `variant="quiet"` makes the whole tile the link to that room's page and
shows a single gold "Lees meer"; hover scales the photo 3% and grows a gold hairline under the
caption. The quote request belongs once per page in `CtaBand`, after the visitor has picked a
room — two buttons per tile times four tiles is eight decisions in one grid.

`variant="bar"` restores the split dark/sage action bar from the comps for the rare card that
needs both verbs; leave `onBook` off and it becomes one full-width bar.
