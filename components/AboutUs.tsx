import React from 'react';
import Image from "next/image";

function AboutUs() {
    return (
        <section className="py-16 px-6 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="relative h-125 w-full md:w-[90%] overflow-hidden">
                        <Image src="/cvece.svg"  alt="" fill className="object-cover rounded-lg" priority fetchPriority="high" sizes="(max-width: 1024px) 100vw, 60vw"/>
                    </div>
                    <div className="absolute -bottom-10 right-0 md:right-4 w-45 h-45 lg:w-64 lg:h-64 border-5 border-white rounded-[30px] overflow-hidden shadow-xl">
                        <Image src="/rukovanje.svg"  alt="" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 180px, 256px"/>
                    </div>
                </div>
                <div className="space-y-6 lg:pl-12">
                    <div>
                      <span className="uppercase tracking-widest text-xs text-gray-400 font-medium">
                        Naša Filozofija
                      </span>
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif text-slate-900 mt-4 leading-tight">
                            Tradicija Dostojanstva <br />I Brižne Podrške
                        </h2>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed max-w-xl">
                        <p>U Rajskim Kočijama verujemo da je svaki život jedinstveno delo
                            koje zaslužuje dostojanstven i duboko emotivan oproštaj. Naš
                            pristup spaja tradicionalne vrednosti sa savremenim pristupom,
                            kako bismo organizovali ispraćaje koji su istovremeno lični,
                            dostojanstveni i ispunjeni poštovanjem.</p>
                        <p>Naš posvećeni tim je uz vas u svakom koraku, pružajući podršku i
                            preuzimajući sve organizacione obaveze, kako biste imali mir i
                            prostor da se posvetite sećanjima, porodici i procesu tuge.</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100 italic text-xl md:text-xl font-serif text-slate-800 leading-snug">
                        <p>&ldquo;U srcu tuge nalazimo hrabrost da <br />
                            proslavimo svetlost koja je bila podeljena.&rdquo;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;