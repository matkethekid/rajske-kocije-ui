import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Najčešća pitanja | Pogrebne usluge Beograd | Rajske Kočije",
    description: "Pronađite odgovore na najčešća pitanja o organizaciji sahrane, prevozu pokojnika, potrebnoj dokumentaciji, kremaciji i ostalim pogrebnim uslugama. Rajske Kočije su dostupne 24 časa dnevno.",
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
        canonical: "https://rajskekocije.rs/najcesca-pitanja",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Najčešća pitanja | Rajske Kočije",
        description: "Odgovori na najčešća pitanja o pogrebnim uslugama, organizaciji sahrane, prevozu pokojnika i potrebnoj dokumentaciji.",
        url: "https://rajskekocije.rs/najcesca-pitanja",
        siteName: "Rajske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Najčešća pitanja | Rajske Kočije",
        description: "Saznajte sve što vas zanima o pogrebnim uslugama, organizaciji sahrane i dokumentaciji.",
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

