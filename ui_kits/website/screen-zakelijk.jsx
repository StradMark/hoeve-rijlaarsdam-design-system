/* Zakelijk — meetings, congressen, workshops, bedrijfsfeesten.
   Alle bedragen komen uit prijzen.jsx; typ hier nooit een prijs. */

function ZakelijkScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.koetshuisBijeenkomst} kicker="landelijk" title="Vergaderen" height={440}/>
    <QuoteBar>&ldquo;Even weg van de stad, zonder een uur te rijden&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="ruimte voor" title="Uw bijeenkomst" size="l"/>
          <Lead>Een monumentale boerderij op twintig minuten van Amsterdam en Utrecht, met vier zalen, twee hectare beeldentuin en een eigen keuken. Vergaderen tussen de kunst werkt anders dan vergaderen in een zaaltje langs de snelweg — en dat is precies de bedoeling.</Lead>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-4)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
            <Button tone="outlineDark" onClick={()=>onNavigate('Praktisch')}>Praktische informatie</Button>
          </div>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG.hooibergFlipover} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="waarvoor" title="U bij ons terecht kunt" align="center" size="l" tone="onSage"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <RoomCard tone="onSage" image={IMG.hooibergFlipover} caption="Vergaderen" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Hooiberg')}/>
        <RoomCard tone="onSage" image={IMG.koetshuisBijeenkomst} caption="Grote bijeenkomsten" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Koetshuis')}/>
        <RoomCard tone="onSage" image={IMG.workshop} caption="Workshops" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard tone="onSage" image={IMG.koetshuisFeest} caption="Bedrijfsfeesten" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Particulier')}/>
      </div>
    </Section>

    <TabbedDetail kicker="welke ruimte" title="Past bij u?"
      items={CONTENT.zakelijkeRuimtes.map(o=>({label:o.label,title:o.title,image:IMG[o.img],body:o.body,
        ctaLabel:'Naar '+o.label,onCta:()=>onNavigate(o.label)}))}/>

    <SplitPanel image={IMG.workshop} ratio="4 / 3" imageSide="right">
      <BenefitsPanel kicker="inclusief" title="Bij elke zaal" items={['75-inch tv-scherm','Flip-over en vergaderbox','Gratis wifi','Gratis parkeren, circa 60 auto\u2019s','Koffie en thee uit eigen keuken','Eén aanspreekpunt de hele dag','Rondleiding door de galerie','Twee hectare tuin om in te lopen']} style={{margin:'0 0 0 -40px'}}/>
    </SplitPanel>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="persoonlijke" title="Arrangementen" align="center" size="l"/>
        <Lead align="center" width="70ch">Drie uitgangspunten voor een vergaderdag. Alles is aan te passen — uw wensen zijn leidend, wij leveren echt maatwerk.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {PRIJZEN.arrangementen.map(({naam,duur,amount,tekst})=>
          <div key={naam} style={{background:'var(--white)',padding:'var(--space-6)'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--text-accent)'}}>{duur}</div>
            <h3 style={{margin:'var(--space-3) 0 0',fontFamily:'var(--font-display)',fontWeight:400,
              fontSize:'var(--fs-display-s)',color:'var(--ink-900)'}}>{naam}</h3>
            <div style={{marginTop:'var(--space-2)',fontFamily:'var(--font-display)',
              fontSize:'var(--fs-body-l)',color:'var(--green-700)'}}>{amount}</div>
            <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
              color:'var(--ink-500)'}}>{tekst}</p>
          </div>)}
      </div>
      <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--gap-grid)'}}>
        <div style={{background:'var(--surface-deep)',padding:'var(--space-6)'}}>
          <PriceList kicker="Zaalhuur" tone="onDeep" items={PRIJZEN.zaalhuur} note={PRIJZEN.btwNoot}/>
        </div>
        <div style={{background:'var(--white)',padding:'var(--space-6)'}}>
          <PriceList kicker="Extra&rsquo;s" items={PRIJZEN.extras}/>
        </div>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG.workshop} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div>
          <SectionHeading kicker="creatieve" title="Workshops" size="l"/>
          <Lead>Schilderen of beeldhouwen met een gerenommeerd kunstenaar, of schapen hoeden met de boer als teambuildingsdag. Te combineren met de catering van de hoeve, zodat de dag in één keer geregeld is.</Lead>
          <div style={{marginTop:'var(--space-6)'}}>
            <Button tone="primary" onClick={()=>onNavigate('Contact')}>Vraag offerte aan</Button>
          </div>
        </div>
      </div>
    </Section>

    <PullQuote portrait={IMG.koetshuisRondleiding} tone="deep" name="Uit een reactie van een opdrachtgever">
      Alles was tot in de puntjes verzorgd — wij hoefden alleen te bedenken wat we wilden.
    </PullQuote>

    <PageEnd page="zakelijk" tone="sage" kicker="wij denken" title="Graag met u mee"
      body="Vertel ons wat de dag moet opleveren, dan stellen wij het programma, de zaal en het menu samen."
      onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.ZakelijkScreen=ZakelijkScreen;
