import React from 'react'

const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH UX DESIGN</p>
            
            <div>
                <p className='md:text-4xl sm:text-4xl text-xl font-bold'>Check and compare the secondary iPhone prices with intractable chart.</p>
            </div>
            <p className='md:text-md  py-4 font-medium text-gray-500 px-32'>Compare iPhone prices with our powerful chart. Easily select and compare 
the prices of all iPhone models based on their specifications</p>
            <button className='bg-[#C7004C] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero