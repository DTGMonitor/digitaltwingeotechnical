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
  Compass,
  FileCheck2,
  Layers3,
  Mountain,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const leaders: Array<{
  name: string;
  role: string;
  statement: string;
  bio: string;
  detail: string;
  tags: string[];
  image: string;
  alt: string;
}> = [
  {
    name: "Peter Saunders",
    role: "Founder / Director",
    statement: "Monitoring operations, technology implementation, and decision-support leadership.",
    bio:
      "Peter brings extensive experience in geotechnical monitoring, operational implementation, and monitoring service leadership. His work has focused on helping mining and infrastructure teams use monitoring systems more effectively - not only as instruments, but as decision-support tools.",
    detail:
      "Peter helps shape DTG's approach to monitoring governance, technology-agnostic review, operational workflows, client advisory, and the practical translation of monitoring data into trusted action.",
    tags: [
      "Monitoring operations",
      "Technology implementation",
      "Alarm response",
      "Monitoring governance",
      "Client advisory",
      "Operational decision support",
    ],
    image: "/images/peter-saunders-portrait.png",
    alt: "Portrait of Peter Saunders, Founder and Director of DTG",
  },
  {
    name: "Mark Burdett",
    role: "Founder / Director",
    statement: "Mining leadership, geotechnical risk, and operational strategy.",
    bio:
      "Mark brings senior mining and operational experience to DTG's leadership, with a focus on how geotechnical information supports decisions across complex mining environments.",
    detail:
      "Mark helps ensure DTG's advisory work remains grounded in real mining conditions, practical implementation, governance, and the decision pressures faced by operators and technical teams.",
    tags: [
      "Mining leadership",
      "Operational risk",
      "Geotechnical strategy",
      "Governance",
      "Executive advisory",
      "Practical implementation",
    ],
    image: "/images/mark-burdett-portrait.png",
    alt: "Portrait of Mark Burdett, Founder and Director of DTG",
  },
];

const trustItems: Array<[string, string, LucideIcon]> = [
  ["Practical judgement", "Advice shaped by real monitoring and operational conditions.", CheckCircle2],
  ["Independent perspective", "Recommendations focused on client need and decision quality.", Compass],
  ["Technical credibility", "Review grounded in monitoring behaviour, data quality, and geotechnical context.", Layers3],
  ["Decision confidence", "Support for clearer escalation, reporting, and governance.", CircleGauge],
];

const leadershipPillars: Array<{ title: string; copy: string; label: string; icon: LucideIcon }> = [
  {
    title: "Technical judgement",
    copy: "Experience-led review of monitoring data, trends, alarms, and uncertainty.",
    label: "Review",
    icon: Layers3,
  },
  {
    title: "Operational context",
    copy: "Understanding how monitoring information is used under real site conditions.",
    label: "Field reality",
    icon: Mountain,
  },
  {
    title: "Governance discipline",
    copy: "Clearer workflows, escalation logic, documentation, and decision traceability.",
    label: "Assurance",
    icon: FileCheck2,
  },
  {
    title: "Independent advice",
    copy: "Recommendations shaped by client need, evidence, and monitoring objectives.",
    label: "Objective",
    icon: ShieldCheck,
  },
];

const frameworkSteps: Array<[string, string, LucideIcon]> = [
  ["Experience", "Monitoring, mining, and operational leadership.", Target],
  ["Method", "Structured review across data, sensors, workflows, and context.", Workflow],
  ["Governance", "Clear escalation, traceability, assurance, and decision discipline.", FileCheck2],
  ["Outcomes", "More confident monitoring decisions and trusted operational response.", CircleGauge],
];

export function LeadershipSection() {
  const [openLeader, setOpenLeader] = useState(0);
  const [activePillar, setActivePillar] = useState(0);

  return (
    <main className="ld-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Leadership" }]}
        title="Leadership"
        subtitle="Built from monitoring and mining leadership."
        intro="DTG is led by professionals with experience across remote monitoring, mining, geology, civil engineering, governance and operational decision-making."
        titleId="leadership-title"
      />

      <section className="ld-section ld-profiles" aria-label="DTG leadership profiles">
        <div className="ld-container">
          <div className="ld-profile-grid">
            {leaders.map((leader, index) => {
              const expanded = openLeader === index;
              return (
                <article className="ld-leader-card" key={leader.name}>
                  <div className="ld-portrait">
                    <Image
                      src={leader.image}
                      alt={leader.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 44vw"
                    />
                  </div>
                  <div className="ld-leader-copy">
                    <p className="ld-role">{leader.role}</p>
                    <h2>{leader.name}</h2>
                    <strong>{leader.statement}</strong>
                    <p>{leader.bio}</p>
                    <div className="ld-tags" aria-label={`${leader.name} focus areas`}>
                      {leader.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`leader-detail-${index}`}
                      onClick={() => setOpenLeader(expanded ? -1 : index)}
                    >
                      {expanded ? "Hide leadership focus" : "View leadership focus"}
                      <ChevronDown size={17} aria-hidden="true" />
                    </button>
                    <div id={`leader-detail-${index}`} hidden={!expanded}>
                      <p>{leader.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="ld-trust-strip" aria-label="Why leadership matters to clients">
            {trustItems.map(([title, copy, Icon], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={22} strokeWidth={1.45} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ld-section ld-philosophy">
        <div className="ld-container">
          <div className="ld-quote">
            <p className="ld-eyebrow">Leadership View</p>
            <blockquote>
              Monitoring only creates value when teams can understand what the data means, what uncertainty remains,
              and what action is justified.
            </blockquote>
            <span>DTG Leadership</span>
          </div>

          <div className="ld-philosophy-panel">
            <div className="ld-philosophy-copy">
              <p className="ld-eyebrow">Leadership Philosophy</p>
              <h2>Leadership shaped by the realities of monitoring decisions.</h2>
              <p>
                Monitoring decisions are rarely made with perfect information. Data can be noisy, alarms can be
                uncertain, sensors can disagree, and operational pressure can be high.
              </p>
              <p>
                That is why DTG places equal importance on technology, interpretation, governance, and communication.
                The objective is not simply to create more monitoring output. It is to help clients understand what the
                information can support, where uncertainty remains, and how decisions can be made with greater
                confidence.
              </p>
            </div>
            <div className="ld-pillar-grid">
              {leadershipPillars.map(({ title, copy, label, icon: Icon }, index) => {
                const active = activePillar === index;
                return (
                  <button
                    type="button"
                    className={active ? "is-active" : ""}
                    aria-pressed={active}
                    onClick={() => setActivePillar(index)}
                    key={title}
                  >
                    <Icon size={24} strokeWidth={1.45} aria-hidden="true" />
                    <span>{label}</span>
                    <strong>{title}</strong>
                    <em>{copy}</em>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="ld-section ld-framework">
        <div className="ld-container">
          <div className="ld-section-header">
            <p className="ld-eyebrow">From Experience To Outcomes</p>
            <h2>How leadership shapes DTG work.</h2>
          </div>
          <ol className="ld-framework-flow">
            {frameworkSteps.map(([title, copy, Icon], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={26} strokeWidth={1.45} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ld-cta">
        <div className="ld-container ld-cta-panel">
          <div>
            <p className="ld-eyebrow">Start A Conversation</p>
            <h2>Speak with the people shaping the DTG monitoring approach.</h2>
            <p>
              Start a conversation with DTG about monitoring strategy, governance, technology selection, or decision
              support.
            </p>
          </div>
          <div className="ld-cta-actions">
            <Link href="/contact">Start a monitoring conversation <ArrowUpRight size={16} /></Link>
            <Link href="/about/our-approach">Explore our approach <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
