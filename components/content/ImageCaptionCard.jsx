import React from 'react';

/* Photo with a spaced caption under it. `tone` says which field it stands on: gold is
   forbidden on sage, so onSage puts the caption in white and the body in ink. */
export function ImageCaptionCard({image,caption,body,ratio='4 / 5',tone='light',href,style}){
  const [hover,setHover]=React.useState(false);
  const Tag=href?'a':'div';
  const onSage=tone==='onSage',onDeep=tone==='onDeep';
  const capColor=onSage?'var(--text-on-sage-body)':onDeep?'var(--gold-300)':'var(--text-accent)';
  const bodyColor=onSage?'var(--text-on-sage-body)':onDeep?'var(--cream-100)':'var(--text-body)';
  return (
    <Tag href={href} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'block',textDecoration:'none',...style}}>
      <div style={{aspectRatio:ratio,background:'var(--ink-100)',overflow:'hidden'}}>
        {image&&<img src={image} alt={caption||''} style={{width:'100%',height:'100%',objectFit:'cover',
          transform:hover?'scale(1.03)':'none',transition:'transform var(--dur-slow) var(--ease-out)'}}/>}
      </div>
      {caption&&<div style={{textAlign:'center',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',
        letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:capColor,marginTop:'var(--space-4)'}}>{caption}</div>}
      {body&&<p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',color:bodyColor,textAlign:'center'}}>{body}</p>}
    </Tag>
  );
}
