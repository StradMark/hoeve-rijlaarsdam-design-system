import React from 'react';

/* Goud staat nooit op lichtgroen (1,3:1, en het goud wordt vaal) — zie guidelines/kleur-combinaties.html.
   tone="gold" hoort op wit, crème of flessengroen; op een sage-band gebruik je 'white'. */
export function CarouselNav({direction='next',tone='sage',onClick,style}){
  const [hover,setHover]=React.useState(false);
  const color=tone==='sage'?'var(--sage-500)':tone==='gold'?'var(--gold-500)':tone==='deep'?'var(--green-900)':'var(--white)';
  return (
    <button type="button" aria-label={direction==='next'?'Volgende':'Vorige'} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{background:'none',border:'none',padding:'var(--space-2)',cursor:'pointer',lineHeight:0,
        opacity:hover?1:.85,transform:hover?(direction==='next'?'translateX(3px)':'translateX(-3px)'):'none',
        transition:'all var(--dur-fast) var(--ease-out)',...style}}>
      <span style={{display:'block',width:0,height:0,
        borderTop:'11px solid transparent',borderBottom:'11px solid transparent',
        borderLeft:direction==='next'?'16px solid '+color:'none',
        borderRight:direction==='prev'?'16px solid '+color:'none'}}/>
    </button>
  );
}
