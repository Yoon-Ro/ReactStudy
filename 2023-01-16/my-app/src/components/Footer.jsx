import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                React
            </h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis numquam ipsum tempore deleniti necessitatibus quo id laudantium ipsa.</p>
            <div className='flex flex-row justify-between md:w-[75%]'>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>

        <div className='md:col-span-2 flex justify-between mt-6 ml-12'>
            <div> 
                <h5 className='font-medium text-gray-400'>Solution</h5>
                <ul>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                </ul>
            </div>

            <div> 
                <h5 className='font-medium text-gray-400'>Solution</h5>
                <ul>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                    <li className='py-2 text-sm'>sdfsdf</li>
                </ul>
            </div>

            <div> 
                <h5 className='font-medium text-gray-400'>Solution</h5>
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