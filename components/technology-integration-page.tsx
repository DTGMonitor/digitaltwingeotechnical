"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { InternalHero } from "@/components/internal-hero";

const importanceRows = [
  [
    "Fragmented systems",
    "Monitoring information is spread across platforms, spreadsheets, reports and vendor systems.",
    "A clearer review structure for monitoring information across technologies.",
  ],
  [
    "Mixed sensor formats",
    "Different units, timestamps, sampling intervals and confidence levels make comparison difficult.",
    "Better alignment of data so signals can be reviewed with context.",
  ],
  [
    "Limited operational context",
    "Movement data may be separated from inspections, blasting, rainfall or activity records.",
    "Monitoring data can be reviewed alongside relevant operational context.",
  ],
  [
    "Disconnected workflows",
    "Alarms, reports, TARPs and decision records may not clearly connect.",
    "Monitoring outputs can support reporting, escalation and traceability.",
  ],
  [
    "Vendor and platform separation",
    "Each system may show only part of the monitoring picture.",
    "A more technology-agnostic view of the monitoring environment.",
  ],
] as const;

const scopeGroups = [
  {
    title: "Monitoring sensors",
    copy: "Sensor data can be aligned to support comparison, correlation and clearer movement interpretation.",
    tone: "data",
    items: [
      "Slope stability radar",
      "GNSS",
      "Prisms / robotic total station",
      "InSAR",
      "LiDAR / SLAM LiDAR",
      "VWP / piezometers",
      "Seismic or vibration data",
    ],
  },
  {
    title: "Operational context",
    copy: "Monitoring data becomes more meaningful when reviewed beside the operational conditions that may influence interpretation.",
    tone: "data",
    items: ["Blasting", "Mining or construction activity", "Inspections", "Rainfall and environmental data", "Groundwater context", "Field observations"],
  },
  {
    title: "Reporting and records",
    copy: "Reports and records help preserve what was reviewed, what changed and why decisions were made.",
    tone: "governance",
    items: ["Shift reports", "Daily / weekly / monthly reports", "Alarm logs", "Event reviews", "Failure or back-analysis reports", "Decision records"],
  },
  {
    title: "Workflows and governance",
    copy: "Integration should support traceability, review discipline and operational response - not just move data between systems.",
    tone: "governance",
    items: ["TARP levels", "Escalation pathways", "Review ownership", "Communication records", "Audit trails", "Change records"],
  },
] as const;

const approachSteps = [
  [
    "Understand the monitoring need",
    "Clarify what decisions, reports, reviews or workflows the integration needs to support.",
  ],
  [
    "Map the data environment",
    "Identify technologies, datasets, formats, owners, update frequencies and existing reporting pathways.",
  ],
  [
    "Align what can be trusted",
    "Review data quality, timestamps, units, locations, metadata, gaps and known limitations.",
  ],
  [
    "Connect to review and governance",
    "Link integrated information to reporting, TARP logic, review responsibilities, decision records and improvement actions.",
  ],
] as const;

const outcomes = [
  ["Clearer monitoring visibility", "Monitoring information from different systems becomes easier to review in one operational context."],
  ["Better multi-sensor interpretation", "Teams can compare sensors more effectively and understand where signals support, challenge or clarify each other."],
  ["Reduced fragmentation", "Separate technologies, reports, workflows and review records become more connected."],
  ["Stronger traceability", "Integrated information can be linked to reporting, escalation pathways, TARPs and decision records."],
  ["More defensible decisions", "Interpretation becomes easier to trace back to evidence, assumptions, limitations and review logic."],
] as const;

const faqs: Array<[string, ReactNode]> = [
  [
    "Is Technology Integration the same as software integration?",
    "Not exactly. Software integration may be part of it, but DTG's Technology Integration service is broader. It connects monitoring data, sensor context, workflows, reporting, escalation logic and governance so information becomes more useful for operational decisions.",
  ],
  [
    "Can DTG integrate systems from different vendors?",
    "DTG's approach is technology-agnostic. Integration depends on data access, formats, vendor limitations, permissions and project scope, but the objective is to help clients connect relevant monitoring information wherever practical.",
  ],
  [
    "Does integration mean everything becomes fully automated?",
    "No. Integration should support better review and decision-making, not remove human judgement. DTG focuses on improving visibility, consistency, traceability and interpretation.",
  ],
  [
    "What monitoring sources can be integrated?",
    "Depending on access and scope, integration may include radar, prisms, GNSS, InSAR, LiDAR, SLAM LiDAR, VWP, piezometers, inspections, operational records, alarms, reports and workflow information.",
  ],
  [
    "What if our data quality is inconsistent?",
    "That is common. DTG considers data quality, gaps, outliers, timestamp alignment, metadata and confidence limitations as part of the integration process. Integration should make uncertainty visible, not hide it.",
  ],
  [
    "Can integration support TARP and escalation workflows?",
    "Yes. Integrated monitoring information can be connected to TARP levels, escalation pathways, reporting requirements, review responsibilities and decision records.",
  ],
  [
    "Is DTG Focus required for Technology Integration?",
    <>
      Not necessarily. DTG Focus<sup className="trademark">{"\u2122"}</sup> may support integration and workflow visibility
      where appropriate, but Technology Integration should start from the client&apos;s monitoring requirement, data
      environment and operational needs.
    </>,
  ],
  [
    "Can DTG help us choose which technologies should be integrated?",
    "Yes. DTG can support technology selection and integration planning by reviewing site conditions, monitoring objectives, data quality, supportability and operational requirements.",
  ],
];

export function TechnologyIntegrationPage() {
  return (
    <main className="rm-page ti-page">
      <TechnologyIntegrationHero />
      <TechnologyIntegrationMeaning />
      <TechnologyIntegrationImportanceMatrix />
      <IntegrationScopeGroups />
      <IntegrationApproach />
      <IntegrationOutcomes />
      <TechnologyIntegrationFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="rm-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function TechnologyIntegrationHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Technology Integration" }]}
      title="Technology Integration"
      subtitle="More than connecting systems."
      intro="DTG helps clients connect monitoring technologies, data sources, reporting pathways and review workflows so fragmented information becomes easier to interpret, govern and act on."
      titleId="technology-integration-title"
    />
  );
}

function TechnologyIntegrationMeaning() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="technology-meaning-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="What it means"
          title="More than connecting systems."
          copy="Many sites already have capable monitoring technologies, but the information often sits across separate platforms, vendors, spreadsheets, reports and response workflows."
        />
        <p className="rm-lead">
          Technology Integration at DTG helps bring those sources into a more coherent monitoring environment so data can
          be reviewed with better context, stronger traceability and clearer operational value. The objective is not
          integration for its own sake. The objective is clearer interpretation, better workflow alignment and more
          defensible decision support.
        </p>
        <div className="rb-editorial-split ti-editorial-split">
          <section>
            <h3>What clients often have</h3>
            <ul>
              <li>Multiple monitoring technologies from different vendors.</li>
              <li>Separate dashboards, files, exports, reports and alarm records.</li>
              <li>Different time intervals, formats, locations and naming conventions.</li>
              <li>Monitoring data that is not clearly connected to reporting or TARP response.</li>
              <li>Useful data that is difficult to compare across systems.</li>
            </ul>
          </section>
          <section>
            <h3>What DTG helps create</h3>
            <ul>
              <li>A clearer structure for reviewing monitoring information together.</li>
              <li>Better alignment between sensors, time periods, locations and reporting needs.</li>
              <li>Practical integration pathways based on access, data quality and project scope.</li>
              <li>Monitoring information connected to reporting, escalation and decision records.</li>
              <li>Stronger visibility across technologies without removing engineering judgement.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

function TechnologyIntegrationImportanceMatrix() {
  return (
    <section className="rm-section rm-section-soft" aria-labelledby="technology-importance-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Why it matters"
          title="Monitoring becomes harder when every technology tells part of the story separately."
          copy="Most monitoring environments are not limited by a lack of technology. They are limited by fragmentation. Different sensors, platforms, formats, alarm rules and reporting workflows can make it difficult to understand what is changing and what requires action."
        />
        <div className="rb-matrix ti-matrix" role="table" aria-label="Technology Integration importance matrix">
          <div className="rb-matrix-head" role="row">
            <span role="columnheader">Monitoring challenge</span>
            <span role="columnheader">What it creates</span>
            <span role="columnheader">What integration improves</span>
          </div>
          {importanceRows.map(([challenge, creates, improves]) => (
            <div className="rb-matrix-row" role="row" key={challenge}>
              <strong role="cell">{challenge}</strong>
              <p role="cell">{creates}</p>
              <p role="cell">{improves}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationScopeGroups() {
  return (
    <section id="integration-scope" className="rm-section rm-section-light" aria-labelledby="integration-scope-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Integration scope"
          title="What DTG can help connect."
          copy="Technology Integration can include different monitoring technologies, reporting records, operational context and workflow information depending on access, data quality and the client's requirements."
        />
        <div className="ti-scope-grid">
          {scopeGroups.map((group) => (
            <article className={`ti-scope-group ti-scope-${group.tone}`} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <div className="ti-chip-list" aria-label={`${group.title} examples`}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationApproach() {
  return (
    <section className="rm-section rm-section-dark" aria-labelledby="integration-approach-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Integration approach"
          title="A practical pathway from fragmented systems to clearer review."
          copy="DTG starts with the monitoring requirement before defining the technical pathway. The right integration approach depends on the client's systems, data access, vendor constraints, reporting needs and operational risk."
        />
        <ol className="ti-approach-strip" aria-label="Technology Integration approach">
          {approachSteps.map(([title, copy], index) => (
            <li className={index === approachSteps.length - 1 ? "is-governance" : ""} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="ti-approach-note">
          Integration depends on data access, quality, format and project scope. DTG&apos;s role is to design practical
          pathways that improve monitoring review and decision confidence.
        </p>
      </div>
    </section>
  );
}

function IntegrationOutcomes() {
  return (
    <section className="rm-section rm-section-deep" aria-labelledby="integration-outcomes-title">
      <div className="rm-container">
        <div className="rb-outcome-layout ti-outcome-layout">
          <div>
            <p className="rm-eyebrow">Outcomes</p>
            <h2 id="integration-outcomes-title">What stronger technology integration gives clients.</h2>
          </div>
          <div className="rb-outcome-rows ti-outcome-rows">
            {outcomes.map(([title, copy], index) => (
              <article key={title}>
                <span className="rm-marker">{String(index + 1).padStart(2, "0")}</span>
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

function TechnologyIntegrationFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="ti-faq-cta-section" aria-labelledby="technology-faq-title">
      <div className="rm-section rm-section-light rb-faq-section">
        <div className="rm-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="technology-faq-title">Technology Integration, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `technology-integration-faq-${index}`;
              const isOpen = open === `faq-${index}`;
              return (
                <article className="rm-faq-item rb-faq-item" key={question}>
                  <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? "" : `faq-${index}`)}>
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
      <div className="rm-section rm-section-dark rb-final-cta-section" aria-labelledby="technology-cta-title">
        <div className="rm-container">
          <div className="rm-cta-panel rb-cta-panel">
            <div>
              <p className="rm-eyebrow">Start an integration conversation</p>
              <h2 id="technology-cta-title">Need to connect fragmented monitoring systems?</h2>
              <p>
                DTG can help review your monitoring technology landscape, map data sources and workflows, and design a
                practical integration pathway that supports clearer interpretation, traceability and decision confidence.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss integration needs <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/services" className="rm-button rm-button-secondary">
                Back to all services <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related services: <Link href="/services/remote-monitoring">Remote Monitoring</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/reporting-back-analysis">Reporting & Back-Analysis</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/data-analytics-automation">Data Analytics & Automation</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/technical-advisory">Technical Advisory</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
