import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import weatherImg from "../public/assets/projects/Weather.png";
import josiahImg from "../public/assets/projects/Josiahsite.png";


const Projects = () => {
  return (
    // Project Section
    <div id="projects" className="w-full h-full text-center px-12 py-16">
      {/* Background  */}
      <div className="max-w-[1050px] w-full h-full mx-auto justify-center items-center pl-2">
        {/* Header  */}
        <div className="py-2 text-left font-bold">
          <h2>
            Projects<span>.</span>
          </h2>
        </div>
        {/* Divider  */}
        <div className="flex items-start py-4">
          <hr className="border-2 w-24 border-black" />
        </div>

        {/* Content  */}
        <div className="max-w-[1700px] mt-10 w-full h-full mx-auto p-2 flex justify-center items-center">
          {/* Project section */}
          <div>
            <div className=" -my-8 flex flex-col">
              <ProjectItem
                title="Personal Website"
                backgroundImg={josiahImg}
                projectUrl="/property"
                tech="React JS"
                description="This is the first version of my personal website, which 
            contains a portfolio, resume, and my timeline as a programmer. I built it with 
            React and Next.js using features like Hooks, Dynamic Links, and more. "
              />
              <ProjectItem
                title="Josiahbase"
                backgroundImg={cryptoImg}
                projectUrl="/crypto"
                tech="React JS"
                description="I started this project to dip my toes into APIs and learn more 
            about what I've heard people talking about. "
              />
              <ProjectItem
                title="Weather App"
                backgroundImg={weatherImg}
                projectUrl="/crypto"
                tech="React JS"
                description="I started this project to dip my toes into APIs and learn more 
            about what I've heard people talking about. "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
