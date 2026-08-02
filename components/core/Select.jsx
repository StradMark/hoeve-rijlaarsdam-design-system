import React from 'react';

/* Dropdown that matches Input: same pill, same rising label, same tone table.
   A native <select> on purpose — it inherits the platform's keyboard, search-by-typing
   and mobile wheel, none of which a custom listbox gets right for free. */
export function Select({
  label,options=[],placeholder='Maak een keuze',hint,error,value,defaultValue,onChange,
  name,id,tone='onDark',required=false,disabled=false,style,fieldStyle,...rest
}){
  const auto=React.useId();
  const fid=id||'s'+auto.replace(/:/g,'');
  const hintId=fid+'-hint', errId=fid+'-err';
  const [focus,setFocus]=React.useState(false);
  const [inner,setInner]=React.useState(defaultValue||'');
  const val=value!==undefined?value:inner;
  const up=focus||String(val??'').length>0;

  const TONES={
    onDark :{risen:'var(--cream-100)',help:'var(--cream-100)',helpOpacity:.8,
             err:'var(--field-error-on-dark)',border:'var(--field-error-on-dark)',rest:'transparent'},
    onSage :{risen:'var(--text-on-sage-body)',help:'var(--text-on-sage-body)',helpOpacity:1,
             err:'var(--text-on-sage-body)',border:'var(--field-error)',rest:'transparent'},
    onLight:{risen:'var(--ink-500)',help:'var(--ink-500)',helpOpacity:1,
             err:'var(--field-error)',border:'var(--field-error)',rest:'var(--border-hairline)'}
  };
  const t=TONES[tone]||TONES.onDark;
  const describedBy=[hint&&hintId,error&&errId].filter(Boolean).join(' ')||undefined;
  const items=options.map(o=>typeof o==='string'?{value:o,label:o}:o);

  return (
    <div style={{position:'relative',paddingTop:20,...style}}>
      {label&&(
        <label htmlFor={fid} style={{
          position:'absolute',left:up?2:21,top:up?0:32,
          fontFamily:'var(--font-display)',
          fontSize:up?'var(--fs-label-s)':'var(--fs-body-m)',
          letterSpacing:up?'var(--ls-label)':'0',
          textTransform:up?'uppercase':'none',
          color:up?t.risen:'var(--ink-500)',lineHeight:up?1.5:'var(--lh-body)',zIndex:1,
          cursor:disabled?'not-allowed':'pointer',pointerEvents:'none',
          transition:'top var(--dur-base) var(--ease-out),left var(--dur-base) var(--ease-out),'+
            'font-size var(--dur-base) var(--ease-out),letter-spacing var(--dur-base) var(--ease-out),'+
            'color var(--dur-base) var(--ease-out)'}}>
          {label}{required&&<span aria-hidden="true" style={{color:'var(--accent)'}}> *</span>}
        </label>
      )}
      <div style={{position:'relative'}}>
        <select id={fid} name={name} disabled={disabled} required={required}
          value={val} aria-required={required||undefined}
          aria-invalid={error?true:undefined} aria-describedby={describedBy}
          onChange={e=>{if(value===undefined)setInner(e.target.value);onChange&&onChange(e);}}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{width:'100%',boxSizing:'border-box',display:'block',
            padding:'11px 44px 11px 20px',
            fontFamily:'var(--font-body)',fontWeight:'var(--fw-body)',fontSize:'var(--fs-body-m)',
            lineHeight:'var(--lh-body)',color:up?'var(--ink-700)':'transparent',
            background:disabled?'var(--cream-100)':'var(--white)',
            border:'1px solid '+(error?t.border:focus?'var(--focus-ring)':t.rest),
            borderRadius:'var(--radius-pill)',
            boxShadow:focus?'0 0 0 2px var(--focus-ring)':'none',
            outline:'none',appearance:'none',WebkitAppearance:'none',
            opacity:disabled?.45:1,cursor:disabled?'not-allowed':'pointer',
            transition:'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
            ...fieldStyle}} {...rest}>
          <option value="">{placeholder}</option>
          {items.map(o=><option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
        </select>
        <svg aria-hidden="true" viewBox="0 0 12 8" width="12" height="8"
          style={{position:'absolute',right:20,top:'50%',transform:'translateY(-50%)',
            pointerEvents:'none',opacity:disabled?.45:1}}>
          <path d="M1 1l5 5 5-5" fill="none" stroke="var(--ink-500)" strokeWidth="1.4"/>
        </svg>
      </div>
      {hint&&!error&&(
        <p id={hintId} style={{margin:'6px 0 0 21px',fontFamily:'var(--font-body)',
          fontSize:'var(--fs-label-s)',lineHeight:'var(--lh-body)',
          color:t.help,opacity:t.helpOpacity}}>{hint}</p>
      )}
      {error&&(
        <p id={errId} role="alert" style={{margin:'6px 0 0 21px',fontFamily:'var(--font-body)',
          fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',color:t.err}}>{error}</p>
      )}
    </div>
  );
}
