"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  Eye,
  FileCheck2,
  GitBranch,
  Network,
  RadioTower,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const monitoringInputs = ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "Piezometers", "Seismic", "Inspections", "Operational records"];

const assuranceGates = ["Data Quality", "Configuration", "Correlation", "Interpretation", "Governance", "Traceability"];

const reviewActions = ["Validate", "Test", "Challenge", "Document", "Advise"];

const assuranceOutcomes = ["Reliable evidence", "Clearer escalation", "Defensible reporting", "Reduced uncertainty", "Trusted decisions"];

const assuranceQuestions: Array<[string, string]> = [
  ["Is the data reliable enough to support the decision?", "Review availability, continuity, noise, gaps and instrument behaviour before interpretation."],
  ["Are instruments configured and reviewed correctly?", "Check coverage, masks, references, scan areas, thresholds and operational constraints."],
  ["Are alarms meaningful, repeatable and actionable?", "Test alarm logic against response timing, TARP alignment and practical escalation needs."],
  ["Do different sensors support or challenge each other?", "Compare technologies and observations to make agreement, delay or contradiction visible."],
  ["Is interpretation documented clearly enough to be defended later?", "Record evidence, assumptions, uncertainty, recommendations and review logic."],
  ["Do workflows help people respond with confidence?", "Connect technical review to responsibilities, communication, decision records and change control."],
];

const assuranceCards: Array<{
  title: string;
  summary: string;
  detail: string;
  why: string;
  icon: LucideIcon;
}> = [
  {
    title: "Data quality assurance",
    summary: "Reliable interpretation starts with reliable data.",
    detail:
      "DTG reviews data availability, continuity, noise, gaps, outliers, environmental influence and instrument behaviour before treating a signal as meaningful.",
    why: "Poor data quality can create false alarms, missed trends or weak decision confidence.",
    icon: CheckCircle2,
  },
  {
    title: "Instrument and configuration review",
    summary: "Monitoring performance depends on how systems are configured, maintained and reviewed.",
    detail:
      "DTG assesses whether monitoring systems are set up to support the actual risk and geometry being monitored, including coverage, references, scan areas, alarm settings and thresholds.",
    why: "A capable technology can still produce weak outcomes if it is poorly configured or reviewed without context.",
    icon: SlidersHorizontal,
  },
  {
    title: "Alarm and TARP logic",
    summary: "Alarms should support action, not create uncertainty.",
    detail:
      "DTG reviews alarm logic, escalation pathways, TARP alignment, threshold behaviour, response timing and communication workflows.",
    why: "Alarm fatigue and unclear escalation can weaken confidence at the exact moment decisions matter most.",
    icon: AlertTriangle,
  },
  {
    title: "Multi-sensor correlation",
    summary: "A single monitoring signal rarely tells the whole story.",
    detail:
      "DTG compares radar, prisms, GNSS, InSAR, LiDAR, piezometers, inspections and operational information where relevant.",
    why: "Correlation helps teams understand whether a trend is supported, contradicted, delayed, localised or uncertain.",
    icon: Network,
  },
  {
    title: "Independent technical interpretation",
    summary: "Interpretation should be evidence-based, not assumed from a single alert.",
    detail:
      "DTG applies experienced monitoring judgement to assess movement behaviour, temporal patterns, data confidence, operational activity and decision implications.",
    why: "Clients need interpretation they can understand, challenge, explain and act on.",
    icon: Eye,
  },
  {
    title: "Traceable reporting and governance",
    summary: "If a decision matters, the reasoning should be visible.",
    detail:
      "DTG supports documentation of evidence, assumptions, review logic, uncertainty, recommendations and escalation rationale.",
    why: "A defensible decision is not only the right decision. It is one that can be explained later.",
    icon: FileCheck2,
  },
];

const gateSteps: Array<{
  id: string;
  label: string;
  short: string;
  detail: string;
  checks: string[];
}> = [
  {
    id: "capture",
    label: "Capture",
    short: "Collect the right information for the risk being monitored.",
    detail:
      "Assurance begins with whether the monitoring system is capturing information relevant to ground behaviour, operational context, geometry and the decision requirement.",
    checks: ["monitoring objective", "coverage", "sensor suitability", "frequency", "environmental exposure", "operational constraints"],
  },
  {
    id: "validate",
    label: "Validate",
    short: "Check whether the information is reliable enough to use.",
    detail:
      "Data is reviewed for availability, continuity, noise, outliers, gaps, environmental influence and system behaviour before being treated as decision-grade information.",
    checks: ["data availability", "signal quality", "outlier behaviour", "reference stability", "known artefacts", "missing data"],
  },
  {
    id: "configure",
    label: "Configure",
    short: "Confirm the monitoring setup supports the required response.",
    detail:
      "Instrument settings, scan areas, masks, thresholds, alarm logic, visualisation and review workflows are assessed against the actual risk and operational need.",
    checks: ["scan area", "alarm settings", "masks", "thresholds", "reference selection", "review frequency"],
  },
  {
    id: "correlate",
    label: "Correlate",
    short: "Compare signals across technologies and context.",
    detail:
      "Multiple information sources are compared to test whether trends are supported, contradicted, delayed, localised or uncertain.",
    checks: ["radar trend alignment", "prism or GNSS comparison", "InSAR context", "groundwater influence", "inspections", "operational activity"],
  },
  {
    id: "interpret",
    label: "Interpret",
    short: "Convert reviewed signals into technical understanding.",
    detail:
      "DTG considers what the information means, what remains uncertain and what decision implications can reasonably be supported by the evidence.",
    checks: ["movement pattern", "rate change", "acceleration", "spatial extent", "uncertainty", "operational relevance"],
  },
  {
    id: "govern",
    label: "Govern",
    short: "Connect interpretation to escalation and accountability.",
    detail:
      "Monitoring information must be connected to clear workflows, responsibilities, escalation criteria and communication pathways.",
    checks: ["TARP alignment", "response pathways", "accountability", "communication", "review records", "change control"],
  },
  {
    id: "decide",
    label: "Decide",
    short: "Support action with documented reasoning.",
    detail:
      "The final assurance step is ensuring the decision pathway is clear, explainable and traceable, especially when risk, uncertainty or operational pressure is high.",
    checks: ["recommendation", "rationale", "assumptions", "limitations", "approval pathway", "audit trail"],
  },
];

const comparison = {
  output: [
    "Multiple alerts without shared context",
    "Sensor data reviewed in isolation",
    "Thresholds accepted without challenge",
    "Data gaps treated inconsistently",
    "Reporting focused on what happened",
    "Escalation depends on individual judgement",
    "Decision rationale may be unclear later",
  ],
  assurance: [
    "Data quality reviewed before interpretation",
    "Configuration checked against monitoring objective",
    "Signals correlated across technologies",
    "Alarm and TARP logic tested against response needs",
    "Reporting includes evidence and uncertainty",
    "Escalation follows governed workflows",
    "Decision rationale is documented and traceable",
  ],
};

const reviewAreas: Array<{ title: string; copy: string; checks: string[]; icon: LucideIcon }> = [
  {
    title: "Monitoring objective",
    copy: "Clarifies what behaviour, risk, area, asset or decision the system is intended to support.",
    checks: ["risk context", "decision need", "monitoring target"],
    icon: Target,
  },
  {
    title: "Data availability",
    copy: "Reviews whether data continuity and coverage are sufficient for the required monitoring purpose.",
    checks: ["coverage", "continuity", "frequency"],
    icon: RadioTower,
  },
  {
    title: "Data quality",
    copy: "Checks signal reliability, noise, gaps, outliers, artefacts and confidence in the dataset.",
    checks: ["noise", "gaps", "artefacts"],
    icon: CheckCircle2,
  },
  {
    title: "System configuration",
    copy: "Assesses setup, scan area, masks, reference points, thresholds, alarm settings and review views.",
    checks: ["thresholds", "references", "views"],
    icon: SlidersHorizontal,
  },
  {
    title: "Sensor correlation",
    copy: "Compares multiple technologies and information sources to strengthen or challenge interpretation.",
    checks: ["agreement", "delay", "contradiction"],
    icon: GitBranch,
  },
  {
    title: "Alarm performance",
    copy: "Reviews alarm frequency, relevance, escalation quality, false-alarm risk and response usefulness.",
    checks: ["frequency", "relevance", "response"],
    icon: AlertTriangle,
  },
  {
    title: "TARP and escalation",
    copy: "Checks whether monitoring triggers are aligned with practical operational response pathways.",
    checks: ["triggers", "roles", "pathways"],
    icon: Workflow,
  },
  {
    title: "Reporting and traceability",
    copy: "Ensures findings, assumptions, uncertainty and recommendations are documented clearly.",
    checks: ["evidence", "assumptions", "records"],
    icon: ClipboardCheck,
  },
  {
    title: "Continuous improvement",
    copy: "Uses review outcomes to improve monitoring setup, workflows, thresholds and communication over time.",
    checks: ["threshold review", "lessons", "change control"],
    icon: CircleGauge,
  },
];

const traceabilitySteps = [
  ["Observation", "What changed, where and when?"],
  ["Quality Check", "Can the data be trusted?"],
  ["Correlation", "Do other sources support or challenge the signal?"],
  ["Interpretation", "What does the evidence suggest?"],
  ["Recommendation", "What action or review is appropriate?"],
  ["Decision Record", "How was the decision justified?"],
];

const outcomeCards: Array<[string, string, LucideIcon]> = [
  ["More reliable interpretation", "Monitoring information is reviewed before conclusions are drawn, reducing the risk of acting on weak or misleading signals.", Eye],
  ["Clearer escalation confidence", "Alarms and TARP pathways become easier to understand, communicate and act on.", Workflow],
  ["Reduced decision uncertainty", "Conflicting or incomplete datasets are reviewed in context rather than escalated without explanation.", CircleGauge],
  ["Stronger governance", "Workflows, assumptions, review logic and recommendations are more clearly documented.", ShieldCheck],
  ["More defensible reporting", "Clients gain a clearer technical record of what was observed, what was reviewed and why action was recommended.", FileCheck2],
];

const faqs: Array<[string, string]> = [
  [
    "What does technical assurance mean in monitoring?",
    "It means reviewing whether monitoring information is reliable, meaningful, correctly configured, properly interpreted and connected to governed response pathways.",
  ],
  [
    "Is technical assurance the same as data quality control?",
    "No. Data quality control is one part of assurance. Technical assurance also considers configuration, alarm logic, multi-sensor correlation, interpretation, escalation, reporting and governance.",
  ],
  [
    "Why is independent review important?",
    "Independent review helps challenge assumptions, identify uncertainty, compare evidence across systems and provide a clearer basis for decisions.",
  ],
  [
    "Does DTG replace the client geotechnical team?",
    "No. DTG supports client teams by providing independent monitoring review, technical interpretation, workflow support and decision confidence.",
  ],
  [
    "When should technical assurance be applied?",
    "It should be applied throughout the monitoring lifecycle: before technology selection, during setup, during live monitoring, after alarms, during reporting and when workflows or thresholds need review.",
  ],
];

function AssuranceFrameworkDiagram() {
  return (
    <div className="ta-framework-diagram" aria-label="Technical assurance framework from monitoring inputs to client outcomes">
      <div className="ta-diagram-layer">
        <p>Monitoring Inputs</p>
        <div>
          {monitoringInputs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="ta-diagram-layer ta-diagram-gates">
        <p>Assurance Gates</p>
        <div>
          {assuranceGates.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="ta-diagram-review">
        <strong>DTG Review</strong>
        <div>
          {reviewActions.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="ta-diagram-layer ta-diagram-outcomes">
        <p>Client Outcomes</p>
        <div>
          {assuranceOutcomes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechnicalAssuranceSection() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [openCard, setOpenCard] = useState(0);
  const [activeGate, setActiveGate] = useState(0);
  const [comparisonView, setComparisonView] = useState<"output" | "assurance">("assurance");
  const [openArea, setOpenArea] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const gate = gateSteps[activeGate];

  return (
    <main className="ta-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Technical Assurance" }]}
        title="Technical Assurance"
        subtitle="Assurance connects the data, the interpretation and the decision."
        intro="Technical assurance helps ensure monitoring information is reliable, meaningful, correctly interpreted and connected to governed response pathways."
        titleId="technical-assurance-title"
      />

      <section className="ta-section ta-hero-framework" aria-labelledby="technical-assurance-framework-title">
        <div className="ta-container ta-two-column">
          <div className="ta-framework-copy">
            <p className="ta-eyebrow">Assurance Framework</p>
            <h2 id="technical-assurance-framework-title">A review pathway for defensible decisions.</h2>
            <p>
              DTG reviews monitoring information through a structured assurance pathway so teams can understand what the
              data supports, where uncertainty remains and how decisions can be documented more clearly.
            </p>
            <nav className="ta-anchor-list" aria-label="Technical assurance page sections">
              {["Assurance Framework", "Assurance Gates", "Review Areas", "Traceability", "Outcomes"].map((item) => (
                <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>{item}</a>
              ))}
            </nav>
          </div>
          <div className="ta-hero-panel ta-framework-panel">
            <p className="ta-eyebrow">Review Pathway</p>
            <AssuranceFrameworkDiagram />
            <p className="ta-diagram-caption">
              From monitoring signals to defensible decisions through structured technical assurance.
            </p>
          </div>
        </div>
      </section>

      <section className="ta-section ta-meaning" id="assurance-framework">
        <div className="ta-container ta-two-column">
          <div>
            <p className="ta-eyebrow">What Technical Assurance Means</p>
            <h2>Confidence is reviewed, tested, documented and governed.</h2>
            <p>
              Technical assurance is not a single checklist completed at the end of a project. It is a structured way of
              reviewing monitoring information throughout its lifecycle, from data capture and configuration through to
              interpretation, escalation, reporting and continuous improvement.
            </p>
          </div>
          <div className="ta-question-stack">
            {assuranceQuestions.map(([question, answer], index) => {
              const expanded = openQuestion === index;
              return (
                <article className="ta-question" key={question}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`ta-question-${index}`}
                    onClick={() => setOpenQuestion(expanded ? -1 : index)}
                  >
                    <span>{question}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <div id={`ta-question-${index}`} hidden={!expanded}>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ta-section ta-cards">
        <div className="ta-container">
          <div className="ta-section-header">
            <p className="ta-eyebrow">Assurance Framework</p>
            <h2>What DTG reviews before information becomes decision support.</h2>
            <p>Each review layer helps reduce false confidence and makes uncertainty more visible and manageable.</p>
          </div>
          <div className="ta-card-grid">
            {assuranceCards.map(({ title, summary, detail, why, icon: Icon }, index) => {
              const expanded = openCard === index;
              return (
                <article className="ta-assurance-card" key={title}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`ta-card-${index}`}
                    onClick={() => setOpenCard(expanded ? -1 : index)}
                  >
                    <Icon size={28} strokeWidth={1.45} aria-hidden="true" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{title}</strong>
                    <em>{summary}</em>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <div id={`ta-card-${index}`} hidden={!expanded}>
                    <p>{detail}</p>
                    <small>Why it matters</small>
                    <p>{why}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ta-section ta-gates" id="assurance-gates">
        <div className="ta-container">
          <div className="ta-section-header">
            <p className="ta-eyebrow">Assurance Gates</p>
            <h2>The assurance gates behind a defensible monitoring decision.</h2>
            <p>Each gate reduces uncertainty before information is used to support action.</p>
          </div>
          <div className="ta-gate-tabs" role="tablist" aria-label="Technical assurance gates">
            {gateSteps.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeGate === index}
                aria-controls="ta-gate-panel"
                id={`ta-gate-tab-${item.id}`}
                onClick={() => setActiveGate(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </button>
            ))}
          </div>
          <article className="ta-gate-panel" id="ta-gate-panel" role="tabpanel" aria-labelledby={`ta-gate-tab-${gate.id}`}>
            <div>
              <p className="ta-eyebrow">Active Gate</p>
              <h3>{gate.label}</h3>
              <strong>{gate.short}</strong>
              <p>{gate.detail}</p>
            </div>
            <ul>
              {gate.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="ta-section ta-comparison">
        <div className="ta-container">
          <div className="ta-section-header">
            <p className="ta-eyebrow">Comparison</p>
            <h2>From monitoring output to technical assurance.</h2>
          </div>
          <div className="ta-comparison-tabs" role="tablist" aria-label="Monitoring output comparison">
            <button type="button" role="tab" aria-selected={comparisonView === "output"} onClick={() => setComparisonView("output")}>
              Monitoring output only
            </button>
            <button type="button" role="tab" aria-selected={comparisonView === "assurance"} onClick={() => setComparisonView("assurance")}>
              DTG technical assurance
            </button>
          </div>
          <div className="ta-comparison-grid">
            <ComparisonColumn title="Monitoring output only" items={comparison.output} active={comparisonView === "output"} />
            <ComparisonColumn title="DTG technical assurance" items={comparison.assurance} active={comparisonView === "assurance"} gold />
          </div>
          <p className="ta-comparison-note">
            Technical assurance does not remove uncertainty. It makes uncertainty visible, reviewable and easier to
            manage.
          </p>
        </div>
      </section>

      <section className="ta-section ta-review" id="review-areas">
        <div className="ta-container">
          <div className="ta-section-header">
            <p className="ta-eyebrow">Technical Review Areas</p>
            <h2>Where DTG applies technical assurance.</h2>
            <p>Assurance is applied across the full monitoring lifecycle, from system setup to operational response.</p>
          </div>
          <div className="ta-review-grid">
            {reviewAreas.map(({ title, copy, checks, icon: Icon }, index) => {
              const expanded = openArea === index;
              return (
                <article className="ta-review-card" key={title}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`ta-review-${index}`}
                    onClick={() => setOpenArea(expanded ? -1 : index)}
                  >
                    <Icon size={23} strokeWidth={1.45} aria-hidden="true" />
                    <strong>{title}</strong>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <p>{copy}</p>
                  <div id={`ta-review-${index}`} hidden={!expanded}>
                    {checks.map((check) => (
                      <span key={check}>{check}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ta-section ta-traceability" id="traceability">
        <div className="ta-container">
          <div className="ta-section-header">
            <p className="ta-eyebrow">Traceability</p>
            <h2>Every recommendation should leave a clear technical trail.</h2>
            <p>
              DTG structures review outputs so clients can understand what was observed, what was checked, what
              uncertainty remains and why a recommendation was made.
            </p>
          </div>
          <ol className="ta-trace-chain">
            {traceabilitySteps.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ta-section ta-outcomes" id="outcomes">
        <div className="ta-container ta-outcome-grid-wrap">
          <div>
            <p className="ta-eyebrow">Outcomes</p>
            <h2>What stronger assurance gives clients.</h2>
          </div>
          <div className="ta-outcome-grid">
            {outcomeCards.map(([title, copy, Icon]) => (
              <article className="ta-outcome-card" key={title}>
                <Icon size={24} strokeWidth={1.45} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ta-section ta-faq">
        <div className="ta-container ta-two-column">
          <div>
            <p className="ta-eyebrow">FAQ</p>
            <h2>Technical assurance, explained clearly.</h2>
          </div>
          <div className="ta-faq-list">
            {faqs.map(([question, answer], index) => {
              const expanded = openFaq === index;
              return (
                <article className="ta-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`ta-faq-${index}`}
                    onClick={() => setOpenFaq(expanded ? -1 : index)}
                  >
                    <span>{question}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <div id={`ta-faq-${index}`} hidden={!expanded}>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ta-cta">
        <div className="ta-container ta-cta-panel">
          <div>
            <p className="ta-eyebrow">Technical Assurance Review</p>
            <h2>Need greater confidence in your monitoring decisions?</h2>
            <p>
              DTG can review monitoring data quality, alarm logic, technology configuration, reporting workflows and
              escalation pathways to help strengthen decision confidence and governance.
            </p>
          </div>
          <div className="ta-cta-actions">
            <Link href="/contact">Request a technical assurance review <ArrowUpRight size={16} /></Link>
            <Link href="/contact">Discuss your monitoring workflow <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ComparisonColumn({ title, items, active, gold }: { title: string; items: string[]; active: boolean; gold?: boolean }) {
  return (
    <article className={`ta-comparison-column ${active ? "is-active" : ""} ${gold ? "is-gold" : ""}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
