import React from "react";

const plartform = ["Find Work", "Find Talent", "Categories", "About Us"];
const categories = ["Data science", "IT & Networking", "Web & Mobile"];
const help = ["FAQs", "Contact Us"];
const getInTouch = ["Instagram", "LinkedIn", "Twitter"];

const Footer = () => {
  return (
    <footer className="w-full -mt-44 bg-gradient-to-b from-[#0C0C0C] to-[#202229] clip-path-footer p-10">
      <div>
        <div className="bg-[#525AA0] clip-path-journey h-[481px] x-[90%] flex justify-center items-center mt-10">
          <div className="md:w-[700px] flex flex-col justify-center items-center gap-10">
            <h2 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
              Need a job done, and done well? Get started
            </h2>
            <button className="w-[74px] h-[74px] rounded-[30px] bg-[#202229] flex justify-center items-center rotate-90">
              <img
                src="/images/vector-white.png"
                alt="vector-white"
                className="w-[25px] h-[15px]"
              />
            </button>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap lg:flex-row">
          <div className="w-full lg:w-1/3 ">
            <a href={"/"} alt="logo" className="flex gap-1 text-white ">
              <h1 className=" text-2xl font-black	">zwilt</h1>
              <img
                src="/images/vector.png"
                alt="logo"
                className="w-[34px] h-[21px] mt-2"
              />
            </a>
            <p className="mt-5 text-white lg:w-80 w-full">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div className="w-full lg:w-2/3 lg:px-24 mt-10 lg:mt-0">
            <h2 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Connecting the right people to the right businesses.
            </h2>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap">
          <div className=" md:w-1/3">
            <p className="text-sm opacity-40 text-white uppercase font-semibold">
              links and redirects
            </p>
            <div>
              <button className="bg-[#292B34] px-10 py-2 rounded-2xl text-[#EDEFFF] text-sm mt-5">
                Hire now
              </button>
              <button className="bg-[#292B34] px-10 py-2 rounded-2xl text-[#EDEFFF] text-sm mt-5 md:ml-2">
                Apply now
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0  md:w-2/3 flex flex-wrap gap-20 md:px-12 lg:px-24 text-white">
            <div>
              <h6 className="text-sm opacity-40 text-white uppercase font-semibold">
                plartform
              </h6>
              {plartform.map((item, index) => (
                <ul key={index}>
                  <li className="mt-3">{item}</li>
                </ul>
              ))}
            </div>
            <div>
              <h6 className="text-sm opacity-40 text-white uppercase font-semibold">
                categories
              </h6>
              {categories.map((item, index) => (
                <ul key={index}>
                  <li className="mt-3">{item}</li>
                </ul>
              ))}
            </div>
            <div>
              <h6 className="text-sm opacity-40 text-white uppercase font-semibold">
                help
              </h6>
              {help.map((item, index) => (
                <ul key={index}>
                  <li className="mt-3">{item}</li>
                </ul>
              ))}
            </div>
            <div>
              <h6 className="text-sm opacity-40 text-white uppercase font-semibold">
                Get In Touch
              </h6>
              {getInTouch.map((item, index) => (
                <ul key={index}>
                  <li className="mt-3">{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
