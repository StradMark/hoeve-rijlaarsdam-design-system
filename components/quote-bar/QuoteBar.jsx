import React from 'react';

/* Full-bleed deep-green band with one centred line, directly under the hero on every page.
   Set in letterspaced display-serif capitals — the same treatment as RIJLAARSDAM in the logo. */
export function QuoteBar({children,style}){
  return (
    <div style={{background:'var(--surface-deep)',padding:'14px var(--space-5)',textAlign:'center',...style}}>
      <p style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
        color:'var(--text-on-dark)',lineHeight:1.5}}>{children}</p>
    </div>
  );
}
