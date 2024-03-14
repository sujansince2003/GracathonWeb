import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import codelogo from "public/assets/heroimg.webp";

export const Whatis = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="About"
      className="my-0 
      flex
      justify-around
      py-16
      px-6  sm:pt-28 bg-[#F2F6FB] bg-contain"
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-2xl space-y-3 " data-aos="fade-right">
        <h2 className="font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA] font-orbitron z-10 mb-6 text-4xl font-bold sm:text-5xl ">
          What is GRACATHON?
        </h2>
        <p className="z-10 font-noto-sans text-base font-bold ">
          GRACATHON, Organized by CSIT Association of BMC which is supported by
          Grace International, transcends traditional hackathons by providing a
          dynamic platform where diverse participants converge to tackle
          societal challenges through creativity, technology, and collaboration.
          It fosters skill development, teamwork, and community engagement,
          offering networking opportunities and experiential learning. Beyond
          the event, GRACATHON seeds innovative solutions with the potential to
          evolve into impactful ventures, all while cultivating a vibrant
          ecosystem of collaboration and inclusion. In essence, GRACATHON
          represents a transformative experience, uniting minds and aspirations
          in the pursuit of positive change.
        </p>
      </div>
      <div className="hidden md:block" data-aos="fade-left">
        <Image src={codelogo} alt="codelogo" height={500} width={500} />
      </div>
      {/* <div className="px-16">
        <Image src={Heroimg} alt="heroimg" />
      </div> */}
      {/* <div className="flex justify-between gap-1 ">
        <Image
          className="rounded-full "
          src={logo}
          alt="association logo"
          height={100}
          width={180}
        />
        <Image src={handshake} alt="association logo" height={50} width={180} />

        <Image
          className="rounded-full"
          src={grace}
          alt="association logo"
          width={200}
          height={100}
        />
      </div> */}
    </section>
  );
};
