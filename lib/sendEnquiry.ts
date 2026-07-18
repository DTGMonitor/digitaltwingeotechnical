/**
 * Provider-agnostic mail seam.
 *
 * ⚠️ DELIBERATELY UNWIRED — awaiting owner decision (Contact brief §6.6).
 * The mail provider (Resend / Postmark / SES / …) and its API key are the owner's choice and a
 * billing decision, so no provider is baked in here. Everything else — validation, honeypot,
 * rate limiting, reply-to, and the full UI state machine — is finished and testable without it.
 *
 * CURRENT BEHAVIOUR: with no CONTACT_MAIL_API_KEY set, this THROWS. That is intentional and is
 * what makes the visible error state real rather than theoretical: the form genuinely fails, the
 * user genuinely keeps their text, and the error genuinely appears. It must never silently
 * succeed — a form that reports success while sending nothing is the worst possible outcome, and
 * strictly worse than the mailto: link this replaced.
 *
 * TO WIRE IT UP (one function, one env var):
 *   1. Choose a provider and add its key as CONTACT_MAIL_API_KEY.
 *   2. Replace the throw below with that provider's send call.
 *   3. Nothing else changes — the route, the form and the states are provider-agnostic.
 *
 * Example (Resend), for illustration only — do not enable without the owner's sign-off:
 *   const res = await fetch("https://api.resend.com/emails", {
 *     method: "POST",
 *     headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
 *     body: JSON.stringify({ from: "DTG website <noreply@dtgeotech.com>", to, reply_to: replyTo, subject, text }),
 *   });
 *   if (!res.ok) throw new Error(`Mail provider returned ${res.status}`);
 */

export type Enquiry = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
  const key = process.env.CONTACT_MAIL_API_KEY;

  if (!enquiry.to || !enquiry.replyTo) {
    throw new Error("sendEnquiry called without a recipient or reply-to address");
  }

  if (!key) {
    throw new Error(
      "CONTACT_MAIL_API_KEY is not set — no mail provider is wired up yet (awaiting owner decision). " +
        "The enquiry was NOT sent; the UI will show its error state.",
    );
  }

  // A key exists but no provider has been chosen — fail loudly rather than pretend to send.
  throw new Error(
    "A mail key is present but sendEnquiry() has no provider implementation. " +
      "Add the provider's send call here (see the file header).",
  );
}
