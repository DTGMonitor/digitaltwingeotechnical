"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GitBranch,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const meaningCards = [
  [
    "Independent of vendors",
    "Not tied to one monitoring brand, software platform or equipment manufacturer.",
    ShieldCheck,
  ],
  [
    "Requirements-led",
    "Technology is assessed against the monitoring problem, operational context and decision need.",
    Workflow,
  ],
  [
    "Evidence-based review",
    "Recommendations are based on data quality, performance, suitability and risk context.",
    FileCheck2,
  ],
];

const processSteps = [
  ["Define the requirement", "Start with site risk, ground behaviour and monitoring purpose."],
  ["Compare options", "Review technologies and workflows against the actual monitoring need."],
  ["Review evidence", "Test data quality, performance, integration and operational context."],
  ["Document rationale", "Create audit trails, traceability, decision records, change management and version control."],
  ["Support decisions", "Help teams make clearer, more defensible monitoring decisions."],
];

const vendorLed = [
  "Technology-first",
  "Brand-specific workflow",
  "System-limited interpretation",
  "Performance claims without context",
  "Reporting shaped by platform capability",
];

const independentReview = [
  "Requirement-first",
  "Technology-agnostic",
  "Cross-system interpretation",
  "Evidence and context-led",
  "Decision-focused and traceable",
];

const faqs = [
  [
    "Does independence mean DTG is anti-vendor?",
    "No. Good monitoring depends on good vendors, good equipment and good implementation. Independence means assessing options objectively and keeping the monitoring requirement at the centre of the decision.",
  ],
  [
    "Can DTG work with our existing systems?",
    "Yes. DTG works across monitoring technologies, vendor systems, operational records and review workflows to help clients understand what information can be trusted and how it should be governed.",
  ],
  [
    "Why does independence matter?",
    "Too many systems, alarms and vendor views can make monitoring decisions harder to defend. Independent review helps clients compare information objectively across technologies and understand what matters.",
  ],
  [
    "How does DTG support technology selection?",
    "DTG considers the monitoring problem, site geometry, movement behaviour, data quality, deployment practicality, integration needs, governance impact and decision requirements before recommending a path.",
  ],
];

const outcomes = [
  ["Better-fit technology selection", "Technology and workflow choices are aligned to site need, not vendor preference.", CheckCircle2],
  ["Clearer trade-off decisions", "Strengths, limitations, integration requirements and uncertainty are made visible.", GitBranch],
  ["Reduced lock-in risk", "Clients gain a clearer view of options before over-committing to one ecosystem.", Layers3],
  ["More defensible advice", "Recommendations are documented, explainable and easier to revisit under scrutiny.", ClipboardCheck],
];

function ComparisonColumn({ title, items, accent }: { title: string; items: string[]; accent?: "gold" }) {
  return (
    <article className={`vie-comparison-column ${accent === "gold" ? "is-gold" : ""}`}>
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

export function VendorIndependenceEditorial() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="vie-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Vendor Independence" }]}
        title="Vendor Independence"
        subtitle="Vendor-led assumptions vs independent DTG review."
        intro="DTG supports monitoring decisions through requirement-first, technology-agnostic review that considers evidence, context and operational needs."
        titleId="vendor-independence-title"
      />

      <section className="vie-section vie-meaning">
        <div className="vie-container">
          <div className="vie-heading-row">
            <p className="vie-eyebrow">What Vendor Independence Means</p>
            <h2>Objective advice starts with the monitoring problem.</h2>
          </div>
          <div className="vie-meaning-grid">
            {meaningCards.map(([title, body, Icon]) => (
              <article className="vie-meaning-card" key={title as string}>
                <Icon size={30} strokeWidth={1.45} aria-hidden="true" />
                <h3>{title as string}</h3>
                <p>{body as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vie-section vie-why">
        <div className="vie-container vie-two-column">
          <div>
            <p className="vie-eyebrow">Why Independence Matters</p>
            <h2>Too many systems. Too many alarms. Too many vendor views.</h2>
          </div>
          <div className="vie-why-copy">
            <p>
              Vendor tools are useful, and strong monitoring depends on good technology and good implementation. But
              each system often shows only part of the picture.
            </p>
            <p>
              DTG helps clients compare information objectively across technologies, understand what can be trusted, and
              make decisions that are easier to explain when conditions change.
            </p>
          </div>
        </div>
      </section>

      <section className="vie-section vie-process">
        <div className="vie-container">
          <div className="vie-heading-row">
            <p className="vie-eyebrow">How Independence Is Protected</p>
            <h2>A cleaner decision pathway.</h2>
          </div>
          <ol className="vie-process-row">
            {processSteps.map(([title, body], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vie-section vie-comparison">
        <div className="vie-container">
          <div className="vie-heading-row">
            <p className="vie-eyebrow">Independent Review</p>
            <h2>Vendor-led assumptions vs independent DTG review.</h2>
          </div>
          <div className="vie-comparison-grid">
            <ComparisonColumn title="Vendor-led assumptions" items={vendorLed} />
            <ComparisonColumn title="Independent DTG review" items={independentReview} accent="gold" />
          </div>
        </div>
      </section>

      <section className="vie-section vie-faq-outcomes">
        <div className="vie-container vie-two-column">
          <div>
            <p className="vie-eyebrow">FAQ</p>
            <h2>Clear answers, without anti-vendor positioning.</h2>
            <div className="vie-faq-list">
              {faqs.map(([question, answer], index) => {
                const expanded = openFaq === index;
                const panelId = `vie-faq-${index}`;
                return (
                  <article className="vie-faq-item" key={question}>
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
          </div>
          <div>
            <p className="vie-eyebrow">Outcomes</p>
            <h2>What clients gain.</h2>
            <div className="vie-outcome-grid">
              {outcomes.map(([title, body, Icon]) => (
                <article className="vie-outcome-card" key={title as string}>
                  <Icon size={24} strokeWidth={1.45} aria-hidden="true" />
                  <h3>{title as string}</h3>
                  <p>{body as string}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vie-cta">
        <div className="vie-container vie-cta-grid">
          <div>
            <p className="vie-eyebrow">Independent Technical Perspective</p>
            <h2>Need an independent view of your monitoring strategy?</h2>
            <p>
              If you are selecting technology, reviewing monitoring performance, comparing vendors, or trying to
              integrate multiple sensor systems, DTG can provide an independent technical perspective.
            </p>
          </div>
          <Link href="/contact">
            Discuss your monitoring brief <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
