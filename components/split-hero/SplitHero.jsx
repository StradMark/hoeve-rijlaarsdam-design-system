import React from 'react';

/* Full-viewport doorway hero: two equal choices, calm motion on hover, one scroll hint.
   Only ever used on the homepage — every other page uses <HeroVideo>. */
export function SplitHero({items=[],caption,ampersand=true,offset=64,fullHeight=true,scrollHint='Scroll',onScrollHint,style}){
  const [hover,setHover]=React.useState(-1);
  const [narrow,setNarrow]=React.useState(false);
  const [top,setTop]=React.useState(offset);
  const root=React.useRef(null);
  React.useEffect(()=>{
    const check=()=>{
      setNarrow(window.innerWidth<760);
      // measure what actually sits above this hero (navbar height) instead of trusting `offset`
      const el=root.current;
      if(el) setTop(Math.max(0,Math.round(el.getBoundingClientRect().top+window.scrollY)));
    };
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[offset]);
  const kf='sh-'+React.useMemo(()=>Math.random().toString(36).slice(2,7),[]);
  return (
    <section ref={root} style={{position:'relative',display:'flex',flexDirection:'column',
      height:fullHeight?'calc(100dvh - '+top+'px)':undefined,minHeight:fullHeight?480:undefined,...style}}>
      <style>{'@keyframes '+kf+'-bob{0%,100%{transform:translateY(0);opacity:.85}50%{transform:translateY(6px);opacity:1}}'}</style>
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
                background:dimmed?'rgba(22,25,26,.5)':'rgba(22,25,26,.22)',
                transition:'background var(--dur-slow) var(--ease-out)'}}/>
              <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',
                justifyContent:'center',gap:'var(--space-5)'}}>
                <h1 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
                  fontSize:'clamp(34px,4.6vw,var(--fs-display-xl))',letterSpacing:'.05em',textTransform:'uppercase',
                  color:'var(--white)'}}>{it.label}</h1>
                <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',
                  fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
                  textTransform:'uppercase',lineHeight:1,padding:'10px 26px',borderRadius:'var(--radius-pill)',
                  background:on?'var(--white)':'var(--accent)',color:on?'var(--accent)':'var(--text-on-dark)',
                  transition:'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out)'}}>{it.ctaLabel}</span>
              </div>
            </div>
          );
        })}
        {ampersand&&!narrow&&(
          <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none',
            fontFamily:'var(--font-script)',fontSize:'clamp(64px,7vw,120px)',lineHeight:1,color:'var(--white)',
            opacity:hover>-1?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}}>&amp;</div>
        )}
        {scrollHint&&(
          <div style={{position:'absolute',left:0,right:0,bottom:'var(--space-5)',display:'flex',justifyContent:'center',pointerEvents:'none'}}>
          <button type="button" onClick={onScrollHint} aria-label={scrollHint}
            style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--space-2)',
              background:'none',border:'none',cursor:'pointer',padding:'var(--space-2)',pointerEvents:'auto',
              animation:kf+'-bob 2.6s var(--ease-inout) infinite'}}>
            <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--white)'}}>{scrollHint}</span>
            <span style={{width:1,height:26,background:'var(--white)',opacity:.8}}/>
          </button>
          </div>
        )}
      </div>
      {caption&&(
        <div style={{background:'var(--surface-deep)',padding:'14px var(--space-5)',textAlign:'center',flex:'0 0 auto'}}>
          <p style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
            fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
            color:'var(--text-on-dark)',lineHeight:1.5}}>{caption}</p>
        </div>
      )}
    </section>
  );
}
