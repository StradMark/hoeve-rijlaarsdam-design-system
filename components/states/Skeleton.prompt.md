One-line: the shape of what is coming, while it loads — never a spinner.

```jsx
<LoadingRegion label="Agenda wordt geladen" busy={laden}>
  {laden
    ? <div style={{display:'grid',gap:24}}>{[0,1,2].map(i=><Skeleton key={i} lines={2}/>)}</div>
    : items.map(...)}
</LoadingRegion>

<Skeleton variant="card"/>              // foto + onderschrift + regel
<Skeleton variant="image" ratio="4/3"/> // alleen het beeldvlak
<Skeleton tone="dark" lines={4}/>       // op het donkergroene paneel
```

**Een skelet, geen spinner.** Een spinner zegt alleen "wacht". Een skelet zegt hoeveel er komt en waar het
komt te staan, en de pagina springt niet op als de inhoud landt — dat scheelt de bezoeker een schok en ons
een layout shift.

**De beweging is onze eigen haarlijn, geen grijze glans.** Een gouden streep schrijft van links in, blijft
even staan en trekt naar rechts weg — dezelfde getrokken lijn als onder de zaalonderschriften en in de pen
van het seizoenslogo. Op een groot beeldvlak ademt het vlak zelf zachtjes mee, want een lijn van 1px op
tweehonderd pixels leest als stilstand. Geef blokken in een rij een oplopende `delay` (0.14s werkt), dan
leest het als één hand die de pagina afgaat in plaats van alles dat tegelijk knippert.

**Neem de vorm van het echte blok over.** Drie kaarten die laden zijn drie `variant="card"`, niet één grijze
balk. Klopt het skelet niet met wat er komt, dan is het erger dan niets.

**Onder `prefers-reduced-motion` staat de veeg stil** — het component regelt dat zelf, dus zet er geen eigen
animatie omheen.

Wikkel het laadgebied in `LoadingRegion`, anders hoort een schermlezer niets: het skelet is `aria-hidden`,
en de regio kondigt met `aria-busy` en één beleefde regel aan dat er iets onderweg is.
