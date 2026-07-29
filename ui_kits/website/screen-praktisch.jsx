function PraktischScreen({onNavigate}){
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
    <HeroVideo image={IMG.water} kicker="alles" title="Praktisch" height={380}/>
    <QuoteBar>&ldquo;Wij zijn goed bereikbaar&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
        <div>
          <SectionHeading kicker="waar u ons" title="Vindt" size="l"/>
          <div style={{marginTop:'var(--space-5)'}}>
            {rows([['Adres','Nieuwveenseweg 59'],['Plaats','2421 LB Nieuwkoop'],['Telefoon','06 - 42 57 63 95'],
              ['E-mail','info@rijlaarsdam.nl'],['Feesten en meetings','085 888 3211']])}
          </div>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)',flexWrap:'wrap'}}>
            <Button tone="primary" onClick={()=>onNavigate('Locatie')}>Bekijk het erf</Button>
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

    <Section pad="0 var(--space-8) var(--section-y-tight)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="hoe u ons" title="Bereikt" align="center" size="l"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {[{caption:'Met de auto',image:IMG.hoeve,body:'Vanaf de A4 of de N231 rijdt u in twintig minuten de polder in. Het erf ligt direct aan de Nieuwveenseweg; parkeren is gratis op eigen terrein.'},
          {caption:'Met openbaar vervoer',image:IMG.water,body:'Vanaf station Alphen aan den Rijn of Breukelen rijdt de bus tot Nieuwkoop, daarna is het tien minuten lopen.'},
          {caption:'Met de fiets',image:IMG.lounge,body:'Komt u uit de omgeving? Via het fietsknooppuntennetwerk rijdt u dwars door de plassen naar de Hoeve.'}].map(t=>(
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
        <SectionHeading kicker="goed om te" title="Weten" align="center" size="l"/>
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

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="huur van de" title="Vergaderlocatie" align="center" size="l"/>
        <Lead align="center" width="74ch">Inclusief gebruik van het 75-inch tv-scherm, flip-over, vergaderbox en gratis wifi. Genoemde bedragen zijn exclusief btw en exclusief catering.</Lead>
      </div>
      <div style={{maxWidth:620,margin:'var(--space-7) auto 0'}}>
        {rows([['Dagdeel, 9.00 - 13.00 uur','\u20ac 395'],['Dagdeel, 13.00 - 17.00 uur','\u20ac 395'],
          ['Avond, vanaf 18.00 uur','\u20ac 475'],['Hele dag, 9.00 - 17.00 uur','\u20ac 525']])}
      </div>
      <p style={{margin:'var(--space-5) auto 0',maxWidth:620,textAlign:'center',fontSize:'var(--fs-body-s)',color:'var(--text-body)'}}>
        Tarieven voor feesten, bruiloften en de galerie op aanvraag.
      </p>
    </Section>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen" align="center" size="l" tone="onDeep"/>
      </div>
      <FaqAccordion items={FAQ_ITEMS}/>
    </Section>

    <PageEnd page="praktisch" tone="sage" kicker="de plek" title="Waar alles samenkomt"
      body="Komt u langs om de locatie te bekijken? U bent vrijblijvend welkom — wij zetten de koffie klaar."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.PraktischScreen=PraktischScreen;
