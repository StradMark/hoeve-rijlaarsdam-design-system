import React from 'react';

/* Full-bleed deep-green band with one centred line, directly under the hero on every page.
   Display serif, in the case it is written in — NOT capitals. Op verzoek van de ontwerper:
   "kapitalen is voor mij schreeuwen". Alleen de naam RIJLAARSDAM in het logo staat in caps. */
export function QuoteBar({children,style}){
  return (
    <div style={{background:'var(--surface-deep)',padding:'14px var(--space-5)',textAlign:'center',...style}}>
      <p style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:'var(--fs-body-l)',letterSpacing:'.03em',
        color:'var(--text-on-dark)',lineHeight:1.55}}>{children}</p>
    </div>
  );
}
