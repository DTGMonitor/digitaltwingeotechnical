import type { Metadata } from "next";

// PRIVACY POLICY — ⚠️ DRAFT, PENDING LEGAL REVIEW (created 2026-07-19).
//
// Written to unblock the /contact enquiry form, which collects and transmits personal data and
// therefore needs a policy to point at. It is a plain-language description of what the form
// ACTUALLY does — nothing here is boilerplate copied from another company, and nothing claims a
// certification, standard or legal basis that has not been verified.
//
// 🔴 THE OWNER MUST APPROVE THIS TEXT BEFORE THE FORM GOES LIVE. Two things in particular need a
// human decision, and both are marked in the copy below:
//   1. The retention period (currently stated as "as long as needed to answer, then reviewed
//      periodically" — deliberately vague because no retention schedule exists yet).
//   2. Whether DTG is subject to the Australian Privacy Act 1988. That turns on annual turnover
//      and business type; it is NOT something this file should assert. The copy therefore
//      describes practice and offers a contact route, without claiming or disclaiming coverage.
//
// If a mail provider other than Resend is chosen, update the "where it goes" section — naming the
// processor accurately is the whole point of that paragraph.

export const metadata: Metadata = {
  title: "Privacy policy | DTG",
  description:
    "How Digital Twin Geotechnical handles the information you send through this website.",
};

const UPDATED = "19 July 2026";

export default function PrivacyPage() {
  return (
    <main className="pv-page">
      <header className="pv-hero">
        <div className="site-container">
          <span className="pv-eyebrow">Legal</span>
          <h1 className="pv-title">Privacy policy</h1>
          <p className="pv-lead">
            How DTG handles the information you send us through this website.
          </p>
        </div>
      </header>

      <div className="site-container pv-body">
        <p className="pv-updated">Last updated {UPDATED}</p>

        <section aria-labelledby="pv-collect">
          <h2 id="pv-collect">What we collect</h2>
          <p>
            If you use the enquiry form on our contact page, we collect the information you type
            into it:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your organisation, if you choose to give it — this field is optional</li>
            <li>Your email address</li>
            <li>The monitoring context you describe in the message field</li>
          </ul>
          <p>
            We also record the time the enquiry was sent and the IP address it came from. That is
            used only to limit automated abuse of the form, and for nothing else.
          </p>
          <p>
            This website does not use advertising or analytics cookies, and does not track you
            across other sites.
          </p>
        </section>

        <section aria-labelledby="pv-why">
          <h2 id="pv-why">Why we collect it</h2>
          <p>
            To read your enquiry and reply to it. That is the only reason. We do not add you to a
            mailing list, we do not send marketing on the basis of an enquiry, and we do not sell,
            rent or share your details with anyone for their own purposes.
          </p>
        </section>

        <section aria-labelledby="pv-where">
          <h2 id="pv-where">Where it goes</h2>
          <p>
            Your enquiry is delivered by email to <strong>info@dtgeotech.com</strong>, which is
            monitored by the DTG team. It is not routed into a ticketing or helpdesk system.
          </p>
          <p>
            Delivery is handled on our behalf by <strong>Resend</strong>, an email service
            provider. Your message passes through their systems in order to reach our inbox, and
            is subject to their security and retention practices as well as ours.
          </p>
          <p>
            DTG operates in Australia and Indonesia, and our email is hosted with third-party
            providers. Your information may therefore be stored or processed outside the country
            you sent it from.
          </p>
        </section>

        <section aria-labelledby="pv-keep">
          <h2 id="pv-keep">How long we keep it</h2>
          {/* ⚠️ OWNER: no retention schedule exists yet. This wording describes intent honestly
              rather than inventing a specific period. If you set a real schedule (e.g. "24
              months"), replace this paragraph with it — a stated period is stronger, but only
              if it is one DTG actually follows. */}
          <p>
            Enquiries stay in our email system for as long as they are useful to the conversation
            they started, and are reviewed periodically. We are working towards a defined retention
            period; until then, you can ask us to delete your enquiry at any time and we will.
          </p>
        </section>

        <section aria-labelledby="pv-rights">
          <h2 id="pv-rights">Seeing or removing your information</h2>
          <p>
            Email <a href="mailto:info@dtgeotech.com">info@dtgeotech.com</a> and ask. You can
            request a copy of the enquiry you sent, ask us to correct it, or ask us to delete it.
            We will action deletion requests and confirm when it is done.
          </p>
          <p>
            If you are not satisfied with how we have handled your information, tell us at the same
            address and we will work through it with you.
          </p>
        </section>

        <section aria-labelledby="pv-security">
          <h2 id="pv-security">Keeping it secure</h2>
          <p>
            The form is submitted over an encrypted connection, and access to the enquiry inbox is
            limited to DTG staff who need it. No system is perfectly secure, so please do not send
            confidential operational data, credentials or safety-critical information through the
            form — tell us it exists and we will arrange a secure channel.
          </p>
        </section>

        <section aria-labelledby="pv-changes">
          <h2 id="pv-changes">Changes to this policy</h2>
          <p>
            If we change how we handle enquiry information, we will update this page and the date
            at the top of it.
          </p>
        </section>

        <section aria-labelledby="pv-contact">
          <h2 id="pv-contact">Contact</h2>
          <p>
            Questions about this policy go to{" "}
            <a href="mailto:info@dtgeotech.com">info@dtgeotech.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
