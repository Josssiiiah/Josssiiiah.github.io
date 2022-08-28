import avatar from "../public/assets/Avatar-Maker.svg";
import React from "react";
import Hero from "../pageElements/Hero";
import Image from "next/image";
import Navbar from "../components/Navbar";
import 'animate.css';

const Home = () => {
  return (
    // Home Section
    <div id="/home" className="w-full h-screen text-center">
      <Navbar />
      {/* Background  */}
      <div className=" mt-24 lg:mt-6 pb-64 px-8 lg:px-10 max-w-[1500px] w-full h-full mx-auto lg:flex justify-center items-center">
        {/* Title  */}
        <div className="text-center lg:text-left">
        
            <div className="py-2">
              <h1 class = "animate__animated animate__fadeInTopRight">Hi, my </h1>
            </div>
            <div className="py-2">
            <h1 class = "animate__animated animate__fadeInTopRight">
                name is <span className="font-bold"> Josiah. </span>
              </h1>
            </div>
        

          <div className="hidden md:block text-center lg:text-left my-8 lg:max-w-2xl text-black">
            <h4 class = "animate__animated animate__fadeInBottomLeft " className="leading-loose">
              I'm a sophomore studying computer science at
              <span className="font-bold"> Stanford University</span>. I believe
              in wielding the power of computers to{" "}
              <span className="font-bold"> view the world  </span>{" "}
             differently, and <span className="font-bold">change it </span> for the better.
            </h4>
          </div>
          <div className="md:hidden py-6 max-w-xl">
            <h4 class = "animate__animated animate__fadeInBottomLeft">
              I'm a sophomore studying computer science at
              <span className="font-bold"> Stanford University</span>.
            </h4>
          </div>
        </div>
        {/* Avatar  */}
        <div class = "animate__animated animate__fadeIn animate__delay-1s" className="block md:flex justify-center mt-6 lg:ml-12">
          <div>
            <Image
              src={avatar}
              alt="/"
              width="450"
              height="400"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
