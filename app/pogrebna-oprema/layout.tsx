import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Pogrebna Oprema Beograd | Sanduci, Krstovi i Oprema | Rajske Kočije",
    description: "Veliki izbor kvalitetne pogrebne opreme u Beogradu. U ponudi su sanduci (kovčezi), krstovi, tekstil, venci i ostala prateća oprema uz kompletnu organizaciju.",
    keywords: [
        "pogrebna oprema Beograd",
        "pogrebni sanduci cene",
        "kovčezi za sahrane",
        "krstovi za groblje",
        "pogrebna oprema cene",
        "prodaja pogrebne opreme",
        "Rajske Kočije oprema",
        "pogrebni venci i suze"
    ],
    alternates: {
        canonical: "/pogrebna-oprema",
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
        title: "Pogrebna Oprema Beograd | Sanduci, Krstovi i Oprema | Rajske Kočije",
        description: "Širok asortiman dostojanstvene pogrebne opreme. Pogledajte našu ponudu sanduka, krstova, cvetnih aranžmana i prateće opreme u Beogradu.",
        url: "https://rajskekocije.rs/pogrebna-oprema",
        siteName: "Rajske Kočije",
        locale: "sr_RS",
        type: "website",
        // images: [
        //     {
        //         url: '/og-products.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'Rajske Kočije - Ponuda pogrebne opreme',
        //     },
        // ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pogrebna Oprema Beograd | Rajske Kočije",
        description: "Kompletna ponuda pogrebne opreme: sanduci, krstovi i prateći artikli uz profesionalnu podršku 00-24h.",
        // images: ['/og-products.jpg'],
    },
    category: "funeral equipment",
};

export default function EquipmentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
