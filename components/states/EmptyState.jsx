import React from 'react';

/* Wat er staat als er niets staat: geen zoekresultaten, een lege agenda, een filter dat
   niets oplevert. Geen illustratie en geen uitroepteken — een lege staat is geen fout, en
   dit merk heeft geen mascotte. Een gouden haarlijn, één zin, hooguit één uitweg. */
export function EmptyState({title,children,action,tone='light',style}){
  const onDeep=tone==='deep',onSage=tone==='sage';
  const titleColor=onDeep||onSage?'var(--white)':'var(--text-heading)';
  const bodyColor=onDeep?'var(--text-on-dark)':onSage?'var(--white)':'var(--text-muted)';
  const rule=onDeep?'var(--gold-300)':onSage?'var(--white)':'var(--gold-500)';
  return (
    <div role="status" style={{textAlign:'center',padding:'var(--space-8) var(--space-6)',...style}}>
      <span aria-hidden="true" style={{display:'block',width:34,height:1,background:rule,margin:'0 auto var(--space-5)'}}/>
      {title&&<h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:'var(--fs-display-s)',color:titleColor}}>{title}</h3>}
      {children&&<p style={{margin:'var(--space-3) auto 0',maxWidth:'46ch',fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:bodyColor,textWrap:'pretty'}}>{children}</p>}
      {action&&<div style={{marginTop:'var(--space-6)'}}>{action}</div>}
    </div>
  );
}
