import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const manrope = Manrope({
  weight: ["400", "600", "800"],
  subsets: ["latin-ext"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajskekocije.rs"),
  title: "Rajske Kočije - Pogrebne usluge Beograd | Dostupni 24 časa",
  description: "Rajske Kočije pružaju profesionalne i dostojanstvene pogrebne usluge u Beogradu. Dostupni smo 24 časa za organizaciju sahrana, prevoz pokojnika i kompletnu podršku.",
  keywords: [
    "pogrebne usluge Beograd",
    "prevoz pokojnika",
    "organizacija sahrane",
    "pogrebno preduzeće",
    "Rajske Kočije",
    "sahrane Beograd",
    "pogrebna oprema",
    "pogrebne usluge 00-24"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Rajske Kočije - Pogrebne usluge Beograd",
    description: "Dostojanstvene i profesionalne pogrebne usluge u Beogradu uz podršku porodicama 24 časa dnevno.",
    url: "https://rajskekocije.rs",
    siteName: "Rajske Kočije",
    locale: "sr_RS",
    type: "website",
    // images: [
    //   {
    //     url: '/og-image.jpg', // Putanja do slike u public folderu (1200x630px)
    //     width: 1200,
    //     height: 630,
    //     alt: 'Rajske Kočije - Pogrebne usluge Beograd',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajske Kočije - Pogrebne usluge Beograd",
    description: "Profesionalne pogrebne usluge i podrška porodicama u Beogradu, dostupni 24 časa.",
  },
  category: "funeral services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`min-h-full flex flex-col ${manrope.className}`}>
        {children}
      <CookieBanner/>
      </body>
    </html>
  );
}
