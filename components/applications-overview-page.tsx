"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const applicationChips = ["OPEN PIT", "TAILINGS", "UNDERGROUND", "INFRASTRUCTURE"] as const;

const applicationAreas = [
  {
    title: "Open Pit Mining",
    href: "/applications/open-pit-mining",
    description:
      "Monitoring support for active pit slopes, highwall movement, alarms, deformation trends and operational response.",
    panelCopy: "Slope monitoring, deformation trends, alarms and operational response for active mining environments.",
    cta: "Explore open pit mining",
    needs: [
      "slope movement review",
      "SSR / radar monitoring",
      "alarm and TARP support",
      "deformation trend interpretation",
      "reporting and escalation support",
    ],
  },
  {
    title: "Tailings Storage Facilities",
    href: "/applications/tailings-storage-facilities",
    description:
      "Monitoring support for deformation trends, long-term behaviour, reporting consistency and independent review of TSF monitoring information.",
    panelCopy: "Deformation review, long-term trends, monitoring reporting and independent review for TSF environments.",
    cta: "Explore tailings storage facilities",
    needs: [
      "deformation review",
      "long-term trend analysis",
      "InSAR / GNSS / radar comparison",
      "reporting and traceability",
      "independent technical review",
    ],
  },
  {
    title: "Underground Mining",
    href: "/applications/underground-mining",
    description:
      "Monitoring support for underground deformation, convergence review, spatial change detection and SLAM LiDAR analysis where applicable.",
    panelCopy: "Convergence review, deformation tracking, SLAM LiDAR analysis and underground monitoring interpretation.",
    cta: "Explore underground mining",
    needs: [
      "convergence review",
      "deformation tracking",
      "SLAM LiDAR analysis",
      "spatial comparison",
      "reporting and technical interpretation",
    ],
  },
  {
    title: "Infrastructure & Civil",
    href: "/applications/infrastructure-civil",
    description:
      "Monitoring support for slopes, corridors, assets and infrastructure environments where deformation or ground movement requires technical review.",
    panelCopy: "Monitoring support for slopes, corridors, assets and civil infrastructure environments.",
    cta: "Explore infrastructure & civil",
    needs: [
      "slope and asset monitoring",
      "corridor monitoring",
      "deformation reporting",
      "multi-sensor review",
      "technical advisory support",
    ],
  },
] as const;

const meaningRows = [
  [
    "Environment-specific context",
    "Monitoring support must consider ground behaviour, operating conditions, sensor suitability and response requirements.",
  ],
  [
    "Consistent review discipline",
    "Different environments still need consistent data quality review, interpretation, reporting and escalation logic.",
  ],
  ["Decision-ready outputs", "Monitoring information should support practical action, not just produce more data."],
] as const;

const environmentDifferenceRows = [
  {
    environment: "Open Pit Mining",
    question: "Is slope movement changing in a way that requires operational response?",
    review: "Alarms, deformation trends, velocity, TARP triggers, radar coverage and response timing.",
  },
  {
    environment: "Tailings Storage Facilities",
    question: "Is deformation behaviour changing over time and is the monitoring record consistent?",
    review: "Long-term trends, multi-sensor comparison, reporting traceability, InSAR/GNSS/radar context and data reliability.",
  },
  {
    environment: "Underground Mining",
    question: "Is convergence or spatial deformation developing in areas that require attention?",
    review: "Convergence behaviour, SLAM LiDAR change, spatial deformation, inspection context and monitoring interpretation.",
  },
  {
    environment: "Infrastructure & Civil",
    question: "Is ground or asset movement affecting slopes, corridors or infrastructure performance?",
    review: "Asset movement, corridor monitoring, deformation reporting, sensor comparison and technical advisory context.",
  },
] as const;

const faqs = [
  [
    "What does Applications mean at DTG?",
    "Applications describe the operating environments where DTG's monitoring support is applied, such as open pit mining, tailings storage facilities, underground mining and civil infrastructure.",
  ],
  [
    "Why is Corporate & Consultants not listed under Applications?",
    "Corporate and consultant support is a stakeholder group, not an operating environment. It is handled under Technical Advisory, where DTG supports site teams, corporate technical teams, consultants and asset owners with independent monitoring review and technical advice.",
  ],
  [
    "Can DTG support more than one application environment?",
    "Yes. DTG can support sites or organisations with multiple monitoring environments, such as open pit slopes, tailings facilities, underground excavations and infrastructure assets.",
  ],
  [
    "Do the same DTG services apply to every environment?",
    "The same service model can apply, but the scope changes by environment. Remote monitoring, reporting, analytics, technology integration and technical advisory are adapted to the monitoring risk, sensor setup and operational requirement.",
  ],
  [
    "Can DTG support both mining and civil infrastructure?",
    "Yes. DTG's monitoring approach can support mining and civil infrastructure environments where deformation, ground movement, reporting or technical interpretation require independent review.",
  ],
  [
    "Will each application have its own dedicated page?",
    "Yes. Each application area should have a dedicated page explaining the monitoring challenges, DTG support model and typical use cases for that operating environment.",
  ],
] as const;

export function ApplicationsOverviewPage() {
  return (
    <main className="ao-page">
      <ApplicationsHero />
      <ApplicationsMeaning />
      <ApplicationsEnvironmentDifferences />
      <ApplicationsGateway />
      <ApplicationsFAQ />
      <ApplicationsCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id: string }) {
  return (
    <div className="ao-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function ApplicationsHero() {
  return (
    <section className="ao-hero" aria-labelledby="applications-title">
      <div className="ao-container ao-hero-grid">
        <div className="ao-hero-copy">
          <p className="rm-eyebrow">Applications</p>
          <h1 id="applications-title">Monitoring support across operating environments.</h1>
          <p className="ao-hero-deck">
            Different environments create different monitoring questions. DTG helps review them with clearer technical
            structure.
          </p>
          <p>
            DTG supports open pit, tailings, underground and infrastructure environments through independent monitoring
            review, reporting, analytics, technology integration and technical advisory support.
          </p>
          <p className="ao-hero-line">Environment-specific monitoring support. Consistent decision quality.</p>
          <div className="rm-actions">
            <Link href="#application-areas" className="rm-button rm-button-primary">
              Explore application areas <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link href="/contact" className="rm-button rm-button-secondary">
              Discuss your monitoring environment <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/services" className="rb-tertiary-link">
              Explore DTG services <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
          <div className="ao-hero-chips" aria-label="Application areas">
            {applicationChips.map((chip) => (
              <span key={chip}>{chip.charAt(0) + chip.slice(1).toLowerCase()}</span>
            ))}
          </div>
        </div>
        <OperatingLandscapeVisual />
      </div>
    </section>
  );
}

function OperatingLandscapeVisual() {
  return (
    <figure className="ao-landscape-panel" aria-label="Four operating environments connected to monitoring decision support">
      <svg viewBox="0 0 760 460" aria-hidden="true" preserveAspectRatio="none">
        <path d="M24 332 C126 260 214 306 322 244 C430 182 506 216 736 128" />
        <path d="M28 370 C150 314 236 344 360 292 C486 240 574 254 736 196" />
        <path d="M30 154 C124 108 214 146 306 116 C416 80 520 110 734 76" />
        <path d="M44 210 C160 168 244 208 372 166 C488 128 596 162 724 118" />
      </svg>
      <div className="ao-environment-visual-label">Operating environments</div>
      <div className="ao-review-spine" aria-hidden="true">
        <span>Review</span>
        <span>Interpret</span>
        <span>Support decision</span>
      </div>
      <div className="ao-environment-lanes">
        {[
          ["01", "Open Pit Mining", "Slope movement"],
          ["02", "Tailings Storage Facilities", "Deformation review"],
          ["03", "Underground Mining", "Convergence / spatial change"],
          ["04", "Infrastructure & Civil", "Corridors / slopes / assets"],
        ].map(([number, title, descriptor], index) => (
          <Link href={applicationAreas[index].href} key={title}>
            <span>{number}</span>
            <strong>{title}</strong>
            <em>{descriptor}</em>
          </Link>
        ))}
      </div>
      <figcaption>Different environments. One need for reviewed, decision-ready information.</figcaption>
    </figure>
  );
}

function ApplicationsMeaning() {
  return (
    <section className="ao-section ao-section-light" aria-labelledby="applications-meaning-title">
      <div className="ao-container ao-meaning-layout">
        <div className="ao-editorial-statement">
          <p className="rm-eyebrow">What it means</p>
          <h2 id="applications-meaning-title">Applications are where monitoring decisions are made.</h2>
          <strong>The environment changes. The need for defensible monitoring decisions remains.</strong>
        </div>
        <div className="ao-meaning-copy">
          <p>
            Applications at DTG describe the operating environments where monitoring information must be reviewed,
            interpreted and acted on.
          </p>
          <p>
            Each environment has different movement behaviour, monitoring constraints, operational pressures and
            reporting needs. Open pits, tailings facilities, underground excavations and civil infrastructure assets do
            not require identical monitoring support.
          </p>
          <p>
            DTG adapts its monitoring review, reporting, analytics, technology integration and advisory support to the
            environment being monitored.
          </p>
          <div className="ao-editorial-rows">
            {meaningRows.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsEnvironmentDifferences() {
  return (
    <section className="ao-section ao-section-mist" aria-labelledby="applications-challenges-title">
      <div className="ao-container">
        <SectionHeader
          id="applications-challenges-title"
          eyebrow="Environment differences"
          title="Different environments create different monitoring questions."
          copy="The monitoring technology may overlap between environments, but the technical question changes. DTG adapts the review focus to the environment, movement behaviour and operational response needed."
        />
        <div className="ao-matrix" role="table" aria-label="How monitoring needs differ by operating environment">
          <div className="ao-matrix-head" role="row">
            <span role="columnheader">Environment</span>
            <span role="columnheader">Typical monitoring question</span>
            <span role="columnheader">What needs careful review</span>
          </div>
          {environmentDifferenceRows.map((row) => (
            <div className="ao-matrix-row" role="row" key={row.environment}>
              <strong role="cell">{row.environment}</strong>
              <p role="cell">{row.question}</p>
              <p role="cell">{row.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsGateway() {
  return (
    <section id="application-areas" className="ao-section ao-section-light" aria-labelledby="application-areas-title">
      <div className="ao-container">
        <SectionHeader
          id="application-areas-title"
          eyebrow="Application areas"
          title="Explore application-specific monitoring support."
          copy="Each application area explains how DTG support can be adapted to the operating environment, monitoring risks and technical questions."
        />
        <div className="ao-gateway-grid">
          {applicationAreas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.panelCopy}</p>
              <div>
                {area.needs.slice(0, 3).map((need) => (
                  <span key={need}>{need}</span>
                ))}
              </div>
              <Link href={area.href}>
                {area.cta} <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsFAQ() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="ao-section ao-section-light rb-faq-section" aria-labelledby="applications-faq-title">
        <div className="ao-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="applications-faq-title">Applications, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `applications-faq-${index}`;
              const isOpen = open === `faq-${index}`;
              return (
                <article className="rm-faq-item rb-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
    </section>
  );
}

function ApplicationsCTA() {
  return (
    <section className="ao-section ao-section-deep rb-final-cta-section" aria-labelledby="applications-cta-title">
        <div className="ao-container">
          <div className="rm-cta-panel rb-cta-panel ao-cta-panel">
            <div>
              <p className="rm-eyebrow">Discuss your monitoring environment</p>
              <h2 id="applications-cta-title">Need monitoring support for a specific environment?</h2>
              <p>
                DTG can help review your monitoring environment, clarify the technical question and identify the right
                monitoring, reporting, analytics, integration or advisory support.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss your environment <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/services" className="rm-button rm-button-secondary">
                Explore DTG services <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Application areas: <Link href="/applications/open-pit-mining">Open Pit Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/tailings-storage-facilities">Tailings Storage Facilities</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/underground-mining">Underground Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/infrastructure-civil">Infrastructure & Civil</Link>
            </p>
          </div>
        </div>
    </section>
  );
}
