import React from 'react';

export function PersonCard({image,name,role,phone,bookLabel='Boek mij',onBook,tone='light',ratio='4 / 5',style}){
  const [h,setH]=React.useState(false);
  const onColour=tone!=='light';
  const nameColour=onColour?'var(--white)':'var(--text-accent)';
  const textColour=onColour?'var(--cream-100)':'var(--text-body)';
  return (
    <div style={{...style}}>
      <div style={{aspectRatio:ratio,background:'var(--ink-100)',overflow:'hidden'}}>
        {image&&<img src={image} alt={name||''} style={{width:'100%',height:'100%',objectFit:'cover'}}/>}
      </div>
      {onBook&&(
        <button type="button" onClick={onBook} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
          style={{width:'100%',textAlign:'center',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-s)',
            letterSpacing:'var(--ls-label)',textTransform:'uppercase',padding:'7px 4px',cursor:'pointer',border:'none',
            lineHeight:1.4,background:h?'var(--green-900)':'var(--surface-deep)',color:'var(--text-on-dark)',
            transition:'background var(--dur-fast) var(--ease-out)'}}>{bookLabel}</button>
      )}
      {name&&<div style={{textAlign:'center',fontFamily:'var(--font-display)',fontSize:'var(--fs-label-l)',
        letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:nameColour,
        marginTop:'var(--space-4)'}}>{name}</div>}
      {role&&<div style={{textAlign:'center',fontSize:'var(--fs-body-s)',lineHeight:1.6,
        color:textColour,marginTop:'var(--space-2)'}}>{role}</div>}
      {phone&&<div style={{textAlign:'center',fontSize:'var(--fs-body-s)',lineHeight:1.6,
        color:onColour?'var(--white)':'var(--ink-900)',marginTop:2}}>{phone}</div>}
    </div>
  );
}
