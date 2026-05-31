import React from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Products from "@/components/Products";

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
});

function page() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    );
}

export default page;