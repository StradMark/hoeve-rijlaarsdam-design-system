function CateringScreen({onNavigate}){
  const [tab,setTab]=React.useState('Zakelijk');
  const card=(caption,image)=><RoomCard key={caption} image={image} caption={caption} ratio="4 / 3"
    readMoreLabel="Vraag aan" onReadMore={()=>onNavigate('Contact')}/>;
  return <React.Fragment>
    <HeroVideo image={IMG.chef} height={380}/>
    <QuoteBar>&ldquo;Hier komt een quote die aansluit op deze pagina&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="culinaire" title="Hoogstandjes" size="l"/>
          <Lead>Ook culinair willen wij u graag verrassen: wij werken met streekproducten en met onbespoten vruchten uit onze eigen tuin, verwerkt in arrangementen, huisgemaakte jams en likeuren. Van een walking dinner tussen de kunst tot een boerenlunch of high tea.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.voorgerecht} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="kies het" title="Perfecte diner" align="center" size="l" tone="onSage" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {card('Walking dinner',IMG.hapjes)}{card('Sit down dinner',IMG.bruiloftTafel)}{card('Shared dinner',IMG.hooibergGedekt)}
      </div>
      <div style={{marginTop:'var(--space-6)'}}>
        <RoomCard image={IMG.bediening} caption="Op locatie" ratio="21 / 9"
          meta={['Bij u op locatie','Vanaf 20 gasten']} readMoreLabel="Vraag aan" onReadMore={()=>onNavigate('Hospitality')}/>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="veel mogelijkheden" title="Voor een borrel" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {card('Borrelplanken',IMG.flatlay)}{card('Amuses',IMG.dessert)}{card('Rondje de wereld',IMG.bar)}
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="veel mogelijkheden" title="Voor een lunch" align="center" size="l" tone="onSage" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {card('Walking lunch',IMG.voorgerecht)}{card('Broodplanken',IMG.scones)}{card('High tea',IMG.macarons)}
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="wat wij nog" title="Meer bieden" align="center" size="l"/>
        <Lead align="center" width="74ch">Kies uw uitgangspunt, dan stellen wij een arrangement op maat samen. Uw wensen zijn hierbij altijd leidend — wij leveren echt maatwerk.</Lead>
        <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <TabPills tone="onLight" items={['Zakelijk','Bruiloft','Particulier']} value={tab} onChange={setTab}/>
        </div>
      </div>
    </Section>
    <ReviewRow/>
    <PageEnd page="catering" tone="sage" kicker="culinair" title="Op maat gemaakt"
      body="Van een uitgebreid diner tot een borrel met streekproducten uit eigen tuin. Onze chef stelt graag een voorstel samen dat bij uw gelegenheid past." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.CateringScreen=CateringScreen;
