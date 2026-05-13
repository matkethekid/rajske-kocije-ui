import React from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Libre_Caslon_Text } from "next/font/google";
import Link from "next/link";
import dynamic from 'next/dynamic';

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

const libreItalic = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["italic"],
    display: "swap",
    preload: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
});

function Page() {
    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">
            <Navbar/>
            <main className="flex-1 flex flex-col z-2 gap-20 text-center pt-10 pb-10 lg:pl-0 lg:pr-0">
                <div className="flex flex-col gap-15 lg:flex-row w-[95%] lg:max-w-5xl mx-auto">
                    <div className="relative w-full lg:w-[40%] min-h-120">
                        <Image src="/onama.svg" alt="o nama" fill className="object-cover rounded-2xl absolute z-0"/>
                        <div className="flex flex-col justify-center items-start z-2 w-35 h-35 bg-[#F6F3F1] absolute -bottom-8 right-0 lg:-right-8 p-5 gap-3">
                            <Image src="/cvetic.svg" alt="cvetic" width="27" height="27"/>
                            <p className={`${libreItalic.className} text-xl`}>Od 2021.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 text-start  justify-center ">
                        <p className="uppercase text-[0.8rem]">NAŠA FILOZOFIJA</p>
                        <h1 className={`${libre.className} text-5xl max-w-sm text-start`}>Utočište za Dostojanstvo</h1>
                        <div className="flex flex-col gap-3 max-w-xl">
                            <p>„Rajske Kočije“ su osnovane na jednostavnom, trajnom obećanju: da svakoj osobi pristupamo sa istim poštovanjem i brigom kao prema sopstvenoj porodici. Naš prostor nije osmišljen samo kao mesto večnog počinka, već kao živi pejzaž mira i spokoja.</p>
                            <p>U trenucima dubokog gubitka, nudimo više od usluga: pružamo tiho mesto za predah, sigurnu i profesionalnu podršku i bezvremensko okruženje u kome se nasleđe i uspomene čuvaju sa dostojanstvom i poštovanjem.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#F6F3F1] p-10">
                    <h2 className={`${libre.className} text-3xl`}>Naša načela</h2>
                    <div className="flex flex-wrap w-full mx-auto lg:max-w-340 gap-3 items-stretch justify-center mt-10">
                        <div className="flex flex-col flex-1 min-w-75 max-w-95 gap-3 p-7 bg-white rounded-lg items-center">
                            <div className="shrink-0 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#E5E2DA]">
                                <Image src="/heart.svg" alt="heart icon" width="20" height="20"/>
                            </div>
                            <p className={`${libre.className} text-xl`}>Brižna i Saosećajna Podrška</p>
                            <p className="max-w-sm">Svakom detalju pristupamo sa pažnjom i razumevanjem,  da bi vaš put kroz teške trenutke bio vođen uz podršku posvećenih profesionalaca.</p>
                        </div>
                        <div className="flex flex-col flex-1 min-w-75 max-w-95 gap-3 p-7 bg-white rounded-lg items-center">
                            <div className="shrink-0 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#E5E2DA]">
                                <Image src="/tree.svg" alt="heart icon" width="20" height="20"/>
                            </div>
                            <p className={`${libre.className} text-xl`}>Prostori Mira</p>
                            <p className="max-w-sm">Dostojanstven prevoz i organizovan ispraćaj pokojnika  obavljamo sa posebnom pažnjom, pružajući porodicama  sigurnost, mir i podršku u najtežim trenucima.</p>
                        </div>
                        <div className="flex flex-col flex-1 min-w-75 max-w-95 gap-3 p-7 bg-white rounded-lg items-center">
                            <div className="shrink-0 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#E5E2DA]">
                                <Image src="/writter.svg" alt="heart icon" width="20" height="20"/>
                            </div>
                            <p className={`${libre.className} text-xl`}>Tradicija Koja Traje</p>
                            <p className="max-w-sm">Više godina iskustva u negovanju tradicionalnih običaja  uz savremeni pristup i vrhunsku profesionalnost.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white">
                    <div className="max-w-5xl mx-auto flex flex-col gap-5 pt-17 pb-17 pl-5 pr-5 border border-zinc-300/50 border-l-transparent border-r-transparent items-center">
                        <h3 className={`${libre.className} text-4xl`}>Započnite Put Dostojanstvenog Oproštaja</h3>
                        <p className="max-w-xl text-center">Bilo da vam je potrebna hitna pomoć ili planirate unapred, tu smo da vam pružimo podršku, jasnoću i mir u svakom trenutku.</p>
                        <div className="flex flex-wrap gap-3 mt-5 justify-center items-center">
                            <Link href="/kontakt" className="uppercase bg-black text-white pt-3 pb-3 pl-10 pr-10 rounded-xl font-semibold text-sm">POSETITE NAS</Link>
                            <Link href="/kontakt" className="uppercase bg-white border-black/20 border pt-3 pb-3 pl-10 pr-10 rounded-xl font-semibold text-sm">pričajte sa podrškom</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;