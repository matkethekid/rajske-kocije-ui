import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Libre_Caslon_Text } from "next/font/google";
import { Clock, MoveUpRight } from "lucide-react";
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

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white relative flex flex-col">
      <Navbar/>
      <main className="w-full max-w-7xl mx-auto mt-10 flex flex-col gap-10 p-5 lg:p-0">
       <div className="flex flex-col gap-3">
        <h1 className={`text-[3.2rem] ${libre.className} max-w-xl`}>Pogrebne usluge sa pažnjom i poštovanjem</h1>
        <p className="max-w-xl">
           Pružamo sveobuhvatnu podršku porodicama u najtežim trenucima – od organizacije sahrane i prevoza, do pripreme pokojnika i svih neophodnih for              malnosti. Naš tim je dostupan 24 sata dnevno, 7 dana u nedelji.
        </p>
        <span className="mt-3 flex flex-row gap-3 uppercase items-center font-semibold text-[0.950rem]">
          <Clock color="#000" size="20"/>
          DOSTUPNI SMO 24/7 ZA VAŠE POTREBE
        </span>
       </div>
       <div className="w-full lg:h-125 flex flex-col gap-3 pb-10">
            <div className="w-full lg:h-1/2 flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-[65%] flex flex-col rounded-lg p-7 gap-5 lg:gap-0 justify-between bg-[#F9F7F4] border border-[#CFC4C5]/30">
                    <div className="flex flex-col gap-3">
                        <p className={`text-3xl ${libre.className}`}>Kompletna organizacija sahrane</p>
                        <p className={`max-w-xl ${libre.className}`}>
                          Preuzimamo sve obaveze oko organizacije – dogovor sa crkvom i grobljem, koordinaciju ceremonije i svih detalja, 
                          kako biste vi mogli da se posvetite porodici.
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <Link href="/pogrebne-usluge/kompletna-organizacija-sahrane" className="w-full flex flex-row justify-between">
                            <span className={`tracking-widest text-sm ${libre.className} uppercase`}>DETALJI USLUGE</span>
                            <MoveUpRight size="23"/>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-[35%] flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                    <div className="flex flex-col gap-3">
                        <p className={`text-2xl ${libre.className}`}>Prevoz pokojnika</p>
                        <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                          Nudimo profesionalan prevoz pokojnika u zemlji i inostranstvu, uz poštovanje svih procedura i dostojanstven pristup.
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className={`tracking-widest text-sm ${libre.className} uppercase`}>DETALJI USLUGE</span>
                        <Link href="/pogrebne-usluge/prevoz-pokojnika">
                            <MoveUpRight size="23"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:h-1/2 flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/3 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                    <div className="flex flex-col gap-3">
                        <p className={`text-2xl ${libre.className}`}>Pogrebna oprema</p>
                        <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                           Nudimo kvalitetnu pogrebnu opremu, uključujući kovčege, urne, vence i dodatke. Pomažemo porodicama da odaberu odgovarajuću 
                           opremu uz profesionalnu i dostojanstvenu uslugu.
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className={`tracking-widest text-sm ${libre.className} uppercase`}>DETALJI USLUGE</span>
                        <Link href="/pogrebna-oprema">
                            <MoveUpRight size="23"/>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-white border border-[#CFC4C5]/30">
                    <div className="flex flex-col gap-3">
                        <p className={`text-2xl ${libre.className}`}>Administrativna pomoć</p>
                        <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                           Pružamo stručnu pomoć pri prikupljanju dokumentacije i obavljanju administrativnih procedura, kako bismo olakšali organizaciju 
                           sahrane. 
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className={`tracking-widest text-sm ${libre.className} uppercase`}>DETALJI USLUGE</span>
                        <Link href="/pogrebne-usluge/administrativna-pomoc">
                            <MoveUpRight size="23"/>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-5 lg:gap-0 rounded-lg p-7 justify-between bg-[#F9F7F4] border border-[#CFC4C5]/30">
                    <div className="flex flex-col gap-3">
                        <p className={`text-2xl ${libre.className}`}>PIO Fond naknada</p>
                        <p className={`max-w-xl text-sm text-[#4C4546] ${libre.className}`}>
                          Pomažemo u pripremi i predaji dokumentacije za ostvarivanje prava iz PIO fonda, uz stručnu podršku i brzo rešavanje 
                          administrativnih procedura.
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className={`tracking-widest text-sm ${libre.className} uppercase`}>DETALJI USLUGE</span>
                        <Link href="/pogrebne-usluge/pio-fond-naknada">
                            <MoveUpRight size="23"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page;
