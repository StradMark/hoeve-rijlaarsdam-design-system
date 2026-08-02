function OverOnsScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.hoeve} kicker="over ons" title="Wie wij zijn" height={440}/>
    <QuoteBar>&ldquo;Daar waar hospitality een kunstvorm is!&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="een boerderij" title="Met vier gezichten" size="l"/>
          <Lead>Wat begon als een boerderij in de polder is inmiddels vier dingen tegelijk: een evenementenlocatie met vier ruimtes, een kunstgalerij met beeldentuin, een keuken met een eigen chef, en een team gastvrouwen en gastheren dat ook buiten de deur werkt. U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen, maar ook natuurlijk lekker genieten van de kunst.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.gazon} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="uw vaste" title="Aanspreekpunten" align="center" size="l"/>
        <Lead align="center" width="72ch">Geen callcenter en geen algemeen formulier: u belt de persoon die uw dag ook daadwerkelijk regelt.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)',
        maxWidth:640,marginLeft:'auto',marginRight:'auto'}}>
        {CONTENT.team.map(p=><PersonCard key={p.name} image={IMG[p.img]} name={p.name} role={p.role} phone={p.phone}/>)}
      </div>
      <p style={{margin:'var(--space-6) auto 0',textAlign:'center',fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:'var(--text-body)',maxWidth:'62ch'}}>
        Gaat uw vraag over de galerie of de beeldentuin? Dan belt u Loekie Rijlaarsdam op 06 - 42 57 63 95 —
        zij gaat over de collectie en de exposities.
      </p>
    </Section>

    <PullQuote tone="sage" align="center">
      Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken. Wij luisteren aandachtig naar uw wensen en ideeën.
    </PullQuote>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.bediening} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div>
          <SectionHeading kicker="op locatie" title="Onze gastvrouwen bij u" size="l"/>
          <Lead>Onze gastvrouwen en gastheren zijn een groot deel van waarom gasten terugkomen. Daarom laten wij hun kwaliteiten en glimlach ook graag op andere evenementen zien — zakelijk, een private diner waar extra mensen bij nodig zijn, of ondersteuning op grotere evenementen. Hoeve Rijlaarsdam komt naar u toe.</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Hospitality')}>Lees meer</Button>
            <Button tone="outlineDark" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
          </div>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="ons" title="Team" align="center" size="l" tone="onSage"/>
        <Lead align="center" width="72ch" tone="dark">Een aantal van onze gastvrouwen en gastheren is los te boeken voor uw evenement, op uw locatie.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {[['Gastvrouw','gastvrouwen'],['Gastheer','bediening'],['Barman','bar'],['Souschef','hapjes']].map(([r,img])=>
          <PersonCard key={r} tone="onSage" image={IMG[img]} name={r} onBook={()=>onNavigate('Contact')}/>
        )}
      </div>
      <p style={{margin:'var(--space-6) auto 0',textAlign:'center',fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:'var(--cream-100)',maxWidth:'62ch'}}>
        Ons team wisselt per evenement. Vertelt u ons wat u nodig heeft, dan stellen wij de ploeg samen die bij uw dag past.
      </p>
    </Section>

    <PageEnd page="overons" tone="cream" kicker="goed" title="Bereikbaar"
      body="Bel ons, mail ons, of kom langs voor een kop koffie. Wij vertellen graag wat er mogelijk is."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.OverOnsScreen=OverOnsScreen;
