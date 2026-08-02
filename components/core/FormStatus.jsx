import React from 'react';

/* What the form says after the visitor presses send. Success is sage, failure is the
   brick from the field errors — never a green tick or a red cross, the brand has neither.
   `role` is status for success and alert for failure, so it is announced either way. */
export function FormStatus({variant='success',title,children,action,style}){
  const ok=variant==='success';
  return (
    <div role={ok?'status':'alert'} aria-live={ok?'polite':'assertive'}
      style={{background:ok?'var(--sage-400)':'var(--field-error)',
        color:'var(--white)',padding:'var(--space-6)',...style}}>
      {title&&<h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,
        fontSize:'var(--fs-display-s)',color:'var(--white)'}}>{title}</h3>}
      {children&&<div style={{margin:title?'var(--space-3) 0 0':0,fontSize:'var(--fs-body-s)',
        lineHeight:'var(--lh-body)',color:'var(--white)',maxWidth:'52ch'}}>{children}</div>}
      {action&&<div style={{marginTop:'var(--space-5)'}}>{action}</div>}
    </div>
  );
}
