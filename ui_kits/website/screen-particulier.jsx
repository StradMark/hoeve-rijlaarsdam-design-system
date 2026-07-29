/* Particulier — feesten, verjaardagen, jubilea, en condoleance in een eigen, stillere sectie. */
function ParticulierScreen({onNavigate}){
  const [gelegenheid,setGelegenheid]=React.useState('Feesten');
  const G={
    Feesten:['Vrolijke feesten','Wij zijn gek op feestjes. Bitterballen op een schilderspalet met mosterd in verschillende kleuren, de bar in de Hooiberg open en dansen tot de laatste gast weg is.','koetshuisFeest'],
    Verjaardagen:['Zorgeloze verjaardagen','Van een besloten diner in de Stal tot een groot feest in het Koetshuis. U bedenkt de gelegenheid, wij regelen de rest.','hooibergGedekt'],
    Jubilea:['Iets te vieren','Een huwelijksjubileum, een afscheid of een mijlpaal. Vaak een lange tafel, een menu van onze chef en een rondleiding door de galerie tussen de gangen.','bruiloftTafel'],
    'High tea':['Zoet uit eigen keuken','Scones, macarons en huisgemaakte jams uit onze eigen tuin — zo zoet van zichzelf dat er bijna geen suiker aan toe hoeft.','scones']
  };
  const g=G[gelegenheid];
  return <React.Fragment>
    <HeroVideo image={IMG.koetshuisFeest} kicker="vrolijke" title="Feesten" height={440}/>
    <QuoteBar>&ldquo;Wij zijn gek op feestjes&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="uw feest" title="Volledig op maat" align="center" size="l"/>
        <Lead align="center" width="76ch">U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen, maar ook natuurlijk lekker genieten van de kunst. Wat u ook viert: uw wensen zijn leidend, en wij leveren daarmee echt maatwerk.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.bruiloftCeremonie} caption="Bruiloften" body="Trouwen tussen de kunst, met de polder als achtergrond." ratio="4 / 5" onClick={()=>onNavigate('Bruiloft')}/>
        <ImageCaptionCard image={IMG.koetshuisFeest} caption="Feesten" body="Van besloten diner tot groot feest met live muziek." ratio="4 / 5"/>
        <ImageCaptionCard image={IMG.zoetBuffet} caption="High tea" body="Zoet uit eigen keuken, met jams uit de eigen tuin." ratio="4 / 5"/>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="wat viert u" title="Bij ons?" align="center" size="l" tone="onSage"/>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
        <TabPills tone="onSage" items={Object.keys(G)} value={gelegenheid} onChange={setGelegenheid}/>
      </div>
      <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1.15fr 1fr',
        gap:'var(--space-7)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG[g[2]]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div>
          <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-display-s)',
            color:'var(--white)'}}>{g[0]}</h3>
          <Lead width="46ch" tone="onSage">{g[1]}</Lead>
          <div style={{marginTop:'var(--space-5)'}}>
            <Button tone="onSage" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
          </div>
        </div>
      </div>
    </Section>

    <SplitPanel image={IMG.bar} ratio="4 / 3">
      <BenefitsPanel kicker="wij regelen" title="Het geheel" items={['Zaal naar keuze, indeling vrij','Menu van onze eigen chef','Bruidstaart en patisserie','Gastvrouwen en gastheren','Bar met eigen cocktails','Styling en tafeldecoratie','Live muziek of DJ','Rondleiding door de galerie','Gratis parkeren, circa 60 auto\u2019s','Eén aanspreekpunt van begin tot eind']} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="met liefde" title="Gemaakt" size="l"/>
          <Lead>Alles komt uit onze eigen keuken. Onze chef werkt met wat het seizoen geeft en met de kruiden en het fruit uit onze eigen tuin. Bitterballen geserveerd op een schilderspalet, met mosterd in verschillende kleuren — omdat het kan.</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Chef')}>Onze chef</Button>
            <Button tone="outline" onClick={()=>onNavigate('Hospitality')}>Catering op locatie</Button>
          </div>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG.hapjes} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG.water} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div>
          <SectionHeading kicker="afscheid nemen" title="Van een dierbare" size="l"/>
          <Lead>Afscheid nemen van een dierbare went nooit. Bij ons kan een condoleance in besloten kring plaatsvinden, in de Stal of het Koetshuis, met koffie en iets zoets uit eigen keuken. Wij houden de locatie die dag voor u alleen, en één van ons is er de hele tijd bij.</Lead>
          <p style={{margin:'var(--space-5) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
            color:'var(--ink-500)'}}>Voor een condoleance belt u liever dan dat u mailt. Roos is bereikbaar op
            <span style={{color:'var(--green-700)'}}> 06 58 98 59 63</span>.</p>
        </div>
      </div>
    </Section>

    <PullQuote portrait={IMG.lounge} tone="deep" name="Uit een reactie van een gast">
      Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd.
    </PullQuote>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen" align="center" size="l" tone="onDeep"/>
      </div>
      <FaqAccordion items={[
        {question:'Hoeveel gasten kunnen wij uitnodigen?',answer:'In het Koetshuis tot 250 gasten. De Hooiberg boven is er voor groepen tot 30 personen, en in de Stal past een besloten gezelschap.'},
        {question:'Tot hoe laat mag het feest doorgaan?'},
        {question:'Kunnen wij eigen muziek of een DJ meenemen?'},
        {question:'Verzorgen jullie ook de taart?'},
        {question:'Is de galerie open tijdens ons feest?'},
        {question:'Kunnen wij eerst langskomen om te kijken?'}
      ]}/>
    </Section>

    <PageEnd page="particulier" tone="sage" kicker="uw droomfeest" title="Volledig op maat"
      body="Vertel ons wat u viert, dan gaan wij graag met u rond de tafel — onder het genot van een kop koffie."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.ParticulierScreen=ParticulierScreen;
