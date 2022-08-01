import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";
import LogoJ from "../public/assets/LogoJ.png";
import SocialIcons from "../pageElements/SocialIcons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

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
      <div className="w-full h-20 z-[100] shadow-xl ease-in-out duration-300">
        {/*Navbar Container */}
        <div className="flex justify-between items-center w-full h-full">
          {/*Logo*/}
          <div className="hidden md:flex flex-none pl-6">
            <Link href="/">
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

          {/*Nav Menu Items*/}
          <div>
            <ul className="hidden md:flex m-0 flex-row static justify-between py-6 px-8">
              <li className="">
                <Link href="/">About</Link>
              </li>
              <li className="ml-10 ">
                <Link href="/">Projects</Link>
              </li>
              <li className="ml-10">
                <Link href="/">Resume</Link>
              </li>
              <li className="ml-10">
                <Link href="/">Timeline</Link>
              </li>
            </ul>
          </div>

          {/*Social Items*/}
          <div className="pr-6">
            <div className="hidden md:flex ">
              <div className="flex flex-row justify-between mx-auto max-w-xs">
                <RiGithubFill size={20} />

                <RiLinkedinBoxFill size={20} />

                <AiOutlineMail size={20} />
              </div>
            </div>
          </div>
        </div>

        {/*Sidebar Menu*/}
        <div
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-full h-screen bg-white p-10"
              : "fixed left-[-100%] top-0 w-full h-screen bg-white"
          }
        >
          {/* Sidebar Menu Items */}
          <div className="flex flex-col md:hidden justify-center items-center py-8">
            <Image
              src="/../public/assets/LogoJ.png"
              width="80"
              height="45"
              alt="/"
              className=""
            />
            <Sidebar />
          </div>
          {/* <SocialIcons /> */}
          <div className="flex flex-row justify-between mx-auto max-w-xs">
            <RiGithubFill size={30} />

            <RiLinkedinBoxFill size={30} />

            <AiOutlineMail size={30} />
          </div>
        </div>
      </div>

      {/*Burger Toggle*/}
      <div className="md:hidden fixed top-4 left-4 ">
        <Hamburger toggled={nav} toggle={toggleOpen} />
      </div>
    </>
  );
};

export default Navbar;
