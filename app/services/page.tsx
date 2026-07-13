import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, RadioTower, Activity, Network, Database, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHero, Surface, CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services | Digital Twin Geotechnical",
  description:
    "Independent review across the monitoring lifecycle — remote monitoring, reporting & back-analysis, technology integration, data analytics and technical advisory.",
};

type ServiceCard = { title: string; pitch: string; included: string[]; href: string; icon: LucideIcon };

const cards: ServiceCard[] = [
  {
    title: "Remote monitoring",
    pitch: "Continuous, independent review of monitoring data and alarms.",
    included: ["Data & alarm review", "Escalation support", "Reviewed monitoring records"],
    href: "/services/remote-monitoring",
    icon: RadioTower,
  },
  {
    title: "Reporting & back-analysis",
    pitch: "Clear reporting and post-event analysis you can defend.",
    included: ["Routine reporting", "Event back-analysis", "Traceable records"],
    href: "/services/reporting-back-analysis",
    icon: Activity,
  },
  {
    title: "Technology integration",
    pitch: "Connect multi-vendor monitoring into one governed view.",
    included: ["Multi-sensor integration", "Platform-agnostic consolidation", "Governed data flow"],
    href: "/services/technology-integration",
    icon: Network,
  },
  {
    title: "Data analytics",
    pitch: "Structure, quality-test and interpret complex monitoring data.",
    included: ["Data quality assurance", "Trend & movement analysis", "Automated processing"],
    href: "/services/data-analytics-automation",
    icon: Database,
  },
  {
    title: "Technical advisory",
    pitch: "Independent expertise on monitoring strategy and review.",
    included: ["Strategy & scope review", "Technology selection", "Independent assurance"],
    href: "/services/technical-advisory",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <main id="top">
      <SectionHero
        variant="dark"
        eyebrow="Services"
        title="Independent review across the monitoring lifecycle."
        titleId="services-hero-title"
        lead="Five capabilities, one independent layer — from continuous monitoring review to technical advisory, aligned with your operation and not any vendor's product."
        actions={
          <Link href="/contact" className="kit-button kit-button--primary">
            Talk to DTG <ArrowUpRight size={15} />
          </Link>
        }
      />

      <Surface variant="default" aria-label="DTG services">
        <ul className="service-cards" role="list">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.href}>
                <Link href={card.href} className="service-card">
                  <span className="service-card__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <h2 className="service-card__title">{card.title}</h2>
                  <p className="service-card__pitch">{card.pitch}</p>
                  <ul className="service-card__incl">
                    {card.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="service-card__go">
                    Explore <ArrowRight className="service-card__arw" size={15} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Surface>

      <Surface variant="band" aria-labelledby="services-connective">
        <div className="section-kit-statement">
          <p className="eyebrow eyebrow-accent">One independent layer</p>
          <h2 id="services-connective" className="section-headline service-h2--narrow">
            Every service applies the same governed review.
          </h2>
          <p className="section-kit-lead">
            Validate, correlate, govern — so monitoring becomes a trusted decision, not just data. Whichever
            service you start with, the independence and traceability are the same.
          </p>
          <p className="service-backlink">
            <Link href="/about#how-dtg-works" className="service-backlink__link">
              How DTG works <ArrowUpRight size={13} />
            </Link>
          </p>
        </div>
      </Surface>

      <CTA
        surface="band"
        eyebrow="Not sure which service you need?"
        title="Start with your monitoring requirement — we'll point you to the right one."
        titleId="services-cta"
        actions={
          <Link href="/contact" className="kit-button kit-button--primary">
            Talk to DTG <ArrowUpRight size={15} />
          </Link>
        }
      />
    </main>
  );
}
