import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white px-4 py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Want tips & tricks to optimize your flow?</h1>
                <p className=''>Sign up to our newsletter adn stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-full text-black'type="email" placeholder="enter email"/>
                    <button className='bg-white w-[200px] rounded-full font-medium text-medium ml-4 my-6 px-6 py-3 text-black'> Get Started </button>
                    
                </div>
                <p className='pt-4'>We care about the protection of your data. Rea our <span className='text-[#00df9a] underline'>Privacy Policy</span></p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter