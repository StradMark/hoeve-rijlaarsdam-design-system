One-line: the photo carousel that closes every page — one photo in focus in the middle, its neighbours smaller and pushed back — always paired with the footer directly below it.

```jsx
<PhotoCarousel height={400} items={[
  {src:'/assets/photo-koetshuis-feest.jpg', caption:'Koetshuis'},
  {src:'/assets/photo-hooiberg-gedekt.jpg', caption:'Hooiberg'},
  {src:'/assets/photo-beeldentuin-vogel.jpg', caption:'Beeldentuin'},
  {src:'/assets/photo-lounge-zonsondergang.jpg', caption:'Buitenterrein'},
  {src:'/assets/photo-hoeve-gazon.jpg', caption:'De hoeve'}
]}/>
```

Give each page its own photos — the carousel is the page's closing image, not a generic gallery. Feed it at least five; the ring shows two frames on each side of the centre, so with fewer the same photo appears twice. Clicking a neighbour brings it forward; the arrows sit at the page edges. Each step outward scales 1 → 0.8 → 0.62, blurs 0 → 1.5 → 3px and darkens 0 → 26% → 42%, over 520ms. The caption is optional and set in gold serif capitals under the active frame. Below 760px the frames become 86% wide and the ring stays; no separate mobile layout.

**Motion.** The strip advances by itself every `interval` ms (default 5600) and the active photo
drifts up 7% while it holds the centre, so a still page still breathes. It stops the moment anyone
engages — hover, keyboard focus, a finger on the strip — and it never runs off-screen or under
`prefers-reduced-motion`. Under the photo sit one hairline per frame; the active one fills in gold
over the dwell time, which answers "why did that move" before it moves. Arrow keys and swipe work.

**Geen pijlen, standaard.** De strip is al op vier manieren te bedienen: vegen, pijltoetsen, klikken op een
zijfoto, en de streepjes eronder — die nu een raakvlak van 22px hebben in plaats van de haarlijn zelf. Een
vijfde bediening voegt niets toe en was de enige die per pagina een eigen kleur nodig had. `arrows` zet ze
alsnog aan; ze staan dan náást de streepjes, nooit over de foto's, en `arrowTone` volgt de band (`deep` op
crème, `white` op sage of flessengroen), niet het beeld.

`autoplay={false}` for a strip the user should steer themselves (e.g. a room's own gallery).
