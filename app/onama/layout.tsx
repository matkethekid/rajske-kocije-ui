import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Rajske Kočije - Pogrebne usluge Beograd | Dostupni 24 časa",
    description: "Rajske Kočije pružaju profesionalne i dostojanstvene pogrebne usluge u Beogradu. Dostupni smo 24 časa za organizaciju sahrana, prevoz pokojnika i kompletnu podršku porodicama.",
    keywords: [
        "pogrebne usluge Beograd",
        "prevoz pokojnika",
        "organizacija sahrane",
        "pogrebno preduzeće",
        "Rajske Kočije",
        "sahrane Beograd",
        "pogrebna oprema",
    ],
    alternates: {
        canonical: "https://rajskekocije.rs",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Rajske Kočije - Pogrebne usluge Beograd",
        description: "Dostojanstvene i profesionalne pogrebne usluge u Beogradu uz podršku porodicama 24 časa dnevno.",
        url: "https://rajskekocije.rs",
        siteName: "Rajske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rajske Kočije - Pogrebne usluge Beograd",
        description: "Profesionalne pogrebne usluge i podrška porodicama u Beogradu, dostupni 24 časa.",
    },
    category: "funeral services",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};