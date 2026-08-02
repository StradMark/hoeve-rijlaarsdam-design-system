function HospitalityScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.bediening} kicker="wij komen" title="Hospitality op locatie" height={440}/>
    <QuoteBar>&ldquo;Daar waar hospitality een kunstvorm is!&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="oprechte" title="Gastvrijheid" size="l"/>
          <Lead>Hospitality is m&eacute;&eacute;r waarde en meerwaarde cre&euml;ren met oprechte gastvrijheid. Onze dames en heren vinden het dan ook geweldig om hun kwaliteiten en glimlach op andere evenementen te laten zien. Of het nu een zakelijk event betreft, een private diner waar extra mensen bij nodig zijn of ondersteuning op een groter evenement.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.gastvrouwen} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="inzet" title="Waar u ons kunt inzetten" align="center" size="l" tone="onSage"/>
        <p style={{maxWidth:'74ch',margin:'var(--space-5) auto 0',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:'var(--white)'}}>Wij nemen het voor u uit handen — zowel het culinaire gedeelte als de aankleding van het evenement kunt u aan ons overlaten.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <RoomCard tone="onSage" image={IMG.koetshuisBijeenkomst} caption="Zakelijke events" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard tone="onSage" image={IMG.bruiloftTafel} caption="Private dining" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard tone="onSage" image={IMG.koetshuisFeest} caption="Grote evenementen" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
      </div>
    </Section>

    <SplitPanel image={IMG.hapjes} imageSide="right" ratio="4 / 3" background="var(--surface-cream)">
      <BenefitsPanel kicker="wat wij" title="Meebrengen" items={['Gastvrouwen en gastheren','Chef en keukenbrigade','Volledige mise en place','Aankleding en styling','Bar en tapinstallatie','Servies, glaswerk en linnen','Streekproducten en eigen tuin','Draaiboek en aansturing op de dag']}/>
    </SplitPanel>

    <TabbedDetail kicker="voor welke" title="Gelegenheid"
      lead="Vertel ons waar en wanneer, dan stellen wij het team en het menu samen. Uw wensen zijn hierbij altijd leidend — wij leveren echt maatwerk."
      items={[
        {label:'Zakelijk',image:IMG.bediening,body:'Gastvrouwen, gastheren en een chef op uw eigen locatie, met draaiboek en aansturing op de dag.'},
        {label:'Private dining',image:IMG.bruiloftTafel,body:'Een volledig verzorgd diner voor een select gezelschap, inclusief mise en place, servies, glaswerk en linnen.'},
        {label:'Kerst en jubilea',image:IMG.koetshuisFeest,body:'Grootschalige feesten waarbij iedereen verwend mag worden — van de bar tot de styling.'}
      ]}/>
    <ReviewRow background="var(--surface-cream)"/>
    <PageEnd page="hospitality" tone="sage" kicker="op locatie" title="Wij komen naar u toe"
      body="Een private diner voor relaties of een grootschalig kerstfeest waarbij iedereen verwend mag worden. Wij worden enorm geprikkeld om bijzondere belevingen op maat te maken."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.HospitalityScreen=HospitalityScreen;
