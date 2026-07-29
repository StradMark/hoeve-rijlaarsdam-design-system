function HomeScreen({onNavigate}){
  const [tab,setTab]=React.useState('Catering');
  return <React.Fragment>
    <SplitHero offset={64}
      caption={<React.Fragment>&ldquo;Daar waar hospitality een kunstvorm is!&rdquo;</React.Fragment>}
      onScrollHint={()=>window.scrollBy({top:window.innerHeight-64,behavior:'smooth'})}
      items={[
        {label:'Art',ctaLabel:'Galerie',image:IMG.koetshuisExpo,onSelect:()=>onNavigate('Galerie')},
        {label:'Events',ctaLabel:'Mogelijkheden',image:IMG.lounge,onSelect:()=>onNavigate('Zakelijk')}
      ]}/>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="van harte" title="Welkom" align="center" size="l"/>
        <Lead align="center" width="78ch">Op zoek naar een landelijke, sfeervolle, unieke evenementenlocatie in Nieuwkoop? Wat dacht u van een oude boerderij met beeldentuin, middenin de idyllische polder? Al 32 jaar een galerie met een beeldentuin van twee hectare — en sinds enkele jaren ook uw evenementenlocatie, binnen en buiten.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <ImageCaptionCard image={IMG.koetshuisBijeenkomst} caption="Zakelijk" ratio="4 / 5" href="#" />
        <ImageCaptionCard image={IMG.gazon} caption="De Hoeve" ratio="4 / 5" href="#" />
        <ImageCaptionCard image={IMG.bruiloftTaart} caption="Particulier" ratio="4 / 5" href="#" />
      </div>
    </Section>

    <div style={{position:'relative'}}>
      <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8) 120px">
        <div style={{textAlign:'center'}}>
          <SectionHeading kicker="oneindig" title="Veel mogelijkheden" align="center" size="l" tone="onSage"/>
          <p style={{maxWidth:'76ch',margin:'var(--space-5) auto var(--space-6)',fontSize:'var(--fs-body-s)',
            lineHeight:'var(--lh-body)',color:'var(--white)'}}>Wij verzorgen een compleet event, inclusief horeca en aankleding. Onbespoten vruchten uit eigen tuin verwerken wij in onze arrangementen, jams en likeuren. Laat ons uw evenement tot in de puntjes verzorgen — zonder zorgen.</p>
          <div style={{display:'flex',justifyContent:'center'}}>
            <TabPills items={['Catering','Hospitality']} value={tab} onChange={setTab}/>
          </div>
        </div>
      </Section>
      <div style={{maxWidth:920,margin:'-90px auto 0',padding:'0 var(--space-8)',position:'relative',
        display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={tab==='Catering'?IMG.voorgerecht:IMG.bar} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={tab==='Catering'?IMG.hapjes:IMG.bediening} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </div>

    <PageEnd page="home" tone="cream" kicker="de plek" title="Waar alles samenkomt"
      body="Een vergadering die eindigt bij een borrel in de beeldentuin. Een bruiloft tussen de kunst. Een verjaardag in de knusse Hooiberg. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.HomeScreen=HomeScreen;
