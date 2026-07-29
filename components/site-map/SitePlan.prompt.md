One-line: the chic plattegrond — an engraved-looking estate plan with a numbered legend beside it; use this on a page, and plain `SiteMap` only where the plan must stand alone.

```jsx
<SitePlan image="/assets/map-plattegrond.png" title="Het erf, van bovenaf"
  onSelect={s => onNavigate(s.href)}
  spots={[
    {name:'Het Koetshuis', x:41,y:47,w:13,h:11, image:'/assets/photo-koetshuis-feest.jpg',
     body:'De grootste zaal…', href:'Ruimtes', linkLabel:'Naar de zaal'},
    …
  ]}/>
```

Same `spots` shape as `SiteMap`, so a set of coordinates works in both. Differences: the plan is
tinted (`sepia .26 / saturate .68`, multiplied over cream) so it stops looking like a map screenshot;
markers are numbered gold discs instead of dots; and the description opens **in the legend row**
rather than in a card over the plan — no floating panel, no jumping. Hover on either side lights up the other — colour only. The row opens on **click**, never on hover,
so the list never reflows under the pointer. Below 900px the two columns stack and the plan keeps working by tap.

The numbers come from source order, so order `spots` the way a visitor walks the erf.
