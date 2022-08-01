import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <ul className="w-full h-max bg-none p-4 mt-10">
      <div className="flex flex-col items-center justify-center text-lg font-bold">
        <li className="py-6">
          <Link href="/">About</Link>
        </li>
        <li className="py-6">
          <Link href="/">Projects</Link>
        </li>
        <li className="py-6">
          <Link href="/">Projects</Link>
        </li>
      </div>
    </ul>
  );
};

export default Sidebar;
