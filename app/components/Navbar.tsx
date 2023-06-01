"use client";
import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import ScrollLink from "./ScrollLink";

interface Link {
  id: number;
  link: string;
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

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-white fixed bg-black px-4`}
    >
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

      {/* Mobile Links List */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        }  flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800`}
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
      </ul>
    </div>
  );
}

export default Navbar;
