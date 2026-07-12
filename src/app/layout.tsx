import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import GlobalCTA from "@/components/layout/GlobalCTA";
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
  metadataBase: new URL("https://www.whitmoreharlow.com/"),
  title: {
    default: "Whitmore Harlow LLP",
    template: "%s | Whitmore Harlow LLP",
  },
  description:
    "Whitmore Harlow LLP — fraud recovery and commercial litigation counsel.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Whitmore Harlow LLP",
    description: "Fraud recovery and commercial litigation counsel.",
    url: "https://www.whitmoreharlow.com/",
    siteName: "Whitmore Harlow LLP",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitmore Harlow LLP",
    description: "Fraud recovery and commercial litigation counsel.",
    images: ["/og-image.png"],
  },
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
        <div className="pt-[54px] md:pt-[72px]">{children}</div>
        <GlobalCTA />
        <Footer />
      </body>
    </html>
  );
}
