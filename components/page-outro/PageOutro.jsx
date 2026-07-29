import React from 'react';
import { CtaBand } from '../cta-band/CtaBand.jsx';
import { PhotoCarousel } from '../photo-carousel/PhotoCarousel.jsx';

/* Fixed page ending: offerte CTA with the photo carousel hanging into it.
   Always followed by <Footer/> in its own section. */
export function PageOutro({items=[],height=400,overlap=.28,tone='cream',arrowTone,
  kicker,title,body,ctaLabel,onCta,style}){
  const lift=Math.round(height*overlap);
  return (
    <div style={{background:'var(--surface-page)',...style}}>
      <CtaBand tone={tone} bleed={lift} kicker={kicker} title={title} body={body}
        ctaLabel={ctaLabel} onCta={onCta}/>
      <div style={{marginTop:-lift,paddingBottom:'var(--section-y-tight)'}}>
        <PhotoCarousel items={items} height={height} arrowTone={arrowTone||(tone==='cream'?'deep':'white')}/>
      </div>
    </div>
  );
}
