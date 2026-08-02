/* Catering — één menusectie met pillen in plaats van drie bijna gelijke rasters.
   De chef stond eerder op een eigen pagina van twaalf blokken; die is hierin opgegaan als
   één blok — wie catering overweegt wil weten wie er kookt, maar niet zíjn hele verhaal. */

function CateringScreen({onNavigate}){
  const [gang,setGang]=React.useState('Diner');
  return <React.Fragment>
    <HeroVideo image={IMG.chef} kicker="culinair" title="Uit eigen keuken" height={380}/>
    <QuoteBar>&ldquo;Catering op topniveau&rdquo;</QuoteBar>

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
      <SectionHeading kicker="kies het" title="Perfecte menu" align="center" size="l" tone="onSage" style={{textAlign:'center'}}/>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
        <TabPills tone="onSage" items={Object.keys(CONTENT.cateringMenu)} value={gang} onChange={setGang}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-6)'}}>
        {CONTENT.cateringMenu[gang].map(([caption,img])=>
          <RoomCard key={caption} image={IMG[img]} caption={caption} ratio="4 / 3" tone="onSage"
            readMoreLabel="Vraag aan" onReadMore={()=>onNavigate('Contact')}/>)}
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="en verder" title="Ook bij u op locatie" align="center" size="l"/>
        <Lead align="center" width="72ch">Onze keuken en onze mensen komen naar u toe, met draaiboek en aansturing op de dag. Vanaf twintig gasten, ook buiten Nederland.</Lead>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)',flexWrap:'wrap'}}>
          <Button tone="primary" onClick={()=>onNavigate('Hospitality')}>Hospitality op locatie</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Pop-up')}>Ons pop-uprestaurant</Button>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.wouterPlating} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div>
          <SectionHeading kicker="onze chef" title="Wouter Berghuis" size="l"/>
          <Lead>Van origine restaurantchef in het hogere segment, sinds 2018 vast verbonden aan de hoeve. Hij verzorgt het culinaire deel, Roos Rijlaarsdam de hospitality. Werkt met moderne technieken zonder de klassiekers uit het oog te verliezen — en met wat het seizoen geeft: asperges buiten het seizoen komen hier niet op tafel.</Lead>
        </div>
      </div>
    </Section>

    <PullQuote name="Wouter Berghuis" role="Chef-kok en patissier" tone="deep" align="center">
      In een restaurant kun je makkelijker improviseren, omdat je kleinere groepjes mensen tegelijk te eten geeft. Bij een grote groep werkt dat anders: dan moet alles tegelijk op tafel staan. Elk half uur een nieuw gerecht, voor honderdvijftig personen. Dat vergt een nauwkeurige voorbereiding.
    </PullQuote>

    <TabbedDetail tone="cream" kicker="daarnaast" title="Wat wij nog meer bieden"
      lead="Kies uw uitgangspunt, dan stellen wij een arrangement op maat samen. Uw wensen zijn hierbij altijd leidend — wij leveren echt maatwerk."
      items={[
        {label:'Zakelijk',image:IMG.hapjes,body:'Lunches, borrels en diners op de vergaderdag, of een volledig verzorgd bedrijfsfeest. Wij leveren ook op uw eigen locatie.'},
        {label:'Bruiloft',image:IMG.bruiloftTaart,body:'Van de eerste toost tot de bruidstaart uit onze eigen patisserie, met een menu dat wij samen met u samenstellen.'},
        {label:'Particulier',image:IMG.scones,body:'Een verjaardag, een jubileum of een high tea: scones, macarons en jams uit de eigen tuin.'}
      ]}/>
    <ReviewRow/>
    <PageEnd page="catering" tone="sage" kicker="op maat" title="Voor uw gelegenheid"
      body="Van een uitgebreid diner tot een borrel met streekproducten uit eigen tuin. Onze chef stelt graag een voorstel samen dat bij uw gelegenheid past." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.CateringScreen=CateringScreen;
