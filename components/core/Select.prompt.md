One-line: dropdown for the offerte form — a native `<select>` wearing the brand pill, with the same rising label as `Input`.

```jsx
<Select label="Gelegenheid" required
        options={['Bruiloft','Bedrijfsfeest','Vergadering','Jubileum','Anders']}/>

<Select label="Ruimte" tone="onLight" placeholder="Nog geen voorkeur"
        options={[{value:'koetshuis',label:'Koetshuis — tot 250 gasten'},
                  {value:'hooiberg',label:'Hooiberg — tot 30 personen'}]}/>

<Select label="Aantal gasten" options={['1 – 20','20 – 50','50 – 100','100 – 250']}
        error="Kies een aantal, dan weten wij welke zaal past."/>
```

**Native on purpose.** Keyboard navigation, type-to-search and the mobile wheel come free; a hand-rolled
listbox gets them wrong and needs a week of aria work to draw level. The pill, the chevron and the label
motion are ours — the behaviour is the platform's.

The empty first option is the closed state and carries `placeholder` (default "Maak een keuze"). Until
something is chosen the field text is transparent and the label sits inside the field, exactly like `Input`;
pick a value and the label rises. **Set `tone` to the band you place it on** — same three-value table as
`Input`, and on sage label, hint and error are white — the house colour there; only the field border keeps the
error red.

**Clear the error the moment it is fixed.** Keep it in state and drop it in `onChange`; an error that stays
after the visitor answers reads as a broken form.

Options can be plain strings, or `{value,label}` when the stored value differs from what the visitor reads.
Use `{value,label}` whenever the label carries a fact ("Koetshuis — tot 250 gasten"): it saves a second
question later.

Keep the list under about ten. Longer than that and it is a search problem, not a dropdown; two or three
short options are a `ChoiceGroup` of radios instead, because they read at a glance.
