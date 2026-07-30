/* A component that is written but not yet compiled into _ds_bundle.js would otherwise
   render as `undefined` and blank the whole kit. Fall back to a visible marker instead. */
const DS = new Proxy(window.HoeveRijlaarsdamDesignSystem_374762 || {}, {
  get(target, key){
    if (target[key]) return target[key];
    return function MissingComponent(){
      return <div style={{padding:'var(--space-5)',background:'var(--ink-100)',fontFamily:'var(--font-body)',
        fontSize:'var(--fs-body-s)',color:'var(--ink-500)',textAlign:'center'}}>
        {String(key)} is nog niet gecompileerd
      </div>;
    };
  }
});
const { PullQuote, PageOutro, CtaBand, PhotoCarousel, SectionHeading, QuoteBar, RoomCard, ImageCaptionCard, InfoTile, PersonCard, SiteMap, SitePlan, BenefitsPanel, TestimonialCard, FaqAccordion, Button, Input, TabPills, CarouselNav, NavBar, HeroVideo, SplitHero, SplitPanel, Footer } = DS;

const IMG = {
  gallery:'../../assets/photo-koetshuis-expositie.jpg',
  crowd:'../../assets/photo-lounge-zonsondergang.jpg',
  meeting:'../../assets/photo-koetshuis-bijeenkomst.jpg',
  lawn:'../../assets/photo-hoeve-gazon.jpg',
  catering:'../../assets/photo-voorgerecht.jpg',
  service:'../../assets/photo-hapjes-serveren.jpg',
  grounds:'../../assets/photo-omgeving-water.jpg',
  hoeve:'../../assets/photo-hoeve-heerlijckheid.jpg',
  koetshuisExpo:'../../assets/photo-koetshuis-expositie.jpg',
  koetshuisBijeenkomst:'../../assets/photo-koetshuis-bijeenkomst.jpg',
  koetshuisFeest:'../../assets/photo-koetshuis-feest.jpg',
  koetshuisOntvangst:'../../assets/photo-koetshuis-ontvangst.jpg',
  koetshuisRondleiding:'../../assets/photo-koetshuis-rondleiding.jpg',
  hooiberg:'../../assets/photo-hooiberg.jpg',
  hooibergGedekt:'../../assets/photo-hooiberg-gedekt.jpg',
  hooibergTafels:'../../assets/photo-hooiberg-tafels.jpg',
  hooibergFlipover:'../../assets/photo-hooiberg-flipover.jpg',
  hooibergBruid:'../../assets/photo-hooiberg-bruid.jpg',
  atelier:'../../assets/photo-atelier.jpg',
  stal:'../../assets/photo-stal-zoettafel.jpg',
  beeldentuinVogel:'../../assets/photo-beeldentuin-vogel.jpg',
  beeldentuinVogels:'../../assets/photo-beeldentuin-vogels.jpg',
  beeldentuinBruidspaar:'../../assets/photo-beeldentuin-bruidspaar.jpg',
  bruiloftCeremonie:'../../assets/photo-bruiloft-ceremonie.jpg',
  bruiloftPoort:'../../assets/photo-bruiloft-poort.jpg',
  bruiloftStoelen:'../../assets/photo-bruiloft-stoelen.jpg',
  bruiloftTafel:'../../assets/photo-bruiloft-tafel.jpg',
  bruiloftTaart:'../../assets/photo-bruiloft-taart.jpg',
  bruiloftTuin:'../../assets/photo-bruiloft-tuin.jpg',
  bruiloftUitloop:'../../assets/photo-bruiloft-uitloop.jpg',
  voorgerecht:'../../assets/photo-voorgerecht.jpg',
  dessert:'../../assets/photo-dessert.jpg',
  bruidstaart:'../../assets/photo-bruidstaart.jpg',
  scones:'../../assets/photo-scones.jpg',
  macarons:'../../assets/photo-hooiberg-macarons.jpg',
  flatlay:'../../assets/photo-styling-flatlay.jpg',
  zoetBuffet:'../../assets/photo-zoet-buffet.jpg',
  gastvrouwen:'../../assets/photo-gastvrouwen-koetshuis.jpg',
  roos:'../../assets/photo-roos-portret.jpg',
  wouter:'../../assets/photo-wouter-portret.jpg',
  wouterPlating:'../../assets/photo-wouter-plating.jpg',
  bediening:'../../assets/photo-bediening-buiten.jpg',
  hapjes:'../../assets/photo-hapjes-serveren.jpg',
  bar:'../../assets/photo-bar-cocktails.jpg',
  chef:'../../assets/photo-chef-buitenkeuken.jpg',
  wouterRoos:'../../assets/photo-wouter-roos.jpg',
  coquilles:'../../assets/photo-coquilles.jpg',
  workshop:'../../assets/photo-schilderworkshop.jpg',
  lounge:'../../assets/photo-lounge-zonsondergang.jpg',
  water:'../../assets/photo-omgeving-water.jpg',
  gazon:'../../assets/photo-hoeve-gazon.jpg',
  logo:'../../assets/logo-lockup.svg',
  swirl:'../../assets/ornament-swirl-wit.svg'
};

const FOOTER_COLS = [
  {title:'Hoeve Rijlaarsdam',lines:[{text:'Nieuwveenseweg 59'},{text:'2421 LB Nieuwkoop'},{text:'06 - 42 57 63 95',strong:true},{text:'info@rijlaarsdam.nl',strong:true}]},
  {title:'Neem contact op',lines:[{text:'Feesten en meetings',strong:true},{text:'Roos Rijlaarsdam: 06 - 58 98 59 63'},{text:'Galerie & beeldentuin',strong:true},{text:'Loekie Rijlaarsdam: 06 - 42 57 63 95'}]},
  {title:'Openingstijden galerie',lines:[{label:'Ma t/m do',text:'op afspraak'},{label:'Vrij & za',text:'11.00 - 17.00 uur'},{label:'Zondag',text:'13.00 - 17.00 uur'}]}
];

const SECTION_TONES={sage:'var(--surface-sage)',deep:'var(--surface-deep)',cream:'var(--surface-alt)',light:'var(--surface-page)'};
function Section({children,tone,background,pad='var(--section-y) var(--space-8)',style}){
  const bg=background||SECTION_TONES[tone]||'var(--surface-page)';
  if(tone&&!SECTION_TONES[tone]) console.warn('Section: onbekende tone "'+tone+'"');
  return <section style={{background:bg,padding:pad,...style}}>
    <div style={{maxWidth:'var(--container)',margin:'0 auto'}}>{children}</div>
  </section>;
}

function Lead({children,align='left',width='68ch',tone='light'}){
  return <p style={{maxWidth:width,margin:align==='center'?'var(--space-5) auto 0':'var(--space-5) 0 0',
    fontSize:'var(--fs-body-m)',lineHeight:'var(--lh-body)',
    color:tone==='light'?'var(--text-body)':'var(--cream-100)',textAlign:align}}>{children}</p>;
}

/* Fixed page ending: the centre-focused carousel in its own section, then the footer in its own.
   Every page passes photography that belongs to that page. */
const CAROUSELS={
  locatie:[
    IMG.gazon,IMG.hoeve,
    IMG.water,IMG.beeldentuinVogels,
    IMG.lounge,IMG.koetshuisRondleiding
  ],
  chef:[IMG.voorgerecht,IMG.dessert,IMG.hapjes,IMG.flatlay,IMG.bruidstaart,IMG.macarons],
  home:[
    IMG.lounge,IMG.koetshuisFeest,
    IMG.beeldentuinVogel,IMG.hooibergGedekt,
    IMG.gazon,IMG.water
  ],
  ruimte:[
    IMG.koetshuisOntvangst,IMG.koetshuisExpo,
    IMG.koetshuisFeest,IMG.koetshuisBijeenkomst,
    IMG.koetshuisRondleiding,IMG.hooibergTafels
  ],
  catering:[
    IMG.voorgerecht,IMG.dessert,
    IMG.scones,IMG.macarons,
    IMG.bar,IMG.chef
  ],
  hospitality:[
    IMG.gastvrouwen,IMG.bediening,
    IMG.hapjes,IMG.bar,
    IMG.chef,IMG.flatlay
  ],
  popup:[
    IMG.voorgerecht,IMG.koetshuisExpo,
    IMG.chef,IMG.dessert,
    IMG.bar,IMG.zoetBuffet
  ],
  contact:[
    IMG.hoeve,IMG.gazon,
    IMG.water,IMG.bruiloftPoort,
    IMG.beeldentuinVogels,IMG.lounge
  ],
  galerie:[
    IMG.beeldentuinVogels,IMG.stal,
    IMG.koetshuisExpo,IMG.workshop,
    IMG.beeldentuinVogel,IMG.koetshuisRondleiding
  ],
  bruiloft:[
    IMG.bruiloftCeremonie,IMG.bruiloftTafel,
    IMG.beeldentuinBruidspaar,IMG.bruiloftTaart,
    IMG.bruiloftTuin,IMG.bruiloftUitloop
  ],
  overons:[
    IMG.gastvrouwen,IMG.bediening,
    IMG.chef,IMG.bar,
    IMG.koetshuisRondleiding,IMG.hoeve
  ],
  zakelijk:[
    IMG.koetshuisBijeenkomst,IMG.hooibergFlipover,
    IMG.stal,IMG.workshop,
    IMG.atelier,IMG.koetshuisRondleiding
  ],
  particulier:[
    IMG.koetshuisFeest,IMG.hooibergGedekt,
    IMG.bar,IMG.zoetBuffet,
    IMG.hapjes,IMG.lounge
  ],
  praktisch:[
    IMG.hoeve,IMG.gazon,
    IMG.water,IMG.koetshuisOntvangst,
    IMG.hooiberg,IMG.beeldentuinVogel
  ]
};

function PageEnd({page='home',tone='cream',kicker,title,body,onCta}){
  return <React.Fragment>
    <PageOutro tone={tone} items={CAROUSELS[page]||CAROUSELS.home} height={400}
      kicker={kicker} title={title} body={body} onCta={onCta}/>
    <Footer columns={FOOTER_COLS}/>
  </React.Fragment>;
}

function ReviewRow({tone='sage'}){
  const q='\u201cEen bijzondere locatie die is samen te vatten als ruimtelijk, rustig en liefdevol. Alles werd tot in de puntjes verzorgd \u2014 wij hadden er geen omkijken naar.\u201d';
  return <div style={{position:'relative'}}>
    <Section pad="var(--section-y-tight) var(--space-8) 0">
      <SectionHeading kicker="mooie reactie" title="Van klanten" align="center" size="m"/>
    </Section>
    <Section pad="var(--space-6) var(--space-8) var(--section-y-tight)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6)'}}>
        <TestimonialCard tone={tone} quote={q} attribution="Voornaam en Achternaam, uit Nieuwkoop"/>
        <TestimonialCard tone={tone} quote={q} attribution="Voornaam en Achternaam, uit Nieuwkoop"/>
      </div>
    </Section>
  </div>;
}

const FAQ_ITEMS=[
  {question:'Hoeveel gasten kunnen er terecht?',answer:'Het Koetshuis heeft een capaciteit van 250 gasten. In de vergaderruimte op de eerste etage van de Hooiberg ontvangen wij groepen tot 30 personen.'},
  {question:'Is er parkeergelegenheid?',answer:'Gratis parkeren op eigen terrein voor circa 60 auto\u2019s. Voor grotere bijeenkomsten regelen wij aangrenzend nog eens 50 extra plaatsen.'},
  {question:'Verzorgt u ook de catering?',answer:'Ja. Wij verzorgen een compleet event, inclusief horeca en aankleding, met streekproducten en (H)eerlijckheid uit eigen tuin.'},
  {question:'Is de locatie rolstoelvriendelijk?',answer:'Hoeve Rijlaarsdam is grotendeels rolstoelvriendelijk. Vertelt u ons vooraf wat u nodig heeft, dan richten wij de route en de zaal daarop in.'},
  {question:'Hoe ver rijden wij vanuit de stad?',answer:'Wij liggen middenin het Groene Hart, op ongeveer 30 minuten rijden van de grote steden.'}
];

Object.assign(window,{DS,IMG,FOOTER_COLS,CAROUSELS,Section,Lead,PageEnd,CtaBand,PageOutro,PullQuote,ReviewRow,FAQ_ITEMS,
  PhotoCarousel,SectionHeading,QuoteBar,RoomCard,ImageCaptionCard,InfoTile,PersonCard,SiteMap,SitePlan,BenefitsPanel,TestimonialCard,FaqAccordion,
  Button,Input,TabPills,CarouselNav,NavBar,HeroVideo,SplitHero,SplitPanel,Footer});
