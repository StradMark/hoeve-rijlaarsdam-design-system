# Wijzigingen

Wat er is veranderd sinds de laatste download van 30 juli 2026. Eén regel per punt, nieuwste bovenaan.
De vorige stand staat in `github.md` onder Last sync.

## 3 augustus 2026

### Voorbeeldsite — paginadoorloop
- Chef-pagina opgeheven: zijn verhaal staat nu als één blok op Catering, in plaats van twaalf blokken over één persoon.
- Locatie samengevoegd met Praktisch; het adres, de route en de plattegrond stonden op twee pagina's.
- Afscheid heeft een eigen, stillere pagina — stond eerder als sectie op een pagina die "Vrolijke feesten" heet.
- Agenda toegevoegd: exposities, pop-upavonden en open dagen bij elkaar, met filter per soort.
- Homepage van vier naar zeven blokken: de drie kaarten linken nu echt door, de vier ruimtes en de reviews erbij.
- Het blok "Veel mogelijkheden" vervangen door `TabbedDetail` — de knoppen wisselden alleen twee foto's.
- Catering, Zakelijk en de zaalpagina's linken nu naar elkaar in plaats van alleen naar Contact.
- Contact eindigde met een knop "Bel ons" die naar Praktisch navigeerde; nu "Vraag offerte aan".
- Veertien pagina's zijn dertien geworden.

### Voorbeeldsite — vorm en tekst
- Alle inhoud staat nu in `content.jsx`, alle bedragen in `prijzen.jsx`; de schermbestanden gaan alleen over indeling.
- Vierentwintig echte omschrijvingen bij de zaalopstellingen, in plaats van negen keer dezelfde placeholder.
- Prijzen toegevoegd aan de zaalpagina's; die stonden er niet terwijl de bezoeker er wél naar zoekt.
- Tweeëntwintig sectiekoppen herschreven: de titel draagt nu de zin, de kicker is een aanduiding.
- Vier hero-kickers ingekort ("een kijkje in" → "binnen bij"); hero's werden niet gevalideerd.
- Nergens staan nog twee vlakken van dezelfde achtergrondkleur tegen elkaar, over alle dertien pagina's.
- Cateringpagina opnieuw ingedeeld: één menusectie met pillen in plaats van drie bijna gelijke rasters.
- Foute contactgegevens gecorrigeerd: `info@hoeverijlaarsdam.nl` en 085 888 3211 in plaats van oude nummers.

### Nieuwe componenten
- `Select`, `Choice` + `ChoiceGroup` en `FormStatus`: het formulier bestond uit één `Input`.
- `TabbedDetail`: het meest herhaalde blok van de site bestond nergens als component.
- `PriceList`: prijsregels stonden drie keer met de hand overgeschreven.
- `EmptyState` en `Skeleton` + `LoadingRegion`: lege en laadstaten bestonden nergens.
- `Lightbox`: de haak van de carousel (`onSelect`) liep dood.

### Bestaande componenten
- Carouselpijlen zijn een haarlijnring geworden en staan naast de streepjes, niet meer over de foto's.
- Pijlen op de carousel staan standaard uit — vegen, pijltoetsen, zijfoto's en streepjes volstaan.
- `NavBar` scrolt mee, met een gouden haarlijn die pas verschijnt zodra de pagina beweegt.
- `TestimonialCard` opgeheven; reviews zijn de `compact`-vorm van `PullQuote`, in gewone zin in plaats van kapitalen.
- `BenefitsPanel` geeft elk item een gouden haarlijnstreepje; er stond geen enkel opsommingsteken.
- `RoomCard` en `ImageCaptionCard` hebben een `tone` voor gekleurde vlakken — goud op sage is verboden.
- `Button` hield na hover een zwarte rand over: shorthand en longhand gemengd.
- Radio's konden allemaal tegelijk aanstaan; `ChoiceGroup` houdt de selectie nu bij.
- Checkboxes gingen bij een klik aan en meteen weer uit: het label wees naar zijn eigen genestelde input.
- `PhotoCarousel`-streepjes hebben een raakvlak van 22px in plaats van de haarlijn van 2px zelf.
- `CarouselNav` heeft een uitgeschakelde staat en 44px raakdoel; was 27px.

### Templates en startpunten
- `templates/offerte-pagina/`: de aanvraagpagina met alle veldsoorten en validatie, canonieke versie van het formulier.
- `templates/zaalpagina/`: het paginatype dat vier keer voorkomt, met één `ZAAL`-object om in te vullen.
- Startpunten worden nog niet geregistreerd; markers staan in zeven `.d.ts`-bestanden.

### Documentatie en tokens
- Kaarten hergroepeerd: Formulier als eigen groep, Inhoudsblokken tegenover chroom in Pagina-onderdelen.
- Vijf verkenningskaarten samengevoegd tot één merkteken-voorstel voor de ontwerper.
- BDScript blijkt een onvolledig font: zeven kapitalen, drie cijfers en de meeste leestekens ontbreken.
- Tokens `--text-on-sage-body` en `--rule-on-sage` toegevoegd; wit op sage haalt 2,6:1 en draagt alleen groot zetsel.
- `--fs-display-xs` bestond niet en viel stil terug op bodytekst; op vier plekken gecorrigeerd.
- `seizoenslogo-svg.js` (113 KB) is een los `.svg`-bestand geworden en zit niet meer in elke bundel.
- Tellingen in readme, index en de drie overzichten kloppen weer met het werkelijke aantal kaarten.

## Nog open

Zie `scraps/openstaand.md` — onder meer prijzen verifiëren, teksten nalezen, agenda-data, en de datepicker.
