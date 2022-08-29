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
            {/* Mobile Text  */}
            <h4 className="py-4 max-w-5xl text-left leading-loose md:hidden">
              <span className="font-bold"> I'm Josiah Griggs,</span> a CS
              student in the Bay Area. I am passionate about using Computer
              Science as a
              <span className="font-bold"> tool </span> to change the world for the
              better.
            </h4>
            <h4 className="py-4 max-w-5xl text-left leading-loose md:hidden">
            I'm currently learning
              about the <span className="font-bold"> React </span> library and
              other, related frameworks.
            </h4>
            <h4 className="py-4 max-w-5xl text-left leading-loose md:hidden">
              <span className="font-bold">In my free time, </span> you can find
              me working on new coding projects, playing FIFA, or waiting for
              the stock market to open.
            </h4>

            {/* Web Text  */}
            <h4 className="py-4 max-w-5xl text-left leading-loose hidden md:block">
              <span className="font-bold"> I'm Josiah Griggs,</span> a CS
              student in the Bay Area. I'm currently focused on learning more
              about the React library and other related frameworks.
            </h4>
            <h4 className="py-4 max-w-5xl text-left hidden md:block leading-loose">
              <span className="font-bold"> My passion </span> dawned during an
              attempt to determine exactly how expensive long showers were in
              response to my dad's strict water monitoring. I made a python
              program to convert shower time into price-per-gallon of water, and
              hacked together an Xcode app to deliver my results in real time
              and advocate for a few extra minutes!
            </h4>
            <h4 className="py-4 max-w-5xl text-left hidden md:block leading-loose">
              <span className="font-bold">Since then, </span> I've studied data
              structures and algorithms in CS 106B and computer organization and
              systems in CS 107 at Stanford. I've also pursued interests outside
              of class, practicing my skills through personal projects.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
