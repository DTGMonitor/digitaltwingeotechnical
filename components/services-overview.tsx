"use client";

// Services overview — the WHAT WE DO axis, and the star axis of the site: every Applications page
// and every Solutions situation cross-links into here. One page, five capabilities, no sub-nav.
// Chrome (nav/footer) comes from the global layout; this renders only the page body.
//
// DESIGN DECISIONS (approved mockup — do not "improve" these back):
//  - The hero has NO image and NO animated signature visual. Both were considered and rejected:
//    Services is a capability, not a place, and there is nothing honest to illustrate. The type
//    carries it. Do not add a photo or an SVG here.
//  - The five services are BIG VERTICAL ROWS, not a card grid. Card grids were rejected on the
//    Applications axis for the same reason — they flatten five distinct capabilities into
//    interchangeable tiles.
//  - The method section is TYPOGRAPHIC (Validate / Correlate / Govern). It replaced a teal band.
//
// COMPLIANCE: no DTG Focus(TM) mention anywhere on this page — deliberate, and the OMISSION STANDS.
// The reason is editorial, not availability: this is the Services axis (what DTG does for you), and
// Focus has its own route at /dtg-focus. Naming a product here would file DTG as a software vendor,
// which §3 forbids. No sensor brand names. No client counts or proof numbers; the numbers live on
// Applications and this page links there through the detail pages.
//
// ⚠️ THE REASON RECORDED HERE USED TO BE FALSE: "Focus is in development and not available as a
// product". That was true when written and was contradicted by the CLAUDE.md §3 amendment on
// 2026-07-18 (Focus is built and running). A guard comment carrying a stale JUSTIFICATION is a
// generator even when the behaviour it guards is still correct — the next reader re-derives the
// retired framing from it and writes it somewhere else. Fix the reason, keep the rule.

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect } from "react";

type Service = {
  num: string;
  name: string;
  pitch: string;
  included: string[];
  href: string;
};

const services: Service[] = [
  {
    num: "01",
    name: "Remote monitoring",
    pitch: "Continuous, independent review of monitoring data and alarms.",
    included: ["Data & alarm review", "Escalation support", "Reviewed monitoring records"],
    href: "/services/remote-monitoring",
  },
  {
    num: "02",
    name: "Reporting & back-analysis",
    pitch: "Clear reporting and post-event analysis you can defend.",
    included: ["Routine reporting", "Event back-analysis", "Traceable records"],
    href: "/services/reporting-back-analysis",
  },
  {
    num: "03",
    name: "Technology integration",
    pitch: "Connect multi-vendor monitoring into one governed view.",
    included: ["Multi-sensor integration", "Platform-agnostic consolidation", "Governed data flow"],
    href: "/services/technology-integration",
  },
  {
    num: "04",
    name: "Data analytics",
    pitch: "Structure, quality-test and interpret complex monitoring data.",
    included: ["Data quality assurance", "Trend & movement analysis", "Automated processing"],
    href: "/services/data-analytics-automation",
  },
  {
    num: "05",
    name: "Technical advisory",
    pitch: "Independent expertise on monitoring strategy and review.",
    included: ["Strategy & scope review", "Technology selection", "Independent assurance"],
    href: "/services/technical-advisory",
  },
];

const method: { word: string; body: string }[] = [
  {
    word: "Validate",
    body: "Trust the data before anyone interprets it — quality, gaps, drift and sensor health.",
  },
  {
    word: "Correlate",
    body: "Read every source against the others, so precursors single sensors miss are caught.",
  },
  {
    word: "Govern",
    body: "Every review, alarm and call traceable — a record that holds up when it's questioned.",
  },
];

export function ServicesOverview() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-svcx-reveal]"));
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
    <main className="svcx-page" id="top">
      {/* HERO — no image, no signature visual (deliberate; see the note at the top of this file) */}
      <header className="svcx-hero">
        <div className="svcx-hero__content site-container" data-svcx-reveal>
          <span className="svcx-eyebrow svcx-hero__eyebrow">Services</span>
          <h1 className="svcx-hero__title">The independent layer</h1>
          <p className="svcx-hero__lead">
            Five capabilities that sit between your monitoring data and the decisions you have to
            defend — aligned with your operation, not any vendor&rsquo;s product.
          </p>
          <Link href="/contact" className="svcx-btn">
            Talk to DTG
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <span className="svcx-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* INTRO */}
      <section className="svcx-intro" aria-labelledby="svcx-intro-title">
        <div className="site-container">
          <div className="svcx-intro__grid">
            <div data-svcx-reveal>
              <span className="svcx-eyebrow">The five capabilities</span>
              <h2 id="svcx-intro-title" className="svcx-intro__title">
                What DTG does.
              </h2>
            </div>
            <div data-svcx-reveal>
              <p>
                Each service stands on its own — start with one, or combine them. Most engagements
                begin with a single requirement and grow from there.
              </p>
              <p>Whichever you start with, the independence and the traceability are the same.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE — big vertical rows, not a card grid */}
      <section className="svcx-list" aria-label="DTG services">
        <div className="site-container">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="svcx-svc" data-svcx-reveal>
              <div className="svcx-svc__row">
                <div className="svcx-svc__n" aria-hidden="true">
                  {service.num}
                </div>
                <div className="svcx-svc__head">
                  <h3 className="svcx-svc__name">{service.name}</h3>
                  <p className="svcx-svc__pitch">{service.pitch}</p>
                </div>
                <div className="svcx-svc__inc">
                  {service.included.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="svcx-svc__go">
                  Explore
                  <ArrowRight className="svcx-svc__arw" size={16} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* THE METHOD — typographic, no diagram */}
      <section className="svcx-method" aria-labelledby="svcx-method-title">
        <div className="site-container">
          <div className="svcx-method__head" data-svcx-reveal>
            <span className="svcx-eyebrow">One independent layer</span>
            <h2 id="svcx-method-title" className="svcx-method__title">
              Every service applies the same governed review.
            </h2>
            <p>Whichever one you start with, the independence and the traceability are the same.</p>
          </div>
          <div className="svcx-method__three" data-svcx-reveal>
            {method.map((step) => (
              <div key={step.word} className="svcx-mt">
                <div className="svcx-mt__word">{step.word}</div>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <Link href="/about#how-dtg-works" className="svcx-method__link" data-svcx-reveal>
            How DTG works
            <ArrowRight className="svcx-method__arw" size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="svcx-cta" aria-labelledby="svcx-cta-title">
        <div className="site-container" data-svcx-reveal>
          <span className="svcx-eyebrow svcx-cta__eyebrow">Not sure which service you need?</span>
          <h2 id="svcx-cta-title">
            Start with your monitoring requirement — we&rsquo;ll point you to the right one.
          </h2>
          <p>Tell us what you&rsquo;re monitoring and where it&rsquo;s falling short.</p>
          <Link href="/contact" className="svcx-btn">
            Talk to DTG
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
