import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const FAQData = [
  {
    question: "What is a hackathon ?",
    answer:
      "A hackathon is a programming competition in which competitors use technology to build innovative projects within a fixed time duration. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors.",
  },
  {
    question: "Who can participate in Gracathon ?",
    answer:
      "Anyone! Whether you are a total beginner or a tech wizard, it doesn’t matter. We encourage anyone who is interested in learning more about Hackathons, programming, and the tech industry to join HackSRM!",
  },
  {
    question: "Do I have to know how to code to join ?",
    answer:
      "Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and etc are all going to impact the projects in various ways!",
  },
  {
    question: "How much does it cost to participate in Gracathon??",
    answer: "Registration fee is Nrs.4000",
  },
  {
    question: "Is it a team event ?",
    answer:
      "Yes, you can form teams of up to 5 people. Minimum team size is of 3 members",
  },
  {
    question: "Can I apply individually ?",
    answer: "Yes, you can also form a team after you get selected.",
  },

  {
    question: "Is there a code of conduct ?",
    answer:
      "Attendees must abide by our Code of Conduct. We want to respect each other and keep hackathon a safe environment for all participants.",
  },
  {
    question: "What is the venue of the hackathon?",
    answer: "Gracthon will be hosted on Chaitra 24th - 25 2080 at Butwal.",
  },
];

export function FAQSection() {
  return (
    <section
      id="FAQs"
      className="min-h-screen py-4 pt-20 bg-[url('/assets/background.png')]"
    >
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-noto-sans bg-clip-text bg-gradient-to-b from-white to-[#AAAAAA]">
        Frequently Asked Questions
      </div>
      <div className="mx-auto px-3">
        <div className="mx-auto flex max-w-2xl font-noto-sans flex-col space-y-3 rounded-md">
          {FAQData.map((faq) => {
            return (
              <div key={faq.question} className="z-10">
                <QuestionsAndAnswers key={faq.question} faq={faq} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const QuestionsAndAnswers = ({
  faq,
}: {
  faq: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 shadow" key={faq.question}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer bg-[#121930] border px-3 border-gray-700 rounded-md justify-between gap-2 py-3 text-white hover:text-indigo-500 active:text-indigo-500"
      >
        <span className="z-10 text-lg font-light antialiased transition duration-100">
          {faq.question}
        </span>
        <span>
          {isOpen ? (
            <IconChevronUp stroke={1.5} size={24} />
          ) : (
            <IconChevronDown size={24} stroke={1.5} />
          )}
        </span>
      </div>
      {isOpen ? (
        <p className="mb-4 py-2 font-normal text-black  antialiased">
          {faq.answer}
        </p>
      ) : null}

      <div>
        <span></span>
      </div>
    </div>
  );
};