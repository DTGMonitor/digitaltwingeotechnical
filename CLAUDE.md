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
- **Not** a monitoring hardware vendor, a software vendor, or a technical SaaS product company.
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
- **Positioning benchmark:** the calibre of major international engineering consultancies
  (AtkinsRéalis, Mott MacDonald, Arup, Egis, Worley). Match the *quality, restraint, and editorial
  confidence* of that tier — **do not copy their layouts, colours, or components.**
- **Tone:** engineering-grade, calm, credible, defensible. Not startup-y, not hype, not "SaaS
  dashboard."
- **Formal category (use verbatim):** an **independent geotechnical monitoring, analytics and
  decision-support company.** Not a hardware vendor, software vendor, or technical SaaS product.
- **Primary promise:** **Trusted Monitoring Outcomes.** Credibility line: *Independent Monitoring.
  Trusted Outcomes.*
- **Tagline / strategic line:** **Integrated Data. Informed Decisions.**
- **Company narrative spine:** Integrate · Govern · Decide (the high-level three-word system).
- **AI discipline:** never lead with "AI-powered." The canonical framing is **"engineering
  judgement supported by advanced analytics"** — AI is an enabling layer behind the scenes, never a
  replacement for engineering judgement and never presented as autonomously identifying failures.

### DTG Focus™ rule (important)

- **DTG Focus™ is a supporting, governed monitoring environment inside DTG's wider service
  approach.** It is **not** the centre of the company and **not** a standalone SaaS product.
- **Category (masterbook):** primary — **Operational Decision-Support Platform**; secondary —
  **Monitoring Governance Framework**. **Never** use "dashboard" as its category (visualisation is
  one layer, not the value).
- **Five functional pillars:** **Integrate · Validate · Analyse · Govern · Act.** These are distinct
  from the company narrative spine (Integrate · Govern · Decide) and must not be conflated.
  **"Visualise" is deliberately not a pillar.**
- Present DTG Focus as one capability that supports review workflows, visibility, traceability and
  decision records — subordinate to DTG's independent positioning on corporate pages. Introduce
  Focus only where it materially improves the solution.
- **Focus colour sub-family (distinct from the parent — do not inherit `#073C4A`):** Focus Teal
  `#0A5266`, Steel Teal / data accent `#0F5E73`, Dark Focus `#0A4454`, optional refined accent
  `#2E7C92`. Colour refinement is **not** a redesign — preserve the existing symbol, wordmark,
  proportions and trademark.
- Always render the mark via `components/brand.tsx` (`DTGFocusMark` / `renderTrademarkText`) so the
  ™ is consistent. Never hand-type "DTG Focus TM".

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
- **GroundProbe growth numbers** and any quantified metrics.
- **Client / partner names and logos.**
