const NAV_LEFT=[{label:'De Hoeve',items:['Over ons','Praktisch','Agenda']},
  {label:'Art',items:['Galerie','Beeldentuin']},
  {label:'Events',items:['Zakelijk','Particulier','Bruiloft']}];
const NAV_RIGHT=[{label:'Ruimtes',items:['Koetshuis','Hooiberg','Stal','Ontwikkelatelier']},
  {label:'Culinair',items:['Catering','Hospitality','Pop-up']},
  'Contact'];

class Boundary extends React.Component{
  constructor(p){super(p);this.state={err:null}}
  static getDerivedStateFromError(err){return {err}}
  componentDidUpdate(prev){if(prev.pageKey!==this.props.pageKey&&this.state.err)this.setState({err:null})}
  render(){
    if(!this.state.err) return this.props.children;
    return <div style={{padding:'64px',fontFamily:'var(--font-body)',color:'var(--text-body)'}}>
      <div style={{fontFamily:'var(--font-display)',fontSize:22,color:'var(--ink-900)'}}>Deze pagina kon niet worden opgebouwd</div>
      <p style={{marginTop:12,fontSize:14}}>{String(this.state.err&&this.state.err.message||this.state.err)}</p>
    </div>;
  }
}

// The bundled NavBar may lag behind the source while the design system recompiles.
// If it has no dropdown support yet, flatten the menus to plain labels instead of
// handing it objects it would try to render as React children (which blanks the page).
const NAV_HAS_DROPDOWN=/labelOf/.test(String(DS.NavBar||''));
const flatten=(items)=>items.map(it=>typeof it==='string'?it:it.label);

const PAGE_FROM_HASH=()=>decodeURIComponent((location.hash||'').replace(/^#/,''))||'De Hoeve';

function App(){
  const [page,setPage]=React.useState(PAGE_FROM_HASH);
  // an intent is a token, not a string: clicking OFFERTE twice must fire the scroll twice
  const [intent,setIntent]=React.useState(null);
  const goto=(p,why)=>{setIntent(why?{why,page:p,n:Date.now()}:null);setPage(p)};
  React.useEffect(()=>{
    const sync=()=>{setIntent(null);setPage(PAGE_FROM_HASH())};
    window.addEventListener('hashchange',sync);
    return ()=>window.removeEventListener('hashchange',sync);
  },[]);
  React.useEffect(()=>{
    if(PAGE_FROM_HASH()!==page) history.replaceState(null,'','#'+encodeURIComponent(page));
    // the target screen of an intent scrolls itself (child effects run first) — don't undo it
    if(!intent||intent.page!==page) window.scrollTo(0,0);
  },[page,intent]);
  const ROOMS=['Koetshuis','Hooiberg','Stal','Ontwikkelatelier'];
  const screen = page==='Ruimtes'||ROOMS.indexOf(page)>-1 ? <RuimteScreen room={page==='Ruimtes'?'Koetshuis':page} onNavigate={setPage}/>
    : page==='Galerie'||page==='Beeldentuin'||page==='Art' ? <GalerieScreen view={page==='Beeldentuin'?'Beeldentuin':'Galerie'} onNavigate={setPage}/>
    : page==='Bruiloft' ? <BruiloftScreen onNavigate={setPage}/>
    : page==='Over ons' ? <OverOnsScreen onNavigate={setPage}/>
    : page==='Praktisch'||page==='Locatie' ? <PraktischScreen onNavigate={setPage}/>
    : page==='Agenda' ? <AgendaScreen onNavigate={setPage}/>
    : page==='Afscheid' ? <AfscheidScreen onNavigate={setPage}/>
    : page==='Catering' ? <CateringScreen onNavigate={setPage}/>
    : page==='Hospitality' ? <HospitalityScreen onNavigate={setPage}/>
    : page==='Pop-up' ? <PopupScreen onNavigate={setPage}/>
    : page==='Zakelijk'||page==='Events' ? <ZakelijkScreen onNavigate={setPage}/>
    : page==='Particulier' ? <ParticulierScreen onNavigate={setPage}/>
    : page==='Contact' ? <ContactScreen onNavigate={goto} focus={intent}/>
    : <HomeScreen onNavigate={setPage}/>;
  return <div>
    <NavBar logo={IMG.logo} active={page}
      left={NAV_HAS_DROPDOWN?NAV_LEFT:flatten(NAV_LEFT)}
      right={NAV_HAS_DROPDOWN?NAV_RIGHT:flatten(NAV_RIGHT)}
      onNavigate={p=>goto(p)} onCta={()=>goto('Contact','offerte')}/>
    <Boundary pageKey={page}>{screen}</Boundary>
  </div>;
}
const mount=document.getElementById('root');
if(mount) ReactDOM.createRoot(mount).render(<Boundary pageKey="root"><App/></Boundary>);
