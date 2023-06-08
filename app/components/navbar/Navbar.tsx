"use client";
import React, { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaFile,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import ScrollLink from "../ScrollLink";
import { AnimatePresence, motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface Link {
  id: number;
  link: string;
}

interface MobileLink {
  id: number;
  child: JSX.Element;
  href: string;
}

function Navbar() {
  // For toggling hamburger menu in mobile
  const [nav, setNav] = useState(false);

  // Navbar Links
  const links: Link[] = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const mobileLinks: MobileLink[] = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={15} />
          <span className={`ml-1 text-gray-400 text-sm font-light`}>
            LinkedIn
          </span>
        </>
      ),
      href: "https://linkedin.com/in/ptrk-pngln",
    },
    {
      id: 2,
      child: (
        <>
          <FaEnvelope size={15} />
          <span className={`ml-1 text-gray-400 text-sm font-light`}>Mail</span>
        </>
      ),
      href: "mailto:patrick_pangilinan@dlsl.edu.ph",
    },
    {
      id: 3,
      child: (
        <>
          <FaFile size={15} />
          <span className={`ml-1 text-gray-400 text-sm font-light`}>
            Resume
          </span>
        </>
      ),
      href: "/resume.pdf",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-white fixed bg-black px-4`}
    >
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {/* Mobile Links List */}
        {nav && (
          <motion.ul
            className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800`}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map(({ id, link }) => {
              return (
                <ScrollLink key={id} className="btn" href={`#${link}`}>
                  <li
                    onClick={() => setNav(!nav)}
                    className={`px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 list-none py-6 text-4xl`}
                  >
                    {link}
                  </li>
                </ScrollLink>
              );
            })}
            {/* Social Links */}
            <div className={`flex gap-5 mt-5`}>
              {mobileLinks.map(({ id, child, href }) => {
                return (
                  <li key={id}>
                    <a
                      href={href}
                      className={`flex justify-between items-center w-full text-gray-100 hover:scale-110 duration-200`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {child}
                    </a>
                  </li>
                );
              })}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      <div>
        <a
          href="https://github.com/pangilinan-patrick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={`text-3xl cursor-pointer font-medium  hover:scale-105 duration-200 list-none`}
          />
        </a>
      </div>

      <ul className={`hidden md:flex`}>
        {/* Looping over links array and using object destructuring to shorthand retrieving the properties */}
        {links.map(({ id, link }) => {
          return (
            <ScrollLink key={id} className="btn" href={`#${link}`}>
              <li
                className={`px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 list-none capitalize select-none`}
              >
                {link}
              </li>
            </ScrollLink>
          );
        })}
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer z-10 text-gray-500 md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}

export default Navbar;
