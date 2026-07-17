import { permanentRedirect } from "next/navigation";

// COMPLIANCE REDIRECT (2026-07-18, user-authorised): this orphan legacy route (not in nav,
// superseded by the recomposed pages) was LIVE and leaking locked-category content — client names
// and/or sensor brand names in rendered HTML. Redirected to its live equivalent to remove the
// exposure. "Not in nav" is not a defence in discovery: a 200 page is published and indexable.
export default function Page() {
  permanentRedirect("/applications/infrastructure-civil");
}
