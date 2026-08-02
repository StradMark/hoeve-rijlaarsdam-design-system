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
  /* Gestapeld op telefoon: drie kolommen onder elkaar met minder lucht ertussen dan naast
     elkaar, en de labelkolom van de openingstijden krijgt geen vaste breedte meer — die liet
     anders een gat van 64px in elke regel staan. */
  const [narrow,setNarrow]=React.useState(false);
  React.useEffect(()=>{
    const check=()=>setNarrow(window.innerWidth<760);
    check();window.addEventListener('resize',check);
    return ()=>window.removeEventListener('resize',check);
  },[]);
  return (
    <footer style={{background:'var(--surface-deep)',color:'var(--text-on-dark)',...style}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',
        padding:narrow?'var(--space-6) var(--gutter)':'var(--space-7) var(--space-6)',
        display:'grid',gridTemplateColumns:narrow?'1fr':'repeat(3,1fr)',
        gap:narrow?'var(--space-6)':'var(--space-7)'}}>
        {columns.map((col,i)=>(
          <div key={i}>
            <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--white)',margin:'0 0 var(--space-4)',fontWeight:400}}>{col.title}</h4>
            <div style={{display:'grid',gap:'2px'}}>
              {col.lines.map((l,j)=>(
                <div key={j} style={{fontSize:'var(--fs-body-s)',fontWeight:l.strong?'var(--fw-body-strong)':'var(--fw-body)',
                  color:l.strong?'var(--white)':'var(--sage-200)',display:'flex',
                  gap:narrow?'var(--space-3)':'var(--space-4)'}}>
                  {l.label&&<span style={{fontWeight:'var(--fw-body-strong)',color:'var(--white)',
                    minWidth:narrow?undefined:64,flex:narrow?'0 0 auto':undefined}}>{l.label}</span>}
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
        <div style={{maxWidth:'var(--container)',margin:'0 auto',
          padding:narrow?'var(--space-4) var(--gutter)':'10px var(--space-6)',display:'flex',
          flexDirection:narrow?'column':'row',
          alignItems:narrow?'flex-start':'center',
          justifyContent:'space-between',gap:narrow?'var(--space-3)':'var(--space-5)',
          fontSize:'var(--fs-body-xs)',color:'var(--sage-200)'}}>
          <span>{legal}</span>
          <span style={{display:'flex',flexWrap:'wrap',gap:'var(--space-4)'}}>{links.map(l=>{
            const label=typeof l==='string'?l:l.label, href=typeof l==='string'?'#':(l.href||'#');
            return <a key={label} href={href} style={{color:'var(--sage-200)'}}>{label}</a>;
          })}</span>
        </div>
      </div>
    </footer>
  );
}
