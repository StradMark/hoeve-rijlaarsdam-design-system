import React from 'react';

const TONES = {
  primary:{background:'var(--accent)',color:'var(--text-on-dark)',border:'1px solid var(--accent)'},
  gold:{background:'var(--accent-alt)',color:'var(--white)',border:'1px solid var(--accent-alt)'},
  outlineLight:{background:'transparent',color:'var(--white)',border:'1px solid var(--white)'},
  outlineDark:{background:'transparent',color:'var(--accent)',border:'1px solid var(--accent)'},
  white:{background:'var(--white)',color:'var(--accent)',border:'1px solid var(--white)'}
};
const SIZES = {
  sm:{padding:'7px 18px',fontSize:'var(--fs-label-s)'},
  md:{padding:'10px 26px',fontSize:'var(--fs-label-m)'},
  lg:{padding:'13px 38px',fontSize:'var(--fs-label-l)'}
};

export function Button({children,tone='primary',size='md',href,disabled=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const t=TONES[tone]||TONES.primary;
  const hoverStyle=hover&&!disabled?(
    tone==='primary'?{background:'var(--accent-hover)',borderColor:'var(--accent-hover)'}:
    tone==='gold'?{background:'var(--accent-alt-hover)',borderColor:'var(--accent-alt-hover)'}:
    tone==='outlineLight'?{background:'var(--white)',color:'var(--accent)'}:
    tone==='outlineDark'?{background:'var(--accent)',color:'var(--text-on-dark)'}:
    {background:'var(--cream-200)'}
  ):null;
  const s={
    display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
    fontFamily:'var(--font-display)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',
    lineHeight:1,borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',
    opacity:disabled?.45:1,textDecoration:'none',whiteSpace:'nowrap',
    transition:'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
    transform:press&&!disabled?'scale(.97)':'none',
    ...t,...SIZES[size]||SIZES.md,...hoverStyle,...style};
  const handlers={onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false)},onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false)};
  if(href&&!disabled) return <a href={href} style={s} {...handlers} {...rest}>{children}</a>;
  return <button type="button" disabled={disabled} onClick={onClick} style={s} {...handlers} {...rest}>{children}</button>;
}
