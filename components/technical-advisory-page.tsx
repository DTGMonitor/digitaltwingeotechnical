"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const heroTags = ["INDEPENDENT REVIEW", "ALARM REVIEW", "TARP SUPPORT", "WORKFLOW ADVISORY", "DECISION CONFIDENCE"];

const heroInputs = ["Alarms", "Trends", "Sensor data", "TARP", "Reports", "Site context"] as const;
const heroOutputs = ["Clearer options", "Actionable recommendations", "Escalation confidence", "Decision rationale"] as const;

const meaningRows = [
  [
    "Independent monitoring review",
    "A technical second view on monitoring performance, trends, alarms, workflows and reporting quality.",
  ],
  [
    "Practical decision support",
    "Advice focused on what the evidence supports, what uncertainty remains and what response pathways need attention.",
  ],
  [
    "Monitoring improvement",
    "Recommendations that strengthen workflows, alarm confidence, reporting discipline and team capability.",
  ],
] as const;

const challengeRows = [
  [
    "Conflicting monitoring signals",
    "Different sensors may show different timing, magnitude, location or confidence levels.",
    "DTG reviews the evidence and explains what can reasonably be interpreted.",
  ],
  [
    "Uncertain alarm confidence",
    "Alarm frequency, recurrence, threshold behaviour or data quality can make escalation difficult.",
    "DTG reviews alarm relevance, trigger logic and escalation confidence.",
  ],
  [
    "Weak TARP alignment",
    "Monitoring triggers may not clearly align with practical response actions or operational realities.",
    "DTG helps review response levels, responsibilities, communication and escalation logic.",
  ],
  [
    "Fragmented workflows",
    "Review, escalation, reporting and accountability may sit across separate teams or systems.",
    "DTG identifies workflow gaps and practical ways to improve monitoring discipline.",
  ],
  [
    "Limited independent review",
    "Internal teams may need a second technical view when monitoring decisions are sensitive or complex.",
    "DTG provides independent technical judgement without vendor or internal bias.",
  ],
] as const;

const focusRows = [
  [
    "Monitoring strategy",
    "Advice on how monitoring should support operational risk, ground behaviour and decision requirements.",
  ],
  [
    "Monitoring workflow review",
    "Review of how monitoring information moves between systems, reviewers, reports and decision-makers.",
  ],
  [
    "Multi-sensor interpretation",
    "Advice on how to compare radar, prisms, GNSS, InSAR, LiDAR, inspections and other monitoring inputs.",
  ],
  ["Technology suitability", "Technical advice on whether existing or proposed technologies are fit for purpose."],
  [
    "Reporting and traceability",
    "Advice on how reports should document observations, assumptions, uncertainty and recommendations.",
  ],
  [
    "Training and capability transfer",
    "Support to improve monitoring awareness, response discipline and client team capability.",
  ],
] as const;

const escalationSteps = [
  "Monitor",
  "Review alarm",
  "Check evidence",
  "Confirm response level",
  "Communicate action",
  "Record rationale",
] as const;

const focusQuestions = [
  "Are alarms meaningful?",
  "Are thresholds appropriate?",
  "Are TARP actions clear?",
  "Is escalation supported by evidence?",
] as const;

const methodStages = [
  [
    "Define the question",
    "Clarify the monitoring concern, decision need, site context, risk and desired advisory output.",
    "QUESTION",
  ],
  [
    "Review the evidence",
    "Review available monitoring data, alarms, reports, workflows, TARP documents and operational context.",
    "EVIDENCE",
  ],
  [
    "Challenge the interpretation",
    "Test assumptions, uncertainty, threshold logic, escalation pathways and whether conclusions are supported by the evidence.",
    "JUDGEMENT",
  ],
  [
    "Recommend practical action",
    "Provide clear advice with rationale, limitations, assumptions and next-step recommendations.",
    "RECOMMENDATION",
  ],
] as const;

const outputGroups = [
  {
    title: "Technical review outputs",
    items: [
      "technical advisory memo",
      "independent second opinion",
      "monitoring performance review",
      "multi-sensor interpretation note",
    ],
  },
  {
    title: "Workflow and response outputs",
    items: [
      "alarm and TARP review",
      "escalation review notes",
      "workflow improvement plan",
      "reporting and handover recommendations",
    ],
  },
  {
    title: "Capability and improvement outputs",
    items: [
      "monitoring strategy brief",
      "training and capability transfer material",
      "governance and traceability recommendations",
      "continuous improvement actions",
    ],
  },
] as const;

const outcomes = [
  [
    "Clearer technical direction",
    "Teams gain independent advice on what the monitoring evidence supports and what should be reviewed next.",
  ],
  ["Better alarm confidence", "Alarm behaviour, thresholds and escalation logic can be assessed more clearly."],
  [
    "Stronger monitoring workflows",
    "Review, reporting, handover and escalation pathways become easier to understand and improve.",
  ],
  [
    "More defensible decisions",
    "Recommendations are supported by evidence, assumptions, limitations and documented rationale.",
  ],
  [
    "Improved team capability",
    "Client teams gain stronger monitoring understanding, response discipline and practical knowledge transfer.",
  ],
  [
    "Reduced decision uncertainty",
    "Unclear signals, conflicting data and uncertain workflows can be reviewed in a structured way.",
  ],
] as const;

const faqs = [
  [
    "What is Technical Advisory at DTG?",
    "Technical Advisory is independent advice that helps clients review monitoring performance, interpret monitoring issues, assess alarms and workflows, improve escalation logic and make more defensible monitoring decisions.",
  ],
  [
    "How is Technical Advisory different from Technology Integration?",
    "Technology Integration focuses on connecting monitoring data sources, systems and workflows. Technical Advisory focuses on the technical judgement around monitoring performance, alarms, TARPs, interpretation, risk support and practical recommendations.",
  ],
  [
    "Does DTG replace the client's geotechnical team?",
    "No. DTG supports client teams with independent review and practical advice. The client remains responsible for site decisions and operational control.",
  ],
  [
    "Can DTG review alarm thresholds and TARPs?",
    "Yes. DTG can review alarm logic, trigger levels, TARP alignment, escalation pathways and response workflows depending on available information and agreed scope.",
  ],
  [
    "Can Technical Advisory help when sensors disagree?",
    "Yes. DTG can review multi-sensor information to understand where datasets agree, differ, lag or require further context before interpretation.",
  ],
  [
    "Can DTG provide an independent second opinion?",
    "Yes. DTG can provide focused independent review of monitoring concerns, alarm events, trend interpretation, technology suitability or workflow decisions.",
  ],
  [
    "Can this service include training?",
    "Yes. Training and capability transfer can be included where the client needs stronger monitoring awareness, response discipline, reporting understanding or workflow adoption.",
  ],
  [
    "Will Technical Advisory guarantee a specific monitoring outcome?",
    "No. Technical Advisory supports clearer, more defensible decisions, but it should not be presented as eliminating uncertainty or guaranteeing safety. The aim is to improve the quality of review, reasoning and decision support.",
  ],
] as const;

export function TechnicalAdvisoryPage() {
  return (
    <main className="rm-page ta-page">
      <TechnicalAdvisoryHero />
      <TechnicalAdvisoryMeaning />
      <TechnicalAdvisoryChallengeMatrix />
      <TechnicalAdvisoryFocusAreas />
      <TechnicalAdvisoryMethod />
      <TechnicalAdvisoryOutputsOutcomes />
      <TechnicalAdvisoryFAQCTA />
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

function TechnicalAdvisoryHero() {
  return (
    <section className="rm-hero ta-hero" aria-labelledby="technical-advisory-title">
      <div className="rm-container rm-hero-grid">
        <div className="rm-hero-copy">
          <p className="rm-eyebrow">Service / Technical Advisory</p>
          <h1 id="technical-advisory-title">Technical Advisory</h1>
          <p className="rm-hero-deck">Independent technical advice for monitoring decisions that matter.</p>
          <p className="rm-hero-deck">
            DTG helps clients review monitoring performance, interpret complex signals, assess alarm and TARP logic,
            strengthen workflows and make better-informed decisions from monitoring information.
          </p>
          <p className="rm-hero-line">Independent review. Practical judgement. Defensible decisions.</p>
          <div className="rm-actions">
            <Link href="/contact" className="rm-button rm-button-primary">
              Discuss technical advisory support <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link href="#advisory-focus-areas" className="rm-button rm-button-secondary">
              See advisory focus areas <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link href="/services" className="rb-tertiary-link">
              Explore all services <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
          <div className="ti-hero-chips ta-hero-tags" aria-label="Technical Advisory examples">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <TechnicalAdvisoryHeroPanel />
      </div>
    </section>
  );
}

function TechnicalAdvisoryHeroPanel() {
  return (
    <figure
      className="rm-hero-visual ta-hero-visual"
      aria-label="Monitoring inputs pass through independent technical advisory into practical recommendations"
    >
      <svg className="ta-hero-connectors" viewBox="0 0 900 560" preserveAspectRatio="none" aria-hidden="true">
        <path d="M170 248 C262 248 300 250 376 258" />
        <path d="M170 312 C260 300 304 294 376 286" />
        <path className="is-governance" d="M524 258 C604 250 646 244 730 236" />
        <path className="is-governance" d="M524 288 C604 300 646 312 730 326" />
      </svg>
      <div className="ta-hero-column">
        <p>MONITORING EVIDENCE</p>
        <div>
          {heroInputs.map((input) => (
            <span key={input}>{input}</span>
          ))}
        </div>
      </div>
      <div className="ta-hero-core">
        <p>INDEPENDENT JUDGEMENT</p>
        <strong>
          Review
          <i aria-hidden="true" />
          Challenge
          <i aria-hidden="true" />
          Recommend
        </strong>
      </div>
      <div className="ta-hero-column ta-hero-column-right">
        <p>ADVISORY OUTCOME</p>
        <div>
          {heroOutputs.map((output) => (
            <span key={output}>{output}</span>
          ))}
        </div>
      </div>
      <figcaption>
        Independent technical advice helps monitoring evidence become clearer, more practical and more defensible.
      </figcaption>
    </figure>
  );
}

function TechnicalAdvisoryMeaning() {
  return (
    <section className="rm-section rm-section-light ta-meaning-section" aria-labelledby="technical-advisory-meaning-title">
      <div className="rm-container">
        <SectionHeader
          id="technical-advisory-meaning-title"
          eyebrow="What it means"
          title="Advice that connects monitoring evidence with operational decisions."
        />
        <p className="rm-lead">
          Technical Advisory at DTG helps clients make better use of monitoring systems, alarms, reports, workflows and
          interpretation processes.
        </p>
        <p className="rm-lead">
          Monitoring environments can be technically complex and operationally sensitive. Different sensors may tell
          different stories. Alarms may be frequent or uncertain. TARPs may need refinement. Reporting may not clearly
          support decisions. Internal teams may need an independent second view.
        </p>
        <p className="rm-lead">
          DTG provides technical advice that helps clients understand what the monitoring evidence supports, where
          uncertainty remains, and what practical improvements can strengthen decision confidence.
        </p>
        <div className="ta-meaning-editorial">
          <p>Good monitoring advice is not more noise. It is clearer judgement.</p>
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

function TechnicalAdvisoryChallengeMatrix() {
  return (
    <section className="rm-section rm-section-soft ta-challenge-section" aria-labelledby="technical-advisory-why-title">
      <div className="rm-container">
        <SectionHeader
          id="technical-advisory-why-title"
          eyebrow="Why it matters"
          title="Monitoring decisions become harder when data, workflows and response do not align."
          copy="Many monitoring challenges are not caused by a lack of technology. They arise when monitoring information is difficult to interpret, alarms are not clearly connected to response, reporting lacks context or teams need an independent view before changing workflows or making operational decisions."
        />
        <div className="rb-matrix ta-matrix" role="table" aria-label="Technical Advisory challenge matrix">
          <div className="rb-matrix-head" role="row">
            <span role="columnheader">Monitoring challenge</span>
            <span role="columnheader">What it creates</span>
            <span role="columnheader">How advisory helps</span>
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

function TechnicalAdvisoryFocusAreas() {
  return (
    <section
      id="advisory-focus-areas"
      className="rm-section rm-section-light ta-focus-section"
      aria-labelledby="advisory-focus-title"
    >
      <div className="rm-container">
        <SectionHeader
          id="advisory-focus-title"
          eyebrow="Advisory focus areas"
          title="Where DTG can provide technical advice."
          copy="Technical Advisory can be adapted to the client's monitoring environment, operational risk, technology mix and decision needs."
        />
        <div className="ta-focus-landscape">
          <article className="ta-focus-feature">
            <div className="ta-focus-feature-copy">
              <span className="rm-marker">Featured focus</span>
              <h3>Alarm, TARP and escalation review</h3>
              <p>
                Review of alarm frequency, threshold logic, trigger relevance, response levels, communication pathways
                and escalation confidence.
              </p>
            </div>
            <div className="ta-escalation-map" aria-label="Generic alarm and escalation review pathway">
              <p>Are alarms connected to practical response?</p>
              <ol>
                {escalationSteps.map((step, index) => (
                  <li className={index === 3 || index === 5 ? "is-decision" : index === 2 ? "is-evidence" : ""} key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
            </div>
            <ul className="ta-focus-questions" aria-label="Key advisory questions">
              {focusQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>
          <div className="ta-focus-grid">
            {focusRows.map(([title, copy], index) => (
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

function TechnicalAdvisoryMethod() {
  return (
    <section className="rm-section rm-section-dark ta-method-section" aria-labelledby="technical-advisory-method-title">
      <div className="rm-container">
        <SectionHeader
          id="technical-advisory-method-title"
          eyebrow="Advisory method"
          title="From monitoring question to practical recommendation."
          copy="Technical Advisory can be a focused review, workshop, technical memorandum, monitoring performance review or ongoing advisory engagement. The approach depends on the question being asked, the evidence available and the decision the client needs to support."
        />
        <ol className="ta-method-path" aria-label="Technical Advisory method">
          {methodStages.map(([title, copy, label], index) => (
            <li className={label === "JUDGEMENT" ? "is-judgement" : ""} key={title}>
              <span>{label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="ta-method-note">
          Independent advisory value comes from knowing what to review, what to question and what to recommend.
        </p>
      </div>
    </section>
  );
}

function TechnicalAdvisoryOutputsOutcomes() {
  return (
    <section className="rm-section rm-section-light ta-outputs-section" aria-labelledby="technical-advisory-outputs-title">
      <div className="rm-container">
        <SectionHeader
          id="technical-advisory-outputs-title"
          eyebrow="Outputs and outcomes"
          title="Practical advice clients can use."
          copy="Technical Advisory outputs should help clients make decisions, improve workflows and preserve the reasoning behind recommendations."
        />
        <div className="ta-output-groups">
          {outputGroups.map((group, index) => (
            <article key={group.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="ta-outcomes-table">
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

function TechnicalAdvisoryFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="ta-faq-cta-section" aria-labelledby="technical-advisory-faq-title">
      <div className="rm-section rm-section-light rb-faq-section">
        <div className="rm-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="technical-advisory-faq-title">Technical Advisory, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `technical-advisory-faq-${index}`;
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
      <div className="rm-section rm-section-dark rb-final-cta-section" aria-labelledby="technical-advisory-cta-title">
        <div className="rm-container">
          <div className="rm-cta-panel rb-cta-panel ta-final-cta">
            <div>
              <p className="rm-eyebrow">Start a technical advisory conversation</p>
              <h2 id="technical-advisory-cta-title">Need an independent view of your monitoring challenge?</h2>
              <p>
                DTG can help review monitoring performance, alarm confidence, workflows, TARP alignment and decision
                pathways so your team can act with greater clarity and confidence.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss technical advisory support <ArrowUpRight aria-hidden="true" size={16} />
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
              <Link href="/services/data-analytics-automation">Data Analytics & Automation</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
