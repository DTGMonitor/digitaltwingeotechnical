"use client";

// Open-pit mining detail page — page 2 of the Applications axis. Content object driving the
// shared EnvironmentDetailPage template; its signature visual is the escalation funnel.
// Proof figures are APPROVED to publish (user, 2026-07-18). Hero image is an AI-generated placeholder.

import {
  EnvironmentDetailPage,
  type EnvironmentDetailData,
} from "@/components/sections/environment-detail-page";

// A7 STATS RELOCATION (2026-07-19): the numeric funnel (50,000+ alarms -> 500+ escalations ->
// 50+ fall-of-ground) was RELOCATED to the underground page — those are underground-engagement
// figures. Per the owner: open pit carries QUALITATIVE copy only (NO numbers) until the principal
// supplies open-pit-specific figures. This is the number-free version of the same workflow — the
// escalation DISCIPLINE is genuinely open-pit's; only the mis-attributed counts were removed.
function FilterFlow() {
  const rows = [
    { mod: "f1", stage: "Validate", bar: "Automated alarms validated by our monitoring centre" },
    { mod: "f2", stage: "Escalate", bar: "Real slope movement escalated against TARP thresholds" },
    { mod: "f3", stage: "Act", bar: "Ground failures detected and acted on" },
  ] as const;
  return (
    <div className="envd-funnel">
      {rows.map((r) => (
        <div className={`envd-funnel__row envd-funnel__row--${r.mod}`} key={r.mod}>
          <div className="envd-funnel__meta">
            <div className="envd-funnel__l">{r.stage}</div>
          </div>
          <div className="envd-funnel__bar">
            <span>{r.bar}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const openPitDetail: EnvironmentDetailData = {
  hero: {
    eyebrow: "Applications · Open-pit mining",
    title: (
      <>
        Open-pit
        <br />
        mining
      </>
    ),
    lead: "Live, fast-changing slopes where movement can build toward failure in shifts, not weeks. This is where DTG's monitoring runs hardest — and where our centre keeps the watch, continuously.",
    image: "/images/applications/openpit.png",
    imageAlt: "Terraced open-pit mine under overcast sky with slope-monitoring instruments in the foreground.",
    primaryCta: { label: "Talk to DTG", href: "/contact" },
    jumpLink: { label: "See the numbers ↓", href: "#proof" },
  },
  proof: {
    eyebrow: "Proven in the pit",
    heading: "Continuous slope monitoring across three operations.",
    intro:
      "Since May 2025, DTG's monitoring centre has watched three open-pit operations in real time — validating tens of thousands of alarms and escalating the movements that matter.",
    bignums: [
      { n: "99%", l: "live monitoring uptime from our centre" },
      { n: "3", l: "open-pit operations monitored" },
      { n: "14 mo", l: "of continuous monitoring and counting" },
    ],
    // Figures are APPROVED to publish (user, 2026-07-18) — the "to be confirmed" note is gone. The
    // 99% clarification STAYS: it is a permanent compliance disclaimer (reliability, not sensor
    // performance), not a pending-verification caveat. Do not drop it.
    verify:
      "“99% uptime” refers to our monitoring centre's remote-connection reliability over the period, not sensor performance.",
  },
  editorial: {
    statement: (
      <>
        An open pit is a live, changing slope. The window between a signal and a failure can be short
        — so monitoring only protects the pit when someone competent is <em>watching continuously</em>{" "}
        and can act the moment a threshold is crossed.
      </>
    ),
    sideK: "What's different here",
    sideParagraphs: [
      "This is the most escalation-driven environment DTG works in: high-frequency radar, alarms that matter, and decisions measured in shifts, not weeks.",
      "Movement can be progressive, regressive or sudden — and telling them apart, fast, is what turns data into the right call.",
    ],
  },
  signature: {
    eyebrow: "What DTG actually does",
    // A7: heading was "From fifty thousand alarms to fifty that matter." — numbers removed
    // (relocated to underground); reworded qualitatively, no invented figures.
    heading: "From overwhelming alarm volume to the movement that matters.",
    intro:
      "The value isn't raising alarms — anything can do that. It's the disciplined workflow that filters an overwhelming volume of automated alarms down to the real ground failures, so the right movement reaches the right people.",
    visual: <FilterFlow />,
    note: (
      <>
        That workflow — <b>validate the noise, escalate the real movement, act on the failures</b> —
        is the discipline.
      </>
    ),
  },
  monitor: {
    k: "How we monitor it",
    heading: "Radar-led, and read as one picture.",
    paragraphs: [
      "Open-pit monitoring leads with real-time slope stability radar, layered with other sources — each answering a different question about the slope.",
      "DTG's independence is the point: on your pit, what we recommend is driven by your slope and your data, not by any product. We work across whatever's already on site — and because the value is in how we read it, new sensors simply add to the picture.",
    ],
    datalist: [
      { dt: "Movement", dd: <>Continuous, area-wide slope movement — <em>today from Real &amp; Synthetic Aperture Radar (RAR &amp; SAR)</em></> },
      { dt: "Point", dd: <>Precise movement at defined points — <em>prism &amp; total-station surveys</em></> },
      { dt: "Positioning", dd: <>Absolute positional movement over time — <em>GNSS</em></> },
      { dt: "Context", dd: <>The triggers movement is read against — <em>blast &amp; rainfall records</em></> },
    ],
  },
  scope: {
    k: "Where DTG's role ends",
    heading: "We support the decision. We don't own the pit.",
    intro:
      "Being clear about the boundary is part of being trustworthy. DTG provides independent monitoring, review and escalation support — we strengthen the decision, we don't replace the people accountable for it.",
    lines: [
      "We support slope-failure assessment — always with stated assumptions, uncertainty and limitations.",
      "We do not replace your site geotechnical team or on-ground inspections.",
      "Final operational decisions and sign-off remain with your accountable engineers.",
    ],
  },
  services: {
    k: "How DTG helps here",
    heading: "The environment is the pit. The work is our services.",
    body: (
      <>
        The <em>how</em> — the continuous review, the analytics, the reporting, the advice — is
        DTG&rsquo;s core services, applied to the pit.
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
      en: "Tailings",
      title: "Tailings storage facilities",
      desc: "Slow movement, hidden in noise — surfaced with InSAR and ML.",
      href: "/applications/tailings-storage-facilities",
      image: "/images/applications/tsf.png",
      imageAlt: "Aerial view of a tailings storage facility embankment and pond.",
    },
    {
      en: "Underground",
      title: "Underground mining",
      desc: "1,000km+ of convergence monitoring delivered.",
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
    heading: "Monitoring an open pit?",
    body: "Tell us about your slopes and your setup — we'll show you how DTG would support it.",
    button: { label: "Talk to DTG", href: "/contact" },
  },
};

export function OpenPitDetail() {
  return <EnvironmentDetailPage data={openPitDetail} />;
}
