import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  description,
  backgroundImg,
  tech,
  projectUrl,
}) => {
  return (
    <div className="shadow-xl shadow-gray-400 rounded-xl transition duration-400 hover:scale-105 mt-16">
      {/* Container  */}
      <div className=" md:flex w-full p-8">
        {/* Image  */}
        <div className="basis-1/3 mr-6 mt-4">
          <Image className="rounded-xl h-full" src={backgroundImg} alt="/" />
        </div>

        {/* Information  */}
        <div className="basis-2/3 mt-4">
          {/* Title  */}
          <div>
            <h3 className="text-2xl text-black font-bold tracking-wider text-left pl-6">
              {title}
            </h3>
          </div>
          {/* Description  */}
          <div>
            <h4 className="text-left pl-4 m-2"> {description} </h4>
          </div>
          {/* Technologies  */}
          <div>
            <p className="text-left pl-4 m-2"> {tech} </p>
          </div>
          {/* View Project Button */}

          <div className="flex justify-items-start pl-4 pr-6 mt-8">
            <button className="w-100 p-2 px-4 mx-2">Live Demo</button>
            <button href={projectUrl} className="w-100 p-2 px-4 mx-2">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="max-w-[750px] pt-4 mx-auto transition duration-500 hover:scale-105 relative flex flex-col justify-center shadow-xl shadow-gray-400 rounded-xl ">
    //   {/* Image  */}
    //   <div className=" flex items-center">
    //     <Image className="rounded-xl h-full" src={backgroundImg} alt="/" />
    //   </div>
    //   {/* Title  */}
    //   <div>
    //     <h3 className="text-2xl text-black tracking-wider text-left pl-6 pt-4">
    //       {title}
    //     </h3>
    //   </div>

    //   {/* Description  */}
    //   <div>
    //     <p className="text-left pl-4 m-2"> {description} </p>
    //   </div>

    //   {/* Buttons  */}
    //   <div className="flex justify-items-start pl-4 pr-6 my-4">
    //     <button className="w-100 p-2 px-4 mx-2">Live Demo</button>
    //     <button className="w-100 p-2 px-4 mx-2">Github</button>
    //   </div>
    // </div>
  );
};

export default ProjectItem;
