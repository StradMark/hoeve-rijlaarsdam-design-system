One-line: what stands there when nothing does — no results, an empty agenda, a filter that matches nothing.

```jsx
<EmptyState title="Nog niets gepland"
  action={<Button tone="outlineDark" onClick={()=>setFilter('Alles')}>Bekijk alles</Button>}>
  Er staat op dit moment geen pop-upavond op de kalender. Wij plannen er een paar per seizoen.
</EmptyState>
```

**Een lege staat is geen fout.** Geen illustratie, geen uitroepteken, geen "Oeps" — dit merk heeft geen
mascotte. Een gouden haarlijn, een korte kop, één zin.

**Zeg waarom het leeg is en wat er wél kan.** "Geen resultaten" laat de bezoeker stilstaan; "Er staat geen
pop-upavond gepland — wij plannen er een paar per seizoen" vertelt wat hij mag verwachten en wanneer hij
terug kan komen. De actie is de uitweg: filter wissen, alles bekijken, of ons bellen.

**Hooguit één actie.** Twee knoppen betekent dat de pagina zelf niet weet wat de bezoeker nu moet doen.

Niet gebruiken voor een mislukte verzending of een fout in een formulier — dat is `FormStatus` met
`variant="error"`, want daar ging iets stuk en hier is er gewoon niets.
