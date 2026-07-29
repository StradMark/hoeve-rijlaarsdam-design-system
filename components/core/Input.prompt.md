One-line: the brand's only form field — a white pill (or square textarea) whose label rises out of the field on focus, for use on the deep-green and sage offerte panels.

```jsx
<Input label="Voornaam" required />
<Input label="Telefoonnummer" type="tel" placeholder="06 - 12 34 56 78" />
<Input label="Uw vraag of wens" multiline rows={4}
       hint="Aantal gasten, datum en gelegenheid helpen ons het meest." />
<Input label="E-mailadres" error="Vul een geldig e-mailadres in." />
<Input label="Voornaam" tone="onLight" />
<Input label="Telefoonnummer" tone="onSage" />
```

**Always pass `label`** — it is the accessible name. Empty, it sits inside the field and looks like a placeholder (display serif, 15px, ink); on focus or once filled it rises to sit above the field in the brand's uppercase label style (11px, letterspaced) — cream on deep green, ink-900 on sage, ink-500 on white or cream. **Set `tone` to the band you place it on**: sage is a mid tone where neither cream nor deep green is readable, so it needs its own value. On `onSage` the error *message* is also ink — the red border is what signals the error, because no red is readable on sage. One family in both states, so the movement is one gesture and not a font swap. The wrapper reserves 20px above the field, so a row of fields never shifts when a label rises.

`placeholder` only appears once the label has risen, so it can hold a format hint without competing with the label. `hint` and `error` are wired to the field with `aria-describedby`; `error` also sets `aria-invalid` and announces itself with `role="alert"`. Focus is a 2px gold ring — never remove it.

Pills for single lines, `multiline` for the long question (square corners, `--radius-xs`, resizable vertically). No other form control exists in the brand.
