import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the Whitmore Harlow LLP website.",
};

export default function TermsPage() {
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
            <span className="text-cream/70">Terms of Use</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-4 font-display text-h1-legal font-bold tracking-[-0.02em] text-cream">
            Terms of Use
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="mb-8 font-ui text-[12px] text-muted">
            Effective Date: January 1, 2025
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            1. Acceptance of Terms
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            By accessing or using this website, you agree to be bound by these
            Terms of Use. If you do not agree, please do not use this website.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            2. No Attorney-Client Relationship
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Nothing on this website constitutes legal advice, and use of this
            website does not create an attorney-client relationship between you
            and Whitmore Harlow LLP. Do not act or refrain from acting
            based on information on this website without first seeking qualified
            legal counsel.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            3. Informational Purpose Only
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            The content on this website is provided for general informational
            purposes only. Case results, practice area descriptions, and
            attorney profiles are provided as illustrative information and do not
            constitute a guarantee or prediction of outcome in any future matter.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            4. Intellectual Property
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            All content on this website, including text, design, graphics, and
            code, is the property of Whitmore Harlow LLP or its
            licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works without
            our express written consent.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            5. Third-Party Links
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            This website may contain links to third-party websites, including
            state bar verification portals. We do not control and are not
            responsible for the content or privacy practices of any third-party
            site.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            6. Limitation of Liability
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            To the fullest extent permitted by law, Whitmore Harlow LLP
            shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of this website or reliance on its
            content.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            7. Governing Law
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            These Terms are governed by the laws of the State of New York,
            without regard to its conflict-of-law provisions.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            8. Contact
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Whitmore Harlow LLP &middot; One Liberty Plaza, Suite 4200
            &middot; New York, NY 10006
            <br />
            richard@whitmoreharlow.com
          </p>
        </div>
      </section>
    </main>
  );
}
