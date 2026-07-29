One-line: the site footer — three uppercase-serif headed columns (address / contact / opening hours) on deep green.

```jsx
<Footer columns={[
  {title:'Hoeve Rijlaarsdam', lines:[{text:'Nieuwveenseweg 59'},{text:'2421 LB Nieuwkoop'},{text:'06 - 42 57 63 95',strong:true}]},
  {title:'Neem contact op', lines:[{text:'Feesten en meetings',strong:true},{text:'Bel Roos: 06 - 58 98 59 63'}]},
  {title:'Openingstijden galerie', lines:[{label:'Ma t/m do',text:'op afspraak'},{label:'Vrij & za',text:'11.00 - 17.00 uur'}]}
]} />
```

Use `label` for the opening-hours column (bold day range + light time). Social buttons render a typographic mark (`in`, `ig`) because the brand's real glyphs were not supplied — see readme ICONOGRAPHY.

**Social.** `social={['instagram','facebook']}` is the default and points at the real profiles
(instagram.com/hoeverijlaarsdam, facebook.com/HoeveRijlaarsdam). The glyphs are the platforms' own
marks, served from cdn.simpleicons.org in near-black. Do not recolour a glyph into green or gold and
do not redraw one — Meta allows their mark in black or white only. Brand colour belongs in the disc
behind it: sage at rest, white on hover.
