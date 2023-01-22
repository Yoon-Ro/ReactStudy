import React from 'react'


const Footer = () => (
    <div className='max-w-[1240px] mb-8 mx-auto py-16 px-16 grid md:grid-cols-3 gap-8  bg-[#fff2f1] rounded-3xl'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#f96060]'>
                NEWTON INDEX
            </h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis numquam ipsum tempore deleniti necessitatibus quo id laudantium ipsa.</p>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-2 flex w-full rounded-md text-black font-medium bg-white' type='email' placeholder='Newsletter'/>
            <button className='bg-[#f96060] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2'>Subscribe</button>
  
            </div>
        </div>

        <div className='md:col-span-2 flex justify-between mt-6 ml-12 px-16'>
            <div> 
                <h5 className='font-medium text-gray-400 mb-4'>Solution</h5>
                <ul>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                </ul>
            </div>

            <div> 
                <h5 className='font-medium text-gray-400 mb-4'>Solution</h5>
                <ul>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                </ul>
            </div>

            <div> 
                <h5 className='font-medium text-gray-400 mb-4'>Solution</h5>
                <ul>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                </ul>
            </div>
        </div>


    </div>
)

export default Footer