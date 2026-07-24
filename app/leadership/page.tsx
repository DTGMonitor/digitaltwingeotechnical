import { permanentRedirect } from "next/navigation";

// COMPLIANCE REDIRECT (2026-07-18, user-authorised): this orphan legacy leadership page was LIVE
// (200) and named a sensor vendor in a founder bio. The RULE (CLAUDE.md §3): a vendor name is fine
// in an agnostic technical list, but NOT in a bio/history, as a "partner", or with the vendor's
// metrics — the bio framing was the violation, not the bare name. The nav's "Leadership" item
// points to /about/leadership, which already redirects to /about#leadership; this standalone
// /leadership route was an unlinked straggler. Redirected to match. The recomposed leadership
// section on /about carries the same history without the bio-level vendor reference.
export default function Page() {
  permanentRedirect("/about#leadership");
}
