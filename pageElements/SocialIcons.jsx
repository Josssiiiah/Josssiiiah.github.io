import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-between mx-auto max-w-xs">
      <RiGithubFill size={30} />

      <RiLinkedinBoxFill size={30} />

      <AiOutlineMail size={30} />
    </div>
  );
};

export default SocialIcons;
