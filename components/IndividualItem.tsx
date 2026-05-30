import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const IndividualItem = () => {
return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full aspect-video md:aspect-square max-h-125 flex justify-center items-center bg-gray-50 rounded-xl p-4">
          <Image alt='Kovceg' src="/kovceg_prototip.avif" fill className="object-contain" priority />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Kovceg
            </h1>
            <div className="mt-3 flex items-baseline space-x-2">
              <span className="text-gray-500 font-medium text-lg">Cena:</span>
              <span className="text-2xl font-bold text-gray-900">Na upit</span>
            </div>
          </div>

          <hr className="border-gray-200" />
          <Link href="tel:+38163377658" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#161616] hover:bg-[#393b3a] text-white font-bold rounded-lg text-center transition-colors duration-200 shadow-md hover:shadow-lg gap-2">
            <Phone />Kontaktirajte nas (+381 63 377 658)
          </Link>
        </div>

      </div>
    </section>
  );
}

export default IndividualItem