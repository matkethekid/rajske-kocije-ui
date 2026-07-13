import { Libre_Caslon_Text } from "next/font/google";

const libre = Libre_Caslon_Text({
    weight: ["400"],
    subsets: ["latin-ext"],
    style: ["normal"],
    display: "swap",
    preload: true
});

const Steps = () => {
  return (
    <section className="w-full lg:max-w-7xl text-center flex flex-col justify-center items-center mx-auto mt-20 p-5 lg:p-0">
      <div className="flex flex-col gap-3">
        <h2 className={`${libre.className} text-4xl`}>Proces rada korak po korak</h2>
        <p className="text-[#5F5E58]">Transparentnost u svakom koraku kako biste znali šta možete očekivati od naše službe.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mt-10 mb-10">
        <div className="flex flex-col gap-3 p-5  text-start">
          <div className="flex flex-row gap-3 items-center">
            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>01</p>
            <div className="h-px w-full bg-[#CFC4C5]"></div>
          </div>
          <p className="uppercase tracking-wider text-sm">PRVI POZIV</p>
          <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
            Dostupni smo 24/7. Nakon vašeg
            poziva, naš tim odmah kreće na
            lokaciju u Zemunu.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5  text-start">
          <div className="flex flex-row gap-3 items-center">
            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>02</p>
            <div className="h-px w-full bg-[#CFC4C5]"></div>
          </div>
          <p className="uppercase tracking-wider text-sm">DOLAZAK</p>
          <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
            Stručno osoblje vrši pripremu i
            preuzimanje pokojnika uz
            maksimalno uvažavanje protokola.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5  text-start">
          <div className="flex flex-row gap-3 items-center">
            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>03</p>
            <div className="h-px w-full bg-[#CFC4C5]"></div>
          </div>
          <p className="uppercase tracking-wider text-sm">TRANSPORT</p>
          <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
            Prevoz do kapele, groblja ili druge
            željene lokacije u klimatizovanim,
            namenskim vozilima.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5  text-start">
          <div className="flex flex-row gap-3 items-center">
            <p className={`${libre.className} text-6xl text-[#CFC4C5]`}>04</p>
            <div className="h-px w-full bg-[#CFC4C5]"></div>
          </div>
          <p className="uppercase tracking-wider text-sm">DOKUMENTACIJA</p>
          <p className={`${libre.className} text-sm text-[#4C4546] max-w-60`}>
            Završavamo svu prateću
            administrativnu proceduru kako
            bismo vas rasteretili obaveza.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Steps
