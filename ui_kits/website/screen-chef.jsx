function ChefScreen({onNavigate}){
  const [gang,setGang]=React.useState('Diner');
  const MENU={
    Diner:[
      {caption:'Entrecote, 48 tot 51 graden',image:IMG.voorgerecht},
      {caption:'Bietjes — rauw, gerookt, gemarineerd',image:IMG.wouterPlating},
      {caption:'Amuse van het seizoen',image:IMG.hapjes}
    ],
    Ontbijt:[
      {caption:'Yoghurt met huisgemaakte granola',image:IMG.scones},
      {caption:'Roerei met truffel en Ibericoham',image:IMG.flatlay},
      {caption:'Patisserie uit eigen keuken',image:IMG.macarons}
    ],
    Zoet:[
      {caption:'Bruidstaart op maat',image:IMG.bruidstaart},
      {caption:'Macarons',image:IMG.hooibergMacarons||IMG.macarons},
      {caption:'Scones voor de high tea',image:IMG.scones}
    ]
  };
  return <React.Fragment>
    <HeroVideo image={IMG.wouterPlating} kicker="chef" title="Wouter Berghuis" height={420}/>
    <QuoteBar>&ldquo;Catering op topniveau&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="tot in de" title="Puntjes geregeld" size="l"/>
          <Lead>Hoe zet u uw gasten tijdens een feest of evenement kwaliteitsgerechten voor? Wouter Berghuis, chef-kok en patissier, weet het: met een voorbereiding die tot in de puntjes is geregeld. Van origine restaurantchef in het hogere segment, sinds 2017 met zijn eigen keuken, en sinds 2018 vast verbonden aan de hoeve. Hij verzorgt het culinaire deel, Roos Rijlaarsdam de hospitality.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.chef} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <PullQuote name="Wouter Berghuis" role="Chef-kok en patissier" tone="cream" align="center">
      In een restaurant kun je makkelijker improviseren, omdat je kleinere groepjes mensen tegelijk te eten geeft. Bij een grote groep werkt dat anders: dan moet alles tegelijk op tafel staan. Elk half uur een nieuw gerecht, voor honderdvijftig personen. Dat vergt een nauwkeurige voorbereiding.
    </PullQuote>

    <SplitPanel image={IMG.chef} imageSide="left" background="var(--surface-deep)">
      <SectionHeading kicker="een dag" title="Van tevoren" tone="onDeep"/>
      <BenefitsPanel tone="onDeep" items={[
        'Vlees op de juiste cuisson, tussen 48 en 51 graden',
        'Bietjes rauw, gerookt en daarna gemarineerd',
        'Ovens en warmtekasten mee naar de locatie',
        'Gerechten ter plekke opgemaakt',
        'Elk half uur een volgende gang op tafel',
        'Eén draaiboek voor keuken en bediening'
      ]}/>
    </SplitPanel>

    <PullQuote tone="sage" align="center">
      Ik werk graag met moderne technieken, zonder de klassiekers uit het oog te verliezen. En ik doe altijd mijn uiterste best om een verhaal in een gerecht te stoppen.
    </PullQuote>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="uit de" title="Keuken van Wouter" align="center" size="l"/>
        <Lead align="center" width="76ch">De wens van de organisator is leidend, maar het seizoen weegt even zwaar. Asperges buiten het seizoen komen hier niet op tafel.</Lead>
        <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <TabPills tone="onLight" items={['Diner','Ontbijt','Zoet']} value={gang} onChange={setGang}/>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {MENU[gang].map(g=><ImageCaptionCard key={g.caption} image={g.image} caption={g.caption}/>)}
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'1 / 1',background:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={IMG.coquilles} alt="Coquilles met radijs en viooltjes" style={{width:'100%',height:'100%',objectFit:'contain'}}/>
        </div>
        <div>
          <SectionHeading kicker="het" title="Signatuurgerecht" size="l"/>
          <Lead>Een gast in Antibes was onder de indruk van een gerechtje met coquilles. Toen hij later ging trouwen, benaderde hij Wouter met één verzoek: het diner verzorgen, en dat gerecht opnieuw op tafel.</Lead>
        </div>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.bediening} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div>
          <SectionHeading kicker="keuken en" title="Bediening als één" size="l"/>
          <Lead>Van een compleet verzorgde lunch met seminar en aansluitend een vier-gangendiner voor honderdvijftig personen, tot een feest in Antibes. Wij reizen met ons team mee naar uw locatie.</Lead>
          <div style={{marginTop:'var(--space-6)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
          </div>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="wat u kunt" title="Boeken" align="center" size="l" tone="onSage"/>
        <Lead align="center" width="76ch" tone="dark">Wouter kookt bij een evenement op de hoeve, en reist met zijn team mee naar uw locatie — ook buiten Nederland. Vertel ons de gelegenheid, dan stellen wij een voorstel samen.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {[['Event catering','Volledig verzorgde catering voor uw evenement, afgestemd op thema en gezelschap.'],
          ['Walking dinner','Kleine gerechten die worden geserveerd terwijl uw gasten rondlopen en bijpraten.'],
          ['Private dining','Een volledig verzorgd diner voor een select gezelschap, met gastvrouwen en gastheren.'],
          ['Borrel','Verfijnde bites en borrelplanken voor een receptie of informele bijeenkomst.'],
          ['Bruiloft','Van ceremonie tot dessert, met de bruidstaart uit onze eigen patisserie.'],
          ['Pop-uprestaurant','Vier gangen tussen de kunst, voor maximaal dertig gasten per avond.']].map(([t,b])=>
          <div key={t} style={{background:'var(--surface-panel-soft)',padding:'var(--space-6) var(--space-5)',textAlign:'center'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--white)'}}>{t}</div>
            <p style={{margin:'var(--space-5) 0 0',fontSize:'var(--fs-body-s)',lineHeight:1.7,color:'var(--white)'}}>{b}</p>
          </div>)}
      </div>
      <p style={{margin:'var(--space-6) 0 0',textAlign:'center',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-s)',color:'var(--cream-100)',opacity:.85}}>
        Indeling volgens wouterberghuis.nl — prijzen en arrangementen nog aan te leveren.
      </p>
    </Section>

    <PullQuote portrait={IMG.wouterRoos} tone="deep" name="Wouter Berghuis" role="Over de samenwerking met Roos">
      Roos en ik kunnen lezen en schrijven met elkaar, we delen samen een gedachte zonder deze uit te hoeven spreken. Dat komt de beleving van de gasten ten goede.
    </PullQuote>

    <PageEnd page="chef" tone="cream" kicker="culinair" title="Op maat gemaakt"
      body="Vertel ons voor wie u kookt, met hoeveel gasten en in welk seizoen. Wouter stelt een voorstel samen dat bij uw gelegenheid past." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.ChefScreen=ChefScreen;
