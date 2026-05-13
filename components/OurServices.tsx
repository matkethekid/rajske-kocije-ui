import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function OurServices() {
    return (
        <section className="bg-white py-24 px-6" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-5">Naše usluge</h2>
                    <p className="max-w-xl mx-auto text-gray-500 text-sm leading-relaxed font-light">
                        Prilagođena podrška koja vam pomaže da odate počast voljenima na način koji najvernije odražava njihov duh.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    <div className="md:col-span-7 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
                        <div className="relative h-64 md:h-80 w-full">
                            <Image src="/usluga1.avif" alt="Pogrebne Usluge" fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                        </div>
                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Pogrebne Usluge</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                                Sveobuhvatna organizacija koja uključuje tradicionalna izlaganja, verske obrede i savremene ceremonije života u kapeli.</p>
                            {/*<Link href="/" className="flex items-center text-[0.625rem] font-bold tracking-[0.15em] text-[#555] hover:text-black transition-colors uppercase">*/}
                            {/*    PROČITAJ VIŠE <ArrowRight className="ml-2 w-4 h-4" />*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                    <div className="md:col-span-5 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
                        <div className="relative h-64 md:h-80 w-full">
                            <Image src="/usluga2.avif" alt="Iznos i Prevoz Pokojnika" fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                        </div>
                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Iznos i Prevoz Pokojnika</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                                Siguran prevoz pokojnika iz zemlje i inostranstva, uz organizaciju i povoljne cene.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
                        <div className="relative h-64 md:h-80 w-full">
                            <Image src="/usluga3.avif" alt="Pogrebna oprema" fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                        </div>
                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Pogrebna oprema</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                                Kvalitetna oprema za dostojanstven ispraćaj, veliki izbor sanduka, cveća i prateće opreme.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-7 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
                        <div className="relative h-64 md:h-80 w-full">
                            <Image  src="/usluga4.avif"  alt="Administrativna pomoć" fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                        </div>
                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Administrativna pomoć</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                                Stručna administrativna pomoć pri organizaciji sahrane i rešavanju potrebne dokumentacije.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;