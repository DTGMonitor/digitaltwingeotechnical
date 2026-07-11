"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { InternalHero } from "@/components/internal-hero";

const meaningRows = [
  [
    "Cleaner monitoring data",
    "Support for filtering, outlier review, gap handling and confidence-aware analysis.",
  ],
  [
    "Repeatable analytical workflows",
    "Structured methods that improve consistency across datasets, reports and review periods.",
  ],
  [
    "Human-reviewed automation",
    "Automation for repetitive processing and reporting steps, with technical review kept central.",
  ],
] as const;

const challengeRows = [
  [
    "Noisy signals",
    "Outliers, artefacts and short-term variation can hide meaningful movement patterns.",
    "Filtering, quality review and confidence-aware processing make the signal clearer.",
  ],
  [
    "Manual reporting load",
    "Teams spend time preparing repetitive outputs instead of reviewing what the data means.",
    "Repeatable workflows can prepare summaries, tables and charts for technical review.",
  ],
  [
    "Fragmented datasets",
    "Different sensors use different formats, time intervals and review methods.",
    "Structured data preparation improves comparison across monitoring sources.",
  ],
  [
    "Recurring alarms",
    "Alarm frequency may be visible, but relevance and pattern may remain unclear.",
    "Alarm analytics can review recurrence, affected areas, duration and trigger behaviour.",
  ],
  [
    "Weak traceability",
    "Outputs are harder to defend when assumptions and limitations are not documented.",
    "Traceable processing records what was done, what was assumed and what remains uncertain.",
  ],
] as const;

type AnalysisFlowStage = {
  title: string;
  items: readonly string[];
  featured?: boolean;
};

const analysisFlowStages: readonly AnalysisFlowStage[] = [
  {
    title: "Raw monitoring records",
    items: [
      "radar exports",
      "GNSS / prisms",
      "InSAR",
      "LiDAR / SLAM LiDAR",
      "VWP",
      "alarm logs",
      "reports",
      "event windows",
    ],
  },
  {
    title: "DTG analytical processing",
    featured: true,
    items: [
      "clean",
      "align",
      "filter",
      "review gaps and outliers",
      "calculate trends and velocity",
      "compare sensors",
      "review alarm recurrence",
      "structure event windows",
    ],
  },
  {
    title: "Review-ready outputs",
    items: [
      "cleaned datasets",
      "trend summaries",
      "alarm analytics",
      "multi-sensor comparison",
      "reporting inputs",
      "technical review notes",
    ],
  },
] as const;


type AnalysisGroup = {
  title: string;
  copy: string;
  items: readonly string[];
  featured?: boolean;
};

const analysisGroups: readonly AnalysisGroup[] = [
  {
    title: "Time-series behaviour",
    copy:
      "Review of movement over time, including cumulative displacement, rate change, acceleration, stabilisation, slow trends and baseline shifts.",
    items: ["displacement trends", "velocity and rate behaviour", "long-term monitoring behaviour"],
  },
  {
    title: "Data quality and confidence",
    copy:
      "Review of whether the monitoring record is suitable for interpretation and what limitations should remain visible.",
    items: ["gaps and missing data", "outliers and noise", "sensor availability", "confidence indicators", "data reliability"],
  },
  {
    title: "Alarm and event analytics",
    copy:
      "Analysis of alarm behaviour and event windows to support review, reporting and response understanding.",
    items: ["alarm recurrence", "alarm duration", "affected zones", "event windows", "post-event behaviour", "back-analysis support"],
  },
  {
    title: "Multi-sensor and spatial analysis",
    copy:
      "Comparison of available monitoring sources to understand agreement, disagreement, spatial patterns and uncertainty.",
    items: ["radar", "prisms", "GNSS", "InSAR", "LiDAR", "VWP", "SLAM LiDAR deformation analysis", "point cloud comparison"],
    featured: true,
  },
];

const deliverableGroups = [
  {
    title: "Analytical outputs",
    intro: "Structured monitoring evidence prepared for technical review.",
    items: [
      "cleaned monitoring datasets",
      "trend analysis summaries",
      "velocity and rate summaries",
      "alarm analytics outputs",
      "multi-sensor comparison outputs",
    ],
  },
  {
    title: "Automation outputs",
    intro: "Repeatable workflow components that reduce manual preparation.",
    items: [
      "automated reporting templates",
      "repeatable processing workflows",
      "data quality summaries",
      "structured review windows",
      "workflow automation scripts or tools",
    ],
  },
  {
    title: "Technical review outputs",
    intro: "Human-reviewed outputs that keep assumptions and limitations visible.",
    items: [
      "technical review notes",
      "assumptions and limitations records",
      "human-reviewed interpretation summaries",
      "decision-support analysis",
      "recommended next-step review items",
    ],
  },
] as const;

const outcomes = [
  ["Cleaner monitoring evidence", "Data becomes easier to review, compare, and explain."],
  ["Faster reporting workflows", "Repeatable processing reduces manual preparation time."],
  ["More consistent analysis", "Methods become more repeatable across datasets, periods, and reviewers."],
  ["Better alarm understanding", "Alarm patterns and recurrence become easier to evaluate."],
  ["Improved traceability", "Processing steps, limitations, and review logic are easier to document and defend."],
  ["More scalable monitoring support", "Larger monitoring datasets become more manageable without relying only on manual workflows."],
] as const;

const faqs: Array<[string, ReactNode]> = [
  [
    "Does automation replace human monitoring review?",
    "No. DTG uses automation to improve consistency, speed, and repeatability, but technical interpretation remains human-reviewed. Automation supports judgement; it does not replace it.",
  ],
  [
    "What kinds of monitoring data can be analysed?",
    "Depending on scope, access and quality, DTG can analyse radar, prisms, GNSS, InSAR, LiDAR, SLAM LiDAR, VWP, alarm records, reports, operational records and other relevant datasets.",
  ],
  [
    "Can DTG clean noisy monitoring data?",
    "Yes, where appropriate. DTG can support filtering, outlier review, gap handling, quality checks, and data preparation. Assumptions and limitations should remain documented.",
  ],
  [
    "Is this the same as DTG Focus\u2122?",
    <>
      No. DTG Focus<sup className="trademark">{"\u2122"}</sup> may support analytics and workflow automation, but Data
      Analytics & Automation is a broader service that includes analytical review, data preparation, automation design and
      human-reviewed outputs.
    </>,
  ],
  [
    "Can analytics help with alarm fatigue?",
    "Yes. Alarm analytics can help review recurrence, frequency, trigger behaviour, affected areas and relevance, which can support stronger alarm review and threshold discussion.",
  ],
  [
    "Can DTG automate monitoring reports?",
    "DTG can support repeatable reporting workflows, templates, summaries, and recurring processing steps where data structure and access allow.",
  ],
  [
    "Can analytics automatically identify failures?",
    "No service should be presented that way. Analytics can help identify patterns and review triggers, but instability interpretation and response decisions require technical judgement and context.",
  ],
  [
    "Can historical data be analysed?",
    "Yes, subject to data availability and context. Historical data can support long-term trend review, alarm review, back-analysis support and monitoring improvement.",
  ],
];

export function DataAnalyticsAutomationPage() {
  return (
    <main className="rm-page da-page">
      <DataAnalyticsHero />
      <DataAnalyticsMeaning />
      <DataAnalyticsChallengeMatrix />
      <DataAnalyticsScope />
      <DataAnalyticsMethod />
      <DataAnalyticsOutputsOutcomes />
      <DataAnalyticsFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id?: string }) {
  return (
    <div className="rm-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function DataAnalyticsHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Data Analytics" }]}
      title="Data Analytics"
      subtitle="Monitoring data made easier to review."
      intro="DTG supports data cleansing, trend review, correlation and analytics workflows so monitoring information becomes clearer and more useful for technical review."
      titleId="data-analytics-title"
    />
  );
}

function DataAnalyticsMeaning() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="analytics-meaning-title">
      <div className="rm-container">
        <SectionHeader
          id="analytics-meaning-title"
          eyebrow="What it means"
          title="Analytics that support judgement, not replace it."
          copy="Data Analytics & Automation at DTG helps clients manage monitoring datasets more consistently, efficiently, and defensibly."
        />
        <p className="rm-lead">
          Monitoring data is often noisy, fragmented, irregular or difficult to compare across technologies. DTG helps
          structure the data, reduce avoidable noise, identify meaningful patterns, automate repetitive workflow steps,
          and prepare outputs that support technical review.
        </p>
        <p className="rm-lead">
          The goal is not black-box automation. The goal is clearer evidence, repeatable analysis and better support for
          human decision-making.
        </p>
        <div className="da-meaning-editorial">
          <p>Automation should make review clearer, not remove judgement.</p>
          <div>
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

function DataAnalyticsChallengeMatrix() {
  return (
    <section className="rm-section rm-section-soft" aria-labelledby="analytics-why-title">
      <div className="rm-container">
        <SectionHeader
          id="analytics-why-title"
          eyebrow="Why it matters"
          title="Monitoring data loses value when it stays noisy, fragmented or manually processed."
          copy="Many monitoring programs generate large volumes of data, but the review process can remain manual, inconsistent or disconnected across systems. Trends may be hidden by noise, alarms may recur without deeper analysis, reports may take too long to prepare and datasets may be difficult to compare."
        />
        <div className="rb-matrix da-challenge-matrix" role="table" aria-label="Data analytics challenge matrix">
          <div className="rb-matrix-head" role="row">
            <span role="columnheader">Monitoring challenge</span>
            <span role="columnheader">What it creates</span>
            <span role="columnheader">How analytics helps</span>
          </div>
          {challengeRows.map(([challenge, creates, helps]) => (
            <div className="rb-matrix-row" role="row" key={challenge}>
              <strong role="cell">{challenge}</strong>
              <p role="cell">{creates}</p>
              <p role="cell">{helps}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataAnalyticsScope() {
  const featuredGroup = analysisGroups.find((group) => group.featured) ?? analysisGroups[0]!;
  const supportingGroups = analysisGroups.filter((group) => group.title !== featuredGroup.title);

  return (
    <section id="analysis-scope" className="rm-section rm-section-light" aria-labelledby="analysis-scope-title">
      <div className="rm-container">
        <SectionHeader
          id="analysis-scope-title"
          eyebrow="Analysis scope"
          title="What DTG can analyse across monitoring datasets."
          copy="The analysis scope depends on data access, data quality, monitoring objective, technology type, and client requirements."
        />
        <div className="da-analysis-map">
          <article className="da-analysis-feature">
            <span>01</span>
            <h3>{featuredGroup.title}</h3>
            <p>{featuredGroup.copy}</p>
            <div className="da-point-cloud" aria-hidden="true">
              {Array.from({ length: 32 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <div className="da-analysis-chips">
              {featuredGroup.items.map((item) => (
                <small key={item}>{item}</small>
              ))}
            </div>
          </article>
          <div className="da-analysis-supporting">
            {supportingGroups.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 2).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DataAnalyticsMethod() {
  return (
    <section className="rm-section rm-section-dark da-method-section" aria-labelledby="analytics-method-title">
      <div className="rm-container">
        <SectionHeader
          id="analytics-method-title"
          eyebrow="Method"
          title="From raw monitoring data to review-ready outputs."
          copy="DTG uses analytics and automation to prepare monitoring data for technical review. The process is not about automatic decision-making. It is about improving the quality, consistency and traceability of the information used by engineers and site teams."
        />
        <div className="da-analysis-flow" aria-label="Raw monitoring records flow through DTG analytical processing into review-ready outputs">
          <p className="da-analysis-statement">
            Automation prepares the evidence. <span>Human review</span> interprets what it means.
          </p>
          <div className="da-analysis-stage-grid">
            {analysisFlowStages.map((stage, index) => (
              <article className={stage.featured ? "is-featured" : ""} key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DataAnalyticsOutputsOutcomes() {
  return (
    <section className="rm-section rm-section-light da-outputs-section" aria-labelledby="analytics-outputs-title">
      <div className="rm-container">
        <SectionHeader
          id="analytics-outputs-title"
          eyebrow="Outputs and outcomes"
          title="Practical outputs with clearer technical value."
          copy="Data Analytics & Automation can produce different outputs depending on the monitoring question, available data and client requirements. The value is in making the data easier to review, explain and use."
        />
        <div className="da-deliverable-groups">
          {deliverableGroups.map((group, index) => (
            <article key={group.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="da-outcomes-band">
          <div className="da-outcomes-header">
            <p className="rm-eyebrow">Client outcomes</p>
            <h3>Clearer data. Faster review. Stronger technical confidence.</h3>
          </div>
          <div className="da-outcomes-table">
            {outcomes.map(([title, copy], index) => (
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

function DataAnalyticsFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="da-faq-cta-section" aria-labelledby="analytics-faq-title">
      <div className="rm-section rm-section-light rb-faq-section">
        <div className="rm-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="analytics-faq-title">Data Analytics & Automation, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `analytics-faq-${index}`;
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
      <div className="rm-section rm-section-dark rb-final-cta-section" aria-labelledby="analytics-cta-title">
        <div className="rm-container">
        <div className="rm-cta-panel rb-cta-panel da-final-cta">
          <div>
            <p className="rm-eyebrow">Start an analytics conversation</p>
            <h2 id="analytics-cta-title">Need clearer insight from monitoring data?</h2>
            <p>
              DTG helps clean, structure, analyse and automate monitoring workflows so complex datasets become easier to
              review, compare, report and use for decision support.
            </p>
          </div>
          <div className="rm-actions">
            <Link href="/contact" className="rm-button rm-button-primary">
              Discuss analytics support <ArrowUpRight aria-hidden="true" size={16} />
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
            <Link href="/services/technology-integration">Technology Integration</Link>{" "}
            <span aria-hidden="true">&middot;</span>{" "}
            <Link href="/services/technical-advisory">Technical Advisory</Link>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
