import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site";
import { SiteBottom } from "@/components/SiteBottom";

export const metadata: Metadata = {
  // Canonical origin for the site. Every relative URL Next resolves for canonical tags, Open Graph
  // and Twitter previews is made absolute against this, so social cards and search results reference
  // the real domain rather than the deploy's *.vercel.app URL. Update here if the domain ever changes.
  metadataBase: new URL("https://www.digitaltwingeotechnical.com"),
  title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
  description: "Independent geotechnical monitoring, analytics, governance and decision support.",
  // OpenGraph + Twitter so shared links render a branded card. Relative url/image are made absolute
  // against metadataBase (→ https://www.digitaltwingeotechnical.com/…). og:image = public/og-image.png (1200×630,
  // deep-teal hero-dark bg, DTG mark, signal-green rule, the locked strapline). Per-page metadata
  // can override title/description; this is the site-wide default.
  openGraph: {
    type: "website",
    siteName: "Digital Twin Geotechnical",
    url: "/",
    title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
    description: "Independent geotechnical monitoring, analytics, governance and decision support.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Twin Geotechnical — Integrated Data. Informed Decisions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
    description: "Independent geotechnical monitoring, analytics, governance and decision support.",
    images: ["/og-image.png"],
  },
};

// No-flash theme init: dark is the default (interim migration stance); a stored choice is
// applied to <html data-theme> before first paint. See docs/THEME-ARCHITECTURE.md.
const themeInit = `(function(){try{var t=localStorage.getItem('dtg-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body id="top">
        <Header />
        {children}
        <SiteBottom />
      </body>
    </html>
  );
}
