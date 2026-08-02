function BruiloftScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.bruiloftCeremonie} kicker="romantische" title="Bruiloften" height={440}/>
    <QuoteBar>&ldquo;Ruimtelijk, rustig en liefdevol&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="de mooiste" title="Dag van uw leven" align="center" size="l"/>
        <Lead align="center" width="76ch">Een bijzondere trouwlocatie, samen te vatten als ruimtelijk, rustig en liefdevol. U trouwt tussen de kunst, in twee hectare beeldentuin, met de polder als achtergrond. Uw wensen zijn hierbij altijd leidend — wij leveren daarmee echt maatwerk.</Lead>
      </div>
    </Section>

    <SplitPanel image={IMG.bruiloftStoelen} ratio="4 / 3">
      <BenefitsPanel kicker="alles op" title="Één adres" items={['Ceremonie in de beeldentuin','Binnenlocatie als achterwacht','Diner van onze eigen chef','Bruidstaart uit eigen patisserie','Gastvrouwen en gastheren','Bar in de Hooiberg','Twee hectare voor de fotograaf','Capaciteit tot 250 gasten','Gratis parkeren, circa 60 auto\u2019s','Eén aanspreekpunt van begin tot eind']} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <TabbedDetail tone="cream" kicker="het verloop" title="Van de dag"
      lead="Een dag zoals wij hem vaak zien. Niets hiervan staat vast — kies het moment om te zien wat er dan gebeurt."
      items={CONTENT.bruiloftsdag.map(d=>({label:d.label,image:IMG[d.img],body:d.body}))}/>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="wat het" title="Bijzonder maakt" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.beeldentuinBruidspaar} caption="Trouwen tussen de kunst" body="Zeventig sculpturen in twee hectare tuin — nergens dezelfde achtergrond."/>
        <ImageCaptionCard image={IMG.bruiloftTaart} caption="Eigen patisserie" body="De bruidstaart komt uit dezelfde keuken als het diner."/>
        <ImageCaptionCard image={IMG.hooibergBruid} caption="Eén aanspreekpunt" body="Van de eerste kop koffie tot de laatste gast: dezelfde mensen."/>
      </div>
    </Section>

    <PullQuote portrait={IMG.bruiloftUitloop} tone="sage" name="Uit een reactie van een bruidspaar">
      Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd.
    </PullQuote>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen en antwoorden" align="center" size="l" tone="onDeep"/>
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
