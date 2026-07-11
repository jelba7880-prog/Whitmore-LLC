import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "The accessibility commitment and accommodations offered by Whitmore Harlow LLP for visitors to this website.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Accessibility</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-4 font-display text-h1-legal font-bold tracking-[-0.02em] text-cream">
            Accessibility
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="mb-8 font-ui text-[12px] text-muted">
            Last Updated: January 1, 2025
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            1. Our Commitment
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Whitmore Harlow LLP is committed to ensuring that this
            website is accessible to all users, including those with
            disabilities. We aim to conform to the Web Content Accessibility
            Guidelines (WCAG) 2.1 Level AA.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            2. Measures We Have Taken
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            We have taken the following steps to improve accessibility on this
            website: use of semantic HTML elements; sufficient color contrast
            ratios throughout the design; descriptive alt text on all images;
            keyboard-navigable navigation menus; and responsive design that works
            across screen sizes and assistive technologies.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            3. Known Limitations
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            We are continuously working to improve the accessibility of this
            website. If you encounter any barrier or difficulty accessing
            content, please contact us and we will work to address the issue
            promptly.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            4. Feedback &amp; Contact
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            If you experience accessibility barriers on this website, please
            contact us:
            <br />
            Email: richard@whitmoreharlow.com
            <br />
            Phone: (212) 555-0100
            <br />
            Mail: One Liberty Plaza, Suite 4200, New York, NY 10006
            <br />
            We aim to respond to accessibility inquiries within two business
            days.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            5. Formal Complaints
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            If you are not satisfied with our response, you may contact the
            relevant regulatory authority in your jurisdiction regarding web
            accessibility standards.
          </p>
        </div>
      </section>
    </main>
  );
}
