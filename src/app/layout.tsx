import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
