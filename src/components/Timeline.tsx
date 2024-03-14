import { IconTrophy } from "@tabler/icons-react";

export function Timeline() {
  return (
    <section
      id="Timeline"
      className="py-20 w-full px-6 md:px-20 bg-[#F2F6FB] bg-contain flex flex-col justify-center items-center"
    >
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text  bg-gradient-to-b from-white to-[#AAAAAA]">
        TimeLine
      </div>

      <ol className="relative border-s border-gray-500 dark:border-gray-700">
        <li className="mb-10 ms-4" data-aos="fade-up" data-aos-duration="3000">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
            Phase 1: [Deadline 15th Chaitra]
          </time>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Registration via Online Form:
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            The gateway to GRACATHON 2024 commences with a streamlined online
            registration process. Our designated website serves as the official
            platform for teams across the nation to register for this
            prestigious event. Assemble your team of talented individuals and
            embark on this journey of innovation.
          </p>
        </li>
        <li className="mb-10 ms-4" data-aos="fade-up" data-aos-duration="3000">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
            Phase 2: [17th Chaitra]
          </time>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Prototype Development:
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Using coding, design, and other relevant skills, teams will build
            functional prototypes of their solutions. This phase will involve
            rapid development, iterative feedback, and continuous improvement
            which is evaluated by a panel of judges. The entire Phase 2 will be
            conducted online.
          </p>
        </li>
        <li className="mb-10 ms-4" data-aos="fade-up" data-aos-duration="3000">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
            Phase 3:
          </time>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Selection of Finalists:
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Judges will evaluate solutions based on innovation, technical
            execution, usability, and potential impact.
          </p>
        </li>
        <li className="mb-10 ms-4" data-aos="fade-up" data-aos-duration="3000">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
            Phase 4:
          </time>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Journey to the Grand Finale:
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            The panel of judges evaluates the submissions, selecting 10
            finalists based on innovation, presentation quality, and alignment
            with the challenge criteria; finalists are notified of their
            selection.
          </p>
        </li>
      </ol>
    </section>
  );
}
