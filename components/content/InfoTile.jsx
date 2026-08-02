import React from 'react';

const TILE_TONES={
  sage:{bg:'var(--surface-panel-soft)',body:'var(--white)',title:'var(--white)',rule:'rgba(255,255,255,.5)',
    ink:'brightness(0) invert(1)'},
  sageLight:{bg:'var(--sage-200)',body:'var(--green-900)',title:'var(--green-900)',rule:'rgba(31,74,60,.35)',
    ink:'brightness(0) saturate(0) opacity(.8)'},
  cream:{bg:'var(--surface-cream)',body:'var(--text-body)',title:'var(--text-accent)',rule:'var(--border-hairline)',
    ink:'brightness(0) saturate(0) opacity(.75)'},
  deep:{bg:'var(--surface-deep)',body:'var(--text-on-dark)',title:'var(--gold-300)',rule:'var(--border-on-dark)',
    ink:'brightness(0) invert(1) opacity(.92)'}
};

export function InfoTile({icon,iconSize=152,title,meta,body,tone='sage',caption='below',captionTone='gold',style}){
  const t=TILE_TONES[tone]||TILE_TONES.sage;
  const below=caption==='below'&&!!title;
  const capColor=captionTone==='onDark'?'var(--gold-300)':'var(--text-accent)';
  const mark=icon
    ?<img src={icon} alt="" style={{width:iconSize,height:iconSize,display:'block',filter:t.ink}}/>
    :<div style={{width:iconSize*.6,height:iconSize*.6,border:'1px solid currentColor',opacity:.45}}/>;
  return (
    <div style={{display:'flex',flexDirection:'column',...style}}>
      <div style={{background:t.bg,padding:'var(--space-7) var(--space-6) var(--space-6)',flex:1,
        display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{color:t.body,display:'flex',alignItems:'center',justifyContent:'center',
          minHeight:iconSize,marginBottom:'var(--space-6)'}}>{mark}</div>
        {body&&<p style={{margin:0,fontSize:'var(--fs-body-s)',color:t.body,textAlign:'center',lineHeight:1.8,
          maxWidth:'30ch',textWrap:'pretty'}}>{body}</p>}
        {!below&&title&&<div style={{marginTop:'auto',paddingTop:'var(--space-6)',textAlign:'center'}}>
          <div style={{width:28,height:1,background:t.rule,margin:'0 auto var(--space-4)'}}/>
          <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
            textTransform:'uppercase',color:t.title}}>{title}</div>
          {meta&&<div style={{marginTop:6,fontSize:'var(--fs-body-xs)',color:t.body,opacity:.8}}>{meta}</div>}
        </div>}
      </div>
      {below&&<div style={{textAlign:'center',paddingTop:'var(--space-5)'}}>
        <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',letterSpacing:'var(--ls-label)',
          textTransform:'uppercase',color:capColor}}>{title}</div>
        {meta&&<div style={{marginTop:5,fontSize:'var(--fs-body-xs)',color:'var(--text-muted)'}}>{meta}</div>}
      </div>}
    </div>
  );
}
