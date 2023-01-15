import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logo from '../assets/NEWTON-LOGO.png';

const Navbar = () => {
        const [nav,SetNav] = useState(false) 
        const handleNav = () => {
            SetNav(!nav)
        }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <img className='w-40' src={logo} alt="/"/>
        <ul className='hidden md:flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCE</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4 p-4'>
            Menu
        </h1>
            <ul className='pt-12 uppercase'>
            <li className='p-4 ml-4 border-b border-gray-600'>HOME</li>
            <li className='p-4 ml-4 border-b border-gray-600'>COMPANY</li>
            <li className='p-4 ml-4 border-b border-gray-600'>RESOURCE</li>
            <li className='p-4 ml-4 border-b border-gray-600'>ABOUT</li>
            <li className='p-4 ml-4 border-b border-gray-600'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar