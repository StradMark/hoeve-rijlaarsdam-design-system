function HomeScreen({onNavigate}){
  return <React.Fragment>
    <SplitHero offset={64} ampersandSrc={IMG.swirl}
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
        <ImageCaptionCard image={IMG.koetshuisBijeenkomst} caption="Zakelijk" ratio="4 / 5" href="#Zakelijk"
          body="Vergaderen, congressen en bedrijfsfeesten."/>
        <ImageCaptionCard image={IMG.gazon} caption="De Hoeve" ratio="4 / 5" href="#Praktisch"
          body="Vier zalen, een galerie en twee hectare beeldentuin."/>
        <ImageCaptionCard image={IMG.bruiloftTaart} caption="Particulier" ratio="4 / 5" href="#Particulier"
          body="Bruiloften, verjaardagen en jubilea."/>
      </div>
    </Section>

    <TabbedDetail tone="sage" kicker="wij verzorgen" title="Het geheel"
      lead="Een compleet event, inclusief horeca en aankleding. Onbespoten vruchten uit eigen tuin verwerken wij in onze arrangementen, jams en likeuren — laat het ons tot in de puntjes regelen."
      items={[
        {label:'Catering',title:'Uit eigen keuken',image:IMG.voorgerecht,
         body:'Onze eigen chef kookt met wat het seizoen geeft. Van een boerenlunch tot een walking dinner tussen de kunst — en de bruidstaart uit de eigen patisserie.',
         ctaLabel:'Naar catering',onCta:()=>onNavigate('Catering')},
        {label:'Hospitality',title:'Ook bij u op locatie',image:IMG.bediening,
         body:'Gastvrouwen, gastheren en een chef die met het hele team naar uw eigen locatie komen, met draaiboek en aansturing op de dag.',
         ctaLabel:'Naar hospitality',onCta:()=>onNavigate('Hospitality')},
        {label:'Beeldentuin',title:'Twee hectare kunst',image:IMG.beeldentuinVogels,
         body:'Al tweeëndertig jaar een galerie met bronzen beelden tussen de hagen. Uw gasten lopen er tussen de gangen door zo naar binnen.',
         ctaLabel:'Naar de galerie',onCta:()=>onNavigate('Galerie')}
      ]}/>

    <Section background="var(--surface-cream)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="vier" title="Ruimtes" align="center" size="l"/>
        <Lead align="center" width="74ch">Van een besloten overleg in het Ontwikkelatelier tot 250 gasten in het Koetshuis. Elke zaal is vrij in te delen.</Lead>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        {['Koetshuis','Hooiberg','Stal','Ontwikkelatelier'].map(r=>(
          <RoomCard key={r} image={IMG[CONTENT.ruimtes[r].hero]} caption={r} ratio="4 / 3"
            meta={CONTENT.ruimtes[r].meta} onReadMore={()=>onNavigate(r)}/>
        ))}
      </div>
    </Section>

    <ReviewRow/>

    <PageEnd page="home" tone="sage" kicker="de plek" title="Waar alles samenkomt"
      body="Een vergadering die eindigt bij een borrel in de beeldentuin. Een bruiloft tussen de kunst. Een verjaardag in de knusse Hooiberg. Wij gaan graag met u rond de tafel om er een prachtig evenement van te maken." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.HomeScreen=HomeScreen;
