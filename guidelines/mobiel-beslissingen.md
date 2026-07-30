# Mobiel — beslissingen

De mobiele vormen staan als eigen groep **Mobiel** in het overzicht, los van de desktopkaarten, zodat je in
één oogopslag ziet wat er op telefoon anders is. Dit bestand legt uit waarom.

## Drie maten

`tokens/breakpoints.css`: mobiel tot 599px, tablet 600–1023px, desktop daarboven. De typemaat, het verticale
ritme en de marge (`--gutter`) schalen per maat mee, dus een component dat in tokens is opgebouwd hoeft niets
te doen. Display gaat van 64 naar 38px — 64px laat op 390px drie woorden per regel over. Lopende tekst blijft
minimaal 14px, aanraakbare dingen minimaal 44px (`--touch-min`).

## Wie van vórm verandert

- **NavBar** — onder 900px (niet 599px: zeven links plus een knop passen ook op een tablet niet naast elkaar)
  wordt het logo links, een lade-knop rechts, en de navigatie één lijst in leesvolgorde. Groepen worden
  accordeons, want een zweefpaneel kan niet op een telefoon. De offerte-knop staat onderaan over de volle breedte.
- **SplitHero** — onder 760px staan de twee keuzes boven elkaar, elk een halve schermhoogte, zodat de keuze
  niet onder de vouw begint. Geen hover, dus geen groeiende helft: de knop staat er permanent. De naad kantelt
  naar horizontaal en de swirl staat er gecentreerd op — eerder verdween het merkteken helemaal op telefoon.
  De onderste helft houdt ruimte vrij voor de scroll-hint.
- **Footer** — stapelt met minder lucht ertussen dan naast elkaar, en de labelkolom van de openingstijden
  laat zijn vaste breedte vallen (die liet anders een gat in elke regel staan). De onderbalk zet legal en
  links onder elkaar in plaats van met `space-between` uit elkaar getrokken.

Beide heroformen zijn los te forceren met de prop `narrow`, zodat een kaart de telefoonvorm naast de
desktopvorm kan tonen.

## Tik in plaats van hover

- **PhotoCarousel** — onder 760px gaan de pijlen weg (twee ronde knoppen kosten op 360px een derde van het beeld) en wordt de foto zelf het bedieningsvlak. De streepjes worden een teller `3 / 5` met de hint *Veeg voor meer*, die na de eerste veeg verdwijnt. Een veeg pakt pas als hij overwegend horizontaal is en meer dan 34px lang, dus verticaal scrollen blijft werken (`touch-action: pan-y`).
- **RoomCard** — `reveal='hover'` wordt onder 760px genegeerd en valt terug op `always`: capaciteit en samenvatting onder de titel in plaats van achter een scrim over de foto. De gouden haarlijn onder de titel blijft, als enige bevestiging bij een tik. Raakvlakken op `--touch-min`.
- **SitePlan** — de punten zijn percentages, dus op 360px krimpen ze onder de duimmaat. Daar draait de rolverdeling om: de kaart wordt een prent met de nummers er alleen als verwijzing op (`aria-hidden`, niet aantikbaar), en de lijst eronder bedient. Een tik op een regel klapt de foto open én laat het nummer op de kaart oplichten.


## De voorbeeldsite op telefoon

`ui_kits/website/mobiel.html` toont de site in een venster van 390px, doorklikbaar, met knoppen naar elke pagina. Dat is geen aparte bouw: het is dezelfde site, en de componenten kijken naar hun eigen breedte.

De site zelf krijgt één mobiele laag, `ui_kits/website/mobiel.css`: horizontale marge naar `--gutter` en elk kolomraster naar één kolom. Dat is de enige plek in het project waar met `!important` over inline stijlen heen wordt gegaan — de schermen zijn in React met inline stijlen gebouwd en anders niet te bereiken. Alles wat van vórm verandert zit in de componenten, niet in die laag.

## Nog niet goed

De isometrische plattegrond blijft als prent op 350px klein — leesbaar dankzij de lijst eronder, maar een
eigen mobiele tekening of een uitsnede per gebouw zou beter zijn. Dat wacht op de drone-opnames.
