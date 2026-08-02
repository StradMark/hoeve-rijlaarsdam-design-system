import React from 'react';

/* Pill text field with a label that rises out of the field on focus or when filled.
   The label IS the accessible name — a real <label htmlFor>, never a placeholder or aria-label. */
export function Input({
  label,placeholder,hint,error,type='text',value,defaultValue,onChange,name,id,
  tone='onDark',multiline=false,rows=4,required=false,disabled=false,style,fieldStyle,...rest
}){
  const auto=React.useId();
  const fid=id||'f'+auto.replace(/:/g,'');
  const hintId=fid+'-hint', errId=fid+'-err';
  const [focus,setFocus]=React.useState(false);
  const [inner,setInner]=React.useState(defaultValue||'');
  const val=value!==undefined?value:inner;
  const filled=String(val??'').length>0;
  // A date or time input always paints its own dd-mm-jjjj skeleton, so an empty label
  // sitting inside the field would collide with it. Those types start risen.
  const alwaysUp=type==='date'||type==='time'||type==='datetime-local'||type==='month';
  const up=focus||filled||alwaysUp;   // label sits above the field
  // ONE table per tone instead of ternaries off a dark/light boolean: a two-state boolean
  // silently gives any third tone the wrong branch. Sage is a mid tone where nothing but
  // ink-900 clears 4.5:1 — not cream (2.4), not green-900 (2.9), not the error red (2.1),
  // so on sage the error text is ink and the RED FIELD BORDER carries the error signal.
  const TONES={
    onDark : {risen:'var(--cream-100)',help:'var(--cream-100)',helpOpacity:.8,
              err:'var(--field-error-on-dark)',border:'var(--field-error-on-dark)',rest:'transparent'},
    onSage : {risen:'var(--text-on-sage-body)',   help:'var(--text-on-sage-body)',  helpOpacity:1,
              err:'var(--text-on-sage-body)',     border:'var(--field-error)',rest:'transparent'},
    onLight: {risen:'var(--ink-500)',   help:'var(--ink-500)',  helpOpacity:1,
              err:'var(--field-error)', border:'var(--field-error)',rest:'var(--border-hairline)'}
  };
  const t=TONES[tone]||TONES.onDark;

  const labelTop=multiline?34:32;
  const describedBy=[hint&&hintId,error&&errId].filter(Boolean).join(' ')||undefined;

  const field={
    width:'100%',boxSizing:'border-box',display:'block',
    padding:multiline?'14px 20px':'11px 20px',
    minHeight:multiline?rows*22+28:undefined,
    fontFamily:'var(--font-body)',fontWeight:'var(--fw-body)',fontSize:'var(--fs-body-m)',
    lineHeight:'var(--lh-body)',color:'var(--ink-700)',
    background:disabled?'var(--cream-100)':'var(--white)',
    border:'1px solid '+(error?t.border:focus?'var(--focus-ring)':t.rest),
    borderRadius:multiline?'var(--radius-xs)':'var(--radius-pill)',
    boxShadow:focus?'0 0 0 2px var(--focus-ring)':'none',
    outline:'none',resize:multiline?'vertical':undefined,
    opacity:disabled?.45:1,cursor:disabled?'not-allowed':'text',
    transition:'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
    ...fieldStyle};

  const p={id:fid,name,value:value!==undefined?value:inner,disabled,required,
    'aria-required':required||undefined,'aria-invalid':error?true:undefined,
    'aria-describedby':describedBy,
    placeholder:up?placeholder:undefined,
    onChange:e=>{if(value===undefined)setInner(e.target.value);onChange&&onChange(e);},
    onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:field,...rest};

  return (
    <div style={{position:'relative',paddingTop:20,...style}}>
      {label&&(
        <label htmlFor={fid} style={{
          position:'absolute',left:up?2:21,top:up?0:labelTop,
          fontFamily:'var(--font-display)',
          fontSize:up?'var(--fs-label-s)':'var(--fs-body-m)',
          letterSpacing:up?'var(--ls-label)':'0',
          textTransform:up?'uppercase':'none',
          color:up?t.risen:'var(--ink-500)',
          // Resting label must share the field's line box, or it sits a hair above centre.
          lineHeight:up?1.5:'var(--lh-body)',cursor:disabled?'not-allowed':'text',
          transition:'top var(--dur-base) var(--ease-out),left var(--dur-base) var(--ease-out),'+
            'font-size var(--dur-base) var(--ease-out),letter-spacing var(--dur-base) var(--ease-out),'+
            'color var(--dur-base) var(--ease-out)'}}>
          {label}{required&&<span aria-hidden="true" style={{color:'var(--accent)'}}> *</span>}
        </label>
      )}
      {multiline?<textarea rows={rows} {...p}/>:<input type={type} {...p}/>}
      {hint&&!error&&(
        <p id={hintId} style={{margin:'6px 0 0 21px',fontFamily:'var(--font-body)',
          fontSize:'var(--fs-label-s)',lineHeight:'var(--lh-body)',
          color:t.help,opacity:t.helpOpacity}}>{hint}</p>
      )}
      {error&&(
        <p id={errId} role="alert" style={{margin:'6px 0 0 21px',fontFamily:'var(--font-body)',
          fontSize:'var(--fs-body-s)',lineHeight:'var(--lh-body)',
          color:t.err}}>{error}</p>
      )}
    </div>
  );
}
