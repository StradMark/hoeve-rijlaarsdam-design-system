import React from 'react';

/* The chic variant of SiteMap: the plan reads as an engraved estate map on cream paper,
   with a numbered legend beside it. Map and legend highlight each other, and the open row
   carries the photo — so nothing floats over the plan and nothing jumps.
   Hotspots stay percentages of the image, exactly as in SiteMap. */
export function SitePlan({image,spots=[],alt='Plattegrond van de hoeve',title,onSelect,
  hint='Kies een plek op de kaart of in de lijst',style}){
  const [hot,setHot]=React.useState(-1);    // hover of focus — verandert alleen kleur
  const [open,setOpen]=React.useState(-1);  // klik — klapt de regel uit
  const [narrow,setNarrow]=React.useState(false);
  React.useEffect(()=>{
    const check=()=>setNarrow(window.innerWidth<900);
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[]);
  const num=i=>String(i+1).padStart(2,'0');
  const toggle=i=>setOpen(v=>v===i?-1:i);
  const lit=i=>hot===i||open===i;
  return (
    <div style={{display:'grid',gridTemplateColumns:narrow?'1fr':'1.35fr 1fr',
      gap:narrow?'var(--space-6)':'var(--space-7)',alignItems:'start',...style}}
      onMouseLeave={()=>setHot(-1)}>

      {/* de kaart, als getekend plan op crème papier */}
      <div style={{position:'relative',background:'var(--cream-100)',
        padding:narrow?'var(--space-4)':'var(--space-5)',boxShadow:'var(--shadow-card)'}}>
        <div style={{position:'relative'}}>
          <img src={image} alt={alt} style={{display:'block',width:'100%',height:'auto'}}/>
          {spots.map((s,i)=>{
            const on=lit(i);
            return (
              <button key={s.name} type="button" aria-label={s.name} aria-pressed={open===i}
                onMouseEnter={()=>!narrow&&setHot(i)}
                onMouseLeave={()=>!narrow&&setHot(-1)}
                onFocus={()=>setHot(i)} onBlur={()=>setHot(-1)}
                onClick={()=>toggle(i)}
                style={{position:'absolute',left:'calc('+(s.x+s.w/2)+'% - 15px)',top:'calc('+(s.y+s.h/2)+'% - 15px)',
                  width:30,height:30,padding:0,cursor:'pointer',borderRadius:'var(--radius-pill)',
                  border:'1px solid '+(on?'var(--gold-500)':'rgba(40,94,77,.5)'),
                  background:on?'var(--gold-500)':'rgba(251,248,243,.96)',
                  color:on?'var(--white)':'var(--green-900)',
                  fontFamily:'var(--font-display)',fontSize:14,letterSpacing:'.02em',lineHeight:1,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:on?'0 0 0 6px rgba(176,131,68,.16)':'none',
                  transition:'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)'}}>
                {num(i)}
              </button>
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
                    gap:'var(--space-4)',padding:'15px 0',background:'none',border:'none',cursor:'pointer',
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
            color:'var(--text-body)'}}>{hint}</p>
        )}
      </div>
    </div>
  );
}
