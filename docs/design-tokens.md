# Whitmore Harlow LLP — Design Tokens

> Canonical reference. Do not modify without design review.Extracted from Claude Design system v1.0

* * *

## Color Palette

### CSS Custom Properties

    :root {
      --navy:       #0D1B2A;  /* Dominant background, primary text */
      --navy-mid:   #1B2E44;  /* Section backgrounds, card fills */
      --navy-light: #2C4A6E;  /* Borders, dividers, subtle fills */
      --gold:       #C9A84C;  /* Headlines, rules, icon accents ONLY */
      --gold-light: #E8C97A;  /* Hover states, highlights */
      --cream:      #F8F5EE;  /* Primary light background */
      --parchment:  #EDE8DF;  /* Card backgrounds */
      --ink:        #1A1A2E;  /* Body text on light backgrounds */
      --muted:      #6B7A8D;  /* Subtext, captions, metadata */
    }

### Tailwind Mapping

    // tailwind.config.ts — extend.colors
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
    }

### Color Usage Rules

* **NEVER** use pure white (`#FFFFFF`) or pure black (`#000000`)
* **NEVER** use purple, teal, or SaaS-blue
* **NO** startup-style gradients
* `--gold` is reserved for headlines, ruled lines, and icon accents **only** — never body copy or large fills
* Gold as text: only on dark (navy) backgrounds or as small accent labels

* * *

## Typography

### Typeface Stack

| Role | Font | Weight | Usage |
| --- | --- | --- | --- |
| Display / H1 / H2 | Cormorant Garamond | 700 | Large headings, page titles |
| Body / Long-form | Source Serif 4 | 400 | Paragraphs, article body, descriptions |
| UI / Nav / Labels | Jost | 300–600 | Navigation, labels, metadata, buttons |

### Google Fonts Import

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Jost:wght@300;400;500;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

### Type Scale

Heading sizes are centralized as Tailwind `fontSize` tokens in `tailwind.config.ts`
(each token bakes in size + line-height + tracking). Consume them via the `Class`
column below — never hardcode `text-[Npx]` for a heading. Weight is **not** baked
into the token: apply `font-bold` (700) at each usage site.

| Name | Class | Size | Font | Weight | Tracking | Line-height |
| --- | --- | --- | --- | --- | --- | --- |
| Display | `text-display` | 80px | Cormorant Garamond | 700 | −0.02em | 1.0 |
| H1 — Page Title | `text-h1` | 64px | Cormorant Garamond | 700 | −0.02em | 1.1 |
| H1 — Homepage Hero | `text-h1-hero` | 72px | Cormorant Garamond | 700 | −0.02em | 1.05 |
| H1 — Legal Page | `text-h1-legal` | 44px | Cormorant Garamond | 700 | −0.01em | 1.15 |
| H1 — Blog Post | `text-h1-blog` | 46px | Cormorant Garamond | 700 | −0.01em | 1.15 |
| H2 — Section Title | `text-h2` | 56px | Cormorant Garamond | 700 | −0.02em | 1.15 |
| H2 — Legal Section | `text-h2-legal` | 28px | Cormorant Garamond | 700 | 0 | 1.3 |
| H2 — Blog Card (featured) | `text-h2-blog-card` | 36px | Cormorant Garamond | 700 | −0.01em | 1.2 |
| H3 — Card / Sub Title | `text-h3` | 28px | Cormorant Garamond | 700 | −0.01em | 1.2 |
| H3 — Blog Card | `text-h3-blog-card` | 22px | Cormorant Garamond | 700 | 0 | 1.25 |
| Body | — | 18px | Source Serif 4 | 400 | 0   | 1.75 |
| Label / Nav | — | 13px | Jost | 400–500 | 0.1em | —   |
| Fine Print | — | 12px | Jost | 300 | 0   | 1.75 |

> **Note:** H1 — Page Title (64px, was 56px) and H2 — Section Title (56px, was 40px)
> were resized upward when the tokens were introduced. Some bespoke heading sizes
> remain intentionally un-tokenized (e.g. results-page group headers 32px,
> practice-area inline-CTA 50px, "Send a Message" 32px, card sub-titles 24–26px);
> these are candidates for a future token pass.

### Tailwind Font Mapping

    // tailwind.config.ts — extend.fontFamily
    fontFamily: {
      display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      serif:   ['"Source Serif 4"', 'Georgia', 'serif'],
      sans:    ['Jost', 'system-ui', 'sans-serif'],
    }

* * *

## Spacing & Layout

* **Max content width:** `1200px` (centered, `margin: 0 auto`)
* **Section horizontal padding:** `100px` desktop → `24px` mobile
* **Section vertical padding:** `80px` standard, `60px` compact
* **Card gap:** `24px`
* **Column gap (multi-col):** `56px`

* * *

## Component Specifications

### 03 — Navigation

* Height: `72px` desktop, `54px` mobile
* Background: `--navy`
* Wordmark: Cormorant Garamond 21px 700, "Whitmore Harlow" in cream; "LLP" set smaller/tracked in gold (Jost, uppercase, tracking-widest)
* Nav links: Jost 13px, 0.1em tracking, uppercase, cream 0.8 opacity
* Active link: gold color + 1px gold underline
* CTA button: Jost 12px, gold border + gold text; hover → gold fill, navy text
* **Scroll behavior:** After 50px scroll, add `border-top: 1px solid rgba(201,168,76,0.25)` + `box-shadow: 0 4px 24px rgba(0,0,0,0.35)`
* **Mobile (≤768px):** Hamburger (3 × 1px cream rules, 22px wide) → full-screen navy overlay, 200ms fade; links in Cormorant Garamond 24px; gold CTA pinned bottom

### 04 — Hero Section

* Background: `--navy`, min-height `620px`
* SVG grain overlay: `opacity: 0.04–0.06`
* Left content: max-width 660px
* Gold rule above eyebrow: `width: 44px; height: 1px; background: var(--gold)`
* Eyebrow: Jost 11px, 0.2em tracking, uppercase, gold
* H1: Cormorant Garamond 72px 700, −0.02em, cream, line-height 1.05
* Subhead: Source Serif 4 20px, color `#9CAFC0` (muted blue-gray on navy), line-height 1.65
* Primary CTA: gold fill, navy text, Jost 12px 600 uppercase, `padding: 16px 36px`
* Secondary CTA: cream text, `border: 1px solid rgba(248,245,238,0.32)`, same padding
* Right photo area: `38%` width, architectural/texture only — **no stock faces**; left gradient fade `linear-gradient(to right, var(--navy), transparent)`

### 05 — Stats / Credential Bar

* Background: `--navy-mid`
* 4-column grid, separated by `1px --navy-light` vertical rules
* Stat number: Cormorant Garamond 58px 700, gold, line-height 1
* Stat label: Jost 11px, 0.14em tracking, uppercase, cream 0.65 opacity
* **CANONICAL STATS — use these exact values everywhere:**
  * `$185M` — Recovered for Clients
  * `100+` — Complex Cases
  * `18` — Years of Practice
  * `28` — States & Jurisdictions
* **NO animated counters. Static display only.**

### 06 — Practice Area Cards

* Grid: `3×2` desktop → `2×3` tablet → `1-col` mobile
* Card: `background: --parchment; border: 1px solid --navy-light; padding: 36px`
* **Sharp corners only** — no border-radius
* Icon: 30×30px SVG, stroke `#C9A84C`, stroke-width 1.5
* H3: Cormorant Garamond 26px 700, −0.01em, ink
* Description: Source Serif 4 15px, muted, line-height 1.65
* "Learn More →": Jost 11px, 0.1em tracking, uppercase, gold
* **Hover:** `border-color: var(--gold); box-shadow: 0 8px 32px rgba(13,27,42,0.13)`
* Card links: `/practice-areas/{slug}`

### 07 — Attorney Card

* Layout: Horizontal; photo left (196px wide square), content right
* Photo area: `--navy-light` background, grayscale photo; initials placeholder
* Content background: `--parchment`
* Name: Cormorant Garamond 28px 700, −0.01em, ink
* Title: Jost 11px, 0.12em tracking, uppercase, gold
* **Bar number required:** Jost 12px, muted — format: `NY Bar #XXXXXXX · [Verify link in gold]`
* Bio: Source Serif 4 15px, ink, line-height 1.7
* Practice tags: Jost 11px, muted; gold bullet `●`
* "View Profile →": Jost 11px, 0.1em tracking, uppercase, gold
* **Hover (card):** `border-color: var(--gold)`
* Profile links: `/attorneys/{slug}`

### 08 — Testimonial & Case Result

**Testimonial variant:**

* Background: `--navy-mid`
* Opening quote mark: Cormorant Garamond 140px, gold, opacity 0.3
* Quote: Source Serif 4 22px italic, cream, line-height 1.7, max-width 800px
* Attribution line: Jost 12px, 0.1em tracking, uppercase, cream 0.8 — **client type + case type only, NO full names**
* Sub-attribution: Jost 12px, muted — matter type, court, year

**Case Result Card variant:**

* Background: `--parchment`, border `1px --navy-light`, padding 32px
* "Result" label: Jost 10px, 0.14em tracking, uppercase, muted
* Amount: Cormorant Garamond 44px 700, **gold**
* Description: Cormorant Garamond 20px 700, ink
* Meta: Jost 12px, muted — matter type, court, year

### 09 — Process Timeline

* Background: `--cream`
* Left rail: `position: absolute; left: 22px; width: 1px; background: var(--gold); opacity: 0.4`
* Step circle: 44px diameter; `border: 1px solid var(--gold); background: var(--cream)` (last step: navy fill)
* Step number: Cormorant Garamond 18px 700, gold
* Eyebrow label: Jost 10px, 0.16em tracking, uppercase, gold
* Step title: Cormorant Garamond 26px 700, −0.01em, ink
* Step body: Source Serif 4 17px, muted, line-height 1.75
* Container: `padding-left: 80px` relative

### 10 — CTA Section

* Background: `--navy`
* Appears **on every page directly above footer**
* Layout: centered, max-width 620px
* Gold rule: `40px × 1px`, centered, above headline
* H2: Cormorant Garamond 50px 700, −0.02em, cream, line-height 1.1
* Sub-copy: Source Serif 4 18px, muted, line-height 1.7
* Primary CTA: gold fill → `--gold-light` hover; navy text; Jost 12px 600 uppercase; `padding: 16px 40px`
* Secondary CTA: cream text, `border: 1px solid rgba(248,245,238,0.32)`, same padding; hover → full cream border

### 11 — Footer

* Always rendered in root `layout.tsx` — never duplicated per page
* Background: `--navy`
* Gold top border: `border-t border-gold`
* 3-column grid: `md:grid-cols-3`, 1-col below `md:`
* Columns: Firm (2-line blurb + CTA) · The Firm (About, Attorneys, Case Results, How We Work) · Contact (address, phone, email)
* Wordmark: Cormorant Garamond 22px 700, "Whitmore Harlow" in cream; "LLP" set smaller/tracked in gold (Jost, uppercase, tracking-widest)
* Column headers: Jost 10px, 0.18em tracking, uppercase, gold; `padding-bottom: 12px; border-bottom: 1px solid --navy-light`
* Links: Jost 13px, cream 0.6 opacity; hover → opacity 1 + gold-light
* Address: Source Serif 4 15px, cream 0.65 opacity
* Contact email: **custom domain only** (`richard@whitmoreharlow.com`) — NEVER Gmail
* Every link must use `<Link href="...">` with a real route from the sitemap — no `#` placeholders
* Compliance bar: `border-top: 1px solid --navy-light`; Jost 11px 300, muted
* Required compliance text must match Hard Rule #8 exactly — never trimmed, shortened, or removed: "Attorney Advertising. Results may vary. Past results do not guarantee future outcomes."
* Legal links: `/privacy-policy`, `/terms`, `/disclaimer`, `/accessibility` — all must be real pages

### 12 — Contact Page Layout

* Split: form left (`1fr`), firm info card right (`360px`); gap `80px`
* Page H1: Cormorant Garamond 52px 700, −0.02em, ink
* Form labels: Jost 10px, 0.14em tracking, uppercase, ink; `margin-bottom: 8px`
* Form inputs: Source Serif 4 16px; `background: var(--cream); border: 1px solid var(--navy-light); padding: 14px 16px`; no border-radius; `outline: none`; focus → `border-color: var(--gold)`
* Textarea: 6 rows, same styling, `resize: vertical`
* Submit: full-width; `background: var(--gold); color: var(--navy)`; Jost 12px 600 uppercase; hover → `--gold-light`
* Fine print: "Attorney-client privilege attaches to this communication."
* Info card: `--parchment` background; address, phone, email, office hours, Google Maps embed

### 13 — Blog / Insights Post Layout

* Article header max-width: 760px
* Eyebrow: Jost 10px, 0.14em tracking, uppercase, gold — practice area
* H1: Cormorant Garamond 46px 700, −0.02em, ink, line-height 1.15
* Deck: Source Serif 4 19px, muted, line-height 1.65
* Body: Source Serif 4 18px, ink, line-height 1.8; max-width `70ch`
* H3 in body: Cormorant Garamond 28px 700, −0.01em
* Pull quote: `border-left: 2px solid var(--gold); background: var(--parchment); padding: 16px 28px`
* Right rail (300px): author card, practice area card, related posts, mini-CTA (navy bg)
* **Author must be a named bar-licensed attorney on the site** — no anonymous or mismatched names
* Author mini-card: photo/initials, name in Cormorant Garamond 18px 700, title in Jost gold uppercase, bar number

* * *

## Section Dividers

    /* Gradient gold rule between major sections */
    height: 1px;
    background: linear-gradient(to right, transparent, #C9A84C, transparent);
    opacity: 0.5;

* * *

## Homepage Section Order (Component 14 — Wireframe)

1. Navigation (fixed, 72px)
2. Hero Section (min-height 620px, dark navy)
3. Credential Bar (4 stats, navy-mid)
4. Practice Area Cards (3×2 grid, cream bg)
5. Attorney Roster Teaser (2–3 cards → `/attorneys`)
6. Testimonial Carousel (navy-mid bg)
7. CTA Section (navy bg)
8. Footer (navy, gold top rule)

* * *

## Anti-Patterns (Hard Rules)

* ❌ No pure white or pure black
* ❌ No purple, teal, or SaaS-blue
* ❌ No gradients (startup-style)
* ❌ No animated counters or number roll-ups
* ❌ No border-radius on cards or buttons
* ❌ No stock photos of people / faces in hero
* ❌ No Gmail or generic email addresses
* ❌ No `#` placeholder links — every link must resolve
* ❌ No inconsistent stats — `$185M / 100+ / 18 / 28` everywhere
* ❌ No anonymous blog authors — must match `/attorneys` roster
* ❌ No AI-obvious skeleton content
* ❌ Gold on large fills or body copy is forbidden

* * *

## Theme Variants (from design system props)

The design supports three tone axes for future theming:

**accentMetal:** `antique` (default: `#C9A84C` / `#E8C97A`) | `burnished` (`#A8701E` / `#C8923C`) | `platinum` (`#8FA4B2` / `#ADBFCB`)

**surface:** `parchment` (default) | `vellum` (`#F4EEE0` / `#E6DACC`) | `newsprint` (`#EDEAE2` / `#DEDAD0`)

**gravitas:** `midnight` (default: `#0D1B2A`) | `abyss` (`#050E18`) | `slate` (`#1C3050`)

*For initial build, use all defaults. Theme variants are future-facing.*
