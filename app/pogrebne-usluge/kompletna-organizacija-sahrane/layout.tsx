import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Organizacija sahrane Beograd | Kompletne pogrebne usluge | Rajske Kočije",
    description:
        "Pogrebne usluge i prevoz pokojnika po svim opštinama u Beogradu. Brza i profesionalna pomoć 24/7 u svakoj opštini.",
    keywords: [
        "pogrebne usluge Beograd",
        "prevoz pokojnika Beograd",
        "opštine Beograd pogrebne usluge",
        "Zemun",
        "Vračar",
        "Novi Beograd",
        "Čukarica",
        "Dorćol",
    ],
    alternates: {
        canonical: "https://rajskekocije.rs/pogrebne-usluge/kompletna-organizacija-sahrane",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Kompletna organizacija sahrane u Beogradu | Rajske Kočije",
        description:
            "Profesionalna organizacija sahrane u Beogradu uz kompletnu podršku porodicama. Prevoz pokojnika, dokumentacija, pogrebna oprema i sve potrebne               usluge na jednom mestu.",
        url: "https://rajskekocije.rs/pogrebne-usluge/kompletna-organizacija-sahrane",
        siteName: "Rајske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pogrebne usluge po opštinama Beograd",
        description:
            "Kompletna pogrebna usluga u Beogradu – organizacija sahrane, prevoz pokojnika, dokumentacija i podrška porodicama u najtežim trenucima."
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}

