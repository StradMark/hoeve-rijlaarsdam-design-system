/* @ds-bundle: {"format":4,"namespace":"HoeveRijlaarsdamDesignSystem_374762","components":[{"name":"BenefitsPanel","sourcePath":"components/content/BenefitsPanel.jsx"},{"name":"ImageCaptionCard","sourcePath":"components/content/ImageCaptionCard.jsx"},{"name":"InfoTile","sourcePath":"components/content/InfoTile.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"RoomCard","sourcePath":"components/content/RoomCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CarouselNav","sourcePath":"components/core/CarouselNav.jsx"},{"name":"Choice","sourcePath":"components/core/Choice.jsx"},{"name":"ChoiceGroup","sourcePath":"components/core/Choice.jsx"},{"name":"FormStatus","sourcePath":"components/core/FormStatus.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"TabPills","sourcePath":"components/core/TabPills.jsx"},{"name":"CtaBand","sourcePath":"components/cta-band/CtaBand.jsx"},{"name":"FaqAccordion","sourcePath":"components/faq/FaqAccordion.jsx"},{"name":"Footer","sourcePath":"components/footer/Footer.jsx"},{"name":"HeroVideo","sourcePath":"components/hero/HeroVideo.jsx"},{"name":"SplitPanel","sourcePath":"components/layout/SplitPanel.jsx"},{"name":"Lightbox","sourcePath":"components/lightbox/Lightbox.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"PageOutro","sourcePath":"components/page-outro/PageOutro.jsx"},{"name":"PhotoCarousel","sourcePath":"components/photo-carousel/PhotoCarousel.jsx"},{"name":"PriceList","sourcePath":"components/price-list/PriceList.jsx"},{"name":"PullQuote","sourcePath":"components/pull-quote/PullQuote.jsx"},{"name":"QuoteBar","sourcePath":"components/quote-bar/QuoteBar.jsx"},{"name":"WinterLockup","sourcePath":"components/seasonal/WinterLockup.jsx"},{"name":"SiteMap","sourcePath":"components/site-map/SiteMap.jsx"},{"name":"SitePlan","sourcePath":"components/site-map/SitePlan.jsx"},{"name":"SplitHero","sourcePath":"components/split-hero/SplitHero.jsx"},{"name":"EmptyState","sourcePath":"components/states/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/states/Skeleton.jsx"},{"name":"LoadingRegion","sourcePath":"components/states/Skeleton.jsx"},{"name":"TabbedDetail","sourcePath":"components/tabbed-detail/TabbedDetail.jsx"}],"sourceHashes":{"components/content/BenefitsPanel.jsx":"fb679a29d0b5","components/content/ImageCaptionCard.jsx":"1f636b595b1d","components/content/InfoTile.jsx":"40aa59598ae7","components/content/PersonCard.jsx":"5bcb902f6219","components/content/RoomCard.jsx":"289321cc4533","components/content/SectionHeading.jsx":"8862533562d6","components/core/Button.jsx":"fae0299e9040","components/core/CarouselNav.jsx":"059da3ddb4da","components/core/Choice.jsx":"b2c5631dfdfb","components/core/FormStatus.jsx":"93bf00d70760","components/core/Input.jsx":"0e09f7ab6109","components/core/Select.jsx":"0c614d1efc41","components/core/TabPills.jsx":"3da024e38382","components/cta-band/CtaBand.jsx":"ea9c9266e02c","components/faq/FaqAccordion.jsx":"3c3d04783093","components/footer/Footer.jsx":"329b60e585b3","components/hero/HeroVideo.jsx":"cbf67a583d76","components/layout/SplitPanel.jsx":"88205b0574e3","components/lightbox/Lightbox.jsx":"daa459e8e15d","components/navigation/NavBar.jsx":"48e5b0f1970a","components/page-outro/PageOutro.jsx":"b812e68d8e9e","components/photo-carousel/PhotoCarousel.jsx":"43e74d8e8560","components/price-list/PriceList.jsx":"773639333ee0","components/pull-quote/PullQuote.jsx":"a283ab7fa630","components/quote-bar/QuoteBar.jsx":"8e439395bdc3","components/seasonal/WinterLockup.jsx":"fb0024dcd33b","components/site-map/SiteMap.jsx":"57efec3bc1a5","components/site-map/SitePlan.jsx":"375926081aee","components/split-hero/SplitHero.jsx":"a46932fdc773","components/states/EmptyState.jsx":"eb96537b9fff","components/states/Skeleton.jsx":"a21f3c61c8ef","components/tabbed-detail/TabbedDetail.jsx":"df6d83d3a6bb","doc-page.js":"371bab66f42d","guidelines/seasonal/seizoenslogo.js":"a670f410c706","md.js":"0f2fa991563d","ui_kits/website/app.jsx":"75ef0122a40a","ui_kits/website/content.jsx":"c32ca56750c2","ui_kits/website/parts.jsx":"9f5cc86ca410","ui_kits/website/prijzen.jsx":"8e8b08c41396","ui_kits/website/screen-afscheid.jsx":"12887a559f89","ui_kits/website/screen-agenda.jsx":"3feb2242e97a","ui_kits/website/screen-bruiloft.jsx":"94f0436df1f6","ui_kits/website/screen-catering.jsx":"15831b3ec3ae","ui_kits/website/screen-contact.jsx":"b07f866b1233","ui_kits/website/screen-galerie.jsx":"e3ecd4d2325e","ui_kits/website/screen-home.jsx":"c094de349a44","ui_kits/website/screen-hospitality.jsx":"8748a8aca8db","ui_kits/website/screen-overons.jsx":"0dbd393a0594","ui_kits/website/screen-particulier.jsx":"13812a0df2d0","ui_kits/website/screen-popup.jsx":"21f4d364f567","ui_kits/website/screen-praktisch.jsx":"b8ea2ce6bf65","ui_kits/website/screen-ruimte.jsx":"ef756345b92a","ui_kits/website/screen-zakelijk.jsx":"ff57b3ee0127","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[{"name":"checkKicker","sourcePath":"components/content/SectionHeading.jsx"}]} */

(() => {

const __ds_ns = (window.HoeveRijlaarsdamDesignSystem_374762 = window.HoeveRijlaarsdamDesignSystem_374762 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BenefitsPanel.jsx
try { (() => {
/* Opsomming van wat er bij een zaal of dienst inbegrepen zit. Elk item krijgt een gouden
   haarlijnstreepje: zonder marker leest de lijst als een alinea die per ongeluk is
   afgebroken, en een bolletje of vinkje hoort niet bij dit merk — de getrokken lijn wel. */
function BenefitsPanel({
  kicker,
  title,
  items = [],
  tone = 'deep',
  style
}) {
  const deep = tone === 'deep';
  const dash = deep ? 'var(--gold-300)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: deep ? 'var(--surface-deep)' : 'var(--surface-panel-soft)',
      padding: 'var(--space-7) var(--space-7)',
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontVariantLigatures: 'none',
      fontSize: 'var(--fs-script-m)',
      lineHeight: 'var(--lh-script)',
      color: deep ? 'var(--sage-300)' : 'var(--cream-100)',
      marginBottom: '-.24em',
      marginLeft: '-.18em'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-m)',
      color: 'var(--white)',
      fontWeight: 400,
      margin: '0 0 var(--space-5)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '10px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '14px 1fr',
      gap: 'var(--space-3)',
      alignItems: 'baseline',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      fontWeight: 'var(--fw-body)',
      color: deep ? 'var(--text-on-dark)' : 'var(--white)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      height: 1,
      background: dash,
      transform: 'translateY(-.35em)'
    }
  }), /*#__PURE__*/React.createElement("span", null, it)))));
}
Object.assign(__ds_scope, { BenefitsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BenefitsPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageCaptionCard.jsx
try { (() => {
/* Photo with a spaced caption under it. `tone` says which field it stands on: gold is
   forbidden on sage, so onSage puts the caption in white and the body in ink. */
function ImageCaptionCard({
  image,
  caption,
  body,
  ratio = '4 / 5',
  tone = 'light',
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  const onSage = tone === 'onSage',
    onDeep = tone === 'onDeep';
  const capColor = onSage ? 'var(--text-on-sage-body)' : onDeep ? 'var(--gold-300)' : 'var(--text-accent)';
  const bodyColor = onSage ? 'var(--text-on-sage-body)' : onDeep ? 'var(--cream-100)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--ink-100)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: capColor,
      marginTop: 'var(--space-4)'
    }
  }, caption), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      color: bodyColor,
      textAlign: 'center'
    }
  }, body));
}
Object.assign(__ds_scope, { ImageCaptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageCaptionCard.jsx", error: String((e && e.message) || e) }); }

// components/content/InfoTile.jsx
try { (() => {
const TILE_TONES = {
  sage: {
    bg: 'var(--surface-panel-soft)',
    body: 'var(--white)',
    title: 'var(--white)',
    rule: 'rgba(255,255,255,.5)',
    ink: 'brightness(0) invert(1)'
  },
  sageLight: {
    bg: 'var(--sage-200)',
    body: 'var(--green-900)',
    title: 'var(--green-900)',
    rule: 'rgba(31,74,60,.35)',
    ink: 'brightness(0) saturate(0) opacity(.8)'
  },
  cream: {
    bg: 'var(--surface-cream)',
    body: 'var(--text-body)',
    title: 'var(--text-accent)',
    rule: 'var(--border-hairline)',
    ink: 'brightness(0) saturate(0) opacity(.75)'
  },
  deep: {
    bg: 'var(--surface-deep)',
    body: 'var(--text-on-dark)',
    title: 'var(--gold-300)',
    rule: 'var(--border-on-dark)',
    ink: 'brightness(0) invert(1) opacity(.92)'
  }
};
function InfoTile({
  icon,
  iconSize = 152,
  title,
  meta,
  body,
  tone = 'sage',
  caption = 'below',
  captionTone = 'gold',
  style
}) {
  const t = TILE_TONES[tone] || TILE_TONES.sage;
  const below = caption === 'below' && !!title;
  const capColor = captionTone === 'onDark' ? 'var(--gold-300)' : 'var(--text-accent)';
  const mark = icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: iconSize,
      height: iconSize,
      display: 'block',
      filter: t.ink
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: iconSize * .6,
      height: iconSize * .6,
      border: '1px solid currentColor',
      opacity: .45
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      padding: 'var(--space-7) var(--space-6) var(--space-6)',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.body,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: iconSize,
      marginBottom: 'var(--space-6)'
    }
  }, mark), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-s)',
      color: t.body,
      textAlign: 'center',
      lineHeight: 1.8,
      maxWidth: '30ch',
      textWrap: 'pretty'
    }
  }, body), !below && title && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 1,
      background: t.rule,
      margin: '0 auto var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: t.title
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-body-xs)',
      color: t.body,
      opacity: .8
    }
  }, meta))), below && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: capColor
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--text-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { InfoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InfoTile.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function PersonCard({
  image,
  name,
  role,
  phone,
  bookLabel = 'Boek mij',
  onBook,
  tone = 'light',
  ratio = '4 / 5',
  style
}) {
  const [h, setH] = React.useState(false);
  const onColour = tone !== 'light';
  const nameColour = onColour ? 'var(--white)' : 'var(--text-accent)';
  const textColour = onColour ? 'var(--cream-100)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--ink-100)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), onBook && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBook,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: '100%',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      padding: '7px 4px',
      cursor: 'pointer',
      border: 'none',
      lineHeight: 1.4,
      background: h ? 'var(--green-900)' : 'var(--surface-deep)',
      color: 'var(--text-on-dark)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, bookLabel), name && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: nameColour,
      marginTop: 'var(--space-4)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.6,
      color: textColour,
      marginTop: 'var(--space-2)'
    }
  }, role), phone && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.6,
      color: onColour ? 'var(--white)' : 'var(--ink-900)',
      marginTop: 2
    }
  }, phone));
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/RoomCard.jsx
try { (() => {
/* The site's room tile. Two decisions live here:

   1. `reveal` — where the facts sit. 'always' (default) prints them under the caption, so they
      survive scanning and touch; 'hover' hides them behind a scrim over the photo, which reads
      well on desktop but does not exist on a phone. Prefer 'always'.
   2. `variant` — 'quiet' (default) gives one gold action with a growing rule; 'bar' is the
      split dark/sage action bar from the original comps, for two actions per card.
   3. `tone` — which field the card stands on. Gold is forbidden on sage, so onSage swaps the
      caption and rule to white and the facts to ink; onDeep uses the lighter candle gold. */
function RoomCard({
  image,
  caption,
  meta = [],
  summary,
  variant = 'quiet',
  reveal = 'always',
  tone = 'light',
  readMoreLabel = 'Lees meer',
  bookLabel = 'Boek mij',
  onReadMore,
  onBook,
  ratio = '4 / 5',
  style
}) {
  const [hover, setHover] = React.useState(false);
  /* Op een telefoon bestaat hover niet: reveal='hover' zou de feiten daar onbereikbaar maken.
     Onder 760px valt de kaart daarom altijd terug op 'always' — de feiten onder de titel. */
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 760);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const show = narrow ? 'always' : reveal;
  const [h1, setH1] = React.useState(false);
  const [h2, setH2] = React.useState(false);
  const metaLine = meta.filter(Boolean).join('  ·  ');
  const clickable = !!onReadMore;
  const onSage = tone === 'onSage',
    onDeep = tone === 'onDeep';
  const capColor = onSage ? 'var(--text-on-sage-body)' : onDeep ? 'var(--gold-300)' : 'var(--text-accent)';
  const ruleColor = onSage ? 'var(--rule-on-sage)' : onDeep ? 'var(--gold-300)' : 'var(--gold-500)';
  const factColor = onSage ? 'var(--text-on-sage-body)' : onDeep ? 'var(--cream-100)' : 'var(--ink-500)';
  const bar = {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-label-s)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    padding: '7px 4px',
    cursor: 'pointer',
    transition: 'background var(--dur-fast) var(--ease-out)',
    border: 'none',
    lineHeight: 1.4
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: variant === 'quiet' ? onReadMore : undefined,
    style: {
      cursor: variant === 'quiet' && clickable ? 'pointer' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: 'var(--ink-100)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), show === 'hover' && (summary || metaLine) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      padding: 'var(--space-5)',
      background: 'rgba(22,25,26,.62)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--cream-100)'
    }
  }, summary), metaLine && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, metaLine))), variant === 'bar' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onReadMore,
    onMouseEnter: () => setH1(true),
    onMouseLeave: () => setH1(false),
    style: {
      ...bar,
      minHeight: narrow ? 'var(--touch-min)' : undefined,
      background: h1 ? 'var(--green-900)' : 'var(--surface-deep)',
      color: 'var(--text-on-dark)'
    }
  }, readMoreLabel), onBook && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBook,
    onMouseEnter: () => setH2(true),
    onMouseLeave: () => setH2(false),
    style: {
      ...bar,
      minHeight: narrow ? 'var(--touch-min)' : undefined,
      background: h2 ? 'var(--white)' : 'var(--sage-200)',
      color: 'var(--green-900)'
    }
  }, bookLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      textAlign: variant === 'bar' ? 'center' : 'left'
    }
  }, caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: capColor
    }
  }, caption), variant === 'quiet' &&
  /*#__PURE__*/
  /* the only hover flourish: a gold hairline growing under the caption. No shadow, no
     radius, no lifting — the brand separates by colour field, not elevation. */
  React.createElement("div", {
    style: {
      height: 1,
      marginTop: 'var(--space-1)',
      background: ruleColor,
      width: hover ? '100%' : '0%',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }), show === 'always' && metaLine &&
  /*#__PURE__*/
  /* De feitenregel staat in hetzelfde lettertype als de titel erboven (Playfair, gespatieerd),
     niet in Raleway: op verzoek van de ontwerper — titel en feiten horen bij elkaar. */
  React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label)',
      lineHeight: 1.6,
      color: factColor
    }
  }, metaLine), show === 'always' && summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: factColor,
      maxWidth: '34ch'
    }
  }, summary), variant === 'quiet' && clickable && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: 'var(--space-3)',
      minHeight: narrow ? 'var(--touch-min)' : undefined,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: hover ? onSage ? 'var(--ink-900)' : onDeep ? 'var(--white)' : 'var(--green-800)' : capColor,
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, readMoreLabel)));
}
Object.assign(__ds_scope, { RoomCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RoomCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/* Kicker geometry rule: the script line ALWAYS starts left of the title's left edge and
   overlaps it vertically, so the eye reads down-and-right. Never indent it inward. */
const seen = new Set();
/* Kicker-regels (zie readme.md → "De kicker"): max 2 woorden / 14 tekens, geen eigen zin,
   en het kernwoord staat in de titel. Waarschuwen, niet afkappen — de tekstschrijver beslist. */
function checkKicker(kicker, title) {
  /* Sleutel op kicker én titel: dezelfde kicker kan op een andere pagina een kortere titel
     krijgen en dán pas de regel overtreden — op alleen de kicker ontsnapt dat geval. */
  const key = kicker + '|' + title;
  if (typeof kicker !== 'string' || seen.has(key)) return;
  seen.add(key);
  const words = kicker.trim().split(/\s+/).length;
  if (words > 2 || kicker.length > 14) console.warn('[SectionHeading] kicker "' + kicker + '" is te lang (' + words + ' woorden, ' + kicker.length + ' tekens) — max 2 woorden / 14 tekens.');
  if (/[.,!?;:]/.test(kicker)) console.warn('[SectionHeading] kicker "' + kicker + '" bevat interpunctie — een kicker is geen zin.');
  // The title is set 2–3x larger, so a slightly longer kicker still reads as secondary.
  // Only flag a kicker that outweighs a short title (1.6x its length or more).
  if (typeof title === 'string' && title.length && kicker.length >= title.length * 1.6) console.warn('[SectionHeading] kicker "' + kicker + '" overheerst de titel "' + title + '" — kort de kicker in of kies een titel met meer gewicht.');
}
function SectionHeading({
  kicker,
  title,
  align = 'left',
  tone = 'light',
  size = 'm',
  style
}) {
  if (kicker) checkKicker(kicker, title);
  const scriptColor = tone === 'onDeep' ? 'var(--sage-300)' : tone === 'onSage' ? 'var(--cream-100)' : 'var(--gold-500)';
  const titleColor = tone === 'onDeep' || tone === 'onSage' ? 'var(--white)' : 'var(--text-heading)';
  const fsScript = size === 'l' ? 'var(--fs-script-l)' : size === 's' ? 'var(--fs-script-s)' : 'var(--fs-script-m)';
  const fsTitle = size === 'l' ? 'var(--fs-display-l)' : size === 's' ? 'var(--fs-display-s)' : 'var(--fs-display-m)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      position: 'relative',
      textAlign: align,
      paddingTop: kicker ? 'calc(' + fsScript + ' * .64)' : 0
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-.18em',
      top: 0,
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-script)',
      fontVariantLigatures: 'none',
      fontSize: fsScript,
      lineHeight: 'var(--lh-script)',
      color: scriptColor
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: fsTitle,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: titleColor,
      fontWeight: 400,
      margin: 0
    }
  }, title)));
}
Object.assign(__ds_scope, { checkKicker, SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Never mix the `border` shorthand with `borderColor` here: on un-hover React clears the
   longhand and leaves the unchanged shorthand untouched, so the border falls back to black.
   Every tone therefore writes borderColor only, with width and style set once below. */
const TONES = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--accent)'
  },
  gold: {
    background: 'var(--accent-alt)',
    color: 'var(--white)',
    borderColor: 'var(--accent-alt)'
  },
  outlineLight: {
    background: 'transparent',
    color: 'var(--white)',
    borderColor: 'var(--white)'
  },
  outlineDark: {
    background: 'transparent',
    color: 'var(--accent)',
    borderColor: 'var(--accent)'
  },
  white: {
    background: 'var(--white)',
    color: 'var(--accent)',
    borderColor: 'var(--white)'
  }
};
const SIZES = {
  sm: {
    padding: '7px 18px',
    fontSize: 'var(--fs-label-s)'
  },
  md: {
    padding: '10px 26px',
    fontSize: 'var(--fs-label-m)'
  },
  lg: {
    padding: '11px 32px',
    fontSize: 'var(--fs-label-l)'
  }
};
function Button({
  children,
  tone = 'primary',
  size = 'md',
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const t = TONES[tone] || TONES.primary;
  const hoverStyle = hover && !disabled ? tone === 'primary' ? {
    background: 'var(--accent-hover)',
    borderColor: 'var(--accent-hover)'
  } : tone === 'gold' ? {
    background: 'var(--accent-alt-hover)',
    borderColor: 'var(--accent-alt-hover)'
  } : tone === 'outlineLight' ? {
    background: 'var(--white)',
    color: 'var(--accent)',
    borderColor: 'var(--white)'
  } : tone === 'outlineDark' ? {
    background: 'var(--accent)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--accent)'
  } : {
    background: 'var(--cream-200)',
    borderColor: 'var(--cream-200)'
  } : null;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-display)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
    transform: press && !disabled ? 'scale(.97)' : 'none',
    ...t,
    ...(SIZES[size] || SIZES.md),
    ...hoverStyle,
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: s
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CarouselNav.jsx
try { (() => {
/* Hairline ring with a thin chevron — the same drawn line as the gold rules elsewhere,
   not a filled triangle. On hover the ring fills and the chevron steps in its direction.

   Goud staat nooit op lichtgroen (1,3:1, en het goud wordt vaal) — zie
   guidelines/kleur-combinaties.html. tone="gold" hoort op wit, crème of flessengroen;
   op een sage-band gebruik je 'white'. */
function CarouselNav({
  direction = 'next',
  tone = 'sage',
  size = 44,
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  const color = tone === 'sage' ? 'var(--sage-500)' : tone === 'gold' ? 'var(--gold-500)' : tone === 'deep' ? 'var(--green-900)' : 'var(--white)';
  const mark = on ? tone === 'white' ? 'var(--green-900)' : 'var(--white)' : color;
  const next = direction === 'next';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    "aria-label": next ? 'Volgende' : 'Vorige',
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'grid',
      placeItems: 'center',
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + color,
      background: on ? color : 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .35 : 1,
      transition: 'background var(--dur-base) var(--ease-out),opacity var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: Math.round(size * 0.41),
    height: Math.round(size * 0.41),
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible',
      transform: on ? next ? 'translateX(2px)' : 'translateX(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: next ? 'M9 4l8 8-8 8' : 'M15 4l-8 8 8 8',
    fill: "none",
    stroke: mark,
    strokeWidth: "1.4",
    strokeLinecap: "square",
    style: {
      transition: 'stroke var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { CarouselNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CarouselNav.jsx", error: String((e && e.message) || e) }); }

// components/core/Choice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Checkbox and radio in one component — the same box, square or round.
   Always inside a <ChoiceGroup> when there are two or more: the group owns the
   legend, the error and the radio `name`, so a stray radio can't escape its set.

   The group also owns which radio is on. Uncontrolled radios each keeping their own
   state is the classic bug: the browser unchecks the siblings but fires onChange only
   on the one clicked, so every radio ends up drawn as selected. */
const RadioSet = React.createContext(null);
function Choice({
  label,
  hint,
  type = 'checkbox',
  checked,
  defaultChecked,
  onChange,
  value,
  name,
  id,
  tone = 'onDark',
  disabled = false,
  invalid = false,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || 'c' + auto.replace(/:/g, '');
  const hintId = fid + '-hint';
  const [focus, setFocus] = React.useState(false);
  const [inner, setInner] = React.useState(!!defaultChecked);
  const set = React.useContext(RadioSet);
  const grouped = type === 'radio' && set && checked === undefined && value !== undefined;
  // A radio outside a ChoiceGroup: the browser unchecks its siblings without telling React,
  // so let the DOM own the state and mirror it on any change to the same `name`.
  const loose = type === 'radio' && !grouped && checked === undefined;
  const box = React.useRef(null);
  const [domOn, setDomOn] = React.useState(!!defaultChecked);
  React.useEffect(() => {
    if (!loose) return;
    const sync = e => {
      if (e.target.type === 'radio' && e.target.name === name && box.current) setDomOn(box.current.checked);
    };
    document.addEventListener('change', sync);
    return () => document.removeEventListener('change', sync);
  }, [loose, name]);
  React.useEffect(() => {
    if (grouped && defaultChecked) set.select(value);
  }, []);
  const on = checked !== undefined ? checked : grouped ? set.value === value : loose ? domOn : inner;
  const onDark = tone === 'onDark';
  const textColor = onDark ? 'var(--text-on-dark)' : tone === 'onSage' ? 'var(--white)' : 'var(--text-body)';
  const hintColor = onDark ? 'var(--sage-200)' : tone === 'onSage' ? 'var(--white)' : 'var(--ink-500)';
  const boxBorder = invalid ? onDark ? 'var(--field-error-on-dark)' : 'var(--field-error)' : on ? 'transparent' : onDark || tone === 'onSage' ? 'rgba(251,248,243,.6)' : 'var(--ink-300)';
  const boxFill = on ? onDark || tone === 'onSage' ? 'var(--white)' : 'var(--accent)' : 'transparent';
  const markColor = onDark || tone === 'onSage' ? 'var(--green-800)' : 'var(--white)';
  return (
    /*#__PURE__*/
    // No htmlFor: the input is nested inside the label, and pointing the label at its own
    // nested input makes the click count twice — the box toggles on and straight back off.
    React.createElement("label", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start',
        minHeight: 'var(--touch-min)',
        padding: '6px 0',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .45 : 1,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        flex: '0 0 auto',
        width: 20,
        height: 20,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("input", _extends({
      id: fid,
      type: type,
      name: name,
      value: value,
      disabled: disabled,
      ref: box
    }, loose ? {
      defaultChecked: !!defaultChecked
    } : {
      checked: on
    }, {
      "aria-invalid": invalid || undefined,
      "aria-describedby": hint ? hintId : undefined,
      onChange: e => {
        if (grouped) set.select(value);else if (loose) setDomOn(e.target.checked);else if (checked === undefined) setInner(e.target.checked);
        onChange && onChange(e);
      },
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0,
        margin: 0,
        cursor: 'inherit'
      }
    }, rest)), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'block',
        width: 20,
        height: 20,
        boxSizing: 'border-box',
        border: '1px solid ' + boxBorder,
        background: boxFill,
        borderRadius: type === 'radio' ? 'var(--radius-pill)' : 'var(--radius-xs)',
        boxShadow: focus ? '0 0 0 2px var(--focus-ring)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)'
      }
    }, on && type === 'checkbox' && /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 14 14",
      width: "18",
      height: "18",
      style: {
        display: 'block',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 7.4l2.7 2.6L11 4.6",
      fill: "none",
      stroke: markColor,
      strokeWidth: "1.8"
    })), on && type === 'radio' && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: 8,
        height: 8,
        margin: '5px auto',
        borderRadius: 'var(--radius-pill)',
        background: markColor
      }
    }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-s)',
        lineHeight: 'var(--lh-body)',
        color: textColor
      }
    }, label), hint && /*#__PURE__*/React.createElement("span", {
      id: hintId,
      style: {
        display: 'block',
        marginTop: 2,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-label-s)',
        lineHeight: 'var(--lh-body)',
        color: hintColor
      }
    }, hint)))
  );
}

/* Legend, spacing and error for a set of choices. A real <fieldset>/<legend>, so a
   screen reader announces the question before every option. */
function ChoiceGroup({
  legend,
  hint,
  error,
  children,
  tone = 'onDark',
  columns = 1,
  value,
  onChange,
  style
}) {
  const auto = React.useId();
  const errId = 'g' + auto.replace(/:/g, '') + '-err';
  const [picked, setPicked] = React.useState();
  const current = value !== undefined ? value : picked;
  const set = React.useMemo(() => ({
    value: current,
    select: v => {
      if (value === undefined) setPicked(v);
      if (onChange) onChange(v);
    }
  }), [current, value, onChange]);
  const onDark = tone === 'onDark';
  const legendColor = onDark ? 'var(--cream-100)' : tone === 'onSage' ? 'var(--white)' : 'var(--ink-500)';
  const hintColor = onDark ? 'var(--sage-200)' : tone === 'onSage' ? 'var(--white)' : 'var(--ink-500)';
  const errColor = onDark ? 'var(--field-error-on-dark)' : tone === 'onSage' ? 'var(--white)' : 'var(--field-error)';
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      minWidth: 0,
      ...style
    },
    "aria-describedby": error ? errId : undefined,
    "aria-invalid": error ? true : undefined
  }, legend && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: legendColor
    }
  }, legend), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label-s)',
      lineHeight: 'var(--lh-body)',
      color: hintColor
    }
  }, hint), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      display: 'grid',
      gridTemplateColumns: columns > 1 ? 'repeat(' + columns + ',minmax(0,1fr))' : '1fr',
      gap: columns > 1 ? '0 var(--space-5)' : 0
    }
  }, /*#__PURE__*/React.createElement(RadioSet.Provider, {
    value: set
  }, children)), error && /*#__PURE__*/React.createElement("p", {
    id: errId,
    role: "alert",
    style: {
      margin: 'var(--space-2) 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: errColor
    }
  }, error));
}
Object.assign(__ds_scope, { Choice, ChoiceGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Choice.jsx", error: String((e && e.message) || e) }); }

// components/core/FormStatus.jsx
try { (() => {
/* What the form says after the visitor presses send. Success is sage, failure is the
   brick from the field errors — never a green tick or a red cross, the brand has neither.
   `role` is status for success and alert for failure, so it is announced either way. */
function FormStatus({
  variant = 'success',
  title,
  children,
  action,
  style
}) {
  const ok = variant === 'success';
  return /*#__PURE__*/React.createElement("div", {
    role: ok ? 'status' : 'alert',
    "aria-live": ok ? 'polite' : 'assertive',
    style: {
      background: ok ? 'var(--sage-400)' : 'var(--field-error)',
      color: 'var(--white)',
      padding: 'var(--space-6)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--white)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: title ? 'var(--space-3) 0 0' : 0,
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--white)',
      maxWidth: '52ch'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, action));
}
Object.assign(__ds_scope, { FormStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FormStatus.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill text field with a label that rises out of the field on focus or when filled.
   The label IS the accessible name — a real <label htmlFor>, never a placeholder or aria-label. */
function Input({
  label,
  placeholder,
  hint,
  error,
  type = 'text',
  value,
  defaultValue,
  onChange,
  name,
  id,
  tone = 'onDark',
  multiline = false,
  rows = 4,
  required = false,
  disabled = false,
  style,
  fieldStyle,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || 'f' + auto.replace(/:/g, '');
  const hintId = fid + '-hint',
    errId = fid + '-err';
  const [focus, setFocus] = React.useState(false);
  const [inner, setInner] = React.useState(defaultValue || '');
  const val = value !== undefined ? value : inner;
  const filled = String(val ?? '').length > 0;
  // A date or time input always paints its own dd-mm-jjjj skeleton, so an empty label
  // sitting inside the field would collide with it. Those types start risen.
  const alwaysUp = type === 'date' || type === 'time' || type === 'datetime-local' || type === 'month';
  const up = focus || filled || alwaysUp; // label sits above the field
  // ONE table per tone instead of ternaries off a dark/light boolean: a two-state boolean
  // silently gives any third tone the wrong branch. Sage is a mid tone where nothing but
  // ink-900 clears 4.5:1 — not cream (2.4), not green-900 (2.9), not the error red (2.1),
  // so on sage the error text is ink and the RED FIELD BORDER carries the error signal.
  const TONES = {
    onDark: {
      risen: 'var(--cream-100)',
      help: 'var(--cream-100)',
      helpOpacity: .8,
      err: 'var(--field-error-on-dark)',
      border: 'var(--field-error-on-dark)',
      rest: 'transparent'
    },
    onSage: {
      risen: 'var(--text-on-sage-body)',
      help: 'var(--text-on-sage-body)',
      helpOpacity: 1,
      err: 'var(--text-on-sage-body)',
      border: 'var(--field-error)',
      rest: 'transparent'
    },
    onLight: {
      risen: 'var(--ink-500)',
      help: 'var(--ink-500)',
      helpOpacity: 1,
      err: 'var(--field-error)',
      border: 'var(--field-error)',
      rest: 'var(--border-hairline)'
    }
  };
  const t = TONES[tone] || TONES.onDark;
  const labelTop = multiline ? 34 : 32;
  const describedBy = [hint && hintId, error && errId].filter(Boolean).join(' ') || undefined;
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    display: 'block',
    padding: multiline ? '14px 20px' : '11px 20px',
    minHeight: multiline ? rows * 22 + 28 : undefined,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-body)',
    fontSize: 'var(--fs-body-m)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--ink-700)',
    background: disabled ? 'var(--cream-100)' : 'var(--white)',
    border: '1px solid ' + (error ? t.border : focus ? 'var(--focus-ring)' : t.rest),
    borderRadius: multiline ? 'var(--radius-xs)' : 'var(--radius-pill)',
    boxShadow: focus ? '0 0 0 2px var(--focus-ring)' : 'none',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    opacity: disabled ? .45 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
    ...fieldStyle
  };
  const p = {
    id: fid,
    name,
    value: value !== undefined ? value : inner,
    disabled,
    required,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    placeholder: up ? placeholder : undefined,
    onChange: e => {
      if (value === undefined) setInner(e.target.value);
      onChange && onChange(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 20,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      position: 'absolute',
      left: up ? 2 : 21,
      top: up ? 0 : labelTop,
      fontFamily: 'var(--font-display)',
      fontSize: up ? 'var(--fs-label-s)' : 'var(--fs-body-m)',
      letterSpacing: up ? 'var(--ls-label)' : '0',
      textTransform: up ? 'uppercase' : 'none',
      color: up ? t.risen : 'var(--ink-500)',
      // Resting label must share the field's line box, or it sits a hair above centre.
      lineHeight: up ? 1.5 : 'var(--lh-body)',
      cursor: disabled ? 'not-allowed' : 'text',
      transition: 'top var(--dur-base) var(--ease-out),left var(--dur-base) var(--ease-out),' + 'font-size var(--dur-base) var(--ease-out),letter-spacing var(--dur-base) var(--ease-out),' + 'color var(--dur-base) var(--ease-out)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent)'
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, p)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, p)), hint && !error && /*#__PURE__*/React.createElement("p", {
    id: hintId,
    style: {
      margin: '6px 0 0 21px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label-s)',
      lineHeight: 'var(--lh-body)',
      color: t.help,
      opacity: t.helpOpacity
    }
  }, hint), error && /*#__PURE__*/React.createElement("p", {
    id: errId,
    role: "alert",
    style: {
      margin: '6px 0 0 21px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: t.err
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Dropdown that matches Input: same pill, same rising label, same tone table.
   A native <select> on purpose — it inherits the platform's keyboard, search-by-typing
   and mobile wheel, none of which a custom listbox gets right for free. */
function Select({
  label,
  options = [],
  placeholder = 'Maak een keuze',
  hint,
  error,
  value,
  defaultValue,
  onChange,
  name,
  id,
  tone = 'onDark',
  required = false,
  disabled = false,
  style,
  fieldStyle,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || 's' + auto.replace(/:/g, '');
  const hintId = fid + '-hint',
    errId = fid + '-err';
  const [focus, setFocus] = React.useState(false);
  const [inner, setInner] = React.useState(defaultValue || '');
  const val = value !== undefined ? value : inner;
  const up = focus || String(val ?? '').length > 0;
  const TONES = {
    onDark: {
      risen: 'var(--cream-100)',
      help: 'var(--cream-100)',
      helpOpacity: .8,
      err: 'var(--field-error-on-dark)',
      border: 'var(--field-error-on-dark)',
      rest: 'transparent'
    },
    onSage: {
      risen: 'var(--text-on-sage-body)',
      help: 'var(--text-on-sage-body)',
      helpOpacity: 1,
      err: 'var(--text-on-sage-body)',
      border: 'var(--field-error)',
      rest: 'transparent'
    },
    onLight: {
      risen: 'var(--ink-500)',
      help: 'var(--ink-500)',
      helpOpacity: 1,
      err: 'var(--field-error)',
      border: 'var(--field-error)',
      rest: 'var(--border-hairline)'
    }
  };
  const t = TONES[tone] || TONES.onDark;
  const describedBy = [hint && hintId, error && errId].filter(Boolean).join(' ') || undefined;
  const items = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 20,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      position: 'absolute',
      left: up ? 2 : 21,
      top: up ? 0 : 32,
      fontFamily: 'var(--font-display)',
      fontSize: up ? 'var(--fs-label-s)' : 'var(--fs-body-m)',
      letterSpacing: up ? 'var(--ls-label)' : '0',
      textTransform: up ? 'uppercase' : 'none',
      color: up ? t.risen : 'var(--ink-500)',
      lineHeight: up ? 1.5 : 'var(--lh-body)',
      zIndex: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: 'none',
      transition: 'top var(--dur-base) var(--ease-out),left var(--dur-base) var(--ease-out),' + 'font-size var(--dur-base) var(--ease-out),letter-spacing var(--dur-base) var(--ease-out),' + 'color var(--dur-base) var(--ease-out)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    name: name,
    disabled: disabled,
    required: required,
    value: val,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: e => {
      if (value === undefined) setInner(e.target.value);
      onChange && onChange(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'block',
      padding: '11px 44px 11px 20px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-body)',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)',
      color: up ? 'var(--ink-700)' : 'transparent',
      background: disabled ? 'var(--cream-100)' : 'var(--white)',
      border: '1px solid ' + (error ? t.border : focus ? 'var(--focus-ring)' : t.rest),
      borderRadius: 'var(--radius-pill)',
      boxShadow: focus ? '0 0 0 2px var(--focus-ring)' : 'none',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      opacity: disabled ? .45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
      ...fieldStyle
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    style: {
      position: 'absolute',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      opacity: disabled ? .45 : 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l5 5 5-5",
    fill: "none",
    stroke: "var(--ink-500)",
    strokeWidth: "1.4"
  }))), hint && !error && /*#__PURE__*/React.createElement("p", {
    id: hintId,
    style: {
      margin: '6px 0 0 21px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label-s)',
      lineHeight: 'var(--lh-body)',
      color: t.help,
      opacity: t.helpOpacity
    }
  }, hint), error && /*#__PURE__*/React.createElement("p", {
    id: errId,
    role: "alert",
    style: {
      margin: '6px 0 0 21px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: t.err
    }
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/TabPills.jsx
try { (() => {
function TabPills({
  items = [],
  value,
  onChange,
  tone = 'onSage',
  style
}) {
  const active = value ?? items[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      ...style
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onChange && onChange(it),
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-m)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: '9px 24px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'all var(--dur-fast) var(--ease-out)',
        background: on ? tone === 'onSage' ? 'var(--accent)' : 'var(--accent)' : tone === 'onSage' ? 'var(--white)' : 'transparent',
        color: on ? 'var(--text-on-dark)' : tone === 'onSage' ? 'var(--accent)' : 'var(--accent)',
        border: '1px solid ' + (on ? 'var(--accent)' : tone === 'onSage' ? 'var(--white)' : 'var(--accent)')
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { TabPills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabPills.jsx", error: String((e && e.message) || e) }); }

// components/cta-band/CtaBand.jsx
try { (() => {
const TONES = {
  cream: {
    bg: 'var(--surface-cream)',
    heading: 'light',
    body: 'var(--text-body)',
    button: 'primary'
  },
  sage: {
    bg: 'var(--surface-sage)',
    heading: 'onSage',
    body: 'var(--text-on-dark)',
    button: 'white'
  }
};

/* Closing call to action, directly above the deep-green footer.
   Never deep green itself — it would merge with the footer into one long dark block.
   `gold` is the exception tone: at most one page per site (e.g. bruiloften). */
function CtaBand({
  kicker = 'de plek',
  title = 'Waar alles samenkomt',
  body,
  ctaLabel = 'Vraag offerte aan',
  onCta,
  tone = 'cream',
  bleed = 0,
  style
}) {
  const t = TONES[tone] || TONES.cream;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: t.bg,
      padding: 'var(--section-y-tight) var(--space-8)',
      paddingBottom: bleed ? 'calc(var(--section-y-tight) + ' + bleed + 'px)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    kicker: kicker,
    title: title,
    align: "center",
    size: "l",
    tone: t.heading
  }), body && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '78ch',
      margin: 'var(--space-5) auto var(--space-6)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: t.body
    }
  }, body), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: t.button,
    size: "md",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta-band/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/faq/FaqAccordion.jsx
try { (() => {
/* Uitklapbare vragen. Opent en sluit met een echte hoogte-animatie (grid-template-rows),
   het antwoord blijft gemonteerd zodat sluiten ook animeert. */
function FaqAccordion({
  items = [],
  tone = 'onDeep',
  defaultOpen = 0,
  allowMultiple = false,
  style
}) {
  const [open, setOpen] = React.useState(() => defaultOpen > -1 ? [defaultOpen] : []);
  const onDeep = tone === 'onDeep';
  const isOpen = i => open.indexOf(i) > -1;
  const toggle = i => setOpen(cur => {
    if (cur.indexOf(i) > -1) return cur.filter(x => x !== i);
    return allowMultiple ? cur.concat(i) : [i];
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, items.map((it, i) => {
    const opened = isOpen(i);
    const rowBg = onDeep ? opened ? 'var(--sage-400)' : 'var(--white)' : opened ? 'var(--surface-deep)' : 'var(--sage-400)';
    // Only one row treatment is dark: the opened row on a light section. Everything
    // else is white or sage, and 12px caps need ink on those, never white (2.05:1).
    // Sage is a mid tone — green-900 on it is only 2.88:1, so sage rows take ink-900 (6.9:1).
    const rowIsDark = !onDeep && opened;
    const rowIsSage = onDeep ? opened : !opened;
    const rowColor = rowIsDark ? 'var(--white)' : rowIsSage ? 'var(--ink-900)' : 'var(--green-900)';
    const markBg = rowIsDark ? 'var(--white)' : 'var(--surface-deep)';
    const markInk = rowIsDark ? 'var(--surface-deep)' : 'var(--white)';
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": opened,
      "aria-controls": 'faq-p-' + i,
      onMouseEnter: e => {
        if (!opened) e.currentTarget.style.filter = 'brightness(.96)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.filter = 'none';
      },
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        background: rowBg,
        color: rowColor,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        padding: '9px 22px 9px 9px',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit',
        transition: 'background var(--dur-base) var(--ease-out),filter var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 24,
        height: 24,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-pill)',
        background: markBg,
        position: 'relative',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform var(--dur-slow) var(--ease-out),background var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 11,
        height: 1.5,
        marginLeft: -5.5,
        marginTop: -.75,
        background: markInk,
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 11,
        height: 1.5,
        marginLeft: -5.5,
        marginTop: -.75,
        background: markInk,
        transform: opened ? 'rotate(0deg) scaleX(0)' : 'rotate(90deg)',
        transition: 'transform var(--dur-slow) var(--ease-out),background var(--dur-base) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-m)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        lineHeight: 1.35
      }
    }, it.question)), /*#__PURE__*/React.createElement("div", {
      id: 'faq-p-' + i,
      role: "region",
      style: {
        display: 'grid',
        gridTemplateRows: opened ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--space-4) 0 var(--space-4) 49px',
        fontSize: 'var(--fs-body-s)',
        lineHeight: 'var(--lh-body)',
        color: onDeep ? 'var(--text-on-dark)' : 'var(--text-body)',
        maxWidth: '62ch',
        opacity: opened ? 1 : 0,
        transform: opened ? 'translateY(0)' : 'translateY(-4px)',
        transition: 'opacity var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)'
      }
    }, it.answer || 'Antwoord nog aan te leveren.'))));
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/faq/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/footer/Footer.jsx
try { (() => {
/* Social glyphs come from Simple Icons (cdn.simpleicons.org) — the platforms' OWN marks.
   Never redraw or recolour these in brand colours: Meta's guidelines allow the glyph in
   black or white only. The brand colour goes in the disc BEHIND the glyph, never in it. */
const SOCIAL = {
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/hoeverijlaarsdam/'
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/HoeveRijlaarsdam/'
  },
  linkedin: {
    label: 'LinkedIn',
    href: '#'
  }
};
function SocialButton({
  name
}) {
  const [hover, setHover] = React.useState(false);
  const meta = SOCIAL[name] || {
    label: name,
    href: '#'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: meta.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": meta.label,
    title: meta.label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-pill)',
      flex: '0 0 auto',
      background: hover ? 'var(--white)' : 'var(--sage-200)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 'https://cdn.simpleicons.org/' + name + '/16191A',
    alt: "",
    width: "15",
    height: "15",
    style: {
      display: 'block'
    }
  }));
}
function Footer({
  columns = [],
  social = ['instagram', 'facebook'],
  legal = 'Ontwerp: Janneke van Soeren-Aupers · Realisatie: Mark Stradmann · © 2026 Hoeve Rijlaarsdam Hospitality B.V.',
  links = ['Algemene voorwaarden', 'Cookies', 'Privacy'],
  style
}) {
  /* Gestapeld op telefoon: drie kolommen onder elkaar met minder lucht ertussen dan naast
     elkaar, en de labelkolom van de openingstijden krijgt geen vaste breedte meer — die liet
     anders een gat van 64px in elke regel staan. */
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 760);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-deep)',
      color: 'var(--text-on-dark)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: narrow ? 'var(--space-6) var(--gutter)' : 'var(--space-7) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : 'repeat(3,1fr)',
      gap: narrow ? 'var(--space-6)' : 'var(--space-7)'
    }
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: '0 0 var(--space-4)',
      fontWeight: 400
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, col.lines.map((l, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      fontSize: 'var(--fs-body-s)',
      fontWeight: l.strong ? 'var(--fw-body-strong)' : 'var(--fw-body)',
      color: l.strong ? 'var(--white)' : 'var(--sage-200)',
      display: 'flex',
      gap: narrow ? 'var(--space-3)' : 'var(--space-4)'
    }
  }, l.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-body-strong)',
      color: 'var(--white)',
      minWidth: narrow ? undefined : 64,
      flex: narrow ? '0 0 auto' : undefined
    }
  }, l.label), /*#__PURE__*/React.createElement("span", null, l.text)))), i === 0 && social.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement(SocialButton, {
    key: s,
    name: s
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: narrow ? 'var(--space-4) var(--gutter)' : '10px var(--space-6)',
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      alignItems: narrow ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: narrow ? 'var(--space-3)' : 'var(--space-5)',
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--sage-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, links.map(l => {
    const label = typeof l === 'string' ? l : l.label,
      href = typeof l === 'string' ? '#' : l.href || '#';
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: href,
      style: {
        color: 'var(--sage-200)'
      }
    }, label);
  })))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/hero/HeroVideo.jsx
try { (() => {
function HeroVideo({
  image,
  video,
  kicker,
  title,
  height = 460,
  showPlay = false,
  align = 'center',
  intro = true,
  children,
  style
}) {
  /* Dezelfde kickerregels als SectionHeading: een hero is niet vrijgesteld. */
  if (kicker) __ds_scope.checkKicker(kicker, title);
  const [hover, setHover] = React.useState(false);
  /* Intro-motion: de scrim trekt open en de tekst zet zich 10px omhoog — het beeld zelf
     blijft stil, zodat video erachter niet meevecht. Eén keer per sessie. */
  const [lit, setLit] = React.useState(() => {
    if (!intro) return true;
    try {
      return sessionStorage.getItem('hr-hero-intro') === '1';
    } catch (e) {
      return false;
    }
  });
  React.useEffect(() => {
    if (lit) return;
    const t = requestAnimationFrame(() => setLit(true));
    try {
      sessionStorage.setItem('hr-hero-intro', '1');
    } catch (e) {}
    return () => cancelAnimationFrame(t);
  }, [lit]);
  const rise = delay => ({
    opacity: lit ? 1 : 0,
    transform: lit ? 'none' : 'translateY(10px)',
    transition: 'opacity .55s var(--ease-out) ' + delay + 'ms,transform .55s var(--ease-out) ' + delay + 'ms'
  });
  // one hero, two sources. A video autoplays muted and loops on load — no play button, no
  // controls, because the footage is atmosphere and not something a visitor chooses to watch.
  // `image` doubles as its poster, so the hero is never empty while the file loads.
  const media = video ? /*#__PURE__*/React.createElement("video", {
    src: video,
    poster: image,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null;
  return /*#__PURE__*/React.createElement("section", {
    "data-hero": true,
    style: {
      position: 'relative',
      height,
      background: 'var(--ink-700)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@media(prefers-reduced-motion:reduce){[data-hero] *{transition-duration:.01ms!important}}'), media, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-photo)',
      opacity: lit ? 1 : 1.6,
      transition: 'opacity .7s var(--ease-out)'
    }
  }), (title || kicker) &&
  /*#__PURE__*/
  /* titels staan verticaal gecentreerd, waar het onderste gradiënt niet komt:
     een eigen band-scrim achter het tekstblok houdt wit leesbaar op lichte foto's */
  React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '18%',
      bottom: '18%',
      background: 'linear-gradient(180deg,rgba(22,25,26,0) 0%,rgba(22,25,26,.46) 42%,rgba(22,25,26,.46) 62%,rgba(22,25,26,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      justifyContent: 'center',
      padding: '0 var(--space-8)',
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, (kicker || title) &&
  /*#__PURE__*/
  /* zelfde geometrie als SectionHeading: de kicker hangt links van de titel en
     overlapt verticaal — ook bij gecentreerde heroes */
  React.createElement("span", {
    style: {
      display: 'inline-block',
      position: 'relative',
      paddingTop: kicker ? 'calc(var(--fs-script-l) * .64)' : 0
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-.18em',
      top: 0,
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-script)',
      fontVariantLigatures: 'none',
      fontSize: 'var(--fs-script-l)',
      lineHeight: 'var(--lh-script)',
      color: 'var(--cream-100)',
      ...rise(360)
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-l)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      color: 'var(--white)',
      margin: 0,
      ...rise(250)
    }
  }, title)), children), showPlay && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Play",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%) scale(' + (hover ? 1.08 : 1) + ')',
      width: 70,
      height: 70,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'rgba(255,255,255,.9)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '12px solid transparent',
      borderBottom: '12px solid transparent',
      borderLeft: '20px solid var(--green-800)',
      marginLeft: 5
    }
  })));
}
Object.assign(__ds_scope, { HeroVideo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/HeroVideo.jsx", error: String((e && e.message) || e) }); }

// components/layout/SplitPanel.jsx
try { (() => {
function SplitPanel({
  image,
  children,
  imageSide = 'left',
  background = 'var(--surface-sage)',
  padded = true,
  ratio = '4 / 3',
  style
}) {
  const media = /*#__PURE__*/React.createElement("div", {
    key: "m",
    style: {
      aspectRatio: ratio,
      background: 'var(--ink-100)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
  const panel = /*#__PURE__*/React.createElement("div", {
    key: "p",
    style: {
      alignSelf: 'center'
    }
  }, children);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background,
      padding: padded ? 'var(--section-y-tight) var(--space-8)' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, imageSide === 'left' ? [media, panel] : [panel, media]));
}
Object.assign(__ds_scope, { SplitPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SplitPanel.jsx", error: String((e && e.message) || e) }); }

// components/lightbox/Lightbox.jsx
try { (() => {
/* Eén foto op ware grootte, boven de pagina. Voor de carousel en de galerie: wie op het
   middelste beeld klikt wil het groter zien, niet naar een andere pagina.

   Geen kruis in een hoek en geen knoppenbalk: de achtergrond is diepgroen op 94 procent —
   het merk heeft geen zwart — en de weg terug is overal (klik naast de foto, Escape, of de
   sluitknop rechtsboven). Pijlen alleen als er meer dan één foto is.

   Toetsenbord: links en rechts bladeren, Escape sluit, en de focus keert terug naar het
   element dat de lightbox opende. Achter de lightbox scrollt de pagina niet mee. */
function Lightbox({
  items = [],
  index = 0,
  onClose,
  onIndex,
  style
}) {
  const list = items.map(it => typeof it === 'string' ? {
    src: it
  } : it);
  const n = list.length;
  const [own, setOwn] = React.useState(index);
  const cur = onIndex ? index : own;
  const set = k => {
    const v = (k + n) % n;
    if (onIndex) onIndex(v);else setOwn(v);
  };
  const box = React.useRef(null);
  const opener = React.useRef(null);
  React.useEffect(() => {
    if (!onIndex) setOwn(index);
  }, [index]);
  React.useEffect(() => {
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const key = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose && onClose();
      }
      if (n > 1 && e.key === 'ArrowRight') {
        e.preventDefault();
        set(cur + 1);
      }
      if (n > 1 && e.key === 'ArrowLeft') {
        e.preventDefault();
        set(cur - 1);
      }
    };
    document.addEventListener('keydown', key);
    if (box.current) box.current.focus({
      preventScroll: true
    });
    return () => {
      document.removeEventListener('keydown', key);
      document.body.style.overflow = prev;
      if (opener.current && opener.current.focus) opener.current.focus();
    };
  }, [cur, n]);
  if (!n) return null;
  const it = list[cur] || {};
  const arrow = dir =>
  /*#__PURE__*/
  /* Vast aan de rand, niet naast de foto: staan ze in de flexrij, dan verspringen ze bij
     elke foto met een andere breedte. */
  React.createElement("button", {
    type: "button",
    "aria-label": dir === 'next' ? 'Volgende foto' : 'Vorige foto',
    onClick: e => {
      e.stopPropagation();
      set(cur + (dir === 'next' ? 1 : -1));
    },
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [dir === 'next' ? 'right' : 'left']: 'var(--space-6)',
      zIndex: 2,
      width: 52,
      height: 52,
      display: 'grid',
      placeItems: 'center',
      padding: 0,
      cursor: 'pointer',
      background: 'rgba(15,44,37,.55)',
      border: '1px solid var(--gold-300)',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'next' ? 'M9 4l8 8-8 8' : 'M15 4l-8 8 8 8',
    fill: "none",
    stroke: "var(--gold-300)",
    strokeWidth: "1.4",
    strokeLinecap: "square"
  })));
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": it.caption || 'Foto',
    tabIndex: -1,
    onClick: () => onClose && onClose(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      background: 'rgba(15,44,37,.94)',
      outline: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 132,
      background: 'linear-gradient(rgba(15,44,37,.98) 40%,rgba(15,44,37,0))',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Sluiten",
    onClick: e => {
      e.stopPropagation();
      onClose && onClose();
    },
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: 'none',
      border: 0,
      padding: '6px 2px',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Sluiten", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "14",
    height: "14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l12 12M14 2L2 14",
    fill: "none",
    stroke: "var(--gold-300)",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 calc(var(--space-6) * 2 + 52px)',
      minHeight: 0
    }
  }, n > 1 && arrow('prev'), /*#__PURE__*/React.createElement("img", {
    src: it.src,
    alt: it.caption || '',
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  }), n > 1 && arrow('next')), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-5) var(--space-6) var(--space-7)'
    }
  }, it.caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--cream-100)'
    }
  }, it.caption), n > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: it.caption ? 6 : 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      color: 'var(--sage-300)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, cur + 1, " / ", n)));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lightbox/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/* Items are either a plain string or {label, items:[...]} — the latter opens a panel on hover/focus. */
function NavBar({
  logo,
  left = [],
  right = [],
  active,
  mode = 'dropdown',
  ctaLabel = 'Offerte',
  onCta,
  onNavigate,
  narrow: narrowProp,
  defaultDrawerOpen = false,
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(null);
  /* Onder 900px past een gesplitste navigatie met zeven links en een knop niet meer naast
     elkaar; dan wordt het logo links, een lade-knop rechts, en de hele navigatie een lijst
     over het scherm. Groepen worden daar accordeons in plaats van zweefpanelen — hover
     bestaat niet op een telefoon. */
  const [narrowAuto, setNarrowAuto] = React.useState(false);
  const [drawer, setDrawer] = React.useState(defaultDrawerOpen);
  const [fold, setFold] = React.useState(null);
  React.useEffect(() => {
    const check = () => setNarrowAuto(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een
     kaart de telefoonvorm naast de desktopvorm kan tonen. */
  const narrow = narrowProp === undefined ? narrowAuto : narrowProp;
  React.useEffect(() => {
    if (!narrow) setDrawer(false);
  }, [narrow]);
  const close = React.useRef(null);
  const enter = k => {
    clearTimeout(close.current);
    setOpen(k);
  };
  const leave = () => {
    clearTimeout(close.current);
    close.current = setTimeout(() => setOpen(null), 140);
  };
  React.useEffect(() => () => clearTimeout(close.current), []);

  /* De balk blijft staan bij scrollen: de pagina's zijn lang en de weg naar Contact of een
     andere zaal mag geen terugreis naar boven zijn. Boven aan de pagina is hij nog vlak, zodat
     hij op de hero zweeft; zodra er iets onder de balk door is gegaan komt de gouden haarlijn. */
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    if (!sticky) return;
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, [sticky]);
  const bar = sticky ? {
    position: 'sticky',
    top: 0,
    borderBottom: '1px solid ' + (scrolled ? 'var(--gold-300)' : 'transparent'),
    boxShadow: scrolled ? '0 1px 12px rgba(22,25,26,.06)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)'
  } : null;
  const go = item => {
    setOpen(null);
    setDrawer(false);
    onNavigate && onNavigate(item);
  };
  const labelOf = it => typeof it === 'string' ? it : it.label;
  const isActive = it => {
    const l = labelOf(it);
    return l === active || typeof it !== 'string' && (it.items || []).some(c => labelOf(c) === active);
  };
  const linkStyle = on => ({
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-label-m)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: on ? 'var(--text-accent)' : 'var(--ink-900)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'color var(--dur-fast) var(--ease-out)'
  });
  const item = (it, i) => {
    const l = labelOf(it),
      on = isActive(it),
      kids = mode === 'flat' ? null : typeof it === 'string' ? null : it.items;
    const k = l + '-' + i;
    if (!kids) return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(l);
      },
      style: linkStyle(on),
      onMouseEnter: e => e.currentTarget.style.color = 'var(--text-accent)',
      onMouseLeave: e => e.currentTarget.style.color = on ? 'var(--text-accent)' : 'var(--ink-900)'
    }, l);
    const shown = open === k;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onMouseEnter: () => enter(k),
      onMouseLeave: leave,
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(l);
      },
      onFocus: () => enter(k),
      style: {
        ...linkStyle(on || shown),
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, l, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        borderLeft: '3.5px solid transparent',
        borderRight: '3.5px solid transparent',
        borderTop: '4px solid currentColor',
        opacity: .7,
        transform: shown ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: -18,
        minWidth: 236,
        paddingTop: 14,
        zIndex: 40,
        opacity: shown ? 1 : 0,
        visibility: shown ? 'visible' : 'hidden',
        transform: shown ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out),visibility var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-deep)',
        padding: 'var(--space-4) 0',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-card)'
      }
    }, kids.map(c => {
      const cl = labelOf(c),
        ca = cl === active;
      return /*#__PURE__*/React.createElement("a", {
        key: cl,
        href: "#",
        onClick: e => {
          e.preventDefault();
          go(cl);
        },
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-label-s)',
          letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase',
          textDecoration: 'none',
          color: ca ? 'var(--text-accent)' : 'var(--cream-100)',
          padding: '11px var(--space-5)',
          whiteSpace: 'nowrap',
          transition: 'color var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out)'
        },
        onMouseEnter: e => {
          e.currentTarget.style.color = 'var(--text-accent)';
          e.currentTarget.style.background = 'rgba(251,248,243,.06)';
        },
        onMouseLeave: e => {
          e.currentTarget.style.color = ca ? 'var(--text-accent)' : 'var(--cream-100)';
          e.currentTarget.style.background = 'none';
        }
      }, cl);
    }))));
  };
  if (narrow) {
    const rows = [...left, ...right];
    const rowLabel = {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      background: 'none',
      border: 0,
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer'
    };
    return /*#__PURE__*/React.createElement("header", {
      style: {
        background: 'var(--white)',
        position: 'relative',
        zIndex: 30,
        ...bar,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: '8px var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(labelOf(left[0]) || 'home');
      },
      style: {
        lineHeight: 0
      }
    }, logo ? /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: "Hoeve Rijlaarsdam",
      style: {
        height: 38
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 15,
        letterSpacing: 'var(--ls-label)',
        color: 'var(--ink-900)'
      }
    }, "HOEVE RIJLAARSDAM")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setDrawer(d => !d),
      "aria-expanded": drawer,
      "aria-label": drawer ? 'Sluit menu' : 'Open menu',
      style: {
        width: 'var(--touch-min)',
        height: 'var(--touch-min)',
        display: 'grid',
        placeItems: 'center',
        gap: 0,
        background: 'none',
        border: 0,
        cursor: 'pointer',
        margin: '0 -10px 0 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        position: 'relative',
        width: 22,
        height: 12
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'absolute',
        left: 0,
        width: 22,
        height: 1,
        background: 'var(--ink-900)',
        top: drawer ? 6 : i * 6,
        transform: drawer ? i === 0 ? 'rotate(45deg)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg)' : 'none',
        transition: 'top var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: drawer ? '80vh' : 0,
        borderTop: drawer ? '1px solid var(--border-hairline)' : 'none',
        transition: 'max-height var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-3) var(--gutter) var(--space-5)'
      }
    }, rows.map((it, i) => {
      const l = labelOf(it),
        on = isActive(it),
        kids = mode === 'flat' ? null : typeof it === 'string' ? null : it.items;
      const shown = fold === l;
      return /*#__PURE__*/React.createElement("div", {
        key: l + i,
        style: {
          borderBottom: '1px solid var(--border-hairline)'
        }
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => kids ? setFold(shown ? null : l) : go(l),
        "aria-expanded": kids ? shown : undefined,
        style: {
          ...rowLabel,
          color: on ? 'var(--text-accent)' : 'var(--ink-900)',
          width: '100%',
          minHeight: 'var(--touch-min)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)'
        }
      }, l, kids && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '5px solid currentColor',
          opacity: .6,
          transform: shown ? 'rotate(180deg)' : 'none',
          transition: 'transform var(--dur-fast) var(--ease-out)'
        }
      })), kids && /*#__PURE__*/React.createElement("div", {
        style: {
          overflow: 'hidden',
          maxHeight: shown ? kids.length * 46 + 12 : 0,
          transition: 'max-height var(--dur-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 'var(--space-3)'
        }
      }, kids.map(c => {
        const cl = labelOf(c);
        return /*#__PURE__*/React.createElement("a", {
          key: cl,
          href: "#",
          onClick: e => {
            e.preventDefault();
            go(cl);
          },
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-body-l)',
            fontWeight: 'var(--fw-body)',
            textDecoration: 'none',
            color: cl === active ? 'var(--text-accent)' : 'var(--ink-500)',
            minHeight: 'var(--touch-min)',
            display: 'flex',
            alignItems: 'center'
          }
        }, cl);
      }))));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      tone: "primary",
      size: "md",
      onClick: onCta,
      style: {
        width: '100%',
        minHeight: 'var(--touch-min)'
      }
    }, ctaLabel)))));
  }
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--white)',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '10px var(--space-6)',
      position: 'relative',
      zIndex: 30,
      ...bar,
      ...style
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, left.map(item)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(labelOf(left[0]) || 'home');
    },
    style: {
      lineHeight: 0
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Hoeve Rijlaarsdam",
    style: {
      height: 44
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      letterSpacing: 'var(--ls-label)',
      color: 'var(--ink-900)'
    }
  }, "HOEVE RIJLAARSDAM")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-5)'
    }
  }, right.map(item), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/photo-carousel/PhotoCarousel.jsx
try { (() => {
/* Centre-focused photo carousel: the middle frame is full size and full colour,
   the neighbours sit smaller and further back. Returns on every page, above the footer.
   Advances on its own, but only while it is on screen and nobody is touching it. */
function PhotoCarousel({
  items = [],
  height = 400,
  initial = 0,
  arrows = false,
  arrowTone = 'deep',
  interval = 5600,
  autoplay = true,
  drift = true,
  tilt = false,
  onSelect,
  narrow: narrowProp,
  style
}) {
  const [i, setI] = React.useState(initial);
  const [narrowAuto, setNarrowAuto] = React.useState(false);
  const [swiped, setSwiped] = React.useState(false); // de veeg-hint verdwijnt na de eerste veeg
  const [hover, setHover] = React.useState(false); // pointer or finger on the strip
  const [focusIn, setFocusIn] = React.useState(false); // keyboard focus somewhere inside
  const [seen, setSeen] = React.useState(false); // in the viewport
  const [tick, setTick] = React.useState(0); // restarts the progress line on every advance
  const root = React.useRef(null);
  const touch = React.useRef(null);
  React.useEffect(() => {
    const check = () => setNarrowAuto(window.innerWidth < 760);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een kaart
     de telefoonvorm naast de desktopvorm kan tonen. */
  const narrow = narrowProp === undefined ? narrowAuto : narrowProp;
  const reduced = React.useMemo(() => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  React.useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver !== 'function') return setSeen(true);
    const io = new IntersectionObserver(es => setSeen(es.some(e => e.isIntersecting)), {
      threshold: .35
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = items.length;
  const held = hover || focusIn;
  const running = autoplay && !reduced && seen && !held && n > 2;
  React.useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      setI(v => (v + 1) % n);
      setTick(v => v + 1);
    }, interval);
    return () => clearTimeout(t);
  }, [running, interval, n, i, tick]);
  if (!n) return null;
  const cardW = Math.round(height * 4 / 3);
  const go = d => {
    setI(v => (v + d + n) % n);
    setTick(v => v + 1);
  };
  const jump = k => {
    setI(k);
    setTick(v => v + 1);
  };
  // shortest signed distance from the active index, so the ring wraps without a jump
  const rel = k => {
    let d = k - i;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };
  const pose = d => {
    const a = Math.abs(d),
      sign = d > 0 ? 1 : -1;
    if (a > 2) return {
      opacity: 0,
      scale: .5,
      x: sign * 1.7,
      z: 0,
      blur: 6,
      dim: .5,
      rot: -sign * 46,
      hidden: true
    };
    if (a === 2) return {
      opacity: 1,
      scale: .62,
      x: sign * 1.06,
      z: 1,
      blur: 3,
      dim: .42,
      rot: -sign * 40
    };
    if (a === 1) return {
      opacity: 1,
      scale: .8,
      x: sign * .6,
      z: 2,
      blur: 1.5,
      dim: .26,
      rot: -sign * 26
    };
    return {
      opacity: 1,
      scale: 1,
      x: 0,
      z: 3,
      blur: 0,
      dim: 0,
      rot: 0
    };
  };
  const active = items[i] || {};
  const hold = v => () => setHover(v);
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    style: {
      position: 'relative',
      ...style
    },
    onMouseEnter: hold(true),
    onMouseLeave: hold(false),
    onFocus: () => setFocusIn(true),
    onBlur: e => {
      if (!e.currentTarget.contains(e.relatedTarget)) setFocusIn(false);
    },
    onTouchStart: e => {
      setHover(true);
      touch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },
    onTouchMove: e => {
      const t0 = touch.current;
      if (!t0) return;
      /* alleen een overwegend horizontale veeg pakken — verticaal scrollen door de pagina
         mag de carousel niet onderscheppen */
      const dx = e.touches[0].clientX - t0.x,
        dy = e.touches[0].clientY - t0.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10 && e.cancelable) e.preventDefault();
    },
    onTouchEnd: e => {
      const t0 = touch.current;
      setHover(false);
      touch.current = null;
      if (!t0) return;
      const dx = e.changedTouches[0].clientX - t0.x,
        dy = e.changedTouches[0].clientY - t0.y;
      /* 34px is genoeg voor een duim; verticaal overheersende bewegingen negeren */
      if (Math.abs(dx) > 34 && Math.abs(dx) > Math.abs(dy)) {
        go(dx < 0 ? 1 : -1);
        setSwiped(true);
      }
    },
    onKeyDown: e => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    },
    tabIndex: 0,
    role: "group",
    "aria-label": "Foto's",
    "aria-roledescription": "carrousel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      touchAction: narrow ? 'pan-y' : undefined,
      perspective: tilt ? Math.round(cardW * 1.9) : undefined,
      perspectiveOrigin: '50% 50%'
    }
  }, items.map((it, k) => {
    const d = rel(k),
      p = pose(d),
      src = typeof it === 'string' ? it : it.src,
      live = d === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: src + k,
      onClick: () => {
        live ? onSelect && onSelect(it, k) : jump(k);
      },
      style: {
        position: 'absolute',
        top: 0,
        left: '50%',
        width: narrow ? '86%' : cardW,
        height: '100%',
        marginLeft: narrow ? '-43%' : -cardW / 2,
        cursor: live && !onSelect ? 'default' : 'pointer',
        zIndex: p.z,
        opacity: p.opacity,
        pointerEvents: p.hidden ? 'none' : 'auto',
        transform: 'translateX(' + p.x * (narrow ? 86 : cardW) + (narrow ? '%' : 'px') + ') scale(' + p.scale + ')' + (tilt && !narrow ? ' rotateY(' + p.rot + 'deg)' : ''),
        transformStyle: tilt ? 'preserve-3d' : undefined,
        transition: 'transform var(--dur-slow) var(--ease-out),opacity var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: typeof it === 'object' && it.caption || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: p.blur ? 'blur(' + p.blur + 'px)' : 'none',
        transform: live && drift && !reduced ? 'scale(1.07)' : 'scale(1)',
        transition: 'transform ' + (live ? interval + 2600 : 900) + 'ms var(--ease-out),filter var(--dur-slow) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--ink-900)',
        opacity: p.dim,
        transition: 'opacity var(--dur-slow) var(--ease-out)'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, typeof active === 'object' && active.caption && /*#__PURE__*/React.createElement("span", {
    key: active.caption,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, active.caption), narrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      color: 'var(--ink-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, i + 1, " / ", n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 12,
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-xs)',
      letterSpacing: '.06em',
      color: 'var(--text-muted)',
      opacity: swiped ? 0 : 1,
      transition: 'opacity var(--dur-slow) var(--ease-out)'
    }
  }, "Veeg voor meer")) :
  /*#__PURE__*/
  /* De pijlen staan naast de streepjes, niet over de foto's: op een beeld hangt hun
     leesbaarheid af van wat er toevallig achter zit, en dan moet elke pagina een eigen
     kleur kiezen. Hier staan ze op de bandkleur en volstaat één toon. */
  React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, arrows && /*#__PURE__*/React.createElement(__ds_scope.CarouselNav, {
    direction: "prev",
    tone: arrowTone,
    size: 36,
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, items.map((it, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => jump(k),
    "aria-label": 'Foto ' + (k + 1),
    "aria-current": k === i || undefined,
    style: {
      width: k === i ? 34 : 18,
      height: 22,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      position: 'relative',
      display: 'grid',
      alignItems: 'center',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      height: 2,
      width: '100%',
      background: k === i ? 'rgba(176,131,68,.28)' : 'rgba(22,25,26,.16)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, k === i && /*#__PURE__*/React.createElement("span", {
    key: tick,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gold-500)',
      transformOrigin: 'left',
      transform: 'scaleX(1)',
      animation: running ? 'pc-fill ' + interval + 'ms linear forwards' : 'none'
    }
  }))))), arrows && /*#__PURE__*/React.createElement(__ds_scope.CarouselNav, {
    direction: "next",
    tone: arrowTone,
    size: 36,
    onClick: () => go(1)
  })), /*#__PURE__*/React.createElement("style", null, '@keyframes pc-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}')));
}
Object.assign(__ds_scope, { PhotoCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/photo-carousel/PhotoCarousel.jsx", error: String((e && e.message) || e) }); }

// components/page-outro/PageOutro.jsx
try { (() => {
/* Fixed page ending: offerte CTA with the photo carousel hanging into it.
   Always followed by <Footer/> in its own section. */
function PageOutro({
  items = [],
  height = 400,
  overlap = .28,
  tone = 'cream',
  arrowTone,
  kicker,
  title,
  body,
  ctaLabel,
  onCta,
  onSelect,
  style
}) {
  const lift = Math.round(height * overlap);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CtaBand, {
    tone: tone,
    bleed: lift,
    kicker: kicker,
    title: title,
    body: body,
    ctaLabel: ctaLabel,
    onCta: onCta
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -lift,
      paddingBottom: 'var(--section-y-tight)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoCarousel, {
    items: items,
    height: height,
    onSelect: onSelect,
    arrowTone: arrowTone || (tone === 'cream' ? 'deep' : 'white')
  })));
}
Object.assign(__ds_scope, { PageOutro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page-outro/PageOutro.jsx", error: String((e && e.message) || e) }); }

// components/price-list/PriceList.jsx
try { (() => {
/* Label, detail and amount on one rule — zaalhuur, extra's, arrangementen.
   `tone` says which field it stands on. On sage everything is white — the house choice — so
   the band only ever carries large type; small print belongs on the deep green instead. */
function PriceList({
  kicker,
  items = [],
  note,
  tone = 'light',
  style
}) {
  const onDeep = tone === 'onDeep',
    onSage = tone === 'onSage';
  const kickerColor = onDeep ? 'var(--sage-300)' : onSage ? 'var(--text-on-sage-body)' : 'var(--text-accent)';
  const labelColor = onDeep ? 'var(--text-on-dark)' : onSage ? 'var(--text-on-sage-body)' : 'var(--ink-900)';
  const detailColor = onDeep ? 'var(--sage-300)' : onSage ? 'var(--text-on-sage-body)' : 'var(--ink-500)';
  const amountColor = onDeep ? 'var(--text-on-dark)' : onSage ? 'var(--text-on-sage-body)' : 'var(--green-700)';
  const rule = onDeep ? '1px solid rgba(251,248,243,.18)' : onSage ? '1px solid var(--rule-on-sage)' : '1px solid rgba(22,25,26,.09)';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: kickerColor
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: kicker ? 'var(--space-4)' : 0,
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, items.map(({
    label,
    detail,
    amount
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-3)',
      borderBottom: rule
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: labelColor
    }
  }, label), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'var(--space-3)',
      fontSize: 'var(--fs-body-xs)',
      color: detailColor
    }
  }, detail)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: amountColor,
      whiteSpace: 'nowrap'
    }
  }, amount)))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-xs)',
      color: detailColor
    }
  }, note));
}
Object.assign(__ds_scope, { PriceList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/price-list/PriceList.jsx", error: String((e && e.message) || e) }); }

// components/pull-quote/PullQuote.jsx
try { (() => {
/* Someone speaking, in the display serif at reading size — never uppercase. A slogan on a
   full-width band is QuoteBar; this is a person.

   Two shapes, one component. The default is a full-width section (a chef with his portrait,
   a hostess on her work). `compact` is the same voice inside a card, for a review in a grid —
   it was a separate TestimonialCard set in spaced capitals, which nobody reads at review
   length. Sentence case for both: the quote marks already say it is a quote. */
function PullQuote({
  children,
  name,
  role,
  portrait,
  tone = 'cream',
  align = 'left',
  compact = false,
  style
}) {
  /* Sage carries display type only — white on sage measures 2.6:1. The full form is 23px and
     passes; a compact review is 16px running text with a 10.5px attribution, so sage there is
     simply unreadable. The compact path falls back to cream rather than offering the choice. */
  if (compact && tone === 'sage') tone = 'cream';
  const onDark = tone === 'deep';
  const bg = tone === 'deep' ? 'var(--surface-deep)' : tone === 'sage' ? 'var(--surface-sage)' : 'var(--surface-cream)';
  const quoteColor = onDark || tone === 'sage' ? 'var(--white)' : 'var(--ink-900)';
  const metaColor = onDark || tone === 'sage' ? 'var(--cream-100)' : 'var(--ink-500)';
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: compact ? 'var(--fs-body-l)' : 'var(--fs-quote)',
      lineHeight: compact ? 1.6 : 1.45,
      color: quoteColor,
      textWrap: 'pretty'
    }
  }, "\u201C", children, "\u201D"), (name || role) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: compact ? 'var(--space-4) 0 0' : 'var(--space-5) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: metaColor
    }
  }, name, name && role ? ' \u00b7 ' : '', role));
  if (compact) return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: bg,
      padding: 'var(--space-6) var(--space-7)',
      textAlign: align,
      ...style
    }
  }, body);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--section-y-tight) var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: portrait ? 'var(--container)' : 920,
      margin: '0 auto',
      display: portrait ? 'grid' : 'block',
      gridTemplateColumns: portrait ? '260px 1fr' : undefined,
      gap: 'var(--space-8)',
      alignItems: 'center',
      textAlign: portrait ? 'left' : align
    }
  }, portrait && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: portrait,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, body)));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pull-quote/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/quote-bar/QuoteBar.jsx
try { (() => {
/* Full-bleed deep-green band with one centred line, directly under the hero on every page.
   Display serif, in the case it is written in — NOT capitals. Op verzoek van de ontwerper:
   "kapitalen is voor mij schreeuwen". Alleen de naam RIJLAARSDAM in het logo staat in caps. */
function QuoteBar({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-deep)',
      padding: '14px var(--space-5)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-body-l)',
      letterSpacing: '.03em',
      color: 'var(--text-on-dark)',
      lineHeight: 1.55
    }
  }, children));
}
Object.assign(__ds_scope, { QuoteBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quote-bar/QuoteBar.jsx", error: String((e && e.message) || e) }); }

// components/seasonal/WinterLockup.jsx
try { (() => {
/* Winter Rijlaarsdam. De echte tekening komt uit de huisstijl van de ontwerper
   (uploads/Logo RIJLAARSDAM huisstijl.pdf, blad 2) en staat als vector in assets/:
   sneeuwvlok-lockup op flessengroen, dezelfde omgekeerd op transparant, en het
   losse script-woordmerk "Winters RIJLAARSDAM" in zwart, wit en goud.

   Alleen wanneer een ander seizoenswoord nodig is (Kerst, Oud & Nieuw) valt het
   component terug op de typografische constructie — dan is het merk nagebouwd,
   niet aangeleverd, dus gebruik dat spaarzaam en nooit voor drukwerk. */
const ART = {
  panel: 'logo-winter-groen.svg',
  reversed: 'logo-winter-wit.svg',
  wordmarkLight: 'logo-winter-zwart.svg',
  wordmarkOnDeep: 'logo-winter-wordmark-wit.svg',
  wordmarkGold: 'logo-winter-wordmark-goud.svg',
  wordmarkMono: 'logo-winter-mono.svg'
};
const MIN = {
  panel: 96,
  reversed: 96,
  wordmark: 34
};
let warned = false;
function WinterLockup({
  variant = 'wordmark',
  tone = 'light',
  size,
  script,
  word = 'RIJLAARSDAM',
  tagline = 'ART & EVENTS',
  showMark = true,
  assetBase = '/assets/',
  style
}) {
  const h = size ?? (variant === 'wordmark' ? 52 : 180);
  if (h < MIN[variant] && !warned) {
    warned = true;
    console.warn('[WinterLockup] ' + variant + ' op ' + h + 'px — onder de ' + MIN[variant] + 'px lopen de haarlijnen en de sneeuwvlok dicht.');
  }
  if (script) {
    /* Nagebouwd seizoenswoord: schuurmerk + script + caps + regel, zelfde constructie als het logo. */
    const em = Math.max(22, Math.round(h * .62));
    const onDark = tone === 'onDeep';
    const ink = onDark ? 'var(--winter-snow-100)' : tone === 'gold' ? 'var(--gold-600)' : 'var(--ink-900)';
    const scriptColor = onDark ? 'var(--winter-candle-400)' : tone === 'mono' ? ink : 'var(--gold-500)';
    const rule = onDark ? 'var(--border-on-dark)' : tone === 'gold' ? 'var(--gold-500)' : 'var(--ink-900)';
    const markStyle = onDark ? {
      filter: 'brightness(0) invert(1)'
    } : tone === 'mono' ? {
      filter: 'brightness(0)'
    } : undefined;
    /* De ampersand in de tagline is de swirl uit de huisstijl, niet de & van Playfair.
       Tussen kapitalen is dat de vaste regel — zie guidelines/brand-ornament.html. */
    const swirl = assetBase + (onDark ? 'ornament-swirl-wit.svg' : tone === 'gold' ? 'ornament-swirl-goud.svg' : 'ornament-swirl-ink.svg');
    const parts = String(tagline || '').split('&');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '.34em',
        fontSize: em + 'px',
        lineHeight: 1,
        ...style
      }
    }, showMark && /*#__PURE__*/React.createElement("img", {
      src: assetBase + (tone === 'light' ? 'logo-mark.svg' : 'logo-mark-mono.svg'),
      alt: "",
      "aria-hidden": "true",
      style: {
        height: '2.1em',
        width: 'auto',
        flex: 'none',
        ...markStyle
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '.16em'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingTop: '.92em'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '.34em',
        top: 0,
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-script)',
        fontVariantLigatures: 'none',
        fontSize: '1.55em',
        lineHeight: 'var(--lh-script)',
        color: scriptColor
      }
    }, script), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: '1em',
        letterSpacing: '.03em',
        color: ink,
        whiteSpace: 'nowrap'
      }
    }, word)), tagline && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5em'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '.09em',
        background: rule,
        minWidth: '1.2em'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'max(.34em, var(--fs-label-s))',
        letterSpacing: 'var(--ls-label-wide)',
        color: ink,
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, parts.length > 1 ? parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("img", {
      src: swirl,
      alt: "en",
      style: {
        width: '1.5em',
        height: 'auto',
        margin: '0 .2em',
        verticalAlign: '-.04em'
      }
    }), p.trim())) : tagline))));
  }
  const file = variant === 'panel' ? ART.panel : variant === 'reversed' ? ART.reversed : tone === 'onDeep' ? ART.wordmarkOnDeep : tone === 'gold' ? ART.wordmarkGold : tone === 'mono' ? ART.wordmarkMono : ART.wordmarkLight;
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + file,
    alt: "Winters Rijlaarsdam \u2014 Art & Events",
    style: {
      height: h + 'px',
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { WinterLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/seasonal/WinterLockup.jsx", error: String((e && e.message) || e) }); }

// components/site-map/SiteMap.jsx
try { (() => {
/* Interactive site plan. Hotspots are declared in percentages of the map image so the
   whole thing stays responsive and a corrected plan only needs new coordinates. */
function SiteMap({
  image,
  spots = [],
  alt = 'Plattegrond van de hoeve',
  onSelect,
  style
}) {
  const [active, setActive] = React.useState(-1);
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const spot = spots[active];
  const open = i => setActive(a => a === i ? -1 : i);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    },
    onMouseLeave: () => !narrow && setActive(-1)
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), spots.map((s, i) => {
    const on = active === i;
    return /*#__PURE__*/React.createElement("button", {
      key: s.name,
      type: "button",
      onMouseEnter: () => !narrow && setActive(i),
      onFocus: () => setActive(i),
      onClick: () => {
        narrow ? open(i) : s.href && onSelect && onSelect(s);
      },
      "aria-label": s.name,
      style: {
        position: 'absolute',
        left: s.x + '%',
        top: s.y + '%',
        width: s.w + '%',
        height: s.h + '%',
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        background: on ? 'rgba(176,131,68,.34)' : 'rgba(176,131,68,0)',
        outline: on ? '1px solid var(--gold-500)' : 'none',
        outlineOffset: -1,
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'block',
        width: on ? 14 : 10,
        height: on ? 14 : 10,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--gold-500)',
        boxShadow: '0 0 0 3px rgba(251,248,243,.9)',
        transition: 'width var(--dur-base) var(--ease-out),height var(--dur-base) var(--ease-out)'
      }
    }));
  }), !narrow && spot && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 260,
      zIndex: 2,
      pointerEvents: 'none',
      left: spot.side === 'left' ? undefined : 'calc(' + (spot.x + spot.w) + '% + 14px)',
      right: spot.side === 'left' ? 'calc(' + (100 - spot.x) + '% + 14px)' : undefined,
      top: 'min(' + spot.y + '%, calc(100% - 300px))',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)'
    }
  }, spot.image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: spot.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, spot.name), spot.body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-500)'
    }
  }, spot.body), spot.href && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, spot.linkLabel || 'Lees meer', " \u2192")))), narrow && spot && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, spot.image && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 96px',
      height: 96,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: spot.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-4) var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, spot.name), spot.body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-500)'
    }
  }, spot.body), spot.href && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(spot),
    style: {
      marginTop: 'var(--space-3)',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, spot.linkLabel || 'Lees meer', " \u2192"))), !narrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-400)',
      textAlign: 'center'
    }
  }, "Beweeg over de gouden punten voor meer informatie"));
}
Object.assign(__ds_scope, { SiteMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site-map/SiteMap.jsx", error: String((e && e.message) || e) }); }

// components/site-map/SitePlan.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The chic variant of SiteMap: the plan reads as an engraved estate map on cream paper,
   with a numbered legend beside it. Map and legend highlight each other, and the open row
   carries the photo — so nothing floats over the plan and nothing jumps.
   Hotspots stay percentages of the image, exactly as in SiteMap. */
function SitePlan({
  image,
  spots = [],
  alt = 'Plattegrond van de hoeve',
  title,
  onSelect,
  openOnHover = true,
  hint = 'Beweeg over de kaart of kies een plek in de lijst',
  narrow: narrowProp,
  style
}) {
  const [hot, setHot] = React.useState(-1); // hover of focus — verandert alleen kleur
  const [open, setOpen] = React.useState(-1); // klik — klapt de regel uit
  const [narrowAuto, setNarrowAuto] = React.useState(false);
  const [pin, setPin] = React.useState(30);
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    const check = () => {
      setNarrowAuto(window.innerWidth < 900);
      /* De hotspots zijn percentages, dus hun onderlinge afstand krimpt met de kaart terwijl een
         vaste punt dat niet doet. Schaal de punt mee: 30px bij een kaart van 620px, min 20px. */
      const w = imgRef.current && imgRef.current.getBoundingClientRect().width;
      if (w) setPin(Math.max(20, Math.min(30, Math.round(w / 620 * 30))));
    };
    check();
    window.addEventListener('resize', check);
    const t = setTimeout(check, 120);
    return () => {
      window.removeEventListener('resize', check);
      clearTimeout(t);
    };
  }, []);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een kaart de
     telefoonvorm naast de desktopvorm kan tonen. */
  const narrow = narrowProp === undefined ? narrowAuto : narrowProp;
  /* Onder 600px zijn de punten kleiner dan een duim (de hotspots zijn percentages, dus ze krimpen
     mee met de kaart). Daar draait de rolverdeling om: de kaart wordt een prent om naar te kijken,
     met de nummers er alleen als verwijzing op, en de lijst eronder is het bedieningsvlak. Een tik
     op een regel licht het bijbehorende nummer op de kaart op. */
  const listOnly = narrow && pin < 28;
  const num = i => String(i + 1).padStart(2, '0');
  const toggle = i => setOpen(v => v === i ? -1 : i);
  const lit = i => hot === i || open === i;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1.75fr 1fr',
      gap: narrow ? 'var(--space-6)' : 'var(--space-7)',
      alignItems: 'start',
      ...style
    },
    onMouseLeave: () => setHot(-1)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--cream-100)',
      padding: narrow ? 'var(--space-4)' : 'var(--space-5)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    src: image,
    alt: alt,
    onLoad: () => {
      const w = imgRef.current && imgRef.current.getBoundingClientRect().width;
      if (w) setPin(Math.max(20, Math.min(30, Math.round(w / 620 * 30))));
    },
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), spots.map((s, i) => {
    const on = lit(i);
    /* op telefoon is de punt een merkteken, geen knop — de lijst bedient */
    const Tag = listOnly ? 'span' : 'button';
    const tap = listOnly ? {
      'aria-hidden': 'true'
    } : {
      type: 'button',
      'aria-label': s.name,
      'aria-pressed': open === i,
      onMouseEnter: () => {
        if (narrow) return;
        setHot(i);
        if (openOnHover) setOpen(i);
      },
      onMouseLeave: () => !narrow && setHot(-1),
      onFocus: () => {
        setHot(i);
        if (openOnHover) setOpen(i);
      },
      onBlur: () => setHot(-1),
      onClick: () => toggle(i)
    };
    return /*#__PURE__*/React.createElement(Tag, _extends({
      key: s.name
    }, tap, {
      style: {
        position: 'absolute',
        left: 'calc(' + (s.x + s.w / 2) + '% - ' + pin / 2 + 'px)',
        top: 'calc(' + (s.y + s.h / 2) + '% - ' + pin / 2 + 'px)',
        width: pin,
        height: pin,
        padding: 0,
        cursor: listOnly ? 'default' : 'pointer',
        pointerEvents: listOnly ? 'none' : 'auto',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (on ? 'var(--gold-500)' : 'rgba(40,94,77,.5)'),
        background: on ? 'var(--gold-500)' : 'rgba(251,248,243,.96)',
        color: on ? 'var(--white)' : 'var(--green-900)',
        fontFamily: 'var(--font-display)',
        fontSize: Math.round(pin * .47),
        letterSpacing: '.02em',
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: on ? '0 0 0 ' + Math.round(pin / 5) + 'px rgba(176,131,68,.16)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)'
      }
    }), num(i));
  })), title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--green-900)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(22,25,26,.14)'
    }
  }, spots.map((s, i) => {
    const on = lit(i),
      up = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: s.name,
      style: {
        borderBottom: '1px solid rgba(22,25,26,.14)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      onMouseEnter: () => !narrow && setHot(i),
      onFocus: () => setHot(i),
      onBlur: () => setHot(-1),
      "aria-expanded": up,
      style: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '32px 1fr auto',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: '15px 0',
        minHeight: narrow ? 'var(--touch-min)' : undefined,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-m)',
        letterSpacing: '.04em',
        color: on ? 'var(--gold-500)' : 'var(--green-900)',
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, num(i)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-m)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--gold-500)' : 'var(--ink-900)',
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      style: {
        width: on ? 26 : 12,
        height: 1,
        background: on ? 'var(--gold-500)' : 'rgba(22,25,26,.22)',
        transition: 'width var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: up ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-inout)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 'var(--space-5)',
        opacity: up ? 1 : 0,
        transition: 'opacity var(--dur-base) var(--ease-out)'
      }
    }, s.image && /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        marginBottom: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: s.image,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), s.body && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body-s)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-body)'
      }
    }, s.body), s.href && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onSelect && onSelect(s),
      style: {
        marginTop: 'var(--space-4)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-s)',
        letterSpacing: 'var(--ls-label-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-accent)'
      }
    }, s.linkLabel || 'Lees meer', " \u2192")))));
  })), hint && open < 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, listOnly ? 'Kies een plek in de lijst; het nummer licht op de kaart op.' : hint)));
}
Object.assign(__ds_scope, { SitePlan });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site-map/SitePlan.jsx", error: String((e && e.message) || e) }); }

// components/split-hero/SplitHero.jsx
try { (() => {
/* Full-viewport doorway hero: two equal choices, calm motion on hover, one scroll hint.
   Only ever used on the homepage — every other page uses <HeroVideo>. */
function SplitHero({
  items = [],
  caption,
  intro = true,
  ampersand = true,
  ampersandSrc = '/assets/ornament-swirl-wit.svg',
  offset = 64,
  fullHeight = true,
  scrollHint = 'Scroll',
  onScrollHint,
  narrow: narrowProp,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const [narrowAuto, setNarrowAuto] = React.useState(false);
  const [top, setTop] = React.useState(offset);
  const root = React.useRef(null);
  React.useEffect(() => {
    const check = () => {
      setNarrowAuto(window.innerWidth < 760);
      // measure what actually sits above this hero (navbar height) instead of trusting `offset`
      const el = root.current;
      if (el) setTop(Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY)));
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [offset]);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een kaart
     de telefoonvorm naast de desktopvorm kan tonen. */
  const narrow = narrowProp === undefined ? narrowAuto : narrowProp;
  /* Intro-motion. Alles wat beweegt zit in de lagen bóven het beeld: de overlay trekt open,
     tekst zet zich 10px omhoog, de naad groeit uit het midden en de swirl komt als laatste op.
     Het beeld zelf blijft stil, zodat een video erachter niet meevecht. Eén keer per sessie. */
  const [played, setPlayed] = React.useState(() => {
    if (!intro) return true;
    try {
      return sessionStorage.getItem('hr-hero-intro') === '1';
    } catch (e) {
      return false;
    }
  });
  const [lit, setLit] = React.useState(played);
  React.useEffect(() => {
    if (played) return;
    const t = requestAnimationFrame(() => setLit(true));
    try {
      sessionStorage.setItem('hr-hero-intro', '1');
    } catch (e) {}
    const done = setTimeout(() => setPlayed(true), 1800);
    return () => {
      cancelAnimationFrame(t);
      clearTimeout(done);
    };
  }, [played]);
  const rise = delay => ({
    opacity: lit ? 1 : 0,
    transform: lit ? 'none' : 'translateY(10px)',
    transition: 'opacity .55s var(--ease-out) ' + delay + 'ms,transform .55s var(--ease-out) ' + delay + 'ms'
  });
  const kf = 'sh-' + React.useMemo(() => Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("section", {
    ref: root,
    id: kf,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: fullHeight ? 'calc(100dvh - ' + top + 'px)' : undefined,
      minHeight: fullHeight ? 480 : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ' + kf + '-bob{0%,100%{transform:translateY(0);opacity:.85}50%{transform:translateY(6px);opacity:1}}' + '@media(prefers-reduced-motion:reduce){#' + kf + ' *{transition-duration:.01ms!important;animation:none!important}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      overflow: 'hidden'
    }
  }, items.map((it, i) => {
    const on = hover === i,
      dimmed = hover > -1 && !on;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onMouseEnter: () => !narrow && setHover(i),
      onMouseLeave: () => !narrow && setHover(-1),
      onClick: it.onSelect,
      role: "link",
      tabIndex: 0,
      style: {
        position: 'relative',
        flex: on ? 1.14 : dimmed ? .9 : 1,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'flex var(--dur-slow) var(--ease-out)'
      }
    }, it.video ? /*#__PURE__*/React.createElement("video", {
      src: it.video,
      poster: it.image,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: on ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 3s var(--ease-out)'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: it.image,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: on ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 3s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: !lit ? 'rgba(22,25,26,.62)' : dimmed ? 'rgba(22,25,26,.5)' : 'rgba(22,25,26,.22)',
        transition: 'background ' + (lit ? 'var(--dur-slow)' : '.7s') + ' var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-5)',
        /* gestapeld staat de scroll-hint onder de laatste helft; die helft krijgt daar
           ruimte voor, anders komt de knop eronder te liggen */
        paddingBottom: narrow && i === items.length - 1 && scrollHint ? 68 : 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'clamp(34px,4.6vw,var(--fs-display-xl))',
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: 'var(--white)',
        ...rise(250)
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-m)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: '10px 26px',
        minHeight: narrow ? 'var(--touch-min)' : undefined,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--white)' : 'var(--accent)',
        color: on ? 'var(--accent)' : 'var(--text-on-dark)',
        ...rise(330),
        transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),opacity .55s var(--ease-out) 330ms,transform .55s var(--ease-out) 330ms'
      }
    }, it.ctaLabel)));
  }), !narrow ?
  /*#__PURE__*/
  /* de naad groeit uit het midden open — het enige wat de twee helften scheidt.
     Op hover verschuift de deling, dus dan verdwijnt de naad met de swirl mee:
     een vaste lijn op 50% zou naast de echte grens komen te staan. */
  React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 1,
      background: 'rgba(255,255,255,.5)',
      transformOrigin: '50% 50%',
      transform: 'translateX(-.5px) scaleY(' + (lit ? 1 : 0) + ')',
      opacity: hover > -1 ? 0 : 1,
      transition: 'transform .5s var(--ease-out) 620ms,opacity ' + (hover > -1 ? 'var(--dur-base)' : '.55s') + ' var(--ease-out) ' + (hover > -1 ? '0ms' : '180ms')
    }
  }) :
  /*#__PURE__*/
  /* gestapeld ligt de naad horizontaal, en groeit uit het midden naar de zijkanten */
  React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 1,
      background: 'rgba(255,255,255,.5)',
      transformOrigin: '50% 50%',
      transform: 'translateY(-.5px) scaleX(' + (lit ? 1 : 0) + ')',
      transition: 'transform .5s var(--ease-out) 620ms'
    }
  }), ampersand &&
  /*#__PURE__*/
  /* de swirl-ampersand uit de huisstijl (assets/ornament-swirl.svg), wit op de naad.
     Gestapeld staat hij op de horizontale naad tussen de twee helften — anders zou het
     merkteken op telefoon helemaal verdwijnen, en juist daar is het de enige plek waar
     de twee kanten van de hoeve elkaar raken. */
  React.createElement("img", {
    src: ampersandSrc,
    alt: "en",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: (narrow ? 'translate(-50%,-50%)' : 'translate(-36%,-50%)') + ' scale(' + (lit ? 1 : .94) + ')',
      pointerEvents: 'none',
      width: narrow ? 'clamp(58px,17vw,88px)' : 'clamp(76px,8vw,140px)',
      height: 'auto',
      filter: 'drop-shadow(0 1px 6px rgba(22,25,26,.45))',
      opacity: hover > -1 ? 0 : lit ? 1 : 0,
      transition: lit ? 'opacity var(--dur-base) var(--ease-out),transform .6s var(--ease-out)' : 'opacity .6s var(--ease-out) 900ms,transform .6s var(--ease-out) 900ms'
    }
  }), scrollHint && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 'var(--space-5)',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onScrollHint,
    "aria-label": scrollHint,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 'var(--space-2)',
      pointerEvents: 'auto',
      opacity: lit ? 1 : 0,
      transition: 'opacity .5s var(--ease-out) 1450ms',
      animation: lit ? kf + '-bob 2.6s var(--ease-inout) infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, scrollHint), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: 'var(--white)',
      opacity: .8
    }
  })))), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-deep)',
      padding: '14px var(--space-5)',
      textAlign: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-body-l)',
      letterSpacing: '.03em',
      color: 'var(--text-on-dark)',
      lineHeight: 1.55
    }
  }, caption)));
}
Object.assign(__ds_scope, { SplitHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/split-hero/SplitHero.jsx", error: String((e && e.message) || e) }); }

// components/states/EmptyState.jsx
try { (() => {
/* Wat er staat als er niets staat: geen zoekresultaten, een lege agenda, een filter dat
   niets oplevert. Geen illustratie en geen uitroepteken — een lege staat is geen fout, en
   dit merk heeft geen mascotte. Een gouden haarlijn, één zin, hooguit één uitweg. */
function EmptyState({
  title,
  children,
  action,
  tone = 'light',
  style
}) {
  const onDeep = tone === 'deep',
    onSage = tone === 'sage';
  const titleColor = onDeep || onSage ? 'var(--white)' : 'var(--text-heading)';
  const bodyColor = onDeep ? 'var(--text-on-dark)' : onSage ? 'var(--white)' : 'var(--text-muted)';
  const rule = onDeep ? 'var(--gold-300)' : onSage ? 'var(--white)' : 'var(--gold-500)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      textAlign: 'center',
      padding: 'var(--space-8) var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: 34,
      height: 1,
      background: rule,
      margin: '0 auto var(--space-5)'
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: titleColor
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) auto 0',
      maxWidth: '46ch',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: bodyColor,
      textWrap: 'pretty'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/states/Skeleton.jsx
try { (() => {
/* De vorm van wat er komt, terwijl het laadt. Geen spinner: die zegt alleen "wacht", terwijl
   een skelet al vertelt hoeveel er komt en waar het staat — en het scherm springt niet op als
   de inhoud landt.

   De beweging is niet de gebruikelijke grijze glans maar de haarlijn van dit merk: een gouden
   streep die van links inschrijft, even blijft staan en naar rechts weer wegtrekt — dezelfde
   getrokken lijn als onder de zaalonderschriften en in de pen van het seizoenslogo. Hij loopt
   op transform, dus op de compositielaag: merkbaar vloeiender dan een schuivende achtergrond.
   Staat stil onder prefers-reduced-motion. */
function Skeleton({
  variant = 'text',
  lines = 3,
  ratio = '4 / 3',
  width,
  height,
  tone = 'light',
  delay = 0,
  style
}) {
  const onDark = tone === 'dark';
  const base = onDark ? 'rgba(251,248,243,.08)' : 'rgba(22,25,26,.05)';
  const ink = onDark ? 'var(--gold-300)' : 'var(--gold-500)';
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = /*#__PURE__*/React.createElement("style", null, '@keyframes sk-draw{0%{transform:scaleX(0);transform-origin:left}' + '46%{transform:scaleX(1);transform-origin:left}' + '54%{transform:scaleX(1);transform-origin:right}' + '100%{transform:scaleX(0);transform-origin:right}}' + '@keyframes sk-breathe{0%,100%{opacity:0}50%{opacity:1}}');
  /* De lijn ligt onderin het vlak; bij een tekstregel is het vlak zo dun dat de lijn hem vult. */
  const draw = (i = 0) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: ink,
      opacity: onDark ? .9 : .7,
      transformOrigin: 'left',
      willChange: 'transform',
      animation: reduced ? 'none' : 'sk-draw 2.1s cubic-bezier(.4,0,.2,1) infinite',
      animationDelay: delay + i * .14 + 's'
    }
  });
  /* Op een groot vlak is een lijn van 1px te weinig om te zien dat er iets gebeurt: daar ademt
     het vlak zelf mee, in hetzelfde tempo als de lijn. Op tekstregels niet — die zijn zo dun
     dat de lijn ze al vult. */
  const breathe = (i = 0) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: onDark ? 'rgba(251,248,243,.05)' : 'rgba(22,25,26,.035)',
      opacity: 0,
      willChange: 'opacity',
      animation: reduced ? 'none' : 'sk-breathe 2.1s cubic-bezier(.4,0,.2,1) infinite',
      animationDelay: delay + i * .14 + 's'
    }
  });
  const block = extra => ({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: base,
    ...extra
  });
  if (variant === 'image') return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...block({
        aspectRatio: height ? undefined : ratio,
        width,
        height
      }),
      ...style
    }
  }, css, breathe(), draw());
  if (variant === 'card') return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      ...style
    }
  }, css, /*#__PURE__*/React.createElement("div", {
    style: block({
      aspectRatio: ratio
    })
  }, breathe(0), draw(0)), /*#__PURE__*/React.createElement("div", {
    style: block({
      height: 12,
      width: '52%'
    })
  }, draw(1)), /*#__PURE__*/React.createElement("div", {
    style: block({
      height: 10,
      width: '82%'
    })
  }, draw(2)));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, css, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: block({
      height: 10,
      width: i === lines - 1 ? '62%' : '100%'
    })
  }, draw(i))));
}

/* Eén regel om een laadgebied aan te kondigen voor wie het skelet niet ziet. */
function LoadingRegion({
  label = 'Bezig met laden',
  busy = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-busy": busy || undefined,
    "aria-live": "polite",
    style: style
  }, busy && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap'
    }
  }, label), children);
}
Object.assign(__ds_scope, { Skeleton, LoadingRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/tabbed-detail/TabbedDetail.jsx
try { (() => {
/* Pills that switch one photo-and-text panel. The most repeated section on the site:
   pick a room, a moment of the day, an occasion. Pills never stand alone — every pill
   owns a panel, otherwise the reader taps and nothing happens. */
function TabbedDetail({
  items = [],
  value,
  onChange,
  defaultValue,
  kicker,
  title,
  lead,
  tone = 'light',
  imageSide = 'left',
  ratio = '4 / 3',
  style
}) {
  const names = items.map(it => it.label);
  const [own, setOwn] = React.useState(defaultValue || names[0]);
  const active = value !== undefined ? value : own;
  const pick = next => {
    if (value === undefined) setOwn(next);
    if (onChange) onChange(next);
  };
  const item = items.find(it => it.label === active) || items[0];
  if (!item) return null;
  const onSage = tone === 'sage';
  const bg = onSage ? 'var(--surface-sage)' : tone === 'cream' ? 'var(--surface-cream)' : 'var(--surface-page)';
  /* Sage is a midtone: nothing under 16px may sit on it in cream, so body text goes to ink. */
  const headColor = onSage ? 'var(--text-on-sage-body)' : 'var(--ink-900)';
  const bodyColor = onSage ? 'var(--text-on-sage-body)' : 'var(--text-body)';
  const photo = /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
  const text = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: headColor
    }
  }, item.title || item.label), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '46ch',
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: bodyColor,
      textWrap: 'pretty'
    }
  }, item.body), item.ctaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: onSage ? 'white' : 'outlineDark',
    onClick: item.onCta
  }, item.ctaLabel)));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--section-y-tight) var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, (kicker || title || lead) && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    kicker: kicker,
    title: title,
    align: "center",
    size: "l",
    tone: onSage ? 'onSage' : undefined
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '72ch',
      margin: 'var(--space-5) auto 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: bodyColor,
      textWrap: 'pretty'
    }
  }, lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TabPills, {
    items: names,
    value: active,
    onChange: pick,
    tone: onSage ? 'onSage' : 'onLight'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, imageSide === 'right' ? /*#__PURE__*/React.createElement(React.Fragment, null, text, photo) : /*#__PURE__*/React.createElement(React.Fragment, null, photo, text))));
}
Object.assign(__ds_scope, { TabbedDetail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tabbed-detail/TabbedDetail.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// guidelines/seasonal/seizoenslogo.js
try { (() => {
/* Seizoenslogo — bediening voor alle vier de kaarten.
   Een kaart zet één element neer:
     <div class="slogo" data-field="panel|screen" data-theme="winter|kerst" data-looks="…"></div>
   en dit bestand vult de tekening, bouwt de knoppen en (op scherm) de sneeuwlaag.
   Vier opbouwen: vA vlotte hand, vC sneeuw eerst, vD vlok als slot, vB alleen dwarrelen.

   De tekening staat als seizoenslogo.svg ernaast en wordt hier opgehaald. Als JS-bestand
   met de opmaak in een string kwam die 113 KB in de bundel van elke afnemer terecht, ook
   op pagina's zonder seizoenslogo; als los bestand laadt hij alleen waar hij nodig is. */
const SVG_URL = new URL('seizoenslogo.svg', document.currentScript && document.currentScript.src || location.href);
(async () => {
  const VARIANTS = [['vA', 'Vlotte hand'], ['vE', 'Letterpers'], ['vC', 'Sneeuw eerst'], ['vD', 'Vlok als slot'], ['vB', 'Alleen dwarrelen']];
  const NOTE = {
    vA: '<b>Vlotte hand</b> · 3,3s · de W, dan i en n, dan de t van bovenaf naar beneden met de lus eronder, dan de e, r en s met de uithaal, en als laatste de streep door de t en de punt op de i — daarna komt de vlok op en landen caps en schuurmerk samen',
    vE: '<b>Letterpers</b> · 3,7s · zelfde hand, maar RIJLAARSDAM wordt niet weggeveegd: de negen letterblokken drukken zich één voor één aan, van onderaf — daarna komen de lijnen en het schuurmerk',
    vC: '<b>Sneeuw eerst</b> · 3,0s · het beeld begint met dwarrelende sneeuw; daaruit zet de grote vlok zich vast, en pas als die staat wordt de naam eronder geschreven — de sneeuw maakt het logo',
    vD: '<b>Vlok als slot</b> · 4,1s · het schrift komt eerst; terwijl RIJLAARSDAM zich zet dwarrelt de grote vlok al van linksboven naar beneden, en hij legt zich als laatste stil op zijn plek — de stipjes in het logo volgen als hij geland is',
    vB: '<b>Alleen dwarrelen</b> · eindeloos · het logo staat er al; de sneeuw is overwegend stipjes met hier en daar een vlokje, in tempo\'s van 11 tot 23 seconden, elk met eigen drift, zwaai en draai — en de stipjes in het logo lichten af en toe even op'
  };
  const LOOKLABEL = {
    zilver: 'Zilver',
    kaarslicht: 'Kaarslicht',
    berry: 'Berry-zegel'
  };
  const LOOK = {
    zilver: 'Zilver · de naam in koud zilver, lijnen en schuurmerk mee — de koelste uitvoering, voor sneeuw- en vorstbeelden',
    kaarslicht: 'Kaarslicht · de naam in warm goud tegen het diepe pine, met berry op de bovenste lijn als het enige rode detail',
    berry: 'Berry-zegel · alles in zilver en het schuurmerk als enige berry-element — de naam blijft zilver, zoals de kerstregel voorschrijft'
  };
  const root = document.querySelector('.slogo');
  if (!root) return;
  const field = root.dataset.field || 'panel',
    theme = root.dataset.theme || 'winter';
  const looksList = (root.dataset.looks || '').split(' ').filter(Boolean);
  let look = looksList[0] || '',
    variant = 'vA';
  let svgHTML;
  try {
    const res = await fetch(SVG_URL);
    svgHTML = await res.text();
  } catch (e) {
    console.error('seizoenslogo: kon seizoenslogo.svg niet laden', e);
    return;
  }

  /* knoppen en toelichting: op paneel onder het logo, op scherm erover */
  const host = root.parentNode; // buiten het logo, anders wist opnieuw schrijven de knoppen
  if (field === 'screen') document.body.classList.add('overscreen');
  function row(cls) {
    const d = document.createElement('div');
    d.className = 'tabs' + (cls ? ' ' + cls : '');
    host.appendChild(d);
    return d;
  }
  const lookRow = looksList.length ? row('looks') : null;
  const varRow = row();
  const hint = field === 'screen' ? null : Object.assign(document.createElement('div'), {
    className: 'hint'
  });
  if (hint) host.appendChild(hint);
  function button(parent, key, label, attr) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.textContent = label;
    b.dataset[attr] = key;
    parent.appendChild(b);
    return b;
  }
  looksList.forEach(l => button(lookRow, l, LOOKLABEL[l] || l, 'l'));
  VARIANTS.forEach(([k, l]) => button(varRow, k, l, 'v'));
  function paint() {
    root.className = 'slogo ' + variant + (look ? ' ' + look : '');
    if (lookRow) [...lookRow.children].forEach(b => b.setAttribute('aria-pressed', b.dataset.l === look));
    [...varRow.children].forEach(b => b.setAttribute('aria-pressed', b.dataset.v === variant));
    if (hint) hint.innerHTML = NOTE[variant] + (look ? ' — ' + LOOK[look] : '') + (variant === 'vA' ? '. Klik op het logo om opnieuw te schrijven' : '');
  }
  function play() {
    paint();
    const snow = root.querySelector('.snowlayer');
    root.innerHTML = '';
    void root.offsetWidth;
    root.innerHTML = svgHTML;
    if (snow) root.appendChild(snow); // de sneeuw loopt door bij opnieuw schrijven
  }
  lookRow && lookRow.addEventListener('click', e => {
    const b = e.target.closest('.tab');
    if (!b) return;
    look = b.dataset.l;
    play();
  });
  varRow.addEventListener('click', e => {
    const b = e.target.closest('.tab');
    if (!b) return;
    variant = b.dataset.v;
    play();
  });
  root.addEventListener('click', () => play());
  root.title = 'Klik om opnieuw te schrijven';
  root.innerHTML = svgHTML;
  paint();

  /* --- schermvullende sneeuw ------------------------------------------------
     Dezelfde vlokjes en dezelfde baan als in het vlak, maar in beeldpunten: elk vlokje begint
     net boven het beeld en valt precies één beeldhoogte, en het aantal komt uit het oppervlak
     (ongeveer één per 6.000 beeldpunten), zodat de dichtheid gelijk blijft bij elk formaat. */
  if (field === 'screen') {
    const NS = 'http://www.w3.org/2000/svg';
    const layer = document.createElementNS(NS, 'svg');
    layer.setAttribute('class', 'snowlayer');
    layer.setAttribute('aria-hidden', 'true');
    const symbol = root.querySelector('symbol#sf').cloneNode(true);
    symbol.id = 'sfx';
    const dot = root.querySelector('symbol#sd').cloneNode(true);
    dot.id = 'sdx';
    const defs = document.createElementNS(NS, 'defs');
    defs.appendChild(symbol);
    defs.appendChild(dot);
    layer.appendChild(defs);
    root.appendChild(layer);
    let seed = 20261;
    const rnd = () => (seed = seed * 1103515245 + 12345 & 0x7fffffff) / 0x7fffffff;
    let lastN = 0,
      lastW = 0;
    const build = () => {
      const r = root.getBoundingClientRect(),
        W = Math.round(r.width),
        H = Math.round(r.height);
      if (!W || !H) return;
      const n = Math.max(28, Math.min(260, Math.round(W * H / 6000)));
      if (n === lastN && Math.abs(W - lastW) < 24) return;
      lastN = n;
      lastW = W;
      seed = 20261;
      const phase = [...Array(n).keys()];
      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [phase[i], phase[j]] = [phase[j], phase[i]];
      }
      let out = '';
      for (let i = 0; i < n; i++) {
        const x = (i + .1 + rnd() * .8) / n * W,
          y = -6 - rnd() * 14;
        /* Overwegend stipjes, ongeveer één op de zes een echt vlokje — zoals de stipjes in het logo.
           Een stipje is kleiner dan een vlokje van dezelfde afstand, en iets dekkender omdat er geen
           lijnwerk is dat wegvalt. */
        const isFlake = i % 6 === 0;
        const s = isFlake ? 6 + rnd() * 8 : 2.4 + rnd() * 2.6;
        const t = (11 + rnd() * 12).toFixed(1),
          dx = (rnd() * 150 - 75).toFixed(0),
          sw = (rnd() * 24 - 12).toFixed(0);
        const rot = (rnd() * 260 - 130).toFixed(0),
          op = ((isFlake ? .34 : .46) + rnd() * .5).toFixed(2);
        const fall = (H + s * 2 + 20).toFixed(0),
          lag = (-(phase[i] + rnd()) / n * t).toFixed(2);
        out += '<use class="fl' + (isFlake ? '' : ' dt') + '" href="#' + (isFlake ? 'sfx' : 'sdx') + '" style="--t:' + t + 's;--lag:' + lag + 's;--dx:' + dx + 'px;--fall:' + fall + 'px;--sw:' + sw + 'px;--rot:' + rot + 'deg;--op:' + op + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + s.toFixed(1) + '" height="' + s.toFixed(1) + '"></use>';
      }
      layer.innerHTML = defs.outerHTML + out;
    };
    build();
    let to;
    addEventListener('resize', () => {
      clearTimeout(to);
      to = setTimeout(build, 180);
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/seasonal/seizoenslogo.js", error: String((e && e.message) || e) }); }

// md.js
try { (() => {
/* Zet de markdown van dit project om naar HTML in de huisstijl. Eén converter voor
   wijzigingen.html en readme.html, zodat de .md-bestanden de enige bron blijven: leesbaar
   in de repo, netjes op het scherm. Ondersteunt alleen wat in deze bestanden voorkomt —
   koppen, opsommingen, tabellen, citaten, alinea's, en inline code, vet, cursief en links. */
(() => {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  const isRij = l => l.startsWith('|');
  const cellen = l => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const scheiding = l => /^\|[\s:|-]+\|?$/.test(l);
  function render(md, opties) {
    const o = opties || {};
    const regels = md.split('\n');
    const uit = [];
    let lijst = null,
      tabel = null,
      citaat = null,
      alinea = null;
    const sluitLijst = () => {
      if (lijst) {
        uit.push('<ul>' + lijst.join('') + '</ul>');
        lijst = null;
      }
    };
    const sluitAlinea = () => {
      if (alinea) {
        uit.push('<p>' + alinea.join(' ') + '</p>');
        alinea = null;
      }
    };
    const sluitCitaat = () => {
      if (citaat) {
        uit.push('<blockquote>' + citaat.join(' ') + '</blockquote>');
        citaat = null;
      }
    };
    const sluitTabel = () => {
      if (!tabel) return;
      const [kop, ...rest] = tabel;
      uit.push('<div class="tabelwrap"><table><thead><tr>' + kop.map(c => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>' + rest.map(r => '<tr>' + r.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>');
      tabel = null;
    };
    const sluitAlles = () => {
      sluitAlinea();
      sluitLijst();
      sluitTabel();
      sluitCitaat();
    };
    for (const raw of regels) {
      const l = raw.trim();
      if (!l) {
        sluitAlles();
        continue;
      }
      if (isRij(l)) {
        sluitAlinea();
        sluitLijst();
        sluitCitaat();
        if (scheiding(l)) continue; // de streepjesregel onder de kop
        (tabel = tabel || []).push(cellen(l));
        continue;
      }
      sluitTabel();
      if (l.startsWith('> ')) {
        sluitAlinea();
        sluitLijst();
        (citaat = citaat || []).push(inline(l.slice(2)));
        continue;
      }
      sluitCitaat();
      if (/^#{1,6} /.test(l)) {
        sluitAlinea();
        sluitLijst();
        const n = l.match(/^#+/)[0].length,
          tekst = l.replace(/^#+\s*/, '');
        if (n === 1 && o.skipH1) continue; // de titel staat al in de kop van de pagina
        const tag = 'h' + Math.min(n + (o.skipH1 ? 0 : 0), 4);
        uit.push('<' + tag + '>' + inline(tekst) + '</' + tag + '>');
        continue;
      }
      if (/^[-*]\s/.test(l)) {
        sluitAlinea();
        (lijst = lijst || []).push('<li><i aria-hidden="true"></i><span>' + inline(l.slice(2)) + '</span></li>');
        continue;
      }
      /* Een opsommingsregel die doorloopt op de volgende regel hoort bij hetzelfde punt. */
      if (lijst && /^\s{2,}/.test(raw)) {
        lijst[lijst.length - 1] = lijst[lijst.length - 1].replace('</span></li>', ' ' + inline(l) + '</span></li>');
        continue;
      }
      if (/^---+$/.test(l)) {
        sluitAlles();
        uit.push('<hr>');
        continue;
      }
      sluitLijst();
      (alinea = alinea || []).push(inline(l));
    }
    sluitAlles();
    return uit.join('\n');
  }

  /* Haalt het bestand op en zet het in het doelelement. Lukt dat niet — bijvoorbeeld omdat
     de pagina van schijf wordt geopend — dan blijft de link naar het bestand zelf over. */
  function mountMarkdown(pad, doel, opties) {
    const el = typeof doel === 'string' ? document.querySelector(doel) : doel;
    if (!el) return;
    fetch(pad).then(r => {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(md => {
      el.innerHTML = render(md, opties);
    }).catch(() => {
      el.innerHTML = '<div class="fout">Dit stuk kon niet worden geladen. Open <a href="' + pad + '">' + pad + '</a> direct.</div>';
    });
  }
  window.renderMarkdown = render;
  window.mountMarkdown = mountMarkdown;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "md.js", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const NAV_LEFT = [{
  label: 'De Hoeve',
  items: ['Over ons', 'Praktisch', 'Agenda']
}, {
  label: 'Art',
  items: ['Galerie', 'Beeldentuin']
}, {
  label: 'Events',
  items: ['Zakelijk', 'Particulier', 'Bruiloft']
}];
const NAV_RIGHT = [{
  label: 'Ruimtes',
  items: ['Koetshuis', 'Hooiberg', 'Stal', 'Ontwikkelatelier']
}, {
  label: 'Culinair',
  items: ['Catering', 'Hospitality', 'Pop-up']
}, 'Contact'];
class Boundary extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      err: null
    };
  }
  static getDerivedStateFromError(err) {
    return {
      err
    };
  }
  componentDidUpdate(prev) {
    if (prev.pageKey !== this.props.pageKey && this.state.err) this.setState({
      err: null
    });
  }
  render() {
    if (!this.state.err) return this.props.children;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px',
        fontFamily: 'var(--font-body)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        color: 'var(--ink-900)'
      }
    }, "Deze pagina kon niet worden opgebouwd"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 12,
        fontSize: 14
      }
    }, String(this.state.err && this.state.err.message || this.state.err)));
  }
}

// The bundled NavBar may lag behind the source while the design system recompiles.
// If it has no dropdown support yet, flatten the menus to plain labels instead of
// handing it objects it would try to render as React children (which blanks the page).
const NAV_HAS_DROPDOWN = /labelOf/.test(String(DS.NavBar || ''));
const flatten = items => items.map(it => typeof it === 'string' ? it : it.label);
const PAGE_FROM_HASH = () => decodeURIComponent((location.hash || '').replace(/^#/, '')) || 'De Hoeve';
function App() {
  const [page, setPage] = React.useState(PAGE_FROM_HASH);
  // an intent is a token, not a string: clicking OFFERTE twice must fire the scroll twice
  const [intent, setIntent] = React.useState(null);
  const goto = (p, why) => {
    setIntent(why ? {
      why,
      page: p,
      n: Date.now()
    } : null);
    setPage(p);
  };
  React.useEffect(() => {
    const sync = () => {
      setIntent(null);
      setPage(PAGE_FROM_HASH());
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  React.useEffect(() => {
    if (PAGE_FROM_HASH() !== page) history.replaceState(null, '', '#' + encodeURIComponent(page));
    // the target screen of an intent scrolls itself (child effects run first) — don't undo it
    if (!intent || intent.page !== page) window.scrollTo(0, 0);
  }, [page, intent]);
  const ROOMS = ['Koetshuis', 'Hooiberg', 'Stal', 'Ontwikkelatelier'];
  const screen = page === 'Ruimtes' || ROOMS.indexOf(page) > -1 ? /*#__PURE__*/React.createElement(RuimteScreen, {
    room: page === 'Ruimtes' ? 'Koetshuis' : page,
    onNavigate: setPage
  }) : page === 'Galerie' || page === 'Beeldentuin' || page === 'Art' ? /*#__PURE__*/React.createElement(GalerieScreen, {
    view: page === 'Beeldentuin' ? 'Beeldentuin' : 'Galerie',
    onNavigate: setPage
  }) : page === 'Bruiloft' ? /*#__PURE__*/React.createElement(BruiloftScreen, {
    onNavigate: setPage
  }) : page === 'Over ons' ? /*#__PURE__*/React.createElement(OverOnsScreen, {
    onNavigate: setPage
  }) : page === 'Praktisch' || page === 'Locatie' ? /*#__PURE__*/React.createElement(PraktischScreen, {
    onNavigate: setPage
  }) : page === 'Agenda' ? /*#__PURE__*/React.createElement(AgendaScreen, {
    onNavigate: setPage
  }) : page === 'Afscheid' ? /*#__PURE__*/React.createElement(AfscheidScreen, {
    onNavigate: setPage
  }) : page === 'Catering' ? /*#__PURE__*/React.createElement(CateringScreen, {
    onNavigate: setPage
  }) : page === 'Hospitality' ? /*#__PURE__*/React.createElement(HospitalityScreen, {
    onNavigate: setPage
  }) : page === 'Pop-up' ? /*#__PURE__*/React.createElement(PopupScreen, {
    onNavigate: setPage
  }) : page === 'Zakelijk' || page === 'Events' ? /*#__PURE__*/React.createElement(ZakelijkScreen, {
    onNavigate: setPage
  }) : page === 'Particulier' ? /*#__PURE__*/React.createElement(ParticulierScreen, {
    onNavigate: setPage
  }) : page === 'Contact' ? /*#__PURE__*/React.createElement(ContactScreen, {
    onNavigate: goto,
    focus: intent
  }) : /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: setPage
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    logo: IMG.logo,
    active: page,
    left: NAV_HAS_DROPDOWN ? NAV_LEFT : flatten(NAV_LEFT),
    right: NAV_HAS_DROPDOWN ? NAV_RIGHT : flatten(NAV_RIGHT),
    onNavigate: p => goto(p),
    onCta: () => goto('Contact', 'offerte')
  }), /*#__PURE__*/React.createElement(Boundary, {
    pageKey: page
  }, screen));
}
const mount = document.getElementById('root');
if (mount) ReactDOM.createRoot(mount).render(/*#__PURE__*/React.createElement(Boundary, {
  pageKey: "root"
}, /*#__PURE__*/React.createElement(App, null)));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.jsx
try { (() => {
/* Alle inhoud van de voorbeeldsite op één plek: teksten, opsommingen, teamleden, menu's.

   Waarom hier en niet in de schermen: wie een zaaltekst of een teamlid wijzigt hoort niet in
   JSX te hoeven. De schermbestanden gaan over indeling, dit bestand over wat er staat.
   Foto's staan als naam ('koetshuisExpo'), niet als pad — parts.jsx zet ze om via IMG.

   Prijzen staan NIET hier maar in prijzen.jsx; die volgen guidelines/content-en-feiten.md. */
const CONTENT = {
  /* Over ons — de vaste aanspreekpunten */
  team: [{
    name: 'Roos Rijlaarsdam',
    role: 'Eigenaresse · feesten en meetings',
    phone: '06 - 58 98 59 63',
    img: 'roos'
  }, {
    name: 'Wouter Berghuis',
    role: 'Chef-kok en patissier',
    img: 'wouter'
  }],
  /* Ruimtepagina's: Koetshuis, Hooiberg, Stal, Ontwikkelatelier */
  ruimtes: {
    'Koetshuis': {
      hero: 'koetshuisOntvangst',
      kicker: 'binnen bij',
      title: 'Het Koetshuis',
      quote: 'De grootste zaal, met uitzicht over de polder',
      lead: 'Een congres, symposium of seminar krijgt een grote meerwaarde door een inspirerende locatie. Onze grote expositieruimte — het Koetshuis — heeft een capaciteit van 250 gasten en een uitstekend akoestisch vermogen, en kan op verschillende manieren worden ingericht. U mag altijd vrijblijvend komen bezichtigen.',
      photo: 'koetshuisExpo',
      panel: 'koetshuisFeest',
      meta: ['250 gasten', 'Grote expositieruimte'],
      facts: ['Gratis wifi', '75 inch tv-scherm', 'Flip-over en vergaderbox', 'Flexibele zaalopstellingen', 'Capaciteit tot 250 gasten', 'Uitstekende akoestiek', 'Catering uit eigen keuken', 'Uitzicht over de polder', 'Beeldentuin van twee hectare', 'Gratis parkeren, circa 60 auto\u2019s', '50 extra plaatsen op aanvraag', 'Grotendeels rolstoelvriendelijk'],
      setupsTitle: 'Veel opstellingen',
      setupsLead: 'Van carré tot theater: wij bouwen de zaal om naar wat uw programma vraagt. Twijfelt u over de beste vorm? Wij denken graag met u mee over de mogelijkheden.',
      setups: ['Carré', 'U-vorm', 'Theater', 'Cabaret', 'Eiland', 'Diner']
    },
    'Hooiberg': {
      hero: 'hooiberg',
      kicker: 'binnen bij',
      title: 'De Hooiberg',
      quote: 'Rondom glas, met de polder als achtergrond',
      lead: 'De verbouwde hooiberg heeft een eigen bar en veel glas. Op de eerste etage ligt een vergaderruimte die volledig door ramen wordt omringd, met uitzicht over de polder en de beeldentuin, voor maximaal dertig personen. Beneden ontvangt u uw gasten voor een receptie of een borrel.',
      photo: 'hooibergFlipover',
      panel: 'hooibergTafels',
      meta: ['30 gasten boven', 'Eigen bar'],
      facts: ['Eigen bar', 'Vergaderruimte op de eerste etage', 'Maximaal 30 personen boven', 'Rondom ramen', 'Uitzicht over polder en beeldentuin', 'Terras met weids uitzicht', 'Theehuis met koffie en gebak', 'Catering uit eigen keuken', 'Gratis wifi', 'Gratis parkeren op eigen terrein'],
      setupsTitle: 'Waarvoor u hem gebruikt',
      setupsLead: 'De hooiberg is de plek voor het informele deel van de dag — en boven voor het werk dat concentratie vraagt.',
      setups: ['Receptie', 'Verjaardag', 'Netwerkborrel', 'Vergadering', 'Brainstorm', 'Borrel na het diner']
    },
    'Stal': {
      hero: 'stal',
      kicker: 'binnen bij',
      title: 'De oude Stal',
      quote: 'Ruim honderdtien jaar oud, met de balken nog in het zicht',
      lead: 'De voormalige stal is ruim honderdtien jaar oud en heeft houten palen in het midden. Aan de wanden hangt werk van de Haagse en Leidsche school. Het is de meest intieme van de drie expositieruimtes — voor een meeting, een wijnproeverij of een diner in klein gezelschap.',
      photo: 'stal',
      panel: 'stal',
      meta: ['Intiem', 'Haagse en Leidsche school'],
      facts: ['Ruim 110 jaar oud', 'Originele houten palen en balken', 'Werk van de Haagse en Leidsche school', 'Intieme sfeer', 'Catering uit eigen keuken', 'Geschikt voor private dining', 'Gratis wifi', 'Gratis parkeren op eigen terrein'],
      setupsTitle: 'Waarvoor u hem gebruikt',
      setupsLead: 'Kleiner en geconcentreerder dan het Koetshuis. Alles wat gesprek vraagt in plaats van een podium.',
      setups: ['Meeting', 'Wijnproeverij', 'Private dining', 'Bestuursoverleg', 'Expositie', 'Ontvangst']
    },
    'Ontwikkelatelier': {
      hero: 'atelier',
      kicker: 'binnen bij',
      title: 'Het Ontwikkelatelier',
      quote: 'De oude lijstenmakerij, nu een plek om te werken',
      lead: 'De oude lijstenmakerij is verbouwd tot coachings- en trainingsruimte met uitzicht over het land. Kleiner dan de andere ruimtes, en juist daarom de plek voor sessies waarin iedereen aan het woord komt.',
      photo: 'atelier',
      panel: 'workshop',
      meta: ['Kleine groepen', 'Coaching en training'],
      facts: ['Uitzicht over het land', 'Geschikt voor kleine groepen', 'Coaching en training', 'Flip-over aanwezig', 'Catering uit eigen keuken', 'Gratis wifi', 'Gratis parkeren op eigen terrein'],
      setupsTitle: 'Waarvoor u hem gebruikt',
      setupsLead: 'Voor sessies waarin de groep klein blijft en de dag een resultaat moet opleveren.',
      setups: ['Coaching', 'Bestuurssessie', 'Strategiesessie', 'Workshop', 'Training', 'Eén-op-één']
    }
  },
  /* Zaalopstellingen — één omschrijving per vorm, gedeeld door alle vier de zaalpagina's.
     Zonder deze regels stond er negen keer dezelfde placeholder onder de iconen. */
  opstellingen: {
    'Carré': 'Iedereen kijkt elkaar aan, niemand zit vooraan. Voor overleg waarin elke stem meetelt, tot ongeveer dertig personen.',
    'U-vorm': 'Open aan één kant, zodat er een spreker of scherm past. De vorm voor een training waarin ook gewerkt wordt.',
    'Theater': 'Stoelen in rijen, geen tafels. De meeste mensen in de zaal, voor een lezing of presentatie zonder aantekeningen.',
    'Cabaret': 'Ronde tafels met een vrije kant naar voren. Voor een programma dat wisselt tussen luisteren en samen werken.',
    'Eiland': 'Losse tafelgroepen door de zaal. Voor een dag met parallelle sessies of een beurs met standhouders.',
    'School': 'Rijen met tafels, allemaal naar voren. Voor een cursusdag waarop mensen schrijven of een laptop gebruiken.',
    'Diner': 'Lange tafels of ronde tafels van acht. Voor een diner na afloop, of een avond die daar meteen mee begint.',
    'Private dining': 'Eén tafel, klein gezelschap, de chef die zelf uitserveert. Tot ongeveer twintig gasten.',
    'Receptie': 'Statafels en ruimte om te lopen. Voor een ontvangst of borrel waarbij iedereen elkaar spreekt.',
    'Ontvangst': 'De eerste twintig minuten: koffie, jassen, mensen die binnendruppelen. Vaak in de Hooiberg of op het gazon.',
    'Netwerkborrel': 'Statafels verspreid, de bar open. Voor een borrel waarin het gesprek het programma is.',
    'Borrel na het diner': 'De zaal wordt omgebouwd terwijl uw gasten buiten staan. Daarna de bar open en ruimte om te dansen.',
    'Verjaardag': 'Zitten waar u wilt, een hoek voor de taart. Voor een feest waar drie generaties komen.',
    'Vergadering': 'Één tafel, iedereen aan het woord, scherm en flip-over binnen handbereik.',
    'Bestuursoverleg': 'Besloten, één tafel, geen doorloop. Voor een raad of bestuur dat een dag ongestoord wil werken.',
    'Bestuurssessie': 'Een dag met een besluit aan het eind. Kleine groep, flip-over, en een lunch die niet onderbreekt.',
    'Strategiesessie': 'Ruimte aan de wand voor plaknotities, en een tafel die makkelijk aan de kant kan.',
    'Brainstorm': 'Weinig meubilair, veel wand. Voor een ochtend waarin de uitkomst nog niet vaststaat.',
    'Workshop': 'Werktafels met ruimte om iets neer te leggen. Voor een dag waarop handen bezig zijn.',
    'Training': 'Rijen of een U-vorm, afhankelijk van de trainer. Wij zetten hem klaar zoals u het wilt.',
    'Meeting': 'De standaardvorm: één tafel, tot ongeveer twaalf mensen, alles binnen handbereik.',
    'Eén-op-één': 'Twee stoelen bij het raam. Voor een coachgesprek of een beoordeling die rust vraagt.',
    'Wijnproeverij': 'Een lange tafel met glazen op rij, de balken boven u. Onze chef verzorgt de bijpassende hapjes.',
    'Expositie': 'De wanden vrij, het werk op ooghoogte, en ruimte om er langs te lopen.'
  },
  /* Agenda — wisselende exposities, pop-upavonden en open dagen. Voorbeelddata; hoort op
     termijn uit een echte bron te komen. */
  agenda: [{
    datum: '12 sep',
    soort: 'Expositie',
    titel: 'Brons in de boomgaard',
    tijd: 'Vrij t/m zo, 11.00 - 17.00 uur',
    body: 'Nieuw werk van drie beeldhouwers, verspreid over de boomgaard en de Stal. De hele herfst te zien.',
    naar: 'Galerie',
    actie: 'Naar de galerie'
  }, {
    datum: '27 sep',
    soort: 'Pop-up',
    titel: 'Pop-uprestaurant — oogst',
    tijd: 'Vanaf 18.30 uur, vier gangen',
    body: 'Onze chef kookt met wat de tuin op dat moment geeft. Eén lange tafel in het Koetshuis, dertig couverts.',
    naar: 'Pop-up',
    actie: 'Reserveer een tafel'
  }, {
    datum: '5 okt',
    soort: 'Open dag',
    titel: 'Kijkdag voor bruidsparen',
    tijd: '11.00 - 16.00 uur, vrij inlopen',
    body: 'De zalen staan opgesteld zoals op een trouwdag, de patisserie staat klaar. U kunt vrijblijvend rondlopen.',
    naar: 'Bruiloft',
    actie: 'Over trouwen'
  }, {
    datum: '8 nov',
    soort: 'Pop-up',
    titel: 'Pop-uprestaurant — wild',
    tijd: 'Vanaf 18.30 uur, vijf gangen',
    body: 'De donkere maanden, de kachel aan in de Stal. Een menu rond wild en wortelgroenten uit de streek.',
    naar: 'Pop-up',
    actie: 'Reserveer een tafel'
  }, {
    datum: '6 dec',
    soort: 'Expositie',
    titel: 'Winterlicht',
    tijd: 'Vrij t/m zo, 11.00 - 17.00 uur',
    body: 'Kleiner werk, binnen opgesteld, met de kerstverlichting in de tuin. Tot en met januari.',
    naar: 'Galerie',
    actie: 'Naar de galerie'
  }],
  /* Galerie en Beeldentuin — twee gezichten van dezelfde pagina */
  galerie: {
    'Galerie': {
      hero: 'koetshuisRondleiding',
      kicker: 'welkom',
      title: 'Galerie',
      quote: 'Verkocht, bezichtigd, gerestaureerd en getaxeerd',
      lead: 'Drie expositieruimtes, één collectie: negentiende- en twintigste-eeuwse meesters naast hedendaags werk. U loopt vrij binnen tijdens de openingstijden, en op afspraak nemen wij u mee langs de collectie. Werk kan bij ons worden gekocht, bezichtigd, gerestaureerd en getaxeerd.',
      photo: 'stal'
    },
    'Beeldentuin': {
      hero: 'beeldentuinVogels',
      kicker: 'twee hectare',
      title: 'Beeldentuin',
      quote: 'Circa zeventig sculpturen, van brons tot glas',
      lead: 'Rondom de hoeve ligt twee hectare beeldentuin met circa zeventig sculpturen — van realisme tot abstract, van brons tot keramiek en glas. De tuin is vrij te bezoeken tijdens de openingstijden van de galerie, en dient bij evenementen als buitenruimte voor ceremonies, walking dinners en exposities.',
      photo: 'beeldentuinVogel'
    }
  },
  /* De drie expositieruimtes onder de galeriepagina */
  expositieruimtes: [{
    label: 'Stal',
    img: 'stal',
    body: 'Ruim honderdtien jaar oud, met de originele houten palen in het midden. Hier hangt werk van de Haagse en Leidsche school.'
  }, {
    label: 'Koetshuis',
    img: 'koetshuisExpo',
    body: 'De grootste expositieruimte, met hoge wanden en veel licht. Ook de zaal waar exposities en veilingen plaatsvinden.'
  }, {
    label: 'Grote zaal',
    img: 'koetshuisRondleiding',
    body: 'Ruimte voor grote formaten en wisselende presentaties, direct naast de entree van de galerie.'
  }],
  /* Bruiloft — het verloop van de dag */
  bruiloftsdag: [{
    label: 'Ontvangst',
    img: 'bruiloftPoort',
    body: 'Uw gasten komen aan op het erf en worden ontvangen met bubbels en warme hapjes, tussen de sculpturen in de beeldentuin.'
  }, {
    label: 'Ceremonie',
    img: 'bruiloftCeremonie',
    body: 'In de beeldentuin onder de bomen, of binnen in het Koetshuis als het weer daar niet aan meewerkt. Beide zijn voorbereid.'
  }, {
    label: 'Borrel',
    img: 'bruiloftTuin',
    body: 'Een lange borrel op het gazon met uitzicht over de polder, terwijl de zaal wordt omgebouwd voor het diner.'
  }, {
    label: 'Diner',
    img: 'bruiloftTafel',
    body: 'Een diner van onze chef in het Koetshuis of de Stal — sit down, walking dinner of een lange tafel.'
  }, {
    label: 'Feest',
    img: 'lounge',
    body: 'De bar in de Hooiberg gaat open, de festoonverlichting aan, en er wordt gedanst tot de laatste gast weg is.'
  }],
  /* Particulier — wat er te vieren valt */
  gelegenheden: [{
    label: 'Feesten',
    title: 'Vrolijke feesten',
    img: 'koetshuisFeest',
    body: 'Wij zijn gek op feestjes. Bitterballen op een schilderspalet met mosterd in verschillende kleuren, de bar in de Hooiberg open en dansen tot de laatste gast weg is.'
  }, {
    label: 'Verjaardagen',
    title: 'Zorgeloze verjaardagen',
    img: 'hooibergGedekt',
    body: 'Van een besloten diner in de Stal tot een groot feest in het Koetshuis. U bedenkt de gelegenheid, wij regelen de rest.'
  }, {
    label: 'Jubilea',
    title: 'Iets te vieren',
    img: 'bruiloftTafel',
    body: 'Een huwelijksjubileum, een afscheid of een mijlpaal. Vaak een lange tafel, een menu van onze chef en een rondleiding door de galerie tussen de gangen.'
  }, {
    label: 'High tea',
    title: 'Zoet uit eigen keuken',
    img: 'scones',
    body: 'Scones, macarons en huisgemaakte jams uit onze eigen tuin — zo zoet van zichzelf dat er bijna geen suiker aan toe hoeft.'
  }],
  /* Zakelijk — welke ruimte past bij u */
  zakelijkeRuimtes: [{
    label: 'Hooiberg',
    title: 'Vergaderen met uitzicht',
    img: 'hooibergFlipover',
    body: 'Volledig omringd door ramen, met uitzicht over de polder en de beeldentuin. Voor maximaal 30 personen — de ruimte waar de meeste vergaderdagen plaatsvinden.'
  }, {
    label: 'Stal',
    title: 'Historisch en besloten',
    img: 'stal',
    body: 'Ruim honderdtien jaar oud, met de originele balken en werk van de Haagse en Leidsche school aan de wand. Geschikt voor meetings, wijnproeverijen en private dining.'
  }, {
    label: 'Koetshuis',
    title: 'Ruimte voor 250',
    img: 'koetshuisBijeenkomst',
    body: 'De grootste zaal, met uitstekende akoestiek. Voor congressen, beurzen en bedrijfsfeesten; de indeling is volledig vrij.'
  }, {
    label: 'Ontwikkelatelier',
    title: 'Coaching en strategie',
    img: 'atelier',
    body: 'De oude lijstenmakerij, verbouwd tot trainingsruimte met uitzicht over het land. Voor coaching, bestuurs- en strategiesessies.'
  }],
  /* Catering — het menu per gang */
  cateringMenu: {
    Diner: [['Walking dinner', 'hapjes'], ['Sit down dinner', 'bruiloftTafel'], ['Shared dinner', 'hooibergGedekt']],
    Borrel: [['Borrelplanken', 'flatlay'], ['Amuses', 'dessert'], ['Rondje de wereld', 'bar']],
    Lunch: [['Walking lunch', 'voorgerecht'], ['Broodplanken', 'scones'], ['High tea', 'macarons']]
  },
  /* Chef — gerechten per moment van de dag */
  chefMenu: {
    Diner: [{
      caption: 'Entrecote, 48 tot 51 graden',
      img: 'voorgerecht'
    }, {
      caption: 'Bietjes — rauw, gerookt, gemarineerd',
      img: 'wouterPlating'
    }, {
      caption: 'Amuse van het seizoen',
      img: 'hapjes'
    }],
    Ontbijt: [{
      caption: 'Yoghurt met huisgemaakte granola',
      img: 'scones'
    }, {
      caption: 'Roerei met truffel en Ibericoham',
      img: 'flatlay'
    }, {
      caption: 'Patisserie uit eigen keuken',
      img: 'macarons'
    }],
    Zoet: [{
      caption: 'Bruidstaart op maat',
      img: 'bruidstaart'
    }, {
      caption: 'Macarons',
      img: 'macarons'
    }, {
      caption: 'Scones voor de high tea',
      img: 'scones'
    }]
  }
};
window.CONTENT = CONTENT;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* A component that is written but not yet compiled into _ds_bundle.js would otherwise
   render as `undefined` and blank the whole kit. Fall back to a visible marker instead. */
const DS = new Proxy(window.HoeveRijlaarsdamDesignSystem_374762 || {}, {
  get(target, key) {
    if (target[key]) return target[key];
    return function MissingComponent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-5)',
          background: 'var(--ink-100)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body-s)',
          color: 'var(--ink-500)',
          textAlign: 'center'
        }
      }, String(key), " is nog niet gecompileerd");
    };
  }
});
const {
  PullQuote,
  PageOutro,
  CtaBand,
  PhotoCarousel,
  SectionHeading,
  QuoteBar,
  RoomCard,
  ImageCaptionCard,
  InfoTile,
  PersonCard,
  SiteMap,
  SitePlan,
  BenefitsPanel,
  FaqAccordion,
  TabbedDetail,
  Select,
  Choice,
  ChoiceGroup,
  FormStatus,
  EmptyState,
  Skeleton,
  LoadingRegion,
  Lightbox,
  PriceList,
  Button,
  Input,
  TabPills,
  CarouselNav,
  NavBar,
  HeroVideo,
  SplitHero,
  SplitPanel,
  Footer
} = DS;
const IMG = {
  gallery: '../../assets/photo-koetshuis-expositie.jpg',
  crowd: '../../assets/photo-lounge-zonsondergang.jpg',
  meeting: '../../assets/photo-koetshuis-bijeenkomst.jpg',
  lawn: '../../assets/photo-hoeve-gazon.jpg',
  catering: '../../assets/photo-voorgerecht.jpg',
  service: '../../assets/photo-hapjes-serveren.jpg',
  grounds: '../../assets/photo-omgeving-water.jpg',
  hoeve: '../../assets/photo-hoeve-heerlijckheid.jpg',
  koetshuisExpo: '../../assets/photo-koetshuis-expositie.jpg',
  koetshuisBijeenkomst: '../../assets/photo-koetshuis-bijeenkomst.jpg',
  koetshuisFeest: '../../assets/photo-koetshuis-feest.jpg',
  koetshuisOntvangst: '../../assets/photo-koetshuis-ontvangst.jpg',
  koetshuisRondleiding: '../../assets/photo-koetshuis-rondleiding.jpg',
  hooiberg: '../../assets/photo-hooiberg.jpg',
  hooibergGedekt: '../../assets/photo-hooiberg-gedekt.jpg',
  hooibergTafels: '../../assets/photo-hooiberg-tafels.jpg',
  hooibergFlipover: '../../assets/photo-hooiberg-flipover.jpg',
  hooibergBruid: '../../assets/photo-hooiberg-bruid.jpg',
  atelier: '../../assets/photo-atelier.jpg',
  stal: '../../assets/photo-stal-zoettafel.jpg',
  beeldentuinVogel: '../../assets/photo-beeldentuin-vogel.jpg',
  beeldentuinVogels: '../../assets/photo-beeldentuin-vogels.jpg',
  beeldentuinBruidspaar: '../../assets/photo-beeldentuin-bruidspaar.jpg',
  bruiloftCeremonie: '../../assets/photo-bruiloft-ceremonie.jpg',
  bruiloftPoort: '../../assets/photo-bruiloft-poort.jpg',
  bruiloftStoelen: '../../assets/photo-bruiloft-stoelen.jpg',
  bruiloftTafel: '../../assets/photo-bruiloft-tafel.jpg',
  bruiloftTaart: '../../assets/photo-bruiloft-taart.jpg',
  bruiloftTuin: '../../assets/photo-bruiloft-tuin.jpg',
  bruiloftUitloop: '../../assets/photo-bruiloft-uitloop.jpg',
  voorgerecht: '../../assets/photo-voorgerecht.jpg',
  dessert: '../../assets/photo-dessert.jpg',
  bruidstaart: '../../assets/photo-bruidstaart.jpg',
  scones: '../../assets/photo-scones.jpg',
  macarons: '../../assets/photo-hooiberg-macarons.jpg',
  flatlay: '../../assets/photo-styling-flatlay.jpg',
  zoetBuffet: '../../assets/photo-zoet-buffet.jpg',
  gastvrouwen: '../../assets/photo-gastvrouwen-koetshuis.jpg',
  roos: '../../assets/photo-roos-portret.jpg',
  wouter: '../../assets/photo-wouter-portret.jpg',
  wouterPlating: '../../assets/photo-wouter-plating.jpg',
  bediening: '../../assets/photo-bediening-buiten.jpg',
  hapjes: '../../assets/photo-hapjes-serveren.jpg',
  bar: '../../assets/photo-bar-cocktails.jpg',
  chef: '../../assets/photo-chef-buitenkeuken.jpg',
  wouterRoos: '../../assets/photo-wouter-roos.jpg',
  coquilles: '../../assets/photo-coquilles.jpg',
  workshop: '../../assets/photo-schilderworkshop.jpg',
  lounge: '../../assets/photo-lounge-zonsondergang.jpg',
  water: '../../assets/photo-omgeving-water.jpg',
  gazon: '../../assets/photo-hoeve-gazon.jpg',
  logo: '../../assets/logo-lockup.svg',
  swirl: '../../assets/ornament-swirl-wit.svg'
};
const FOOTER_COLS = [{
  title: 'Hoeve Rijlaarsdam',
  lines: [{
    text: 'Nieuwveenseweg 59'
  }, {
    text: '2421 LB Nieuwkoop'
  }, {
    text: '085 888 3211',
    strong: true
  }, {
    text: 'info@hoeverijlaarsdam.nl',
    strong: true
  }]
}, {
  title: 'Neem contact op',
  lines: [{
    text: 'Feesten en meetings',
    strong: true
  }, {
    text: 'Roos Rijlaarsdam: 06 - 58 98 59 63'
  }, {
    text: 'Galerie & beeldentuin',
    strong: true
  }, {
    text: 'Loekie Rijlaarsdam: 06 - 42 57 63 95'
  }]
}, {
  title: 'Openingstijden galerie',
  lines: [{
    label: 'Ma t/m do',
    text: 'op afspraak'
  }, {
    label: 'Vrij & za',
    text: '11.00 - 17.00 uur'
  }, {
    label: 'Zondag',
    text: '13.00 - 17.00 uur'
  }]
}];
const SECTION_TONES = {
  sage: 'var(--surface-sage)',
  deep: 'var(--surface-deep)',
  cream: 'var(--surface-alt)',
  light: 'var(--surface-page)'
};
function Section({
  children,
  tone,
  background,
  pad = 'var(--section-y) var(--space-8)',
  style
}) {
  const bg = background || SECTION_TONES[tone] || 'var(--surface-page)';
  if (tone && !SECTION_TONES[tone]) console.warn('Section: onbekende tone "' + tone + '"');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
function Lead({
  children,
  align = 'left',
  width = '68ch',
  tone = 'light'
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: width,
      margin: align === 'center' ? 'var(--space-5) auto 0' : 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)',
      color: tone === 'light' ? 'var(--text-body)' : 'var(--cream-100)',
      textAlign: align
    }
  }, children);
}

/* Fixed page ending: the centre-focused carousel in its own section, then the footer in its own.
   Every page passes photography that belongs to that page. */
const CAROUSELS = {
  locatie: [IMG.gazon, IMG.hoeve, IMG.water, IMG.beeldentuinVogels, IMG.lounge, IMG.koetshuisRondleiding],
  chef: [IMG.voorgerecht, IMG.dessert, IMG.hapjes, IMG.flatlay, IMG.bruidstaart, IMG.macarons],
  home: [IMG.lounge, IMG.koetshuisFeest, IMG.beeldentuinVogel, IMG.hooibergGedekt, IMG.gazon, IMG.water],
  ruimte: [IMG.koetshuisOntvangst, IMG.koetshuisExpo, IMG.koetshuisFeest, IMG.koetshuisBijeenkomst, IMG.koetshuisRondleiding, IMG.hooibergTafels],
  catering: [IMG.voorgerecht, IMG.dessert, IMG.scones, IMG.macarons, IMG.bar, IMG.chef],
  hospitality: [IMG.gastvrouwen, IMG.bediening, IMG.hapjes, IMG.bar, IMG.chef, IMG.flatlay],
  popup: [IMG.voorgerecht, IMG.koetshuisExpo, IMG.chef, IMG.dessert, IMG.bar, IMG.zoetBuffet],
  contact: [IMG.hoeve, IMG.gazon, IMG.water, IMG.bruiloftPoort, IMG.beeldentuinVogels, IMG.lounge],
  galerie: [IMG.beeldentuinVogels, IMG.stal, IMG.koetshuisExpo, IMG.workshop, IMG.beeldentuinVogel, IMG.koetshuisRondleiding],
  bruiloft: [IMG.bruiloftCeremonie, IMG.bruiloftTafel, IMG.beeldentuinBruidspaar, IMG.bruiloftTaart, IMG.bruiloftTuin, IMG.bruiloftUitloop],
  overons: [IMG.gastvrouwen, IMG.bediening, IMG.chef, IMG.bar, IMG.koetshuisRondleiding, IMG.hoeve],
  zakelijk: [IMG.koetshuisBijeenkomst, IMG.hooibergFlipover, IMG.stal, IMG.workshop, IMG.atelier, IMG.koetshuisRondleiding],
  particulier: [IMG.koetshuisFeest, IMG.hooibergGedekt, IMG.bar, IMG.zoetBuffet, IMG.hapjes, IMG.lounge],
  praktisch: [IMG.hoeve, IMG.gazon, IMG.water, IMG.koetshuisOntvangst, IMG.hooiberg, IMG.beeldentuinVogel]
};

/* De gebundelde Footer loopt één compilatie achter op de bron. Kreeg hij objecten terwijl hij
   ze nog niet kent, dan rendert React ze als child en crasht elke pagina — dus eerst kijken of
   de bundel de {label, href}-vorm al aankan, en anders alleen de juridische regels tonen. */
const FOOTER_HAS_HREF = /l\.href/.test(String(DS.Footer || ''));
const FOOT_LINKS = FOOTER_HAS_HREF ? [{
  label: 'Agenda',
  href: '#Agenda'
}, {
  label: 'Afscheid nemen',
  href: '#Afscheid'
}, 'Algemene voorwaarden', 'Cookies', 'Privacy'] : ['Algemene voorwaarden', 'Cookies', 'Privacy'];

/* De gebundelde componenten lopen één compilatie achter op de bron. Een scherm dat een
   gloednieuw component aanroept crasht dan met "Element type is invalid" — daarom een
   eenvoudige terugval tot de bundel is bijgewerkt. */
const EmptyStateSafe = DS.EmptyState || (({
  title,
  children,
  action
}) => /*#__PURE__*/React.createElement("div", {
  role: "status",
  style: {
    textAlign: 'center',
    padding: 'var(--space-8) var(--space-6)'
  }
}, title && /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--fs-display-s)',
    color: 'var(--text-heading)'
  }
}, title), children && /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 'var(--space-3) auto 0',
    maxWidth: '46ch',
    fontSize: 'var(--fs-body-s)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--text-muted)'
  }
}, children), action && /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 'var(--space-6)'
  }
}, action)));
function PageEnd({
  page = 'home',
  tone = 'cream',
  kicker,
  title,
  body,
  onCta
}) {
  /* Klikken op het middelste beeld opende tot nu toe niets: PhotoCarousel vuurt onSelect,
     maar er luisterde niemand. Nu opent het de foto op ware grootte. */
  const fotos = CAROUSELS[page] || CAROUSELS.home;
  const [zoom, setZoom] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageOutro, {
    tone: tone,
    items: fotos,
    height: 400,
    onSelect: (it, k) => setZoom(k),
    kicker: kicker,
    title: title,
    body: body,
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Footer, {
    columns: FOOTER_COLS,
    links: FOOT_LINKS
  }), zoom !== null && Lightbox && /*#__PURE__*/React.createElement(Lightbox, {
    items: fotos,
    index: zoom,
    onIndex: setZoom,
    onClose: () => setZoom(null)
  }));
}

/* De kaarten moeten van de band afsteken: op een crème band worden ze diepgroen, op wit
   blijven ze crème. Zonder die regel staat er crème op crème en verdwijnt de kaartvorm. */
function ReviewRow({
  tone,
  background
}) {
  const kaartToon = tone || (background ? 'deep' : 'cream');
  const q = 'Een bijzondere locatie, samen te vatten als ruimtelijk, rustig en liefdevol. Alles werd tot in de puntjes verzorgd \u2014 wij hadden er geen omkijken naar.';
  const q2 = 'Onze gasten praten er nog steeds over. De tuin, het eten, en vooral de mensen die het draaiende houden.';
  /* Eén Section, niet twee: als kop en kaarten elk hun eigen sectie hebben staan er twee
     vlakken van dezelfde kleur tegen elkaar. */
  return /*#__PURE__*/React.createElement(Section, {
    background: background,
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "mooie reactie",
    title: "Van klanten",
    align: "center",
    size: "m"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    compact: true,
    tone: kaartToon,
    name: "Anna en Joost",
    role: "uit Nieuwkoop"
  }, q), /*#__PURE__*/React.createElement(PullQuote, {
    compact: true,
    tone: kaartToon,
    name: "Marijke de Wit",
    role: "uit Alphen aan den Rijn"
  }, q2)));
}
const FAQ_ITEMS = [{
  question: 'Hoeveel gasten kunnen er terecht?',
  answer: 'Het Koetshuis heeft een capaciteit van 250 gasten. In de vergaderruimte op de eerste etage van de Hooiberg ontvangen wij groepen tot 30 personen.'
}, {
  question: 'Is er parkeergelegenheid?',
  answer: 'Gratis parkeren op eigen terrein voor circa 60 auto\u2019s. Voor grotere bijeenkomsten regelen wij aangrenzend nog eens 50 extra plaatsen.'
}, {
  question: 'Verzorgt u ook de catering?',
  answer: 'Ja. Wij verzorgen een compleet event, inclusief horeca en aankleding, met streekproducten en (H)eerlijckheid uit eigen tuin.'
}, {
  question: 'Is de locatie rolstoelvriendelijk?',
  answer: 'Hoeve Rijlaarsdam is grotendeels rolstoelvriendelijk. Vertelt u ons vooraf wat u nodig heeft, dan richten wij de route en de zaal daarop in.'
}, {
  question: 'Hoe ver rijden wij vanuit de stad?',
  answer: 'Wij liggen middenin het Groene Hart, op ongeveer 30 minuten rijden van de grote steden.'
}];
Object.assign(window, {
  DS,
  IMG,
  FOOTER_COLS,
  CAROUSELS,
  Section,
  Lead,
  PageEnd,
  CtaBand,
  PageOutro,
  PullQuote,
  ReviewRow,
  FAQ_ITEMS,
  PhotoCarousel,
  SectionHeading,
  QuoteBar,
  RoomCard,
  ImageCaptionCard,
  InfoTile,
  PersonCard,
  SiteMap,
  SitePlan,
  BenefitsPanel,
  FaqAccordion,
  TabbedDetail,
  PriceList,
  Select,
  Choice,
  ChoiceGroup,
  FormStatus,
  EmptyState: EmptyStateSafe,
  Skeleton,
  LoadingRegion,
  Lightbox,
  Button,
  Input,
  TabPills,
  CarouselNav,
  NavBar,
  HeroVideo,
  SplitHero,
  SplitPanel,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/prijzen.jsx
try { (() => {
/* Alle bedragen van de site op één plek. Volgt guidelines/content-en-feiten.md.

   WORK IN PROGRESS — deze prijzen zijn nog niet geverifieerd bij de opdrachtgever en
   mogen niet gepubliceerd worden voordat dat gebeurd is. Wijzig ze hier, nooit in een
   schermbestand. Bedragen zijn tekst: 'op aanvraag' is een geldige prijs. */
const PRIJZEN = {
  btwNoot: 'Alle bedragen zijn exclusief btw.',
  zaalhuur: [{
    label: 'Dagdeel',
    detail: '9.00–13.00 of 13.00–17.00',
    amount: '€ 395'
  }, {
    label: 'Avond',
    detail: 'vanaf 18.00',
    amount: '€ 475'
  }, {
    label: 'Hele dag',
    detail: '9.00–17.00',
    amount: '€ 525'
  }],
  extras: [{
    label: 'Energy break',
    detail: 'huisgemaakte quiche',
    amount: '€ 7,50'
  }, {
    label: 'Healthy break',
    detail: 'smoothie met vers fruit',
    amount: '€ 6,50'
  }, {
    label: 'Borrel',
    detail: '2 consumpties en een ronde warme snacks',
    amount: '€ 12,50'
  }],
  arrangementen: [{
    naam: 'Polderpracht',
    duur: '4 uur',
    amount: '€ 15,50 p.p.',
    tekst: 'Onbeperkt koffie, thee en water, met huisgemaakte lekkernij bij de start.'
  }, {
    naam: 'Korenbloem',
    duur: '8 uur',
    amount: '€ 28,50 p.p.',
    tekst: 'De hele dag verzorgd, inclusief een lunch uit eigen keuken.'
  }, {
    naam: 'Inspiratie',
    duur: '8 uur',
    amount: '€ 35,50 p.p.',
    tekst: 'De hele dag verzorgd, met een uitgebreide lunch en een borrel na.'
  }],
  inbegrepen: 'Inclusief gebruik van 75-inch tv-scherm, flip-over, vergaderbox en gratis wifi.'
};
window.PRIJZEN = PRIJZEN;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/prijzen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-afscheid.jsx
try { (() => {
/* Afscheid — een condoleance in besloten kring. Stond eerder als één sectie op Particulier,
   een pagina die "Vrolijke feesten" heet; dat klopte tonaal niet. Bewust niet in de navigatie:
   hiernaar wordt niet gebrowsed. Bereikbaar via Particulier en via de footer.
   Toon: geen kickers met uitroeptekens, geen carousel met feestfoto's, één telefoonnummer. */
function AfscheidScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.water,
    kicker: "afscheid nemen",
    title: "Van een dierbare",
    height: 380
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '68ch',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "68ch"
  }, "Afscheid nemen van een dierbare went nooit. Als u de dag bij ons wilt houden, nemen wij het regelen uit handen \u2014 zodat u er alleen hoeft te zijn."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "Belt u liever dan dat u mailt. Roos is bereikbaar op", ' ', /*#__PURE__*/React.createElement("a", {
    href: "tel:0658985963",
    style: {
      color: 'var(--green-700)'
    }
  }, "06 58 98 59 63"), ", ook buiten kantooruren."))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.stal,
    ratio: "4 / 3",
    background: "var(--surface-cream)"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    tone: "sage",
    kicker: "wat wij",
    title: "Regelen",
    items: ['De Stal of het Koetshuis in besloten kring', 'De locatie die dag alleen voor u', 'Koffie, thee en iets zoets uit eigen keuken', 'Een lunch of broodmaaltijd na afloop', 'Ruimte voor een spreker, muziek of een film', 'Eén van ons is er de hele dag bij', 'Gratis parkeren direct naast de zaal', 'Grotendeels rolstoelvriendelijk'],
    style: {
      margin: '0 -40px 0 0'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "hoe het",
    title: "Meestal gaat",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)',
      maxWidth: 920,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, [['De Stal', 'Voor een gezelschap tot zestig personen, met de balken in het zicht en het werk aan de wand. De meest gekozen ruimte.'], ['Het Koetshuis', 'Voor een grotere groep, tot 250 gasten, met een eigen entree zodat u niet door de galerie hoeft.'], ['De beeldentuin', 'Bij goed weer kunnen de deuren open en loopt het gezelschap de tuin in. Twee hectare, en altijd stil.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "sage",
    align: "center"
  }, "Wij houden de locatie die dag voor u alleen. Er komt niemand anders over het erf."), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen en antwoorden",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    tone: "onLight",
    items: [{
      question: 'Op welke termijn kan het?',
      answer: 'Meestal binnen een week. Belt u ons zodra de datum bekend is, dan houden wij de zaal vast terwijl de rest wordt geregeld.'
    }, {
      question: 'Werken jullie samen met een uitvaartondernemer?',
      answer: 'Ja. Uw ondernemer kan rechtstreeks met ons overleggen; wij stemmen tijden, opstelling en catering met hem af.'
    }, {
      question: 'Kunnen wij zelf iets meebrengen?',
      answer: 'Natuurlijk. Bloemen, foto\u2019s, muziek of een film — vertelt u wat u wilt, dan zetten wij het klaar.'
    }, {
      question: 'Is de galerie open die dag?',
      answer: 'Nee. Bij een besloten bijeenkomst sluiten wij de galerie, zodat er geen bezoek over het erf loopt.'
    }, {
      question: 'Wat kost het?',
      answer: 'Wij maken een voorstel op maat, met de zaal en de catering apart. Er zit geen minimumafname aan.'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "liever eerst",
    title: "Even overleggen",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "66ch"
  }, "Belt u gerust, ook als de datum nog niet vaststaat. Wij denken mee zonder dat u ergens aan vastzit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    href: "tel:0658985963"
  }, "Bel Roos: 06 58 98 59 63"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Praktisch')
  }, "Route en parkeren")))), /*#__PURE__*/React.createElement(Footer, {
    columns: FOOTER_COLS
  }));
}
window.AfscheidScreen = AfscheidScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-afscheid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-agenda.jsx
try { (() => {
/* Agenda — wat er wanneer is. De enige plek waar wisselende exposities, pop-upavonden en
   open dagen bij elkaar staan; die informatie zat eerder verspreid over Galerie en Pop-up.
   De items horen op termijn uit een bron te komen, niet uit dit bestand. */
function AgendaScreen({
  onNavigate
}) {
  const [filter, setFilter] = React.useState('Alles');
  const items = CONTENT.agenda;
  const zichtbaar = filter === 'Alles' ? items : items.filter(i => i.soort === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.koetshuisExpo,
    kicker: "wat er",
    title: "Te doen is",
    height: 400
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CEr is altijd iets aan de hand op het erf\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "onze",
    title: "Agenda",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Wisselende exposities in de galerie, pop-upavonden van onze chef en open dagen op het erf. Voor besloten evenementen is de locatie gesloten; die staan hier niet bij.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onLight",
    items: ['Alles', 'Expositie', 'Pop-up', 'Open dag'],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: 'var(--space-7) auto 0',
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, zichtbaar.map(i => /*#__PURE__*/React.createElement("article", {
    key: i.titel,
    style: {
      display: 'grid',
      gridTemplateColumns: '132px 1fr auto',
      gap: 'var(--space-6)',
      alignItems: 'center',
      paddingBottom: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-s)',
      color: 'var(--ink-900)',
      lineHeight: 1.1
    }
  }, i.datum), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, i.soort)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-body-l)',
      color: 'var(--ink-900)'
    }
  }, i.titel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      maxWidth: '62ch',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, i.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 'var(--fs-label-s)',
      color: 'var(--ink-500)'
    }
  }, i.tijd)), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    size: "sm",
    onClick: () => onNavigate(i.naar || 'Contact')
  }, i.actie || 'Meer weten'))), zichtbaar.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    title: "Nog niets gepland",
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "outlineDark",
      onClick: () => setFilter('Alles')
    }, "Bekijk de hele agenda")
  }, "Er staat op dit moment niets van dit soort op de kalender. Wij plannen een paar exposities en pop-upavonden per seizoen \u2014 kijk over een paar weken nog eens, of vraag ons wat eraan komt."))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "niets missen",
    title: "Van wat er komt",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '66ch',
      margin: 'var(--space-5) auto 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--white)'
    }
  }, "Wij sturen een paar keer per jaar een bericht als er een nieuwe expositie hangt of een pop-upavond gepland staat. Niet vaker."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "white",
    onClick: () => onNavigate('Contact')
  }, "Houd mij op de hoogte"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineLight",
    onClick: () => onNavigate('Galerie')
  }, "Naar de galerie")))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "galerie",
    tone: "cream",
    kicker: "of kom",
    title: "Zomaar langs",
    body: "De galerie en de beeldentuin zijn op vrijdag, zaterdag en zondag open. U hoeft niets te reserveren.",
    onCta: () => onNavigate('Praktisch')
  }));
}
window.AgendaScreen = AgendaScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-agenda.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-bruiloft.jsx
try { (() => {
function BruiloftScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.bruiloftCeremonie,
    kicker: "romantische",
    title: "Bruiloften",
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CRuimtelijk, rustig en liefdevol\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "de mooiste",
    title: "Dag van uw leven",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, "Een bijzondere trouwlocatie, samen te vatten als ruimtelijk, rustig en liefdevol. U trouwt tussen de kunst, in twee hectare beeldentuin, met de polder als achtergrond. Uw wensen zijn hierbij altijd leidend \u2014 wij leveren daarmee echt maatwerk."))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.bruiloftStoelen,
    ratio: "4 / 3"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "alles op",
    title: "\xC9\xE9n adres",
    items: ['Ceremonie in de beeldentuin', 'Binnenlocatie als achterwacht', 'Diner van onze eigen chef', 'Bruidstaart uit eigen patisserie', 'Gastvrouwen en gastheren', 'Bar in de Hooiberg', 'Twee hectare voor de fotograaf', 'Capaciteit tot 250 gasten', 'Gratis parkeren, circa 60 auto\u2019s', 'Eén aanspreekpunt van begin tot eind'],
    style: {
      margin: '0 -40px 0 0'
    }
  })), /*#__PURE__*/React.createElement(TabbedDetail, {
    tone: "cream",
    kicker: "het verloop",
    title: "Van de dag",
    lead: "Een dag zoals wij hem vaak zien. Niets hiervan staat vast \u2014 kies het moment om te zien wat er dan gebeurt.",
    items: CONTENT.bruiloftsdag.map(d => ({
      label: d.label,
      image: IMG[d.img],
      body: d.body
    }))
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat het",
    title: "Bijzonder maakt",
    align: "center",
    size: "l",
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.beeldentuinBruidspaar,
    caption: "Trouwen tussen de kunst",
    body: "Zeventig sculpturen in twee hectare tuin \u2014 nergens dezelfde achtergrond."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.bruiloftTaart,
    caption: "Eigen patisserie",
    body: "De bruidstaart komt uit dezelfde keuken als het diner."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.hooibergBruid,
    caption: "E\xE9n aanspreekpunt",
    body: "Van de eerste kop koffie tot de laatste gast: dezelfde mensen."
  }))), /*#__PURE__*/React.createElement(PullQuote, {
    portrait: IMG.bruiloftUitloop,
    tone: "sage",
    name: "Uit een reactie van een bruidspaar"
  }, "Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd."), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen en antwoorden",
    align: "center",
    size: "l",
    tone: "onDeep"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    items: [{
      question: 'Kunnen wij bij jullie trouwen, of alleen het feest houden?',
      answer: 'Beide. De ceremonie kan in de beeldentuin of binnen in het Koetshuis; wij overleggen met u en de gemeente wat daarvoor nodig is.'
    }, {
      question: 'Wat gebeurt er als het regent?'
    }, {
      question: 'Hoeveel gasten kunnen wij uitnodigen?'
    }, {
      question: 'Verzorgen jullie ook de bruidstaart?'
    }, {
      question: 'Tot hoe laat mag het feest doorgaan?'
    }, {
      question: 'Kunnen wij de locatie eerst komen bekijken?'
    }]
  })), /*#__PURE__*/React.createElement(PageEnd, {
    page: "bruiloft",
    tone: "cream",
    kicker: "uw droomdag",
    title: "Volledig op maat",
    body: "Vertel ons uw plannen, dan gaan wij graag met u rond de tafel \u2014 onder het genot van een kop koffie. Uw wensen zijn leidend.",
    onCta: () => onNavigate('Contact')
  }));
}
window.BruiloftScreen = BruiloftScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-bruiloft.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-catering.jsx
try { (() => {
/* Catering — één menusectie met pillen in plaats van drie bijna gelijke rasters.
   De chef stond eerder op een eigen pagina van twaalf blokken; die is hierin opgegaan als
   één blok — wie catering overweegt wil weten wie er kookt, maar niet zíjn hele verhaal. */

function CateringScreen({
  onNavigate
}) {
  const [gang, setGang] = React.useState('Diner');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.chef,
    kicker: "culinair",
    title: "Uit eigen keuken",
    height: 380
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CCatering op topniveau\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "culinaire",
    title: "Hoogstandjes",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Ook culinair willen wij u graag verrassen: wij werken met streekproducten en met onbespoten vruchten uit onze eigen tuin, verwerkt in arrangementen, huisgemaakte jams en likeuren. Van een walking dinner tussen de kunst tot een boerenlunch of high tea.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.voorgerecht,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "kies het",
    title: "Perfecte menu",
    align: "center",
    size: "l",
    tone: "onSage",
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onSage",
    items: Object.keys(CONTENT.cateringMenu),
    value: gang,
    onChange: setGang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-6)'
    }
  }, CONTENT.cateringMenu[gang].map(([caption, img]) => /*#__PURE__*/React.createElement(RoomCard, {
    key: caption,
    image: IMG[img],
    caption: caption,
    ratio: "4 / 3",
    tone: "onSage",
    readMoreLabel: "Vraag aan",
    onReadMore: () => onNavigate('Contact')
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "en verder",
    title: "Ook bij u op locatie",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Onze keuken en onze mensen komen naar u toe, met draaiboek en aansturing op de dag. Vanaf twintig gasten, ook buiten Nederland."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Hospitality')
  }, "Hospitality op locatie"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Pop-up')
  }, "Ons pop-uprestaurant")))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.wouterPlating,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "onze chef",
    title: "Wouter Berghuis",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Van origine restaurantchef in het hogere segment, sinds 2018 vast verbonden aan de hoeve. Hij verzorgt het culinaire deel, Roos Rijlaarsdam de hospitality. Werkt met moderne technieken zonder de klassiekers uit het oog te verliezen \u2014 en met wat het seizoen geeft: asperges buiten het seizoen komen hier niet op tafel.")))), /*#__PURE__*/React.createElement(PullQuote, {
    name: "Wouter Berghuis",
    role: "Chef-kok en patissier",
    tone: "deep",
    align: "center"
  }, "In een restaurant kun je makkelijker improviseren, omdat je kleinere groepjes mensen tegelijk te eten geeft. Bij een grote groep werkt dat anders: dan moet alles tegelijk op tafel staan. Elk half uur een nieuw gerecht, voor honderdvijftig personen. Dat vergt een nauwkeurige voorbereiding."), /*#__PURE__*/React.createElement(TabbedDetail, {
    tone: "cream",
    kicker: "daarnaast",
    title: "Wat wij nog meer bieden",
    lead: "Kies uw uitgangspunt, dan stellen wij een arrangement op maat samen. Uw wensen zijn hierbij altijd leidend \u2014 wij leveren echt maatwerk.",
    items: [{
      label: 'Zakelijk',
      image: IMG.hapjes,
      body: 'Lunches, borrels en diners op de vergaderdag, of een volledig verzorgd bedrijfsfeest. Wij leveren ook op uw eigen locatie.'
    }, {
      label: 'Bruiloft',
      image: IMG.bruiloftTaart,
      body: 'Van de eerste toost tot de bruidstaart uit onze eigen patisserie, met een menu dat wij samen met u samenstellen.'
    }, {
      label: 'Particulier',
      image: IMG.scones,
      body: 'Een verjaardag, een jubileum of een high tea: scones, macarons en jams uit de eigen tuin.'
    }]
  }), /*#__PURE__*/React.createElement(ReviewRow, null), /*#__PURE__*/React.createElement(PageEnd, {
    page: "catering",
    tone: "sage",
    kicker: "op maat",
    title: "Voor uw gelegenheid",
    body: "Van een uitgebreid diner tot een borrel met streekproducten uit eigen tuin. Onze chef stelt graag een voorstel samen dat bij uw gelegenheid past.",
    onCta: () => onNavigate('Contact')
  }));
}
window.CateringScreen = CateringScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-catering.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-contact.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactScreen({
  onNavigate,
  focus
}) {
  /* Het formulier volgt het template templates/offerte-pagina — dat is de canonieke versie.
     Wijzig daar eerst, dan hier. */
  const [v, setV] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [akkoord, setAkkoord] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const set = f => e => {
    const value = e && e.target ? e.target.value : e;
    setV(s => ({
      ...s,
      [f]: value
    }));
    setErrors(s => {
      const n = {
        ...s
      };
      delete n[f];
      return n;
    });
  };
  const field = (name, extra) => Object.assign({
    name,
    value: v[name] || '',
    onChange: set(name),
    error: tried ? errors[name] : undefined
  }, extra || {});
  const verstuur = e => {
    e.preventDefault();
    const n = {};
    if (!v.voornaam) n.voornaam = 'Vul uw voornaam in.';
    if (!v.achternaam) n.achternaam = 'Vul uw achternaam in.';
    if (!v.email) n.email = 'Vul uw e-mailadres in.';else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) n.email = 'Dit adres lijkt niet te kloppen.';
    if (!v.gelegenheid) n.gelegenheid = 'Kies een gelegenheid, dan weten wij wie er meekijkt.';
    if (!akkoord) n.akkoord = 'U moet akkoord gaan voordat wij uw aanvraag mogen bewaren.';
    setErrors(n);
    setTried(true);
    setSent(Object.keys(n).length === 0);
  };
  const form = React.useRef(null);
  const token = focus && focus.n;
  React.useEffect(() => {
    // the navbar's OFFERTE button lands here; take the visitor straight to the form.
    // Runs on every click because `token` is fresh each time, and after a frame so the
    // parent's scroll-to-top for the new page has already happened.
    if (!focus || focus.why !== 'offerte') return;
    const id = requestAnimationFrame(() => {
      if (!form.current) return;
      const y = form.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: Math.max(0, y),
        behavior: 'smooth'
      });
    });
    return () => cancelAnimationFrame(id);
  }, [token]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.gazon,
    kicker: "even",
    title: "Kennismaken",
    height: 400
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CVertel ons wat u van plan bent\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "kom langs",
    title: "Voor een koffie",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen \u2014 maar ook natuurlijk lekker genieten van de kunst. Kijk rond in de galerie, loop de beeldentuin door en vertel ons wat u van plan bent.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.macarons,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.8fr 1.2fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: '0 0 var(--space-3)',
      fontWeight: 400
    }
  }, "Hoeve Rijlaarsdam"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, "Nieuwveenseweg 59"), /*#__PURE__*/React.createElement("div", null, "2421 LB Nieuwkoop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-body-strong)'
    }
  }, "info@hoeverijlaarsdam.nl"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-body-strong)'
    }
  }, "085 888 3211")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "outlineLight",
    size: "sm",
    onClick: () => onNavigate('Praktisch')
  }, "Bekijk de plattegrond"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineLight",
    size: "sm",
    onClick: () => onNavigate('Praktisch')
  }, "Route en parkeren")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-l)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: 'var(--space-6) 0 var(--space-3)',
      fontWeight: 400
    }
  }, "Neem contact op"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-body-strong)'
    }
  }, "Feesten en meetings"), /*#__PURE__*/React.createElement("div", null, "Roos Rijlaarsdam: 06 - 58 98 59 63"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-body-strong)',
      marginTop: 'var(--space-3)'
    }
  }, "Galerie & beeldentuin"), /*#__PURE__*/React.createElement("div", null, "Loekie Rijlaarsdam: 06 - 42 57 63 95"))), /*#__PURE__*/React.createElement("div", {
    ref: form,
    style: {
      background: 'var(--surface-deep)',
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "aanvragen",
    title: "Offerte",
    tone: "onDeep",
    size: "l"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-on-dark)',
      lineHeight: 'var(--lh-body)',
      margin: 'var(--space-5) 0'
    }
  }, "Laat uw gegevens achter en vertel kort wat u van plan bent. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken."), sent ? /*#__PURE__*/React.createElement(FormStatus, {
    title: "Dank u, uw aanvraag is verstuurd",
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "white",
      onClick: () => {
        setV({});
        setErrors({});
        setAkkoord(false);
        setTried(false);
        setSent(false);
      }
    }, "Nog een aanvraag")
  }, "Wij nemen binnen twee werkdagen contact met u op met een voorstel op maat. Heeft u haast? Bel Roos op 06 - 58 98 59 63.") : /*#__PURE__*/React.createElement("form", {
    noValidate: true,
    onSubmit: verstuur,
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, _extends({
    label: "Voornaam",
    required: true
  }, field('voornaam'))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "Achternaam",
    required: true
  }, field('achternaam')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, _extends({
    label: "E-mailadres",
    type: "email",
    required: true
  }, field('email'))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "Telefoonnummer",
    type: "tel"
  }, field('telefoon')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Select, _extends({
    label: "Gelegenheid",
    required: true
  }, field('gelegenheid', {
    options: ['Bruiloft', 'Bedrijfsfeest', 'Vergadering of training', 'Jubileum of verjaardag', 'Rondleiding galerie', 'Anders']
  }))), /*#__PURE__*/React.createElement(Select, _extends({
    label: "Aantal gasten"
  }, field('gasten', {
    options: ['1 \u2013 20', '20 \u2013 50', '50 \u2013 100', '100 \u2013 250']
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Select, _extends({
    label: "Ruimte",
    placeholder: "Nog geen voorkeur"
  }, field('ruimte', {
    options: [{
      value: 'koetshuis',
      label: 'Koetshuis \u2014 tot 250 gasten'
    }, {
      value: 'hooiberg',
      label: 'Hooiberg \u2014 tot 30 personen'
    }, {
      value: 'stal',
      label: 'Stal \u2014 besloten, tot 60 gasten'
    }, {
      value: 'atelier',
      label: 'Ontwikkelatelier \u2014 coaching en strategie'
    }]
  }))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "Gewenste datum",
    type: "date"
  }, field('datum')))), /*#__PURE__*/React.createElement(ChoiceGroup, {
    legend: "Welk dagdeel",
    columns: 3,
    value: v.dagdeel,
    onChange: set('dagdeel')
  }, ['Ochtend', 'Middag', 'Avond'].map(d => /*#__PURE__*/React.createElement(Choice, {
    key: d,
    type: "radio",
    name: "dagdeel",
    value: d,
    label: d
  }))), /*#__PURE__*/React.createElement(Input, _extends({
    label: "Uw aanvraag",
    multiline: true,
    rows: 3
  }, field('bericht'), {
    hint: "Datum, aantal gasten en gelegenheid helpen ons het meest."
  })), /*#__PURE__*/React.createElement(ChoiceGroup, {
    error: tried ? errors.akkoord : undefined
  }, /*#__PURE__*/React.createElement(Choice, {
    label: "Ik ga akkoord met de privacyverklaring",
    checked: akkoord,
    invalid: tried && !!errors.akkoord,
    onChange: e => {
      setAkkoord(e.target.checked);
      setErrors(s => {
        const n = {
          ...s
        };
        delete n.akkoord;
        return n;
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "gold",
    type: "submit"
  }, "Versturen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label-s)',
      color: 'var(--sage-200)'
    }
  }, "Wij reageren binnen twee werkdagen.")))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "meer",
    title: "Handig om te weten",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "70ch"
  }, "Route, parkeren, openingstijden en tarieven staan bij elkaar op de praktische pagina. Wilt u eerst zien hoe het erf eruitziet, loop dan de plattegrond door."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Praktisch')
  }, "Praktische informatie"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Praktisch')
  }, "Plattegrond")))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "contact",
    tone: "sage",
    kicker: "van harte",
    title: "Welkom",
    body: "Loop gerust een keer binnen om de plek te zien. Bellen mag ook \u2014 dan weet u binnen vijf minuten of het past.",
    ctaLabel: "Vraag offerte aan",
    onCta: () => onNavigate('Contact')
  }));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-galerie.jsx
try { (() => {
function GalerieScreen({
  view = 'Galerie',
  onNavigate
}) {
  const d = CONTENT.galerie[view];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG[d.hero],
    kicker: d.kicker,
    title: d.title,
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201C", d.quote, "\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: view === 'Galerie' ? 'over de' : 'over',
    title: view === 'Galerie' ? 'Collectie' : 'De beeldentuin',
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, d.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Contact')
  }, "Plan een bezoek"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate(view === 'Galerie' ? 'Beeldentuin' : 'Galerie')
  }, view === 'Galerie' ? 'Naar de beeldentuin' : 'Naar de galerie'))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[d.photo],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), view === 'Galerie' && /*#__PURE__*/React.createElement(TabbedDetail, {
    tone: "sage",
    kicker: "drie",
    title: "Expositieruimtes",
    lead: "Elke ruimte heeft zijn eigen karakter, en daarmee zijn eigen werk aan de wand.",
    items: CONTENT.expositieruimtes.map(o => ({
      label: o.label,
      image: IMG[o.img],
      body: o.body
    }))
  }), /*#__PURE__*/React.createElement(Section, {
    background: view === 'Galerie' ? undefined : 'var(--surface-sage)',
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "te doen",
    title: "Wat u hier kunt doen",
    align: "center",
    size: "l",
    tone: view === 'Galerie' ? undefined : 'onSage',
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.workshop,
    caption: "Schilderworkshop",
    tone: view === 'Galerie' ? 'light' : 'onSage',
    body: "Onder begeleiding zelf aan het werk, tussen de collectie."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.beeldentuinVogel,
    caption: "Rondleiding",
    tone: view === 'Galerie' ? 'light' : 'onSage',
    body: "Op afspraak nemen wij u mee langs de collectie en de tuin."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.macarons,
    caption: "Theehuis De Hooiberg",
    tone: view === 'Galerie' ? 'light' : 'onSage',
    body: "Koffie en gebak op het terras, met weids uitzicht over de polder."
  }))), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "deep",
    name: "Loekie Rijlaarsdam",
    role: "Galerie en beeldentuin"
  }, "Kunst hoort niet achter glas te staan. Bij ons loopt u er langs met een kop koffie in de hand."), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wanneer u",
    title: "Welkom bent",
    size: "l"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, [['Maandag t/m donderdag', 'op afspraak'], ['Vrijdag en zaterdag', '11.00 - 17.00 uur'], ['Zondag', '13.00 - 17.00 uur']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--space-5)',
      padding: '11px 0',
      borderBottom: '1px solid rgba(22,25,26,.1)',
      fontSize: 'var(--fs-body-m)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-900)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "Bij besloten evenementen kan de galerie gesloten zijn. Bel Loekie op 06 - 42 57 63 95 als u het zeker wilt weten.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hoeve,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "galerie",
    tone: "sage",
    kicker: "kunst en",
    title: "Gastvrijheid onder \xE9\xE9n dak",
    body: "Wilt u de galerie of de beeldentuin afhuren voor een besloten bezoek of een evenement? Laat uw gegevens achter, dan denken wij met u mee.",
    onCta: () => onNavigate('Contact')
  }));
}
window.GalerieScreen = GalerieScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-galerie.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-home.jsx
try { (() => {
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SplitHero, {
    offset: 64,
    ampersandSrc: IMG.swirl,
    caption: /*#__PURE__*/React.createElement(React.Fragment, null, "\u201CDaar waar hospitality een kunstvorm is!\u201D"),
    onScrollHint: () => window.scrollBy({
      top: window.innerHeight - 64,
      behavior: 'smooth'
    }),
    items: [{
      label: 'Art',
      ctaLabel: 'Galerie',
      image: IMG.koetshuisExpo,
      onSelect: () => onNavigate('Galerie')
    }, {
      label: 'Events',
      ctaLabel: 'Mogelijkheden',
      image: IMG.lounge,
      onSelect: () => onNavigate('Zakelijk')
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "van harte",
    title: "Welkom",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "78ch"
  }, "Op zoek naar een landelijke, sfeervolle, unieke evenementenlocatie in Nieuwkoop? Wat dacht u van een oude boerderij met beeldentuin, middenin de idyllische polder? Al 32 jaar een galerie met een beeldentuin van twee hectare \u2014 en sinds enkele jaren ook uw evenementenlocatie, binnen en buiten.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.koetshuisBijeenkomst,
    caption: "Zakelijk",
    ratio: "4 / 5",
    href: "#Zakelijk",
    body: "Vergaderen, congressen en bedrijfsfeesten."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.gazon,
    caption: "De Hoeve",
    ratio: "4 / 5",
    href: "#Praktisch",
    body: "Vier zalen, een galerie en twee hectare beeldentuin."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.bruiloftTaart,
    caption: "Particulier",
    ratio: "4 / 5",
    href: "#Particulier",
    body: "Bruiloften, verjaardagen en jubilea."
  }))), /*#__PURE__*/React.createElement(TabbedDetail, {
    tone: "sage",
    kicker: "wij verzorgen",
    title: "Het geheel",
    lead: "Een compleet event, inclusief horeca en aankleding. Onbespoten vruchten uit eigen tuin verwerken wij in onze arrangementen, jams en likeuren \u2014 laat het ons tot in de puntjes regelen.",
    items: [{
      label: 'Catering',
      title: 'Uit eigen keuken',
      image: IMG.voorgerecht,
      body: 'Onze eigen chef kookt met wat het seizoen geeft. Van een boerenlunch tot een walking dinner tussen de kunst — en de bruidstaart uit de eigen patisserie.',
      ctaLabel: 'Naar catering',
      onCta: () => onNavigate('Catering')
    }, {
      label: 'Hospitality',
      title: 'Ook bij u op locatie',
      image: IMG.bediening,
      body: 'Gastvrouwen, gastheren en een chef die met het hele team naar uw eigen locatie komen, met draaiboek en aansturing op de dag.',
      ctaLabel: 'Naar hospitality',
      onCta: () => onNavigate('Hospitality')
    }, {
      label: 'Beeldentuin',
      title: 'Twee hectare kunst',
      image: IMG.beeldentuinVogels,
      body: 'Al tweeëndertig jaar een galerie met bronzen beelden tussen de hagen. Uw gasten lopen er tussen de gangen door zo naar binnen.',
      ctaLabel: 'Naar de galerie',
      onCta: () => onNavigate('Galerie')
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "vier",
    title: "Ruimtes",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "74ch"
  }, "Van een besloten overleg in het Ontwikkelatelier tot 250 gasten in het Koetshuis. Elke zaal is vrij in te delen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, ['Koetshuis', 'Hooiberg', 'Stal', 'Ontwikkelatelier'].map(r => /*#__PURE__*/React.createElement(RoomCard, {
    key: r,
    image: IMG[CONTENT.ruimtes[r].hero],
    caption: r,
    ratio: "4 / 3",
    meta: CONTENT.ruimtes[r].meta,
    onReadMore: () => onNavigate(r)
  })))), /*#__PURE__*/React.createElement(ReviewRow, null), /*#__PURE__*/React.createElement(PageEnd, {
    page: "home",
    tone: "sage",
    kicker: "de plek",
    title: "Waar alles samenkomt",
    body: "Een vergadering die eindigt bij een borrel in de beeldentuin. Een bruiloft tussen de kunst. Een verjaardag in de knusse Hooiberg. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken.",
    onCta: () => onNavigate('Contact')
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-hospitality.jsx
try { (() => {
function HospitalityScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.bediening,
    kicker: "wij komen",
    title: "Hospitality op locatie",
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CDaar waar hospitality een kunstvorm is!\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "oprechte",
    title: "Gastvrijheid",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Hospitality is m\xE9\xE9r waarde en meerwaarde cre\xEBren met oprechte gastvrijheid. Onze dames en heren vinden het dan ook geweldig om hun kwaliteiten en glimlach op andere evenementen te laten zien. Of het nu een zakelijk event betreft, een private diner waar extra mensen bij nodig zijn of ondersteuning op een groter evenement.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.gastvrouwen,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "inzet",
    title: "Waar u ons kunt inzetten",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '74ch',
      margin: 'var(--space-5) auto 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--white)'
    }
  }, "Wij nemen het voor u uit handen \u2014 zowel het culinaire gedeelte als de aankleding van het evenement kunt u aan ons overlaten.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.koetshuisBijeenkomst,
    caption: "Zakelijke events",
    readMoreLabel: "Plan een gesprek",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.bruiloftTafel,
    caption: "Private dining",
    readMoreLabel: "Plan een gesprek",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.koetshuisFeest,
    caption: "Grote evenementen",
    readMoreLabel: "Plan een gesprek",
    onReadMore: () => onNavigate('Contact')
  }))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.hapjes,
    imageSide: "right",
    ratio: "4 / 3",
    background: "var(--surface-cream)"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "wat wij",
    title: "Meebrengen",
    items: ['Gastvrouwen en gastheren', 'Chef en keukenbrigade', 'Volledige mise en place', 'Aankleding en styling', 'Bar en tapinstallatie', 'Servies, glaswerk en linnen', 'Streekproducten en eigen tuin', 'Draaiboek en aansturing op de dag']
  })), /*#__PURE__*/React.createElement(TabbedDetail, {
    kicker: "voor welke",
    title: "Gelegenheid",
    lead: "Vertel ons waar en wanneer, dan stellen wij het team en het menu samen. Uw wensen zijn hierbij altijd leidend \u2014 wij leveren echt maatwerk.",
    items: [{
      label: 'Zakelijk',
      image: IMG.bediening,
      body: 'Gastvrouwen, gastheren en een chef op uw eigen locatie, met draaiboek en aansturing op de dag.'
    }, {
      label: 'Private dining',
      image: IMG.bruiloftTafel,
      body: 'Een volledig verzorgd diner voor een select gezelschap, inclusief mise en place, servies, glaswerk en linnen.'
    }, {
      label: 'Kerst en jubilea',
      image: IMG.koetshuisFeest,
      body: 'Grootschalige feesten waarbij iedereen verwend mag worden — van de bar tot de styling.'
    }]
  }), /*#__PURE__*/React.createElement(ReviewRow, {
    background: "var(--surface-cream)"
  }), /*#__PURE__*/React.createElement(PageEnd, {
    page: "hospitality",
    tone: "sage",
    kicker: "op locatie",
    title: "Wij komen naar u toe",
    body: "Een private diner voor relaties of een grootschalig kerstfeest waarbij iedereen verwend mag worden. Wij worden enorm geprikkeld om bijzondere belevingen op maat te maken.",
    onCta: () => onNavigate('Contact')
  }));
}
window.HospitalityScreen = HospitalityScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-hospitality.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-overons.jsx
try { (() => {
function OverOnsScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.hoeve,
    kicker: "over ons",
    title: "Wie wij zijn",
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CDaar waar hospitality een kunstvorm is!\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "een boerderij",
    title: "Met vier gezichten",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Wat begon als een boerderij in de polder is inmiddels vier dingen tegelijk: een evenementenlocatie met vier ruimtes, een kunstgalerij met beeldentuin, een keuken met een eigen chef, en een team gastvrouwen en gastheren dat ook buiten de deur werkt. U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen, maar ook natuurlijk lekker genieten van de kunst.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.gazon,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "uw vaste",
    title: "Aanspreekpunten",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Geen callcenter en geen algemeen formulier: u belt de persoon die uw dag ook daadwerkelijk regelt.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)',
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, CONTENT.team.map(p => /*#__PURE__*/React.createElement(PersonCard, {
    key: p.name,
    image: IMG[p.img],
    name: p.name,
    role: p.role,
    phone: p.phone
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) auto 0',
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: '62ch'
    }
  }, "Gaat uw vraag over de galerie of de beeldentuin? Dan belt u Loekie Rijlaarsdam op 06 - 42 57 63 95 \u2014 zij gaat over de collectie en de exposities.")), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "sage",
    align: "center"
  }, "Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken. Wij luisteren aandachtig naar uw wensen en idee\xEBn."), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.bediening,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "op locatie",
    title: "Onze gastvrouwen bij u",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Onze gastvrouwen en gastheren zijn een groot deel van waarom gasten terugkomen. Daarom laten wij hun kwaliteiten en glimlach ook graag op andere evenementen zien \u2014 zakelijk, een private diner waar extra mensen bij nodig zijn, of ondersteuning op grotere evenementen. Hoeve Rijlaarsdam komt naar u toe."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Hospitality')
  }, "Lees meer"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "ons",
    title: "Team",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch",
    tone: "dark"
  }, "Een aantal van onze gastvrouwen en gastheren is los te boeken voor uw evenement, op uw locatie.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, [['Gastvrouw', 'gastvrouwen'], ['Gastheer', 'bediening'], ['Barman', 'bar'], ['Souschef', 'hapjes']].map(([r, img]) => /*#__PURE__*/React.createElement(PersonCard, {
    key: r,
    tone: "onSage",
    image: IMG[img],
    name: r,
    onBook: () => onNavigate('Contact')
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) auto 0',
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--cream-100)',
      maxWidth: '62ch'
    }
  }, "Ons team wisselt per evenement. Vertelt u ons wat u nodig heeft, dan stellen wij de ploeg samen die bij uw dag past.")), /*#__PURE__*/React.createElement(PageEnd, {
    page: "overons",
    tone: "cream",
    kicker: "goed",
    title: "Bereikbaar",
    body: "Bel ons, mail ons, of kom langs voor een kop koffie. Wij vertellen graag wat er mogelijk is.",
    onCta: () => onNavigate('Contact')
  }));
}
window.OverOnsScreen = OverOnsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-overons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-particulier.jsx
try { (() => {
/* Particulier — feesten, verjaardagen, jubilea. Een condoleance heeft een eigen, stillere
   pagina (screen-afscheid.jsx); die stond hier als één sectie op een pagina die "Vrolijke
   feesten" heet, en dat klopte tonaal niet. */
function ParticulierScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.koetshuisFeest,
    kicker: "vrolijke",
    title: "Feesten",
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CWij zijn gek op feestjes\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "uw feest",
    title: "Volledig op maat",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, "U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen, maar ook natuurlijk lekker genieten van de kunst. Wat u ook viert: uw wensen zijn leidend, en wij leveren daarmee echt maatwerk.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.bruiloftCeremonie,
    caption: "Bruiloften",
    body: "Trouwen tussen de kunst, met de polder als achtergrond.",
    ratio: "4 / 5",
    href: "#Bruiloft"
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.koetshuisFeest,
    caption: "Feesten",
    body: "Van besloten diner tot groot feest met live muziek.",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.zoetBuffet,
    caption: "High tea",
    body: "Zoet uit eigen keuken, met jams uit de eigen tuin.",
    ratio: "4 / 5"
  }))), /*#__PURE__*/React.createElement(TabbedDetail, {
    tone: "sage",
    kicker: "te vieren",
    title: "Wat viert u bij ons",
    items: CONTENT.gelegenheden.map(o => ({
      label: o.label,
      title: o.title,
      image: IMG[o.img],
      body: o.body,
      ctaLabel: 'Vraag offerte aan',
      onCta: () => onNavigate('Contact')
    }))
  }), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.bar,
    ratio: "4 / 3",
    background: "var(--surface-cream)"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "wij regelen",
    title: "Het geheel",
    items: ['Zaal naar keuze, indeling vrij', 'Menu van onze eigen chef', 'Bruidstaart en patisserie', 'Gastvrouwen en gastheren', 'Bar met eigen cocktails', 'Styling en tafeldecoratie', 'Live muziek of DJ', 'Rondleiding door de galerie', 'Gratis parkeren, circa 60 auto\u2019s', 'Eén aanspreekpunt van begin tot eind'],
    style: {
      margin: '0 -40px 0 0'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "met liefde",
    title: "Gemaakt",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Alles komt uit onze eigen keuken. Onze chef werkt met wat het seizoen geeft en met de kruiden en het fruit uit onze eigen tuin. Bitterballen geserveerd op een schilderspalet, met mosterd in verschillende kleuren \u2014 omdat het kan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Catering')
  }, "Onze keuken"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Hospitality')
  }, "Catering op locatie"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hapjes,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.water,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "afscheid nemen",
    title: "Van een dierbare",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Afscheid nemen van een dierbare went nooit. Bij ons kan een condoleance in besloten kring plaatsvinden, in de Stal of het Koetshuis. Wij houden de locatie die dag voor u alleen, en \xE9\xE9n van ons is er de hele tijd bij."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Afscheid')
  }, "Over een afscheid"))))), /*#__PURE__*/React.createElement(PullQuote, {
    portrait: IMG.lounge,
    tone: "sage",
    name: "Uit een reactie van een gast"
  }, "Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd."), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen en antwoorden",
    align: "center",
    size: "l",
    tone: "onDeep"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    items: [{
      question: 'Hoeveel gasten kunnen wij uitnodigen?',
      answer: 'In het Koetshuis tot 250 gasten. De Hooiberg boven is er voor groepen tot 30 personen, en in de Stal past een besloten gezelschap.'
    }, {
      question: 'Tot hoe laat mag het feest doorgaan?'
    }, {
      question: 'Kunnen wij eigen muziek of een DJ meenemen?'
    }, {
      question: 'Verzorgen jullie ook de taart?'
    }, {
      question: 'Is de galerie open tijdens ons feest?'
    }, {
      question: 'Kunnen wij eerst langskomen om te kijken?'
    }]
  })), /*#__PURE__*/React.createElement(PageEnd, {
    page: "particulier",
    tone: "sage",
    kicker: "uw droomfeest",
    title: "Volledig op maat",
    body: "Vertel ons wat u viert, dan gaan wij graag met u rond de tafel \u2014 onder het genot van een kop koffie.",
    onCta: () => onNavigate('Contact')
  }));
}
window.ParticulierScreen = ParticulierScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-particulier.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-popup.jsx
try { (() => {
function PopupScreen({
  onNavigate
}) {
  const programma = ['Ontvangst door een van onze gastvrouwen', 'Een bubbeltje om mee te beginnen', 'Uw plaats tussen de kunstwerken', 'Vier gangen uit de open keuken', 'Verhalen van kunstenaars tussen de gangen', 'Live achtergrondmuziek', 'Lunchshift of dinershift'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.voorgerecht,
    kicker: "een avond",
    title: "Pop-uprestaurant",
    height: 420
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CBeleef Hoeve Rijlaarsdam eens op een andere manier\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "culinaire",
    title: "Belevenis",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Laat u verrassen voor een middag of avond uit. Op deze dagen serveren wij zowel een viergangenlunch als een viergangendiner, met per shift maximaal dertig personen \u2014 geheel exclusief dus. Chef Wouter Berghuis bereidt de gerechten stuk voor stuk in de open keuken, waar u uiteraard een kijkje kunt nemen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.chef,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, /*#__PURE__*/React.createElement(InfoTile, {
    caption: "inside",
    title: "Vier gangen",
    body: "Een menu dat wij speciaal voor deze dagen samenstellen, uit de open keuken."
  }), /*#__PURE__*/React.createElement(InfoTile, {
    caption: "inside",
    title: "Maximaal 30 gasten",
    body: "Per shift dertig personen, aan tafels tussen de kunstwerken. Geheel exclusief."
  }), /*#__PURE__*/React.createElement(InfoTile, {
    caption: "inside",
    title: "Lunch of diner",
    body: "Kies de middagshift of de avondshift; voor groepen maken wij een eigen arrangement."
  }))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.koetshuisExpo,
    ratio: "4 / 3",
    background: "var(--surface-cream)"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "zo verloopt",
    title: "De avond",
    items: programma
  })), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "een tafel",
    title: "Reserveren",
    align: "center",
    size: "l",
    tone: "onDeep"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      margin: 'var(--space-5) auto var(--space-6)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-dark)'
    }
  }, "Bent u ook enthousiast geworden? Bel ons op 06 - 58 98 59 63 of laat uw gegevens achter. Voor groepsarrangementen nemen wij graag apart de tijd."), /*#__PURE__*/React.createElement(Button, {
    tone: "white",
    onClick: () => onNavigate('Contact')
  }, "Reserveer een tafel"))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "bekijk ook",
    title: "Andere avonden",
    align: "center",
    size: "l",
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.flatlay,
    caption: "Wijnproeverij",
    readMoreLabel: "Reserveer",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.hapjes,
    caption: "Walking dinner",
    readMoreLabel: "Reserveer",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.scones,
    caption: "High tea",
    readMoreLabel: "Reserveer",
    onReadMore: () => onNavigate('Contact')
  }))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "popup",
    tone: "cream",
    kicker: "onthouden",
    title: "Een avond om nooit te vergeten",
    body: "Vier gangen tussen de kunstwerken, met maximaal dertig gasten per avond. Reserveer telefonisch of laat uw gegevens achter.",
    onCta: () => onNavigate('Contact')
  }));
}
window.PopupScreen = PopupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-popup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-praktisch.jsx
try { (() => {
/* Praktisch — adres, plattegrond, bereikbaarheid, tarieven en FAQ.
   Locatie is hierin opgegaan: die pagina toonde hetzelfde adres, dezelfde route en dezelfde
   openingstijden, met alleen de plattegrond als eigen inhoud. */
function PraktischScreen({
  onNavigate
}) {
  /* Coördinaten horen bij de ISOMETRISCHE kaart (assets/map-iso.png): de punten staan op de nok
     van elk volume. Ze gelden niet voor de vlakke plattegrond — die heeft een eigen set. */
  const spots = [{
    name: 'Woonhuis',
    x: 69.56,
    y: 25.12,
    w: 2.8,
    h: 3.8,
    image: IMG.hoeve,
    body: 'Het monumentale voorhuis aan de Nieuwveenseweg. Hier vindt u ons kantoor.'
  }, {
    name: 'De Stal',
    x: 64.65,
    y: 35.2,
    w: 2.8,
    h: 3.8,
    image: IMG.stal,
    body: 'Ruim 110 jaar oud, nu expositieruimte en zaal voor 60 gasten.',
    href: 'Stal'
  }, {
    name: 'De Hooiberg',
    x: 55.46,
    y: 43.75,
    w: 2.8,
    h: 3.8,
    image: IMG.hooiberg,
    body: 'De vijfhoekige berg; boven plaats voor maximaal 30 gasten.',
    href: 'Hooiberg'
  }, {
    name: 'Het Koetshuis',
    x: 65.79,
    y: 48.39,
    w: 2.8,
    h: 3.8,
    side: 'left',
    image: IMG.koetshuisFeest,
    body: 'De grote zaal met eigen entree en bar, tot 250 gasten.',
    href: 'Koetshuis'
  }, {
    name: 'Ontwikkelatelier',
    x: 55.44,
    y: 57.58,
    w: 2.8,
    h: 3.8,
    side: 'left',
    image: IMG.atelier,
    body: 'De oude lijstenmakerij, nu atelier en werkruimte voor kleine groepen.',
    href: 'Ontwikkelatelier'
  }, {
    name: 'Beeldentuin',
    x: 34.33,
    y: 32.54,
    w: 2.8,
    h: 3.8,
    image: IMG.beeldentuinVogels,
    body: 'Bronzen beelden tussen de hagen, de boomgaard en het water.',
    href: 'Beeldentuin'
  }, {
    name: 'Parkeren',
    x: 41.8,
    y: 69.35,
    w: 2.8,
    h: 3.8,
    side: 'left',
    body: 'Ruim eigen terrein direct naast de zalen. Gratis, geen reservering nodig.'
  }, {
    name: 'Water',
    x: 24.39,
    y: 40.04,
    w: 2.8,
    h: 3.8,
    image: IMG.water,
    body: 'De sloot langs het voorhuis loopt uit op de vijver bij de entree.'
  }];
  const rows = items => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--space-5)',
      padding: '12px 0',
      borderBottom: '1px solid rgba(22,25,26,.1)',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-900)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      textAlign: 'right'
    }
  }, b))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.gazon,
    kicker: "alles",
    title: "Praktisch",
    height: 400
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "Nieuwveenseweg 59, Nieuwkoop \u2014 twintig minuten van Leiden en Alphen"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "adres",
    title: "Waar u ons vindt",
    size: "l"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, rows([['Adres', 'Nieuwveenseweg 59'], ['Plaats', '2421 LB Nieuwkoop'], ['Feesten en meetings', '085 888 3211'], ['Galerie en beeldentuin', '06 - 42 57 63 95'], ['E-mail', 'info@hoeverijlaarsdam.nl']])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    href: "https://maps.google.com/?q=Nieuwveenseweg+59+Nieuwkoop"
  }, "Routebeschrijving"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wanneer wij",
    title: "Open zijn",
    size: "l"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, rows([['Galerie, maandag t/m donderdag', 'op afspraak'], ['Galerie, vrijdag en zaterdag', '11.00 - 17.00 uur'], ['Galerie, zondag', '13.00 - 17.00 uur'], ['Evenementen', 'in overleg, ook \u2019s avonds']])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "Bij een besloten evenement kan de galerie gesloten zijn. Belt u vooraf even als u speciaal voor de collectie komt.")))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "het erf",
    title: "Van bovenaf",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, "Vier zalen, een galerie en een beeldentuin op \xE9\xE9n erf. Kies een plek op de kaart of in de lijst om te zien wat waar zit.")), /*#__PURE__*/React.createElement(SitePlan, {
    image: "../../assets/map-iso.png",
    spots: spots,
    title: "Het erf, van bovenaf",
    onSelect: s => s.href && onNavigate(s.href),
    style: {
      marginTop: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)'
    }
  }, "Goud zijn de boekbare ruimtes, donker het woonhuis en het bijgebouw. Deze kaart is opgebouwd uit de werkplattegrond van het erf; hoogtes en dakvlakken zijn een schatting.")), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "route",
    title: "Hoe u ons bereikt",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, [{
    caption: 'Met de auto',
    image: IMG.hoeve,
    body: 'Vanaf de A4 afslag Nieuwkoop, daarna de N231. Ruim eigen parkeerterrein naast de zalen, gratis en zonder reservering.'
  }, {
    caption: 'Met openbaar vervoer',
    image: IMG.water,
    body: 'Buslijn 147 vanaf station Alphen aan den Rijn stopt op vijf minuten lopen. Vanaf Leiden Centraal bent u er in een half uur.'
  }, {
    caption: 'Met de boot',
    image: IMG.lounge,
    body: 'De hoeve ligt aan het water van de Nieuwkoopse Plassen. Aanleggen kan op afspraak; vraag ernaar bij uw aanvraag.'
  }].map(t => /*#__PURE__*/React.createElement("div", {
    key: t.caption
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginTop: 'var(--space-5)'
    }
  }, t.caption), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, t.body))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "handig",
    title: "Goed om te weten",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, [['Parkeren', 'Gratis op eigen terrein, circa 60 auto\u2019s. Bij grote bijeenkomsten komen er aangrenzend 50 plaatsen bij.'], ['Toegankelijkheid', 'De locatie is grotendeels rolstoelvriendelijk. Laat het ons weten, dan houden wij er bij de indeling rekening mee.'], ['Besloten dagen', 'Bij een besloten evenement is de galerie gesloten. Belt u vooraf als u speciaal voor de collectie komt.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "tarieven",
    title: "Huur van de vergaderlocatie",
    align: "center",
    size: "l",
    tone: "onDeep"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '74ch',
      margin: 'var(--space-5) auto 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-dark)'
    }
  }, PRIJZEN.inbegrepen, " Tarieven voor feesten, bruiloften en de galerie op aanvraag.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Zaalhuur",
    tone: "onDeep",
    items: PRIJZEN.zaalhuur,
    note: PRIJZEN.btwNoot
  }), /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Extra\u2019s",
    tone: "onDeep",
    items: PRIJZEN.extras
  }))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen en antwoorden",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    tone: "onLight",
    items: FAQ_ITEMS
  })), /*#__PURE__*/React.createElement(PageEnd, {
    page: "praktisch",
    tone: "sage",
    kicker: "welkom",
    title: "Kom eens langs",
    body: "Wij laten u het erf graag zien voordat u kiest. Een rondleiding duurt een half uur en is vrijblijvend.",
    onCta: () => onNavigate('Contact')
  }));
}
window.PraktischScreen = PraktischScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-praktisch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-ruimte.jsx
try { (() => {
const SETUP_ICON = Object.fromEntries(Object.entries({
  'Theater': 'theater',
  'Cabaret': 'cabaret',
  'School': 'school',
  'U-vorm': 'u-vorm',
  'Carré': 'carre',
  'Diner': 'banket',
  'Private dining': 'banket',
  'Wijnproeverij': 'banket',
  'Receptie': 'receptie',
  'Ontvangst': 'receptie',
  'Netwerkborrel': 'receptie',
  'Borrel na het diner': 'receptie',
  'Verjaardag': 'feest',
  'Expositie': 'feest',
  'Vergadering': 'bestuurstafel',
  'Bestuursoverleg': 'bestuurstafel',
  'Bestuurssessie': 'bestuurstafel',
  'Meeting': 'bestuurstafel',
  'Coaching': 'bestuurstafel',
  'Eén-op-één': 'bestuurstafel',
  'Eiland': 'cabaret',
  'Workshop': 'carre',
  'Training': 'school',
  'Brainstorm': 'carre',
  'Strategiesessie': 'carre'
}).map(([k, v]) => [k, '../../assets/icons/opstelling-' + v + '.svg']));
function RuimteScreen({
  room = 'Koetshuis',
  onNavigate
}) {
  const d = CONTENT.ruimtes[room] || CONTENT.ruimtes['Koetshuis'];
  const others = Object.keys(CONTENT.ruimtes).filter(r => r !== room);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG[d.hero],
    kicker: d.kicker,
    title: d.title,
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201C", d.quote, "\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "handige",
    title: "Informatie",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, d.lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[d.photo],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG[d.panel],
    ratio: "4 / 3"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "alle",
    title: "Faciliteiten",
    items: d.facts,
    style: {
      margin: '0 -40px 0 0'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "oneindig",
    title: d.setupsTitle,
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, d.setupsLead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, d.setups.map(n => /*#__PURE__*/React.createElement(InfoTile, {
    key: n,
    icon: SETUP_ICON[n],
    title: n,
    body: CONTENT.opstellingen[n]
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat kost",
    title: "Een dag hier",
    align: "center",
    size: "l",
    tone: "onDeep"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Zaalhuur",
    tone: "onDeep",
    items: PRIJZEN.zaalhuur,
    note: PRIJZEN.btwNoot
  }), /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Extra\u2019s",
    tone: "onDeep",
    items: PRIJZEN.extras
  }))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen en antwoorden",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    tone: "onLight",
    items: FAQ_ITEMS
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "bekijk ook",
    title: "Andere ruimtes",
    align: "center",
    size: "l",
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, others.map(r => /*#__PURE__*/React.createElement(RoomCard, {
    key: r,
    image: IMG[CONTENT.ruimtes[r].hero],
    caption: r,
    meta: CONTENT.ruimtes[r].meta,
    onReadMore: () => onNavigate(r)
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "en verder",
    title: "Bij deze zaal",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Een zaal is het begin. Het eten komt uit onze eigen keuken, en voor een vergaderdag of bedrijfsfeest regelen wij het hele programma."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Catering')
  }, "Catering uit eigen keuken"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Zakelijk')
  }, "Zakelijk bij ons"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Praktisch')
  }, "Route en parkeren")))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "ruimte",
    tone: "sage",
    kicker: "landelijk",
    title: "Waar alles samenkomt",
    body: "U mag de locatie altijd vrijblijvend komen bezichtigen. Wij gaan graag met u rond de tafel \u2014 onder het genot van een kop koffie.",
    onCta: () => onNavigate('Contact')
  }));
}
window.RuimteScreen = RuimteScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-ruimte.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-zakelijk.jsx
try { (() => {
/* Zakelijk — meetings, congressen, workshops, bedrijfsfeesten.
   Alle bedragen komen uit prijzen.jsx; typ hier nooit een prijs. */

function ZakelijkScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.koetshuisBijeenkomst,
    kicker: "landelijk",
    title: "Vergaderen",
    height: 440
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CEven weg van de stad, zonder een uur te rijden\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "ruimte voor",
    title: "Uw bijeenkomst",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Een monumentale boerderij op twintig minuten van Amsterdam en Utrecht, met vier zalen, twee hectare beeldentuin en een eigen keuken. Vergaderen tussen de kunst werkt anders dan vergaderen in een zaaltje langs de snelweg \u2014 en dat is precies de bedoeling."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"), /*#__PURE__*/React.createElement(Button, {
    tone: "outlineDark",
    onClick: () => onNavigate('Praktisch')
  }, "Praktische informatie"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hooibergFlipover,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "waarvoor",
    title: "U bij ons terecht kunt",
    align: "center",
    size: "l",
    tone: "onSage"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.hooibergFlipover,
    caption: "Vergaderen",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Hooiberg')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.koetshuisBijeenkomst,
    caption: "Grote bijeenkomsten",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Koetshuis')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.workshop,
    caption: "Workshops",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    tone: "onSage",
    image: IMG.koetshuisFeest,
    caption: "Bedrijfsfeesten",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Particulier')
  }))), /*#__PURE__*/React.createElement(TabbedDetail, {
    kicker: "welke ruimte",
    title: "Past bij u?",
    items: CONTENT.zakelijkeRuimtes.map(o => ({
      label: o.label,
      title: o.title,
      image: IMG[o.img],
      body: o.body,
      ctaLabel: 'Naar ' + o.label,
      onCta: () => onNavigate(o.label)
    }))
  }), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.workshop,
    ratio: "4 / 3",
    imageSide: "right"
  }, /*#__PURE__*/React.createElement(BenefitsPanel, {
    kicker: "inclusief",
    title: "Bij elke zaal",
    items: ['75-inch tv-scherm', 'Flip-over en vergaderbox', 'Gratis wifi', 'Gratis parkeren, circa 60 auto\u2019s', 'Koffie en thee uit eigen keuken', 'Eén aanspreekpunt de hele dag', 'Rondleiding door de galerie', 'Twee hectare tuin om in te lopen'],
    style: {
      margin: '0 0 0 -40px'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "persoonlijke",
    title: "Arrangementen",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "70ch"
  }, "Drie uitgangspunten voor een vergaderdag. Alles is aan te passen \u2014 uw wensen zijn leidend, wij leveren echt maatwerk.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, PRIJZEN.arrangementen.map(({
    naam,
    duur,
    amount,
    tekst
  }) => /*#__PURE__*/React.createElement("div", {
    key: naam,
    style: {
      background: 'var(--white)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, duur), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--ink-900)'
    }
  }, naam), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--green-700)'
    }
  }, amount), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-500)'
    }
  }, tekst)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gap-grid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-deep)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Zaalhuur",
    tone: "onDeep",
    items: PRIJZEN.zaalhuur,
    note: PRIJZEN.btwNoot
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PriceList, {
    kicker: "Extra\u2019s",
    items: PRIJZEN.extras
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.workshop,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "creatieve",
    title: "Workshops",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Schilderen of beeldhouwen met een gerenommeerd kunstenaar, of schapen hoeden met de boer als teambuildingsdag. Te combineren met de catering van de hoeve, zodat de dag in \xE9\xE9n keer geregeld is."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"))))), /*#__PURE__*/React.createElement(PullQuote, {
    portrait: IMG.koetshuisRondleiding,
    tone: "deep",
    name: "Uit een reactie van een opdrachtgever"
  }, "Alles was tot in de puntjes verzorgd \u2014 wij hoefden alleen te bedenken wat we wilden."), /*#__PURE__*/React.createElement(PageEnd, {
    page: "zakelijk",
    tone: "sage",
    kicker: "wij denken",
    title: "Graag met u mee",
    body: "Vertel ons wat de dag moet opleveren, dan stellen wij het programma, de zaal en het menu samen.",
    onCta: () => onNavigate('Contact')
  }));
}
window.ZakelijkScreen = ZakelijkScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-zakelijk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BenefitsPanel = __ds_scope.BenefitsPanel;

__ds_ns.ImageCaptionCard = __ds_scope.ImageCaptionCard;

__ds_ns.InfoTile = __ds_scope.InfoTile;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.RoomCard = __ds_scope.RoomCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CarouselNav = __ds_scope.CarouselNav;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.ChoiceGroup = __ds_scope.ChoiceGroup;

__ds_ns.FormStatus = __ds_scope.FormStatus;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TabPills = __ds_scope.TabPills;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroVideo = __ds_scope.HeroVideo;

__ds_ns.SplitPanel = __ds_scope.SplitPanel;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.PageOutro = __ds_scope.PageOutro;

__ds_ns.PhotoCarousel = __ds_scope.PhotoCarousel;

__ds_ns.PriceList = __ds_scope.PriceList;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.QuoteBar = __ds_scope.QuoteBar;

__ds_ns.WinterLockup = __ds_scope.WinterLockup;

__ds_ns.SiteMap = __ds_scope.SiteMap;

__ds_ns.SitePlan = __ds_scope.SitePlan;

__ds_ns.SplitHero = __ds_scope.SplitHero;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.LoadingRegion = __ds_scope.LoadingRegion;

__ds_ns.TabbedDetail = __ds_scope.TabbedDetail;

})();
