import {
  IconTrophy,
  IconMedal2,
  IconAward,
  IconBulb,
} from "@tabler/icons-react";
import secondmedal from "public/assets/2ndmedal.png";

export function MainPrizes() {
  return (
    <section
      id="Prizes"
      className="py-20 w-full px-0 md:px-10 bg-[#F2F6FB] bg-contain "
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        Prizes
      </div>

      <div className="flex flex-col gap-x-3 flex-wrap gap-y-4 px-4">
        <div
          data-aos="flip-right"
          className="z-0 max-w-2xl font-noto-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-[#121930] p-8"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
            <IconTrophy size={48} stroke={1.5} color="#fff" />
          </div>
          <div className="text-center text-2xl font-semibold text-white">
            Winner Prize: Rs.33,333
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div
            data-aos="flip-right"
            className="z-0 max-w-2xl font-noto-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-[#121930] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              <IconMedal2 size={48} stroke={1.5} color="#fff" />
            </div>
            <div className="text-center text-2xl font-semibold text-white">
              First Runner Up: Rs.22,222
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="z-0 max-w-2xl font-noto-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-[#121930] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
              <IconAward size={48} stroke={1.5} color="#fff" />
            </div>
            <div className="text-center text-2xl font-semibold text-white">
              Second Runner Up: Rs.11,111
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="z-0 max-w-2xl font-noto-sans mx-auto flex flex-col items-center justify-evenly space-y-4 rounded-lg border border-gray-800 bg-[#121930] p-8"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
            <IconBulb size={48} stroke={1.5} color="#fff" />
          </div>
          <div className="text-center text-2xl font-semibold text-white">
            Unique Project: Rs.3,333
          </div>
        </div>
      </div>
    </section>
  );
}
