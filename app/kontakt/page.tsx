import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Libre_Caslon_Text } from "next/font/google";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap"
});

const libreItalic = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["italic"],
    display: "swap"
});

function Page() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">
            <Navbar/>
            <main className="flex-1 flex flex-col z-2 gap-3 text-center pt-10 pb-10 lg:pl-0 lg:pr-0 pl-5 pr-5">
                <p className="uppercase text-[0.7rem]">TOPLO UTOČIŠTE</p>
                <h1 className={`${libre.className} text-4xl lg:text-5xl max-w-210 text-center mx-auto`}>Ovde smo da vam pružimo podršku  u vašim trenucima potrebe.</h1>
                <p className="max-w-lg mx-auto text-sm lg:text-base">Naš posvećeni tim dostupan je 24/7 kako bi vam pružio saosećajno vođstvo i profesionalnu brigu. Bilo da planirate unapred ili vam je potrebna hitna pomoć, vaš mir nam je prioritet.</p>
                <div className="w-full lg:max-w-5xl mx-auto mt-15 flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[40%] flex flex-col gap-3 mx-auto">
                        <div className="w-full h-1/2 bg-[#F6F3F1] rounded-lg flex flex-col gap-5 justify-start items-start pl-3 pr-3 pt-5 pb-5 lg:pb-20 lg:pl-5 lg:pr-5">
                            <h2 className={`${libreItalic.className} text-2xl`}>Obratite Nam se Direktno</h2>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-row gap-2">
                                    <div className="rounded-full w-12.5 h-12.5 shrink-0 bg-[#1B3022] flex justify-center items-center">
                                        <Image src="/phone.svg" alt="phone" width="15" height="15"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start items-start">
                                        <div className="flex justify-start items-start flex-col">
                                            <p className="text-[0.7rem] text-[#5F5E58]">HITNA POMOĆ</p>
                                            <p className="text-md">+38163377658</p>
                                        </div>
                                        <p className="text-[0.8rem] text-[#5F5E58] text-start">Dostupni 24 časa dnevno, 7 dana u nedelji.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="rounded-full w-12.5 h-12.5 shrink-0 bg-[#1B3022] flex justify-center items-center">
                                        <Image src="/location.svg" alt="phone" width="15" height="15"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start items-start">
                                        <div className="flex justify-start items-start flex-col">
                                            <p className="text-[0.7rem] text-[#5F5E58] uppercase">posetite nas</p>
                                            <p className="text-md text-start">Bulevar Kralja Aleksandra</p>
                                        </div>
                                        <p className="text-[0.8rem] text-[#5F5E58] text-start">Otvoreno svakog radnog dana u bilo koje vreme.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 shrink-0 flex-0">
                                    <div className="rounded-full w-12.5 h-12.5 shrink-0 bg-[#1B3022] flex justify-center items-center">
                                        <Image src="/envelope.svg" alt="phone" width="15" height="15"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start items-start">
                                        <div className="flex justify-start items-start flex-col">
                                            <p className="text-[0.7rem] text-[#5F5E58] uppercase">opšta pitanja</p>
                                            <p className="text-md">mail@gmail.com</p>
                                        </div>
                                        <p className="text-[0.8rem] text-[#5F5E58] text-start">Stručan tim ekspresno odgovara na sva Vaša pitanja.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-80 relative overflow-hidden flex justify-start items-start">
                            <Image src="/kontakt.svg" alt="kontakt" width="500" height="500" className="object-cover"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] lg:max-h-[700px] p-5 lg:p-10 flex flex-col gap-5 justify-start items-start bg-[#E5E2DA] rounded-lg">
                        <h3 className={`${libre.className} text-2xl`}>Pošalji Poruku</h3>
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