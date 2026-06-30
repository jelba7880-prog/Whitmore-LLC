# Site Imagery

These images are wired into the site via `next/image`. Each file below is a
**branded placeholder**, not final photography.

## Why placeholders?

The build environment's outbound network policy permits GitHub only. Unsplash
(`images.unsplash.com`), Pexels, and every other image CDN are denied at the
egress proxy (HTTP 403), so the royalty-free photos requested for this task
could not be downloaded here. To keep the build green and the layout intact,
each slot was filled with a navy/gold placeholder at the correct path and
dimensions (1600×1067, landscape).

## How to swap in real photography

Replace any file below **in place** (same path, same `.jpg` name). No code
changes are required — the components already reference these paths. Use
landscape, ≥1600px wide, royalty-free (Unsplash / Pexels) imagery.

**Note on placeholder content:** most files below are annotated mockups with
"PLACEHOLDER IMAGE" / subject / "REPLACE WITH ROYALTY-FREE PHOTO" text baked
into the pixels — fine for a bordered card with full opacity, but the text
shows through (ghosted) wherever a placeholder is used full-bleed behind a
navy/70 overlay, as in a hero background. `home/hero-courthouse.jpg` was
regenerated as a plain navy field with no embedded text for that reason. Any
other placeholder moved into a full-bleed/overlay context should get the same
treatment until real photography is swapped in.

| Path | Intended subject |
| --- | --- |
| `home/hero-courthouse.jpg` | Federal courthouse exterior, dramatic architecture (homepage full-bleed hero background) |
| `about/law-library.jpg` | Law library, dark wood shelves, warm light |
| `about/office-interior.jpg` | Modern professional office reception interior |
| `results/city-skyline.jpg` | Financial district skyline at dusk |
| `process/glass-architecture.jpg` | Modern glass office building exterior |
| `practice-areas/fraud-asset-recovery.jpg` | Investigation documents on a desk |
| `practice-areas/commercial-litigation.jpg` | Courthouse architecture (different angle than hero) |
| `practice-areas/economic-disputes.jpg` | Corporate boardroom conference table |
| `practice-areas/contract-disputes.jpg` | Professional business handshake, formal attire |
| `practice-areas/international-arbitration.jpg` | International conference negotiation table |
| `blog/default-hero.jpg` | Copy of `about/law-library.jpg` (blog fallback hero) |

## Intentionally omitted

`practice-areas/securities-fraud.jpg` — no suitable free image was sourced (per
task instruction, to be supplied separately). The Securities Fraud practice area
has **no** `imageUrl` set in `src/lib/practice-areas.ts`, so its card and detail
hero fall back gracefully to the navy placeholder treatment until an image is
added and `imageUrl` is set.
