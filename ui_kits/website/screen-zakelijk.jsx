/* Zakelijk — meetings, congressen, workshops, bedrijfsfeesten.
   Prijzen komen uit guidelines/content-en-feiten.md (excl. btw); controleer voor publicatie. */
const ARRANGEMENTEN=[
  ['Polderpracht','4 uur','€ 15,50 p.p.','Onbeperkt koffie, thee en water, met huisgemaakte lekkernij bij de start.'],
  ['Korenbloem','8 uur','€ 28,50 p.p.','De hele dag verzorgd, inclusief een lunch uit eigen keuken.'],
  ['Inspiratie','8 uur','€ 35,50 p.p.','De hele dag verzorgd, met een uitgebreide lunch en een borrel na.']
];

function ZakelijkScreen({onNavigate}){
  const [ruimte,setRuimte]=React.useState('Hooiberg');
  const RUIMTE={
    Hooiberg:['Vergaderen met uitzicht','Volledig omringd door ramen, met uitzicht over de polder en de beeldentuin. Voor maximaal 30 personen — de ruimte waar de meeste vergaderdagen plaatsvinden.','hooibergFlipover'],
    Stal:['Historisch en besloten','Ruim honderdtien jaar oud, met de originele balken en werk van de Haagse en Leidsche school aan de wand. Geschikt voor meetings, wijnproeverijen en private dining.','stal'],
    Koetshuis:['Ruimte voor 250','De grootste zaal, met uitstekende akoestiek. Voor congressen, beurzen en bedrijfsfeesten; de indeling is volledig vrij.','koetshuisBijeenkomst'],
    Ontwikkelatelier:['Coaching en strategie','De oude lijstenmakerij, verbouwd tot trainingsruimte met uitzicht over het land. Voor coaching, bestuurs- en strategiesessies.','atelier']
  };
  const r=RUIMTE[ruimte];
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
            <Button tone="outline" onClick={()=>onNavigate('Praktisch')}>Praktische informatie</Button>
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
        <RoomCard image={IMG.hooibergFlipover} caption="Vergaderen" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Hooiberg')}/>
        <RoomCard image={IMG.koetshuisBijeenkomst} caption="Grote bijeenkomsten" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Koetshuis')}/>
        <RoomCard image={IMG.workshop} caption="Workshops" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard image={IMG.koetshuisFeest} caption="Bedrijfsfeesten" readMoreLabel="Bekijk" onReadMore={()=>onNavigate('Particulier')}/>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="welke ruimte" title="Past bij u?" align="center" size="l"/>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
        <TabPills tone="onLight" items={Object.keys(RUIMTE)} value={ruimte} onChange={setRuimte}/>
      </div>
      <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1.15fr 1fr',
        gap:'var(--space-7)',alignItems:'center'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}>
          <img src={IMG[r[2]]} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div>
          <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-display-s)',
            color:'var(--ink-900)'}}>{r[0]}</h3>
          <Lead width="46ch">{r[1]}</Lead>
          <div style={{marginTop:'var(--space-5)'}}>
            <Button tone="outline" onClick={()=>onNavigate(ruimte)}>Naar {ruimte}</Button>
          </div>
        </div>
      </div>
    </Section>

    <SplitPanel image={IMG.workshop} ratio="4 / 3" reverse>
      <BenefitsPanel kicker="inclusief" title="Bij elke zaal" items={['75-inch tv-scherm','Flip-over en vergaderbox','Gratis wifi','Gratis parkeren, circa 60 auto\u2019s','Koffie en thee uit eigen keuken','Eén aanspreekpunt de hele dag','Rondleiding door de galerie','Twee hectare tuin om in te lopen']} style={{margin:'0 0 0 -40px'}}/>
    </SplitPanel>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="persoonlijke" title="Arrangementen" align="center" size="l"/>
        <Lead align="center" width="70ch">Drie uitgangspunten voor een vergaderdag. Alles is aan te passen — uw wensen zijn leidend, wij leveren echt maatwerk.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {ARRANGEMENTEN.map(([naam,duur,prijs,tekst])=>
          <div key={naam} style={{background:'var(--white)',padding:'var(--space-6)'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
              letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--text-accent)'}}>{duur}</div>
            <h3 style={{margin:'var(--space-3) 0 0',fontFamily:'var(--font-display)',fontWeight:400,
              fontSize:'var(--fs-display-xs)',color:'var(--ink-900)'}}>{naam}</h3>
            <div style={{marginTop:'var(--space-2)',fontFamily:'var(--font-display)',
              fontSize:'var(--fs-body-l)',color:'var(--green-700)'}}>{prijs}</div>
            <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
              color:'var(--ink-500)'}}>{tekst}</p>
          </div>)}
      </div>
      <div style={{marginTop:'var(--space-6)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--gap-grid)'}}>
        <div style={{background:'var(--surface-deep)',padding:'var(--space-6)'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
            letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--sage-300)'}}>Zaalhuur</div>
          <div style={{marginTop:'var(--space-4)',display:'grid',gap:'var(--space-3)'}}>
            {[['Dagdeel','9.00–13.00 of 13.00–17.00','€ 395'],['Avond','vanaf 18.00','€ 475'],['Hele dag','9.00–17.00','€ 525']].map(([a,b,c])=>
              <div key={a} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'var(--space-4)',
                paddingBottom:'var(--space-3)',borderBottom:'1px solid rgba(251,248,243,.18)'}}>
                <span><span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',
                  color:'var(--text-on-dark)'}}>{a}</span>
                  <span style={{marginLeft:'var(--space-3)',fontSize:'var(--fs-body-xs)',
                    color:'var(--sage-300)'}}>{b}</span></span>
                <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',
                  color:'var(--text-on-dark)'}}>{c}</span>
              </div>)}
          </div>
          <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-xs)',color:'var(--sage-300)'}}>
            Alle bedragen zijn exclusief btw.</p>
        </div>
        <div style={{background:'var(--white)',padding:'var(--space-6)'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
            letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--text-accent)'}}>Extra&rsquo;s</div>
          <div style={{marginTop:'var(--space-4)',display:'grid',gap:'var(--space-3)'}}>
            {[['Energy break','huisgemaakte quiche','€ 7,50'],['Healthy break','smoothie met vers fruit','€ 6,50'],['Borrel na','met hapjes uit eigen keuken','op aanvraag']].map(([a,b,c])=>
              <div key={a} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'var(--space-4)',
                paddingBottom:'var(--space-3)',borderBottom:'1px solid rgba(22,25,26,.09)'}}>
                <span><span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',
                  color:'var(--ink-900)'}}>{a}</span>
                  <span style={{marginLeft:'var(--space-3)',fontSize:'var(--fs-body-xs)',
                    color:'var(--ink-500)'}}>{b}</span></span>
                <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-body-l)',
                  color:'var(--green-700)'}}>{c}</span>
              </div>)}
          </div>
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
