import React from "react";
import Button from "./Button";

const ChooseTemplate = () => {
  return (
    <div className="flex gap-10 overflow-x-auto hide-scrollbar bg-gradient-to-b from-[#ffffff] to-blue-50">
      <div className="flex-shrink-0 w-[500px] px-20 flex flex-col gap-10 justify-center">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Why choose Zwilt?
        </h2>
        <p className="text-xl mt-1">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <div className="flex flex-wrap flex-shrink-0 justify-around border w-[90%] h-auto lg:h-[625px] rounded-2xl pt-5">
        <div className="flex flex-col gap-10 justify-center pl-5 lg:pl-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Onboard without
            <br /> the risk.
          </h2>
          <div>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              We pick the best for you to select.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Thousands of vetted candidates in dozens of categories.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Risk-free resource swapping for the best fit.
            </p>
          </div>
          <Button />
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/choose-1.png"
            alt="choose-1"
            className="w-[658px] h-[569px]"
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-around border px-5 lg:px-0 w-[90%] h-auto lg:h-[625px] rounded-2xl pt-5">
        <div className="flex flex-col gap-10 justify-center">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Onboard without
            <br /> the risk.
          </h2>
          <div>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              We pick the best for you to select.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Thousands of vetted candidates in dozens of categories.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Risk-free resource swapping for the best fit.
            </p>
          </div>
          <Button />
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/images/choose-2-1.png"
            alt="choose-1"
            className="w-[395px] h-[491px] mt-16"
          />
          <img
            src="/images/choose-2-2.png"
            alt="choose2-2"
            className="w-[98px] h-[98px] absolute top-0 -left-10"
          />
          <img
            src="/images/choose-2-3.png"
            alt="choose2-3"
            className="w-[150px] h-[130px] absolute top-40 -right-20"
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-around border px-5 lg:px-0 w-[90%] h-[625px] rounded-2xl pt-5 mr-10">
        <div className="flex flex-col gap-10 justify-center">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Onboard without
            <br /> the risk.
          </h2>
          <div>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              We pick the best for you to select.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Thousands of vetted candidates in dozens of categories.
            </p>
            <p className="text-xl mt-1">
              <span className="inline-block mr-3">
                <img
                  src="/images/bullet-icon.png"
                  alt="bullet"
                  className="w-[18px] h-[7px] -mt-2"
                />
              </span>
              Risk-free resource swapping for the best fit.
            </p>
          </div>
          <Button />
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/images/choose-3-1.png"
            alt="choose-3-1"
            className="w-[265px] h-[95px] absolute top-8 -left-20"
          />
          <img
            src="/images/choose-3.png"
            alt="choose-3"
            className="w-[295px] h-[379px] mt-20"
          />
          <img
            src="/images/choose-2-3.png"
            alt="choose2-3"
            className="w-[150px] h-[130px] absolute top-40 -right-28"
          />
          <img
            src="/images/choose-3-3.png"
            alt="choose-3-3"
            className="w-[335px] h-[115px] absolute bottom-12 -right-16"
          />
          <img
            src="/images/choose-3-4.png"
            alt="choose-3-3"
            className="w-[112px] h-[108px] absolute bottom-20 -left-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
