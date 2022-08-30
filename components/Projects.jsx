import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.png";
import weatherImg from "../public/assets/projects/Weather.png";
import josiahImg from "../public/assets/projects/Josiahsite.png";
import calculatorImg from "../public/assets/projects/calculator.png";
import plateShare from "../public/assets/projects/PlateShare.png";

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
                githubUrl="https://github.com/Josssiiiah/Josssiiiah.github.io"
                projectUrl="https://josiahgriggs.me"
                tech="React.js | Next.js | Tailwind "
                description="First version of personal website. Features portfolio, resume, and about me. Built using React.js and Next.js. Utilizes React hooks and global styles.
                "
              />
              <ProjectItem
                title="Josiahbase"
                backgroundImg={cryptoImg}
                githubUrl="https://github.com/Josssiiiah/JosiahBase"
                projectUrl="https://josiah-base.vercel.app/"
                tech="React.js  | Next.js  | Tailwind | Coin Gecko API | Google Firebase"
                description="Starter project to dip my toes into API's. Features dynamically rendered components, dark/light mode, protected routes, and Firebase authentication. "
              />
              <ProjectItem
                title="Weather App"
                backgroundImg={weatherImg}
                githubUrl="https://github.com/Josssiiiah/nextjs-weather-app"
                projectUrl="https://nextjs-weather-app1.vercel.app/"
                tech="React.js | OpenWeatherMap API"
                description="I ideated and completed this project to practice creating a React web app from scratch and 
                utilizing dynamically rendered data from an API by myself. "
              />
              <ProjectItem
                title="Calculator App"
                backgroundImg={calculatorImg}
                githubUrl="https://github.com/Josssiiiah/react-calculator"
                projectUrl="https://josssiiiah.github.io/react-calculator/"
                tech="React.js | CSS"
                description="I completed this project to pursue my curiousity of building a calculator without plug-ins or libraries. I also 
                added a result-to-speech feature for accessibility, but I am still working out some bugs. "
              />

              <div className="blur">
                <ProjectItem
                  title="PlateShare"
                  backgroundImg={plateShare}
                  githubUrl="https://github.com/Josssiiiah/nextjs-weather-app"
                  projectUrl="https://nextjs-weather-app1.vercel.app/"
                  tech="React.js | OpenWeatherMap API"
                  description="I started this project to dip my toes into APIs and learn more 
            about what I've heard people talking about. "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
