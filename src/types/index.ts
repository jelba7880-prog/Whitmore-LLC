export interface Attorney {
  slug: string;
  name: string;
  title: string; // e.g. "Managing Partner"
  barNumbers: {
    state: string; // e.g. "NY"
    number: string; // e.g. "5892012"
    verifyUrl: string; // e.g. "https://iapps.courts.state.ny.us/..."
    linkable?: boolean; // false when the issuing bar prohibits direct linking; defaults to true
  }[];
  bio: string;
  practiceAreas: string[]; // array of practice area slugs
  imageUrl?: string; // grayscale headshot; if absent, show initials
  initials: string; // e.g. "RW"
  education?: string[];
  admissions?: string[];
  languages?: string[];
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: ProcessStep[];
  faqs: FAQ[];
  imageUrl?: string; // hero/card background image path (e.g. /images/practice-areas/[slug].jpg)
  sidebarVideo?: {
    // optional: renders a VideoEmbed card below the "Request a Consultation" sidebar CTA
    videoId: string; // YouTube video ID
    title: string; // accessible title for the iframe
    caption: string; // attribution line, e.g. "From the CFTC's investor education series"
  };
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
  amount: string; // e.g. "$4.2M"
  description: string; // e.g. "Judgment & Disgorgement"
  matterType: string; // e.g. "Investment Fraud · Ponzi Recovery"
  court: string; // e.g. "S.D. Florida"
  year: number;
  practiceArea: string; // practice area slug
  challenge: string; // 1 sentence — the situation/problem, no client names
  resolution: string; // 1 sentence — how it was resolved, no client names
  attorneySlugs: string[]; // attorneys in lib/attorneys.ts credited with this matter
}

export interface BlogPost {
  slug: string;
  title: string;
  deck: string;
  authorSlug: string; // MUST match an attorney slug in attorneys.ts
  practiceArea: string; // practice area slug
  publishedAt: string; // ISO date string
  readMinutes: number;
  content: string; // MDX or HTML string
  relatedSlugs: string[]; // other blog post slugs
  heroImage?: string; // hero/feature image path (e.g. /images/blog/default-hero.jpg)
}

export interface Testimonial {
  quote: string; // verbatim client quote — no full client names
  clientType: string; // e.g. "Institutional Client"
  matterType: string; // e.g. "Securities Fraud Matter"
  court: string; // e.g. "Southern District of New York"
  year: number;
}

export interface Industry {
  slug: string; // e.g. "financial-services-banking"
  label: string; // e.g. "Financial Services & Banking"
  icon: JSX.Element; // inline SVG shared with the homepage IndustriesServed section
  definition: string; // 1–2 sentences: neutral description of the sector, not a claim about the firm
  involvement: string; // 2–3 sentences: the TYPE of disputes we handle in the sector, in general terms — no invented figures
  relatedPracticeAreas: string[]; // practice area slugs from lib/practice-areas.ts; substantiates involvement via cross-link
}
