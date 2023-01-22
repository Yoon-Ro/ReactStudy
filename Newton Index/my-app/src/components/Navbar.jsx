import React from 'react';

import logo from '../assets/NEWTON-LOGO.png';

const Navbar = () => {

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <img className='w-40' src={logo} alt="/"/>
        <div className='flex items-center'>
        <ul className='md:flex font-medium'>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCE</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
        <button className=" bg-[#ff3b3b] text-Black flex w-[160px] items-center py-2 rounded-xl">
              <span className="mx-auto font-medium text-white text-center">
                BROWSE
              </span>
            </button>
        </div>
    </div>
  )
}

export default Navbar