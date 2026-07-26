# Session handoff — DTG website

_Updated 2026-07-25 — photo-hero system complete; DTG Focus hero restructured. Paste-and-go context for a fresh session._

## Current state
- **Shipped code state: `main` = `16d2e79`** (`16d2e79fe1917d525309e1e18e1cd9f96f0fc9d2`) — the last **code** commit, on `origin/main`.
- This handoff doc is committed **on top** of that, so `git rev-parse main` reads one ahead of `16d2e79`. This handoff **is pushed** — the remote handoff is current.
- Working tree clean on `main`.

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

**Photo-hero tone system** — uniform deep-teal `#073C4A` overlay, tuned per photo; hero text hardcoded on-dark so it holds in both themes. Overlay is UNIFORM across the frame + a local LEFT boost only where text needs contrast. (Rules in memory `dtg-photo-hero-system`.)
- **Home** — dam/reservoir photo + `#03181B` gradient overlay (pre-existing).
- **About** — team office photo; uniform teal `0.5` + left boost (grey wall needs more tint). L\*≈36 (lightest — suits a people page).
- **Services** — monitoring-room photo (`service-hero-update.png`); uniform `0.2` + light left boost. L\*≈30. `services-hero-monitoring.png` retained as the documented revert path.
- **Solutions** — node-diagram illustration (no photo); height/centring only. Lead `max-width` narrowed to 48ch so centred text clears the diagram.
- **Contact** — monitoring-room photo (`contact-hero.png`, AI-generated synthetic); tint COPIES Services exactly (uniform `0.2` + gentle left boost `0.42→0` by 50%). `object-position:62% 50%` desktop / `30% 50%` at ≤900px (dark empty wall left for the text; wall monitor + four people cropped out on mobile). Very dark wall → AA generous (title ~13:1, lead ~11:1). Merged `a6366a6`.
- **DTG Focus** — full-bleed terrain illustration (`dtg-focus/hero.png`). **Restructured (merged `16d2e79`):** (1) **scrim REMOVED** — shows at true illustration colour, no teal wash (the dark navy artwork carries its own gradient; text still WCAG AA — headline 12.6:1, lead 10.7:1 — the DFX exception to the scrim-on-photo-heroes rule; do NOT re-add a scrim, and do NOT strip scrims off the photo heroes). (2) **DTG Focus lockup** moved into the hero **upper-left**, grid-aligned (absolute `.site-container` rail so its left edge lands on the title's ruler; adds no height so the title never moved), big (294px desktop / 203px ≤900px), not a link. Uses `dtg-focus-lockup.png` (the logo trimmed of transparent padding; original `dtg-focus-logo-transparent.png` stays — still used on the homepage). (3) **Eyebrow dropped** (lockup carries the brand); small controlled title lift (−70→−90 desktop). (4) **Lead trimmed** to one sentence. **Nav unchanged on all pages** (DTG logo alone; the earlier page-scoped nav marker was tried and reverted — a 73px nav can't size the lockup).
- **Applications** — open-pit survey photo (`applications-hero-update.png`, AI-generated synthetic; swapped from the monitoring-room shot at `4d22091`, old `applications-hero-team.png` kept as revert); uniform `0.2` + a STRONGER/wider left boost (`0.78→0.6→0` to ~78%); `object-position:85% 50%` desktop / `35% 50%` at ≤900px (empty pit left; two workers on the right, cropped out on mobile). Contrast measured WCAG AA (headline ~9–11:1, lead ~7–9:1).

## What remains — all non-design

### 1. Peter — confirmed copy changes
- **Data Analytics** — verbatim rewrites (apply Peter's supplied copy to `/services/data-analytics-automation`).
- **Leadership bios** — RPEQ, CP(Geotech), international experience. (Keep vendor names OUT of bios — CLAUDE.md §3.)
- **IP-ownership sentence** — counsel cleared the concept (client data is theirs; DTG's software/methods/background IP is DTG's); still needs the **verbatim wording** before it goes in.
- **DTG Focus maturity — consistency pass** — hold the honest boundary everywhere (built-and-running + capabilities deployable on request, but the fully-integrated coverage is still being completed; never "in development"/"roadmap", never "complete integrated coverage exists"). CLAUDE.md §3.
- **Absolutes audit** — sweep for over-claims / absolute language and soften to what survives discovery.

### 2. Launch mechanics (contact form)
Resend account → `CONTACT_MAIL_API_KEY` in host env → DNS SPF/DKIM/DMARC (**merge into any existing SPF record — never add a second**) → flip `CONTACT_FORM_ENABLED=true` and **rebuild** (the gate is build-time) → run the Gmail + Outlook **deliverability test** → submit the form once. Form is currently gated **OFF**.

### 3. Repo hygiene
- Confirm the repo shows **Private**.
- Check the **fork count**.

## Still deferred — design-adjacent, tracked in memory (NOT the active launch queue)
- **Light-theme audit** before flipping the dark→light default (memory `dtg-light-theme-audit-before-flip`).
- **Dead-code tier** (memory `dtg-dead-code-cleanup`) — incl. the orphaned `components/leadership-section.tsx` (`.ld-*`).
- **Sentence-case heading sweep** — decision key drafted; **strapline carve-out is LOCKED**: "Integrated Data. Informed Decisions." keeps Title Case + full stops as the brand line.

## Environment / gotchas for the next session
- Dev: `npm run dev` on :3000. **Never `npm run build` while dev is live** (corrupts `.next` — CLAUDE.md §9). Stop dev first, then build.
- **Screenshots unavailable** this session (in-app browser-pane `computer screenshot` hangs on large images; Claude-in-Chrome not connected). Visuals verified by served-HTML + computed-style / composited-pixel measurement. Reconnect Claude-in-Chrome if real screenshots are needed.
- Same-filename image swaps serve **stale** via next/image → `rm -rf .next/cache/images` + rebuild; verify by pixel content, not CSS (memory `dtg-nextimage-stale-cache`).
- Owner drops assets into `public/images/` **untracked** — `git add` the asset with the code or main ships a dangling 404 (memory `dtg-commit-out-of-band-assets`).
