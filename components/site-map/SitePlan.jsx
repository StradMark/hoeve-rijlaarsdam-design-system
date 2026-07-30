import React from 'react';

/* The chic variant of SiteMap: the plan reads as an engraved estate map on cream paper,
   with a numbered legend beside it. Map and legend highlight each other, and the open row
   carries the photo — so nothing floats over the plan and nothing jumps.
   Hotspots stay percentages of the image, exactly as in SiteMap. */
export function SitePlan({image,spots=[],alt='Plattegrond van de hoeve',title,onSelect,
  openOnHover=true,hint='Beweeg over de kaart of kies een plek in de lijst',narrow:narrowProp,style}){
  const [hot,setHot]=React.useState(-1);    // hover of focus — verandert alleen kleur
  const [open,setOpen]=React.useState(-1);  // klik — klapt de regel uit
  const [narrowAuto,setNarrowAuto]=React.useState(false);
  const [pin,setPin]=React.useState(30);
  const imgRef=React.useRef(null);
  React.useEffect(()=>{
    const check=()=>{
      setNarrowAuto(window.innerWidth<900);
      /* De hotspots zijn percentages, dus hun onderlinge afstand krimpt met de kaart terwijl een
         vaste punt dat niet doet. Schaal de punt mee: 30px bij een kaart van 620px, min 20px. */
      const w=imgRef.current&&imgRef.current.getBoundingClientRect().width;
      if(w)setPin(Math.max(20,Math.min(30,Math.round(w/620*30))));
    };
    check();window.addEventListener('resize',check);
    const t=setTimeout(check,120);
    return ()=>{window.removeEventListener('resize',check);clearTimeout(t)};
  },[]);
  /* narrow is normaal de vensterbreedte; als prop is het ook los te forceren, zodat een kaart de
     telefoonvorm naast de desktopvorm kan tonen. */
  const narrow=narrowProp===undefined?narrowAuto:narrowProp;
  /* Onder 600px zijn de punten kleiner dan een duim (de hotspots zijn percentages, dus ze krimpen
     mee met de kaart). Daar draait de rolverdeling om: de kaart wordt een prent om naar te kijken,
     met de nummers er alleen als verwijzing op, en de lijst eronder is het bedieningsvlak. Een tik
     op een regel licht het bijbehorende nummer op de kaart op. */
  const listOnly=narrow&&pin<28;
  const num=i=>String(i+1).padStart(2,'0');
  const toggle=i=>setOpen(v=>v===i?-1:i);
  const lit=i=>hot===i||open===i;
  return (
    <div style={{display:'grid',gridTemplateColumns:narrow?'1fr':'1.75fr 1fr',
      gap:narrow?'var(--space-6)':'var(--space-7)',alignItems:'start',...style}}
      onMouseLeave={()=>setHot(-1)}>

      {/* de kaart, als getekend plan op crème papier */}
      <div style={{position:'relative',background:'var(--cream-100)',
        padding:narrow?'var(--space-4)':'var(--space-5)',boxShadow:'var(--shadow-card)'}}>
        <div style={{position:'relative'}}>
          <img ref={imgRef} src={image} alt={alt} onLoad={()=>{
            const w=imgRef.current&&imgRef.current.getBoundingClientRect().width;
            if(w)setPin(Math.max(20,Math.min(30,Math.round(w/620*30))));
          }} style={{display:'block',width:'100%',height:'auto'}}/>
          {spots.map((s,i)=>{
            const on=lit(i);
            /* op telefoon is de punt een merkteken, geen knop — de lijst bedient */
            const Tag=listOnly?'span':'button';
            const tap=listOnly?{'aria-hidden':'true'}:{
              type:'button','aria-label':s.name,'aria-pressed':open===i,
              onMouseEnter:()=>{if(narrow)return;setHot(i);if(openOnHover)setOpen(i)},
              onMouseLeave:()=>!narrow&&setHot(-1),
              onFocus:()=>{setHot(i);if(openOnHover)setOpen(i)},onBlur:()=>setHot(-1),
              onClick:()=>toggle(i)};
            return (
              <Tag key={s.name} {...tap}
                style={{position:'absolute',left:'calc('+(s.x+s.w/2)+'% - '+(pin/2)+'px)',
                  top:'calc('+(s.y+s.h/2)+'% - '+(pin/2)+'px)',
                  width:pin,height:pin,padding:0,cursor:listOnly?'default':'pointer',
                  pointerEvents:listOnly?'none':'auto',borderRadius:'var(--radius-pill)',
                  border:'1px solid '+(on?'var(--gold-500)':'rgba(40,94,77,.5)'),
                  background:on?'var(--gold-500)':'rgba(251,248,243,.96)',
                  color:on?'var(--white)':'var(--green-900)',
                  fontFamily:'var(--font-display)',fontSize:Math.round(pin*.47),letterSpacing:'.02em',lineHeight:1,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:on?'0 0 0 '+Math.round(pin/5)+'px rgba(176,131,68,.16)':'none',
                  transition:'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)'}}>
                {num(i)}
              </Tag>
            );
          })}
        </div>
        {title&&(
          <p style={{margin:'var(--space-4) 0 0',textAlign:'center',fontFamily:'var(--font-display)',
            fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
            color:'var(--green-900)'}}>{title}</p>
        )}
      </div>

      {/* de legenda: genummerde regels die openklappen met foto en tekst */}
      <div>
        <div style={{borderTop:'1px solid rgba(22,25,26,.14)'}}>
          {spots.map((s,i)=>{
            const on=lit(i),up=open===i;
            return (
              <div key={s.name} style={{borderBottom:'1px solid rgba(22,25,26,.14)'}}>
                <button type="button" onClick={()=>toggle(i)}
                  onMouseEnter={()=>!narrow&&setHot(i)}
                  onFocus={()=>setHot(i)} onBlur={()=>setHot(-1)}
                  aria-expanded={up}
                  style={{width:'100%',display:'grid',gridTemplateColumns:'32px 1fr auto',alignItems:'center',
                    gap:'var(--space-4)',padding:'15px 0',minHeight:narrow?'var(--touch-min)':undefined,
                    background:'none',border:'none',cursor:'pointer',
                    textAlign:'left'}}>
                  <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',
                    letterSpacing:'.04em',color:on?'var(--gold-500)':'var(--green-900)',
                    transition:'color var(--dur-base) var(--ease-out)'}}>{num(i)}</span>
                  <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',
                    letterSpacing:'var(--ls-label)',textTransform:'uppercase',
                    color:on?'var(--gold-500)':'var(--ink-900)',
                    transition:'color var(--dur-base) var(--ease-out)'}}>{s.name}</span>
                  {/* hairline that grows toward the row when it is the live one */}
                  <span style={{width:on?26:12,height:1,background:on?'var(--gold-500)':'rgba(22,25,26,.22)',
                    transition:'width var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)'}}/>
                </button>
                <div style={{display:'grid',gridTemplateRows:up?'1fr':'0fr',
                  transition:'grid-template-rows var(--dur-slow) var(--ease-inout)'}}>
                  <div style={{overflow:'hidden'}}>
                    <div style={{paddingBottom:'var(--space-5)',opacity:up?1:0,
                      transition:'opacity var(--dur-base) var(--ease-out)'}}>
                      {s.image&&(
                        <div style={{aspectRatio:'16 / 9',overflow:'hidden',marginBottom:'var(--space-4)'}}>
                          <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                        </div>
                      )}
                      {s.body&&(
                        <p style={{margin:0,fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
                          color:'var(--text-body)'}}>{s.body}</p>
                      )}
                      {s.href&&(
                        <button type="button" onClick={()=>onSelect&&onSelect(s)}
                          style={{marginTop:'var(--space-4)',background:'none',border:'none',padding:0,
                            cursor:'pointer',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
                            letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
                            color:'var(--text-accent)'}}>{s.linkLabel||'Lees meer'} &rarr;</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {hint&&open<0&&(
          <p style={{margin:'var(--space-5) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
            color:'var(--text-body)'}}>{listOnly?'Kies een plek in de lijst; het nummer licht op de kaart op.':hint}</p>
        )}
      </div>
    </div>
  );
}
