import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://palworld-breeding-calculator-darvesh-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Palworld Breeding Calculator & Planner",
    template: "%s | Palworld Breeding Calculator"
  },
  description: "Free Palworld breeding planner to organize parent Pals, target offspring and simple IV estimates. Includes a clear guide to breeding combinations and inheritance limits.",
  applicationName: "Palworld Breeding Calculator",
  keywords: [
    "Palworld breeding calculator",
    "Palworld breeding planner",
    "Palworld breeding combinations",
    "Palworld breeding guide",
    "Palworld parent Pals",
    "Palworld IV calculator",
    "Palworld IV estimator",
    "Palworld offspring"
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Palworld Breeding Calculator",
    title: "Palworld Breeding Calculator & Planner",
    description: "Organize Palworld parent pairings and estimate simple IV averages with a free breeding planner.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Palworld Breeding Calculator and Planner" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Palworld Breeding Calculator & Planner",
    description: "Organize parent Pals, target offspring and simple IV estimates.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Palworld Breeding Calculator & Planner",
    url: siteUrl,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    description: "A fan-made Palworld breeding planner for organizing parent Pals and estimating simple IV averages.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
