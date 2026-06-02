import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site";

export const metadata: Metadata = {
  title: "DTG | Geotechnical Intelligence",
  description: "Geotechnical foresight, driven by intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
