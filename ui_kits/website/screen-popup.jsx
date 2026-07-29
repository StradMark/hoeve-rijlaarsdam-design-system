function PopupScreen({onNavigate}){
  const programma=['Ontvangst door een van onze gastvrouwen','Een bubbeltje om mee te beginnen','Uw plaats tussen de kunstwerken','Vier gangen uit de open keuken','Verhalen van kunstenaars tussen de gangen','Live achtergrondmuziek','Lunchshift of dinershift'];
  return <React.Fragment>
    <HeroVideo image={IMG.voorgerecht} kicker="een avond" title="Pop-uprestaurant" height={420}/>
    <QuoteBar>&ldquo;Beleef Hoeve Rijlaarsdam eens op een andere manier&rdquo;</QuoteBar>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionHeading kicker="culinaire" title="Belevenis" size="l"/>
          <Lead>Laat u verrassen voor een middag of avond uit. Op deze dagen serveren wij zowel een viergangenlunch als een viergangendiner, met per shift maximaal dertig personen — geheel exclusief dus. Chef Wouter Berghuis bereidt de gerechten stuk voor stuk in de open keuken, waar u uiteraard een kijkje kunt nemen.</Lead>
        </div>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden'}}><img src={IMG.chef} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
    </Section>

    <Section background="var(--surface-sage)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)'}}>
        <InfoTile title="Vier gangen" body="Een menu dat wij speciaal voor deze dagen samenstellen, uit de open keuken."/>
        <InfoTile title="Maximaal 30 gasten" body="Per shift dertig personen, aan tafels tussen de kunstwerken. Geheel exclusief."/>
        <InfoTile title="Lunch of diner" body="Kies de middagshift of de avondshift; voor groepen maken wij een eigen arrangement."/>
      </div>
    </Section>

    <SplitPanel image={IMG.koetshuisExpo} ratio="4 / 3">
      <BenefitsPanel kicker="zo verloopt" title="De avond" items={programma}/>
    </SplitPanel>

    <Section background="var(--surface-deep)" pad="var(--section-y-tight) var(--space-8)">
      <div style={{textAlign:'center'}}>
        <SectionHeading kicker="een tafel" title="Reserveren" align="center" size="l" tone="onDeep"/>
        <p style={{maxWidth:'62ch',margin:'var(--space-5) auto var(--space-6)',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:'var(--text-on-dark)'}}>Bent u ook enthousiast geworden? Bel ons op 06 - 58 98 59 63 of laat uw gegevens achter. Voor groepsarrangementen nemen wij graag apart de tijd.</p>
        <Button tone="white" onClick={()=>onNavigate('Contact')}>Reserveer een tafel</Button>
      </div>
    </Section>

    <Section pad="var(--section-y-tight) var(--space-8)">
      <SectionHeading kicker="bekijk ook onze" title="Andere avonden" align="center" size="l" style={{textAlign:'center'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gap-grid)',marginTop:'var(--space-7)'}}>
        <RoomCard image={IMG.flatlay} caption="Wijnproeverij" readMoreLabel="Reserveer" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard image={IMG.hapjes} caption="Walking dinner" readMoreLabel="Reserveer" onReadMore={()=>onNavigate('Contact')}/>
        <RoomCard image={IMG.scones} caption="High tea" readMoreLabel="Reserveer" onReadMore={()=>onNavigate('Contact')}/>
      </div>
    </Section>
    <PageEnd page="popup" tone="cream" kicker="een avond" title="Om te onthouden"
      body="Vier gangen tussen de kunstwerken, met maximaal dertig gasten per avond. Reserveer telefonisch of laat uw gegevens achter." onCta={()=>onNavigate('Contact')}/>
  </React.Fragment>;
}
window.PopupScreen=PopupScreen;
