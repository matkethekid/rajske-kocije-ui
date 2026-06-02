"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Drone {
    id: number;
    name: string;
    description: string;
    thumbnailImage: string;
    images: string[];
    price: number;
    inStock: boolean;
    paket: string[];
}

interface IndividualDroneProps {
    item: Drone;
}

const drone: Drone = {
    id: 1,
    name: "Sanduk borovina",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.",
    thumbnailImage: "/kovceg_prototip.avif",
    images: ["/kovceg_prototip.avif", "/kovceg_prototip.avif", "/kovceg_prototip.avif"],
    price: 111,
    inStock: true,
    paket: ["string[]"],
}

const IndividualItem = ({ item } : IndividualDroneProps) => {
    const [selectedImage, setSelectedImage] = useState(item.images[0]);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setZoomPos({ x, y });
    };
return (
    <div className="w-full flex flex-col lg:flex-row bg-white p-6 gap-0">
        <div className="flex w-full lg:w-1/2 gap-4 flex-col-reverse lg:flex-row mx-auto">
            <div className="flex lg:flex-col gap-3 overflow-y-auto h-auto pr-2 sm:justify-center sm:items-center ">
                {item.images.map((img, idx) => (
                    <div key={idx} onMouseEnter={() => setSelectedImage(img)} className={`relative w-20 h-20 shrink-0 cursor-pointer rounded-lg border-2 transition-all ${selectedImage === img ? "border-yellow-500 shadow-md" : "border-gray-200"}`}>
                        <Image src={img} alt="drone" fill className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
            <div className="relative flex-1 min-h-150 rounded-2xl overflow-hidden cursor-crosshair" onMouseEnter={() => setShowZoom(true)} onMouseLeave={() => setShowZoom(false)}onMouseMove={handleMouseMove}>
                <Image src={selectedImage} alt="Item main" fill className="object-cover"/>
                {showZoom && (
                    <div className="absolute inset-0 pointer-events-none bg-white">
                        <div
                            className="absolute inset-0 transition-transform duration-75 ease-out"
                            style={{
                                backgroundImage: `url(${selectedImage})`,
                                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                backgroundSize: '300%',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{item.name}</h1>
            <div className="text-2xl font-semibold">Cena: {item.price == 0 ? 'Na upit': `${item.price}€ + PDV`}</div>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
            <Link href="tel:+38163377658" className="w-full text-center py-4 bg-black text-white font-bold hover:bg-white hover:text-black rounded-full border border-black cursor-pointer transition">
                Kontaktirajte nas (+381 63 377 658)
            </Link>
        </div>
    </div>
  );
}

export default IndividualItem