import {
  IconRobot,
  IconBrandXbox,
  IconCircuitDiodeZener,
  IconCurrencyEthereum,
  IconCardboards,
  IconBrandOpenSource,
} from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "AI AND ML",
    prize: "120 USD",
    description:
      "Create innovative applications that leverage machine learning algorithms to solve complex problems, natural language and computer vision.",
    icon: <IconRobot className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 2,
    name: "I-O-T",
    prize: "120 USD",
    description:
      "Build connected devices and systems that collect and analyze data in real-time, creating innovative solutions that improve efficiency.",
    icon: (
      <IconCircuitDiodeZener className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 3,
    name: "WEB3 AND FIN-TECH",

    description:
      "Build decentralized applications (dApps) that run on the blockchain, smart contracts to facilitate secure and transparent transactions.",
    icon: (
      <IconCurrencyEthereum className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 4,
    name: "OPEN INNOVATION",

    description:
      "Make Best use of Technology to solve real world problems and make a difference. which women can relate to.",
    icon: <IconBrandOpenSource className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 5,
    name: "Best hack built on Polygon",
    description:
      "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",

    icon: <IconCardboards className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 6,
    name: "Best hack built on Ethereum",
    description:
      "ETHIndia is empowering the Ethereum Community through its various initiatives including hackathons, fellowships, grants, and more!",

    icon: <IconBrandXbox className="h-10 w-10 text-white" stroke={1.5} />,
  },
];

export const ThemeSection = () => {
  return (
    <section
      id="Tracks"
      className="min-h-screen w-full px-0 py-16 md:px-10 bg-[#F2F6FB] bg-contain"
    >
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        Tracks
      </div>
      <div className="grid grid-cols-1 font-noto-sans gap-10 px-4 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            className="z-10 flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-[#121930] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              {theme.icon}
            </div>
            <div className="text-center text-2xl font-semibold text-white">
              {theme.name}
            </div>

            <div className="text-center text-gray-300">{theme.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
