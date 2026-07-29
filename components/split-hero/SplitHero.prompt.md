One-line: the homepage's full-viewport choice between ART and EVENTS — never use it on any other page, and never with more than two halves.

```jsx
<SplitHero
  offset={64}
  caption={<>&ldquo;Daar waar hospitality een kunstvorm is!&rdquo;</>}
  onScrollHint={() => window.scrollBy({top: window.innerHeight, behavior: 'smooth'})}
  items={[
    {label:'Art', ctaLabel:'Galerie', image:'/assets/photo-koetshuis-expositie.jpg', video:'/assets/art.mp4', onSelect:...},
    {label:'Events', ctaLabel:'Mogelijkheden', image:'/assets/photo-lounge-zonsondergang.jpg', onSelect:...}
  ]}
/>
```

Hover widens that half to 1.14, lifts its dark veil, plays/eases its clip 5% in over 3s, flips the pill to white and fades the ampersand out. Without `video` the still gets the same slow scale, so it works before the footage exists. Below 760px the halves stack and all hover behaviour is dropped — the pills carry the choice. The caption strip stays inside the viewport so the page states its purpose without scrolling.
