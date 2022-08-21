import React from "react";

const About = () => {
  return (
    // About Section
    <div id="about" className="w-full h-full text-center lg:mb-64 px-12 py-16">
      {/* Background  */}
      <div className="max-w-[1500px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* Header  */}
          <div className="py-2 text-left font-bold">
            <h2>
              About Me<span>.</span>
            </h2>
          </div>
          {/* Divider  */}
          <div className="flex items-start py-4">
            <hr className="border-2 w-24 border-black" />
          </div>
          {/* Content  */}
          <div className="mt-8">
            <h4 className="py-4 max-w-5xl text-left leading-loose">
              <span className="font-bold"> I'm Josiah Griggs,</span> a CS
              student in the Bay Area. I believe in wielding the power of
              computers as a means to change the world for the better.
            </h4>
            <h4 className="py-4 max-w-5xl text-left leading-loose md:hidden">
              <span className="font-bold"> Currently,</span> I'm exploring new
              coding projects and reinforcing my knowledge of data structures
              and algorithms.
            </h4>
            <h4 className="py-4 max-w-5xl text-left hidden md:block leading-loose">
              <span className="font-bold"> My passion </span> dawned during an
              attempt to determine exactly how expensive long showers were in
              response to my dad's strict water monitoring. I made a python
              program to convert shower time into price-per-gallon of water, and
              hacked together an Xcode app to leverage my results and advocate
              for a few extra minutes!
            </h4>
            <h4 className="py-4 max-w-5xl text-left hidden md:block leading-loose">
              <span className="font-bold">Since then, </span> I've taken many
              more steps along my journey in computer science studying both data
              structures and algorithms in CS 106B and computer organization and
              systems in CS 107 at Stanford. I have also pursued interests
              outside of class and practiced my skills through personal
              projects.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
