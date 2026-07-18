import { permanentRedirect } from "next/navigation";

// COMPLIANCE REDIRECT (2026-07-18, user-authorised): this orphan legacy route was LIVE (200,
// statically prerendered, zero inbound links) and published the RETIRED DTG Focus™ framing that
// CLAUDE.md §3 was amended to kill — a status badge reading "Future Platform Vision - Currently
// Under Development", "DTG Focus™ is being developed to…", and "single decision-support platform"
// (a claim of complete integrated coverage). §3 forbids all of it: never "in development",
// "roadmap", "coming soon", "not yet available" or "preview", and never claim full coverage exists.
//
// WHY IT SURVIVED EARLIER SWEEPS — worth reading before the next audit: CLAUDE.md §5 records this
// route as "verified clean by rendered-HTML sweep", and commit e668ba2 already edited this very
// file for the "not a hardware vendor" claim. Both were true. Both were scoped to a DIFFERENT
// category (client names, sensor brands, the hardware claim), so the Focus framing was never
// checked and stayed live. A category nobody enumerates cannot fail an audit — third proof of that
// shape on this project, after the raised-dark surface and the muted token.
//
// Redirected rather than rewritten (user's call): /dtg-focus is the live, recomposed, compliant
// Focus page. A second Focus page is the divergence pattern — two things meant to say the same
// thing, drifting apart. One page, one truth.
//
// NB this orphans components/geotechnical.tsx entirely (FocusPillars / FocusVision / Workflow /
// MonitoringCentreVisual / IntegrationVisual — this file was its only importer). Left in place on
// purpose: CLAUDE.md §2.3 forbids cleanup as a side effect. It is on the dead-code cleanup list.
export default function Page() {
  permanentRedirect("/dtg-focus");
}
