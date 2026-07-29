import React from 'react';

export function BenefitsPanel({kicker,title,items=[],tone='deep',style}){
  const deep=tone==='deep';
  return (
    <div style={{background:deep?'var(--surface-deep)':'var(--surface-panel-soft)',padding:'var(--space-7) var(--space-7)',...style}}>
      {kicker&&<div style={{fontFamily:'var(--font-script)',fontVariantLigatures:'none',fontSize:'var(--fs-script-m)',lineHeight:'var(--lh-script)',
        color:deep?'var(--sage-300)':'var(--cream-100)',marginBottom:'-.24em',marginLeft:'-.18em'}}>{kicker}</div>}
      {title&&<h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display-m)',color:'var(--white)',
        fontWeight:400,margin:'0 0 var(--space-5)'}}>{title}</h3>}
      <ul style={{listStyle:'none',margin:0,padding:0,display:'grid',gap:'6px'}}>
        {items.map((it,i)=>(
          <li key={i} style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-s)',fontWeight:'var(--fw-body)',
            color:deep?'var(--text-on-dark)':'var(--white)',lineHeight:1.5}}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
