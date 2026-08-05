# Go-live runbook — DTG at www.digitaltwingeotechnical.com

The public website serves from **`www.digitaltwingeotechnical.com`** on **Vercel**, with the apex
**`digitaltwingeotechnical.com` redirecting to `www`**. Company **email stays on `dtgeotech.com`** and
is **out of scope** for any web-DNS work here (see the guardrail below). This runbook is what to do and
how to confirm each part.

> ⚠️ **Two separate domains — do not conflate them.**
> - **Website:** `digitaltwingeotechnical.com` (apex → `www`, `www` = primary, on Vercel).
> - **Email:** `dtgeotech.com` (`info@`, `noreply@`, staff addresses). **Web DNS changes must NOT touch
>   `dtgeotech.com`'s MX or other mail records.** The two zones are independent; keep them that way.

## Where things stand (verified 2026-08-05)
- **The site is DEPLOYED and LIVE on Vercel.** `https://www.digitaltwingeotechnical.com` returns `200`
  and serves the DTG app (`Server: Vercel`, region `sin1`); the apex `https://digitaltwingeotechnical.com`
  returns `308` and redirects to `www`. The apex↔www split is already in place.
- **DNS (verified today):** apex `digitaltwingeotechnical.com` → **A `76.76.21.21`** (Vercel); `www` →
  **CNAME → `*.vercel-dns.com`** (resolves into Vercel's edge). Both hold valid TLS.
- **✅ The canonical-domain fix (`c7613ac`) is LIVE in production.** Vercel auto-deploys `main`, so the
  push rebuilt production automatically; re-verified — the live `sitemap.xml`/`robots.txt`/OG all emit
  `www.digitaltwingeotechnical.com` (0 `dtgeotech.com`). No manual redeploy was needed.
- **`dtgeotech.com`** still resolves to a parking IP (`3.33.251.168`) for the web root and is the
  **email** domain — leave its zone alone except for any *email* records handled separately (step 5).
- This is a **Next.js server app** (App Router, server `/api/contact`, no static export) — Vercel runs it.
- The contact form is **gated OFF** (`CONTACT_FORM_ENABLED` is a **build-time** flag). Details in
  [`docs/CONTACT-FORM.md`](./CONTACT-FORM.md).

---

## 1. Vercel project — DONE (verify only)
The project already exists and auto-serves `main`. Confirm in the Vercel dashboard:
1. Project imported from `DTGMonitor/digitaltwingeotechnical`, framework **Next.js**, build `next build`.
2. **Production Branch = `main`** (Settings → Git) — every push to `main` auto-deploys to production.
3. **Domains** (Settings → Domains) show `www.digitaltwingeotechnical.com` (primary) and
   `digitaltwingeotechnical.com` (**redirect → www**), both **Valid Configuration**.

## 2. Environment variables (Settings → Environment Variables)
None are committed to the repo — all secrets are supplied here.
| Name | Value | Scope | Notes |
|---|---|---|---|
| `CONTACT_MAIL_API_KEY` | (Resend API key) | Production | Required for the contact form to send. |
| `CONTACT_FORM_ENABLED` | leave **unset / `false`** for now | Production | ⚠️ **Build-time flag** — see step 6. |

⚠️ `CONTACT_FORM_ENABLED` is read at **build time** (the page is statically prerendered). Changing it
later does **not** take effect until you **redeploy**. Keep it off until step 6.

## 3. Canonical-domain fix in production — DONE (auto-deployed)
Vercel auto-deploys `main`, so pushing `c7613ac` rebuilt production automatically — **no manual redeploy
was needed.** Re-verified live: `curl -s https://www.digitaltwingeotechnical.com/sitemap.xml` shows `<loc>`
URLs on **`www.digitaltwingeotechnical.com`** (0 `dtgeotech.com`), `robots.txt` points at the www sitemap,
and the home page `og:`/`twitter:` URLs resolve to the www domain. Nothing to do here unless a future
domain change needs the same treatment (edit `metadataBase` + both `BASE` constants, push — it redeploys).

## 4. Domain + DNS — DONE (verify + guardrail)
The web domain is already attached and pointed at Vercel; this section is now **verification**, not setup.
1. Vercel → project → **Settings → Domains**: `www.digitaltwingeotechnical.com` primary,
   `digitaltwingeotechnical.com` set to **redirect to www**.
2. DNS at the `digitaltwingeotechnical.com` registrar (use the values **Vercel displays** if they differ):
   - Apex `digitaltwingeotechnical.com`: **A → `76.76.21.21`** (or ALIAS/ANAME to Vercel).
   - `www`: **CNAME → `cname.vercel-dns.com`**.
3. ✅ Verify: `nslookup www.digitaltwingeotechnical.com` resolves into Vercel; `curl -I` shows Vercel
   headers (`x-vercel-id`); apex `curl -I https://digitaltwingeotechnical.com` returns `308` → `www`.

> 🔒 **Guardrail — do NOT modify `dtgeotech.com` here.** The web-DNS work above lives entirely in the
> `digitaltwingeotechnical.com` zone. `dtgeotech.com` carries DTG **email**; touching its MX/mail records
> as part of pointing the *website* at Vercel would break mail. Email records are step 5, and only if the
> form is set to send from `dtgeotech.com` (a decision made at Resend setup — see below).

## 5. Email-deliverability DNS (only when the contact form is set up)
This is **independent** of pointing the website at Vercel — it exists so the contact form's mail isn't
spam-filtered. It is **deferred until Resend is configured**, and it hinges on one decision:

> ❓ **DECISION AT RESEND SETUP — which domain does the form send FROM?** The SPF / DKIM / DMARC records
> go on **whichever domain the form's From address uses**, and that domain is **not decided yet**:
> - **If the form sends from `dtgeotech.com`** (e.g. `noreply@dtgeotech.com`, the current code default),
>   the records go in the **`dtgeotech.com`** zone — and this is the *one* place web-launch work legitimately
>   adds records there. **Merge SPF into any existing `dtgeotech.com` SPF record — never add a second SPF
>   record** — and do not disturb its MX.
> - **If the form sends from `digitaltwingeotechnical.com`** (a new sending identity on the web domain),
>   the records go in the **`digitaltwingeotechnical.com`** zone instead.
>
> **Do not pre-create these records for either domain until the sending domain is chosen in Resend.**
> Full record shapes and the pitfalls are in [`docs/CONTACT-FORM.md`](./CONTACT-FORM.md).

## 6. Turn the contact form on (only when steps 2 & 5 are done)
1. Set `CONTACT_FORM_ENABLED = true` (Production).
2. **Redeploy** (Deployments → ⋯ → Redeploy, or push a commit) — the build-time flag needs a rebuild.
3. Send a test enquiry and confirm it arrives at **info@dtgeotech.com** (the recipient inbox — unchanged).
4. Run the **Gmail + Outlook deliverability test** (send to a Gmail and an Outlook address; check inbox
   vs spam). Fix SPF/DKIM/DMARC if it lands in spam.
> Note: the form's rate limiter is in-memory/per-instance (see CONTACT-FORM.md) — fine for Vercel's
> typical single-region serverless, but revisit if you scale to many instances.

## 7. Post-launch verification
- `https://www.digitaltwingeotechnical.com/sitemap.xml` lists the canonical pages, all with
  `https://www.digitaltwingeotechnical.com/…` URLs (this is what step 3 fixes).
- `https://www.digitaltwingeotechnical.com/robots.txt` allows `/`, disallows `/api/`, points at the sitemap.
- View-source on a couple of pages: canonical / `og:` / `twitter:` URLs resolve to
  `www.digitaltwingeotechnical.com` (this is what `metadataBase` fixes).
- Apex check: `https://digitaltwingeotechnical.com` `308`-redirects to `www`.
- Submit the sitemap in **Google Search Console** (add the `www.digitaltwingeotechnical.com` property,
  verify via DNS TXT on the `digitaltwingeotechnical.com` zone, submit `sitemap.xml`).

## 8. Repo hygiene (from the handoff queue)
- Confirm the GitHub repo is **Private**.
- Check the **fork count** (a fork of a private repo would have snapshotted content).

---

## Rollback
Vercel keeps every deployment. To roll back: Deployments → pick the last good one → **Promote to
Production**. DNS does not change; only the served build does.

## Known caveat carried into launch — orphan routes
Several non-nav routes still return **200** and are therefore indexable if a crawler finds them:
`/capabilities/*`, `/insights/*` (the non-redirecting ones), `/about/vision-future`,
`/about/why-dtg-exists`, `/dtg-focus/data-governance`, `/dtg-focus/future-workflows`. They are **kept
out of `sitemap.ts`** so we don't advertise them, but the proper fix is the **dead-code cleanup task**
(redirect them to their canonical equivalents or remove them). Decide before or shortly after launch;
until then they're low-risk (verified clean of locked content per CLAUDE.md §5) but off-strategy.
