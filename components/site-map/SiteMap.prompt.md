One-line: the interactive site plan on the Locatie page — gold markers over the plan drawing, each revealing a photo, one or two lines and a link to the page for that spot.

```jsx
<SiteMap image="/assets/map-plattegrond.png" onSelect={s => onNavigate(s.href)}
  spots={[
    {name:'Het Koetshuis', x:65.5, y:33, w:14, h:18, image:IMG.koetshuisFeest,
     body:'De grote zaal, tot 250 gasten.', href:'Koetshuis', side:'left'},
    {name:'Beeldentuin', x:9, y:22, w:36, h:56, image:IMG.beeldentuinVogels,
     body:'Ruim een hectare tuin met bronzen beelden.', href:'Beeldentuin'}
  ]}/>
```

Coordinates are percentages of the image, so the map scales with its container and a redrawn
plan only needs new numbers. `side:'left'` opens the card leftwards — use it for spots in the
right-hand half so the card never runs off the map. Below 900px the hover behaviour is dropped:
tapping a marker opens the card underneath the map instead.

A spot without `href` is informational only (water, parkeren) and renders no link. Markers are
always visible on purpose — invisible hotspots are undiscoverable.
