/* Alle bedragen van de site op één plek. Volgt guidelines/content-en-feiten.md.

   WORK IN PROGRESS — deze prijzen zijn nog niet geverifieerd bij de opdrachtgever en
   mogen niet gepubliceerd worden voordat dat gebeurd is. Wijzig ze hier, nooit in een
   schermbestand. Bedragen zijn tekst: 'op aanvraag' is een geldige prijs. */
const PRIJZEN={
  btwNoot:'Alle bedragen zijn exclusief btw.',
  zaalhuur:[
    {label:'Dagdeel',detail:'9.00–13.00 of 13.00–17.00',amount:'€ 395'},
    {label:'Avond',detail:'vanaf 18.00',amount:'€ 475'},
    {label:'Hele dag',detail:'9.00–17.00',amount:'€ 525'}
  ],
  extras:[
    {label:'Energy break',detail:'huisgemaakte quiche',amount:'€ 7,50'},
    {label:'Healthy break',detail:'smoothie met vers fruit',amount:'€ 6,50'},
    {label:'Borrel',detail:'2 consumpties en een ronde warme snacks',amount:'€ 12,50'}
  ],
  arrangementen:[
    {naam:'Polderpracht',duur:'4 uur',amount:'€ 15,50 p.p.',
     tekst:'Onbeperkt koffie, thee en water, met huisgemaakte lekkernij bij de start.'},
    {naam:'Korenbloem',duur:'8 uur',amount:'€ 28,50 p.p.',
     tekst:'De hele dag verzorgd, inclusief een lunch uit eigen keuken.'},
    {naam:'Inspiratie',duur:'8 uur',amount:'€ 35,50 p.p.',
     tekst:'De hele dag verzorgd, met een uitgebreide lunch en een borrel na.'}
  ],
  inbegrepen:'Inclusief gebruik van 75-inch tv-scherm, flip-over, vergaderbox en gratis wifi.'
};
window.PRIJZEN=PRIJZEN;
