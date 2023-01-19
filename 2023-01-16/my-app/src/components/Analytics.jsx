import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[80%] mx-auto my-4' src={Laptop} alt="laptop"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2'>Managee Data Analytics Centrally</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet culpa officia voluptatum, placeat animi ducimus, obcaecati similique dolor dicta natus veniam excepturi, quo est corporis neque adipisci. Eum, porro!</p>
                <button className='bg-black w-[280px] rounded-md font-medium text-sm uppercase my-6 mx-auto md:mx-0 py-2 text-white'> Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics