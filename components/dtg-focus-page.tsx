"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { type ReactNode, useState } from "react";
import { DTGFocusMark, renderTrademarkText } from "@/components/brand";

const heroChips = [
  "Integrated monitoring",
  "Governed workflows",
  "Review records",
  "Analytics support",
  "Decision-ready information",
] as const;

const challengeRows = [
  ["Fragmented information", "Monitoring records often sit across different sensors, systems, reports and teams."],
  [
    "Weak traceability",
    "It can be difficult to understand what was reviewed, what changed and what decision pathway was followed.",
  ],
  ["Decision pressure", "Alarms, reports and operational decisions require clearer context, not just more data."],
] as const;

const isItems = [
  "A decision-support platform",
  "A monitoring workflow environment",
  "A data integration and review framework",
  "A governance and traceability layer",
  "A support tool for reporting, analytics and technical interpretation",
] as const;

const isNotItems = [
  "Not a replacement for geotechnical engineers",
  "Not a vendor-specific monitoring system",
  "Not just a dashboard",
  "Not only a reporting template",
  "Not a claim that software alone creates safer decisions",
] as const;

const frameworkPillars = [
  {
    label: "Integrate",
    heading: "Integrate monitoring information into one clearer context.",
    copy:
      "Monitoring information often comes from many sources, including radar, GNSS, prisms, InSAR, LiDAR, VWP, inspections, alarm logs, reports and operational records.",
    second:
      "DTG Focus\u2122 is being developed to help bring these sources into a more connected review environment, so teams can understand monitoring information in context rather than as isolated data points.",
    points: [
      "Monitoring data sources",
      "Alarm and event records",
      "Reports and review notes",
      "Operational context",
      "Multi-sensor comparison",
      "Site and project records",
    ],
  },
  {
    label: "Govern",
    heading: "Govern the workflow so review records remain traceable.",
    copy: "Monitoring decisions need more than data visibility. They need traceability.",
    second:
      "DTG Focus\u2122 is being developed to support review discipline, audit trails, decision records, change history, TARP references and escalation documentation.",
    points: [
      "Audit trails",
      "Review records",
      "Decision logs",
      "Version control",
      "Change management",
      "TARP and escalation records",
      "Reporting traceability",
    ],
  },
  {
    label: "Decide",
    heading: "Support informed, defensible monitoring decisions.",
    copy:
      "Monitoring information becomes valuable when it helps teams understand what requires attention, what can be explained, what remains uncertain and what should be communicated.",
    second:
      "DTG Focus\u2122 is being developed to help monitoring information become easier to review, summarise, report and connect with operational decision-making.",
    points: [
      "Decision-ready summaries",
      "Escalation support",
      "Reporting outputs",
      "Technical review records",
      "Operational visibility",
      "Clearer communication",
      "Evidence-based decision support",
    ],
  },
] as const;

const capabilities = [
  ["Monitoring data integration", "Support the connection of multiple monitoring sources into a clearer review environment."],
  [
    "Data quality review",
    "Support visibility of data gaps, data availability, sensor confidence, review limitations and uncertainty.",
  ],
  [
    "Alarm and event review",
    "Help structure alarm records, event notes, escalation context, review comments and follow-up actions.",
  ],
  [
    "Reporting workflows",
    "Support consistent reporting outputs, review notes, historical records and structured technical summaries.",
  ],
  [
    "Governance and traceability",
    "Preserve what was reviewed, when it was reviewed, what changed and what decision pathway was followed.",
  ],
  [
    "Analytics and automation",
    "Support repeatable data processing, trend review and monitoring analytics while keeping human review central.",
  ],
] as const;

const workflowStages = [
  {
    title: "Data Sources",
    items: ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "VWP", "Reports", "Inspections", "Alarms"],
  },
  {
    title: "Review Layer",
    items: ["Quality review", "Context", "Interpretation", "Analytics"],
  },
  {
    title: "Governance Layer",
    items: ["Audit trail", "Version control", "TARP record", "Decision log"],
  },
  {
    title: "Outputs",
    items: ["Reports", "Escalation notes", "Review records", "Decision support"],
  },
] as const;

const serviceRows = [
  [
    "Remote Monitoring",
    "Supports clearer review records, alarm context, escalation notes and operational monitoring visibility.",
    "/services/remote-monitoring",
  ],
  [
    "Reporting & Back-Analysis",
    "Supports structured records for periodic reporting, event review, alarm review and historical analysis.",
    "/services/reporting-back-analysis",
  ],
  [
    "Technology Integration",
    "Supports the connection of monitoring sources, data pathways, reporting workflows and review environments.",
    "/services/technology-integration",
  ],
  [
    "Data Analytics & Automation",
    "Supports repeatable data processing, trend review, filtering, analytics and monitoring workflow automation.",
    "/services/data-analytics-automation",
  ],
  [
    "Technical Advisory",
    "Supports evidence traceability, decision rationale, governance review and independent technical interpretation.",
    "/services/technical-advisory",
  ],
] as const;

const applicationRows = [
  [
    "Open Pit Mining",
    "Support review of slope movement, alarms, deformation trends, TARP records and reporting workflows.",
    "/applications/open-pit-mining",
  ],
  [
    "Tailings Storage Facilities",
    "Support long-term deformation review, multi-sensor comparison, data quality notes and reporting traceability.",
    "/applications/tailings-storage-facilities",
  ],
  [
    "Underground Mining",
    "Support review of spatial change, SLAM LiDAR outputs, convergence evidence, inspection context and reporting records.",
    "/applications/underground-mining",
  ],
  [
    "Infrastructure & Civil",
    "Support review of ground movement, asset deformation, corridor monitoring evidence and stakeholder-ready reporting records.",
    "/applications/infrastructure-civil",
  ],
] as const;

const faqs = [
  [
    "What is DTG Focus\u2122?",
    "DTG Focus\u2122 is DTG's developing decision-support platform for integrated geotechnical monitoring data, governed workflows, analytics and review records.",
  ],
  [
    "Is DTG Focus\u2122 a finished software product?",
    "DTG Focus\u2122 is currently under development. It is being built around DTG's practical monitoring workflows and decision-support requirements.",
  ],
  ["Is DTG Focus\u2122 replacing engineers?", "No. DTG Focus\u2122 is designed to support engineering review, not replace engineering judgement."],
  [
    "Is DTG Focus\u2122 vendor-specific?",
    "No. DTG Focus\u2122 is intended to support a technology-agnostic monitoring approach, allowing information from different monitoring sources to be reviewed in context where available.",
  ],
  [
    "Is DTG Focus\u2122 just a dashboard?",
    "No. The goal is not simply to display data. DTG Focus\u2122 is being developed to support integration, review records, governance, analytics, reporting and decision-support workflows.",
  ],
  [
    "How does DTG Focus\u2122 support governance?",
    "DTG Focus\u2122 is intended to support traceability through review records, audit trails, change history, escalation context, decision logs and reporting documentation.",
  ],
  [
    "Can DTG Focus\u2122 support DTG's monitoring services?",
    "Yes. DTG Focus\u2122 is being developed to support DTG's remote monitoring, reporting, analytics, technology integration and technical advisory workflows.",
  ],
] as const;

export function DTGFocusPage() {
  return (
    <main className="df-page">
      <DTGFocusHero />
      <DTGFocusWhyExists />
      <DTGFocusIsIsNot />
      <DTGFocusFramework />
      <DTGFocusCapabilities />
      <DTGFocusWorkflow />
      <DTGFocusServicesConnection />
      <DTGFocusDevelopmentPosition />
      <DTGFocusApplications />
      <DTGFocusFAQCTA />
    </main>
  );
}

function FocusSectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: ReactNode; id: string }) {
  return (
    <div className="df-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function FocusText({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function DTGFocusHero() {
  return (
    <section className="df-hero" aria-labelledby="dtg-focus-title">
      <div className="df-container df-hero-grid">
        <div className="df-hero-copy">
          <Image
            src="/brand/dtg-focus-logo.png"
            alt="DTG Focus logo"
            width={1299}
            height={512}
            priority
            className="df-logo"
          />
          <p className="rm-eyebrow"><DTGFocusMark /></p>
          <h1 id="dtg-focus-title">Integrated data. Governed workflows. Informed decisions.</h1>
          <p className="df-hero-deck">
            A developing decision-support platform for geotechnical monitoring data, workflows and analytics.
          </p>
          <p>
            <DTGFocusMark /> is being developed to help integrate monitoring information, engineering review, governance
            records and analytics into a clearer decision-support environment.
          </p>
          <p>
            Designed around practical monitoring workflows, <DTGFocusMark /> supports the movement of information from
            fragmented data sources into clearer review, reporting and decision pathways.
          </p>
          <p className="df-hero-line">Built to support traceability, review discipline and defensible monitoring decisions.</p>
          <div className="rm-actions">
            <Link href="/contact" className="rm-button rm-button-primary">
              Discuss <DTGFocusMark /> <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link href="#focus-framework" className="rm-button rm-button-secondary">
              Explore the framework <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link href="/services" className="rb-tertiary-link">
              Explore DTG services <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
          <div className="df-hero-chips" aria-label="DTG Focus support areas">
            {heroChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        <FocusHeroVisual />
      </div>
    </section>
  );
}

function FocusHeroVisual() {
  return (
    <figure className="df-hero-visual" aria-label="Monitoring sources connected through DTG Focus into decision-ready outputs">
      <div className="df-map-column">
        <span>Monitoring Sources</span>
        <ul>
          {["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "VWP", "Reports", "Alarms"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="df-map-core">
        <span><DTGFocusMark /></span>
        <strong>Integrate</strong>
        <strong>Govern</strong>
        <strong>Decide</strong>
      </div>
      <div className="df-map-column">
        <span>Decision-Ready Outputs</span>
        <ul>
          {["Review records", "Reporting", "Escalation context", "Audit trail", "Decision support"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <figcaption>
        A conceptual platform layer for turning fragmented monitoring records into clearer review, governance and decision pathways.
      </figcaption>
    </figure>
  );
}

function DTGFocusWhyExists() {
  return (
    <section className="df-section df-section-light" aria-labelledby="focus-why-title">
      <div className="df-container df-editorial-split">
        <div>
          <p className="rm-eyebrow">Why it exists</p>
          <h2 id="focus-why-title">Monitoring data is increasing. Decision clarity does not automatically follow.</h2>
          <strong>
            The problem is not only data collection. The problem is making monitoring information usable, traceable and
            decision-ready.
          </strong>
        </div>
        <div>
          <p>Modern monitoring environments are not short of data.</p>
          <p>
            Radar, GNSS, prisms, InSAR, LiDAR, VWP, inspections, alarms, reports and operational records can all provide
            valuable information. But when these records sit across different systems, teams and reporting formats, it
            becomes harder to understand what changed, what was reviewed, what was decided and why.
          </p>
          <p>
            More monitoring information does not automatically create better decisions. The real challenge is turning
            fragmented monitoring information into a clearer, governed and decision-ready workflow. <DTGFocusMark /> is
            being developed to help address this gap.
          </p>
          <div className="df-editorial-rows">
            {challengeRows.map(([title, copy], index) => (
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

function DTGFocusIsIsNot() {
  return (
    <section className="df-section df-section-mist" aria-labelledby="focus-is-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-is-title"
          eyebrow="What it is"
          title="A decision-support platform for integrated monitoring workflows."
          copy={<FocusText><DTGFocusMark /> is DTG&apos;s developing platform for integrated geotechnical monitoring data, governed workflows, analytics and decision-support records.</FocusText>}
        />
        <p className="df-lead">
          It is intended to help bring monitoring data, engineering review, reporting records, escalation logic, audit
          trails and analytics into one clearer operating environment. <DTGFocusMark /> is not designed to replace
          technical judgement. It is designed to support it.
        </p>
        <div className="df-compare-grid">
          <article>
            <h3>What <DTGFocusMark /> is</h3>
            <ul>
              {isItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>What <DTGFocusMark /> is not</h3>
            <ul>
              {isNotItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="df-statement"><DTGFocusMark /> supports the work of technical review. It does not replace the responsibility of engineering judgement.</p>
      </div>
    </section>
  );
}

function DTGFocusFramework() {
  return (
    <section id="focus-framework" className="df-section df-section-dark" aria-labelledby="focus-framework-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-framework-title"
          eyebrow="Core framework"
          title="Integrate. Govern. Decide."
          copy={<FocusText><DTGFocusMark /> is being structured around a simple framework: integrate monitoring information, govern the review workflow and support better-informed decisions.</FocusText>}
        />
        <div className="df-framework-bands">
          {frameworkPillars.map((pillar, index) => (
            <article key={pillar.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{pillar.label}</h3>
                <h4>{pillar.heading}</h4>
                <p>{pillar.copy}</p>
                <p>{renderTrademarkText(pillar.second)}</p>
              </div>
              <ul>
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DTGFocusCapabilities() {
  return (
    <section className="df-section df-section-light" aria-labelledby="focus-capabilities-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-capabilities-title"
          eyebrow="Platform direction"
          title="Designed to support the monitoring workflow, not just the data."
          copy={<FocusText><DTGFocusMark /> is being built around practical monitoring workflows: collecting information, reviewing data quality, identifying change, documenting interpretation, supporting escalation and preserving the decision record.</FocusText>}
        />
        <div className="df-capability-grid">
          {capabilities.map(([title, copy], index) => (
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

function DTGFocusWorkflow() {
  return (
    <section className="df-section df-section-dark" aria-labelledby="focus-workflow-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-workflow-title"
          eyebrow="Workflow"
          title="From fragmented monitoring records to decision-ready information."
          copy={<FocusText><DTGFocusMark /> is being developed to support the way monitoring information moves through review, governance and reporting.</FocusText>}
        />
        <div className="df-workflow-diagram">
          {workflowStages.map((stage, index) => (
            <article key={stage.title}>
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
        <p className="df-statement is-dark">The goal is not another dashboard. The goal is a clearer, more traceable monitoring workflow.</p>
      </div>
    </section>
  );
}

function DTGFocusServicesConnection() {
  return (
    <section className="df-section df-section-mist" aria-labelledby="focus-services-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-services-title"
          eyebrow="Connected to DTG services"
          title="A platform layer supporting DTG's independent monitoring work."
          copy={<FocusText><DTGFocusMark /> is not separate from DTG&apos;s services. It is being developed to support how DTG works.</FocusText>}
        />
        <div className="df-link-rows">
          {serviceRows.map(([title, copy, href]) => (
            <Link href={href} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DTGFocusDevelopmentPosition() {
  return (
    <section className="df-section df-section-light" aria-labelledby="focus-development-title">
      <div className="df-container df-development-band">
        <div>
          <p className="rm-eyebrow">Current development</p>
          <h2 id="focus-development-title">Being developed around practical monitoring workflows.</h2>
        </div>
        <div>
          <p>
            <DTGFocusMark /> is under development and continues to evolve around real monitoring workflows, technical
            review requirements and operational decision-support needs.
          </p>
          <p>
            The platform direction is shaped by DTG&apos;s work across remote monitoring, multi-sensor review, reporting,
            alarm assessment, data quality review and geotechnical advisory support.
          </p>
          <p>
            The goal is not to create another dashboard. The goal is to support a clearer, more traceable and more useful
            monitoring workflow.
          </p>
          <strong><DTGFocusMark /> is being built around how monitoring decisions are actually reviewed, recorded and supported.</strong>
        </div>
      </div>
    </section>
  );
}

function DTGFocusApplications() {
  return (
    <section className="df-section df-section-mist" aria-labelledby="focus-applications-title">
      <div className="df-container">
        <FocusSectionHeader
          id="focus-applications-title"
          eyebrow="Workflow applications"
          title="Built for monitoring environments where information needs to be clearer and more traceable."
          copy={<FocusText><DTGFocusMark /> is being developed for monitoring workflows where multiple sources of information need to be reviewed, interpreted, reported and connected to decisions.</FocusText>}
        />
        <div className="df-link-rows">
          {applicationRows.map(([title, copy, href]) => (
            <Link href={href} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DTGFocusFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="df-faq-cta-section" aria-labelledby="focus-faq-title">
      <div className="df-section df-section-light rb-faq-section">
        <div className="df-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="focus-faq-title"><DTGFocusMark />, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `focus-faq-${index}`;
              const isOpen = open === `faq-${index}`;
              return (
                <article className="rm-faq-item rb-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{renderTrademarkText(question)}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} hidden={!isOpen}>
                    <p>{renderTrademarkText(answer)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="df-section df-section-dark rb-final-cta-section" aria-labelledby="focus-cta-title">
        <div className="df-container">
          <div className="rm-cta-panel rb-cta-panel df-cta-panel">
            <div>
              <p className="rm-eyebrow"><DTGFocusMark /></p>
              <h2 id="focus-cta-title">Interested in a more integrated monitoring workflow?</h2>
              <p>
                DTG can discuss how <DTGFocusMark /> is being developed to support monitoring data integration, governed
                workflows, analytics and decision-ready reporting.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss <DTGFocusMark /> <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/services" className="rm-button rm-button-secondary">
                Explore DTG services <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related services: <Link href="/services/remote-monitoring">Remote Monitoring</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/reporting-back-analysis">Reporting & Back-Analysis</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/technology-integration">Technology Integration</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/data-analytics-automation">Data Analytics & Automation</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/services/technical-advisory">Technical Advisory</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

