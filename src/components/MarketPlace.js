import React from "react";
import Button from "./Button";

const skills = [
  {
    icon: `/images/vector-icon-1.png`,
    text: "989 Skills",
    class: "w-[16px] h-[21px]",
  },
  {
    icon: `/images/vector-icon-2.png`,
    text: "45 Sub-Categories",
    class: "w-[18px] h-[18px]",
  },
  {
    icon: `/images/vector-icon-3.png`,
    text: "1011 Profiles",
    class: "w-[16px] h-[18px]",
  },
];

const techLogo = [
  {
    name: "Shopify\nDeveloper",
    logo: `/images/tech-1.png`,
    size: "w-[39px] h-[40px]",
  },
  {
    name: "Magento\nDeveloper",
    logo: `/images/tech-2.png`,
    size: "w-[32px] h-[40px]",
  },
  {
    name: "Data\nScientist",
    logo: `/images/tech-3.png`,
    size: "w-[42px] h-[39px]",
  },
  {
    name: "Webflow\nDeveloper",
    logo: `/images/tech-4.png`,
    size: "w-[43px] h-[30px]",
  },
  {
    name: "DotNet\nDeveloper",
    logo: `/images/tech-5.png`,
    size: "w-[69px] h-[40px]",
  },
  {
    name: "",
    logo: `/images/tech-6.png`,
    size: "w-[25px] h-[15px]",
  },
];

const creativeLogo = [
  {
    name: "",
    logo: `/images/tech-6.png`,
    size: "w-[25px] h-[15px]",
  },
  {
    name: "UX\nDesigner",
    logo: `/images/creative-1.png`,
    size: "w-[26px] h-[39px]",
  },
  {
    name: "Graphics\nDesigner",
    logo: `/images/creative-2.png`,
    size: "w-[48px] h-[48px]",
  },
  {
    name: "Illustartion\nArtist",
    logo: `/images/creative-3.png`,
    size: "w-[47px] h-[44px]",
  },
  {
    name: "Unreal\nEngine",
    logo: `/images/creative-4.png`,
    size: "w-[55px] h-[55px]",
  },
  {
    name: "Cinema\n4D",
    logo: `/images/creative-5.png`,
    size: "w-[53px] h-[53px]",
  },
];

const MarketPlace = () => {
  return (
    <section className="bg-[#EDEFFF] w-full py-20  lg:py-40 px-10 lg:clip-path-custom lg:-mt-7">
      <div>
        <h2 className=" text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center xl:leading-[64px]">
          Your one-stop marketplace for finding
          <br className="hidden lg:block" /> the talent your business needs.
        </h2>
        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-1/2">
            <h3 className="font-semibold text-2xl">
              Find Dev and IT professionals to
              <br />
              scale your business.
            </h3>
            <div className="flex gap-4  flex-wrap">
              {skills.map((item, index) => (
                <div key={index} className="flex gap-3 w-[200px] mt-5">
                  <img src={item.icon} alt={item.text} className={item.class} />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white w-full xl:w-2/3 p-6 rounded-xl">
            <h5 className="font-semibold">IT & Development</h5>
            <div className="flex gap-3 md:gap-0 flex-wrap justify-center ">
              {techLogo.map((item, index) => (
                <div
                  key={index}
                  className="w-auto md:w-1/6 mt-6 flex flex-col items-center whitespace-pre-line"
                >
                  <div className="bg-[#f6f6f6] w-24 h-24 rounded-full flex justify-center items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={item.size}
                    />
                  </div>
                  <p className="text-center font-semibold text-sm mt-3">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-1/2">
            <h3 className="font-semibold text-2xl">
              Explore Creative individuals with a<br /> keen eye for detail.
            </h3>
            <div className="flex gap-4  flex-wrap">
              {skills.map((item, index) => (
                <div key={index} className="flex gap-3 w-[200px] mt-5">
                  <img src={item.icon} alt={item.text} className={item.class} />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white w-full xl:w-2/3 p-6 rounded-xl">
            <h5 className="font-semibold">Design & Creative</h5>
            <div className="flex gap-3 md:gap-0 flex-wrap justify-center ">
              {creativeLogo.map((item, index) => (
                <div
                  key={index}
                  className="w-auto md:w-1/6 mt-6 flex flex-col items-center whitespace-pre-line"
                >
                  <div className="bg-[#f6f6f6] w-24 h-24 rounded-full flex justify-center items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={item.size}
                    />
                  </div>
                  <p className="text-center font-semibold text-sm mt-3">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col-reverse flex-wrap md:flex-row md:flex-nowrap md:gap-10 mt-5">
          <div className="w-full md:w-1/2">
            <Button />
          </div>
          <div className="w-2/3 pt-5 text-[#202229] text-xl">
            <h3>
              <b>30 more</b> to explore
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
