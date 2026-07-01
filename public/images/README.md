# Site Imagery

> **Any AI-generated or AI-upscaled image must be manually inspected for
> baked-in text artifacts before being committed.** This has caused a live
> credibility issue once already: 9 placeholder images shipped with a
> garbled "WVHITMORE LLC" logo rendered into the pixels (wrong entity name,
> illegible AI artifact), several visible full-bleed on live pages. See git
> history around 2026-07-01 (PR #21, "Remove placeholder images with
> baked-in garbled logo artifacts") for the incident and fix. Inspection
> means actually opening the file and looking at it — not assuming a
> generation prompt was followed correctly.

This document is a from-scratch rewrite as of 2026-07-01. The previous
version of this file had drifted from reality — it claimed a file that
existed (`practice-areas/securities-fraud.jpg`) was absent, misdescribed
the provenance of `blog/default-hero.jpg`, and didn't flag any of the 7
other files that had the same baked-in logo artifact. Every "clean" claim
below was verified by opening the actual file, not by assuming.

## Why placeholders exist at all

The build environment's outbound network policy permits GitHub only.
Unsplash, Pexels, and every other image CDN are denied at the egress
proxy (HTTP 403), so royalty-free photography cannot be downloaded in
this environment. Placeholder slots are filled at the correct path and
dimensions (1600×1067, landscape) until real photography is supplied.

## Current inventory

### Present and verified clean

| Path | Source | Verified clean of text/logo artifacts? | Rendered by |
| --- | --- | --- | --- |
| `home/hero-courthouse.jpg` | Real photography, supplied by the firm — not a placeholder | Yes | `components/home/Hero.tsx` (homepage hero) |
| `practice-areas/commercial-litigation.jpg` | AI-generated placeholder | Yes — inspected 2026-07-01, plain courthouse exterior, no firm branding | `components/practice-areas/PracticeAreaCard.tsx` (homepage grid + practice area index card) and `components/practice-areas/PracticeAreaDetail.tsx` (individual page hero) |
| `results/city-skyline.jpg` | AI-generated placeholder | Yes — inspected 2026-07-01, plain skyline, no text | `app/results/page.tsx` (results page hero) |

### Empty slots — NEEDS REPLACEMENT

These 9 files were deleted on 2026-07-01 because they had the garbled
"WVHITMORE LLC" logo artifact baked into the pixels. All code references
were nulled at the same time (`imageUrl` / `heroImage` fields set to
absent, hardcoded `<Image>` usages removed) and each now renders a plain
`bg-navy` / `bg-navy-mid` fallback block instead of a broken image icon.
**Do not re-add a file at these paths without manually viewing it first
— this exact failure mode is why the slot is empty.**

| Path | Status | Rendered by (currently shows navy fallback) |
| --- | --- | --- |
| `about/law-library.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | `app/about/page.tsx` (firm story figure) |
| `about/office-interior.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | `app/about/page.tsx` ("Visit Our Offices" section) |
| `process/glass-architecture.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | `app/process/page.tsx` (process intro hero) |
| `practice-areas/fraud-asset-recovery.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | `PracticeAreaCard.tsx` + `PracticeAreaDetail.tsx` via `imageUrl` in `src/lib/practice-areas.ts` (currently absent) |
| `practice-areas/economic-disputes.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | Same as above |
| `practice-areas/contract-disputes.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | Same as above |
| `practice-areas/international-arbitration.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | Same as above |
| `practice-areas/securities-fraud.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | Same as above |
| `blog/default-hero.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 | `components/blog/BlogCard.tsx` + `components/blog/BlogPostLayout.tsx` via `heroImage` in `src/lib/blog.ts` (currently absent on both posts) |

### Attorney headshots

`public/images/attorneys/` does not exist. Both attorneys in
`src/lib/attorneys.ts` (`richard-whitmore`, `catherine-harlow`) have
`imageUrl: undefined` and render their initials fallback (`RW` / `CH`) —
this is the intended graceful-degradation path per the design system, not
a bug.

## How to add real (or replacement) photography

1. View the candidate image yourself, full-size, before saving it into
   the repo. Confirm there is no baked-in text, logo, or watermark of any
   kind — AI generators frequently render garbled brand text even when
   not asked to.
2. Save it at the documented path (same filename, landscape, ≥1600px
   wide).
3. For the 9 empty slots above, you must also restore the code reference:
   set the relevant `imageUrl` (`src/lib/practice-areas.ts`) or
   `heroImage` (`src/lib/blog.ts`) field back to the file path, or
   restore the `<Image>` usage in `app/about/page.tsx` /
   `app/process/page.tsx`. The navy fallback only disappears once the
   reference is restored — dropping a file into the folder alone does
   nothing.
4. Re-inspect the file one more time after saving, in situ, in whatever
   overlay/full-bleed context it will render in (hero sections apply a
   navy overlay that can make faint artifacts ghost through even when
   they looked acceptable in isolation).
