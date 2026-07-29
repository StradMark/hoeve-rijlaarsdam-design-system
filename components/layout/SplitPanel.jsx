import React from 'react';

export function SplitPanel({image,children,imageSide='left',background='var(--surface-sage)',padded=true,ratio='4 / 3',style}){
  const media=(
    <div key="m" style={{aspectRatio:ratio,background:'var(--ink-100)',overflow:'hidden'}}>
      {image&&<img src={image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>}
    </div>
  );
  const panel=<div key="p" style={{alignSelf:'center'}}>{children}</div>;
  return (
    <section style={{background,padding:padded?'var(--section-y-tight) var(--space-8)':0,...style}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',display:'grid',
        gridTemplateColumns:'1fr 1fr',gap:'var(--space-7)',alignItems:'center'}}>
        {imageSide==='left'?[media,panel]:[panel,media]}
      </div>
    </section>
  );
}
