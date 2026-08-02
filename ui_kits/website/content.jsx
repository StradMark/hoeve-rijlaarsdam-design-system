/* Alle inhoud van de voorbeeldsite op één plek: teksten, opsommingen, teamleden, menu's.

   Waarom hier en niet in de schermen: wie een zaaltekst of een teamlid wijzigt hoort niet in
   JSX te hoeven. De schermbestanden gaan over indeling, dit bestand over wat er staat.
   Foto's staan als naam ('koetshuisExpo'), niet als pad — parts.jsx zet ze om via IMG.

   Prijzen staan NIET hier maar in prijzen.jsx; die volgen guidelines/content-en-feiten.md. */
const CONTENT={

  /* Over ons — de vaste aanspreekpunten */
  team:[
  {name:'Roos Rijlaarsdam',role:'Eigenaresse · feesten en meetings',phone:'06 - 58 98 59 63',img:'roos'},
  {name:'Wouter Berghuis',role:'Chef-kok en patissier',img:'wouter'}
],

  /* Ruimtepagina's: Koetshuis, Hooiberg, Stal, Ontwikkelatelier */
  ruimtes:{
  'Koetshuis':{
    hero:'koetshuisOntvangst',kicker:'binnen bij',title:'Het Koetshuis',
    quote:'De grootste zaal, met uitzicht over de polder',
    lead:'Een congres, symposium of seminar krijgt een grote meerwaarde door een inspirerende locatie. Onze grote expositieruimte — het Koetshuis — heeft een capaciteit van 250 gasten en een uitstekend akoestisch vermogen, en kan op verschillende manieren worden ingericht. U mag altijd vrijblijvend komen bezichtigen.',
    photo:'koetshuisExpo',panel:'koetshuisFeest',meta:['250 gasten','Grote expositieruimte'],
    facts:['Gratis wifi','75 inch tv-scherm','Flip-over en vergaderbox','Flexibele zaalopstellingen','Capaciteit tot 250 gasten','Uitstekende akoestiek','Catering uit eigen keuken','Uitzicht over de polder','Beeldentuin van twee hectare','Gratis parkeren, circa 60 auto\u2019s','50 extra plaatsen op aanvraag','Grotendeels rolstoelvriendelijk'],
    setupsTitle:'Veel opstellingen',
    setupsLead:'Van carré tot theater: wij bouwen de zaal om naar wat uw programma vraagt. Twijfelt u over de beste vorm? Wij denken graag met u mee over de mogelijkheden.',
    setups:['Carré','U-vorm','Theater','Cabaret','Eiland','Diner']
  },
  'Hooiberg':{
    hero:'hooiberg',kicker:'binnen bij',title:'De Hooiberg',
    quote:'Rondom glas, met de polder als achtergrond',
    lead:'De verbouwde hooiberg heeft een eigen bar en veel glas. Op de eerste etage ligt een vergaderruimte die volledig door ramen wordt omringd, met uitzicht over de polder en de beeldentuin, voor maximaal dertig personen. Beneden ontvangt u uw gasten voor een receptie of een borrel.',
    photo:'hooibergFlipover',panel:'hooibergTafels',meta:['30 gasten boven','Eigen bar'],
    facts:['Eigen bar','Vergaderruimte op de eerste etage','Maximaal 30 personen boven','Rondom ramen','Uitzicht over polder en beeldentuin','Terras met weids uitzicht','Theehuis met koffie en gebak','Catering uit eigen keuken','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'De hooiberg is de plek voor het informele deel van de dag — en boven voor het werk dat concentratie vraagt.',
    setups:['Receptie','Verjaardag','Netwerkborrel','Vergadering','Brainstorm','Borrel na het diner']
  },
  'Stal':{
    hero:'stal',kicker:'binnen bij',title:'De oude Stal',
    quote:'Ruim honderdtien jaar oud, met de balken nog in het zicht',
    lead:'De voormalige stal is ruim honderdtien jaar oud en heeft houten palen in het midden. Aan de wanden hangt werk van de Haagse en Leidsche school. Het is de meest intieme van de drie expositieruimtes — voor een meeting, een wijnproeverij of een diner in klein gezelschap.',
    photo:'stal',panel:'stal',meta:['Intiem','Haagse en Leidsche school'],
    facts:['Ruim 110 jaar oud','Originele houten palen en balken','Werk van de Haagse en Leidsche school','Intieme sfeer','Catering uit eigen keuken','Geschikt voor private dining','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'Kleiner en geconcentreerder dan het Koetshuis. Alles wat gesprek vraagt in plaats van een podium.',
    setups:['Meeting','Wijnproeverij','Private dining','Bestuursoverleg','Expositie','Ontvangst']
  },
  'Ontwikkelatelier':{
    hero:'atelier',kicker:'binnen bij',title:'Het Ontwikkelatelier',
    quote:'De oude lijstenmakerij, nu een plek om te werken',
    lead:'De oude lijstenmakerij is verbouwd tot coachings- en trainingsruimte met uitzicht over het land. Kleiner dan de andere ruimtes, en juist daarom de plek voor sessies waarin iedereen aan het woord komt.',
    photo:'atelier',panel:'workshop',meta:['Kleine groepen','Coaching en training'],
    facts:['Uitzicht over het land','Geschikt voor kleine groepen','Coaching en training','Flip-over aanwezig','Catering uit eigen keuken','Gratis wifi','Gratis parkeren op eigen terrein'],
    setupsTitle:'Waarvoor u hem gebruikt',
    setupsLead:'Voor sessies waarin de groep klein blijft en de dag een resultaat moet opleveren.',
    setups:['Coaching','Bestuurssessie','Strategiesessie','Workshop','Training','Eén-op-één']
  }
},


  /* Zaalopstellingen — één omschrijving per vorm, gedeeld door alle vier de zaalpagina's.
     Zonder deze regels stond er negen keer dezelfde placeholder onder de iconen. */
  opstellingen:{
    'Carré':'Iedereen kijkt elkaar aan, niemand zit vooraan. Voor overleg waarin elke stem meetelt, tot ongeveer dertig personen.',
    'U-vorm':'Open aan één kant, zodat er een spreker of scherm past. De vorm voor een training waarin ook gewerkt wordt.',
    'Theater':'Stoelen in rijen, geen tafels. De meeste mensen in de zaal, voor een lezing of presentatie zonder aantekeningen.',
    'Cabaret':'Ronde tafels met een vrije kant naar voren. Voor een programma dat wisselt tussen luisteren en samen werken.',
    'Eiland':'Losse tafelgroepen door de zaal. Voor een dag met parallelle sessies of een beurs met standhouders.',
    'School':'Rijen met tafels, allemaal naar voren. Voor een cursusdag waarop mensen schrijven of een laptop gebruiken.',
    'Diner':'Lange tafels of ronde tafels van acht. Voor een diner na afloop, of een avond die daar meteen mee begint.',
    'Private dining':'Eén tafel, klein gezelschap, de chef die zelf uitserveert. Tot ongeveer twintig gasten.',
    'Receptie':'Statafels en ruimte om te lopen. Voor een ontvangst of borrel waarbij iedereen elkaar spreekt.',
    'Ontvangst':'De eerste twintig minuten: koffie, jassen, mensen die binnendruppelen. Vaak in de Hooiberg of op het gazon.',
    'Netwerkborrel':'Statafels verspreid, de bar open. Voor een borrel waarin het gesprek het programma is.',
    'Borrel na het diner':'De zaal wordt omgebouwd terwijl uw gasten buiten staan. Daarna de bar open en ruimte om te dansen.',
    'Verjaardag':'Zitten waar u wilt, een hoek voor de taart. Voor een feest waar drie generaties komen.',
    'Vergadering':'Één tafel, iedereen aan het woord, scherm en flip-over binnen handbereik.',
    'Bestuursoverleg':'Besloten, één tafel, geen doorloop. Voor een raad of bestuur dat een dag ongestoord wil werken.',
    'Bestuurssessie':'Een dag met een besluit aan het eind. Kleine groep, flip-over, en een lunch die niet onderbreekt.',
    'Strategiesessie':'Ruimte aan de wand voor plaknotities, en een tafel die makkelijk aan de kant kan.',
    'Brainstorm':'Weinig meubilair, veel wand. Voor een ochtend waarin de uitkomst nog niet vaststaat.',
    'Workshop':'Werktafels met ruimte om iets neer te leggen. Voor een dag waarop handen bezig zijn.',
    'Training':'Rijen of een U-vorm, afhankelijk van de trainer. Wij zetten hem klaar zoals u het wilt.',
    'Meeting':'De standaardvorm: één tafel, tot ongeveer twaalf mensen, alles binnen handbereik.',
    'Eén-op-één':'Twee stoelen bij het raam. Voor een coachgesprek of een beoordeling die rust vraagt.',
    'Wijnproeverij':'Een lange tafel met glazen op rij, de balken boven u. Onze chef verzorgt de bijpassende hapjes.',
    'Expositie':'De wanden vrij, het werk op ooghoogte, en ruimte om er langs te lopen.'
  },


  /* Agenda — wisselende exposities, pop-upavonden en open dagen. Voorbeelddata; hoort op
     termijn uit een echte bron te komen. */
  agenda:[
    {datum:'12 sep',soort:'Expositie',titel:'Brons in de boomgaard',tijd:'Vrij t/m zo, 11.00 - 17.00 uur',
     body:'Nieuw werk van drie beeldhouwers, verspreid over de boomgaard en de Stal. De hele herfst te zien.',
     naar:'Galerie',actie:'Naar de galerie'},
    {datum:'27 sep',soort:'Pop-up',titel:'Pop-uprestaurant — oogst',tijd:'Vanaf 18.30 uur, vier gangen',
     body:'Onze chef kookt met wat de tuin op dat moment geeft. Eén lange tafel in het Koetshuis, dertig couverts.',
     naar:'Pop-up',actie:'Reserveer een tafel'},
    {datum:'5 okt',soort:'Open dag',titel:'Kijkdag voor bruidsparen',tijd:'11.00 - 16.00 uur, vrij inlopen',
     body:'De zalen staan opgesteld zoals op een trouwdag, de patisserie staat klaar. U kunt vrijblijvend rondlopen.',
     naar:'Bruiloft',actie:'Over trouwen'},
    {datum:'8 nov',soort:'Pop-up',titel:'Pop-uprestaurant — wild',tijd:'Vanaf 18.30 uur, vijf gangen',
     body:'De donkere maanden, de kachel aan in de Stal. Een menu rond wild en wortelgroenten uit de streek.',
     naar:'Pop-up',actie:'Reserveer een tafel'},
    {datum:'6 dec',soort:'Expositie',titel:'Winterlicht',tijd:'Vrij t/m zo, 11.00 - 17.00 uur',
     body:'Kleiner werk, binnen opgesteld, met de kerstverlichting in de tuin. Tot en met januari.',
     naar:'Galerie',actie:'Naar de galerie'}
  ],

  /* Galerie en Beeldentuin — twee gezichten van dezelfde pagina */
  galerie:{
  'Galerie':{
    hero:'koetshuisRondleiding',kicker:'welkom',title:'Galerie',
    quote:'Verkocht, bezichtigd, gerestaureerd en getaxeerd',
    lead:'Drie expositieruimtes, één collectie: negentiende- en twintigste-eeuwse meesters naast hedendaags werk. U loopt vrij binnen tijdens de openingstijden, en op afspraak nemen wij u mee langs de collectie. Werk kan bij ons worden gekocht, bezichtigd, gerestaureerd en getaxeerd.',
    photo:'stal'
  },
  'Beeldentuin':{
    hero:'beeldentuinVogels',kicker:'twee hectare',title:'Beeldentuin',
    quote:'Circa zeventig sculpturen, van brons tot glas',
    lead:'Rondom de hoeve ligt twee hectare beeldentuin met circa zeventig sculpturen — van realisme tot abstract, van brons tot keramiek en glas. De tuin is vrij te bezoeken tijdens de openingstijden van de galerie, en dient bij evenementen als buitenruimte voor ceremonies, walking dinners en exposities.',
    photo:'beeldentuinVogel'
  }
},

  /* De drie expositieruimtes onder de galeriepagina */
  expositieruimtes:[
    {label:'Stal',img:'stal',body:'Ruim honderdtien jaar oud, met de originele houten palen in het midden. Hier hangt werk van de Haagse en Leidsche school.'},
    {label:'Koetshuis',img:'koetshuisExpo',body:'De grootste expositieruimte, met hoge wanden en veel licht. Ook de zaal waar exposities en veilingen plaatsvinden.'},
    {label:'Grote zaal',img:'koetshuisRondleiding',body:'Ruimte voor grote formaten en wisselende presentaties, direct naast de entree van de galerie.'}
  ],

  /* Bruiloft — het verloop van de dag */
  bruiloftsdag:[
  {label:'Ontvangst',img:'bruiloftPoort',body:'Uw gasten komen aan op het erf en worden ontvangen met bubbels en warme hapjes, tussen de sculpturen in de beeldentuin.'},
  {label:'Ceremonie',img:'bruiloftCeremonie',body:'In de beeldentuin onder de bomen, of binnen in het Koetshuis als het weer daar niet aan meewerkt. Beide zijn voorbereid.'},
  {label:'Borrel',img:'bruiloftTuin',body:'Een lange borrel op het gazon met uitzicht over de polder, terwijl de zaal wordt omgebouwd voor het diner.'},
  {label:'Diner',img:'bruiloftTafel',body:'Een diner van onze chef in het Koetshuis of de Stal — sit down, walking dinner of een lange tafel.'},
  {label:'Feest',img:'lounge',body:'De bar in de Hooiberg gaat open, de festoonverlichting aan, en er wordt gedanst tot de laatste gast weg is.'}
],

  /* Particulier — wat er te vieren valt */
  gelegenheden:[
    {label:'Feesten',title:'Vrolijke feesten',img:'koetshuisFeest',body:'Wij zijn gek op feestjes. Bitterballen op een schilderspalet met mosterd in verschillende kleuren, de bar in de Hooiberg open en dansen tot de laatste gast weg is.'},
    {label:'Verjaardagen',title:'Zorgeloze verjaardagen',img:'hooibergGedekt',body:'Van een besloten diner in de Stal tot een groot feest in het Koetshuis. U bedenkt de gelegenheid, wij regelen de rest.'},
    {label:'Jubilea',title:'Iets te vieren',img:'bruiloftTafel',body:'Een huwelijksjubileum, een afscheid of een mijlpaal. Vaak een lange tafel, een menu van onze chef en een rondleiding door de galerie tussen de gangen.'},
    {label:'High tea',title:'Zoet uit eigen keuken',img:'scones',body:'Scones, macarons en huisgemaakte jams uit onze eigen tuin — zo zoet van zichzelf dat er bijna geen suiker aan toe hoeft.'}
  ],

  /* Zakelijk — welke ruimte past bij u */
  zakelijkeRuimtes:[
    {label:'Hooiberg',title:'Vergaderen met uitzicht',img:'hooibergFlipover',body:'Volledig omringd door ramen, met uitzicht over de polder en de beeldentuin. Voor maximaal 30 personen — de ruimte waar de meeste vergaderdagen plaatsvinden.'},
    {label:'Stal',title:'Historisch en besloten',img:'stal',body:'Ruim honderdtien jaar oud, met de originele balken en werk van de Haagse en Leidsche school aan de wand. Geschikt voor meetings, wijnproeverijen en private dining.'},
    {label:'Koetshuis',title:'Ruimte voor 250',img:'koetshuisBijeenkomst',body:'De grootste zaal, met uitstekende akoestiek. Voor congressen, beurzen en bedrijfsfeesten; de indeling is volledig vrij.'},
    {label:'Ontwikkelatelier',title:'Coaching en strategie',img:'atelier',body:'De oude lijstenmakerij, verbouwd tot trainingsruimte met uitzicht over het land. Voor coaching, bestuurs- en strategiesessies.'}
  ],

  /* Catering — het menu per gang */
  cateringMenu:{
  Diner:[['Walking dinner','hapjes'],['Sit down dinner','bruiloftTafel'],['Shared dinner','hooibergGedekt']],
  Borrel:[['Borrelplanken','flatlay'],['Amuses','dessert'],['Rondje de wereld','bar']],
  Lunch:[['Walking lunch','voorgerecht'],['Broodplanken','scones'],['High tea','macarons']]
},

  /* Chef — gerechten per moment van de dag */
  chefMenu:{
    Diner:[
      {caption:'Entrecote, 48 tot 51 graden',img:'voorgerecht'},
      {caption:'Bietjes — rauw, gerookt, gemarineerd',img:'wouterPlating'},
      {caption:'Amuse van het seizoen',img:'hapjes'}
    ],
    Ontbijt:[
      {caption:'Yoghurt met huisgemaakte granola',img:'scones'},
      {caption:'Roerei met truffel en Ibericoham',img:'flatlay'},
      {caption:'Patisserie uit eigen keuken',img:'macarons'}
    ],
    Zoet:[
      {caption:'Bruidstaart op maat',img:'bruidstaart'},
      {caption:'Macarons',img:'macarons'},
      {caption:'Scones voor de high tea',img:'scones'}
    ]
  }
};
window.CONTENT=CONTENT;
