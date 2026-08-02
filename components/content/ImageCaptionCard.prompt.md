One-line: navigational photo tile — picture, gold uppercase caption, optional one-sentence body.

```jsx
<ImageCaptionCard image="/assets/photo-hoeve-heerlijckheid.jpg" caption="De Hoeve" href="#hoeve" />
```

Portrait 4:5 by default. Hover scales the photo 3% inside its square frame; nothing else moves.

**Op een gekleurd vlak: `tone`.** Goud op sage is verboden, dus `tone="onSage"` zet opschrift, feiten en lijn op
`--text-on-sage-body` en `--rule-on-sage` — wit, de huisstijlkeuze. Wit haalt op sage rekenkundig 2,6:1, dus
sage draagt alleen groot zetsel; kleine bijschriften horen op flessengroen of zacht sage (sage is een middentoon; crème haalt daar onder 16px geen contrast). Op het
donkergroene paneel gebruikt `tone="onDeep"` het lichtere kaarslichtgoud. Laat de kaart nooit op sage staan
met de standaardtoon — dat is de meest gemaakte fout in dit systeem.
