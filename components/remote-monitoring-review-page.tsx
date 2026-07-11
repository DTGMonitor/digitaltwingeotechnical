"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  Eye,
  FileCheck2,
  Layers3,
  MessageSquareWarning,
  RadioTower,
  ShieldCheck,
  Signal,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

type Tone = "data" | "governance";
type ChallengeTuple = readonly [title: string, copy: string, Icon: LucideIcon, tone: Tone];

const summaryCards: Array<{ title: string; copy: string; Icon: LucideIcon; tone: Tone }> = [
  {
    title: "Live monitoring visibility",
    copy: "Support for reviewing monitoring conditions, alarm status, data continuity and changing trends.",
    Icon: RadioTower,
    tone: "data",
  },
  {
    title: "Independent review support",
    copy: "Monitoring information reviewed with attention to data quality, sensor behaviour, trend context and operational relevance.",
    Icon: Eye,
    tone: "data",
  },
  {
    title: "Escalation and reporting discipline",
    copy: "Support for clearer communication, handover, monitoring records and response awareness.",
    Icon: MessageSquareWarning,
    tone: "governance",
  },
];

const challenges: Array<{ title: string; copy: string; Icon: LucideIcon; tone: Tone }> = ([
  ["Alarm overload", "Frequent alarms can make it difficult to identify what needs attention.", Bell, "data"],
  ["Data quality uncertainty", "Gaps, noise, outages and artefacts can weaken confidence in interpretation.", Signal, "data"],
  ["Fragmented technologies", "Radar, prisms, GNSS, InSAR, LiDAR, and inspections may not align cleanly.", Layers3, "data"],
  ["Limited review capacity", "Site teams may not always have enough monitoring coverage or specialist review time.", Activity, "data"],
  ["Escalation pressure", "Teams need to understand what requires response, review or communication.", MessageSquareWarning, "governance"],
  ["Reporting inconsistency", "Monitoring information loses value when review logic and handover records are unclear.", FileCheck2, "governance"],
] satisfies readonly ChallengeTuple[]).map(([title, copy, Icon, tone]) => ({ title, copy, Icon, tone }));

const reviewModelSteps = [
  {
    id: "observe",
    title: "Observe",
    short: "Maintain visibility over monitoring conditions, alarms and system behaviour.",
    detail:
      "DTG maintains visibility over monitoring conditions, alarm status, data availability and system behaviour during agreed coverage windows.",
  },
  {
    id: "review",
    title: "Review",
    short: "Assess the quality and meaning of the monitoring signals.",
    detail:
      "Monitoring information is reviewed in context, considering data quality, sensor behaviour, deformation trends, historical movement, environmental influence and available site context.",
  },
  {
    id: "communicate",
    title: "Communicate",
    short: "Support escalation awareness through the agreed response pathway.",
    detail:
      "DTG supports escalation awareness and communication through the agreed site response pathway when monitoring conditions require attention or further review.",
  },
  {
    id: "report",
    title: "Report",
    short: "Document observations, uncertainty, alarm context and handover information.",
    detail:
      "Structured records preserve observations, review logic, uncertainty, alarm context and monitoring handover information.",
  },
  {
    id: "improve",
    title: "Improve",
    short: "Use recurring issues to strengthen monitoring workflows over time.",
    detail:
      "Recurring alarms, data quality concerns, workflow gaps and reporting issues can be reviewed to strengthen monitoring confidence over time.",
  },
];

const reviewScopeItems = [
  {
    title: "Data quality",
    copy: "System health, data continuity, scan area, image quality, noise, outliers and monitoring confidence.",
    checks: ["system health", "data continuity", "scan area", "noise and outliers"],
  },
  {
    title: "Alarm status",
    copy: "Alarm trigger, affected area, recurrence, priority, response level and escalation relevance.",
    checks: ["trigger level", "affected area", "recurrence", "response level"],
  },
  {
    title: "Movement trends",
    copy: "Progressive, regressive and linear trends, rate change, acceleration, spatial pattern and movement direction.",
    checks: ["trend type", "rate change", "acceleration", "spatial pattern"],
  },
  {
    title: "Sensor behaviour",
    copy: "Instrument condition, configuration awareness, reference stability, atmospheric correction, mask or scan area issues.",
    checks: ["instrument condition", "configuration", "reference stability", "correction issues"],
  },
  {
    title: "TARP alignment",
    copy: "Trigger level, response action, escalation pathway, communication requirement and review ownership.",
    checks: ["trigger level", "response action", "escalation pathway", "review ownership"],
  },
  {
    title: "Reporting and handover",
    copy: "Shift summary, alarm notes, escalation record, outstanding review items and handover clarity.",
    checks: ["shift summary", "alarm notes", "open items", "handover clarity"],
  },
  {
    title: "Multi-sensor context",
    copy: "Comparison with prisms, GNSS, InSAR, LiDAR, inspections, VWP or operational records where available.",
    checks: ["sensor correlation", "site observations", "operational records", "technology limits"],
  },
];

const useCases = [
  ["Live monitoring support", "Ongoing remote review of monitoring conditions, alarms, data availability and relevant monitoring changes during agreed coverage windows. Best for sites requiring consistent monitoring attention and escalation awareness.", RadioTower],
  ["Alarm-based review", "Independent review support when alarms occur, including review of context, recurrence, data quality and escalation relevance. Best for sites with frequent alarms or high-consequence response requirements.", Bell],
  ["Scheduled monitoring review", "Regular review of monitoring status, trends, data quality, reporting records and outstanding monitoring issues. Best for teams needing additional review discipline without full live coverage.", FileCheck2],
  ["Critical period support", "Focused monitoring support during high-risk periods, trials, post-blast windows, instability periods or operational changes. Best for defined monitoring windows that need additional attention.", ShieldCheck],
] as const;

const workflowStages = [
  ["Client monitoring systems", "Real-time geotechnical monitoring systems and available operational context."],
  ["DTG remote review", "Independent monitoring attention and technical review based on agreed scope and response requirements."],
  ["Alarm / trend / data quality review", "Review of alarm status, movement behaviour, signal confidence and monitoring condition."],
  ["Escalation awareness", "Support for communication when monitoring conditions require awareness, review or action."],
  ["Reporting and handover", "Structured records that preserve key observations, uncertainty and context."],
  ["Workflow improvement", "Recurring issues and improvement opportunities are identified over time."],
] as const;

const deliverables = [
  ["Alarm review notes", "Clear records of alarm events, observed conditions, review comments and response context."],
  ["Live monitoring updates", "Concise updates on monitoring status, key observations and relevant changes."],
  ["Monitoring status summaries", "Structured summaries of monitoring condition, system state and outstanding review items."],
  ["Data quality observations", "Notes on data gaps, outages, noise, artefacts and monitoring confidence."],
  ["Deformation trend updates", "Review of displacement behaviour, rate changes, recurrence and uncertainty."],
  ["Escalation communication support", "Support when monitoring conditions meet agreed criteria for attention or response."],
  ["Handover records", "Key information preserved between shifts, teams and review windows."],
  ["Failure prediction updates where applicable", "Decision-support updates where progressive deformation is identified and data conditions are suitable."],
  ["Technical issue coordination notes", "Records of technical issues that affect monitoring quality, continuity or interpretation."],
  ["Monitoring improvement recommendations", "Suggestions for strengthening monitoring workflows, review discipline or reporting quality."],
] as const;

const outcomes = [
  ["Better monitoring visibility", "Teams gain clearer visibility of monitoring status and changing conditions."],
  ["Clearer alarm confidence", "Alarms are reviewed with stronger context around data quality and relevance."],
  ["Stronger escalation awareness", "Important changes are communicated more clearly through agreed response pathways."],
  ["More consistent reporting", "Observations, uncertainty, review logic and response context are recorded more consistently."],
  ["Reduced operational uncertainty", "Monitoring information becomes easier to interpret in live operational conditions."],
  ["Additional team capacity", "Client teams gain additional monitoring attention and independent review support."],
] as const;

const connectedServices = [
  {
    title: "Monitoring Reporting & Back-Analysis",
    copy: "Live monitoring observations can support event reviews, alarm back-analysis, failure back-analysis and long-term reporting.",
    href: "/services/reporting-back-analysis",
  },
  {
    title: "Technology Selection & Integration",
    copy: "Monitoring performance observations can support independent review of technology suitability and system integration.",
    href: "/services/technology-integration",
  },
  {
    title: "Data Analytics & Automation",
    copy: "Remote monitoring data can support trend analysis, data cleansing, correlation and automated review workflows.",
    href: "/services/data-analytics-automation",
  },
  {
    title: "Technical Advisory & Risk Support",
    copy: "Monitoring findings can support risk review, training, response discipline and capability transfer.",
    href: "/services/technical-advisory",
  },
];

const faqs = [
  [
    "Is Remote Monitoring just watching screens?",
    "No. DTG's Remote Monitoring service is a structured review function. It can include alarm review, data quality awareness, monitoring condition review, escalation support, reporting discipline and workflow improvement depending on the agreed scope.",
  ],
  [
    "Can DTG support different monitoring technologies?",
    "Yes. DTG's approach is technology-agnostic. The service can support mixed monitoring environments where data comes from different sensors, vendors or platforms, subject to access, data context and agreed workflows.",
  ],
  [
    "Does DTG replace the client's geotechnical team?",
    "No. DTG supports the client's monitoring and geotechnical teams by providing additional monitoring attention, independent review, reporting support and escalation awareness. The client remains responsible for site decisions and operational control.",
  ],
  [
    "Can DTG support TARP-based escalation?",
    "Yes. DTG can support escalation communication based on agreed criteria, response pathways and client workflows. The service should be configured around the client's monitoring risk, TARP and operational requirements.",
  ],
  [
    "Can DTG support failure prediction?",
    "Where progressive deformation is identified and data conditions are suitable, DTG can support failure prediction analysis such as inverse velocity analysis. This should be treated as decision-support input, not a guarantee of failure timing.",
  ],
  [
    "Can this service be used for short-term events or trials?",
    "Yes. Remote Monitoring can be adapted for short-term support, technology trials, critical monitoring periods, post-blast windows, event-based monitoring or longer-term operational monitoring depending on client requirements.",
  ],
] as const;

export function RemoteMonitoringReviewPage() {
  return (
    <main className="rm-page">
      <ServiceHero />
      <ServiceSummary />
      <MonitoringChallenge />
      <RemoteReviewModel />
      <ReviewScopeMatrix />
      <DeliveryModel />
      <WhenToUseService />
      <Deliverables />
      <ServiceOutcomes />
      <ConnectedServices />
      <ServiceFAQ />
      <ServiceCTA />
    </main>
  );
}

function ServiceHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Remote Monitoring" }]}
      title="Remote Monitoring"
      subtitle="More than watching alarms."
      intro="DTG supports real-time geotechnical monitoring environments through live review of monitoring conditions, alarms, data quality, deformation trends and TARP-based escalation."
      titleId="remote-monitoring-title"
    />
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="rm-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function ServiceSummary() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="what-it-is">
      <div className="rm-container">
        <SectionHeader
          eyebrow="What it means"
          title="More than watching alarms."
          copy="Remote Monitoring at DTG is a structured live review service for clients managing real-time monitoring information, alarms, data quality issues, escalation pathways and operational reporting requirements."
        />
        <p className="rm-lead">
          It helps site teams understand whether monitoring information is reliable, what movement behaviour is developing,
          and when escalation or further review may be required. This can include slope stability radar (SSR) as one
          monitoring source, while remaining broader than any single sensor, vendor or platform.
        </p>
        <div className="rm-summary-grid">
          {summaryCards.map(({ title, copy, Icon, tone }) => (
            <article className={`rm-card rm-card-${tone}`} key={title}>
              <Icon aria-hidden="true" size={26} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonitoringChallenge() {
  return (
    <section className="rm-section rm-section-deep" aria-labelledby="monitoring-challenge-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Why it matters"
          title="Live monitoring becomes difficult when data is noisy, fragmented or time-sensitive."
          copy="Monitoring systems can produce frequent alarms, uncertain signals, outages, data gaps, environmental artefacts and competing interpretations. When teams are busy or operating under pressure, the challenge is not only collecting data - it is knowing what needs attention, what needs review and what needs escalation."
        />
        <div className="rm-card-grid rm-card-grid-3">
          {challenges.map(({ title, copy, Icon, tone }) => (
            <article className={`rm-card rm-card-compact rm-card-${tone}`} key={title}>
              <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RemoteReviewModel() {
  const [activeStep, setActiveStep] = useState(reviewModelSteps[0].id);
  const active = reviewModelSteps.find((step) => step.id === activeStep) ?? reviewModelSteps[0];

  return (
    <section id="remote-monitoring-model" className="rm-section rm-section-dark" aria-labelledby="remote-monitoring-model-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Remote monitoring model"
          title="A structured model for live monitoring review."
          copy="DTG's Remote Monitoring service follows a practical review model: observe monitoring conditions, review the quality and meaning of signals, communicate what matters, document the response context and improve monitoring workflows over time."
        />
        <div className="rm-process" role="tablist" aria-label="Remote monitoring review model">
          {reviewModelSteps.map((step, index) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="rm-process-panel"
                className={isActive ? "is-active" : ""}
                onClick={() => setActiveStep(step.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <small>{step.short}</small>
              </button>
            );
          })}
        </div>
        <div id="rm-process-panel" className="rm-process-detail" role="tabpanel">
          <p className="rm-eyebrow">{active.title}</p>
          <h3>{active.short}</h3>
          <p>{active.detail}</p>
        </div>
      </div>
    </section>
  );
}

function ReviewScopeMatrix() {
  const [open, setOpen] = useState<string | null>("Alarm status");

  return (
    <section className="rm-section rm-section-light" aria-labelledby="review-scope-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Review scope"
          title="What DTG reviews during remote monitoring."
          copy="Remote monitoring becomes more useful when review goes beyond alarm status. DTG reviews monitoring conditions across data quality, alarm behaviour, trend development, sensor condition, escalation logic and reporting discipline."
        />
        <div className="rm-scope-grid">
          {reviewScopeItems.map((item) => {
            const isOpen = open === item.title;
            const id = `scope-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <article className="rm-scope-card" key={item.title}>
                <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : item.title)}>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.copy}</small>
                  </span>
                  <ChevronDown aria-hidden="true" size={18} />
                </button>
                <div id={id} hidden={!isOpen}>
                  <p className="rm-eyebrow">Typical checks</p>
                  <ul>
                    {item.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhenToUseService() {
  return (
    <section className="rm-section rm-section-soft" aria-labelledby="when-to-use-title">
      <div className="rm-container rm-split">
        <div>
          <p className="rm-eyebrow">Service modes</p>
          <h2 id="when-to-use-title">Flexible support depending on monitoring risk, team capacity and operational need.</h2>
          <p>
            Remote Monitoring can be configured around client risk, coverage windows, alarm frequency and operational
            response requirements. These modes are service patterns, not pricing plans.
          </p>
        </div>
        <div className="rm-use-grid">
          {useCases.map(([title, copy, Icon], index) => (
            <article className="rm-use-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryModel() {
  return (
    <section className="rm-section rm-section-dark" aria-labelledby="delivery-model-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Workflow"
          title="How remote monitoring support fits into the client workflow."
          copy="DTG's remote monitoring support can be aligned to the client's monitoring systems, TARP, communication pathways, reporting requirements and review cadence. The service supports the client's decision structure rather than replacing it."
        />
        <ol className="rm-workflow">
          {workflowStages.map(([title, copy], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              {index < workflowStages.length - 1 ? <ArrowRight aria-hidden="true" size={18} /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Deliverables() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="deliverables-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Deliverables"
          title="Practical outputs that support monitoring response."
          copy="Deliverables depend on monitoring risk, coverage windows, technology mix and agreed response requirements."
        />
        <div className="rm-deliverables-list">
          {deliverables.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceOutcomes() {
  return (
    <section className="rm-section rm-section-deep" aria-labelledby="outcomes-title">
      <div className="rm-container">
        <SectionHeader eyebrow="Outcomes" title="What stronger remote monitoring gives clients." />
        <div className="rm-outcome-grid">
          {outcomes.map(([title, copy], index) => (
            <article className="rm-card" key={title}>
              <span className="rm-marker">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedServices() {
  return (
    <section className="rm-section rm-section-light" aria-labelledby="connected-services-title">
      <div className="rm-container">
        <SectionHeader
          eyebrow="Connected services"
          title="Remote Monitoring connects with DTG's broader service model."
          copy="Remote Monitoring can stand alone, but live observations often inform reporting, technology review, analytics and technical risk support."
        />
        <div className="rm-connected-grid">
          {connectedServices.map((service) => (
            <Link href={service.href} className="rm-connected-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span>
                Explore connection <ArrowUpRight aria-hidden="true" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="rm-section rm-section-dark" aria-labelledby="faq-title">
      <div className="rm-container rm-faq-layout">
        <div>
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="faq-title">Remote Monitoring, explained clearly.</h2>
        </div>
        <div className="rm-faq-list">
          {faqs.map(([question, answer], index) => {
            const id = `rm-faq-${index}`;
            const isOpen = open === `faq-${index}`;
            return (
              <article className="rm-faq-item" key={question}>
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
    </section>
  );
}

function ServiceCTA() {
  return (
    <section className="rm-section rm-section-dark rm-final-cta" aria-labelledby="rm-cta-title">
      <div className="rm-container">
        <div className="rm-cta-panel">
          <p className="rm-eyebrow">Start a monitoring conversation</p>
          <h2 id="rm-cta-title">Need independent support for remote monitoring?</h2>
          <p>
            DTG can help strengthen monitoring visibility, alarm review, escalation awareness, reporting discipline and
            decision confidence across complex monitoring environments.
          </p>
          <div className="rm-actions">
            <Link href="/contact" className="rm-button rm-button-primary">
              Start a monitoring conversation <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/services" className="rm-button rm-button-secondary">
              Back to all services <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
