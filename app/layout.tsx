import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: {
    default: "Kalonji Hardware | Sunnyside, Pretoria",
    template: "%s | Kalonji Hardware",
  },
  description:
    "Electrical, plumbing, building materials, tools, paint and automotive supplies in Sunnyside, Pretoria. Quick quotations by WhatsApp or in store.",
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
