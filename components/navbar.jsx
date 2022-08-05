import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";
import LogoJ from "../public/assets/LogoJ.png";
import SocialIcons from "../pageElements/SocialIcons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineMail, AiOutlineLine } from "react-icons/ai";

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
      <div className="w-full shadow-lg h-28 ease-in-out duration-300">
        {/*Navbar Container */}
        <div className="flex justify-between items-center w-full h-full">
          {/*Navbar Logo*/}
          <div className="hidden md:flex flex-none pl-12">
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
          </div>

          {/*Web Menu Items*/}
          <div>
            <ul className="hidden md:flex m-0 flex-row text-center static justify-between py-6 px-8">
              <li className="">
                <Link href="/#Home">Home</Link>
              </li>
              <li className="ml-10 ">
                <Link href="/">About</Link>
              </li>
              <li className="ml-10">
                <Link href="/">Projects</Link>
              </li>
              <li className="ml-10">
                <Link href="/">Timeline</Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Items  */}
          <div className="w-full">
            <div className="md:hidden w-full flex flex-row justify-between static">
              {/* Mobile Burger Toggle*/}
              <div className="top-10 pl-10">
                <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
              </div>
              {/* Logo Image  */}
              <div className="top-10 ">
                <Image
                  src="/../public/assets/LogoJ.png"
                  width="80"
                  height="45"
                  alt="/"
                />
              </div>
            </div>
          </div>

          {/*Resume Button*/}
          <div className="  md:pr-8 lg: pr-12">
            <div className="hidden md:flex ">
              <div className="flex flex-row justify-between mx-auto max-w-[200px]">
                <button className="w-full p-3 text-gray-100">Resume</button>
              </div>
            </div>
          </div>
        </div>

        {/*Sidebar Menu*/}
        <div
          className={
            nav
              ? "fixed  md:hidden left-0 top-0 w-full h-max bg-white p-4 "
              : "fixed left-[-100%] top-0 w-full h-max bg-white"
          }
        >
          {/* Sidebar background  */}

          <div className="w-full h-screen bg-blue-300">
            {/* Sidebar Menu Items */}
            <div className="flex flex-col md:hidden justify-center items-center py-8">
              <div className="flex w-full mt-32">
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
          <div className={nav ? " fixed top-10 left-12  " : " hidden"}>
            <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
