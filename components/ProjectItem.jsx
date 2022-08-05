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
    <div className="max-w-[375px] pt-4 mx-auto transition duration-500 hover:scale-105 relative flex flex-col justify-center shadow-xl shadow-gray-400 rounded-xl ">
      {/* Image  */}
      <div className=" flex items-center">
        <Image className="rounded-xl h-full" src={backgroundImg} alt="/" />
      </div>
      {/* Title  */}
      <div>
        <h3 className="text-2xl text-black tracking-wider text-left pl-6 pt-4">
          {title}
        </h3>
      </div>

      {/* Description  */}
      <div>
        <p className="text-left pl-4 m-2"> {description} </p>
      </div>

      {/* Buttons  */}
      <div className="flex justify-items-start pl-4 pr-6 my-4">
        <button className="w-100 p-2 px-4 mx-2">Live Demo</button>
        <button className="w-100 p-2 px-4 mx-2">Github</button>
      </div>
    </div>
  );
};

export default ProjectItem;
