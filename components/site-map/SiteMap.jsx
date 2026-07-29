import React from 'react';

/* Interactive site plan. Hotspots are declared in percentages of the map image so the
   whole thing stays responsive and a corrected plan only needs new coordinates. */
export function SiteMap({image,spots=[],alt='Plattegrond van de hoeve',onSelect,style}){
  const [active,setActive]=React.useState(-1);
  const [narrow,setNarrow]=React.useState(false);
  React.useEffect(()=>{
    const check=()=>setNarrow(window.innerWidth<900);
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[]);
  const spot=spots[active];
  const open=i=>setActive(a=>a===i?-1:i);
  return (
    <div style={{...style}}>
      <div style={{position:'relative',width:'100%'}}
        onMouseLeave={()=>!narrow&&setActive(-1)}>
        <img src={image} alt={alt} style={{display:'block',width:'100%',height:'auto'}}/>
        {spots.map((s,i)=>{
          const on=active===i;
          return (
            <button key={s.name} type="button"
              onMouseEnter={()=>!narrow&&setActive(i)}
              onFocus={()=>setActive(i)}
              onClick={()=>{narrow?open(i):s.href&&onSelect&&onSelect(s)}}
              aria-label={s.name}
              style={{position:'absolute',left:s.x+'%',top:s.y+'%',width:s.w+'%',height:s.h+'%',
                padding:0,border:'none',cursor:'pointer',
                background:on?'rgba(176,131,68,.34)':'rgba(176,131,68,0)',
                outline:on?'1px solid var(--gold-500)':'none',outlineOffset:-1,
                transition:'background var(--dur-base) var(--ease-out)'}}>
              <span style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',
                display:'block',width:on?14:10,height:on?14:10,borderRadius:'var(--radius-pill)',
                background:'var(--gold-500)',boxShadow:'0 0 0 3px rgba(251,248,243,.9)',
                transition:'width var(--dur-base) var(--ease-out),height var(--dur-base) var(--ease-out)'}}/>
            </button>
          );
        })}
        {!narrow&&spot&&(
          <div style={{position:'absolute',width:260,zIndex:2,pointerEvents:'none',
            left:spot.side==='left'?undefined:'calc('+(spot.x+spot.w)+'% + 14px)',
            right:spot.side==='left'?'calc('+(100-spot.x)+'% + 14px)':undefined,
            top:'min('+spot.y+'%, calc(100% - 300px))',
            background:'var(--surface-card)',boxShadow:'var(--shadow-card)'}}>
            {spot.image&&(
              <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
                <img src={spot.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
            )}
            <div style={{padding:'var(--space-4) var(--space-4) var(--space-5)'}}>
              <h4 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
                fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
                color:'var(--ink-900)'}}>{spot.name}</h4>
              {spot.body&&(
                <p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',
                  lineHeight:'var(--lh-body)',color:'var(--ink-500)'}}>{spot.body}</p>
              )}
              {spot.href&&(
                <span style={{display:'inline-block',marginTop:'var(--space-3)',
                  fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
                  letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
                  color:'var(--text-accent)'}}>{spot.linkLabel||'Lees meer'} &rarr;</span>
              )}
            </div>
          </div>
        )}
      </div>
      {narrow&&spot&&(
        <div style={{marginTop:'var(--space-4)',background:'var(--surface-card)',boxShadow:'var(--shadow-card)',
          display:'flex',gap:'var(--space-4)'}}>
          {spot.image&&(
            <div style={{flex:'0 0 96px',height:96,overflow:'hidden'}}>
              <img src={spot.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
          )}
          <div style={{padding:'var(--space-4) var(--space-4) var(--space-4) 0'}}>
            <h4 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
              fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
              color:'var(--ink-900)'}}>{spot.name}</h4>
            {spot.body&&(
              <p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',
                lineHeight:'var(--lh-body)',color:'var(--ink-500)'}}>{spot.body}</p>
            )}
            {spot.href&&(
              <button type="button" onClick={()=>onSelect&&onSelect(spot)}
                style={{marginTop:'var(--space-3)',background:'none',border:'none',padding:0,cursor:'pointer',
                  fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
                  letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
                  color:'var(--text-accent)'}}>{spot.linkLabel||'Lees meer'} &rarr;</button>
            )}
          </div>
        </div>
      )}
      {!narrow&&(
        <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
          color:'var(--ink-400)',textAlign:'center'}}>
          Beweeg over de gouden punten voor meer informatie
        </p>
      )}
    </div>
  );
}
