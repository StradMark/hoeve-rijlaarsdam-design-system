# Hoeve Rijlaarsdam — Art & Events · Design System

Evenementenlocatie in Nieuwkoop: een monumentale boerderij in de polder met vier verhuurbare ruimtes, een
kunstgalerie met beeldentuin, een eigen keuken met chefkok, en hospitality op locatie bij externe partijen.
Eén merk, vier bedrijven — **zaalverhuur, kunstgalerij, catering, hospitality** — bij elkaar gehouden door
*"Daar waar hospitality een kunstvorm is!"*.

De navigatie splitst op doelgroep, niet op bedrijf: **Zakelijk** (meetings, congressen, teambuilding) en
**Particulier** (bruiloften, feesten, jubilea, uitvaart), met **Catering** en **Hospitality** die zowel op de
locatie als elders worden geleverd.

## Beginnen

`index.html` is de voordeur: de doorklikbare voorbeeldsite, het kaartenoverzicht, de deel- en
printversies en de losse animaties en plattegrond. `styles.css` is het enige bestand dat afnemers
koppelen.

| Wil je… | Lees |
| --- | --- |
| tekst schrijven | `guidelines/content-en-feiten.md` — prijzen, capaciteiten, contactgegevens, echte koppenparen |
| weten waar het materiaal vandaan komt | `guidelines/onderzoek-en-bronnen.md` — bronnen, het bedrijf, iconografie, wat nog ontbreekt |
| de logo-animatie aanpassen | `guidelines/animatie-beslissingen.md` |
| iets mobiel maken | `guidelines/mobiel-beslissingen.md` |

## Tekst

**Nederlands, formeel *u*.** Enige uitzondering: bruiloften gaan op *jullie*. Het merk spreekt als **wij** —
warm, maar professioneel.

**De tweedelige kop ís de stem.** Een klein stukje script in kleine letters loopt door in een serif-titel:
*landelijk* → **Vergaderen**, *alles over* → **Onze locatie**, *veel gestelde* → **Vragen**. Twee tests, beide
moeten kloppen: dek de kicker af — benoemt de titel dan nog waar de sectie over gaat? En dek de titel af —
klinkt de kicker dan onafgemaakt? Zo niet, dan is het een eigen zinnetje en hoort het in de bodytekst.

Harde grenzen: **maximaal 2 woorden en 14 tekens**, kleine letters, geen interpunctie, nooit langer dan de
titel. Het kernwoord staat in de titel. Een titel van meer dan drie woorden verdraagt geen kicker meer. Geen
kicker is een geldige keuze — reken op één tot drie per pagina. `SectionHeading` waarschuwt in de console;
zie `guidelines/kicker-regels.html` voor goede en foute paren.

**Kapitalen** met ruime letterafstand zijn voor labels: navigatie, buttons, kaartcaptions, FAQ-vragen,
footerkopjes. Hero-titels zijn serif in kapitalen. Bodytekst is gewone zinsvorm.

**Bodytekst is kort** — twee tot vijf regels, maximaal circa 70 tekens breed. Concreet boven lyrisch:
vierkante meters, aantallen gasten, telefoonnummers, wie je vraagt. Eén vette woordgroep per alinea, nooit een
hele zin. Eén CTA per sectie, begint met een werkwoord.

**Superlatieven mogen** — dit is horeca. Uitroeptekens spaarzaam, nooit twee in één sectie. Gevoelige
onderwerpen krijgen stille zinnen zonder superlatieven. **Nergens emoji**, geen KAPITALEN als nadruk binnen
een zin.

## Vorm

**Palet.** Donkergroen `#295E4E` is het merk (quotebalk, panelen, footer, buttons). Saliegroen `#7EAB8C` is de
tweede vlakkleur. Goud `#B08344` is *alleen* accent: script-koppen, captions, het actieve navigatie-item;
nooit een groot vlak. Wit en crème `#FBF8F3` zijn de pagina. Inkt `#16191A` voor koppen, `#5B6362` voor tekst.
**Maximaal twee achtergrondkleuren per pagina.** Nergens gradiënten, behalve de beschermlaag over foto's.

**Sage is een middentoon.** Op `--surface-sage` halen crème noch donkergroen genoeg contrast voor kleine
tekst. Alles onder 16px op sage staat in `--ink-900`. Dit is de meest gemaakte fout in dit systeem.

**Typografie.** Drie rollen. **Playfair Display** voor elke kop, navigatie-item, button, caption en FAQ-vraag.
**BDScript** *alleen* voor script-koppen, met de swirl achter de 'e'. **Raleway** 300 op 14px/1,75 voor alle
bodytekst. De kicker hangt 0,34em links van de titelrand en overlapt hem verticaal — nooit met de hand
nabouwen; `SectionHeading`, `HeroVideo` en `BenefitsPanel` regelen dit.

**Layout.** Container 1180px, 96px sectiepadding, 24px grid-gap, drie kolommen als standaard. Volle
kleurvlakken wisselen af met witte secties. Panelen overlappen elkaar en de fotoranden.

**Hoeken.** Fotografie, panelen en tegels zijn volledig recht — 0 radius. Ronde pillen zijn voorbehouden aan
interactie: buttons, velden, FAQ-rijen, segmentpillen. Geen schaduwen op kaarten; scheiding komt van
kleurvlakken. Bijna geen transparantie — alleen het beschermgradiënt op foto's en de playbutton.

**Fotografie.** Warm daglicht, ongeposeerd, mensen in actie. Rechte uitsnedes, 4:3 in grids, 4:5 voor
navigatietegels, volle breedte voor hero's. Geen patronen, texturen of grain.

**Tekstbescherming op foto's — twee lagen.** Onderaan elke hero ligt `--overlay-photo`. Een verticaal
gecentreerde titel staat buiten dat bereik en krijgt een eigen horizontale band-scrim achter het tekstblok.
Zonder die tweede laag zakt wit op een lichte foto naar circa 3:1. Nooit een volvlakke donkere laag over de
hele foto.

**Animatie is terughoudend.** 150ms voor buttonvullingen, 280ms voor de playbutton, 520ms voor 3% inzoomen bij
hover. Easing `cubic-bezier(.22,.61,.36,1)`. Geen stuiter, geen inschuiven bij scrollen, geen parallax. Hover
maakt gevulde buttons donkerder, outline-buttons gevuld, navigatie en captions goud. Focus is een gouden ring
van 2px. Alleen de header staat vast, en altijd wit.

## Seizoenen

**Winter** komt elk jaar terug (advent tot januari) en is **geen tweede merk**: dezelfde kleuren en
typografie, alleen het klimaat verandert. Saliegroen wijkt voor vorst-neutralen, het groen zakt naar pine
`#16382F`, goud wordt op donker het warmere kaarslicht `#D9BD8C`. Berry `#6E2A2C` mag als accent van **één
element per uiting** en nooit als vlak. `data-season="winter"` op `<html>` of één sectie herschrijft de
semantische tokens (`tokens/winter.css`); alle componenten volgen mee.

**`WinterLockup`** is het aangeleverde seizoenslogo als vector — `panel`, `reversed` en `wordmark`. Het
**vervangt** het hoofdlogo voor de duur van de campagne; de twee staan nooit samen in één beeld. Panel en
reversed minimaal 96px hoog, wordmark minimaal 34px.

**Kerst** is een tijdelijke laag óp winter, voor december: `data-season="kerst"` erft alles van winter.
Zilver wordt de lijn- en detailkleur naast goud — op één vlak óf zilver óf goud, nooit beide — en berry gaat
van accent naar dragend accent, nog altijd één element per uiting.

**Logo-animaties.** Beide logo's worden met de pen geschreven, in vijf opbouwen die de tijden uit
CSS-variabelen halen. Vier kaarten (winter en kerst, in het vlak en schermvullend) delen één bron in
`guidelines/seasonal/`. De uitwerking staat in `guidelines/animatie-beslissingen.md`.

## Mobiel

Drie maten (`tokens/breakpoints.css`), met typemaat, ritme en marge per maat. Componenten die van vórm
veranderen: **NavBar** wordt een lade, **SplitHero** stapelt, **PhotoCarousel** gaat op vegen, **RoomCard**
zet zijn feiten permanent onder de titel, **SitePlan** laat de lijst bedienen. De voorbeeldsite is op
telefoonmaat te bekijken via `ui_kits/website/mobiel.html`. Details in
`guidelines/mobiel-beslissingen.md`.

## Wat waar staat

Het systeem staat in drie hoofdstukken. `overzicht.html` volgt exact deze indeling en volgorde;
`overzicht-fundamenten.html` is hoofdstuk 1 apart, `overzicht-deel.html` het geheel zonder de
fotozware kaarten, en de twee `-print` varianten zijn dezelfde inhoud als document.

**1 · Fundamenten** — 24 kaarten, in `guidelines/`

| Groep | Kaarten |
| --- | --- |
| Merk | Logo · Schuurmerk · Swirl-ampersand · Fotografie |
| Logo-animatie | Basis · Winter · Winter schermvullend · Kerst · Kerst schermvullend |
| Kleur | Diepgroen · Sage · Goud · Neutralen · Vlakken in gebruik |
| Typografie | Displayserif · Bodycopy · Gespatieerde kapitalen · Script-kicker · Kicker-regels · Kop-varianten |
| Ritme en vorm | Ruimteschaal · Sectieritme · Vorm en radius · Beweging en states |

**2 · Componenten** — 21 kaarten, in `components/<map>/` (elk met `<Naam>.jsx`, `.d.ts`, `.prompt.md` en minstens één `@dsCard`)

| Groep | Componenten |
| --- | --- |
| Bouwstenen | `Button`, `Input`, `TabPills`, `CarouselNav`, `SectionHeading` |
| Kaarten | `RoomCard`, `ImageCaptionCard`, `PersonCard`, `InfoTile` |
| Panelen en quotes | `BenefitsPanel`, `SplitPanel`, `FaqAccordion`, `TestimonialCard`, `PullQuote`, `QuoteBar` |
| Heros | `SplitHero` (alleen homepage), `HeroVideo` (alle overige pagina's), intro-motion |
| Pagina-onderdelen | `NavBar`, `CtaBand`, `PhotoCarousel`, `PageOutro`, `Footer` |
| Plattegrond | `SiteMap` / `SitePlan` — het vlakke plan is leidend, de isometrische versies staan ernaast als verkenning |

**3 · Toepassing** — 9 kaarten

| Groep | Kaarten |
| --- | --- |
| Seizoenen | Winterpalet · Kerstlaag · Winterlogo (`WinterLockup`) |
| Mobiel | Breekpunten · NavBar als lade · SplitHero gestapeld · Tik in plaats van hover · Site op telefoon |
| Voorbeeldsite | De doorklikbare site, 15 pagina's |

**Voorbeelden en losse bestanden**

| Pad | Wat het is |
| --- | --- |
| `templates/website-page/` | Startpunt voor een nieuwe paginaopzet |
| `templates/winter-rijlaarsdam/` | Het seizoensthema met mockups voor social, menukaart, hero en kaartje |
| `ui_kits/website/` | Doorklikbare reconstructie van de site, 15 pagina's, met eigen README |
| `tokens/*.css` | Tokenlagen, element-resets en webfontdeclaraties |
| `assets/` | Logo's als vector, de fonts, de werkplattegrond en circa 45 echte foto's per categorie benoemd. De swirl-ampersand staat los als `ornament-swirl-goud/-wit/-ink/-groen.svg`; gebruik de klasse `.amp` uit `tokens/ornament.css` |
| `SKILL.md` | Wrapper zodat dit systeem ook vanuit Claude Code te gebruiken is |

**Bewuste toevoegingen.** `SplitPanel` en de hulpstukken `Section` / `Lead` / `FooterStrip` / `CtaBand` zijn
layout-hulp, geen merkcomponenten. `Input` is afgeleid van het enige offerteformulier in de ontwerpen; ander
formulierelement komt in het materiaal niet voor, dus is er geen gemaakt.
