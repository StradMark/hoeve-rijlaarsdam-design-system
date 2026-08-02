function GalerieScreen({view='Galerie',onNavigate}){
  const d=CONTENT.galerie[view];
  return <React.Fragment>
    <HeroVideo image={IMG[d.hero]} kicker={d.kicker} title={d.title} height={440}/>
    <QuoteBar>&ldquo;{d.quote}&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker={view==='Galerie'?'over de':'over'} title={view==='Galerie'?'Collectie':'De beeldentuin'} size="l"/>
          <Lead>{d.lead}</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Contact')}>Plan een bezoek</Button>
            <Button tone="outlineDark" onClick={()=>onNavigate(view==='Galerie'?'Beeldentuin':'Galerie')}>
              {view==='Galerie'?'Naar de beeldentuin':'Naar de galerie'}
            </Button>
          </div>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG[d.photo]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    {view==='Galerie'&&(
      <TabbedDetail tone="sage" kicker="drie" title="Expositieruimtes"
        lead="Elke ruimte heeft zijn eigen karakter, en daarmee zijn eigen werk aan de wand."
        items={CONTENT.expositieruimtes.map(o=>({label:o.label,image:IMG[o.img],body:o.body}))}/>
    )}

    {/* Zonder het expositieblok (Beeldentuin) zou dit vlak wit op wit tegen de intro aanlopen,
       dus dan draagt deze sectie de sage-band. */}
    <Section background={view==='Galerie'?undefined:'var(--surface-sage)'} pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="te doen" title="Wat u hier kunt doen" align="center" size="l" tone={view==='Galerie'?undefined:'onSage'} style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.workshop} caption="Schilderworkshop" tone={view==='Galerie'?'light':'onSage'} body="Onder begeleiding zelf aan het werk, tussen de collectie."/>
        <ImageCaptionCard image={IMG.beeldentuinVogel} caption="Rondleiding" tone={view==='Galerie'?'light':'onSage'} body="Op afspraak nemen wij u mee langs de collectie en de tuin."/>
        <ImageCaptionCard image={IMG.macarons} caption="Theehuis De Hooiberg" tone={view==='Galerie'?'light':'onSage'} body="Koffie en gebak op het terras, met weids uitzicht over de polder."/>
      </div>
    </Section>

    <PullQuote tone="deep" name="Loekie Rijlaarsdam" role="Galerie en beeldentuin">
      Kunst hoort niet achter glas te staan. Bij ons loopt u er langs met een kop koffie in de hand.
    </PullQuote>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="wanneer u" title="Welkom bent" size="l"/>
          <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            {[['Maandag t/m donderdag','op afspraak'],['Vrijdag en zaterdag','11.00 - 17.00 uur'],['Zondag','13.00 - 17.00 uur']].map(([a,b])=>
              <div key={a} style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'var(--space-5)',
                padding:'11px 0',borderBottom:'1px solid rgba(22,25,26,.1)',fontSize:'var(--fs-body-m)'}}>
                <span style={{color:'var(--ink-900)'}}>{a}</span>
                <span style={{color:'var(--text-body)'}}>{b}</span>
              </div>)}
          </div>
          <p style={{margin:'var(--space-5) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>
            Bij besloten evenementen kan de galerie gesloten zijn. Bel Loekie op 06 - 42 57 63 95 als u het zeker wilt weten.
          </p>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.hoeve} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <PageEnd page="galerie" tone="sage" kicker="kunst en" title="Gastvrijheid onder één dak"
      body="Wilt u de galerie of de beeldentuin afhuren voor een besloten bezoek of een evenement? Laat uw gegevens achter, dan denken wij met u mee."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.GalerieScreen=GalerieScreen;
