One-line: the fixed ending of every page — offerte CTA and the photo carousel overlapping as one block, with the footer straight after.

```jsx
<PageOutro tone="sage" body="Vertel ons wat u van plan bent, dan denken wij met u mee."
  items={['/assets/photo-koetshuis-feest.jpg', /* …5+ */]}
  onCta={() => go('Contact')}/>
<Footer columns={FOOTER_COLS}/>
```

The carousel is pulled up 28% of its height into the band, so the middle photo straddles the edge — the same overlap the facilities panel uses over a photo. Arrows go white automatically on a coloured band, deep on cream. Give every page its own photos and pick a `tone` that differs from the section above.

No captions: the photography closes the page as atmosphere, not as a labelled index. Pass plain src strings.
Tone is `cream` by default, `sage` when the section above is white. There is no third tone.
