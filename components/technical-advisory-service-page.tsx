"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const meaningRows = [
  ["Independent monitoring review", "A technical second view on monitoring performance, trends, alarms, workflows and reporting quality."],
  [
    "Practical decision support",
    "Advice focused on what the evidence supports, what uncertainty remains and what response pathways need attention.",
  ],
  ["Monitoring improvement", "Recommendations that strengthen workflows, alarm confidence, reporting discipline and team capability."],
] as const;

const supportGroups = [
  {
    title: "Site Geotechnical Teams",
    copy: "For teams managing daily monitoring decisions, alarms, TARP response, reporting discipline and communication with operations.",
    items: ["alarm review", "monitoring interpretation", "escalation support", "reporting discipline", "workflow improvement"],
  },
  {
    title: "Corporate Technical Teams",
    copy: "For corporate or regional teams responsible for monitoring consistency, cross-site review, governance and technical assurance across multiple operations.",
    items: [
      "portfolio monitoring review",
      "cross-site reporting consistency",
      "independent review of high-risk sites",
      "TARP alignment",
      "technology suitability",
      "monitoring governance",
    ],
  },
  {
    title: "Consultants",
    copy: "For consultants who need specialist monitoring review, independent interpretation, data review or technical support on behalf of a client.",
    items: [
      "independent second opinion",
      "monitoring data interpretation",
      "alarm or failure review support",
      "reporting inputs",
      "multi-sensor comparison",
      "specialist technical review",
    ],
  },
  {
    title: "Asset Owners / Operations Leaders",
    copy: "For decision-makers who need monitoring information translated into clearer operational meaning.",
    items: [
      "decision rationale",
      "escalation confidence",
      "practical recommendations",
      "monitoring improvement actions",
      "risk-informed communication",
    ],
  },
] as const;

const challengeRows = [
  {
    challenge: "Conflicting monitoring signals",
    creates: "Different sensors may show different timing, magnitude, location or confidence levels.",
    helps: "DTG reviews the evidence and explains what can reasonably be interpreted.",
  },
  {
    challenge: "Uncertain alarm confidence",
    creates: "Alarm frequency, recurrence, threshold behaviour or data quality can make escalation difficult.",
    helps: "DTG reviews alarm relevance, trigger logic and escalation confidence.",
  },
  {
    challenge: "Weak TARP alignment",
    creates: "Monitoring triggers may not clearly align with practical response actions or operational realities.",
    helps: "DTG reviews response levels, responsibilities, communication and escalation logic.",
  },
  {
    challenge: "Fragmented workflows",
    creates: "Review, escalation, reporting and accountability may sit across separate teams or systems.",
    helps: "DTG identifies workflow gaps and practical ways to improve monitoring discipline.",
  },
  {
    challenge: "Limited independent review",
    creates:
      "Internal teams, consultants or corporate teams may need a second technical view when monitoring decisions are sensitive or complex.",
    helps: "DTG provides independent technical judgement without vendor or internal bias.",
  },
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

const focusAreas = [
  {
    title: "Monitoring Strategy & Portfolio Review",
    copy: "Advice on how monitoring should support operational risk, ground behaviour, decision requirements and cross-site consistency.",
  },
  {
    title: "Monitoring Workflow Review",
    copy: "Review of how monitoring information moves between systems, reviewers, reports and decision-makers.",
  },
  {
    title: "Multi-Sensor Interpretation",
    copy: "Advice on how to compare radar, prisms, GNSS, InSAR, LiDAR, inspections and other monitoring inputs.",
  },
  {
    title: "Technology Suitability",
    copy: "Technical advice on whether existing or proposed monitoring technologies are fit for purpose.",
  },
  {
    title: "Reporting and Traceability",
    copy: "Advice on how reports should document observations, assumptions, uncertainty and recommendations.",
  },
  {
    title: "Training and Capability Transfer",
    copy: "Support to improve monitoring awareness, response discipline and client team capability.",
  },
] as const;

const methodStages = [
  {
    title: "Define the question",
    copy: "Clarify the monitoring concern, decision need, site context, risk and desired advisory output.",
    label: "QUESTION",
  },
  {
    title: "Review the evidence",
    copy: "Review available monitoring data, alarms, reports, workflows, TARP documents and operational context.",
    label: "EVIDENCE",
  },
  {
    title: "Challenge the interpretation",
    copy: "Test assumptions, uncertainty, threshold logic, escalation pathways and whether conclusions are supported by the evidence.",
    label: "JUDGEMENT",
  },
  {
    title: "Recommend practical action",
    copy: "Provide advice with rationale, limitations, assumptions and next-step recommendations.",
    label: "RECOMMENDATION",
  },
] as const;

const outputGroups = [
  {
    title: "Technical Review Outputs",
    items: [
      "technical advisory memo",
      "independent second opinion",
      "monitoring performance review",
      "multi-sensor interpretation note",
    ],
  },
  {
    title: "Workflow and Response Outputs",
    items: [
      "alarm and TARP review",
      "escalation review notes",
      "workflow improvement plan",
      "reporting and handover recommendations",
    ],
  },
  {
    title: "Corporate / Consultant Support Outputs",
    items: [
      "monitoring strategy brief",
      "cross-site review summary",
      "portfolio monitoring recommendations",
      "independent review support",
      "training and capability transfer material",
    ],
  },
] as const;

const outcomeRows = [
  {
    title: "Clearer technical direction",
    copy: "Teams gain independent advice on what the monitoring evidence supports and what should be reviewed next.",
  },
  {
    title: "Better alarm confidence",
    copy: "Alarm behaviour, thresholds and escalation logic can be assessed more clearly.",
  },
  {
    title: "Stronger monitoring workflows",
    copy: "Review, reporting, handover and escalation pathways become easier to understand and improve.",
  },
  {
    title: "More defensible decisions",
    copy: "Recommendations are supported by evidence, assumptions, limitations and documented rationale.",
  },
  {
    title: "Improved team capability",
    copy: "Client teams gain stronger monitoring understanding, response discipline and practical knowledge transfer.",
  },
  {
    title: "Stronger portfolio consistency",
    copy: "Corporate teams gain a clearer view of monitoring practice, reporting quality and decision support across sites.",
  },
] as const;

const faqs = [
  {
    question: "What is Technical Advisory at DTG?",
    answer:
      "Technical Advisory is independent advice that helps clients review monitoring performance, interpret monitoring issues, assess alarms and workflows, improve escalation logic and make more defensible monitoring decisions.",
  },
  {
    question: "Who does Technical Advisory support?",
    answer:
      "Technical Advisory can support site geotechnical teams, corporate technical teams, consultants, asset owners and operations leaders who need independent monitoring review, practical recommendations or clearer decision support.",
  },
  {
    question: "Can DTG support corporate technical teams?",
    answer:
      "Yes. DTG can support corporate or regional teams with independent review, cross-site monitoring consistency, reporting quality review, technology suitability, monitoring strategy and portfolio-level recommendations.",
  },
  {
    question: "Can DTG support consultants?",
    answer:
      "Yes. DTG can provide specialist monitoring review, second opinion, data interpretation and reporting support for consultants working with mining, infrastructure or asset-owner clients.",
  },
  {
    question: "How is Technical Advisory different from Technology Integration?",
    answer:
      "Technology Integration focuses on connecting monitoring data sources, systems and workflows. Technical Advisory focuses on the technical judgement around monitoring performance, alarms, TARPs, interpretation, risk support and practical recommendations.",
  },
  {
    question: "Does DTG replace the client's geotechnical team?",
    answer:
      "No. DTG supports client teams with independent review and practical advice. The client remains responsible for site decisions and operational control.",
  },
  {
    question: "Can DTG review alarm thresholds and TARPs?",
    answer:
      "Yes. DTG can review alarm logic, trigger levels, TARP alignment, escalation pathways and response workflows depending on available information and agreed scope.",
  },
  {
    question: "Can this service include training?",
    answer:
      "Yes. Training and capability transfer can be included where the client needs stronger monitoring awareness, response discipline, reporting understanding or workflow adoption.",
  },
  {
    question: "Will Technical Advisory guarantee a specific monitoring outcome?",
    answer:
      "No. Technical Advisory supports clearer, more defensible decisions, but it should not be presented as eliminating uncertainty or guaranteeing safety. The aim is to improve the quality of review, reasoning and decision support.",
  },
] as const;

export function TechnicalAdvisoryPage() {
  return (
    <main className="rm-page ta-page">
      <TechnicalAdvisoryHero />
      <TechnicalAdvisoryMeaning />
      <TechnicalAdvisoryWhoSupports />
      <TechnicalAdvisoryChallengeMatrix />
      <TechnicalAdvisoryFocusAreas />
      <TechnicalAdvisoryMethod />
      <TechnicalAdvisoryOutputsOutcomes />
      <TechnicalAdvisoryFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id: string }) {
  return (
    <div className="rm-section-header ta-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function TechnicalAdvisoryHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Technical Advisory" }]}
      title="Technical Advisory"
      subtitle="Practical guidance for monitoring decisions."
      intro="DTG supports monitoring strategy, escalation pathways, governance, capability transfer and decision support for complex monitoring environments."
      titleId="technical-advisory-title"
    />
  );
}

function TechnicalAdvisoryMeaning() {
  return (
    <section className="rm-section rm-section-light ta-meaning-section" aria-labelledby="technical-advisory-meaning-title">
      <div className="rm-container ta-service-container">
        <SectionHeader
          id="technical-advisory-meaning-title"
          eyebrow="What it means"
          title="Advice that connects monitoring evidence with operational decisions."
        />
        <div className="ta-meaning-layout">
          <div>
            <p>
              Technical Advisory at DTG helps clients make better use of monitoring systems, alarms, reports, workflows
              and interpretation processes.
            </p>
            <p>
              Monitoring environments can be technically complex and operationally sensitive. Different sensors may tell
              different stories. Alarms may be frequent or uncertain. TARPs may need refinement. Reports may not clearly
              support decisions. Internal teams may need an independent second view.
            </p>
            <p>
              DTG provides technical advice that helps clients understand what the monitoring evidence supports, where
              uncertainty remains and what practical improvements can strengthen decision confidence.
            </p>
            <p>
              The objective is not to add more complexity. The objective is to make monitoring practice clearer, more
              defensible and more useful in the field.
            </p>
          </div>
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
      </div>
    </section>
  );
}

function TechnicalAdvisoryWhoSupports() {
  return (
    <section className="rm-section rm-section-soft ta-support-section" aria-labelledby="technical-advisory-support-title">
      <div className="rm-container ta-service-container">
        <SectionHeader
          id="technical-advisory-support-title"
          eyebrow="Who we support"
          title="Advisory support for site, corporate and consulting teams."
          copy="Technical Advisory can support different stakeholders depending on the monitoring question, operational risk, available data and decision requirement."
        />
        <div className="ta-support-grid">
          {supportGroups.map((group, index) => (
            <article key={group.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <div>
                <strong>DTG helps with</strong>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalAdvisoryChallengeMatrix() {
  return (
    <section className="rm-section rm-section-soft ta-challenge-section" aria-labelledby="technical-advisory-why-title">
      <div className="rm-container ta-service-container">
        <SectionHeader
          id="technical-advisory-why-title"
          eyebrow="Why it matters"
          title="Monitoring decisions become harder when data, workflows and response do not align."
          copy="Many monitoring challenges are not caused by a lack of technology. They arise when monitoring information is difficult to interpret, alarms are not clearly connected to response, reporting lacks context or teams need an independent view before changing workflows or making operational decisions."
        />
        <div className="ta-advisory-matrix" role="table" aria-label="Technical Advisory challenge matrix">
          <div className="ta-advisory-matrix-head" role="row">
            <span role="columnheader">Monitoring challenge</span>
            <span role="columnheader">What it creates</span>
            <span role="columnheader">How DTG helps</span>
          </div>
          {challengeRows.map((row) => (
            <div className="ta-advisory-matrix-row" role="row" key={row.challenge}>
              <strong role="cell">{row.challenge}</strong>
              <p role="cell">{row.creates}</p>
              <p role="cell">{row.helps}</p>
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
      <div className="rm-container ta-service-container">
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
            <div className="ta-escalation-map" aria-label="Alarm and escalation advisory pathway">
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
            <div className="ta-focus-questions-panel">
              <p>Key advisory questions</p>
              <ul className="ta-focus-questions" aria-label="Key advisory questions">
                {focusQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </article>
          <div className="ta-focus-grid">
            {focusAreas.map((area, index) => (
              <article key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
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
      <div className="rm-container ta-service-container">
        <SectionHeader
          id="technical-advisory-method-title"
          eyebrow="Advisory method"
          title="From monitoring question to practical recommendation."
          copy="Technical Advisory can be a focused review, workshop, technical memorandum, monitoring performance review or ongoing advisory engagement. The approach depends on the question being asked, the evidence available and the decision the client needs to support."
        />
        <ol className="ta-method-path" aria-label="Technical Advisory method">
          {methodStages.map((stage, index) => (
            <li className={stage.label === "JUDGEMENT" ? "is-judgement" : ""} key={stage.title}>
              <span>{stage.label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
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
      <div className="rm-container ta-service-container">
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
          {outcomeRows.map((row, index) => (
            <article key={row.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{row.title}</h3>
              <p>{row.copy}</p>
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
        <div className="rm-container ta-service-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="technical-advisory-faq-title">Technical Advisory, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map((faq, index) => {
              const id = `technical-advisory-faq-${index}`;
              const isOpen = open === `faq-${index}`;
              return (
                <article className="rm-faq-item rb-faq-item" key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="rm-section rm-section-dark rb-final-cta-section" aria-labelledby="technical-advisory-cta-title">
        <div className="rm-container ta-service-container">
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
