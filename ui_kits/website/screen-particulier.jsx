/* Particulier — feesten, verjaardagen, jubilea. Een condoleance heeft een eigen, stillere
   pagina (screen-afscheid.jsx); die stond hier als één sectie op een pagina die "Vrolijke
   feesten" heet, en dat klopte tonaal niet. */
function ParticulierScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.koetshuisFeest} kicker="vrolijke" title="Feesten" height={440}/>
    <QuoteBar>&ldquo;Wij zijn gek op feestjes&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="uw feest" title="Volledig op maat" align="center" size="l"/>
        <Lead align="center" width="76ch">U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen, maar ook natuurlijk lekker genieten van de kunst. Wat u ook viert: uw wensen zijn leidend, en wij leveren daarmee echt maatwerk.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.bruiloftCeremonie} caption="Bruiloften" body="Trouwen tussen de kunst, met de polder als achtergrond." ratio="4 / 5" href="#Bruiloft"/>
        <ImageCaptionCard image={IMG.koetshuisFeest} caption="Feesten" body="Van besloten diner tot groot feest met live muziek." ratio="4 / 5"/>
        <ImageCaptionCard image={IMG.zoetBuffet} caption="High tea" body="Zoet uit eigen keuken, met jams uit de eigen tuin." ratio="4 / 5"/>
      </div>
    </Section>

    <TabbedDetail tone="sage" kicker="te vieren" title="Wat viert u bij ons"
      items={CONTENT.gelegenheden.map(o=>({label:o.label,title:o.title,image:IMG[o.img],body:o.body,
        ctaLabel:'Vraag offerte aan',onCta:()=>onNavigate('Contact')}))}/>

    <SplitPanel image={IMG.bar} ratio="4 / 3" background="var(--surface-cream)">
      <BenefitsPanel kicker="wij regelen" title="Het geheel" items={['Zaal naar keuze, indeling vrij','Menu van onze eigen chef','Bruidstaart en patisserie','Gastvrouwen en gastheren','Bar met eigen cocktails','Styling en tafeldecoratie','Live muziek of DJ','Rondleiding door de galerie','Gratis parkeren, circa 60 auto\u2019s','Eén aanspreekpunt van begin tot eind']} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="met liefde" title="Gemaakt" size="l"/>
          <Lead>Alles komt uit onze eigen keuken. Onze chef werkt met wat het seizoen geeft en met de kruiden en het fruit uit onze eigen tuin. Bitterballen geserveerd op een schilderspalet, met mosterd in verschillende kleuren — omdat het kan.</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Catering')}>Onze keuken</Button>
            <Button tone="outlineDark" onClick={()=>onNavigate('Hospitality')}>Catering op locatie</Button>
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
          <Lead>Afscheid nemen van een dierbare went nooit. Bij ons kan een condoleance in besloten kring plaatsvinden, in de Stal of het Koetshuis. Wij houden de locatie die dag voor u alleen, en één van ons is er de hele tijd bij.</Lead>
          <div style={{marginTop:'var(--space-6)'}}>
            <Button tone="outlineDark" onClick={()=>onNavigate('Afscheid')}>Over een afscheid</Button>
          </div>
        </div>
      </div>
    </Section>

    <PullQuote portrait={IMG.lounge} tone="sage" name="Uit een reactie van een gast">
      Met enorme toewijding en gevoel voor hospitality hebben zij onze gasten in de watten gelegd.
    </PullQuote>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen en antwoorden" align="center" size="l" tone="onDeep"/>
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
