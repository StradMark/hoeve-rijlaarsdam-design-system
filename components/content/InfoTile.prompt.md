One-line: the "veel opstellingen" / "Wat maakt het bijzonder" grid — icon, sentence, gold caption; used 3-up or 6-up.

```jsx
<InfoTile title="Carré" body="Korte toelichting van een of twee regels." />
<InfoTile icon="/assets/icons/opstelling-carre.svg" title="Carré" body="…" />
```

Icons are white-stroked line glyphs on the sage tile. The brand's own set (table arrangements, serving dome) was NOT supplied, so leave `icon` empty — the tile then shows a plain square placeholder rather than a wrong icon. Drop the real files into `assets/icons/` when available. The gold caption sits INSIDE the tile in the source layouts for arrangement grids.
