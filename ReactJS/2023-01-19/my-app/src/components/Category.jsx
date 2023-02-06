import React from 'react'
import {categories} from '../data/data.js';

const Category = () => {
  return (
    <div className='max-w-[1240px] py-12 mx-auto'>
        <h1 className='text-white  font-bold text-3xl'>Category</h1>
        {/* CATEGORIES */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) =>
            <div key={index} className='bg-gray-200 hover:bg-[#5dda4d] hover:scale-105 duration-300 rounded-xl px-4 py-8 flex justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img className='w-16' src={item.image} alt={item.name}/>
            </div>
        )}
        </div>
    </div>
  )
}

export default Category