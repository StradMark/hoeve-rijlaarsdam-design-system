# PriceList

```jsx
<PriceList kicker="Zaalhuur" tone="onDeep" items={PRIJZEN.zaalhuur}
  note="Alle bedragen zijn exclusief btw."/>

<PriceList kicker="Extra's" items={PRIJZEN.extras}/>
```

Label, detail en bedrag op één regel met een haarlijn eronder. Voor zaalhuur, extra's en alles wat een
prijskaart is zonder een tabel te willen zijn.

**Bedragen zijn tekst, geen getallen.** `"op aanvraag"` is een geldige prijs. Het component rekent niet en
formatteert geen valuta — wat je meegeeft is wat er staat.

**Prijzen staan op één plek.** De voorbeeldsite leest ze uit `ui_kits/website/prijzen.jsx`, dat
`guidelines/content-en-feiten.md` volgt. Typ nooit een bedrag rechtstreeks in een pagina: dan lopen twee
plekken uit elkaar en merkt niemand het.

**Alle prijzen op de hoeve zijn exclusief btw.** Zet dat met `note` onder de eerste lijst op een pagina, niet
onder elke.

**Op sage is alles wit**, tekst én haarlijn — via `--text-on-sage-body` en `--rule-on-sage`, nooit een eigen
kleur. Wit haalt op sage rekenkundig 2,6:1, dus sage draagt alleen groot zetsel: koppen, prijsregels en korte
labels vanaf 14px. Lopende tekst of kleine bijschriften horen op flessengroen (crème, 9,8:1) of op zacht sage
(donkergroen, 8,4:1). In het winterthema is de sage-band donkergroen en draaien de tokens vanzelf mee.

Op het donkergroene paneel wordt het bedrag crème.
