import React from 'react'
import logo from '../assets/logo.svg';


const Footer = () => {
  return (
    <div className='bg-[#0f2623] pt-16 px-24 '>
    <div className='py-16 grid grid-cols-4 border-b border-white/10'>
        <div className='col-span-1'>
{/* LOGO */}
<div className='flex items-center gap-4'>
            <img src={logo} alt="/" className='w-[48px]'/>
            <h1 className='text-2xl font-bold text-white uppercase'>IconValue</h1>
            </div>

            <div>
                <h1 className='text-white leading-6 py-4'>Websites, brands and products for amazing startups and incredible people</h1>
            </div>

            <div>
                <h1 className='text-white/60 text-sm leading-6 '>Designed and Developed by Yoon Ro</h1>
            </div>

            </div>

            <div/>
            <div/>

            <div>
<p className='pb-4 text-white ml-[16rem]'>Home</p>
<p className='pb-4 text-white ml-[16rem]'>Stage One</p>
<p className='pb-4 text-white ml-[16rem]'>Stage Two</p>
<p className='pb-4 text-white ml-[16rem]'>Stage Three</p>
<p className='pb-4 text-white ml-[16rem]'>Result</p>
<p className='pb-4 text-white ml-[16rem]'>Free Course</p>
                
            </div>
        
        </div>
        <div className='py-8 text-white'>© ICONVALUE 2023. All rights reserved.</div>
        </div>
  )
}

export default Footer