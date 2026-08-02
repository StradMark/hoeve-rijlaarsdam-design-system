import React from 'react';
import { TabPills } from '../core/TabPills.jsx';
import { Button } from '../core/Button.jsx';
import { SectionHeading } from '../content/SectionHeading.jsx';

/* Pills that switch one photo-and-text panel. The most repeated section on the site:
   pick a room, a moment of the day, an occasion. Pills never stand alone — every pill
   owns a panel, otherwise the reader taps and nothing happens. */
export function TabbedDetail({items=[],value,onChange,defaultValue,kicker,title,lead,
  tone='light',imageSide='left',ratio='4 / 3',style}){
  const names=items.map(it=>it.label);
  const [own,setOwn]=React.useState(defaultValue||names[0]);
  const active=value!==undefined?value:own;
  const pick=next=>{ if(value===undefined) setOwn(next); if(onChange) onChange(next); };
  const item=items.find(it=>it.label===active)||items[0];
  if(!item) return null;

  const onSage=tone==='sage';
  const bg=onSage?'var(--surface-sage)':tone==='cream'?'var(--surface-cream)':'var(--surface-page)';
  /* Sage is a midtone: nothing under 16px may sit on it in cream, so body text goes to ink. */
  const headColor=onSage?'var(--text-on-sage-body)':'var(--ink-900)';
  const bodyColor=onSage?'var(--text-on-sage-body)':'var(--text-body)';
  const photo=(
    <div style={{aspectRatio:ratio,overflow:'hidden'}}>
      <img src={item.image} alt={item.alt||''} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    </div>
  );
  const text=(
    <div>
      <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:'var(--fs-display-s)',color:headColor}}>{item.title||item.label}</h3>
      <p style={{maxWidth:'46ch',margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:bodyColor,textWrap:'pretty'}}>{item.body}</p>
      {item.ctaLabel&&(
        <div style={{marginTop:'var(--space-5)'}}>
          <Button tone={onSage?'white':'outlineDark'} onClick={item.onCta}>{item.ctaLabel}</Button>
        </div>
      )}
    </div>
  );

  return (
    <section style={{background:bg,padding:'var(--section-y-tight) var(--space-8)',...style}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto'}}>
        {(kicker||title||lead)&&(
          <div style={{textAlign:'center'}}>
            <SectionHeading kicker={kicker} title={title} align="center" size="l"
              tone={onSage?'onSage':undefined}/>
            {lead&&(
              <p style={{maxWidth:'72ch',margin:'var(--space-5) auto 0',fontSize:'var(--fs-body-s)',
                lineHeight:'var(--lh-body)',color:bodyColor,textWrap:'pretty'}}>{lead}</p>
            )}
          </div>
        )}
        <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <TabPills items={names} value={active} onChange={pick} tone={onSage?'onSage':'onLight'}/>
        </div>
        <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1.15fr 1fr',
          gap:'var(--space-7)',alignItems:'center'}}>
          {imageSide==='right'?<React.Fragment>{text}{photo}</React.Fragment>
            :<React.Fragment>{photo}{text}</React.Fragment>}
        </div>
      </div>
    </section>
  );
}
