import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site";
import { SiteBottom } from "@/components/SiteBottom";

export const metadata: Metadata = {
  title: "Digital Twin Geotechnical | Integrated Data. Informed Decisions.",
  description: "Independent geotechnical monitoring, analytics, governance and decision support.",
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
