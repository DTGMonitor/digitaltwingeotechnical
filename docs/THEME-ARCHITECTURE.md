# DTG Theme Architecture

Approved Sprint 3. A single layout with two token sets, switched by a `data-theme` attribute on
`<html>`. Bound by the masterbook and `CLAUDE.md` §7.

## Layers

1. **Raw palette** (theme-independent hexes): `--ink`, `--teal-*`, `--signal-green`, `--deep-teal`,
   `--deep-base`, `--white`, `--off-white`, the Focus sub-family, etc. Unchanged in meaning.
2. **Semantic layer** (`--c-*`, theme-aware): defined twice in `globals.css` — under
   `:root, :root[data-theme="dark"]` (the default) and `:root[data-theme="light"]`.
3. **Consumption**: the section kit (`components/sections/*`) and recomposed pages read **only** the
   semantic layer + `--accent`/`--accent-text`/`--on-accent`. They never read raw hexes.

Legacy tokens `--surface`, `--border`, `--ink`, `--color-bg-soft` are **load-bearing** for
un-migrated live pages (services/applications `.rm-*`/`.rb-*`, `.section-light`) and are left
untouched — which is why the semantic layer is namespaced `--c-*` rather than reusing `--surface`.

## Token map

| Semantic token | Role | Dark (default) | Light |
|---|---|---|---|
| `--c-surface` | page reading bg | `#0B1A22` | `#F4F7F6` |
| `--c-surface-raised` | cards / panels | `#122530` | `#FFFFFF` |
| `--c-surface-band` | deep-teal punctuation band | `#073C4A` | `#073C4A` |
| `--c-surface-deep` | footer / menu | `#061216` | `#061216` |
| `--c-text` | primary text | `#F4F7F6` | `#10202A` |
| `--c-text-soft` | secondary | `#AEC0C7` | `#51626B` |
| `--c-text-muted` | labels / tertiary | `#7C8B92` | `#7C8B92` |
| `--c-on-band` | text on deep-teal band | `#F4F7F6` | `#F4F7F6` |
| `--c-border` | hairline | `rgba(255,255,255,.14)` | `rgba(16,32,42,.12)` |
| `--c-border-strong` | divider | `rgba(255,255,255,.24)` | `rgba(16,32,42,.22)` |
| `--accent` | brand green — fills / decoration only | `#63B75D` | `#63B75D` |
| `--accent-text` | **AA-safe** green text / meaningful cue | `#63B75D` | `#2E6B2A` |
| `--on-accent` | ink on a green fill | `#06210A` | `#06210A` |

`band` / `deep` / `image` surfaces are always dark (deep-teal / deep-base) in both themes, so they
locally re-scope `--c-text*`, `--c-border*` and `--accent-text` to their on-dark values — children
render correctly even on a light-theme page.

## Green split (enforced)

`#63B75D` on off-white is **2.30:1 — fails even the 3:1 non-text threshold.** So:

- `--accent` (bright `#63B75D`) → fills (with `--on-accent` ink), decoration, dark-surface cues.
- `--accent-text` → any legible green **text or meaningful cue**. `#2E6B2A` on light (5.99:1),
  `#63B75D` on dark (7.1:1). Kit helpers (`.section-kit-step__index`, `.spine__marker`, `.faq__icon`,
  `.numbered-list`, `.profile__role`, `.contrast-col` markers) all use `--accent-text`.

## Switching

- `<html data-theme="dark">` is the SSR default. `:root[data-theme="light"]` overrides.
- **No-flash:** a blocking inline script in `app/layout.tsx` reads `localStorage['dtg-theme']` and
  stamps `data-theme` before first paint.
- **Toggle:** `components/theme-toggle.tsx` (client) in the header (`components/site.tsx`) flips the
  attribute and persists the choice. Sun/Moon icon; `aria-pressed` reflects state.

## WCAG AA — verified

All text pairs pass in both themes (computed): primary text 16.4:1 / 15.4:1; soft 9.4:1 / 5.9:1;
muted label (3:1) 5.0:1 / 3.3:1; text-on-band 11.1:1; ink-on-green button 6.9:1; `--accent-text`
green 7.1:1 (dark) / 5.99:1 (light).

## Migration stance

Dark default is **temporary** — chosen because un-recomposed pages are still hard-coded dark. Light
is the intended end-state default (masterbook mandate); the SSR default flips to light once enough
pages are recomposed onto `--c-*`. Until then the toggle's effect is progressive: only token-driven
surfaces (recomposed `/about` + the kit) re-theme; legacy pages stay dark regardless.
