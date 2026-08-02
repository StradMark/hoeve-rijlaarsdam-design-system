One-line: checkbox and radio — the same box, square or round — with `ChoiceGroup` for the question around them.

```jsx
<ChoiceGroup legend="Welk dagdeel" columns={3}>
  {['Ochtend','Middag','Avond'].map(d=>
    <Choice key={d} type="radio" name="dagdeel" value={d} label={d}/>)}
</ChoiceGroup>

<ChoiceGroup legend="Waar mogen wij aan denken" hint="Meerdere antwoorden mogelijk">
  <Choice label="Catering uit eigen keuken"/>
  <Choice label="Gastvrouwen en bediening"/>
  <Choice label="Rondleiding door de galerie" hint="Circa 45 minuten, tussen de gangen door"/>
</ChoiceGroup>

<Choice label="Ik ga akkoord met de privacyverklaring" invalid required tone="onLight"/>
```

**Two or more options belong in a `ChoiceGroup`.** It renders a real `fieldset`/`legend`, so a screen reader
announces the question before each option instead of reading five labels with no context. It also owns the
error message and, for radios, the shared `name` — a radio without a `name` silently escapes its set and
becomes a second, independent group.

**Radio or checkbox is not a style choice.** Radios are one-out-of-a-set and can never be unpicked, so use
them only when a default answer is honest. Checkboxes are independent. Two or three short options read
faster as radios than as a dropdown; more than about six of either is the wrong control.

**Give every radio a `value`.** The group tracks which one is on by that value, so a radio without one falls
back to keeping its own state — and then all of them draw as selected, because the browser unchecks the
siblings without telling React. Read the selection with `value`/`onChange` on the group, not per option.

`invalid` colours the box border only — the message goes on the group, so it is announced once rather than
per option. The whole row is the hit target and it is at least `--touch-min` tall, so the label is always
clickable.

`tone` follows `Input` and `Select`. On the deep-green panel and on sage the box fills white with a green
mark; on light it fills with the accent green and the mark is white.
