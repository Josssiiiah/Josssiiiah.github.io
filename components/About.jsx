import React from "react";

const About = () => {
  return (
    // About Section
    <div className="w-full h-full text-center mb-32 lg:mb-64 px-12">
      {/* Background  */}
      <div className="max-w-[1100px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* Header  */}
          <div className="py-2 text-left font-bold">
            <h1>
              About Me<span>.</span>
            </h1>
          </div>
          {/* Divider  */}
          <div className="flex items-start py-4">
            <hr className="border-2 w-24 border-black" />
          </div>
          {/* Content  */}
          <div className="mt-8 leading-8">
            <p className="py-4 max-w-4xl text-left">
              Hello! My name is Josiah Griggs and I believe in using computers
              as a lens to view the world differently, and ultimately change it
              for the better.
            </p>
            <p className="py-4 max-w-4xl text-left">
              My interest in programming dawned when I set out to determine
              exactly how expensive long showers were in response to my dad's
              strict water monitoring. I made a python program to convert shower
              time into price-per-gallon of water. Then, I hacked together an
              IOS app using Xcode to leverage my results and advocate for a few
              extra minutes!
            </p>
            <p className="py-4 max-w-4xl text-left">
              Since then, I've taken many more steps along my journey in
              computer science studying both data structures and algorithms in
              CS 106B and computer organization and systems in CS 107 at
              Stanford. I have also pursued interests outside of class and
              practiced my skills through personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
