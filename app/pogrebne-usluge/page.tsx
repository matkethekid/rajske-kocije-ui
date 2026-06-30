import React from 'react';
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Libre_Caslon_Text } from "next/font/google";
import { Clock, MapPin, MoveUpRight } from "lucide-react";
import Link from "next/link";

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
});

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

function Page() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">
            <Navbar/>
            <main className="w-full max-w-7xl mx-auto mt-10 flex flex-col gap-10 p-5 lg:p-0">
                <div className="flex flex-col gap-3 max-w-xl">
                    <h1 className={`text-[3.2rem] ${libre.className} max-w-xl`}>Pogrebne usluge i prevoz pokojnika po opštinama Beograda</h1>
                    <p>
                        Pružamo profesionalne pogrebne usluge i prevoz pokojnika na teritoriji svih beogradskih opština. Naš tim dostupan je 24 časa dnevno, 7 dana u nedelji i brzo izlazi na teren u svim delovima Beograda, uključujući Vračar, Dorćol, Novi Beograd, Zemun, Palilulu, Čukaricu i ostale opštine. Izaberite svoju lokaciju kako biste saznali više o uslugama i vremenu dolaska u vašem delu grada.
                    </p>
                    <span className="mt-3 flex flex-row gap-3 uppercase items-center font-semibold text-[0.950rem]"><Clock color="#000" size="20"/>DOSTUPNI SMO 24/7 ZA VAŠE POTREBE</span>
                </div>
                <div className="w-full lg:h-125 flex flex-col gap-3">
                    <div className="w-full lg:h-1/2 flex flex-col lg:flex-row gap-3">
                        <div className="w-full lg:w-[65%] flex flex-col rounded-lg p-7 gap-5 lg:gap-0 justify-between bg-[#F9F7F4] border border-[#CFC4C5]/30">
                            <div className="flex flex-col gap-3">
                                <p className={`text-3xl ${libre.className}`}>Novi Beograd</p>
                                <p className={`max-w-xl ${libre.className}`}>
                                    Specijalizovane usluge za najmnogoljudniju beogradsku
                                    opštinu, uz obezbeđen brz pristup svim grobljima i kapelama.
                                </p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <Link href="/pogrebne-usluge/novi-beograd" className="w-full flex flex-row justify-between">
                                    <span className={`tracking-widest text-sm ${libre.className}`}>DETALJI LOKACIJE </span>
                                    <MoveUpRight size="23"/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-[35%] lg:max-h-45 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                            <div className="flex flex-col gap-3">
                                <p className={`text-2xl ${libre.className}`}>Zemun</p>
                                <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                                    POKRIVENOST: 24/7 TERITORIJA ZEMUNA I OKOLINE
                                </p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <MapPin className="text-[#1A1C1C]"/>
                                <Link href="/pogrebne-usluge/zemun">
                                    <MoveUpRight size="23"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:h-1/2 flex flex-col lg:flex-row gap-3">
                        <div className="w-full lg:w-1/3 lg:max-h-45 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                            <div className="flex flex-col gap-3">
                                <p className={`text-2xl ${libre.className}`}>Vračar</p>
                                <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                                    CENTRALNA GRADSKA ZONA
                                </p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <MapPin className="text-[#1A1C1C]"/>
                                <Link href="/pogrebne-usluge/vracar">
                                    <MoveUpRight size="23"/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 lg:max-h-45 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                            <div className="flex flex-col gap-3">
                                <p className={`text-2xl ${libre.className}`}>Dorćol</p>
                                <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                                    STARI GRAD I PRIMARNA ZONA
                                </p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <MapPin className="text-[#1A1C1C]"/>
                                <Link href="/pogrebne-usluge/dorcol">
                                    <MoveUpRight size="23"/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 lg:max-h-45 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                            <div className="flex flex-col gap-3">
                                <p className={`text-2xl ${libre.className}`}>Čukarica</p>
                                <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                                    BANOVO BRDO, ŽARKOVO, CERAK
                                </p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <MapPin className="text-[#1A1C1C]"/>
                                <Link href="/pogrebne-usluge/cukarica">
                                    <MoveUpRight size="23"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-7xl h-px bg-[#CFC4C5]"></div>
                <div className="w-full flex flex-col mb-5 gap-3">
                    <div>
                        <p className="text-[#5F5E58] tracking-widest text-sm">OSTALE OPŠTINE I NASELJA</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 max-w-3xl">
                        <p>Palilula</p>
                        <p>Savski Venac</p>
                        <p>Voždovac</p>
                        <p>Zvezdara</p>
                        <p>Rakovica</p>
                        <p>Surčin</p>
                        <p>Grocka</p>
                        <p>Mladenovac</p>
                    </div>
                </div>
                <section className="w-full p-5 gap-10 lg:p-15 bg-black rounded-lg text-white flex flex-col lg:flex-row justify-between mb-10">
                    <div className="flex flex-col gap-3">
                        <p className={`text-3xl ${libre.className}`}>Garantovana posvećenost</p>
                        <p className={`text-sm ${libre.className} max-w-xl`}>
                            Bez obzira na opštinu u kojoj se nalazite, naš dolazak je prioritetan.
                            Obezbeđujemo svu neophodnu dokumentaciju i dostojanstven prevoz
                            pokojnika uz najviše profesionalne standarde.
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 lg:w-[20%]">
                        <Link href="tel:+38163377658" className="p-3 bg-white rounded-full text-black text-center">+381 63377658</Link>
                        <p className="text-sm text-white text-center">BESPLATNA KONSULTACIJA</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;