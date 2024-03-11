import { IconBrandDiscord } from "@tabler/icons-react";
import Image from "next/image";
import logo from "public/assets/logo.png";
import Heroimg from "public/assets/heroimg.webp";
import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

export const HeroSection = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeleft =
        new Date("March 21, 2024 09:00:00").getTime() - new Date().getTime();
      setDays(
        `${
          Math.floor(timeleft / (1000 * 60 * 60 * 24)) < 10
            ? "0" + Math.floor(timeleft / (1000 * 60 * 60 * 24))
            : Math.floor(timeleft / (1000 * 60 * 60 * 24))
        }`
      );
      setHours(
        `${
          Math.floor((timeleft / (1000 * 60 * 60)) % 24) < 10
            ? "0" + Math.floor((timeleft / (1000 * 60 * 60)) % 24)
            : Math.floor((timeleft / (1000 * 60 * 60)) % 24)
        }`
      );
      setMinutes(
        `${
          Math.floor((timeleft / 1000 / 60) % 60) < 10
            ? "0" + Math.floor((timeleft / 1000 / 60) % 60)
            : Math.floor((timeleft / 1000 / 60) % 60)
        }`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen flex lg:flex-row items-center flex-col py-10 md:py-2 justify-between"
    >
      <div className="w-full flex  justify-between flex-col">
        {/* <Image src={logo} alt="association logo" height={200} width={200} /> */}
        <div className="text-white md:px-16 px-10 flex flex-col gap-3">
          <h1 className="md:text-7xl text-5xl font-extrabold">
            Join Gracathon
          </h1>

          <div className="h-[40px]">
            <Typewriter
              texts={[
                "36 Hours of creation  ",
                "Win Awesome Prizes ",
                "Learn Build Create ",
              ]}
              delay={200}
              infinite
            />
          </div>
          <p className="text-xl font-semibold">
            Join us on 24 & 25 Chaitra 2080 with curious geeks from across the
            nation for 36 hours of creation, innovation, & fun.
          </p>
          <div className="pt-6 z-10 flex gap-x-4 flex-col gap-y-4">
            <a
              href="https://discord.gg/H7tcpbv7Vq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
            >
              <span className="font-bold">Register now</span>
            </a>
            <a
              href="dicord link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-80 items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-white"
            >
              <IconBrandDiscord size={24} />
              <span className="font-bold">Join Discord</span>
            </a>
          </div>
        </div>
      </div>

      <div className="px-16">
        <Image src={Heroimg} alt="heroimg" />
      </div>
    </section>
  );
};
