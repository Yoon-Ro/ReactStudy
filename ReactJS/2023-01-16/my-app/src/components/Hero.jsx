import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold mr-4'>Fase, flexible financing for </p>
                <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} smartBackspace={140} loop className='md:text-4xl sm:text-2xl text-xl font-bold text-gray-500 '/>
            </div>
            <p className='md:text-1xl text-sm uppercase font-bold text-gray-400 mt-4'>
                Monitor your data analytics to increase revenuee for BTB, BTC, and SASS platfom.
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-bold text-lg uppercase my-6 mx-auto py-2 text-black'>Get started</button>
        </div>
    </div>
  )
}

export default Hero