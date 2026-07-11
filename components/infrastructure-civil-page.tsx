"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const contextRows = [
  [
    "Asset context",
    "Movement needs to be reviewed in relation to the asset, corridor, structure or slope being monitored.",
  ],
  [
    "Operational constraints",
    "Construction activity, access, maintenance, public interface and adjacent works can affect the monitoring context.",
  ],
  [
    "Stakeholder-ready records",
    "Monitoring outputs often need to support technical review, communication and future traceability.",
  ],
] as const;

const reviewRows = [
  {
    area: "Ground and asset movement behaviour",
    matters:
      "Movement may include settlement, lateral displacement, deformation, stabilisation, rate change or localised change.",
    support:
      "Review of deformation trends, displacement, movement rates, movement direction, stabilisation and localised change.",
  },
  {
    area: "Asset and corridor context",
    matters:
      "Movement needs to be understood in relation to asset type, corridor alignment, operating condition and nearby works.",
    support:
      "Review of monitoring observations alongside construction activity, maintenance records, access constraints, asset condition and operational context where available.",
  },
  {
    area: "Multi-sensor evidence",
    matters:
      "Civil monitoring may use several technologies that do not always show the same behaviour or confidence level.",
    support:
      "Comparison of available sources such as GNSS, prisms, robotic total station, InSAR, LiDAR, tiltmeters, inclinometers, extensometers, radar, inspections and asset records.",
  },
  {
    area: "Data quality and monitoring confidence",
    matters:
      "Data gaps, survey inconsistency, environmental influence, timestamp alignment or sensor limitations can affect interpretation.",
    support:
      "Data quality review, availability checks, outlier review, survey consistency review, uncertainty notes and monitoring limitation assessment.",
  },
  {
    area: "Reporting and stakeholder traceability",
    matters: "Civil monitoring often needs to support both technical review and stakeholder communication.",
    support: "Structured reporting, event review, historical review, decision records and traceable review documentation.",
  },
] as const;

const pathwayStages = [
  [
    "Movement evidence",
    "Available monitoring data, survey records, sensor outputs, inspections and historical records are gathered for review.",
    "EVIDENCE",
  ],
  [
    "Data quality review",
    "Availability, gaps, outliers, survey consistency, environmental influence and monitoring limitations are checked.",
    "QUALITY",
  ],
  [
    "Asset context review",
    "Movement is reviewed in relation to the asset, corridor, slope, structure, construction activity or operational context.",
    "CONTEXT",
  ],
  [
    "Trend interpretation",
    "Movement rates, displacement patterns, stabilisation, acceleration or localised behaviour are interpreted.",
    "TREND",
  ],
  [
    "Technical reporting",
    "Findings, assumptions, limitations, confidence and review notes are documented clearly.",
    "REPORT",
  ],
  [
    "Decision record",
    "The monitoring record supports future comparison, communication and defensible decision-making.",
    "RECORD",
  ],
] as const;

const evidenceGroups = [
  {
    title: "Ground and asset monitoring",
    copy: "Point-based and in-ground measurements help identify asset movement, displacement and localised change.",
    items: ["GNSS", "prisms / robotic total station", "tiltmeters", "inclinometers", "extensometers where available"],
  },
  {
    title: "Remote and spatial monitoring",
    copy: "Spatial monitoring helps compare movement patterns across corridors, slopes and civil environments.",
    items: ["InSAR", "LiDAR / spatial survey data", "radar where applicable", "corridor comparison"],
  },
  {
    title: "Civil and operational context",
    copy: "Construction, maintenance and environmental records help explain whether movement is meaningful for the asset.",
    items: [
      "inspections",
      "construction records",
      "maintenance records",
      "rainfall / weather",
      "groundwater data",
      "adjacent works",
      "operational records",
    ],
  },
  {
    title: "Review and reporting records",
    copy: "Traceable reporting preserves the basis for technical review, communication and future comparison.",
    items: ["periodic reports", "alarm logs where applicable", "event records", "historical trends", "decision records"],
  },
] as const;

const clientQuestions = [
  "Is ground or asset movement changing over time?",
  "Is the movement meaningful for the asset or corridor being monitored?",
  "Are movement rates increasing, stabilising or shifting location?",
  "Do different monitoring sources support the same interpretation?",
  "Is the monitoring record reliable enough for the conclusion being made?",
  "Are data gaps, survey limitations or environmental effects affecting confidence?",
  "Is movement related to construction activity, rainfall, groundwater, loading or adjacent works?",
  "What should be reported, reviewed further or escalated?",
  "What should be recorded for future comparison and traceability?",
] as const;

const outcomes = [
  [
    "Clearer movement understanding",
    "Teams gain clearer interpretation of ground movement, asset deformation, movement rates and monitoring confidence over time.",
  ],
  [
    "Stronger asset context",
    "Monitoring observations can be reviewed in relation to asset type, corridor condition, construction activity, maintenance records and operational constraints.",
  ],
  [
    "Better multi-sensor comparison",
    "Different monitoring sources can be reviewed together to understand agreement, disagreement, uncertainty and evidence strength.",
  ],
  [
    "Improved reporting traceability",
    "Monitoring records become more structured, consistent and useful for technical review, stakeholder communication and future comparison.",
  ],
  [
    "More defensible monitoring review",
    "Technical conclusions are better supported by reviewed evidence, documented assumptions, limitations and context.",
  ],
] as const;

const faqs = [
  [
    "What does DTG support in infrastructure and civil monitoring?",
    "DTG supports infrastructure and civil monitoring through ground movement review, asset deformation interpretation, multi-sensor comparison, data quality assessment, reporting, event review and technical advisory support.",
  ],
  [
    "Does DTG design or construct infrastructure assets?",
    "No. DTG does not provide civil design or construction services through this application page. DTG supports monitoring review, deformation interpretation, reporting traceability and decision support for infrastructure and civil environments.",
  ],
  [
    "What types of infrastructure can DTG support?",
    "DTG can support monitoring review for slopes, embankments, cuttings, retaining structures, corridors, bridges, rail, roads, ports and other civil infrastructure environments where movement or deformation requires technical review.",
  ],
  [
    "Can DTG compare different monitoring sources?",
    "Yes. DTG can compare available monitoring sources such as GNSS, prisms, robotic total station, InSAR, LiDAR, tiltmeters, inclinometers, radar, inspections and asset records where available.",
  ],
  [
    "Can DTG provide infrastructure reporting without live monitoring?",
    "Yes. DTG can provide periodic reporting, construction-stage reporting, event review, historical trend review or back-analysis depending on available data and client requirements.",
  ],
  [
    "Can DTG support stakeholder-ready reporting?",
    "Yes. DTG can help structure monitoring reports so the record is clearer, more traceable and more useful for technical review, communication and future comparison.",
  ],
  [
    "Can DTG help improve infrastructure monitoring workflows?",
    "Yes. DTG can review monitoring workflows, data quality checks, reporting discipline, alert logic, escalation pathways and capability transfer needs.",
  ],
] as const;

export function InfrastructureCivilPage() {
  return (
    <main className="tsf-page infra-page">
      <InfrastructureHero />
      <InfrastructureContext />
      <InfrastructureReviewMatrix />
      <InfrastructureReviewPathway />
      <InfrastructureEvidence />
      <InfrastructureQuestions />
      <InfrastructureOutcomes />
      <InfrastructureFAQCTA />
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

function InfrastructureHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: "Infrastructure & Civil" }]}
      title="Infrastructure & Civil"
      subtitle="Monitoring support for ground movement and asset performance."
      intro="DTG helps infrastructure and civil teams review ground movement, asset deformation, monitoring data quality, multi-sensor evidence and reporting records."
      titleId="infrastructure-title"
      variant="environment"
    />
  );
}

function InfrastructureContext() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="infrastructure-context-title">
      <div className="tsf-container tsf-editorial-split">
        <div>
          <p className="rm-eyebrow">Infrastructure context</p>
          <h2 id="infrastructure-context-title">Infrastructure monitoring connects ground movement with asset performance.</h2>
          <strong>The value is not only measuring movement. The value is understanding what it means for the asset.</strong>
        </div>
        <div>
          <p>
            Infrastructure and civil environments require monitoring review that considers ground behaviour, asset
            condition, construction activity, maintenance requirements, access constraints, public interface, design
            assumptions and operational context.
          </p>
          <p>
            Movement may be gradual, localised, construction-related, seasonal, load-related or influenced by water,
            ground conditions or adjacent works.
          </p>
          <p>
            For infrastructure environments, the key question is not only whether movement is occurring. The more
            important question is whether the movement is meaningful for the asset, whether the monitoring record is
            reliable and whether the evidence supports the technical or operational decision being made.
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

function InfrastructureReviewMatrix() {
  return (
    <section id="infrastructure-review-areas" className="tsf-section tsf-section-mist" aria-labelledby="infrastructure-review-title">
      <div className="tsf-container">
        <SectionHeader
          id="infrastructure-review-title"
          eyebrow="Review areas"
          title="What needs careful review in infrastructure and civil monitoring."
          copy="Infrastructure monitoring requires careful review of ground movement, asset deformation, corridor context, data quality, multi-sensor evidence and reporting traceability."
        />
        <div className="tsf-matrix" role="table" aria-label="Infrastructure and civil monitoring review areas">
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

function InfrastructureReviewPathway() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="infrastructure-pathway-title">
      <div className="tsf-container">
        <SectionHeader
          id="infrastructure-pathway-title"
          eyebrow="Review pathway"
          title="From movement evidence to asset understanding."
          copy="DTG helps infrastructure and civil teams move from monitoring records to clearer technical interpretation. The review process should clarify what changed, whether it matters for the asset and how reliable the evidence is."
        />
        <ol className="tsf-pathway" aria-label="Infrastructure monitoring review pathway">
          {pathwayStages.map(([title, copy, label], index) => (
            <li className={label === "CONTEXT" || label === "REPORT" ? "is-interpret" : ""} key={title}>
              <span>{label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="tsf-pathway-statement">
          The value is not only measuring movement. The value is understanding what the movement means for the asset,
          corridor or civil environment.
        </p>
      </div>
    </section>
  );
}

function InfrastructureEvidence() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="infrastructure-evidence-title">
      <div className="tsf-container">
        <SectionHeader
          id="infrastructure-evidence-title"
          eyebrow="Monitoring evidence"
          title="Infrastructure monitoring often depends on multiple sources of evidence."
          copy="Infrastructure and civil monitoring may include GNSS, prisms, robotic total station, InSAR, LiDAR, tiltmeters, inclinometers, extensometers, radar where applicable, piezometers, inspections, construction records, maintenance records, weather data and operational observations."
        />
        <p className="tsf-lead">
          Each source can provide useful information, but each also has limitations. DTG helps review available
          monitoring information in context so teams can understand where evidence is consistent, where uncertainty
          remains and what the data can reasonably support.
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

function InfrastructureQuestions() {
  return (
    <section className="tsf-section tsf-section-mist" aria-labelledby="infrastructure-questions-title">
      <div className="tsf-container">
        <SectionHeader
          id="infrastructure-questions-title"
          eyebrow="Client questions"
          title="Questions infrastructure and civil teams often need to answer."
          copy="Infrastructure monitoring support becomes valuable when it helps teams answer practical questions about movement, asset condition, monitoring confidence and reporting traceability."
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

function InfrastructureOutcomes() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="infrastructure-outcomes-title">
      <div className="tsf-container tsf-outcomes-layout">
        <div>
          <p className="rm-eyebrow">Outcomes</p>
          <h2 id="infrastructure-outcomes-title">What infrastructure and civil teams gain from DTG support.</h2>
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

function InfrastructureFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="tsf-faq-cta-section infra-faq-cta-section" aria-labelledby="infrastructure-faq-title">
      <div className="tsf-section tsf-section-light rb-faq-section">
        <div className="tsf-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="infrastructure-faq-title">Infrastructure & Civil, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `infrastructure-faq-${index}`;
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
      <div className="tsf-section tsf-section-dark rb-final-cta-section" aria-labelledby="infrastructure-cta-title">
        <div className="tsf-container">
          <div className="rm-cta-panel rb-cta-panel tsf-cta-panel">
            <div>
              <p className="rm-eyebrow">Infrastructure monitoring support</p>
              <h2 id="infrastructure-cta-title">Need clearer review of infrastructure monitoring data?</h2>
              <p>
                DTG can help review ground movement, asset deformation, multi-sensor evidence, data quality and reporting
                records so infrastructure monitoring information becomes clearer, more traceable and more useful for
                technical decision-making.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss infrastructure monitoring support <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/applications" className="rm-button rm-button-secondary">
                Back to Applications <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related applications: <Link href="/applications/open-pit-mining">Open Pit Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/tailings-storage-facilities">Tailings Storage Facilities</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/underground-mining">Underground Mining</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
