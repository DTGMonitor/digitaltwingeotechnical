"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const reportTypes = [
  {
    title: "Periodic Monitoring Reports",
    copy: "Shift, daily, weekly, monthly or site-required reports summarising monitoring status, data quality, deformation behaviour, alarms and key observations.",
    tags: ["Shift", "Daily", "Weekly", "Monthly", "Site-required"],
  },
  {
    title: "Event-Based Monitoring Reports",
    copy: "Focused reports for specific events such as post-blast monitoring, unusual movement, alarm periods, operational changes or short-term monitoring windows.",
    tags: ["Post-blast", "Event review", "Short-term window"],
  },
  {
    title: "Alarm Back-Analysis Reports",
    copy: "Retrospective review of alarm timing, recurrence, affected areas, data quality, escalation context and response records.",
    tags: ["Alarm history", "Response context", "TARP alignment"],
  },
  {
    title: "Failure / Instability Back-Analysis Reports",
    copy: "Review of available monitoring evidence before, during and after instability events, including trend behaviour, data quality, alarm history and uncertainty.",
    tags: ["Trend reconstruction", "Failure indicators", "Limitations"],
  },
  {
    title: "Long-Term Multi-Sensor Analysis Reports",
    copy: "Review of long-term deformation behaviour across radar, prisms, GNSS, InSAR, LiDAR, VWP or other available monitoring datasets.",
    tags: ["Radar", "Prisms", "GNSS", "InSAR", "LiDAR", "VWP"],
  },
] as const;

const importanceRows = [
  [
    "Fragmented records",
    "Important observations may be split across reports, alarm logs, handovers and sensor exports.",
    "A structured evidence record that brings key monitoring information together.",
  ],
  [
    "Unclear alarm relevance",
    "Alarm frequency alone may not explain whether the event was meaningful.",
    "Alarm timing, recurrence, affected area, data quality and escalation context.",
  ],
  [
    "Missing response context",
    "Later reviewers may not understand what was communicated or acted on.",
    "Response notes, TARP alignment, communication records and review limitations.",
  ],
  [
    "Data quality uncertainty",
    "Noise, gaps or artefacts may affect interpretation.",
    "Where the data is reliable, where caution is needed and what uncertainty remains.",
  ],
  [
    "Long-term trend uncertainty",
    "Slow movement or multi-sensor patterns may not be obvious in short reports.",
    "Longer-term deformation behaviour and sensor-to-sensor context.",
  ],
] as const;

const backAnalysisParts = [
  {
    title: "What it looks back at",
    copy: "The available monitoring record before, during and after the event, including alarms, deformation trends, data quality, reporting records and relevant site context.",
    details: ["baseline trend", "data quality", "early movement", "alarm history"],
  },
  {
    title: "What it helps explain",
    copy: "Whether movement was progressive, sudden, recurring, localised or correlated with other data; whether alarms or triggers were meaningful; and where uncertainty remains.",
    details: ["trigger", "acceleration", "response", "uncertainty"],
  },
  {
    title: "What it can improve",
    copy: "Future reporting, alarm configuration, TARP escalation, monitoring coverage, sensor integration, data quality review and response discipline.",
    details: ["evidence record", "interpretation", "improvement actions"],
  },
];

const outcomes = [
  ["Clearer monitoring records", "Monitoring status, alarms, deformation behaviour, uncertainty and actions are documented more consistently."],
  ["Stronger decision traceability", "Reports show what was reviewed, what the evidence supports and where limitations remain."],
  ["Better alarm and event understanding", "Alarms and events are reviewed in context, not treated as isolated triggers."],
  ["Improved future monitoring", "Back-analysis can reveal data gaps, threshold issues, reporting weaknesses or escalation improvements."],
  ["More defensible technical reporting", "Clients gain clearer technical records to support communication, governance and future decisions."],
] as const;

const faqs = [
  [
    "Is this service just report writing?",
    "No. DTG reporting is built around technical review. The report is the output, but the value is the interpretation behind it: data quality, movement behaviour, alarm context, uncertainty and practical recommendations.",
  ],
  [
    "Can DTG provide reporting without remote monitoring?",
    "Yes. DTG can provide independent reporting and back-analysis even when the client already has its own monitoring team or when the data is not monitored in real time.",
  ],
  [
    "What is back-analysis in monitoring?",
    "Back-analysis is a retrospective review of monitoring records after an alarm, trend change, blast, instability event or failure. It helps clarify what the available data showed, when it became visible and what can be improved.",
  ],
  [
    "Can back-analysis determine the exact cause of a failure?",
    "Not always. Back-analysis can clarify what the monitoring evidence supports, but it should also state uncertainty and limitations. DTG should not overstate certainty where the data does not support it.",
  ],
  [
    "What data can DTG review?",
    "Depending on availability, DTG can review radar, prisms, GNSS, InSAR, LiDAR, VWP, piezometers, inspections, operational records, alarm logs, TARP records and reporting history.",
  ],
  [
    "Can DTG review historical monitoring data?",
    "Yes. Historical monitoring data can be reviewed where sufficient data quality, context and timing information are available. This can support alarm review, failure back-analysis, long-term trend interpretation or independent reporting.",
  ],
  [
    "Can DTG prepare regular monitoring reports?",
    "Yes. DTG can support shift, daily, weekly, monthly, weekend or site-required monitoring reports depending on the client's reporting needs and available monitoring data.",
  ],
  [
    "Can reporting and back-analysis help improve future monitoring?",
    "Yes. A structured review can identify data gaps, alarm issues, reporting weaknesses, TARP alignment concerns or opportunities to improve monitoring workflows and response discipline.",
  ],
] as const;

export function ReportingBackAnalysisPage() {
  return (
    <main className="rm-page rb-page">
      <ReportingHero />
      <ReportingMeaning />
      <ReportingTimelineSupport />
      <ReportingImportanceMatrix />
      <ReportingTypesAccordion />
      <BackAnalysisExplainer />
      <ReportingOutcomes />
      <ReportingFAQCTA />
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

function ReportingHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Reporting & Back-Analysis" }]}
      title="Reporting & Back-Analysis"
      subtitle="Monitoring history becomes clearer technical evidence."
      intro="DTG helps clients review monitoring records, document evidence, analyse alarms and events, and turn monitoring history into clearer technical understanding."
      titleId="reporting-title"
    />
  );
}

function ReportingTimelineSupport() {
  return (
    <section className="rm-section rm-section-deep internal-hero-support" aria-label="Reporting and back-analysis visual">
      <div className="rm-container">
        <div className="rm-hero-visual rb-hero-visual" aria-label="Monitoring evidence timeline">
          <ol className="rb-clean-timeline" aria-label="Monitoring record to improvement timeline">
            {["Monitoring record", "Event / trigger", "Review window", "Interpretation", "Report record"].map((label, index) => (
              <li className={index === 1 || index === 4 ? "is-governance" : ""} key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
          <p>Monitoring history becomes clearer technical evidence.</p>
        </div>
      </div>
    </section>
  );
}

function ReportingMeaning() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="reporting-meaning-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="What it means"
          title="More than reporting what happened."
          copy="Some clients need regular monitoring reports. Some need an independent review after an alarm, blast, failure or unusual movement. Others already have a monitoring team, but need clearer documentation, stronger technical interpretation or a second layer of review."
        />
        <p className="rm-lead">
          Reporting & Back-Analysis at DTG is built for those situations. It helps turn monitoring observations, alarms,
          deformation trends and event records into clear technical reports that are easier to review, explain and
          defend. The value is not only the final report. The value is the review behind it: what was observed, what the
          data supports, what uncertainty remains and what should be considered next.
        </p>
        <div className="rb-editorial-split">
          <section>
            <h3>When clients need this</h3>
            <ul>
              <li>The site needs daily, weekly, monthly or weekend reporting support.</li>
              <li>An alarm or event needs independent review.</li>
              <li>A failure, blast or unusual movement needs retrospective analysis.</li>
              <li>Existing monitoring data needs clearer technical documentation.</li>
              <li>Long-term trends need to be explained across multiple sensors.</li>
            </ul>
          </section>
          <section>
            <h3>What DTG provides</h3>
            <ul>
              <li>Monitoring reports structured around data quality, movement behaviour and key observations.</li>
              <li>Event and alarm review with technical context.</li>
              <li>Failure and instability back-analysis where monitoring evidence is available.</li>
              <li>Long-term multi-sensor reporting.</li>
              <li>Clear treatment of uncertainty, limitations and recommended next steps.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

function ReportingImportanceMatrix() {
  return (
    <section className="rm-section rm-section-soft" aria-labelledby="reporting-importance-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Why it matters"
          title="Monitoring events are only useful when the evidence is captured."
          copy="Alarms, deformation trends, post-blast changes, failures and unusual monitoring behaviour can contain valuable information. But if the record is fragmented, unclear or incomplete, important lessons can be lost."
        />
        <p className="rm-lead">DTG helps clients turn monitoring history into a clearer technical record.</p>
        <div className="rb-matrix" role="table" aria-label="Reporting and back-analysis importance matrix">
          <div className="rb-matrix-head" role="row">
            <span role="columnheader">Monitoring challenge</span>
            <span role="columnheader">What can be missed</span>
            <span role="columnheader">What DTG clarifies</span>
          </div>
          {importanceRows.map(([challenge, missed, clarifies]) => (
            <div className="rb-matrix-row" role="row" key={challenge}>
              <strong role="cell">{challenge}</strong>
              <p role="cell">{missed}</p>
              <p role="cell">{clarifies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportingTypesAccordion() {
  const [open, setOpen] = useState<string>(reportTypes[0].title);

  return (
    <section className="rm-section rm-section-light" aria-labelledby="report-types-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Report types"
          title="Reporting formats based on the monitoring question."
          copy="Reporting frequency can be adjusted to the client's needs. The more important distinction is the purpose of the report: routine monitoring, a specific event, an alarm, an instability/failure, or long-term behaviour."
        />
        <div className="rb-report-accordion">
          {reportTypes.map(({ title, copy, tags }, index) => {
            const isOpen = open === title;
            const id = `report-type-${index}`;
            return (
              <article className="rb-report-item" key={title}>
                <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? "" : title)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <ChevronDown aria-hidden="true" size={18} />
                </button>
                <div id={id} hidden={!isOpen}>
                  <p>{copy}</p>
                  <div className="rb-report-tags" aria-label={`${title} use cases`}>
                    {tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BackAnalysisExplainer() {
  return (
    <section id="back-analysis" className="rm-section rm-section-dark" aria-labelledby="back-analysis-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Back-analysis"
          title="What is back-analysis - and why does it matter?"
          copy="Back-analysis is a retrospective review of monitoring records after an alarm, deformation trend, blast, instability event or failure. It helps clarify what was visible in the data, when it became visible, how the monitoring system performed and what can be improved."
        />
        <p className="rb-backanalysis-note">
          Back-analysis does not remove uncertainty or prove every cause. It helps define what the available monitoring
          evidence supports.
        </p>
        <div className="rb-event-diagram" aria-label="Before, during and after event evidence diagram">
          {[
            ["Before event", "baseline trend", "data quality", "early movement", "alarm history"],
            ["Event window", "trigger", "acceleration", "response", "uncertainty"],
            ["After event", "evidence record", "interpretation", "improvement actions"],
          ].map(([period, ...items], index) => (
            <section className={index === 1 ? "is-event" : ""} key={period}>
              <span>{period}</span>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="rb-backanalysis-parts">
          {backAnalysisParts.map((part) => (
            <article key={part.title}>
              <h3>{part.title}</h3>
              <p>{part.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportingOutcomes() {
  return (
    <section className="rm-section rm-section-deep" aria-labelledby="reporting-outcomes-title">
      <div className="rm-container">
        <div className="rb-outcome-layout">
          <div>
            <p className="rm-eyebrow">Outcomes</p>
            <h2 id="reporting-outcomes-title">What clients gain from stronger reporting and back-analysis.</h2>
          </div>
          <div className="rb-outcome-rows">
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

function ReportingFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <>
      <section className="rm-section rm-section-light rb-faq-section" aria-labelledby="reporting-faq-title">
        <div className="rm-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="reporting-faq-title">Reporting & Back-Analysis, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `reporting-faq-${index}`;
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
      </section>
      <section className="rm-section rm-section-dark rb-final-cta-section" aria-labelledby="reporting-cta-title">
        <div className="rm-container">
          <div className="rm-cta-panel rb-cta-panel">
            <div>
              <p className="rm-eyebrow">Start a reporting review</p>
              <h2 id="reporting-cta-title">Need clearer reporting from monitoring events?</h2>
              <p>
                DTG can help review monitoring records, analyse alarm and failure events, and turn monitoring history into
                clearer evidence and practical improvement.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Start a reporting review <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/services" className="rm-button rm-button-secondary">
                Back to all services <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related services: <Link href="/services/remote-monitoring">Remote Monitoring</Link>{" "}
              <span aria-hidden="true">&middot;</span> <Link href="/services/data-analytics-automation">Data Analytics & Automation</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/technical-advisory">Technical Advisory</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
