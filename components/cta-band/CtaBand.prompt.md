One-line: the offerte call to action that closes a page — always used through `PageOutro`, never on its own.

```jsx
<CtaBand tone="sage" kicker="de plek" title="Waar alles samenkomt"
  body="Vertel ons wat u van plan bent, dan denken wij met u mee." onCta={...}/>
```

Two tones. `cream` is the default and the safe choice; `sage` when the section above is white. Gold was tried as a field colour and rejected — at this size it reads brown rather than gold, and the block loses all elegance; gold stays an accent (kickers, captions, form submit). **Never deep green**: the footer directly below is deep green, so the two would merge into one long dark block. `bleed` adds bottom padding so the carousel below can hang into it; `PageOutro` sets that for you.
