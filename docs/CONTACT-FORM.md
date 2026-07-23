# Contact form — configuration and launch checklist

The `/contact` enquiry form posts to `app/api/contact/route.ts`, which sends an email via
`lib/sendEnquiry.ts`. This note covers what has to be configured before it can go live.

**Nothing here contains a key.** All secrets are environment variables supplied by the owner.

---

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `CONTACT_FORM_ENABLED` | yes, to show the form | Launch gate. The form renders **only** when this is exactly `"true"`. Any other value (or unset) shows an email fallback instead. **Build-time — see below.** |
| `CONTACT_MAIL_API_KEY` | yes, to send | Resend API key. **Never commit this.** With no key the send throws, the API returns 502, and the form shows its visible error state. |
| `CONTACT_MAIL_FROM` | optional | From address. Defaults to `DTG website <noreply@dtgeotech.com>`. Must be on a domain verified in Resend. |

### ⚠️ `CONTACT_FORM_ENABLED` is read at BUILD time

`/contact` is statically prerendered, so the flag is baked in when the site is built. **Setting the
variable and restarting the server does not flip it — you must rebuild/redeploy.** Verified, not
assumed. This is fine for a gate that is flipped once at launch, and it keeps the page static;
making it runtime would force the page to render dynamically for no other reason.

`CONTACT_MAIL_API_KEY` is different — it is read inside the API route, which is a serverless
function, so it takes effect at runtime without a rebuild.

### Why the From address is not the enquirer

Replies go to the enquirer via the `reply_to` header, not by sending *as* them. Sending as
`someone@theircompany.com` from DTG's infrastructure fails DMARC on **their** domain and gets the
mail junked or rejected. Hitting Reply in the `info@dtgeotech.com` inbox still answers the enquirer
directly.

---

## 🔴 DNS records — required before launch

**Without these, replies land in spam.** Add them in Resend (Domains → Add Domain →
`dtgeotech.com`), then add the records Resend shows you to the `dtgeotech.com` DNS zone.

> ⚠️ **Resend generates the exact values per domain — copy them from the Resend dashboard, do not
> transcribe from here.** The table below is the *shape* of what to expect, so the DNS change can
> be scoped and raised with whoever administers the zone before you start.

| # | Type | Host / Name | Value | Notes |
|---|---|---|---|---|
| 1 | `MX` | `send.dtgeotech.com` | `feedback-smtp.<region>.amazonses.com` (priority `10`) | Bounce/complaint handling. Region matches the one chosen in Resend (e.g. `us-east-1`, `eu-west-1`, `ap-northeast-1`). |
| 2 | `TXT` | `send.dtgeotech.com` | `v=spf1 include:amazonses.com ~all` | **SPF.** Authorises Resend to send for the subdomain. |
| 3 | `TXT` | `resend._domainkey.dtgeotech.com` | `p=MIGfMA0GCSq…` (long public key from Resend) | **DKIM.** Cryptographically signs the mail. The selector is normally `resend`. |
| 4 | `TXT` | `_dmarc.dtgeotech.com` | `v=DMARC1; p=none; rua=mailto:dmarc@dtgeotech.com` | **DMARC.** Optional for delivery but strongly recommended. Start at `p=none` (monitor only), review reports, then tighten to `quarantine` and `reject`. |

### Two things worth flagging to whoever runs the DNS

- **If `dtgeotech.com` already has an SPF record**, do **not** add a second one — a domain with two
  SPF records fails SPF entirely. Merge the `include:` into the existing record instead. This is the
  single most common way this setup breaks.
- **Using the `send.` subdomain** (Resend's default) keeps this separate from whatever sends normal
  DTG staff mail, so it cannot disturb existing email. Keep it that way unless there is a reason not
  to.

### Verifying

1. Resend's dashboard shows each record as Verified — propagation is usually minutes, but allow
   up to 24 hours.
2. Send a real enquiry to a Gmail **and** an Outlook address. In Gmail, use *Show original* and
   confirm `SPF: PASS`, `DKIM: PASS`, `DMARC: PASS`.
3. Confirm the mail arrives in the inbox, not Junk, on both.
4. Hit Reply and confirm it addresses the enquirer, not `noreply@`.

---

## Anti-spam

No CAPTCHA (owner decision — no Turnstile). Two measures are in place:

- **Honeypot** — a `company` field, off-screen and `aria-hidden`, unreachable by keyboard. A
  submission with it filled gets a `200` and is discarded, so bots learn nothing from the response.
- **Rate limit** — 5 submissions per IP per 10 minutes.

> ⚠️ **The rate limiter is in-memory and per-instance.** It resets on redeploy and does not
> coordinate across instances. That is adequate for spam control on single-instance hosting, and it
> is **not** a security boundary. If the site moves to multi-instance or serverless-per-request
> hosting, replace it with a shared store (Redis / Upstash) or it will only limit per instance.
> The same caveat is recorded in `app/api/contact/route.ts`.

---

## Launch checklist

- [ ] Owner has approved the `/privacy` text (currently **DRAFT — pending legal review**)
- [ ] `CONTACT_MAIL_API_KEY` set in the host's environment
- [ ] Domain verified in Resend, all DNS records showing Verified
- [ ] Test enquiry delivered to inbox (not Junk) on Gmail and Outlook, SPF/DKIM/DMARC all PASS
- [ ] Reply-to confirmed to address the enquirer
- [ ] `CONTACT_FORM_ENABLED=true` set **last**, once everything above passes

## Changing provider

Replace the body of `deliver()` in `lib/sendEnquiry.ts`. The API route, the form and every UI state
are provider-agnostic and do not change. If you switch, update the processor named in the
`/privacy` "Where it goes" section — naming it accurately is the point of that paragraph.
