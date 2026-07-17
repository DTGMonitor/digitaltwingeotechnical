// COMPLIANCE — DO NOT UNDO: DTG Focus(TM) IS NOT A PRODUCT A CLIENT CAN BUY. It is in ACTIVE
// DEVELOPMENT, DTG uses parts of it in its OWN delivery today, and it is NOT yet available to
// clients. NEVER say it is "offered", "available", "delivered through", or that clients "can" have
// it. Reconciliation line: we use it in our own delivery; it isn't yet available as a product.
//
// 🔒 The "Is DTG Focus a standalone product?" FAQ is FROZEN — copy verbatim, pending Peter's call.
// It restates CLAUDE.md §3's categorical definition, which conflicts with reality (Focus is in
// development). Patching it would make the site contradict its own governing document. Do not edit
// it until the docs and reality are reconciled (escalated, CLAUDE.md §12).
//
// The old "Positioning / What DTG is — and is not" section was CUT (user's call): it was DTG
// defending its category, and everything in it is said better in the hero lead, Vendor independence
// and the FAQ. Its one load-bearing claim — "Accountable for monitoring outcomes across systems",
// which is CONTRACTUALLY TRUE and a real differentiator — was RESCUED into the thesis section
// ("we're accountable for it"). Do not let that claim disappear.
//
// This page is bespoke-composed (like the old ContrastBlock local function), NOT built from the
// generic kit — the mockup's section shapes (editorial rows, sticky headings, aligned comparison)
// differ from what ValueGrid/StatementBand/ProcessSpine/SectionHero render, so those five are now
// orphaned (About was their only consumer). FaqAccordion + CTA ARE shared and are reused as-is.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { FaqAccordion, CTA, SectionReveals } from "@/components/sections";
import { renderTrademarkText } from "@/components/brand";

export const metadata: Metadata = {
  title: "About | Digital Twin Geotechnical",
  description:
    "DTG is an independent geotechnical monitoring, analytics and decision-support company — how we work, our principles, vendor independence, technical assurance and leadership.",
};

const capabilities: { n: string; title: string; body: string; href: string }[] = [
  { n: "01", title: "Independent monitoring review", body: "Live and scheduled review of monitoring data, alarms and TARP-based escalation.", href: "/services/remote-monitoring" },
  { n: "02", title: "Reporting & back-analysis", body: "Independent reports, event reviews and failure back-analysis.", href: "/services/reporting-back-analysis" },
  { n: "03", title: "Technology integration", body: "Vendor-independent review and integration across monitoring systems.", href: "/services/technology-integration" },
  { n: "04", title: "Data analytics & automation", body: "Cleansing, correlation, trend analysis and repeatable reporting.", href: "/services/data-analytics-automation" },
  { n: "05", title: "Technical advisory", body: "Monitoring strategy, governance, escalation design and capability transfer.", href: "/services/technical-advisory" },
];

const dtgSteps: [string, string][] = [
  ["Validate", "Quality, gaps, drift and sensor health checked before anything is interpreted. Bad data is caught here, not downstream."],
  ["Correlate", "Every source read against the others — so precursors a single sensor misses become visible."],
  ["Interpret", "Experienced judgement on what the ground is actually doing, with assumptions and uncertainty stated."],
  ["Govern", "Thresholds, TARP-aligned escalation, and a traceable record of who was told what, and when."],
];

const principles: [string, string][] = [
  ["Technical judgement, not just data", "Experienced review helps teams understand what the data means."],
  ["Validation before action", "Signals are checked for quality, reliability and operational context."],
  ["Context over isolated alarms", "Alerts are interpreted alongside related systems, events and observations."],
  ["Independent review that builds confidence", "Technology-agnostic assessment clarifies what the evidence supports."],
  ["Governance that supports escalation", "Traceable workflows help teams know what changed, who reviewed it and why."],
  ["Outcomes that stand up in the field", "Monitoring review is shaped around decisions that can be defended."],
];

// Vendor independence — aligned rows (independent DTG review | vendor-led assumption).
const vendorRows: [string, string][] = [
  ["Requirement-first", "Technology-first"],
  ["Technology-agnostic", "Brand-specific workflow"],
  ["Cross-system interpretation", "System-limited interpretation"],
  ["Evidence and context-led", "Performance claims without context"],
  ["Decision-focused and traceable", "Reporting shaped by platform capability"],
];

const assurance: [string, string][] = [
  ["Is the data reliable enough?", "Review availability, continuity, noise, gaps and instrument behaviour — before interpretation."],
  ["Do the sensors agree?", "Compare technologies and observations to make agreement, delay or contradiction visible."],
  ["Is interpretation defensible?", "Record evidence, assumptions, uncertainty, recommendations and review logic."],
  ["Can teams respond with confidence?", "Connect technical review to responsibilities, decision records and change control."],
];

const leaders = [
  {
    name: "Peter Saunders",
    role: "Founder / Director",
    src: "/images/peter-saunders-portrait.png",
    bio: "Extensive experience in geotechnical monitoring, operational implementation and monitoring service leadership — helping mining and infrastructure teams use monitoring systems as decision-support tools, not only instruments.",
    tags: ["Monitoring operations", "Technology implementation", "Monitoring governance", "Client advisory"],
  },
  {
    name: "Mark Burdett",
    role: "Founder / Director",
    src: "/images/mark-burdett-portrait.png",
    bio: "Senior mining and operational experience, with a focus on how geotechnical information supports decisions across complex mining environments.",
    tags: ["Mining leadership", "Operational risk", "Geotechnical strategy", "Governance"],
  },
];

const faqs = [
  {
    question: "Does independence mean DTG is anti-vendor?",
    answer:
      "No. Good monitoring depends on good vendors, good equipment and good implementation. Independence means assessing options objectively and keeping the monitoring requirement at the centre of the decision.",
  },
  {
    // 🔒 FROZEN — verbatim, pending Peter's CLAUDE.md-vs-reality call. Do not edit (see file header).
    question: renderTrademarkText("Is DTG Focus™ a standalone product?"),
    answer: renderTrademarkText(
      "No. DTG Focus is a supporting, governed monitoring environment within DTG's service approach — an operational decision-support platform, not a standalone SaaS product or dashboard. It is introduced only where it materially improves the solution.",
    ),
  },
  {
    question: "Is technical assurance the same as data quality control?",
    answer:
      "No. Data quality control is one part of assurance. Technical assurance also considers configuration, alarm logic, multi-sensor correlation, interpretation, escalation, reporting and governance.",
  },
  {
    question: "Does DTG replace the client geotechnical team?",
    answer:
      "No. DTG supports client teams by providing independent monitoring review, technical interpretation, workflow support and decision confidence.",
  },
  {
    question: renderTrademarkText("Do we need DTG Focus to work with DTG?"),
    answer: renderTrademarkText(
      "No. DTG's review, analytics, governance and advisory work stands on its own. DTG Focus is in active development and not yet available as a product — we use parts of it in our own delivery today, but nothing about working with DTG depends on it.",
    ),
  },
  {
    question: "Does AI make the monitoring decisions?",
    answer:
      "No. DTG's position is engineering judgement supported by advanced analytics. AI and automation assist review and reporting; they never replace engineering judgement or autonomously identify failures.",
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="ab-page">
      <SectionReveals attr="ab-reveal" />

      {/* HERO — cinematic, no image */}
      <header className="ab-hero" aria-labelledby="about-hero-title">
        <div className="ab-hero__content site-container" data-ab-reveal>
          <span className="ab-eyebrow ab-hero__eyebrow">About DTG</span>
          <h1 id="about-hero-title" className="ab-hero__title">
            Who we are
          </h1>
          <p className="ab-hero__lead">
            An independent geotechnical monitoring, analytics and decision-support company — the
            layer between your instruments and the decisions you have to defend.
          </p>
          <div className="ab-hero__btns">
            <Link href="/contact" className="ab-btn">
              Start a conversation <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="ab-btn ab-btn--ghost">
              Explore services
            </Link>
          </div>
        </div>
        <span className="ab-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* THESIS — a moment. Rescues the "accountable" claim. */}
      <section className="ab-thesis" aria-labelledby="ab-thesis-title">
        <div className="site-container">
          <span className="ab-eyebrow ab-thesis__eyebrow" data-ab-reveal>
            The monitoring gap
          </span>
          <h2 id="ab-thesis-title" className="ab-thesis__h" data-ab-reveal>
            More data does not automatically create clearer decisions.
          </h2>
          <div className="ab-thesis__grid" data-ab-reveal>
            <p>
              Monitoring technology has advanced faster than the systems used to interpret, govern
              and act on it. The market has strong technology providers.
            </p>
            <p>
              The missing layer is <b>independent responsibility for monitoring outcomes</b> — across
              mixed technologies, teams and workflows. That layer is what DTG is, and we&rsquo;re
              accountable for it. Not advising from the sidelines.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — editorial rows */}
      <section className="ab-caps" aria-labelledby="ab-caps-title">
        <div className="site-container">
          <div className="ab-caps__head" data-ab-reveal>
            <span className="ab-eyebrow">What we do</span>
            <h2 id="ab-caps-title" className="ab-h2">
              Five capabilities. One independent layer.
            </h2>
          </div>
          <div className="ab-caps__list">
            {capabilities.map((cap) => (
              <Link key={cap.href} href={cap.href} className="ab-cap" data-ab-reveal>
                <span className="ab-cap__n" aria-hidden="true">
                  {cap.n}
                </span>
                <span className="ab-cap__t">{cap.title}</span>
                <span className="ab-cap__d">{cap.body}</span>
                <span className="ab-cap__a" aria-hidden="true">
                  <ArrowRight size={22} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DTG WORKS — deep-teal band, sticky heading + stages. #how-dtg-works MUST survive. */}
      <section className="ab-how" id="how-dtg-works" aria-labelledby="how-dtg-works-title">
        <div className="site-container ab-how__grid">
          <div className="ab-how__stick" data-ab-reveal>
            <span className="ab-eyebrow ab-how__eyebrow">How DTG works</span>
            <div className="ab-how__rule" aria-hidden="true" />
            <h2 id="how-dtg-works-title" className="ab-how__title">
              Inputs, independent review, governed outcomes.
            </h2>
            <p>Your data goes in. Our review sits in the middle. What comes out is a decision that holds up.</p>
          </div>
          <div className="ab-how__stages">
            <div className="ab-stage" data-ab-reveal>
              <div className="ab-stage__top">
                <div className="ab-stage__n" aria-hidden="true">01</div>
                <div className="ab-stage__k">Inputs · yours</div>
              </div>
              <h3>Whatever you already run</h3>
              <p className="ab-stage__lead">
                Across any vendor or platform. We don&rsquo;t ask you to standardise, or replace what works.
              </p>
              <ul className="ab-stage__l">
                <li>Slope stability radar</li>
                <li>GNSS and prisms</li>
                <li>InSAR and LiDAR</li>
                <li>SLAM LiDAR</li>
                <li>Piezometers, extensometers</li>
                <li>Seismic and site records</li>
              </ul>
            </div>

            <div className="ab-stage ab-stage--dtg" data-ab-reveal>
              <span className="ab-stage__badge">This is DTG</span>
              <div className="ab-stage__top">
                <div className="ab-stage__n" aria-hidden="true">02</div>
                <div className="ab-stage__k">Independent review · ours</div>
              </div>
              <h3>Engineering judgement, applied continuously</h3>
              <p className="ab-stage__lead">
                Everything above arrives as raw data. It leaves as something a person can act on. This
                is the work in between — and the part nobody else is doing independently.
              </p>
              <ul className="ab-steps4">
                {dtgSteps.map(([label, body]) => (
                  <li key={label}>
                    <b>{label}</b>
                    <span>{body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ab-stage" data-ab-reveal>
              <div className="ab-stage__top">
                <div className="ab-stage__n" aria-hidden="true">03</div>
                <div className="ab-stage__k">Outcomes · yours</div>
              </div>
              <h3>Something you can defend</h3>
              <p className="ab-stage__lead">Not a dashboard. A position, with the reasoning attached.</p>
              <ul className="ab-stage__l">
                <li>Escalation that fires when it should</li>
                <li>— and not when it shouldn&rsquo;t</li>
                <li>Interpretation with its limits stated</li>
                <li>Records that hold up in audit</li>
                <li>Traceable decisions</li>
                <li>Your engineers freed for engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — sticky heading, flowing statements */}
      <section className="ab-prin" aria-labelledby="ab-prin-title">
        <div className="site-container ab-prin__grid">
          <div className="ab-prin__head" data-ab-reveal>
            <span className="ab-eyebrow">Purpose &amp; principles</span>
            <h2 id="ab-prin-title" className="ab-h2">
              The principles that protect decision quality.
            </h2>
          </div>
          <div className="ab-prin__list">
            {principles.map(([title, body]) => (
              <div className="ab-pn" key={title} data-ab-reveal>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR INDEPENDENCE — aligned comparison */}
      <section className="ab-vend" aria-labelledby="ab-vend-title">
        <div className="site-container">
          <div className="ab-vend__head" data-ab-reveal>
            <span className="ab-eyebrow">Vendor independence</span>
            <h2 id="ab-vend-title" className="ab-h2">
              Independence does not mean anti-vendor.
            </h2>
            <p>
              Strong monitoring depends on good technology and good implementation. Independence means
              keeping the monitoring requirement at the centre of the decision — not the product.
            </p>
          </div>
          <div className="ab-vend__table" data-ab-reveal>
            <div className="ab-vr ab-vr--head">
              <div className="ab-vr__dtg">Independent DTG review</div>
              <div className="ab-vr__v">Vendor-led assumptions</div>
            </div>
            {vendorRows.map(([dtg, vendor]) => (
              <div className="ab-vr" key={dtg}>
                <div className="ab-vr__dtg">{dtg}</div>
                <div className="ab-vr__v">{vendor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL ASSURANCE — four questions */}
      <section className="ab-assur" aria-labelledby="ab-assur-title">
        <div className="site-container">
          <div className="ab-assur__head" data-ab-reveal>
            <span className="ab-eyebrow">Technical assurance</span>
            <h2 id="ab-assur-title" className="ab-h2">
              Four questions we ask of every monitoring system.
            </h2>
            <p>
              Assurance isn&rsquo;t a checklist completed at the end of a project. It&rsquo;s a
              structured way of asking whether monitoring information can be trusted, understood and
              defended.
            </p>
          </div>
          <div className="ab-assur__grid">
            {assurance.map(([q, a]) => (
              <div className="ab-aq" key={q} data-ab-reveal>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP — editorial, role above name */}
      <section className="ab-lead" aria-labelledby="ab-lead-title">
        <div className="site-container">
          <div className="ab-lead__head" data-ab-reveal>
            <span className="ab-eyebrow">Leadership</span>
            <h2 id="ab-lead-title" className="ab-h2">
              Technical and mining leadership.
            </h2>
          </div>
          <div className="ab-lead__grid">
            {leaders.map((leader) => (
              <article className="ab-prof" key={leader.name} data-ab-reveal>
                <div className="ab-prof__img">
                  <Image src={leader.src} alt={`${leader.name}, ${leader.role} of DTG`} width={240} height={300} />
                </div>
                <div>
                  <div className="ab-prof__role">{leader.role}</div>
                  <h3>{leader.name}</h3>
                  <p>{leader.bio}</p>
                  <div className="ab-prof__tags">
                    {leader.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — shared exclusive accordion */}
      <FaqAccordion
        surface="default"
        eyebrow="FAQs"
        title="Clear answers, without positioning."
        titleId="faq"
        name="about-faq"
        items={faqs}
      />

      {/* CTA — shared editorial band */}
      <CTA
        surface="band"
        eyebrow="Start a monitoring conversation"
        title="Talk to DTG about decision quality."
        titleId="about-cta"
        body="Tell us what you're monitoring, and where it's falling short. We'll be straight about what we'd bring."
        href="/contact"
        actionLabel="Contact DTG"
      />
    </main>
  );
}
