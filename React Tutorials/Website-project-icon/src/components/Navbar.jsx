import React from 'react'
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className=' bg-[#0f2623] border-b-[1px] border-white/20'>
        <div className='section sm:w-4/5 nav flex justify-between'>
{/* LOGO */}
            <div className='flex items-center gap-4'>
            <img src={logo} alt="/" className='w-[48px]'/>
            <h1 className='text-2xl font-bold text-white uppercase'>IconValue</h1>
            </div>
{/* BUtton */}
<button className=' text-[#ffcb3c] rounded-full text-bold text-md'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar