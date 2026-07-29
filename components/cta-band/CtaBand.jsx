import React from 'react';
import { SectionHeading } from '../content/SectionHeading.jsx';
import { Button } from '../core/Button.jsx';

const TONES={
  cream:{bg:'var(--surface-cream)',heading:'light',body:'var(--text-body)',button:'primary'},
  sage:{bg:'var(--surface-sage)',heading:'onSage',body:'var(--text-on-dark)',button:'white'}
};

/* Closing call to action, directly above the deep-green footer.
   Never deep green itself — it would merge with the footer into one long dark block.
   `gold` is the exception tone: at most one page per site (e.g. bruiloften). */
export function CtaBand({kicker='de plek',title='Waar alles samenkomt',body,ctaLabel='Vraag offerte aan',
  onCta,tone='cream',bleed=0,style}){
  const t=TONES[tone]||TONES.cream;
  return (
    <section style={{background:t.bg,padding:'var(--section-y-tight) var(--space-8)',
      paddingBottom:bleed?'calc(var(--section-y-tight) + '+bleed+'px)':undefined,...style}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',textAlign:'center'}}>
        <SectionHeading kicker={kicker} title={title} align="center" size="l" tone={t.heading}/>
        {body&&<p style={{maxWidth:'78ch',margin:'var(--space-5) auto var(--space-6)',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:t.body}}>{body}</p>}
        <Button tone={t.button} size="md" onClick={onCta}>{ctaLabel}</Button>
      </div>
    </section>
  );
}
