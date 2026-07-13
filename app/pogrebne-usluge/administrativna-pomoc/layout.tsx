import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Administrativna pomoć nakon smrti u Beogradu | Rajske Kočije",
    description:
        "Stručna administrativna pomoć nakon smrti u Beogradu. Pomažemo oko dokumentacije, prijave smrti, PIO fonda i svih procedura vezanih za organizaciju sahrane.",
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
        canonical: "https://rajskekocije.rs/pogrebne-usluge/administrativna-pomoc",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Administrativna pomoć nakon smrti u Beogradu | Rajske Kočije",
        description:
            "Pružamo stručnu pomoć oko dokumentacije i administrativnih procedura nakon smrti člana porodice. Pouzdana podrška tokom organizacije sahrane.",
        url: "https://rajskekocije.rs/pogrebne-usluge/administrativna-pomoc",
        siteName: "Rајske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Administrativna pomoć nakon smrti u Beogradu | Rajske Kočije",
        description:
            "Pomoć oko dokumentacije, administrativnih procedura i organizacije sahrane u Beogradu uz stručnu podršku."
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}

