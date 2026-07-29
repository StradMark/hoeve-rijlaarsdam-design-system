import React from 'react';

export function TestimonialCard({quote,attribution,tone='sage',style}){
  const sage=tone==='sage';
  return (
    <figure style={{margin:0,background:sage?'var(--surface-panel-soft)':'var(--surface-deep)',
      padding:'var(--space-6) var(--space-7)',textAlign:'center',...style}}>
      <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--fs-body-m)',
        letterSpacing:'.06em',textTransform:'uppercase',lineHeight:1.75,color:'var(--white)'}}>{quote}</blockquote>
      {attribution&&<figcaption style={{marginTop:'var(--space-4)',fontFamily:'var(--font-body)',
        fontSize:'var(--fs-body-xs)',color:sage?'var(--cream-100)':'var(--sage-200)'}}>{attribution}</figcaption>}
    </figure>
  );
}
