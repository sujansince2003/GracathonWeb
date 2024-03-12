import logo from "public/assets/mainlogo.png";

import handshake from "public/assets/handshakee.png";
import grace from "public/assets/gracelogo.jpeg";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black-200 hover:text-gray-400"
  >
    {children}
  </a>
);

export const ContactUsSection = () => {
  const socials = [
    {
      href: "https://www.instagram.com/hacksrm23/",
      icon: (
        <IconBrandInstagram
          size={50}
          stroke={1.5}
          className="text-fuchsia-500"
        />
      ),
    },
    {
      href: "https://www.linkedin.com/in/hack-srm-0a5624274/",
      icon: (
        <IconBrandLinkedin size={50} stroke={1.5} className="text-blue-600" />
      ),
    },
  ];

  return (
    <section id="ContactUs" className=" py-10 ">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Contact Us
      </div>
      <div className="my-8 font-noto-sans flex flex-col items-center justify-evenly">
        <div className="flex items-center justify-center space-x-6">
          <IconMail
            className="h-20 w-20  rounded-full bg-indigo-600 p-4 text-white sm:h-16 sm:w-16"
            stroke={1.5}
          />

          <div className="indigo z-10 text-center text-xl text-gray-200 antialiased sm:text-2xl">
            <a href="mailto:hacksrm23@gmail.com">
              csitassociationbmc@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6">
        {socials.map(({ href, icon }) => (
          <div
            key={href}
            className="z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-70 p-2"
          >
            <SocialIcon href={href}>{icon}</SocialIcon>
          </div>
        ))}
      </div>

      <div className="flex flex-col font-noto-sans items-center justify-center space-y-6 pt-8 text-white">
        <h5 className="text-center text-2xl font-semibold text-gray-200">
          Organized by
        </h5>
        <div className="flex justify-between  gap-1 ">
          <Image
            className="rounded-full "
            src={logo}
            alt="association logo"
            height={100}
            width={180}
          />
          <Image
            src={handshake}
            alt="association logo"
            height={50}
            width={180}
          />

          <Image
            className="rounded-full"
            src={grace}
            alt="association logo"
            width={200}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};
