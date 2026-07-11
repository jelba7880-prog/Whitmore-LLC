# CLAUDE.md — Whitmore Harlow LLP Website
> Senior developer brief for Claude Code. Read this entire file before writing any code.

---

## Project Overview

A high-credibility law firm website for a fraud recovery and commercial litigation practice. Built as a clean, trustworthy replacement for a previous site that failed a credibility audit (inconsistent stats, dead links, Gmail contact, AI-obvious copy, mismatched attorney names).

**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS v3, Vercel deployment  
**Production URL:** https://www.whitmoreharlow.com  
**Design system:** `docs/design-tokens.md` — canonical token and component spec; read it before styling anything

---

## Hard Rules (Non-Negotiable)

1. **Every link resolves.** No `href="#"` anywhere. If a page isn't built yet, create a shell with real metadata.
2. **Single canonical stat block.** The only permitted firm statistics are: `$2.1B Recovered · 350+ Cases · 18 Years · 28 States`. These same four numbers appear in the Stats Bar and nowhere else in a different form.
3. **Custom domain email only.** `richard@whitmoreharlow.com` — no Gmail, no generic addresses, ever.
4. **Bar numbers are optional pending verification.** `barNumbers` may be an empty array — real numbers were never verified and were removed as placeholder/fabricated data (see `pre-launch-checklist.md`). When present, format: `NY Bar #XXXXXXX · [Verify with NY State Bar →]`. There is no build-time invariant requiring a non-empty array, and attorney cards/profiles render correctly with none.
5. **Blog authors must match `/attorneys` roster exactly.** If an attorney isn't on the roster page, they cannot author a post.
6. **No animated counters.** Stats are static text, never JavaScript number roll-ups. A single one-time fade/slide-in-on-scroll-into-view (e.g. via `IntersectionObserver` + opacity/transform transition) is permitted on the StatsBar, Industries section, Why Whitmore section, and Process Timeline (each step may reveal in sequence, once, as it scrolls into view), but the displayed value/number must never tick, increment, or roll up from zero — it renders at final value immediately, only the entrance is animated. No continuously scroll-linked effects (e.g. a rail line that fills proportionally with scroll position) without separate sign-off — that's a different animation category than a one-time reveal and hasn't been vetted yet.
7. **No border-radius on cards or buttons.** Sharp corners throughout, per design system.
8. **California Bar attorney advertising compliance line** on all pages (footer): "Attorney Advertising. Results may vary. Past results do not guarantee future outcomes."
9. **All legal pages must be real and complete:** `/privacy-policy`, `/terms`, `/disclaimer`, `/accessibility`.
10. **No pure white (`#FFFFFF`) or pure black (`#000000`)** in styles. Use design tokens only.

---

## Design Tokens (summary — full spec in `docs/design-tokens.md`)

```ts
// tailwind.config.ts
colors: {
  navy:        '#0D1B2A',
  'navy-mid':  '#1B2E44',
  'navy-light':'#2C4A6E',
  gold:        '#C9A84C',
  'gold-light':'#E8C97A',
  cream:       '#F8F5EE',
  parchment:   '#EDE8DF',
  ink:         '#1A1A2E',
  muted:       '#6B7A8D',
},
fontFamily: {
  display: ['"Cormorant Garamond"', 'Georgia', 'serif'],   // font-display → headlines
  body:    ['"Source Serif 4"', 'Georgia', 'serif'],       // font-body    → body copy, paragraphs
  ui:      ['Jost', 'system-ui', 'sans-serif'],             // font-ui      → nav, labels, buttons, captions
},
```

Gold (`#C9A84C`) is used ONLY for: headlines, ruled lines (1px), icon strokes, and accent labels. Never for body copy or large fills.

---

## Sitemap & Route Architecture

```
/                           → Homepage
/about                      → About the Firm
/attorneys                  → Attorney Roster
/attorneys/[slug]           → Individual Attorney Profile
/practice-areas             → Practice Areas Index
/practice-areas/[slug]      → Individual Practice Area
/results                    → Case Results
/process                    → How We Work
/blog                       → Blog Index
/blog/[slug]                → Blog Post
/contact                    → Contact (phone, address, hours, map)
/free-consultation          → Case Intake Form
/privacy-policy             → Privacy Policy (real, complete)
/terms                      → Terms of Use (real, complete)
/disclaimer                 → Legal Disclaimer (real, complete)
/accessibility              → Accessibility Statement (real, complete)
```

### Practice Area Slugs
```
fraud-asset-recovery
commercial-litigation
securities-fraud
economic-disputes
contract-disputes
international-arbitration
```

### Attorney Slugs (placeholder — replace with real attorneys)
```
richard-whitmore
catherine-harlow
daniel-reyes
michael-reed
sarah-voss
james-alvarez
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: Navbar + Footer + CTA always present
│   ├── page.tsx                ← Homepage
│   ├── about/page.tsx
│   ├── attorneys/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── practice-areas/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── results/page.tsx
│   ├── process/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── free-consultation/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── disclaimer/page.tsx
│   └── accessibility/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CTASection.tsx      ← Appears on every page above footer
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx        ← CANONICAL stats, static only
│   │   ├── PracticeAreaCards.tsx
│   │   ├── AttorneyTeaser.tsx
│   │   └── TestimonialBlock.tsx
│   ├── attorneys/
│   │   ├── AttorneyCard.tsx
│   │   └── AttorneyProfile.tsx
│   ├── practice-areas/
│   │   ├── PracticeAreaCard.tsx
│   │   └── PracticeAreaDetail.tsx
│   ├── results/
│   │   └── CaseResultCard.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   └── BlogPostLayout.tsx
│   ├── process/
│   │   └── ProcessTimeline.tsx
│   └── ui/
│       ├── GoldRule.tsx        ← 1px gold horizontal rule / decorative line
│       ├── SectionDivider.tsx  ← gradient gold divider between sections
│       └── Button.tsx          ← primary (gold fill) + secondary (ghost) variants
├── lib/
│   ├── attorneys.ts            ← typed attorney data
│   ├── practice-areas.ts       ← typed practice area data
│   ├── results.ts              ← typed case result data
│   └── blog.ts                 ← typed blog post data
└── types/
    └── index.ts                ← shared TypeScript interfaces
```

---

## TypeScript Interfaces

```ts
// types/index.ts

export interface Attorney {
  slug: string;
  name: string;
  title: string;              // e.g. "Managing Partner"
  barNumbers: {              // may be [] — real numbers pending verification, see pre-launch-checklist.md
    state: string;            // e.g. "NY"
    number: string;           // e.g. "5892012"
    verifyUrl: string;        // e.g. "https://iapps.courts.state.ny.us/..."
  }[];
  bio: string;
  practiceAreas: string[];    // array of practice area slugs
  imageUrl?: string;          // grayscale headshot; if absent, show initials
  initials: string;           // e.g. "RW"
  education?: string[];
  admissions?: string[];
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: ProcessStep[];
  faqs: FAQ[];
  relatedResults: string[];   // array of result IDs
}

export interface ProcessStep {
  number: number;
  eyebrow: string;
  title: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseResult {
  id: string;
  amount: string;             // e.g. "$4.2M"
  description: string;        // e.g. "Judgment & Disgorgement"
  matterType: string;         // e.g. "Investment Fraud · Ponzi Recovery"
  court: string;              // e.g. "S.D. Florida"
  year: number;
  practiceArea: string;       // practice area slug
}

export interface BlogPost {
  slug: string;
  title: string;
  deck: string;
  authorSlug: string;         // MUST match an attorney slug in attorneys.ts
  practiceArea: string;       // practice area slug
  publishedAt: string;        // ISO date string
  readMinutes: number;
  content: string;            // MDX or HTML string
  relatedSlugs: string[];     // other blog post slugs
}
```

---

## Component Conventions

### Navbar
- `position: fixed; z-index: 50; top: 0; width: 100%`
- Default: `bg-navy` (no border/shadow)
- After 50px scroll: add class `scrolled` → `border-b border-gold/25 shadow-[0_4px_24px_rgba(0,0,0,0.35)]`
- Implement scroll listener in a `"use client"` wrapper component; Navbar itself can be a server component
- Active link: gold color + `border-b border-gold pb-0.5`
- Mobile: hamburger → full-screen navy overlay, 200ms transition; links in Cormorant Garamond 24px

### Footer
- Always rendered in root `layout.tsx` — never duplicated per page
- 4-column grid: `grid-cols-[2fr_1fr_1fr_1.5fr]` → collapse to 2-col → 1-col
- Gold top border: `border-t border-gold`
- Every link must use `<Link href="...">` with a real route from the sitemap
- Compliance text must match Hard Rule #8 exactly

### CTASection
- Server component, no state
- Rendered in root layout between `{children}` and `<Footer />`
- Gold 40px rule → H2 50px Cormorant → Source Serif subtext → 2 CTAs
- Primary: `/free-consultation`; Secondary: `tel:+12125550100`

### StatsBar
- Import canonical stats from a single `STATS` constant:
```ts
// lib/stats.ts
export const STATS = [
  { value: '$2.1B', label: 'Recovered for Clients' },
  { value: '350+',  label: 'Complex Cases' },
  { value: '18',    label: 'Years of Practice' },
  { value: '28',    label: 'States & Jurisdictions' },
] as const;
```
- Separated by `1px bg-navy-light` vertical rules
- No JavaScript — pure static markup

### IndustriesServed (revised)
- Server component by default — `components/home/IndustriesServed.tsx` has no client state of its own; the scroll-entrance animation is isolated to a `<RevealOnScroll>` client wrapper in `components/ui/`
- Background `--navy-mid` (reused from StatsBar/TestimonialBlock — deliberately distinct from the `--cream` PracticeAreaCards section directly above it, so no two adjacent homepage sections share a background); eyebrow "Industries We Serve" (Jost 11px, 0.2em tracking, uppercase, gold); H2 "Sector-Specific Experience Across Complex Disputes" (Cormorant Garamond 40px 700, −0.02em, **cream** — flipped from ink for the dark background)
- Inline flowing list of 10 fixed industries — icon + label pairs, wrapping naturally, no descriptions, no per-industry stats or claims, **no per-item border or background box** (this is deliberately not a card grid — see below):
  1. Financial Services & Banking
  2. Private Equity & Hedge Funds
  3. Real Estate & Construction
  4. Healthcare & Life Sciences
  5. Technology & Software
  6. Energy & Natural Resources
  7. Manufacturing & Industrials
  8. Insurance
  9. Retail & Consumer Goods
  10. Family Offices & High-Net-Worth Individuals
- Item: icon (20×20px inline SVG, gold stroke, stroke-width 1.5) positioned inline to the left of the label (not stacked above it), label Jost 13px uppercase cream. Items separated by a 1px vertical rule (`bg-navy-light`, `self-stretch`) — the same divider pattern used in StatsBar
- Rationale: PracticeAreaCards and IndustriesServed previously shared identical visual grammar (cream background, bordered card, centered icon-over-label) back-to-back, reading as repetitive regardless of content. The navy-mid background plus inline-list layout makes this section structurally distinct from the card grid above it rather than relying on a divider alone to break the resemblance.
- Entrance animation: one-time fade + 8–12px slide-up on scroll-into-view via IntersectionObserver; triggers once and never re-triggers on scroll up/down — this section has no numbers, so there is nothing to count or roll up

### WhyWhitmore
- Server component, no client state, no scroll-entrance animation (Hard Rule #6 reserves the one-time reveal animation for StatsBar and IndustriesServed only)
- Background `--parchment`; eyebrow "Why Whitmore Harlow" (Jost 11px, 0.2em tracking, uppercase, gold); H2 "How We Approach Every Matter" (Cormorant Garamond 40px 700, −0.02em, ink)
- Six equal-weight differentiators (Strategic Thinking, Partner-Level Attention, Business-Minded Advice, Cross-Border Perspective, Efficient Resolution, Clear Communication) in a stacked 2-column × 3-row editorial text list — **no icons, no borders, no per-item background fill**; this is deliberately not a card grid
- Item: headline Cormorant Garamond 28px 700 −0.01em ink, 1–2 sentence supporting copy Source Serif 4 17px muted, line-height 1.75
- Rows separated by the existing `GoldRule` component (default `solid` variant) as a thin horizontal divider — between rows only, never between the two columns
- No numbered circles, sequence indicators, or arrows between items — that treatment is reserved for the Process Timeline; these six items are equal-weight, not sequential steps
- Copy is positioning/philosophy language (approach, values), not absolute operational guarantees, and contains no superlatives, per CA Bar compliance

### AttorneyCard (horizontal layout)
- Photo slot: `w-[196px] flex-shrink-0 bg-navy-light` — grayscale image or initials fallback
- Bar number + verify link rendering has been removed pending real, verified data (see `pre-launch-checklist.md`); the card renders correctly with an empty `attorney.barNumbers` array and does not require one

### PracticeArea [slug] pages
Must include all of:
- Long description (3+ paragraphs minimum)
- Process section (≥3 steps)
- FAQ accordion (≥4 questions)
- Related case results
- CTA (inline, before global CTA section)

### Blog [slug] pages
- Right rail with author card, practice area card, related posts, mini-CTA
- Author card links to `/attorneys/{authorSlug}`
- `authorSlug` must exist in `lib/attorneys.ts` — add a build-time check

---

## Page Content Architecture

### Homepage (`/`)
Section order (strict):
1. `<Hero />` — headline, subtext, 2 CTAs, architectural photo right
2. `<StatsBar />` — 4 canonical stats
3. `<PracticeAreaCards />` — 3×2 grid, all 6 areas
4. `<SectionDivider />` — gold hairline seam (both neighboring sections are `--cream`)
5. `<IndustriesServed />` — industries/sectors served
6. `<WhyWhitmore />` — six equal-weight firm differentiators, editorial text list
7. `<EditorialQuote />` — unattributed firm-philosophy pull quote
8. `<AttorneyTeaser />` — 2–3 cards, "View All Attorneys →" → `/attorneys`
9. `<TestimonialCarousel />` — rotating client testimonials
10. *(CTASection injected by layout)*
11. *(Footer injected by layout)*

### Practice Area pages (`/practice-areas/[slug]`)
1. Page hero (navy bg, breadcrumb)
2. Long description
3. Our Process (steps specific to this area)
4. FAQs (accordion)
5. Related Results (3-card grid)
6. Inline CTA ("Discuss Your Case")

### Attorney Profile pages (`/attorneys/[slug]`)
1. Attorney hero: name, title, practice areas (bar number + verify link rendering removed pending real, verified data — see `pre-launch-checklist.md`)
2. Full biography
3. Notable matters (case result cards, no client names)
4. Articles by this attorney (blog cards)

### Contact page (`/contact`)
- Must include: phone, custom-domain email, physical address, office hours, Google Maps embed
- Form: name, phone, email, matter type (select), description
- "All inquiries are confidential and protected by attorney-client privilege."

### Legal pages (`/privacy-policy`, `/terms`, `/disclaimer`, `/accessibility`)
All must be fully written — not placeholder copy. Structure:
- Effective date
- Sections with real content
- Contact information for questions

---

## Scaffold Kickoff Checklist

When starting the build, complete in this order:

- [ ] `tailwind.config.ts` — extend with design tokens from this file
- [ ] `app/globals.css` — CSS custom properties, base font, body background
- [ ] `app/layout.tsx` — root layout with Google Fonts, Navbar, CTASection, Footer
- [ ] `types/index.ts` — all TypeScript interfaces
- [ ] `lib/stats.ts` — STATS constant (single source of truth)
- [ ] `lib/attorneys.ts` — placeholder attorney data (typed)
- [ ] `lib/practice-areas.ts` — placeholder practice area data (typed)
- [ ] `lib/results.ts` — placeholder case result data (typed)
- [ ] `lib/blog.ts` — placeholder blog data (typed)
- [ ] `components/layout/Navbar.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `components/layout/CTASection.tsx`
- [ ] Route shells for all 20 pages (metadata + basic layout, no skeleton copy)
- [ ] Homepage sections
- [ ] Then: practice area pages, attorney pages, blog, legal pages

**Do not write any page copy as lorem ipsum.** Use descriptive placeholder comments instead: `{/* TODO: Attorney bio — 3 paragraphs */}`.

---

## SEO & Metadata

Each page must export a `generateMetadata` or static `metadata` object:
```ts
export const metadata: Metadata = {
  title: 'Page Title | Whitmore Harlow LLP',
  description: '...',
  openGraph: { ... },
}
```

Root layout title template: `'%s | Whitmore Harlow LLP'`

---

## Vercel / Deployment Notes

- Use `next/font/google` for font loading — not `<link>` tags in layout — for optimal performance
- Images: use `next/image` for all attorney photos; set `width` and `height`, `alt` required
- Attorney headshot cropping: Pillow (Python) — sharp and ImageMagick are not installed in this environment. Crop to 950×1067 (0.89:1), centered on the subject's face, matching the AttorneyCard component's photo slot dimensions.
- Forms: server actions (Next.js 14 `"use server"`) or API routes — no third-party form services
- Environment variables needed: `CONTACT_EMAIL`, `MAPS_EMBED_KEY` (document in `.env.example`)

---

## California Bar Compliance

All pages must have in footer:
> "Attorney Advertising. Results may vary. Past results do not guarantee future outcomes. Whitmore Harlow LLP is licensed in [states]. [Bar number(s)]."

Practice area pages with success statistics must include:
> "Past results do not guarantee future outcomes. Each case is unique."

Do not use superlatives ("best," "most experienced") or guarantees in any copy.
