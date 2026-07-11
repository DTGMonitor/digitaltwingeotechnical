import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site";
import { SiteBottom } from "@/components/SiteBottom";

export const metadata: Metadata = {
  title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
  description: "Independent geotechnical monitoring, analytics, governance and decision support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><Header />{children}<SiteBottom /></body></html>;
}
