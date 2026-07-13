import Link from "next/link";
import { Libre_Caslon_Text } from "next/font/google";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

const Consultation = () => {
  return (
    <section 
      className="w-[90%] max-w-7xl mx-auto p-5 gap-10 lg:p-15 bg-black rounded-lg text-white flex flex-col lg:flex-row justify-between mb-10"
    >
      <div className="flex flex-col gap-3">
        <p className={`text-3xl ${libre.className}`}>Garantovana posvećenost</p>
        <p className={`text-sm ${libre.className} max-w-xl`}>
          Bez obzira na opštinu u kojoj se nalazite, naš dolazak je prioritetan.
          Obezbeđujemo svu neophodnu dokumentaciju i dostojanstven prevoz
          pokojnika uz najviše profesionalne standarde.
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 lg:w-[20%]">
        <Link href="tel:+38163377658" className="p-3 bg-white rounded-full text-black text-center">+381 63377658</Link>
        <p className="text-sm text-white text-center">BESPLATNA KONSULTACIJA</p>
      </div> 
    </section>
  )
}

export default Consultation;
