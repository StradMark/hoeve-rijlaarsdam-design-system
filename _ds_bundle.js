/* @ds-bundle: {"format":4,"namespace":"HoeveRijlaarsdamDesignSystem_374762","components":[{"name":"BenefitsPanel","sourcePath":"components/content/BenefitsPanel.jsx"},{"name":"ImageCaptionCard","sourcePath":"components/content/ImageCaptionCard.jsx"},{"name":"InfoTile","sourcePath":"components/content/InfoTile.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"RoomCard","sourcePath":"components/content/RoomCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CarouselNav","sourcePath":"components/core/CarouselNav.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"TabPills","sourcePath":"components/core/TabPills.jsx"},{"name":"CtaBand","sourcePath":"components/cta-band/CtaBand.jsx"},{"name":"FaqAccordion","sourcePath":"components/faq/FaqAccordion.jsx"},{"name":"Footer","sourcePath":"components/footer/Footer.jsx"},{"name":"HeroVideo","sourcePath":"components/hero/HeroVideo.jsx"},{"name":"SplitPanel","sourcePath":"components/layout/SplitPanel.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"PageOutro","sourcePath":"components/page-outro/PageOutro.jsx"},{"name":"PhotoCarousel","sourcePath":"components/photo-carousel/PhotoCarousel.jsx"},{"name":"PullQuote","sourcePath":"components/pull-quote/PullQuote.jsx"},{"name":"QuoteBar","sourcePath":"components/quote-bar/QuoteBar.jsx"},{"name":"WinterLockup","sourcePath":"components/seasonal/WinterLockup.jsx"},{"name":"SiteMap","sourcePath":"components/site-map/SiteMap.jsx"},{"name":"SitePlan","sourcePath":"components/site-map/SitePlan.jsx"},{"name":"SplitHero","sourcePath":"components/split-hero/SplitHero.jsx"}],"sourceHashes":{"components/content/BenefitsPanel.jsx":"daf0390cca7a","components/content/ImageCaptionCard.jsx":"bb80671e9bed","components/content/InfoTile.jsx":"dc50789defad","components/content/PersonCard.jsx":"5bcb902f6219","components/content/RoomCard.jsx":"83e749a22d31","components/content/SectionHeading.jsx":"5ae50bed10fc","components/content/TestimonialCard.jsx":"d590f769215e","components/core/Button.jsx":"5385c1c13492","components/core/CarouselNav.jsx":"1708e27a0a13","components/core/Input.jsx":"3c6c6605a91a","components/core/TabPills.jsx":"3da024e38382","components/cta-band/CtaBand.jsx":"ea9c9266e02c","components/faq/FaqAccordion.jsx":"3c3d04783093","components/footer/Footer.jsx":"6a88c8c06dac","components/hero/HeroVideo.jsx":"f5fb91a55988","components/layout/SplitPanel.jsx":"88205b0574e3","components/navigation/NavBar.jsx":"678cb3cf5cee","components/page-outro/PageOutro.jsx":"ad449c152c9d","components/photo-carousel/PhotoCarousel.jsx":"f7711beb31b3","components/pull-quote/PullQuote.jsx":"d2d59dfcfbdd","components/quote-bar/QuoteBar.jsx":"8e439395bdc3","components/seasonal/WinterLockup.jsx":"a0b0cb0e012c","components/site-map/SiteMap.jsx":"57efec3bc1a5","components/site-map/SitePlan.jsx":"375926081aee","components/split-hero/SplitHero.jsx":"c93f100e41b6","doc-page.js":"371bab66f42d","guidelines/seasonal/seizoenslogo-svg.js":"0d9690375450","guidelines/seasonal/seizoenslogo.js":"0abd329e8eb5","ui_kits/website/app.jsx":"0d808ed10a92","ui_kits/website/parts.jsx":"42e3aaf3694c","ui_kits/website/screen-bruiloft.jsx":"27e7f472d6d1","ui_kits/website/screen-catering.jsx":"545113a14bb2","ui_kits/website/screen-chef.jsx":"8179e2947abb","ui_kits/website/screen-contact.jsx":"1c97be26d74e","ui_kits/website/screen-galerie.jsx":"3f0e647594b3","ui_kits/website/screen-home.jsx":"e77b694ce5bd","ui_kits/website/screen-hospitality.jsx":"ba9d53bf581e","ui_kits/website/screen-locatie.jsx":"2d79f188c33d","ui_kits/website/screen-overons.jsx":"dc5d88636a21","ui_kits/website/screen-particulier.jsx":"0669c18700c5","ui_kits/website/screen-popup.jsx":"1ef79677867d","ui_kits/website/screen-praktisch.jsx":"5bb58f498b59","ui_kits/website/screen-ruimte.jsx":"9dcfff3df8d4","ui_kits/website/screen-zakelijk.jsx":"06e65680069c","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HoeveRijlaarsdamDesignSystem_374762 = window.HoeveRijlaarsdamDesignSystem_374762 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BenefitsPanel.jsx
try { (() => {
function BenefitsPanel({
  kicker,
  title,
  items = [],
  tone = 'deep',
  style
}) {
  const deep = tone === 'deep';
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
      gap: '6px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      fontWeight: 'var(--fw-body)',
      color: deep ? 'var(--text-on-dark)' : 'var(--white)',
      lineHeight: 1.5
    }
  }, it))));
}
Object.assign(__ds_scope, { BenefitsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BenefitsPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageCaptionCard.jsx
try { (() => {
function ImageCaptionCard({
  image,
  caption,
  body,
  ratio = '4 / 5',
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
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
      color: 'var(--text-accent)',
      marginTop: 'var(--space-4)'
    }
  }, caption), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-body)',
      textAlign: 'center'
    }
  }, body));
}
Object.assign(__ds_scope, { ImageCaptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageCaptionCard.jsx", error: String((e && e.message) || e) }); }

// components/content/InfoTile.jsx
try { (() => {
function InfoTile({
  icon,
  title,
  body,
  tone = 'sage',
  style
}) {
  const sage = tone === 'sage';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: sage ? 'var(--surface-panel-soft)' : 'var(--sage-300)',
      padding: 'var(--space-6) var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-5)'
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      height: 46,
      width: 46,
      filter: 'brightness(0) invert(1)',
      opacity: .95
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      border: '1px solid var(--white)',
      opacity: .5
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-s)',
      color: 'var(--white)',
      textAlign: 'center',
      lineHeight: 1.7
    }
  }, body), title && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, title));
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
      split dark/sage action bar from the original comps, for two actions per card. */
function RoomCard({
  image,
  caption,
  meta = [],
  summary,
  variant = 'quiet',
  reveal = 'always',
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
      color: 'var(--text-accent)'
    }
  }, caption), variant === 'quiet' &&
  /*#__PURE__*/
  /* the only hover flourish: a gold hairline growing under the caption. No shadow, no
     radius, no lifting — the brand separates by colour field, not elevation. */
  React.createElement("div", {
    style: {
      height: 1,
      marginTop: 'var(--space-1)',
      background: 'var(--gold-500)',
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
      color: 'var(--ink-500)'
    }
  }, metaLine), show === 'always' && summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-500)',
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
      color: hover ? 'var(--green-800)' : 'var(--text-accent)',
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
  if (typeof kicker !== 'string' || seen.has(kicker)) return;
  seen.add(kicker);
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
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  attribution,
  tone = 'sage',
  style
}) {
  const sage = tone === 'sage';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: sage ? 'var(--surface-panel-soft)' : 'var(--surface-deep)',
      padding: 'var(--space-6) var(--space-7)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-m)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      lineHeight: 1.75,
      color: 'var(--white)'
    }
  }, quote), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-xs)',
      color: sage ? 'var(--cream-100)' : 'var(--sage-200)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--accent)'
  },
  gold: {
    background: 'var(--accent-alt)',
    color: 'var(--white)',
    border: '1px solid var(--accent-alt)'
  },
  outlineLight: {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid var(--white)'
  },
  outlineDark: {
    background: 'transparent',
    color: 'var(--accent)',
    border: '1px solid var(--accent)'
  },
  white: {
    background: 'var(--white)',
    color: 'var(--accent)',
    border: '1px solid var(--white)'
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
    padding: '13px 38px',
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
    color: 'var(--accent)'
  } : tone === 'outlineDark' ? {
    background: 'var(--accent)',
    color: 'var(--text-on-dark)'
  } : {
    background: 'var(--cream-200)'
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
function CarouselNav({
  direction = 'next',
  tone = 'sage',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'sage' ? 'var(--sage-500)' : tone === 'gold' ? 'var(--gold-500)' : tone === 'deep' ? 'var(--green-900)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": direction === 'next' ? 'Volgende' : 'Vorige',
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'none',
      border: 'none',
      padding: 'var(--space-2)',
      cursor: 'pointer',
      lineHeight: 0,
      opacity: hover ? 1 : .85,
      transform: hover ? direction === 'next' ? 'translateX(3px)' : 'translateX(-3px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 0,
      height: 0,
      borderTop: '11px solid transparent',
      borderBottom: '11px solid transparent',
      borderLeft: direction === 'next' ? '16px solid ' + color : 'none',
      borderRight: direction === 'prev' ? '16px solid ' + color : 'none'
    }
  }));
}
Object.assign(__ds_scope, { CarouselNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CarouselNav.jsx", error: String((e && e.message) || e) }); }

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
  const up = focus || filled; // label sits above the field
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
      risen: 'var(--ink-900)',
      help: 'var(--ink-900)',
      helpOpacity: 1,
      err: 'var(--ink-900)',
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
      lineHeight: 1.5,
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
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--sage-200)'
    }
  }, l))))));
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
  edgeArrows = true,
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
  }, "Veeg voor meer")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, items.map((it, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => jump(k),
    "aria-label": 'Foto ' + (k + 1),
    style: {
      width: k === i ? 34 : 18,
      height: 2,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
      background: k === i ? 'rgba(176,131,68,.28)' : 'rgba(22,25,26,.16)',
      position: 'relative',
      transition: 'width var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)'
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
  })))), /*#__PURE__*/React.createElement("style", null, '@keyframes pc-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}')), edgeArrows && !narrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 var(--space-4)',
      pointerEvents: 'none',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CarouselNav, {
    direction: "prev",
    tone: arrowTone,
    onClick: () => go(-1)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CarouselNav, {
    direction: "next",
    tone: arrowTone,
    onClick: () => go(1)
  }))));
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
    arrowTone: arrowTone || (tone === 'cream' ? 'deep' : 'white')
  })));
}
Object.assign(__ds_scope, { PageOutro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page-outro/PageOutro.jsx", error: String((e && e.message) || e) }); }

// components/pull-quote/PullQuote.jsx
try { (() => {
/* Long-form quote block for people pages (chef, team). Display serif at reading size,
   never uppercase — this is someone talking, not a marketing line. */
function PullQuote({
  children,
  name,
  role,
  portrait,
  tone = 'cream',
  align = 'left',
  style
}) {
  const onDark = tone === 'deep';
  const bg = tone === 'deep' ? 'var(--surface-deep)' : tone === 'sage' ? 'var(--surface-sage)' : 'var(--surface-cream)';
  const quoteColor = onDark || tone === 'sage' ? 'var(--white)' : 'var(--ink-900)';
  const metaColor = onDark || tone === 'sage' ? 'var(--cream-100)' : 'var(--ink-500)';
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
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-quote)',
      lineHeight: 1.45,
      color: quoteColor,
      textWrap: 'pretty'
    }
  }, "\u201C", children, "\u201D"), (name || role) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: metaColor
    }
  }, name, name && role ? ' \u00b7 ' : '', role))));
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
        whiteSpace: 'nowrap'
      }
    }, tagline))));
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
  ampersandSrc = '/assets/ornament-swirl.svg',
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
      filter: 'brightness(0) invert(1) drop-shadow(0 1px 6px rgba(22,25,26,.45))',
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

// guidelines/seasonal/seizoenslogo-svg.js
try { (() => {
/* Het winterlogo als tekening: alle halen, maskers, de grote vlok, de caps, het schuurmerk
   en de dwarrelende vlokjes in het vlak. Eén bron voor alle vier de kaarten.
   capsMaskW verdeelt RIJLAARSDAM in negen letterblokken voor de letterpers-opbouw; buiten die
   opbouw staan alle blokken open, dus het masker verandert daar niets. */
window.SEIZOENSLOGO_SVG = "<svg class=\"logo\" viewBox=\"18.6 93.6 551.3 264.4\" width=\"100%\" role=\"img\" aria-label=\"Winters Rijlaarsdam — Art &amp; Events\">\n<defs>\n<symbol id=\"sf\" viewBox=\"-10 -10 20 20\" overflow=\"visible\"><g stroke=\"#ffffff\" stroke-width=\"2.1\" stroke-linecap=\"round\" fill=\"none\">\n<path d=\"M0,-9 L0,9 M-7.8,-4.5 L7.8,4.5 M-7.8,4.5 L7.8,-4.5\"></path>\n<path d=\"M0,-6 L-2.6,-8.2 M0,-6 L2.6,-8.2 M0,6 L-2.6,8.2 M0,6 L2.6,8.2\nM-5.2,-3 L-6.6,-6 M-5.2,-3 L-8.2,-2.4 M5.2,3 L6.6,6 M5.2,3 L8.2,2.4\nM-5.2,3 L-8.2,2.4 M-5.2,3 L-6.6,6 M5.2,-3 L8.2,-2.4 M5.2,-3 L6.6,-6\"></path></g></symbol>\n<mask id=\"penW\" maskUnits=\"userSpaceOnUse\" x=\"160\" y=\"228\" width=\"240\" height=\"74\">\n<path id=\"p0a\" d=\"M191.5,236.28L191.5,236.83L191.67,237L191.67,237.17L191.5,237.33L191.5,237.83L191.33,238L191.33,238.5L191,239L191,239.17L190.83,239.33L190.83,239.5L190.5,239.83L190.5,240.17L189.83,241L189.83,241.17L189.5,241.5L189.5,241.67L189.17,242L189.17,242.17L188.83,242.5L188.83,242.83L188.33,243.33L188.17,243.83L187.5,244.67L187.33,245.17L187,245.5L187,245.67L186.5,246.17L186.5,246.33L186.17,246.67L186.17,246.83L185.67,247.33L185.67,247.67L185,248.33L185,248.5L184.33,249.33L184.33,249.5L183.83,250L183.83,250.17L183.33,250.67L183.33,250.83L182.83,251.33L182.83,251.5L182.33,252L182.33,252.17L181.83,252.67L181.83,253L180.83,254L180.83,254.17L180.33,254.67L180.33,254.83L179.83,255.33L179.83,255.5L179.33,256L179.33,256.17L178.67,256.83L178.67,257L178.17,257.5L178.17,257.67L177.67,258.17L177.67,258.33L177,259L177,259.17L176.5,259.67L176.5,259.83L175.83,260.5L175.83,260.67L175.33,261.17L175.33,261.33L174.67,262L174.67,262.17L174.17,262.67L174,263.17L173.67,263.5L173.67,263.67L173.5,263.83L173.5,264L173.33,264.17L173.17,264.67L173,264.83L173,265L172.83,265.17L172.67,265.67L172.33,266.17L172.17,266.67L171.83,267.17L171.83,267.5L171.5,268L171.5,268.33L171.17,268.83L171.17,269.17L171,269.33L171,269.67L170.83,269.83L170.83,270.17L170.67,270.33L170.67,270.83L170.5,271L170.5,273.5L170.67,273.67L170.67,274L170.83,274.17L170.83,274.33L171.33,274.83L172,274.83L172.17,275L173.67,275L173.83,274.83L174.5,274.83L174.67,274.67L175,274.67L175.17,274.5L175.5,274.5L175.67,274.33L176,274.33L176.5,274L176.83,274L177.17,273.67L177.33,273.67L177.83,273.33L178.33,273.17L178.5,273L178.67,273L179,272.67L179.17,272.67L179.33,272.5L179.5,272.5L179.83,272.17L180.33,272L181.17,271.33L181.33,271.33L182.17,270.67L182.33,270.67L182.67,270.33L182.83,270.33L183.33,269.83L183.5,269.83L183.83,269.5L184,269.5L184.33,269.17L184.5,269.17L185,268.67L185.17,268.67L186.33,267.67L186.5,267.67L187,267.17L187.17,267.17L187.83,266.5L188,266.5L188.5,266L188.67,266L189.5,265.17L189.67,265.17L190.33,264.5L190.5,264.5L191.33,263.67L191.5,263.67L191.83,263.33L192,263.33L192.17,263.17L192.5,263.17L192.67,263L193.33,263L193.33,262.83L194,262L194,261.83L194.5,261.33L194.5,261.17L194.83,260.83L195,260.33L195.33,260L195.33,259.83L196,259.17L196,259L197,257.83L197,257L197.17,256.83L197.17,256.33L197.33,256.17L197.33,255.83L197.5,255.67L197.5,255.5L197.83,255.17L197.83,255L198,254.83L198,254.67L198.33,254.33L198.33,254.17L199,253.33L199,253.17L199.5,252.67L199.5,252.5L199.83,252.17L199.83,252L200.33,251.5L200.33,251.33L201.5,250.17L201.5,249.83L203.67,247.67L203.83,247.67L204.5,247L204.67,247L205,246.67L205.17,246.67L205.33,246.5L206,246.5L206.17,246.33L206.5,246.33L206.67,246.5L206.67,247L206.5,247.17L206.5,247.83L206.33,248L206.17,248.5L205.5,249.33L205.5,249.5L205,250L205,250.17L204.17,251L204.17,251.17L203.33,252L203.33,252.17L202,253.5L202,253.67L198.5,257.17L198.17,257.17L198.12,257.22\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.85\" stroke-linecap=\"round\"></path>\n<path id=\"p0b\" d=\"M198.78,256.89L198.5,257.17L198.17,257.17L198,257.33L197.67,257.33L197.5,257.5L197,257.5L197,257.83L196.33,258.5L196.33,258.67L195.83,259.17L195.83,259.33L195.17,260L195.17,260.17L195,260.33L194.83,260.83L194.5,261.17L194.5,261.33L193.83,262L193.67,262.5L193.17,263L192.67,263L192.5,263.17L192.17,263.17L192,263.33L191.83,263.33L191.5,263.67L191.33,263.67L190.5,264.5L190.33,264.5L189.5,265.33L189.33,265.33L188.5,266.17L188.33,266.17L187,267.33L186.83,267.33L186.33,267.83L186.17,267.83L185.67,268.33L185.5,268.33L185,268.83L184.83,268.83L184.5,269.17L184.33,269.17L183.83,269.67L183.67,269.67L182.83,270.33L182.67,270.33L182.17,270.83L182,270.83L181.17,271.5L180.67,271.67L179.83,272.33L179.33,272.5L179.17,272.67L179,272.67L178.67,273L178.5,273L178.33,273.17L178.17,273.17L177.33,273.67L177.17,273.67L176.83,274L176.5,274L176,274.33L175.67,274.33L175.5,274.5L175.17,274.5L175,274.67L174.67,274.67L174.5,274.83L173.83,274.83L173.67,275L172.17,275L172,274.83L171.33,274.83L170.83,274.33L170.83,274.17L170.67,274L170.67,273.67L170.5,273.5L170.5,271L170.67,270.83L170.67,270.33L170.83,270.17L170.83,269.83L171,269.67L171,269.33L171.17,269.17L171.17,268.83L171.33,268.67L171.33,268.33L171.67,267.83L171.67,267.5L172,267L172,266.83L172.17,266.67L172.17,266.5L172.5,266L172.5,265.83L172.67,265.67L172.67,265.5L173,265L173,264.83L173.17,264.67L173.17,264.5L173.5,264L173.5,263.83L173.67,263.67L173.67,263.5L174,263.17L174.17,262.67L174.67,262.17L174.67,262L175.83,260.67L175.83,260.5L177.17,259L177.17,258.83L177.83,258.17L177.83,258L178.33,257.5L178.33,257.33L179,256.67L179,256.5L179.5,256L179.5,255.83L180.17,255.17L180.17,255L180.67,254.5L180.67,254.33L181.17,253.83L181.17,253.67L181.83,253L181.83,252.67L182.67,251.83L182.67,251.67L183,251.33L183,251.17L183.33,250.83L183.33,250.67L183.83,250.17L183.83,250L184.83,248.83L184.83,248.67L185.17,248.33L185.17,248.17L185.67,247.67L185.67,247.33L186.33,246.67L186.33,246.5L186.67,246.17L186.67,246L187,245.67L187,245.5L187.33,245.17L187.5,244.67L188.17,243.83L188.17,243.67L188.5,243.33L188.5,243.17L188.83,242.83L188.83,242.5L189.33,242L189.5,241.5L189.83,241.17L189.83,241L190.5,240.17L190.5,239.83L190.83,239.5L190.83,239.33L191,239.17L191,239L191.33,238.5L191.33,238L191.5,237.83L191.5,237.33L191.67,237.17L191.67,237L191.5,236.83L191.5,236.28\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.85\" stroke-linecap=\"round\"></path>\n\n<path id=\"p1\" d=\"M193.38,262.45L193.33,263L193.33,264L193.17,264.17L193.17,264.67L193,264.83L193,265.33L192.83,265.5L192.83,265.83L192.67,266L192.67,266.33L192.5,266.5L192.5,266.83L192.33,267L192.33,267.5L192.17,267.67L192.17,268.17L192,268.33L192,269.67L191.83,269.83L191.83,271.33L192.17,271.83L192.17,272L192.67,272.5L192.83,272.5L193,272.67L193.67,272.67L193.83,272.83L194.33,272.83L194.5,272.67L195.17,272.67L195.33,272.5L196,272.5L196.17,272.33L196.5,272.33L196.67,272.17L197,272.17L197.33,271.83L197.67,271.83L198,271.5L198.5,271.33L198.83,271L199,271L199.33,270.67L199.5,270.67L200,270.17L200.17,270.17L200.83,269.5L201,269.5L202.5,268L202.67,268L203.83,266.83L203.83,266.67L205.5,265L205.5,264.83L206.5,263.83L206.5,263.67L207.33,262.83L207.33,262.67L208,262L208,261.83L208.67,261.17L208.67,261L209.33,260.33L209.33,260.17L209.83,259.67L209.83,259.5L210.33,259L210.33,258.83L210.67,258.5L210.67,258.33L211.17,257.83L211.17,257.67L211.83,256.83L211.83,256.67L212.17,256.33L212.17,256.17L212.67,255.67L212.67,255.33L213.33,254.5L213.33,254.17L213.67,253.83L213.67,253.5L214,253.17L214,252.83L214.33,252.33L214.33,251.83L214.5,251.67L214.5,251.33L214.83,251L215.11,250.53\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p2\" d=\"M215.18,262.9L214.83,263.33L214.83,263.5L213.33,265L213.33,265.17L212.67,265.83L212.67,266L212,266.67L212,266.83L211.67,267.17L211.67,267.33L211.17,267.83L211,268.33L210.67,268.67L210.5,269.17L210.33,269.33L210.33,269.67L210,270.17L210,271.67L210.17,271.83L210.17,272.17L210.5,272.5L211,272.5L211.17,272.67L212.67,272.67L212.83,272.5L213.5,272.5L213.67,272.33L214,272.33L214.17,272.17L214.5,272.17L214.67,272L215,272L215.17,271.83L215.5,271.83L215.67,271.67L216,271.67L216.5,271.33L216.83,271.33L217.67,270.83L218,270.83L218.5,270.5L218.67,270.5L218.83,270.33L219,270.33L219.17,270.17L219.5,270.17L220,269.83L220.17,269.83L221,269.33L221.17,269.33L222,268.83L222.17,268.83L222.5,268.5L222.83,268.5L223.17,268.17L223.67,268L223.83,267.83L224.5,267.83L224.67,267.67L225.33,267.67L226,267L226.17,267L227.5,265.67L227.67,265.67L228.17,265.17L228.17,265L229.5,263.67L229.5,263.5L231.67,261.33L231.83,261.33L233,260.17L233.17,260.17L233.67,259.67L234.08,259.3\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.44\" stroke-linecap=\"round\"></path>\n<path id=\"p3\" d=\"M225.37,267.12L225.33,267.67L225.33,268L225.17,268.17L225.17,270L225.67,269.67L223.83,271.5L223.83,271.67L223.49,272.1\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3.25\" stroke-linecap=\"round\"></path>\n<path id=\"p4a\" d=\"M224.95,270L225.5,270L225.67,270.17L226,270.17L226.17,270L226.67,270L227.33,269.33L227.67,269.33L228.5,268.5L228.83,268.5L229.67,267.67L229.83,267.67L230.17,267.33L230.33,267.33L231.17,266.67L231.33,266.67L232.17,266L232.5,266L233,265.5L233.33,265.5L233.83,265L234.33,264.83L234.67,264.5L235,264.5L235.33,264.17L235.67,264.17L235.83,264L236,264L236.17,263.83L236.67,263.67L236.83,263.5L237.17,263.5L237.33,263.33L238.83,263.33L239,263.5L239,263.83L239.17,264L239.17,264.67L239,264.83L239,265.67L238.83,265.83L238.83,266.5L238.67,266.67L238.67,267.17L238.5,267.33L238.5,267.83L238.33,268L238.33,268.67L238.17,268.83L238.17,270.5L238.83,271.17L239.33,271.17L239.5,271.33L239.83,271.33L240,271.17L241,271.17L241.17,271L241.83,271L242,270.83L242.67,270.83L242.83,270.67L243.17,270.67L243.33,270.5L243.83,270.5L244,270.33L244.33,270.33L244.5,270.17L244.67,270.17L244.83,270L245.17,270L245.5,269.67L245.83,269.67L246,269.5L246.33,269.5L246.67,269.17L247.17,269L247.33,268.83L247.5,268.83L247.83,268.5L248.17,268.5L248.5,268.17L248.67,268.17L249.17,267.83L249.83,267.83L250,267.67L250.5,267.67L250,267.67L249.83,267.83L249.17,267.83L249,268L248.83,268L248.5,268.33L248.17,268.33L247.83,268.67L247.67,268.67L247.33,268.87\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p4b\" d=\"M248,268.5L247.83,268.67L247.67,268.67L246.83,269.17L246.67,269.17L246.33,269.5L246,269.5L245.83,269.67L245.5,269.67L245.17,270L244.83,270L244.67,270.17L244.33,270.17L243.83,270.5L243.33,270.5L243.17,270.67L242.83,270.67L242.67,270.83L242,270.83L241.83,271L241.17,271L241,271.17L240,271.17L239.83,271.33L239.5,271.33L239.33,271.17L238.83,271.17L238.17,270.5L238.17,268.67L238.33,268.5L238.33,268L238.5,267.83L238.5,267.33L238.67,267.17L238.67,266.5L238.83,266.33L238.83,265.83L239,265.67L239,264.83L239.17,264.67L239.17,264L239,263.83L239,263.5L238.83,263.33L237.33,263.33L237.17,263.5L236.83,263.5L236.67,263.67L236.17,263.83L236,264L235.67,264L235.33,264.33L235,264.33L234.67,264.67L234.17,264.83L233.33,265.5L233,265.5L232.5,266L232.17,266L231.67,266.5L231.5,266.5L230.67,267.17L230.5,267.17L230.17,267.5L230,267.5L229.5,268L229.17,268L228.33,268.83L228,268.83L227.17,269.67L227,269.67L226.67,270L226.17,270L226,270.17L225.5,270.17L225.17,269.83L225.17,268.17L225.33,268L225.33,267.83\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p4c\" d=\"M225.17,268.57L225.17,268.17L225.33,268L225.33,267.67L225.37,267.12\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n\n<mask id=\"mCrossT\" maskUnits=\"userSpaceOnUse\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"400\" fill=\"#fff\"></rect><rect x=\"257.75\" y=\"249.14\" width=\"10.80\" height=\"6.8\" fill=\"#000\"></rect><path d=\"M265.75,247.27L264.77,248.45L263.95,249.44L263.25,250.24L263.03,250.51L262.78,250.79L264.54,253.10L265.01,252.55L262.61,250.98L262.36,251.27L262.08,251.60L261.76,251.96L261.42,252.34L263.31,254.51L262.60,253.16L261.19,252.62L260.87,252.99L260.39,253.54L259.69,254.34L258.97,255.17L260.50,255.58L258.99,255.15L258.27,255.98L257.62,256.81L260.32,257.99L258.10,256.21L259.92,258.49L260.47,257.78L261.13,257.01L260.50,255.58L261.15,256.99L261.83,256.20L262.53,255.40L263.01,254.85L263.33,254.48L262.60,253.16L261.21,252.59L263.56,254.22L263.88,253.86L264.22,253.48L264.54,253.11L264.77,252.82L262.81,250.75L262.38,251.26L264.92,252.65L265.17,252.37L265.41,252.10L266.11,251.28L266.95,250.27L267.93,249.09Z\" fill=\"#fff\"></path></mask>\n<path id=\"p5\" mask=\"url(#mCrossT)\" d=\"M277.16,235.89L276.66,236.51L275.87,237.46L274.96,238.54L274.04,239.63L273.13,240.71L272.21,241.79L271.33,242.83L270.46,243.87L269.54,244.96L268.63,246.04L267.71,247.13L266.8,248.22L265.9,249.32L265.06,250.31L264.45,251.04L264.1,251.44L263.81,251.76L263.56,252.07L263.38,252.27L263.14,252.54L262.82,252.91L262.51,253.25L262.24,253.57L261.9,253.97L261.4,254.53L260.76,255.27L260.06,256.08L259.39,256.87L258.9,257.48L258.57,257.93L258.08,258.6L257.5,259.43L256.95,260.2L256.37,260.96L255.79,261.71L255.21,262.46L254.63,263.21L254.04,263.96L252.96,265.21L251.42,266.84L250.46,267.63L249.92,267.71L249.25,267.88L248.67,268.17L248.21,268.42L247.83,268.58L247.5,268.79L247.13,269L246.71,269.21L246.33,269.42L245.96,269.54L245.54,269.71L245.17,269.92L244.83,270.04L244.46,270.17L243.96,270.33L243.37,270.5L242.75,270.67L242,270.83L241.08,271L240.17,271.17L239.46,271.25L238.83,271.04L238.33,270.25L238.21,269.04L238.33,268.04L238.5,267.33L238.67,266.63L238.83,265.79L239,264.87L239.08,264.08L238.63,263.58L237.62,263.41L236.79,263.54L236.25,263.79L235.79,264L235.37,264.21L235,264.42L234.67,264.58L234.29,264.79L233.83,265.08L233.37,265.38L232.96,265.63L232.54,265.88L232.04,266.17L231.29,266.67L230.46,267.25L229.71,267.79L229,268.29L228.38,268.71L227.79,269.12L227.25,269.5L226.71,269.83L226.13,270.04L225.65,270.13L225.44,270.17\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n<path id=\"p6\" d=\"M250.59,267.13L250.5,267.67L250.5,268L250.33,268.17L250.33,268.67L250.17,268.83L250.17,269.17L250,269.33L250,269.5L249.67,269.83L249.67,270L249.17,270.5L249.17,270.67L248.67,271.17L248.67,271.33L248.17,271.83L248.17,272L247.67,272.5L247.67,272.67L247.33,273L247.33,273.17L246.83,273.67L246.83,273.83L246.33,274.33L246.33,274.5L246,274.83L246,275L245.5,275.5L245.5,275.67L245.17,276L245.17,276.17L244.83,276.5L244.83,276.67L243.67,278L243.67,278.33L243.17,278.83L243.17,279L242.83,279.33L242.83,279.5L242.17,280.17L242.17,280.5L241.67,281L241.67,281.17L241.33,281.5L241.33,281.67L241,282L241,282.17L240.67,282.5L240.67,282.67L240.33,283L240.33,283.17L240,283.5L240,283.67L239.67,284L239.67,284.17L239.33,284.5L239.33,284.67L238.67,285.5L238.67,285.67L238.33,286L238.33,286.17L237.83,286.67L237.83,287L237.17,287.67L237.17,288L236.67,288.5L236.67,288.83L236,289.5L236,289.83L235.67,290.17L235.67,290.33L235.17,290.83L235.17,291.17L234.67,291.67L234.67,292L234.17,292.5L234.17,292.83L233.83,293.33L233.67,293.83L233.33,294.17L233.33,294.33L233,294.67L233,294.83L232.75,295.32\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p7\" d=\"M269.49,264.25L269,264.5L268.5,264.67L268.17,265L268,265L267.67,265.33L267.5,265.33L267.33,265.5L267,265.5L266.83,265.67L266.5,265.67L266.33,265.83L266,265.83L265.83,266L265.5,266L265.33,266.17L265,266.17L263.83,267.33L263.83,267.67L263.5,268L263.5,268.17L263.33,268.33L263.17,268.83L263,269L263,270L262.83,270.17L262.83,270.33L263,270.5L263,271.17L263.83,272L264,272L264.17,272.17L264.5,272.17L264.67,272.33L267.83,272.33L268,272.17L268.67,272.17L268.83,272L269.33,272L269.5,271.83L270,271.83L270.17,271.67L270.5,271.67L270.67,271.5L271,271.5L271.17,271.33L271.67,271.33L271.83,271.17L272.17,271.17L272.33,271L272.67,271L273.17,270.67L273.5,270.67L273.67,270.5L274,270.5L274.5,270.17L274.83,270.17L275.67,269.67L276,269.67L276.5,269.33L276.67,269.33L276.83,269.17L277.33,269L277.67,268.67L278,268.67L278.33,268.33L278.67,268.33L279.5,267.67L279.83,267.67L280.33,267.17L280.67,267.17L281.83,266.17L282,266.17L282.33,265.83L282.5,265.83L283.33,265L283.5,265L284.17,264.33L284.33,264.33L285,263.67L285.17,263.67L286.17,262.67L286.33,262.67L287.83,261.17L288,261.17L292,257.17L292,257L292.33,256.67L292.33,256.33L292.67,256L292.98,255.54\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3.25\" stroke-linecap=\"round\"></path>\n<path id=\"p8\" d=\"M292.12,256L292.67,256L293.17,256L292.67,256L293,256L293.67,255.33L293.67,255.17L294.83,254L294.83,253.83L295.83,252.83L295.83,252.67L296.5,252L296.5,251.83L297,251.33L297,251.17L297.33,250.83L297.33,250.67L297.67,250.33L297.67,250.17L298,249.83L298,249.67L298.33,249.33L298.33,249.17L298.5,249L298.5,248.33L298.33,248.17L298.33,247.5L298.17,247.33L297.67,247.33L297.5,247.5L296.83,247.5L296.67,247.67L296.5,247.67L296,248L295.83,248L295.5,248.33L295,248.5L294.67,248.83L294.5,248.83L293.5,249.83L293.17,249.83L291.17,251.83L291.17,252L290.67,252.5L290.67,252.83L290.5,253L290.5,253.83L290.67,254L290.67,254.17L291.83,255.17L292,255.17L292.67,255.83L292.67,256L293.17,256L293.83,256.67L294,256.67L295.67,258.33L295.67,259L295.83,259.17L295.83,259.5L295.67,259.67L295.67,260.17L295.5,260.33L295.33,260.83L295,261.17L295,261.33L294.5,261.83L294.5,262L293.83,262.67L293.83,263L291.67,265.17L291.67,265.33L288.33,268.67L288.33,268.83L285.83,271.33L285.83,271.5L284.33,273L284.33,273.17L282.83,274.83L282.83,275L282.5,275.33L282.5,275.5L282,276L282,276.17L281.67,276.5L281.67,276.67L281.17,277.17L281.17,277.33L280.67,278.17L280.67,278.5L280.33,279L280.33,279.33L280.17,279.5L280.17,280.67L280.5,281L280.5,281.33L280.67,281.5L281.17,281.5L281.33,281.67L283.33,281.67L283.5,281.5L284,281.5L284.17,281.33L284.67,281.33L284.83,281.17L285.17,281.17L285.67,280.83L286,280.83L286.17,280.67L286.5,280.67L287.33,280.17L287.67,280.17L288,279.83L288.33,279.83L288.67,279.5L289,279.5L289.33,279.17L289.83,279L290.17,278.67L290.5,278.67L290.83,278.33L291.17,278.33L291.67,277.83L292,277.83L292.5,277.33L292.83,277.33L293.17,277L293.33,277L293.67,276.67L293.83,276.67L294.67,276L295,276L295.5,275.5L295.67,275.5L296,275.17L296.17,275.17L296.33,275L296.5,275L296.83,274.67L297,274.67L297.33,274.33L297.5,274.33L297.83,274L298,274L298.33,273.67L298.5,273.67L298.83,273.33L299,273.33L299.33,273L299.5,273L299.83,272.67L300,272.67L300.33,272.33L300.5,272.33L300.83,272L301,272L301.33,271.67L301.5,271.67L302.33,271L302.5,271L303,270.5L303.33,270.5L304.17,269.67L304.5,269.67L305.17,269L305.33,269L305.83,268.5L306,268.5L306.33,268.17L306.5,268.17L306.83,267.83L307,267.83L307.17,267.67L307.67,267.67L307.83,267.5L308.5,267.5L308.5,267L310.33,265.17L310.5,265.17L311.67,264L311.83,264L312.5,263.33L312.83,263.33L313.67,262.67L314,262.67L314.17,262.5L314.5,262.5L315,262.17L316.5,262.17L316.67,262.33L316.83,262.33L316.83,262.67L317,262.83L317,263.17L316.83,263.33L316.83,264L316.17,265L316,265L315.5,265.5L315.33,265.5L314.86,265.78\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p9a\" d=\"M292.87,256.46L293.17,256L293.17,255.83L293.83,255.17L293.83,255L295,253.83L295,253.67L296.5,252L296.5,251.83L297,251.33L297,251.17L297.33,250.83L297.33,250.67L297.67,250.33L297.67,250.17L298.33,249.33L298.33,249.17L298.5,249L298.5,248.17L298.33,248L297.83,248L297.83,248.17L298,248.33L298.5,248.17L298.5,249L298.33,249.17L298.33,249.33L298,249.67L298,249.83L297.67,250.17L297.67,250.33L297.33,250.67L297.33,250.83L297.16,251\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n<path id=\"p9b\" d=\"M297.61,250.39L297.33,250.67L297.33,250.83L297,251.17L297,251.33L296.5,251.83L296.5,252L295.83,252.67L295.83,252.83L294.83,253.83L294.83,254L293.67,255.17L293.67,255.33L293,256L292.67,256L292.25,256.35\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.03\" stroke-linecap=\"round\"></path>\n\n<path id=\"p10\" d=\"M314.55,271.77L314,271.83L313.5,271.83L313.33,272L312.5,272L312.33,272.17L311.83,272.33L311.33,272.67L311,272.67L310.67,273L310.33,273L309.5,273.67L309.17,273.67L308.33,274.33L307.83,274.5L307.5,274.83L307.5,275L307.33,275.17L307.33,275.5L307.17,275.67L307.17,276L307.5,276.33L308.83,276.33L309,276.17L309.5,276.17L309.67,276L310,276L310.17,275.83L310.5,275.83L310.83,275.5L311,275.5L311.33,275.17L311.5,275.17L311.83,274.83L312,274.83L312.83,274L313,274L313.67,273.33L313.67,273L313.83,272.83L313.83,272.5L314,272.33L314,271.83L314.33,271.83L315,271.17L315.17,271.17L315.67,270.67L316,270.67L316.33,270.33L316.33,269.17L316,268.67L315.67,268.67L315.5,268.5L314.67,268.5L314.5,268.67L313.33,268.67L313.17,268.83L312.17,268.83L312,269L310.83,269L310.67,269.17L310,269.17L309.83,269L309.17,269L308.67,268.5L308.67,267.83L308.5,267.67L308.5,267.5L308.41,266.96\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.85\" stroke-linecap=\"round\"></path>\n<path id=\"p11\" d=\"M315.78,270.23L316.33,270.17L317.17,270.17L317.33,270L318,270L318.17,269.83L318.5,269.83L318.67,269.67L319,269.67L319.17,269.5L319.5,269.5L319.67,269.33L320,269.33L320.17,269.17L320.67,269.17L320.83,269L321.5,269L321.67,268.83L322.17,268.83L322.33,268.67L328.5,268.67L328.67,268.83L330.17,268.83L330.33,269L331.33,269L331.5,269.17L332.67,269.17L332.83,269.33L334,269.33L334.17,269.5L335.33,269.5L335.5,269.67L336.33,269.67L336.5,269.83L337.5,269.83L337.67,270L338.67,270L338.83,270.17L339.67,270.17L339.83,270.33L340.67,270.33L340.83,270.5L341.5,270.5L341.67,270.67L342.5,270.67L342.67,270.83L343.5,270.83L343.67,271L344.5,271L344.67,271.17L345.33,271.17L345.5,271.33L346.33,271.33L346.5,271.5L347.17,271.5L347.33,271.67L348,271.67L348.17,271.83L348.83,271.83L349,272L349.5,272L349.67,272.17L350.33,272.17L350.5,272.33L351.17,272.33L351.33,272.5L352,272.5L352.17,272.67L352.83,272.67L353,272.83L353.67,272.83L353.83,273L354.33,273L354.5,273.17L355.17,273.17L355.33,273.33L356,273.33L356.17,273.5L356.83,273.5L357,273.67L357.67,273.67L357.83,273.83L358.5,273.83L358.67,274L359.17,274L359.33,274.17L360,274.17L360.17,274.33L360.83,274.33L361,274.5L361.67,274.5L361.83,274.67L362.5,274.67L362.67,274.83L363.5,274.83L363.67,275L364.33,275L364.5,275.17L365.17,275.17L365.33,275.33L366,275.33L366.17,275.5L366.83,275.5L367,275.67L367.83,275.67L368,275.83L368.67,275.83L368.83,276L369.67,276L369.83,276.17L370.67,276.17L370.83,276.33L371.67,276.33L371.83,276.5L372.67,276.5L372.83,276.67L373.83,276.67L374,276.83L375,276.83L375.17,277L376,277L376.17,277.17L377,277.17L377.17,277.33L378.33,277.33L378.5,277.5L379.5,277.5L379.67,277.67L380.67,277.67L380.83,277.83L382.33,277.83L382.5,278L385,278L385.17,278.17L386.83,278.17L387,278.33L389.33,278.33L389.5,278.17L390,278.17L390.33,277.83L390.82,277.58\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.44\" stroke-linecap=\"round\"></path>\n<path id=\"p12\" d=\"M240.95,254.74L241.5,254.67L241.83,254.67L242,254.5L242.83,254.5L243,254.33L244,254.33L244.17,254.17L245.5,254.17L245.67,254L247,254L247.17,253.83L248.67,253.83L248.83,253.67L250.33,253.67L250.5,253.5L252.17,253.5L252.33,253.33L254.33,253.33L254.5,253.17L256.83,253.17L257,253L260.17,253L260.33,252.83L262,252.83L262.17,253L262.33,252.83L263.33,252.83L263.5,252.67L268.17,252.67L268.33,252.5L281,252.5L281.17,252.67L285,252.67L285.55,252.68\" pathLength=\"1000\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.44\" stroke-linecap=\"round\"></path>\n<circle class=\"dab\" cx=\"278.1\" cy=\"235.6\" r=\"1.1\" fill=\"#fff\" style=\"--dab:0.684s\"></circle>\n<circle class=\"dab\" cx=\"192.9\" cy=\"237.4\" r=\"1.1\" fill=\"#fff\" style=\"--dab:0.065s\"></circle>\n<circle class=\"dab\" cx=\"299.3\" cy=\"247.3\" r=\"1.1\" fill=\"#fff\" style=\"--dab:0.965s\"></circle>\n<circle class=\"dab\" cx=\"267.2\" cy=\"263.4\" r=\"1.1\" fill=\"#fff\" style=\"--dab:0.929s\"></circle>\n<circle class=\"dab\" cx=\"269.7\" cy=\"265.9\" r=\"1.4\" fill=\"#fff\" style=\"--dab:0.929s\"></circle>\n<circle class=\"dab\" cx=\"251.6\" cy=\"268.5\" r=\"1.1\" fill=\"#fff\" style=\"--dab:0.814s\"></circle>\n<circle class=\"dab\" cx=\"390.7\" cy=\"278.8\" r=\"1.1\" fill=\"#fff\" style=\"--dab:1.31s\"></circle>\n<circle id=\"pdot\" cx=\"217.85\" cy=\"260.15\" r=\"3\" fill=\"#fff\"></circle>\n</mask>\n<clipPath id=\"panelClip\"><rect x=\"18.6\" y=\"93.6\" width=\"551.3\" height=\"264.4\"></rect></clipPath>\n<mask id=\"capsMaskW\" maskUnits=\"userSpaceOnUse\" maskContentUnits=\"userSpaceOnUse\" x=\"18.6\" y=\"93.6\" width=\"551.3\" height=\"264.4\"><rect id=\"capsL0\" x=\"157.5\" y=\"278\" width=\"28.7\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL1\" x=\"186.2\" y=\"278\" width=\"25.8\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL2\" x=\"212.0\" y=\"278\" width=\"23.6\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL3\" x=\"235.6\" y=\"278\" width=\"53.7\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL4\" x=\"289.3\" y=\"278\" width=\"27.1\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL5\" x=\"316.4\" y=\"278\" width=\"20.8\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL6\" x=\"337.1\" y=\"278\" width=\"28.4\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL7\" x=\"365.6\" y=\"278\" width=\"27.6\" height=\"50\" fill=\"#fff\"></rect><rect id=\"capsL8\" x=\"393.2\" y=\"278\" width=\"35.3\" height=\"50\" fill=\"#fff\"></rect></mask><clipPath id=\"capsClipW\"><rect id=\"capsRectW\" x=\"158\" y=\"279\" width=\"270\" height=\"48\"></rect></clipPath>\n<clipPath id=\"r1ClipW\"><rect id=\"r1RectW\" x=\"159\" y=\"319\" width=\"36\" height=\"6\"></rect></clipPath>\n<clipPath id=\"r2ClipW\"><rect id=\"r2RectW\" x=\"209\" y=\"319\" width=\"126\" height=\"6\"></rect></clipPath>\n</defs>\n<g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 18.6225 748.3124 L 569.8519 748.3124 L 569.8519 483.9199 L 18.6225 483.9199 Z\" fill=\"#295e4e\" fill-rule=\"evenodd\"></path></g>\n<g id=\"flake\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 276.0355 596.649 L 280.0015 600.6149 L 280.0015 606.0027 L 271.6209 614.3854 L 245.5971 614.3854 L 263.3335 596.649 Z Z M 289.4947 609.8879 L 293.3048 613.6994 L 293.3048 625.8277 L 275.2172 643.9139 L 275.2172 618.5577 L 283.8869 609.8879 Z Z M 298.7989 613.6994 L 302.7648 609.7334 L 308.1543 609.7334 L 317.0426 618.6217 L 317.0426 643.8492 L 298.7989 625.6057 Z Z M 205.6782 601.7567 L 210.7845 596.649 L 216.6534 596.649 L 221.7597 601.7567 L 226.8677 596.649 L 234.1213 596.649 L 216.9459 613.8247 L 220.8308 617.7098 L 241.8922 596.649 L 255.5631 596.649 L 232.3327 619.8795 L 266.1245 619.8795 L 255.8591 630.1468 L 226.0732 630.1468 L 226.0732 635.6412 L 250.363 635.6412 L 245.2348 640.7694 L 238.0122 640.7694 L 238.0122 647.9918 L 233.8622 652.1417 L 226.6398 652.1417 L 226.6398 663.2498 L 237.7474 663.2498 L 237.7474 656.0274 L 241.8959 651.8789 L 249.12 651.8789 L 249.12 644.6546 L 254.2482 639.5261 L 254.2482 663.8159 L 259.7443 663.8159 L 259.7443 634.0306 L 269.7231 624.0518 L 269.7231 657.1803 L 293.3048 633.5986 L 293.3048 647.8413 L 272.2442 668.9041 L 276.1294 672.7893 L 293.3048 655.6136 L 293.3048 662.8674 L 288.197 667.9738 L 293.3048 673.0815 L 293.3048 678.9489 L 288.197 684.0567 L 296.0515 691.9101 L 303.9069 684.0567 L 298.7989 678.9489 L 298.7989 673.0815 L 303.9069 667.9738 L 298.7989 662.8674 L 298.7989 655.6136 L 315.9746 672.7893 L 319.8597 668.9041 L 298.7989 647.8413 L 298.7989 633.3758 L 322.5368 657.1157 L 322.5387 624.1181 L 332.297 633.8758 L 332.297 663.6594 L 337.7911 663.6594 L 337.7911 639.3699 L 342.921 644.5001 L 342.921 651.7227 L 350.1439 651.7227 L 354.2916 655.871 L 354.2916 663.0951 L 365.3994 663.0951 L 365.3994 651.9875 L 358.179 651.9875 L 354.0291 647.8376 L 354.0291 640.6152 L 346.8064 640.6152 L 341.6763 635.4848 L 355.7517 635.4848 L 350.2576 629.9906 L 336.1822 629.9906 L 325.9148 619.7233 L 339.9922 619.7233 L 334.4958 614.2292 L 320.4207 614.2292 L 312.0395 605.8485 L 312.0395 600.2379 L 315.8495 596.4301 L 316.6971 596.4301 L 313.3582 593.0912 L 303.4786 593.0912 L 302.8884 593.6811 L 307.8306 598.6253 L 300.9319 598.6253 L 300.9319 605.6164 L 296.0515 600.7385 L 291.1096 605.679 L 291.1096 598.7801 L 284.1185 598.7801 L 288.9964 593.9022 L 288.1877 593.0912 L 198.6338 593.0912 L 197.8228 593.9022 Z\" fill=\"#ffffff\" fill-rule=\"evenodd\"></path></g></g>\n<g id=\"flakes\" clip-path=\"url(#panelClip)\"><use class=\"fl\" href=\"#sf\" style=\"--cx:302.6px;--cy:75.3px;--t:16.4s;--lag:-14.82s;--dx:-43.4px;--fall:317px;--sw:7.7px;--rot:-95deg;--op:0.74\" x=\"298.7\" y=\"71.4\" width=\"7.8\" height=\"7.8\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:222.2px;--cy:71.3px;--t:18.9s;--lag:-3.09s;--dx:18.4px;--fall:298px;--sw:-8px;--rot:124deg;--op:0.65\" x=\"219.1\" y=\"68.2\" width=\"6.21\" height=\"6.21\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:25.2px;--cy:66.8px;--t:20.6s;--lag:-13.09s;--dx:-30.8px;--fall:294px;--sw:8.7px;--rot:-91deg;--op:0.58\" x=\"22.8\" y=\"64.4\" width=\"4.7\" height=\"4.7\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:165.2px;--cy:81.1px;--t:16s;--lag:-6.48s;--dx:7.3px;--fall:319px;--sw:8.8px;--rot:102deg;--op:0.75\" x=\"161\" y=\"76.9\" width=\"8.41\" height=\"8.41\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:206.4px;--cy:80.3px;--t:20.5s;--lag:-12.32s;--dx:-11.4px;--fall:324px;--sw:4.1px;--rot:161deg;--op:0.61\" x=\"203.6\" y=\"77.5\" width=\"5.68\" height=\"5.68\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:75.8px;--cy:72.4px;--t:20.2s;--lag:-6.24s;--dx:41.6px;--fall:321px;--sw:-3.5px;--rot:49deg;--op:0.66\" x=\"73\" y=\"69.6\" width=\"5.55\" height=\"5.55\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:495.6px;--cy:72.0px;--t:15.3s;--lag:-7.65s;--dx:-43.5px;--fall:316px;--sw:9.2px;--rot:-79deg;--op:0.82\" x=\"491.1\" y=\"67.5\" width=\"9.04\" height=\"9.04\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:263.6px;--cy:67.8px;--t:19.7s;--lag:-17.26s;--dx:44.3px;--fall:315px;--sw:3.9px;--rot:-73deg;--op:0.52\" x=\"261.7\" y=\"65.9\" width=\"3.76\" height=\"3.76\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:433.7px;--cy:82.8px;--t:20.4s;--lag:-17.39s;--dx:9.8px;--fall:301px;--sw:5.2px;--rot:-135deg;--op:0.64\" x=\"431\" y=\"80.1\" width=\"5.33\" height=\"5.33\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:402.7px;--cy:77.2px;--t:14.1s;--lag:-13.13s;--dx:-43.8px;--fall:330px;--sw:-8.1px;--rot:-101deg;--op:0.8\" x=\"398.2\" y=\"72.7\" width=\"9.03\" height=\"9.03\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:251.9px;--cy:77.3px;--t:17.8s;--lag:-6.34s;--dx:20.2px;--fall:294px;--sw:-5.3px;--rot:-8deg;--op:0.75\" x=\"248.4\" y=\"73.8\" width=\"6.97\" height=\"6.97\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:238.9px;--cy:80.8px;--t:19.4s;--lag:-0.56s;--dx:-23.5px;--fall:312px;--sw:-2.6px;--rot:102deg;--op:0.52\" x=\"236.9\" y=\"78.8\" width=\"3.96\" height=\"3.96\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:180.3px;--cy:86.7px;--t:15.3s;--lag:-1.32s;--dx:44.3px;--fall:298px;--sw:3.9px;--rot:-155deg;--op:0.92\" x=\"175.2\" y=\"81.6\" width=\"10.27\" height=\"10.27\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:508.8px;--cy:79.6px;--t:14.3s;--lag:-5.4s;--dx:42px;--fall:300px;--sw:-8.1px;--rot:135deg;--op:0.76\" x=\"504.6\" y=\"75.4\" width=\"8.42\" height=\"8.42\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:110.2px;--cy:69.4px;--t:21.4s;--lag:-6.09s;--dx:6.2px;--fall:319px;--sw:4.9px;--rot:68deg;--op:0.6\" x=\"107.9\" y=\"67.1\" width=\"4.53\" height=\"4.53\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:86.2px;--cy:88.1px;--t:17.8s;--lag:-17.57s;--dx:35.2px;--fall:316px;--sw:-4.5px;--rot:47deg;--op:0.72\" x=\"82.9\" y=\"84.8\" width=\"6.63\" height=\"6.63\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:355.0px;--cy:72.9px;--t:14.9s;--lag:-1.13s;--dx:-0.2px;--fall:296px;--sw:3.6px;--rot:-152deg;--op:0.76\" x=\"350.7\" y=\"68.6\" width=\"8.52\" height=\"8.52\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:395.5px;--cy:84.3px;--t:14.1s;--lag:-3.07s;--dx:-16px;--fall:324px;--sw:8.3px;--rot:50deg;--op:0.93\" x=\"390\" y=\"78.8\" width=\"11\" height=\"11\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:462.1px;--cy:72.6px;--t:15.6s;--lag:-2.72s;--dx:10.3px;--fall:314px;--sw:-7.4px;--rot:-151deg;--op:0.74\" x=\"458.2\" y=\"68.7\" width=\"7.79\" height=\"7.79\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:331.7px;--cy:90.7px;--t:13.8s;--lag:-8.86s;--dx:-43.6px;--fall:310px;--sw:2.7px;--rot:-32deg;--op:0.93\" x=\"326.6\" y=\"85.6\" width=\"10.23\" height=\"10.23\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:533.1px;--cy:86.8px;--t:18.4s;--lag:-0.17s;--dx:-9.9px;--fall:306px;--sw:-8.4px;--rot:34deg;--op:0.67\" x=\"530\" y=\"83.7\" width=\"6.2\" height=\"6.2\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:476.8px;--cy:78.7px;--t:18s;--lag:-2.36s;--dx:-12.6px;--fall:298px;--sw:-3.1px;--rot:94deg;--op:0.65\" x=\"474\" y=\"75.9\" width=\"5.62\" height=\"5.62\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:550.1px;--cy:76.9px;--t:14.7s;--lag:-12.08s;--dx:-20.8px;--fall:311px;--sw:7.6px;--rot:160deg;--op:0.87\" x=\"545.6\" y=\"72.4\" width=\"8.94\" height=\"8.94\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:40.4px;--cy:76.0px;--t:20.6s;--lag:-15.77s;--dx:17px;--fall:292px;--sw:4.8px;--rot:5deg;--op:0.53\" x=\"38.1\" y=\"73.7\" width=\"4.53\" height=\"4.53\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:520.8px;--cy:86.4px;--t:18.3s;--lag:-10.25s;--dx:30.9px;--fall:293px;--sw:4.3px;--rot:-169deg;--op:0.67\" x=\"517.9\" y=\"83.5\" width=\"5.75\" height=\"5.75\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:309.9px;--cy:86.0px;--t:14.9s;--lag:-7.92s;--dx:34.9px;--fall:309px;--sw:5.3px;--rot:-168deg;--op:0.86\" x=\"304.7\" y=\"80.8\" width=\"10.33\" height=\"10.33\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:130.3px;--cy:75.9px;--t:16.6s;--lag:-12.24s;--dx:-26.4px;--fall:327px;--sw:-7.3px;--rot:115deg;--op:0.78\" x=\"126.6\" y=\"72.2\" width=\"7.45\" height=\"7.45\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:116.9px;--cy:82.5px;--t:20.5s;--lag:-8.98s;--dx:39.7px;--fall:322px;--sw:4.5px;--rot:61deg;--op:0.48\" x=\"115\" y=\"80.6\" width=\"3.86\" height=\"3.86\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:150.1px;--cy:72.4px;--t:14.7s;--lag:-11.58s;--dx:-34.1px;--fall:320px;--sw:2.7px;--rot:-49deg;--op:0.9\" x=\"144.8\" y=\"67.1\" width=\"10.54\" height=\"10.54\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:423.0px;--cy:82.5px;--t:14.3s;--lag:-9.66s;--dx:-43.5px;--fall:326px;--sw:-4.9px;--rot:-95deg;--op:0.78\" x=\"418.6\" y=\"78.1\" width=\"8.76\" height=\"8.76\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:60.8px;--cy:77.2px;--t:12.1s;--lag:-2.83s;--dx:24px;--fall:298px;--sw:-4px;--rot:90deg;--op:0.95\" x=\"55.4\" y=\"71.8\" width=\"10.74\" height=\"10.74\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:336.2px;--cy:77.0px;--t:21.4s;--lag:-5.78s;--dx:-0.9px;--fall:315px;--sw:8.9px;--rot:-104deg;--op:0.45\" x=\"334.4\" y=\"75.2\" width=\"3.62\" height=\"3.62\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:280.8px;--cy:88.1px;--t:17.6s;--lag:-12.41s;--dx:30.9px;--fall:303px;--sw:-5.2px;--rot:145deg;--op:0.79\" x=\"276.8\" y=\"84.1\" width=\"8.02\" height=\"8.02\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:380.8px;--cy:72.4px;--t:13.7s;--lag:-6.14s;--dx:-23.4px;--fall:326px;--sw:-5.3px;--rot:-92deg;--op:0.94\" x=\"375.4\" y=\"67\" width=\"10.71\" height=\"10.71\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:449.0px;--cy:68.9px;--t:19.7s;--lag:-18.7s;--dx:-18.7px;--fall:325px;--sw:-5.9px;--rot:-147deg;--op:0.57\" x=\"446.7\" y=\"66.6\" width=\"4.53\" height=\"4.53\"></use><use class=\"fl\" href=\"#sf\" style=\"--cx:200.9px;--cy:72.1px;--t:16.5s;--lag:-8.19s;--dx:-39.4px;--fall:305px;--sw:-8.7px;--rot:119deg;--op:0.74\" x=\"196.9\" y=\"68.1\" width=\"7.96\" height=\"7.96\"></use></g>\n<g id=\"scriptW\" mask=\"url(#penW)\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 175.3078 579.4438 C 176.6526 581.0848 177.9817 582.7377 179.2738 584.4169 C 181.87 587.7819 184.4816 591.1362 186.9542 594.5936 C 187.9809 596.0285 188.9776 597.4832 189.9162 598.9728 C 190.2583 599.5157 190.6296 600.0429 191.0001 600.5684 C 191.7153 601.5946 192.4209 602.6278 193.1176 603.6664 C 193.1579 604.3941 193.1916 605.1237 193.2265 605.8514 L 193.0915 605.795 L 192.136 606.8514 C 191.4928 607.0003 191.0186 606.909 190.4862 606.5167 C 190.2966 606.1697 190.1027 605.8171 189.9045 605.4749 C 189.8518 604.679 190.417 604.6282 190.5534 604.1134 C 190.3031 603.5352 190.0647 602.9257 189.7574 602.3781 C 188.2585 599.6991 186.7243 597.0368 184.953 594.5275 C 184.0433 593.2383 183.202 591.9035 182.2827 590.622 C 180.9782 588.8146 179.6346 587.0387 178.2774 585.2704 C 176.8643 583.4299 175.4487 581.5865 173.9914 579.774 C 173.9477 579.7981 173.9047 579.8234 173.8621 579.85 C 172.1625 576.9465 169.7896 572.4609 169.7896 569.0418 C 169.7896 567.3694 170.8498 565.9146 172.6152 565.9146 C 175.3517 565.9146 179.0311 568.0723 181.2835 569.5149 C 185.3785 572.1375 189.2392 575.1737 192.9002 578.3695 C 192.0379 576.1335 191.2269 573.4996 191.2269 571.0859 C 191.2269 569.23 192.183 568.2251 194.0522 568.2251 C 198.8226 568.2251 204.1784 574.0316 207.0204 577.3912 C 209.5841 580.4218 211.5794 583.0466 213.0055 585.2642 C 214.4429 587.4996 215.3075 589.3325 215.5969 590.7609 C 215.6604 591.3003 215.3843 591.7218 214.8114 591.7218 C 214.4191 591.7218 214.1263 591.4077 214.0254 591.048 C 213.7779 589.7792 212.9859 588.1008 211.6502 586.0142 C 210.3018 583.9075 208.4017 581.3906 205.952 578.4667 C 203.436 575.464 198.3132 569.7697 194.0522 569.7697 C 193.1411 569.7697 192.7259 570.1711 192.7259 571.0859 C 192.7259 574.1442 194.3586 578.0007 195.6589 580.7296 C 195.7073 580.7611 195.7465 580.8118 195.7649 580.9051 C 199.1832 584.0252 202.0173 586.9125 204.2663 589.5669 C 205.2998 590.7866 207.7231 593.7018 207.7231 595.3487 C 207.7231 596.0191 207.362 596.4321 206.6774 596.4321 C 204.4324 596.4321 201.8957 593.4869 200.6104 591.8822 C 198.0836 588.7261 196.0143 585.246 194.2982 581.5902 L 194.2826 581.5902 C 190.2881 577.9868 186.0633 574.56 181.6075 571.5417 C 179.4115 570.0543 175.3319 567.4589 172.6152 567.4589 C 171.5856 567.4589 171.2886 568.103 171.2886 569.0418 C 171.2886 572.2685 173.702 576.716 175.3186 579.4438 Z Z M 197.5484 584.6292 C 198.8558 586.9032 200.3502 589.0595 202.0235 591.08 C 202.7699 591.9812 204.9174 594.5202 206.1249 594.6999 C 205.9143 593.7644 203.7628 591.264 203.1157 590.5108 C 201.3551 588.4625 199.4899 586.5063 197.5484 584.6292 Z \" fill=\"#b6863d\" fill-rule=\"evenodd\"></path><path d=\"M 233.1133 546.1843 C 232.3219 546.1843 232.1405 546.7609 232.3327 547.4341 L 232.4531 547.6073 C 232.528 547.7644 232.6153 547.9815 232.7017 548.1247 C 237.966 556.8437 243.7767 565.2553 249.8664 573.4165 C 246.9804 571.7078 243.0448 569.7363 239.6378 569.7363 C 238.3274 569.7363 237.4055 570.3021 237.4055 571.7081 C 237.4055 572.0842 237.5773 573.0531 237.9206 574.6133 C 238.0164 574.8951 238.735 577.6228 238.5646 577.8011 C 238.5505 577.8159 238.5125 577.8238 238.4518 577.8238 C 235.9862 577.8238 227.988 571.7991 225.9113 570.238 C 225.6381 570.0526 223.8542 568.7583 223.6235 568.7583 C 222.8346 568.7583 222.516 569.1949 222.6668 570.0674 C 222.8862 571.0045 224.0915 572.6109 224.6961 573.4259 C 222.9335 572.4431 221.1256 571.5414 219.2936 570.6961 C 217.5233 569.8789 216.0196 569.2637 214.7842 568.8519 C 213.5313 568.4343 212.5514 568.2251 211.8458 568.2251 C 210.1524 568.2251 209.2745 569.1348 209.2745 570.8197 C 209.2745 573.3198 212.9066 577.3397 214.522 579.102 C 214.7896 579.3834 215.4019 579.3092 215.6576 579.066 C 215.9751 578.7646 215.8946 578.302 215.6097 578.001 C 214.3706 576.6565 210.7735 572.6993 210.7735 570.8197 C 210.7735 570.0954 211.1613 569.8587 211.8458 569.8587 C 212.4371 569.8587 213.3077 570.0538 214.456 570.443 C 215.6255 570.8395 217.0749 571.4362 218.8023 572.2316 C 221.8034 573.6135 224.7999 575.1748 227.5194 577.0576 L 227.5671 577.0576 C 229.3155 579.1334 231.2325 581.142 233.3466 582.8491 C 233.6003 583.0914 234.1363 583.0554 234.377 582.8255 C 234.7087 582.5052 234.627 581.9117 234.3053 581.6174 C 232.2003 579.9614 230.3062 578.0458 228.5932 575.9898 C 228.5263 575.8016 228.4237 575.6973 228.2618 575.5878 C 227.3145 574.4239 226.421 573.2152 225.5754 571.9757 C 228.0657 573.8621 235.3524 579.3681 238.4518 579.3681 C 239.4522 579.3681 240.0908 578.8823 240.0908 577.8405 C 240.0908 577.6798 240.0398 577.2934 239.938 576.6831 C 239.8394 576.0924 239.6906 575.2752 239.4921 574.2334 L 239.4856 574.2048 C 239.1548 573.1058 238.9893 572.2733 238.9893 571.7081 C 238.9893 571.4232 239.2055 571.2806 239.6378 571.2806 C 243.8563 571.2806 249.2521 574.6989 252.5978 577.0576 L 252.614 577.0576 C 255.4809 580.8144 258.41 584.5246 261.3889 588.1929 C 254.7295 587.8653 248.0581 587.3119 241.4574 586.3589 C 240.9038 586.3119 240.5407 586.6044 240.5407 587.1722 C 240.5407 587.5846 240.8128 587.8321 241.1697 587.9801 C 244.6682 588.4835 248.2322 588.8537 251.7548 589.1434 C 255.31 589.4357 258.965 589.6423 262.7189 589.7616 L 276.9704 606.653 C 277.1147 606.8041 277.2981 606.9192 277.5129 606.9192 C 278.0408 606.9192 278.3049 606.6468 278.3049 606.1025 C 278.3049 605.9169 278.2794 605.7051 278.1502 605.5614 L 264.8429 589.8804 C 271.7181 590.1494 278.6034 590.1429 285.478 589.8549 C 285.9491 589.8555 286.1853 589.5831 286.1853 589.0388 C 286.1853 588.5538 285.9211 588.3109 285.3933 588.3109 L 285.3833 588.312 C 278.0643 588.596 270.7339 588.5909 263.4177 588.2295 C 257.55 581.0409 252.2271 574.1303 247.4507 567.4995 C 242.6984 560.9021 238.4867 554.5817 234.8164 548.5397 C 234.9386 548.3083 234.8595 547.9418 234.7115 547.7445 C 234.4167 547.2496 233.769 546.1843 233.1133 546.1843 Z M 217.2685 580.2233 C 216.8076 580.2233 216.4768 580.4671 216.4768 580.9513 C 216.4768 581.4275 216.6559 581.5176 216.9658 581.8436 C 217.0514 581.9638 217.1517 582.1109 217.2657 582.2838 C 217.5599 582.7391 217.745 583.2785 218.37 583.2785 C 218.9798 583.2785 219.168 582.6838 219.0472 582.1747 C 219.0212 582.0653 218.9769 581.9777 218.914 581.9117 C 218.6155 581.5993 218.3822 581.2486 218.1759 580.8705 L 217.8369 580.5153 C 217.7158 580.3081 217.5009 580.2233 217.2685 580.2233 Z M 268.0458 577.167 C 267.6444 576.9618 267.2212 576.6769 266.777 576.3129 C 267.6917 576.1757 268.1773 576.2914 268.9843 576.7532 C 269.1763 576.8629 269.7732 577.2266 269.7732 577.4851 C 269.7732 577.533 269.6698 577.5571 269.4637 577.5571 C 269.0274 577.5571 268.5546 577.427 268.0458 577.167\" fill=\"#b6863d\" fill-rule=\"evenodd\"></path><path d=\"M 331.8077 572.0187 C 330.7589 572.1333 329.7053 572.2305 328.6477 572.3019 C 325.7422 572.4978 323.966 572.5766 322.2476 572.307 C 320.5477 572.0397 318.8716 571.4254 316.1741 570.2394 C 315.182 568.7019 313.8471 567.4059 312.3782 566.3254 C 311.0916 565.3786 309.4866 564.4925 307.8473 564.4925 C 306.8929 564.4925 306.123 564.8737 306.123 565.9313 C 306.123 566.6882 306.9173 567.5545 308.5047 568.5279 C 310.0167 569.4554 312.277 570.5147 315.2843 571.7049 L 315.3393 571.7248 C 315.3665 571.7778 315.7311 572.5556 315.7271 572.5638 C 315.7007 572.6191 315.5893 572.4694 315.2358 572.4479 C 314.7593 572.4187 314.0634 572.3453 313.1495 572.2296 C 311.7767 571.9893 310.7996 571.8691 310.2197 571.8691 C 309.0095 571.8691 307.8774 572.2492 307.9001 573.6677 C 303.4196 570.3698 298.8031 567.2582 294.0562 564.3567 C 291.2587 562.6466 285.3907 559.1599 282.0886 559.1599 C 280.3955 559.1599 279.5173 560.0693 279.5173 561.7542 C 279.5173 563.0513 280.3861 564.552 281.0914 565.6 C 281.9801 566.9201 282.9331 568.2226 283.9966 569.408 C 285.4029 570.9779 286.869 572.5103 288.3234 574.0362 L 288.3257 574.0381 C 289.5523 575.2936 295.1929 581.0516 295.1929 582.7286 C 295.1929 583.3239 293.6693 584.5017 293.2254 584.837 C 290.2649 581.5939 287.0614 578.4979 283.5743 575.8228 C 283.4932 575.7214 283.3909 575.663 283.2976 575.6117 C 280.4794 573.4664 277.3562 571.7883 274.0564 570.5116 C 272.3227 569.8409 270.8223 569.3372 269.5569 569.0018 C 268.2754 568.662 267.2271 568.4919 266.4133 568.4919 C 264.3514 568.4919 262.1472 569.0537 262.1472 571.5303 C 262.1472 573.4358 263.4222 575.2023 264.6833 576.5247 C 265.9031 577.8048 267.6019 579.1904 269.4637 579.1904 C 270.582 579.1904 271.2722 578.6416 271.2722 577.4851 C 271.2722 576.6506 270.6477 576.013 270.0065 575.5652 C 268.8137 574.7301 267.6353 574.5696 266.2183 574.8066 C 265.9334 574.8542 265.6843 574.9211 265.4714 575.0067 C 264.704 574.1079 263.7309 572.7617 263.7309 571.5303 C 263.7309 570.2233 265.4578 570.1252 266.4133 570.1252 C 267.1537 570.1252 268.1189 570.2814 269.3081 570.5932 C 270.5083 570.9076 271.9395 571.3829 273.5997 572.0173 C 276.6954 573.2005 279.6137 574.7525 282.2743 576.7333 C 282.3239 576.8022 282.3627 576.8544 282.4277 576.9111 C 285.882 579.5079 289.0392 582.4879 291.9212 585.7047 C 291.2638 586.1854 289.6855 587.3516 289.6855 588.2389 C 289.6855 589.9314 291.8843 591.8083 293.0975 592.7706 C 295.3522 594.5596 297.1627 595.4545 298.5267 595.4545 C 299.3369 595.4545 299.7422 595.0043 299.7422 594.1046 C 299.7422 592.1447 295.5532 587.4131 294.2524 585.9386 C 294.5083 585.6883 294.7663 585.445 295.0313 585.2041 C 295.6799 584.6119 296.7766 583.67 296.7766 582.7286 C 296.7766 581.1012 295.357 579.4067 294.3337 578.2329 L 292.2126 575.8291 C 289.9395 573.3159 287.4869 570.9728 285.2223 568.4525 C 284.2075 567.3234 283.2786 566.1207 282.4047 564.88 C 281.8358 564.0721 281.0163 562.7735 281.0163 561.7542 C 281.0163 561.0302 281.4043 560.7933 282.0886 560.7933 C 285.1656 560.7933 290.9418 564.2578 293.5488 565.8619 C 299.0404 569.2408 304.3568 572.8949 309.4846 576.8033 C 309.9042 577.2523 310.3699 577.6719 310.8464 578.0597 C 312.3079 579.2491 314.204 580.4348 316.1509 580.4348 C 317.2181 580.4348 317.9597 579.9555 317.9597 578.8179 C 317.9597 578.6612 317.9387 578.4775 317.8536 578.342 C 317.5753 577.2183 316.9908 576.2616 315.9825 575.6576 C 315.866 575.555 315.7106 575.513 315.5579 575.513 C 315.03 575.513 314.7659 575.7854 314.7659 576.3297 C 314.7659 576.6327 314.8832 576.9099 315.1786 577.029 C 315.8127 577.4071 316.3759 577.94 316.3759 578.7292 C 316.3759 578.8868 316.2986 578.8902 316.1509 578.8902 C 314.6536 578.8902 313.0461 577.813 311.9221 576.9094 C 311.0202 576.1848 309.4866 574.8143 309.4866 573.5747 C 309.4866 573.4324 310.1338 573.4137 310.2197 573.4137 C 310.7696 573.4137 311.6565 573.5305 312.8794 573.7635 C 314.1408 574.0041 314.9779 574.1246 315.3883 574.1246 C 316.4068 574.1246 317.2819 573.7462 317.2819 572.597 L 317.2034 572.402 C 317.1929 572.3909 317.1912 572.3481 317.1895 572.3317 L 317.5659 572.4505 C 321.9729 573.8403 322.7335 574.0801 326.9911 573.7986 C 328.2633 573.7294 329.5304 573.637 330.7935 573.4655 C 332.5246 573.2308 334.2611 573.0415 335.992 572.8045 C 337.4745 572.6032 338.9448 572.3294 340.422 572.0958 C 342.7965 571.7248 345.1467 571.2582 347.5037 570.7936 C 350.1247 570.2777 352.7459 569.7612 355.3534 569.2088 C 359.5819 568.313 363.7984 567.5247 368.0206 566.7361 C 370.9193 566.1947 373.8214 565.7247 376.7406 565.3066 C 377.4583 565.2043 378.1882 565.1053 378.9346 565.0129 C 379.9729 564.8868 381.018 564.8233 382.0575 564.7059 C 384.0741 564.4777 386.1048 564.4335 388.1324 564.4165 C 388.5041 564.4131 388.8782 564.4587 389.2479 564.4947 C 389.2711 564.5373 389.2881 564.5877 389.3049 564.6385 C 389.4313 565.0177 389.5509 565.151 389.9194 565.3216 C 390.1028 565.3179 390.7706 565.344 390.8917 565.2884 C 391.4223 565.0424 391.6375 564.7187 391.7911 564.171 L 391.5173 563.3821 L 391.7883 563.1667 C 391.195 562.8773 390.6017 562.5865 390.0061 562.3019 L 387.4207 562.5544 C 386.4203 562.6661 385.4251 562.7157 384.4236 562.8107 C 381.0336 563.1316 377.6474 563.6951 374.2838 564.2229 C 371.2192 564.6983 368.1729 565.3145 365.1279 565.9027 C 362.6093 566.3829 360.0989 566.9019 357.5906 567.4326 L 347.0936 569.6155 C 344.857 570.0645 342.6041 570.4021 340.3604 570.8106 C 338.5681 571.1335 336.7621 571.3767 334.9585 571.627 C 333.9133 571.7704 332.8631 571.9034 331.8077 572.0187 Z M 317.1064 572.1256 L 317.0843 572.0998 M 317.0758 572.091 L 317.0818 572.097 M 307.6223 566.0203 C 307.6223 565.95 307.6974 566.1261 307.8473 566.1261 C 310.0122 566.1261 312.0197 567.779 313.4409 569.2649 C 312.0837 568.6778 310.7514 568.0284 309.4719 567.2863 C 308.8162 566.9059 308.3275 566.5938 308.0075 566.3511 C 307.751 566.1564 307.6223 566.0459 307.6223 566.0203 Z M 291.6799 587.829 C 291.9779 587.5685 292.4107 587.2371 292.9779 586.8351 C 294.4174 588.4084 295.5705 589.7707 296.4368 590.9204 C 297.3152 592.0866 297.8932 593.0271 298.1693 593.7403 C 296.6573 593.4302 295.0186 592.2567 293.8309 591.3068 C 293.1355 590.7506 291.2689 589.2114 291.2689 588.2389 C 291.2689 588.2057 291.4061 588.0685 291.6799 587.829 Z \" fill=\"#b6863d\" fill-rule=\"evenodd\"></path></g></g>\n<g id=\"capsG\" clip-path=\"url(#capsClipW)\" mask=\"url(#capsMaskW)\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 197.5156 518.7969 L 197.5156 519.5866 C 198.7622 519.6144 199.8085 519.9194 200.6532 520.501 C 201.4982 521.0827 202.1357 522.0456 202.5652 523.3895 C 202.9946 524.7334 203.2095 526.5275 203.2095 528.7717 L 203.2095 555.2152 C 203.2095 556.2405 203.1259 556.9957 202.9601 557.4804 C 202.794 557.9651 202.4683 558.2979 201.9832 558.4779 C 201.4985 558.6579 200.785 558.762 199.8428 558.7897 L 199.8428 559.6209 C 200.4248 559.5931 201.1867 559.5653 202.1287 559.5378 C 203.0709 559.51 204.0545 559.4961 205.0795 559.4961 C 206.1048 559.4961 207.0955 559.51 208.0514 559.5378 C 209.0072 559.5653 209.8037 559.5931 210.441 559.6209 L 210.441 558.7897 C 209.499 558.762 208.7855 558.6579 208.3008 558.4779 C 207.8158 558.2979 207.4901 557.9651 207.324 557.4804 C 207.1579 556.9954 207.0746 556.2403 207.0746 555.2152 L 207.0746 538.0696 C 207.0746 536.9343 207.0604 534.0498 207.0332 532.7201 C 207.0057 531.3903 206.9427 530.1014 206.8461 528.8547 C 206.7494 527.6083 206.5941 526.5122 206.3682 525.5717 C 205.9019 523.6311 204.9063 522.0176 203.3963 520.7295 C 201.8866 519.4414 199.9261 518.7969 197.5156 518.7969 Z M 159.819 559.6209 C 160.401 559.5931 161.1629 559.5653 162.1049 559.5378 C 163.0471 559.51 163.9752 559.4961 164.8896 559.4961 C 166.1919 559.4961 167.4386 559.51 168.63 559.5378 C 169.8216 559.5653 170.6666 559.5792 171.1653 559.5792 C 173.4097 559.5792 175.2729 559.2606 176.7555 558.6233 C 178.2377 557.9861 179.346 557.1201 180.0802 556.0257 C 180.8147 554.9312 181.1818 553.7052 181.1818 552.3474 C 181.1818 551.5163 181.0154 550.6296 180.6829 549.6877 C 180.3504 548.7454 179.7755 547.8588 178.9583 547.0277 C 178.1408 546.1965 177.0256 545.5106 175.6125 544.9703 C 174.8934 544.6953 174.0773 544.4906 173.1643 544.3554 C 173.3173 544.333 173.4684 544.3095 173.6175 544.2846 C 175.4739 543.9798 176.8107 543.4189 177.6283 542.6014 C 178.4455 541.7841 179.0481 540.5165 179.4362 538.7984 L 180.4751 534.5592 C 180.7523 533.34 181.0363 532.4604 181.3272 531.9201 C 181.618 531.3798 182.0684 531.1236 182.6779 531.1511 C 183.149 531.1789 183.5439 531.3314 183.8625 531.6083 C 184.1811 531.8855 184.5204 532.2594 184.8807 532.7306 L 185.504 532.2733 C 184.9224 531.4144 184.3197 530.7562 183.6961 530.2993 C 183.0728 529.842 182.1929 529.6133 181.057 529.6133 C 180.0317 529.6133 179.1312 529.9183 178.3556 530.5277 C 177.5798 531.1372 176.9978 532.3286 176.61 534.102 L 175.6956 538.2581 C 175.4461 539.4495 175.1621 540.4816 174.8435 541.3544 C 174.5249 542.2272 174.0815 542.9132 173.5135 543.4118 C 172.9457 543.9107 172.1075 544.1598 170.9991 544.1598 L 170.2511 544.1598 L 167.0508 544.1598 L 167.0508 534.6009 C 167.0508 533.6033 167.1338 532.8553 167.3002 532.3564 C 167.4663 531.8578 167.792 531.5253 168.2768 531.3589 C 168.7618 531.1928 169.4752 531.0819 170.4172 531.0264 L 170.4172 530.1952 C 169.78 530.2505 168.9834 530.2854 168.0273 530.2993 C 167.0715 530.3129 166.1088 530.32 165.1388 530.32 C 164.0582 530.32 163.0471 530.3129 162.1049 530.2993 C 161.1629 530.2854 160.401 530.2505 159.819 530.1952 L 159.819 531.0264 C 160.761 531.0819 161.4745 531.1928 161.9595 531.3589 C 162.4445 531.5253 162.7699 531.8578 162.9363 532.3564 C 163.1024 532.8553 163.1854 533.6033 163.1854 534.6009 L 163.1854 555.2152 C 163.1854 556.2405 163.1024 556.9954 162.9363 557.4804 C 162.7699 557.9654 162.4445 558.2979 161.9595 558.4779 C 161.4745 558.6579 160.761 558.762 159.819 558.7897 Z Z M 166.5105 544.1598 L 166.261 544.1598 L 166.261 544.9912 L 169.8352 544.9912 C 171.8025 544.9912 173.3057 545.3028 174.3449 545.9264 C 175.3838 546.5497 176.0905 547.3809 176.4643 548.42 C 176.8385 549.4589 177.0256 550.6157 177.0256 551.8905 C 177.0256 554.0794 176.506 555.7765 175.4668 556.9818 C 174.4279 558.1871 172.6478 558.7897 170.1264 558.7897 C 168.8516 558.7897 168.0205 558.5542 167.6327 558.0831 C 167.2447 557.6119 167.0508 556.6561 167.0508 555.2152 L 167.0508 544.8421 L 166.4274 544.8665 Z Z M 167.0508 544.1598 L 166.5105 544.1598 M 197.3492 559.6209 L 197.3492 558.7897 C 196.4072 558.762 195.6937 558.6579 195.2087 558.4779 C 194.724 558.2979 194.3983 557.9654 194.2322 557.4804 C 194.0658 556.9954 193.9827 556.2405 193.9827 555.2152 L 193.9827 534.6009 C 193.9827 533.6033 194.0658 532.8553 194.2322 532.3564 C 194.3983 531.8578 194.724 531.5253 195.2087 531.3589 C 195.6937 531.1928 196.4072 531.0819 197.3492 531.0264 L 197.3492 530.1952 C 196.7119 530.2505 195.9154 530.2854 194.9593 530.2993 C 194.0034 530.3129 193.0408 530.32 192.0708 530.32 C 190.9902 530.32 189.9791 530.3129 189.0369 530.2993 C 188.0949 530.2854 187.3329 530.2505 186.751 530.1952 L 186.751 531.0264 C 187.6929 531.0819 188.4064 531.1928 188.8914 531.3589 C 189.3764 531.5253 189.7019 531.8578 189.8683 532.3564 C 190.0344 532.8553 190.1174 533.6033 190.1174 534.6009 L 190.1174 555.2152 C 190.1174 556.2405 190.0344 556.9954 189.8683 557.4804 C 189.7019 557.9654 189.3764 558.2979 188.8914 558.4779 C 188.4064 558.6579 187.6929 558.762 186.751 558.7897 L 186.751 559.6209 C 187.3329 559.5931 188.0949 559.5653 189.0369 559.5378 C 189.9791 559.51 190.9902 559.4961 192.0708 559.4961 C 193.0408 559.4961 194.0034 559.51 194.9593 559.5378 C 195.9154 559.5653 196.7119 559.5931 197.3492 559.6209 Z M 224.2395 559.6209 L 224.2395 558.7897 C 223.2975 558.762 222.584 558.6579 222.099 558.4779 C 221.6143 558.2979 221.2886 557.9654 221.1225 557.4804 C 220.9561 556.9954 220.873 556.2405 220.873 555.2152 L 220.873 534.6009 C 220.873 533.6033 220.9561 532.8553 221.1225 532.3564 C 221.2886 531.8578 221.6143 531.5321 222.099 531.3798 C 222.584 531.2273 223.2975 531.1511 224.2395 531.1511 L 227.2734 531.1511 C 228.5756 531.1511 229.6355 531.2897 230.453 531.5666 C 231.2702 531.8439 231.9214 532.2801 232.4064 532.876 C 232.8914 533.4718 233.2585 534.2683 233.5076 535.2659 C 233.7571 536.2634 233.951 537.4823 234.0896 538.9231 L 235.0454 538.9231 C 234.9624 538.0642 234.9207 536.9281 234.9207 535.515 C 234.9207 534.9886 234.9417 534.2338 234.9831 533.2501 C 235.0247 532.2665 235.101 531.248 235.2118 530.1952 C 233.7987 530.2505 232.2054 530.2854 230.4323 530.2993 C 228.659 530.3129 227.0795 530.32 225.6942 530.32 C 225.0845 530.32 224.3018 530.32 223.346 530.32 C 222.3901 530.32 221.3578 530.3129 220.2497 530.2993 C 219.1414 530.2854 218.0191 530.2715 216.883 530.2576 C 215.7471 530.2437 214.6666 530.223 213.6413 530.1952 L 213.6413 531.0264 C 214.5832 531.0819 215.2967 531.1928 215.7817 531.3589 C 216.2667 531.5253 216.5922 531.8578 216.7586 532.3564 C 216.9247 532.8553 217.0077 533.6033 217.0077 534.6009 L 217.0077 555.2152 C 217.0077 556.2405 216.9247 556.9954 216.7586 557.4804 C 216.5922 557.9654 216.2667 558.2979 215.7817 558.4779 C 215.2967 558.6579 214.5832 558.762 213.6413 558.7897 L 213.6413 559.6209 C 214.2232 559.5931 214.9852 559.5653 215.9271 559.5378 C 216.8694 559.51 217.8805 559.4961 218.9611 559.4961 C 219.9311 559.4961 220.8937 559.51 221.8496 559.5378 C 222.8057 559.5653 223.6022 559.5931 224.2395 559.6209 Z M 249.7584 559.8286 L 259.8996 533.6864 C 260.3151 532.6336 260.786 531.934 261.3127 531.5876 C 261.7027 531.3311 262.0698 531.1621 262.4142 531.0802 C 262.9089 531.2404 263.4143 531.5482 263.931 532.0032 C 264.513 532.5157 265.0394 533.3956 265.5105 534.6422 L 275.2773 559.8286 C 275.3881 559.8286 275.4989 559.8286 275.6098 559.8286 C 275.7206 559.8286 275.8314 559.8286 275.9423 559.8286 L 286.0835 533.6864 C 286.4991 532.6336 286.9699 531.934 287.4966 531.5876 C 288.023 531.2412 288.5077 531.0541 288.951 531.0264 L 288.951 530.1952 C 288.3969 530.2505 287.7182 530.2854 286.9146 530.2993 C 286.111 530.3129 285.3077 530.32 284.504 530.32 C 283.4235 530.32 282.4121 530.3129 281.4701 530.2993 C 280.5279 530.2854 279.7659 530.2505 279.1843 530.1952 L 279.1843 531.0264 C 280.5973 531.0819 281.4976 531.3243 281.8857 531.7537 C 282.2734 532.1832 282.1904 533.1044 281.6362 534.5175 L 279.0853 541.3337 L 269.0351 541.3337 L 267.3391 536.9281 C 266.8958 535.82 266.6324 534.8849 266.5494 534.1229 C 266.4663 533.361 266.5426 532.7583 266.7781 532.315 C 267.0134 531.8717 267.4154 531.553 267.9834 531.3589 C 268.5512 531.165 269.2647 531.0541 270.1236 531.0264 L 270.1236 530.1952 C 269.348 530.2505 268.5373 530.2854 267.6923 530.2993 C 266.8473 530.3129 266.0647 530.32 265.3441 530.32 C 264.6513 530.32 264.0626 530.3129 263.5778 530.2993 C 263.2958 530.2913 263.0256 530.276 262.7671 530.2539 L 262.7671 530.1952 C 262.6673 530.2052 262.5633 530.2145 262.4553 530.223 L 262.2271 530.1952 L 262.2271 530.24 C 261.7886 530.2698 261.29 530.2896 260.7307 530.2993 C 259.9271 530.3129 259.1237 530.32 258.3201 530.32 C 257.2396 530.32 256.2282 530.3129 255.2862 530.2993 C 254.344 530.2854 253.582 530.2505 253.0003 530.1952 L 253.0003 531.0264 C 254.4134 531.0819 255.3137 531.3243 255.7018 531.7537 C 256.0895 532.1832 256.0065 533.1044 255.4523 534.5175 L 252.9014 541.3337 L 242.8512 541.3337 L 241.1552 536.9281 C 240.7119 535.82 240.4485 534.8849 240.3655 534.1229 C 240.2824 533.361 240.3587 532.7583 240.5942 532.315 C 240.8295 531.8717 241.2315 531.553 241.7995 531.3589 C 242.3673 531.165 243.0808 531.0541 243.9397 531.0264 L 243.9397 530.1952 C 243.1641 530.2505 242.3534 530.2854 241.5084 530.2993 C 240.6634 530.3129 239.8808 530.32 239.1602 530.32 C 238.4674 530.32 237.8786 530.3129 237.3939 530.2993 C 236.9089 530.2854 236.4588 530.2505 236.0432 530.1952 L 236.0432 531.0264 C 236.5974 531.165 237.1652 531.4907 237.7471 532.0032 C 238.3291 532.5157 238.8555 533.3956 239.3266 534.6422 L 249.0934 559.8286 C 249.2042 559.8286 249.315 559.8286 249.4259 559.8286 C 249.5367 559.8286 249.6475 559.8286 249.7584 559.8286 Z M 252.5902 542.1651 L 247.722 555.1739 L 248.387 555.7141 L 243.1712 542.1651 Z Z M 278.7741 542.1651 L 273.9059 555.1739 L 274.5709 555.7141 L 269.3551 542.1651 Z Z M 289.616 559.6209 C 290.198 559.5931 290.9599 559.5653 291.9019 559.5378 C 292.8441 559.51 293.7722 559.4961 294.6866 559.4961 C 295.9889 559.4961 297.2356 559.51 298.427 559.5378 C 299.6186 559.5653 300.4637 559.5792 300.9623 559.5792 C 303.2067 559.5792 305.07 559.2606 306.5525 558.6233 C 308.0347 557.9861 309.1431 557.1201 309.8772 556.0257 C 310.6117 554.9312 310.9788 553.7052 310.9788 552.3474 C 310.9788 551.5163 310.8124 550.6296 310.4799 549.6877 C 310.1474 548.7454 309.5725 547.8588 308.7553 547.0277 C 307.9378 546.1965 306.8226 545.5106 305.4095 544.9703 C 304.6904 544.6953 303.8743 544.4906 302.9613 544.3554 C 303.1143 544.333 303.2654 544.3095 303.4145 544.2846 C 305.2709 543.9798 306.6077 543.4189 307.4253 542.6014 C 308.2425 541.7841 308.8451 540.5165 309.2332 538.7984 L 310.2721 534.5592 C 310.5493 533.34 310.8334 532.4604 311.1242 531.9201 C 311.415 531.3798 311.8654 531.1236 312.4749 531.1511 C 312.946 531.1789 313.3409 531.3314 313.6595 531.6083 C 313.9781 531.8855 314.3174 532.2594 314.6777 532.7306 L 315.301 532.2733 C 314.7194 531.4144 314.1167 530.7562 313.4931 530.2993 C 312.8698 529.842 311.9899 529.6133 310.854 529.6133 C 309.8288 529.6133 308.9282 529.9183 308.1526 530.5277 C 307.3768 531.1372 306.7948 532.3286 306.4071 534.102 L 305.4926 538.2581 C 305.2431 539.4495 304.9591 540.4816 304.6405 541.3544 C 304.3219 542.2272 303.8786 542.9132 303.3105 543.4118 C 302.7427 543.9107 301.9045 544.1598 300.7962 544.1598 L 300.0481 544.1598 L 296.8478 544.1598 L 296.8478 534.6009 C 296.8478 533.6033 296.9308 532.8553 297.0972 532.3564 C 297.2633 531.8578 297.589 531.5253 298.0738 531.3589 C 298.5588 531.1928 299.2723 531.0819 300.2142 531.0264 L 300.2142 530.1952 C 299.577 530.2505 298.7804 530.2854 297.8243 530.2993 C 296.8685 530.3129 295.9058 530.32 294.9358 530.32 C 293.8552 530.32 292.8441 530.3129 291.9019 530.2993 C 290.9599 530.2854 290.198 530.2505 289.616 530.1952 L 289.616 531.0264 C 290.558 531.0819 291.2715 531.1928 291.7565 531.3589 C 292.2415 531.5253 292.5669 531.8578 292.7333 532.3564 C 292.8994 532.8553 292.9825 533.6033 292.9825 534.6009 L 292.9825 555.2152 C 292.9825 556.2405 292.8994 556.9954 292.7333 557.4804 C 292.5669 557.9654 292.2415 558.2979 291.7565 558.4779 C 291.2715 558.6579 290.558 558.762 289.616 558.7897 Z Z M 296.3075 544.1598 L 296.058 544.1598 L 296.058 544.9912 L 299.6323 544.9912 C 301.5995 544.9912 303.1027 545.3028 304.1419 545.9264 C 305.1808 546.5497 305.8875 547.3809 306.2614 548.42 C 306.6355 549.4589 306.8226 550.6157 306.8226 551.8905 C 306.8226 554.0794 306.303 555.7765 305.2638 556.9818 C 304.2249 558.1871 302.4448 558.7897 299.9234 558.7897 C 298.6486 558.7897 297.8175 558.5542 297.4297 558.0831 C 297.0417 557.6119 296.8478 556.6561 296.8478 555.2152 L 296.8478 544.8421 L 296.2244 544.8665 Z Z M 296.8478 544.1598 L 296.3075 544.1598 M 325.4423 560.0781 C 326.8276 560.0781 327.8803 559.9188 328.6009 559.6002 C 329.3212 559.2815 329.9584 558.9281 330.5126 558.5403 C 330.8451 558.3464 331.1152 558.2007 331.323 558.1037 C 331.5311 558.0068 331.7318 557.9583 331.9257 557.9583 C 332.2029 557.9583 332.4039 558.1108 332.5283 558.4156 C 332.653 558.7203 332.7571 559.1775 332.8401 559.787 L 333.796 559.787 C 333.7685 559.3161 333.7336 558.7549 333.6922 558.1037 C 333.6506 557.4526 333.6228 556.5937 333.6092 555.5271 C 333.5953 554.4604 333.5882 553.0541 333.5882 551.3085 L 332.6323 551.3085 C 332.5493 552.6386 332.2582 553.913 331.7596 555.1322 C 331.2609 556.3514 330.5336 557.3489 329.5774 558.1247 C 328.6216 558.9006 327.3678 559.2883 325.8162 559.2883 C 324.3478 559.2883 323.1354 558.845 322.1796 557.9583 C 321.2237 557.0717 320.7458 555.908 320.7458 554.4672 C 320.7458 553.2202 321.0644 552.1745 321.7017 551.3292 C 322.3389 550.4842 323.191 549.7223 324.2577 549.0434 C 325.3243 548.3645 326.4812 547.6374 327.7281 546.8615 C 329.169 545.9749 330.4502 545.095 331.5725 544.2222 C 332.6947 543.3494 333.5814 542.3868 334.2325 541.3337 C 334.8836 540.2809 335.209 539.0062 335.209 537.51 C 335.209 535.7367 334.8074 534.2683 334.0037 533.1044 C 333.2004 531.9408 332.1337 531.068 330.8037 530.4861 C 329.4737 529.9044 328.0051 529.6133 326.3981 529.6133 C 324.9295 529.6133 323.7659 529.7797 322.907 530.1122 C 322.0481 530.4447 321.3136 530.7911 320.7042 531.1511 C 320.0947 531.5391 319.6236 531.733 319.2911 531.733 C 319.0139 531.733 318.8132 531.5805 318.6884 531.2758 C 318.5637 530.9711 318.46 530.5139 318.3766 529.9044 L 317.4208 529.9044 C 317.4763 530.4861 317.5109 531.1721 317.5248 531.9615 C 317.5384 532.7512 317.5523 533.7833 317.5662 535.0581 C 317.5801 536.3325 317.5872 537.9395 317.5872 539.879 L 318.543 539.879 C 318.6539 538.2167 318.9654 536.665 319.4782 535.2242 C 319.9907 533.7833 320.7804 532.6265 321.8471 531.7537 C 322.9138 530.8809 324.3339 530.4447 326.1073 530.4447 C 327.0214 530.4447 327.8874 530.6318 328.7047 531.0057 C 329.5222 531.3798 330.194 531.9754 330.7204 532.7929 C 331.2471 533.6101 331.5101 534.67 331.5101 535.9723 C 331.5101 537.1084 331.24 538.0988 330.6997 538.9441 C 330.1594 539.7891 329.4043 540.5788 328.4345 541.313 C 327.4648 542.0472 326.3289 542.8023 325.0267 543.5782 C 323.7242 544.3815 322.5053 545.199 321.3692 546.0301 C 320.233 546.8615 319.3257 547.8242 318.6468 548.9186 C 317.9682 550.0131 317.6286 551.3363 317.6286 552.888 C 317.6286 554.5227 317.9957 555.8734 318.7301 556.9401 C 319.4643 558.0068 320.4272 558.7965 321.6186 559.309 C 322.81 559.8218 324.0845 560.0781 325.4423 560.0781 Z M 349.2986 558.8728 C 348.0239 558.8728 347.1928 558.6372 346.805 558.1661 C 346.4169 557.6953 346.2231 556.7391 346.2231 555.2983 L 346.2231 534.5175 C 346.2231 533.0769 346.424 532.1208 346.8257 531.65 C 347.2274 531.1789 348.0656 530.9433 349.34 530.9433 C 352.3603 530.9433 354.7015 531.4907 356.364 532.5851 C 358.0265 533.6796 359.1901 535.2797 359.8551 537.3853 C 360.5202 539.4912 360.8527 542.0543 360.8527 545.0743 C 360.8527 548.1777 360.4856 550.7476 359.7514 552.784 C 359.0169 554.8204 357.8117 556.3443 356.1355 557.3557 C 354.4591 558.3671 352.1801 558.8728 349.2986 558.8728 Z M 350.3375 559.6209 C 355.2973 559.6209 358.9824 558.381 361.3929 555.9009 C 363.8035 553.4212 365.0088 549.8677 365.0088 545.2404 C 365.0088 542.2204 364.4201 539.5813 363.2426 537.323 C 362.065 535.0649 360.354 533.3122 358.1096 532.0655 C 355.8654 530.8186 353.1501 530.1952 349.9637 530.1952 C 349.5481 530.1952 348.9939 530.2091 348.3011 530.2369 C 347.6083 530.2644 346.8949 530.2854 346.1607 530.2993 C 345.4265 530.3129 344.7544 530.32 344.145 530.32 C 343.1752 530.32 342.2194 530.3129 341.2772 530.2993 C 340.3352 530.2854 339.5733 530.2505 338.9913 530.1952 L 338.9913 531.0264 C 339.9333 531.0819 340.6467 531.1928 341.1317 531.3589 C 341.6168 531.5253 341.9422 531.8578 342.1086 532.3564 C 342.2747 532.8553 342.3577 533.6033 342.3577 534.6009 L 342.3577 555.2152 C 342.3577 556.2405 342.2747 556.9954 342.1086 557.4804 C 341.9422 557.9654 341.6168 558.2979 341.1317 558.4779 C 340.6467 558.6579 339.9333 558.762 338.9913 558.7897 L 338.9913 559.6209 C 339.5733 559.5931 340.3352 559.5585 341.2772 559.5168 C 342.2194 559.4754 343.1475 559.4683 344.0619 559.4961 C 345.0317 559.5239 346.1261 559.5517 347.3453 559.5792 C 348.5645 559.607 349.5617 559.6209 350.3375 559.6209 Z M 379.8462 559.8286 L 389.9874 533.6864 C 390.403 532.6336 390.8738 531.934 391.4005 531.5876 C 391.9269 531.2412 392.4116 531.0541 392.855 531.0264 L 392.855 530.1952 C 392.3008 530.2505 391.6222 530.2854 390.8186 530.2993 C 390.0149 530.3129 389.2116 530.32 388.408 530.32 C 387.3274 530.32 386.316 530.3129 385.374 530.2993 C 384.4318 530.2854 383.6699 530.2505 383.0882 530.1952 L 383.0882 531.0264 C 384.5013 531.0819 385.4015 531.3243 385.7896 531.7537 C 386.1774 532.1832 386.0943 533.1044 385.5402 534.5175 L 382.9893 541.3337 L 372.939 541.3337 L 371.2431 536.9281 C 370.7997 535.82 370.5364 534.8849 370.4533 534.1229 C 370.3703 533.361 370.4465 532.7583 370.6821 532.315 C 370.9174 531.8717 371.3193 531.553 371.8874 531.3589 C 372.4551 531.165 373.1686 531.0541 374.0275 531.0264 L 374.0275 530.1952 C 373.252 530.2505 372.4413 530.2854 371.5963 530.2993 C 370.7512 530.3129 369.9686 530.32 369.248 530.32 C 368.5552 530.32 367.9665 530.3129 367.4818 530.2993 C 366.9968 530.2854 366.5466 530.2505 366.1311 530.1952 L 366.1311 531.0264 C 366.6852 531.165 367.253 531.4907 367.835 532.0032 C 368.4169 532.5157 368.9433 533.3956 369.4144 534.6422 L 379.1812 559.8286 C 379.292 559.8286 379.4029 559.8286 379.5137 559.8286 C 379.6245 559.8286 379.7354 559.8286 379.8462 559.8286 Z M 382.678 542.1651 L 377.8098 555.1739 L 378.4748 555.7141 L 373.2591 542.1651 Z Z M 426.2289 559.6209 L 426.2289 558.7897 C 425.287 558.762 424.5735 558.6579 424.0885 558.4779 C 423.6035 558.2979 423.2781 557.9654 423.1117 557.4804 C 422.9456 556.9954 422.8625 556.2405 422.8625 555.2152 L 422.8625 534.6009 C 422.8625 533.6033 422.9456 532.8553 423.1117 532.3564 C 423.2781 531.8578 423.6035 531.5253 424.0885 531.3589 C 424.5735 531.1928 425.287 531.0819 426.2289 531.0264 L 426.2289 530.1952 C 425.5917 530.2505 424.7952 530.2854 423.8391 530.2993 C 422.8832 530.3129 421.9203 530.32 420.9506 530.32 C 419.87 530.32 418.8586 530.3129 417.9166 530.2993 C 416.9747 530.2854 416.2127 530.2505 415.6308 530.1952 L 415.6308 531.0264 C 416.5727 531.0819 417.2862 531.1928 417.7712 531.3589 C 418.2559 531.5253 418.5816 531.8578 418.7477 532.3564 C 418.9141 532.8553 418.9972 533.6033 418.9972 534.6009 L 418.9972 557.4597 L 419.1636 557.335 L 408.981 529.9875 L 408.316 529.9875 L 397.8425 556.9608 L 397.8425 535.0164 C 397.8425 534.0189 397.9324 533.2363 398.1127 532.6682 C 398.2927 532.1001 398.6529 531.6985 399.1932 531.4629 C 399.7335 531.2273 400.5439 531.0819 401.6245 531.0264 L 401.6245 530.1952 C 401.1256 530.2505 400.4745 530.2854 399.6711 530.2993 C 398.8675 530.3129 398.1056 530.32 397.3853 530.32 C 396.6925 530.32 395.9929 530.3129 395.2862 530.2993 C 394.5798 530.2854 393.9911 530.2505 393.52 530.1952 L 393.52 531.0264 C 394.4619 531.0819 395.1754 531.2273 395.6604 531.4629 C 396.1454 531.6985 396.4708 532.1001 396.6372 532.6682 C 396.8033 533.2363 396.8864 534.0189 396.8864 535.0164 L 396.8864 555.2152 C 396.8864 556.2405 396.8033 556.9954 396.6372 557.4804 C 396.4708 557.9654 396.1454 558.2979 395.6604 558.4779 C 395.1754 558.6579 394.4619 558.762 393.52 558.7897 L 393.52 559.6209 C 393.9911 559.5931 394.5798 559.5653 395.2862 559.5378 C 395.9929 559.51 396.6925 559.4961 397.3853 559.4961 C 397.9947 559.4961 398.6252 559.51 399.2763 559.5378 C 399.9274 559.5653 400.4745 559.5931 400.9178 559.6209 L 410.3524 534.767 L 409.646 534.4345 L 418.9972 559.4961 C 419.3297 559.4961 419.6554 559.4961 419.974 559.4961 C 420.2926 559.4961 420.618 559.4961 420.9506 559.4961 C 421.9203 559.4961 422.8832 559.51 423.8391 559.5378 C 424.7952 559.5653 425.5917 559.5931 426.2289 559.6209\" fill=\"#ffffff\" fill-rule=\"evenodd\"></path></g></g>\n<g class=\"ruleG\" clip-path=\"url(#r1ClipW)\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 159.819 521.1833 L 194.1072 521.1833 L 194.1072 517.7818 L 159.819 517.7818 Z\" fill=\"#2c2e35\" fill-rule=\"evenodd\"></path></g></g>\n<g class=\"ruleG\" clip-path=\"url(#r2ClipW)\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 209.5194 521.1833 L 334.04 521.1833 L 334.04 517.7818 L 209.5194 517.7818 Z\" fill=\"#2c2e35\" fill-rule=\"evenodd\"></path></g></g>\n<g id=\"markW\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 363.4532 630.2208 L 324.8759 591.6966 L 320.6991 595.878 L 320.7019 595.9539 L 359.2414 634.4396 Z Z M 397.764 595.8618 L 393.5449 591.647 L 389.3698 595.8278 L 389.3372 595.8697 L 393.5506 600.08 Z Z M 392.0454 601.5878 L 382.0184 591.6144 L 377.8415 595.7963 L 387.8325 605.8069 Z Z M 386.3273 607.314 L 370.5446 591.5857 L 366.3686 595.7674 L 382.1145 611.5334 Z Z M 380.6093 613.0409 L 359.0702 591.5565 L 354.8937 595.7379 L 376.3959 617.2603 Z Z M 374.8904 618.7674 L 347.8238 591.7547 L 343.6472 595.9366 L 370.6775 622.9868 Z Z M 369.1721 624.4943 L 336.2734 591.6495 L 332.0974 595.832 L 364.9595 628.7136 Z\" fill=\"#b6863d\" fill-rule=\"evenodd\"></path></g><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 326.7808 628.473 L 332.3551 628.473 L 332.3551 563.8465 L 326.7808 563.8465 Z Z M 386.1077 628.473 L 391.682 628.473 L 391.682 563.8465 L 386.1077 563.8465 Z\" fill=\"#2c2e35\" fill-rule=\"evenodd\"></path></g></g>\n<g id=\"tagW\"><g transform=\"matrix(1 0 0 -1 0 841.8898)\"><path d=\"M 343.1917 524.0506 L 346.2965 516.047 C 346.4237 515.7247 346.568 515.5104 346.729 515.4043 C 346.8903 515.2986 347.0386 515.2414 347.1746 515.2326 L 347.1746 514.9783 C 347.0046 514.995 346.7971 515.0058 346.5507 515.01 C 346.305 515.0143 346.0589 515.0163 345.8129 515.0163 C 345.4821 515.0163 345.1725 515.0143 344.884 515.01 C 344.5957 515.0058 344.3624 514.995 344.1844 514.9783 L 344.1844 515.2326 C 344.6169 515.2496 344.8925 515.3238 345.0112 515.4554 C 345.13 515.5869 345.1045 515.8687 344.935 516.3015 L 342.5683 522.6253 L 342.7719 522.7906 L 340.5577 517.0397 C 340.4222 516.7001 340.3414 516.4138 340.3162 516.1808 C 340.2907 515.9475 340.314 515.7626 340.3862 515.6271 C 340.4582 515.4914 340.581 515.3939 340.755 515.3346 C 340.9288 515.2751 341.1473 515.2414 341.4104 515.2326 L 341.4104 514.9783 C 341.1729 514.995 340.9248 515.0058 340.666 515.01 C 340.4075 515.0143 340.1677 515.0163 339.9471 515.0163 C 339.7348 515.0163 339.5548 515.0143 339.4063 515.01 C 339.2578 515.0058 339.12 514.995 338.9927 514.9783 L 338.9927 515.2326 C 339.1625 515.2751 339.3363 515.3749 339.5146 515.5316 C 339.6926 515.6887 339.8536 515.958 339.9979 516.3398 L 342.9882 524.0506 C 343.0222 524.0506 343.0559 524.0506 343.0899 524.0506 C 343.1239 524.0506 343.1577 524.0506 343.1917 524.0506 Z M 344.7442 518.6426 L 344.7442 518.3884 L 340.9523 518.3884 L 341.0796 518.6426 Z Z M 347.3779 523.9871 C 347.5562 523.9783 347.7892 523.9698 348.0778 523.9613 C 348.3663 523.9531 348.6501 523.9485 348.9301 523.9485 C 349.329 523.9485 349.7105 523.9531 350.0753 523.9613 C 350.4402 523.9698 350.6987 523.974 350.8515 523.974 C 351.5389 523.974 352.1092 523.8765 352.563 523.6815 C 353.0169 523.4865 353.3562 523.2212 353.5809 522.8861 C 353.8057 522.5511 353.918 522.176 353.918 521.7602 C 353.918 521.5056 353.8672 521.2344 353.7655 520.9458 C 353.6637 520.6572 353.4874 520.386 353.2374 520.1314 C 352.9871 519.8771 352.6458 519.6671 352.2129 519.5015 C 351.7804 519.336 351.2333 519.2535 350.5717 519.2535 L 349.3502 519.2535 L 349.3502 519.5081 L 350.4444 519.5081 C 351.0465 519.5081 351.5068 519.6036 351.8252 519.7944 C 352.1429 519.9851 352.3595 520.2397 352.4737 520.5577 C 352.5885 520.8761 352.6458 521.2298 352.6458 521.6202 C 352.6458 522.2903 352.4865 522.8099 352.1687 523.1789 C 351.8504 523.548 351.3053 523.7323 350.5334 523.7323 C 350.1434 523.7323 349.8888 523.6603 349.77 523.516 C 349.6513 523.372 349.5917 523.0791 349.5917 522.6381 L 349.5917 516.327 C 349.5917 516.0214 349.6175 515.7924 349.6683 515.6399 C 349.719 515.4871 349.8188 515.3854 349.9673 515.3346 C 350.1156 515.2836 350.3341 515.2496 350.6227 515.2326 L 350.6227 514.9783 C 350.4274 514.995 350.1836 515.0058 349.8908 515.01 C 349.5983 515.0143 349.3035 515.0163 349.0064 515.0163 C 348.6759 515.0163 348.3663 515.0143 348.0778 515.01 C 347.7892 515.0058 347.5562 514.995 347.3779 514.9783 L 347.3779 515.2326 C 347.6665 515.2496 347.8847 515.2836 348.0333 515.3346 C 348.1815 515.3854 348.2813 515.4871 348.3323 515.6399 C 348.3831 515.7924 348.4086 516.0214 348.4086 516.327 L 348.4086 522.6381 C 348.4086 522.9522 348.3831 523.1832 348.3323 523.3317 C 348.2813 523.48 348.1815 523.582 348.0333 523.637 C 347.8847 523.692 347.6665 523.7237 347.3779 523.7323 Z Z M 349.401 519.4698 C 349.8591 519.4528 350.2196 519.4335 350.4827 519.4125 C 350.7454 519.3913 350.9597 519.3723 351.125 519.3553 C 351.2906 519.3386 351.4496 519.3173 351.6024 519.2918 C 352.1707 519.1985 352.58 519.0265 352.83 518.7762 C 353.0803 518.5259 353.2649 518.1381 353.3837 517.6123 L 353.7017 516.3143 C 353.7865 515.9409 353.8738 515.6717 353.9625 515.5064 C 354.0518 515.3409 354.1895 515.2623 354.3761 515.2708 C 354.5203 515.2793 354.6411 515.3261 354.7386 515.4109 C 354.8361 515.4956 354.9402 515.6101 355.0504 515.7544 L 355.2412 515.6144 C 355.0632 515.3513 354.8786 515.1501 354.6879 515.01 C 354.4971 514.8703 354.2275 514.8003 353.8797 514.8003 C 353.5662 514.8003 353.2904 514.8935 353.0529 515.0801 C 352.8153 515.2666 352.6373 515.6311 352.5185 516.1742 L 352.2385 517.4467 C 352.1622 517.8112 352.0752 518.1273 351.9777 518.3946 C 351.8799 518.6619 351.7444 518.8717 351.5703 519.0245 C 351.3966 519.1773 351.14 519.2535 350.8007 519.2535 L 349.4262 519.2535 Z Z M 362.5322 523.9871 C 362.4985 523.6642 362.4749 523.3527 362.4622 523.0517 C 362.4497 522.7506 362.4435 522.5193 362.4435 522.3583 C 362.4435 522.1545 362.4474 521.9637 362.4562 521.7857 C 362.4647 521.6074 362.4729 521.4506 362.4814 521.3146 L 362.1886 521.3146 C 362.1294 521.9084 362.0489 522.377 361.9471 522.7206 C 361.8454 523.0644 361.6673 523.3124 361.4125 523.4652 C 361.1582 523.618 360.7637 523.6943 360.2293 523.6943 L 359.5422 523.6943 L 359.5422 516.454 C 359.5422 516.115 359.574 515.8604 359.6374 515.6906 C 359.7012 515.5211 359.8262 515.4066 360.013 515.3474 C 360.1996 515.2878 360.4711 515.2496 360.8274 515.2326 L 360.8274 514.9783 C 360.6069 514.995 360.3268 515.0058 359.9875 515.01 C 359.6482 515.0143 359.3047 515.0163 358.9569 515.0163 C 358.575 515.0163 358.2167 515.0143 357.8817 515.01 C 357.5466 515.0058 357.2773 514.995 357.0738 514.9783 L 357.0738 515.2326 C 357.4301 515.2496 357.7014 515.2878 357.8882 515.3474 C 358.0747 515.4066 358.2 515.5211 358.2635 515.6906 C 358.327 515.8604 358.3587 516.115 358.3587 516.454 L 358.3587 523.6943 L 357.6716 523.6943 C 357.1458 523.6943 356.7535 523.618 356.495 523.4652 C 356.2362 523.3124 356.0559 523.0644 355.9541 522.7206 C 355.8523 522.377 355.7716 521.9084 355.7123 521.3146 L 355.4195 521.3146 C 355.4365 521.4506 355.4473 521.6074 355.4515 521.7857 C 355.4555 521.9637 355.458 522.1545 355.458 522.3583 C 355.458 522.5193 355.4515 522.7506 355.4388 523.0517 C 355.426 523.3527 355.4028 523.6642 355.3688 523.9871 C 355.7251 523.9783 356.1131 523.9698 356.5329 523.9613 C 356.9528 523.9531 357.3748 523.9485 357.7989 523.9485 C 358.2232 523.9485 358.609 523.9485 358.9569 523.9485 C 359.3047 523.9485 359.6888 523.9485 360.1086 523.9485 C 360.5284 523.9485 360.9502 523.9531 361.3745 523.9613 C 361.7986 523.9698 362.1847 523.9783 362.5322 523.9871 Z M 369.6707 523.9106 C 369.993 523.9106 370.2603 523.8743 370.472 523.8023 C 370.6843 523.7303 370.8584 523.639 370.9939 523.5287 C 371.1042 523.444 371.1934 523.3507 371.2612 523.2489 C 371.3289 523.1469 371.38 523.0454 371.4137 522.9434 C 371.4477 522.8416 371.4647 522.7441 371.4647 522.6506 C 371.4647 522.4388 371.3907 522.2733 371.2422 522.1545 C 371.0937 522.0357 370.9304 521.9765 370.7521 521.9765 C 370.5826 521.9765 370.4298 522.0315 370.2943 522.142 C 370.1585 522.252 370.0905 522.409 370.0905 522.6126 C 370.0905 522.7994 370.1543 522.9581 370.2813 523.0896 C 370.4085 523.2212 370.5698 523.2957 370.7649 523.3124 C 370.7308 523.4227 370.6271 523.5182 370.4533 523.5987 C 370.2793 523.6795 370.061 523.7195 369.798 523.7195 C 369.3654 523.7195 369.0111 523.5902 368.7355 523.3317 C 368.46 523.0729 368.322 522.6973 368.322 522.2055 C 368.322 521.968 368.3665 521.7262 368.4555 521.4801 C 368.5448 521.2344 368.7163 520.9923 368.9708 520.7547 C 369.1151 520.7805 369.2636 520.7995 369.4161 520.812 C 369.5689 520.8248 369.6834 520.8313 369.7597 520.8313 C 369.9122 520.8313 370.0355 520.806 370.1288 520.7547 C 370.222 520.704 370.2685 520.632 370.2685 520.5385 C 370.2685 520.4622 370.237 520.403 370.1733 520.3604 C 370.1098 520.3182 370.0227 520.2969 369.9122 520.2969 C 369.7512 520.2969 369.5817 520.3329 369.4037 520.4049 C 369.2254 520.4772 369.0853 520.5345 368.9836 520.5767 C 368.4915 520.4324 368.0929 520.1974 367.7873 519.8706 C 367.4823 519.5441 367.3295 519.0837 367.3295 518.4899 C 367.3295 517.9048 367.4823 517.4087 367.7873 517.0011 C 368.0929 516.594 368.5022 516.2825 369.0153 516.0662 C 369.5284 515.85 370.1032 515.7417 370.7396 515.7417 C 371.1892 515.7417 371.6152 515.7947 372.0183 515.9007 C 372.4211 516.0067 372.7774 516.1615 373.087 516.365 C 373.3968 516.5688 373.6406 516.8126 373.8186 517.0966 C 373.9969 517.3809 374.0859 517.7052 374.0859 518.07 C 374.0859 518.2313 374.0519 518.4371 373.9842 518.6874 C 373.9161 518.9374 373.7764 519.1838 373.5643 519.4253 C 373.352 519.6671 373.0258 519.8559 372.5847 519.9914 L 372.7369 520.1186 C 373.3563 519.9321 373.7974 519.6331 374.0607 519.2218 C 374.3235 518.8102 374.455 518.3501 374.455 517.8413 C 374.455 517.3322 374.3022 516.8443 373.9969 516.3778 C 373.6916 515.9112 373.2506 515.5316 372.6734 515.2391 C 372.0969 514.9463 371.397 514.8003 370.5741 514.8003 C 370.0227 514.8003 369.4989 514.8723 369.0026 515.0163 C 368.5062 515.1606 368.0674 515.3706 367.6859 515.6464 C 367.304 515.922 367.0027 516.255 366.7825 516.6448 C 366.5616 517.0351 366.4514 517.4762 366.4514 517.9686 C 366.4514 518.4264 366.5407 518.8187 366.7187 519.1452 C 366.8967 519.4721 367.1175 519.7411 367.3803 519.9534 C 367.6433 520.1654 367.9061 520.3287 368.1692 520.4432 C 368.4322 520.5577 368.6443 520.636 368.8055 520.6785 C 368.5255 520.806 368.2899 520.9563 368.0991 521.1303 C 367.9084 521.3041 367.7641 521.4949 367.6666 521.7029 C 367.5691 521.9107 367.5203 522.1165 367.5203 522.32 C 367.5203 522.5236 367.5671 522.7206 367.6601 522.9116 C 367.7536 523.1024 367.8894 523.2745 368.0674 523.427 C 368.2457 523.5795 368.4682 523.6982 368.7355 523.783 C 369.0026 523.8683 369.3144 523.9106 369.6707 523.9106 Z M 374.3022 524.1648 C 374.828 524.1648 375.2694 524.0146 375.6257 523.7133 C 375.9817 523.4119 376.16 522.9901 376.16 522.447 C 376.16 522.1587 376.1067 521.9022 376.0007 521.6774 C 375.8947 521.4526 375.7504 521.2553 375.5682 521.0858 C 375.3859 520.916 375.1801 520.776 374.9511 520.666 C 374.756 520.5725 374.4992 520.471 374.1814 520.3604 C 373.8631 520.2502 373.5241 520.1399 373.1632 520.0299 C 372.803 519.9194 372.4594 519.8111 372.1329 519.7051 C 371.806 519.5991 371.541 519.5081 371.3374 519.4315 C 371.0237 519.3128 370.7583 519.1665 370.542 518.9924 C 370.3258 518.8187 370.2178 518.5959 370.2178 518.3246 C 370.2178 518.1041 370.2813 517.9173 370.4085 517.7648 C 370.5361 517.6123 370.6909 517.4974 370.8731 517.4212 C 371.0554 517.3449 371.2272 517.3067 371.3882 517.3067 C 371.4647 517.3067 371.5603 517.3174 371.6745 517.3387 C 371.7893 517.3597 371.8933 517.3914 371.9866 517.434 C 372.0796 517.4762 372.1348 517.5275 372.1518 517.5867 C 372.0161 517.6123 371.8826 517.6738 371.751 517.771 C 371.6198 517.8685 371.5537 518.0236 371.5537 518.2356 C 371.5537 518.4391 371.6218 518.6004 371.7573 518.7192 C 371.8933 518.8377 372.0586 518.8972 372.2536 518.8972 C 372.4571 518.8972 372.6207 518.8334 372.7434 518.7061 C 372.8665 518.5791 372.9283 518.4136 372.9283 518.2101 C 372.9283 517.9725 372.8494 517.771 372.6927 517.6057 C 372.5359 517.4402 372.3406 517.3174 372.1073 517.2367 C 371.874 517.1562 371.643 517.1159 371.4137 517.1159 C 371.1764 517.1159 370.9346 517.1666 370.6886 517.2687 C 370.4426 517.3702 370.239 517.5295 370.0777 517.7458 C 369.9167 517.962 369.8359 518.2483 369.8359 518.6047 C 369.8359 518.9014 369.902 519.1645 370.0335 519.3935 C 370.1648 519.6223 370.362 519.8258 370.6248 520.0041 C 370.8879 520.1821 371.2102 520.3349 371.592 520.4622 C 371.8466 520.5472 372.1561 520.6405 372.5206 520.742 C 372.8857 520.844 373.2608 520.9543 373.6468 521.0731 C 374.0329 521.1918 374.383 521.3234 374.6968 521.4674 C 375.1209 521.6627 375.4094 521.862 375.5619 522.0655 C 375.7144 522.269 375.791 522.4771 375.791 522.6891 C 375.791 522.9349 375.7229 523.1534 375.5874 523.3445 C 375.4517 523.5352 375.2714 523.6877 375.0466 523.8023 C 374.8218 523.9171 374.578 523.974 374.315 523.974 C 374.2129 523.974 374.1282 523.9658 374.0607 523.9485 C 373.9927 523.9318 373.9501 523.9018 373.9331 523.8595 C 374.0519 523.8003 374.1409 523.7155 374.2004 523.6053 C 374.2597 523.4947 374.2894 523.3844 374.2894 523.2745 C 374.2894 523.0962 374.2194 522.9476 374.0794 522.8289 C 373.9394 522.7101 373.7718 522.6506 373.5768 522.6506 C 373.4155 522.6506 373.2633 522.7038 373.119 522.8099 C 372.9745 522.9159 372.9025 523.0749 372.9025 523.2869 C 372.9025 523.5075 372.977 523.6815 373.1253 523.8088 C 373.2738 523.9358 373.4561 524.0271 373.6723 524.0823 C 373.8886 524.1373 374.0987 524.1648 374.3022 524.1648 Z M 386.4665 523.9871 C 386.4325 523.69 386.409 523.4014 386.3965 523.1217 C 386.3837 522.8416 386.3772 522.6296 386.3772 522.4856 C 386.3772 522.3328 386.3812 522.1862 386.39 522.0465 C 386.3985 521.9065 386.407 521.7897 386.4152 521.6964 L 386.1227 521.6964 C 386.0717 522.197 385.9997 522.5936 385.9067 522.8861 C 385.8131 523.1789 385.6538 523.3867 385.429 523.5097 C 385.2045 523.6328 384.8672 523.6943 384.4179 523.6943 L 383.3617 523.6943 C 383.0732 523.6943 382.8546 523.6707 382.7064 523.6243 C 382.5581 523.5775 382.458 523.48 382.4073 523.3317 C 382.3566 523.1832 382.3311 522.9522 382.3311 522.6381 L 382.3311 516.327 C 382.3311 516.0214 382.3566 515.7924 382.4073 515.6399 C 382.458 515.4871 382.5581 515.3876 382.7064 515.3409 C 382.8546 515.2941 383.0732 515.2708 383.3617 515.2708 L 384.2904 515.2708 C 384.825 515.2708 385.23 515.3428 385.5056 515.4871 C 385.7814 515.6311 385.9807 515.8667 386.1037 516.1935 C 386.2264 516.5201 386.3177 516.9631 386.3772 517.523 L 386.67 517.523 C 386.6443 517.2939 386.6315 516.9886 386.6315 516.6068 C 386.6315 516.4458 386.638 516.2145 386.6508 515.9134 C 386.6635 515.6124 386.6868 515.3006 386.7208 514.9783 C 386.2882 514.995 385.8004 515.0058 385.2575 515.01 C 384.7147 515.0143 384.2311 515.0163 383.8068 515.0163 C 383.6205 515.0163 383.3807 515.0163 383.0879 515.0163 C 382.7954 515.0163 382.4793 515.0143 382.1403 515.01 C 381.8007 515.0058 381.4571 515.0015 381.1093 514.9973 C 380.7618 514.993 380.4307 514.9865 380.1169 514.9783 L 380.1169 515.2326 C 380.4055 515.2496 380.6237 515.2836 380.7723 515.3346 C 380.9205 515.3854 381.0206 515.4871 381.0713 515.6399 C 381.1221 515.7924 381.1476 516.0214 381.1476 516.327 L 381.1476 522.6381 C 381.1476 522.9522 381.1221 523.1832 381.0713 523.3317 C 381.0206 523.48 380.9205 523.582 380.7723 523.637 C 380.6237 523.692 380.4055 523.7237 380.1169 523.7323 L 380.1169 523.9871 C 380.4307 523.9783 380.7618 523.9718 381.1093 523.9678 C 381.4571 523.9636 381.8007 523.9593 382.1403 523.9551 C 382.4793 523.9508 382.7954 523.9485 383.0879 523.9485 C 383.3807 523.9485 383.6205 523.9485 383.8068 523.9485 C 384.1971 523.9485 384.6402 523.9508 385.1365 523.9551 C 385.6329 523.9593 386.0762 523.9698 386.4665 523.9871 Z M 384.2779 519.6351 C 384.2779 519.6351 384.2779 519.5928 384.2779 519.5081 C 384.2779 519.4233 384.2779 519.3808 384.2779 519.3808 L 381.9492 519.3808 C 381.9492 519.3808 381.9492 519.4233 381.9492 519.5081 C 381.9492 519.5928 381.9492 519.6351 381.9492 519.6351 Z Z M 384.6467 521.3146 C 384.6129 520.8313 384.5979 520.4622 384.6022 520.2077 C 384.6064 519.9534 384.6087 519.7201 384.6087 519.5081 C 384.6087 519.296 384.6129 519.0625 384.6214 518.8082 C 384.6297 518.5536 384.6509 518.1849 384.6849 517.701 L 384.3921 517.701 C 384.3584 517.9725 384.3179 518.2376 384.2714 518.4964 C 384.2246 518.7552 384.1228 518.9672 383.9661 519.1325 C 383.8093 519.298 383.544 519.3808 383.1707 519.3808 L 383.1707 519.6351 C 383.4505 519.6351 383.6648 519.6923 383.8133 519.8071 C 383.9615 519.9214 384.0698 520.0679 384.1379 520.2459 C 384.2056 520.4242 384.2524 520.6085 384.2779 520.7995 C 384.3031 520.9903 384.3286 521.1624 384.3541 521.3146 Z Z M 395.4365 523.9871 L 395.4365 523.7323 C 395.2755 523.6982 395.1037 523.6007 394.9214 523.4397 C 394.7391 523.2784 394.5756 523.0069 394.4316 522.6253 L 391.4413 514.9145 C 391.4243 514.9145 391.4073 514.9145 391.3906 514.9145 C 391.3733 514.9145 391.3566 514.9145 391.3393 514.9145 C 391.3226 514.9145 391.3055 514.9145 391.2885 514.9145 C 391.2718 514.9145 391.2545 514.9145 391.2378 514.9145 L 388.133 522.9181 C 388.0057 523.2404 387.8617 523.4545 387.7004 523.5608 C 387.5394 523.6668 387.3906 523.7237 387.2551 523.7323 L 387.2551 523.9871 C 387.4246 523.9783 387.6347 523.9698 387.885 523.9613 C 388.1353 523.9531 388.3791 523.9485 388.6166 523.9485 C 388.9474 523.9485 389.2569 523.9531 389.5455 523.9613 C 389.8338 523.9698 390.0671 523.9783 390.2454 523.9871 L 390.2454 523.7323 C 389.9568 523.7237 389.7383 523.69 389.59 523.6308 C 389.4415 523.5712 389.3607 523.4672 389.3479 523.319 C 389.3355 523.1704 389.3842 522.9522 389.4945 522.6636 L 391.8611 516.3905 L 391.6576 516.1742 L 393.8715 521.9257 C 394.0498 522.3835 394.1345 522.7421 394.126 523.0009 C 394.1178 523.2597 394.02 523.444 393.8335 523.5542 C 393.6467 523.6642 393.3754 523.7237 393.0191 523.7323 L 393.0191 523.9871 C 393.2651 523.9783 393.5154 523.9698 393.7697 523.9613 C 394.0243 523.9531 394.2618 523.9485 394.4823 523.9485 C 394.7029 523.9485 394.8851 523.9531 395.0294 523.9613 C 395.1737 523.9698 395.3095 523.9783 395.4365 523.9871 Z M 402.2314 523.9871 C 402.1977 523.69 402.1741 523.4014 402.1617 523.1217 C 402.1486 522.8416 402.1424 522.6296 402.1424 522.4856 C 402.1424 522.3328 402.1464 522.1862 402.1551 522.0465 C 402.1637 521.9065 402.1719 521.7897 402.1804 521.6964 L 401.8878 521.6964 C 401.8368 522.197 401.7648 522.5936 401.6716 522.8861 C 401.5783 523.1789 401.419 523.3867 401.1942 523.5097 C 400.9694 523.6328 400.6324 523.6943 400.1828 523.6943 L 399.1269 523.6943 C 398.8383 523.6943 398.6198 523.6707 398.4715 523.6243 C 398.323 523.5775 398.2232 523.48 398.1725 523.3317 C 398.1217 523.1832 398.0959 522.9522 398.0959 522.6381 L 398.0959 516.327 C 398.0959 516.0214 398.1217 515.7924 398.1725 515.6399 C 398.2232 515.4871 398.323 515.3876 398.4715 515.3409 C 398.6198 515.2941 398.8383 515.2708 399.1269 515.2708 L 400.0555 515.2708 C 400.5901 515.2708 400.9952 515.3428 401.2707 515.4871 C 401.5466 515.6311 401.7458 515.8667 401.8689 516.1935 C 401.9916 516.5201 402.0829 516.9631 402.1424 517.523 L 402.4349 517.523 C 402.4094 517.2939 402.3967 516.9886 402.3967 516.6068 C 402.3967 516.4458 402.4032 516.2145 402.4159 515.9134 C 402.4287 515.6124 402.4519 515.3006 402.486 514.9783 C 402.0531 514.995 401.5653 515.0058 401.0227 515.01 C 400.4796 515.0143 399.9963 515.0163 399.5719 515.0163 C 399.3857 515.0163 399.1456 515.0163 398.8531 515.0163 C 398.5605 515.0163 398.2445 515.0143 397.9052 515.01 C 397.5659 515.0058 397.2223 515.0015 396.8745 514.9973 C 396.527 514.993 396.1959 514.9865 395.8821 514.9783 L 395.8821 515.2326 C 396.1706 515.2496 396.3889 515.2836 396.5374 515.3346 C 396.6857 515.3854 396.7855 515.4871 396.8365 515.6399 C 396.8872 515.7924 396.9128 516.0214 396.9128 516.327 L 396.9128 522.6381 C 396.9128 522.9522 396.8872 523.1832 396.8365 523.3317 C 396.7855 523.48 396.6857 523.582 396.5374 523.637 C 396.3889 523.692 396.1706 523.7237 395.8821 523.7323 L 395.8821 523.9871 C 396.1959 523.9783 396.527 523.9718 396.8745 523.9678 C 397.2223 523.9636 397.5659 523.9593 397.9052 523.9551 C 398.2445 523.9508 398.5605 523.9485 398.8531 523.9485 C 399.1456 523.9485 399.3857 523.9485 399.5719 523.9485 C 399.9623 523.9485 400.4053 523.9508 400.9017 523.9551 C 401.3977 523.9593 401.8414 523.9698 402.2314 523.9871 Z M 400.0431 519.6351 C 400.0431 519.6351 400.0431 519.5928 400.0431 519.5081 C 400.0431 519.4233 400.0431 519.3808 400.0431 519.3808 L 397.7144 519.3808 C 397.7144 519.3808 397.7144 519.4233 397.7144 519.5081 C 397.7144 519.5928 397.7144 519.6351 397.7144 519.6351 Z Z M 400.4118 521.3146 C 400.3781 520.8313 400.3631 520.4622 400.3673 520.2077 C 400.3716 519.9534 400.3736 519.7201 400.3736 519.5081 C 400.3736 519.296 400.3781 519.0625 400.3866 518.8082 C 400.3948 518.5536 400.4161 518.1849 400.4501 517.701 L 400.1573 517.701 C 400.1233 517.9725 400.083 518.2376 400.0365 518.4964 C 399.9898 518.7552 399.888 518.9672 399.7312 519.1325 C 399.5742 519.298 399.3092 519.3808 398.9358 519.3808 L 398.9358 519.6351 C 399.2156 519.6351 399.4299 519.6923 399.5785 519.8071 C 399.7267 519.9214 399.835 520.0679 399.903 520.2459 C 399.9708 520.4242 400.0175 520.6085 400.0431 520.7995 C 400.0683 520.9903 400.0938 521.1624 400.1193 521.3146 Z Z M 411.6214 523.9871 L 411.6214 523.7323 C 411.3332 523.7237 411.1149 523.6815 410.9664 523.6053 C 410.8178 523.5287 410.718 523.4057 410.6673 523.2362 C 410.6166 523.0664 410.5911 522.8246 410.5911 522.5108 L 410.5911 514.9145 C 410.5403 514.9145 410.4913 514.9145 410.4448 514.9145 C 410.398 514.9145 410.3493 514.9145 410.2982 514.9145 L 404.9544 523.1724 L 404.9544 516.454 C 404.9544 516.1487 404.9819 515.9092 405.0371 515.7351 C 405.0918 515.5614 405.2024 515.4384 405.3679 515.3664 C 405.5332 515.2941 405.7812 515.2496 406.112 515.2326 L 406.112 514.9783 C 405.9595 514.995 405.76 515.0058 405.5142 515.01 C 405.2682 515.0143 405.0349 515.0163 404.8143 515.0163 C 404.602 515.0163 404.388 515.0143 404.1717 515.01 C 403.9554 515.0058 403.7751 514.995 403.6309 514.9783 L 403.6309 515.2326 C 403.9194 515.2496 404.1377 515.2941 404.2862 515.3664 C 404.4345 515.4384 404.5346 515.5614 404.5853 515.7351 C 404.636 515.9092 404.6615 516.1487 404.6615 516.454 L 404.6615 522.6381 C 404.6615 522.9522 404.636 523.1832 404.5853 523.3317 C 404.5346 523.48 404.4345 523.582 404.2862 523.637 C 404.1377 523.692 403.9194 523.7237 403.6309 523.7323 L 403.6309 523.9871 C 403.7751 523.9783 403.9554 523.9698 404.1717 523.9613 C 404.388 523.9531 404.602 523.9485 404.8143 523.9485 C 405.0009 523.9485 405.1791 523.9531 405.3487 523.9613 C 405.5182 523.9698 405.671 523.9783 405.8067 523.9871 L 410.2982 517.0649 L 410.2982 522.5108 C 410.2982 522.8246 410.2707 523.0664 410.2155 523.2362 C 410.1605 523.4057 410.0502 523.5287 409.8849 523.6053 C 409.7194 523.6815 409.4714 523.7237 409.1406 523.7323 L 409.1406 523.9871 C 409.2931 523.9783 409.4946 523.9698 409.7449 523.9613 C 409.9952 523.9531 410.2262 523.9485 410.4383 523.9485 C 410.6591 523.9485 410.8774 523.9531 411.0936 523.9613 C 411.3099 523.9698 411.486 523.9783 411.6214 523.9871 Z M 419.6123 523.9871 C 419.5786 523.6642 419.5551 523.3527 419.5423 523.0517 C 419.5298 522.7506 419.5233 522.5193 419.5233 522.3583 C 419.5233 522.1545 419.5276 521.9637 419.5361 521.7857 C 419.5446 521.6074 419.5531 521.4506 419.5616 521.3146 L 419.2688 521.3146 C 419.2095 521.9084 419.1287 522.377 419.0272 522.7206 C 418.9252 523.0644 418.7472 523.3124 418.4926 523.4652 C 418.2381 523.618 417.8435 523.6943 417.3094 523.6943 L 416.6223 523.6943 L 416.6223 516.454 C 416.6223 516.115 416.6541 515.8604 416.7176 515.6906 C 416.7811 515.5211 416.9064 515.4066 417.0929 515.3474 C 417.2797 515.2878 417.5512 515.2496 417.9076 515.2326 L 417.9076 514.9783 C 417.6867 514.995 417.407 515.0058 417.0674 515.01 C 416.7283 515.0143 416.3848 515.0163 416.037 515.0163 C 415.6551 515.0163 415.2969 515.0143 414.9618 515.01 C 414.6265 515.0058 414.3574 514.995 414.1539 514.9783 L 414.1539 515.2326 C 414.5102 515.2496 414.7812 515.2878 414.968 515.3474 C 415.1548 515.4066 415.2798 515.5211 415.3436 515.6906 C 415.4071 515.8604 415.4389 516.115 415.4389 516.454 L 415.4389 523.6943 L 414.7517 523.6943 C 414.2259 523.6943 413.8336 523.618 413.5748 523.4652 C 413.316 523.3124 413.1357 523.0644 413.0342 522.7206 C 412.9322 522.377 412.8517 521.9084 412.7924 521.3146 L 412.4996 521.3146 C 412.5163 521.4506 412.5271 521.6074 412.5317 521.7857 C 412.5356 521.9637 412.5379 522.1545 412.5379 522.3583 C 412.5379 522.5193 412.5317 522.7506 412.5189 523.0517 C 412.5061 523.3527 412.4829 523.6642 412.4489 523.9871 C 412.8052 523.9783 413.193 523.9698 413.6128 523.9613 C 414.0329 523.9531 414.455 523.9485 414.879 523.9485 C 415.3031 523.9485 415.6892 523.9485 416.037 523.9485 C 416.3848 523.9485 416.7686 523.9485 417.1884 523.9485 C 417.6085 523.9485 418.0303 523.9531 418.4546 523.9613 C 418.8784 523.9698 419.2648 523.9783 419.6123 523.9871 Z M 423.2387 524.1268 C 423.663 524.1268 423.9853 524.0781 424.2056 523.9806 C 424.4264 523.8831 424.6214 523.7748 424.7909 523.656 C 424.893 523.5968 424.9755 523.552 425.039 523.5225 C 425.103 523.4927 425.1643 523.478 425.2238 523.478 C 425.3085 523.478 425.37 523.5245 425.408 523.618 C 425.4463 523.711 425.478 523.851 425.5036 524.0378 L 425.7964 524.0378 C 425.7879 523.8935 425.7771 523.7218 425.7643 523.5225 C 425.7516 523.3232 425.7431 523.0602 425.7391 522.7333 C 425.7349 522.4071 425.7326 521.9765 425.7326 521.4421 L 425.4401 521.4421 C 425.4146 521.8492 425.3253 522.2395 425.1728 522.6126 C 425.0203 522.9859 424.7974 523.2912 424.5046 523.5287 C 424.2121 523.7663 423.8283 523.885 423.3532 523.885 C 422.9036 523.885 422.5326 523.7495 422.2397 523.478 C 421.9472 523.2064 421.8007 522.8501 421.8007 522.409 C 421.8007 522.0272 421.8985 521.7069 422.0935 521.4484 C 422.2885 521.1896 422.5493 520.9563 422.8761 520.7485 C 423.2027 520.5407 423.5567 520.3182 423.9386 520.0807 C 424.3796 519.8091 424.7719 519.5395 425.1155 519.2725 C 425.4591 519.0055 425.7303 518.7107 425.9299 518.3884 C 426.1292 518.0661 426.2289 517.6757 426.2289 517.2177 C 426.2289 516.6748 426.1059 516.225 425.8599 515.8687 C 425.6138 515.5123 425.2873 515.2453 424.8802 515.0673 C 424.4729 514.889 424.0233 514.8003 423.5315 514.8003 C 423.0816 514.8003 422.7256 514.851 422.4626 514.9525 C 422.1995 515.0546 421.9747 515.1606 421.7879 515.2708 C 421.6017 515.3896 421.4574 515.4489 421.3556 515.4489 C 421.2706 515.4489 421.2094 515.4024 421.1711 515.3088 C 421.1328 515.2158 421.1011 515.0758 421.0758 514.889 L 420.783 514.889 C 420.7997 515.0673 420.8105 515.2774 420.8148 515.5189 C 420.819 515.7607 420.823 516.0767 420.8275 516.4671 C 420.8318 516.8571 420.8338 517.3492 420.8338 517.9428 L 421.1266 517.9428 C 421.1606 517.434 421.2558 516.9589 421.4129 516.5178 C 421.5696 516.0767 421.8114 515.7224 422.138 515.4554 C 422.4645 515.1881 422.8994 515.0546 423.4422 515.0546 C 423.7223 515.0546 423.9873 515.1118 424.2376 515.226 C 424.4879 515.3409 424.6934 515.5231 424.8547 515.7734 C 425.0157 516.0237 425.0965 516.3483 425.0965 516.7468 C 425.0965 517.0946 425.0137 517.398 424.8482 517.6565 C 424.6826 517.9153 424.4516 518.1571 424.1548 518.3819 C 423.8578 518.6066 423.5102 518.8377 423.1114 519.0752 C 422.7129 519.3213 422.3395 519.5716 421.9917 519.8258 C 421.6439 520.0807 421.3661 520.3755 421.1583 520.7105 C 420.9506 521.0456 420.8465 521.4506 420.8465 521.9257 C 420.8465 522.426 420.9591 522.8393 421.1838 523.1662 C 421.4086 523.4927 421.7031 523.7342 422.068 523.8916 C 422.4328 524.0483 422.8228 524.1268 423.2387 524.1268\" fill=\"#fcffff\" fill-rule=\"evenodd\"></path></g></g>\n</svg>";
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/seasonal/seizoenslogo-svg.js", error: String((e && e.message) || e) }); }

// guidelines/seasonal/seizoenslogo.js
try { (() => {
/* Seizoenslogo — bediening voor alle vier de kaarten.
   Een kaart zet één element neer:
     <div class="slogo" data-field="panel|screen" data-theme="winter|kerst" data-looks="…"></div>
   en dit bestand vult de tekening, bouwt de knoppen en (op scherm) de sneeuwlaag.
   Vier opbouwen: vA vlotte hand, vC sneeuw eerst, vD vlok als slot, vB alleen dwarrelen. */
(() => {
  const VARIANTS = [['vA', 'Vlotte hand'], ['vE', 'Letterpers'], ['vC', 'Sneeuw eerst'], ['vD', 'Vlok als slot'], ['vB', 'Alleen dwarrelen']];
  const NOTE = {
    vA: '<b>Vlotte hand</b> · 3,3s · de W, dan i en n, dan de t van bovenaf naar beneden met de lus eronder, dan de e, r en s met de uithaal, en als laatste de streep door de t en de punt op de i — daarna komt de vlok op en landen caps en schuurmerk samen',
    vE: '<b>Letterpers</b> · 3,7s · zelfde hand, maar RIJLAARSDAM wordt niet weggeveegd: de negen letterblokken drukken zich één voor één aan, van onderaf — daarna komen de lijnen en het schuurmerk',
    vC: '<b>Sneeuw eerst</b> · 3,0s · het beeld begint met dwarrelende sneeuw; daaruit zet de grote vlok zich vast, en pas als die staat wordt de naam eronder geschreven — de sneeuw maakt het logo',
    vD: '<b>Vlok als slot</b> · 3,2s · eerst de naam, dan landen caps en schuurmerk samen, en de grote vlok sluit rustig af als seizoensteken',
    vB: '<b>Alleen dwarrelen</b> · eindeloos · het logo staat er al; de vlokjes zakken in tempo\'s van 11 tot 23 seconden, elk met eigen drift naar links of rechts, eigen zwaai en eigen draai — ze verdooien aan begin en eind, dus de lus loopt naadloos rond'
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
  const svgHTML = window.SEIZOENSLOGO_SVG;

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
    const defs = document.createElementNS(NS, 'defs');
    defs.appendChild(symbol);
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
          y = -6 - rnd() * 14,
          s = 6 + rnd() * 8;
        const t = (11 + rnd() * 12).toFixed(1),
          dx = (rnd() * 150 - 75).toFixed(0),
          sw = (rnd() * 24 - 12).toFixed(0);
        const rot = (rnd() * 260 - 130).toFixed(0),
          op = (.34 + rnd() * .5).toFixed(2);
        const fall = (H + s * 2 + 20).toFixed(0),
          lag = (-(phase[i] + rnd()) / n * t).toFixed(2);
        out += '<use class="fl" href="#sfx" style="--t:' + t + 's;--lag:' + lag + 's;--dx:' + dx + 'px;--fall:' + fall + 'px;--sw:' + sw + 'px;--rot:' + rot + 'deg;--op:' + op + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + s.toFixed(1) + '" height="' + s.toFixed(1) + '"></use>';
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

// ui_kits/website/app.jsx
try { (() => {
const NAV_LEFT = [{
  label: 'De Hoeve',
  items: ['Over ons', 'Locatie', 'Praktisch']
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
  items: ['Chef', 'Hospitality', 'Pop-up']
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
  }) : page === 'Praktisch' ? /*#__PURE__*/React.createElement(PraktischScreen, {
    onNavigate: setPage
  }) : page === 'Locatie' ? /*#__PURE__*/React.createElement(LocatieScreen, {
    onNavigate: setPage
  }) : page === 'Hospitality' ? /*#__PURE__*/React.createElement(HospitalityScreen, {
    onNavigate: setPage
  }) : page === 'Chef' ? /*#__PURE__*/React.createElement(ChefScreen, {
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
  TestimonialCard,
  FaqAccordion,
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
  swirl: '../../assets/ornament-swirl.svg'
};
const FOOTER_COLS = [{
  title: 'Hoeve Rijlaarsdam',
  lines: [{
    text: 'Nieuwveenseweg 59'
  }, {
    text: '2421 LB Nieuwkoop'
  }, {
    text: '06 - 42 57 63 95',
    strong: true
  }, {
    text: 'info@rijlaarsdam.nl',
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
function PageEnd({
  page = 'home',
  tone = 'cream',
  kicker,
  title,
  body,
  onCta
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageOutro, {
    tone: tone,
    items: CAROUSELS[page] || CAROUSELS.home,
    height: 400,
    kicker: kicker,
    title: title,
    body: body,
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Footer, {
    columns: FOOTER_COLS
  }));
}
function ReviewRow({
  tone = 'sage'
}) {
  const q = '\u201cEen bijzondere locatie die is samen te vatten als ruimtelijk, rustig en liefdevol. Alles werd tot in de puntjes verzorgd \u2014 wij hadden er geen omkijken naar.\u201d';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8) 0"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "mooie reactie",
    title: "Van klanten",
    align: "center",
    size: "m"
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-6) var(--space-8) var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: tone,
    quote: q,
    attribution: "Voornaam en Achternaam, uit Nieuwkoop"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: tone,
    quote: q,
    attribution: "Voornaam en Achternaam, uit Nieuwkoop"
  }))));
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
  TestimonialCard,
  FaqAccordion,
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

// ui_kits/website/screen-bruiloft.jsx
try { (() => {
const WEDDING_DAY = [['Ontvangst', 'Uw gasten komen aan op het erf en worden ontvangen met bubbels en warme hapjes, tussen de sculpturen in de beeldentuin.'], ['Ceremonie', 'In de beeldentuin onder de bomen, of binnen in het Koetshuis als het weer daar niet aan meewerkt. Beide zijn voorbereid.'], ['Borrel', 'Een lange borrel op het gazon met uitzicht over de polder, terwijl de zaal wordt omgebouwd voor het diner.'], ['Diner', 'Een diner van onze chef in het Koetshuis of de Stal — sit down, walking dinner of een lange tafel.'], ['Feest', 'De bar in de Hooiberg gaat open, de festoonverlichting aan, en er wordt gedanst tot de laatste gast weg is.']];
function BruiloftScreen({
  onNavigate
}) {
  const [moment, setMoment] = React.useState('Ontvangst');
  const MOMENT_IMG = {
    Ontvangst: 'bruiloftPoort',
    Ceremonie: 'bruiloftCeremonie',
    Borrel: 'bruiloftTuin',
    Diner: 'bruiloftTafel',
    Feest: 'lounge'
  };
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
    kicker: "de mooiste dag",
    title: "Van uw leven",
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
  })), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-cream)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "het verloop",
    title: "Van de dag",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Een dag zoals wij hem vaak zien. Niets hiervan staat vast \u2014 kies het moment om te zien wat er dan gebeurt.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    items: WEDDING_DAY.map(d => d[0]),
    value: moment,
    onChange: setMoment,
    tone: "onLight"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[MOMENT_IMG[moment]],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--ink-900)'
    }
  }, moment), /*#__PURE__*/React.createElement(Lead, {
    width: "46ch"
  }, (WEDDING_DAY.find(d => d[0] === moment) || [])[1])))), /*#__PURE__*/React.createElement(Section, {
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
    tone: "deep",
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
    title: "Vragen",
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
function CateringScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState('Zakelijk');
  const card = (caption, image) => /*#__PURE__*/React.createElement(RoomCard, {
    key: caption,
    image: image,
    caption: caption,
    ratio: "4 / 3",
    readMoreLabel: "Vraag aan",
    onReadMore: () => onNavigate('Contact')
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.chef,
    height: 380
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CHier komt een quote die aansluit op deze pagina\u201D"), /*#__PURE__*/React.createElement(Section, {
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
    title: "Perfecte diner",
    align: "center",
    size: "l",
    tone: "onSage",
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
  }, card('Walking dinner', IMG.hapjes), card('Sit down dinner', IMG.bruiloftTafel), card('Shared dinner', IMG.hooibergGedekt)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.bediening,
    caption: "Op locatie",
    ratio: "21 / 9",
    meta: ['Bij u op locatie', 'Vanaf 20 gasten'],
    readMoreLabel: "Vraag aan",
    onReadMore: () => onNavigate('Hospitality')
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel mogelijkheden",
    title: "Voor een borrel",
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
  }, card('Borrelplanken', IMG.flatlay), card('Amuses', IMG.dessert), card('Rondje de wereld', IMG.bar))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel mogelijkheden",
    title: "Voor een lunch",
    align: "center",
    size: "l",
    tone: "onSage",
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
  }, card('Walking lunch', IMG.voorgerecht), card('Broodplanken', IMG.scones), card('High tea', IMG.macarons))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat wij nog",
    title: "Meer bieden",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "74ch"
  }, "Kies uw uitgangspunt, dan stellen wij een arrangement op maat samen. Uw wensen zijn hierbij altijd leidend \u2014 wij leveren echt maatwerk."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onLight",
    items: ['Zakelijk', 'Bruiloft', 'Particulier'],
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement(ReviewRow, null), /*#__PURE__*/React.createElement(PageEnd, {
    page: "catering",
    tone: "sage",
    kicker: "culinair",
    title: "Op maat gemaakt",
    body: "Van een uitgebreid diner tot een borrel met streekproducten uit eigen tuin. Onze chef stelt graag een voorstel samen dat bij uw gelegenheid past.",
    onCta: () => onNavigate('Contact')
  }));
}
window.CateringScreen = CateringScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-catering.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-chef.jsx
try { (() => {
function ChefScreen({
  onNavigate
}) {
  const [gang, setGang] = React.useState('Diner');
  const MENU = {
    Diner: [{
      caption: 'Entrecote, 48 tot 51 graden',
      image: IMG.voorgerecht
    }, {
      caption: 'Bietjes — rauw, gerookt, gemarineerd',
      image: IMG.wouterPlating
    }, {
      caption: 'Amuse van het seizoen',
      image: IMG.hapjes
    }],
    Ontbijt: [{
      caption: 'Yoghurt met huisgemaakte granola',
      image: IMG.scones
    }, {
      caption: 'Roerei met truffel en Ibericoham',
      image: IMG.flatlay
    }, {
      caption: 'Patisserie uit eigen keuken',
      image: IMG.macarons
    }],
    Zoet: [{
      caption: 'Bruidstaart op maat',
      image: IMG.bruidstaart
    }, {
      caption: 'Macarons',
      image: IMG.hooibergMacarons || IMG.macarons
    }, {
      caption: 'Scones voor de high tea',
      image: IMG.scones
    }]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.wouterPlating,
    kicker: "chef",
    title: "Wouter Berghuis",
    height: 420
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
    kicker: "tot in de",
    title: "Puntjes geregeld",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Hoe zet u uw gasten tijdens een feest of evenement kwaliteitsgerechten voor? Wouter Berghuis, chef-kok en patissier, weet het: met een voorbereiding die tot in de puntjes is geregeld. Van origine restaurantchef in het hogere segment, sinds 2017 met zijn eigen keuken, en sinds 2018 vast verbonden aan de hoeve. Hij verzorgt het culinaire deel, Roos Rijlaarsdam de hospitality.")), /*#__PURE__*/React.createElement("div", {
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
  })))), /*#__PURE__*/React.createElement(PullQuote, {
    name: "Wouter Berghuis",
    role: "Chef-kok en patissier",
    tone: "cream",
    align: "center"
  }, "In een restaurant kun je makkelijker improviseren, omdat je kleinere groepjes mensen tegelijk te eten geeft. Bij een grote groep werkt dat anders: dan moet alles tegelijk op tafel staan. Elk half uur een nieuw gerecht, voor honderdvijftig personen. Dat vergt een nauwkeurige voorbereiding."), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.chef,
    imageSide: "left",
    background: "var(--surface-deep)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "een dag",
    title: "Van tevoren",
    tone: "onDeep"
  }), /*#__PURE__*/React.createElement(BenefitsPanel, {
    tone: "onDeep",
    items: ['Vlees op de juiste cuisson, tussen 48 en 51 graden', 'Bietjes rauw, gerookt en daarna gemarineerd', 'Ovens en warmtekasten mee naar de locatie', 'Gerechten ter plekke opgemaakt', 'Elk half uur een volgende gang op tafel', 'Eén draaiboek voor keuken en bediening']
  })), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "sage",
    align: "center"
  }, "Ik werk graag met moderne technieken, zonder de klassiekers uit het oog te verliezen. En ik doe altijd mijn uiterste best om een verhaal in een gerecht te stoppen."), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "uit de",
    title: "Keuken van Wouter",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, "De wens van de organisator is leidend, maar het seizoen weegt even zwaar. Asperges buiten het seizoen komen hier niet op tafel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onLight",
    items: ['Diner', 'Ontbijt', 'Zoet'],
    value: gang,
    onChange: setGang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, MENU[gang].map(g => /*#__PURE__*/React.createElement(ImageCaptionCard, {
    key: g.caption,
    image: g.image,
    caption: g.caption
  })))), /*#__PURE__*/React.createElement(Section, {
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
      aspectRatio: '1 / 1',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.coquilles,
    alt: "Coquilles met radijs en viooltjes",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "het",
    title: "Signatuurgerecht",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Een gast in Antibes was onder de indruk van een gerechtje met coquilles. Toen hij later ging trouwen, benaderde hij Wouter met \xE9\xE9n verzoek: het diner verzorgen, en dat gerecht opnieuw op tafel.")))), /*#__PURE__*/React.createElement(Section, {
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
    kicker: "keuken en",
    title: "Bediening als \xE9\xE9n",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, null, "Van een compleet verzorgde lunch met seminar en aansluitend een vier-gangendiner voor honderdvijftig personen, tot een feest in Antibes. Wij reizen met ons team mee naar uw locatie."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat u kunt",
    title: "Boeken",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch",
    tone: "dark"
  }, "Wouter kookt bij een evenement op de hoeve, en reist met zijn team mee naar uw locatie \u2014 ook buiten Nederland. Vertel ons de gelegenheid, dan stellen wij een voorstel samen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      marginTop: 'var(--space-7)'
    }
  }, [['Event catering', 'Volledig verzorgde catering voor uw evenement, afgestemd op thema en gezelschap.'], ['Walking dinner', 'Kleine gerechten die worden geserveerd terwijl uw gasten rondlopen en bijpraten.'], ['Private dining', 'Een volledig verzorgd diner voor een select gezelschap, met gastvrouwen en gastheren.'], ['Borrel', 'Verfijnde bites en borrelplanken voor een receptie of informele bijeenkomst.'], ['Bruiloft', 'Van ceremonie tot dessert, met de bruidstaart uit onze eigen patisserie.'], ['Pop-uprestaurant', 'Vier gangen tussen de kunst, voor maximaal dertig gasten per avond.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface-panel-soft)',
      padding: 'var(--space-6) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.7,
      color: 'var(--white)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--cream-100)',
      opacity: .85
    }
  }, "Indeling volgens wouterberghuis.nl \u2014 prijzen en arrangementen nog aan te leveren.")), /*#__PURE__*/React.createElement(PullQuote, {
    portrait: IMG.wouterRoos,
    tone: "deep",
    name: "Wouter Berghuis",
    role: "Over de samenwerking met Roos"
  }, "Roos en ik kunnen lezen en schrijven met elkaar, we delen samen een gedachte zonder deze uit te hoeven spreken. Dat komt de beleving van de gasten ten goede."), /*#__PURE__*/React.createElement(PageEnd, {
    page: "chef",
    tone: "cream",
    kicker: "culinair",
    title: "Op maat gemaakt",
    body: "Vertel ons voor wie u kookt, met hoeveel gasten en in welk seizoen. Wouter stelt een voorstel samen dat bij uw gelegenheid past.",
    onCta: () => onNavigate('Contact')
  }));
}
window.ChefScreen = ChefScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-chef.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-contact.jsx
try { (() => {
function ContactScreen({
  onNavigate,
  focus
}) {
  const [sent, setSent] = React.useState(false);
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
  }, "info@feestenmeetings.nl"), /*#__PURE__*/React.createElement("div", {
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
    onClick: () => onNavigate('Locatie')
  }, "Bekijk het erf"), /*#__PURE__*/React.createElement(Button, {
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
  }, "Laat uw gegevens achter en vertel kort wat u van plan bent. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken."), sent ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      background: 'var(--sage-400)',
      color: 'var(--white)',
      padding: 'var(--space-5)',
      fontSize: 'var(--fs-body-s)'
    }
  }, "Dank u \u2014 uw aanvraag staat bij ons binnen. Wij nemen binnen \xE9\xE9n werkdag contact op.") : /*#__PURE__*/React.createElement("form", {
    noValidate: true,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
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
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Voornaam",
    name: "voornaam",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Achternaam",
    name: "achternaam",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mailadres",
    name: "email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefoonnummer",
    name: "telefoon",
    type: "tel",
    placeholder: "06 - 12 34 56 78"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Uw aanvraag",
    name: "aanvraag",
    multiline: true,
    rows: 3,
    hint: "Datum, aantal gasten en gelegenheid helpen ons het meest."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    tone: "gold",
    type: "submit"
  }, "Versturen")))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "handig om te",
    title: "Weten",
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
    onClick: () => onNavigate('Locatie')
  }, "Plattegrond")))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "contact",
    tone: "sage",
    kicker: "van harte",
    title: "Welkom",
    body: "Loop gerust een keer binnen om de plek te zien. Bellen mag ook \u2014 dan weet u binnen vijf minuten of het past.",
    ctaLabel: "Bel ons",
    onCta: () => onNavigate('Praktisch')
  }));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-galerie.jsx
try { (() => {
const GALERIE_VIEWS = {
  'Galerie': {
    hero: 'koetshuisRondleiding',
    kicker: 'welkom in de',
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
};
function GalerieScreen({
  view = 'Galerie',
  onNavigate
}) {
  const d = GALERIE_VIEWS[view];
  const [room, setRoom] = React.useState('Stal');
  const ROOMS = {
    'Stal': {
      img: 'stal',
      body: 'Ruim honderdtien jaar oud, met de originele houten palen in het midden. Hier hangt werk van de Haagse en Leidsche school.'
    },
    'Koetshuis': {
      img: 'koetshuisExpo',
      body: 'De grootste expositieruimte, met hoge wanden en veel licht. Ook de zaal waar exposities en veilingen plaatsvinden.'
    },
    'Grote zaal': {
      img: 'koetshuisRondleiding',
      body: 'Ruimte voor grote formaten en wisselende presentaties, direct naast de entree van de galerie.'
    }
  };
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
    kicker: "over de",
    title: view === 'Galerie' ? 'Collectie' : 'Tuin',
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
    tone: "outline",
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
  })))), view === 'Galerie' && /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "drie",
    title: "Expositieruimtes",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch",
    tone: "dark"
  }, "Elke ruimte heeft zijn eigen karakter, en daarmee zijn eigen werk aan de wand.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    items: Object.keys(ROOMS),
    value: room,
    onChange: setRoom,
    tone: "onSage"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[ROOMS[room].img],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--white)'
    }
  }, room), /*#__PURE__*/React.createElement(Lead, {
    tone: "dark",
    width: "46ch"
  }, ROOMS[room].body)))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat u hier",
    title: "Kunt doen",
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
    image: IMG.workshop,
    caption: "Schilderworkshop",
    body: "Onder begeleiding zelf aan het werk, tussen de collectie."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.beeldentuinVogel,
    caption: "Rondleiding",
    body: "Op afspraak nemen wij u mee langs de collectie en de tuin."
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.macarons,
    caption: "Theehuis De Hooiberg",
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
  const [tab, setTab] = React.useState('Catering');
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
    href: "#"
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.gazon,
    caption: "De Hoeve",
    ratio: "4 / 5",
    href: "#"
  }), /*#__PURE__*/React.createElement(ImageCaptionCard, {
    image: IMG.bruiloftTaart,
    caption: "Particulier",
    ratio: "4 / 5",
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8) 120px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "oneindig",
    title: "Veel mogelijkheden",
    align: "center",
    size: "l",
    tone: "onSage"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '76ch',
      margin: 'var(--space-5) auto var(--space-6)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--white)'
    }
  }, "Wij verzorgen een compleet event, inclusief horeca en aankleding. Onbespoten vruchten uit eigen tuin verwerken wij in onze arrangementen, jams en likeuren. Laat ons uw evenement tot in de puntjes verzorgen \u2014 zonder zorgen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    items: ['Catering', 'Hospitality'],
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '-90px auto 0',
      padding: '0 var(--space-8)',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: tab === 'Catering' ? IMG.voorgerecht : IMG.bar,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: tab === 'Catering' ? IMG.hapjes : IMG.bediening,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "home",
    tone: "cream",
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
  const [tab, setTab] = React.useState('Zakelijk');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.bediening,
    kicker: "wij komen naar u toe",
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
    kicker: "waar u ons",
    title: "Kunt inzetten",
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
    image: IMG.koetshuisBijeenkomst,
    caption: "Zakelijke events",
    readMoreLabel: "Plan een gesprek",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.bruiloftTafel,
    caption: "Private dining",
    readMoreLabel: "Plan een gesprek",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
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
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "voor welke",
    title: "Gelegenheid",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "72ch"
  }, "Vertel ons waar en wanneer, dan stellen wij het team en het menu samen. Uw wensen zijn hierbij altijd leidend \u2014 wij leveren echt maatwerk."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onLight",
    items: ['Zakelijk', 'Private dining', 'Kerst en jubilea'],
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement(ReviewRow, null), /*#__PURE__*/React.createElement(PageEnd, {
    page: "hospitality",
    tone: "cream",
    kicker: "wij komen",
    title: "Naar u toe",
    body: "Een private diner voor relaties of een grootschalig kerstfeest waarbij iedereen verwend mag worden. Wij worden enorm geprikkeld om bijzondere belevingen op maat te maken.",
    onCta: () => onNavigate('Contact')
  }));
}
window.HospitalityScreen = HospitalityScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-hospitality.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-locatie.jsx
try { (() => {
function LocatieScreen({
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.gazon,
    kicker: "de plek",
    title: "Waar alles samenkomt",
    height: 420
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "Nieuwveenseweg 59, Nieuwkoop \u2014 twintig minuten van Leiden en Alphen"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "alles over",
    title: "Onze locatie",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "76ch"
  }, "Vier zalen, een galerie en een beeldentuin op \xE9\xE9n erf. Op de plattegrond ziet u hoe alles ligt \u2014 kies een plek op de kaart of in de lijst.")), /*#__PURE__*/React.createElement(SitePlan, {
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
  }, "Goud zijn de boekbare ruimtes, donker het woonhuis en het bijgebouw. Deze kaart is opgebouwd uit de werkplattegrond van het erf; hoogtes en dakvlakken zijn een schatting en de zonnepanelen ontbreken nog.")), /*#__PURE__*/React.createElement(Section, {
    tone: "sage",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wij zijn goed",
    title: "Bereikbaar",
    align: "center",
    size: "l",
    tone: "onSage"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)'
    }
  }, [{
    t: 'Met de auto',
    b: 'Vanaf de A4 afslag Nieuwkoop, daarna de N231. Ruim eigen parkeerterrein naast de zalen, gratis en zonder reservering.'
  }, {
    t: 'Met het openbaar vervoer',
    b: 'Buslijn 147 vanaf station Alphen aan den Rijn stopt op vijf minuten lopen. Vanaf Leiden Centraal bent u er in een half uur.'
  }, {
    t: 'Met de boot',
    b: 'De hoeve ligt aan het water van de Nieuwkoopse Plassen. Aanleggen kan op afspraak; vraag ernaar bij uw aanvraag.'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-label-m)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--cream-100)'
    }
  }, c.b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "onSage",
    variant: "outline",
    href: "https://maps.google.com/?q=Nieuwveenseweg+59+Nieuwkoop"
  }, "Routebeschrijving"))), /*#__PURE__*/React.createElement(PageEnd, {
    page: "locatie",
    tone: "cream",
    kicker: "kom eens",
    title: "Langs",
    body: "Wij laten u het erf graag zien voordat u kiest. Een rondleiding duurt een half uur en is vrijblijvend.",
    onCta: () => onNavigate('Contact')
  }));
}
Object.assign(window, {
  LocatieScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-locatie.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-overons.jsx
try { (() => {
const TEAM = [{
  name: 'Roos Rijlaarsdam',
  role: 'Eigenaresse · feesten en meetings',
  phone: '06 - 58 98 59 63',
  img: 'roos'
}, {
  name: 'Wouter Berghuis',
  role: 'Chef-kok en patissier',
  img: 'wouter'
}];
function OverOnsScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroVideo, {
    image: IMG.hoeve,
    kicker: "wie wij",
    title: "Zijn",
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
  }, TEAM.map(p => /*#__PURE__*/React.createElement(PersonCard, {
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
    kicker: "onze gastvrouwen",
    title: "Ook bij u",
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
    tone: "outline",
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
    kicker: "wij zijn goed",
    title: "Bereikbaar",
    body: "Bel ons, mail ons, of kom langs voor een kop koffie. Wij vertellen graag wat er mogelijk is.",
    onCta: () => onNavigate('Contact')
  }));
}
window.OverOnsScreen = OverOnsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-overons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-particulier.jsx
try { (() => {
/* Particulier — feesten, verjaardagen, jubilea, en condoleance in een eigen, stillere sectie. */
function ParticulierScreen({
  onNavigate
}) {
  const [gelegenheid, setGelegenheid] = React.useState('Feesten');
  const G = {
    Feesten: ['Vrolijke feesten', 'Wij zijn gek op feestjes. Bitterballen op een schilderspalet met mosterd in verschillende kleuren, de bar in de Hooiberg open en dansen tot de laatste gast weg is.', 'koetshuisFeest'],
    Verjaardagen: ['Zorgeloze verjaardagen', 'Van een besloten diner in de Stal tot een groot feest in het Koetshuis. U bedenkt de gelegenheid, wij regelen de rest.', 'hooibergGedekt'],
    Jubilea: ['Iets te vieren', 'Een huwelijksjubileum, een afscheid of een mijlpaal. Vaak een lange tafel, een menu van onze chef en een rondleiding door de galerie tussen de gangen.', 'bruiloftTafel'],
    'High tea': ['Zoet uit eigen keuken', 'Scones, macarons en huisgemaakte jams uit onze eigen tuin — zo zoet van zichzelf dat er bijna geen suiker aan toe hoeft.', 'scones']
  };
  const g = G[gelegenheid];
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
    onClick: () => onNavigate('Bruiloft')
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
  }))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-sage)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "wat viert u",
    title: "Bij ons?",
    align: "center",
    size: "l",
    tone: "onSage"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onSage",
    items: Object.keys(G),
    value: gelegenheid,
    onChange: setGelegenheid
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[g[2]],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--white)'
    }
  }, g[0]), /*#__PURE__*/React.createElement(Lead, {
    width: "46ch",
    tone: "onSage"
  }, g[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "onSage",
    onClick: () => onNavigate('Contact')
  }, "Vraag offerte aan"))))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.bar,
    ratio: "4 / 3"
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
    onClick: () => onNavigate('Chef')
  }, "Onze chef"), /*#__PURE__*/React.createElement(Button, {
    tone: "outline",
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
  }), /*#__PURE__*/React.createElement(Lead, null, "Afscheid nemen van een dierbare went nooit. Bij ons kan een condoleance in besloten kring plaatsvinden, in de Stal of het Koetshuis, met koffie en iets zoets uit eigen keuken. Wij houden de locatie die dag voor u alleen, en \xE9\xE9n van ons is er de hele tijd bij."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-500)'
    }
  }, "Voor een condoleance belt u liever dan dat u mailt. Roos is bereikbaar op", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, " 06 58 98 59 63"), ".")))), /*#__PURE__*/React.createElement(PullQuote, {
    portrait: IMG.lounge,
    tone: "deep",
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
    title: "Vragen",
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
    title: "Vier gangen",
    body: "Een menu dat wij speciaal voor deze dagen samenstellen, uit de open keuken."
  }), /*#__PURE__*/React.createElement(InfoTile, {
    title: "Maximaal 30 gasten",
    body: "Per shift dertig personen, aan tafels tussen de kunstwerken. Geheel exclusief."
  }), /*#__PURE__*/React.createElement(InfoTile, {
    title: "Lunch of diner",
    body: "Kies de middagshift of de avondshift; voor groepen maken wij een eigen arrangement."
  }))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.koetshuisExpo,
    ratio: "4 / 3"
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
    kicker: "bekijk ook onze",
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
    kicker: "een avond",
    title: "Om te onthouden",
    body: "Vier gangen tussen de kunstwerken, met maximaal dertig gasten per avond. Reserveer telefonisch of laat uw gegevens achter.",
    onCta: () => onNavigate('Contact')
  }));
}
window.PopupScreen = PopupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-popup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-praktisch.jsx
try { (() => {
function PraktischScreen({
  onNavigate
}) {
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
    image: IMG.water,
    kicker: "alles",
    title: "Praktisch",
    height: 380
  }), /*#__PURE__*/React.createElement(QuoteBar, null, "\u201CWij zijn goed bereikbaar\u201D"), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "waar u ons",
    title: "Vindt",
    size: "l"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, rows([['Adres', 'Nieuwveenseweg 59'], ['Plaats', '2421 LB Nieuwkoop'], ['Telefoon', '06 - 42 57 63 95'], ['E-mail', 'info@rijlaarsdam.nl'], ['Feesten en meetings', '085 888 3211']])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    onClick: () => onNavigate('Locatie')
  }, "Bekijk het erf"), /*#__PURE__*/React.createElement(Button, {
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
    pad: "0 var(--space-8) var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "hoe u ons",
    title: "Bereikt",
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
    body: 'Vanaf de A4 of de N231 rijdt u in twintig minuten de polder in. Het erf ligt direct aan de Nieuwveenseweg; parkeren is gratis op eigen terrein.'
  }, {
    caption: 'Met openbaar vervoer',
    image: IMG.water,
    body: 'Vanaf station Alphen aan den Rijn of Breukelen rijdt de bus tot Nieuwkoop, daarna is het tien minuten lopen.'
  }, {
    caption: 'Met de fiets',
    image: IMG.lounge,
    body: 'Komt u uit de omgeving? Via het fietsknooppuntennetwerk rijdt u dwars door de plassen naar de Hoeve.'
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
    kicker: "goed om te",
    title: "Weten",
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
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "huur van de",
    title: "Vergaderlocatie",
    align: "center",
    size: "l"
  }), /*#__PURE__*/React.createElement(Lead, {
    align: "center",
    width: "74ch"
  }, "Inclusief gebruik van het 75-inch tv-scherm, flip-over, vergaderbox en gratis wifi. Genoemde bedragen zijn exclusief btw en exclusief catering.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: 'var(--space-7) auto 0'
    }
  }, rows([['Dagdeel, 9.00 - 13.00 uur', '\u20ac 395'], ['Dagdeel, 13.00 - 17.00 uur', '\u20ac 395'], ['Avond, vanaf 18.00 uur', '\u20ac 475'], ['Hele dag, 9.00 - 17.00 uur', '\u20ac 525']])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) auto 0',
      maxWidth: 620,
      textAlign: 'center',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-body)'
    }
  }, "Tarieven voor feesten, bruiloften en de galerie op aanvraag.")), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen",
    align: "center",
    size: "l",
    tone: "onDeep"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    items: FAQ_ITEMS
  })), /*#__PURE__*/React.createElement(PageEnd, {
    page: "praktisch",
    tone: "sage",
    kicker: "de plek",
    title: "Waar alles samenkomt",
    body: "Komt u langs om de locatie te bekijken? U bent vrijblijvend welkom \u2014 wij zetten de koffie klaar.",
    onCta: () => onNavigate('Contact')
  }));
}
window.PraktischScreen = PraktischScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-praktisch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-ruimte.jsx
try { (() => {
const ROOM_DATA = {
  'Koetshuis': {
    hero: 'koetshuisOntvangst',
    kicker: 'een kijkje in',
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
    kicker: 'een kijkje in',
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
    kicker: 'een kijkje in',
    title: 'De Stal',
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
    kicker: 'een kijkje in',
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
};
function RuimteScreen({
  room = 'Koetshuis',
  onNavigate
}) {
  const d = ROOM_DATA[room] || ROOM_DATA['Koetshuis'];
  const others = Object.keys(ROOM_DATA).filter(r => r !== room);
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
    title: n,
    body: "Korte toelichting bij deze opstelling: voor welke groep en welk soort programma hij werkt."
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-deep)",
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "veel gestelde",
    title: "Vragen",
    align: "center",
    size: "l",
    tone: "onDeep"
  })), /*#__PURE__*/React.createElement(FaqAccordion, {
    items: FAQ_ITEMS
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "bekijk ook onze",
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
    image: IMG[ROOM_DATA[r].hero],
    caption: r,
    meta: ROOM_DATA[r].meta,
    onReadMore: () => onNavigate(r)
  })))), /*#__PURE__*/React.createElement(PageEnd, {
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
   Prijzen komen uit guidelines/content-en-feiten.md (excl. btw); controleer voor publicatie. */
const ARRANGEMENTEN = [['Polderpracht', '4 uur', '€ 15,50 p.p.', 'Onbeperkt koffie, thee en water, met huisgemaakte lekkernij bij de start.'], ['Korenbloem', '8 uur', '€ 28,50 p.p.', 'De hele dag verzorgd, inclusief een lunch uit eigen keuken.'], ['Inspiratie', '8 uur', '€ 35,50 p.p.', 'De hele dag verzorgd, met een uitgebreide lunch en een borrel na.']];
function ZakelijkScreen({
  onNavigate
}) {
  const [ruimte, setRuimte] = React.useState('Hooiberg');
  const RUIMTE = {
    Hooiberg: ['Vergaderen met uitzicht', 'Volledig omringd door ramen, met uitzicht over de polder en de beeldentuin. Voor maximaal 30 personen — de ruimte waar de meeste vergaderdagen plaatsvinden.', 'hooibergFlipover'],
    Stal: ['Historisch en besloten', 'Ruim honderdtien jaar oud, met de originele balken en werk van de Haagse en Leidsche school aan de wand. Geschikt voor meetings, wijnproeverijen en private dining.', 'stal'],
    Koetshuis: ['Ruimte voor 250', 'De grootste zaal, met uitstekende akoestiek. Voor congressen, beurzen en bedrijfsfeesten; de indeling is volledig vrij.', 'koetshuisBijeenkomst'],
    Ontwikkelatelier: ['Coaching en strategie', 'De oude lijstenmakerij, verbouwd tot trainingsruimte met uitzicht over het land. Voor coaching, bestuurs- en strategiesessies.', 'atelier']
  };
  const r = RUIMTE[ruimte];
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
    tone: "outline",
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
    image: IMG.hooibergFlipover,
    caption: "Vergaderen",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Hooiberg')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.koetshuisBijeenkomst,
    caption: "Grote bijeenkomsten",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Koetshuis')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.workshop,
    caption: "Workshops",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Contact')
  }), /*#__PURE__*/React.createElement(RoomCard, {
    image: IMG.koetshuisFeest,
    caption: "Bedrijfsfeesten",
    readMoreLabel: "Bekijk",
    onReadMore: () => onNavigate('Particulier')
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--section-y-tight) var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    kicker: "welke ruimte",
    title: "Past bij u?",
    align: "center",
    size: "l"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TabPills, {
    tone: "onLight",
    items: Object.keys(RUIMTE),
    value: ruimte,
    onChange: setRuimte
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[r[2]],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-s)',
      color: 'var(--ink-900)'
    }
  }, r[0]), /*#__PURE__*/React.createElement(Lead, {
    width: "46ch"
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "outline",
    onClick: () => onNavigate(ruimte)
  }, "Naar ", ruimte))))), /*#__PURE__*/React.createElement(SplitPanel, {
    image: IMG.workshop,
    ratio: "4 / 3",
    reverse: true
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
  }, ARRANGEMENTEN.map(([naam, duur, prijs, tekst]) => /*#__PURE__*/React.createElement("div", {
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
      fontSize: 'var(--fs-display-xs)',
      color: 'var(--ink-900)'
    }
  }, naam), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--green-700)'
    }
  }, prijs), /*#__PURE__*/React.createElement("p", {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-s)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--sage-300)'
    }
  }, "Zaalhuur"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['Dagdeel', '9.00–13.00 of 13.00–17.00', '€ 395'], ['Avond', 'vanaf 18.00', '€ 475'], ['Hele dag', '9.00–17.00', '€ 525']].map(([a, b, c]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid rgba(251,248,243,.18)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--text-on-dark)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'var(--space-3)',
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--sage-300)'
    }
  }, b)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--text-on-dark)'
    }
  }, c)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--sage-300)'
    }
  }, "Alle bedragen zijn exclusief btw.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Extra\u2019s"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['Energy break', 'huisgemaakte quiche', '€ 7,50'], ['Healthy break', 'smoothie met vers fruit', '€ 6,50'], ['Borrel na', 'met hapjes uit eigen keuken', 'op aanvraag']].map(([a, b, c]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid rgba(22,25,26,.09)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--ink-900)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'var(--space-3)',
      fontSize: 'var(--fs-body-xs)',
      color: 'var(--ink-500)'
    }
  }, b)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-l)',
      color: 'var(--green-700)'
    }
  }, c))))))), /*#__PURE__*/React.createElement(Section, {
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

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CarouselNav = __ds_scope.CarouselNav;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TabPills = __ds_scope.TabPills;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroVideo = __ds_scope.HeroVideo;

__ds_ns.SplitPanel = __ds_scope.SplitPanel;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.PageOutro = __ds_scope.PageOutro;

__ds_ns.PhotoCarousel = __ds_scope.PhotoCarousel;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.QuoteBar = __ds_scope.QuoteBar;

__ds_ns.WinterLockup = __ds_scope.WinterLockup;

__ds_ns.SiteMap = __ds_scope.SiteMap;

__ds_ns.SitePlan = __ds_scope.SitePlan;

__ds_ns.SplitHero = __ds_scope.SplitHero;

})();
