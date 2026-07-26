"use client";

// Applications overview ("Where We Work") — page 1 of the Applications axis rebuild.
// Source of truth: dtg-applications-overview-mockup.html + design/applications-variants.html
// (variant A, editorial rows). Chrome (nav + footer) comes from the global layout
// (Header + SiteBottom); this component renders only the page body.
// Environment images are AI-generated. Owner-confirmed. No identifiable client sites.
// Do not treat as client-derived imagery. Proof figures are APPROVED to publish (user 2026-07-18).

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, type ReactNode } from "react";

type Environment = {
  num: string;
  label: string;
  name: string;
  body: string;
  fig?: ReactNode;
  href: string;
  linkLabel: string;
  img: string;
  imgAlt: string;
};

const environments: Environment[] = [
  {
    num: "01",
    label: "Open-pit mining",
    name: "Fast slopes, real-time escalation",
    body: "Slope movement where a wall can build toward failure in shifts, not weeks — radar and multi-sensor coverage feeding review and escalation the moment a threshold is crossed.",
    // Peter fix: NO "50 that matter" heading — it contradicted the 500+ figure. Neutral count only.
    fig: (
      <>
        <b>500+</b> TARP trigger responses · <b>50</b> confirmed falls of ground
      </>
    ),
    href: "/applications/open-pit-mining",
    linkLabel: "Explore open-pit monitoring",
    img: "/images/applications/openpit.png",
    imgAlt: "Terraced open-pit mine slope under an overcast sky.",
  },
  {
    num: "02",
    label: "Tailings storage facilities",
    name: "Slow movement, high stakes",
    body: "Gradual settlement and seepage over years, where the movement that matters is small and easily missed — InSAR and multi-sensor coverage conditioned into a reliable long-term record.",
    href: "/applications/tailings-storage-facilities",
    linkLabel: "Explore tailings monitoring",
    img: "/images/applications/tsf.png",
    imgAlt: "Aerial view of a tailings storage facility embankment and pond.",
  },
  {
    num: "03",
    label: "Underground mining",
    name: "Convergence, kilometre after kilometre",
    body: "Restricted, complex workings where movement is read by comparing scans over time — QA/QC scan and deformation-drive distance across the network.",
    // Peter fix: the figure MUST state what it measures — throughput, NOT "km monitored"/"km of tunnels".
    fig: (
      <>
        <b>950+ km</b> scan &amp; deformation-drive throughput
      </>
    ),
    href: "/applications/underground-mining",
    linkLabel: "Explore underground mining",
    img: "/images/applications/underground.png",
    imgAlt: "Underground mine drive with rock support and ventilation ducting.",
  },
  {
    num: "04",
    label: "Infrastructure & civil",
    name: "The same discipline, above ground",
    body: "Dams, slopes, tunnels and civil assets face the same question as a mine: is what moved a problem? The same independent monitoring and analytics apply to the built environment.",
    href: "/applications/infrastructure-civil",
    linkLabel: "Explore infrastructure & civil",
    img: "/images/applications/civil.png",
    imgAlt: "Highway viaduct beside a bolted and mesh-covered rock-cut slope.",
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
      {/* HERO — photographic background (site-wide photo-hero system; consistent with
          home/about/services). Deliberately reverses the prior "deep-teal, no image" note. Image +
          scrim are decorative; content colours are hardcoded on-dark so they hold in both themes.
          Height + vertical-centring come from the shared .appsx-hero rules. */}
      <header className="appsx-hero">
        <div className="appsx-hero__media" aria-hidden="true">
          {/* Synthetic/AI-generated image — no client branding, no identifiable site.
              Owner-confirmed provenance. Do not treat as client-derived imagery. */}
          {/* Revert path: switch src back to /images/applications-hero-team.png (kept in repo). */}
          <Image src="/images/applications-hero-update.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="appsx-hero__scrim" aria-hidden="true" />
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

      {/* ENVIRONMENTS — editorial rows (variant A). Header + four full-width rows; each row a
          2-col grid with the environment image alternating sides (odd: image left, even: image
          right), collapsing to a single column (image on top) below 820px.
          Environment images are AI-generated. Owner-confirmed. No identifiable client
          sites. Do not treat as client-derived imagery. */}
      <section className="appsx-env-sec">
        <div className="site-container">
          <div className="appsx-env-sec__head" data-appsx-reveal>
            <div className="appsx-env-sec__rule" aria-hidden="true" />
            <span className="appsx-eyebrow">The environments</span>
            <h2 className="appsx-env-sec__title">Different ground, the same discipline</h2>
            <p className="appsx-env-sec__lede">
              Every environment moves in its own way — a pit slope in shifts, a tailings embankment
              over years, a drive by the millimetre. Each demands a different read; the discipline
              behind it stays the same.
            </p>
          </div>

          <div className="appsx-env-rows">
            {environments.map((env) => (
              <article className="appsx-env" key={env.href} data-appsx-reveal>
                <div className="appsx-env__media">
                  <Image
                    src={env.img}
                    alt={env.imgAlt}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className="appsx-env__img"
                  />
                </div>
                <div className="appsx-env__copy">
                  <span className="appsx-env__num">
                    {env.num} · {env.label}
                  </span>
                  <h3 className="appsx-env__name">{env.name}</h3>
                  <p className="appsx-env__desc">{env.body}</p>
                  {env.fig ? <p className="appsx-env__fig">{env.fig}</p> : null}
                  <Link href={env.href} className="appsx-env__go">
                    {env.linkLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </main>
  );
}
