import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://rajskekocije.rs"),
    title: "Naknada iz PIO fonda u Beogradu | Rajske Kočije",
    description:
        "Pomažemo pri ostvarivanju prava na naknadu iz PIO fonda u Beogradu. Stručna podrška oko dokumentacije, podnošenja zahteva i administrativnih procedu         ra nakon smrti člana porodice.",
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
        canonical: "https://rajskekocije.rs/pogrebne-usluge/pio-fond-naknada",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Naknada iz PIO fonda u Beogradu | Rajske Kočije",
        description:
            "Stručna pomoć pri ostvarivanju prava na naknadu iz PIO fonda u Beogradu. Pomažemo oko dokumentacije, zahteva i svih administrativnih procedura.",
        url: "https://rajskekocije.rs/pogrebne-usluge/pio-fond-naknada",
        siteName: "Rајske Kočije",
        locale: "sr_RS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Naknada iz PIO fonda u Beogradu | Rajske Kočije",
        description:
            "Pomoć pri ostvarivanju naknade iz PIO fonda u Beogradu. Dokumentacija, zahtevi i administrativne procedure uz stručnu podršku."
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}

