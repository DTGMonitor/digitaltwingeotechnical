import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site";

export const metadata: Metadata = {
  title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
  description: "Independent geotechnical monitoring, analytics, governance and decision support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
