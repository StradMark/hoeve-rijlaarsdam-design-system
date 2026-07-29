import React from 'react';
import { Button } from '../core/Button.jsx';

/* Items are either a plain string or {label, items:[...]} — the latter opens a panel on hover/focus. */
export function NavBar({logo,left=[],right=[],active,mode='dropdown',ctaLabel='Offerte',onCta,onNavigate,style}){
  const [open,setOpen]=React.useState(null);
  const close=React.useRef(null);
  const enter=(k)=>{clearTimeout(close.current);setOpen(k)};
  const leave=()=>{clearTimeout(close.current);close.current=setTimeout(()=>setOpen(null),140)};
  React.useEffect(()=>()=>clearTimeout(close.current),[]);

  const go=(item)=>{setOpen(null);onNavigate&&onNavigate(item)};
  const labelOf=(it)=>typeof it==='string'?it:it.label;
  const isActive=(it)=>{
    const l=labelOf(it);
    return l===active||(typeof it!=='string'&&(it.items||[]).some(c=>labelOf(c)===active));
  };

  const linkStyle=(on)=>({fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',
    letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:on?'var(--text-accent)':'var(--ink-900)',
    textDecoration:'none',whiteSpace:'nowrap',background:'none',border:'none',padding:0,cursor:'pointer',
    transition:'color var(--dur-fast) var(--ease-out)'});

  const item=(it,i)=>{
    const l=labelOf(it), on=isActive(it), kids=mode==='flat'?null:(typeof it==='string'?null:it.items);
    const k=l+'-'+i;
    if(!kids) return (
      <a key={k} href="#" onClick={e=>{e.preventDefault();go(l)}} style={linkStyle(on)}
        onMouseEnter={e=>e.currentTarget.style.color='var(--text-accent)'}
        onMouseLeave={e=>e.currentTarget.style.color=on?'var(--text-accent)':'var(--ink-900)'}>{l}</a>
    );
    const shown=open===k;
    return (
      <div key={k} onMouseEnter={()=>enter(k)} onMouseLeave={leave}
        style={{position:'relative',display:'flex',alignItems:'center',gap:6}}>
        <a href="#" onClick={e=>{e.preventDefault();go(l)}} onFocus={()=>enter(k)}
          style={{...linkStyle(on||shown),display:'inline-flex',alignItems:'center',gap:7}}>
          {l}
          <span style={{width:0,height:0,borderLeft:'3.5px solid transparent',borderRight:'3.5px solid transparent',
            borderTop:'4px solid currentColor',opacity:.7,
            transform:shown?'rotate(180deg)':'none',transition:'transform var(--dur-fast) var(--ease-out)'}}/>
        </a>
        <div style={{position:'absolute',top:'100%',left:-18,minWidth:236,paddingTop:14,zIndex:40,
          opacity:shown?1:0,visibility:shown?'visible':'hidden',
          transform:shown?'translateY(0)':'translateY(-6px)',
          transition:'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out),visibility var(--dur-base)'}}>
          <div style={{background:'var(--surface-deep)',padding:'var(--space-4) 0',
            display:'flex',flexDirection:'column',boxShadow:'var(--shadow-card)'}}>
            {kids.map(c=>{
              const cl=labelOf(c), ca=cl===active;
              return (
                <a key={cl} href="#" onClick={e=>{e.preventDefault();go(cl)}}
                  style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
                    letterSpacing:'var(--ls-label)',textTransform:'uppercase',textDecoration:'none',
                    color:ca?'var(--text-accent)':'var(--cream-100)',padding:'11px var(--space-5)',
                    whiteSpace:'nowrap',transition:'color var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out)'}}
                  onMouseEnter={e=>{e.currentTarget.style.color='var(--text-accent)';e.currentTarget.style.background='rgba(251,248,243,.06)'}}
                  onMouseLeave={e=>{e.currentTarget.style.color=ca?'var(--text-accent)':'var(--cream-100)';e.currentTarget.style.background='none'}}>{cl}</a>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header style={{background:'var(--white)',display:'grid',gridTemplateColumns:'1fr auto 1fr',
      alignItems:'center',gap:'var(--space-5)',padding:'10px var(--space-6)',position:'relative',zIndex:30,...style}}>
      <nav style={{display:'flex',alignItems:'center',gap:'var(--space-5)'}}>{left.map(item)}</nav>
      <a href="#" onClick={e=>{e.preventDefault();go(labelOf(left[0])||'home')}} style={{lineHeight:0}}>
        {logo?<img src={logo} alt="Hoeve Rijlaarsdam" style={{height:44}}/>:
          <span style={{fontFamily:'var(--font-display)',fontSize:18,letterSpacing:'var(--ls-label)',color:'var(--ink-900)'}}>HOEVE RIJLAARSDAM</span>}
      </a>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:'var(--space-5)'}}>
        {right.map(item)}
        <Button tone="primary" size="sm" onClick={onCta}>{ctaLabel}</Button>
      </nav>
    </header>
  );
}
