import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Libre_Caslon_Text } from "next/font/google";
import { Clock } from "lucide-react";
import Image from "next/image";
import Steps from "@/components/Steps";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
});

const Consultation = dynamic(() => import('@/components/Consultation'), {
  ssr: true
});

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white relative flex flex-col">
      <Navbar/>
      <main className="w-full max-w-7xl mx-auto mt-10 flex flex-col gap-10 p-5 lg:p-0">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h1 className={`text-[3.2rem] ${libre.className} max-w-xl`}>Kompletna organizacija sahrane u Beogradu</h1>
            <p className="max-w-xl">
              Kompletna organizacija sahrane u Beogradu zahteva profesionalan i dostojanstven pristup kako bi se porodica rasteretila u najtežim trenucima.
              Naše pogrebno preduzeće preuzima celokupan proces na sebe – od prikupljanja dokumentacije i zakazivanja termina na grobljima, do 
              obezbeđivanja pogrebne opreme i prevoza pokojnika u zemlji i inostranstvu. Bilo da je u pitanju sahrana ili kremacija, naše pogrebne usluge 
              prilagođavamo vašim željama i tradiciji, garantujući miran i dostojanstven ispraćaj voljene osobe.
            </p>
            <span className="mt-3 flex flex-row gap-3 uppercase items-center font-semibold text-[0.950rem]">
              <Clock color="#000" size="20"/>
              DOSTUPNI SMO 24/7 ZA VAŠE POTREBE
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-lg max-h-[200px] bg-[#F9F7F4] border border-[#CFC4C5] p-5 flex flex-col gap-3 lg:max-w-75">
              <Image src="/speedicon.svg" alt="speed icon" width={25} height={25}/>
              <p className={`${libre.className} text-xl`}>Brza Intervencija</p>
              <p>
                Brz izlazak na teren u svim delovima Beograda, dostupni 24 časa dnevno.
              </p>
            </div>
            <div className="rounded-lg max-h-[200px] bg-[#F9F7F4] border border-[#CFC4C5] p-5 flex flex-col gap-3 lg:max-w-75">
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
        <Steps/>
        <Consultation/>
      </main>
      <Footer/>
    </div>
  )
}

export default page;
