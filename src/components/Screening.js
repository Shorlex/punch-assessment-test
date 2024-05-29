import React from "react";

const process = [
  {
    icon: `/images/play-icon.png`,
    step: "Step 1:",
    name: "Resume Screening",
    text: "",
  },
  {
    icon: `/images/play-icon-white.png`,
    step: "Step 2:",
    name: "Video Interview",
    text: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    icon: `/images/play-icon.png`,
    step: "Step 3:",
    name: "Technical Evaluation",
    text: "",
  },
  {
    icon: `/images/play-icon.png`,
    step: "Step 4:",
    name: "Application Review",
    text: "",
  },
  {
    icon: `/images/play-icon.png`,
    step: "Step 5:",
    name: "Lets get to Work",
    text: "",
  },
];

const Screening = () => {
  return (
    <section className="py-20 md:py-40 px-5 md:px-20">
      <div className="w-wull lg:w-[700px]">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          How we ensure you’re in good hands.
        </h2>
        <p className="mt-5 text-xl">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
      </div>
      <div>
        {process.map((item, index) => (
          <div
            key={index}
            className={`w-full lg:w-[635px] mt-1 border border-[#f0f0f0] rounded-[7px] p-5 ${
              item.text && "shadow-shadowTwo"
            }`}
          >
            <div className="flex gap-3">
              <div
                className={`w-[57px] h-[57px] rounded-full flex justify-center items-center ${
                  item.text ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-4 h-4" />
              </div>
              <div className="mt-3">
                <p>
                  <b>{item.step}</b>
                  {item.name}
                </p>
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screening;
