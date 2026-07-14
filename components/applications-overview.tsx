"use client";

// Applications overview ("Where We Work") — page 1 of the Applications axis rebuild.
// Source of truth: dtg-applications-overview-mockup.html. Chrome (nav + footer) comes from the
// global layout (Header + SiteBottom); this component renders only the page body.
// Environment images are AI-GENERATED PLACEHOLDERS (public/images/applications/*) — upgrade to
// licensed photography before publication. Proof figures are provisional (verify-before-publish).

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect } from "react";

type Proof = { value: string; label: string };
type Environment = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  img: string;
  imgAlt: string;
  proof?: Proof[];
  approach?: string;
};

const environments: Environment[] = [
  {
    num: "01",
    eyebrow: "Open-pit mining",
    title: "Fast slopes, real-time escalation.",
    desc: "Live, fast-changing slopes where movement can build toward failure in shifts, not weeks — radar-led, watched continuously from our monitoring centre, and escalated the moment a threshold is crossed.",
    href: "/applications/open-pit-mining",
    img: "/images/applications/openpit.png",
    imgAlt: "Terraced open-pit mine under overcast sky with slope-monitoring instruments in the foreground.",
    proof: [
      { value: "50,000+", label: "alarms validated" },
      { value: "500+", label: "TARP escalations" },
      { value: "3", label: "operations monitored" },
    ],
  },
  {
    num: "02",
    eyebrow: "Tailings storage facilities",
    title: "Slow movement, high stakes.",
    desc: "Gradual settlement and seepage over years, where the movement that matters is small and easily missed — read with satellite InSAR, recurring water mapping, and the analytics to pull a reliable long-term trend from the data.",
    href: "/applications/tailings-storage-facilities",
    img: "/images/applications/tsf.png",
    imgAlt: "Aerial view of a tailings storage facility embankment and pond.",
    proof: [
      { value: "InSAR", label: "via Catalyst Earth" },
      { value: "Monthly", label: "water-body mapping" },
      { value: "Published", label: "analytics methods" },
    ],
  },
  {
    num: "03",
    eyebrow: "Underground mining",
    title: "Convergence, kilometre after kilometre.",
    desc: "Restricted, complex workings where movement is read by comparing scans over time — one of DTG's largest monitoring programmes, delivered in partnership with Beck Engineering.",
    href: "/applications/underground-mining",
    img: "/images/applications/underground.png",
    imgAlt: "Underground mine drive with rock bolting, mesh support and ventilation ducting.",
    proof: [
      { value: "1,000km+", label: "convergence monitored" },
      { value: "100+", label: "movements detected" },
      { value: "Ongoing", label: "with Beck Engineering" },
    ],
  },
  {
    num: "04",
    eyebrow: "Infrastructure & civil",
    title: "The same discipline, above ground.",
    desc: "Dams, slopes, tunnels and civil assets face the same core question as a mine: is the ground moving, and does it matter? DTG brings the same independent monitoring and analytics to the built environment.",
    href: "/applications/infrastructure-civil",
    img: "/images/applications/civil.png",
    imgAlt: "Mountain highway viaduct beside a bolted and meshed rock cut slope.",
    approach:
      "asset-relative movement, wide-area deformation and stakeholder-ready reporting, built on the same independent monitoring and analytics.",
  },
];

const spine = [
  { n: "01", title: "Monitor", copy: "Continuous, independent monitoring from our centre." },
  { n: "02", title: "Analyse", copy: "Rigorous analytics to surface the real movement." },
  { n: "03", title: "Interpret", copy: "Engineering judgement on what the movement means." },
  { n: "04", title: "Report", copy: "Clear, defensible, decision-ready outputs." },
  { n: "05", title: "Support", copy: "Advice through the decisions that follow." },
] as const;

const serviceChips = [
  ["Remote monitoring", "/services/remote-monitoring"],
  ["Data analytics", "/services/data-analytics-automation"],
  ["Reporting & back-analysis", "/services/reporting-back-analysis"],
  ["Technical advisory", "/services/technical-advisory"],
] as const;

export function ApplicationsOverview() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-appsx-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="appsx-page">
      {/* CINEMATIC HERO — deep-teal, no image, bottom-anchored under the fixed site header */}
      <header className="appsx-hero">
        <div className="appsx-hero__inner site-container" data-appsx-reveal>
          <span className="appsx-eyebrow appsx-hero__eyebrow">Applications</span>
          <h1 className="appsx-hero__title">Where We Work</h1>
          <p className="appsx-hero__lead">
            DTG provides independent monitoring, analytics and decision support across open-pit,
            tailings, underground and civil environments. Each one moves differently — the discipline
            behind the read stays the same.
          </p>
        </div>
        <span className="appsx-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* INTRO — general framing */}
      <section className="appsx-intro">
        <div className="site-container appsx-intro__grid">
          <div data-appsx-reveal>
            <span className="appsx-eyebrow">The environments</span>
            <h2 className="appsx-intro__title">Different ground. The same discipline.</h2>
          </div>
          <div data-appsx-reveal>
            <p>
              Every environment moves in its own way — a pit slope in shifts, a tailings embankment
              over years, a drive by the millimetre — and each demands a different read.
            </p>
            <p>
              What stays constant is how DTG works: independent monitoring, rigorous analytics, and
              clear interpretation that turns data into a decision. Here&rsquo;s how that applies
              across each environment we work in.
            </p>
          </div>
        </div>
      </section>

      {/* ENVIRONMENTS — stacked, alternating image side */}
      {environments.map((env, index) => {
        const flip = index % 2 === 1;
        return (
          <section
            key={env.href}
            className={`appsx-env${flip ? " appsx-env--flip" : ""}`}
          >
            <div className="appsx-env__inner" data-appsx-reveal>
              <div className="appsx-env__media">
                <Image
                  src={env.img}
                  alt={env.imgAlt}
                  fill
                  sizes="(max-width:900px) 100vw, 50vw"
                  className="appsx-env__img"
                />
              </div>
              <div className="appsx-env__copy">
                <span className="appsx-env__num">{env.num}</span>
                <span className="appsx-env__eyebrow">{env.eyebrow}</span>
                <h2 className="appsx-env__title">{env.title}</h2>
                <p className="appsx-env__desc">{env.desc}</p>
                {env.proof ? (
                  <div className="appsx-env__proof">
                    {env.proof.map((p) => (
                      <div className="appsx-env__pf" key={p.label}>
                        <b>{p.value}</b>
                        <span>{p.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                {env.approach ? (
                  <p className="appsx-env__approach">
                    <b>Our approach applies directly here</b> — {env.approach}
                  </p>
                ) : null}
                <Link href={env.href} className="appsx-env__go">
                  Explore {env.eyebrow.toLowerCase()}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* HOW DTG SUPPORTS — spine */}
      <section className="appsx-spine-sec">
        <div className="site-container">
          <div className="appsx-spine__head" data-appsx-reveal>
            <span className="appsx-eyebrow">How DTG supports every environment</span>
            <h2>The same spine, wherever you operate.</h2>
            <p>The environment changes what we watch. It doesn&rsquo;t change how we work.</p>
          </div>
          <ol className="appsx-spine" data-appsx-reveal>
            {spine.map((node) => (
              <li className="appsx-spine__node" key={node.n}>
                <span className="appsx-spine__n">{node.n}</span>
                <h3>{node.title}</h3>
                <p>{node.copy}</p>
              </li>
            ))}
          </ol>
          <div className="appsx-spine__chips" data-appsx-reveal>
            {serviceChips.map(([label, href]) => (
              <Link href={href} key={href} className="appsx-chip">
                {label}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="appsx-cta">
        <div className="site-container" data-appsx-reveal>
          <h2>Wherever your ground is moving.</h2>
          <p>
            Tell us about your site and what you&rsquo;re watching — we&rsquo;ll show you how DTG
            would support it.
          </p>
          <Link href="/contact" className="appsx-btn">
            Talk to DTG
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="appsx-provisional">
            Proof figures are provisional and subject to verification before publication.
            Environment imagery is AI-generated placeholder pending licensed photography.
          </p>
        </div>
      </section>
    </main>
  );
}
