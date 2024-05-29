import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-[#202229] w-full py-40 lg:py-80 lg:px-16 xl:px-24 lg:clip-path flex justify-between text-white flex-col lg:flex-row relative lg:-mt-40">
      <div className="w-full px-12 lg:w-1/3">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          How it worked for Jason{" "}
          <span>
            {" "}
            <img
              src="/images/Frame 136.png"
              alt="jason"
              className="w-[56px] h-[56px] inline-block"
            />{" "}
          </span>{" "}
          at{" "}
          <span>
            {" "}
            <img
              src="/images/groovehq.png"
              alt="groove"
              className="w-[192px] h-[51px] inline-block"
            />{" "}
          </span>{" "}
        </h2>
        <p className="mt-5 text-xl">
          Zwilt enabled us to deliver on time and they’ve been heavy hitters in
          our corner since.
        </p>
        <div className="flex gap-5 mt-5">
          <div className="w-12 h-12 rounded-[20px] bg-white flex justify-center items-center">
            {" "}
            <img
              src="/images/vector-blue.png"
              alt="vector-blue"
              className="w-4 h-[10px]"
            />{" "}
          </div>
          <div className="w-12 h-12 rounded-[20px] bg-white flex justify-center items-center rotate-180">
            {" "}
            <img
              src="/images/vector-blue.png"
              alt="vector-blue"
              className="w-4 h-[10px]"
            />{" "}
          </div>
        </div>
      </div>
      <div className="w-full px-12 lg:w-1/2 lg:pr-30 xl:pr-52 mt-20">
        <div className="flex gap-3">
          <div className="w-24 h-24 rounded-[40px] bg-[#AF7CFF] flex justify-center items-center">
            <img
              src="/images/groovehq-white.png"
              alt="groovehq"
              className="w-[76px] h-[21px]"
            />
          </div>
          <div className="mt-2">
            <h5 className="text-3xl font-semibold">Jason Makki</h5>
            <p className="text-gray-500">Engineer at GROOVE</p>
            <p className="text-gray-500">San FRANCISCO</p>
          </div>
        </div>
        <p className="mt-5 text-xl">
          Zwilt enabled us to deliver on time and they’ve been heavy hitters in
          our corner since. Zwilt enabled us to deliver on time and they’ve been
          heavy hitters in our corner since.Zwilt enabled us to deliver on time
          and they’ve been heavy hitters.
        </p>
      </div>
      <div className="absolute top-1 right-5">
        <img
          src="/images/qoute.png"
          alt="qoute"
          className="w-[221px] h-[175px]"
        />
      </div>
    </section>
  );
};

export default Testimonial;
