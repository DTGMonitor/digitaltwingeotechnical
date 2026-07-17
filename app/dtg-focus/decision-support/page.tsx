import { permanentRedirect } from "next/navigation";

// The three DTG Focus(TM) capability children ("Built one level deeper" + 3 bullets) were thin and
// their content is superseded by the rebuilt /dtg-focus page (branch dtg-focus-rebuild, 2026-07-18).
// 308-redirect, routes retained to preserve inbound links. The "AI-Assisted Data Cleansing" title
// that led with "AI-" (contra the site's AI position) is gone with this fold-in.
export default function Page() {
  permanentRedirect("/dtg-focus");
}
