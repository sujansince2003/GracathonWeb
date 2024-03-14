import {
  IconClipboardHeart as IconMedicalCross,
  IconChartLine as IconBusinessChartGrowth,
  IconBeach as IconTravelSuitcase,
  IconBook,
  IconUsersGroup as IconBuildingGovernment,
} from "@tabler/icons-react";

const themesData = [
  {
    id: 1,
    name: "Healthcare",

    description:
      "Develop innovative solutions to improve healthcare delivery, patient outcomes, and healthcare management leveraging technology such as telemedicine, wearable devices, or AI-driven diagnostics.",
    icon: <IconMedicalCross className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 2,
    name: "Entrepreneurship",

    description:
      "Create tools, platforms, or services to empower entrepreneurs, facilitate business growth, and drive economic development through innovative solutions in areas such as access to finance, market access, or mentorship.",
    icon: (
      <IconBusinessChartGrowth className="h-10 w-10 text-white" stroke={1.5} />
    ),
  },
  {
    id: 3,
    name: "Tourism",

    description:
      "Design solutions that enhance the tourism experience, promote sustainable tourism practices, and address challenges in areas such as destination management, cultural preservation, or travel accessibility.",
    icon: <IconTravelSuitcase className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 4,
    name: "Education",

    description:
      "Develop innovative educational tools, platforms, or approaches to enhance learning outcomes, promote access to quality education, and address challenges such as remote learning, skills development, or inclusive education.",
    icon: <IconBook className="h-10 w-10 text-white" stroke={1.5} />,
  },
  {
    id: 5,
    name: "Public Sector",

    description:
      "Create solutions to improve government services, enhance public sector efficiency, and promote citizen engagement through innovative approaches such as digital government platforms, e-governance solutions, or data-driven policymaking.",
    icon: (
      <IconBuildingGovernment className="h-10 w-10 text-white" stroke={1.5} />
    ),
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
