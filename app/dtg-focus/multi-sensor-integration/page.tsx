import { permanentRedirect } from "next/navigation";

// INTERIM REDIRECT (2026-07-19, owner-directed content-discipline pass).
// Multi-sensor integration as a standalone DTG Focus sub-page is retired for now; its subject —
// connecting multi-vendor monitoring into one governed view — is the Technology Integration
// service, which is the live, fuller treatment. Redirect there rather than maintain a thin
// duplicate that also carried "every sensor / all sources" completeness framing.
//
// The owner MAY later rebuild this as a full DTG Focus capability page; this redirect is the
// interim decision, not a permanent retirement. The detailPages["dtg-focus/multi-sensor-integration"]
// data is now unrendered (dead) — left in place for the dead-code pass, not wired up here.
//
// permanentRedirect() issues HTTP 308 (permanent) — the repo convention for every permanent
// redirect, and owner-accepted here (2026-07-19). 308 is a permanent, method-preserving redirect
// that browsers and search engines honour as permanent.
export default function Page() {
  permanentRedirect("/services/technology-integration");
}
