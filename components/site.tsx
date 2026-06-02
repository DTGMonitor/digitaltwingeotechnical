"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const links = [["Capabilities","/#capabilities"],["Selected Operations","/operations"],["Leadership","/leadership"],["DTG Focus","/focus"]];
export function Header(){
  const path=usePathname(); const [open,setOpen]=useState(false);
  return <header className="fixed top-0 z-50 w-full border-b hairline bg-[#04070Acc] backdrop-blur-xl">
    <div className="shell flex h-[74px] items-center justify-between">
      <Link href="/" aria-label="Digital Twin Geotechnical home"><Image src="/images/dtg-logo-mark-dark-ui.png" alt="Digital Twin Geotechnical" width={550} height={194} priority className="h-7 w-auto"/></Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(([label,href])=><Link key={href} href={href} className={`text-[10px] uppercase tracking-[.18em] transition ${path===href?"text-[#7BA9C7]":"text-[#96A8AD] hover:text-white"}`}>{label}</Link>)}<Link href="/contact" className="button ml-3 py-3">Initiate Briefing <ArrowUpRight size={13}/></Link></nav>
      <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><Menu size={20}/></button>
    </div>
    {open&&<div className="shell flex flex-col gap-5 border-t hairline py-6 md:hidden">{links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="text-xs uppercase tracking-[.2em] text-[#D5E0E4]">{label}</Link>)}</div>}
  </header>
}
export function Footer(){return <footer className="border-t hairline bg-[#04070A]"><div className="shell py-14"><div className="grid gap-10 border-b hairline pb-10 lg:grid-cols-[1.15fr_.85fr]"><div><p className="eyebrow">Contact DTG</p><h2 className="mt-5 max-w-2xl text-4xl tracking-[-.07em] md:text-5xl">Start a geotechnical intelligence conversation.</h2><Link href="/contact" className="button mt-7">Initiate briefing <ArrowUpRight size={13}/></Link></div><div className="grid gap-px bg-[#0E3A4514] sm:grid-cols-3">{[["Connect","intelligence@dtg.global","DTG Intelligence Centre"],["Office","Brisbane, Queensland, Australia","DTG Headquarters"],["Operations","Yogyakarta, Indonesia","DTG Remote Monitoring Centre"]].map(([label,value,description])=><div className="bg-[#081319] p-4" key={label}><p className="eyebrow">{label}</p><p className="mt-4 text-xs leading-5 text-[#D5E0E4]">{value}</p><p className="mt-3 text-[10px] leading-4 text-[#74807d]">{description}</p></div>)}</div></div><div className="flex flex-col justify-between gap-6 pt-8 text-[10px] uppercase tracking-[.17em] text-[#74807d] md:flex-row md:items-end"><Image src="/images/dtg-logo-dark-ui.png" alt="Digital Twin Geotechnical Monitoring" width={550} height={226} className="h-auto w-36"/><div>Geotechnical Foresight, Driven by Intelligence.</div><div>Australia / Indonesia / Global</div></div></div></footer>}
