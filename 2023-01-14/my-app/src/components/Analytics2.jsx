import React from 'react'
import CTA from '../assets/NEWTON-CTA.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-[#F4C4D2] pl-16 py-0 border-none rounded-xl '>
            <div className='flex flex-col justify-center mr-8'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Most Searched Items</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <button className='bg-[#ED6D9E] w-[200px] rounded-xl font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Get Started</button>
            </div>
            <img className='w-[480px] mx-auto' src={CTA} alt="/"/>
        </div>
    </div>
  )
}

export default Analytics