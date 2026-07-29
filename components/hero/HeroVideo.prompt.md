One-line: every page opens with this — a full-bleed still that reads as a video, with a white round play button dead centre.

```jsx
<HeroVideo image="/assets/photo-lounge-zonsondergang.jpg" kicker="een kijkje in" title="Het Koetshuis" height={460} />
<HeroVideo image="/assets/photo-hoeve-heerlijckheid.jpg" height={400} />
```

Titles are uppercase serif in white with a script kicker overlapping above. Two protection layers: the bottom gradient (`--overlay-photo`) plus, whenever a title or kicker is present, a horizontal band scrim behind the centred text block — the bottom gradient alone does not reach the vertical centre, so light photos would otherwise wash the title out. The round play button appears only on heroes WITHOUT a title (pass `showPlay` to override). Always followed directly by `<QuoteBar>`.

De kicker hangt altijd links van de titel en overlapt hem verticaal — ook bij `align="center"`, waar de kicker dus niet boven het midden staat maar links uithangt. Dezelfde geometrie als `SectionHeading`, zodat kop en hero op elke pagina hetzelfde lezen.
