"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Activity,
  ArrowUp,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Database,
  Layers3,
  type LucideIcon,
  Menu,
  Mountain,
  Network,
  RadioTower,
  ShieldCheck,
  Target,
  UserRound,
  X,
} from "lucide-react";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { renderTrademarkText } from "@/components/brand";
import { SiteFooter } from "@/components/SiteFooter";

type MegaMenuItem = [string, string, string, LucideIcon];
type MobileNavItem = [string, string];
type MobileNavSection = {
  label: string;
  href: string;
  items?: MobileNavItem[];
};
type MegaMenu = {
  label: string;
  eyebrow: string;
  title: string;
  statement: string;
  ctaLabel: string;
  ctaHref: string;
  pointer: string;
  items: MegaMenuItem[];
};

const menus = [
  {
    label: "About",
    eyebrow: "ABOUT DTG",
    title: "Independent monitoring support.",
    statement:
      "Learn how DTG supports monitoring review, technical assurance, vendor-independent advice and decision-ready outcomes.",
    ctaLabel: "EXPLORE ABOUT DTG",
    ctaHref: "/about",
    pointer: "25%",
    items: [
      ["Purpose & Principles", "Why DTG exists and how we work.", "/about/purpose-principles", Target],
      ["Vendor Independence", "Objective review across technologies and systems.", "/about/vendor-independence", ShieldCheck],
      ["Our Approach", "Integrate, govern and decide.", "/about/our-approach", Network],
      ["Technical Assurance", "Traceable review for defensible decisions.", "/about/technical-assurance", Layers3],
      ["Leadership", "Technical and mining leadership.", "/about/leadership", UserRound],
    ] satisfies MegaMenuItem[],
  },
  {
    label: "Services",
    eyebrow: "SERVICES",
    title: "Monitoring support, clearly structured.",
    statement:
      "Explore how DTG supports monitoring review, reporting, technology integration, analytics and advisory support.",
    ctaLabel: "EXPLORE SERVICES",
    ctaHref: "/services",
    pointer: "38%",
    items: [
      [
        "Remote Monitoring",
        "Live monitoring, alarms and TARP-based escalation.",
        "/services/remote-monitoring",
        RadioTower,
      ],
      [
        "Reporting & Back-Analysis",
        "Independent reports, event reviews and failure analysis.",
        "/services/reporting-back-analysis",
        Activity,
      ],
      [
        "Technology Integration",
        "Vendor-independent technology review and integration.",
        "/services/technology-integration",
        Network,
      ],
      [
        "Data Analytics",
        "Cleansing, correlation, trend analysis and automation support.",
        "/services/data-analytics-automation",
        Database,
      ],
      [
        "Technical Advisory",
        "Risk support, monitoring review and capability transfer.",
        "/services/technical-advisory",
        ShieldCheck,
      ],
    ] satisfies MegaMenuItem[],
  },
  {
    label: "Applications",
    eyebrow: "APPLICATIONS",
    title: "Monitoring support across complex operating environments.",
    statement:
      "Explore where DTG supports monitoring review, reporting, interpretation and decision confidence across mining, tailings, underground and infrastructure environments.",
    ctaLabel: "EXPLORE APPLICATIONS",
    ctaHref: "/applications",
    pointer: "56%",
    items: [
      [
        "Open Pit Mining",
        "Slope monitoring, alarms and deformation trends in active mining environments.",
        "/applications/open-pit-mining",
        Mountain,
      ],
      [
        "Tailings Storage Facilities",
        "Long-term deformation review, reporting traceability and monitoring assurance.",
        "/applications/tailings-storage-facilities",
        Layers3,
      ],
      [
        "Underground Mining",
        "Convergence, SLAM LiDAR and spatial change review.",
        "/applications/underground-mining",
        Activity,
      ],
      [
        "Infrastructure & Civil",
        "Ground movement, asset deformation and corridor monitoring.",
        "/applications/infrastructure-civil",
        Building2,
      ],
    ] satisfies MegaMenuItem[],
  },
];

// Sprint 3: About is now a single nav item (no dropdown). menus[0] retained as data only
// (keeps its icon imports in use); it is no longer rendered as a mega-menu.
const navigationMenus: MegaMenu[] = [menus[1], menus[2]];

const mobileNavigationSections: MobileNavSection[] = [
  {
    label: "About",
    href: "/about",
    items: [], // Sprint 3: single consolidated page — renders as a direct link (no accordion)
  },
  {
    label: "Services",
    href: "/services",
    items: [
      ["Remote Monitoring", "/services/remote-monitoring"],
      ["Reporting & Back-Analysis", "/services/reporting-back-analysis"],
      ["Technology Integration", "/services/technology-integration"],
      ["Data Analytics", "/services/data-analytics-automation"],
      ["Technical Advisory", "/services/technical-advisory"],
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    items: [
      ["Open Pit Mining", "/applications/open-pit-mining"],
      ["Tailings Storage Facilities", "/applications/tailings-storage-facilities"],
      ["Underground Mining", "/applications/underground-mining"],
      ["Infrastructure & Civil", "/applications/infrastructure-civil"],
    ],
  },
  {
    label: "DTG Focus",
    href: "/dtg-focus",
    items: [
      ["DTG Focus Overview", "/dtg-focus"],
      ["Analytics", "/dtg-focus/data-cleansing"],
      ["Reporting", "/dtg-focus/automated-reporting"],
      ["Monitoring Review", "/dtg-focus/decision-support"],
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Header(){
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  const [mobileAccordion,setMobileAccordion]=useState<string|null>(null);
  const [active,setActive]=useState<string|null>(null);
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
  const openMenu=(menu:MegaMenu, element?:HTMLDetailsElement)=>{
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
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){
        setOpen(false);
        setMobileAccordion(null);
        closeMenu();
      }
    };
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
  <header
    className={`site-header fixed inset-x-0 top-0 z-50 transition duration-300 ease-out ${hidden&&!open?"-translate-y-[120%]":"translate-y-0"} ${scrolled||open||active?"is-scrolled":""} ${active?"header--mega-open":""}`}
    data-mega-open={active ? "true" : "false"}
    data-mobile-open={open ? "true" : "false"}
    data-scrolled={scrolled ? "true" : "false"}
    onMouseLeave={scheduleClose}
    onMouseEnter={keepOpen}
  >
    <div className="site-container site-header__inner">
      <div className="site-nav flex h-16 items-center justify-between">
        <div className="site-brand-cluster">
          <Link href="/" aria-label="Digital Twin Geotechnical home" className="logo-lockup">
            <Image src="/images/dtg-logo-broken-white-mark.png" alt="DTG" width={552} height={198} priority className="h-auto w-[88px]"/>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/about" className="nav-link" aria-current={pathname==="/about"||pathname?.startsWith("/about/")?"page":undefined} onMouseEnter={closeMenu} onMouseMove={closeMenu} onMouseOver={closeMenu} onPointerEnter={closeMenu} onPointerMove={closeMenu} onFocus={closeMenu}>About</Link>
          {navigationMenus.map((menu)=>{
            const isCurrentSection = pathname === menu.ctaHref || pathname?.startsWith(`${menu.ctaHref}/`);
            return <details key={menu.label} className="nav-details" name="site-menu" onMouseEnter={(event)=>openMenu(menu,event.currentTarget)} onPointerEnter={(event)=>openMenu(menu,event.currentTarget)} onMouseMove={(event)=>openMenu(menu,event.currentTarget)} onPointerMove={(event)=>openMenu(menu,event.currentTarget)} onToggle={(event)=>{if(event.currentTarget.open){setHidden(false); setActive(menu.label);}else if(active===menu.label){setActive(null);}}}>
            <summary className="nav-trigger" aria-haspopup="true" aria-current={isCurrentSection ? "page" : undefined} onMouseEnter={(event)=>openMenu(menu,event.currentTarget.parentElement as HTMLDetailsElement)} onPointerEnter={(event)=>openMenu(menu,event.currentTarget.parentElement as HTMLDetailsElement)} onMouseMove={(event)=>openMenu(menu,event.currentTarget.parentElement as HTMLDetailsElement)} onPointerMove={(event)=>openMenu(menu,event.currentTarget.parentElement as HTMLDetailsElement)}>
              <Link href={menu.ctaHref} className="nav-trigger-link" onMouseEnter={(event)=>openMenu(menu,event.currentTarget.closest(".nav-details") as HTMLDetailsElement)} onPointerEnter={(event)=>openMenu(menu,event.currentTarget.closest(".nav-details") as HTMLDetailsElement)} onMouseMove={(event)=>openMenu(menu,event.currentTarget.closest(".nav-details") as HTMLDetailsElement)} onPointerMove={(event)=>openMenu(menu,event.currentTarget.closest(".nav-details") as HTMLDetailsElement)} onClick={(event)=>{event.stopPropagation(); closeMenu();}}>{renderTrademarkText(menu.label)}</Link>
            </summary>
            <div className="mega-menu" onMouseEnter={keepOpen} onMouseLeave={scheduleClose} style={{"--mega-pointer-left": menu.pointer} as CSSProperties}>
              <button className="mega-close" type="button" onClick={(event)=>{event.preventDefault(); closeMenu();}} aria-label="Close menu">×</button>
              {/* Mega menu layout is shared across all dropdowns. Future wording updates should be made in the menu data only. Do not create separate layouts, image cards, bottom strips, or custom typography per dropdown unless the whole navigation system is intentionally redesigned. */}
              <div className="mega-inner">
                <div className="mega-intro-panel">
                  <p>{renderTrademarkText(menu.eyebrow)}</p>
                  <h3>{renderTrademarkText(menu.title)}</h3>
                  <span>{renderTrademarkText(menu.statement)}</span>
                  <Link href={menu.ctaHref} className="mega-section-cta" onClick={closeMenu}>{renderTrademarkText(menu.ctaLabel)} <ArrowUpRight size={14}/></Link>
                </div>
                <div className="mega-list-panel">
                  {menu.items.map(([title,description,href,Icon])=><Link href={href} className="mega-item" key={href} onClick={closeMenu}>
                    <span className="mega-item-icon"><Icon size={20} strokeWidth={1.55}/></span>
                    <div>
                      <span>{renderTrademarkText(title)}</span>
                      <p>{renderTrademarkText(description)}</p>
                    </div>
                    <ArrowUpRight className="mega-item-arrow" size={17}/>
                  </Link>)}
                </div>
              </div>
            </div>
          </details>})}
          <Link href="/dtg-focus" className="nav-link" aria-current={pathname?.startsWith("/dtg-focus") ? "page" : undefined} onMouseEnter={closeMenu} onMouseMove={closeMenu} onMouseOver={closeMenu} onPointerEnter={closeMenu} onPointerMove={closeMenu} onFocus={closeMenu}>{renderTrademarkText("DTG Focus™")}</Link>
          <Link href="/contact" className="nav-link" aria-current={pathname === "/contact" ? "page" : undefined} onMouseEnter={closeMenu} onMouseMove={closeMenu} onMouseOver={closeMenu} onPointerEnter={closeMenu} onPointerMove={closeMenu} onFocus={closeMenu}>Contact</Link>
          <Link href="/contact" className="button ml-2 py-3" onMouseEnter={closeMenu} onMouseMove={closeMenu} onMouseOver={closeMenu} onPointerEnter={closeMenu} onPointerMove={closeMenu} onFocus={closeMenu}>CONTACT <ArrowUpRight size={13}/></Link>
          <ThemeToggle/>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle/>
          <button className="mobile-menu-button" onClick={()=>{setHidden(false); setOpen((current)=>{ if(current) setMobileAccordion(null); return !current; });}} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation-drawer">{open?<X size={20}/>:<Menu size={20}/>}</button>
        </div>
      </div>
    </div>
  </header>
  {open&&<nav id="mobile-navigation-drawer" className="mobile-nav-panel lg:hidden" aria-label="Mobile navigation">
    <div className="mobile-nav-list">
      {mobileNavigationSections.map((section)=>{
        const isOpen=mobileAccordion===section.label;
        const isCurrent=pathname===section.href || pathname?.startsWith(`${section.href}/`);
        const sectionId=`mobile-nav-${section.label.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;

        if(!section.items?.length){
          return <Link
            href={section.href}
            className="mobile-direct"
            key={section.label}
            aria-current={isCurrent?"page":undefined}
            onClick={()=>{setOpen(false); setMobileAccordion(null);}}
          >
            {renderTrademarkText(section.label)}
            <ArrowUpRight size={14}/>
          </Link>;
        }

        return <div className={`mobile-accordion ${isOpen?"is-open":""}`} key={section.label}>
          <button
            type="button"
            className="mobile-accordion-toggle"
            aria-expanded={isOpen}
            aria-controls={sectionId}
            aria-current={isCurrent?"page":undefined}
            onClick={()=>setMobileAccordion(isOpen?null:section.label)}
          >
            <span>{renderTrademarkText(section.label)}</span>
            <ChevronDown className="mobile-accordion-icon" size={16} strokeWidth={1.7}/>
          </button>
          <div id={sectionId} className="mobile-accordion-links" hidden={!isOpen}>
            {section.items.map(([label,href])=><Link
              href={href}
              key={href}
              onClick={()=>{setOpen(false); setMobileAccordion(null);}}
            >
              {renderTrademarkText(label)}
            </Link>)}
          </div>
        </div>;
      })}
    </div>
  </nav>}
  <button className={`scroll-top ${showTop?"is-visible":""}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Scroll to top"><ArrowUp size={16}/></button>
  </>
}

export function Footer(){return <SiteFooter />}
