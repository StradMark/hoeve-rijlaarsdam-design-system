One-line: the "alle Faciliteiten" / "vele Voordelen" block — a flat colour panel of short list lines, laid half over a full-bleed photo.

```jsx
<BenefitsPanel kicker="alle" title="Faciliteiten" items={['Gratis wifi','Groot presentatiescherm','Flip-over & stiften']} />
```

List rows carry no bullet glyphs or icons — just light sans lines, 6px apart.

**Elk item krijgt een gouden haarlijnstreepje.** Zonder marker leest de lijst als een alinea die per ongeluk
is afgebroken; een bolletje of een vinkje hoort niet bij dit merk, de getrokken lijn wel — dezelfde als onder
de zaalonderschriften. Op het donkere paneel is het streepje kaarslichtgoud, op sage wit.

**Vast paar met `SplitPanel`.** Alle toepassingen op de site zijn `<SplitPanel image={…}><BenefitsPanel …/></SplitPanel>`:
de foto aan de ene kant, de opsomming aan de andere. `SplitPanel` is alleen de layout en heeft geen eigen
inhoud — zet er dus dit paneel in, geen losse tekst.
