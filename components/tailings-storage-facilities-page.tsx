"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const contextRows = [
  [
    "Long-term behaviour",
    "Deformation may develop gradually across reporting periods, construction stages or operational changes.",
  ],
  [
    "Multi-source evidence",
    "InSAR, GNSS, prisms, radar, LiDAR, VWP, piezometers and inspections may each provide part of the picture.",
  ],
  [
    "Traceable review",
    "Monitoring records need to show what changed, what was reviewed, what uncertainty remains and what requires further attention.",
  ],
] as const;

const reviewRows = [
  {
    area: "Long-term deformation behaviour",
    matters: "Gradual movement may only become meaningful when reviewed across time, construction stages or reporting periods.",
    support:
      "Trend review, rate change assessment, settlement review, baseline shift interpretation and deformation pattern review.",
  },
  {
    area: "Multi-sensor evidence",
    matters:
      "One monitoring source rarely explains the full picture, and different sources may agree, diverge or reveal different time scales.",
    support:
      "Comparison of available sources such as InSAR, GNSS, prisms, radar, LiDAR, VWP, piezometers, inspections and operational records.",
  },
  {
    area: "Data quality and monitoring confidence",
    matters: "Gaps, noise, sensor limitations, timestamp issues or environmental effects can affect technical conclusions.",
    support: "Data quality review, availability checks, outlier review, uncertainty notes and monitoring limitation assessment.",
  },
  {
    area: "Operational and environmental context",
    matters:
      "Rainfall, deposition, construction activity, pond position, groundwater response or site changes may influence interpretation.",
    support: "Review of monitoring trends alongside relevant site context where available.",
  },
  {
    area: "Reporting and traceability",
    matters: "Technical review needs clear records across reporting periods, events and changes in monitoring condition.",
    support:
      "Structured reporting, event review, historical review, back-analysis documentation and traceable review records.",
  },
] as const;

const pathwayStages = [
  [
    "Monitoring record",
    "Available monitoring data, historical trends, reports, alarm logs and site records are gathered for review.",
    "RECORD",
  ],
  [
    "Data quality review",
    "Availability, gaps, noise, outliers, sensor confidence and timing alignment are checked.",
    "QUALITY",
  ],
  [
    "Trend comparison",
    "Long-term deformation behaviour, rate changes, baseline shifts and spatial patterns are compared.",
    "TREND",
  ],
  [
    "Context review",
    "Monitoring trends are reviewed alongside operational, construction, rainfall, groundwater or deposition context where available.",
    "CONTEXT",
  ],
  [
    "Technical interpretation",
    "Evidence strength, uncertainty, agreement between data sources and areas requiring further review are clarified.",
    "INTERPRET",
  ],
  [
    "Reporting record",
    "Findings, assumptions, limitations and review notes are documented for traceability.",
    "REPORT",
  ],
] as const;

const evidenceGroups = [
  {
    title: "Remote and spatial monitoring",
    copy: "Spatial datasets help identify broad patterns, localised changes and movement consistency over time.",
    items: ["InSAR", "LiDAR / spatial survey data", "slope stability radar where applicable", "spatial comparison"],
  },
  {
    title: "Survey and instrumentation",
    copy: "Ground-based instruments can add point-based or subsurface evidence to the broader monitoring record.",
    items: ["GNSS", "prisms / robotic total station", "VWP / piezometers", "other site instrumentation"],
  },
  {
    title: "Operational and environmental context",
    copy: "Site activity and environmental records help explain why trends may change or confidence may shift.",
    items: ["rainfall / weather", "deposition activity", "construction stages", "water management", "inspections"],
  },
  {
    title: "Review and reporting records",
    copy: "Traceable records preserve what was reviewed, what changed and what needs further technical attention.",
    items: ["alarm logs", "periodic reports", "historical trends", "event reviews", "back-analysis records", "decision records"],
  },
] as const;

const clientQuestions = [
  "Is deformation behaviour changing over time?",
  "Are movement rates increasing, stabilising or shifting location?",
  "Do different monitoring sources support the same interpretation?",
  "Is the monitoring record reliable enough for the conclusion being made?",
  "Are data gaps, noise or sensor limitations affecting confidence?",
  "Is movement related to construction, deposition, rainfall, groundwater or operational context?",
  "Are reporting records consistent across review periods?",
  "What should be escalated, reviewed further or recorded for traceability?",
] as const;

const outcomes = [
  [
    "Clearer long-term trend understanding",
    "Teams gain clearer interpretation of deformation behaviour, rate changes, movement patterns and monitoring confidence over time.",
  ],
  [
    "Stronger multi-sensor context",
    "Different monitoring sources can be reviewed together to understand agreement, disagreement, uncertainty and evidence strength.",
  ],
  [
    "Improved reporting traceability",
    "Monitoring records become more structured, consistent and useful for periodic review, event review and technical communication.",
  ],
  [
    "Better data confidence",
    "Data quality limitations, gaps, noise and uncertainty can be identified and documented more clearly.",
  ],
  [
    "More defensible monitoring review",
    "Technical conclusions are better supported by reviewed evidence, documented assumptions, limitations and context.",
  ],
] as const;

const faqs = [
  [
    "What does DTG support in TSF monitoring?",
    "DTG supports TSF monitoring through long-term deformation review, multi-sensor comparison, data quality assessment, structured reporting, historical review, back-analysis and technical advisory support.",
  ],
  [
    "Does DTG only work with one monitoring technology?",
    "No. DTG is technology-agnostic and can review available TSF monitoring information from sources such as InSAR, GNSS, prisms, radar, LiDAR, VWP, piezometers, inspections, reports and operational records where available.",
  ],
  [
    "Why is long-term trend review important for TSFs?",
    "TSF deformation behaviour may develop gradually over time. Long-term review helps identify rate changes, baseline shifts, spatial changes, stabilisation or areas requiring further technical attention.",
  ],
  [
    "Can DTG compare different monitoring sources?",
    "Yes. DTG can compare available monitoring sources to understand where evidence agrees, where it differs and where uncertainty should be documented.",
  ],
  [
    "Can DTG provide TSF reporting without live monitoring?",
    "Yes. DTG can provide periodic reporting, event review, historical trend review, alarm review or back-analysis depending on available data and client requirements.",
  ],
  [
    "Does DTG provide dam safety certification?",
    "No. DTG provides monitoring review, reporting, analytics and technical advisory support. Formal dam safety certification or statutory sign-off remains with appropriately appointed responsible engineers or qualified parties according to client governance requirements.",
  ],
  [
    "Can DTG help improve TSF monitoring workflows?",
    "Yes. DTG can review reporting discipline, data quality workflows, monitoring review processes, escalation logic, traceability and capability transfer needs.",
  ],
] as const;

export function TailingsStorageFacilitiesPage() {
  return (
    <main className="tsf-page">
      <TSFHero />
      <TSFContext />
      <TSFReviewMatrix />
      <TSFReviewPathway />
      <TSFEvidence />
      <TSFQuestions />
      <TSFOutcomes />
      <TSFFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id: string }) {
  return (
    <div className="tsf-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function TSFHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: "Tailings Storage Facilities" }]}
      title="Tailings Storage Facilities"
      subtitle="Monitoring support for long-term behaviour, confidence and traceability."
      intro="DTG helps teams review TSF monitoring data, deformation trends, data quality, multi-sensor evidence and reporting records so monitoring information becomes clearer and more traceable."
      titleId="tsf-title"
      variant="environment"
    />
  );
}

function TSFContext() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="tsf-context-title">
      <div className="tsf-container tsf-editorial-split">
        <div>
          <p className="rm-eyebrow">TSF context</p>
          <h2 id="tsf-context-title">TSF monitoring is about long-term behaviour, confidence and traceability.</h2>
          <strong>Small changes can matter when the monitoring record is clear enough to understand them.</strong>
        </div>
        <div>
          <p>
            Tailings Storage Facilities require monitoring review that can account for long-term deformation,
            construction history, deposition activity, rainfall, groundwater response, seepage context, embankment
            geometry and operational changes.
          </p>
          <p>
            Movement may be gradual, seasonal, localised or influenced by multiple conditions. A single sensor rarely
            tells the whole story.
          </p>
          <p>
            For TSF environments, the key question is not only whether movement is occurring. The more important
            question is whether the monitoring record is reliable, whether trends are changing, whether different data
            sources agree, and whether the reporting record clearly supports technical review.
          </p>
          <div className="tsf-editorial-rows">
            {contextRows.map(([title, copy], index) => (
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

function TSFReviewMatrix() {
  return (
    <section id="tsf-review-areas" className="tsf-section tsf-section-mist" aria-labelledby="tsf-review-title">
      <div className="tsf-container">
        <SectionHeader
          id="tsf-review-title"
          eyebrow="Review areas"
          title="What needs careful review in TSF monitoring."
          copy="TSF monitoring requires disciplined review of long-term deformation behaviour, data quality, multi-sensor evidence, operational context and reporting traceability."
        />
        <div className="tsf-matrix" role="table" aria-label="TSF monitoring review areas">
          <div className="tsf-matrix-head" role="row">
            <span role="columnheader">Review area</span>
            <span role="columnheader">Why it matters</span>
            <span role="columnheader">DTG support</span>
          </div>
          {reviewRows.map((row) => (
            <div className="tsf-matrix-row" role="row" key={row.area}>
              <strong role="cell">{row.area}</strong>
              <p role="cell">{row.matters}</p>
              <p role="cell">{row.support}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TSFReviewPathway() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="tsf-pathway-title">
      <div className="tsf-container">
        <SectionHeader
          id="tsf-pathway-title"
          eyebrow="Review pathway"
          title="From long-term monitoring record to technical review."
          copy="DTG helps TSF teams move from monitoring records to clearer technical interpretation. The review process should preserve evidence, uncertainty and context instead of reducing complex behaviour to isolated values."
        />
        <ol className="tsf-pathway" aria-label="TSF monitoring review pathway">
          {pathwayStages.map(([title, copy, label], index) => (
            <li className={label === "INTERPRET" ? "is-interpret" : ""} key={title}>
              <span>{label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="tsf-pathway-statement">
          The value is not only seeing movement. The value is understanding whether the monitoring record supports the
          interpretation.
        </p>
      </div>
    </section>
  );
}

function TSFEvidence() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="tsf-evidence-title">
      <div className="tsf-container">
        <SectionHeader
          id="tsf-evidence-title"
          eyebrow="Monitoring evidence"
          title="TSF monitoring often depends on multiple sources of evidence."
          copy="Tailings monitoring may include InSAR, GNSS, prisms, slope stability radar, LiDAR, VWP or piezometers, inspections, rainfall records, deposition activity, water management records, construction history and operational reports."
        />
        <p className="tsf-lead">
          Each source can add value, but each also has limitations. DTG helps review available monitoring information in
          context so teams can understand where evidence is consistent, where interpretation is uncertain and where
          further review may be required.
        </p>
        <div className="tsf-evidence-grid">
          {evidenceGroups.map((group, index) => (
            <article key={group.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TSFQuestions() {
  return (
    <section className="tsf-section tsf-section-mist" aria-labelledby="tsf-questions-title">
      <div className="tsf-container">
        <SectionHeader
          id="tsf-questions-title"
          eyebrow="Client questions"
          title="Questions TSF teams often need to answer."
          copy="TSF monitoring support becomes valuable when it helps teams answer practical questions about deformation behaviour, monitoring confidence, data consistency and reporting traceability."
        />
        <div className="tsf-question-rows">
          {clientQuestions.map((question, index) => (
            <article key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TSFOutcomes() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="tsf-outcomes-title">
      <div className="tsf-container tsf-outcomes-layout">
        <div>
          <p className="rm-eyebrow">Outcomes</p>
          <h2 id="tsf-outcomes-title">What TSF teams gain from DTG support.</h2>
        </div>
        <div className="tsf-outcome-rows">
          {outcomes.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TSFFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="tsf-faq-cta-section" aria-labelledby="tsf-faq-title">
      <div className="tsf-section tsf-section-light rb-faq-section">
        <div className="tsf-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="tsf-faq-title">Tailings Storage Facilities, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `tsf-faq-${index}`;
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
      </div>
      <div className="tsf-section tsf-section-dark rb-final-cta-section" aria-labelledby="tsf-cta-title">
        <div className="tsf-container">
          <div className="rm-cta-panel rb-cta-panel tsf-cta-panel">
            <div>
              <p className="rm-eyebrow">TSF monitoring support</p>
              <h2 id="tsf-cta-title">Need clearer review of tailings monitoring data?</h2>
              <p>
                DTG can help review deformation trends, multi-sensor evidence, data quality and reporting records so TSF
                monitoring information becomes clearer, more traceable and more useful for technical decision-making.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss TSF monitoring support <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/applications" className="rm-button rm-button-secondary">
                Back to Applications <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related applications: <Link href="/applications/open-pit-mining">Open Pit Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/underground-mining">Underground Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/infrastructure-civil">Infrastructure & Civil</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
