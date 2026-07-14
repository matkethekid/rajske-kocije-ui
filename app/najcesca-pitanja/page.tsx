import { Libre_Caslon_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import FAQCard from "@/components/FaqCard";

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
});

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

const faqs = [
    {
      question: "Koje usluge pruža pogrebno preduzeće?",
      answer:
        "Pogrebno preduzeće pruža kompletnu organizaciju sahrane, prevoz pokojnika u zemlji i inostranstvu, nabavku pogrebne opreme, organizaciju kremacije, pomoć oko dokumentacije i sve ostale usluge potrebne za dostojanstven ispraćaj.",
    },
    {
      question: "Kako organizovati sahranu nakon smrtnog slučaja?",
      answer:
        "Nakon prijave smrtnog slučaja potrebno je kontaktirati pogrebno preduzeće koje će preuzeti organizaciju sahrane, pomoći oko potrebne dokumentacije i koordinisati sve korake do održavanja ceremonije.",
    },
    {
      question: "Da li je pogrebno preduzeće dostupno 24 časa?",
      answer:
        "Da. Dostupni smo 24 sata dnevno, 7 dana u nedelji, uključujući vikende i praznike, kako bismo pružili pomoć kada je najpotrebnija.",
    },
    {
      question: "Koja dokumentacija je potrebna za organizaciju sahrane?",
      answer:
        "Potrebna dokumentacija zavisi od okolnosti smrtnog slučaja, ali najčešće uključuje potvrdu o smrti i lične dokumente pokojnika. Pogrebno preduzeće može pomoći u prikupljanju i pripremi potrebnih dokumenata.",
    },
    {
      question: "Da li organizujete međunarodni transport pokojnika?",
      answer:
        "Da. Transport pokojnika iz inostranstva ili u inostranstvo obuhvata organizaciju prevoza, pribavljanje potrebne dokumentacije i saradnju sa nadležnim institucijama kako bi ceo postupak bio sproveden u skladu sa propisima.",
    },
    {
      question: "Da li nudite kompletnu organizaciju sahrane?",
      answer:
        "Da. Kompletna organizacija sahrane podrazumeva preuzimanje svih obaveza kako bi porodica bila rasterećena administrativnih i organizacionih poslova u teškim trenucima.",
    },
    {
      question: "Da li nudite različite modele sanduka?",
      answer:
        "Da. U ponudi imamo sanduke različitih materijala, dimenzija, dizajna i cenovnih kategorija.",
    },
    {
      question: "Da li izlazite na teren odmah nakon poziva?",
      answer:
        "Da. Nakon poziva naš tim izlazi na teren u najkraćem mogućem roku kako bi preuzeo sve neophodne aktivnosti.",
    },
    {
      question: "Koliko košta organizacija sahrane?",
      answer:
        "Cena zavisi od odabranih usluga, pogrebne opreme i dodatnih zahteva. Nakon konsultacija pripremamo jasnu i transparentnu ponudu.",
    },
    {
      question: "Da li nudite usluge za prevoz pokojnika iz bolnice?",
      answer:
        "Da. Organizujemo prevoz pokojnika iz bolnica, domova, ustanova i privatnih adresa.",
    },
    {
      question: "Kako mogu da zatražim ponudu?",
      answer:
        "Ponudu možete zatražiti telefonom, putem kontakt forme ili dolaskom u naše prostorije.",
    },
  ];

const page = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
    <div className="w-full min-h-screen bg-white relative flex flex-col">
      <Navbar/>
      <main className="w-full max-w-7xl mx-auto mt-10 flex flex-col gap-10 p-5 lg:pb-20">
       <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className={`text-4xl lg:text-5xl ${libre.className} text-center`}>Često postavljana pitanja</h1>
        <p className="text-center max-w-2xl">
          Na ovoj stranici pronaći ćete odgovore na najčešća pitanja u vezi sa organizacijom sahrane, pogrebnim uslugama, potrebnom dokumentacijom, 
          međunarodnim transportom pokojnika, kremacijom, pogrebnom opremom i drugim temama koje su važne u ovim trenucima. 
          Ukoliko ne pronađete odgovor 
          na pitanje koje vas interesuje, naš tim vam je na raspolaganju 24 časa dnevno i spreman je da pruži sve potrebne informacije, podršku i pomoć 
          u organizaciji svih pogrebnih usluga.
        </p>
       </div>
       <div className="flex flex-wrap gap-3">
        <FAQCard items={faqs}/>
       </div>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default page;
