import React from 'react';
import { Libre_Caslon_Text } from "next/font/google";
import Link from "next/link";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["italic"],
    display: "swap"
});

function Footer() {
    return (
        <footer className="w-full theme-footer bg-background">
            <div className="max-w-5xl h-full flex flex-col justify-between mx-auto pt-3 pb-3">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-3 pt-10 lg:pt-20 pb-20 pl-5 pr-5">
                    <div className="flex flex-col">
                        <p className={`${libre.className} text-xl`}>Rajske Kočije</p>
                        <p className="max-w-sm">Pružamo dostojanstvo i mir u vašim trenucima potrebe.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <ul>
                            <li className="uppercase text-sm">NAŠE USLUGE</li>
                            <li className="underline underline-offset-4"><Link href="/usluge">Pogrebne usluge</Link></li>
                        </ul>
                        <ul>
                            <li className="uppercase text-sm">social</li>
                            <li className="underline underline-offset-4"><Link href="https://www.instagram.com/rajskekocije">Instagram</Link></li>
                        </ul>
                        <ul>
                            <li className="uppercase text-sm">kontakt</li>
                            <li className="underline underline-offset-4"><Link href="/kontakt">Kontaktirajte nas</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full text-center">
                    <p>&copy; 2026 Rajske Kočije. Sva prava zadržana.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;