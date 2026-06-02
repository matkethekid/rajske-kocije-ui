import React from 'react';
import IndividualItem from "@/components/IndividualItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    return (
        <section className="min-h-screen w-full">
            <Suspense fallback={<div className="h-16" />}>
                <Navbar />
            </Suspense>
            <Suspense fallback={<h1>Ucitavanje...</h1>}>
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
    
    return <IndividualItem item={data.data}/>
}

export default page;