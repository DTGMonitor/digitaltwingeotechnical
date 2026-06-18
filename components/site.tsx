"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { renderTrademarkText } from "@/components/brand";

const menus = [
  {
    label: "About",
    title: "About DTG",
    statement: "Independent monitoring intelligence, governance and engineering review for trusted operational outcomes.",
    visual: {
      src: "/images/dtg-command-centre.png",
      label: "About",
      caption: "Independent insight for safer operational decisions.",
      tone: "about",
    },
    items: [
      ["Who We Are", "Independent monitoring intelligence and decision support.", "/about/who-we-are"],
      ["Leadership", "Technical leadership across mining and geoscience.", "/about/leadership"],
      ["Monitoring Governance", "Independent review, assurance and operational confidence.", "/capabilities/monitoring-governance"],
      ["Technical Philosophy", "Technology-agnostic. Outcomes-driven. Evidence-based.", "/capabilities/technology-advisory"],
      ["Vision & Future", "Advancing monitoring intelligence for complex operations.", "/about/vision-future"],
    ],
  },
  {
    label: "Services",
    title: "Services",
    statement: "Independent monitoring, review, analytics and advisory support for critical geotechnical operations.",
    visual: {
      src: "/images/dtg-hero-geotechnical-corridor.png",
      label: "Services",
      caption: "From sensor data to decision-ready insight.",
      tone: "services",
    },
    items: [
      ["Remote Monitoring", "Real-time monitoring and engineering review.", "/capabilities/monitoring-intelligence"],
      ["Monitoring Intelligence", "Advanced analytics, automation and interpretation.", "/capabilities/data-intelligence"],
      ["Monitoring Advisory", "Governance, optimisation and technical guidance.", "/capabilities/monitoring-governance"],
      ["Technology Advisory", "Independent technology evaluation and selection.", "/capabilities/technology-advisory"],
      ["Training & Awareness", "Monitoring knowledge and operational readiness.", "/capabilities/training-capability-development"],
    ],
  },
  {
    label: "DTG Focus™",
    title: "DTG Focus™",
    statement: "One operational framework connecting monitoring data, engineering review, governance and decision support.",
    visual: {
      src: "/images/dtg-selected-operations.png",
      label: "DTG Focus™",
      caption: "Integrated data. Governed workflows. Confident decisions.",
      tone: "focus",
    },
    items: [
      ["Operationalising Monitoring", "DTG Focus™ connects data, workflows and engineering judgement into a single operational framework.", "/dtg-focus"],
      ["Integrate", "Connect monitoring technologies into one operational context.", "/dtg-focus/multi-sensor-integration"],
      ["Correlate", "Identify relationships across sensors, locations and datasets.", "/dtg-focus"],
      ["Analyse", "Transform monitoring data into actionable engineering insight.", "/dtg-focus/data-governance"],
      ["Govern", "Enable workflows, governance and defensible decision-making.", "/dtg-focus/decision-support"],
      ["Act", "Support timely and confident operational decisions.", "/dtg-focus/future-workflows"],
    ],
  },
  {
    label: "Applications",
    title: "Applications",
    statement: "Where DTG supports monitoring, risk management and decision-making across critical mining environments.",
    visual: {
      src: "/images/operation-gold-mining.png",
      label: "Applications",
      caption: "Open pits, tailings, underground environments and corporate technical teams.",
      tone: "applications",
    },
    items: [
      ["Active Open Pits", "Monitoring, interpretation and decision support for active pit operations.", "/operations/open-pit-mining"],
      ["Tailings Storage Facilities", "Deformation monitoring, interpretation and risk-informed decision support.", "/operations/tailings-storage-facilities"],
      ["Underground Mining", "Convergence monitoring and underground deformation intelligence.", "/operations/underground-operations"],
      ["Corporate & Consultants", "Independent review, monitoring strategy and technical assurance.", "/operations/civil-infrastructure"],
    ],
  },
];

const navigationMenus = [menus[0], menus[1], menus[3], menus[2]];

export function Header(){
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState<string|null>(null);
  const [expanded,setExpanded]=useState<string|null>(menus[0].label);
  const [hidden,setHidden]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [showTop,setShowTop]=useState(false);
  const closeTimer=useRef<ReturnType<typeof setTimeout>|null>(null);

  const closeNativeMenus=useCallback(()=>{
    document.querySelectorAll<HTMLDetailsElement>(".nav-details[open]").forEach((menu)=>{ menu.open=false; });
  },[]);
  const closeMenu=useCallback(()=>{
    if(closeTimer.current) clearTimeout(closeTimer.current);
    closeNativeMenus();
    setActive(null);
  },[closeNativeMenus]);
  const scheduleClose=()=>{
    if(closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current=setTimeout(closeMenu,300);
  };
  const keepOpen=()=>{
    if(closeTimer.current) clearTimeout(closeTimer.current);
  };
  const openMenu=(menu:typeof menus[number], element?:HTMLDetailsElement)=>{
    keepOpen();
    closeNativeMenus();
    if(element) element.open=true;
    setHidden(false);
    setActive(menu.label);
  };

  useEffect(()=>{
    let last=window.scrollY;
    const onScroll=()=>{
      const current=window.scrollY;
      setScrolled(current>80);
      setShowTop(current>window.innerHeight*.25);
      if(active&&current>last+3) closeMenu();
      if(current>80&&current>last+3&&!open) setHidden(true);
      if(current<last-3) setHidden(false);
      if(current<12) setHidden(false);
      last=current;
    };
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    const onKey=(event:KeyboardEvent)=>{ if(event.key==="Escape") closeMenu(); };
    const onPointer=(event:PointerEvent)=>{
      const target=event.target as HTMLElement;
      if(!target.closest(".site-header")) closeMenu();
    };
    document.addEventListener("keydown",onKey);
    document.addEventListener("pointerdown",onPointer);
    return ()=>{
      window.removeEventListener("scroll",onScroll);
      document.removeEventListener("keydown",onKey);
      document.removeEventListener("pointerdown",onPointer);
      if(closeTimer.current) clearTimeout(closeTimer.current);
    };
  },[open,active,closeMenu]);

  return <>
  <header className={`site-header fixed inset-x-0 top-0 z-50 transition duration-300 ease-out ${hidden?"-translate-y-[120%]":"translate-y-0"} ${scrolled||open||active?"is-scrolled":""}`} onMouseLeave={scheduleClose} onMouseEnter={keepOpen}>
    <div className="shell">
      <div className="site-nav flex h-16 items-center justify-between">
        <Link href="/" aria-label="Digital Twin Geotechnical home" className="logo-lockup">
          <Image src="/images/dtg-logo-broken-white-mark.png" alt="DTG" width={552} height={198} priority className="h-auto w-[88px]"/>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigationMenus.map((menu)=><details key={menu.label} className="nav-details" name="site-menu" onMouseEnter={(event)=>openMenu(menu,event.currentTarget)} onToggle={(event)=>{if(event.currentTarget.open){setHidden(false); setActive(menu.label);}else if(active===menu.label){setActive(null);}}}>
            <summary className="nav-trigger" aria-haspopup="true">{renderTrademarkText(menu.label)}</summary>
            <div className="mega-menu" onMouseEnter={keepOpen} onMouseLeave={scheduleClose}>
              <button className="mega-close" type="button" onClick={(event)=>{event.preventDefault(); closeMenu();}} aria-label="Close menu">×</button>
              <div className="mega-inner">
                <div className="mega-intro-panel">
                  <p>{renderTrademarkText(menu.label)}</p>
                  <h3>{renderTrademarkText(menu.title)}</h3>
                  <span>{renderTrademarkText(menu.statement)}</span>
                  <Link href={menu.items[0][2]} className="mega-section-cta" onClick={closeMenu}>Explore section <ArrowUpRight size={13}/></Link>
                </div>
                <div className="mega-list-panel">
                  {menu.items.map(([title,description,href])=><Link href={href} className="mega-item" key={href} onClick={closeMenu}>
                    <div>
                      <span>{renderTrademarkText(title)}</span>
                      <p>{renderTrademarkText(description)}</p>
                    </div>
                    <ArrowUpRight size={14}/>
                  </Link>)}
                </div>
                <MegaSectionVisual visual={menu.visual}/>
              </div>
            </div>
          </details>)}
          <Link href="/#contact" className="nav-link">Contact</Link>
          <Link href="/contact" className="button ml-2 py-3">Initiate Briefing <ArrowUpRight size={13}/></Link>
        </nav>
        <button className="mobile-menu-button lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div>
    {open&&<div className="mobile-nav-panel lg:hidden">
      <div className="shell py-6">
        {navigationMenus.map((menu)=><div className="mobile-accordion" key={menu.label}>
          <button type="button" onClick={()=>setExpanded(expanded===menu.label?null:menu.label)}>{renderTrademarkText(menu.label)}<ChevronDown size={14}/></button>
          {expanded===menu.label&&<div className="mobile-accordion-links">
            {menu.items.map(([title,,href])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{renderTrademarkText(title)}</Link>)}
          </div>}
        </div>)}
        <Link href="/#contact" className="mobile-direct" onClick={()=>setOpen(false)}>Contact</Link>
        <Link href="/contact" className="story-button mt-6 w-full justify-center" onClick={()=>setOpen(false)}>Initiate Briefing <ArrowUpRight size={14}/></Link>
      </div>
    </div>}
  </header>
  <button className={`scroll-top ${showTop?"is-visible":""}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Scroll to top"><ArrowUp size={16}/></button>
  </>
}

function MegaSectionVisual({visual}:{visual:{src:string; label:string; caption:string; tone:string}}){
  return <div className={`mega-section-visual mega-section-visual-${visual.tone}`}>
    <Image src={visual.src} alt={`${visual.label} navigation visual`} fill className="object-cover"/>
    <div className="mega-section-grid" aria-hidden="true"/>
    <div className="mega-section-lines" aria-hidden="true"/>
    <div className="mega-section-caption">
      <span>{renderTrademarkText(visual.label)}</span>
      <p>{renderTrademarkText(visual.caption)}</p>
    </div>
  </div>
}

export function Footer(){return <footer id="contact" className="footer-premium border-t hairline bg-[#0E1823]"><div className="footer-contours" aria-hidden="true"/><div className="shell relative py-16"><div className="grid gap-10 border-b hairline pb-10 lg:grid-cols-[1.15fr_.85fr]"><div><p className="eyebrow">Contact DTG</p><h2 className="mt-5 max-w-2xl text-4xl tracking-[-.07em] md:text-5xl">Start a monitoring conversation.</h2><p className="footer-tagline">Integrated Data.<br/>Informed Decisions.</p><Link href="/contact" className="button mt-7">Initiate briefing <ArrowUpRight size={13}/></Link></div><div className="grid gap-px bg-[#073F4A24] sm:grid-cols-3">{[["Connect","info@dtgeotech.com","Start a monitoring conversation"],["Office","Brisbane, Queensland, Australia","DTG Headquarters"],["Operations","Yogyakarta, Indonesia","Remote Monitoring Centre"]].map(([label,value,description])=><div className="footer-contact-card bg-[#071114] p-4" key={label}><p className="eyebrow">{label}</p><p className="mt-4 text-xs leading-5 text-[#F3F5F4]">{value}</p><p className="mt-3 text-[10px] leading-4 text-[#9CB6C2]">{description}</p></div>)}</div></div><div className="flex flex-col justify-between gap-6 pt-8 text-[10px] uppercase tracking-[.17em] text-[#9CB6C2] md:flex-row md:items-end"><Image src="/images/dtg-logo-broken-white-full.png" alt="Digital Twin Geotechnical Monitoring" width={567} height={301} className="h-auto w-40 opacity-80"/><div>Integrated Data. Informed Decisions.</div></div></div></footer>}
