import React, { useState, useEffect } from 'react'
import {navLinks} from "../../Data";
import {HiMenuAlt1, HiX} from "react-icons/hi"
import NavLink from './NavLink';
import MobileNavLinks from './MobileNavLinks';
import logo from "../../assets/logo-v1.svg";
import {BiRightArrowAlt} from "react-icons/bi";



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
      active ? "shadow-sm bg-white/50 backdrop-blur " : ""
    } fixed w-full top-0 left-0 z-20 bg-white`}>
      <div>
        <div className={`${
      active ? "py-4 transition-all duration-300 " : "py-8"
    } section py-8 mx-auto flex items-center justify-between p-0 `}>
         <div className='flex items-center gap-4'>
      <div className='flex items-center gap-4'>
            <img src={logo} alt="/" className='w-[4rem]'/>
            <h1 className='text-2xl font-bold text-[#193a1e]'>Rogo Juice</h1>
            </div>

         </div>
         <div className='flex justify-between gap-4'>
         <div className='sm:flex gap-4 items-center hidden'>
          {navLinks.map(navLink => {
            return <NavLink key={navLink.id} {...navLink}/>;
          })}
         </div>

         <button className='bg-[#193A1E] px-4 py-4 rounded-lg text-white text-sm flex items-center gap-2'>Order Online 
        <BiRightArrowAlt/></button>
         </div>

         
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