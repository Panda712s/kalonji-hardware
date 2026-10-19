import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { FACEBOOK_URL, PHONE, SITE_URL } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import QuoteProvider from "./components/QuoteProvider";
import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: "./",
    locale: "en_ZA",
    siteName: "Kalonji Hardware",
    title: "Kalonji Hardware | Sunnyside, Pretoria",
    description:
      "Everything for the job, one counter away. Electrical, plumbing, building, tools, paint, automotive, glass and key cutting, tiles and cement. Quotes on WhatsApp.",
  },
  twitter: { card: "summary_large_image" },
  title: {
    default: "Kalonji Hardware | Sunnyside, Pretoria",
    template: "%s | Kalonji Hardware",
  },
  description:
    "Electrical, plumbing, building materials, tiles and cement, tools, paint, automotive supplies, glass and key cutting in Sunnyside, Pretoria. Quick quotations by WhatsApp or in store. Exporting to DRC, Zimbabwe, Cameroon and Ghana.",
};

/** Business details for search engines (schema.org LocalBusiness). */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "Kalonji Hardware",
  telephone: PHONE,
  sameAs: [FACEBOOK_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunnyside, Pretoria",
    postalCode: "0002",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('kh-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <QuoteProvider>
          <a className="skip" href="#content">Skip to content</a>
          <Header />
          <main id="content">{children}</main>
          <Footer />
          <FloatingActions />
          <ScrollReveal />
        </QuoteProvider>
      </body>
    </html>
  );
}
