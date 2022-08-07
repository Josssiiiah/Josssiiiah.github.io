import React from 'react'
import { Sling as Hamburger } from "hamburger-react";

const TopMenu = () => {
  return (
    <div className="md:hidden mt-10 w-full flex flex-row items-center justify-between static">
    {/* Mobile Burger Toggle*/}
    <div className="top-10 pl-12">
      <Hamburger toggled={nav} toggle={toggleOpen} size={40} />
    </div>
    {/* Logo Image  */}
    <div className="top-10 pr-12 ">
      <Image
        src="/../public/assets/LogoJ.png"
        width="80"
        height="45"
        alt="/"
      />
    </div>
  </div>
  )
}

export default TopMenu