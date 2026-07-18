import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Legal disclaimer regarding the information presented on the Whitmore Harlow LLP website.",
};

export default function DisclaimerPage() {
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
            <span className="text-cream/70">Legal Disclaimer</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-4 font-display text-h1-legal font-bold tracking-[-0.02em] text-cream">
            Legal Disclaimer
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
            1. Attorney Advertising
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            This website constitutes attorney advertising under the rules of the
            New York State Unified Court System and the State Bar of California.
            Prior results described on this website do not guarantee or predict a
            similar result in any future matter.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            2. No Legal Advice
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            The information contained on this website is for general
            informational purposes only and does not constitute legal advice.
            You should not rely on this information as a substitute for
            consultation with a qualified attorney.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            3. No Attorney-Client Relationship
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Visiting this website or submitting an inquiry through our contact
            form does not create an attorney-client relationship. An
            attorney-client relationship is established only through a signed
            engagement agreement.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            4. Jurisdiction
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            Whitmore Harlow LLP attorneys are licensed in New York and
            California. References to practice in other jurisdictions reflect
            matters handled in association with locally licensed counsel where
            required by applicable rules.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            5. Accuracy of Information
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            While we endeavor to keep the information on this website accurate
            and current, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, or suitability
            of the information contained herein.
          </p>

          <h2 className="mb-4 mt-10 font-display text-h2-legal font-bold text-ink">
            6. Contact
          </h2>
          <p className="font-body text-[18px] leading-[1.8] text-ink">
            For questions about this disclaimer, contact us at
            richard@whitmoreharlow.com.
          </p>
        </div>
      </section>
    </main>
  );
}
