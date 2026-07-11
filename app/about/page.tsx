import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  ClipboardCheck,
  Database,
  FileCheck2,
  Network,
  RadioTower,
  ShieldCheck,
  Target,
  UserRound,
  Workflow,
} from "lucide-react";
import { InternalHero } from "@/components/internal-hero";

const aboutContent = {
  hero: {
    title: "About Us",
    lead: "Independent monitoring. Trusted outcomes.",
    copy:
      "DTG is an independent geotechnical monitoring support company helping mining and infrastructure teams turn monitoring data, alarms, reports and technical evidence into clearer operational and engineering decisions.",
  },
  whoWeAre: {
    label: "WHO WE ARE",
    title: "Built for practical monitoring environments.",
    copy:
      "DTG brings together geotechnical monitoring experience, data review, reporting discipline and operational decision support. We support teams working with complex monitoring information, helping them understand what the data means, what can be trusted, and how it should inform response.",
    image: "/images/dtg-command-centre.png",
  },
  problems: {
    label: "WHY DTG EXISTS",
    title: "Monitoring data alone does not create safer decisions.",
    closing:
      "DTG exists to help monitoring information become clearer, more traceable and more useful for action.",
    items: [
      {
        title: "Fragmented inputs",
        copy: "Radar, GNSS, prisms, InSAR, LiDAR, inspections and reports often sit in separate systems.",
        icon: Database,
      },
      {
        title: "Uncertain interpretation",
        copy: "Alarms, movement trends and data quality issues need engineering context.",
        icon: BarChart3,
      },
      {
        title: "Response pressure",
        copy: "Operational decisions often need to be made quickly, clearly and defensibly.",
        icon: ClipboardCheck,
      },
    ],
  },
  capabilities: {
    label: "WHAT WE HELP TEAMS DO",
    title: "Practical support across the monitoring workflow.",
    items: [
      {
        title: "Review monitoring evidence",
        copy: "Independent review of alarms, movement trends and monitoring records.",
        icon: RadioTower,
      },
      {
        title: "Interpret movement trends",
        copy: "Support for understanding deformation behaviour and technical context.",
        icon: BarChart3,
      },
      {
        title: "Improve reporting traceability",
        copy: "Clearer records that connect monitoring evidence, review and response.",
        icon: FileCheck2,
      },
      {
        title: "Support technology integration",
        copy: "Help connecting monitoring sources, workflows and platforms.",
        icon: Network,
      },
      {
        title: "Strengthen decision confidence",
        copy: "Independent support for clearer escalation, governance and operational decisions.",
        icon: ShieldCheck,
      },
    ],
  },
  principles: {
    label: "WHAT MAKES DTG DIFFERENT",
    title: "Independent by design. Practical in operation.",
    items: [
      {
        title: "Independent by design",
        copy: "DTG is not tied to one vendor, platform or sensor brand.",
        icon: ShieldCheck,
      },
      {
        title: "Technology-agnostic",
        copy: "DTG can work across radar, GNSS, prisms, InSAR, LiDAR and other monitoring sources.",
        icon: Network,
      },
      {
        title: "Engineering-led",
        copy: "DTG focuses on interpretation, context and decision support, not just data display.",
        icon: Target,
      },
      {
        title: "Practical in operation",
        copy: "DTG is built around real monitoring workflows, escalation, reporting and TARP-based response.",
        icon: Workflow,
      },
    ],
  },
  processFlow: {
    label: "HOW DTG SUPPORTS DECISIONS",
    title: "From monitoring evidence to defensible decisions.",
    items: [
      {
        title: "Monitoring evidence",
        copy: "Sensors, inspections and reports.",
        tags: ["Radar", "GNSS", "Prisms", "InSAR", "LiDAR", "Inspections", "Reports"],
      },
      {
        title: "Independent review",
        copy: "Validate, correlate, contextualise and report.",
        tags: ["Validate", "Correlate", "Contextualise", "Govern", "Report"],
      },
      {
        title: "Defensible decisions",
        copy: "Awareness, escalation, records and confidence.",
        tags: ["Awareness", "Escalation", "Records", "Confidence"],
      },
    ],
  },
  leadership: {
    label: "LEADERSHIP",
    title: "Led by monitoring and geotechnical experience.",
    intro:
      "DTG leadership combines practical monitoring operations, technology implementation, geotechnical risk understanding and decision-support strategy.",
    story:
      "DTG was built to address the gap between monitoring technology deployment and independent engineering review. The company supports teams that need monitoring information to become clearer, more traceable and more useful for operational decisions.",
    members: [
      {
        name: "Peter Saunders",
        role: "Founder / Director",
        copy: "Monitoring operations, technology implementation and decision-support leadership.",
        image: "/images/peter-saunders-portrait.png",
      },
      {
        name: "Mark Burdett",
        role: "Founder / Director",
        copy: "Mining leadership, geotechnical risk and operational strategy.",
        image: "/images/mark-burdett-portrait.png",
      },
    ],
  },
  dtgFocus: {
    label: "DTG FOCUS",
    title: "A supporting framework for monitoring review.",
    copy:
      "DTG Focus supports DTG's review workflows by improving visibility, traceability and decision records across monitoring information.",
  },
  exploreMore: {
    label: "EXPLORE MORE",
    title: "Continue through the DTG story.",
    items: [
      {
        title: "Purpose & Principles",
        copy: "Why DTG exists, the problem it solves and the principles that shape its work.",
        href: "/about/purpose-principles",
        icon: Target,
      },
      {
        title: "Vendor Independence",
        copy: "How DTG remains independent from monitoring vendors, software vendors and equipment manufacturers.",
        href: "/about/vendor-independence",
        icon: ShieldCheck,
      },
      {
        title: "Leadership",
        copy: "The people leading DTG and the experience behind the company.",
        href: "/about/leadership",
        icon: UserRound,
      },
    ],
  },
  closingCta: {
    title: "Partner with DTG to turn monitoring evidence into trusted decisions.",
    image: "/images/home/dtg-closing-cta-real-monitoring-centre.png",
  },
} as const;

function SectionHeading({
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
    <div className="about-story-heading">
      <p className="story-eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function About() {
  return (
    <main className="about-overview-page about-story-page">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.lead}
        intro={aboutContent.hero.copy}
        titleId="about-title"
      />

      <section className="about-story-section about-who-section" aria-labelledby="about-who-title">
        <div className="shell about-who-layout">
          <div className="about-story-heading">
            <p className="story-eyebrow">{aboutContent.whoWeAre.label}</p>
            <h2 id="about-who-title">{aboutContent.whoWeAre.title}</h2>
            <p>{aboutContent.whoWeAre.copy}</p>
          </div>
          <figure className="about-story-image">
            <Image
              src={aboutContent.whoWeAre.image}
              alt="DTG monitoring centre with technical review screens"
              width={1600}
              height={1000}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </figure>
        </div>
      </section>

      <section className="about-story-section about-problem-section" aria-labelledby="about-exists-title">
        <div className="shell">
          <SectionHeading id="about-exists-title" label={aboutContent.problems.label} title={aboutContent.problems.title} />
          <div className="about-problem-grid">
            {aboutContent.problems.items.map(({ title, copy, icon: Icon }, index) => (
              <article className="about-problem-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" size={22} strokeWidth={1.55} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="about-story-closing-line">
            {aboutContent.problems.closing}
          </p>
        </div>
      </section>

      <section className="about-story-section about-help-section" aria-labelledby="about-help-title">
        <div className="shell">
          <div className="about-help-header">
            <SectionHeading id="about-help-title" label={aboutContent.capabilities.label} title={aboutContent.capabilities.title} />
            <Link href="/services" className="about-story-link">
              Explore services <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <div className="about-help-grid">
            {aboutContent.capabilities.items.map(({ title, copy, icon: Icon }, index) => (
              <article className="about-help-item" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" size={20} strokeWidth={1.55} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-section about-principles-section" aria-labelledby="about-principles-title">
        <div className="shell">
          <SectionHeading id="about-principles-title" label={aboutContent.principles.label} title={aboutContent.principles.title} />
          <div className="about-principle-grid">
            {aboutContent.principles.items.map(({ title, copy, icon: Icon }) => (
              <article className="about-principle-card" key={title}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.55} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-section about-process-section" aria-labelledby="about-process-title">
        <div className="shell">
          <SectionHeading id="about-process-title" label={aboutContent.processFlow.label} title={aboutContent.processFlow.title} />
          <div className="about-process-flow" aria-label="Monitoring evidence to independent review to defensible decisions">
            {aboutContent.processFlow.items.map(({ title, copy, tags }, index) => (
              <details className="about-process-step" key={title}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </summary>
                <div className="about-process-tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-section about-leadership-section" aria-labelledby="about-leadership-title">
        <div className="shell">
          <div className="about-leadership-intro">
            <div>
              <p className="story-eyebrow">{aboutContent.leadership.label}</p>
              <h2 id="about-leadership-title">{aboutContent.leadership.title}</h2>
            </div>
            <div>
              <p>{aboutContent.leadership.intro}</p>
              <p>{aboutContent.leadership.story}</p>
              <Link href="/about/leadership" className="about-story-link">
                Explore leadership <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
          <div className="about-leadership-cards">
            {aboutContent.leadership.members.map((leader) => (
              <article className="about-leadership-card" key={leader.name}>
                <div className="about-leadership-photo">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    width={900}
                    height={1100}
                    sizes="(max-width: 900px) 100vw, 42vw"
                  />
                </div>
                <div>
                  <p className="about-panel-kicker">{leader.role}</p>
                  <h3>{leader.name}</h3>
                  <p>{leader.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-section about-focus-callout-section" aria-labelledby="about-focus-title">
        <div className="shell about-focus-callout">
          <div>
            <p className="story-eyebrow">{aboutContent.dtgFocus.label}</p>
            <h2 id="about-focus-title">{aboutContent.dtgFocus.title}</h2>
          </div>
          <div>
            <p>{aboutContent.dtgFocus.copy}</p>
            <Link href="/dtg-focus" className="about-story-link">
              Explore DTG Focus <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-story-section about-explore-section" aria-labelledby="about-explore-title">
        <div className="shell">
          <SectionHeading id="about-explore-title" label={aboutContent.exploreMore.label} title={aboutContent.exploreMore.title} />
          <div className="about-explore-card-grid">
            {aboutContent.exploreMore.items.map(({ title, copy, href, icon: Icon }) => (
              <Link href={href} className="about-explore-card" key={title}>
                <Icon aria-hidden="true" size={20} strokeWidth={1.55} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>
                  Read more <ArrowUpRight aria-hidden="true" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-cta" aria-labelledby="about-story-cta-title">
        <Image
          src={aboutContent.closingCta.image}
          alt=""
          fill
          sizes="100vw"
          className="about-story-cta__image"
        />
        <div className="shell about-story-cta__inner">
          <h2 id="about-story-cta-title">{aboutContent.closingCta.title}</h2>
          <div className="about-story-cta__actions">
            <Link href="/contact" className="footer-primary-link">
              CONTACT DTG <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <Link href="/services" className="footer-text-link">
              EXPLORE SERVICES <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
