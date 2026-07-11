"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleGauge,
  ClipboardCheck,
  Eye,
  Layers3,
  Network,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";

const principles = [
  {
    title: "Technology-agnostic by design",
    summary:
      "We assess the monitoring requirement first, then help determine which technologies and combinations are genuinely fit for purpose.",
    body:
      "DTG is not built around a single vendor, sensor, or platform. We look at the operational context, the behaviour being monitored, data quality requirements, and risk exposure before recommending how technologies should be selected, combined, or reviewed. That independence helps clients avoid over-reliance on any one signal or commercial ecosystem.",
    icon: Network,
  },
  {
    title: "Evidence before assumption",
    summary: "We do not treat an isolated alert, trend, or anomaly as a conclusion.",
    body:
      "Interpretation starts with evidence. That means reviewing signal quality, instrument behaviour, historic movement, environmental influence, operational activity, and corroborating datasets before drawing a position. The aim is not to generate more commentary; it is to produce conclusions that are technically grounded, explainable, and defensible when decisions matter.",
    icon: CheckCircle2,
  },
  {
    title: "Context over isolated alarms",
    summary: "Alerts become useful only when they are understood within a wider operational picture.",
    body:
      "Radar, prisms, GNSS, InSAR, piezometers, inspections, and site observations rarely tell the same story in the same way or on the same timescale. DTG helps clients move beyond separate alert streams toward integrated situational awareness, where differences between datasets are investigated and interpreted instead of simply escalated in isolation.",
    icon: Layers3,
  },
  {
    title: "Independence that builds confidence",
    summary: "Our value is objective review, not product promotion.",
    body:
      "Independent review matters most when different technologies point in slightly different directions, when alarm quality is uncertain, or when workflows need to stand up to operational scrutiny. DTG's role is to make uncertainty visible, clarify what the evidence supports, and help clients act with stronger confidence in both the decision and the rationale behind it.",
    icon: ShieldCheck,
  },
  {
    title: "Human-led, system-supported review",
    summary: "Structured workflows and analytics improve the process, but engineering judgement remains central.",
    body:
      "Digital tools improve consistency, correlation, traceability, and visibility across monitoring environments. They do not replace professional judgement. DTG uses systems to support review quality and speed, while keeping interpretation grounded in experienced technical assessment, escalation discipline, and the realities of live operational decision-making.",
    icon: UserRoundCheck,
  },
  {
    title: "Governance that supports action",
    summary: "Monitoring is only valuable when the right people can respond clearly and on time.",
    body:
      "Strong monitoring practice depends on more than data collection. It needs thresholds, review pathways, escalation logic, accountabilities, and documented reasoning. DTG treats governance as part of the technical solution, helping clients build workflows that support timely action, reduce ambiguity, and strengthen assurance across teams and decision points.",
    icon: ClipboardCheck,
  },
  {
    title: "Outcomes that stand up in the field",
    summary: "We measure success by whether monitoring improves real decisions, not whether it produces more output.",
    body:
      "The end goal is not another dashboard view or another report. It is clearer escalation, better communication, improved confidence in interpretation, stronger governance, and decisions that can be defended after the fact. Every principle should ultimately translate into calmer operations and better-informed action in the field.",
    icon: Target,
  },
];

const beforeItems = [
  "Separate sensor alarms",
  "Different TARP pathways",
  "Conflicting signals",
  "Data gaps and uncertainty",
  "Limited operational context",
  "Harder escalation decisions",
];

const afterItems = [
  "Multi-sensor correlation",
  "Independent interpretation",
  "Data quality validation",
  "Contextualised movement trends",
  "Clearer decision pathways",
  "More defensible operational response",
];

const operatingModel = [
  ["Integrate", "Bring technologies and datasets into one operational context."],
  ["Validate", "Check signal quality, asset behaviour, and data reliability."],
  ["Correlate", "Test relationships across sensors, locations, timescales, and events."],
  ["Analyse", "Convert signals into engineering insight and scenario understanding."],
  ["Govern", "Apply workflows, thresholds, escalation logic, and review discipline."],
  ["Act", "Support timely, confident decisions and traceable operational response."],
];

const outcomes = [
  ["Clearer escalation", "Better shared understanding of when concern is real, what it means, and how teams should respond.", ArrowUpRight],
  ["Reduced uncertainty", "More confidence when datasets differ, signals are noisy, or decision windows are tight.", CircleGauge],
  ["Stronger governance", "Workflows, thresholds, and review pathways that are more traceable and easier to defend.", ShieldCheck],
  ["Better operational awareness", "Monitoring becomes easier to interpret across technologies, teams, and timescales.", Eye],
];

const inputs = ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "VWP", "Seismic", "Inspections"];
const review = ["Validate", "Correlate", "Contextualise", "Govern", "Advise"];
const results = ["Trusted outcomes", "Reduced uncertainty", "Clear escalation", "Operational awareness", "Governance & assurance"];

function PurposeDiagram({ active }: { active: boolean }) {
  return (
    <figure className={`purpose-diagram ${active ? "is-active" : ""}`} aria-labelledby="purpose-diagram-title">
      <svg viewBox="0 0 980 520" role="img">
        <title id="purpose-diagram-title">Monitoring inputs moving through DTG independent review into operational outcomes</title>
        <desc>
          A technical node and line diagram showing fragmented monitoring inputs connected to the DTG review layer and
          then to trusted operational outcomes.
        </desc>
        <defs>
          <linearGradient id="purposeLine" x1="0" x2="1">
            <stop offset="0" stopColor="#4C8DFF" />
            <stop offset="1" stopColor="#49B6C8" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="978" height="518" rx="20" className="purpose-diagram-frame" />
        <g className="purpose-diagram-labels">
          <text x="92" y="74">Fragmented monitoring inputs</text>
          <text x="418" y="74">DTG independent review layer</text>
          <text x="760" y="74">Operational outcomes</text>
        </g>

        {inputs.map((label, index) => {
          const y = 120 + index * 42;
          return (
            <g key={label}>
              <circle cx="112" cy={y} r="6" className="purpose-node purpose-node-input" />
              <text x="132" y={y + 5} className="purpose-node-text">{label}</text>
              <path d={`M 210 ${y} C 292 ${y}, 314 256, 395 256`} className="purpose-line purpose-line-input" />
            </g>
          );
        })}

        <g>
          <circle cx="490" cy="256" r="106" className="purpose-core-outer" />
          <circle cx="490" cy="256" r="74" className="purpose-core-inner" />
          <text x="490" y="238" textAnchor="middle" className="purpose-core-mark">DTG</text>
          <text x="490" y="268" textAnchor="middle" className="purpose-core-sub">Independent review</text>
          <text x="490" y="296" textAnchor="middle" className="purpose-core-pillars">Integrate  Govern  Decide</text>
        </g>

        {review.map((label, index) => {
          const angle = (-86 + index * 43) * (Math.PI / 180);
          const x = 490 + Math.cos(angle) * 148;
          const y = 256 + Math.sin(angle) * 148;
          return (
            <g key={label}>
              <circle cx={x} cy={y} r="18" className="purpose-review-node" />
              <text x={x} y={y + 38} textAnchor="middle" className="purpose-review-text">{label}</text>
            </g>
          );
        })}

        {results.map((label, index) => {
          const y = 140 + index * 58;
          return (
            <g key={label}>
              <path d={`M 586 256 C 668 256, 682 ${y}, 748 ${y}`} className="purpose-line purpose-line-output" />
              <circle cx="764" cy={y} r="6" className="purpose-node purpose-node-output" />
              <text x="784" y={y + 5} className="purpose-node-text">{label}</text>
            </g>
          );
        })}
      </svg>
      <figcaption>
        <strong>From multiple signals to one clearer operational view.</strong>
        <span>
          Monitoring technologies generate information. DTG helps turn that information into coherent interpretation,
          governed workflows, and better-informed decisions.
        </span>
      </figcaption>
    </figure>
  );
}

export function PurposePrinciplesSection() {
  const [openCard, setOpenCard] = useState(0);
  const [activeTab, setActiveTab] = useState<"fragmented" | "integrated">("fragmented");
  const [diagramActive, setDiagramActive] = useState(false);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = visualRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDiagramActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDiagramActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const comparisonPanels = useMemo(
    () => [
      { id: "fragmented" as const, label: "Fragmented view", heading: "Fragmented monitoring", items: beforeItems },
      { id: "integrated" as const, label: "Integrated review", heading: "Integrated DTG review", items: afterItems },
    ],
    [],
  );

  return (
    <main className="purpose-page">
      <section className="purpose-section" aria-labelledby="purpose-principles-title">
        <div className="purpose-shell">
          <aside className="purpose-rail" aria-label="Purpose and principles section navigation">
            <p className="purpose-eyebrow">Purpose & Principles</p>
            <h1 id="purpose-principles-title">Independent monitoring insight, built around defensible decisions.</h1>
            <div className="purpose-intro">
              <p>
                DTG exists to help geotechnical and operational teams make better decisions in complex monitoring
                environments.
              </p>
              <p>
                Modern sites already invest heavily in monitoring technology. The harder problem is turning multiple
                sensors, thresholds, alerts, reviews, and workflows into a coherent understanding of ground behaviour
                and operational risk.
              </p>
              <p>
                Our role is to provide independent, technology-agnostic review that connects monitoring data, technical
                judgement, and governance into a clearer basis for action.
              </p>
            </div>
            <nav className="purpose-anchor-nav" aria-label="On this section">
              <a href="#purpose-purpose">Purpose</a>
              <a href="#purpose-principles">Principles</a>
              <a href="#purpose-model">Operating Model</a>
              <a href="#purpose-outcomes">Outcomes</a>
            </nav>
          </aside>

          <div className="purpose-content">
            <section className="purpose-panel purpose-visual-panel" id="purpose-purpose" ref={visualRef}>
              <div className="purpose-panel-heading">
                <p className="purpose-kicker">Why DTG exists</p>
                <h2>Monitoring technology is not the problem.</h2>
                <p>
                  The real challenge is turning fragmented, sometimes conflicting information into trusted operational
                  understanding.
                </p>
              </div>
              <PurposeDiagram active={diagramActive} />
            </section>

            <section className="purpose-panel" id="purpose-principles" aria-labelledby="purpose-principles-heading">
              <div className="purpose-panel-heading">
                <p className="purpose-kicker">Principles</p>
                <h2 id="purpose-principles-heading">How DTG protects decision quality.</h2>
                <p>Seven principles guide how we review monitoring environments when the data becomes complex.</p>
              </div>
              <div className="purpose-card-grid">
                {principles.map(({ title, summary, body, icon: Icon }, index) => {
                  const expanded = openCard === index;
                  const panelId = `purpose-principle-${index}`;
                  return (
                    <article className={`purpose-principle-card ${expanded ? "is-open" : ""}`} key={title}>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setOpenCard(expanded ? -1 : index)}
                      >
                        <span className="purpose-card-icon"><Icon size={23} strokeWidth={1.55} /></span>
                        <span>
                          <strong>{title}</strong>
                          <em>{summary}</em>
                        </span>
                        <span className="purpose-card-toggle" aria-hidden="true">{expanded ? "Close" : "Practice"}</span>
                      </button>
                      <div id={panelId} className="purpose-principle-body" hidden={!expanded}>
                        <p className="purpose-micro-label">What this means in practice</p>
                        <p>{body}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="purpose-panel purpose-comparison-panel" aria-labelledby="purpose-comparison-title">
              <div className="purpose-panel-heading">
                <p className="purpose-kicker">Before / After</p>
                <h2 id="purpose-comparison-title">From fragmented monitoring to integrated understanding.</h2>
              </div>
              <div className="purpose-tabs" role="tablist" aria-label="Monitoring comparison">
                {comparisonPanels.map((panel) => (
                  <button
                    key={panel.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === panel.id}
                    aria-controls={`purpose-tab-${panel.id}`}
                    id={`purpose-tab-button-${panel.id}`}
                    onClick={() => setActiveTab(panel.id)}
                  >
                    {panel.label}
                  </button>
                ))}
              </div>
              <div className="purpose-comparison-grid">
                {comparisonPanels.map((panel) => (
                  <div
                    className={`purpose-comparison-card ${panel.id === "integrated" ? "is-integrated" : ""} ${
                      activeTab === panel.id ? "is-active" : ""
                    }`}
                    id={`purpose-tab-${panel.id}`}
                    key={panel.id}
                    role="tabpanel"
                    aria-labelledby={`purpose-tab-button-${panel.id}`}
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

            <section className="purpose-panel" id="purpose-model" aria-labelledby="purpose-model-title">
              <div className="purpose-panel-heading">
                <p className="purpose-kicker">Operating Model</p>
                <h2 id="purpose-model-title">A disciplined path from data to action.</h2>
              </div>
              <ol className="purpose-model-strip">
                {operatingModel.map(([title, body], index) => (
                  <li key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="purpose-panel" id="purpose-outcomes" aria-labelledby="purpose-outcomes-title">
              <div className="purpose-panel-heading">
                <p className="purpose-kicker">Outcomes</p>
                <h2 id="purpose-outcomes-title">What clients can rely on.</h2>
              </div>
              <div className="purpose-outcome-grid">
                {outcomes.map(([title, body, Icon]) => (
                  <article className="purpose-outcome-card" key={title as string}>
                    <Icon size={24} strokeWidth={1.55} />
                    <h3>{title as string}</h3>
                    <p>{body as string}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
