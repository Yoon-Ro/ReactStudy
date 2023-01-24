import React from 'react';

import logo from '../assets/NEWTON-LOGO.png';

const Navbar = () => {

  return (
    <div className='flex px-16 lg:px-0 justify-between items-center h-24 max-w-[1240px] mx-auto text-black'>
        <img className='w-40' src={logo} alt="/"/>
        <div className='flex items-center'>
        <ul className='hidden lg:flex font-medium'>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCE</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
        <button className=" bg-[#ff3b3b] ml-4 text-Black flex w-[160px] items-center py-2 rounded-md">
              <span className="mx-auto font-medium text-white text-center">
                BROWSE
              </span>
            </button>
        </div>
    </div>
  )
}

export default Navbar