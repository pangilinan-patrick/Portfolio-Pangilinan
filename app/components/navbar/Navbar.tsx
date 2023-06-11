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
          <span className={`ml-2 text-gray-400 text-sm font-medium`}>
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
          <span className={`ml-2 text-gray-400 text-sm font-medium`}>Mail</span>
        </>
      ),
      href: "mailto:patrick_pangilinan@dlsl.edu.ph",
    },
    {
      id: 3,
      child: (
        <>
          <FaFile size={15} />
          <span className={`ml-2 text-gray-400 text-sm font-medium`}>
            Resume
          </span>
        </>
      ),
      href: "/resume.pdf",
    },
  ];

  return (
    <nav
      className={`flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50`}
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
                <motion.li
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (id / 10) * 2.2 }}
                  viewport={{ once: true, amount: 0.8 }}
                  key={id}
                  onClick={() => setNav(!nav)}
                  className={`px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200 list-none py-6 text-4xl`}
                  role="link"
                >
                  <ScrollLink className="btn" href={`#${link}`}>
                    {link}
                  </ScrollLink>
                </motion.li>
              );
            })}
            {/* Social Links */}
            <ul className={`flex gap-5 mt-5`}>
              {mobileLinks.map(({ id, child, href }) => {
                return (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <a
                      href={href}
                      className={`flex justify-between items-center w-full text-gray-100 hover:scale-110 duration-200`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {child}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.ul>
        )}
      </AnimatePresence>

      <a
        href="https://github.com/pangilinan-patrick"
        aria-label={`Link to my Github`}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
      >
        <FaGithub
          className={`text-3xl cursor-pointer font-medium  hover:scale-105 duration-200 list-none`}
          aria-label={`See what I've been working on in my Github`}
          tabIndex={0}
          role="link"
        />
      </a>

      <ul className={`hidden md:flex`}>
        {/* Looping over links array and using object destructuring to shorthand retrieving the properties */}
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200 list-none capitalize select-none`}
              role="link"
            >
              <ScrollLink href={`#${link}`}>{link}</ScrollLink>
            </li>
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
    </nav>
  );
}

export default Navbar;
