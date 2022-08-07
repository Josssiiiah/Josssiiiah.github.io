import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";
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
                  width="100"
                  height="50"
                  className="cursor-pointer"
                />
              </a>
            </Link>
            {/* Divider  */}
            <hr className="border-1 w-8 border-black rotate-90" />
            <div className=" ">
              <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
            </div>
          </div>

          {/*Resume Link*/}
          <div className="  md:pr-4 lg:pr-16">
            <div className="flex flex-row justify-between mx-auto max-w-[200px] pr-8 cursor-pointer">
              <IoNewspaperOutline size={20} className="mr-3 text-blue-500" />

              <Link
                href="/"
                className="w-full p-3 text-gray-100 hover:text-white"
              >
                <h3>Resume</h3>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Items  */}
        <div className="w-full">
          <div className="md:hidden mt-10 w-full flex flex-row items-center justify-between static">
            {/* Mobile Burger Toggle*/}
            <div className="top-10 pl-12">
              <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
            </div>
            {/* Logo Image  */}
            <div className="top-10 pr-12 ">
              <Image
                src="/../public/assets/LogoJ.png"
                width="80"
                height="45"
                alt="/"
              />
            </div>
          </div>
        </div>

        {/*Sidebar Menu*/}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-screen bg-white p-4 z-50"
              : "fixed left-[-100%] top-0 w-full h-max bg-white"
          }
        >
          <div className="w-full h-screen bg-blue-300">
            {/* Sidebar Top Menu */}
            <div className="pt-6 flex items-center w-full justify-between">
              {/*Top Left Side*/}
              <div className="flex items-center flex-none pl-12">
                <Link href="/Home">
                  <a>
                    <Image
                      src={LogoJ}
                      alt="/"
                      width="100"
                      height="50"
                      className="cursor-pointer"
                    />
                  </a>
                </Link>
                {/* Divider  */}
                <hr className="border-1 w-8 border-black rotate-90" />
                <div className=" ">
                  <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
                </div>
              </div>

              {/*Resume Link*/}
              <div className=" pr-0 lg:pr-12">
                <div className="flex flex-row justify-between mx-auto max-w-[200px] pr-8 cursor-pointer">
                  <IoNewspaperOutline
                    size={20}
                    className="mr-3 text-blue-500"
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

            {/* Sidebar Menu Items */}
            <div className="flex flex-col justify-center items-center py-4">
              <div className="flex w-full mt-12">
                {/* Divider  */}
                <div className="flex text-left pl-12 items-center justify-center">
                  <hr className="border-2 w-24 border-white" />
                </div>

                {/* <SocialIcons /> */}
                <ul className="flex flex-row ml-5">
                  <li className="ml-6 hover:text-white">
                    <RiGithubFill size={30} />
                  </li>

                  <li className="ml-6 hover:text-white">
                    <RiLinkedinBoxFill size={30} />
                  </li>

                  <li className="ml-6 hover:text-white">
                    <AiOutlineMail size={30} />
                  </li>
                </ul>
              </div>

              {/* Sidebar  */}
              <Sidebar />
            </div>
          </div>

          {/* Web Burger Toggle*/}
          {/* <div className={nav ? " fixed top-10 left-12  " : " hidden"}>
            <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
