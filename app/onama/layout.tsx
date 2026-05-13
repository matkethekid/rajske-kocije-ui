import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "O nama | Rajske Kočije - Pogrebne usluge Beograd",
    description: "Rајske Kočije su pogrebno preduzeće iz Beograda koje pruža dostojanstvene i profesionalne usluge prevoza i organizacije ispraćaja pokojnika, uz saosećajnu podršku porodicama u teškim trenucima.",
    alternates: {
        canonical: "https://rajskekocije.rs/onama",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "O nama | Rajske Kočije",
        description: "Pogrebne usluge u Beogradu sa fokusom na dostojanstvo, brigu i profesionalnu podršku porodicama.",
        url: "https://rajskekocije.rs/onama",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "O nama | Rajske Kočije",
        description: "Dostojanstvene pogrebne usluge i podrška porodicama u Beogradu.",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};