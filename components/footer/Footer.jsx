import React from 'react';

/* Social glyphs come from Simple Icons (cdn.simpleicons.org) — the platforms' OWN marks.
   Never redraw or recolour these in brand colours: Meta's guidelines allow the glyph in
   black or white only. The brand colour goes in the disc BEHIND the glyph, never in it. */
const SOCIAL={
  instagram:{label:'Instagram',href:'https://www.instagram.com/hoeverijlaarsdam/'},
  facebook:{label:'Facebook',href:'https://www.facebook.com/HoeveRijlaarsdam/'},
  linkedin:{label:'LinkedIn',href:'#'}
};

function SocialButton({name}){
  const [hover,setHover]=React.useState(false);
  const meta=SOCIAL[name]||{label:name,href:'#'};
  return (
    <a href={meta.href} target="_blank" rel="noopener noreferrer" aria-label={meta.label} title={meta.label}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:30,height:30,borderRadius:'var(--radius-pill)',flex:'0 0 auto',
        background:hover?'var(--white)':'var(--sage-200)',display:'inline-flex',alignItems:'center',
        justifyContent:'center',transition:'background var(--dur-base) var(--ease-out)'}}>
      <img src={'https://cdn.simpleicons.org/'+name+'/16191A'} alt="" width="15" height="15" style={{display:'block'}}/>
    </a>
  );
}

export function Footer({columns=[],social=['instagram','facebook'],legal='Ontwerp: Janneke van Soeren-Aupers · Realisatie: Mark Stradmann · © 2026 Hoeve Rijlaarsdam Hospitality B.V.',links=['Algemene voorwaarden','Cookies','Privacy'],style}){
  return (
    <footer style={{background:'var(--surface-deep)',color:'var(--text-on-dark)',...style}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--space-7) var(--space-6)',
        display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-7)'}}>
        {columns.map((col,i)=>(
          <div key={i}>
            <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--white)',margin:'0 0 var(--space-4)',fontWeight:400}}>{col.title}</h4>
            <div style={{display:'grid',gap:'2px'}}>
              {col.lines.map((l,j)=>(
                <div key={j} style={{fontSize:'var(--fs-body-s)',fontWeight:l.strong?'var(--fw-body-strong)':'var(--fw-body)',
                  color:l.strong?'var(--white)':'var(--sage-200)',display:'flex',gap:'var(--space-4)'}}>
                  {l.label&&<span style={{fontWeight:'var(--fw-body-strong)',color:'var(--white)',minWidth:64}}>{l.label}</span>}
                  <span>{l.text}</span>
                </div>
              ))}
            </div>
            {i===0&&social.length>0&&(
              <div style={{display:'flex',gap:'var(--space-3)',marginTop:'var(--space-5)'}}>
                {social.map(s=><SocialButton key={s} name={s}/>)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{borderTop:'1px solid var(--border-on-dark)'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'10px var(--space-6)',display:'flex',
          justifyContent:'space-between',gap:'var(--space-5)',fontSize:'var(--fs-body-xs)',color:'var(--sage-200)'}}>
          <span>{legal}</span>
          <span style={{display:'flex',gap:'var(--space-4)'}}>{links.map(l=><a key={l} href="#" style={{color:'var(--sage-200)'}}>{l}</a>)}</span>
        </div>
      </div>
    </footer>
  );
}
