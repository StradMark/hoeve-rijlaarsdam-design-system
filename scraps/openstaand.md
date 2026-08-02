# Openstaand

Werklijst, bewust niet in de gepubliceerde documentatie.

## Bewust nog niet gedocumenteerd

- **Groep Verkenning** — `guidelines/verkenning-merkteken-voorstel.html` staat wel in de Design System-tab,
  maar niet in `readme.md`, `index.html` of `overzicht.html`. Bewuste keuze zolang de ontwerper er nog niets
  van heeft gevonden. Ook `assets/mark-r.svg` ontbreekt daarom nog in de assets-tabel van de readme.
  Opnemen zodra het voorstel is goedgekeurd of afgewezen.

## Vragen aan de opdrachtgever

- **Agenda-inhoud.** `screen-agenda.jsx` draait op vijf voorbeelditems in `content.jsx`. Echte data — exposities,
  pop-upavonden, open dagen — moet nog worden aangeleverd, en op termijn uit een bron komen in plaats van uit
  een bestand.

- **Drone-opnames.** `onderzoek-en-bronnen.md` (hiaat 4) en `mobiel-beslissingen.md` wachten er allebei op
  voor een eigen mobiele plattegrond. Er zijn inmiddels luchtfoto's aangeleverd — is dat hiaat daarmee
  gesloten, of blijft het open tot er een tekening op gemaakt is?

## Ontwerpwerk

- **Prijzen verifiëren.** Alle bedragen in `ui_kits/website/prijzen.jsx` en `content-en-feiten.md` zijn work in
  progress en moeten langs de opdrachtgever voordat er iets gepubliceerd wordt.
- **Teksten nalezen.** Alle sitetekst staat nu in `ui_kits/website/content.jsx`. Nog niet langs de
  opdrachtgever geweest; een deel is door mij geschreven op basis van `content-en-feiten.md`.
- De isometrische plattegrond is op 350px te klein; wacht op een eigen mobiele tekening of uitsnedes.
- Lijniconen voor faciliteiten (parkeren, wifi, beamer, rolstoeltoegang).
- **Startpunten** worden nog niet geregistreerd. De `@startingPoint`-markers staan in zeven `.d.ts`-bestanden
  maar de compiler telt er nul; vermoedelijk moet een startpunt zelfstandig kunnen renderen en hebben deze
  componenten allemaal verplichte props. Niet urgent: de vier templates dekken de behoefte.
- **Twee bronnen gelijk houden.** `templates/offerte-pagina/` en `templates/zaalpagina/` zijn de canonieke
  versies; `screen-contact.jsx` en `screen-ruimte.jsx` volgen. Wijzig altijd eerst het template.
- **Datepicker**: kalender-popover op desktop, native op touch (daar is het duimwiel beter dan wat wij bouwen).

