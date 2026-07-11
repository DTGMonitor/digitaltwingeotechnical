import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleGauge,
  ClipboardCheck,
  Eye,
  FileCheck2,
  Layers3,
  Network,
  RadioTower,
  ShieldCheck,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const inputs = ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "SLAM LiDAR", "VWP", "Seismic", "Operational records"];

const reviewLayer = [
  "Independent review",
  "Engineering judgement",
  "Governance",
  "Traceability",
  "Quality assurance",
  "Vendor independence",
];

const outcomes = [
  "Informed decisions",
  "Trusted monitoring outcomes",
  "Operational awareness",
  "Decision support",
  "Governance & assurance",
  "Decision records",
];

const pillars = [
  {
    title: "Integrate",
    number: "01",
    text: "Bring monitoring technologies and information sources together into one coherent operational context.",
    icon: Network,
  },
  {
    title: "Govern",
    number: "02",
    text: "Apply traceability, accountability, quality assurance and structured review to monitoring workflows.",
    icon: ClipboardCheck,
  },
  {
    title: "Decide",
    number: "03",
    text: "Support informed, defensible decisions with clearer understanding and stronger escalation confidence.",
    icon: Target,
  },
];

const qualityCards = [
  ["Technical judgement, not just data", "Experienced review helps teams understand what the data means.", UserRoundCheck],
  ["Validation before action", "Signals are checked for quality, reliability and operational context.", CheckCircle2],
  ["Context over isolated alarms", "Alerts are interpreted alongside related systems, events and observations.", Layers3],
  ["Independent review that builds confidence", "Technology-agnostic assessment clarifies what the evidence supports.", ShieldCheck],
  ["Governance that supports escalation", "Traceable workflows help teams know what changed, who reviewed it and why.", Workflow],
  ["Outcomes that stand up in the field", "Monitoring review is shaped around decisions that can be defended.", FileCheck2],
];

const clientOutcomes = [
  ["Clearer operational understanding", "A more coherent view of ground behaviour across systems and teams.", Eye],
  ["Reduced decision uncertainty", "More confidence when datasets differ or decision windows are tight.", CircleGauge],
  ["Stronger governance & traceability", "Review pathways, decision records and accountability are easier to defend.", ClipboardCheck],
  ["Defensible monitoring outcomes", "Monitoring outputs become more useful for real operational decisions.", ShieldCheck],
];

function FlowColumn({
  label,
  title,
  items,
  accent,
}: {
  label: string;
  title: string;
  items: string[];
  accent?: "gold";
}) {
  return (
    <div className={`pp-flow-column ${accent === "gold" ? "pp-flow-column-gold" : ""}`}>
      <p>{label}</p>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PurposePrinciplesEditorial() {
  return (
    <main className="pp-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Purpose & Principles" }]}
        title="Purpose & Principles"
        subtitle="Monitoring technology is not the problem."
        intro="Organisations now operate with more monitoring technologies, more data sources and more alarms than ever before. The challenge is turning fragmented signals into trusted operational understanding."
        titleId="purpose-principles-title"
      />

      <section className="pp-section pp-exists">
        <div className="pp-container pp-two-column">
          <div className="pp-section-copy">
            <p className="pp-eyebrow">Why DTG Exists</p>
            <h2>More data does not automatically create clearer decisions.</h2>
            <p>
              Monitoring information often sits across systems, teams and workflows. DTG helps clarify what the evidence
              means and how it should inform action.
            </p>
            <div className="pp-pain-points" aria-label="Common monitoring challenges">
              <span>Too much data.</span>
              <span>Too many alarms.</span>
              <span>Too many systems.</span>
              <span>Fragmented visibility.</span>
            </div>
          </div>
          <div className="pp-flow" aria-label="Monitoring information moving through the DTG review layer into outcomes">
            <FlowColumn label="Inputs" title="Monitoring information" items={inputs} />
            <div className="pp-flow-core">
              <RadioTower size={22} strokeWidth={1.4} />
              <span>DTG Review Layer</span>
              <strong>Independent, governed interpretation</strong>
              <ul>
                {reviewLayer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <FlowColumn label="Outcomes" title="Defensible decisions" items={outcomes} accent="gold" />
          </div>
        </div>
      </section>

      <section className="pp-section pp-dark-band">
        <div className="pp-container">
          <div className="pp-heading-row">
            <p className="pp-eyebrow">Principles</p>
            <h2>The principles that guide how DTG works.</h2>
          </div>
          <div className="pp-pillar-grid">
            {pillars.map(({ title, number, text, icon: Icon }) => (
              <article className="pp-pillar-card" key={title}>
                <div className="pp-pillar-topline">
                  <span>{number}</span>
                  <Icon size={34} strokeWidth={1.45} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section pp-quality">
        <div className="pp-container">
          <div className="pp-heading-row pp-heading-dark">
            <p className="pp-eyebrow">Decision Quality</p>
            <h2>How DTG protects decision quality.</h2>
          </div>
          <div className="pp-quality-grid">
            {qualityCards.map(([title, text, Icon]) => (
              <article className="pp-quality-card" key={title as string}>
                <Icon size={24} strokeWidth={1.45} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section pp-outcomes">
        <div className="pp-container">
          <div className="pp-heading-row">
            <p className="pp-eyebrow">Client Outcomes</p>
            <h2>What clients can rely on.</h2>
          </div>
          <div className="pp-outcome-grid">
            {clientOutcomes.map(([title, text, Icon]) => (
              <article className="pp-outcome-card" key={title as string}>
                <Icon size={24} strokeWidth={1.45} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
          <blockquote>DTG helps organisations turn complex monitoring information into informed, defensible decisions.</blockquote>
          <div className="pp-closing-cta">
            <div>
              <p className="pp-eyebrow">Start a monitoring conversation</p>
              <h2>Talk to DTG about decision quality in complex monitoring environments.</h2>
            </div>
            <Link href="/contact" className="pp-cta-link">
              CONTACT <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
