import React from 'react';

/* The site's room tile. Two decisions live here:

   1. `reveal` — where the facts sit. 'always' (default) prints them under the caption, so they
      survive scanning and touch; 'hover' hides them behind a scrim over the photo, which reads
      well on desktop but does not exist on a phone. Prefer 'always'.
   2. `variant` — 'quiet' (default) gives one gold action with a growing rule; 'bar' is the
      split dark/sage action bar from the original comps, for two actions per card. */
export function RoomCard({
  image,caption,meta=[],summary,
  variant='quiet',reveal='always',
  readMoreLabel='Lees meer',bookLabel='Boek mij',onReadMore,onBook,
  ratio='4 / 5',style
}){
  const [hover,setHover]=React.useState(false);
  const [h1,setH1]=React.useState(false);const [h2,setH2]=React.useState(false);
  const metaLine=meta.filter(Boolean).join('  ·  ');
  const clickable=!!onReadMore;
  const bar={flex:1,textAlign:'center',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
    letterSpacing:'var(--ls-label)',textTransform:'uppercase',padding:'7px 4px',cursor:'pointer',
    transition:'background var(--dur-fast) var(--ease-out)',border:'none',lineHeight:1.4};
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onClick={variant==='quiet'?onReadMore:undefined}
      style={{cursor:variant==='quiet'&&clickable?'pointer':undefined,...style}}>
      <div style={{position:'relative',aspectRatio:ratio,background:'var(--ink-100)',overflow:'hidden'}}>
        {image&&<img src={image} alt={caption||''} style={{width:'100%',height:'100%',objectFit:'cover',
          transform:hover?'scale(1.03)':'scale(1)',transition:'transform var(--dur-slow) var(--ease-out)'}}/>}
        {reveal==='hover'&&(summary||metaLine)&&(
          <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',justifyContent:'flex-end',
            gap:'var(--space-2)',padding:'var(--space-5)',background:'rgba(22,25,26,.62)',
            opacity:hover?1:0,transition:'opacity var(--dur-base) var(--ease-out)'}}>
            {summary&&<p style={{margin:0,fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:'var(--cream-100)'}}>{summary}</p>}
            {metaLine&&<p style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--white)'}}>{metaLine}</p>}
          </div>
        )}
      </div>
      {variant==='bar'&&(
        <div style={{display:'flex'}}>
          <button type="button" onClick={onReadMore} onMouseEnter={()=>setH1(true)} onMouseLeave={()=>setH1(false)}
            style={{...bar,background:h1?'var(--green-900)':'var(--surface-deep)',color:'var(--text-on-dark)'}}>{readMoreLabel}</button>
          {onBook&&<button type="button" onClick={onBook} onMouseEnter={()=>setH2(true)} onMouseLeave={()=>setH2(false)}
            style={{...bar,background:h2?'var(--white)':'var(--sage-200)',color:'var(--green-900)'}}>{bookLabel}</button>}
        </div>
      )}
      <div style={{marginTop:'var(--space-4)',textAlign:variant==='bar'?'center':'left'}}>
        {caption&&<div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',
          letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-accent)'}}>{caption}</div>}
        {variant==='quiet'&&(
          /* the only hover flourish: a gold hairline growing under the caption. No shadow, no
             radius, no lifting — the brand separates by colour field, not elevation. */
          <div style={{height:1,marginTop:'var(--space-2)',background:'var(--gold-500)',
            width:hover?'100%':'0%',transition:'width var(--dur-slow) var(--ease-out)'}}/>
        )}
        {reveal==='always'&&metaLine&&(
          <p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
            color:'var(--ink-500)'}}>{metaLine}</p>
        )}
        {reveal==='always'&&summary&&(
          <p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
            color:'var(--ink-500)',maxWidth:'34ch'}}>{summary}</p>
        )}
        {variant==='quiet'&&clickable&&(
          <span style={{display:'inline-block',marginTop:'var(--space-3)',fontFamily:'var(--font-display)',
            fontSize:'var(--fs-label-s)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
            color:hover?'var(--green-800)':'var(--text-accent)',
            transition:'color var(--dur-fast) var(--ease-out)'}}>{readMoreLabel}</span>
        )}
      </div>
    </div>
  );
}
