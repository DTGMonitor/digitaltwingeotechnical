# Session handoff — DTG website

_Updated 2026-07-25, end of the Applications session. Paste-and-go context for a fresh session._

## Current state
- **Shipped code state: `main` = `584e9e2`** (`584e9e20d6f833dbd6422fc69bfe5ebc74989f5c`) — the last **code** commit, on `origin/main`.
- This handoff doc is committed **on top** of that, so `git rev-parse main` reads one ahead of `584e9e2`. Unlike the prior handoff, this one **is pushed** — the remote handoff is current.
- Working tree clean on `main`.

## Design / section-build phase — ✅ DONE
The controlled visual-architecture redesign (page section builds + the site-wide photo-hero system) is **complete and merged**. No section-build or hero work remains on branches.

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
- **Contact** — gradient (no photo); height/centring only.
- **DTG Focus** — full-bleed terrain image (pre-existing); height/centring.
- **Applications** — hi-vis monitoring photo (`applications-hero-team.png`); uniform `0.2` + a STRONGER/wider left boost (`0.78→0.6→0` to ~78%, because text overlaps bright hi-vis vests); `object-position:85% 50%` desktop / `78% 50%` mobile. L\*≈23 (darkest). Contrast verified WCAG AA over the hi-vis (headline 5.19:1, body 6.19:1). **Merged — object-position `85%` is the accepted/shipped value.**

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
