import React from 'react';

/* Long-form quote block for people pages (chef, team). Display serif at reading size,
   never uppercase — this is someone talking, not a marketing line. */
export function PullQuote({children,name,role,portrait,tone='cream',align='left',style}){
  const onDark = tone==='deep';
  const bg = tone==='deep'?'var(--surface-deep)':tone==='sage'?'var(--surface-sage)':'var(--surface-cream)';
  const quoteColor = onDark||tone==='sage'?'var(--white)':'var(--ink-900)';
  const metaColor = onDark||tone==='sage'?'var(--cream-100)':'var(--ink-500)';
  return (
    <section style={{background:bg,padding:'var(--section-y-tight) var(--space-8)',...style}}>
      <div style={{maxWidth:portrait?'var(--container)':920,margin:'0 auto',display:portrait?'grid':'block',
        gridTemplateColumns:portrait?'260px 1fr':undefined,gap:'var(--space-8)',alignItems:'center',
        textAlign:portrait?'left':align}}>
        {portrait&&(
          <div style={{aspectRatio:'4 / 5',overflow:'hidden'}}>
            <img src={portrait} alt={name||''} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        )}
        <div>
          <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
            fontSize:'var(--fs-quote)',lineHeight:1.45,color:quoteColor,textWrap:'pretty'}}>
            &ldquo;{children}&rdquo;
          </blockquote>
          {(name||role)&&(
            <p style={{margin:'var(--space-5) 0 0',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:metaColor}}>
              {name}{name&&role?' \u00b7 ':''}{role}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
