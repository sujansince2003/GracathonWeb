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
      href: "https://www.facebook.com/csit.bmc",
      icon: (
        <i
          className="fa-brands fa-facebook-f text-3xl"
          style={{ color: "#e0dee8 " }}
        ></i>
      ),
    },
    {
      href: "https://np.linkedin.com/company/csitabmc?trk=ppro_cprof",
      icon: (
        <i
          className="fa-brands fa-linkedin-in text-3xl"
          style={{ color: "#edeff3" }}
        ></i>
      ),
    },
    {
      href: "https://csitabmc.com",
      icon: (
        <i
          className="fa-solid fa-link text-3xl"
          style={{ color: "#e2e5e9" }}
        ></i>
      ),
    },
  ];

  return (
    <section id="ContactUs" className=" py-10 ">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Contact Us
      </div>
      <div className="my-8 font-noto-sans flex flex-col items-center justify-evenly gap-6">
        <div className="flex items-center justify-center space-x-6">
          <IconMail
            className="h-14 w-14  rounded-full bg-indigo-600 p-4 text-white md:h-20 md:w-20"
            stroke={1.5}
          />

          <div className="indigo z-10 text-center text-xl text-gray-200 antialiased sm:text-2xl">
            <a href="mailto:hacksrm23@gmail.com">
              csitassociationbmc@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <i
            className="fa-solid fa-phone text-3xl"
            style={{ color: "#4007e9" }}
          ></i>

          <div className="indigo z-10 text-center text-xl text-gray-200 antialiased sm:text-2xl">
            +977- 981-5490890
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
        <div className="md:flex hidden justify-between  gap-1 ">
          <a href="https://csitabmc.com/" target="_blank">
            <Image
              className="rounded-full "
              src={logo}
              alt="association logo"
              height={100}
              width={180}
            />
          </a>
          <Image
            src={handshake}
            alt="association logo"
            height={50}
            width={180}
          />
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
          <Image
            src={handshake}
            alt="association logo"
            height={50}
            width={100}
          />

          <Image
            className="rounded-full"
            src={grace}
            alt="association logo"
            width={100}
            height={150}
          />
        </div>
      </div>

      <div className="text-white pt-3">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="text-center">
          CSIT Association of Butwal Multiple Campus
        </p>
        <p className="text-center">
          Build with ❤️ by{" "}
          <a href="https://facebook.com/sujansince2003">Sujan Khatri</a>
        </p>
      </div>
    </section>
  );
};
