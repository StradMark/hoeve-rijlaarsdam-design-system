function HospitalityScreen({onNavigate}){
  const [tab,setTab]=React.useState('Zakelijk');
  return <React.Fragment>
    <HeroVideo image={IMG.bediening} kicker="wij komen naar u toe" title="Hospitality op locatie" height={440}/>
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
        <SectionHeading kicker="waar u ons" title="Kunt inzetten" align="center" size="l" tone="onSage"/>
        <p style={{maxWidth:'74ch',margin:'var(--space-5) auto 0',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:'var(--white)'}}>Wij nemen het voor u uit handen — zowel het culinaire gedeelte als de aankleding van het evenement kunt u aan ons overlaten.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <RoomCard image={IMG.koetshuisBijeenkomst} caption="Zakelijke events" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard image={IMG.bruiloftTafel} caption="Private dining" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard image={IMG.koetshuisFeest} caption="Grote evenementen" readMoreLabel="Plan een gesprek" onReadMore={()=>onNavigate('Contact')}/>
      </div>
    </Section>

    <SplitPanel image={IMG.hapjes} imageSide="right" ratio="4 / 3" background="var(--surface-cream)">
      <BenefitsPanel kicker="wat wij" title="Meebrengen" items={['Gastvrouwen en gastheren','Chef en keukenbrigade','Volledige mise en place','Aankleding en styling','Bar en tapinstallatie','Servies, glaswerk en linnen','Streekproducten en eigen tuin','Draaiboek en aansturing op de dag']}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="voor welke" title="Gelegenheid" align="center" size="l"/>
        <Lead align="center" width="72ch">Vertel ons waar en wanneer, dan stellen wij het team en het menu samen. Uw wensen zijn hierbij altijd leidend — wij leveren echt maatwerk.</Lead>
        <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <TabPills tone="onLight" items={['Zakelijk','Private dining','Kerst en jubilea']} value={tab} onChange={setTab}/>
        </div>
      </div>
    </Section>
    <ReviewRow/>
    <PageEnd page="hospitality" tone="cream" kicker="wij komen" title="Naar u toe"
      body="Een private diner voor relaties of een grootschalig kerstfeest waarbij iedereen verwend mag worden. Wij worden enorm geprikkeld om bijzondere belevingen op maat te maken."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.HospitalityScreen=HospitalityScreen;
