import Image from "next/image";

import codelogo from "public/assets/code.png";

export const Whatis = () => {
  return (
    <section
      id="About"
      className="my-0 
      flex
      justify-around
      py-16
      px-6  sm:px-20 sm:pt-28 bg-[url('/assets/background.png')] bg-contain"
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-3xl space-y-3">
        <h2 className="font-noto-sans bg-clip-text leading-3  bg-gradient-to-b from-white to-[#AAAAAA] font-orbitron z-10 mb-6 text-4xl font-bold sm:text-5xl">
          What is Gracethon?
        </h2>
        <p className="z-10 font-noto-sans text-xl font-bold ">
          gracethon is a 24-hour hackathon where you can build your dream
          project with your friends and win exciting prizes. It is a great
          opportunity to learn new skills, meet new people, and have fun.
          opportunity to learn new skills, meet new people, and have fun.
          opportunity to learn new skills, meet new people, and have fun.
          opportunity to learn new skills, meet new people, and have fun.
          opportunity to learn new skills, meet new people, and have fun.
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={codelogo} alt="codelogo" height={300} width={300} />
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
