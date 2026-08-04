# Session handoff — DTG website

_Updated 2026-08-04 — Peter copy changes done; /terms added; SEO/OG launch-ready; mobile-nav DTG Focus fix. Paste-and-go context for a fresh session._

## Current state
- **Shipped code state: `main` = `2e5092a`** (`2e5092a37379e3f8c762d95944860ebb1ba0c653`) — the last **code** commit, on `origin/main`.
- This handoff doc is committed **on top** of that, so `git rev-parse main` reads one ahead of `2e5092a`. This handoff **is pushed** — the remote handoff is current.
- Working tree clean on `main`.

## 🚀 LAUNCH READINESS
The site is **code-complete and launch-ready, but NOT yet live** — no host is connected and
**dtgeotech.com is parked** (DNS resolves to registrar parking IPs `3.33.251.168`/`15.197.225.128`,
returns 405, no app headers). It's a Next.js **server** app (has `/api/contact`, no static export) —
needs a host that runs Next.js (Vercel assumed).

**In place (code-side, done — `76348b1` + `a7e89d9`):**
- `metadataBase: https://dtgeotech.com` (root layout) — canonical/OG/Twitter URLs resolve to the real domain, not the deploy URL.
- `app/sitemap.ts` — 18 CANONICAL pages only (orphan 200s + redirects excluded); `app/robots.ts` — allow `/`, disallow `/api/`, sitemap pointer.
- **OpenGraph + Twitter cards** (`summary_large_image`) + **`public/og-image.png`** (1200×630, deep-teal hero-dark, DTG mark, green rule, locked strapline). Verified rendering absolute `dtgeotech.com` URLs. (Card strapline uses a brand-sans fallback face, not a guaranteed Inter embed — drop an `Inter-*.ttf` in-repo to re-render against literal Inter.)
- **`/terms`** page (counsel-cleared IP clause); footer links Privacy · Terms.

**Remaining to actually GO LIVE — NOT a code task** (needs dashboard/registrar access, Peter/domain owner):
1. **Vercel project** — import the GitHub repo, production branch `main`, set env vars (`CONTACT_MAIL_API_KEY`; `CONTACT_FORM_ENABLED` is a build-time gate, still OFF).
2. **DNS repoint** — replace the parking records with Vercel's targets (apex `A 76.76.21.21`, `www CNAME cname.vercel-dns.com` — confirm in the dashboard).
- Plus Resend SPF/DKIM/DMARC before enabling the form, then flip `CONTACT_FORM_ENABLED` + redeploy + deliverability test.
- **Full step-by-step: [`docs/go-live.md`](./go-live.md).**

## Design / section-build phase — ✅ DONE
The controlled visual-architecture redesign (page section builds + the site-wide photo-hero system) is **complete and merged**. No section-build or hero work remains on branches.

- **Photo-hero system COMPLETE across every page** — Contact was the last gradient-only hero; its photo (`contact-hero.png`) merged at `a6366a6`. (The Applications hero was later swapped from the monitoring-room shot to `applications-hero-update.png` at `4d22091`; the old `applications-hero-team.png` is kept in-repo as a one-line-src revert.)

- **Applications is fully complete** — both halves merged to `main`:
  - **Hero photo** — `applications-hero-team.png` (AI-generated, synthetic monitors) with the refined overlay tuning (`584e9e2`, cherry-picked from the old `5e8f045`).
  - **Environments section** — variant-A editorial rows: four full-width rows, images alternating L/R/L/R, collapse below 820px, each "Explore →" linking to its real `/applications/*` detail sub-page (`b8bf137`, `0cc91f8`).
- **All Applications branches deleted** — `applications-env-rows` (merged), `applications/hero-photo-final` (`5e8f045`, cherry-picked in), `applications/hero-photo` (`bdba9ff`, superseded earlier draft). Everything is on `main`; nothing outstanding on branches.

## Hero system (as shipped on `main`) — reference
All seven page heroes share one structure. Height and vertical position are uniform; the **homepage is the deliberate exception** on content position.

**Height — all 7 (incl. homepage):** `min-height: clamp(760px, 100svh, 980px)`, with `min-height: 100svh` at `@media (max-width:720px)`. `svh` (not `vh`/`dvh`) for mobile address-bar handling.

**Content vertical position:**
- **Homepage** — **bottom-anchored** (absolute-positioned copy). Deliberately NOT centred; do not "fix" it.
- **The other six** (About, Services, Applications, Solutions, Contact, DTG Focus) — **vertically centred** (`align-items:center` + zeroed content `padding-bottom`). The `[data-*-reveal]` transform applies `translateY(24px)` pre-reveal — don't measure the pre-reveal frame.

**Hero H1 titles — TOKENISED, shared across all six non-home heroes** (`f2fe2b5` + `e9d8785`). The audit had found six different clamps (120/112/89.6/83.2px) and three max-widths; now every `*-hero__title` rule references one shared `--hero-title-*` token set in `:root`:
- `--hero-title-size: clamp(3rem, 7.4vw, 6.5rem)` (≈104px desktop / 48px mobile) · `--hero-title-max: 18ch` · `--hero-title-weight: 800` · `--hero-title-leading: .98`.
- **To change hero-title styling, edit the TOKEN — NOT individual heroes.** All six (`.ab/.svcx/.appsx/.solx/.cx/.dfx-hero__title`) point at it; changing one hero directly would re-introduce the drift this fixed. Homepage hero is excluded and does NOT reference these tokens.
- **Casing unified to sentence case** (locked rule): fixed "Where We Work"→"Where we work" (Applications) and "Focused Actionable Insight"→"Focused actionable insight" (DTG Focus).
- **Services hero** reads eyebrow **"Services"** → title **"What we do"** (parallel to About "About DTG"→"Who we are"). DTG Focus has **no eyebrow** (lockup carries the brand — the one exception).

**Photo-hero tone system** — uniform deep-teal `#073C4A` overlay, tuned per photo; hero text hardcoded on-dark so it holds in both themes. Overlay is UNIFORM across the frame + a local LEFT boost only where text needs contrast. (Rules in memory `dtg-photo-hero-system`.)
- **Home** — dam/reservoir photo + `#03181B` gradient overlay (pre-existing).
- **About** — team office photo; uniform teal `0.5` + left boost (grey wall needs more tint). L\*≈36 (lightest — suits a people page).
- **Services** — monitoring-room photo (`service-hero-update.png`); uniform `0.2` + light left boost. L\*≈30. `services-hero-monitoring.png` retained as the documented revert path.
- **Solutions** — node-diagram illustration (no photo); height/centring only. Lead `max-width` narrowed to 48ch so centred text clears the diagram.
- **Contact** — monitoring-room photo (`contact-hero.png`, AI-generated synthetic); tint COPIES Services exactly (uniform `0.2` + gentle left boost `0.42→0` by 50%). `object-position:62% 50%` desktop / `30% 50%` at ≤900px (dark empty wall left for the text; wall monitor + four people cropped out on mobile). Very dark wall → AA generous (title ~13:1, lead ~11:1). Merged `a6366a6`.
- **DTG Focus** — full-bleed terrain illustration (`dtg-focus/hero.png`). **Restructured (merged `16d2e79`):** (1) **scrim REMOVED** — shows at true illustration colour, no teal wash (the dark navy artwork carries its own gradient; text still WCAG AA — headline 12.6:1, lead 10.7:1 — the DFX exception to the scrim-on-photo-heroes rule; do NOT re-add a scrim, and do NOT strip scrims off the photo heroes). (2) **DTG Focus lockup** moved into the hero **upper-left**, grid-aligned (absolute `.site-container` rail so its left edge lands on the title's ruler; adds no height so the title never moved), big (294px desktop / 203px ≤900px), not a link. Uses `dtg-focus-lockup.png` (the logo trimmed of transparent padding; original `dtg-focus-logo-transparent.png` stays — still used on the homepage). (3) **Eyebrow dropped** (lockup carries the brand); small controlled title lift (−70→−90 desktop). (4) **Lead trimmed** to one sentence. **Nav unchanged on all pages** (DTG logo alone; the earlier page-scoped nav marker was tried and reverted — a 73px nav can't size the lockup).
- **Applications** — open-pit survey photo (`applications-hero-update.png`, AI-generated synthetic; swapped from the monitoring-room shot at `4d22091`, old `applications-hero-team.png` kept as revert); uniform `0.2` + a STRONGER/wider left boost (`0.78→0.6→0` to ~78%); `object-position:85% 50%` desktop / `35% 50%` at ≤900px (empty pit left; two workers on the right, cropped out on mobile). Contrast measured WCAG AA (headline ~9–11:1, lead ~7–9:1).

## What remains — all non-design

### 1. Peter — confirmed copy changes — ✅ DONE (`8a5789c` + `b40b680`)
- **Data Analytics** — ✅ done. Peter's three verbatim rewrites were already live (2026-07-19); completed the two body remnants that still carried the old framing: "AI engineers"→"software, data and analytics engineering", and the "Alarms that tune themselves" overclaim→"Alarm and threshold performance reviewed against your real data".
- **Leadership bios** — ✅ done (`/about#leadership`, data array in `app/about/page.tsx`). Peter: added RPEQ, CP(Geotech), international leadership of monitoring programmes, project scale kept **qualitative** ("major mining operations" — no invented figure), neutral on former employer. Mark: strengthened with the owner-confirmed **"25+ years"** only (no RPEQ/CP — not supplied).
- **IP-ownership sentence** — ✅ built. Peter's exact counsel-cleared clause ("Client source data remains theirs; DTG retains ownership of its software, analytics, workflows, methodologies and background IP.") now lives on a **new minimal `/terms` page** (engagement terms — a different scope from website enquiry data). **`/privacy` stays enquiry-data-only**; do NOT put engagement terms back into it. Footer links **both** (`Privacy policy · Terms`). `/terms` reuses the `.pv-*` legal-page styling and is expandable.
- **DTG Focus maturity** — ✅ verified held: no forbidden phrases ("in development"/"roadmap"/"coming soon"/"not yet available"/"preview"/"complete integrated coverage") in live copy; Solutions carries the canonical "built and running … still being completed" wording; DTG Focus has no violations.
- **Absolutes audit** — ✅ verified held: live copy is soft ("helps ensure"/"supports"/"still being completed"); residual hard words are in code comments / dead code (e.g. orphaned `leadership-section.tsx`). Minor nit only: `technical-assurance-section.tsx:230` says "Ensures … documented clearly" while line 337 uses the softer "helps ensure" — consistency tidy, not a regression.
- **Open-pit "50 that matter" contradiction** — ✅ verified resolved: heading is now "…the movement that matters" (no number); Applications shows "500+ TARP trigger responses · 50 confirmed falls of ground" (distinct counts, no contradiction).

### 2. Launch mechanics (contact form)
Resend account → `CONTACT_MAIL_API_KEY` in host env → DNS SPF/DKIM/DMARC (**merge into any existing SPF record — never add a second**) → flip `CONTACT_FORM_ENABLED=true` and **rebuild** (the gate is build-time) → run the Gmail + Outlook **deliverability test** → submit the form once. Form is currently gated **OFF**.

### 3. Repo hygiene
- Confirm the repo shows **Private**.
- Check the **fork count**.

## Still deferred — design-adjacent, tracked in memory (NOT the active launch queue)
- **Light-theme audit** before flipping the dark→light default (memory `dtg-light-theme-audit-before-flip`).
- **Dead-code tier** (memory `dtg-dead-code-cleanup`) — incl. the orphaned `components/leadership-section.tsx` (`.ld-*`).
- **Sentence-case heading sweep** — decision key drafted; **strapline carve-out is LOCKED**: "Integrated Data. Informed Decisions." keeps Title Case + full stops as the brand line.
- **DTG Focus nav dropdown (deferred re-add, `2e5092a`)** — the mobile DTG Focus dropdown was removed (its 4 sub-items were dead — `/dtg-focus/*` all `308`-redirect back to the page). DTG Focus is now a single link on desktop + mobile. **Re-add the dropdown when the DTG Focus page gets real sections built, pointing at anchors that exist** (see the comment on the `mobileNavigationSections` "DTG Focus" entry in `components/site.tsx`).

## Environment / gotchas for the next session
- Dev: `npm run dev` on :3000. **Never `npm run build` while dev is live** (corrupts `.next` — CLAUDE.md §9). Stop dev first, then build.
- **Screenshots unavailable** this session (in-app browser-pane `computer screenshot` hangs on large images; Claude-in-Chrome not connected). Visuals verified by served-HTML + computed-style / composited-pixel measurement. Reconnect Claude-in-Chrome if real screenshots are needed.
- Same-filename image swaps serve **stale** via next/image → `rm -rf .next/cache/images` + rebuild; verify by pixel content, not CSS (memory `dtg-nextimage-stale-cache`).
- Owner drops assets into `public/images/` **untracked** — `git add` the asset with the code or main ships a dangling 404 (memory `dtg-commit-out-of-band-assets`).
