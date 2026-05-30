import React from 'react';
import IndividualItem from "@/components/IndividualItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function page() {
    return (
        <div className="relative w-full min-h-screen">
            <Navbar/>
            <IndividualItem/>
            <Footer/>
        </div>
    );
}

export default page;