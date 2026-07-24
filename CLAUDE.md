# CLAUDE.md — DTG Website Project Rules

Persistent strategic, brand, content, design, and development rules for the Digital Twin
Geotechnical (DTG) website. Read this before making any change. It complements — and does not
replace — `AGENTS.md` (naming rules) and `docs/VISUAL-ARCHITECTURE-PLAN.md` (the redesign spec).

**Design authority & precedence.** The **DTG Company & Brand Masterbook (v0.9)** and
`docs/VISUAL-ARCHITECTURE-PLAN.md` are the single source of truth for palette, typography, spacing,
section rhythm and messaging. Where any skill, library default, framework convention, or prior
wording in this file conflicts with them, **the masterbook wins.** The masterbook is an internal
*working* edition: items it marks for verification are provisional (see §12) and must not be
hardened into code or published externally without leadership sign-off.

---

## 1. What this project is

- **Company:** Digital Twin Geotechnical (DTG) — an **independent, technology-agnostic
  geotechnical monitoring and decision-support company**. DTG works between monitoring data and
  operational decisions: integrate monitoring information, govern workflows, support defensible
  decisions.
- **Not** a software vendor or a technical SaaS product company. ⚠️ **This list used to begin "Not a
  monitoring hardware vendor" — that was REMOVED (2026-07-17) because it is false: DTG distributes
  radar and GNSS hardware in Indonesia.** Do not reinstate it, and do not publish any equivalent
  ("we sell no hardware", "independent of equipment manufacturers", or a "DTG is not…" list item to
  that effect). See §3 and §12.
- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind 3 (utility layer
  only) · a single large `app/globals.css` design system · `framer-motion` / `gsap` for motion ·
  `lucide-react` icons. Fonts: **Inter (sans) as a flagged interim only** — the final web/corporate
  typeface is an open decision in the masterbook (p.93) pending licensing + Peter/Mark sign-off, so
  do not standardise a permanent face; it swaps in later as a token change. IBM Plex Mono (mono).
- **Primary objective right now:** a **controlled visual architecture redesign** of the existing
  site — not a rebuild, not a content rewrite, not a cleanup project.

---

## 2. Prime directives (read before every task)

1. **Do not rebuild from scratch.** Continue from the existing implementation. Evolve it.
2. **Preserve the approved content architecture, routes, messaging, and working functionality.**
   Wording, information architecture, and behaviour are approved. The redesign changes *how it
   looks and is composed*, not *what it says* or *where it lives*.
3. **This is a visual redesign, not a repository cleanup.** Route/component/CSS cleanup is a
   separate, deferred concern. Do not delete routes, remove components, consolidate
   `globals.css`, or delete/prune orphan pages **unless explicitly instructed**.
4. **Ask before destructive or architectural change.** Deleting routes/components, changing URLs,
   altering nav structure, or rewriting messaging all require explicit approval first.
5. **Never modify page files, `globals.css`, or components as a side effect** of an unrelated task.
   Scope every edit to the phase you were asked to do.

---

## 3. Brand & positioning rules

- DTG is **independent and technology-agnostic.** Never imply DTG sells, favours, or is tied to a
  specific sensor, platform, or vendor. DTG reviews across radar, GNSS, prisms, InSAR, LiDAR, SLAM
  LiDAR, VWP, seismic and operational records — objectively.
- **Sensor-vendor names — the real rule (2026-07-19).** Naming a vendor (GroundProbe, Trimble, etc.)
  is **permitted in an agnostic technical list** — "we review across radar, GNSS, InSAR… whoever
  supplied it" — because that *reinforces* technology-agnostic positioning. It is **NOT permitted**:
  in a bio or history (reads as a personal/company tie), as a "partner" or endorsement, or paired
  with that vendor's own metrics (another company's figures aren't ours to publish). The past leaks
  were vendor names in **founder bios** — the bio framing was the violation, not the bare name.
- **Positioning benchmark:** the calibre of major international engineering consultancies
  (AtkinsRéalis, Mott MacDonald, Arup, Egis, Worley). Match the *quality, restraint, and editorial
  confidence* of that tier — **do not copy their layouts, colours, or components.**
- **Tone:** engineering-grade, calm, credible, defensible. Not startup-y, not hype, not "SaaS
  dashboard."
- **Formal category (use verbatim):** an **independent geotechnical monitoring, analytics and
  decision-support company.** Not a software vendor or technical SaaS product.
  > 🚨 **"Not a hardware vendor" was REMOVED from this formal category (2026-07-17). It was FALSE —
  > DTG distributes radar and GNSS hardware in Indonesia — and because this line said "use
  > verbatim", the doc was actively *generating* the claim onto the site: it was published on
  > `/about` and, as "independent of … equipment manufacturers", on three more live routes. Whoever
  > wrote them was following this instruction. Fixing the pages without fixing this line would have
  > left the next writer re-adding it, correctly citing the doc.**
  > **Independence is ENGAGEMENT-SCOPED and always has been in practice:** *"on your site, what we
  > recommend is driven by your risk and your data, not by any product."* That survives discovery.
  > A company-wide financial, relationship or category claim does not. This applies to IDENTITY
  > framing ("DTG is not a…", "DTG is independent of…") exactly as it does to commercial framing —
  > a "what we are not" list still makes claims, it just doesn't feel like it.
  > **See §12: this is the second thing this section asserts that reality contradicts (the other is
  > DTG Focus). Both trace to the masterbook, which is the root generator and needs amending.**
- **Primary promise:** **Trusted Monitoring Outcomes.** Credibility line: *Independent Monitoring.
  Trusted Outcomes.*
- **Tagline / strategic line:** **Integrated Data. Informed Decisions.**
- **Company narrative spine:** Integrate · Govern · Decide (the high-level three-word system).
- **AI discipline:** never lead with "AI-powered." The canonical framing is **"engineering
  judgement supported by advanced analytics"** — AI is an enabling layer behind the scenes, never a
  replacement for engineering judgement and never presented as autonomously identifying failures.

### DTG Focus™ rule (important)

> **AMENDED 2026-07-18 (user-authorised) — this section previously described Focus as a "supporting,
> governed monitoring environment" that is "not a standalone product", with a formal
> "Operational Decision-Support Platform" category and five abstract pillars. That was the
> masterbook definition, and it did NOT match reality — it was the generator behind the whole
> Focus doc-vs-reality conflict (see §12). Corrected to what Focus actually is. Same move as the
> hardware-vendor claim: fix the doc, not just the page, or the next writer re-adds the old framing
> and cites this section. The masterbook itself still carries the old definition and needs the same
> amendment — a leadership/business-document task (§12).**

- **DTG Focus™ is DTG's own monitoring software — built and running, used by DTG's own engineers
  every day, and used in delivery for clients.** It is not internal-only, and not a concept.
- **What it does (five capabilities, given EQUAL weight — never promote one above the others; a
  client who sees one feature emphasised files DTG as that kind of vendor):** **Integration ·
  Analytics · Review & workflow · Governance & reporting · Portfolio view.** (These supersede, for
  all site copy, the masterbook's older abstract pillars "Integrate · Validate · Analyse · Govern ·
  Act" — reconciling the masterbook is the §12 follow-up.)
- **The honest boundary — hold it exactly:** the tools are **built and running**, and **individual
  capabilities can be deployed for clients on request.** The **fully integrated, full-coverage**
  product is **still being completed.** So: **NEVER** write "in development", "roadmap", "coming
  soon", "not yet available" or "preview" — the tools exist and run. **EQUALLY never** claim that
  complete integrated coverage exists today. Frame delivery **consultatively** ("we start from what
  your teams need to see") — that is both true and how DTG actually works. *The sentence that
  promises complete integrated coverage is the one that fails in a demo — don't write it.*
- **Palette: DTG Focus™ uses the SAME palette as the rest of the site — no sub-brand theme.** The
  old "Focus colour sub-family" (Focus Teal `#0A5266` etc.) is **retired for the website** (this is
  the current live `/dtg-focus` design). The **logo renders off-white `#F4F7F6` on dark, NOT green**
  — green is the site accent that marks "this is DTG" moments and interactive elements; spent on a
  logo it stops meaning anything.
- **🔒 The sponsor stays secret.** A major mining group funds Focus development. Never on the site
  in any form, including softened. (See the confidential memory.)
- Always render the mark via `components/brand.tsx` (`DTGFocusMark` / `renderTrademarkText`) so the
  ™ is consistent. Never hand-type "DTG Focus TM", and never put the `<sup>™</sup>` inside a
  `<title>`, `alt` or `aria-label` (attributes can't hold markup).

---

## 4. Content & naming rules (from AGENTS.md — binding)

Use strategic section language carefully.

- **Body / section headings:** prefer **Capabilities** (what DTG does) and **Operating
  Environments** (where DTG works).
- **Top navigation labels:** use short, usable labels — **Services** and **Applications**. Do
  **not** use "Markets." Do not force long labels ("Capabilities", "Operating Environments") into
  the top nav if they hurt usability.
- Principle: **navigation labels stay short and usable; section headings carry the strategic
  positioning.**

---

## 5. Content architecture — preserve as-is

Live, nav-reachable route families (the approved IA — do not restructure without approval):

- `/` (home)
- `/about` + `purpose-principles`, `vendor-independence`, `our-approach`, `technical-assurance`,
  `leadership`
- `/services` + `remote-monitoring`, `reporting-back-analysis`, `technology-integration`,
  `data-analytics-automation`, `technical-advisory`
- `/applications` + `open-pit-mining`, `tailings-storage-facilities`, `underground-mining`,
  `infrastructure-civil`
- `/dtg-focus` + `data-cleansing`, `automated-reporting`, `decision-support`
- `/contact`

There are also **orphan/legacy routes** on disk (e.g. `/capabilities/*`, `/operations/*`,
`/focus`, `/leadership`, `/insights/*`, `/markets`, `/portfolio`, some unlinked `/about/*` and
`/dtg-focus/*` children). **Leave them untouched during the redesign.** Their fate is a separate,
deferred decision that requires explicit approval.

> **Exception — orphan ≠ safe when it's LIVE and leaking (2026-07-18, user-authorised).** A concept
> sweep found several of these orphan routes returning **200** while publishing locked-category
> content — **client names** (specific client and site identities — never publish these) and **sensor brands**
> (GroundProbe, Trimble) in rendered HTML. "Not in nav" is not a defence in discovery: a 200 page is
> indexable. These were **308-redirected** to their live equivalents (compliance, not redesign):
> the whole `/operations/*` tree → `/applications/*`; `/leadership` → `/about#leadership`;
> `/about/our-journey` → `/about`; `/insights/long-term-deformation` → `/applications/tsf`. The
> remaining orphans (non-leaking `/capabilities/*`, `/insights/*`, `/focus`, `/markets`, `/portfolio`)
> were verified clean by rendered-HTML sweep and left for the dead-code cleanup task. Rule: **an
> orphan route that is still 200 and leaks a locked category is a live violation — fix it, don't
> shield it behind "it's an orphan".**

---

## 6. Navigation guardrail

Navigation is defined **only** in `components/site.tsx` (desktop mega-menu + mobile drawer) and the
footer in `components/SiteFooter.tsx`. The mega-menu layout is **shared across all dropdowns by
design** (see the in-file comment). Do **not** create per-dropdown layouts, image cards, bottom
strips, or bespoke typography unless the whole navigation system is intentionally redesigned and
approved. Wording changes go in the menu **data**, not new layouts.

---

## 7. Design direction (the redesign this project delivers)

The current design is **too dark, too repetitive, too rectangular, too border-dependent, and reads
like a technical SaaS site.** Move it toward an independent engineering-consultancy feel. Full spec
in `docs/VISUAL-ARCHITECTURE-PLAN.md`. Guiding principles:

- **Balanced light/dark/image rhythm — skew light.** The default page surface is **off-white
  `#F4F7F6`**. Deep colours create rhythm; they do **not** dominate every section. Stop defaulting
  sections to near-black.
- **Editorial typography, not techy display type** — reduce the extreme negative letter-spacing
  (e.g. `-.08em`/`-.085em`), calm the type scale, and stop using monospace eyebrows as the default
  labelling system everywhere.
- **Fewer borders, less rectangularity** — replace hairline-grid card walls with space, tone, and
  hierarchy. Softer structure, more air.
- **Consistent, reusable section archetypes** — compose pages from a small set of shared section
  patterns rather than bespoke 400–600-line per-page components.
- **Preserve the strong token foundation** — the `:root` design tokens in `globals.css` (teal
  scale, ink/muted, spacing, radii, type scale, container widths) are the best asset in the repo.
  Extend and rebalance them; don't discard them.

### Colour system (masterbook p.92, p.97) — roles, not just values

The role assignment matters more than the hexes.

| Role | Value | Notes |
|---|---|---|
| Default page surface | `#F4F7F6` | Off-white; also the text colour on dark surfaces. Skew light. |
| Primary authority / bands | `#073C4A` | Deep teal — hero panels, section bands, strong type. |
| Restrained accent | `#63B75D` | **Signal green** — state / nav cue. **NOT neon, NOT decoration.** |
| Footer / menu / rare hi-con | `#061216`–`#081F22` | Deep base. This is where the repo's current `#07141F` / `#0B1A22` belong — they are **NOT** a default background. |

DTG Focus uses its own steel-teal sub-family (§3) — do not inherit `#073C4A`.

> **Accent reconciliation:** the masterbook accent is **signal green `#63B75D`**, not amber. The
> current `--amber` (`#E8A33D`) token in `globals.css` is an interim; reconciling the accent role to
> signal green is a **Sprint 1 token task** — do not change `globals.css` for it now.

### Typography (masterbook p.93)

- The final web/corporate typeface is an **open decision** — do **not** standardise one. Inter is a
  flagged interim; the real face swaps in later as a token change (licensing + Peter/Mark sign-off).
- Fix the **system** now: large compact headlines, short supporting copy, restrained **uppercase**
  labels (replace the monospace eyebrows), highly readable body.
- **Relax** the extreme negative tracking (current ~`-.085em`).
- **Tabular numerals** for metrics, time series, TARPs and technical tables.
- Avoid: thin white text on dark, all-caps paragraphs, over-condensed body, many competing sizes.

### Section surfaces & imagery (masterbook p.94, p.97)

Three archetypes: (1) **light off-white**, (2) **deep-teal band `#073C4A`**, (3) **image-led with
deliberate negative space for headings** — not dark overlays over busy images. Avoid entirely:
cyberpunk glow, holograms, floating dashboards, generic PPE/stock imagery, radar hero shots, gaming
aesthetics, decorative data particles. Canonical diagram spine:
**Inputs → Independent Review → Governed Monitoring Outcomes.**

### Theme system & the dark-default migration stance (Sprint 3)

The site is theme-aware via a `data-theme` attribute on `<html>`, driven by a semantic `--c-*` token
layer (dark set + light set) — see `docs/THEME-ARCHITECTURE.md`. Recomposed pages and the section
kit consume **only** `--c-*` (+ `--accent`/`--accent-text`); legacy `--surface`/`--border`/`--ink`
are load-bearing for un-migrated pages and are left untouched.

- **Dark is the current default — but this is an explicit, TEMPORARY migration stance,** chosen
  because the un-recomposed pages are still hard-coded dark. **Light is the intended end-state
  default** (the masterbook mandates skew-light); the default flips to light once page recomposition
  is far enough along. The header toggle lets users switch today; its effect is progressive (only
  token-driven surfaces re-theme — legacy pages stay dark until recomposed).
- **Green split is enforced:** `--accent` (bright `#63B75D`) is for fills/decoration/dark-surface
  cues only; **any legible green text or meaningful cue uses `--accent-text`** (`#2E6B2A` on light —
  `#63B75D` on off-white is only 2.3:1). Never use `--accent` for green text on light.

---

## 8. Development rules

- **Design tokens are the source of truth.** Reference `:root` custom properties
  (`--teal-*`, `--ink`, `--space-*`, `--radius-*`, container/section vars — plus the accent token,
  currently `--amber`, to be reconciled to signal green `#63B75D` in Sprint 1) instead of
  hard-coding hex/px. When a value is missing, add a token rather than a magic number.
- **`globals.css` discipline.** The file grew by *accretion* (stacked "refinement pass / v2 /
  rebuild" override blocks). During the redesign, **edit the canonical rule in place** — do **not**
  append yet another override pass. Do not attempt a wholesale consolidation of `globals.css`
  unless that is the explicit task.
- **Component pattern.** Prefer the proven data-driven approach (`components/detail-content.tsx` →
  `DetailPage` + `detailPages`, and `components/internal-hero.tsx` → `InternalHero`) and new shared
  section archetypes over new bespoke per-page components.
- **Keep changes scoped and reversible.** One phase per branch/commit. Validate each live route
  visually before moving on.
- **Accessibility is a requirement, not a polish step.** Maintain heading order, `aria-*` already
  present, focus states, and **WCAG AA contrast** — especially critical as light sections are
  introduced.
- **Responsive:** design mobile-first; the site targets ~390px → 1440px+. Verify both ends of every
  section change.

---

## 9. Validation workflow

Before and after any visual change:

1. `npm run build` and `npm run lint` must pass. **Never run `npm run build` while `npm run dev`
   is live — stop the dev server first;** a concurrent dev server corrupts `.next` (mismatched
   CSS hashes → pages serve unstyled).
2. Visually verify the affected **live** routes at mobile (~390px) and desktop (~1440px).
3. Check contrast on any new light-on-dark or dark-on-light combination.
4. Commit per phase with a clear message; keep the baseline commit
   (`Baseline DTG website before Claude Code handover`) as the rollback point.

---

## 10. Working directory notes

- `work/` and `previews/` hold local scratch artifacts (screenshots, dev logs) and are not product
  code. Don't rely on them as source of truth.
- Git: branch `main`; keep the tree clean and commit per phase.

---

## 11. Skills precedence

- **`frontend-design` skill** governs *execution philosophy* — point of view, restraint, and
  structure that encodes meaning. It must follow the masterbook exactly; where its "take an
  aesthetic risk" instinct conflicts with DTG's restraint, the masterbook wins.
- **`ui-ux-pro-max` skill** must **not** be used to set or override palette, typography, section
  patterns, or "style" for this project — DTG already has a design system. Never let it
  auto-classify DTG into a product category and apply a preset. Consult it only for isolated
  implementation checks (e.g. its accessibility / pre-delivery checklist).

---

## 12. Provisional (masterbook v0.9 — verify before hardening or external use)

The masterbook is an internal working edition. The following are **provisional** pending leadership
sign-off and must not be locked into code or published externally without verification:

- The **web/corporate typeface** (Inter is interim only).
- **Logo master files and usage rules.**
- **A third party's proprietary metrics** (e.g. a sensor vendor's growth or performance numbers) —
  never republish another company's figures. Cite only DTG's own, verified numbers.
- **Client / partner names and logos.**

### 🚨 FOR PETER / LEADERSHIP — the masterbook asserts two things reality contradicts

**This is ONE issue, not two.** Both trace to the same root, and both are business-document
decisions, not copy or code decisions:

1. **"DTG is not a hardware vendor."** False — **DTG distributes radar and GNSS in Indonesia.**
   Retired from §1 and §3 and removed from the site on 2026-07-17.
2. **"DTG Focus™ is a finished, fully-integrated product."** The masterbook gives it a formal
   category, five abstract pillars, a colour sub-family, a logo and a trademark, and describes it as
   complete. **The honest position is §3's:** the tools are **built and running**, used daily by
   DTG's own engineers and in client delivery, and individual capabilities **can be deployed for
   clients on request** — but the **fully integrated, full-coverage** product is **still being
   completed**. The masterbook overstates the finished state; it does not describe a concept.

   > ⚠️ **THIS ITEM WAS ITSELF A GENERATOR — corrected 2026-07-18.** Until this edit, §12 still read
   > *"in active development and only partially used internally … not yet available for a client to
   > buy"* and claimed the issue *"blocks the framing pass on `/dtg-focus`"*. That was the
   > pre-amendment framing: §3 was corrected and **§12 was not**, so the governing document
   > **contradicted itself**, and a reader landing on §12 first would take the retired framing
   > **with the doc as justification** — the precise failure this section exists to warn about,
   > happening inside this section. The block referred to was cleared and `/dtg-focus` has shipped.
   > **A document that contradicts itself is a live generator, not a stale note.** When §3 (or any
   > rule here) is amended, grep this file for the old framing in the same change.

**The masterbook is the ROOT GENERATOR.** It was written before the Indonesia distribution arm and
before Focus's real status, so it describes a company that no longer exactly exists. Amending
CLAUDE.md stops *this site* reproducing the claims — but the masterbook will keep re-authoring them
into every new document, deck and proposal until it is amended itself. **Fixing the generator is the
only durable fix; fixing instances is not.**

**The standing test for any independence or identity wording: "does it survive discovery?"** If a
client later learned the full truth, would the claim still stand? Engagement-scoped wording passes
("on your site, what we recommend is driven by your risk and your data"). Company-wide financial,
relationship or category claims do not — **including ones framed as identity** ("DTG is not a…",
"DTG is independent of…"), which read as description and so evade sweeps aimed at commercial wording.

**Related, already escalated:** the `/services/technical-advisory` matrix row *"Recommends across the
market, not one product line"* (assumes DTG advisory genuinely recommends against its own
distributed products — **if untrue, CUT the row, do not reword**; guard comment is in the code), and
the vendors FAQ on the same page, which is deliberately silent on the distribution arm — defensible,
but a **holding position**. If DTG establishes real advisory/distribution separation, that FAQ is
where to say so, and it flips from a risk into a credential.
