const GALERIE_VIEWS={
  'Galerie':{
    hero:'koetshuisRondleiding',kicker:'welkom in de',title:'Galerie',
    quote:'Verkocht, bezichtigd, gerestaureerd en getaxeerd',
    lead:'Drie expositieruimtes, één collectie: negentiende- en twintigste-eeuwse meesters naast hedendaags werk. U loopt vrij binnen tijdens de openingstijden, en op afspraak nemen wij u mee langs de collectie. Werk kan bij ons worden gekocht, bezichtigd, gerestaureerd en getaxeerd.',
    photo:'stal'
  },
  'Beeldentuin':{
    hero:'beeldentuinVogels',kicker:'twee hectare',title:'Beeldentuin',
    quote:'Circa zeventig sculpturen, van brons tot glas',
    lead:'Rondom de hoeve ligt twee hectare beeldentuin met circa zeventig sculpturen — van realisme tot abstract, van brons tot keramiek en glas. De tuin is vrij te bezoeken tijdens de openingstijden van de galerie, en dient bij evenementen als buitenruimte voor ceremonies, walking dinners en exposities.',
    photo:'beeldentuinVogel'
  }
};

function GalerieScreen({view='Galerie',onNavigate}){
  const d=GALERIE_VIEWS[view];
  const [room,setRoom]=React.useState('Stal');
  const ROOMS={
    'Stal':{img:'stal',body:'Ruim honderdtien jaar oud, met de originele houten palen in het midden. Hier hangt werk van de Haagse en Leidsche school.'},
    'Koetshuis':{img:'koetshuisExpo',body:'De grootste expositieruimte, met hoge wanden en veel licht. Ook de zaal waar exposities en veilingen plaatsvinden.'},
    'Grote zaal':{img:'koetshuisRondleiding',body:'Ruimte voor grote formaten en wisselende presentaties, direct naast de entree van de galerie.'}
  };
  return <React.Fragment>
    <HeroVideo image={IMG[d.hero]} kicker={d.kicker} title={d.title} height={440}/>
    <QuoteBar>&ldquo;{d.quote}&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="over de" title={view==='Galerie'?'Collectie':'Tuin'} size="l"/>
          <Lead>{d.lead}</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Contact')}>Plan een bezoek</Button>
            <Button tone="outline" onClick={()=>onNavigate(view==='Galerie'?'Beeldentuin':'Galerie')}>
              {view==='Galerie'?'Naar de beeldentuin':'Naar de galerie'}
            </Button>
          </div>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG[d.photo]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    {view==='Galerie'&&(
      <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
        <div style={{textAlign:'center'}}>
          <SectionHeading kicker="drie" title="Expositieruimtes" align="center" size="l" tone="onSage"/>
          <Lead align="center" width="72ch" tone="dark">Elke ruimte heeft zijn eigen karakter, en daarmee zijn eigen werk aan de wand.</Lead>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <TabPills items={Object.keys(ROOMS)} value={room} onChange={setRoom} tone="onSage"/>
        </div>
        <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1.15fr 1fr',
          gap:'var(--space-7)',alignItems:'center'}}>
          <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
            <img src={IMG[ROOMS[room].img]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div>
            <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-display-s)',
              color:'var(--white)'}}>{room}</h3>
            <Lead tone="dark" width="46ch">{ROOMS[room].body}</Lead>
          </div>
        </div>
      </Section>
    )}

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="wat u hier" title="Kunt doen" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.workshop} caption="Schilderworkshop" body="Onder begeleiding zelf aan het werk, tussen de collectie."/>
        <ImageCaptionCard image={IMG.beeldentuinVogel} caption="Rondleiding" body="Op afspraak nemen wij u mee langs de collectie en de tuin."/>
        <ImageCaptionCard image={IMG.macarons} caption="Theehuis De Hooiberg" body="Koffie en gebak op het terras, met weids uitzicht over de polder."/>
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
