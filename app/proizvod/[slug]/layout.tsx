import React from "react";
import { Metadata } from "next";

async function getProduct(slug: string) {
    const res = await fetch(`${process.env.BACKEND_URL}/products/bypreferredurl/${slug}`);
    const data = await res.json();

    if (!res.ok) {
        return { title: "Nepostojeća stranica", description: "Ova stranica nije pronađena." }
    }
    
    return data.data;
}

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = await params;

    const product = await getProduct(slug);

    return {
        title: `${product.title} | Rajske Kočije - Pogrebne usluge i transport pokojnika 24h`,
        description: product.description || `${product.title} - Rajske Kočije, pouzdano pogrebno preduzeće sa dugogodišnjim iskustvom. Organizacija sahrana, pogrebna oprema, prevoz pokojnika u zemlji i inostranstvu i kompletna podrška porodicama 24/7.`
    };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};