import React from 'react';
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Libre_Caslon_Text } from "next/font/google";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            <main className="flex flex-col w-full lg:max-w-7xl mx-auto gap-3 p-5 lg:pr-10">
                <div className="flex flex-row items-center w-full justify-start">
                    <Link href="/pogrebne-usluge" className={`tracking-wider text-[0.750rem] text-[#5F5E58]`}>USLUGE</Link>
                    <ChevronRight size="13" color="#5F5E58"/>
                    <p className="tracking-widest text-[0.750rem] uppercase">PREVOZ POKOJNIKA ZEMUN</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-between">
                    <div className="flex flex-col gap-3">
                        <h1 className={`${libre.className} text-[2.5rem] max-w-xl leading-12`}>Prevoz pokojnika Zemun - dostupni 24 časa</h1>
                        <p className="max-w-2xl text-[#5F5E58]">
                            Rajske Kočije pružaju profesionalne pogrebne usluge i prevoz pokojnika na teritoriji opštine Zemun. Dostupni smo 24 časa dnevno, 7 dana u nedelji za hitan dolazak na adresu i organizaciju prevoza pokojnika uz potpunu diskreciju i poštovanje prema porodici.
                        </p>
                        <p className="max-w-2xl text-[#5F5E58]">
                            Pokrivamo sve delove Zemuna, uključujući Gardoš, Donji Grad, Altinu, Batajnicu, Ugrinovce i okolna naselja. Prevoz pokojnika obavljamo namenskim vozilima koja ispunjavaju sve zakonske standarde, uz organizaciju transporta do kapele, groblja ili druge lokacije prema želji porodice.
                        </p>
                        <Link href="tel:+38163377658" className="p-3 bg-black rounded-full text-white text-center lg:max-w-50">+381 63377658</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="rounded-lg bg-[#F9F7F4] border border-[#CFC4C5] p-5 flex flex-col gap-3 lg:max-w-75">
                            <Image src="/speedicon.svg" alt="speed icon" width={25} height={25}/>
                            <p className={`${libre.className} text-xl`}>Brza Intervencija</p>
                            <p>
                                Brz izlazak na teren u svim delovima Zemuna, dostupni 24 časa dnevno.
                            </p>
                        </div>
                        <div className="rounded-lg bg-[#F9F7F4] border border-[#CFC4C5] p-5 flex flex-col gap-3 lg:max-w-75">
                            <Image src="/secureicon.svg" alt="speed icon" width={20} height={25}/>
                            <p className={`${libre.className} text-xl`}>Potpuna Diskrecija</p>
                            <p>
                                Naš tim postupa sa najvišim
                                stepenom etike, poštujući
                                privatnost i dostojanstvo
                                porodice.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-full lg:max-w-7xl text-center flex flex-col justify-center items-center mx-auto mt-20 p-5 lg:p-0">
                <div className="flex flex-col gap-3">
                    <h2 className={`${libre.className} text-4xl`}>Proces rada korak po korak</h2>
                    <p className="text-[#5F5E58]">Transparentnost u svakom koraku kako biste znali šta možete očekivati od naše službe.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-10 mb-10">
                    <div className="flex flex-col gap-3 p-5  text-start">
                        <div className="flex flex-row gap-3 items-center">
                            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>01</p>
                            <div className="h-px w-full bg-[#CFC4C5]"></div>
                        </div>
                        <p className="uppercase tracking-wider text-sm">PRVI POZIV</p>
                        <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
                            Dostupni smo 24/7. Nakon vašeg
                            poziva, naš tim odmah kreće na
                            lokaciju u Zemunu.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 p-5  text-start">
                        <div className="flex flex-row gap-3 items-center">
                            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>02</p>
                            <div className="h-px w-full bg-[#CFC4C5]"></div>
                        </div>
                        <p className="uppercase tracking-wider text-sm">DOLAZAK</p>
                        <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
                            Stručno osoblje vrši pripremu i
                            preuzimanje pokojnika uz
                            maksimalno uvažavanje protokola.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 p-5  text-start">
                        <div className="flex flex-row gap-3 items-center">
                            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>03</p>
                            <div className="h-px w-full bg-[#CFC4C5]"></div>
                        </div>
                        <p className="uppercase tracking-wider text-sm">TRANSPORT</p>
                        <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
                            Prevoz do kapele, groblja ili druge
                            željene lokacije u klimatizovanim,
                            namenskim vozilima.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 p-5  text-start">
                        <div className="flex flex-row gap-3 items-center">
                            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>04</p>
                            <div className="h-px w-full bg-[#CFC4C5]"></div>
                        </div>
                        <p className="uppercase tracking-wider text-sm">DOKUMENTACIJA</p>
                        <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
                            Završavamo svu prateću
                            administrativnu proceduru kako
                            bismo vas rasteretili obaveza.
                        </p>
                    </div>
                </div>
            </section>
                        <Footer/>
        </div>
    );
}

export default Page;
