import React from 'react';

/* Never mix the `border` shorthand with `borderColor` here: on un-hover React clears the
   longhand and leaves the unchanged shorthand untouched, so the border falls back to black.
   Every tone therefore writes borderColor only, with width and style set once below. */
const TONES = {
  primary:{background:'var(--accent)',color:'var(--text-on-dark)',borderColor:'var(--accent)'},
  gold:{background:'var(--accent-alt)',color:'var(--white)',borderColor:'var(--accent-alt)'},
  outlineLight:{background:'transparent',color:'var(--white)',borderColor:'var(--white)'},
  outlineDark:{background:'transparent',color:'var(--accent)',borderColor:'var(--accent)'},
  white:{background:'var(--white)',color:'var(--accent)',borderColor:'var(--white)'}
};
const SIZES = {
  sm:{padding:'7px 18px',fontSize:'var(--fs-label-s)'},
  md:{padding:'10px 26px',fontSize:'var(--fs-label-m)'},
  lg:{padding:'11px 32px',fontSize:'var(--fs-label-l)'}
};

export function Button({children,tone='primary',size='md',href,disabled=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const t=TONES[tone]||TONES.primary;
  const hoverStyle=hover&&!disabled?(
    tone==='primary'?{background:'var(--accent-hover)',borderColor:'var(--accent-hover)'}:
    tone==='gold'?{background:'var(--accent-alt-hover)',borderColor:'var(--accent-alt-hover)'}:
    tone==='outlineLight'?{background:'var(--white)',color:'var(--accent)',borderColor:'var(--white)'}:
    tone==='outlineDark'?{background:'var(--accent)',color:'var(--text-on-dark)',borderColor:'var(--accent)'}:
    {background:'var(--cream-200)',borderColor:'var(--cream-200)'}
  ):null;
  const s={
    display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
    fontFamily:'var(--font-display)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
    lineHeight:1,borderWidth:1,borderStyle:'solid',borderRadius:'var(--radius-pill)',
    cursor:disabled?'not-allowed':'pointer',
    opacity:disabled?.45:1,textDecoration:'none',whiteSpace:'nowrap',
    transition:'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
    transform:press&&!disabled?'scale(.97)':'none',
    ...t,...SIZES[size]||SIZES.md,...hoverStyle,...style};
  const handlers={onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false)},onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false)};
  if(href&&!disabled) return <a href={href} style={s} {...handlers} {...rest}>{children}</a>;
  return <button type="button" disabled={disabled} onClick={onClick} style={s} {...handlers} {...rest}>{children}</button>;
}
