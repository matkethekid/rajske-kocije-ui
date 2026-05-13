import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Libre_Caslon_Text } from "next/font/google";
import { Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["italic"],
    display: "swap",
    preload: true
});

const AboutUs = dynamic(() => import("@/components/AboutUs"));
const OurServices = dynamic(() => import("@/components/OurServices"));
const PreFooter = dynamic(() => import("@/components/PreFooter"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
  <div className="relative">
    <Navbar/>
    <main className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="text-center text-5xl">
        <h1>Dostojanstveno, <span className={`bg-gray-200 px-2 ${libre.className} rounded-lg whitespace-nowrap leading-[1.7]`}>bez suvišnog.</span><br />Mir u trenucima oproštaja.</h1>
      </div>
      <div className="mt-8 flex items-center">
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
            <Image src="/img1.avif" alt="" fill className="object-cover" priority fetchPriority="high" sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 15vw"/>
          </div>
        </div>
        <div className="w-32 md:w-40 mt-8">
          <div className="relative h-44 md:h-60 rounded-2xl overflow-hidden">
            <Image src="/img2.avif" alt="" fill className="object-cover" sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 15vw"/>
          </div>
        </div>
        <div className="w-36 md:w-44 mt-0">
          <div className="relative h-52 md:h-65 rounded-2xl overflow-hidden">
            <Image src="/img3.avif" alt="" fill className="object-cover" sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 15vw"/>
          </div>
        </div>
        <div className="w-32 md:w-40 mt-8">
          <div className="relative h-44 md:h-60 rounded-2xl overflow-hidden">
            <Image src="/img4.avif" alt="" fill className="object-cover" sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 15vw"/>
          </div>
        </div>
        <div className="w-32 md:w-40 mt-16">
          <div className="relative h-40 md:h-55 rounded-2xl overflow-hidden">
            <Image src="/img5.avif" alt="" fill className="object-cover" sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 15vw"/>
          </div>
        </div>
      </section>
      <AboutUs/>
      <OurServices/>
      <PreFooter/>
    </main>
    <Footer/>
  </div>
  );
}
