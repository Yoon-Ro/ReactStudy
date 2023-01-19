import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-black bg-orange-600'>
        <div>
            <h1 className='text-4xl w-full'>delivery <span className='font-bold'>App</span></h1>
            <p className='py-4 font-medium '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae delectus totam eum officia. </p>
        </div>

        <div className='ml-8 width-[50%]'>
        <h3 className='font-medium text-2xl px-2'> Footer #1</h3>
            <ul>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
            </ul>
        </div>

        <div className='ml-8 width-[50%]'>
            <h3 className='font-medium text-2xl px-2'> Footer #1</h3>
            <ul>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
                <li className='py-2 text-sm hover:bg-black hover:text-orange-600 rounded-full px-2'>asd</li>
            </ul>
        </div>


    </div>
  )
}

export default Footer