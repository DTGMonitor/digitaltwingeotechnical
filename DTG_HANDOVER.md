# DTG Website — Session Handover

**Read this first.** It hands off the redesign to the next session. Written 2026-07-18.
The deep detail lives in the auto-memory files (linked at the bottom) — this is the map, not the territory.

---

## State

- **`main` is clean.** Build + lint green. Tree clean. (This repo is the **nested** path `C:\dtg-website\dtg-website`, not the outer folder — recurring trap.)
- **Session 2 (2026-07-18) shipped two branches on top of `ea13927`:**
  - `cae0dd3` — **the DTG Focus framing back-sweep.** §3 was amended but the copy the OLD §3 authored was never swept. Eight live copy instances, one live 200 route (`/focus` → 308), one bundle-shipped dead key, four guard comments, and the §12 self-contradiction that was certifying all of it.
  - `b9395d4` — **the DetailPage retheme.** 13 legacy routes fixed at the root by re-pointing `.story-page`/`.detail-*`/`InternalHero` at `--c-*`. AA gate: 14 routes × 2 themes, zero fails, floors 5.99 light / 7.14 dark.
- **Every axis has shipped:** Applications (overview + 4 environments), Solutions, Services (overview + 5 detail pages), About, and DTG Focus™. All recomposed onto the `--c-*` theme layer with scoped class families (`.appsx-* .envd-* .civx-* .solx-* .svcx-* .svcd-* .ab-* .dfx-*`).
- **Compliance is settled** — every escalated item is resolved and shipped: the "not a hardware vendor" claim, the advisory matrix row, the Beck Engineering removal (Catalyst Earth stays — confirmed), the DTG Focus™ doc-vs-reality conflict (CLAUDE.md §3 amended), and the legacy-route client-name/sensor-brand leaks (redirected + dead data deleted). Proof figures are **approved to publish**.
- **Light-theme sign-off is COMPLETE.** All 16 recomposed routes pass AA in light. **Floor 4.82** — the bright-green eyebrow (`--accent-text`) on a deep-teal band (`--c-surface-band`), the site's tightest passing pair. **Anything below 4.82 is a regression, not legacy debt.** Full per-route baseline is in commit `4e6aeca`.

---

## Next task — the /contact redesign (NOT the flip)

**The flip is no longer next.** `/contact` is the last theme-blind route: its body is a legacy
`.contact-*` class family, measured **100% theme-blind across 80 elements**. Its hero already themes
(it shares `InternalHero` with the 13 DetailPage routes).

**It is being redesigned, so it gets themed ONCE, in the redesign — not rethemed now and again
later.** The user is producing a mockup + brief in a separate chat. **The `/contact` redesign lands
BEFORE the flip**, so the flip arrives on a uniformly themed site.

> ⚠️ Remember the standing rule: **the mockup chat cannot see this repo.** Take INTENT from the
> mockup, restyle in place with the repo's own mechanism, and audit the brief's assumptions first —
> six briefs so far carried an assumption that didn't survive the repo, and it can shrink the task
> as easily as grow it. See `dtg-working-style`.

---

## Then — the dark→light default flip

The site currently defaults to **dark** as a temporary migration stance; **light is the masterbook end-state**. The flip is the last visual item, and it runs **last**, after `/contact`.

### 🔑 Three gates the flip must respect (learned the hard way, 2026-07-18)

1. **ENUMERATE FROM THE ROUTER, not from any list.** Derive every live 200 from `app/**/page.tsx`
   minus redirects, at run time. Do **not** trust this handover, the sign-off, a memory file, or a
   previous audit's route list — **five separate misses this session traced to an incomplete list**
   (`/contact` belonged to no list at all: not legacy, not recomposed, so neither audit had it).
   The lists are the thing that has been lying.
2. **AA IS NOT A THEME CHECK.** `work/lightsweep.mjs` passed `/contact` at floor 7.65 while it was a
   fully dark island — it measures readability against the background *actually painted*, not
   whether the surface responds to `data-theme`. Run **`work/blindscan.mjs`** as well: it renders
   both themes and diffs computed styles across every element in `<main>`.
3. **THE HEALTHY BLIND-FLOOR IS ~15%, NOT 0%.** Always-dark heroes, CTA bands, buttons and SVG paths
   legitimately never flip; a correctly recomposed route measures 15% blind. The pass condition is
   **"every blind element sits inside an intentionally-always-dark region"** — chasing 0% generates
   false work against correct code.

### The tooling

Both live in `work/` (gitignored scratch — they survive in `main`'s history via this note; rewrite
from the pattern if absent). Dependency-free Node + Chrome-CDP.

- **`work/lightsweep.mjs <url> [theme]`** — AA gate. Every leaf text element vs its **real
  composited** background, correct threshold by size. **Floor to beat: 4.82.** Sub-4.5 is a
  regression, not legacy debt.
- **`work/blindscan.mjs <url>`** — re-theme gate (see gate 2 above). Also `work/themediff.mjs`
  (selector-list variant — weaker, prefer blindscan) and `work/rect.mjs` (selector → crop coords,
  pairs with `work/shot.mjs <url> <out> <width> <theme> [crop]`).
- **Eyes-on every route, both themes, at 1440 AND 390.** The gates prove numbers, not that it
  *looks* right — that distinction has mattered repeatedly here.

### ⚠️ Legacy-dark gap — CLOSED 2026-07-18

The 14 routes that would have been dark islands are fixed: **13** were `DetailPage` (rethemed,
`b9395d4`) and **`/focus`** was 308-redirected (`cae0dd3`). **`/contact` is the only one left**, and
it is handled by its redesign above. *(An earlier version of this note said "13 legacy routes, 11 of
them DetailPage" — both figures were wrong, and `/contact` was missing entirely. Derive from the
router, not from this file.)*

### Known issue to fix DURING the flip pass

**`/solutions` situation 06, at 390px: the `outcome` text wraps one word per line.** Its two short
chip labels sit beside the outcome block and crush it; situation 01's longer labels wrap below and
render fine — so the bug is **chip-label-length dependent**. Pre-existing, **proven by stash-test
against `main`**. Fix the `.solx-sit__outcome` / chips row rule and **test with both short and long
labels** — fixing against 06 alone will look right and still be wrong for 01.

- The flip itself is the `data-theme` default in `app/layout.tsx` + the no-flash inline script (see `docs/THEME-ARCHITECTURE.md`).

---

## Then — dead-code cleanup

Orphaned components + dead CSS the recomposition left behind (its own branch, after the flip). **The named work-list is in the `dtg-dead-code-cleanup` memory.** **Re-verify each item is genuinely unreferenced before removing** — the `.service-card` lesson: a grep that says "dead" can be wrong (multi-line JSX defeats `<Component` greps; a class may live in a comment or a `name=` attribute). Confirm by build + rendered check, not by eyeball.

---

## ✅ RESOLVED 2026-07-18 — the Focus framing back-sweep (`cae0dd3`)

*Kept as the record of WHY, not as open work. Nothing here is outstanding.*

**The pattern worth remembering: CLAUDE.md §3 was amended, and the copy the OLD §3 had already
authored was never swept.** The forward rebuild of `/dtg-focus` shipped; the back-catalogue sat
violating for a day. **Amending a generator obliges a back-sweep** — that rule came out of this and
is now in `dtg-fix-the-generator`.

**And §12 was protecting the violations.** It still carried the pre-amendment framing, so the
governing doc contradicted itself and *vouched for* the very copy it should have flagged. Anyone
checking would have read §12 and correctly left the copy alone. **A doc that contradicts itself
certifies its own bugs** — more dangerous than doc-vs-reality, because the checker stops checking
with the doc on their side.

Fixed: `/focus` 308 → `/dtg-focus` (was a live 200 publishing *"Currently Under Development"*);
eight copy instances on `/about`, `/solutions`, `/services/technology-integration`;
`detailPages["dtg-focus"]` deleted (dead, but shipping in the bundle via 13 importing routes);
**four** guard comments that carried the retired framing — one of which *instructed* preservation,
and one sat above the two violations in its own file, certifying them. §12 reconciled to §3.

Verified clean by rendered-HTML sweep across all 50 routes **and** shipped-bundle grep, both with
positive controls.

> **The sweep lesson, four instances now:** `/focus` survived earlier audits because CLAUDE.md §5
> records it "verified clean by rendered-HTML sweep" — a sweep scoped to **client names and sensor
> brands**. Focus-framing was never a swept category. *A category nobody enumerates cannot fail an
> audit.* My own widened sweep then still missed *"is being built"* and *"Where DTG is heading"* —
> I enumerated **phrasings, not the category**, and reported five instances when there were eight.

---

## Deferred content — the client case-study paper (ADDED 2026-07-18; was recorded NOWHERE)

**Add the client case-study paper to `/services/data-analytics-automation` on publication — with the client
name REDACTED.** This item existed only in conversation — not in this handover, not in CLAUDE.md,
not in a code comment, not in memory. It was one session from being lost entirely.

### 🔒 The name does NOT go on the site (user ruling, 2026-07-18)

**"The paper publishes" and "DTG may use the client's name publicly" are two different permissions,
and only the client grants the second.** A paper being public does not transfer that right to DTG's
marketing site. This was asked and the answer is **no, not yet.**

- **The move is the proof without the name:** *"a published case study on a major gold operation."*
- **The client name stays on the locked list** with the other locked client/site identities — the
  names behind the `4a62793` breach fix — **until the client says otherwise in writing.** The guard
  comment at `components/environments/tsf-detail.tsx:6` (*"Client/site name MUST NOT appear"*)
  stays as-is.
- Publishing the name without explicit written client consent would be **a second client-name
  breach**, not a content decision.

---

## 🔴 The only leadership item left — the masterbook

**CLAUDE.md is fixed; the masterbook (`DTG_Company_Brand_Masterbook_v0.9.pdf`) is not.** It still:
- describes **DTG Focus™ as a finished product** (it is built-and-running but the fully-integrated product is still being completed),
- carries the **old five pillars** (Integrate·Validate·Analyse·Govern·Act — superseded by Integration·Analytics·Review&workflow·Governance&reporting·Portfolio view), and
- keeps the **Focus colour sub-family** (retired for the site — Focus uses the site palette, off-white logo).

**It is the root generator: it will re-author all three into the next document anyone writes.** This is a business-document decision — **Peter's call, not a code fix.** Escalated in CLAUDE.md §12. Nothing in the codebase can close it.

### ⚠️ But CLAUDE.md §12 itself is now STALE — and it is a generator too (found 2026-07-18)

**§3 was amended; §12 was not, and the two now contradict each other in the same file.** §12 item 2
still asserts Focus *"is **in active development** and only partially used internally … not yet
available for a client to buy"* and that this *"still **blocks** the framing pass on `/dtg-focus`,
home and the three Focus children."* §3 says the opposite and is the amended, authoritative version:
**built and running, used in delivery for clients, and NEVER describe it as "in development".**

A reader who lands on §12 first gets the retired framing **from the governing doc** — exactly the
failure mode §12 is itself written to warn about. **This one IS a code/doc fix and needs no
leadership input:** reconcile §12 item 2 to §3's language and drop the stale "blocks" claim (the
block was cleared). Keep the masterbook escalation — that part is still true.

---

## How this project works (read the memories — don't re-derive)

The auto-memory files carry the hard-won patterns. In priority order:

- **`dtg-fix-the-generator`** — the load-bearing meta-pattern: when you find a defect, fix what PRODUCED it, not the instance. Also "orphan ≠ safe when a route is live and leaking" (proven twice, the second a confidentiality breach).
- **`dtg-measurement-traps`** — measurement APIs answer the wrong question truthfully; the first number you see is not the answer. **Trust rendered output over greps.** Bisect; test fixes live; stash-test against `main` before calling a bug pre-existing.
- **`dtg-token-rescope-rule`** — the `--c-*` on-dark re-scope is the most productive bug source: re-scope the COMPLETE token set; duplicate blocks drift. `--c-text-muted` was renamed `--c-decorative-only` (decoration only, never text). **Enumerate every surface a token lands on** — a surface nobody listed can't fail an audit (that's how raised-dark hid a live fail for months).
- **`dtg-working-style`** — verify the real render not the mockup/brief; flag over-claims hard; correct your own errors; screenshots before every commit; **audit first — six briefs carried an assumption that didn't survive the repo** (it can shrink the task, not only grow it).
- **`dtg-dead-code-cleanup`** — the deferred cleanup work-list.

**Working method that has held all session:** per-page/per-concern branch → build + lint → screenshot both themes → **measure (ruler + contrast), don't eyeball** → report before committing → `--no-ff` merge. Live bugs get their own branch, never bundled with design work.
