import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StoryMotion } from "@/components/storytelling";
import { ApplicationsCarousel } from "@/components/applications-carousel";
import { DTGFocusMark } from "@/components/brand";

const ticker = ["Radar", "InSAR", "Prisms", "GNSS", "LiDAR", "Seismic", "VWPs", "SLAM"];

const services = [
  ["01", "Remote Monitoring", "Real-time monitoring and engineering review.", "/capabilities/monitoring-intelligence"],
  ["02", "Monitoring Intelligence", "Advanced analytics, automation and interpretation.", "/capabilities/data-intelligence"],
  ["03", "Monitoring Advisory", "Governance, optimisation and technical guidance.", "/capabilities/monitoring-governance"],
  ["04", "Technology Advisory", "Independent technology evaluation and selection.", "/capabilities/technology-advisory"],
  ["05", "Training & Awareness", "Monitoring knowledge and operational readiness.", "/capabilities/training-capability-development"],
];

const proof = [
  ["50,000+", "Validated alarms reviewed", "50000", "+"],
  ["99%", "Monitoring availability", "99", "%"],
  ["9,600+", "Monitoring hours", "9600", "+"],
  ["Multi-brand", "Technology ecosystem", "0", ""],
  ["Independent", "Technology advisory", "0", ""],
];

const applications: [string, string, string, string, string[]][] = [
  ["Active Open Pits", "From tactical radar alarms to strategic slope-movement insight.", "/images/operation-gold-mining.png", "/operations/open-pit-mining", ["Radar", "Slope Movement", "TARP"]],
  ["Tailings Storage Facilities", "Multi-sensor deformation insight, governance and escalation support.", "/images/operation-tailings-storage.png", "/operations/tailings-storage-facilities", ["InSAR", "Governance", "Escalation"]],
  ["Underground Mining", "Convergence tracking, SLAM processing and operational deformation review.", "/images/operation-underground-monitoring.png", "/operations/underground-operations", ["SLAM", "Convergence", "Tracking"]],
  ["Corporate & Consultants", "Independent monitoring review, technology advisory and decision support.", "/images/sector-infrastructure.png", "/operations/civil-infrastructure", ["Independent Review", "Advisory", "Insight"]],
];

const leaders = [
  ["Peter Saunders", "Founder / Director", "Remote monitoring pioneer. Built and led GroundProbe GSS geotechnical remote monitoring from 2015 to 2024.", "/images/peter-saunders-portrait.png", ["Remote Monitoring", "Technology Strategy"]],
  ["Mark Burdett", "Founder / Director", "Mining leadership across geology, civil engineering, consulting and operational governance.", "/images/mark-burdett-portrait.png", ["Mining Leadership", "Governance"]],
];

export default function Home() {
  return (
    <main className="story-page">
      <StoryMotion />

      <section className="story-hero relative min-h-screen overflow-hidden bg-[#07141F]">
        <Image
          src="/images/dtg-hero-geotechnical-corridor.png"
          fill
          priority
          alt="Aerial terrain and infrastructure corridor with geotechnical monitoring overlays"
          className="hero-image object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,31,.9)_0%,rgba(7,20,31,.7)_38%,rgba(7,20,31,.3)_72%,rgba(7,20,31,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#07141F_0%,rgba(7,20,31,.04)_48%,rgba(7,20,31,.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#07141F,rgba(7,20,31,0))]" />
        <div className="hero-sensor-field" />
        <HeroContours />
        <div className="story-shell relative flex min-h-screen flex-col justify-center pb-10 pt-32">
          <div className="hero-copy">
            <p className="story-eyebrow hero-brand fade-up">Digital Twin Geotechnical</p>
            <h1 className="hero-message fade-up mt-8">
              <span>Integrated Data.</span>
              <span>Informed Decisions.</span>
            </h1>
            <p className="hero-subcopy fade-up mt-6">
              Independent geotechnical monitoring insight integrating multiple technologies into clearer operational decisions.
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="story-button">
                Initiate Briefing <ArrowUpRight size={15} />
              </Link>
              <Link href="/dtg-focus" className="story-button secondary">
                Explore <DTGFocusMark />
              </Link>
            </div>
          </div>
          <div className="ticker fade-up mt-14 border-y border-white/12 py-4">
            <div className="ticker-track">
              {[...ticker, ...ticker].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="positioning-section monitoring-challenge-section relative overflow-hidden bg-[#102838] py-20 text-white md:py-28">
        <TopoField />
        <div className="story-shell relative">
          <div className="monitoring-challenge-copy">
            <p className="story-eyebrow fade-up">The Monitoring Challenge</p>
            <h2 className="section-headline fade-up mt-8">
              Monitoring Technology Is Not The Problem.
            </h2>
            <p className="story-subcopy fade-up mt-8">
              Modern operations already invest heavily in monitoring technologies.
            </p>
            <p className="story-subcopy fade-up mt-5">
              The challenge is transforming fragmented information into trusted monitoring outcomes and confident operational decisions.
            </p>
            <p className="monitoring-challenge-premise fade-up">
              Monitoring technology generates information. Monitoring governance creates confidence.
            </p>
          </div>
          <div className="mt-14">
            <div className="monitoring-framework-image-wrap fade-up">
              <Image
                src="/images/monitoring-challenge-framework.png"
                alt="Monitoring challenge framework showing diverse information sources, engineering review framework and trusted operational outcomes"
                width={1792}
                height={1018}
                className="monitoring-framework-image"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section bg-[#F4F4F2] py-20 text-[#1C2A35] md:py-28">
        <div className="story-shell">
          <p className="story-eyebrow fade-up text-[#6d747a]">Services</p>
          <h2 className="section-headline fade-up mt-8 max-w-4xl text-[#1C2A35]">Services</h2>
          <p className="story-subcopy fade-up mt-6 max-w-4xl text-[#52616c]">
            Focused actionable insight across monitoring, governance, advisory and analytics.
          </p>
          <div className="service-ribbon mt-14">
            {services.map(([index, title, body, href]) => (
              <Link href={href} className="service-row fade-up" key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="dtg-focus" className="focus-section bg-[#07141F] py-20 text-white md:py-28">
        <div className="story-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="story-eyebrow fade-up"><DTGFocusMark /></p>
            <h2 className="section-headline fade-up mt-8 max-w-5xl">
              One Platform. Multiple Technologies. A Single Operational View.
            </h2>
            <p className="story-subcopy fade-up mt-8 max-w-3xl">
              <DTGFocusMark /> is not just a dashboard. It is an enterprise-grade monitoring framework for integration, governance, analytics and operational decision support.
            </p>
            <Link href="/dtg-focus" className="story-button fade-up mt-9">
              Explore <DTGFocusMark /> <ArrowUpRight size={15} />
            </Link>
          </div>
          <FocusOperationalView />
        </div>
      </section>

      <section id="applications" className="applications-section bg-[#07141F] py-20 text-white md:py-28">
        <div className="story-shell">
          <p className="story-eyebrow fade-up">Applications</p>
          <h2 className="section-headline fade-up mt-8 max-w-5xl">
            Built for critical ground and infrastructure environments.
          </h2>
          <ApplicationsCarousel applications={applications} />
        </div>
      </section>

      <section className="proof-section bg-[#102838] py-20 text-white md:py-28">
        <div className="story-shell">
          <p className="story-eyebrow fade-up">Trust / Proof</p>
          <h2 className="story-headline fade-up mt-8 max-w-5xl">Trusted in live monitoring conditions.</h2>
          <div className="proof-board mt-14">
            {proof.map(([value, label, count, suffix]) => (
              <Link href="/capabilities/monitoring-governance" className="proof-metric fade-up" key={label}>
                <strong data-count={count} data-suffix={suffix}>
                  {value}
                </strong>
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <div className="proof-preview mt-12">
            <p>Validated monitoring workflows across radar, InSAR, prisms, GNSS and other technologies.</p>
            <p>Long-term deformation identified from noisy radar and prism datasets.</p>
            <p>Alarm quality improved through review, governance and escalation discipline.</p>
          </div>
        </div>
      </section>

      <section className="leadership-showcase bg-[#07141F] py-20 text-[#F4F4F2] md:py-28">
        <div className="story-shell">
          <p className="story-eyebrow fade-up text-[#D8CCB3]">Leadership</p>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_.72fr] md:items-end">
            <h2 className="section-headline fade-up max-w-5xl text-[#F4F4F2]">
              Built from monitoring and mining leadership.
            </h2>
            <p className="leadership-showcase-intro fade-up">
              DTG is led by experienced monitoring and mining professionals combining operational judgement,
              technology understanding and independent review.
            </p>
          </div>
        </div>

        <div className="story-shell">
          <div className="leadership-showcase-grid mt-14">
            {leaders.map(([name, role, body, image, tags]) => (
              <Link href="/about/leadership" className="leadership-showcase-card fade-up" key={name as string}>
                <div className="leadership-showcase-photo">
                  <Image
                    src={image as string}
                    fill
                    alt={`${name}, ${role}`}
                    className={`object-cover ${name === "Peter Saunders" ? "object-[center_18%]" : "object-[center_16%]"}`}
                  />
                </div>
                <div className="leadership-showcase-copy">
                  <div>
                    <h3>{name}</h3>
                    <p className="leadership-showcase-role">{role}</p>
                    <p className="leadership-showcase-body">{body}</p>
                  </div>
                  <div className="leadership-showcase-footer">
                    <div className="leader-tags">
                      {(tags as string[]).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="profile-link">View profile ↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta relative min-h-screen overflow-hidden bg-[#07141F] text-white">
        <Image src="/images/dtg-sunset-cta.png" fill alt="Mining operation at sunset" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,31,.9),rgba(7,20,31,.58))]" />
        <div className="story-shell relative flex min-h-screen flex-col justify-center">
          <p className="story-eyebrow fade-up">Contact</p>
          <h2 className="hero-message fade-up mt-8 max-w-5xl">
            <span>Integrated Data.</span>
            <span>Operational Confidence.</span>
          </h2>
          <p className="hero-subcopy fade-up mt-7">Start a monitoring conversation with DTG.</p>
          <Link href="/contact" className="story-button fade-up mt-10 w-fit">
            Initiate Briefing <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FocusOperationalView() {
  const sources = ["Radar", "InSAR", "GNSS", "Prisms", "LiDAR", "Seismic", "VWPs", "Operational"];
  const workflows = ["Validate", "Correlate", "Govern", "Escalate"];

  return (
    <div className="focus-operational-view fade-up" aria-label="DTG Focus™ turns fragmented monitoring systems into one operational view">
      <svg className="focus-operational-lines" viewBox="0 0 920 520" fill="none" aria-hidden="true">
        <defs>
          <marker id="focusArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M1 1L7 4L1 7" fill="none" stroke="#8EC8F2" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="focusGoldArrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M1 1L8 4.5L1 8" fill="none" stroke="#D6A73A" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {[92, 140, 188, 236, 284, 332, 380, 428].map((y, index) => (
          <path
            key={y}
            className="focus-input-path"
            style={{ animationDelay: `${index * 0.18}s` }}
            d={`M168 ${y} C 260 ${y}, 310 ${260 + (y - 260) * 0.24}, 390 260`}
            markerEnd="url(#focusArrow)"
          />
        ))}
        <path className="focus-output-path" d="M566 260 C 638 260, 678 260, 754 260" markerEnd="url(#focusGoldArrow)" />
      </svg>

      <div className="focus-sources" aria-label="Monitoring technologies">
        <span className="focus-column-label">Fragmented inputs</span>
        <div className="focus-source-grid">
          {sources.map((source, index) => (
            <span key={source} style={{ ["--focus-delay" as string]: `${index * 0.16}s` }}>
              {source}
            </span>
          ))}
        </div>
      </div>

      <div className="focus-environment">
        <div className="focus-environment-inner">
          <small><DTGFocusMark /></small>
          <strong>Single operational view</strong>
          <div className="focus-environment-flow">
            {workflows.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="focus-outcome">
        <span className="focus-column-label">Decision-ready output</span>
        <div className="focus-outcome-card">
          <small>Operational output</small>
          <strong>Focused Actionable Insight</strong>
          <p>Clearer review, governance, escalation and action.</p>
        </div>
      </div>
    </div>
  );
}

function HeroContours() {
  return (
    <svg className="absolute right-[-5%] top-[12%] hidden h-[72%] w-[68%] opacity-45 md:block" viewBox="0 0 900 600" fill="none" aria-hidden="true">
      <path d="M10 416C146 322 218 374 342 281C475 182 546 243 666 145C758 70 826 92 910 31" stroke="#A8B5C0" strokeOpacity=".28" />
      <path d="M26 470C180 394 246 424 376 331C501 241 575 294 704 198C786 137 850 152 916 97" stroke="#A8B5C0" strokeOpacity=".18" />
      <path d="M89 520C218 461 314 480 433 392C554 303 636 345 748 263C823 208 866 213 918 171" stroke="#D6A73A" strokeOpacity=".18" />
    </svg>
  );
}

function TopoField() {
  return (
    <svg className="topo-field" viewBox="0 0 1200 540" fill="none" aria-hidden="true">
      <path d="M-20 418C152 318 265 372 409 278C574 170 697 234 842 134C982 38 1074 74 1225 5" stroke="#A8B5C0" strokeOpacity=".08" />
      <path d="M-4 476C191 402 299 428 455 332C612 237 742 296 897 190C1014 112 1105 141 1224 76" stroke="#A8B5C0" strokeOpacity=".075" />
      <path d="M62 532C226 468 372 482 524 390C675 298 811 342 952 256C1063 188 1134 204 1225 148" stroke="#D6A73A" strokeOpacity=".06" />
    </svg>
  );
}
