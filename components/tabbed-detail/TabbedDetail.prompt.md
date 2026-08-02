# TabbedDetail

```jsx
<TabbedDetail kicker="het verloop" title="Van de dag" lead="Een dag zoals wij hem vaak zien."
  items={[
    {label:'Ontvangst', image:IMG.bruiloftPoort, body:'Gasten komen binnen door de groene poort.'},
    {label:'Ceremonie', image:IMG.bruiloftCeremonie, body:'Buiten tussen de beelden.'}
  ]}/>

<TabbedDetail tone="sage" imageSide="right" items={RUIMTES}/>   // op de sage-band
```

Pillen die één foto-en-tekstpaneel wisselen: kies een ruimte, een moment van de dag, een gelegenheid.
Het meest herhaalde blok van de site — Bruiloft, Particulier, Zakelijk en Galerie gebruiken het allemaal.

**De inhoud zit in `items`, niet in de pagina eromheen.** Elke pil draagt zijn eigen foto, kop en tekst.
Dat is met opzet: op Catering en Hospitality stond eerder een pillenrij die niets aanstuurde, en die fout
kan met dit component niet meer gemaakt worden.

**Op sage staat de bodytekst in `--ink-900`.** Sage is een middentoon; crème haalt daar onder 16px geen
contrast. Het component regelt dat zelf, dus geef geen eigen kleur mee.

**Hoogstens één actie per paneel**, en alleen als het paneel ergens heen leidt. Panelen die alleen
informeren laten `ctaLabel` weg. De knop wordt vanzelf `white` op sage en `outlineDark` op licht.

Laat `kicker`, `title` en `lead` weg wanneer de sectie al een kop boven zich heeft — dan begint het
component meteen bij de pillen.

Niet gebruiken voor pillen die een raster van kaarten filteren (zoals het menu op de Chef-pagina): dat is
een ander blok, met `TabPills` plus een eigen raster.
