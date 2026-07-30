/* Seizoenslogo — bediening voor alle vier de kaarten.
   Een kaart zet één element neer:
     <div class="slogo" data-field="panel|screen" data-theme="winter|kerst" data-looks="…"></div>
   en dit bestand vult de tekening, bouwt de knoppen en (op scherm) de sneeuwlaag.
   Vier opbouwen: vA vlotte hand, vC sneeuw eerst, vD vlok als slot, vB alleen dwarrelen. */
(() => {
const VARIANTS=[['vA','Vlotte hand'],['vE','Letterpers'],['vC','Sneeuw eerst'],['vD','Vlok als slot'],['vB','Alleen dwarrelen']];
const NOTE={
 vA:'<b>Vlotte hand</b> · 3,3s · de W, dan i en n, dan de t van bovenaf naar beneden met de lus eronder, dan de e, r en s met de uithaal, en als laatste de streep door de t en de punt op de i — daarna komt de vlok op en landen caps en schuurmerk samen',
 vE:'<b>Letterpers</b> · 3,7s · zelfde hand, maar RIJLAARSDAM wordt niet weggeveegd: de negen letterblokken drukken zich één voor één aan, van onderaf — daarna komen de lijnen en het schuurmerk',
 vC:'<b>Sneeuw eerst</b> · 3,0s · het beeld begint met dwarrelende sneeuw; daaruit zet de grote vlok zich vast, en pas als die staat wordt de naam eronder geschreven — de sneeuw maakt het logo',
 vD:'<b>Vlok als slot</b> · 4,1s · het schrift komt eerst; terwijl RIJLAARSDAM zich zet dwarrelt de grote vlok al van linksboven naar beneden, en hij legt zich als laatste stil op zijn plek — de stipjes in het logo volgen als hij geland is',
 vB:'<b>Alleen dwarrelen</b> · eindeloos · het logo staat er al; de sneeuw is overwegend stipjes met hier en daar een vlokje, in tempo\'s van 11 tot 23 seconden, elk met eigen drift, zwaai en draai — en de stipjes in het logo lichten af en toe even op'};
const LOOKLABEL={zilver:'Zilver',kaarslicht:'Kaarslicht',berry:'Berry-zegel'};
const LOOK={
 zilver:'Zilver · de naam in koud zilver, lijnen en schuurmerk mee — de koelste uitvoering, voor sneeuw- en vorstbeelden',
 kaarslicht:'Kaarslicht · de naam in warm goud tegen het diepe pine, met berry op de bovenste lijn als het enige rode detail',
 berry:'Berry-zegel · alles in zilver en het schuurmerk als enige berry-element — de naam blijft zilver, zoals de kerstregel voorschrijft'};

const root=document.querySelector('.slogo');
if(!root) return;
const field=root.dataset.field||'panel', theme=root.dataset.theme||'winter';
const looksList=(root.dataset.looks||'').split(' ').filter(Boolean);
let look=looksList[0]||'', variant='vA';
const svgHTML=window.SEIZOENSLOGO_SVG;

/* knoppen en toelichting: op paneel onder het logo, op scherm erover */
const host=root.parentNode;                 // buiten het logo, anders wist opnieuw schrijven de knoppen
if(field==='screen') document.body.classList.add('overscreen');
function row(cls){const d=document.createElement('div');d.className='tabs'+(cls?' '+cls:'');host.appendChild(d);return d}
const lookRow=looksList.length?row('looks'):null;
const varRow=row();
const hint=field==='screen'?null:Object.assign(document.createElement('div'),{className:'hint'});
if(hint) host.appendChild(hint);
function button(parent,key,label,attr){
 const b=document.createElement('button');b.type='button';b.className='tab';b.textContent=label;b.dataset[attr]=key;
 parent.appendChild(b);return b;
}
looksList.forEach(l=>button(lookRow,l,LOOKLABEL[l]||l,'l'));
VARIANTS.forEach(([k,l])=>button(varRow,k,l,'v'));

function paint(){
 root.className='slogo '+variant+(look?' '+look:'');
 if(lookRow)[...lookRow.children].forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===look));
 [...varRow.children].forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===variant));
 if(hint) hint.innerHTML=NOTE[variant]+(look?' — '+LOOK[look]:'')+(variant==='vA'?'. Klik op het logo om opnieuw te schrijven':'');
}
function play(){
 paint();
 const snow=root.querySelector('.snowlayer');
 root.innerHTML='';void root.offsetWidth;root.innerHTML=svgHTML;
 if(snow) root.appendChild(snow);           // de sneeuw loopt door bij opnieuw schrijven
}
lookRow&&lookRow.addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;look=b.dataset.l;play()});
varRow.addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;variant=b.dataset.v;play()});
root.addEventListener('click',()=>play());
root.title='Klik om opnieuw te schrijven';
root.innerHTML=svgHTML;paint();

/* --- schermvullende sneeuw ------------------------------------------------
   Dezelfde vlokjes en dezelfde baan als in het vlak, maar in beeldpunten: elk vlokje begint
   net boven het beeld en valt precies één beeldhoogte, en het aantal komt uit het oppervlak
   (ongeveer één per 6.000 beeldpunten), zodat de dichtheid gelijk blijft bij elk formaat. */
if(field==='screen'){
 const NS='http://www.w3.org/2000/svg';
 const layer=document.createElementNS(NS,'svg');layer.setAttribute('class','snowlayer');layer.setAttribute('aria-hidden','true');
 const symbol=root.querySelector('symbol#sf').cloneNode(true);symbol.id='sfx';
 const dot=root.querySelector('symbol#sd').cloneNode(true);dot.id='sdx';
 const defs=document.createElementNS(NS,'defs');defs.appendChild(symbol);defs.appendChild(dot);layer.appendChild(defs);
 root.appendChild(layer);
 let seed=20261;const rnd=()=>(seed=(seed*1103515245+12345)&0x7fffffff)/0x7fffffff;
 let lastN=0,lastW=0;
 const build=()=>{
  const r=root.getBoundingClientRect(),W=Math.round(r.width),H=Math.round(r.height);
  if(!W||!H)return;
  const n=Math.max(28,Math.min(260,Math.round(W*H/6000)));
  if(n===lastN&&Math.abs(W-lastW)<24)return;
  lastN=n;lastW=W;seed=20261;
  const phase=[...Array(n).keys()];
  for(let i=n-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[phase[i],phase[j]]=[phase[j],phase[i]]}
  let out='';
  for(let i=0;i<n;i++){
   const x=(i+.1+rnd()*.8)/n*W, y=-6-rnd()*14;
   /* Overwegend stipjes, ongeveer één op de zes een echt vlokje — zoals de stipjes in het logo.
      Een stipje is kleiner dan een vlokje van dezelfde afstand, en iets dekkender omdat er geen
      lijnwerk is dat wegvalt. */
   const isFlake=(i%6===0);
   const s=isFlake?(6+rnd()*8):(2.4+rnd()*2.6);
   const t=(11+rnd()*12).toFixed(1), dx=(rnd()*150-75).toFixed(0), sw=(rnd()*24-12).toFixed(0);
   const rot=(rnd()*260-130).toFixed(0), op=((isFlake?.34:.46)+rnd()*.5).toFixed(2);
   const fall=(H+s*2+20).toFixed(0), lag=(-(phase[i]+rnd())/n*t).toFixed(2);
   out+='<use class="fl'+(isFlake?'':' dt')+'" href="#'+(isFlake?'sfx':'sdx')+'" style="--t:'+t+'s;--lag:'+lag+'s;--dx:'+dx+'px;--fall:'+fall+'px;--sw:'+sw+'px;--rot:'+rot+'deg;--op:'+op+'" x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+s.toFixed(1)+'" height="'+s.toFixed(1)+'"></use>';
  }
  layer.innerHTML=defs.outerHTML+out;
 };
 build();
 let to;addEventListener('resize',()=>{clearTimeout(to);to=setTimeout(build,180)});
}
})();
