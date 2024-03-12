import Image from "next/image";
const DiamindSponsorsData = [
  {
    name: "Marblism",
    image: "/sponsores/marblism.png",
    link: "https://www.marblism.com/",
    sponsorsCategory: "",
    alt: "MARBLISM LOGO",
  },
];
const GoldSponsorsData = [
  {
    name: "Marblism",
    image: "/sponsores/marblism.png",
    link: "https://www.marblism.com/",
    sponsorsCategory: "",
    alt: "MARBLISM LOGO",
  },
];

const SilverSponsorsData = [
  {
    name: "EthIndia",
    image: "/sponsores/ethindia.png",
    link: "https://ethindia.co/",
    sponsorsCategory: "",
    alt: "ETHINDIA LOGO",
  },
  {
    name: "Devfolio",
    image: "/sponsores/devfolio.png",
    link: "https://devfolio.co/",
    sponsorsCategory: "",
    alt: "DEVFOLIO LOGO",
  },
  {
    name: "Polygon",
    image: "/sponsores/polygon.png",
    link: "https://polygon.technology/",
    sponsorsCategory: "",
    alt: "POLYGON LOGO",
  },
];

export const SponsorSection = () => {
  return (
    <section
      id="Sponsors"
      className="min-h-screen px-2 pb-4 pt-5 sm:px-10 sm:pt-10 bg-[url('/assets/background.png')] bg-contain"
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        Sponsors
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-noto-sans bg-clip-text  text-center bg-gradient-to-b from-white to-[#AAAAAA]">
        DIAMOND SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {DiamindSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <Image
                src={sponsor.image}
                loading="lazy"
                width={500} // Add width
                height={200} // Add height
                alt={sponsor.alt}
                className={`h-auto w-[500px] rounded-2xl object-contain p-3 animate-mover`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        GOLD SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {GoldSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <Image
                src={sponsor.image}
                loading="lazy"
                width={500} // Add width
                height={200} // Add height
                alt={sponsor.alt}
                className={`h-auto w-[500px] rounded-2xl object-contain p-3 animate-mover`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        SILVER SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {SilverSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5 "
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <Image
                src={sponsor.image}
                loading="lazy"
                width={500} // Add width
                height={200} // Add height
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl object-contain p-3 sm:h-28 animate-mover`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
