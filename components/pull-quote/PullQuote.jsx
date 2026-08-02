import React from 'react';

/* Someone speaking, in the display serif at reading size — never uppercase. A slogan on a
   full-width band is QuoteBar; this is a person.

   Two shapes, one component. The default is a full-width section (a chef with his portrait,
   a hostess on her work). `compact` is the same voice inside a card, for a review in a grid —
   it was a separate TestimonialCard set in spaced capitals, which nobody reads at review
   length. Sentence case for both: the quote marks already say it is a quote. */
export function PullQuote({children,name,role,portrait,tone='cream',align='left',compact=false,style}){
  /* Sage carries display type only — white on sage measures 2.6:1. The full form is 23px and
     passes; a compact review is 16px running text with a 10.5px attribution, so sage there is
     simply unreadable. The compact path falls back to cream rather than offering the choice. */
  if(compact&&tone==='sage') tone='cream';
  const onDark=tone==='deep';
  const bg=tone==='deep'?'var(--surface-deep)':tone==='sage'?'var(--surface-sage)':'var(--surface-cream)';
  const quoteColor=onDark||tone==='sage'?'var(--white)':'var(--ink-900)';
  const metaColor=onDark||tone==='sage'?'var(--cream-100)':'var(--ink-500)';
  const body=(
    <React.Fragment>
      <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:compact?'var(--fs-body-l)':'var(--fs-quote)',lineHeight:compact?1.6:1.45,
        color:quoteColor,textWrap:'pretty'}}>
        &ldquo;{children}&rdquo;
      </blockquote>
      {(name||role)&&(
        <p style={{margin:compact?'var(--space-4) 0 0':'var(--space-5) 0 0',fontFamily:'var(--font-display)',
          fontSize:'var(--fs-label-s)',letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',
          color:metaColor}}>
          {name}{name&&role?' \u00b7 ':''}{role}
        </p>
      )}
    </React.Fragment>
  );
  if(compact) return (
    <figure style={{margin:0,background:bg,padding:'var(--space-6) var(--space-7)',
      textAlign:align,...style}}>{body}</figure>
  );
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
        <div>{body}</div>
      </div>
    </section>
  );
}
