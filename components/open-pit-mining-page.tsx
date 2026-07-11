"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const contextRows = [
  ["Changing slope behaviour", "Movement can be progressive, regressive, linear, sudden or localised."],
  [
    "Operational pressure",
    "Mining activity, blasting, rainfall and excavation progress can change the monitoring context.",
  ],
  ["Escalation clarity", "Alarms only help when they are connected to clear review, communication and response."],
] as const;

const reviewRows = [
  {
    area: "Slope movement behaviour",
    matters: "Trends may change in rate, direction, confidence or spatial extent.",
    support: "Deformation trend review, velocity review and behaviour interpretation.",
  },
  {
    area: "Alarm relevance",
    matters: "Not every alarm reflects the same level of concern or response requirement.",
    support: "Alarm trigger review, affected area review, recurrence review and escalation support.",
  },
  {
    area: "Data quality and monitoring confidence",
    matters: "Noise, poor coverage, atmospheric effects or reference issues can affect interpretation.",
    support:
      "Radar quality review, scan coverage checks, image quality review, atmospheric influence review and data limitation notes.",
  },
  {
    area: "TARP response",
    matters: "Monitoring information must connect to practical communication and response actions.",
    support: "TARP alignment, escalation review, response timing support and communication traceability.",
  },
  {
    area: "Reporting and traceability",
    matters: "Monitoring decisions need clear records of what was observed, reviewed and communicated.",
    support: "Daily, weekly, monthly, event-based reporting and back-analysis documentation.",
  },
] as const;

const pathwayStages = [
  [
    "Movement detected",
    "Monitoring identifies movement, alarm activity or deformation behaviour requiring review.",
    "EVIDENCE",
  ],
  [
    "Data quality checked",
    "Monitoring quality, scan coverage, image quality, reference stability and atmospheric influence are reviewed.",
    "QUALITY",
  ],
  [
    "Trend interpreted",
    "Movement behaviour, velocity, deformation pattern and confidence are assessed in context.",
    "INTERPRET",
  ],
  [
    "Alarm context assessed",
    "Alarm trigger, affected area, recurrence and relevance are reviewed against the monitoring condition.",
    "ALARM",
  ],
  [
    "TARP response supported",
    "Escalation level, communication pathway and operational response are supported by reviewed evidence.",
    "RESPONSE",
  ],
  [
    "Reported and recorded",
    "Observations, interpretation, assumptions, limitations and actions are documented for traceability.",
    "RECORD",
  ],
] as const;

const evidenceGroups = [
  {
    title: "Real-time monitoring",
    copy: "Live movement and alarm evidence that may need rapid technical review.",
    items: ["Slope Stability Radar", "alarms", "deformation trends", "velocity review"],
  },
  {
    title: "Survey and spatial monitoring",
    copy: "Survey and spatial datasets that can help confirm where movement is occurring.",
    items: ["prisms / robotic total station", "GNSS", "LiDAR / SLAM LiDAR where relevant", "spatial comparison"],
  },
  {
    title: "Operational context",
    copy: "Site conditions and activity records that can change how movement should be interpreted.",
    items: ["blasting records", "rainfall / weather", "inspections", "mining activity"],
  },
  {
    title: "Review records",
    copy: "Records that preserve what was observed, reviewed, communicated and learned.",
    items: ["alarm logs", "shift reports", "weekly / monthly reports", "back-analysis records"],
  },
] as const;

const clientQuestions = [
  "Is slope movement changing in a way that requires action?",
  "Is the alarm meaningful, or is it affected by data quality or configuration?",
  "Is the deformation progressive, regressive, linear, sudden or localised?",
  "Is the monitoring coverage sufficient for the area of concern?",
  "Are velocity changes consistent with instability behaviour?",
  "Is the TARP response clear and supported by monitoring evidence?",
  "What should be communicated to the geotechnical and operations teams?",
  "What should be recorded for future review and traceability?",
] as const;

const outcomes = [
  [
    "Clearer slope movement understanding",
    "Teams gain clearer interpretation of deformation trends, alarm behaviour and movement patterns.",
  ],
  [
    "Stronger alarm confidence",
    "Alarms can be reviewed in context, including trigger behaviour, affected area, data quality and response relevance.",
  ],
  [
    "Better TARP alignment",
    "Monitoring observations can be connected more clearly to escalation levels, communication and response actions.",
  ],
  [
    "Improved reporting discipline",
    "Monitoring records become more structured, traceable and useful for daily, weekly, monthly or event-based review.",
  ],
  [
    "More defensible operational decisions",
    "Decisions are better supported by reviewed evidence, documented assumptions, uncertainty and technical context.",
  ],
] as const;

const faqs = [
  [
    "What does DTG support in open pit mining?",
    "DTG supports open pit monitoring through real-time review, deformation interpretation, data quality assessment, alarm review, reporting, back-analysis and technical advisory support.",
  ],
  [
    "Does DTG only work with slope stability radar?",
    "No. Slope stability radar may be part of open pit monitoring, but DTG can also review other monitoring sources such as prisms, GNSS, InSAR, LiDAR, VWP, inspections, reports and operational records where available.",
  ],
  [
    "Can DTG support TARP-based escalation?",
    "Yes. DTG can support monitoring review, alarm context, escalation communication and reporting in alignment with the site's TARP requirements.",
  ],
  [
    "Can DTG help review alarm quality?",
    "Yes. DTG can review alarm trigger behaviour, recurrence, affected area, data quality, monitoring confidence and relevance to operational response.",
  ],
  [
    "Can DTG provide open pit reporting without live monitoring?",
    "Yes. DTG can provide reporting, event review, alarm back-analysis, failure back-analysis or long-term trend review depending on available data and client requirements.",
  ],
  [
    "Can DTG support failure prediction?",
    "Where progressive deformation is identified and the data supports it, DTG can support failure prediction analysis such as inverse velocity review. Any prediction should be communicated with assumptions, uncertainty and limitations.",
  ],
  [
    "Can DTG help improve open pit monitoring workflows?",
    "Yes. DTG can review monitoring workflows, reporting discipline, alarm response, TARP alignment, communication pathways and capability transfer needs.",
  ],
] as const;

export function OpenPitMiningPage() {
  return (
    <main className="op-page">
      <OpenPitHero />
      <OpenPitContext />
      <OpenPitReviewMatrix />
      <OpenPitDecisionPathway />
      <OpenPitEvidence />
      <OpenPitQuestions />
      <OpenPitOutcomes />
      <OpenPitFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id: string }) {
  return (
    <div className="op-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function OpenPitHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: "Open Pit Mining" }]}
      title="Open Pit Mining"
      subtitle="Slope monitoring support for active mining environments."
      intro="DTG helps open pit mining teams review slope movement, deformation trends, alarms, data quality and TARP-based response so monitoring information can support clearer operational decisions."
      titleId="open-pit-title"
      variant="environment"
    />
  );
}

function OpenPitContext() {
  return (
    <section className="op-section op-section-light" aria-labelledby="open-pit-context-title">
      <div className="op-container op-editorial-split">
        <div>
          <p className="rm-eyebrow">Open pit context</p>
          <h2 id="open-pit-context-title">Open pit monitoring decisions happen in changing operational conditions.</h2>
          <strong>More monitoring data does not automatically create better decisions.</strong>
        </div>
        <div>
          <p>
            Open pit slopes are influenced by excavation progress, blasting, rainfall, groundwater, material behaviour,
            wall geometry and operational activity. Monitoring data must be reviewed in that context.
          </p>
          <p>
            In active mining environments, the question is not only whether movement is occurring. The more important
            question is whether the movement is meaningful, how it is changing, what confidence exists in the data and
            whether the response pathway is clear.
          </p>
          <div className="op-editorial-rows">
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

function OpenPitReviewMatrix() {
  return (
    <section id="open-pit-review-areas" className="op-section op-section-mist" aria-labelledby="open-pit-review-title">
      <div className="op-container">
        <SectionHeader
          id="open-pit-review-title"
          eyebrow="Review areas"
          title="What needs careful review in open pit monitoring."
          copy="Open pit monitoring requires more than watching movement values. Data quality, alarm relevance, deformation behaviour, operating context and response pathways all affect how monitoring information should be interpreted."
        />
        <div className="op-matrix" role="table" aria-label="Open pit monitoring review areas">
          <div className="op-matrix-head" role="row">
            <span role="columnheader">Review area</span>
            <span role="columnheader">Why it matters</span>
            <span role="columnheader">DTG support</span>
          </div>
          {reviewRows.map((row) => (
            <div className="op-matrix-row" role="row" key={row.area}>
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

function OpenPitDecisionPathway() {
  return (
    <section className="op-section op-section-dark" aria-labelledby="open-pit-pathway-title">
      <div className="op-container">
        <SectionHeader
          id="open-pit-pathway-title"
          eyebrow="Decision pathway"
          title="From slope movement to operational response."
          copy="DTG helps open pit teams move from monitoring observation to clearer interpretation, escalation and reporting. The process should support decision-making without turning monitoring into a black box."
        />
        <ol className="op-pathway" aria-label="Open pit monitoring decision pathway">
          {pathwayStages.map(([title, copy, label], index) => (
            <li className={label === "RESPONSE" ? "is-response" : ""} key={title}>
              <span>{label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="op-pathway-statement">
          The value is not only detecting movement. The value is knowing what the movement means and how the response
          should be supported.
        </p>
      </div>
    </section>
  );
}

function OpenPitEvidence() {
  return (
    <section className="op-section op-section-light" aria-labelledby="open-pit-evidence-title">
      <div className="op-container">
        <SectionHeader
          id="open-pit-evidence-title"
          eyebrow="Monitoring evidence"
          title="Open pit monitoring often requires more than one source of evidence."
          copy="Open pit monitoring may include slope stability radar, prisms, GNSS, InSAR, LiDAR, VWP, inspections, blasting records, weather data and operational observations. Each source can provide useful information, but each also has limitations."
        />
        <p className="op-lead">
          DTG helps review monitoring information in context, so teams can understand where datasets agree, where
          uncertainty remains and what the evidence can reasonably support.
        </p>
        <div className="op-evidence-grid">
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

function OpenPitQuestions() {
  return (
    <section className="op-section op-section-mist" aria-labelledby="open-pit-questions-title">
      <div className="op-container">
        <SectionHeader
          id="open-pit-questions-title"
          eyebrow="Client questions"
          title="Questions open pit teams often need to answer."
          copy="Open pit monitoring support becomes valuable when it helps teams answer practical questions about movement, alarms, escalation and communication."
        />
        <div className="op-question-rows">
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

function OpenPitOutcomes() {
  return (
    <section className="op-section op-section-dark" aria-labelledby="open-pit-outcomes-title">
      <div className="op-container op-outcomes-layout">
        <div>
          <p className="rm-eyebrow">Outcomes</p>
          <h2 id="open-pit-outcomes-title">What open pit teams gain from DTG support.</h2>
        </div>
        <div className="op-outcome-rows">
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

function OpenPitFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="op-faq-cta-section" aria-labelledby="open-pit-faq-title">
      <div className="op-section op-section-light rb-faq-section">
        <div className="op-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="open-pit-faq-title">Open Pit Mining, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `open-pit-faq-${index}`;
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
      <div className="op-section op-section-dark rb-final-cta-section" aria-labelledby="open-pit-cta-title">
        <div className="op-container">
          <div className="rm-cta-panel rb-cta-panel op-cta-panel">
            <div>
              <p className="rm-eyebrow">Open pit monitoring support</p>
              <h2 id="open-pit-cta-title">Need clearer review of open pit slope monitoring?</h2>
              <p>
                DTG can help review slope movement, alarms, data quality, reporting and TARP response so open pit
                monitoring information becomes clearer, more traceable and more useful for operational decisions.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss open pit monitoring support <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/applications" className="rm-button rm-button-secondary">
                Back to Applications <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related applications:{" "}
              <Link href="/applications/tailings-storage-facilities">Tailings Storage Facilities</Link>{" "}
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
