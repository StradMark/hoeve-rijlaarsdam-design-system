import React from 'react';

/* Eén foto op ware grootte, boven de pagina. Voor de carousel en de galerie: wie op het
   middelste beeld klikt wil het groter zien, niet naar een andere pagina.

   Geen kruis in een hoek en geen knoppenbalk: de achtergrond is diepgroen op 94 procent —
   het merk heeft geen zwart — en de weg terug is overal (klik naast de foto, Escape, of de
   sluitknop rechtsboven). Pijlen alleen als er meer dan één foto is.

   Toetsenbord: links en rechts bladeren, Escape sluit, en de focus keert terug naar het
   element dat de lightbox opende. Achter de lightbox scrollt de pagina niet mee. */
export function Lightbox({items=[],index=0,onClose,onIndex,style}){
  const list=items.map(it=>typeof it==='string'?{src:it}:it);
  const n=list.length;
  const [own,setOwn]=React.useState(index);
  const cur=onIndex?index:own;
  const set=k=>{const v=(k+n)%n; if(onIndex)onIndex(v); else setOwn(v);};
  const box=React.useRef(null);
  const opener=React.useRef(null);

  React.useEffect(()=>{ if(!onIndex) setOwn(index); },[index]);

  React.useEffect(()=>{
    opener.current=document.activeElement;
    const prev=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const key=e=>{
      if(e.key==='Escape'){e.preventDefault();onClose&&onClose();}
      if(n>1&&e.key==='ArrowRight'){e.preventDefault();set(cur+1);}
      if(n>1&&e.key==='ArrowLeft'){e.preventDefault();set(cur-1);}
    };
    document.addEventListener('keydown',key);
    if(box.current) box.current.focus({preventScroll:true});
    return ()=>{
      document.removeEventListener('keydown',key);
      document.body.style.overflow=prev;
      if(opener.current&&opener.current.focus) opener.current.focus();
    };
  },[cur,n]);

  if(!n) return null;
  const it=list[cur]||{};
  const arrow=(dir)=>(
    /* Vast aan de rand, niet naast de foto: staan ze in de flexrij, dan verspringen ze bij
       elke foto met een andere breedte. */
    <button type="button" aria-label={dir==='next'?'Volgende foto':'Vorige foto'}
      onClick={e=>{e.stopPropagation();set(cur+(dir==='next'?1:-1));}}
      style={{position:'absolute',top:'50%',transform:'translateY(-50%)',
        [dir==='next'?'right':'left']:'var(--space-6)',zIndex:2,
        width:52,height:52,display:'grid',placeItems:'center',padding:0,cursor:'pointer',
        background:'rgba(15,44,37,.55)',border:'1px solid var(--gold-300)',borderRadius:'var(--radius-pill)'}}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d={dir==='next'?'M9 4l8 8-8 8':'M15 4l-8 8 8 8'} fill="none" stroke="var(--gold-300)" strokeWidth="1.4" strokeLinecap="square"/>
      </svg>
    </button>
  );
  return (
    <div ref={box} role="dialog" aria-modal="true" aria-label={it.caption||'Foto'} tabIndex={-1}
      onClick={()=>onClose&&onClose()}
      style={{position:'fixed',inset:0,zIndex:200,display:'grid',gridTemplateRows:'auto 1fr auto',
        background:'rgba(15,44,37,.94)',outline:'none',...style}}>

      <div style={{position:'relative',display:'flex',justifyContent:'flex-end',padding:'var(--space-5) var(--space-6)'}}>
        {/* Boven de vouw staat de navigatie door het scherm heen, en de sluitknop landt dan
            precies op de offerte-knop. Een verloop maakt alleen die strook bijna dekkend, zodat
            de rest doorschijnend blijft. */}
        <span aria-hidden="true" style={{position:'absolute',left:0,right:0,top:0,height:132,
          background:'linear-gradient(rgba(15,44,37,.98) 40%,rgba(15,44,37,0))',pointerEvents:'none'}}/>
        <button type="button" aria-label="Sluiten" onClick={e=>{e.stopPropagation();onClose&&onClose();}}
          style={{position:'relative',display:'inline-flex',alignItems:'center',gap:'var(--space-3)',background:'none',border:0,
            padding:'6px 2px',cursor:'pointer',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
            letterSpacing:'var(--ls-label-wide)',textTransform:'uppercase',color:'var(--gold-300)'}}>
          Sluiten
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" fill="none" stroke="var(--gold-300)" strokeWidth="1.4"/>
          </svg>
        </button>
      </div>

      <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center',
        padding:'0 calc(var(--space-6) * 2 + 52px)',minHeight:0}}>
        {n>1&&arrow('prev')}
        <img src={it.src} alt={it.caption||''} onClick={e=>e.stopPropagation()}
          style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain',display:'block'}}/>
        {n>1&&arrow('next')}
      </div>

      <div style={{textAlign:'center',padding:'var(--space-5) var(--space-6) var(--space-7)'}}>
        {it.caption&&<div style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-label-m)',
          letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--cream-100)'}}>{it.caption}</div>}
        {n>1&&<div style={{marginTop:it.caption?6:0,fontFamily:'var(--font-display)',
          fontSize:'var(--fs-label-s)',letterSpacing:'var(--ls-label-wide)',color:'var(--sage-300)',
          fontVariantNumeric:'tabular-nums'}}>{cur+1} / {n}</div>}
      </div>
    </div>
  );
}
