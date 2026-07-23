/**
 * Mail seam for the /contact enquiry form.
 *
 * Provider-agnostic BY DESIGN: the route, the form and all its UI states know nothing about who
 * sends the mail. Swapping Resend for Postmark/SES means replacing the body of `deliver()` below
 * and nothing else.
 *
 * ⚠️ NO KEY IS COMMITTED. `CONTACT_MAIL_API_KEY` is supplied as an environment variable by the
 * owner. With no key set this THROWS, and that is deliberate: the route turns the throw into a
 * 502, and the form turns the 502 into its visible error state with the user's text preserved.
 * It must never silently succeed — a form that reports success while sending nothing is strictly
 * worse than the mailto: link this replaced.
 *
 * BEFORE LAUNCH: SPF and DKIM records for dtgeotech.com must exist in Resend, or replies land in
 * spam. The exact records are in docs/CONTACT-FORM.md.
 */

export type Enquiry = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

/**
 * The From address must be on a domain verified in Resend. It is deliberately NOT the enquirer's
 * address — sending as them would fail DMARC on their domain and land in spam. Their address goes
 * in reply_to, so hitting Reply in the inbox answers them directly.
 */
const FROM = process.env.CONTACT_MAIL_FROM ?? "DTG website <noreply@dtgeotech.com>";

export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
  const key = process.env.CONTACT_MAIL_API_KEY;

  if (!enquiry.to || !enquiry.replyTo) {
    throw new Error("sendEnquiry called without a recipient or reply-to address");
  }

  if (!key) {
    throw new Error(
      "CONTACT_MAIL_API_KEY is not set — the enquiry was NOT sent. " +
        "The UI will show its error state, which is the intended behaviour: never fail silently.",
    );
  }

  await deliver(key, enquiry);
}

/** Resend implementation. Replace this function body to change provider — nothing else moves. */
async function deliver(key: string, { to, replyTo, subject, text }: Enquiry): Promise<void> {
  // Called with fetch rather than the SDK: one request does not justify a dependency, and a
  // provider swap then means a code change only, not an npm change as well.
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    // The body is read for the SERVER LOG only — provider responses can carry detail that must
    // not reach the browser. The route returns a generic failure to the client.
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend returned ${response.status}: ${detail.slice(0, 300)}`);
  }
}
