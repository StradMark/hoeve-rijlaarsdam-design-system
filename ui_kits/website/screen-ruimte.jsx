const ROOM_DATA={
  'Koetshuis':{
    hero:'koetshuisOntvangst',kicker:'een kijkje in',title:'Het Koetshuis',
    quote:'De grootste zaal, met uitzicht over de polder',
    lead:'Een congres, symposium of seminar krijgt een grote meerwaarde door een inspirerende locatie. Onze grote expositieruimte — het Koetshuis — heeft een capaciteit van 250 gasten en een uitstekend akoestisch vermogen, en kan op verschillende manieren worden ingericht. U mag altijd vrijblijvend komen bezichtigen.',
    photo:'koetshuisExpo',panel:'koetshuisFeest',meta:['250 gasten','Grote expositieruimte'],
    facts:['Gratis wifi','75 inch tv-scherm','Flip-over en vergaderbox','Flexibele zaalopstellingen','Capaciteit tot 250 gasten','Uitstekende akoestiek','Catering uit eigen keuken','Uitzicht over de polder','Beeldentuin van twee hectare','Gratis parkeren, circa 60 auto\u2019s','50 extra plaatsen op aanvraag','Grotendeels rolstoelvriendelijk'],
    setupsTitle:'Veel opstellingen',
    setupsLead:'Van carré tot theater: wij bouwen de zaal om naar wat uw programma vraagt. Twijfelt u over de beste vorm? Wij denken graag met u mee over de mogelijkheden.',
    setups:['Carré','U-vorm','Theater','Cabaret','Eiland','Diner']
  },
  'Hooiberg':{
    hero:'hooiberg',kicker:'een kijkje in',title:'De Hooiberg',
    quote:'Rondom glas, met de polder als achtergrond',
    lead:'De verbouwde hooiberg heeft een eigen bar en veel glas. Op de eerste etage ligt een vergaderruimte die volledig door ramen wordt omringd, met uitzicht over de polder en de beeldentuin, voor maximaal dertig personen. Beneden ontvangt u uw gasten voor een receptie of een borrel.',
    photo:'hooibergFlipover',panel:'hooibergTafels',meta:['30 gasten boven','Eigen bar'],
    facts:['Eigen bar','Vergaderruimte op de eerste etage','Maximaal 30 personen boven','Rondom ramen','Uitzicht over polder en beeldentuin','Terras met weids uitzicht','Theehuis met koffie en gebak','Catering uit eigen keuken','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'De hooiberg is de plek voor het informele deel van de dag — en boven voor het werk dat concentratie vraagt.',
    setups:['Receptie','Verjaardag','Netwerkborrel','Vergadering','Brainstorm','Borrel na het diner']
  },
  'Stal':{
    hero:'stal',kicker:'een kijkje in',title:'De Stal',
    quote:'Ruim honderdtien jaar oud, met de balken nog in het zicht',
    lead:'De voormalige stal is ruim honderdtien jaar oud en heeft houten palen in het midden. Aan de wanden hangt werk van de Haagse en Leidsche school. Het is de meest intieme van de drie expositieruimtes — voor een meeting, een wijnproeverij of een diner in klein gezelschap.',
    photo:'stal',panel:'stal',meta:['Intiem','Haagse en Leidsche school'],
    facts:['Ruim 110 jaar oud','Originele houten palen en balken','Werk van de Haagse en Leidsche school','Intieme sfeer','Catering uit eigen keuken','Geschikt voor private dining','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'Kleiner en geconcentreerder dan het Koetshuis. Alles wat gesprek vraagt in plaats van een podium.',
    setups:['Meeting','Wijnproeverij','Private dining','Bestuursoverleg','Expositie','Ontvangst']
  },
  'Ontwikkelatelier':{
    hero:'atelier',kicker:'een kijkje in',title:'Het Ontwikkelatelier',
    quote:'De oude lijstenmakerij, nu een plek om te werken',
    lead:'De oude lijstenmakerij is verbouwd tot coachings- en trainingsruimte met uitzicht over het land. Kleiner dan de andere ruimtes, en juist daarom de plek voor sessies waarin iedereen aan het woord komt.',
    photo:'atelier',panel:'workshop',meta:['Kleine groepen','Coaching en training'],
    facts:['Uitzicht over het land','Geschikt voor kleine groepen','Coaching en training','Flip-over aanwezig','Catering uit eigen keuken','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'Voor sessies waarin de groep klein blijft en de dag een resultaat moet opleveren.',
    setups:['Coaching','Bestuurssessie','Strategiesessie','Workshop','Training','Eén-op-één']
  }
};

function RuimteScreen({room='Koetshuis',onNavigate}){
  const d=ROOM_DATA[room]||ROOM_DATA['Koetshuis'];
  const others=Object.keys(ROOM_DATA).filter(r=>r!==room);
  return <React.Fragment>
    <HeroVideo image={IMG[d.hero]} kicker={d.kicker} title={d.title} height={440}/>
    <QuoteBar>&ldquo;{d.quote}&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="handige" title="Informatie" size="l"/>
          <Lead>{d.lead}</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG[d.photo]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <SplitPanel image={IMG[d.panel]} ratio="4 / 3">
      <BenefitsPanel kicker="alle" title="Faciliteiten" items={d.facts} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="oneindig" title={d.setupsTitle} align="center" size="l"/>
        <Lead align="center" width="76ch">{d.setupsLead}</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {d.setups.map(n=>(
          <InfoTile key={n} title={n} body="Korte toelichting bij deze opstelling: voor welke groep en welk soort programma hij werkt."/>
        ))}
      </div>
    </Section>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen" align="center" size="l" tone="onDeep"/>
      </div>
      <FaqAccordion items={FAQ_ITEMS}/>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="bekijk ook onze" title="Andere ruimtes" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {others.map(r=>(
          <RoomCard key={r} image={IMG[ROOM_DATA[r].hero]} caption={r}
            meta={ROOM_DATA[r].meta}
            onReadMore={()=>onNavigate(r)}/>
        ))}
      </div>
    </Section>

    <PageEnd page="ruimte" tone="sage" kicker="landelijk" title="Waar alles samenkomt"
      body="U mag de locatie altijd vrijblijvend komen bezichtigen. Wij gaan graag met u rond de tafel — onder het genot van een kop koffie." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.RuimteScreen=RuimteScreen;
