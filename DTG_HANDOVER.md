# DTG Website — Session Handover

**Read this first.** It hands off the redesign to the next session. Written 2026-07-18.
The deep detail lives in the auto-memory files (linked at the bottom) — this is the map, not the territory.

---

## State

- **`main` is clean.** Last code/content change is `ea13927`; HEAD is the commit that added this handover (docs-only on top). Build + lint green. Tree clean. (This repo is the **nested** path `C:\dtg-website\dtg-website`, not the outer folder — recurring trap.)
- **Every axis has shipped:** Applications (overview + 4 environments), Solutions, Services (overview + 5 detail pages), About, and DTG Focus™. All recomposed onto the `--c-*` theme layer with scoped class families (`.appsx-* .envd-* .civx-* .solx-* .svcx-* .svcd-* .ab-* .dfx-*`).
- **Compliance is settled** — every escalated item is resolved and shipped: the "not a hardware vendor" claim, the advisory matrix row, the Beck Engineering removal (Catalyst Earth stays — confirmed), the DTG Focus™ doc-vs-reality conflict (CLAUDE.md §3 amended), and the legacy-route client-name/sensor-brand leaks (redirected + dead data deleted). Proof figures are **approved to publish**.
- **Light-theme sign-off is COMPLETE.** All 16 recomposed routes pass AA in light. **Floor 4.82** — the bright-green eyebrow (`--accent-text`) on a deep-teal band (`--c-surface-band`), the site's tightest passing pair. **Anything below 4.82 is a regression, not legacy debt.** Full per-route baseline is in commit `4e6aeca`.

---

## Next task — the dark→light default flip

The site currently defaults to **dark** as a temporary migration stance; **light is the masterbook end-state**. The flip is the last visual item and it is now unblocked by the sign-off above.

- **The gate is `work/lightsweep.mjs`** (dependency-free Node + Chrome-CDP; `work/` is gitignored scratch — the script survives in `main`'s history via this note, rewrite from the pattern if absent). It measures every route in light against **real composited backgrounds** and the correct AA threshold by size. **Run it after the flip; any sub-4.5 floor is a regression.**
- **Eyes-on every route, both themes, after the flip.** The baseline proves numbers, not that it *looks* right — that distinction has mattered repeatedly on this project.
- **⚠️ Gap — ANSWERED 2026-07-18: yes, 13 survive.** The sign-off covers only the **recomposed**
  routes. These render live (200, not redirected) and are **hardcoded dark** — they will **not**
  participate in the flip and will sit dark against a light site:
  - `/capabilities/*` — 5 routes (`DetailPage`)
  - `/dtg-focus/{data-governance, future-workflows, multi-sensor-integration}` (`DetailPage`)
  - `/about/{why-dtg-exists, vision-future}` (`DetailPage`)
  - `/insights/{alarm-confidence, monitoring-evidence, monitoring-lessons}` (`DetailPage`)
  - `/focus` — bespoke legacy, hardcoded hexes (`#071927`, `#08111Acc`, `#073F4Acc`) — see the
    compliance section below; this one has a **live copy violation** as well as a theme problem.

  **11 of the 13 are one component: `DetailPage`.** It is legacy-styled (`.story-page`,
  `.detail-body`, and a hard-coded `text-[#6d747a]` on the eyebrow). **Retheming `DetailPage` onto
  `--c-*` fixes 11 routes in one change** — worth doing *before* the flip rather than accepting 13
  dark islands. Decide with the user: retheme, redirect, or accept.
- The flip itself is the `data-theme` default in `app/layout.tsx` + the no-flash inline script (see `docs/THEME-ARCHITECTURE.md`).

---

## Then — dead-code cleanup

Orphaned components + dead CSS the recomposition left behind (its own branch, after the flip). **The named work-list is in the `dtg-dead-code-cleanup` memory.** **Re-verify each item is genuinely unreferenced before removing** — the `.service-card` lesson: a grep that says "dead" can be wrong (multi-line JSX defeats `<Component` greps; a class may live in a comment or a `name=` attribute). Confirm by build + rendered check, not by eyeball.

---

## Open compliance items — the Focus framing (ADDED 2026-07-18, second session)

These were carried in memory/conversation only and were **missing from this handover**. Both
publish the retired DTG Focus™ framing that CLAUDE.md §3 was amended to kill.

### 🔴 `/focus` is a LIVE 200 route publishing the banned framing — the bigger half

`app/focus/page.tsx` renders (43.7 kB, statically prerendered, **not** redirected). It publishes:

- a status badge reading **"Future Platform Vision - Currently Under Development"**,
- *"DTG Focus™ **is being developed** to integrate…"*,
- *"**Single decision-support platform**"* + the retired **Integrate·Govern·Decide** pillar block.

CLAUDE.md §3 says **NEVER** write "in development", "roadmap", "coming soon", "not yet available"
or "preview", and **never** claim complete integrated coverage. This route does both, live.

> **Why it survived:** CLAUDE.md §5 records `/focus` as "verified clean by rendered-HTML sweep" —
> but that sweep was scoped to **client names and sensor brands**. The retired-Focus-framing
> category was never swept on it. Textbook [[dtg-token-rescope-rule]] lesson: *a surface nobody
> enumerated can't fail an audit.* Orphan ≠ safe (proven three times now).

**Decide: redirect `/focus` → `/dtg-focus`, or rewrite it.** Redirect is consistent with how the
other leaking legacy routes were handled (`4a62793`). Needs user sign-off — it is compliance, not
redesign, so it gets its own branch.

### ⚪ `detailPages["dtg-focus"]` — dead data, still shipped

`components/detail-content.tsx:146`. Intro: *"…into a single decision-support platform."* — the same
retired overclaim. **Zero consumers** (`/dtg-focus` renders `DTGFocusPage`, not `DetailPage`), so it
never renders — but it is a module-level export in a file **13 live routes import**, so the string
**ships in the JS bundle** and is greppable by anyone who looks. Dead ≠ absent.

**Also:** the landmine comment at line 25–29 says *"Same shape as the `detailPages["dtg-focus"]`
landmine below"* — but **there is no comment at line 146**. The cross-reference dangles; the next
reader finds no warning on the key it points at. Fix when the key is handled.

---

## Deferred content — the Telfer paper (ADDED 2026-07-18; was recorded NOWHERE)

**Add the Telfer paper to `/services/data-analytics-automation` on publication — with the client
name REDACTED.** This item existed only in conversation — not in this handover, not in CLAUDE.md,
not in a code comment, not in memory. It was one session from being lost entirely.

### 🔒 The name does NOT go on the site (user ruling, 2026-07-18)

**"The paper publishes" and "DTG may use the client's name publicly" are two different permissions,
and only the client grants the second.** A paper being public does not transfer that right to DTG's
marketing site. This was asked and the answer is **no, not yet.**

- **The move is the proof without the name:** *"a published case study on a major gold operation."*
- **"Telfer" stays on the locked list** with Greatland / Harmony / Hidden Valley — the names behind
  the `4a62793` breach fix — **until the client says otherwise in writing.** The guard comment at
  `components/environments/tsf-detail.tsx:6` (*"Client name (Greatland/Telfer) MUST NOT appear"*)
  stays as-is.
- Publishing the name without explicit written client consent would be **a second Greatland/Telfer
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
