/* Praktisch — adres, plattegrond, bereikbaarheid, tarieven en FAQ.
   Locatie is hierin opgegaan: die pagina toonde hetzelfde adres, dezelfde route en dezelfde
   openingstijden, met alleen de plattegrond als eigen inhoud. */
function PraktischScreen({onNavigate}){
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
  const rows=(items)=>(
    <div style={{display:'flex',flexDirection:'column'}}>
      {items.map(([a,b])=>
        <div key={a} style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'var(--space-5)',padding:'12px 0',
          borderBottom:'1px solid rgba(22,25,26,.1)',fontSize:'var(--fs-body-m)',lineHeight:'var(--lh-body)'}}>
          <span style={{color:'var(--ink-900)'}}>{a}</span>
          <span style={{color:'var(--text-body)',textAlign:'right'}}>{b}</span>
        </div>)}
    </div>
  );
  return <React.Fragment>
    <HeroVideo image={IMG.gazon} kicker="alles" title="Praktisch" height={400}/>
    <QuoteBar>Nieuwveenseweg 59, Nieuwkoop &mdash; twintig minuten van Leiden en Alphen</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
        <div>
          <SectionHeading kicker="adres" title="Waar u ons vindt" size="l"/>
          <div style={{marginTop:'var(--space-5)'}}>
            {rows([['Adres','Nieuwveenseweg 59'],['Plaats','2421 LB Nieuwkoop'],
              ['Feesten en meetings','085 888 3211'],['Galerie en beeldentuin','06 - 42 57 63 95'],
              ['E-mail','info@hoeverijlaarsdam.nl']])}
          </div>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)',flexWrap:'wrap'}}>
            <Button tone="primary" href="https://maps.google.com/?q=Nieuwveenseweg+59+Nieuwkoop">Routebeschrijving</Button>
            <Button tone="outlineDark" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
          </div>
        </div>
        <div>
          <SectionHeading kicker="wanneer wij" title="Open zijn" size="l"/>
          <div style={{marginTop:'var(--space-5)'}}>
            {rows([['Galerie, maandag t/m donderdag','op afspraak'],['Galerie, vrijdag en zaterdag','11.00 - 17.00 uur'],
              ['Galerie, zondag','13.00 - 17.00 uur'],['Evenementen','in overleg, ook \u2019s avonds']])}
          </div>
          <p style={{margin:'var(--space-5) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>
            Bij een besloten evenement kan de galerie gesloten zijn. Belt u vooraf even als u speciaal voor de collectie komt.
          </p>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="het erf" title="Van bovenaf" align="center" size="l"/>
        <Lead align="center" width="76ch">
          Vier zalen, een galerie en een beeldentuin op één erf. Kies een plek op de kaart of in de lijst
          om te zien wat waar zit.
        </Lead>
      </div>
      <SitePlan image="../../assets/map-iso.png" spots={spots} title="Het erf, van bovenaf"
        onSelect={s=>s.href&&onNavigate(s.href)}
        style={{marginTop:'var(--space-8)'}}/>
      <p style={{margin:'var(--space-5) 0 0',textAlign:'center',fontSize:'var(--fs-body-s)',
        color:'var(--text-muted)'}}>
        Goud zijn de boekbare ruimtes, donker het woonhuis en het bijgebouw. Deze kaart is opgebouwd uit de
        werkplattegrond van het erf; hoogtes en dakvlakken zijn een schatting.
      </p>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="route" title="Hoe u ons bereikt" align="center" size="l"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {[{caption:'Met de auto',image:IMG.hoeve,body:'Vanaf de A4 afslag Nieuwkoop, daarna de N231. Ruim eigen parkeerterrein naast de zalen, gratis en zonder reservering.'},
          {caption:'Met openbaar vervoer',image:IMG.water,body:'Buslijn 147 vanaf station Alphen aan den Rijn stopt op vijf minuten lopen. Vanaf Leiden Centraal bent u er in een half uur.'},
          {caption:'Met de boot',image:IMG.lounge,body:'De hoeve ligt aan het water van de Nieuwkoopse Plassen. Aanleggen kan op afspraak; vraag ernaar bij uw aanvraag.'}].map(t=>(
          <div key={t.caption}>
            <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={t.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--text-accent)',marginTop:'var(--space-5)'}}>{t.caption}</div>
            <p style={{margin:'var(--space-3) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{t.body}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="handig" title="Goed om te weten" align="center" size="l"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {[['Parkeren','Gratis op eigen terrein, circa 60 auto\u2019s. Bij grote bijeenkomsten komen er aangrenzend 50 plaatsen bij.'],
          ['Toegankelijkheid','De locatie is grotendeels rolstoelvriendelijk. Laat het ons weten, dan houden wij er bij de indeling rekening mee.'],
          ['Besloten dagen','Bij een besloten evenement is de galerie gesloten. Belt u vooraf als u speciaal voor de collectie komt.']].map(([t,b])=>
          <div key={t}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--text-accent)'}}>{t}</div>
            <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{b}</p>
          </div>)}
      </div>
    </Section>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-7)'}}>
        <SectionHeading kicker="tarieven" title="Huur van de vergaderlocatie" align="center" size="l" tone="onDeep"/>
        <p style={{maxWidth:'74ch',margin:'var(--space-5) auto 0',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:'var(--text-on-dark)'}}>{PRIJZEN.inbegrepen} Tarieven voor feesten, bruiloften en de galerie op aanvraag.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
        <PriceList kicker="Zaalhuur" tone="onDeep" items={PRIJZEN.zaalhuur} note={PRIJZEN.btwNoot}/>
        <PriceList kicker="Extra&rsquo;s" tone="onDeep" items={PRIJZEN.extras}/>
      </div>
    </Section>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen en antwoorden" align="center" size="l"/>
      </div>
      <FaqAccordion tone="onLight" items={FAQ_ITEMS}/>
    </Section>

    <PageEnd page="praktisch" tone="sage" kicker="welkom" title="Kom eens langs"
      body="Wij laten u het erf graag zien voordat u kiest. Een rondleiding duurt een half uur en is vrijblijvend."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.PraktischScreen=PraktischScreen;
