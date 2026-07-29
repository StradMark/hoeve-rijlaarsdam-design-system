One-line: the site's only header — white, never transparent, centred logo, and the single green Offerte pill on the right.

```jsx
<NavBar
  logo="/assets/logo-lockup.svg"
  active="Galerie"
  left={['De Hoeve', {label:'Art', items:['Galerie','Beeldentuin','Kunstenaars']},
         {label:'Events', items:['Zakelijk','Particulier','Bruiloft']}]}
  right={[{label:'Ruimtes', items:['Koetshuis','Hooiberg','Stal','Ontwikkelatelier']},
          {label:'Culinair', items:['Chef Wouter','Catering op locatie','Hospitality','Pop-uprestaurant']},
          'Contact']}
  onNavigate={setPage}
  onCta={openQuote}
/>
```

Pass a string for a plain link, `{label, items}` for a dropdown. The panel is deep green with cream labels going gold on hover, opens on hover *and* focus, and closes after a 140ms grace period so the diagonal mouse path to a child doesn't dismiss it. A parent renders gold when one of its children is the active page. Six top-level entries is the practical ceiling — beyond that the centred logo gets squeezed.

## Twee varianten

`mode="dropdown"` (standaard) opent een paneel onder elke entry met `items`. `mode="flat"` negeert `items` en zet alles als losse link neer — dezelfde `left`/`right` arrays werken in beide standen, dus de keuze is één prop en geen tweede navigatie.

Wanneer welke: flat zolang de balk onder de zeven links blijft (kortste pad, alles zichtbaar). Dropdown zodra de balk daarboven komt of zodra een sectie echt subpagina's heeft — bij meer dan zeven links wordt het gecentreerde logo in de klem gezet en gaan labels afbreken.
