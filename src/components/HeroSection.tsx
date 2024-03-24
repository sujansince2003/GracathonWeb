import { IconBrandDiscord } from "@tabler/icons-react";
import Image from "next/image";
import logo from "public/assets/mainlogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import handshake from "public/assets/handshakee.png";
import grace from "public/assets/gracelogo.jpeg";

import Typewriter from "./Typewriter";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="Home"
      className="md:min-h-screen flex lg:flex-row flex-col-reverse md:items-center md:flex-col py-10 md:py-2 md:justify-evenly"
    >
      <div
        className="md:w-[50%] w-full  flex  justify-between flex-col"
        data-aos="fade-right"
      >
        <div className="text-white md:px-16 px-10 flex flex-col gap-3">
          <h1 className="md:text-6xl text-5xl font-extrabold text-yellow-400">
            Join Gracathon
          </h1>

          <div className="h-[40px]">
            <Typewriter
              texts={[
                "24 Hours of creation  ",
                "Win Awesome Prizes ",
                "Learn Build Create ",
              ]}
              delay={200}
              infinite
            />
          </div>
          <p className="text-xl font-semibold">
            Join us on 5 & 6 Baisakh 2081 with curious geeks from across the
            nation for 24 hours of creation, innovation, & fun.
          </p>
          <div className="pt-6 z-10 flex gap-x-4 flex-col gap-y-4">
            <a
              href="https://forms.gle/6PjqoKrFByAfpHP67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
            >
              <span className="font-bold">Register now</span>
            </a>
            <a
              href="https://discord.gg/Vp4ujUJfKy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
            >
              <IconBrandDiscord size={24} />
              <span className="font-bold">Join Our Discord</span>
            </a>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="md:flex hidden justify-between  gap-1 pr-8 "
      >
        <a href="https://csitabmc.com/" target="_blank">
          <Image
            className="rounded-full "
            src={logo}
            alt="association logo"
            height={100}
            width={180}
          />
        </a>
        <Image src={handshake} alt="association logo" height={50} width={180} />
        <a href="https://facebook.com" target="_blank">
          <Image
            className="rounded-full"
            src={grace}
            alt="grace logo"
            width={200}
            height={100}
          />
        </a>
      </div>

      <div className="flex md:hidden justify-between  gap-1 md:px-16 px-10 my-10 ">
        <Image
          className="rounded-full "
          src={logo}
          alt="association logo"
          height={100}
          width={100}
        />
        <Image src={handshake} alt="association logo" height={50} width={100} />

        <Image
          className="rounded-full"
          src={grace}
          alt="association logo"
          width={100}
          height={150}
        />
      </div>
    </section>
  );
};
