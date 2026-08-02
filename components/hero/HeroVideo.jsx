import React from 'react';
import { checkKicker } from '../content/SectionHeading.jsx';

export function HeroVideo({image,video,kicker,title,height=460,showPlay=false,align='center',intro=true,children,style}){
  /* Dezelfde kickerregels als SectionHeading: een hero is niet vrijgesteld. */
  if(kicker) checkKicker(kicker,title);
  const [hover,setHover]=React.useState(false);
  /* Intro-motion: de scrim trekt open en de tekst zet zich 10px omhoog — het beeld zelf
     blijft stil, zodat video erachter niet meevecht. Eén keer per sessie. */
  const [lit,setLit]=React.useState(()=>{
    if(!intro) return true;
    try{ return sessionStorage.getItem('hr-hero-intro')==='1' }catch(e){ return false }
  });
  React.useEffect(()=>{
    if(lit) return;
    const t=requestAnimationFrame(()=>setLit(true));
    try{ sessionStorage.setItem('hr-hero-intro','1') }catch(e){}
    return ()=>cancelAnimationFrame(t);
  },[lit]);
  const rise=(delay)=>({opacity:lit?1:0,transform:lit?'none':'translateY(10px)',
    transition:'opacity .55s var(--ease-out) '+delay+'ms,transform .55s var(--ease-out) '+delay+'ms'});
  // one hero, two sources. A video autoplays muted and loops on load — no play button, no
  // controls, because the footage is atmosphere and not something a visitor chooses to watch.
  // `image` doubles as its poster, so the hero is never empty while the file loads.
  const media = video
    ? <video src={video} poster={image} autoPlay muted loop playsInline preload="auto"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
    : image ? <img src={image} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
    : null;
  return (
    <section data-hero style={{position:'relative',height,background:'var(--ink-700)',overflow:'hidden',...style}}>
      <style>{'@media(prefers-reduced-motion:reduce){[data-hero] *{transition-duration:.01ms!important}}'}</style>
      {media}
      <div style={{position:'absolute',inset:0,background:'var(--overlay-photo)',
        opacity:lit?1:1.6,transition:'opacity .7s var(--ease-out)'}}/>
      {(title||kicker)&&(
        /* titels staan verticaal gecentreerd, waar het onderste gradiënt niet komt:
           een eigen band-scrim achter het tekstblok houdt wit leesbaar op lichte foto's */
        <div style={{position:'absolute',left:0,right:0,top:'18%',bottom:'18%',
          background:'linear-gradient(180deg,rgba(22,25,26,0) 0%,rgba(22,25,26,.46) 42%,rgba(22,25,26,.46) 62%,rgba(22,25,26,0) 100%)'}}/>
      )}
      <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',
        alignItems:align==='center'?'center':'flex-start',justifyContent:'center',
        padding:'0 var(--space-8)',textAlign:align==='center'?'center':'left'}}>
        {(kicker||title)&&(
          /* zelfde geometrie als SectionHeading: de kicker hangt links van de titel en
             overlapt verticaal — ook bij gecentreerde heroes */
          <span style={{display:'inline-block',position:'relative',
            paddingTop:kicker?'calc(var(--fs-script-l) * .64)':0}}>
            {kicker&&<span style={{position:'absolute',left:'-.18em',top:0,whiteSpace:'nowrap',
              fontFamily:'var(--font-script)',fontVariantLigatures:'none',fontSize:'var(--fs-script-l)',
              lineHeight:'var(--lh-script)',color:'var(--cream-100)',...rise(360)}}>{kicker}</span>}
            {title&&<h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display-l)',fontWeight:400,
              textTransform:'uppercase',letterSpacing:'.02em',color:'var(--white)',margin:0,...rise(250)}}>{title}</h1>}
          </span>
        )}
        {children}
      </div>
      {showPlay&&<button type="button" aria-label="Play" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%) scale('+(hover?1.08:1)+')',
          width:70,height:70,borderRadius:'var(--radius-pill)',border:'none',background:'rgba(255,255,255,.9)',
          cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
          transition:'transform var(--dur-base) var(--ease-out)'}}>
        <span style={{width:0,height:0,borderTop:'12px solid transparent',borderBottom:'12px solid transparent',
          borderLeft:'20px solid var(--green-800)',marginLeft:5}}/>
      </button>}
    </section>
  );
}
