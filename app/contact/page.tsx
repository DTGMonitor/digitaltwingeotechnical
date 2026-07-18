import type { Metadata } from "next";
import Image from "next/image";
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
            {/* Triad claims are owner-sign-off gated ("no ticketing layer", "held in
                confidence") — shipped as written in the approved mockup. */}
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
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 4 · RMC — .appsx-env half-bleed device. */}
      <section className="cx-env" aria-labelledby="cx-env-title">
        <div className="cx-env__media">
          <Image
            src="/images/dtg-command-centre.png"
            alt=""
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            className="cx-env__img"
          />
        </div>
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
            <p className="cx-env__disclosure">
              Imagery is AI-generated placeholder pending licensed photography.
            </p>
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
