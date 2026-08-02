import React from 'react';

/* Label, detail and amount on one rule — zaalhuur, extra's, arrangementen.
   `tone` says which field it stands on. On sage everything is white — the house choice — so
   the band only ever carries large type; small print belongs on the deep green instead. */
export function PriceList({kicker,items=[],note,tone='light',style}){
  const onDeep=tone==='onDeep',onSage=tone==='onSage';
  const kickerColor=onDeep?'var(--sage-300)':onSage?'var(--text-on-sage-body)':'var(--text-accent)';
  const labelColor=onDeep?'var(--text-on-dark)':onSage?'var(--text-on-sage-body)':'var(--ink-900)';
  const detailColor=onDeep?'var(--sage-300)':onSage?'var(--text-on-sage-body)':'var(--ink-500)';
  const amountColor=onDeep?'var(--text-on-dark)':onSage?'var(--text-on-sage-body)':'var(--green-700)';
  const rule=onDeep?'1px solid rgba(251,248,243,.18)'
    :onSage?'1px solid var(--rule-on-sage)':'1px solid rgba(22,25,26,.09)';
  return (
    <div style={style}>
      {kicker&&<div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
        letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:kickerColor}}>{kicker}</div>}
      <div style={{marginTop:kicker?'var(--space-4)':0,display:'grid',gap:'var(--space-3)'}}>
        {items.map(({label,detail,amount})=>
          <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',
            gap:'var(--space-4)',paddingBottom:'var(--space-3)',borderBottom:rule}}>
            <span>
              <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',color:labelColor}}>{label}</span>
              {detail&&<span style={{marginLeft:'var(--space-3)',fontSize:'var(--fs-body-xs)',color:detailColor}}>{detail}</span>}
            </span>
            <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',
              color:amountColor,whiteSpace:'nowrap'}}>{amount}</span>
          </div>)}
      </div>
      {note&&<p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-xs)',color:detailColor}}>{note}</p>}
    </div>
  );
}
