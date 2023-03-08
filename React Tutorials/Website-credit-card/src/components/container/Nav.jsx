import React from 'react'
import logo from "../../assets/rbc-logo-shield 3.svg";

const Nav = () => {
  return (
    <div className='bg-[#5EADFF] text-sm '>
                <div className='pt-2 section bg-[#5EADFF] font-white'>
                <ul  className='flex text-xs text-white gap-4'>
                    <li className=' py-2 border-b-4 border-[#E8CF00]'>Features</li>
                    <li className='py-2 '>Compare</li>
                    <li className='py-2 '>Support</li>
                    <li className='py-2 '>Blog</li>
                </ul>
        </div>
    <div className=' py-2 border-b border-white/10 sticky top-0 z-50 bg-[#0051A5]'>

        <div className='section flex justify-between items-center text-blue'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="/" className='w-[58px]'/>
                <h1 className='font-bold text-white text-xl tracking-wider'>Royale Bank</h1>
                </div>
                
            <div >
                <ul  className='flex justify-evenly text-md text-white'>
                    <li className='px-4'>Features</li>
                    <li className='px-4'>Compare</li>
                    <li className='px-4'>Support</li>
                    <li className='px-4'>Blog</li>
                </ul>
            </div>
            <div className='flex items-center gap-4 text-md text-white'>
            <p className='px-4 '>Login</p>
                <button className='py-4 px-6 rounded-full text-black border border-[#0f6bcd] bg-[#E8CF00] font-medium '>Open Account</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Nav