"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Libre_Caslon_Text } from "next/font/google";
import { Menu, X } from "lucide-react";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    display: "swap",
    style: "italic"
});

interface Links {
    id: number;
    name: string;
    href: string;
}

const links: Links[] = [
    { id: 0, name: "naslovna", href: "/" },
    { id: 1, name: "o nama", href: "/onama" },
    { id: 0, name: "usluge", href: "/usluge" },
];

function Navbar() {
    const [activeSidebar, setActiveSidebar] = useState<boolean>(false);
    return (
        <nav className="w-full h-20 sticky top-0 z-100 bg-white">
            <div className="flex flex-row justify-between items-center lg:max-w-5xl h-full mx-auto w-full p-5 lg:p-0">
                <Link href="/" className={`${libre.className} text-lg w-50 flex z-100`}>Rajske Kočije</Link>
                <ul className="hidden lg:flex flex-row gap-10 w-full items-center justify-center">
                    {links.map((link: Links, index: number) => (
                        <li key={index}>
                            <Link href={link.href} className="text-black uppercase hover:underline underline-offset-4">{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <Link href="/kontakt" className="uppercase underline underline-offset-4 w-75 hidden lg:block">kontakt</Link>
                <button aria-label="Otvori meni" className="flex z-11 lg:hidden" onClick={(prevState) => setActiveSidebar((prevState) => !prevState)}>
                    {
                        activeSidebar ? <X/> : <Menu/>
                    }
                </button>
            </div>
            <div className={`w-full min-h-screen fixed bg-white z-99 flex flex-col transition-all duration-300 ${activeSidebar ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="w-full h-[60vh] flex flex-col gap-5 justify-center items-center">
                    {links.map((link: Links, index: number) => (
                        <li key={index}>
                            <Link href={link.href} className="text-black underline underline-offset-4 uppercase">{link.name}</Link>
                        </li>
                    ))}
                    <li><Link href="/kontakt" className="uppercase underline text-black">kontakt</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;