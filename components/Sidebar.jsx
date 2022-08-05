import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <ul className="w-full h-max bg-none px-12 mt-2 ">
      {/* Sidebar items */}
      <div className="flex flex-col text-left justify-center text-lg font-bold">
        <li className="hover:text-white py-10 text-5xl">
          <Link href="/Home">Home</Link>
        </li>
        <li className="hover:text-white py-10 text-5xl">
          <Link href="/">Projects</Link>
        </li>
        <li className="hover:text-white py-10 text-5xl">
          <Link href="/">About</Link>
        </li>
        <li className="hover:text-white py-10 text-5xl">
          <Link href="/">Contact</Link>
        </li>
      </div>
    </ul>
  );
};

export default Sidebar;
