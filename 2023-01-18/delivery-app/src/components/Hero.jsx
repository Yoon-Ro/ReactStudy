import React from 'react'
import {BsFillCartFill} from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative '>
            {/* OVERLAY */}
            <div className='rounded-3xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-8 text-2xl sm:text-5xl md:text-6xl font-bold'>The <span className='text-orange-400'>Best</span></h1>
                <h1 className='px-8 text-2xl sm:text-5xl md:text-6xl font-bold'>Foods <span className='text-orange-400'>Delivered</span></h1>
                <h1 className='px-8 text-lg sm:text-2xl md:text-3xl py-4'>Directly to your door</h1>

            {/* BUTTON */}
                <button className='bg-orange-400 text-Black flex w-[180px] items-center py-2 rounded-full mx-8'>
        <BsFillCartFill size={24} className='text-black'/> <span className='px-4 font-medium text-black text-lg'> Cart</span>
      </button>
            </div>

{/* BURGER IMAGE */}
            <img className="rounded-3xl w-full max-h-[500px] object-cover"src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt='hamburger'/>
        </div>
    </div>
  )
}

export default Hero