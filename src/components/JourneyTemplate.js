import React from "react";
import Button from "./Button";

const JourneyTemplate = ({ bg, img, number, title, body }) => {
  return (
    <div className={`w-full lg:w-[90%] mx-auto -mt-10 clip-path-journey bg-[${bg}]`}>
      <div className="flex gap-3 flex-wrap justify-center lg:flex-nowrap lg:justify-between">
        <div className="w-full md:w-1/2 flex gap-2 px-1 lg:px-10 pt-28">
          <div>
            <img src={number} alt={title} className="h-[83px]" />
          </div>
          <div className="flex flex-col gap-5 w-ful lg:w-80">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p>{body}</p>
            <Button className="w-10" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={img} alt={title} className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default JourneyTemplate;
