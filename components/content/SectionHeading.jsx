import React from 'react';

/* Kicker geometry rule: the script line ALWAYS starts left of the title's left edge and
   overlaps it vertically, so the eye reads down-and-right. Never indent it inward. */
const seen=new Set();
/* Kicker-regels (zie readme.md → "De kicker"): max 2 woorden / 14 tekens, geen eigen zin,
   en het kernwoord staat in de titel. Waarschuwen, niet afkappen — de tekstschrijver beslist. */
export function checkKicker(kicker,title){
  /* Sleutel op kicker én titel: dezelfde kicker kan op een andere pagina een kortere titel
     krijgen en dán pas de regel overtreden — op alleen de kicker ontsnapt dat geval. */
  const key=kicker+'|'+title;
  if(typeof kicker!=='string'||seen.has(key)) return;
  seen.add(key);
  const words=kicker.trim().split(/\s+/).length;
  if(words>2||kicker.length>14)
    console.warn('[SectionHeading] kicker "'+kicker+'" is te lang ('+words+' woorden, '+kicker.length+' tekens) — max 2 woorden / 14 tekens.');
  if(/[.,!?;:]/.test(kicker))
    console.warn('[SectionHeading] kicker "'+kicker+'" bevat interpunctie — een kicker is geen zin.');
  // The title is set 2–3x larger, so a slightly longer kicker still reads as secondary.
  // Only flag a kicker that outweighs a short title (1.6x its length or more).
  if(typeof title==='string'&&title.length&&kicker.length>=title.length*1.6)
    console.warn('[SectionHeading] kicker "'+kicker+'" overheerst de titel "'+title+'" — kort de kicker in of kies een titel met meer gewicht.');
}

export function SectionHeading({kicker,title,align='left',tone='light',size='m',style}){
  if(kicker) checkKicker(kicker,title);
  const scriptColor = tone==='onDeep'?'var(--sage-300)':tone==='onSage'?'var(--cream-100)':'var(--gold-500)';
  const titleColor  = tone==='onDeep'||tone==='onSage'?'var(--white)':'var(--text-heading)';
  const fsScript = size==='l'?'var(--fs-script-l)':size==='s'?'var(--fs-script-s)':'var(--fs-script-m)';
  const fsTitle  = size==='l'?'var(--fs-display-l)':size==='s'?'var(--fs-display-s)':'var(--fs-display-m)';
  return (
    <div style={{textAlign:align,...style}}>
      <span style={{display:'inline-block',position:'relative',textAlign:align,
        paddingTop:kicker?'calc('+fsScript+' * .64)':0}}>
        {kicker&&<span style={{position:'absolute',left:'-.18em',top:0,whiteSpace:'nowrap',
          fontFamily:'var(--font-script)',fontVariantLigatures:'none',fontSize:fsScript,lineHeight:'var(--lh-script)',
          color:scriptColor}}>{kicker}</span>}
        <h2 style={{fontFamily:'var(--font-display)',fontSize:fsTitle,lineHeight:'var(--lh-display)',
          letterSpacing:'var(--ls-display)',color:titleColor,fontWeight:400,margin:0}}>{title}</h2>
      </span>
    </div>
  );
}
