# Animatiebeslissingen

Waarom de logo-animaties zijn zoals ze zijn — de uitwerking, niet de regels. Voor gebruik volstaat
`readme.md`; dit bestand is er voor wie de animatie wil aanpassen of nabouwen.

## Eén bron voor vier kaarten

De vier seizoenskaarten (winter en kerst, elk in het vlak en schermvullend) waren vier kopieën van dezelfde
animatie van ~105 kB. Ze zijn nu vier bestanden van ~1 kB die drie gedeelde bronnen in `guidelines/seasonal/`
laden:

- `seizoenslogo-svg.js` — de tekening: alle halen, maskers, de grote vlok, caps, schuurmerk en de vlokjes
  in het vlak.
- `seizoenslogo.css` — de beweging (pen, wisser, dwarrelen), de vijf opbouwen, de kerstlaag en de twee
  vlakstanden.
- `seizoenslogo.js` — de bediening: knoppen, toelichting, opnieuw schrijven en de schermvullende sneeuwlaag.

Een kaart zet één element neer:
`<div class="slogo vA" data-field="panel|screen" data-theme="winter|kerst" data-looks="zilver kaarslicht berry">`.
Een wijziging aan het schrift of de timing gaat op één plek en geldt meteen voor alle vier de kaarten.

## Hoe het schrijven werkt — Hoeve

De letters zijn geen namaak meer: het is het woordmerk uit de huisstijl-PDF
(`assets/logo-hoeve-script.svg`). Over die inkt ligt een masker van **vier pennestreken** — de pen zet de
H in drie halen (linkerstok naar beneden, rechterstok naar beneden, dan de dwarsstreep van links naar
rechts) en schrijft daarna `oeve` plus de uithaal in **één doorlopende haal**. Tussen de halen zit een
gaatje in de tijdlijn: dat is de **pennelichting**, en die maakt het verschil tussen tekenen en schrijven.

De pennenroutes zijn niet op het oog getekend maar **uit de letter gemeten**: voor `oeve` is elk punt van
de omtrek met de helft van de pendikte naar binnen geschoven (dat geeft de hartlijn), en voor de H is de
letter gerasterd en per scanlijn het midden van de haal gevolgd. Daardoor loopt het masker exact over de
inkt en niet ernaast.

Bij de **kruispunten** van de H is elke stok in vijf stukken geknipt: 3,4 breed op de haal zelf, via 2,8
geknepen naar 2,15 in de vijf eenheden rond het kruispunt — smaller dan de inkt van de stok (2,4), zodat het
masker de dwarsstreep daar niet kan aanraken en er geen stukje dwarsstreep meelicht voordat de pen er is.
De haal houdt overal dezelfde dikte; alleen de buitenste inktrand op het kruispunt blijft nog even liggen
tot de dwarsstreep langskomt en die zelf opvult. De stukken overlappen 0,3 eenheid, anders komen er
maskernaden in de inkt te staan.

De **snelheid is ongelijk**, zoals bij een hand: traag door de lussen van o, e, v en e, en dan haalt de
uithaal uit over de laatste 45% van de lijn in 30% van de tijd. Een klein **goudkleurig penpunt** rijdt met
de streek mee (`offset-path`) en verdwijnt zodra de haal klaar is. Met `prefers-reduced-motion` staat het
afgemaakte merk er meteen, zonder pen.

## Hoe het schrijven werkt — Winters

Het gouden `Winters` wordt met de pen geschreven in **dertien halen** die niet meer uit de letteromtrek maar uit
het **skelet van de inkt zelf** komen: de letters zijn verdund tot een lijn van één pixel, dat skelet is als graaf
gelezen (eindpunten en kruispunten), en de takken zijn van links naar rechts aan elkaar geregen — W, i, n, dan de t
van bovenaf naar beneden met de lus eronder, de e, r, s en de uithaal, met het streepje door de t en de punt op
de i als laatste. Elke haal krijgt `pathLength="1000"`, zodat de streepmaat exact op de lijn past en er op t=0
geen inkt zichtbaar is. Bij het kruispunt met het streepje is de neerhaal van de t in vijf stukken geknipt en de
pen daar tot 1,72 geknepen — smaller dan de inkt van het streepje, dus dat kan niet vooruit lichten (zelfde
ingreep als bij de H van Hoeve). Waar een haal over al getekende inkt terugloopt (de W, de n, de s) is dat stuk
apart gezet en gaat de pen er vier keer zo snel over; anders lijkt de animatie te haperen omdat er even niets
verschijnt. Elke hartlijn
ligt daardoor per definitie op de inkt, en de pendikte per haal is de gemeten inktdikte plus een vijfde: dekkend
zonder de buurletters vooruit te laten lichten (99,6% van de inkt, met zeven kleine tikjes voor de rest).
Pas als het schrift staat komt de **grote sneeuwvlok** op; daarna landen caps en schuurmerk samen in het goud.

## De sneeuw

De dwarrelende vlokjes zijn getekende zesarmige vlokken die over de volle hoogte van het vlak zakken — elk
met eigen zijwaartse drift (naar links, naar rechts of bijna recht), eigen zwaai, eigen draai en eigen tempo
van 11 tot 23 seconden; grote vlokken zakken sneller en dekkender dan kleine, wat diepte geeft. Elk vlokje
verdooft aan begin en eind van zijn cyclus, dus de lus loopt naadloos rond. In het statische logo blijven de
originele spikkels van de ontwerper staan — de vlokken bestaan alleen in de animatie.

Twee valkuilen die hier zijn opgelost: het draaipunt moet in paneelcoördinaten staan (anders slingert een
vlok met veel draai in een boog het beeld uit), en de fase mag niet uit de x-positie komen (dan valt de sneeuw
in een schuine sliert).

**Schermvullend** ligt de sneeuw als eigen laag over het beeld in plaats van in het vlak. Elk vlokje begint
net boven het beeld en valt precies één beeldhoogte, en het aantal komt uit het oppervlak (ongeveer één per
6.000 beeldpunten), dus de dichtheid blijft gelijk of het nu een smalle header of een groot scherm is.

## De vijf opbouwen

De tijden staan in CSS-variabelen, dus elke opbouw zet alleen die variabelen; de vertraging van het schrift
zit in één variabele (`--shift`).

| Opbouw | Wat er gebeurt |
| --- | --- |
| Vlotte hand | De naam wordt geschreven, dan komt de vlok op en landen caps en schuurmerk samen in het goud |
| Letterpers | RIJLAARSDAM wordt niet weggeveegd maar in negen letterblokken één voor één aangedrukt (mask `capsMaskW`, aanslag van onderaf, 45 ms ertussen) — ook dat deel een handeling in plaats van een gordijn |
| Sneeuw eerst | Het beeld begint met sneeuw; daaruit zet de vlok zich vast en pas dan wordt de naam eronder geschreven |
| Vlok als slot | Eerst de naam en het goud, de vlok sluit af als seizoensteken |
| Alleen dwarrelen | Het logo staat er al; alleen de sneeuw beweegt, eindeloos |

Het zwarte logo (`guidelines/logo-animation.html`) heeft dezelfde opzet met vier opbouwen: Vlotte hand,
Letterpers, Merk eerst en Alleen schrijven. Beide logo's schrijven in hetzelfde tempo.

## Intro-motion voor heros

Beide heros hebben een `intro`-prop (standaard aan). Het uitgangspunt: als er video achter zit, mag de intro niets aan het beeld zelf doen — geen zoom, pan of parallax, want die vechten met de opname. Alles wat beweegt zit in de lagen erbóven: de overlay trekt open (0–0,7s, dekt tegelijk het laadmoment van het videobestand), titel en knop komen 10 px omhoog (250/330 ms, beide helften gelijktijdig), de naad groeit uit het midden (620 ms), de swirl sluit af (900 ms) en de scroll-hint komt als laatste (1450 ms). De intro speelt één keer per sessie (`sessionStorage`), dus bij doorklikken staat de hero er meteen; bij `prefers-reduced-motion` blijft alleen de overlay-fade over. De kaart **Hero — intro-motion** toont de opbouw met een herhaal-knop.

