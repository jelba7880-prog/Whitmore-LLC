import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Whitmore Harlow LLP collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-cream/70">Privacy Policy</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-4 font-display text-h1-legal font-bold tracking-[-0.02em] text-cream">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="mb-8 font-ui text-[12px] text-muted-on-light">
            Effective Date: January 1, 2025
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            1. Information We Collect
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            We collect information you provide when submitting inquiries through
            our website, including your name, email address, telephone number,
            and a description of your legal matter. We also collect standard
            server log data (IP address, browser type, pages visited) through
            our hosting provider.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            2. How We Use Your Information
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Information submitted through our contact and intake forms is used
            solely to evaluate your inquiry and respond to your request. We do
            not sell, rent, or share your personal information with third parties
            for marketing purposes. Server log data is used for website security
            and performance monitoring only.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            3. Attorney-Client Privilege
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Communications submitted through this website are treated as
            confidential. Submitting an inquiry does not create an
            attorney-client relationship, but we treat all communications with
            the same discretion we apply to client matters.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            4. Cookies &amp; Tracking
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            This website uses essential cookies required for basic site
            functionality. We do not use advertising cookies or third-party
            tracking pixels. You may disable cookies in your browser settings
            without affecting your ability to use this site.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            5. Data Retention
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Inquiry data is retained for a period sufficient to evaluate and
            respond to your request, and thereafter in accordance with our
            document retention policies and applicable professional
            responsibility rules.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            6. Your Rights
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            You may request access to, correction of, or deletion of personal
            information we hold about you by contacting us at
            richard@whitmoreharlow.com. We will respond to verified requests
            within thirty (30) days.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            7. Changes to This Policy
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            We may update this Privacy Policy from time to time. The effective
            date above reflects the date of the most recent revision. Continued
            use of this website following any update constitutes acceptance of
            the revised policy.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            8. Contact
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Whitmore Harlow LLP &middot; One Liberty Plaza, Suite 4200
            &middot; New York, NY 10006
            <br />
            richard@whitmoreharlow.com &middot; (212) 555-0100
          </p>
        </div>
      </section>
    </main>
  );
}
