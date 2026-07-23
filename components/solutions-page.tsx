"use client";

// Solutions — the client's SITUATION axis ("who you are / what condition you're in"), completing
// Services (what we do) + Applications (where we work). One rich page, six situations, no sub-pages.
// Chrome (nav/footer) comes from the global layout; this renders only the page body.
//
// TWO HONEST REWRITES — DO NOT UNDO:
//  1. Situation 04 is engagement-scoped. NEVER reintroduce "no commission", "no vendor lock-in" or
//     "we sell no hardware" — DTG distributes hardware in Indonesia, so a company-wide financial
//     claim is indefensible.
//  2. Situation 06 is DTG Focus(TM). Framing per CLAUDE.md §3 (amended 2026-07-18): Focus is BUILT
//     AND RUNNING and used in DTG's own delivery; individual capabilities can be set up for a client
//     on request; complete coverage across every source is still being completed. NEVER write "in
//     development", "roadmap", "coming soon", "not yet available" or "preview" — and equally never
//     promise complete integrated coverage today. Frame delivery consultatively.
//
//     ⚠️ THIS COMMENT USED TO SAY THE OPPOSITE — it instructed the reader to KEEP an "In development"
//     pill, a "Where DTG is heading" column title and a roadnote saying Focus was "not yet
//     available". That was correct when written (a50a125, 2026-07-17, retiring a purchasability
//     over-claim) and became a violation the moment §3 was amended the next day. A guard comment
//     that names a specific artefact to preserve is a SINGLE-INSTANCE GENERATOR: it defeats the next
//     fixer, who reads it and correctly leaves the violation alone. Guard the RULE, not the artefact.
//
// Images are AI-generated placeholders (public/images/solutions/*).

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { DTGFocusMark, renderTrademarkText } from "@/components/brand";

type Situation = {
  id: string;
  num: string;
  who: string;
  quote: string;
  desc: string;
  img: string;
  imgAlt: string;
  wrong: string[];
  helpTitle: string;
  helps: string[];
  roadnote?: ReactNode;
  outcome: string;
  chips: [string, string][];
};

const situations: Situation[] = [
  {
    id: "s1",
    num: "01 · Most common",
    who: "Asset owners without a monitoring team",
    quote: "“We have the sensors, but no one to watch them.”",
    desc: "You've invested in monitoring technology — slope stability radar, prisms, InSAR, piezometers, extensometers. The hardware is capable. But monitoring only protects a site when competent people are actually watching, continuously, and know how to act.",
    img: "/images/solutions/solution-01-unwatched.png",
    imgAlt: "An empty monitoring desk at night, screens showing deformation dashboards above a lit open pit.",
    wrong: [
      "No competent coverage on nights, weekends or shift changes — exactly when incidents happen.",
      "Alarms trigger but aren't reviewed in time, or real ones are lost to alarm fatigue.",
      "Movement that precedes a failure goes unseen because nothing is being correlated.",
      "No spare capacity to produce weekly and monthly reporting, or post-event back-analysis.",
      "Sensor placement is never reviewed, so blind spots persist.",
    ],
    helpTitle: "How DTG helps",
    helps: [
      "We become your monitoring team — continuous, competent review of your data and alarms, including out-of-hours.",
      "Structured escalation the moment thresholds are breached.",
      "Weekly and monthly reporting produced for you.",
      "Failure and alarm back-analysis after events.",
      "Review of sensor placement to close blind spots.",
    ],
    outcome:
      "Continuous, competent eyes on your site — fewer missed events, defensible records, and your people freed from the watch.",
    chips: [
      ["Remote monitoring", "/services/remote-monitoring"],
      ["Reporting & back-analysis", "/services/reporting-back-analysis"],
    ],
  },
  {
    id: "s2",
    num: "02",
    who: "Overstretched geotechnical teams",
    quote: "“We have data, but it's not turning into decisions.”",
    desc: "You have a geotechnical engineer, but the monitoring workload has outpaced them. The data exists; the capacity to turn it into governed, defensible decisions doesn't.",
    img: "/images/solutions/solution-02-overwhelmed.png",
    imgAlt: "A single engineer dwarfed by a wall of monitoring screens and dashboards.",
    wrong: [
      "Alarms trigger constantly — real signals are lost in the noise.",
      "Failures and precursors are missed for lack of time to correlate.",
      "Each sensor type has its own separate report; nothing combines into one picture.",
      "No consistent basis for what to trust, or when to escalate.",
    ],
    helpTitle: "How DTG helps",
    helps: [
      "We structure, quality-test and correlate data across your sensor types into one governed view.",
      "We tune alarm thresholds to cut false triggers.",
      "We give your engineer defensible, combined interpretation instead of raw feeds.",
      "One overview, one method — repeatable and traceable.",
    ],
    outcome: "Fewer false alarms, earlier real detection, and one combined view your team can defend.",
    chips: [
      ["Data analytics", "/services/data-analytics-automation"],
      ["Technology integration", "/services/technology-integration"],
    ],
  },
  {
    id: "s3",
    num: "03",
    who: "Operators & consultants running client sites",
    quote: "“We run sites for clients, but have no geotech of our own.”",
    desc: "You operate or manage sites on behalf of the asset owner — but you don't carry in-house geotechnical monitoring capability to stand behind the data you're accountable for.",
    img: "/images/solutions/solution-03-operator.png",
    imgAlt: "Two workers in different hi-vis discussing a plan while overlooking an open pit.",
    wrong: [
      "You're accountable to your client for monitoring you can't independently interpret.",
      "No in-house geotech to review alarms, produce reports, or defend decisions.",
      "The reporting and traceability your contract requires needs a team you don't have.",
    ],
    helpTitle: "How DTG helps",
    helps: [
      "We provide the independent monitoring and review layer you place in front of your client.",
      "Delivered as your capability, or working alongside your team.",
      "Reporting and traceability built for contractual accountability.",
    ],
    outcome: "Credible geotechnical capability without hiring a team — something defensible to hand your client.",
    chips: [
      ["Remote monitoring", "/services/remote-monitoring"],
      ["Technical advisory", "/services/technical-advisory"],
    ],
  },
  {
    id: "s4",
    num: "04",
    who: "Teams selecting monitoring technology",
    quote: "“We're choosing monitoring technology and don't know what to pick.”",
    desc: "You need to invest, but the market is full of vendors each selling their own system — and you want advice that starts from your requirement, not from a product.",
    img: "/images/solutions/solution-04-choosing.png",
    imgAlt: "A geotechnical monitoring trade-show floor with competing sensor systems on display.",
    wrong: [
      "It's hard to compare monitoring technologies objectively.",
      "Real risk of buying the wrong system for the actual ground risk.",
      "Vendor advice is rarely neutral.",
    ],
    helpTitle: "How DTG helps",
    // Engagement-scoped ONLY. Do not reintroduce commission / vendor-lock-in claims.
    helps: [
      "Advice that starts from your ground risk and your requirement — not from a product.",
      "Objective comparison of the options against what you actually need.",
      "On your site, what we recommend is driven by your risk and your data.",
    ],
    outcome: "The right technology for your risk, chosen with confidence.",
    chips: [["Technical advisory", "/services/technical-advisory"]],
  },
  {
    id: "s5",
    num: "05",
    who: "Mature teams wanting assurance",
    quote: "“We want an independent second opinion.”",
    desc: "You already have the engineers, the systems and the process. But on critical assets, you want an outside expert to audit and confirm what you're seeing.",
    img: "/images/solutions/solution-05-assurance.png",
    imgAlt: "A monitoring control room where a team reviews deformation dashboards together.",
    wrong: [
      "Internal review can miss what a fresh expert sees.",
      "Critical assets warrant independent assurance.",
      "High-stakes decisions are stronger with a defensible second opinion.",
    ],
    helpTitle: "How DTG helps",
    helps: [
      "Specialist third-party review of your monitoring, interpretation and escalation.",
      "An independent audit against good practice.",
      "A defensible second opinion on the calls that matter.",
    ],
    outcome: "Independent assurance on the assets where it matters most.",
    chips: [["Technical advisory", "/services/technical-advisory"]],
  },
  {
    id: "s6",
    num: "06",
    who: "Teams needing an integrated platform",
    quote: "“We need one integrated view of everything.”",
    desc: "You have the people and the systems, but the work is scattered across tools. No single place brings every geotechnical sensor, report and decision together.",
    img: "/images/solutions/solution-06-fragmented.png",
    imgAlt: "A cluttered desk of disconnected tools — scattered printouts, spreadsheets and separate monitoring windows.",
    wrong: [
      "Separate tools for each sensor type.",
      "No single overview; traceability is manual.",
      "Decision records are scattered across systems.",
    ],
    helpTitle: "How DTG helps",
    helps: [
      "DTG Focus™ brings monitoring review, traceability and decision records into one governed environment — built and running, and used in DTG's own delivery today.",
      "A single overview across all your geotechnical sensors, within DTG's wider service approach.",
    ],
    roadnote: (
      <p>
        <b>Straight with you:</b> <DTGFocusMark /> is built and running — we use it every day in our
        own delivery, and individual capabilities can be set up for your operation on request.
        Complete coverage across every source in one place is still being completed, so we start from
        what your teams most need to see. If a platform is what you&rsquo;re after, talk to us about
        what we can set up for you.
      </p>
    ),
    outcome: "An integrated, governed view of what matters most — with every decision traceable.",
    chips: [
      ["DTG Focus™", "/dtg-focus"],
      ["Data analytics", "/services/data-analytics-automation"],
    ],
  },
];

// Hero signature: six starting points converging on one approach (no image — Solutions isn't a place).
function ConvergeSignature() {
  const paths = [
    "M24,38 C170,38 230,138 370,150",
    "M24,83 C170,83 240,143 370,150",
    "M24,128 C170,128 250,147 370,150",
    "M24,173 C170,173 250,153 370,150",
    "M24,218 C170,218 240,157 370,150",
    "M24,262 C170,262 230,162 370,150",
  ];
  const dots = [38, 83, 128, 173, 218, 262];
  return (
    <div className="solx-hero__sig" aria-hidden="true">
      <svg viewBox="0 0 540 300" fill="none" role="img" aria-label="Six different starting points converging on one approach">
        <g stroke="#8aa4a9" strokeWidth="1.3" opacity=".6" fill="none">
          {paths.map((d) => (
            <path className="ln" d={d} key={d} />
          ))}
        </g>
        <g className="dot" fill="#8aa4a9">
          {dots.map((cy) => (
            <circle cx="24" cy={cy} r="3.5" key={cy} />
          ))}
        </g>
        <g className="out">
          <path d="M370,150 L500,150" stroke="var(--accent)" strokeWidth="2.6" />
          <circle cx="370" cy="150" r="7" fill="var(--accent)" />
          <circle cx="500" cy="150" r="5" fill="var(--accent)" />
        </g>
      </svg>
    </div>
  );
}

export function SolutionsPage() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-solx-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="solx-page">
      {/* HERO — no image; deep-teal gradient + converging-paths signature */}
      <header className="solx-hero">
        <ConvergeSignature />
        <div className="solx-hero__content site-container" data-solx-reveal>
          <span className="solx-eyebrow solx-hero__eyebrow">Solutions</span>
          <h1 className="solx-hero__title">
            Start where
            <br />
            you are
          </h1>
          <p className="solx-hero__lead">
            Every site comes to monitoring from a different place — no team to watch the data, a team
            stretched too thin, or no way to prove what you&rsquo;re seeing.{" "}
            <b>Find the situation that sounds like yours.</b>
          </p>
        </div>
        <span className="solx-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* INTRO + INDEX */}
      <section className="solx-intro">
        <div className="site-container">
          <div className="solx-intro__grid">
            <div data-solx-reveal>
              <span className="solx-eyebrow">Six situations</span>
              <h2 className="solx-intro__title">Different starting points. The same discipline.</h2>
            </div>
            <div data-solx-reveal>
              <p>
                DTG doesn&rsquo;t sell one package. What you need depends on what you already have —
                the sensors, the people, the systems, and the gaps between them.
              </p>
              <p>
                These are the six situations we&rsquo;re most often called into. Find yours, and
                you&rsquo;ll see exactly what DTG would bring to it.
              </p>
            </div>
          </div>
          <nav className="solx-index" aria-label="Six situations" data-solx-reveal>
            {situations.map((s, i) => (
              <a href={`#${s.id}`} className="solx-ix" key={s.id}>
                <span className="solx-ix__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="solx-ix__t">{s.who}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SIX SITUATIONS */}
      {/* Alternation is explicit (index-based), not :nth-of-type — which counts <section> siblings
          and would silently flip if a section were added above. --flip = raised band + image right. */}
      {situations.map((s, i) => (
        <section className={`solx-sit${i % 2 === 0 ? " solx-sit--flip" : ""}`} id={s.id} key={s.id}>
          <div className="site-container">
            <div className="solx-sit__hook" data-solx-reveal>
              <div className="solx-sit__img">
                <Image src={s.img} alt={s.imgAlt} fill sizes="(max-width:900px) 100vw, 45vw" className="solx-sit__pic" />
                <span className="solx-sit__wash" aria-hidden="true" />
              </div>
              <div>
                <div className="solx-sit__num">{s.num}</div>
                {/* The "In development" pill rendered here (situation 06 only, behind a `roadmap`
                    flag) was removed 2026-07-18: CLAUDE.md §3 forbids "in development" framing for
                    DTG Focus™ — the tools are built and running. The `roadmap` flag and the Clock
                    import went with it. `.solx-roadmap` in globals.css is now unused → dead-code list. */}
                <h2 className="solx-sit__who">{s.who}</h2>
                <p className="solx-sit__quote">{s.quote}</p>
                <p className="solx-sit__desc">{s.desc}</p>
              </div>
            </div>

            <div className="solx-sit__detail" data-solx-reveal>
              <div className="solx-sc">
                <div className="solx-sc__k">What&rsquo;s going wrong</div>
                <ul>
                  {s.wrong.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="solx-sc solx-sc--help">
                <div className="solx-sc__k">{s.helpTitle}</div>
                <ul>
                  {s.helps.map((item) => (
                    <li key={item}>{renderTrademarkText(item)}</li>
                  ))}
                </ul>
              </div>
            </div>

            {s.roadnote ? (
              <div className="solx-roadnote" data-solx-reveal>
                {s.roadnote}
              </div>
            ) : null}

            <div className="solx-sit__foot" data-solx-reveal>
              <div className="solx-outcome">
                <div className="solx-outcome__k">Outcome</div>
                <p>{s.outcome}</p>
              </div>
              <div className="solx-chips">
                {s.chips.map(([label, href]) => (
                  <Link href={href} className="solx-chip" key={href + label}>
                    {renderTrademarkText(label)}
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="solx-cta">
        <div className="site-container" data-solx-reveal>
          <h2>None of these quite you?</h2>
          <p>
            Most sites are a mix. Tell us where you&rsquo;re starting from and we&rsquo;ll be
            straight about what DTG would bring.
          </p>
          <Link href="/contact" className="solx-btn">
            Talk to DTG
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
