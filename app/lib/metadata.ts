import { Metadata } from "next";

const baseUrl = "https://rajskekocije.rs";

export function createOpstinaMetadata(opstina: string): Metadata {
    const title = `Prevoz pokojnika ${opstina} | Pogrebne usluge 24/7 | Rajske Kočije`;
    const description = `Profesionalne pogrebne usluge u ${opstina} i prevoz pokojnika 24 časa dnevno. Brz dolazak, diskrecija i kompletna organizacija transporta.`;

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/pogrebne-usluge/prevoz-pokojnika/${opstina}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `Prevoz pokojnika ${opstina} – Pogrebne usluge 24/7 | Rajske Kočije`,
            description,
            url: `${baseUrl}/pogrebne-usluge/${opstina}`,
            siteName: "Rajske Kočije",
            locale: "sr_RS",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
