import React from 'react';

export function InfoTile({icon,title,body,tone='sage',style}){
  const sage=tone==='sage';
  return (
    <div style={{background:sage?'var(--surface-panel-soft)':'var(--sage-300)',padding:'var(--space-6) var(--space-5)',...style}}>
      <div style={{height:64,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'var(--space-5)'}}>
        {icon?<img src={icon} alt="" style={{height:46,width:46,filter:'brightness(0) invert(1)',opacity:.95}}/>
          :<div style={{width:46,height:46,border:'1px solid var(--white)',opacity:.5}}/>}
      </div>
      <p style={{margin:0,fontSize:'var(--fs-body-s)',color:'var(--white)',textAlign:'center',lineHeight:1.7}}>{body}</p>
      {title&&<div style={{marginTop:'var(--space-5)',textAlign:'center',fontFamily:'var(--font-display)',
        fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
        color:'var(--text-accent)'}}>{title}</div>}
    </div>
  );
}
