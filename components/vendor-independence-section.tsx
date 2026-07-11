"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Eye,
  FileCheck2,
  GitBranch,
  Layers3,
  Network,
  Route,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";

const ecosystem = ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "VWP", "Seismic", "Platforms", "Field observations"];

const reviewSteps = [
  "Define requirement",
  "Screen conflicts",
  "Compare evidence",
  "Test operational fit",
  "Document rationale",
  "Support governance",
];

const decisionOutcomes = [
  "Fit-for-purpose selection",
  "Clearer trade-offs",
  "Reduced lock-in risk",
  "Documented recommendation",
  "Stronger monitoring governance",
  "More defensible decisions",
];

const principles = [
  {
    title: "Client interest comes first",
    summary: "We start with the monitoring problem, not with a preferred product.",
    body:
      "DTG begins with the operational risk, terrain behaviour, monitoring objective, review workflow, and decision context. Only then do we assess whether a technology, workflow, or vendor approach is genuinely fit for purpose.",
    meaning: "Advice starts from your site conditions and decision needs.",
    icon: Compass,
  },
  {
    title: "No preferred vendor before the requirement is defined",
    summary: "Suitability should be earned through evidence, not assumed through brand familiarity.",
    body:
      "Different technologies perform differently across timescales, geometries, environmental conditions, deployment constraints, and governance models. DTG compares the monitoring requirement against those realities before recommending a path.",
    meaning: "You get a clearer view of why one option fits better than another, and where its limits begin.",
    icon: SlidersHorizontal,
  },
  {
    title: "Options are compared on evidence and operational fit",
    summary: "A recommendation should show its basis, not just its conclusion.",
    body:
      "Good advisory work compares alternatives against evidence quality, deployment practicality, data behaviour, review effort, integration needs, supportability, and governance implications. The value is not only choosing an option; it is making the trade-offs explicit.",
    meaning: "You receive recommendations with reasoning, comparison logic, and residual uncertainty made clear.",
    icon: Scale,
  },
  {
    title: "Conflicts are disclosed and managed",
    summary: "Credible independence depends on transparency, not intention alone.",
    body:
      "Where any actual, potential, or perceived conflict could affect judgement, it should be identified, disclosed, and managed through a documented process. Independence should be visible in the way work is governed, not left implicit.",
    meaning: "You know what has been considered, what has been declared, and how impartiality has been protected.",
    icon: ShieldCheck,
  },
  {
    title: "Advisory judgement remains separate from commercial pressure",
    summary: "Recommendations should not be shaped by margin, quotas, or hidden incentives.",
    body:
      "Monitoring advisory is strongest when the evaluation logic is clear and when recommendations are aligned to client need. DTG's role is to help clients understand what the evidence supports, not to force-fit a decision into a preferred commercial pathway.",
    meaning: "You can rely on advice that is tied to the monitoring requirement and decision context.",
    icon: Route,
  },
  {
    title: "Recommendations are documented and explainable",
    summary: "If a decision matters, the rationale should survive scrutiny later.",
    body:
      "Monitoring decisions may need to be revisited after alarms, procurement reviews, incidents, or governance challenges. Recommendations should therefore be traceable back to requirements, options considered, assumptions made, and evidence reviewed.",
    meaning: "You gain an audit trail, not just an opinion.",
    icon: FileCheck2,
  },
  {
    title: "Independence continues after selection",
    summary: "Independence matters during tuning, governance, escalation, and review, not only during procurement.",
    body:
      "Bias can enter after a technology decision is made, especially when thresholds, workflows, and interpretations are shaped around convenience rather than site risk. DTG's independence extends into governance, review quality, alarm optimisation, and post-selection decision support.",
    meaning: "You keep getting objective advice after the purchase decision, when operational consequences become real.",
    icon: Workflow,
  },
];

const comparisonPanels = [
  {
    id: "vendor" as const,
    label: "Vendor-led assumption",
    heading: "Vendor-led assumption",
    items: [
      "Technology choice starts with a preferred product",
      "Vendor strengths define the conversation",
      "Limitations may be underweighted",
      "Integration needs are considered late",
      "Commercial pathway can shape technical recommendation",
      "Decision rationale may be hard to defend later",
    ],
  },
  {
    id: "independent" as const,
    label: "Independent DTG review",
    heading: "Independent DTG review",
    items: [
      "Requirement is defined before the solution",
      "Options are compared against evidence and site context",
      "Limitations and uncertainties are made visible",
      "Integration and governance are considered early",
      "Recommendation logic is documented",
      "Decision pathway is easier to explain and defend",
    ],
  },
];

const trustSignals = [
  ["Requirement-first evaluation", "Monitoring needs are defined before technology options are assessed.", Compass],
  [
    "Transparent comparison logic",
    "Options are reviewed against technical capability, deployment practicality, data quality, supportability, integration potential, governance impact, and cost effectiveness.",
    Scale,
  ],
  [
    "Conflict awareness",
    "Actual, potential, or perceived conflicts should be identified, disclosed, and managed where they could affect judgement or confidence.",
    ShieldCheck,
  ],
  [
    "Documented rationale",
    "Recommendations should be traceable to evidence, assumptions, requirements, and decision criteria.",
    FileCheck2,
  ],
  [
    "Post-selection objectivity",
    "Independent review continues through alarm optimisation, threshold review, workflow governance, escalation logic, and operational reporting.",
    Eye,
  ],
];

const faqs = [
  [
    "What does vendor independence mean at DTG?",
    "It means our advice is intended to be shaped by monitoring requirements, site context, evidence, data quality, and governance needs, not by commitment to a single vendor, platform, or equipment ecosystem.",
  ],
  [
    "Does independence mean DTG is anti-vendor?",
    "No. Good monitoring depends on good vendors, good equipment, and good implementation. Independence means assessing those options objectively, not assuming one supplier is right before the requirement is tested.",
  ],
  [
    "Why does this matter for clients?",
    "Technology choices made with bias can create unnecessary cost, blind spots, weak integration, vendor lock-in, or unclear governance. Independent advice helps clients make decisions that are easier to explain, defend, and operate.",
  ],
  [
    "Does independence stop after a technology is selected?",
    "No. Monitoring quality is shaped after selection through tuning, thresholds, workflows, interpretation, escalation, and reporting. Independence matters throughout the monitoring lifecycle.",
  ],
  [
    "How does DTG compare technology options?",
    "DTG considers the monitoring objective, site geometry, movement behaviour, data quality, operational constraints, deployment practicality, integration needs, governance impact, and decision requirements.",
  ],
];

const closingOutcomes = [
  ["Better-fit selection", "Technology and workflow choices are aligned to site need, not vendor preference.", CheckCircle2],
  ["Clearer trade-offs", "Strengths, limitations, integration requirements, and uncertainty are made visible.", GitBranch],
  ["Reduced lock-in risk", "Clients gain a clearer view of options before over-committing to one ecosystem.", Layers3],
  ["More defensible advice", "Recommendations are documented, explainable, and easier to revisit under scrutiny.", ClipboardCheck],
];

function VendorIndependenceDiagram() {
  return (
    <figure className="vi-diagram" aria-label="Vendor ecosystem passing through DTG independent review into client outcomes">
      <div className="vi-diagram-column">
        <p>Vendor and technology ecosystem</p>
        <h3>Available signals and systems</h3>
        <div className="vi-chip-grid">
          {ecosystem.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="vi-diagram-core">
        <Network size={30} strokeWidth={1.45} aria-hidden="true" />
        <p>DTG independent review layer</p>
        <h3>Requirement-led technical assessment</h3>
        <div className="vi-review-grid">
          {reviewSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
      <div className="vi-diagram-column vi-diagram-column-gold">
        <p>Client decision outcomes</p>
        <h3>Advice that can be explained</h3>
        <div className="vi-chip-grid">
          {decisionOutcomes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <figcaption>From vendor ecosystem to client decision, through independent technical review.</figcaption>
    </figure>
  );
}

export function VendorIndependenceSection() {
  const [openPrinciple, setOpenPrinciple] = useState(0);
  const [activeComparison, setActiveComparison] = useState<"vendor" | "independent">("independent");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="vi-page">
      <section className="vi-hero" aria-labelledby="vendor-independence-title">
        <div className="vi-container vi-shell">
          <aside className="vi-rail" aria-label="Vendor independence section summary">
            <p className="vi-eyebrow">Vendor Independence</p>
            <h1 id="vendor-independence-title">Advice shaped by the monitoring need, not by vendor preference.</h1>
            <div className="vi-intro">
              <p>
                DTG helps clients make monitoring decisions with greater clarity when the technology landscape is
                crowded, the stakes are high, and the trade-offs are not obvious.
              </p>
              <p>
                We are not here to steer decisions toward a preferred vendor, platform, or equipment ecosystem. We start
                with the site context, monitoring objective, operational risk, data quality requirements, and governance
                needs.
              </p>
              <p>The result is advice that is easier to explain, easier to defend, and more useful in live operations.</p>
            </div>
            <nav className="vi-anchor-list" aria-label="On this section">
              <a href="#vi-principles">Principles</a>
              <a href="#vi-comparison">Comparison</a>
              <a href="#vi-trust">Practice</a>
              <a href="#vi-faq">FAQ</a>
            </nav>
          </aside>

          <div className="vi-content">
            <section className="vi-panel vi-statement-panel">
              <p className="vi-kicker">Working Method</p>
              <h2>Vendor independence is not a slogan.</h2>
              <p>It is a working method for better monitoring decisions.</p>
              <VendorIndependenceDiagram />
            </section>

            <section className="vi-panel" id="vi-principles" aria-labelledby="vi-principles-title">
              <div className="vi-section-heading">
                <p className="vi-kicker">Principles</p>
                <h2 id="vi-principles-title">How independent advice is protected.</h2>
              </div>
              <div className="vi-principle-grid">
                {principles.map(({ title, summary, body, meaning, icon: Icon }, index) => {
                  const expanded = openPrinciple === index;
                  const panelId = `vi-principle-${index}`;
                  return (
                    <article className={`vi-principle-card ${expanded ? "is-open" : ""}`} key={title}>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setOpenPrinciple(expanded ? -1 : index)}
                      >
                        <Icon size={25} strokeWidth={1.45} aria-hidden="true" />
                        <span>
                          <strong>{title}</strong>
                          <em>{summary}</em>
                        </span>
                        <small>{expanded ? "Close" : "Client meaning"}</small>
                      </button>
                      <div id={panelId} className="vi-principle-body" hidden={!expanded}>
                        <p>{body}</p>
                        <div>
                          <span>What this means for clients</span>
                          <strong>{meaning}</strong>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="vi-panel" id="vi-comparison" aria-labelledby="vi-comparison-title">
              <div className="vi-section-heading">
                <p className="vi-kicker">Comparison</p>
                <h2 id="vi-comparison-title">From vendor-led assumptions to independent monitoring review.</h2>
              </div>
              <div className="vi-tabs" role="tablist" aria-label="Vendor independence comparison">
                {comparisonPanels.map((panel) => (
                  <button
                    key={panel.id}
                    type="button"
                    role="tab"
                    id={`vi-tab-${panel.id}`}
                    aria-selected={activeComparison === panel.id}
                    aria-controls={`vi-panel-${panel.id}`}
                    onClick={() => setActiveComparison(panel.id)}
                  >
                    {panel.label}
                  </button>
                ))}
              </div>
              <div className="vi-comparison-grid">
                {comparisonPanels.map((panel) => (
                  <div
                    className={`vi-comparison-card ${panel.id === activeComparison ? "is-active" : ""}`}
                    key={panel.id}
                    id={`vi-panel-${panel.id}`}
                    role="tabpanel"
                    aria-labelledby={`vi-tab-${panel.id}`}
                  >
                    <h3>{panel.heading}</h3>
                    <ul>
                      {panel.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="vi-panel" id="vi-trust" aria-labelledby="vi-trust-title">
              <div className="vi-section-heading">
                <p className="vi-kicker">Practice</p>
                <h2 id="vi-trust-title">How independence is protected in practice.</h2>
              </div>
              <div className="vi-trust-list">
                {trustSignals.map(([title, body, Icon]) => (
                  <article className="vi-trust-row" key={title as string}>
                    <Icon size={23} strokeWidth={1.45} aria-hidden="true" />
                    <div>
                      <h3>{title as string}</h3>
                      <p>{body as string}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="vi-process-note">Independence is strongest when it can be seen in the process, not only stated in the headline.</p>
            </section>

            <section className="vi-panel" id="vi-faq" aria-labelledby="vi-faq-title">
              <div className="vi-section-heading">
                <p className="vi-kicker">FAQ</p>
                <h2 id="vi-faq-title">Questions clients often ask.</h2>
              </div>
              <div className="vi-faq-list">
                {faqs.map(([question, answer], index) => {
                  const expanded = openFaq === index;
                  const panelId = `vi-faq-${index}`;
                  return (
                    <article className="vi-faq-item" key={question}>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(expanded ? -1 : index)}
                      >
                        <span>{question}</span>
                        <ArrowUpRight size={17} strokeWidth={1.45} aria-hidden="true" />
                      </button>
                      <div id={panelId} hidden={!expanded}>
                        <p>{answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="vi-panel vi-outcome-panel" aria-labelledby="vi-outcomes-title">
              <div className="vi-section-heading">
                <p className="vi-kicker">Outcomes</p>
                <h2 id="vi-outcomes-title">What independent review helps clients achieve.</h2>
              </div>
              <div className="vi-outcome-grid">
                {closingOutcomes.map(([title, body, Icon]) => (
                  <article className="vi-outcome-card" key={title as string}>
                    <Icon size={25} strokeWidth={1.45} aria-hidden="true" />
                    <h3>{title as string}</h3>
                    <p>{body as string}</p>
                  </article>
                ))}
              </div>
              <div className="vi-cta">
                <div>
                  <p className="vi-eyebrow">Independent review</p>
                  <h2>Need an independent view of your monitoring strategy?</h2>
                  <p>
                    If you are selecting technology, reviewing monitoring performance, comparing vendors, or trying to
                    integrate multiple sensor systems, DTG can provide an independent technical perspective.
                  </p>
                </div>
                <div className="vi-cta-actions">
                  <Link href="/contact">Request an independent review <ArrowUpRight size={15} /></Link>
                  <Link href="/contact">Discuss your monitoring brief <ArrowUpRight size={15} /></Link>
                  <Link href="/contact">Get a second opinion <ArrowUpRight size={15} /></Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
