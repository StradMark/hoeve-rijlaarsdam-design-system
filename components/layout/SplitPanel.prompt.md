One-line: the alternating photo/text band that carries most of the page body; pair it with `BenefitsPanel` or `SectionHeading` + copy.

```jsx
<SplitPanel image="/assets/photo-voorgerecht.jpg" imageSide="left">
  <BenefitsPanel kicker="alle" title="Faciliteiten" items={[...]} />
</SplitPanel>
```

Photos are square-cornered and can bleed past the container; the panel overlaps the photo edge in the source layouts.
