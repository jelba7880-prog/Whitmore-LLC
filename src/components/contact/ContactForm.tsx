"use client";

import { useState } from "react";
import GoldRule from "@/components/ui/GoldRule";

// Field styling per design-tokens.md § 12. Sharp corners only (no border-radius).
const LABEL =
  "mb-2 block font-ui text-[10px] uppercase tracking-[0.14em] text-ink";
const INPUT =
  "w-full border border-navy-light bg-cream px-4 py-[14px] font-body text-[16px] text-ink outline-none transition-colors focus:border-gold";

// Matter-type options. Labels are fixed copy (not derived from practice-area
// titles, which differ slightly), so they live here as the source of truth.
const MATTER_TYPES = [
  { value: "fraud-asset-recovery", label: "Fraud & Asset Recovery" },
  { value: "commercial-litigation", label: "Commercial Litigation" },
  { value: "securities-fraud", label: "Securities & Investment Fraud" },
  { value: "economic-disputes", label: "Economic Disputes" },
  { value: "contract-disputes", label: "Contract & Partnership Disputes" },
  { value: "international-arbitration", label: "International Arbitration" },
  { value: "other", label: "Other" },
] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [matterType, setMatterType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, matterType, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-parchment p-8">
        <GoldRule />
        <h3 className="mt-4 font-display text-h3 font-bold text-ink">
          Message Received
        </h3>
        <p className="mt-3 font-body text-[17px] leading-[1.75] text-muted-on-light">
          Thank you for reaching out. A member of our team will contact you
          within one business day to discuss your matter.
        </p>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="mb-8 font-display text-[32px] font-bold tracking-[-0.01em] text-ink">
        Send a Message
      </h2>

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
        <label htmlFor="message" className={LABEL}>
          Describe Your Matter
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Please briefly describe your situation..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${INPUT} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="mb-4 font-ui text-[12px] text-red-700" role="alert">
          Something went wrong submitting your message. Please try again or call
          our office directly.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full cursor-pointer bg-gold py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Submit Inquiry"}
      </button>

      <p className="mt-4 font-ui text-[11px] text-muted-on-light">
        Attorney-client privilege attaches to this communication. We respond to
        all inquiries within one business day.
      </p>
    </form>
  );
}
