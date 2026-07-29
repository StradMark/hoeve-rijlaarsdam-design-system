import React from 'react';
import { CarouselNav } from '../core/CarouselNav.jsx';

/* Centre-focused photo carousel: the middle frame is full size and full colour,
   the neighbours sit smaller and further back. Returns on every page, above the footer.
   Advances on its own, but only while it is on screen and nobody is touching it. */
export function PhotoCarousel({items=[],height=400,initial=0,edgeArrows=true,arrowTone='deep',
  interval=5600,autoplay=true,drift=true,tilt=false,onSelect,style}){
  const [i,setI]=React.useState(initial);
  const [narrow,setNarrow]=React.useState(false);
  const [hover,setHover]=React.useState(false); // pointer or finger on the strip
  const [focusIn,setFocusIn]=React.useState(false); // keyboard focus somewhere inside
  const [seen,setSeen]=React.useState(false);   // in the viewport
  const [tick,setTick]=React.useState(0);       // restarts the progress line on every advance
  const root=React.useRef(null);
  const touch=React.useRef(null);
  React.useEffect(()=>{
    const check=()=>setNarrow(window.innerWidth<760);
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[]);
  const reduced=React.useMemo(()=>typeof matchMedia==='function'&&
    matchMedia('(prefers-reduced-motion: reduce)').matches,[]);
  React.useEffect(()=>{
    const el=root.current;if(!el||typeof IntersectionObserver!=='function')return setSeen(true);
    const io=new IntersectionObserver(es=>setSeen(es.some(e=>e.isIntersecting)),{threshold:.35});
    io.observe(el);return ()=>io.disconnect();
  },[]);
  const n=items.length;
  const held=hover||focusIn;
  const running=autoplay&&!reduced&&seen&&!held&&n>2;
  React.useEffect(()=>{
    if(!running)return;
    const t=setTimeout(()=>{setI(v=>(v+1)%n);setTick(v=>v+1)},interval);
    return ()=>clearTimeout(t);
  },[running,interval,n,i,tick]);
  if(!n) return null;
  const cardW=Math.round(height*4/3);
  const go=d=>{setI(v=>(v+d+n)%n);setTick(v=>v+1)};
  const jump=k=>{setI(k);setTick(v=>v+1)};
  // shortest signed distance from the active index, so the ring wraps without a jump
  const rel=k=>{let d=k-i;if(d>n/2)d-=n;if(d<-n/2)d+=n;return d};
  const pose=d=>{
    const a=Math.abs(d),sign=d>0?1:-1;
    if(a>2) return {opacity:0,scale:.5,x:sign*1.7,z:0,blur:6,dim:.5,rot:-sign*46,hidden:true};
    if(a===2) return {opacity:1,scale:.62,x:sign*1.06,z:1,blur:3,dim:.42,rot:-sign*40};
    if(a===1) return {opacity:1,scale:.8,x:sign*.6,z:2,blur:1.5,dim:.26,rot:-sign*26};
    return {opacity:1,scale:1,x:0,z:3,blur:0,dim:0,rot:0};
  };
  const active=items[i]||{};
  const hold=v=>()=>setHover(v);
  return (
    <div ref={root} style={{position:'relative',...style}}
      onMouseEnter={hold(true)} onMouseLeave={hold(false)}
      onFocus={()=>setFocusIn(true)}
      onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocusIn(false)}}
      onTouchStart={e=>{setHover(true);touch.current=e.touches[0].clientX}}
      onTouchEnd={e=>{const x0=touch.current;setHover(false);touch.current=null;
        if(x0==null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>44)go(dx<0?1:-1)}}
      onKeyDown={e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)}}
      tabIndex={0} role="group" aria-label="Foto's" aria-roledescription="carrousel">
      <div style={{position:'relative',height,overflow:'hidden',
        perspective:tilt?Math.round(cardW*1.9):undefined,perspectiveOrigin:'50% 50%'}}>
        {items.map((it,k)=>{
          const d=rel(k), p=pose(d), src=typeof it==='string'?it:it.src, live=d===0;
          return (
            <div key={src+k} onClick={()=>{live?onSelect&&onSelect(it,k):jump(k)}}
              style={{position:'absolute',top:0,left:'50%',width:narrow?'86%':cardW,height:'100%',
                marginLeft:narrow?'-43%':-cardW/2,cursor:live&&!onSelect?'default':'pointer',
                zIndex:p.z,opacity:p.opacity,pointerEvents:p.hidden?'none':'auto',
                transform:'translateX('+(p.x*(narrow?86:cardW))+(narrow?'%':'px')+') scale('+p.scale+')'+
                  (tilt&&!narrow?' rotateY('+p.rot+'deg)':''),
                transformStyle:tilt?'preserve-3d':undefined,
                transition:'transform var(--dur-slow) var(--ease-out),opacity var(--dur-slow) var(--ease-out)'}}>
              <div style={{position:'relative',width:'100%',height:'100%',overflow:'hidden'}}>
                <img src={src} alt={(typeof it==='object'&&it.caption)||''}
                  style={{width:'100%',height:'100%',objectFit:'cover',display:'block',
                    filter:p.blur?'blur('+p.blur+'px)':'none',
                    transform:live&&drift&&!reduced?'scale(1.07)':'scale(1)',
                    transition:'transform '+(live?interval+2600:900)+'ms var(--ease-out),filter var(--dur-slow) var(--ease-out)'}}/>
                <div style={{position:'absolute',inset:0,background:'var(--ink-900)',opacity:p.dim,
                  transition:'opacity var(--dur-slow) var(--ease-out)'}}/>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:'var(--space-4)',display:'flex',flexDirection:'column',alignItems:'center',
        gap:'var(--space-3)'}}>
        {typeof active==='object'&&active.caption&&(
          <span key={active.caption} style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
            letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--gold-500)'}}>{active.caption}</span>
        )}
        {/* one hairline per photo; the active one fills over the dwell time so the movement is announced */}
        <div style={{display:'flex',gap:6}}>
          {items.map((it,k)=>(
            <button key={k} type="button" onClick={()=>jump(k)} aria-label={'Foto '+(k+1)}
              style={{width:k===i?34:18,height:2,padding:0,border:'none',cursor:'pointer',
                background:k===i?'rgba(176,131,68,.28)':'rgba(22,25,26,.16)',position:'relative',
                transition:'width var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)'}}>
              {k===i&&(
                <span key={tick} style={{position:'absolute',inset:0,background:'var(--gold-500)',
                  transformOrigin:'left',transform:'scaleX(1)',
                  animation:running?'pc-fill '+interval+'ms linear forwards':'none'}}/>
              )}
            </button>
          ))}
        </div>
        <style>{'@keyframes pc-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}'}</style>
      </div>
      {edgeArrows&&(
        <div style={{position:'absolute',left:0,right:0,top:0,height,display:'flex',
          justifyContent:'space-between',alignItems:'center',padding:'0 var(--space-4)',pointerEvents:'none',zIndex:4}}>
          <div style={{pointerEvents:'auto'}}><CarouselNav direction="prev" tone={arrowTone} onClick={()=>go(-1)}/></div>
          <div style={{pointerEvents:'auto'}}><CarouselNav direction="next" tone={arrowTone} onClick={()=>go(1)}/></div>
        </div>
      )}
    </div>
  );
}
