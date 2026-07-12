import { permanentRedirect } from "next/navigation";

// Sprint 3: /about consolidated into a single page. This child route permanently (308)
// redirects to the matching section anchor. Route retained (not deleted) to preserve inbound links.
export default function Page() {
  permanentRedirect("/about#technical-assurance");
}
