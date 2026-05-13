import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Libre_Caslon_Text } from "next/font/google";
import { ArrowRight, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["italic"],
    display: "swap"
});

const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
  <div className="relative">
    <Navbar/>
    <main className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="text-center text-5xl">
        <h1 className="hero-text-animation">Dostojanstveno, <span className={`bg-gray-200 px-2 ${libre.className}`}>bez suvišnog.</span><br />Mir u trenucima oproštaja.</h1>
      </div>
      <div className="mt-8 flex items-center hero-text-animation">
        <Link href="/kontakt" className="bg-black text-white px-12 py-4 text-sm rounded-full">
          POZOVITE NAS
        </Link>
        <div className="w-12.5 h-12.5 rounded-full bg-black text-white flex items-center justify-center">
          <Phone width={20} height={20} />
        </div>
      </div>
    <section className="hidden mt-20 lg:flex items-start justify-center gap-4 px-4 max-w-5xl mx-auto">
      <div className="w-32 md:w-40 mt-16">
        <div className="relative h-40 md:h-55 rounded-2xl overflow-hidden">
          <Image src="/img1.svg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="w-32 md:w-40 mt-8">
        <div className="relative h-44 md:h-60 rounded-2xl overflow-hidden">
          <Image src="/img2.svg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="w-36 md:w-44 mt-0">
        <div className="relative h-52 md:h-65 rounded-2xl overflow-hidden">
          <Image src="/img3.svg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="w-32 md:w-40 mt-8">
        <div className="relative h-44 md:h-60 rounded-2xl overflow-hidden">
          <Image src="/img4.svg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="w-32 md:w-40 mt-16">
        <div className="relative h-40 md:h-55 rounded-2xl overflow-hidden">
          <Image src="/img5.svg" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
    <section className="py-16 px-6 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative h-125 w-full md:w-[90%] overflow-hidden">
            <Image src="/cvece.svg"  alt="" fill className="object-cover rounded-lg" />
          </div>
          <div className="absolute -bottom-10 right-0 md:right-4 w-64 h-64 border-5 border-white rounded-[30px] overflow-hidden shadow-xl">
            <Image src="/rukovanje.svg"  alt="" fill className="object-cover" />
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
    <section className="bg-white py-24 px-6">
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
              <Image  src="/usluga1.svg"  alt="Pogrebne Usluge" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Pogrebne Usluge</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                Sveobuhvatna organizacija koja uključuje tradicionalna izlaganja, verske obrede i savremene ceremonije života u kapeli.</p>
              <button className="flex items-center text-[0.625rem] font-bold tracking-[0.15em] text-[#555] hover:text-black transition-colors uppercase">
                PROČITAJ VIŠE <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
          <div className="md:col-span-5 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
            <div className="relative h-64 md:h-80 w-full">
              <Image  src="/usluga2.svg"  alt="Iznos i Prevoz Pokojnika" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Iznos i Prevoz Pokojnika</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                Siguran prevoz pokojnika iz zemlje i inostranstva, uz organizaciju i povoljne cene.
              </p>
              <button className="flex items-center text-[0.625rem] tracking-[0.15em] font-bold text-[#555] hover:text-black transition-colors uppercase">
                PROČITAJ VIŠE <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
          <div className="md:col-span-5 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
            <div className="relative h-64 md:h-80 w-full">
              <Image  src="/usluga3.svg"  alt="Pogrebna oprema" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Pogrebna oprema</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                Kvalitetna oprema za dostojanstven ispraćaj, veliki izbor sanduka, cveća i prateće opreme.
              </p>
              <button className="flex items-center text-[0.625rem] font-bold tracking-[0.15em] text-[#555] hover:text-black transition-colors uppercase">
                PROČITAJ VIŠE <ArrowRight className="ml-2 w-4 h-4" /> </button>
            </div>
          </div>
          <div className="md:col-span-7 group bg-[#f9f7f4] rounded-lg overflow-hidden transition-all duration-500 flex-1">
            <div className="relative h-64 md:h-80 w-full">
              <Image  src="/usluga4.svg"  alt="Administrativna pomoć" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">Administrativna pomoć</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-8 opacity-80">
                Stručna administrativna pomoć pri organizaciji sahrane i rešavanju potrebne dokumentacije.
              </p>
              <button className="flex items-center text-[0.625rem] font-bold tracking-[0.15em] text-[#555] hover:text-black transition-colors uppercase">
                PROČITAJ VIŠE <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="bg-[#E5E2DA] rounded-lg p-12 mb-10 text-center w-100 md:w-200">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-serif mb-4">Tu smo za Vas, 24/7.</h2>
          <p className="max-w-xl text-gray-600 leading-relaxed">
            Bilo da vam je potrebna hitna pomoć ili samo tražite informacije, 
            naš saosećajni tim je uvek dostupan da vas sasluša i pruži podršku.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="tel:+38163377658" className="flex items-center justify-center rounded-full px-8 py-3 bg-black text-white transition-all w-full">
            <Phone className="mr-2 w-4 h-4" /> +381 63 377 658
          </Link>
          <Link href="/kontakt" className="border border-black rounded-full px-8 py-3 text-black text-xs hover:bg-black hover:text-white transition-all w-full">
            POŠALJI PORUKU
          </Link>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
  );
}
