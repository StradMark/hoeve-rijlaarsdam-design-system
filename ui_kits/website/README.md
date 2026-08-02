# UI-kit — rijlaarsdam.nl (website)

Doorklikbare reconstructie van het website-ontwerp van Hoeve Rijlaarsdam, gebouwd op basis van de elf ontwerpen in
`uploads/`. **De bron bestond uitsluitend uit platte JPEG-ontwerpen — er is geen codebase of Figma-bestand
aangeleverd**, dus maten zijn van de ontwerpen afgelezen en afgerond op de tokenschaal in plaats van uit broncode
overgenomen. De teksten komen uit `guidelines/content-en-feiten.md` en dus van de live sites.

## Navigatie

De navigatiebalk staat in **dropdownstand**: zes items met panelen eronder (De Hoeve · Art · Events · Ruimtes ·
Culinair · Contact). Diezelfde balk kan met `mode="flat"` zonder dropdowns — de kit valt daar automatisch op terug
zolang de gecompileerde `NavBar` nog geen dropdowns kent, zodat een achterlopende bundel nooit een leeg scherm
oplevert. Elke pagina is direct aan te roepen via de hash, bijvoorbeeld `index.html#Bruiloft`.

## Schermen
| Bestand | Staat voor |
| --- | --- |
| `screen-home.jsx` | Homepage — gesplitste ART / EVENTS-hero, welkomrij, mogelijkheden-band, de vier ruimtes, reviews, CTA |
| `screen-ruimte.jsx` | Ruimtedetail (Koetshuis) — hero-video, faciliteitenpaneel, opstellingenraster, FAQ, andere ruimtes |
| `screen-catering.jsx` | Catering — menu per gang, de chef, catering op locatie, reviews. De losse Chef-pagina is hierin opgegaan |
| `screen-contact.jsx` | Contact — offerteformulier, bereikbaarheidskaarten, openingstijden & parkeren |
| `screen-hospitality.jsx` | **Nieuw** — Hospitality op locatie: inzet, wat wij meebrengen, gelegenheden |
| `screen-popup.jsx` | Pop-uprestaurant: vier gangen, max 30 gasten, verloop van de avond, reserveren |
| `screen-galerie.jsx` | Galerie en beeldentuin — de Art-kant waar de gesplitste hero naartoe wijst; drie expositieruimtes als pillen, openingstijden |
| `screen-zakelijk.jsx` | Zakelijk — vier toepassingen, zaalkiezer, arrangementen en zaalhuurtarieven, workshops |
| `screen-particulier.jsx` | Particulier — feesten, verjaardagen, jubilea, high tea; verwijst door naar Afscheid |
| `screen-afscheid.jsx` | Afscheid — condoleance in besloten kring. Bewust niet in de navigatie; bereikbaar via Particulier en de footer |
| `screen-agenda.jsx` | Agenda — exposities, pop-upavonden en open dagen bij elkaar, met filter per soort |
| `screen-bruiloft.jsx` | Bruiloften — verloop van de dag als pillen, wat het bijzonder maakt, FAQ |
| `screen-overons.jsx` | Over ons — vaste aanspreekpunten, gastvrouwen op locatie, boekbaar team |
| `screen-praktisch.jsx` | Praktisch — adres, openingstijden, de isometrische plattegrond, bereikbaarheid, tarieven, FAQ. Locatie is hierin opgegaan |

`parts.jsx` bevat de hulpstukken die alle schermen delen (Section, Lead, ReviewRow, PageEnd, de fotosets per
pagina en de footergegevens). PageEnd is een dun laagje om `PageOutro` + `Footer`: elke pagina sluit af met de
offerte-CTA met de carousel eroverheen, en daarna de footer in een eigen sectie. Alles wat visueel is komt uit de bundle van het design system — geen enkel component is hier
opnieuw gebouwd.

## Twee schermen die niet in de ontwerpen staan

`screen-hospitality.jsx` en `screen-popup.jsx` zijn toegevoegd op verzoek: het zijn de twee sterkste diensten die
op de huidige sites verstopt zitten (hospitality op locatie staat alleen op de galeriesite, het pop-uprestaurant
alleen in een blogbericht). Ze gebruiken uitsluitend bestaande componenten en de bestaande secties-opbouw, dus
visueel is er niets nieuws bedacht. De navigatie is daarvoor uitgebreid met **Hospitality** en **Pop-up** — die twee
items staan niet in de ontwerpen.

## Interacties die werken
- De bovenbalk wisselt van scherm; het actieve item wordt goud; de groene **Offerte**-pil springt naar Contact.
- FAQ-rijen openen één voor één.
- Segmentpillen wisselen de fotografie eronder (home) en de context van het voorstel (catering).
- De fotostrook boven de footer schuift door met de driehoekjes.
- Het offerteformulier verstuurt naar een bevestigingsstatus.

## Bewust niet gereconstrueerd
- De **plattegrond met fotopins** op de locatiepagina — een eigen illustratie die niet is aangeleverd; de sectie is
  weggelaten in plaats van nagemaakt. De **lijniconen voor tafelopstellingen** zijn inmiddels wél getekend
  (`assets/icons/opstelling-*.svg`) en zitten in de opstellingensectie. De socialbuttons in de footer dragen een typografisch
  teken (`in`, `ig`).
- De **video's** in de hero's zijn stills met de playbutton van het merk.
- De fotografie is uit ontwerpen van lage resolutie gesneden en dus zacht. Vervang die door de echte bibliotheek.


## Rolverdeling Contact, Praktisch en Locatie

Deze drie liepen door elkaar; sinds 28-07-2026 is de verdeling:

| Pagina | Enige doel | Bevat |
| --- | --- | --- |
| **Contact** | Contact opnemen | Intro, adres, de twee aanspreekpunten met mobiel, offerteformulier, doorverwijzing naar Praktisch en Locatie |
| **Praktisch** | Alles weten vóór het boeken | Adres en openingstijden, hoe u ons bereikt (auto, ov, fiets), parkeren en toegankelijkheid, zaalhuurtarieven, FAQ |
| **Locatie** | Zien hoe het erf ligt | Interactieve plattegrond met hotspots per gebouw |

Route, parkeren en openingstijden staan dus **alleen** op Praktisch. Contact verwijst ernaar in plaats van het te herhalen.

De **OFFERTE**-knop in de navigatie gaat naar Contact én scrolt naar het formulier (`App` geeft `focus="offerte"` mee aan `ContactScreen`). Een gewone klik op Contact in het menu doet dat niet — dan begint u bovenaan.
