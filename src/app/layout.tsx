import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/layout/CTASection";
import Footer from "@/components/layout/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: {
    default: "Whitmore & Associates LLP",
    template: "%s | Whitmore & Associates LLP",
  },
  description:
    "Whitmore & Associates LLP — fraud recovery and commercial litigation counsel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${sourceSerif4.variable} ${jost.variable} font-body antialiased`}
      >
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
