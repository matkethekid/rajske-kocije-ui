import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Pogrebne usluge po opštinama Beograd | Rajske Kočije",
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
        canonical: "https://rajskekocije.rs/pogrebne-usluge",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Pogrebne usluge po opštinama Beograd",
        description:
            "Pregled pogrebnih usluga i prevoza pokojnika po svim opštinama u Beogradu.",
        url: "https://rajskekocije.rs/pogrebne-usluge",
        siteName: "Rајske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pogrebne usluge po opštinama Beograd",
        description:
            "Brze i profesionalne pogrebne usluge u svim beogradskim opštinama.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}