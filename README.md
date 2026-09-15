# SOS 110 — Chapter 6 Web Slideshow

A click-through web version of the Chapter 6 ("Human Population: Can We Have Too
Many People?") slides — 27 slides.

This folder is **self-contained** — everything it needs is inside it (only Google
Fonts, the Firebase SDK, Chart.js, and the two Our World in Data charts come from
public URLs).

## Contents
- `index.html` — the slideshow (open this)
- `media/` — slide images
- `population-dynamics/` — the **DTM Explorer** app embedded on slides 15–16
- `ipat-simulator/` — the **I = PAT Simulator** app embedded on slides 24–25
- `firebase-config.js` — Firestore config for the live class poll
- `.nojekyll` — tells GitHub Pages to serve all files as-is

## The live class poll (slide 6)

Slide 6 carries a **guess-a-number poll** that syncs across every open copy
through Firebase Firestore. It is gated by two instructor clicks, so nothing
appears on students' screens until you're ready.

**Open the projected copy with `?host` appended to the URL:**

```
https://ryanpcornell.github.io/sos110-chapter-6/?host
```

Students use the plain URL (no `?host`). On the host copy the answer box is
hidden and you get, in order:

| Step | Host control | What students see |
|---|---|---|
| 1 | **Open the poll** | the poll appears on every screen, under the bullets |
| 2 | — (live count only) | a number box; each device locks in one guess |
| 3 | **Release results** | class average, histogram, n / median / range, and the cited UN projection |
| — | **Close poll** / **Reset** | hides it again / clears all guesses |

Guesses are in **billions** (one decimal allowed, e.g. `10.5`). One answer per
browser.

## Other interactives (no backend needed)

- **Slides 15–16 — DTM Explorer** (the builder, then what drives each rate). Sliders set the birth and death rate for each of
  the five stages; "↺ Reset to Standard Model" draws the textbook demographic
  transition, and a second chart simulates the resulting population curve.
- **Slides 24–25 — I = PAT Simulator** (the levers, then the scenario comparison). Dial Population × Affluence × Technology and
  watch environmental impact respond.
- **Slide 26 — What Can I Do?** Four hand-drawn pledges that tick when tapped.
- **Slides 5 and 14** embed Our World in Data charts (live from their site).

### Keyboard
`←` / `→` navigate · `F` fullscreen · `O` slide menu

## Re-building this bundle

The deck is generated from `_deck-builder/chapter6.py` (not stored in this repo):

```bash
cd "…/Web Apps/_deck-builder"
DECK_OUT="…/Web Apps/chapter-6-web/index.html" \
POP_APP="population-dynamics/index.html" \
IPAT_APP="ipat-simulator/index.html" \
python3 chapter6.py
```

The two env vars are what make the embedded apps resolve inside the bundle
instead of pointing at sibling folders on the authoring machine. Also re-copy
`Chapter 6 Slideshow/media/`, `firebase-config.js`, `Population Dynamics/index.html`
→ `population-dynamics/`, and `IPAT Simulator/index.html` → `ipat-simulator/` if
any of them changed.

**Attendance:** the Announcements slide (slide 3) has a live roll call — on the `?host`
copy pick the section and press **Attendance**. **Due dates** on that slide live in the `ASSIGNMENTS` list
near the top of `chapter6.py` — set each entry's `due` string and rebuild.

## Hosting on GitHub Pages

The *contents* of this folder sit at the repo root (so `index.html` is top level),
with **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
