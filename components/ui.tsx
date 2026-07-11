"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export function Reveal({children,className="",delay=0}:{children:React.ReactNode,className?:string,delay?:number}){
 return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.85,delay,ease:[.16,1,.3,1]}} className={className}>{children}</motion.div>
}
export function PageHero({kicker,title,body,index}:{kicker:React.ReactNode,title:React.ReactNode,body:React.ReactNode,index:string}){
 return <section className="grid-bg grid-drift relative overflow-hidden border-b hairline pt-36"><div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full border border-[#073F4A24]"><div className="scan"/></div><div className="shell relative pb-20 pt-10 md:pb-24"><div className="flex justify-between"><p className="eyebrow">{kicker}</p><p className="font-mono text-[10px] tracking-[.15em] text-[#9CB6C2]">DTG / {index}</p></div><h1 className="headline mt-11 max-w-5xl">{title}</h1><p className="subhead mt-6 max-w-2xl">{body}</p></div></section>
}
export function SectionLabel({children,index}:{children:React.ReactNode,index?:string}){return <div className="mb-8 flex items-center gap-4"><span className="eyebrow">{children}</span><span className="h-px w-10 bg-[#073F4A66]"/>{index&&<span className="font-mono text-[10px] text-[#9CB6C2]">{index}</span>}</div>}
export function CTA(){return <section className="grid-bg grid-drift border-t hairline"><div className="shell py-24 md:py-32"><p className="eyebrow">Integrate. Govern. Decide.</p><h2 className="headline mt-7 max-w-5xl">Ready to turn monitoring data into informed, defensible decisions?</h2><Link className="button mt-9" href="/contact">CONTACT <ArrowUpRight size={14}/></Link></div></section>}
export function InlineLink({href,children}:{href:string,children:React.ReactNode}){return <Link href={href} className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[#9CB6C2] transition hover:text-[#D79A2B]">{children}<ChevronRight size={13}/></Link>}
