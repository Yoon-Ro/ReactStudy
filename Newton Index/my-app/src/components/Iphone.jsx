import React from 'react'

const Iphone = () => {
  return (
    <div className='w-full py-8 px-4'>
        <div className='max-w-[1240px] flex flex-col mx-auto bg-black/5 px-16 py-16 border-none rounded-xl '>
        <p className="my-2 text-black font-bold text-sm px-2 py-1 rounded-full w-[180px] text-center bg-[#96efa4]">
            We have price for you
          </p>
          <h1 className='text-5xl font-bold my-4'>Take full control of</h1>
        <div className='grid  md:grid-cols-2 gap-8 my-4'>
            <div className='bg-white hover:bg-[#fff2f1] hover:shadow-sm flex flex-col p-4 rounded-xl hover:scale-105 duration-300'>
            <h3 className='py-2 font-medium text-lg text-gray-800'>1. How does this help you?</h3>
            <p className='py-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque tempore et incidunt officiis voluptas quo id quibusdam ipsam maxime delectus consequuntur dignissimos accusantium voluptate facere, libero aliquid beatae quae.</p>
            </div>


            <div className='bg-white flex flex-col p-4 rounded-xl hover:scale-105 duration-300'>
            <h3 className='py-2 font-medium text-lg text-gray-800'>2. How does this help you?</h3>
            <p className='py-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque tempore et incidunt officiis voluptas quo id quibusdam ipsam maxime delectus consequuntur dignissimos accusantium voluptate facere, libero aliquid beatae quae.</p>
            </div>

        </div>
        <div className='grid  md:grid-cols-2 gap-8 mt-4'>
            <div className='bg-white flex flex-col p-4 rounded-xl hover:scale-105 duration-300'>
            <h3 className='py-2 font-medium text-lg text-gray-800'>3. How does this help you?</h3>
            <p className='py-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque tempore et incidunt officiis voluptas quo id quibusdam ipsam maxime delectus consequuntur dignissimos accusantium voluptate facere, libero aliquid beatae quae.</p>
            </div>


            <div className='bg-white flex flex-col p-4 rounded-xl hover:scale-105 duration-300'>
            <h3 className='py-2 font-medium text-lg text-gray-800'>4. How does this help you?</h3>
            <p className='py-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque tempore et incidunt officiis voluptas quo id quibusdam ipsam maxime delectus consequuntur dignissimos accusantium voluptate facere, libero aliquid beatae quae.</p>
            </div>

        </div>
</div>
    </div>
  )
}

export default Iphone