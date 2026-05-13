import React from 'react';
import Link from "next/link";
import { Phone } from "lucide-react";

function PreFooter() {
    return (
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
    );
}

export default PreFooter;