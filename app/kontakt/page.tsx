import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Libre_Caslon_Text } from "next/font/google";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap"
});

function Page() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">
            <Navbar/>
            <main className="flex flex-col gap-3 text-center justify-center pt-10">
                <p className="uppercase text-[0.7rem]">TOPLO UTOČIŠTE</p>
                <h1 className={`${libre.className} text-5xl max-w-210 text-center mx-auto`}>Ovde smo da vam pružimo podršku  u vašim trenucima potrebe.</h1>
                <p className="max-w-2xl mx-auto">Naš posvećeni tim dostupan je 24/7 kako bi vam pružio saosećajno vođstvo i profesionalnu brigu. Bilo da planirate unapred ili vam je potrebna hitna pomoć, vaš mir nam je prioritet.</p>
                <div className="w-full lg:max-w-5xl mx-auto mt-15 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[40%] flex flex-col gap-3 bg-blue-500">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="w-full lg:w-[60%]  p-5 lg:pt-10 lg:pb-10 flex flex-col gap-5 justify-start items-start">
                        <h2 className={`${libre.className} text-xl`}>Pošalji Poruku</h2>
                        <p className="text-sm text-start">Molimo vas da popunite formular ispod, a član našeg tima posvećenog brizi o porodicama će vas uskoro kontaktirati.</p>
                        <ContactForm/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;