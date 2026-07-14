"use client";

// Underground mining detail page — page 4 of 4 (final) of the Applications axis. Content object
// driving the shared EnvironmentDetailPage template; signature visual is the scale bar.
// Proof is bignums-style (like open-pit). LOCKED: NO DTG Focus / automation claims anywhere —
// delivered convergence work only. Only Beck Engineering named. Figures/partnership provisional.

import { Users } from "lucide-react";
import {
  EnvironmentDetailPage,
  type EnvironmentDetailData,
} from "@/components/sections/environment-detail-page";

// Underground signature visual: the scale of the programme — a bar filling 0 -> 1,000km+.
// CSS-driven grow animation (reduced-motion disables it) lives under .envd-scalebar.
function ScaleBar() {
  return (
    <div className="envd-scalebar">
      <div className="envd-scalebar__track">
        <div className="envd-scalebar__bigkm">1,000km+</div>
        <div className="envd-scalebar__fill" />
      </div>
      <div className="envd-scalebar__ticks">
        <span>0</span>
        <span>250km</span>
        <span>500km</span>
        <span>750km</span>
        <span>1,000km+</span>
      </div>
      <p className="envd-scalebar__caption">
        For scale, that&rsquo;s further than the length of many countries —{" "}
        <b>every kilometre monitored, compared and reviewed</b> for apparent movement, continuously.
      </p>
    </div>
  );
}

const undergroundDetail: EnvironmentDetailData = {
  hero: {
    eyebrow: "Applications · Underground mining",
    title: (
      <>
        Underground
        <br />
        mining
      </>
    ),
    lead: "Restricted, complex workings where you can't stand back and watch a slope — movement is read by comparing scans over time, across kilometres of drives. DTG runs one of its largest monitoring programmes here.",
    image: "/images/applications/underground.png",
    imageAlt: "Underground mine drive with rock bolting, mesh support and ventilation ducting.",
    primaryCta: { label: "Talk to DTG", href: "/contact" },
    jumpLink: { label: "See the scale ↓", href: "#signature" },
  },
  proof: {
    eyebrow: "Proven underground",
    heading: "Over 1,000km of convergence monitoring — and counting.",
    intro:
      "In partnership with Beck Engineering, DTG delivers one of the most extensive underground convergence monitoring programmes of its kind — integrating and interpreting the data to keep a clear read on ground movement.",
    bignums: [
      { n: "1,000km+", l: "of convergence monitoring delivered" },
      { n: "100+", l: "apparent movements detected & reviewed" },
      { n: "Ongoing", l: "continuous monitoring programme" },
    ],
    partner: (
      <>
        In partnership with <b>Beck Engineering</b>
      </>
    ),
    partnerIcon: <Users size={16} aria-hidden="true" />,
    verify: "Figures and partnership to be confirmed before publication.",
  },
  editorial: {
    statement: (
      <>
        You can&rsquo;t stand back and look at an underground drive. Visibility is restricted, the
        geometry is complex, and movement isn&rsquo;t watched on a live screen — it&rsquo;s{" "}
        <em>read by comparing one scan against the next</em>, across kilometres of workings.
      </>
    ),
    sideK: "What's different here",
    sideParagraphs: [
      "That makes underground monitoring an interpretation problem as much as a measurement one: turning scan-over-scan comparison into a clear picture of what's actually moving.",
    ],
    glance: [
      { label: "Timescale", value: "Scan-period comparison" },
      { label: "Primary signal", value: "Convergence & closure" },
      { label: "What moves", value: "Drives, headings, stopes" },
      { label: "Decision driver", value: "Convergence rate & support" },
    ],
  },
  signature: {
    eyebrow: "The scale of it",
    heading: "A thousand kilometres of ground, read for movement.",
    intro:
      "Underground monitoring isn't one drive — it's a continuous programme spanning kilometre after kilometre of workings, every section compared over time. The scale is the point: sustaining a clear, consistent read across all of it.",
    visual: <ScaleBar />,
  },
  monitor: {
    k: "How we monitor it",
    heading: "Reading movement across the workings.",
    paragraphs: [
      "Underground monitoring leans on spatial comparison and convergence — drawn from the best available sources and turned into one interpreted picture.",
      "DTG's independence is the point: on your workings, what we recommend is driven by your ground and your data, not by any product. We integrate whatever's available — and because the value is in how we read it, new sources simply add to the picture.",
    ],
    datalist: [
      { dt: "Movement", dd: <>Closure and deformation of drives over time — <em>convergence monitoring</em></> },
      { dt: "Spatial", dd: <>Where movement has occurred and how much — <em>scan-to-scan comparison</em></> },
      { dt: "Deformation", dd: <>Additional signals strengthening the read — <em>radar &amp; deformation data</em></> },
      { dt: "Point", dd: <>Targeted movement &amp; support performance — <em>extensometers &amp; instruments</em></> },
    ],
  },
  scope: {
    k: "Where DTG's role ends",
    heading: "We interpret the movement. We don't replace the ground control team.",
    intro:
      "Being clear about the boundary is part of being trustworthy. DTG provides independent monitoring, processing, QA/QC and interpretation — strengthening the decision, not owning it.",
    lines: [
      "We process, review and interpret convergence data, and escalate apparent movement.",
      "We do not replace on-site geotechnical inspection or the mine's ground control function.",
      "Ground support decisions and sign-off remain with the accountable engineers.",
    ],
  },
  services: {
    k: "How DTG helps here",
    heading: "The environment is underground. The work is our services.",
    body: (
      <>
        The <em>how</em> — the monitoring, the analytics, the reporting, the advice — is DTG&rsquo;s
        core services, applied underground.
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
      en: "Tailings",
      title: "Tailings storage facilities",
      desc: "Slow movement and long-term governance, with InSAR via Catalyst Earth.",
      href: "/applications/tailings-storage-facilities",
      image: "/images/applications/tsf.png",
      imageAlt: "Aerial view of a tailings storage facility embankment and pond.",
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
    heading: "Monitoring underground?",
    body: "Tell us about your workings and what you're watching — we'll show you how DTG would support it.",
    button: { label: "Talk to DTG", href: "/contact" },
  },
};

export function UndergroundDetail() {
  return <EnvironmentDetailPage data={undergroundDetail} />;
}
