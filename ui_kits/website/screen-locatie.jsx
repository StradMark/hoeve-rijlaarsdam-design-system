function LocatieScreen({onNavigate}){
  /* Coördinaten horen bij de ISOMETRISCHE kaart (assets/map-iso.png): de punten staan op de nok
     van elk volume. Ze gelden niet voor de vlakke plattegrond — die heeft een eigen set. */
  const spots=[
    {name:'Woonhuis',x:69.56,y:25.12,w:2.8,h:3.8,image:IMG.hoeve,
     body:'Het monumentale voorhuis aan de Nieuwveenseweg. Hier vindt u ons kantoor.'},
    {name:'De Stal',x:64.65,y:35.2,w:2.8,h:3.8,image:IMG.stal,
     body:'Ruim 110 jaar oud, nu expositieruimte en zaal voor 60 gasten.',href:'Stal'},
    {name:'De Hooiberg',x:55.46,y:43.75,w:2.8,h:3.8,image:IMG.hooiberg,
     body:'De vijfhoekige berg; boven plaats voor maximaal 30 gasten.',href:'Hooiberg'},
    {name:'Het Koetshuis',x:65.79,y:48.39,w:2.8,h:3.8,side:'left',image:IMG.koetshuisFeest,
     body:'De grote zaal met eigen entree en bar, tot 250 gasten.',href:'Koetshuis'},
    {name:'Ontwikkelatelier',x:55.44,y:57.58,w:2.8,h:3.8,side:'left',image:IMG.atelier,
     body:'De oude lijstenmakerij, nu atelier en werkruimte voor kleine groepen.',href:'Ontwikkelatelier'},
    {name:'Beeldentuin',x:34.33,y:32.54,w:2.8,h:3.8,image:IMG.beeldentuinVogels,
     body:'Bronzen beelden tussen de hagen, de boomgaard en het water.',href:'Beeldentuin'},
    {name:'Parkeren',x:41.8,y:69.35,w:2.8,h:3.8,side:'left',
     body:'Ruim eigen terrein direct naast de zalen. Gratis, geen reservering nodig.'},
    {name:'Water',x:24.39,y:40.04,w:2.8,h:3.8,image:IMG.water,
     body:'De sloot langs het voorhuis loopt uit op de vijver bij de entree.'}
  ];
  return <React.Fragment>
    <HeroVideo image={IMG.gazon} kicker="de plek" title="Waar alles samenkomt" height={420}/>
    <QuoteBar>Nieuwveenseweg 59, Nieuwkoop &mdash; twintig minuten van Leiden en Alphen</QuoteBar>

    <Section pad="var(--section-y) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="alles over" title="Onze locatie" align="center" size="l"/>
        <Lead align="center" width="76ch">
          Vier zalen, een galerie en een beeldentuin op één erf. Op de plattegrond ziet u hoe alles ligt &mdash;
          kies een plek op de kaart of in de lijst.
        </Lead>
      </div>
      <SitePlan image="../../assets/map-iso.png" spots={spots} title="Het erf, van bovenaf"
        onSelect={s=>s.href&&onNavigate(s.href)}
        style={{marginTop:'var(--space-8)'}}/>
      <p style={{margin:'var(--space-5) 0 0',textAlign:'center',fontSize:'var(--fs-body-s)',
        color:'var(--text-muted)'}}>
Goud zijn de boekbare ruimtes, donker het woonhuis en het bijgebouw. Deze kaart is opgebouwd uit de
        werkplattegrond van het erf; hoogtes en dakvlakken zijn een schatting en de zonnepanelen ontbreken nog.
      </p>
    </Section>

    <Section tone="sage" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="wij zijn goed" title="Bereikbaar" align="center" size="l" tone="onSage"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-6)',
        marginTop:'var(--space-7)'}}>
        {[
          {t:'Met de auto',b:'Vanaf de A4 afslag Nieuwkoop, daarna de N231. Ruim eigen parkeerterrein naast de zalen, gratis en zonder reservering.'},
          {t:'Met het openbaar vervoer',b:'Buslijn 147 vanaf station Alphen aan den Rijn stopt op vijf minuten lopen. Vanaf Leiden Centraal bent u er in een half uur.'},
          {t:'Met de boot',b:'De hoeve ligt aan het water van de Nieuwkoopse Plassen. Aanleggen kan op afspraak; vraag ernaar bij uw aanvraag.'}
        ].map(c=>(
          <div key={c.t}>
            <h4 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
              fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
              color:'var(--white)'}}>{c.t}</h4>
            <p style={{margin:'var(--space-3) 0 0',fontSize:'var(--fs-body-s)',
              lineHeight:'var(--lh-body)',color:'var(--cream-100)'}}>{c.b}</p>
          </div>
        ))}
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-7)'}}>
        <Button tone="onSage" variant="outline"
          href="https://maps.google.com/?q=Nieuwveenseweg+59+Nieuwkoop">Routebeschrijving</Button>
      </div>
    </Section>

    <PageEnd page="locatie" tone="cream" kicker="kom eens" title="Langs"
      body="Wij laten u het erf graag zien voordat u kiest. Een rondleiding duurt een half uur en is vrijblijvend."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
Object.assign(window,{LocatieScreen});
