import React from 'react'
import image from '../../assets/CTAimage.jpg';
import logo from "../../assets/logo-v1.svg";

const CTA = () => {
  return (
    <div>
    <div className='section pt-32 '>
<div className=' relative rounded-xl bg-white shadow-xl2' >
    <img src={image} alt="/" className='w-fill object-fill rounded-xl relative'/>
<h1 className='text-4xl font-medium text-white p-8 absolute bottom-20 right-20 bg-green-800/40 rounded-xl backdrop-blur '>
Our ingredients are selected for <br/>
their freshness and the work ethic <br/>
of our employees</h1>
</div>


    </div>
    <div className='bg-green-800 text-white mt-[-8rem] pb-16'>
<div className='grid grid-cols-4 section pt-40'>
    <div className='col-span-1'>
        <ul>
            <div className='flex items-center gap-4'> 
            <img src={logo} alt="/" className='w-[3rem]'/>
            <h1 className='text-2xl'>ROGO JUICE</h1>
            </div>
           
            <li></li>
        </ul>
    </div>
    <div className='col-span-1 pt-2'>
        <ul>
            <h1 className='text-lg pb-2'>ROGO JUICE</h1>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
        </ul>
    </div>
    <div className='col-span-1 pt-2'>
        <ul>
            <h1 className='text-lg pb-2'>ROGO JUICE</h1>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
        </ul>
    </div>
    <div className='col-span-1 pt-2'>
        <ul>
            <h1 className='text-lg pb-2'>ROGO JUICE</h1>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
            <li className='py-2'>list</li>
        </ul>
    </div>
</div>
    </div>
    </div>
  )
}

export default CTA