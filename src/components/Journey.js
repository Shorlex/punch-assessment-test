import React from "react";
import JourneyTemplate from "./JourneyTemplate";

const stageOne = [
  {
    bg: "#EDEFFF",
    number: "/images/number-1.png",
    img: "/images/stage-1.png",
    title: "Find your next star performer.",
    body: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
  },
];

const stageTwo = [
  {
    bg: "#FFF7E1",
    number: "/images/number-2.png",
    img: "/images/stage-2.png",
    title: "Evaluate to your heart’s content.",
    body: "Assess the candidate through work history, transparent tests and video interviews.",
  },
];

const stageThree = [
  {
    bg: `#F3F3F3`,
    number: "/images/number-3.png",
    img: "/images/stage-3.png",
    title: "Start building your team.",
    body: "Onboard your candidate right away and start creating the next big thing.",
  },
];

const Journey = () => {
  return (
    <section className="py-20 px-5 md:px-20">
      <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
        Start your journey today.
      </h2>
      <div className="mt-14">
        <div>
          {stageOne.map((item, index) => (
            <div key={index}>
              <JourneyTemplate
                bg={item.bg}
                title={item.title}
                body={item.body}
                number={item.number}
                img={item.img}
              />
            </div>
          ))}
        </div>
        <div>
          {stageTwo.map((item, index) => (
            <div key={index}>
              <JourneyTemplate
                bg={item.bg}
                title={item.title}
                body={item.body}
                number={item.number}
                img={item.img}
              />
            </div>
          ))}
        </div>
        <div>
          {stageThree.map((item, index) => (
            <div key={index}>
              <JourneyTemplate
                bg={item.bg}
                title={item.title}
                body={item.body}
                number={item.number}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
