import React from "react";

const questions = [
  {
    question: "I want to work part-time, is that possible",
    type: "General",
    process: "",
  },
  {
    question: "How long are the average projects?",
    type: "",
    process: "",
  },
  {
    question: "How does the payment works?",
    type: "",
    process: "",
  },
  {
    question: "How much can I earn?",
    type: "",
    process: "",
  },
  {
    question: "I want to work part-time, is that possible",
    type: "General",
    process: "Joining Process",
  },
  {
    question: "How long are the average projects?",
    type: "",
    process: "",
  },
  {
    question: "How long are the average projects?",
    type: "",
    process: "",
  },
  {
    question: "How much can I earn?",
    type: "",
    process: "",
  },
];

const FAQs = () => {
  return (
    <section className="bg-[#F3F3F3] pt-40 pb-80">
      <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-10">
        {questions.map((item, index) => (
          <div key={index} className="flex">
            <div
              className={`p-5 border ${
                item.type ? "lg:w-1/5 lg:block hidden" : "hidden p-0"
              }`}
            >
              <p>{item.type}</p>
            </div>
            <div
              className={`p-5 border ${
                item.process ? "lg:w-1/5 lg:block hidden" : "hidden p-0"
              }`}
            >
              <p>{item.process}</p>
            </div>
            <div
              className={`py-5 border ${
                item.type ? "w-4/5 lg:pl-80 pl-10" : "w-full lg:pl-[625px] p-10"
              } ${item.process && item.type ? "lg:pl-[110px]" : "pl-10"}`}
            >
              <p>{item.question}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
