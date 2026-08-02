const SETUP_ICON=Object.fromEntries(Object.entries({
  'Theater':'theater','Cabaret':'cabaret','School':'school','U-vorm':'u-vorm','Carré':'carre',
  'Diner':'banket','Private dining':'banket','Wijnproeverij':'banket','Receptie':'receptie',
  'Ontvangst':'receptie','Netwerkborrel':'receptie','Borrel na het diner':'receptie',
  'Verjaardag':'feest','Expositie':'feest','Vergadering':'bestuurstafel',
  'Bestuursoverleg':'bestuurstafel','Bestuurssessie':'bestuurstafel','Meeting':'bestuurstafel',
  'Coaching':'bestuurstafel','Eén-op-één':'bestuurstafel','Eiland':'cabaret','Workshop':'carre',
  'Training':'school','Brainstorm':'carre','Strategiesessie':'carre'
}).map(([k,v])=>[k,'../../assets/icons/opstelling-'+v+'.svg']));

function RuimteScreen({room='Koetshuis',onNavigate}){
  const d=CONTENT.ruimtes[room]||CONTENT.ruimtes['Koetshuis'];
  const others=Object.keys(CONTENT.ruimtes).filter(r=>r!==room);
  return <React.Fragment>
    <HeroVideo image={IMG[d.hero]} kicker={d.kicker} title={d.title} height={440}/>
    <QuoteBar>&ldquo;{d.quote}&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="handige" title="Informatie" size="l"/>
          <Lead>{d.lead}</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG[d.photo]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <SplitPanel image={IMG[d.panel]} ratio="4 / 3">
      <BenefitsPanel kicker="alle" title="Faciliteiten" items={d.facts} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="oneindig" title={d.setupsTitle} align="center" size="l"/>
        <Lead align="center" width="76ch">{d.setupsLead}</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {d.setups.map(n=>(
          <InfoTile key={n} icon={SETUP_ICON[n]} title={n} body={CONTENT.opstellingen[n]}/>
        ))}
      </div>
    </Section>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-7)'}}>
        <SectionHeading kicker="wat kost" title="Een dag hier" align="center" size="l" tone="onDeep"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
        <PriceList kicker="Zaalhuur" tone="onDeep" items={PRIJZEN.zaalhuur} note={PRIJZEN.btwNoot}/>
        <PriceList kicker="Extra&rsquo;s" tone="onDeep" items={PRIJZEN.extras}/>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen en antwoorden" align="center" size="l"/>
      </div>
      <FaqAccordion tone="onLight" items={FAQ_ITEMS}/>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="bekijk ook" title="Andere ruimtes" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {others.map(r=>(
          <RoomCard key={r} image={IMG[CONTENT.ruimtes[r].hero]} caption={r}
            meta={CONTENT.ruimtes[r].meta}
            onReadMore={()=>onNavigate(r)}/>
        ))}
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="en verder" title="Bij deze zaal" align="center" size="l"/>
        <Lead align="center" width="72ch">Een zaal is het begin. Het eten komt uit onze eigen keuken, en voor een vergaderdag of bedrijfsfeest regelen wij het hele programma.</Lead>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)',flexWrap:'wrap'}}>
          <Button tone="primary" onClick={()=>onNavigate('Catering')}>Catering uit eigen keuken</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Zakelijk')}>Zakelijk bij ons</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Praktisch')}>Route en parkeren</Button>
        </div>
      </div>
    </Section>

    <PageEnd page="ruimte" tone="sage" kicker="landelijk" title="Waar alles samenkomt"
      body="U mag de locatie altijd vrijblijvend komen bezichtigen. Wij gaan graag met u rond de tafel — onder het genot van een kop koffie." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.RuimteScreen=RuimteScreen;
