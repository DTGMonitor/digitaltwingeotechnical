"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  Eye,
  GitBranch,
  Layers3,
  Network,
  RadioTower,
  ShieldCheck,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const monitoringInputs = ["Radar", "InSAR", "GNSS", "Prisms", "LiDAR", "VWP", "Seismic", "Inspections"];

const reviewSteps: Array<[string, string]> = [
  ["Integrate", "Bring technologies and datasets into one operational context."],
  ["Validate", "Check signal quality, data behaviour and operational relevance."],
  ["Correlate", "Compare locations, timescales and systems to find what aligns."],
  ["Analyse", "Turn patterns and anomalies into engineering interpretation."],
  ["Govern", "Apply thresholds, workflows and documented escalation logic."],
  ["Act", "Support timely decisions with clearer rationale and traceability."],
];

const diagramOutcomes = [
  "Clarity",
  "Escalation confidence",
  "Operational visibility",
  "Governance",
  "Defensible decisions",
];

const principles: Array<{ title: string; summary: string; body: string; icon: LucideIcon }> = [
  {
    title: "Start with the decision",
    summary: "The work begins with the operational question, not with a single sensor output.",
    body:
      "DTG clarifies what is being monitored, which uncertainty matters, who needs to act and what time horizon applies. This keeps review focused on decision quality rather than isolated technical outputs.",
    icon: Target,
  },
  {
    title: "Integrate the monitoring environment",
    summary: "Multiple technologies and datasets are brought into one operating context.",
    body:
      "Radar, satellite, geodetic, geotechnical, observational and operational inputs rarely tell the same story in the same way. Integration creates the foundation for testing alignment and reducing fragmentation.",
    icon: Network,
  },
  {
    title: "Validate before interpreting",
    summary: "Data quality and signal behaviour are checked before conclusions are drawn.",
    body:
      "Not every signal deserves the same level of confidence. DTG reviews continuity, instrument behaviour and operational relevance before building an interpretation.",
    icon: CheckCircle2,
  },
  {
    title: "Correlate in context",
    summary: "Signals are compared across systems, locations, timescales and site activity.",
    body:
      "A data point becomes more useful when it is compared with neighbouring evidence. Correlation helps reveal both corroboration and inconsistency in a structured way.",
    icon: GitBranch,
  },
  {
    title: "Keep judgement human-led",
    summary: "Systems support speed and consistency, but engineering judgement remains accountable.",
    body:
      "Digital systems can improve visibility and review discipline. DTG keeps technical judgement visible so recommendations remain explainable, reviewable and suited to live operations.",
    icon: UserRoundCheck,
  },
  {
    title: "Govern the response pathway",
    summary: "Insight is linked to thresholds, workflows, escalation logic and documented rationale.",
    body:
      "Interpretation has limited value if response pathways are vague. DTG connects technical review to governance so teams know what should happen next and why.",
    icon: Workflow,
  },
  {
    title: "Measure success by outcomes",
    summary: "The method is judged by decision quality, clarity and defensibility in the field.",
    body:
      "The end point is not another dashboard or report. It is clearer escalation, stronger governance, reduced uncertainty and decisions that remain explainable later.",
    icon: ShieldCheck,
  },
];

const caseStates: Record<"before" | "after", string[]> = {
  before: [
    "Radar alarms, prism movement and inspection notes are reviewed in separate streams.",
    "TARP pathways and review responsibilities are difficult to compare.",
    "Teams have more commentary, but not necessarily a coherent operational view.",
  ],
  after: [
    "Evidence is validated, correlated and placed in operational context.",
    "Uncertainty, assumptions and response pathways are documented.",
    "Teams gain a clearer view of what is happening and what action makes sense.",
  ],
};

const proofCards: Array<[string, string, LucideIcon]> = [
  ["Clearer escalation", "Concern is easier to interpret, prioritise and communicate.", CircleGauge],
  ["Reduced uncertainty", "Noisy or conflicting datasets are reviewed through a structured method.", Eye],
  ["Stronger governance", "Rationale, review discipline and decision records are easier to defend.", ClipboardCheck],
  ["Better operational visibility", "Monitoring becomes more useful across teams, systems and timescales.", Layers3],
];

const credentialCards: Array<[string, string, string, string]> = [
  [
    "Remote monitoring leadership",
    "Experience building and operating monitoring review capability for complex mining environments.",
    "/images/peter-saunders-portrait.png",
    "Peter Saunders portrait",
  ],
  [
    "Mining and geotechnical context",
    "Economic and structural geology, geotechnical studies and operational mining insight.",
    "/images/mark-burdett-portrait.png",
    "Mark Burdett portrait",
  ],
];

function ApproachDiagram() {
  return (
    <div className="oa-diagram" aria-label="Monitoring inputs moving through the DTG approach into operational outcomes">
      <div className="oa-diagram-column">
        <p>Inputs</p>
        <h3>Monitoring information</h3>
        <ul>
          {monitoringInputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="oa-diagram-core">
        <RadioTower size={28} strokeWidth={1.45} aria-hidden="true" />
        <span>DTG review layer</span>
        <strong>Integrate. Validate. Govern.</strong>
        <div>
          {reviewSteps.map(([title]) => (
            <em key={title}>{title}</em>
          ))}
        </div>
      </div>

      <div className="oa-diagram-column oa-diagram-column-gold">
        <p>Outcomes</p>
        <h3>Decision-ready insight</h3>
        <ul>
          {diagramOutcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function OurApproachEditorial() {
  const [openPrinciple, setOpenPrinciple] = useState(0);
  const [caseView, setCaseView] = useState<"before" | "after">("after");

  return (
    <main className="oa-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Our Approach" }]}
        title="Our Approach"
        subtitle="How DTG turns monitoring complexity into operational clarity."
        intro="Modern sites already generate large volumes of monitoring information. DTG helps teams understand what it means, how signals relate and when they require action."
        titleId="our-approach-title"
      />

      <section className="oa-section oa-method">
        <div className="oa-container oa-method-grid">
          <div className="oa-section-copy">
            <p className="oa-eyebrow">Method</p>
            <h2>A structured method for clearer monitoring decisions.</h2>
            <p>
              DTG connects monitoring technologies, engineering review and governance into a practical operating method.
            </p>
          </div>
          <ApproachDiagram />
        </div>
      </section>

      <section className="oa-section oa-process">
        <div className="oa-container">
          <div className="oa-heading-row">
            <p className="oa-eyebrow">Operating Method</p>
            <h2>A governed workflow for monitoring interpretation.</h2>
          </div>
          <ol className="oa-workflow-list" aria-label="DTG approach workflow steps">
            {reviewSteps.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="oa-section oa-principles">
        <div className="oa-container oa-principles-grid">
          <div className="oa-section-copy">
            <p className="oa-eyebrow">Principles</p>
            <h2>The working principles behind the method.</h2>
            <p>
              These principles keep DTG focused on decision quality, evidence, governance and real operating conditions.
            </p>
          </div>
          <div className="oa-principle-list">
            {principles.map(({ title, summary, body, icon: Icon }, index) => {
              const expanded = openPrinciple === index;
              const panelId = `oa-principle-${index}`;
              return (
                <article className="oa-principle-item" key={title}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenPrinciple(expanded ? -1 : index)}
                  >
                    <Icon size={24} strokeWidth={1.45} aria-hidden="true" />
                    <span>
                      <strong>{title}</strong>
                      <em>{summary}</em>
                    </span>
                    <ChevronDown size={18} strokeWidth={1.45} aria-hidden="true" />
                  </button>
                  <div id={panelId} hidden={!expanded}>
                    <p>{body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="oa-section oa-case">
        <div className="oa-container oa-case-grid">
          <div>
            <p className="oa-eyebrow">Operational Scenario</p>
            <h2>From separate signals to a clearer response pathway.</h2>
            <p>
              A site may have radar alarms, prism movement, inspection notes and periodic satellite insight, but still
              lack a coherent operational view. DTG validates the evidence, correlates signals and places movement in
              context.
            </p>
          </div>
          <div className="oa-case-panel">
            <div className="oa-case-tabs" role="tablist" aria-label="Scenario view">
              <button
                type="button"
                role="tab"
                aria-selected={caseView === "before"}
                onClick={() => setCaseView("before")}
              >
                Fragmented view
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={caseView === "after"}
                onClick={() => setCaseView("after")}
              >
                DTG review
              </button>
            </div>
            <ul>
              {caseStates[caseView].map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="oa-section oa-proof">
        <div className="oa-container">
          <div className="oa-heading-row">
            <p className="oa-eyebrow">Outcomes & Credibility</p>
            <h2>Built from monitoring and mining leadership.</h2>
            <p>
              The DTG approach is led by professionals with experience across remote monitoring, mining, geology, civil
              engineering, governance and operational decision-making.
            </p>
          </div>
          <div className="oa-credential-grid">
            {credentialCards.map(([title, text, image, alt]) => (
              <article className="oa-credential-card" key={title}>
                <div>
                  <Image src={image} alt={alt} fill sizes="88px" />
                </div>
                <span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </span>
              </article>
            ))}
          </div>
          <div className="oa-proof-grid">
            {proofCards.map(([title, text, Icon]) => (
              <article className="oa-proof-card" key={title as string}>
                <Icon size={25} strokeWidth={1.45} aria-hidden="true" />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
          <blockquote>Clearer escalation. Reduced uncertainty. Stronger governance. Better operational visibility.</blockquote>
        </div>
      </section>

      <section className="oa-cta">
        <div className="oa-container oa-cta-grid">
          <div>
            <p className="oa-eyebrow">Monitoring Decision Support</p>
            <h2>Discuss how DTG can support your monitoring challenge.</h2>
            <p>
              If you are managing too much data, too many alarms or disconnected monitoring systems, DTG can help turn
              information into governed, decision-ready insight.
            </p>
          </div>
          <Link href="/contact">
            CONTACT <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
