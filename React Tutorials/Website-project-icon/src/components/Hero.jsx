import React from 'react'
import image from '../assets/Heroimage.svg';

const Hero = () => {
  return (
    <div className='bg-[#0f2623] py-16 text-white'>
      <div>
        <div className='section sm:w-4/5'>

            <div className='grid sm:grid-cols-6 items-center'>
                <div className='col-span-3'>
                    <p className='bg-white p-2 text-[12px] rounded-full text-black inline-block my-8'>Opening Sale 90%!</p>
                    <h1 className='text-6xl font-bold leading-[4rem]'>
                    <span className='text-[#3cff56]'>Create</span> automated <span className='text-[#3c8aff]'>revenue</span> by drawing <span className='text-[#ffcb3c]'>simple icons</span></h1>
                    <p className='py-8 text-sm leading-6 w-4/5'>
                    We'll teach you the fundamentals of icon design, such as sketching, coloring, and composition. You'll learn how to leverage your icon design skills to become a successful freelancer and make a livable passive income from your icon designs.
                    </p>
                    <div className='flex gap-4'>
                    <button className='py-4 px-8 bg-[#14322e] rounded-full text-[#ffcb3c] text-bold text-md'>Get Started</button>
           
                    </div>
                </div>
                <div className='col-span-3'>
                <img src={image} alt="/" className=' mx-auto '/>
                </div>
            </div>

          
            <div className='flex flex-col text-center pt-32 pb-16'>
            <p className='font-bold text-4xl py-4 '>Creating icons is easy as <span className='hover:text-[#3cff56] hover:text-6xl duration-300'>A</span>, <span className='hover:text-[#3c8aff] hover:text-6xl duration-300'>B</span>, <span className='hover:text-[#ffcb3c] hover:text-6xl duration-300'>C</span></p>
            <p className='text-[#ffcb3c] font-medium'>and it pays you more than the dividend from uncertain 10K USD investment</p>
            <p className='font-medium'>We will teach you how to create revenue by designing and distributing your own icons.</p>

            </div>


        </div>
        <div className='border-b-[1px] border-white/10'/>
        </div>
    </div>
  )
}

export default Hero