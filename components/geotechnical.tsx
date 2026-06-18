"use client";
import { motion } from "framer-motion";
import { Activity, BellRing, CloudSun, Database, Radio, Satellite, ShieldCheck, Waves } from "lucide-react";
import { DTGFocusMark } from "@/components/brand";

const sources=[["Radar",Radio],["GNSS",Activity],["Prisms",Database],["LiDAR",Waves],["InSAR",Satellite],["Seismic",Activity],["Environmental",CloudSun],["Operational data",Database]];

export function Workflow(){
 const steps=[
  ["01","MONITOR","Radar / InSAR / GNSS / Prisms / LiDAR","Reliable data from radar, InSAR, GNSS, prisms, LiDAR and other monitoring systems.",Radio],
  ["02","INTERPRET","Engineering review / multi-sensor correlation","Engineering review, trend assessment and contextual understanding.",Activity],
  ["03","ACT","Reporting / TARP / escalation","Reporting, TARP support, escalation workflows and informed operational decisions.",ShieldCheck],
 ];
 return <div className="relative overflow-hidden border hairline bg-[#071114]/80 px-6 py-8 md:px-10 md:py-12">
  <TerrainLines/>
  <div className="relative">
   <div className="hidden md:block">
    <div className="absolute left-[9%] right-[9%] top-[88px] h-px bg-[#9CB6C233]"/>
    <motion.div className="absolute top-[84px] h-2 w-2 rounded-full bg-[#D79A2B]" animate={{left:["9%","91%"]}} transition={{duration:7,repeat:Infinity,ease:"linear"}}/>
   </div>
   <div className="grid gap-8 md:grid-cols-3 md:gap-10">
    {steps.map(([index,title,meta,body,Icon],i)=><motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="relative min-h-[255px] border-l border-[#9CB6C233] pl-5 md:border-l-0 md:pl-0" key={title as string}>
     <div className="flex items-center gap-3">
      <span className={`grid h-12 w-12 place-items-center rounded-full border ${i===2?"border-[#D79A2B] text-[#D79A2B]":"border-[#9CB6C255] text-[#9CB6C2]"} bg-[#071114cc]`}><Icon size={18}/></span>
      <span className="font-mono text-[10px] tracking-[.18em] text-[#9CB6C2]">{index as string} / WORKFLOW</span>
     </div>
     <h3 className="mt-10 text-4xl tracking-[-.07em]">{title as string}</h3>
     <p className="mt-5 text-[10px] uppercase leading-5 tracking-[.15em] text-[#9CB6C2]">{meta as string}</p>
     <p className="body-copy mt-4 max-w-sm">{body as string}</p>
    </motion.div>)}
   </div>
  </div>
 </div>
}

export function MonitoringCentreVisual(){
 return <div className="relative min-h-[360px] overflow-hidden border hairline bg-[#0E1823] p-6">
  <TerrainLines/>
  <div className="absolute inset-x-6 top-6 flex justify-between"><p className="eyebrow">Remote monitoring workflow</p><span className="font-mono text-[9px] tracking-[.15em] text-[#D79A2B]">ENGINEERING REVIEW</span></div>
  <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-3">{[["Observe","Radar + multi-sensor"],["Interpret","Movement analysis"],["Escalate","TARP support"]].map(([title,sub],i)=><div className="border hairline bg-[#08111Acc] p-4" key={title}><span className="font-mono text-[10px] text-[#9CB6C2]">0{i+1}</span><p className="mt-5 text-xl tracking-[-.04em]">{title}</p><p className="mt-2 text-[10px] uppercase tracking-[.14em] text-[#9CB6C2]">{sub}</p></div>)}</div>
  <div className="hero-node absolute left-[31%] top-[39%] h-3 w-3 rounded-full border border-[#9CB6C2] bg-[#9CB6C266]"/>
  <div className="hero-node absolute left-[57%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#D79A2B]" style={{animationDelay:"1.2s"}}/>
  <div className="hero-vector absolute left-[34%] top-[42%] h-px w-28 rotate-[-14deg] bg-[#9CB6C2aa]"/>
  <BellRing size={18} className="absolute right-[18%] top-[30%] text-[#D79A2B]"/>
 </div>
}

export function FocusVision(){
 return <div className="focus-field relative overflow-hidden border bg-[#071927] px-5 py-7 md:px-8 md:py-9">
  <TerrainLines/>
  <div className="relative"><div className="flex items-center justify-between gap-4"><p className="eyebrow text-[#8EC8F2]">One platform / multiple technologies / single operational view</p><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#D79A2B]">Under development</span></div>
  <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_auto_1.12fr_auto_.78fr] xl:items-center">
   <div><p className="mb-4 text-[10px] uppercase tracking-[.18em] text-[#8EC8F2]">Monitoring inputs</p><div className="grid grid-cols-2 gap-px bg-[#2F80C966]">{sources.map(([label,Icon])=><div className="flex items-center gap-2 bg-[#071114dd] p-4 text-[10px] uppercase tracking-[.14em] text-[#F3F5F4]" key={label as string}><Icon size={14} className="text-[#3A8DDE]"/>{label as string}</div>)}</div></div>
   <FlowArrow/>
   <div className="relative border border-[#2F80C9] bg-[#073F4Acc] p-7 text-center"><div className="absolute inset-3 border border-[#3A8DDE33]"/><Database size={19} className="mx-auto text-[#3A8DDE]"/><p className="eyebrow mt-6 text-[#8EC8F2]">Single operational view</p><h3 className="mt-3 text-4xl tracking-[-.08em]"><DTGFocusMark /></h3><p className="mt-4 text-[10px] uppercase leading-5 tracking-[.15em] text-[#F3F5F4]">Data integration<br/>Governance<br/>Escalation pathways</p></div>
   <FlowArrow/>
   <div className="grid gap-px bg-[#2F80C966]"><div className="bg-[#071114dd] p-5"><Activity size={16} className="text-[#3A8DDE]"/><p className="mt-5 text-2xl tracking-[-.06em]">Focused Actionable Insight</p><p className="body-copy mt-3">Correlation, trends and review.</p></div><div className="bg-[#071114dd] p-5"><ShieldCheck size={16} className="text-[#D79A2B]"/><p className="mt-5 text-2xl tracking-[-.06em]">Operational Decisions</p><p className="body-copy mt-3">TARP and escalation support.</p></div></div>
  </div></div>
 </div>
}

export function FocusPillars(){
 const pillars=[
  ["INTEGRATE","Bring monitoring technologies together."],
  ["VISUALISE","Create a unified operational view."],
  ["ANALYSE","Identify trends, relationships and emerging risks."],
  ["GOVERN","Support TARPs, workflows and escalation procedures."],
  ["ACT","Deliver focused actionable insight."],
 ];
 return <div className="grid gap-px bg-[#2F80C94d] md:grid-cols-5">{pillars.map(([title,body],i)=><motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="bg-[#071927] p-5" key={title}><span className={`font-mono text-[10px] ${title==="ACT"?"text-[#D79A2B]":"text-[#8EC8F2]"}`}>0{i+1}</span><h3 className={`mt-8 text-xl tracking-[-.045em] ${title==="ACT"?"text-[#D79A2B]":"text-[#F3F5F4]"}`}>{title}</h3><p className="body-copy mt-3">{body}</p></motion.div>)}</div>
}

export function IntegrationVisual(){
 const inputs=["Radar","GNSS","Prisms","LiDAR","InSAR","Seismic","Environmental","Operational"];
 return <div className="relative min-h-[520px] overflow-hidden border hairline bg-[#071114] p-6 md:p-8">
  <TerrainLines/>
  <div className="relative flex items-center justify-between"><p className="eyebrow">Sensor streams / operational workflow</p><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#D79A2B]">Technology agnostic</span></div>
  <div className="relative mt-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
   <div className="grid grid-cols-2 gap-px bg-[#9CB6C224]">{inputs.map((input,i)=><motion.div initial={{opacity:.55,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="relative bg-[#0E1823dd] p-4 text-[10px] uppercase tracking-[.15em] text-[#F3F5F4]" key={input}><span className="mr-3 font-mono text-[#9CB6C2]">0{i+1}</span>{input}</motion.div>)}</div>
   <div className="relative min-h-[310px] border border-[#073F4A] bg-[#0E1823cc] p-6">
    <div className="absolute left-[-60px] top-1/2 hidden h-px w-[120px] bg-[#9CB6C255] lg:block"><motion.span className="absolute -top-1 h-2 w-2 rounded-full bg-[#D79A2B]" animate={{x:["0px","118px"]}} transition={{duration:3.5,repeat:Infinity,ease:"linear"}}/></div>
    <CrosshairIcon/>
    <p className="eyebrow">Single operational view</p>
    <h3 className="mt-10 text-5xl tracking-[-.08em]">Correlate.<br/>Review.<br/><span className="text-[#D79A2B]">Act.</span></h3>
    <p className="body-copy mt-6 max-w-sm">Multiple technologies converging into one workflow for engineering review, escalation and decision support.</p>
   </div>
  </div>
 </div>
}

function CrosshairIcon(){return <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#9CB6C244]"><div className="absolute left-1/2 top-0 h-full w-px bg-[#9CB6C222]"/><div className="absolute left-0 top-1/2 h-px w-full bg-[#9CB6C222]"/><motion.div className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#D79A2B]" animate={{scale:[1,1.6,1],opacity:[1,.45,1]}} transition={{duration:2.8,repeat:Infinity}}/></div>}

function FlowArrow(){return <div className="relative mx-auto h-10 w-px overflow-hidden bg-[#2F80C9] xl:h-px xl:w-12"><motion.span className="absolute h-2 w-2 rounded-full bg-[#3A8DDE]" animate={{y:["-8px","42px"],x:["-4px","-4px"]}} transition={{duration:2.8,repeat:Infinity,ease:"linear"}}/><motion.span className="absolute hidden h-2 w-2 rounded-full bg-[#3A8DDE] xl:block" animate={{x:["-8px","54px"],y:["-4px","-4px"]}} transition={{duration:2.8,repeat:Infinity,ease:"linear"}}/></div>}
function TerrainLines(){return <svg className="hero-contours absolute inset-0 h-full w-full opacity-40" viewBox="0 0 900 430" fill="none" aria-hidden="true"><path d="M-20 334C119 261 190 293 296 229C407 163 476 182 574 124C671 67 771 99 930 16" stroke="#9CB6C2" strokeOpacity=".36"/><path d="M-20 376C139 309 211 340 326 271C435 206 506 225 606 167C702 111 799 140 930 74" stroke="#9CB6C2" strokeOpacity=".2"/><path d="M-20 412C144 353 251 383 367 320C481 258 555 268 656 216C756 165 838 190 930 142" stroke="#D79A2B" strokeOpacity=".24"/><path d="M35 61L209 142L385 88L541 168L718 101L872 184" stroke="#9CB6C2" strokeOpacity=".14"/><path d="M209 142L367 320M385 88L326 271M541 168L606 167M718 101L656 216" stroke="#9CB6C2" strokeOpacity=".12"/></svg>}
