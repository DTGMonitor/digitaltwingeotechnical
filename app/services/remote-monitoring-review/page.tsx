import { permanentRedirect } from "next/navigation";

// Phase E: duplicate of /services/remote-monitoring — permanently redirect (308).
export default function Page() {
  permanentRedirect("/services/remote-monitoring");
}
