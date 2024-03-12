import { useState } from "react";
import logo from "public/assets/logo.png";
import Image from "next/image";

const NavLinks = [
  {
    name: "Home",
    link: "Home",
  },
  {
    name: "About",
    link: "About",
  },
  {
    name: "Prizes",
    link: "Prizes",
  },
  {
    name: "Tracks",
    link: "Tracks",
  },
  {
    name: "Timeline",
    link: "Timeline",
  },
  {
    name: "Sponsors",
    link: "Sponsors",
  },
  {
    name: "Judges",
    link: "Organizers",
  },
  {
    name: "FAQs",
    link: "FAQs",
  },
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
    // className="fixed left-0 right-0 top-0 z-20 h-14 bg-opacity-80 backdrop-blur-lg backdrop-filter"
    >
      {/* Desktop Header */}
      <div className="hidden h-full md:block">
        {/* <Image src={logo} alt="association logo" height={50} width={50} /> */}
        <div className="flex h-full justify-start p-6 gap-9 text-xl">
          {NavLinks.map((link) => (
            <a
              className="indigo cursor-pointer font-noto-sans  text-gray-300 antialiased hover:text-indigo-500"
              key={link.name}
              href={`#${link.link}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block h-full md:hidden">
        <div className="flex h-full items-center px-4">
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {openMenu && (
          <div className="absolute left-0 right-0 top-14 flex flex-col space-y-6 bg-gray-900  bg-opacity-95 px-10 py-8 backdrop-blur-lg backdrop-filter">
            {NavLinks.map((link) => (
              <a
                className="indigo cursor-pointer text-lg text-gray-200 antialiased hover:text-indigo-500"
                key={link.name}
                href={`#${link.link}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
