import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionReveals } from "@/components/sections";
import { ContactForm } from "@/components/contact/ContactForm";
import { Globe } from "@/components/contact/Globe";
import { YogyaClock } from "@/components/contact/YogyaClock";

// CONTACT — rebuilt 2026-07-19 onto the --c-* theme layer as the .cx-* family.
//
// The legacy .contact-* body (~80 elements) was 100% theme-blind and has been deleted outright,
// along with the mailto-only ContactForm it used. Every section here is an existing device from
// the rebuilt pages, per the owner's direction to follow Applications/About:
//   hero      = .appsx-hero    (gradient, 82vh, bottom-anchored)
//   intro     = .appsx-intro   (2-col, centre-aligned)
//   briefing  = .ab-how        (deep-teal band, sticky head + numbered stages — the stages ARE
//                               the form)
//   RMC       = .appsx-env     (half-bleed media 50vw + copy on the ruler)
//   where     = .ab-caps-ish   (editorial rows) + decorative globe
//
// DELIBERATELY ABSENT (do not add):
//  - NO CTA band. The site-wide CTA exists to drive traffic TO /contact; here it is circular.
//    The page itself is the call to action.
//  - NO careers content of any kind (owner: DTG is not recruiting).
//  - NO response-time promise. No measured SLA exists, so any figure would be invented.
//  - NO phone numbers, street addresses, coordinates or named people — none exist to publish.
//  - InternalHero is NOT used and NOT touched: 13 other routes render it.

export const metadata: Metadata = {
  title: "Contact | DTG",
  description:
    "Start a monitoring conversation with DTG. Share your monitoring context and the decision it needs to support.",
};

/**
 * 🔴 LAUNCH GATE — the enquiry form is OFF unless CONTACT_FORM_ENABLED === "true".
 *
 * Chosen over an unlinked deploy because /contact is in the primary nav and cannot be unlinked
 * without breaking the site.
 *
 * ⚠️ THIS IS A BUILD-TIME FLAG, NOT A RUNTIME ONE. /contact is statically prerendered, so
 * process.env is read when the page is built. Changing the variable on the host and restarting
 * does NOT flip it — verified, after an earlier version of this comment wrongly claimed it would.
 * Set the variable, then REBUILD/REDEPLOY. That is fine for a gate flipped once at launch, and
 * keeps the page static; making it runtime would mean force-dynamic on a page that has no other
 * reason to be dynamic.
 *
 * Two things must be true before it is switched on:
 *   1. The owner has approved the /privacy text (currently DRAFT — the form collects personal
 *      data and the policy is what it points at).
 *   2. CONTACT_MAIL_API_KEY is set AND the SPF/DKIM records in docs/CONTACT-FORM.md exist in
 *      Resend, or replies land in spam.
 *
 * While OFF the section keeps its heading and its "what happens next" triad, and offers the
 * email address instead of the fields — so the page reads as finished rather than broken. It
 * does NOT show a form that cannot send: asking someone to type a briefing into a dead form is
 * the exact failure this rebuild set out to remove.
 */
const FORM_ENABLED = process.env.CONTACT_FORM_ENABLED === "true";

const OFFICES = [
  {
    label: "Office",
    place: "Brisbane, Queensland, Australia",
    desc: "DTG Headquarters",
  },
  {
    label: "Office",
    place: "Perth, Western Australia",
    desc: "DTG Corporate",
  },
  {
    label: "Operations",
    place: "Yogyakarta, Indonesia",
    desc: "Remote Monitoring Centre",
  },
];

export default function ContactPage() {
  return (
    <main className="cx-page">
      <SectionReveals attr="cx-reveal" />

      {/* 1 · HERO — .appsx-hero device. Bespoke to this route. */}
      <header className="cx-hero" aria-labelledby="contact-hero-title">
        <div className="cx-hero__content site-container" data-cx-reveal>
          <span className="cx-eyebrow cx-hero__eyebrow">Contact</span>
          <h1 id="contact-hero-title" className="cx-hero__title">
            Start a monitoring conversation
          </h1>
          <p className="cx-hero__lead">
            Open pits, tailings, underground or civil infrastructure — bring the challenge and the
            decision it needs to support.
          </p>
          <div className="cx-hero__btns">
            <Link href="#briefing" className="cx-btn">
              Share your context <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <a href="mailto:info@dtgeotech.com" className="cx-btn cx-btn--ghost">
              info@dtgeotech.com
            </a>
          </div>
        </div>
        <span className="cx-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* 2 · INTRO — .appsx-intro device. */}
      <section className="cx-intro" aria-labelledby="cx-intro-title">
        <div className="site-container cx-intro__grid" data-cx-reveal>
          <div>
            <span className="cx-eyebrow">First contact</span>
            <h2 id="cx-intro-title" className="cx-h2">
              Every engagement starts with a briefing
            </h2>
          </div>
          <p>
            A useful first note tells us three things: <b>the asset</b>,{" "}
            <b>the behaviour that concerns you</b>, and{" "}
            <b>the decision the data needs to support</b>. A few sentences is enough — we&rsquo;ll
            bring the questions.
          </p>
        </div>
      </section>

      {/* 3 · THE BRIEFING — .ab-how device: deep-teal band, sticky head, numbered stages. */}
      <section className="cx-brief" id="briefing" aria-labelledby="cx-brief-title">
        <div className="site-container cx-brief__grid">
          <div className="cx-brief__stick" data-cx-reveal>
            <div className="cx-brief__rule" aria-hidden="true" />
            <span className="cx-eyebrow">The briefing</span>
            <h2 id="cx-brief-title" className="cx-brief__h">
              Share your monitoring context
            </h2>
            <p>Four short answers, straight to the team.</p>
            {/* ⚠️ OPERATIONAL CLAIMS — owner-confirmed 2026-07-19, and they are commitments,
                not copy. If enquiries ever move into a ticketing/helpdesk tool, the "no
                ticketing layer" line MUST be removed. Likewise "a human reply … not an
                autoresponder" fails the moment an autoresponder is switched on. Anyone wiring
                automation into info@dtgeotech.com owns updating this list. */}
            <ul className="cx-next" aria-label="What happens next">
              <li>
                <b>One inbox.</b> It lands at{" "}
                <a href="mailto:info@dtgeotech.com">info@dtgeotech.com</a> — no ticketing layer
              </li>
              <li>
                <b>A human reply.</b> By email, from DTG — not an autoresponder
              </li>
              <li>
                <b>Held in confidence.</b> Your operational context stays yours
              </li>
            </ul>
          </div>

          <div data-cx-reveal>
            {FORM_ENABLED ? (
              <ContactForm />
            ) : (
              // REVERT AT FORM LAUNCH: when CONTACT_FORM_ENABLED flips to "true", this whole
              // fallback is replaced by <ContactForm /> above. Its wording deliberately presents
              // email as the current, first-class channel — NOT as a stopgap for an unfinished
              // feature (no "coming soon", no "being finished"). Both are true; the framing is
              // the point.
              <div className="cx-formoff">
                <p className="cx-formoff__lead">
                  Email is the way to reach the team — it goes straight to the engineers at DTG,
                  and you&rsquo;ll get a reply from a person, not an autoresponder.
                </p>
                <a className="cx-btn" href="mailto:info@dtgeotech.com">
                  info@dtgeotech.com
                </a>
                <p className="cx-formoff__hint">
                  Tell us the asset, the behaviour that concerns you, and the decision the data
                  needs to support — a few sentences is enough to start.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4 · RMC — .appsx-env half-bleed device. Media is the family gradient treatment: the
          AI-generated placeholder image and its "AI-generated placeholder" caption were removed
          together (2026-07-19 content-discipline pass) — never keep the image with the caption
          gone. Restore a licensed photograph here when one exists. */}
      <section className="cx-env" aria-labelledby="cx-env-title">
        <div className="cx-env__media" aria-hidden="true" />
        <div className="site-container">
          <div className="cx-env__copy" data-cx-reveal>
            <span className="cx-eyebrow">Remote Monitoring Centre — Yogyakarta</span>
            <h2 id="cx-env-title" className="cx-env__h">
              The ground doesn&rsquo;t keep office hours
            </h2>
            {/* CLAIM IS SIGN-OFF GATED AND EXACT: "staffed for out-of-hours monitoring".
                NEVER "24/7", "around the clock" or "always on" without written confirmation of
                genuine 24/7/365 coverage. Keep this wording identical everywhere it appears. */}
            <p>
              Movement doesn&rsquo;t wait for Monday. DTG&rsquo;s Remote Monitoring Centre in
              Yogyakarta is staffed for out-of-hours monitoring — engineering eyes on your
              instrumentation when your own team is off site.
            </p>
            <YogyaClock />
          </div>
        </div>
      </section>

      {/* 5 · WHERE WE ARE — editorial rows + decorative globe. */}
      <section className="cx-offices" aria-labelledby="cx-offices-title">
        <div className="site-container">
          <div data-cx-reveal>
            <span className="cx-eyebrow">Where we are</span>
            <h2 id="cx-offices-title" className="cx-offices__h">
              On the ground in Australia and Indonesia
            </h2>
          </div>
          <div className="cx-where" data-cx-reveal>
            <div className="cx-globewrap">
              <Globe />
            </div>

            <div>
              {OFFICES.map(({ label, place, desc }) => (
                <div className="cx-cap" key={place}>
                  <span className="cx-cap__n">{label}</span>
                  <span>
                    <span className="cx-cap__place">{place}</span>
                    <span className="cx-cap__desc">{desc}</span>
                  </span>
                </div>
              ))}

              <span className="cx-connect__label">Connect</span>
              <a className="cx-cap" href="mailto:info@dtgeotech.com">
                <span className="cx-cap__n">Email</span>
                <span>
                  <span className="cx-cap__place">info@dtgeotech.com</span>
                  <span className="cx-cap__desc">Every enquiry, one address</span>
                </span>
                <span className="cx-cap__go" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              </a>
              <a
                className="cx-cap"
                href="https://www.linkedin.com/company/digitaltwingeotechnical/"
                target="_blank"
                rel="noopener"
              >
                <span className="cx-cap__n">LinkedIn</span>
                <span>
                  <span className="cx-cap__place">Digital Twin Geotechnical</span>
                  <span className="cx-cap__desc">Follow DTG on LinkedIn</span>
                </span>
                <span className="cx-cap__go" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
