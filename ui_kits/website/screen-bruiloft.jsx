const WEDDING_DAY=[
  ['Ontvangst','Uw gasten komen aan op het erf en worden ontvangen met bubbels en warme hapjes, tussen de sculpturen in de beeldentuin.'],
  ['Ceremonie','In de beeldentuin onder de bomen, of binnen in het Koetshuis als het weer daar niet aan meewerkt. Beide zijn voorbereid.'],
  ['Borrel','Een lange borrel op het gazon met uitzicht over de polder, terwijl de zaal wordt omgebouwd voor het diner.'],
  ['Diner','Een diner van onze chef in het Koetshuis of de Stal — sit down, walking dinner of een lange tafel.'],
  ['Feest','De bar in de Hooiberg gaat open, de festoonverlichting aan, en er wordt gedanst tot de laatste gast weg is.']
];

function BruiloftScreen({onNavigate}){
  const [moment,setMoment]=React.useState('Ontvangst');
  const MOMENT_IMG={Ontvangst:'bruiloftPoort',Ceremonie:'bruiloftCeremonie',Borrel:'bruiloftTuin',
    Diner:'bruiloftTafel',Feest:'lounge'};
  return <React.Fragment>
    <HeroVideo image={IMG.bruiloftCeremonie} kicker="romantische" title="Bruiloften" height={440}/>
    <QuoteBar>&ldquo;Ruimtelijk, rustig en liefdevol&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="de mooiste dag" title="Van uw leven" align="center" size="l"/>
        <Lead align="center" width="76ch">Een bijzondere trouwlocatie, samen te vatten als ruimtelijk, rustig en liefdevol. U trouwt tussen de kunst, in twee hectare beeldentuin, met de polder als achtergrond. Uw wensen zijn hierbij altijd leidend — wij leveren daarmee echt maatwerk.</Lead>
      </div>
    </Section>

    <SplitPanel image={IMG.bruiloftStoelen} ratio="4 / 3">
      <BenefitsPanel kicker="alles op" title="Één adres" items={['Ceremonie in de beeldentuin','Binnenlocatie als achterwacht','Diner van onze eigen chef','Bruidstaart uit eigen patisserie','Gastvrouwen en gastheren','Bar in de Hooiberg','Twee hectare voor de fotograaf','Capaciteit tot 250 gasten','Gratis parkeren, circa 60 auto\u2019s','Eén aanspreekpunt van begin tot eind']} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="het verloop" title="Van de dag" align="center" size="l"/>
        <Lead align="center" width="72ch">Een dag zoals wij hem vaak zien. Niets hiervan staat vast — kies het moment om te zien wat er dan gebeurt.</Lead>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
        <TabPills items={WEDDING_DAY.map(d=>d[0])} value={moment} onChange={setMoment} tone="onLight"/>
      </div>
      <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1.15fr 1fr',
        gap:'var(--space-7)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG[MOMENT_IMG[moment]]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div>
          <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-display-s)',
            color:'var(--ink-900)'}}>{moment}</h3>
          <Lead width="46ch">{(WEDDING_DAY.find(d=>d[0]===moment)||[])[1]}</Lead>
        </div>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="wat het" title="Bijzonder maakt" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.beeldentuinBruidspaar} caption="Trouwen tussen de kunst" body="Zeventig sculpturen in twee hectare tuin — nergens dezelfde achtergrond."/>
        <ImageCaptionCard image={IMG.bruiloftTaart} caption="Eigen patisserie" body="De bruidstaart komt uit dezelfde keuken als het diner."/>
        <ImageCaptionCard image={IMG.hooibergBruid} caption="Eén aanspreekpunt" body="Van de eerste kop koffie tot de laatste gast: dezelfde mensen."/>
      </div>
    </Section>

    <PullQuote portrait={IMG.bruiloftUitloop} tone="deep" name="Uit een reactie van een bruidspaar">
      Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd.
    </PullQuote>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen" align="center" size="l" tone="onDeep"/>
      </div>
      <FaqAccordion items={[
        {question:'Kunnen wij bij jullie trouwen, of alleen het feest houden?',answer:'Beide. De ceremonie kan in de beeldentuin of binnen in het Koetshuis; wij overleggen met u en de gemeente wat daarvoor nodig is.'},
        {question:'Wat gebeurt er als het regent?'},
        {question:'Hoeveel gasten kunnen wij uitnodigen?'},
        {question:'Verzorgen jullie ook de bruidstaart?'},
        {question:'Tot hoe laat mag het feest doorgaan?'},
        {question:'Kunnen wij de locatie eerst komen bekijken?'}
      ]}/>
    </Section>

    <PageEnd page="bruiloft" tone="cream" kicker="uw droomdag" title="Volledig op maat"
      body="Vertel ons uw plannen, dan gaan wij graag met u rond de tafel — onder het genot van een kop koffie. Uw wensen zijn leidend."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.BruiloftScreen=BruiloftScreen;
