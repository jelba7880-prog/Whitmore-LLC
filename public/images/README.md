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
| `practice-areas/commercial-litigation.jpg` | AI-generated placeholder | Yes — inspected 2026-07-01, plain courthouse exterior, no firm branding | `components/practice-areas/PracticeAreaCard.tsx` (practice-areas index grid) and `components/practice-areas/PracticeAreaDetail.tsx` (individual page hero). Note: the homepage "What We Do" grid uses the separate, image-free `components/home/PracticeAreaCards.tsx`, so these images do not appear on the homepage |
| `practice-areas/fraud-asset-recovery.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, overhead shot of hands reviewing a bank statement / tax form (calculator, laptop, pen). The document text is the photograph's subject, not an overlay; no firm branding, logo, or watermark | `components/practice-areas/PracticeAreaCard.tsx` (practice-areas index grid) and `components/practice-areas/PracticeAreaDetail.tsx` (detail hero) via `imageUrl` in `src/lib/practice-areas.ts` |
| `practice-areas/economic-disputes.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, three professionals in discussion over financial charts on a table. Only text is generic chart-axis labeling; no firm branding, logo, or watermark | Same as above |
| `practice-areas/contract-disputes.jpg` | Real photography — replacement upload (embedded credit: Alex Saharchuk) | Yes — inspected 2026-07-06, a legal contract being signed. Contract legalese is the photograph's subject; no firm branding, logo, or watermark | Same as above |
| `practice-areas/international-arbitration.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, modern tiered assembly / tribunal chamber with dais and flags. Small venue placard on the lectern only (not firm branding); no logo or watermark | Same as above |
| `practice-areas/securities-fraud.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, financial report with charts beside a calculator and keyboard; no firm branding, logo, or watermark. **Note:** the report's body text is Russian (Cyrillic) — real photographed document content, heavily darkened under the navy overlay in both render contexts, flagged for editorial review | Same as above |
| `about/law-library.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, an attorney reviewing documents in a wood-paneled library office with two colleagues; framed portrait prints on the wall (historical figures, not firm branding); no logo or watermark | `app/about/page.tsx` (firm story figure — bordered, fixed 3:2 aspect, no overlay) |
| `about/office-interior.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, a conference room (long table, leather chairs, wall-mounted TV, floating shelves); no firm branding, logo, or watermark. **Note:** the shelved book spines are legible Portuguese/Brazilian titles — real photographed content, flagged for editorial review | `app/about/page.tsx` ("Visit Our Offices" section — bordered, fixed 3:2 aspect, no overlay) |
| `process/glass-architecture.jpg` | Real photography — replacement upload | Yes — inspected 2026-07-06, upward angle of glass/steel skyscrapers against a blue sky; no text, logo, or watermark of any kind | `app/process/page.tsx` (process intro hero — full-bleed with `bg-navy/60` overlay) |
| `results/city-skyline.jpg` | AI-generated placeholder | Yes — inspected 2026-07-01, plain skyline, no text | `app/results/page.tsx` (results page hero) |

### Empty slots — NEEDS REPLACEMENT

Nine files were deleted on 2026-07-01 because they had the garbled
"WVHITMORE LLC" logo artifact baked into the pixels. All code references
were nulled at the same time (`imageUrl` / `heroImage` fields set to
absent, hardcoded `<Image>` usages removed) and each rendered a plain
`bg-navy` / `bg-navy-mid` fallback block instead of a broken image icon.

**All eight of the non-blog slots have now been refilled** with
verified-clean replacement photography (see the "Present and verified
clean" table above). The five practice-area images were refilled on
2026-07-06, wired via `imageUrl` in `src/lib/practice-areas.ts`. The
`about/` and `process/` images were refilled the same day but were
initially **uploaded to the wrong path** — see the callout below — and
were relocated and wired in a follow-up commit. Only the blog slot
remains empty (blog is currently paused). **Do not re-add a file at any
of these paths without manually viewing it first — the baked-in-logo
failure mode is why these slots were ever empty.**

| Path | Status | Rendered by |
| --- | --- | --- |
| `blog/default-hero.jpg` | NEEDS REPLACEMENT — text-artifact removed 2026-07-01 (blog is currently paused, so these components render on no live surface) | `components/blog/BlogCard.tsx` + `components/blog/BlogPostLayout.tsx` via `heroImage` in `src/lib/blog.ts` (currently absent on both posts) |

> **Wrong-path incident (2026-07-06):** `law-library.jpg`, `office-interior.jpg`,
> and `glass-architecture.jpg` were uploaded to `src/app/about/` and
> `src/app/process/` — next to the route `page.tsx` files — instead of
> `public/images/about/` and `public/images/process/`. Files under `src/app/`
> are source code, not static assets; Next.js never serves them at a URL, so
> the pages kept showing their navy fallback even though the files existed in
> the repo. A path-only inventory check (`find public/images`) missed them
> entirely; they were found only by cross-checking the GitHub file browser
> against the expected `public/images/...` paths. If a "verified clean" image
> still shows a navy fallback after a build, check whether it landed under
> `src/app/` by mistake before assuming the file is simply missing.

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
3. For the empty slots above, you must also restore the code reference:
   set the relevant `imageUrl` (`src/lib/practice-areas.ts`) or
   `heroImage` (`src/lib/blog.ts`) field back to the file path, or
   restore the `<Image>` usage in `app/about/page.tsx` /
   `app/process/page.tsx`. The navy fallback only disappears once the
   reference is restored — dropping a file into the folder alone does
   nothing. (The five practice-area `imageUrl` references were restored
   this way on 2026-07-06.)
4. Re-inspect the file one more time after saving, in situ, in whatever
   overlay/full-bleed context it will render in (hero sections apply a
   navy overlay that can make faint artifacts ghost through even when
   they looked acceptable in isolation).
