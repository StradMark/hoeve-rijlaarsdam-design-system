import React from 'react';

export function ImageCaptionCard({image,caption,body,ratio='4 / 5',href,style}){
  const [hover,setHover]=React.useState(false);
  const Tag=href?'a':'div';
  return (
    <Tag href={href} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'block',textDecoration:'none',...style}}>
      <div style={{aspectRatio:ratio,background:'var(--ink-100)',overflow:'hidden'}}>
        {image&&<img src={image} alt={caption||''} style={{width:'100%',height:'100%',objectFit:'cover',
          transform:hover?'scale(1.03)':'none',transition:'transform var(--dur-slow) var(--ease-out)'}}/>}
      </div>
      {caption&&<div style={{textAlign:'center',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',
        letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-accent)',marginTop:'var(--space-4)'}}>{caption}</div>}
      {body&&<p style={{margin:'var(--space-2) 0 0',fontSize:'var(--fs-body-s)',color:'var(--text-body)',textAlign:'center'}}>{body}</p>}
    </Tag>
  );
}
