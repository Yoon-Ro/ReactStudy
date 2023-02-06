import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'> 
       
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ad quae dolor, nulla minus officiis natus reiciendis quibusdam mollitia voluptatum amet, maiores in ipsa unde incidunt veritatis voluptas! Mollitia, perspiciatis.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
            </div>
        </div>



        <div className='md:col-span-2 flex justify-between mt-6 ml-64'>
            <div>
                <h5 className='font-medium text-gray-400'>Solution</h5>
                <ul className='pt-4'>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h5 className='font-medium text-gray-400'>Support</h5>
                <ul className='pt-4'>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h5 className='font-medium text-gray-400'>About</h5>
                <ul className='pt-4'>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Footer