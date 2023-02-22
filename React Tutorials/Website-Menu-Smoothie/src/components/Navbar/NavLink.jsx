import React from 'react';
import { Link } from "react-scroll";

const NavLink = ({href, link}) => {
  return (
    <li className='list-none cursor-pointer'>
        <Link to={href} spy={true} smooth={true} duration={500} offset={-50} className="
        
        hover:text-white hover:bg-[#2A5631] hover:shadow-xl
        font-medium text-sm transition-all duration-300 text-[#2A5631] px-4 py-2 border rounded-full border-[#2A5631]">{link}</Link>
    </li>
  )
}

export default NavLink 