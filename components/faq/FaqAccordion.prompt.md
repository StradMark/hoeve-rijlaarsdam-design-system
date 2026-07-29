Uitklapbare vragen — gebruik dit voor elke FAQ-sectie, altijd op een gekleurde band (donkergroen is de standaard) en nooit meer dan zes vragen per sectie.

```jsx
<FaqAccordion items={[
  {question:'Is er parkeergelegenheid?', answer:'Ja, gratis op eigen terrein, ruimte voor circa 60 auto’s.'},
  {question:'Hoeveel gasten kunnen er terecht?', answer:'Het Koetshuis biedt plaats aan 250 gasten.'}
]}/>
```

**Animatie:** de rij groeit mee via `grid-template-rows: 0fr → 1fr` in `--dur-slow`, dus openen én sluiten lopen even soepel; het antwoord blijft gemonteerd. De markering is met twee balkjes getekend in plaats van met een `+`-teken — daardoor staat hij optisch gecentreerd, ongeacht het font. Bij openen draait de cirkel een halve slag en verdwijnt de verticale balk.

**Uitlijning:** het antwoord staat 49px ingesprongen, precies onder de eerste letter van de vraag (9px padding + 24px markering + 16px gap). Wijzig je de markeringsgrootte, pas dan ook die inspringing aan.

**Kleurregel:** de vraagtekst is altijd `--green-900` op wit en op sage, en alleen wit op de donkergroene rij. Wit op sage haalt 2,05:1 en is bij 12px kapitalen niet leesbaar — wijzig die combinatie niet.

**Varianten:** `tone="onLight"` voor sage pillen op wit of crème. `defaultOpen={-1}` sluit alles — doe dat alleen als de sectie al genoeg tekst heeft. `allowMultiple` voor lange praktische lijsten.
