import React from 'react';

export function TabPills({items=[],value,onChange,tone='onSage',style}){
  const active=value??items[0];
  return (
    <div style={{display:'flex',gap:'var(--space-4)',flexWrap:'wrap',...style}}>
      {items.map(it=>{
        const on=it===active;
        return (
          <button key={it} type="button" onClick={()=>onChange&&onChange(it)} style={{
            fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
            textTransform:'uppercase',lineHeight:1,padding:'9px 24px',borderRadius:'var(--radius-pill)',
            cursor:'pointer',transition:'all var(--dur-fast) var(--ease-out)',
            background:on?(tone==='onSage'?'var(--accent)':'var(--accent)'):(tone==='onSage'?'var(--white)':'transparent'),
            color:on?'var(--text-on-dark)':(tone==='onSage'?'var(--accent)':'var(--accent)'),
            border:'1px solid '+(on?'var(--accent)':(tone==='onSage'?'var(--white)':'var(--accent)'))
          }}>{it}</button>
        );
      })}
    </div>
  );
}
