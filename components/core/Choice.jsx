import React from 'react';

/* Checkbox and radio in one component — the same box, square or round.
   Always inside a <ChoiceGroup> when there are two or more: the group owns the
   legend, the error and the radio `name`, so a stray radio can't escape its set.

   The group also owns which radio is on. Uncontrolled radios each keeping their own
   state is the classic bug: the browser unchecks the siblings but fires onChange only
   on the one clicked, so every radio ends up drawn as selected. */
const RadioSet=React.createContext(null);

export function Choice({
  label,hint,type='checkbox',checked,defaultChecked,onChange,value,name,id,
  tone='onDark',disabled=false,invalid=false,style,...rest
}){
  const auto=React.useId();
  const fid=id||'c'+auto.replace(/:/g,'');
  const hintId=fid+'-hint';
  const [focus,setFocus]=React.useState(false);
  const [inner,setInner]=React.useState(!!defaultChecked);
  const set=React.useContext(RadioSet);
  const grouped=type==='radio'&&set&&checked===undefined&&value!==undefined;
  // A radio outside a ChoiceGroup: the browser unchecks its siblings without telling React,
  // so let the DOM own the state and mirror it on any change to the same `name`.
  const loose=type==='radio'&&!grouped&&checked===undefined;
  const box=React.useRef(null);
  const [domOn,setDomOn]=React.useState(!!defaultChecked);
  React.useEffect(()=>{
    if(!loose) return;
    const sync=e=>{ if(e.target.type==='radio'&&e.target.name===name&&box.current) setDomOn(box.current.checked); };
    document.addEventListener('change',sync);
    return ()=>document.removeEventListener('change',sync);
  },[loose,name]);
  React.useEffect(()=>{ if(grouped&&defaultChecked) set.select(value); },[]);
  const on=checked!==undefined?checked:grouped?set.value===value:loose?domOn:inner;
  const onDark=tone==='onDark';

  const textColor=onDark?'var(--text-on-dark)':tone==='onSage'?'var(--white)':'var(--text-body)';
  const hintColor=onDark?'var(--sage-200)':tone==='onSage'?'var(--white)':'var(--ink-500)';
  const boxBorder=invalid?(onDark?'var(--field-error-on-dark)':'var(--field-error)')
    :on?'transparent':(onDark||tone==='onSage'?'rgba(251,248,243,.6)':'var(--ink-300)');
  const boxFill=on?(onDark||tone==='onSage'?'var(--white)':'var(--accent)'):'transparent';
  const markColor=onDark||tone==='onSage'?'var(--green-800)':'var(--white)';

  return (
    // No htmlFor: the input is nested inside the label, and pointing the label at its own
    // nested input makes the click count twice — the box toggles on and straight back off.
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',
      minHeight:'var(--touch-min)',padding:'6px 0',
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,...style}}>
      <span style={{position:'relative',flex:'0 0 auto',width:20,height:20,marginTop:2}}>
        <input id={fid} type={type} name={name} value={value} disabled={disabled}
          ref={box}
          {...(loose?{defaultChecked:!!defaultChecked}:{checked:on})}
          aria-invalid={invalid||undefined}
          aria-describedby={hint?hintId:undefined}
          onChange={e=>{if(grouped)set.select(value);else if(loose)setDomOn(e.target.checked);else if(checked===undefined)setInner(e.target.checked);onChange&&onChange(e);}}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}} {...rest}/>
        <span aria-hidden="true" style={{display:'block',width:20,height:20,boxSizing:'border-box',
          border:'1px solid '+boxBorder,background:boxFill,
          borderRadius:type==='radio'?'var(--radius-pill)':'var(--radius-xs)',
          boxShadow:focus?'0 0 0 2px var(--focus-ring)':'none',
          transition:'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)'}}>
          {on&&type==='checkbox'&&(
            <svg viewBox="0 0 14 14" width="18" height="18" style={{display:'block',margin:'0 auto'}}>
              <path d="M3 7.4l2.7 2.6L11 4.6" fill="none" stroke={markColor} strokeWidth="1.8"/>
            </svg>
          )}
          {on&&type==='radio'&&(
            <span style={{display:'block',width:8,height:8,margin:'5px auto',
              borderRadius:'var(--radius-pill)',background:markColor}}/>
          )}
        </span>
      </span>
      <span>
        <span style={{display:'block',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-s)',
          lineHeight:'var(--lh-body)',color:textColor}}>{label}</span>
        {hint&&<span id={hintId} style={{display:'block',marginTop:2,fontFamily:'var(--font-body)',
          fontSize:'var(--fs-label-s)',lineHeight:'var(--lh-body)',color:hintColor}}>{hint}</span>}
      </span>
    </label>
  );
}

/* Legend, spacing and error for a set of choices. A real <fieldset>/<legend>, so a
   screen reader announces the question before every option. */
export function ChoiceGroup({legend,hint,error,children,tone='onDark',columns=1,value,onChange,style}){
  const auto=React.useId();
  const errId='g'+auto.replace(/:/g,'')+'-err';
  const [picked,setPicked]=React.useState();
  const current=value!==undefined?value:picked;
  const set=React.useMemo(()=>({value:current,
    select:v=>{ if(value===undefined) setPicked(v); if(onChange) onChange(v); }}),[current,value,onChange]);
  const onDark=tone==='onDark';
  const legendColor=onDark?'var(--cream-100)':tone==='onSage'?'var(--white)':'var(--ink-500)';
  const hintColor=onDark?'var(--sage-200)':tone==='onSage'?'var(--white)':'var(--ink-500)';
  const errColor=onDark?'var(--field-error-on-dark)':tone==='onSage'?'var(--white)':'var(--field-error)';
  return (
    <fieldset style={{border:0,margin:0,padding:0,minWidth:0,...style}}
      aria-describedby={error?errId:undefined} aria-invalid={error?true:undefined}>
      {legend&&<legend style={{padding:0,fontFamily:'var(--font-display)',
        fontSize:'var(--fs-label-s)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
        color:legendColor}}>{legend}</legend>}
      {hint&&<p style={{margin:'var(--space-2) 0 0',fontFamily:'var(--font-body)',
        fontSize:'var(--fs-label-s)',lineHeight:'var(--lh-body)',color:hintColor}}>{hint}</p>}
      <div style={{marginTop:'var(--space-2)',display:'grid',
        gridTemplateColumns:columns>1?'repeat('+columns+',minmax(0,1fr))':'1fr',
        gap:columns>1?'0 var(--space-5)':0}}>
        <RadioSet.Provider value={set}>{children}</RadioSet.Provider>
      </div>
      {error&&<p id={errId} role="alert" style={{margin:'var(--space-2) 0 0',
        fontFamily:'var(--font-body)',fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:errColor}}>{error}</p>}
    </fieldset>
  );
}
