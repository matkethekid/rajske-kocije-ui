import React from 'react';
import { cacheLife, cacheTag } from "next/cache";
import Product from "@/components/Product";

const products = [
    {
        id: 0,
        name: "Product 1",
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis tempor commodo. Pellentesque vitae tempor nisl. Donec tortor purus, gravida vitae erat vel, luctus laoreet purus. Aenean varius eros non sapien tincidunt, eu fringilla dui vehicula. Suspendisse potenti. Nunc vestibulum mi ipsum, eu aliquet tortor varius ac. Morbi nec nisi sit amet dolor molestie ornare.",
        thumbnailImage: "/kovceg_prototip.avif",
        preferredUrl: "eee"
    },
    {
        id: 1,
        name: "Product 2",
        price: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis tempor commodo. Pellentesque vitae tempor nisl. Donec tortor purus, gravida vitae erat vel, luctus laoreet purus. Aenean varius eros non sapien tincidunt, eu fringilla dui vehicula. Suspendisse potenti. Nunc vestibulum mi ipsum, eu aliquet tortor varius ac. Morbi nec nisi sit amet dolor molestie ornare.",
        thumbnailImage: "/kovceg_prototip.avif",
        preferredUrl: "eee"
    },
    {
        id: 2,
        name: "Product 3",
        price: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis tempor commodo. Pellentesque vitae tempor nisl. Donec tortor purus, gravida vitae erat vel, luctus laoreet purus. Aenean varius eros non sapien tincidunt, eu fringilla dui vehicula. Suspendisse potenti. Nunc vestibulum mi ipsum, eu aliquet tortor varius ac. Morbi nec nisi sit amet dolor molestie ornare.",
        thumbnailImage: "/kovceg_prototip.avif",
        preferredUrl: "eee"
    },
];

interface Product {
    id: number;
    title: string;
    preferredUrl: string;
    price: number;
    thumbnailImage: string;
    images: string[];
}

async function Products() {
    async function fetchProducts() {
        "use cache";
        cacheTag("products");
        cacheLife("hours");
        
        const res = await fetch(`${process.env.BACKEND_URL}/products/all`);
        const data = await res.json();
        
        return data.data;
    }
    
    const products: Product[] = await fetchProducts();
    return (
        <main className="w-full min-h-screen p-5 lg:p-10 ">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <Product key={product.id} index={index} item={product} />
                ))}
            </div>
        </main>
    );
}

export default Products;