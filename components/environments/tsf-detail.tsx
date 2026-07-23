"use client";

// Tailings storage facilities detail page — page 3 of the Applications axis. Content object
// driving the shared EnvironmentDetailPage template; its signature visual is the noise->signal
// chart (the one page where the noise/signal treatment is genuinely true). Proof band is
// capability-framed (NO invented numbers). Client name (Greatland/Telfer) MUST NOT appear.
// Hero image is an AI-generated placeholder. Catalyst Earth partnership confirmed; figures approved.

import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import {
  EnvironmentDetailPage,
  type EnvironmentDetailData,
} from "@/components/sections/environment-detail-page";

// TSF signature visual: noisy raw displacement resolving into a clean, decision-ready trend.
// CSS-driven draw/fade animations (reduced-motion disables them) live under .envd-signal-viz.
function NoiseSignalChart() {
  return (
    <div className="envd-signal-viz">
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Noisy displacement data resolving into a clean deformation trend"
      >
        <defs>
          <linearGradient id="envd-cleanfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="40" y1="150" x2="960" y2="150" stroke="var(--c-border)" strokeWidth="1" strokeDasharray="3 5" />
        <path
          className="raw"
          d="M40,150 L58,120 L70,178 L86,108 L100,190 L118,132 L132,205 L150,96 L165,188 L182,145 L200,215 L216,110 L232,175 L250,138 L268,198 L285,120 L302,165 L320,150 L338,185 L356,128 L374,168 L392,145 L410,178"
          fill="none"
          stroke="var(--c-decorative-only)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.75"
        />
        <g className="dots">
          <circle cx="430" cy="140" r="2" fill="var(--c-decorative-only)" />
          <circle cx="450" cy="162" r="2" fill="var(--c-decorative-only)" />
          <circle cx="468" cy="132" r="2" fill="var(--c-decorative-only)" />
          <circle cx="488" cy="170" r="2" fill="var(--c-decorative-only)" />
          <circle cx="506" cy="128" r="2" fill="var(--c-decorative-only)" />
          <circle cx="524" cy="158" r="2" fill="var(--c-decorative-only)" />
          <circle cx="500" cy="145" r="2.5" fill="var(--accent-text)" />
        </g>
        <path
          className="cleanarea"
          d="M500,145 C560,146 620,150 700,156 C780,162 860,172 960,188 L960,300 L500,300 Z"
          fill="url(#envd-cleanfill)"
        />
        <path
          className="clean"
          d="M500,145 C560,146 620,150 700,156 C780,162 860,172 960,188"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="endpt" cx="960" cy="188" r="5" fill="var(--accent)" />
        <text x="40" y="285" className="envd-vlabel" fill="var(--c-text-soft)">
          Raw data · noisy, hard to read
        </text>
        <text x="960" y="285" textAnchor="end" className="envd-vlabel" fill="var(--accent-text)">
          Clean trend · decision-ready
        </text>
      </svg>
    </div>
  );
}

function SignalLink() {
  return (
    <div className="envd-signal-link">
      <p>
        <b>This is DTG&rsquo;s analytics capability at work.</b> The machine-learning methods behind
        it — anomaly detection, trend extraction, and more — are the core of what we do, and
        we&rsquo;ve published them on real long-term tailings monitoring.
      </p>
      <Link href="/services/data-analytics-automation">
        See our data analytics <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
}

const tsfDetail: EnvironmentDetailData = {
  hero: {
    eyebrow: "Applications · Tailings storage facilities",
    title: (
      <>
        Tailings storage
        <br />
        facilities
      </>
    ),
    lead: "Slow, long-term movement where the stakes are high, the timescales run to years, and the real signal hides in the noise. The hard part isn't collecting the data — it's reading it.",
    image: "/images/applications/tsf.png",
    imageAlt: "Aerial view of a tailings storage facility embankment and pond.",
    primaryCta: { label: "Talk to DTG", href: "/contact" },
    jumpLink: { label: "How we read the signal ↓", href: "#signature" },
  },
  proof: {
    eyebrow: "How we prove it",
    heading: "Satellite InSAR and monthly mapping — read as one record.",
    intro:
      "For tailings, DTG combines wide-area satellite deformation with recurring water-body mapping into one continuous, governed, long-term record of how the facility is behaving.",
    caps: [
      {
        title: "Satellite InSAR",
        body: "Wide-area ground deformation across the whole facility — through our partnership with Catalyst Earth.",
      },
      {
        title: "Monthly water mapping",
        body: "The pond and water extent mapped every month — a consistent, comparable long-term record.",
      },
      {
        title: "Machine-learning read",
        body: "Analytics that pull real, slow deformation out of noisy, real-world data.",
      },
    ],
    partner: (
      <>
        InSAR data in partnership with <b>Catalyst Earth</b>
      </>
    ),
    partnerIcon: <Eye size={16} aria-hidden="true" />,
    // Catalyst Earth partnership is CONFIRMED and figures are approved (user, 2026-07-18) — the
    // "to be confirmed" note is removed. Catalyst Earth stays named; it is the one confirmed partner.
  },
  editorial: {
    statement: (
      <>
        A tailings facility doesn&rsquo;t move like a pit slope. The movement that matters is{" "}
        <em>tiny and slow</em> — and on a vegetated embankment it&rsquo;s easily swamped by wind,
        weather and atmospheric noise.
      </>
    ),
    sideK: "What's different here",
    sideParagraphs: [
      "The challenge isn't speed — it's confidence over years. Pulling a reliable long-term signal out of noisy data is what turns a monitoring record into a decision.",
    ],
    glance: [
      { label: "Timescale", value: "Long-term · monthly" },
      { label: "Primary signal", value: "InSAR · piezometers · mapping" },
      { label: "The hard part", value: "Tiny movement, hidden in noise" },
      { label: "Decision driver", value: "Long-term record confidence" },
    ],
  },
  signature: {
    eyebrow: "What DTG actually does",
    heading: "We turn noise into a signal you can act on.",
    intro:
      "On a real embankment, the movement that matters is buried under environmental noise. DTG's difference is the analytics that surface the clean, slow-deformation trend — so it's caught early, not lost.",
    visual: (
      <>
        <NoiseSignalChart />
        <SignalLink />
      </>
    ),
  },
  monitor: {
    k: "How we monitor it",
    heading: "Wide-area coverage, read against the ground.",
    paragraphs: [
      "TSF monitoring combines satellite-scale deformation with ground truth — so slow movement is caught early and read in context.",
      "DTG's independence is the point: on your facility, what we recommend is driven by your data, not by any product. We integrate whatever sources are available — and because the value is in how we read them, new sources simply add to the record.",
    ],
    datalist: [
      { dt: "Wide-area", dd: <>Ground deformation across the whole facility, including areas without instruments — <em>satellite InSAR, via Catalyst Earth</em></> },
      { dt: "Recurring", dd: <>Pond and water extent, mapped monthly — <em>a key TSF risk indicator over time</em></> },
      { dt: "Sub-surface", dd: <>Pore pressure and phreatic surface — <em>piezometers</em></> },
      { dt: "Point", dd: <>Precise movement at embankment points — <em>GNSS &amp; prisms</em></> },
    ],
  },
  scope: {
    k: "Where DTG's role ends",
    heading: "We monitor and interpret. The accountable team decides.",
    intro:
      "Being clear about the boundary is part of being trustworthy. DTG provides independent monitoring, deformation interpretation and a defensible long-term record — strengthening oversight of the facility, not replacing the people accountable for it.",
    lines: [
      "We provide monitoring, InSAR, mapping, and deformation interpretation.",
      "We work within recognised tailings governance good practice.",
      "Accountability for the facility remains with the responsible engineers.",
    ],
  },
  services: {
    k: "How DTG helps here",
    heading: "The environment is the facility. The work is our services.",
    body: (
      <>
        The <em>how</em> — the monitoring, the analytics, the reporting, the advice — is DTG&rsquo;s
        core services, applied to the TSF.
      </>
    ),
    chips: [
      ["Remote monitoring", "/services/remote-monitoring"],
      ["Data analytics", "/services/data-analytics-automation"],
      ["Reporting & back-analysis", "/services/reporting-back-analysis"],
      ["Technical advisory", "/services/technical-advisory"],
    ],
  },
  others: [
    {
      en: "Open-pit",
      title: "Open-pit mining",
      desc: "Radar-led slope monitoring, real-time escalation across three operations.",
      href: "/applications/open-pit-mining",
      image: "/images/applications/openpit.png",
      imageAlt: "Terraced open-pit mine with slope-monitoring instruments.",
    },
    {
      en: "Underground",
      title: "Underground mining",
      desc: "950+ km of scan and deformation data processed.",
      href: "/applications/underground-mining",
      image: "/images/applications/underground.png",
      imageAlt: "Underground mine drive with rock bolting and ventilation ducting.",
    },
    {
      en: "Civil",
      title: "Infrastructure & civil",
      desc: "The same discipline, applied above ground.",
      href: "/applications/infrastructure-civil",
      image: "/images/applications/civil.png",
      imageAlt: "Mountain highway viaduct beside a bolted rock cut slope.",
    },
  ],
  cta: {
    heading: "Monitoring a tailings facility?",
    body: "Tell us about your facility and what you're watching — we'll show you how DTG would support it.",
    button: { label: "Talk to DTG", href: "/contact" },
  },
};

export function TsfDetail() {
  return <EnvironmentDetailPage data={tsfDetail} />;
}
