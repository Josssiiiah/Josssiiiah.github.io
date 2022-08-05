import avatar from "../public/assets/avatar.png";
import React from "react";
import Hero from "../pageElements/Hero";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    // Home Section
    <div id="/#Home" className="w-full h-screen text-center">
      <Navbar />
      {/* Background  */}
      <div className=" mt-32 md:mt-1 pb-64 px-24 lg:px-10 max-w-[1100px] w-full h-full mx-auto md:flex justify-center items-center">
        {/* Title  */}
        <div className="text-center md:text-left">
          <div className="py-2">
            <h1>Hi, my </h1>
          </div>
          <div className="py-2">
            <h1>
              name is <span className="font-bold"> Josiah. </span>{" "}
            </h1>
          </div>

          <div className="hidden md:block py-6 max-w-xl">
            <p>
              I'm a sophomore studying computer science at
              <span className="font-bold"> Stanford University</span>. I'm
              currently exploring new coding projects and reinforcing my
              knowledge of
              <span className="font-bold"> data structures and algorithms</span>
              .
            </p>
          </div>
          <div className="md:hidden py-6 max-w-xl">
            <p>
              I'm a sophomore studying computer science at
              <span className="font-bold"> Stanford University</span>.
            </p>
          </div>
        </div>
        {/* Avatar  */}
        <div className="block md:flex items-center md:ml-6">
          <Image
            src={avatar}
            alt="/"
            width="250"
            height="250"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
