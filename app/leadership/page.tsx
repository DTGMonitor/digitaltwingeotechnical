import { permanentRedirect } from "next/navigation";

// COMPLIANCE REDIRECT (2026-07-18, user-authorised): this orphan legacy leadership page was LIVE
// (200) and named a sensor brand (GroundProbe) in a founder bio — a locked-rule leak. The nav's
// "Leadership" item points to /about/leadership, which already redirects to /about#leadership; this
// standalone /leadership route was an unlinked straggler. Redirected to match. The recomposed
// leadership section on /about carries the same history without naming any vendor.
export default function Page() {
  permanentRedirect("/about#leadership");
}
