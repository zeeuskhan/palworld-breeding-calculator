import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Palworld Breeding Calculator | Find Breeding Combinations",
  description: "Plan Palworld breeding combinations, estimate offspring and calculate IV inheritance with a simple breeding calculator.",
  metadataBase: new URL("https://palworld-breeding-calculator.vercel.app"),
  openGraph: { title: "Palworld Breeding Calculator", description: "Plan breeding combinations and understand Palworld breeding mechanics.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}