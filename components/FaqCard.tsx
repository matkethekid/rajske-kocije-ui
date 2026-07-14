"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQCard({ items }: FAQCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full max-w-2xl mx-auto"> 
      <div className="flex flex-col gap-px bg-[#4C4546]/10 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(76,69,70,0.08)]">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white transition-colors duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 md:px-8 md:py-6 group cursor-pointer select-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className={`text-[15px] md:text-base font-light leading-relaxed tracking-wide transition-colors duration-300 pr-6 ${
                    isOpen
                      ? "text-[#4C4546]"
                      : "text-[#4C4546]/75 group-hover:text-[#4C4546]"
                  }`}
                >
                  {item.question}
                </h3>
                <span className="relative shrink-0 w-7 h-7 flex items-center justify-center">
                  <span
                    className={`absolute w-4 h-[1.5px] bg-[#4C4546] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute w-4 h-[1.5px] bg-[#4C4546] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
                      isOpen ? "-rotate-45 opacity-100" : "rotate-90 opacity-100"
                    }`}
                  />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                aria-hidden={!isOpen}
                role="region"
                className="overflow-hidden transition-[max-height,padding,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5 md:px-8 md:pb-6">
                  <div className="w-full h-px bg-[#4C4546]/8 mb-4" />
                  <p className="text-sm md:text-[15px] font-light leading-[1.75] tracking-wide text-[#4C4546]/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
