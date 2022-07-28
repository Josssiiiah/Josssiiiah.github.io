import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleOpen = () => {
    setNav(!nav);
  };

  return (
    /*Navbar Background */
    <div className="w-full h-20 z-[100] shadow-xl">
      {/*Navbar Container */}
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        {/*Menu Items*/}
        <ul className="hidden md:flex items-center">
          <li className="ml-10">
            <Link href="/">About</Link>
          </li>
          <li className="ml-10">
            <Link href="/">Projects</Link>
          </li>
          <li className="ml-10">
            <Link href="/">Resume</Link>
          </li>
          <li className="ml-10">
            <Link href="/">Timeline</Link>
          </li>
        </ul>

        {/*Sidebar Menu*/}
        <div className="md:hidden">
          <Hamburger toggled={nav} toggle={toggleOpen} />
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
              : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
          }
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
