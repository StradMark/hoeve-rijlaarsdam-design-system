# Onderzoek en bronnen

Achtergrond bij het design system: waar het materiaal vandaan komt, wat het bedrijf is en wat er nog
ontbreekt. De werkregels staan in `readme.md`, de teksten en feiten in `content-en-feiten.md`.

## Gebruikte bronnen

| Bron | Wat het opleverde |
| --- | --- |
| `uploads/WhatsApp Image 2026-07-28 at 18.14.02.jpeg` | Het primaire logo (boerderijmerk + *Hoeve* in script + RIJLAARSDAM + ART & EVENTS) |
| `uploads/WhatsApp Image 2026-07-27 at 21.32.41*.jpeg` (10 bestanden) | Volledige website-ontwerpen: homepage, zakelijk, particulier, catering, ruimte-detail (Koetshuis), bruiloft, over ons/team & hostessen, praktisch, locatie, contact |
| **feestenmeetings.nl** (opgehaald 28-07-2026) | Het evenementenbedrijf: echte teksten, paginastructuur, prijzen, capaciteiten, arrangementsnamen |
| **rijlaarsdam.nl** / galerie.rijlaarsdam.nl | Het kunstbedrijf — **kon niet direct worden opgehaald** (domein geblokkeerd); feiten komen uit zoekresultaten en de vermeldingen op Ontdek/Visit Nieuwkoop en Museumtijdschrift |

Credit in de footer van de originele ontwerpen was *"Design: Not Just Ideas · technische realisatie: Anticipate"*.
De footer in dit systeem draagt nu: *"Ontwerp: Janneke van Soeren-Aupers · Realisatie: Mark Stradmann · © 2026 Hoeve Rijlaarsdam Hospitality B.V."*

Alle opgehaalde feiten, prijzen, contactgegevens, echte koppenparen en herbruikbare zinnen staan in
**`guidelines/content-en-feiten.md`** — lees dat bestand voordat je tekst schrijft.

**Bij de start was er geen codebase, Figma-bestand, fontbestand of fotobibliotheek aangeleverd,** en de foto's van
de live websites konden niet worden gekopieerd (deze omgeving mag geen bestanden van andere domeinen ophalen). Het
systeem is toen van de ontwerpen afgelezen: kleuren zijn er per pixel uit gemeten, typografie en spacing gemeten en
afgerond op een tokenschaal. Inmiddels zijn de vectorlogo's, de fonts en 44 echte foto's wél aangeleverd — zie
Bekende hiaten hieronder voor wat er nog open staat.

## Het bedrijf in het kort

De galerie bestaat **32 jaar** en is internationaal bekend als plek waar kunst wordt **verkocht, bezichtigd,
gerestaureerd én getaxeerd** — 19e- en 20e-eeuwse meesters plus hedendaags werk, met een **beeldentuin van twee
hectare met zo'n 70 sculpturen**. Drie expositieruimtes doen tevens dienst als evenementenruimte: de **stal** (ruim
110 jaar oud, houten palen in het midden, met werk van de Haagse & Leidsche school), het **koetshuis** (250 gasten,
uitstekende akoestiek) en de **grote zaal**. **Theehuis De Hooiberg** op hetzelfde terrein serveert koffie en gebak;
op de eerste etage zit een vergaderruimte, volledig omringd door ramen, voor **maximaal 30 personen**. Parkeren is
gratis voor circa 60 auto's, met 50 extra plaatsen op aanvraag bij grote bijeenkomsten.

De twee bedrijven hebben vandaag twee websites — `rijlaarsdam.nl` voor Galerie & Beeldentuin, `feestenmeetings.nl`
voor Feesten & Meetings (Feesten · Meetings · Condoleance · Contact · Offerte), plus een aparte cateringsite. **De
ontwerpen in `uploads/` zijn het
plan om die samen te voegen tot één site** onder het ART & EVENTS-logo; daarom splitst de nieuwe navigatie op
doelgroep (Zakelijk / Particulier) in plaats van op bedrijf.

De juridische naam is **Hoeve Rijlaarsdam Hospitality B.V.** — hospitality zit dus in de bedrijfsnaam. Eigenaresse is
**Rozemarijn (Roos) Rijlaarsdam**, chef is **Wouter Berghuis**. De meest onderscheidende én best verstopte dienst is
**hospitality op locatie**: "Onze dames en heren vinden het geweldig om hun kwaliteiten en glimlach op andere
evenementen te laten zien. Hoeve Rijlaarsdam komt naar u toe!" Daarnaast draait de hoeve een eigen
**pop-uprestaurantformat** (4 gangen, maximaal 30 gasten per shift, open keuken, kunstenaars die hun werk toelichten)
en is de oude lijstenmakerij verbouwd tot coachings- en trainingsruimte — het "Ontwikkelatelier" uit de ontwerpen.

De merkregel **"Daar waar hospitality een kunstvorm is!"** vat de positionering al goed samen: niet "wij hebben
ruimtes", maar kunst, natuur en gastvrijheid als één beleving. Houd die regel als kern; langere
positioneringsvarianten horen als ondertitel, niet als vervanging. Zie `guidelines/content-en-feiten.md` voor het
volledige onderzoek, inclusief een duidelijk gemarkeerd deel dat níet is geverifieerd.


## Bekende hiaten — graag aanleveren

1. **Logo.** Alle versies staan als vector in `assets/`, uit de huisstijl-PDF. Nog open: officiële
   naamgeving en eventuele PMS-waarden.
2. **Lijniconen voor faciliteiten** (parkeren, wifi, beamer, rolstoeltoegang) en de **geïllustreerde plattegrond**. De negen opstellingsiconen zijn inmiddels zelf getekend.
3. **Winterartwork voor andere seizoenswoorden.** De ontwerper leverde "Winters RIJLAARSDAM"; `Kerst` en
   `Oud & Nieuw` worden nu typografisch nagebouwd — goed voor schetsen op scherm, niet voor drukwerk.
4. **Beeldmateriaal**: video's voor de hero's (twee rustige loops van 8–12 seconden, één in de galerie en
   één op een feest), foto's van de Stal als vergaderruimte en van het Ontwikkelatelier in gebruik, en
   drone-opnames voor een eigen mobiele plattegrond.
5. **Welke cijfers actueel zijn.** Prijzen en capaciteiten in de feitenbank zijn zoals gepubliceerd op
   feestenmeetings.nl in juli 2026; openingstijden verschillen per bron.

Opgelost sinds de start: het logo als vector, 44 echte foto's van de locatie (circa 2000px breed), en
BDScript als fontbestand (`assets/fonts/BDScript-Regular.woff2` + `.otf`) — alle drie de voorgeschreven
fonts zijn dus echt. Italianno is alleen nog terugval in de font-stack.

## Iconografie — waarom er zo weinig is

De ontwerpen bevatten nauwelijks iconografie en het merk leunt er niet op.

**Sociale iconen niet zelf ontwerpen.** De footer gebruikt de glyphs van de platforms zelf, via
`cdn.simpleicons.org`. Het Instagram- en Facebook-merkteken zijn beschermde merken en de richtlijnen van
Meta staan de glyph alleen in zwart of wit toe — niet in groen, niet in goud, niet hertekend. Een "eigen
versie in onze stijl" is geen optie. De merkkleur zit in de schijf erachter: sage in rust, wit bij hover.
Profielen: instagram.com/hoeverijlaarsdam · facebook.com/HoeveRijlaarsdam

**Het boerderijmonogram** is het enige echte merkteken — `assets/logo-mark.svg` (kleur) en
`logo-mark-mono.svg` (volgt `currentColor`), uit het vectorlockup gesneden zodat het losse merkteken en het
merkteken in het logo exact dezelfde tekening zijn. Minimaal 32px hoog: daaronder lopen de balken dicht. Voor
favicon-formaten is een vereenvoudigde variant met 3 of 4 balken nodig — die verandert de merkgeometrie, dus
vraag die bij de ontwerper op.

**Lijniconen** voor de zaalopstellingen zijn zelf getekend naar de stijl van de mockups (witte lijn, stoelen van
boven met rugleuning): negen plattegronden in `assets/icons/opstelling-*.svg`, gebruikelijke opstellingen uit de
zaalverhuur. Verder komt er geen iconenset: een opstellingsicoon draagt informatie die een foto niet geeft — waar
de stoelen staan — terwijl sfeeronderwerpen als bruiloften al door echte fotografie worden gedekt. Een
lijntekening naast een foto van hetzelfde onderwerp is daar een stap terug.

**De rest is geometrie**: de playbutton is een CSS-driehoek in een witte cirkel, carrouselbediening losse
gevulde driehoekjes, FAQ-markeringen een cirkel met `+` / `−`. Er hangt niets af van een externe icoonhost.

**Bewust niet overgenomen:** de zespuntige floret "✻" die de huidige sites als scheiding gebruiken — als
gedateerd beoordeeld. Witruimte is de scheiding.
