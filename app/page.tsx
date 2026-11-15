"use client";
import { useMemo, useState } from "react";
const pals = ["Anubis","Astegon","Blazamut","Chillet","Dinossom","Faleris","Frostallion","Jormuntide","Lyleen","Orserk","Quivern","Relaxaurus","Shadowbeak","Suzaku","Verdash"];
export default function Home() {
  const [parentA,setParentA]=useState("Anubis"),[parentB,setParentB]=useState("Chillet");
  const [target,setTarget]=useState("Anubis"),[ivA,setIvA]=useState("80"),[ivB,setIvB]=useState("90");
  const [mode,setMode]=useState("breeding");
  const result=useMemo(()=>Math.round((Number(ivA)+Number(ivB))/2),[ivA,ivB]);
  return <main className="wrap">
    <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:42}}>
      <a href="/" style={{fontWeight:800,fontSize:20,color:"white"}}>🐾 Palworld Breeding</a>
      <nav style={{display:"flex",gap:18}}><a href="#calculator">Calculator</a><a href="#guide">How it works</a></nav>
    </header>
    <section style={{padding:"45px 0 55px"}}>
      <p style={{color:"#bef264",fontWeight:700,letterSpacing:2}}>PALWORLD BREEDING TOOL</p>
      <h1 style={{fontSize:"clamp(38px,7vw,68px)",lineHeight:1.05,maxWidth:800,margin:"14px 0"}}>Find your next Pal.<br/><span style={{color:"#a3e635"}}>Plan every pairing.</span></h1>
      <p className="muted" style={{fontSize:18,maxWidth:650,lineHeight:1.7}}>A simple companion for planning Palworld breeding, comparing parent combinations and estimating inherited IVs.</p>
      <a className="btn" href="#calculator" style={{display:"inline-block",marginTop:16}}>Open calculator →</a>
    </section>
    <section id="calculator" className="panel">
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:24}}>
        <button className={mode==="breeding"?"btn":"btn2"} onClick={()=>setMode("breeding")}>Breeding planner</button>
        <button className={mode==="iv"?"btn":"btn2"} onClick={()=>setMode("iv")}>IV estimator</button>
      </div>
      {mode==="breeding"?<>
        <h2 style={{fontSize:28,margin:"0 0 8px"}}>Breeding combination planner</h2>
        <p className="muted">Choose two parent Pals to record and plan a pairing.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,marginTop:24}}>
          <label>Parent 1<select className="field" value={parentA} onChange={e=>setParentA(e.target.value)}>{pals.map(p=><option key={p}>{p}</option>)}</select></label>
          <label>Parent 2<select className="field" value={parentB} onChange={e=>setParentB(e.target.value)}>{pals.map(p=><option key={p}>{p}</option>)}</select></label>
          <label>Target Pal<select className="field" value={target} onChange={e=>setTarget(e.target.value)}>{pals.map(p=><option key={p}>{p}</option>)}</select></label>
        </div>
        <div style={{marginTop:22,padding:18,borderRadius:12,background:"#0e121a"}}>
          <p className="muted" style={{marginTop:0}}>Your planned pairing</p><h3 style={{fontSize:24,margin:"8px 0"}}>{parentA} + {parentB}</h3><p className="muted" style={{marginBottom:0}}>Target to investigate: <strong style={{color:"#bef264"}}>{target}</strong></p>
          <p className="muted" style={{fontSize:13,marginBottom:0}}>This planner records a pairing; it does not claim a guaranteed offspring. Exact offspring requires a verified breeding-power database for the current game version.</p>
        </div>
      </>:<>
        <h2 style={{fontSize:28,margin:"0 0 8px"}}>IV inheritance estimator</h2>
        <p className="muted">Enter the parents’ IV percentages to estimate the simple average.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,marginTop:24}}>
          <label>Parent 1 IV (%)<input className="field" type="number" min="0" max="100" value={ivA} onChange={e=>setIvA(e.target.value)}/></label>
          <label>Parent 2 IV (%)<input className="field" type="number" min="0" max="100" value={ivB} onChange={e=>setIvB(e.target.value)}/></label>
        </div>
        <div style={{marginTop:22,padding:22,borderRadius:12,background:"#0e121a"}}><p className="muted">Estimated average</p><strong style={{fontSize:42,color:"#bef264"}}>{Number.isFinite(result)?result:0}%</strong><p className="muted" style={{fontSize:13}}>Simplified estimate only. Actual inheritance depends on game mechanics, random rolls and passive traits.</p></div>
      </>}
    </section>
    <section id="guide" style={{padding:"54px 0"}}>
      <h2 style={{fontSize:30}}>How Palworld breeding works</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,marginTop:20}}>
        <article className="panel"><h3>1. Pick parents</h3><p className="muted">Select the two Pals you want to pair and keep track of possible breeding plans.</p></article>
        <article className="panel"><h3>2. Check offspring</h3><p className="muted">Use a verified breeding chart for exact offspring combinations. Results can change with game updates.</p></article>
        <article className="panel"><h3>3. Track traits</h3><p className="muted">Record parent IVs and passive skills. Compare offspring and refine your breeding plan.</p></article>
      </div>
    </section>
    <footer style={{borderTop:"1px solid #2b3342",padding:"22px 0"}} className="muted">Unofficial fan-made tool. Not affiliated with Pocketpair. Game data and mechanics may change.</footer>
  </main>;
}