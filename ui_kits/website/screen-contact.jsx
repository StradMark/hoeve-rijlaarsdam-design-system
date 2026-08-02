function ContactScreen({onNavigate,focus}){
  /* Het formulier volgt het template templates/offerte-pagina — dat is de canonieke versie.
     Wijzig daar eerst, dan hier. */
  const [v,setV]=React.useState({});
  const [errors,setErrors]=React.useState({});
  const [akkoord,setAkkoord]=React.useState(false);
  const [tried,setTried]=React.useState(false);
  const [sent,setSent]=React.useState(false);
  const set=f=>e=>{const value=e&&e.target?e.target.value:e;
    setV(s=>({...s,[f]:value}));setErrors(s=>{const n={...s};delete n[f];return n});};
  const field=(name,extra)=>Object.assign({name,value:v[name]||'',onChange:set(name),
    error:tried?errors[name]:undefined},extra||{});
  const verstuur=e=>{
    e.preventDefault();
    const n={};
    if(!v.voornaam) n.voornaam='Vul uw voornaam in.';
    if(!v.achternaam) n.achternaam='Vul uw achternaam in.';
    if(!v.email) n.email='Vul uw e-mailadres in.';
    else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) n.email='Dit adres lijkt niet te kloppen.';
    if(!v.gelegenheid) n.gelegenheid='Kies een gelegenheid, dan weten wij wie er meekijkt.';
    if(!akkoord) n.akkoord='U moet akkoord gaan voordat wij uw aanvraag mogen bewaren.';
    setErrors(n);setTried(true);setSent(Object.keys(n).length===0);
  };
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
            <div style={{fontWeight:'var(--fw-body-strong)'}}>info@hoeverijlaarsdam.nl</div>
            <div style={{fontWeight:'var(--fw-body-strong)'}}>085 888 3211</div>
          </div>
          <div style={{marginTop:'var(--space-5)',display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button tone="outlineLight" size="sm" onClick={()=>onNavigate('Praktisch')}>Bekijk de plattegrond</Button>
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
            ? <FormStatus title="Dank u, uw aanvraag is verstuurd"
                action={<Button tone="white" onClick={()=>{setV({});setErrors({});setAkkoord(false);setTried(false);setSent(false)}}>Nog een aanvraag</Button>}>
                Wij nemen binnen twee werkdagen contact met u op met een voorstel op maat. Heeft u haast? Bel Roos op 06 - 58 98 59 63.
              </FormStatus>
            : <form noValidate onSubmit={verstuur} style={{display:'grid',gap:'var(--space-3)'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Input label="Voornaam" required {...field('voornaam')}/>
                  <Input label="Achternaam" required {...field('achternaam')}/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Input label="E-mailadres" type="email" required {...field('email')}/>
                  <Input label="Telefoonnummer" type="tel" {...field('telefoon')}/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Select label="Gelegenheid" required {...field('gelegenheid',{options:['Bruiloft','Bedrijfsfeest','Vergadering of training','Jubileum of verjaardag','Rondleiding galerie','Anders']})}/>
                  <Select label="Aantal gasten" {...field('gasten',{options:['1 \u2013 20','20 \u2013 50','50 \u2013 100','100 \u2013 250']})}/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                  <Select label="Ruimte" placeholder="Nog geen voorkeur" {...field('ruimte',{options:[
                    {value:'koetshuis',label:'Koetshuis \u2014 tot 250 gasten'},
                    {value:'hooiberg',label:'Hooiberg \u2014 tot 30 personen'},
                    {value:'stal',label:'Stal \u2014 besloten, tot 60 gasten'},
                    {value:'atelier',label:'Ontwikkelatelier \u2014 coaching en strategie'}]})}/>
                  <Input label="Gewenste datum" type="date" {...field('datum')}/>
                </div>
                <ChoiceGroup legend="Welk dagdeel" columns={3} value={v.dagdeel} onChange={set('dagdeel')}>
                  {['Ochtend','Middag','Avond'].map(d=>
                    <Choice key={d} type="radio" name="dagdeel" value={d} label={d}/>)}
                </ChoiceGroup>
                <Input label="Uw aanvraag" multiline rows={3} {...field('bericht')}
                  hint="Datum, aantal gasten en gelegenheid helpen ons het meest."/>
                <ChoiceGroup error={tried?errors.akkoord:undefined}>
                  <Choice label="Ik ga akkoord met de privacyverklaring" checked={akkoord}
                    invalid={tried&&!!errors.akkoord}
                    onChange={e=>{setAkkoord(e.target.checked);setErrors(s=>{const n={...s};delete n.akkoord;return n})}}/>
                </ChoiceGroup>
                <div style={{display:'flex',alignItems:'center',gap:'var(--space-5)',flexWrap:'wrap'}}>
                  <Button tone="gold" type="submit">Versturen</Button>
                  <span style={{fontSize:'var(--fs-label-s)',color:'var(--sage-200)'}}>Wij reageren binnen twee werkdagen.</span>
                </div>
              </form>}
        </div>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="meer" title="Handig om te weten" align="center" size="l"/>
        <Lead align="center" width="70ch">Route, parkeren, openingstijden en tarieven staan bij elkaar op de praktische pagina. Wilt u eerst zien hoe het erf eruitziet, loop dan de plattegrond door.</Lead>
        <div style={{display:'flex',gap:'var(--space-4)',justifyContent:'center',marginTop:'var(--space-6)'}}>
          <Button tone="primary" onClick={()=>onNavigate('Praktisch')}>Praktische informatie</Button>
          <Button tone="outlineDark" onClick={()=>onNavigate('Praktisch')}>Plattegrond</Button>
        </div>
      </div>
    </Section>

    <PageEnd page="contact" tone="sage" kicker="van harte" title="Welkom"
      body="Loop gerust een keer binnen om de plek te zien. Bellen mag ook — dan weet u binnen vijf minuten of het past."
      ctaLabel="Vraag offerte aan" onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.ContactScreen=ContactScreen;
