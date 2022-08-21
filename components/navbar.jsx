import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";

import LogoJ from "../public/assets/LogoJ.png";
import SocialIcons from "../pageElements/SocialIcons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineMail, AiOutlineLine } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleOpen = () => {
    setNav(!nav);
  };

  //   Logo
  //   ul Text-links-list
  //   ul icons links list
  //   burger

  return (
    <>
      {/*Navbar Background */}
      <div className="w-full h- ease-in-out duration-300">
        {/* Web Top Menu*/}
        <div className="hidden md:flex mt-10 items-center w-full justify-between">
          {/*Navbar Logo*/}
          <div className="flex items-center flex-none pl-16">
            <Link href="/Home">
              <a>
                <Image
                  src={LogoJ}
                  alt="/"
                  width="45"
                  height="45"
                  className="cursor-pointer"
                />
              </a>
            </Link>
            {/* Divider  */}
            <hr className="border-1 w-12 border-black rotate-90" />
            <div className=" ">
              <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
            </div>
          </div>

          {/*Resume Link*/}
          <div className=" md:pr-4 lg:pr-16">
            <div className="flex flex-row justify-between items-center mx-auto max-w-[200px] pr-8 cursor-pointer">
              <IoNewspaperOutline size={25} className="mr-3 text-black" />

              <Link href="/" className="w-full p-3">
                <h3>Resume</h3>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Top Menu  */}
        <div className="w-full">
          <div className="md:hidden mt-10 w-full flex flex-row items-center justify-between static">
            {/* Mobile Burger Toggle*/}
            <div className="top-10 pl-12">
              <Hamburger toggled={nav} toggle={toggleOpen} size={60} />
            </div>
            {/* Logo Image  */}
            <div className="top-10 pr-12 ">
              <Image
                src="/../public/assets/LogoJ.png"
                width="60"
                height="60"
                alt="/"
              />
            </div>
          </div>
        </div>

        {/*Sidebar Menu*/}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-screen bg-white p-4 md:p-6 z-50"
              : "fixed left-[-100%] top-0 w-full h-max bg-white"
          }
        >
          {/* Sidebar Background Color  */}
          <div className="w-full h-screen bg-gradient-to-r from-[#ebf4f5] to-[#b5c6e0]">
            {/* Sidebar Top Menu Items */}
            <div className="pt-8 flex items-center w-full justify-between">
              {/*Top Left Side*/}
              <div className="flex items-center flex-none pl-8 sm:pl-12">
                <div className="hidden md:flex">
                  <Link href="/Home">
                    <a>
                      <Image
                        src={LogoJ}
                        alt="/"
                        width="45"
                        height="45"
                        className="cursor-pointer"
                      />
                    </a>
                  </Link>
                </div>

                {/* Divider  */}
                <hr className="hidden md:flex border-1 w-12 border-black rotate-90 " />
                <div className="md:hidden">
                  <Hamburger toggled={nav} toggle={toggleOpen} size={60} />
                </div>
                <div className="hidden md:flex ">
                  <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
                </div>
              </div>

              {/*Resume Link*/}
              <div className=" pr-0 lg:pr-12">
                <div className="flex flex-row justify-between items-center mx-auto max-w-[200px] pr-8 cursor-pointer">
                  <IoNewspaperOutline
                    size={25}
                    className="mr-3 text-black"
                  />

                  <Link
                    href="/"
                    className="w-full p-3 text-gray-100 hover:text-white"
                  >
                    <h3>Resume</h3>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Bottom Menu Items */}
            <div className="flex flex-col justify-center py-4">
              <div className="flex flex-row justify-center items-center sm:justify-start px-12 w-full sm:max-w-[600px] mt-12">
                {/* Divider  */}
                <div className="text-left">
                  <hr className="border-2 w-16 border-white" />
                </div>

                {/* <SocialIcons /> */}
                <ul className="flex flex-row ">
                  <li className="ml-6 hover:text-white">
                    <RiGithubFill size={30} />
                  </li>

                  <li className="ml-6 hover:text-white">
                    <RiLinkedinBoxFill size={30} />
                  </li>

                  <li className="mx-6 hover:text-white">
                    <AiOutlineMail size={30} />
                  </li>
                </ul>

                {/* Divider  */}
                <div className="">
                  <hr className="border-2 w-16 border-white" />
                </div>
              </div>

              {/* Sidebar items */}
              <ul className="w-full h-max bg-none px-12 mt-20 sm:mt-16 ">
                <div className="flex flex-col text-center sm:text-left justify-center text-lg font-bold">
                  <li
                    onClick={() => setNav(false)}
                    className="hover:text-white py-10 text-5xl"
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={() => setNav(false)}
                    className="hover:text-white py-10 text-5xl"
                  >
                    <Link href="/#projects">Projects</Link>
                  </li>
                  <li
                    onClick={() => setNav(false)}
                    className="hover:text-white py-10 text-5xl"
                  >
                    <Link href="/#about">About</Link>
                  </li>
                  <li
                    onClick={() => setNav(false)}
                    className="hover:text-white py-10 text-5xl"
                  >
                    <Link href="/#contact">Contact</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
