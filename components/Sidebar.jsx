import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <ul className="w-full bg-white p-4">
      <div className="flex flex-col py-12 items-center justify-center">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
      </div>
    </ul>
  );
};

export default Sidebar;
