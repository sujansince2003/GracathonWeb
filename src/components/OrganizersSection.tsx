import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OrganizationHead = [
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
  {
    name: "sujan",
    image: "https://i.postimg.cc/B6fhknWh/CSIT-Associationof-BMCLogo.png",
    position: "Organizers Head",
    team: "",
  },
];

export const OrganizersSection = () => {
  return (
    <section
      id="Organizers"
      className="min-h-screen  bg-gray-950 px-2 pb-4 pt-5 text-lg sm:px-10 sm:pt-10 bg-[url('/assets/background.png')] bg-contain "
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mb-16 pb-4 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text bg-gradient-to-b from-white to-[#AAAAAA]">
        Judges
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
        {OrganizationHead.map((organizer) => (
          <div
            className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border  w-96"
            key={organizer.name}
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
              <Image
                src={organizer.image}
                alt="profile-picture"
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {organizer.name}
              </h4>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                {organizer.position}
              </p>
            </div>
            <div className="flex justify-center p-6 pt-0 gap-7">
              <a
                href="#facebook"
                className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>

              <a
                href="#inkedin"
                className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
