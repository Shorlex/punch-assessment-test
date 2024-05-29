import { useState } from "react";

const tech = [
  "Python Developer",
  "Data Scientist",
  "Shopify Developer",
  "Shopify Developer",
  "Front End Developer",
  "Python Developer",
  "MERN Stack Developer",
  "Shopify Developer",
  "Full Stack Developer",
  "Full Stack Developer",
  "Python Developer",
  "Explore More",
];
const creative = [
  "Graphic Design",
  "Video Editing",
  "Photography",
  "3D Animation",
  "UI/UX Design",
  "Virtual Reality (VR) Development",
  "Sound Design",
  "Motion Graphics ",
  "Cinematography",
  "Script Writing",
  "Post Production",
  "Explore More",
];

const Categories = () => {
  const [active, setActive] = useState("tech");

  return (
    <div className="mx-auto mt-12 bg-[#f8f8f8] w-[80%] px-2 md:px-10 lg:px-16 xl:px-20 py-5">
      <div className="bg-[#D2D2D2] w-fit rounded-2xl mx-auto">
        <button
          className={`w-full lg:w-auto px-8 py-3 rounded-2xl cursor-pointer transition-all duration-400 ${
            active === "tech" && "bg-[#C7F4C2] text-black"
          }`}
          onClick={() => setActive("tech")}
        >
          IT & Development
        </button>
        <button
          className={`w-full lg:w-auto px-8 py-3 rounded-2xl cursor-pointer transition-all duration-400 ${
            active === "creative" && "bg-[#C7F4C2] text-black"
          }`}
          onClick={() => setActive("creative")}
        >
          Design and Creative
        </button>
      </div>
      <div className="mt-10">
        <div className={`${active === "tech" ? "block" : "hidden"}`}>
          <div className="flex gap-5 flex-wrap justify-center items-center">
            {tech.map((item, index) => (
              <div key={index} className="w-[250px]">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${active === "creative" ? "block" : "hidden"}`}>
          <div className="flex gap-5 flex-wrap justify-center items-center">
            {creative.map((item, index) => (
              <div key={index} className="w-[250px]">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
