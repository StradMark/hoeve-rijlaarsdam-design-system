import React from 'react';

/* Winter Rijlaarsdam. De echte tekening komt uit de huisstijl van de ontwerper
   (uploads/Logo RIJLAARSDAM huisstijl.pdf, blad 2) en staat als vector in assets/:
   sneeuwvlok-lockup op flessengroen, dezelfde omgekeerd op transparant, en het
   losse script-woordmerk "Winters RIJLAARSDAM" in zwart, wit en goud.

   Alleen wanneer een ander seizoenswoord nodig is (Kerst, Oud & Nieuw) valt het
   component terug op de typografische constructie — dan is het merk nagebouwd,
   niet aangeleverd, dus gebruik dat spaarzaam en nooit voor drukwerk. */
const ART={
  panel:'logo-winter-groen.svg',
  reversed:'logo-winter-wit.svg',
  wordmarkLight:'logo-winter-zwart.svg',
  wordmarkOnDeep:'logo-winter-wordmark-wit.svg',
  wordmarkGold:'logo-winter-wordmark-goud.svg',
  wordmarkMono:'logo-winter-mono.svg'
};
const MIN={panel:96,reversed:96,wordmark:34};
let warned=false;

export function WinterLockup({
  variant='wordmark',tone='light',size,script,word='RIJLAARSDAM',tagline='ART & EVENTS',
  showMark=true,assetBase='/assets/',style
}){
  const h=size??(variant==='wordmark'?52:180);
  if(h<MIN[variant]&&!warned){warned=true;
    console.warn('[WinterLockup] '+variant+' op '+h+'px — onder de '+MIN[variant]+'px lopen de haarlijnen en de sneeuwvlok dicht.');}

  if(script){
    /* Nagebouwd seizoenswoord: schuurmerk + script + caps + regel, zelfde constructie als het logo. */
    const em=Math.max(22,Math.round(h*.62));
    const onDark=tone==='onDeep';
    const ink=onDark?'var(--winter-snow-100)':tone==='gold'?'var(--gold-600)':'var(--ink-900)';
    const scriptColor=onDark?'var(--winter-candle-400)':tone==='mono'?ink:'var(--gold-500)';
    const rule=onDark?'var(--border-on-dark)':tone==='gold'?'var(--gold-500)':'var(--ink-900)';
    const markStyle=onDark?{filter:'brightness(0) invert(1)'}:tone==='mono'?{filter:'brightness(0)'}:undefined;
    /* De ampersand in de tagline is de swirl uit de huisstijl, niet de & van Playfair.
       Tussen kapitalen is dat de vaste regel — zie guidelines/brand-ornament.html. */
    const swirl=assetBase+(onDark?'ornament-swirl-wit.svg':tone==='gold'?'ornament-swirl-goud.svg':'ornament-swirl-ink.svg');
    const parts=String(tagline||'').split('&');
    return (
      <div style={{display:'flex',alignItems:'flex-end',gap:'.34em',fontSize:em+'px',lineHeight:1,...style}}>
        {showMark&&<img src={assetBase+(tone==='light'?'logo-mark.svg':'logo-mark-mono.svg')} alt="" aria-hidden="true"
          style={{height:'2.1em',width:'auto',flex:'none',...markStyle}}/>}
        <div style={{display:'grid',gap:'.16em'}}>
          <div style={{position:'relative',paddingTop:'.92em'}}>
            <span style={{position:'absolute',left:'.34em',top:0,whiteSpace:'nowrap',
              fontFamily:'var(--font-script)',fontVariantLigatures:'none',fontSize:'1.55em',
              lineHeight:'var(--lh-script)',color:scriptColor}}>{script}</span>
            <span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:400,
              fontSize:'1em',letterSpacing:'.03em',color:ink,whiteSpace:'nowrap'}}>{word}</span>
          </div>
          {tagline&&<div style={{display:'flex',alignItems:'center',gap:'.5em'}}>
            <span style={{flex:1,height:'.09em',background:rule,minWidth:'1.2em'}}></span>
            {/* kleinste tekst van het merk — klem op --fs-label-s, anders valt hij weg */}
            <span style={{fontFamily:'var(--font-display)',fontSize:'max(.34em, var(--fs-label-s))',
              letterSpacing:'var(--ls-label-wide)',color:ink,whiteSpace:'nowrap',display:'inline-flex',alignItems:'center'}}>
              {parts.length>1
                ? parts.map((p,i)=><React.Fragment key={i}>{i>0&&<img src={swirl} alt="en"
                    style={{width:'1.5em',height:'auto',margin:'0 .2em',verticalAlign:'-.04em'}}/>}{p.trim()}</React.Fragment>)
                : tagline}
            </span>
          </div>}
        </div>
      </div>
    );
  }

  const file=variant==='panel'?ART.panel
    :variant==='reversed'?ART.reversed
    :tone==='onDeep'?ART.wordmarkOnDeep:tone==='gold'?ART.wordmarkGold:tone==='mono'?ART.wordmarkMono:ART.wordmarkLight;
  return <img src={assetBase+file} alt="Winters Rijlaarsdam — Art &amp; Events"
    style={{height:h+'px',width:'auto',display:'block',...style}}/>;
}
