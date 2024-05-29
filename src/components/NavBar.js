"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa6";

const navItems = [
  {
    name: "Find Work",
    path: "#find-work",
  },
  {
    name: "Find Talent",
    path: "#find-talent",
  },
  {
    name: "Articles",
    path: "#articles",
  },
  {
    name: "About Us",
    path: "#about-us",
  },
  {
    name: "Contact Us",
    path: "#contact-us",
  },
];

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const menuVarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const menuListVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-[95%] h-[10vh] py-4 bg-[#525AA0] text-white rounded-2xl shadow-xl mx-auto mt-4"
    >
      <div className="flex justify-between items-center px-5">
        <div className="flex gap-8">
          {/* LOGO */}
          <a href={"/"} alt="logo" className="flex gap-1 ">
            <h1 className=" text-2xl font-black	">zwilt</h1>
            <img
              src="/images/vector.png"
              alt="logo"
              className="w-[34px] h-[21px] mt-2"
            />
          </a>
        </div>
        {/* LINKS */}
        <div className="hidden lg:block lg:mx-auto">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* ACCOUNTS */}
        <div className="hidden lg:flex gap-4 items-center ">
          <button>Log In</button>
          <button className="flex gap-4 px-4 py-2 bg-white text-black rounded-[14px]">
            Join Now
          </button>
        </div>
        {/* HAMBUGGER MENU */}
        <div className="lg:hidden" onClick={() => setMenu(!menu)}>
          <button>
            <FaBars />
          </button>
        </div>
      </div>
      {menu && (
        <motion.div
          variants={menuVarient}
          initial="closed"
          animate="opened"
          className="w-full h-[70vh] mt-4  text-black lg:hidden relative rounded-2xl backdrop-blur-xl"
        >
          <ul className="flex flex-col h-full gap-6 items-center justify-center">
            {navItems.map((item, index) => (
              <motion.li variants={menuListVariant} key={index}>
                <a href={item.path}>{item.name}</a>
              </motion.li>
            ))}
            <motion.li variants={menuListVariant}>
              <button className="flex gap-4 px-4 py-2 bg-[#E8E2EE] text-black rounded-full">
                <span className="mt-1">Register for free</span>
                <span className="bg-white p-3 rounded-full">
                  <FaArrowRight />
                </span>
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
