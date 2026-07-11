import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DTGFocusMark } from "@/components/brand";

const supportAreas = [
  {
    title: "Integrated monitoring information",
    copy: "Brings monitoring sources, reports and review records into a more structured view.",
  },
  {
    title: "Workflow support",
    copy: "Helps support review routines, escalation pathways and monitoring response processes.",
  },
  {
    title: "Decision visibility",
    copy: "Makes monitoring evidence easier to review, interpret and communicate.",
  },
  {
    title: "Governance and assurance",
    copy: "Supports traceability, review discipline and defensible technical records.",
  },
] as const;

const workflowFit = [
  {
    title: "Monitoring inputs",
    copy: "Radar, GNSS, prisms, InSAR, LiDAR, inspections, reports, alarms and operational records.",
  },
  {
    title: "DTG Focus workflow support",
    copy: "Visibility, traceability, workflows, review records and reporting support.",
  },
  {
    title: "Independent review",
    copy: "Interpretation, validation, context, governance and decision support remain led by DTG review.",
  },
  {
    title: "Clearer decisions",
    copy: "Monitoring evidence becomes easier to explain, document and use in operational response.",
  },
] as const;

const capabilities = [
  ["Monitoring visibility", "Structured view of monitoring information and review status."],
  ["Review workflows", "Support for routine reviews, escalation pathways and response tracking."],
  ["Reporting records", "Traceable review notes, reporting outputs and decision documentation."],
  ["Multi-source context", "Support for comparing monitoring sources and technical evidence."],
  ["Governance support", "Clearer records for accountability, assurance and operational confidence."],
] as const;

const outcomes = [
  "Clearer monitoring visibility",
  "Stronger review discipline",
  "More traceable records",
  "Better escalation context",
  "More defensible decisions",
] as const;

function SectionIntro({
  label,
  title,
  copy,
  id,
}: {
  label: string;
  title: string;
  copy?: string;
  id?: string;
}) {
  return (
    <div className="focus-editorial-heading">
      <p className="section-label">{label}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function DTGFocusHero() {
  return (
    <section className="dtg-focus-hero" aria-labelledby="dtg-focus-title">
      <Image
        className="dtg-focus-hero__background"
        src="/images/dtg-focus-hero-background-wide.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="dtg-focus-hero__overlay" aria-hidden="true" />
      <div className="site-container dtg-focus-hero__content">
        <div className="dtg-focus-hero__copy">
          <h1 id="dtg-focus-title" className="dtg-focus-hero__title">
            <Image
              className="dtg-focus-hero__logo"
              src="/images/dtg-focus-hero-logo.png"
              alt="DTG Focus"
              width={1187}
              height={421}
              priority
            />
          </h1>
          <p className="dtg-focus-hero__tagline">Monitoring review, brought together.</p>
        </div>
      </div>
    </section>
  );
}

export function DTGFocusEditorialPage() {
  return (
    <main className="focus-editorial-page">
      <DTGFocusHero />

      <section className="focus-editorial-band" aria-labelledby="focus-supports-title">
        <div className="site-container">
          <SectionIntro
            label="WHAT DTG FOCUS SUPPORTS"
            id="focus-supports-title"
            title="From monitoring data to reviewable decision records."
          />
          <div className="focus-support-grid">
            {supportAreas.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-editorial-band focus-fit-band" aria-labelledby="focus-fit-title">
        <div className="site-container focus-fit-layout">
          <SectionIntro
            label="WHERE IT FITS"
            id="focus-fit-title"
            title="A framework inside DTG's wider monitoring support approach."
            copy="DTG is the independent monitoring support company. DTG Focus helps structure information, workflows and decision records within that wider approach."
          />
          <ol className="focus-fit-sequence" aria-label="Where DTG Focus fits in the monitoring support workflow">
            {workflowFit.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="focus-editorial-band" aria-labelledby="focus-capabilities-title">
        <div className="site-container">
          <SectionIntro label="KEY CAPABILITIES" id="focus-capabilities-title" title="Built for monitoring review workflows." />
          <div className="focus-capability-list">
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

      <section className="focus-editorial-band focus-preview-band" aria-labelledby="focus-preview-title">
        <div className="site-container focus-preview-layout">
          <SectionIntro
            label="PREVIEW"
            id="focus-preview-title"
            title="A clearer view of monitoring information."
            copy="The preview is presented as supporting evidence of the framework direction, not as the whole DTG story."
          />
          <figure className="focus-preview-frame">
            <Image
              src="/images/dtg-focus-laptop-preview.png"
              alt="DTG Focus preview showing monitoring map and trend review interface on a laptop"
              width={1672}
              height={941}
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
            <figcaption>DTG Focus preview — supporting monitoring review, visibility and trend interpretation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="focus-editorial-band" aria-labelledby="focus-matters-title">
        <div className="site-container focus-matters-layout">
          <SectionIntro
            label="WHY IT MATTERS"
            id="focus-matters-title"
            title="Less fragmented review. More traceable decisions."
            copy="Monitoring data is often fragmented, review routines can be inconsistent, evidence can be hard to trace and reporting can become disconnected from decisions."
          />
          <div className="focus-outcome-list">
            {outcomes.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-editorial-band focus-cta-band" aria-labelledby="focus-cta-title">
        <div className="site-container focus-editorial-cta">
          <div>
            <p className="section-label">DTG FOCUS</p>
            <h2 id="focus-cta-title">Interested in <DTGFocusMark />?</h2>
            <p>
              Talk to DTG about how structured monitoring review workflows can support clearer operational decisions.
            </p>
          </div>
          <div className="focus-editorial-actions">
            <Link href="/contact" className="focus-editorial-button is-primary">
              CONTACT DTG <ArrowUpRight size={15} />
            </Link>
            <Link href="/services" className="focus-editorial-button">
              EXPLORE SERVICES <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
