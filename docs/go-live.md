# Go-live runbook — deploying DTG to production at dtgeotech.com

Step-by-step to take `main` from GitHub to public at **dtgeotech.com** on **Vercel**. Written for a
follow-along; each step says what to do and how to confirm it worked.

## Where things stand (verified 2026-08-04)
- The site is **not deployed anywhere yet** — `main` lives only on GitHub (`DTGMonitor/digitaltwingeotechnical`).
  No host is connected: no `vercel.json` / `netlify.toml` / CI / Dockerfile in the repo.
- **`dtgeotech.com` is registered but PARKED** — DNS resolves to registrar/parking IPs
  (`3.33.251.168` / `15.197.225.128`) and returns `405` with no app headers. It is **not** serving the site.
- This is a **Next.js server app** (App Router, has a server `/api/contact` route, no static export) — it
  needs a host that runs Next.js. Vercel is the zero-config default; these steps assume Vercel.
- The contact form is **gated OFF** (`CONTACT_FORM_ENABLED` is a **build-time** flag). Details in
  [`docs/CONTACT-FORM.md`](./CONTACT-FORM.md).

---

## 1. Create the Vercel project
1. Vercel → **Add New… → Project → Import Git Repository** → `DTGMonitor/digitaltwingeotechnical`.
   (Authorise Vercel on the GitHub org if prompted.)
2. Framework preset auto-detects **Next.js**. Leave build command (`next build`) and output as default.
3. **Production Branch = `main`** (Settings → Git). Every push to `main` now auto-deploys to production;
   other branches get preview URLs.
4. **Deploy.** ✅ Confirm: build succeeds and you get a temporary URL like `digitaltwin…vercel.app`.

## 2. Environment variables (Settings → Environment Variables)
None are committed to the repo — all secrets are supplied here.
| Name | Value | Scope | Notes |
|---|---|---|---|
| `CONTACT_MAIL_API_KEY` | (Resend API key) | Production | Required for the contact form to send. |
| `CONTACT_FORM_ENABLED` | leave **unset / `false`** for now | Production | ⚠️ **Build-time flag** — see step 6. |

⚠️ `CONTACT_FORM_ENABLED` is read at **build time** (the page is statically prerendered). Changing it
later does **not** take effect until you **redeploy**. Keep it off until step 6.

## 3. Smoke-test the temporary URL
On the `*.vercel.app` URL, confirm: home + a few pages load, nav/mega-menu works, light/dark toggle
works, `/privacy` and `/terms` render, `/sitemap.xml` and `/robots.txt` resolve. The contact form area
should show the **email fallback** (form OFF), not a broken form.

## 4. Attach the domain + point DNS
1. Vercel → project → **Settings → Domains → Add** → `dtgeotech.com` (add `www.dtgeotech.com` too; set
   one as primary — apex `dtgeotech.com` is the usual choice, with `www` → redirect to it).
2. Vercel shows the exact DNS target. **Use the values Vercel displays** (they can change); at time of
   writing they are:
   - Apex `dtgeotech.com`: **A record → `76.76.21.21`**
   - `www`: **CNAME → `cname.vercel-dns.com`**
3. At the **registrar** (where the parking records live): **remove the parking A records** and add the
   above. If the registrar supports ALIAS/ANAME at the apex, that also works.
4. Wait for propagation + Vercel to issue the TLS cert (minutes to a couple of hours).
   ✅ Confirm: `https://dtgeotech.com` serves the site with a valid certificate, and Vercel's Domains
   panel shows **Valid Configuration**.

> Verify: `nslookup dtgeotech.com` should now return `76.76.21.21` (not the parking IPs), and
> `curl -I https://dtgeotech.com` should show Vercel headers (`x-vercel-id`), not `405`.

## 5. Email-deliverability DNS (separate from step 4)
This is **independent** of pointing the domain at the web host — it's so the contact form's mail isn't
spam-filtered. Per [`docs/CONTACT-FORM.md`](./CONTACT-FORM.md): add Resend's **SPF / DKIM / DMARC**
records at the registrar. **Merge SPF into any existing SPF record — never add a second SPF record.**

## 6. Turn the contact form on (only when steps 2 & 5 are done)
1. Set `CONTACT_FORM_ENABLED = true` (Production).
2. **Redeploy** (Deployments → ⋯ → Redeploy, or push a commit) — the build-time flag needs a rebuild.
3. Send a test enquiry and confirm it arrives at **info@dtgeotech.com**.
4. Run the **Gmail + Outlook deliverability test** (send to a Gmail and an Outlook address; check inbox
   vs spam). Fix SPF/DKIM/DMARC if it lands in spam.
> Note: the form's rate limiter is in-memory/per-instance (see CONTACT-FORM.md) — fine for Vercel's
> typical single-region serverless, but revisit if you scale to many instances.

## 7. Post-launch verification
- `https://dtgeotech.com/sitemap.xml` lists the canonical pages, all with `https://dtgeotech.com/…` URLs.
- `https://dtgeotech.com/robots.txt` allows `/`, disallows `/api/`, and points at the sitemap.
- View-source on a couple of pages: canonical / `og:` / `twitter:` URLs resolve to `dtgeotech.com`
  (this is what `metadataBase` fixes).
- Submit the sitemap in **Google Search Console** (add the property, verify via DNS TXT, submit
  `sitemap.xml`).

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
