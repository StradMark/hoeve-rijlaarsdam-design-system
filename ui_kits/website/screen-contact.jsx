function ContactScreen({onNavigate,focus}){
  const [sent,setSent]=React.useState(false);
  const form=React.useRef(null);
  const token=focus&&focus.n;
  React.useEffect(()=>{
    // the navbar's OFFERTE button lands here; take the visitor straight to the form.
    // Runs on every click because `token` is fresh each time, and after a frame so the
    // parent's scroll-to-top for the new page has already happened.
    if(!focus||focus.why!=='offerte') return;
    const id=requestAnimationFrame(()=>{
      if(!form.current) return;
      const y=form.current.getBoundingClientRect().top+window.scrollY-90;
      window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
    });
    return ()=>cancelAnimationFrame(id);
  },[token]);
  return <React.Fragment>
    <HeroVideo image={IMG.gazon} kicker="even" title="Kennismaken" height={400}/>
    <QuoteBar>&ldquo;Vertel ons wat u van plan bent&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="kom langs" title="Voor een koffie" size="l"/>
          <Lead>U kunt bij ons terecht voor een kopje koffie, het bespreken van een feestje, trouwen — maar ook natuurlijk lekker genieten van de kunst. Kijk rond in de galerie, loop de beeldentuin door en vertel ons wat u van plan bent.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.macarons} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'.8fr 1.2fr',gap:'var(--space-7)',alignItems:'start'}}>
        <div style={{color:'var(--white)'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',letterSpacing:'var(--ls-label)',
            textTransform:'uppercase',color:'var(--white)',margin:'0 0 var(--space-3)',fontWeight:400}}>Hoeve Rijlaarsdam</h3>
          <div style={{fontSize:'var(--fs-body-s)',lineHeight:1.9}}>
            <div>Nieuwveenseweg 59</div><div>2421 LB Nieuwkoop</div>
            <div style={{fontWeight:'var(--fw-body-strong)'}}>info@feestenmeetings.nl</div>
            <div style={{fontWeight:'var(--fw-body-strong)'}}>085 888 3211</div>
          </div>
          <div style={{marginTop:'var(--space-5)',display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button tone="outlineLight" size="sm" onClick={()=>onNavigate('Locatie')}>Bekijk het erf</Button>
            <Button tone="outlineLight" size="sm" onClick={()=>onNavigate('Praktisch')}>Route en parkeren</Button>
          </div>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',letterSpacing:'var(--ls-label)',
            textTransform:'uppercase',color:'var(--white)',margin:'var(--space-6) 0 var(--space-3)',fontWeight:400}}>Neem contact op</h3>
          <div style={{fontSize:'var(--fs-body-s)',lineHeight:1.9}}>
            <div style={{fontWeight:'var(--fw-body-strong)'}}>Feesten en meetings</div><div>Roos Rijlaarsdam: 06 - 58 98 59 63</div>
            <div style={{fontWeight:'var(--fw-body-strong)',marginTop:'var(--space-3)'}}>Galerie &amp; beeldentuin</div><div>Loekie Rijlaarsdam: 06 - 42 57 63 95</div>
          </div>
        </div>
        <div ref={form} style={{background:'var(--surface-deep)',padding:'var(--space-7)'}}>
          <SectionHeading kicker="aanvragen" title="Offerte" tone="onDeep" size="l"/>
          <p style={{fontSize:'var(--fs-body-s)',color:'var(--text-on-dark)',lineHeight:'var(--lh-body)',margin:'var(--space-5) 0'}}>
            Laat uw gegevens achter en vertel kort wat u van plan bent. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken.</p>
          {sent
            ? <div role="status" style={{background:'var(--sage-400)',color:'var(--white)',padding:'var(--space-5)',fontSize:'var(--fs-body-s)'}}>Dank u — uw aanvraag staat bij ons binnen. Wij nemen binnen één werkdag contact op.</div>
            : <form noValidate onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:'grid',gap:'var(--space-3)'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Input label="Voornaam" name="voornaam" required/>
                  <Input label="Achternaam" name="achternaam" required/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Input label="E-mailadres" name="email" type="email" required/>
                  <Input label="Telefoonnummer" name="telefoon" type="tel" placeholder="06 - 12 34 56 78"/>
                </div>
                <Input label="Uw aanvraag" name="aanvraag" multiline rows={3}
                  hint="Datum, aantal gasten en gelegenheid helpen ons het meest."/>
                <div><Button tone="gold" type="submit">Versturen</Button></div>
              </form>}
        </div>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="handig om te" title="Weten" align="center" size="l"/>
        <Lead align="center" width="70ch">Route, parkeren, openingstijden en tarieven staan bij elkaar op de praktische pagina. Wilt u eerst zien hoe het erf eruitziet, loop dan de plattegrond door.</Lead>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <Button tone="primary" onClick={()=>onNavigate('Praktisch')}>Praktische informatie</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Locatie')}>Plattegrond</Button>
        </div>
      </div>
    </Section>

    <PageEnd page="contact" tone="sage" kicker="van harte" title="Welkom"
      body="Loop gerust een keer binnen om de plek te zien. Bellen mag ook — dan weet u binnen vijf minuten of het past."
      ctaLabel="Bel ons" onCta={()=>onNavigate('Praktisch')}/>
  </React.Fragment>;
}
window.ContactScreen=ContactScreen;
