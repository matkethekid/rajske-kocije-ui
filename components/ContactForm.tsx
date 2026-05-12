"use client";

import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function ContactForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    return (
        <form className="w-full flex flex-col">
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex flex-col gap-3 justify-start items-start">
                    <label htmlFor="ime" className="uppercase text-sm">ime</label>
                    <input type="text" placeholder="Vaše puno ime i prezime" className="ring-0 pb-2 border border-t-transparent border-l-transparent border-r-transparent focus-visible:outline-0 text-sm" name="ime" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                    <label htmlFor="email" className="uppercase text-sm">email</label>
                    <input type="email" placeholder="email@primer.com" className="ring-0 pb-2 border border-t-transparent border-l-transparent border-r-transparent focus-visible:outline-0 text-sm" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div></div>
            </div>
        </form>
    );
}

export default ContactForm;