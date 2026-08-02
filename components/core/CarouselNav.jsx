import React from 'react';

/* Hairline ring with a thin chevron — the same drawn line as the gold rules elsewhere,
   not a filled triangle. On hover the ring fills and the chevron steps in its direction.

   Goud staat nooit op lichtgroen (1,3:1, en het goud wordt vaal) — zie
   guidelines/kleur-combinaties.html. tone="gold" hoort op wit, crème of flessengroen;
   op een sage-band gebruik je 'white'. */
export function CarouselNav({direction='next',tone='sage',size=44,disabled=false,onClick,style}){
  const [hover,setHover]=React.useState(false);
  const on=hover&&!disabled;
  const color=tone==='sage'?'var(--sage-500)':tone==='gold'?'var(--gold-500)'
    :tone==='deep'?'var(--green-900)':'var(--white)';
  const mark=on?(tone==='white'?'var(--green-900)':'var(--white)'):color;
  const next=direction==='next';
  return (
    <button type="button" disabled={disabled}
      aria-label={next?'Volgende':'Vorige'} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:size,height:size,display:'grid',placeItems:'center',padding:0,
        borderRadius:'var(--radius-pill)',
        border:'1px solid '+color,background:on?color:'transparent',
        cursor:disabled?'not-allowed':'pointer',opacity:disabled?.35:1,
        transition:'background var(--dur-base) var(--ease-out),opacity var(--dur-fast) var(--ease-out)',
        ...style}}>
      <svg viewBox="0 0 24 24" width={Math.round(size*0.41)} height={Math.round(size*0.41)}
        aria-hidden="true" style={{display:'block',overflow:'visible',
          transform:on?(next?'translateX(2px)':'translateX(-2px)'):'none',
          transition:'transform var(--dur-base) var(--ease-out)'}}>
        <path d={next?'M9 4l8 8-8 8':'M15 4l-8 8 8 8'} fill="none" stroke={mark}
          strokeWidth="1.4" strokeLinecap="square"
          style={{transition:'stroke var(--dur-base) var(--ease-out)'}}/>
      </svg>
    </button>
  );
}
