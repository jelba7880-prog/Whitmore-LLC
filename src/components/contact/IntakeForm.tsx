"use client";

import { useEffect, useRef, useState } from "react";
import GoldRule from "@/components/ui/GoldRule";

// Field styling per design-tokens.md § 12 — identical to ContactForm.
const LABEL =
  "mb-2 block font-ui text-[10px] uppercase tracking-[0.14em] text-ink";
const INPUT =
  "w-full border border-navy-light bg-cream px-4 py-[14px] font-body text-[16px] text-ink outline-none transition-colors focus:border-gold";

const BEST_TIMES = [
  "Morning (9AM–12PM)",
  "Afternoon (12PM–3PM)",
  "Evening (3PM–6PM)",
] as const;

const MATTER_TYPES = [
  { value: "fraud-asset-recovery", label: "Fraud & Asset Recovery" },
  { value: "commercial-litigation", label: "Commercial Litigation" },
  { value: "securities-fraud", label: "Securities & Investment Fraud" },
  { value: "economic-disputes", label: "Economic Disputes" },
  { value: "contract-disputes", label: "Contract & Partnership Disputes" },
  { value: "international-arbitration", label: "International Arbitration" },
  { value: "other", label: "Other" },
] as const;

const LOSS_AMOUNTS = [
  { value: "under-100k", label: "Under $100,000" },
  { value: "100k-500k", label: "$100,000 – $500,000" },
  { value: "500k-1m", label: "$500,000 – $1,000,000" },
  { value: "1m-5m", label: "$1,000,000 – $5,000,000" },
  { value: "over-5m", label: "Over $5,000,000" },
  { value: "unknown", label: "Unknown / Not Sure" },
] as const;

const HEARD_FROM = [
  "Referral",
  "Web Search",
  "Bar Association",
  "LinkedIn",
  "Other",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function IntakeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [matterType, setMatterType] = useState("");
  const [lossAmount, setLossAmount] = useState("");
  const [message, setMessage] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reserve the form's own height on the shared container (see min-h-[1150px]
  // below) so swapping to the shorter success state never collapses the page;
  // only fade the success card in and bring it into view instead of jumping.
  useEffect(() => {
    if (status !== "success") return;
    setRevealed(false);
    const raf = requestAnimationFrame(() => setRevealed(true));

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    containerRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    return () => cancelAnimationFrame(raf);
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          bestTime,
          matterType,
          lossAmount,
          message,
          hearAbout,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const loading = status === "loading";

  if (status === "success") {
    return (
      <div
        ref={containerRef}
        className="flex min-h-[1150px] flex-col justify-center"
      >
        <div
          className={`border border-gold/30 bg-parchment p-8 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
          }`}
        >
          <GoldRule />
          <h3 className="mt-4 font-display text-h3 font-bold text-ink">
            Request Received
          </h3>
          <p className="mt-3 font-body text-[17px] leading-[1.75] text-muted-on-light">
            An attorney will review your matter and contact you within one
            business day to schedule your consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex min-h-[1150px] flex-col justify-center"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <label htmlFor="name" className={LABEL}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={INPUT}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className={LABEL}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={INPUT}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className={LABEL}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(212) 555-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={INPUT}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="bestTime" className={LABEL}>
            Best Time to Reach You
          </label>
          <select
            id="bestTime"
            name="bestTime"
            value={bestTime}
            onChange={(e) => setBestTime(e.target.value)}
            className={INPUT}
          >
            <option value="" disabled>
              Select a time...
            </option>
            {BEST_TIMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="matterType" className={LABEL}>
            Matter Type
          </label>
          <select
            id="matterType"
            name="matterType"
            value={matterType}
            onChange={(e) => setMatterType(e.target.value)}
            className={INPUT}
          >
            <option value="" disabled>
              Select matter type...
            </option>
            {MATTER_TYPES.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="lossAmount" className={LABEL}>
            Estimated Loss Amount
          </label>
          <select
            id="lossAmount"
            name="lossAmount"
            value={lossAmount}
            onChange={(e) => setLossAmount(e.target.value)}
            className={INPUT}
          >
            <option value="" disabled>
              Select an estimate...
            </option>
            {LOSS_AMOUNTS.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className={LABEL}>
            Describe What Happened
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            placeholder="Please describe the situation, who was involved, and what outcome you are seeking..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${INPUT} resize-y`}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="hearAbout" className={LABEL}>
            How Did You Hear About Us?
          </label>
          <select
            id="hearAbout"
            name="hearAbout"
            value={hearAbout}
            onChange={(e) => setHearAbout(e.target.value)}
            className={INPUT}
          >
            <option value="" disabled>
              Select an option...
            </option>
            {HEARD_FROM.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        {status === "error" && (
          <p className="mb-4 font-ui text-[12px] text-red-700" role="alert">
            Something went wrong submitting your request. Please try again or
            call our office directly.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full cursor-pointer bg-gold py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Submit Case for Review"}
        </button>

        <p className="mt-4 font-ui text-[11px] text-muted-on-light">
          This submission does not create an attorney-client relationship.
          Confidential. No obligation.
        </p>
      </form>
    </div>
  );
}
