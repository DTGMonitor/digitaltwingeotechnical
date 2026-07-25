# Session handoff — DTG website

_Written 2026-07-25, end of the hero-system session. Paste-and-go context for a fresh session._

## Current state
- **Shipped product state: `main` = `d248a6d`** (`d248a6d1072764d11cda3ae2dde5eacfb22121a5`) — this is the last code commit and it is on `origin/main`.
- This handoff doc is committed **on top** of that (so `git rev-parse main` locally reads one ahead of `origin`). The doc is **not pushed** — push it if you want it on the remote.
- Working tree clean on `main`.

## Hero system (as shipped on `main`)
All seven page heroes now share one structure. Height and vertical position are uniform; the **homepage is the deliberate exception** on content position.

**Height — all 7 (incl. homepage):** `min-height: clamp(760px, 100svh, 980px)`, with `min-height: 100svh` at `@media (max-width:720px)`. `svh` (not `vh`/`dvh`) for mobile address-bar handling. Measured identical: 900px @1440×900, 760px @390×760.

**Content vertical position:**
- **Homepage** hero — **bottom-anchored** (absolute-positioned copy). Deliberately NOT centred; do not "fix" it.
- **The other six** (About, Services, Applications, Solutions, Contact, DTG Focus) — **vertically centred** (`align-items:center` + zeroed content `padding-bottom`). Measured offset 0 once the reveal transform settles (`[data-*-reveal]` applies `translateY(24px)` pre-reveal — don't be fooled measuring the pre-reveal frame).

**Photo-hero tone system** — uniform deep-teal `#073C4A` overlay, tuned per photo; hero text is hardcoded on-dark so it holds in both themes. Overlay is UNIFORM across the frame + a local LEFT boost only where text needs contrast. (Rules in memory `dtg-photo-hero-system`.)
- **Home** — dam/reservoir photo + `#03181B` gradient overlay (pre-existing).
- **About** — team office photo; uniform teal `0.5` + left boost (grey wall needs more tint). L\*≈36 (lightest — suits a people page).
- **Services** — monitoring-room photo (`service-hero-update.png`); uniform `0.2` + light left boost (room already dark-teal). L\*≈30. `services-hero-monitoring.png` retained in-repo as the documented revert path.
- **Solutions** — node-diagram illustration (no photo); height/centring only. Lead `max-width` was narrowed to 48ch so centred text clears the diagram.
- **Contact** — gradient (no photo); height/centring only.
- **DTG Focus** — full-bleed terrain image (pre-existing); height/centring.
- **Applications** — hi-vis monitoring photo; uniform `0.2` + a STRONGER/wider left boost (text overlaps bright hi-vis). L\*≈23 (darkest). **NOT on main — held on a branch (see below).**

## Open branches (NOT merged into main)
- **`applications/hero-photo-final` (`5e8f045`)** — the Applications hero photo. Built off current `main`, so it already inherits the height + centring. Contrast verified WCAG AA over the hi-vis (headline 5.19:1, body 6.19:1). **Held awaiting ONE owner decision: `object-position`** (currently 85%). Trade-off: pushing the crop right keeps the monitors but nudges the group left = *more* headline/worker overlap; at 85% ~1.5% of the rightmost monitors is clipped. Once the owner confirms the value → merge + push.
- **`applications/hero-photo` (`bdba9ff`)** — SUPERSEDED (earlier take, off pre-height/centring main). Safe to delete.

Everything else is merged into `main`.

## Environment / gotchas for the next session
- Dev: `npm run dev` on :3000. **Never `npm run build` while dev is live** (corrupts `.next` — CLAUDE.md §9). A `next start` prod build may be running; restart dev.
- **Screenshots were unavailable all session** (in-app browser-pane `computer screenshot` hangs; Claude-in-Chrome not connected). Visuals were verified by composited-pixel + computed-style measurement. If real screenshots are needed, reconnect Claude-in-Chrome first.
- Same-filename image swaps serve **stale** via next/image → `rm -rf .next/cache/images` + rebuild; verify by pixel content, not CSS (memory `dtg-nextimage-stale-cache`).
- Owner drops assets into `public/images/` **untracked** — `git add` the asset with the code or main ships a dangling 404 (memory `dtg-commit-out-of-band-assets`).

## Outstanding non-design queue (waiting on people)
1. **Repo:** confirm it shows **Private**; check the **fork count**.
2. **Peter:** leadership bios (RPEQ, CP(Geotech), international experience) · a counsel-ready IP-ownership sentence (client data theirs; DTG's software/methods/background IP DTG's) · open-pit-specific figures (that page runs capability-framed, no numbers) · whether the "50 falls of ground" were *preceded by supported monitoring escalations* (stronger wording, only if literally true) · **the strapline ruling** — does "Integrated Data. Informed Decisions." keep Title Case + full stops as a brand line?
3. **Counsel:** `/privacy` sign-off (Australian Privacy Act applicability + the Indonesian angle — Yogyakarta staff read the inbox) and the IP wording.
4. **Contact form launch:** Resend account → `CONTACT_MAIL_API_KEY` in host env → DNS SPF/DKIM/DMARC (**merge into any existing SPF record — never add a second**) → flip `CONTACT_FORM_ENABLED=true`, **rebuild** (the gate is build-time), run the Gmail + Outlook deliverability test, submit the form once. Form is currently gated OFF.

## Design items still open (context — not the queue above)
- **Sentence-case heading sweep** — decision key drafted (proper nouns; DTG Focus™; service names name-vs-description; InSAR/LiDAR casing; strapline carve-out). Awaiting the site-wide heading inventory to run against it.
- **Light-theme audit** before flipping the dark→light default (memory `dtg-light-theme-audit-before-flip`).
- **Dead-code tier** (memory `dtg-dead-code-cleanup`) — incl. the orphaned `components/leadership-section.tsx` (`.ld-*`).
