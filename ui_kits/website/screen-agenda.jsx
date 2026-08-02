/* Agenda — wat er wanneer is. De enige plek waar wisselende exposities, pop-upavonden en
   open dagen bij elkaar staan; die informatie zat eerder verspreid over Galerie en Pop-up.
   De items horen op termijn uit een bron te komen, niet uit dit bestand. */
function AgendaScreen({onNavigate}){
  const [filter,setFilter]=React.useState('Alles');
  const items=CONTENT.agenda;
  const zichtbaar=filter==='Alles'?items:items.filter(i=>i.soort===filter);
  return <React.Fragment>
    <HeroVideo image={IMG.koetshuisExpo} kicker="wat er" title="Te doen is" height={400}/>
    <QuoteBar>&ldquo;Er is altijd iets aan de hand op het erf&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="onze" title="Agenda" align="center" size="l"/>
        <Lead align="center" width="72ch">Wisselende exposities in de galerie, pop-upavonden van onze chef en open dagen op het erf. Voor besloten evenementen is de locatie gesloten; die staan hier niet bij.</Lead>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
        <TabPills tone="onLight" items={['Alles','Expositie','Pop-up','Open dag']} value={filter} onChange={setFilter}/>
      </div>

      <div style={{maxWidth:900,margin:'var(--space-7) auto 0',display:'grid',gap:'var(--space-5)'}}>
        {zichtbaar.map(i=>(
          <article key={i.titel} style={{display:'grid',gridTemplateColumns:'132px 1fr auto',gap:'var(--space-6)',
            alignItems:'center',paddingBottom:'var(--space-5)',borderBottom:'1px solid var(--border-hairline)'}}>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display-s)',color:'var(--ink-900)',
                lineHeight:1.1}}>{i.datum}</div>
              <div style={{marginTop:6,fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
                letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--text-accent)'}}>{i.soort}</div>
            </div>
            <div>
              <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
                fontSize:'var(--fs-body-l)',color:'var(--ink-900)'}}>{i.titel}</h3>
              <p style={{margin:'var(--space-2) 0 0',maxWidth:'62ch',fontSize:'var(--fs-body-s)',
                lineHeight:'var(--lh-body)',color:'var(--text-body)',textWrap:'pretty'}}>{i.body}</p>
              <div style={{marginTop:8,fontSize:'var(--fs-label-s)',color:'var(--ink-500)'}}>{i.tijd}</div>
            </div>
            <Button tone="outlineDark" size="sm" onClick={()=>onNavigate(i.naar||'Contact')}>{i.actie||'Meer weten'}</Button>
          </article>
        ))}
        {zichtbaar.length===0&&(
          <EmptyState title="Nog niets gepland"
            action={<Button tone="outlineDark" onClick={()=>setFilter('Alles')}>Bekijk de hele agenda</Button>}>
            Er staat op dit moment niets van dit soort op de kalender. Wij plannen een paar exposities en
            pop-upavonden per seizoen &mdash; kijk over een paar weken nog eens, of vraag ons wat eraan komt.
          </EmptyState>
        )}
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="niets missen" title="Van wat er komt" align="center" size="l" tone="onSage"/>
        <p style={{maxWidth:'66ch',margin:'var(--space-5) auto 0',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:'var(--white)'}}>Wij sturen een paar keer per jaar een bericht als er een nieuwe expositie hangt of een pop-upavond gepland staat. Niet vaker.</p>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)',flexWrap:'wrap'}}>
          <Button tone="white" onClick={()=>onNavigate('Contact')}>Houd mij op de hoogte</Button>
          <Button tone="outlineLight" onClick={()=>onNavigate('Galerie')}>Naar de galerie</Button>
        </div>
      </div>
    </Section>

    <PageEnd page="galerie" tone="cream" kicker="of kom" title="Zomaar langs"
      body="De galerie en de beeldentuin zijn op vrijdag, zaterdag en zondag open. U hoeft niets te reserveren."
      onCta={()=>onNavigate('Praktisch')}/>
  </React.Fragment>;
}
window.AgendaScreen=AgendaScreen;
