import type { Metadata } from "next";
import { Amiri, Noto_Naskh_Arabic, Noto_Nastaliq_Urdu } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-naskh",
  display: "swap",
});
const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nur al-Usul — Hanafi Aqeedah, Fiqh & Misconception Research Platform",
  description:
    "A source-based, citation-first Islamic research platform: Hanafi fiqh, Sunni aqeedah, scholarly sources library (classical & later South Asian incl. Fatawa Razvia), misconception database, 'Is This Really Hanafi?' claim checker, objection database, comparison engine, and multilingual English/Urdu/Arabic research.",
  keywords: ["Hanafi", "fiqh", "aqeedah", "misconceptions", "tawassul", "Fatawa Razvia", "Islamic research", "Urdu", "Arabic"],
  openGraph: {
    title: "Nur al-Usul — Hanafi Research Platform",
    description: "Understand Hanafi Islam through reliable sources.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${amiri.variable} ${naskh.variable} ${nastaliq.variable}`}
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
