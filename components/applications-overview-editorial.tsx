"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const applicationAreas = [
  {
    number: "01",
    title: "Open Pit Mining",
    href: "/applications/open-pit-mining",
    description:
      "Slope monitoring support for active mining environments where alarms, deformation trends and operational response need clear interpretation.",
    challenge: "Fast-changing slope conditions, multiple data sources and escalation pressure.",
  },
  {
    number: "02",
    title: "Tailings Storage Facilities",
    href: "/applications/tailings-storage-facilities",
    description:
      "Monitoring support for facilities where long-term deformation, reporting traceability and assurance require consistent review.",
    challenge: "Slow movement, governance requirements and long-term record confidence.",
  },
  {
    number: "03",
    title: "Underground Mining",
    href: "/applications/underground-mining",
    description:
      "Support for underground environments using convergence review, SLAM LiDAR interpretation and spatial change assessment.",
    challenge: "Restricted visibility, complex geometry and difficult deformation interpretation.",
  },
  {
    number: "04",
    title: "Infrastructure & Civil",
    href: "/applications/infrastructure-civil",
    description:
      "Support for ground movement, asset deformation, corridor monitoring and infrastructure-related monitoring decisions.",
    challenge: "Asset exposure, public interface, monitoring continuity and defensible response.",
  },
] as const;

const supportSteps = [
  ["01", "Monitor", "Understand the operating environment, sensor coverage and monitoring records."],
  ["02", "Review", "Check data quality, alarms, reporting evidence and escalation context."],
  ["03", "Interpret", "Connect movement, trends and site context into clearer technical meaning."],
  ["04", "Report", "Prepare traceable records that help explain what changed and why it matters."],
  ["05", "Support decision", "Help teams move from monitoring evidence to clearer operational response."],
] as const;

const supportCapabilities = [
  "Monitoring review",
  "Alarm and escalation support",
  "Reporting and back-analysis",
  "Multi-source interpretation",
  "Governance and assurance",
  "Technical advisory",
] as const;

export function ApplicationsOverviewEditorial() {
  return (
    <main className="applications-overview-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Applications" }]}
        title="Applications"
        subtitle="Monitoring support where ground movement matters."
        intro="DTG supports operating environments where ground movement, monitoring records and response pathways need clearer technical understanding."
        titleId="applications-title"
        variant="environment"
      />

      <section className="applications-overview-band" aria-labelledby="operating-environments-title">
        <div className="site-container applications-support-layout">
          <div>
            <p className="section-label">OPERATING ENVIRONMENTS</p>
            <h2 id="operating-environments-title">Different environments. Same need for trusted decisions.</h2>
          </div>
          <p>
            Each operating environment has different monitoring risks, data sources and response requirements. DTG
            helps teams review monitoring information, interpret movement, assess evidence and support defensible
            action.
          </p>
        </div>
      </section>

      <section id="application-areas" className="applications-overview-band applications-list-band" aria-labelledby="where-dtg-works-title">
        <div className="site-container">
          <div className="applications-section-heading">
            <p className="section-label">WHERE DTG WORKS</p>
            <h2 id="where-dtg-works-title">Support across mining, tailings, underground and infrastructure environments.</h2>
          </div>
          <ol className="applications-index-list" aria-label="DTG operating environments">
            {applicationAreas.map((area) => (
              <li key={area.title}>
                <Link href={area.href} className="applications-index-row">
                  <span className="applications-index-number">{area.number}</span>
                  <span className="applications-index-title">{area.title}</span>
                  <span className="applications-index-copy">
                    <span>{area.description}</span>
                    <small>Key challenge: {area.challenge}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="applications-overview-band" aria-labelledby="applications-support-title">
        <div className="site-container applications-connect-layout">
          <div className="applications-section-heading">
            <p className="section-label">HOW DTG SUPPORTS</p>
            <h2 id="applications-support-title">Independent review from data to decision.</h2>
            <p>
              DTG support can be applied across the monitoring pathway, from review and reporting through to technical
              advisory and clearer operational response.
            </p>
          </div>
          <div>
            <ol className="applications-sequence" aria-label="How DTG supports each environment">
              {supportSteps.map(([number, title, copy]) => (
                <li key={title}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <div className="applications-support-tags" aria-label="DTG support capabilities">
              {supportCapabilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="applications-overview-band applications-cta-band" aria-labelledby="applications-cta-title">
        <div className="site-container applications-overview-cta">
          <div>
            <p className="section-label">START A CONVERSATION</p>
            <h2 id="applications-cta-title">Need clearer monitoring decisions in your operating environment?</h2>
            <p>
              DTG can help review monitoring information, interpret evidence and support clearer decision pathways.
            </p>
          </div>
          <div className="applications-cta-actions">
            <Link href="/contact" className="story-button">
              CONTACT DTG <ArrowUpRight size={15} />
            </Link>
            <Link href="/services" className="story-button secondary">
              EXPLORE SERVICES <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
