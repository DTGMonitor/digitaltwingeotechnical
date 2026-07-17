# DTG Website — Session Handover

**Read this first.** It hands off the redesign to the next session. Written 2026-07-18.
The deep detail lives in the auto-memory files (linked at the bottom) — this is the map, not the territory.

---

## State

- **`main` is clean at `ea13927`.** Build + lint green. Tree clean. (This repo is the **nested** path `C:\dtg-website\dtg-website`, not the outer folder — recurring trap.)
- **Every axis has shipped:** Applications (overview + 4 environments), Solutions, Services (overview + 5 detail pages), About, and DTG Focus™. All recomposed onto the `--c-*` theme layer with scoped class families (`.appsx-* .envd-* .civx-* .solx-* .svcx-* .svcd-* .ab-* .dfx-*`).
- **Compliance is settled** — every escalated item is resolved and shipped: the "not a hardware vendor" claim, the advisory matrix row, the Beck Engineering removal (Catalyst Earth stays — confirmed), the DTG Focus™ doc-vs-reality conflict (CLAUDE.md §3 amended), and the legacy-route client-name/sensor-brand leaks (redirected + dead data deleted). Proof figures are **approved to publish**.
- **Light-theme sign-off is COMPLETE.** All 16 recomposed routes pass AA in light. **Floor 4.82** — the bright-green eyebrow (`--accent-text`) on a deep-teal band (`--c-surface-band`), the site's tightest passing pair. **Anything below 4.82 is a regression, not legacy debt.** Full per-route baseline is in commit `4e6aeca`.

---

## Next task — the dark→light default flip

The site currently defaults to **dark** as a temporary migration stance; **light is the masterbook end-state**. The flip is the last visual item and it is now unblocked by the sign-off above.

- **The gate is `work/lightsweep.mjs`** (dependency-free Node + Chrome-CDP; `work/` is gitignored scratch — the script survives in `main`'s history via this note, rewrite from the pattern if absent). It measures every route in light against **real composited backgrounds** and the correct AA threshold by size. **Run it after the flip; any sub-4.5 floor is a regression.**
- **Eyes-on every route, both themes, after the flip.** The baseline proves numbers, not that it *looks* right — that distinction has mattered repeatedly on this project.
- **⚠️ Gap:** the sign-off covers only the **recomposed** routes. **Legacy hardcoded-dark pages do not participate in the flip** — most are now 308-redirected, but **check whether any survive** and handle them before flipping.
- The flip itself is the `data-theme` default in `app/layout.tsx` + the no-flash inline script (see `docs/THEME-ARCHITECTURE.md`).

---

## Then — dead-code cleanup

Orphaned components + dead CSS the recomposition left behind (its own branch, after the flip). **The named work-list is in the `dtg-dead-code-cleanup` memory.** **Re-verify each item is genuinely unreferenced before removing** — the `.service-card` lesson: a grep that says "dead" can be wrong (multi-line JSX defeats `<Component` greps; a class may live in a comment or a `name=` attribute). Confirm by build + rendered check, not by eyeball.

---

## 🔴 The only leadership item left — the masterbook

**CLAUDE.md is fixed; the masterbook (`DTG_Company_Brand_Masterbook_v0.9.pdf`) is not.** It still:
- describes **DTG Focus™ as a finished product** (it is built-and-running but the fully-integrated product is still being completed),
- carries the **old five pillars** (Integrate·Validate·Analyse·Govern·Act — superseded by Integration·Analytics·Review&workflow·Governance&reporting·Portfolio view), and
- keeps the **Focus colour sub-family** (retired for the site — Focus uses the site palette, off-white logo).

**It is the root generator: it will re-author all three into the next document anyone writes.** This is a business-document decision — **Peter's call, not a code fix.** Escalated in CLAUDE.md §12. Nothing in the codebase can close it.

---

## How this project works (read the memories — don't re-derive)

The auto-memory files carry the hard-won patterns. In priority order:

- **`dtg-fix-the-generator`** — the load-bearing meta-pattern: when you find a defect, fix what PRODUCED it, not the instance. Also "orphan ≠ safe when a route is live and leaking" (proven twice, the second a confidentiality breach).
- **`dtg-measurement-traps`** — measurement APIs answer the wrong question truthfully; the first number you see is not the answer. **Trust rendered output over greps.** Bisect; test fixes live; stash-test against `main` before calling a bug pre-existing.
- **`dtg-token-rescope-rule`** — the `--c-*` on-dark re-scope is the most productive bug source: re-scope the COMPLETE token set; duplicate blocks drift. `--c-text-muted` was renamed `--c-decorative-only` (decoration only, never text). **Enumerate every surface a token lands on** — a surface nobody listed can't fail an audit (that's how raised-dark hid a live fail for months).
- **`dtg-working-style`** — verify the real render not the mockup/brief; flag over-claims hard; correct your own errors; screenshots before every commit; **audit first — six briefs carried an assumption that didn't survive the repo** (it can shrink the task, not only grow it).
- **`dtg-dead-code-cleanup`** — the deferred cleanup work-list.

**Working method that has held all session:** per-page/per-concern branch → build + lint → screenshot both themes → **measure (ruler + contrast), don't eyeball** → report before committing → `--no-ff` merge. Live bugs get their own branch, never bundled with design work.
