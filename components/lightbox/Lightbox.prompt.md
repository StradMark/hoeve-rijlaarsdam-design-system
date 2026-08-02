One-line: one photo at full size above the page — for the carousel's centre image and the gallery.

```jsx
const [zoom,setZoom]=React.useState(null);

<PhotoCarousel items={fotos} onSelect={(it,k)=>setZoom(k)}/>
{zoom!==null&&<Lightbox items={fotos} index={zoom} onClose={()=>setZoom(null)}/>}
```

**Alleen voor grootweergave.** Een klik op de middelste foto betekent "laat groter zien", niet "ga ergens
heen". Wil een beeld doorlinken naar een pagina, gebruik dan een kaart met een echte link.

**Diepgroen op 94 procent, geen zwart** — het merk heeft geen zwart, en een zwarte overlay laat de foto's
kouder ogen dan ze zijn.

**Overal een weg terug:** Escape, een klik naast de foto, en een `Sluiten`-knop met tekst in plaats van een
kruisje in een hoek. De bovenste strook is bijna dekkend — anders staat de navigatie er doorheen en landt
`Sluiten` precies op de offerte-knop; de rest van het vlak blijft doorschijnend. De focus keert terug naar
het element dat de lightbox opende en de pagina erachter scrollt niet mee.

Pijlen verschijnen alleen bij meer dan één foto, samen met een teller. Ze staan **vast aan de schermrand**,
niet naast de foto: anders verspringen ze bij elke foto met een andere breedte. Bij één foto is er niets om
te bladeren, en dan hoort er ook geen bediening te staan.

Geef elke foto een `caption` als je die hebt: hij staat onder het beeld én is de naam die een schermlezer
voorleest als de lightbox opent.
