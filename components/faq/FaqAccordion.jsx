import React from 'react';

/* Uitklapbare vragen. Opent en sluit met een echte hoogte-animatie (grid-template-rows),
   het antwoord blijft gemonteerd zodat sluiten ook animeert. */
export function FaqAccordion({items=[],tone='onDeep',defaultOpen=0,allowMultiple=false,style}){
  const [open,setOpen]=React.useState(()=>defaultOpen>-1?[defaultOpen]:[]);
  const onDeep=tone==='onDeep';
  const isOpen=(i)=>open.indexOf(i)>-1;
  const toggle=(i)=>setOpen(cur=>{
    if(cur.indexOf(i)>-1) return cur.filter(x=>x!==i);
    return allowMultiple?cur.concat(i):[i];
  });
  return (
    <div style={{display:'grid',gap:'var(--space-3)',...style}}>
      {items.map((it,i)=>{
        const opened=isOpen(i);
        const rowBg=onDeep?(opened?'var(--sage-400)':'var(--white)'):(opened?'var(--surface-deep)':'var(--sage-400)');
        // Only one row treatment is dark: the opened row on a light section. Everything
        // else is white or sage, and 12px caps need ink on those, never white (2.05:1).
        // Sage is a mid tone — green-900 on it is only 2.88:1, so sage rows take ink-900 (6.9:1).
        const rowIsDark=!onDeep&&opened;
        const rowIsSage=onDeep?opened:!opened;
        const rowColor=rowIsDark?'var(--white)':rowIsSage?'var(--ink-900)':'var(--green-900)';
        const markBg=rowIsDark?'var(--white)':'var(--surface-deep)';
        const markInk=rowIsDark?'var(--surface-deep)':'var(--white)';
        return (
          <div key={i}>
            <button type="button" onClick={()=>toggle(i)} aria-expanded={opened} aria-controls={'faq-p-'+i}
              onMouseEnter={e=>{if(!opened)e.currentTarget.style.filter='brightness(.96)'}}
              onMouseLeave={e=>{e.currentTarget.style.filter='none'}}
              style={{width:'100%',display:'flex',alignItems:'center',gap:'var(--space-4)',
                background:rowBg,color:rowColor,border:'none',borderRadius:'var(--radius-pill)',
                padding:'9px 22px 9px 9px',cursor:'pointer',textAlign:'left',font:'inherit',
                transition:'background var(--dur-base) var(--ease-out),filter var(--dur-fast) var(--ease-out)'}}>
              {/* plus/minus drawn from two bars: no font metrics, so it stays optically centred */}
              <span aria-hidden="true" style={{width:24,height:24,flex:'0 0 auto',borderRadius:'var(--radius-pill)',
                background:markBg,position:'relative',
                transform:opened?'rotate(180deg)':'rotate(0deg)',
                transition:'transform var(--dur-slow) var(--ease-out),background var(--dur-base) var(--ease-out)'}}>
                <span style={{position:'absolute',left:'50%',top:'50%',width:11,height:1.5,marginLeft:-5.5,marginTop:-.75,
                  background:markInk,transition:'background var(--dur-base) var(--ease-out)'}}/>
                <span style={{position:'absolute',left:'50%',top:'50%',width:11,height:1.5,marginLeft:-5.5,marginTop:-.75,
                  background:markInk,transform:opened?'rotate(0deg) scaleX(0)':'rotate(90deg)',
                  transition:'transform var(--dur-slow) var(--ease-out),background var(--dur-base) var(--ease-out)'}}/>
              </span>
              <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',
                letterSpacing:'var(--ls-label)',textTransform:'uppercase',lineHeight:1.35}}>{it.question}</span>
            </button>
            <div id={'faq-p-'+i} role="region" style={{display:'grid',
              gridTemplateRows:opened?'1fr':'0fr',
              transition:'grid-template-rows var(--dur-slow) var(--ease-out)'}}>
              <div style={{overflow:'hidden',minHeight:0}}>
                <p style={{margin:'var(--space-4) 0 var(--space-4) 49px',fontSize:'var(--fs-body-s)',
                  lineHeight:'var(--lh-body)',color:onDeep?'var(--text-on-dark)':'var(--text-body)',maxWidth:'62ch',
                  opacity:opened?1:0,transform:opened?'translateY(0)':'translateY(-4px)',
                  transition:'opacity var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)'}}>
                  {it.answer||'Antwoord nog aan te leveren.'}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
