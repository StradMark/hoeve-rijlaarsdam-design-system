/* Afscheid — een condoleance in besloten kring. Stond eerder als één sectie op Particulier,
   een pagina die "Vrolijke feesten" heet; dat klopte tonaal niet. Bewust niet in de navigatie:
   hiernaar wordt niet gebrowsed. Bereikbaar via Particulier en via de footer.
   Toon: geen kickers met uitroeptekens, geen carousel met feestfoto's, één telefoonnummer. */
function AfscheidScreen({onNavigate}){
  return <React.Fragment>
    <HeroVideo image={IMG.water} kicker="afscheid nemen" title="Van een dierbare" height={380}/>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{maxWidth:'68ch',margin:'0 auto',textAlign:'center'}}>
        <Lead align="center" width="68ch">Afscheid nemen van een dierbare went nooit. Als u de dag bij ons wilt houden, nemen wij het regelen uit handen — zodat u er alleen hoeft te zijn.</Lead>
        <p style={{margin:'var(--space-6) 0 0',fontSize:'var(--fs-body-m)',lineHeight:'var(--lh-body)',
          color:'var(--text-body)'}}>Belt u liever dan dat u mailt. Roos is bereikbaar op{' '}
          <a href="tel:0658985963" style={{color:'var(--green-700)'}}>06 58 98 59 63</a>, ook buiten kantooruren.</p>
      </div>
    </Section>

    <SplitPanel image={IMG.stal} ratio="4 / 3" background="var(--surface-cream)">
      <BenefitsPanel tone="sage" kicker="wat wij" title="Regelen" items={[
        'De Stal of het Koetshuis in besloten kring',
        'De locatie die dag alleen voor u',
        'Koffie, thee en iets zoets uit eigen keuken',
        'Een lunch of broodmaaltijd na afloop',
        'Ruimte voor een spreker, muziek of een film',
        'Eén van ons is er de hele dag bij',
        'Gratis parkeren direct naast de zaal',
        'Grotendeels rolstoelvriendelijk'
      ]} style={{margin:'0 -40px 0 0'}}/>
    </SplitPanel>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="hoe het" title="Meestal gaat" align="center" size="l"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',
        marginTop:'var(--space-7)',maxWidth:920,marginLeft:'auto',marginRight:'auto'}}>
        {[['De Stal','Voor een gezelschap tot zestig personen, met de balken in het zicht en het werk aan de wand. De meest gekozen ruimte.'],
          ['Het Koetshuis','Voor een grotere groep, tot 250 gasten, met een eigen entree zodat u niet door de galerie hoeft.'],
          ['De beeldentuin','Bij goed weer kunnen de deuren open en loopt het gezelschap de tuin in. Twee hectare, en altijd stil.']].map(([t,b])=>
          <div key={t}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--text-accent)'}}>{t}</div>
            <p style={{margin:'var(--space-4) 0 0',fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
              color:'var(--text-body)'}}>{b}</p>
          </div>)}
      </div>
    </Section>

    <PullQuote tone="sage" align="center">
      Wij houden de locatie die dag voor u alleen. Er komt niemand anders over het erf.
    </PullQuote>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
        <SectionHeading kicker="veel gestelde" title="Vragen en antwoorden" align="center" size="l"/>
      </div>
      <FaqAccordion tone="onLight" items={[
        {question:'Op welke termijn kan het?',answer:'Meestal binnen een week. Belt u ons zodra de datum bekend is, dan houden wij de zaal vast terwijl de rest wordt geregeld.'},
        {question:'Werken jullie samen met een uitvaartondernemer?',answer:'Ja. Uw ondernemer kan rechtstreeks met ons overleggen; wij stemmen tijden, opstelling en catering met hem af.'},
        {question:'Kunnen wij zelf iets meebrengen?',answer:'Natuurlijk. Bloemen, foto\u2019s, muziek of een film — vertelt u wat u wilt, dan zetten wij het klaar.'},
        {question:'Is de galerie open die dag?',answer:'Nee. Bij een besloten bijeenkomst sluiten wij de galerie, zodat er geen bezoek over het erf loopt.'},
        {question:'Wat kost het?',answer:'Wij maken een voorstel op maat, met de zaal en de catering apart. Er zit geen minimumafname aan.'}
      ]}/>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="liever eerst" title="Even overleggen" align="center" size="l"/>
        <Lead align="center" width="66ch">Belt u gerust, ook als de datum nog niet vaststaat. Wij denken mee zonder dat u ergens aan vastzit.</Lead>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)',flexWrap:'wrap'}}>
          <Button tone="primary" href="tel:0658985963">Bel Roos: 06 58 98 59 63</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Praktisch')}>Route en parkeren</Button>
        </div>
      </div>
    </Section>

    <Footer columns={FOOTER_COLS}/>
  </React.Fragment>;
}
window.AfscheidScreen=AfscheidScreen;
