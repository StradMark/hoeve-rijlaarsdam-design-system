import React from 'react';
import { Button } from '../core/Button.jsx';

/* Items are either a plain string or {label, items:[...]} — the latter opens a panel on hover/focus. */
export function NavBar({logo,left=[],right=[],active,mode='dropdown',ctaLabel='Offerte',onCta,onNavigate,narrow:narrowProp,defaultDrawerOpen=false,sticky=true,style}){
  const [open,setOpen]=React.useState(null);
  /* Onder 900px past een gesplitste navigatie met zeven links en een knop niet meer naast
     elkaar; dan wordt het logo links, een lade-knop rechts, en de hele navigatie een lijst
     over het scherm. Groepen worden daar accordeons in plaats van zweefpanelen — hover
     bestaat niet op een telefoon. */
  const [narrowAuto,setNarrowAuto]=React.useState(false);
  const [drawer,setDrawer]=React.useState(defaultDrawerOpen);
  const [fold,setFold]=React.useState(null);
  React.useEffect(()=>{
    const check=()=>setNarrowAuto(window.innerWidth<900);
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[]);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een
     kaart de telefoonvorm naast de desktopvorm kan tonen. */
  const narrow=narrowProp===undefined?narrowAuto:narrowProp;
  React.useEffect(()=>{if(!narrow)setDrawer(false)},[narrow]);
  const close=React.useRef(null);
  const enter=(k)=>{clearTimeout(close.current);setOpen(k)};
  const leave=()=>{clearTimeout(close.current);close.current=setTimeout(()=>setOpen(null),140)};
  React.useEffect(()=>()=>clearTimeout(close.current),[]);

  /* De balk blijft staan bij scrollen: de pagina's zijn lang en de weg naar Contact of een
     andere zaal mag geen terugreis naar boven zijn. Boven aan de pagina is hij nog vlak, zodat
     hij op de hero zweeft; zodra er iets onder de balk door is gegaan komt de gouden haarlijn. */
  const [scrolled,setScrolled]=React.useState(false);
  React.useEffect(()=>{
    if(!sticky) return;
    const on=()=>setScrolled(window.scrollY>8);
    on();window.addEventListener('scroll',on,{passive:true});
    return ()=>window.removeEventListener('scroll',on);
  },[sticky]);
  const bar=sticky?{position:'sticky',top:0,
    borderBottom:'1px solid '+(scrolled?'var(--gold-300)':'transparent'),
    boxShadow:scrolled?'0 1px 12px rgba(22,25,26,.06)':'none',
    transition:'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)'}:null;

  const go=(item)=>{setOpen(null);setDrawer(false);onNavigate&&onNavigate(item)};
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

  if(narrow){
    const rows=[...left,...right];
    const rowLabel={fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',letterSpacing:'var(--ls-label)',
      textTransform:'uppercase',textDecoration:'none',background:'none',border:0,padding:0,textAlign:'left',cursor:'pointer'};
    return (
      <header style={{background:'var(--white)',position:'relative',zIndex:30,...bar,...style}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',padding:'8px var(--gutter)'}}>
          <a href="#" onClick={e=>{e.preventDefault();go(labelOf(left[0])||'home')}} style={{lineHeight:0}}>
            {logo?<img src={logo} alt="Hoeve Rijlaarsdam" style={{height:38}}/>:
              <span style={{fontFamily:'var(--font-display)',fontSize:15,letterSpacing:'var(--ls-label)',color:'var(--ink-900)'}}>HOEVE RIJLAARSDAM</span>}
          </a>
          <button type="button" onClick={()=>setDrawer(d=>!d)} aria-expanded={drawer} aria-label={drawer?'Sluit menu':'Open menu'}
            style={{width:'var(--touch-min)',height:'var(--touch-min)',display:'grid',placeItems:'center',gap:0,
              background:'none',border:0,cursor:'pointer',margin:'0 -10px 0 0'}}>
            <span style={{display:'block',position:'relative',width:22,height:12}}>
              {[0,1,2].map(i=>(
                <span key={i} style={{position:'absolute',left:0,width:22,height:1,background:'var(--ink-900)',
                  top:drawer?6:i*6,
                  transform:drawer?(i===0?'rotate(45deg)':i===1?'scaleX(0)':'rotate(-45deg)'):'none',
                  transition:'top var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'}}/>
              ))}
            </span>
          </button>
        </div>
        <div style={{overflow:'hidden',maxHeight:drawer?'80vh':0,borderTop:drawer?'1px solid var(--border-hairline)':'none',
          transition:'max-height var(--dur-slow) var(--ease-out)'}}>
          <nav style={{display:'flex',flexDirection:'column',padding:'var(--space-3) var(--gutter) var(--space-5)'}}>
            {rows.map((it,i)=>{
              const l=labelOf(it), on=isActive(it), kids=mode==='flat'?null:(typeof it==='string'?null:it.items);
              const shown=fold===l;
              return (
                <div key={l+i} style={{borderBottom:'1px solid var(--border-hairline)'}}>
                  <button type="button" onClick={()=>kids?setFold(shown?null:l):go(l)}
                    aria-expanded={kids?shown:undefined}
                    style={{...rowLabel,color:on?'var(--text-accent)':'var(--ink-900)',width:'100%',minHeight:'var(--touch-min)',
                      display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)'}}>
                    {l}
                    {kids&&<span style={{width:0,height:0,borderLeft:'4px solid transparent',borderRight:'4px solid transparent',
                      borderTop:'5px solid currentColor',opacity:.6,
                      transform:shown?'rotate(180deg)':'none',transition:'transform var(--dur-fast) var(--ease-out)'}}/>}
                  </button>
                  {kids&&<div style={{overflow:'hidden',maxHeight:shown?kids.length*46+12:0,
                    transition:'max-height var(--dur-base) var(--ease-out)'}}>
                    <div style={{display:'flex',flexDirection:'column',paddingBottom:'var(--space-3)'}}>
                      {kids.map(c=>{const cl=labelOf(c);return (
                        <a key={cl} href="#" onClick={e=>{e.preventDefault();go(cl)}}
                          style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-l)',fontWeight:'var(--fw-body)',
                            textDecoration:'none',color:cl===active?'var(--text-accent)':'var(--ink-500)',
                            minHeight:'var(--touch-min)',display:'flex',alignItems:'center'}}>{cl}</a>
                      )})}
                    </div>
                  </div>}
                </div>
              );
            })}
            <div style={{marginTop:'var(--space-5)'}}>
              <Button tone="primary" size="md" onClick={onCta} style={{width:'100%',minHeight:'var(--touch-min)'}}>{ctaLabel}</Button>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header style={{background:'var(--white)',display:'grid',gridTemplateColumns:'1fr auto 1fr',
      alignItems:'center',gap:'var(--space-5)',padding:'10px var(--space-6)',position:'relative',zIndex:30,...bar,...style}}>
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
