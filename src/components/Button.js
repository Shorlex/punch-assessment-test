import React from "react";

const Button = () => {
  return (
    <div className="flex self-start">
      <button
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center self-start overflow-hidden rounded-[30px] text-inherit font-semibold group"
      >
        <span className="flex items-center justify-center bg-[#202229] rounded-[30px] w-[74px] h-[74px] transition-transform duration-999 ease-out group-hover:translate-x-[260%] z-50 ">
          <img
            src="/images/vector-white.png"
            alt="vector-white"
            className="w-[25px] h-[15px]"
          />
        </span>
        <span className="text-2xl px-8 transition-transform duration-999 ease-out group-hover:-translate-x-16 z-50 group-hover:text-white">
          Explore More{" "}
        </span>
        <span className="absolute top-0 left-0 bottom-0 w-0 h-full transition-all duration-999 ease-out transform -translate-x-full bg-[#202229] group-hover:w-full group-hover:translate-x-0 -z-1 "></span>
      </button>
    </div>
  );
};

export default Button;
