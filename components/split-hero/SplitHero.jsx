import React from 'react';

/* Full-viewport doorway hero: two equal choices, calm motion on hover, one scroll hint.
   Only ever used on the homepage — every other page uses <HeroVideo>. */
export function SplitHero({items=[],caption,intro=true,ampersand=true,ampersandSrc='/assets/ornament-swirl-wit.svg',offset=64,fullHeight=true,scrollHint='Scroll',onScrollHint,narrow:narrowProp,style}){
  const [hover,setHover]=React.useState(-1);
  const [narrowAuto,setNarrowAuto]=React.useState(false);
  const [top,setTop]=React.useState(offset);
  const root=React.useRef(null);
  React.useEffect(()=>{
    const check=()=>{
      setNarrowAuto(window.innerWidth<760);
      // measure what actually sits above this hero (navbar height) instead of trusting `offset`
      const el=root.current;
      if(el) setTop(Math.max(0,Math.round(el.getBoundingClientRect().top+window.scrollY)));
    };
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[offset]);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een kaart
     de telefoonvorm naast de desktopvorm kan tonen. */
  const narrow=narrowProp===undefined?narrowAuto:narrowProp;
  /* Intro-motion. Alles wat beweegt zit in de lagen bóven het beeld: de overlay trekt open,
     tekst zet zich 10px omhoog, de naad groeit uit het midden en de swirl komt als laatste op.
     Het beeld zelf blijft stil, zodat een video erachter niet meevecht. Eén keer per sessie. */
  const [played,setPlayed]=React.useState(()=>{
    if(!intro) return true;
    try{ return sessionStorage.getItem('hr-hero-intro')==='1' }catch(e){ return false }
  });
  const [lit,setLit]=React.useState(played);
  React.useEffect(()=>{
    if(played) return;
    const t=requestAnimationFrame(()=>setLit(true));
    try{ sessionStorage.setItem('hr-hero-intro','1') }catch(e){}
    const done=setTimeout(()=>setPlayed(true),1800);
    return ()=>{cancelAnimationFrame(t);clearTimeout(done)};
  },[played]);
  const rise=(delay)=>({opacity:lit?1:0,transform:lit?'none':'translateY(10px)',
    transition:'opacity .55s var(--ease-out) '+delay+'ms,transform .55s var(--ease-out) '+delay+'ms'});
  const kf='sh-'+React.useMemo(()=>Math.random().toString(36).slice(2,7),[]);
  return (
    <section ref={root} id={kf} style={{position:'relative',display:'flex',flexDirection:'column',
      height:fullHeight?'calc(100dvh - '+top+'px)':undefined,minHeight:fullHeight?480:undefined,...style}}>
      <style>{'@keyframes '+kf+'-bob{0%,100%{transform:translateY(0);opacity:.85}50%{transform:translateY(6px);opacity:1}}'
        +'@media(prefers-reduced-motion:reduce){#'+kf+' *{transition-duration:.01ms!important;animation:none!important}}'}</style>
      <div style={{position:'relative',flex:1,display:'flex',flexDirection:narrow?'column':'row',overflow:'hidden'}}>
        {items.map((it,i)=>{
          const on=hover===i, dimmed=hover>-1&&!on;
          return (
            <div key={it.label} onMouseEnter={()=>!narrow&&setHover(i)} onMouseLeave={()=>!narrow&&setHover(-1)}
              onClick={it.onSelect} role="link" tabIndex={0}
              style={{position:'relative',flex:on?1.14:dimmed?.9:1,overflow:'hidden',cursor:'pointer',
                transition:'flex var(--dur-slow) var(--ease-out)'}}>
              {it.video
                ? <video src={it.video} poster={it.image} autoPlay muted loop playsInline
                    style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',
                      transform:on?'scale(1.05)':'scale(1)',transition:'transform 3s var(--ease-out)'}}/>
                : <img src={it.image} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',
                    transform:on?'scale(1.05)':'scale(1)',transition:'transform 3s var(--ease-out)'}}/>}
              <div style={{position:'absolute',inset:0,
                background:!lit?'rgba(22,25,26,.62)':dimmed?'rgba(22,25,26,.5)':'rgba(22,25,26,.22)',
                transition:'background '+(lit?'var(--dur-slow)':'.7s')+' var(--ease-out)'}}/>
              <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',
                justifyContent:'center',gap:'var(--space-5)',
                /* gestapeld staat de scroll-hint onder de laatste helft; die helft krijgt daar
                   ruimte voor, anders komt de knop eronder te liggen */
                paddingBottom:narrow&&i===items.length-1&&scrollHint?68:0}}>
                <h1 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
                  fontSize:'clamp(34px,4.6vw,var(--fs-display-xl))',letterSpacing:'.05em',textTransform:'uppercase',
                  color:'var(--white)',...rise(250)}}>{it.label}</h1>
                <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',
                  fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
                  textTransform:'uppercase',lineHeight:1,padding:'10px 26px',minHeight:narrow?'var(--touch-min)':undefined,
                  borderRadius:'var(--radius-pill)',
                  background:on?'var(--white)':'var(--accent)',color:on?'var(--accent)':'var(--text-on-dark)',
                  ...rise(330),transition:'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),opacity .55s var(--ease-out) 330ms,transform .55s var(--ease-out) 330ms'}}>{it.ctaLabel}</span>
              </div>
            </div>
          );
        })}
        {!narrow?(
          /* de naad groeit uit het midden open — het enige wat de twee helften scheidt.
             Op hover verschuift de deling, dus dan verdwijnt de naad met de swirl mee:
             een vaste lijn op 50% zou naast de echte grens komen te staan. */
          <span aria-hidden="true" style={{position:'absolute',left:'50%',top:0,bottom:0,width:1,
            background:'rgba(255,255,255,.5)',transformOrigin:'50% 50%',
            transform:'translateX(-.5px) scaleY('+(lit?1:0)+')',
            opacity:hover>-1?0:1,
            transition:'transform .5s var(--ease-out) 620ms,opacity '+(hover>-1?'var(--dur-base)':'.55s')+' var(--ease-out) '+(hover>-1?'0ms':'180ms')}}/>
        ):(
          /* gestapeld ligt de naad horizontaal, en groeit uit het midden naar de zijkanten */
          <span aria-hidden="true" style={{position:'absolute',top:'50%',left:0,right:0,height:1,
            background:'rgba(255,255,255,.5)',transformOrigin:'50% 50%',
            transform:'translateY(-.5px) scaleX('+(lit?1:0)+')',
            transition:'transform .5s var(--ease-out) 620ms'}}/>
        )}
        {ampersand&&(
          /* de swirl-ampersand uit de huisstijl (assets/ornament-swirl.svg), wit op de naad.
             Gestapeld staat hij op de horizontale naad tussen de twee helften — anders zou het
             merkteken op telefoon helemaal verdwijnen, en juist daar is het de enige plek waar
             de twee kanten van de hoeve elkaar raken. */
          <img src={ampersandSrc} alt="en" style={{position:'absolute',left:'50%',top:'50%',
            transform:(narrow?'translate(-50%,-50%)':'translate(-36%,-50%)')+' scale('+(lit?1:.94)+')',pointerEvents:'none',
            width:narrow?'clamp(58px,17vw,88px)':'clamp(76px,8vw,140px)',height:'auto',
            filter:'drop-shadow(0 1px 6px rgba(22,25,26,.45))',
            opacity:hover>-1?0:lit?1:0,
            transition:lit?'opacity var(--dur-base) var(--ease-out),transform .6s var(--ease-out)':'opacity .6s var(--ease-out) 900ms,transform .6s var(--ease-out) 900ms'}}/>
        )}
        {scrollHint&&(
          <div style={{position:'absolute',left:0,right:0,bottom:'var(--space-5)',display:'flex',justifyContent:'center',pointerEvents:'none'}}>
          <button type="button" onClick={onScrollHint} aria-label={scrollHint}
            style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--space-2)',
              background:'none',border:'none',cursor:'pointer',padding:'var(--space-2)',pointerEvents:'auto',
              opacity:lit?1:0,transition:'opacity .5s var(--ease-out) 1450ms',
              animation:lit?kf+'-bob 2.6s var(--ease-inout) infinite':'none'}}>
            <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--white)'}}>{scrollHint}</span>
            <span style={{width:1,height:26,background:'var(--white)',opacity:.8}}/>
          </button>
          </div>
        )}
      </div>
      {caption&&(
        <div style={{background:'var(--surface-deep)',padding:'14px var(--space-5)',textAlign:'center',flex:'0 0 auto'}}>
          {/* Zelfde behandeling als <QuoteBar>: kleine letters, geen kapitalen. */}
          <p style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
            fontSize:'var(--fs-body-l)',letterSpacing:'.03em',
            color:'var(--text-on-dark)',lineHeight:1.55}}>{caption}</p>
        </div>
      )}
    </section>
  );
}
