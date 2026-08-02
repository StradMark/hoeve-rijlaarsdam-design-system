import React from 'react';

/* De vorm van wat er komt, terwijl het laadt. Geen spinner: die zegt alleen "wacht", terwijl
   een skelet al vertelt hoeveel er komt en waar het staat — en het scherm springt niet op als
   de inhoud landt.

   De beweging is niet de gebruikelijke grijze glans maar de haarlijn van dit merk: een gouden
   streep die van links inschrijft, even blijft staan en naar rechts weer wegtrekt — dezelfde
   getrokken lijn als onder de zaalonderschriften en in de pen van het seizoenslogo. Hij loopt
   op transform, dus op de compositielaag: merkbaar vloeiender dan een schuivende achtergrond.
   Staat stil onder prefers-reduced-motion. */
export function Skeleton({variant='text',lines=3,ratio='4 / 3',width,height,tone='light',delay=0,style}){
  const onDark=tone==='dark';
  const base=onDark?'rgba(251,248,243,.08)':'rgba(22,25,26,.05)';
  const ink=onDark?'var(--gold-300)':'var(--gold-500)';
  const reduced=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css=<style>{'@keyframes sk-draw{0%{transform:scaleX(0);transform-origin:left}'+
    '46%{transform:scaleX(1);transform-origin:left}'+
    '54%{transform:scaleX(1);transform-origin:right}'+
    '100%{transform:scaleX(0);transform-origin:right}}'+
    '@keyframes sk-breathe{0%,100%{opacity:0}50%{opacity:1}}'}</style>;
  /* De lijn ligt onderin het vlak; bij een tekstregel is het vlak zo dun dat de lijn hem vult. */
  const draw=(i=0)=>(
    <span aria-hidden="true" style={{position:'absolute',left:0,right:0,bottom:0,height:1,
      background:ink,opacity:onDark?.9:.7,transformOrigin:'left',willChange:'transform',
      animation:reduced?'none':'sk-draw 2.1s cubic-bezier(.4,0,.2,1) infinite',
      animationDelay:(delay+i*.14)+'s'}}/>
  );
  /* Op een groot vlak is een lijn van 1px te weinig om te zien dat er iets gebeurt: daar ademt
     het vlak zelf mee, in hetzelfde tempo als de lijn. Op tekstregels niet — die zijn zo dun
     dat de lijn ze al vult. */
  const breathe=(i=0)=>(
    <span aria-hidden="true" style={{position:'absolute',inset:0,
      background:onDark?'rgba(251,248,243,.05)':'rgba(22,25,26,.035)',opacity:0,willChange:'opacity',
      animation:reduced?'none':'sk-breathe 2.1s cubic-bezier(.4,0,.2,1) infinite',
      animationDelay:(delay+i*.14)+'s'}}/>
  );
  const block=(extra)=>({position:'relative',overflow:'hidden',backgroundColor:base,...extra});

  if(variant==='image') return (
    <div aria-hidden="true" style={{...block({aspectRatio:height?undefined:ratio,width,height}),...style}}>
      {css}{breathe()}{draw()}
    </div>
  );
  if(variant==='card') return (
    <div aria-hidden="true" style={{display:'grid',gap:'var(--space-4)',...style}}>
      {css}
      <div style={block({aspectRatio:ratio})}>{breathe(0)}{draw(0)}</div>
      <div style={block({height:12,width:'52%'})}>{draw(1)}</div>
      <div style={block({height:10,width:'82%'})}>{draw(2)}</div>
    </div>
  );
  return (
    <div aria-hidden="true" style={{display:'grid',gap:'var(--space-3)',...style}}>
      {css}
      {Array.from({length:lines}).map((_,i)=>(
        <div key={i} style={block({height:10,width:i===lines-1?'62%':'100%'})}>{draw(i)}</div>
      ))}
    </div>
  );
}

/* Eén regel om een laadgebied aan te kondigen voor wie het skelet niet ziet. */
export function LoadingRegion({label='Bezig met laden',busy=true,children,style}){
  return (
    <div aria-busy={busy||undefined} aria-live="polite" style={style}>
      {busy&&<span style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(0 0 0 0)',
        whiteSpace:'nowrap'}}>{label}</span>}
      {children}
    </div>
  );
}
