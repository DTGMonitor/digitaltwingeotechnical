"use client";
import { motion } from "framer-motion";
import { Activity, BellRing, CloudSun, Database, Radio, Satellite, ShieldCheck, Waves } from "lucide-react";

const sources=[["Radar",Radio],["Earth Observation",Satellite],["GNSS",Activity],["InSAR",Waves],["LiDAR",Database],["Weather",CloudSun]];

export function Workflow(){
 return <div className="workflow-line grid gap-0 lg:grid-cols-3">{[
  ["01","MONITOR","Radar / InSAR / GNSS / LiDAR","Reliable ground-movement data.",Radio],
  ["02","INTERPRET","Engineering review / context","Meaning from deformation trends.",Activity],
  ["03","ACT","Reporting / TARP / escalation","Clear operational decisions.",ShieldCheck],
 ].map(([index,title,meta,body,Icon],i)=><motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className={`relative border hairline p-7 md:p-9 ${i===1?"bg-[#0E3A45]":"bg-[#081319]"}`} key={title as string}><Icon size={19} className={i===1?"text-[#C89B5A]":"text-[#7BA9C7]"}/><p className="mt-12 font-mono text-[10px] tracking-[.18em] text-[#7BA9C7]">{index as string} / WORKFLOW</p><h3 className="mt-4 text-4xl tracking-[-.07em]">{title as string}</h3><p className="mt-5 text-[10px] uppercase leading-5 tracking-[.15em] text-[#7BA9C7]">{meta as string}</p><p className="body-copy mt-4 max-w-xs">{body as string}</p></motion.div>)}</div>
}

export function MonitoringCentreVisual(){
 return <div className="relative min-h-[360px] overflow-hidden border hairline bg-[#071218] p-6">
  <TerrainLines/>
  <div className="absolute inset-x-6 top-6 flex justify-between"><p className="eyebrow">Remote monitoring workflow</p><span className="font-mono text-[9px] tracking-[.15em] text-[#C89B5A]">ENGINEERING REVIEW</span></div>
  <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-3">{[["Observe","Radar + multi-sensor"],["Interpret","Movement analysis"],["Escalate","TARP support"]].map(([title,sub],i)=><div className="border hairline bg-[#04070Acc] p-4" key={title}><span className="font-mono text-[10px] text-[#7BA9C7]">0{i+1}</span><p className="mt-5 text-xl tracking-[-.04em]">{title}</p><p className="mt-2 text-[10px] uppercase tracking-[.14em] text-[#91a7ae]">{sub}</p></div>)}</div>
  <div className="hero-node absolute left-[31%] top-[39%] h-3 w-3 rounded-full border border-[#7BA9C7] bg-[#7BA9C766]"/>
  <div className="hero-node absolute left-[57%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#C89B5A]" style={{animationDelay:"1.2s"}}/>
  <div className="hero-vector absolute left-[34%] top-[42%] h-px w-28 rotate-[-14deg] bg-[#7BA9C7aa]"/>
  <BellRing size={18} className="absolute right-[18%] top-[30%] text-[#C89B5A]"/>
 </div>
}

export function FocusVision(){
 return <div className="focus-field relative overflow-hidden border hairline bg-[#071218] px-5 py-7 md:px-8 md:py-9">
  <TerrainLines/>
  <div className="relative"><div className="flex items-center justify-between"><p className="eyebrow">Future intelligence layer</p><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#C89B5A]">Under development</span></div>
  <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_auto_1.12fr_auto_.78fr] xl:items-center">
   <div><p className="mb-4 text-[10px] uppercase tracking-[.18em] text-[#7BA9C7]">Monitoring inputs</p><div className="grid grid-cols-2 gap-px bg-[#0E3A4544]">{sources.map(([label,Icon])=><div className="flex items-center gap-2 bg-[#081319dd] p-4 text-[10px] uppercase tracking-[.14em] text-[#D5E0E4]" key={label as string}><Icon size={14} className="text-[#7BA9C7]"/>{label as string}</div>)}</div></div>
   <FlowArrow/>
   <div className="relative border border-[#7BA9C766] bg-[#0E3A45cc] p-7 text-center"><div className="absolute inset-3 border border-[#7BA9C722]"/><Database size={19} className="mx-auto text-[#C89B5A]"/><p className="eyebrow mt-6">Unified context</p><h3 className="mt-3 text-4xl tracking-[-.08em]">DTG Focus</h3><p className="mt-4 text-[10px] uppercase leading-5 tracking-[.15em] text-[#D5E0E4]">Monitoring systems<br/>Earth observation<br/>Engineering context</p></div>
   <FlowArrow/>
   <div className="grid gap-px bg-[#0E3A4544]"><div className="bg-[#081319dd] p-5"><Activity size={16} className="text-[#7BA9C7]"/><p className="mt-5 text-2xl tracking-[-.06em]">Interpret</p><p className="body-copy mt-3">Movement intelligence.</p></div><div className="bg-[#081319dd] p-5"><ShieldCheck size={16} className="text-[#C89B5A]"/><p className="mt-5 text-2xl tracking-[-.06em]">Act</p><p className="body-copy mt-3">Decision support.</p></div></div>
  </div></div>
 </div>
}

function FlowArrow(){return <div className="relative mx-auto h-10 w-px overflow-hidden bg-[#7BA9C766] xl:h-px xl:w-12"><motion.span className="absolute h-2 w-2 rounded-full bg-[#C89B5A]" animate={{y:["-8px","42px"],x:["-4px","-4px"]}} transition={{duration:2.8,repeat:Infinity,ease:"linear"}}/><motion.span className="absolute hidden h-2 w-2 rounded-full bg-[#C89B5A] xl:block" animate={{x:["-8px","54px"],y:["-4px","-4px"]}} transition={{duration:2.8,repeat:Infinity,ease:"linear"}}/></div>}
function TerrainLines(){return <svg className="hero-contours absolute inset-0 h-full w-full opacity-40" viewBox="0 0 900 430" fill="none" aria-hidden="true"><path d="M-20 334C119 261 190 293 296 229C407 163 476 182 574 124C671 67 771 99 930 16" stroke="#7BA9C7" strokeOpacity=".5"/><path d="M-20 376C139 309 211 340 326 271C435 206 506 225 606 167C702 111 799 140 930 74" stroke="#7BA9C7" strokeOpacity=".3"/><path d="M-20 412C144 353 251 383 367 320C481 258 555 268 656 216C756 165 838 190 930 142" stroke="#C89B5A" strokeOpacity=".3"/><path d="M35 61L209 142L385 88L541 168L718 101L872 184" stroke="#7BA9C7" strokeOpacity=".18"/><path d="M209 142L367 320M385 88L326 271M541 168L606 167M718 101L656 216" stroke="#7BA9C7" strokeOpacity=".16"/></svg>}
