# DTG Website — Visual Architecture Plan

A controlled visual architecture redesign of the **existing** DTG website. This plan changes how
the site *looks and is composed*, not what it says or where it lives. It is bound by the **DTG
Company & Brand Masterbook (v0.9)** (the single source of truth for palette, typography, spacing,
section rhythm and messaging — it wins on any conflict), `CLAUDE.md` (strategy/brand/dev rules) and
`AGENTS.md` (naming rules).

**Non-negotiables (from CLAUDE.md):** preserve content architecture, routes, messaging and working
functionality; do not rebuild; do not delete routes/components or consolidate `globals.css` as part
of this work; DTG Focus stays a supporting environment, not the centre; benchmark the *quality* of
AtkinsRéalis / Mott MacDonald / Arup / Egis / Worley without copying them.

---

## 1. Assessment of the current visual system

**Strengths (keep):**
- A complete, well-named **design-token layer** in `app/globals.css` `:root` — teal scale
  (`--teal-900…--teal-50`), `--ink`/`--ink-soft`/`--muted`, a restrained accent (masterbook: signal
  green `#63B75D`; currently the interim `--amber` token), spacing scale
  (`--space-*`), radii, a type scale, and container/section vars (`--site-max-width`,
  `--site-gutter`, `--section-space`). This is the strongest asset and the redesign builds on it.
- Solid structural components: `InternalHero`, `DetailPage`/`detailPages` (data-driven, 23 routes),
  `brand.tsx` trademark handling, a single shared mega-menu, footer stack.
- Clean, approved content and a coherent information architecture.

**Problems (the redesign targets these):**
1. **Too dark.** Nearly every section defaults to near-black — `.story-page` `#07141F`,
   `--color-bg-night` `#0B1A22`, `.proof-credibility` `#07161c→#061216`, `.focus-section`
   `var(--ink)`. There is almost no light editorial relief, so the site reads as one long dark
   dashboard.
2. **Too techy / SaaS.** Monospace (`IBM Plex Mono`) eyebrows are the default label system
   *everywhere* (`.eyebrow`, `.story-eyebrow`, `.section-label`, `.proof-card-kicker`, plus a
   40-selector mono rule at globals.css:1968). Combined with extreme display letter-spacing
   (`.story-display -.085em`, `.story-headline -.08em`, `.section-headline -.074em`) and
   grid-line backgrounds (`.grid-bg`), the tone is developer-tool, not engineering consultancy.
3. **Too rectangular & border-dependent.** Structure is carried by hairlines and boxed grids
   (`.proof-editorial-grid` with top/bottom/right borders on every `.proof-card`, `.hairline`,
   `1px` card walls). Little use of space, tone, or scale to create hierarchy.
4. **Repetition.** Similar dark hero → mono eyebrow → boxed grid → dark CTA rhythm repeats across
   pages, so sections blur together and pages feel same-y.
5. **Accretion in CSS.** `globals.css` is ~15.7k lines of stacked "refinement pass / v2 / rebuild"
   overrides. (Consolidation is out of scope here, but the redesign must edit canonical rules in
   place rather than add another override layer.)

---

## 2. What should remain unchanged

- **All routes, URLs, and the navigation structure** (live families in CLAUDE.md §5).
- **All approved copy/messaging** and the Integrate · Govern · Decide spine.
- **Design-token names** in `:root` (values may be rebalanced/extended; names stay stable so
  nothing breaks).
- **Structural building blocks:** `components/site.tsx` nav architecture and its shared-mega-menu
  guardrail, `InternalHero`, `DetailPage`/`detailPages`, `brand.tsx`, `SiteBottom`/`SiteFooter`/
  `PreFooterCTA`.
- **Working behaviour:** header hide/reveal on scroll, mega-menu hover/focus logic, mobile drawer,
  scroll-to-top, contact form, motion reveals.
- **DTG Focus's subordinate role** in the IA (a supporting environment within Services, not a hero
  product).

---

## 3. What needs visual redesign

- **Section background rhythm** — introduce light and image-led sections; stop defaulting to dark.
- **Typography** — calmer scale, less negative tracking, retire mono-as-default eyebrows in favour
  of a restrained sans label; reserve mono for genuinely technical microdata only.
- **Structure** — replace border/grid walls with spacing, tone bands, and scale; soften
  rectangularity (measured radii, larger gutters, generous vertical rhythm).
- **Section archetypes** — extract a small kit of reusable section patterns and compose pages from
  them, reducing bespoke per-page markup over time.
- **Imagery** — treat operational photography as a first-class section type (full-bleed and
  split-editorial), not just a hero background.
- **Colour balance** — keep the teal identity with **signal green (`#63B75D`)** as the restrained
  accent (masterbook), and rebalance so light off-white surfaces carry most reading content while
  deep teal becomes intentional punctuation. (The interim `--amber` token is reconciled to signal
  green in Sprint 1.)

---

## 4. Proposed typography hierarchy

**The final web/corporate typeface is an open decision (masterbook p.93) — do not standardise one.**
Inter is a **flagged interim** primary voice pending licensing + Peter/Mark sign-off; the real face
swaps in later as a token change. Keep IBM Plex Mono but **demote it to technical microdata only**
(metrics, sensor tags, indices) — not general eyebrows. Use **tabular numerals** for metrics, time
series, TARPs and technical tables. Avoid thin white text on dark, all-caps paragraphs,
over-condensed body, and many competing sizes.

| Role | Usage | Proposed treatment (token-driven) |
|---|---|---|
| Display (H1) | Home hero, page heroes | Inter 400–500, `clamp(2.75rem, 4.5vw, 4.5rem)`, line-height ~1.02, tracking **-0.02em** (relaxed from -.08em) |
| H2 section | Section headlines | Inter 400–500, `clamp(2rem, 3vw, 3.25rem)`, line-height ~1.1, tracking -0.015em |
| H3 | Card/subsection titles | Inter 500, ~1.5–1.75rem, line-height 1.15 |
| Lead / deck | Section intros | Inter 400, ~1.125–1.375rem, line-height 1.55, `--ink-soft` on light / `--text-on-dark-soft` on dark |
| Body | Paragraph text | Inter 400, 1rem/1.65, max measure ~68ch |
| Eyebrow / label | Section kickers | **Inter** 500, 0.75rem, letter-spacing ~0.12em, uppercase, `--muted` — *replaces default mono eyebrow* |
| Technical microdata | Metrics, sensor/index tags | IBM Plex Mono 500, 0.6875–0.75rem, letter-spacing 0.14em |

Principles: one calmer heading scale reused everywhere; max ~2 type sizes visible per section;
relaxed tracking for an editorial (not compressed-tech) feel; consistent optical alignment to the
grid.

---

## 5. Proposed grid & spacing system

Build on existing tokens; add a shared content-column system.

- **Container:** keep `--site-max-width: 1440px` and `--site-gutter: clamp(1.25rem, 5vw, 5rem)`.
  Standardise all sections on `.site-container`; retire the parallel `.shell` / `.story-shell` /
  `*-container` widths over time so every section aligns to one column.
- **Editorial grid:** a 12-column logical grid; default reading measure ~7–8 cols; asymmetric
  editorial splits (e.g. 5/7, 7/5) instead of 4-up boxed grids.
- **Vertical rhythm:** section padding from `--section-space` (`clamp(4rem, 9vw, 8rem)`) and a
  compact variant; **increase** default whitespace between sections so content breathes.
- **Spacing scale:** use `--space-*` exclusively; no ad-hoc px. Introduce 1–2 larger steps if
  needed for editorial air.
- **Radii:** adopt a restrained, consistent radius (`--radius-md`/`--radius-lg`) on cards/media to
  reduce hard rectangularity — measured, not pill-shaped.
- **Structure without borders:** prefer background tone bands and spacing to separate content;
  reserve hairlines for genuine tabular/technical contexts.

---

## 6. Proposed section background rhythm (light / deep-teal / image-led)

Define **three canonical section surfaces** (masterbook p.92, p.94, p.97) and alternate them
deliberately so no page is a wall of one tone. **Skew light:** deep colours create rhythm, they do
not dominate every section.

- **Light off-white (default reading surface):** `#F4F7F6`, `--ink` text, `--ink-soft` secondary.
  Carries most body content — the biggest change from today.
- **Deep-teal band (punctuation):** **`#073C4A`** (deep teal — *not* near-black), `#F4F7F6` text.
  Reserved for hero moments, proof/impact, and DTG Focus's governed-environment framing —
  intentional, not default. The repo's current `#07141F` / `#0B1A22` deep-base values belong to
  footer / menu / rare high-contrast only, **not** section backgrounds.
- **Image-led:** full-bleed operational photography or split image/text with **deliberate negative
  space for headings** — not dark overlays masking busy images. First-class archetype, not hero
  decoration.

**Restrained accent:** signal green `#63B75D` — state / nav cue, CTAs, small emphasis — **never** a
background field, never neon, never decoration. (Interim `--amber` token → signal green in Sprint 1.)

**Avoid entirely:** cyberpunk glow, holograms, floating dashboards, generic PPE/stock imagery, radar
hero shots, gaming aesthetics, decorative data particles. **Canonical diagram spine:**
Inputs → Independent Review → Governed Monitoring Outcomes.

**Rhythm rule of thumb per page:** open with a considered hero (image-led or deep-teal), then
alternate light ↔ (occasional deep-teal/image) so adjacent sections contrast.

---

## 7. Reusable section archetypes

A small kit to compose pages (implemented as shared components — see §12):

1. **Hero** — variants: `image` (full-bleed + overlay), `dark` (statement), `light` (editorial).
   Generalises the home hero and `InternalHero`.
2. **Intro / statement band** — eyebrow + H2 + lead, generous whitespace, light default.
3. **Editorial split** — text column + media/figure (5/7 or 7/5), alternating side.
4. **Capability / value grid** — 2–4 items using space + tone (not boxed borders); optional mono
   microdata tag per item.
5. **Proof / metrics band** — large numerals + short labels; dark or light; no cell walls.
6. **Operating-environments showcase** — cards/carousel for Applications (evolves
   `applications-carousel`).
7. **Process / approach steps** — Integrate → Govern → Decide sequence.
8. **DTG Focus module** — a contained, clearly subordinate feature block.
9. **Pre-footer CTA** — evolve existing `PreFooterCTA`; softer, editorial.

Each archetype: token-driven, responsive, surface-aware (light/dark/image), and accepts data props
so pages become composition, not bespoke markup.

---

## 8. Homepage redesign plan (section by section)

File: `app/page.tsx` (+ `components/storytelling.tsx`, `monitoring-challenge.tsx`,
`services-section.tsx` `HomeServicesOverview`, `applications-carousel.tsx`).

1. **Hero** — keep image-led "Integrated Data. Informed Decisions." Refine: relax display tracking,
   improve overlay legibility, calmer pathway links. Keep dark here (intentional).
2. **Monitoring challenge** (`MonitoringChallenge`) — convert to a **light editorial** intro/statement
   band; retire grid-line background; more whitespace.
3. **Services overview** (`HomeServicesOverview`) — light capability layout using the value-grid
   archetype (space/tone, not boxed cells); mono demoted to optional microdata.
4. **Proof & credibility** — keep a **dark statement** metrics band (this is a good place for dark),
   but remove the bordered 4-cell wall; use large numerals + air.
5. **DTG Focus module** — reframe as a **supporting** governed-workflow block (contained, not
   full-viewport hero); reinforce subordinate positioning per CLAUDE.md.
6. **Operating environments** (`ApplicationsCarousel`) — softer cards, measured radii, image-led;
   reduce border reliance.
7. **Pre-footer CTA / footer** — editorial CTA; consistent with new type/spacing.

Target rhythm: image(dark) → light → light → dark → light/contained → image-led → CTA. No two
adjacent sections share the same flat dark tone.

## 9. About page redesign direction

Files: `app/about/page.tsx` + editorial components (`purpose-principles-editorial`,
`vendor-independence-editorial`, `our-approach-editorial`, `technical-assurance-section`,
`leadership-section`).

- Lead with a **company-story, light editorial** narrative — this is where DTG's independent,
  engineering-consultancy character should read strongest.
- Use editorial splits and generous whitespace; imagery of operations/leadership as image-led
  bands.
- Standardise the About sub-pages on the shared hero + archetypes so the five children feel like
  one family (they currently each render a separate `*-editorial` component).
- Keep leadership content/credibility; restyle cards to be softer and photo-forward.

## 10. Services & Applications redesign direction

Services files: `app/services/page.tsx` (`ServicesSection`) + the five service components
(`remote-monitoring-review-page`, `reporting-back-analysis-page`, `technology-integration-page`,
`data-analytics-automation-page`, `technical-advisory-service-page`).

Applications files: `app/applications/page.tsx` (`applications-overview-editorial`) + the four
environment components (`open-pit-mining-page`, `tailings-storage-facilities-page`,
`underground-mining-page`, `infrastructure-civil-page`).

- **Naming (AGENTS.md):** nav labels stay **Services** / **Applications**; section *headings* may
  use **Capabilities** / **Operating Environments** for strategic positioning.
- Move overview + detail pages onto the **shared section archetypes** (hero → intro → capability/
  value grid → editorial split → CTA), so the currently bespoke 380–570-line components converge on
  one system. Do this **page-by-page, preserving content**, not as a big-bang rewrite.
- Reduce dark-on-dark boxed grids; introduce light reading surfaces and operational imagery per
  environment.
- Keep each detail page's approved copy and its route; only the composition/visual layer changes.

## 11. DTG Focus redesign direction

Files: `app/dtg-focus/page.tsx` (`dtg-focus-editorial-page`) + its nav children via `DetailPage`.

- Reinforce that **DTG Focus is a supporting, governed monitoring environment within DTG's service
  approach — not a standalone SaaS product and not the company's centre** (CLAUDE.md §3).
- A dark/contained "governed environment" treatment is appropriate here (one of the few places dark
  earns its place), but keep it clearly framed as *one capability*, cross-linked back to Services.
- Use the trademark mark component consistently; avoid product-marketing/pricing/SaaS tropes.

## 12. Shared components to create or refactor

**Create (new shared archetype kit under `components/sections/`):**
- `SectionHero` (variants: image / dark / light) — generalises home hero + `InternalHero`.
- `StatementBand`, `EditorialSplit`, `ValueGrid`, `MetricsBand`, `ProcessSteps`, `FocusModule`.
- A small `Surface`/section wrapper encoding light/dark/image + standard padding + `.site-container`.

**Refactor (evolve, do not delete during this phase):**
- `internal-hero.tsx` → fold into / back `SectionHero`.
- `PreFooterCTA.tsx` → editorial restyle.
- `applications-carousel.tsx` → softer, image-led cards.
- `services-section.tsx` → adopt `ValueGrid`; (dead `Legacy*` code left untouched for now).
- Per-page application/service components → migrate onto archetypes incrementally.

**Do not touch yet:** route deletion, orphan components, `globals.css` consolidation.

## 13. Exact files likely to be edited

Grouped by phase; content preserved throughout.

- **Tokens & foundation:** `app/globals.css` (`:root` values + canonical foundation rules — edit in
  place, no new override passes), `tailwind.config.ts` (optionally mirror tokens).
- **New shared kit:** `components/sections/*` (new), `components/internal-hero.tsx`,
  `components/PreFooterCTA.tsx`, `components/brand.tsx` (only if mark styling shifts).
- **Home:** `app/page.tsx`, `components/storytelling.tsx`, `components/monitoring-challenge.tsx`,
  `components/services-section.tsx`, `components/applications-carousel.tsx`.
- **About:** `app/about/page.tsx`, `components/purpose-principles-editorial.tsx`,
  `components/vendor-independence-editorial.tsx`, `components/our-approach-editorial.tsx`,
  `components/technical-assurance-section.tsx`, `components/leadership-section.tsx`.
- **Services:** `app/services/page.tsx`, `components/remote-monitoring-review-page.tsx`,
  `components/reporting-back-analysis-page.tsx`, `components/technology-integration-page.tsx`,
  `components/data-analytics-automation-page.tsx`, `components/technical-advisory-service-page.tsx`.
- **Applications:** `app/applications/page.tsx`, `components/applications-overview-editorial.tsx`,
  `components/open-pit-mining-page.tsx`, `components/tailings-storage-facilities-page.tsx`,
  `components/underground-mining-page.tsx`, `components/infrastructure-civil-page.tsx`.
- **DTG Focus:** `app/dtg-focus/page.tsx`, `components/dtg-focus-editorial-page.tsx`,
  `components/detail-content.tsx` (styling of `DetailPage` only, not the data).
- **Contact:** `app/contact/page.tsx`, `components/contact-form.tsx` (visual only).

Explicitly **out of scope** for editing now: `components/site.tsx` structure (styling refinements
only, no nav restructure), all orphan route files, dead components.

## 14. Responsive considerations

- **Mobile-first**, targeting ~390px → 1440px+ (existing breakpoints already exercise 390/768/1440).
- Archetypes must degrade cleanly: editorial splits stack to single column; value grids reflow
  4→2→1; heroes keep legible overlays and safe text width at 390px.
- Type scale uses `clamp()` so display sizes shrink gracefully; verify no compressed tracking at
  small sizes.
- Preserve the working mobile nav drawer and header hide/reveal; test menu at 390px.
- Full-bleed imagery must use `sizes`/`fill` correctly and not cause horizontal scroll.

## 15. Accessibility considerations

- **Contrast is the top risk** as light sections arrive: every text/background pair must meet
  **WCAG AA** (4.5:1 body, 3:1 large text). Validate signal-green-on-light and light-on-image especially;
  image-led sections need a controlled overlay token to guarantee legibility.
- Maintain **logical heading order** (one H1/page, sequential H2/H3) through recomposition.
- Preserve existing `aria-*`, `aria-current`, breadcrumb semantics, and visible **focus states**;
  ensure new interactive elements are keyboard-reachable.
- Respect `prefers-reduced-motion` for `framer-motion`/`gsap` reveals.
- Don't rely on colour alone to convey meaning (e.g. status/accent).

## 16. Implementation phases

Each phase is independently shippable, content-preserving, and visually validated before the next.

- **Phase A — Foundation & tokens.** Rebalance `:root` (surfaces, tracking, eyebrow strategy),
  add light/dark/image surface primitives and the section-kit scaffolding. No page rewrites yet.
  Establish the new type + spacing rhythm in isolation.
- **Phase B — Shared archetype kit.** Build `components/sections/*` (Hero, StatementBand,
  EditorialSplit, ValueGrid, MetricsBand, ProcessSteps, FocusModule) against the new tokens.
- **Phase C — Homepage.** Recompose `app/page.tsx` onto archetypes with the new section rhythm.
  This is the reference implementation for the rest of the site.
- **Phase D — About.** Apply archetypes; unify the five About children.
- **Phase E — Services & Applications.** Overview + detail pages migrated page-by-page onto
  archetypes; apply naming rules to headings.
- **Phase F — DTG Focus & Contact.** Reframe Focus as a supporting environment; restyle Contact.
- **Phase G — Polish & consistency pass.** Cross-page rhythm, motion, responsive + a11y audit.

(Route/component/`globals.css` cleanup remains a **separate, later** effort requiring approval.)

## 17. Validation & rollback strategy

**Validation (every phase):**
1. `npm run build` + `npm run lint` pass.
2. Visual review of all affected **live** routes at ~390px and ~1440px (capture before/after
   screenshots into `work/` for comparison).
3. Contrast check on all new colour pairings (AA).
4. Keyboard + reduced-motion smoke test on changed pages; confirm nav/drawer/form still work.
5. Confirm **no content, route, or messaging changed** — visual layer only.

**Rollback:**
- One branch + commit per phase; small, reviewable diffs.
- Baseline commit `Baseline DTG website before Claude Code handover` is the hard rollback point.
- Because tokens keep their names and routes are untouched, any phase can be reverted independently
  without breaking others.
- If a shared archetype regresses multiple pages, revert the archetype commit rather than patching
  each page.
