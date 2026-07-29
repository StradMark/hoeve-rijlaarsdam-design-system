One-line: every section on the site opens with this — a lowercase script kicker hanging left of a serif title and overlapping it.

```jsx
<SectionHeading kicker="van harte" title="Welkom" align="center" size="l" />
<SectionHeading kicker="alle" title="Faciliteiten" tone="onDeep" />
```

**Geometry is the component's job, never the caller's.** The script line starts 0.34em (of its own size) left of
the title's left edge and its descender overlaps the title's ascender space. The eye therefore reads down-and-right.
Never indent the kicker inward, never centre it independently of the title, and never rebuild this pairing by hand —
hand-rolled versions drift and end up reading from top-right to bottom-left.

The kicker is positioned against the title itself, so the relationship holds for any word length, at any size, in
both `align="left"` and `align="center"`.

Kicker is gold on light backgrounds, cream on sage, sage-300 on deep green.

**One placement rule:** the overhang is real, so the heading needs about 24px of room to its left. Inside the
1180px container (64px padding) or a `BenefitsPanel` (`--space-7`) that is automatic. Do not drop it into a narrow
padded box or an `overflow: hidden` ancestor — the script's first letter will clip.

**Kicker-regels:** max 2 woorden / 14 tekens, kleine letters, geen interpunctie, nooit veel langer dan de titel (de titel staat 2–3x groter, dus iets langer mag — vanaf 1,6x de titellengte waarschuwt de component), en het kernwoord staat in de titel. Dek de kicker af: benoemt de titel dan nog de zaak? Dek de titel af: klinkt de kicker dan onafgemaakt? Beide moeten kloppen. Titels langer dan drie woorden krijgen geen kicker. De component waarschuwt in de console bij overtredingen — zie `guidelines/kicker-regels.html`.
