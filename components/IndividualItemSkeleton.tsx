import React from 'react';
import Link from "next/link";

function IndividualItemSkeleton() {
    return (
        <div className="w-full flex flex-col lg:flex-row bg-white p-6 gap-0">
            <div className="flex w-full lg:w-1/2 gap-4 flex-col-reverse lg:flex-row mx-auto">
                <div className="flex lg:flex-col gap-3 overflow-y-auto h-auto pr-2 sm:justify-center sm:items-center">
                    <div className={`relative w-20 h-20 shrink-0 cursor-pointer rounded-lg border-2 transition-all border-gray-200 bg-gray-200 pulse`}></div>
                    <div className={`relative w-20 h-20 shrink-0 cursor-pointer rounded-lg border-2 transition-all border-gray-200 bg-gray-200 pulse`}></div>
                </div>
                <div className="relative lg:flex-1 h-[70dvh] lg:h-150 bg-gray-200 pulse rounded-2xl overflow-hidden cursor-crosshair"></div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-4 mt-5 lg:mb-0">
                <h1 className="text-4xl font-bold h-10 bg-gray-200 rounded-lg pulse lg:max-w-75"></h1>
                <div className="text-2xl font-semibold h-10 bg-gray-200 rounded-lg pulse lg:max-w-75"></div>
                <p className="text-gray-600 leading-relaxed h-30 bg-gray-200 rounded-lg pulse"></p>
                <Link href="tel:+38163377658" className="w-full text-center py-4 bg-black text-white font-bold hover:bg-white hover:text-black rounded-full border border-black cursor-pointer transition">
                    Kontaktirajte nas (+381 63 377 658)
                </Link>
            </div>
        </div>
    );
}

export default IndividualItemSkeleton;