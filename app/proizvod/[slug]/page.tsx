import React from 'react';
import IndividualItem from "@/components/IndividualItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import IndividualItemSkeleton from "@/components/IndividualItemSkeleton";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    return (
        <section className="min-h-screen w-full">
            <Suspense fallback={<div className="h-16" />}>
                <Navbar />
            </Suspense>
            <Suspense fallback={<IndividualItemSkeleton/>}>
                <ItemLoader params={params} />
            </Suspense>
            <Footer />
        </section>
    );
}

async function ItemLoader({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <CacheItemFetch slug={slug}/>
}

async function CacheItemFetch({ slug }: { slug: string }) {
    const response = await fetch(`${process.env.BACKEND_URL}/products/bypreferredurl/${encodeURIComponent(slug)}`);
    if (!response.ok) return <div className="p-20 text-center">Drone not found</div>;
    const data = await response.json();
    const product = data.data;
    
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: [product.thumbnailImage],
        brand: {
            "@type": "Brand",
            name: "Rajske Kočije",
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "RSD",
            price: product.price,
            availability: true,
            url: `https://rajskekocije.rs/proizvod/${product.preferredUrl}`,
        },
    }
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <IndividualItem item={product}/>
        </>
    )
}

export default page;