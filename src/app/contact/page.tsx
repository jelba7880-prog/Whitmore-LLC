import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information, office hours, and location for Whitmore & Associates LLP.",
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      {/* TODO: Phone, email, address, office hours, map embed, contact form */}
    </main>
  );
}
