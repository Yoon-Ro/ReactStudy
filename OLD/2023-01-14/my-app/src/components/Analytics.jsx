import React from 'react'
import UP from '../assets/NEWTON-UPCOMING-FEATURE.png';

const Analytics = () => {
  return (
    <div className='w-full py-64 px-4 bg-slate-200'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-full mx-auto my-4' src={UP} alt="/"/>
            <div className='flex flex-col justify-center ml-16'>
                <p className='text-[#C7004C] text-xl font-bold'>UPCOMING FEATURE</p>
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold my-4 py-2 text-[#434343]'>Check how much your 
Apple products are!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto repellendus fugiat, doloremque, perspiciatis dicta veniam obcaecati nostrum.</p>
                <div className='flex '>
                <input className=' my-6 px-6 py-2 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
            <button className='bg-[#C7004C] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2'>Notify Me</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics