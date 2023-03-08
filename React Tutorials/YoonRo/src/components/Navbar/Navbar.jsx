import React, { useState, useEffect } from 'react'
import {navLinks} from "../../Data";
import {HiMenuAlt1, HiX} from "react-icons/hi"
import NavLink from './NavLink';
import MobileNavLinks from './MobileNavLinks';

const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    const [active,setActive] = useState(null);

    useEffect(()=> {
const scrollActive = () => { setActive(window.scrollY > 20);};

      window.addEventListener("scroll", scrollActive);
      return() => window.removeEventListener("scroll", scrollActive);
    },{active});

  return (
    <div className={`${
      active ? "  " : ""
    } fixed w-full justify-center top-0 left-0 z-20`}>
      <div>
        <div className={`${
      active ? "py-4 shadow-md " : "py-4"
    } w-fill sm:w-[1024px] py-4 mx-auto flex items-center justify-between px-8 mt-8 bg-white/50 backdrop-blur rounded-full `}>
         <div className='flex items-center gap-4'>
         
          <div className='text-4xl text-[#12312] uppercase tracking-wide font-bold'>
            Yoon Ro
            </div>
         </div>
         <div className='sm:flex items-center hidden'>
          {navLinks.map(navLink => {
            return <NavLink key={navLink.id} {...navLink}/>;
          })}
         </div>

         <button className='py-3 px-6 font-bold text-sm border border-solid rounded-full border-gray'>Contact</button>
         
         {toggle && (
         <div className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center gap-8 py-8'>
          {navLinks.map(navLink => {
            return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}/>;
          })}
            <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)}/>
          </div>
          )} 

        </div>
      </div>
    </div>
  )
}

export default Navbar 