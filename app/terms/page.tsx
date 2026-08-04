import type { Metadata } from "next";

// TERMS — engagement terms, deliberately SEPARATE from /privacy (which is scoped only to website
// enquiry data). Created 2026-08 to home the IP-ownership clause, which is an engagement-terms
// statement (client monitoring data vs DTG's IP), not a website-data statement.
//
// Minimal by design: it carries the one counsel-cleared clause for now. Add further engagement
// terms here as they are confirmed — do NOT put engagement terms back into /privacy.
//
// Reuses the shared legal-page styling (.pv-* in globals.css) so the two legal pages read as one
// system. If those classes are ever renamed, update this page with them.

export const metadata: Metadata = {
  title: "Terms | DTG",
  description:
    "The basis on which Digital Twin Geotechnical provides its monitoring, analytics and decision-support services.",
};

const UPDATED = "4 August 2026";

export default function TermsPage() {
  return (
    <main className="pv-page">
      <header className="pv-hero">
        <div className="site-container">
          <span className="pv-eyebrow">Legal</span>
          <h1 className="pv-title">Terms</h1>
          <p className="pv-lead">
            The basis on which DTG provides its monitoring, analytics and decision-support services.
          </p>
        </div>
      </header>

      <div className="site-container pv-body">
        <p className="pv-updated">Last updated {UPDATED}</p>

        <section aria-labelledby="tm-ip">
          <h2 id="tm-ip">Client data and intellectual property</h2>
          {/* Peter's exact wording, counsel-cleared. */}
          <p>
            Client source data remains theirs; DTG retains ownership of its software, analytics,
            workflows, methodologies and background IP.
          </p>
        </section>
      </div>
    </main>
  );
}
