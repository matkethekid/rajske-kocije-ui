import { Metadata } from "next";

const baseUrl = "https://rajskekocije.rs";

export function createOpstinaMetadata(opstina: string): Metadata {
    const title = `Prevoz pokojnika ${opstina} | Rajske Kočije`;
    const description = `Profesionalne pogrebne usluge i prevoz pokojnika na teritoriji ${opstina}. Dostupni 24 časa dnevno.`;

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/pogrebne-usluge/${opstina}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title,
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