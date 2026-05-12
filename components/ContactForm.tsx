"use client";

import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [service, setService] = useState<string>("");
    return (
        <form className="w-full flex flex-col gap-5 max-w-5xl p-5">
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex flex-col gap-3 justify-start items-start">
                    <label htmlFor="ime" className="uppercase text-sm">ime</label>
                    <input type="text" placeholder="Vaše puno ime i prezime" className="ring-0 pb-2 border border-t-transparent border-l-transparent border-r-transparent focus-visible:outline-0 text-sm" name="ime" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                    <label htmlFor="email" className="uppercase text-sm">email</label>
                    <input type="email" placeholder="email@primer.com" className="ring-0 pb-2 border border-t-transparent border-l-transparent border-r-transparent focus-visible:outline-0 text-sm" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex flex-col gap-3 justify-start items-start w-[60%]">
                    <label htmlFor="usluga" className="uppercase text-sm">usluga</label>
                    <Select value={service} onValueChange={setService}>
                        <SelectTrigger className="w-full border-t-transparent border-l-transparent border-r-transparent rounded-none placeholder:p-10 focus-visible:ring-0 outline-none">
                            <SelectValue placeholder="Izaberite uslugu" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="pogrebne-usluge">Pogrebne usluge</SelectItem>
                                <SelectItem value="pogrebna-oprema">Pogrebna oprema</SelectItem>
                                <SelectItem value="prevoz-u-inostranstvo">Prevoz pokojnika u zemlji</SelectItem>
                                <SelectItem value="prevoz-u-zemlji">Prevoz pokojnika u inostranstvu</SelectItem>
                                <SelectItem value="administrativna-pomoc">Administrativna pomoć</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex flex-col gap-3 justify-start items-start w-[60%]">
                    <label htmlFor="usluga" className="uppercase text-sm">poruka</label>
                    <Textarea placeholder="Vaša poruka ovde..." className="min-h-37.5 focus-visible:ring-0"></Textarea>
                </div>
            </div>
            <button aria-label="Pošalji poruku" className="uppercase pt-3 pb-3 pl-10 pr-10 rounded-xl bg-black max-w-87.5 text-white text-sm cursor-pointer">Pošalji poruku</button>
        </form>
    );
}

export default ContactForm;