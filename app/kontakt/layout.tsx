import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | Rajske Kočije - Pogrebne usluge Beograd",
    description:
        "Kontaktirajte Rajske Kočije u Beogradu za brzu i profesionalnu organizaciju prevoza i ispraćaja pokojnika. Dostupni smo 24/7 za hitne intervencije i podršku porodicama u najtežim trenucima.",
    alternates: {
        canonical: "https://rajskekocije.rs/kontakt",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Kontakt | Rajske Kočije",
        description:
            "Brza i pouzdana pogrebna služba u Beogradu. Dostupni 24/7 za hitne slučajeve i informacije.",
        url: "https://rajskekocije.rs/kontakt",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kontakt | Rajske Kočije",
        description: "Kontakt informacije za pogrebne usluge i hitnu podršku u Beogradu.",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode; }) {
    return <>{children}</>;
}