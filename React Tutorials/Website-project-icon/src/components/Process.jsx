import React from 'react'
import example from '../assets/process1.svg';
import example2 from '../assets/process2.svg';
import example3 from '../assets/process3.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';



const Process = () => {
  return (
    <div className=' bg-[#0f2623]'>



        <div className='section sm:w-3/5'>
            
            <div className='grid sm:grid-cols-2 items-center mb-32'>
                <div className='sm:w-4/5'>
                    <p className='bg-[#3cff56] inline-block px-4 py-2 rounded-full text-black text-sm mb-8'>Stage One: Learn</p>
                    <h1 className='text-2xl text-white font-medium mb-4 leading-[2rem]'>Enhance your skillset and gain knowledge by studying the fundamentals of icon design</h1>
                    <p className='text-sm leading-6 text-white/60 mb-8'>This course provides students with the fundamentals of icon design to help them create a consistent income stream. Our comprehensive structure allows learners to master icon design in a single day, with free tools at their disposal.</p>
                    <ul className='pb-8'>
                        <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#3cff56]"/> Online recordings of our entire course catalouge</li>
                        <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#3cff56]"/> Weekly recap meetings with instructors.</li>
                    </ul>
              

                </div>

                <div>
                    <img src={example} alt="/" className=''/>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 items-center mb-32'>


                <div>
                    <img src={example2} alt="/" className='hidden sm:block'/>
                </div>

                <div className='sm:w-4/5 sm:ml-32'>
                    <p className='bg-[#3c8aff] inline-block px-4 py-2 rounded-full text-white text-sm mb-8'>Stage Two: Learn</p>
                    <h1 className='text-2xl text-white font-medium mb-4 leading-[2rem]'>Enhance your skillset and gain knowledge by studying the fundamentals of icon design</h1>
                    <p className='text-sm leading-6 text-white/60 mb-8'>This course provides students with the fundamentals of icon design to help them create a consistent income stream. Our comprehensive structure allows learners to master icon design in a single day, with free tools at their disposal.</p>
                    <ul className='pb-8'>
                    <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#3c8aff]"/>Online recordings of our entire course catalouge</li>
                    <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#3c8aff]"/>Weekly recap meetings with instructors.</li>
                    </ul>

                    <div>
                    <img src={example2} alt="/" className='visible sm:hidden'/>
                </div>

                </div>
            </div>

            <div className='grid sm:grid-cols-2 sm:items-center '>
                <div className='sm:w-4/5'>
                    <p className='bg-[#ffcb3c] inline-block px-4 py-2 rounded-full text-black text-sm mb-8'>Stage One: Three</p>
                    <h1 className='text-2xl text-white font-medium mb-4 leading-[2rem]'>Enhance your skillset and gain knowledge by studying the fundamentals of icon design</h1>
                    <p className='text-sm leading-6 text-white/60 mb-8'>This course provides students with the fundamentals of icon design to help them create a consistent income stream. Our comprehensive structure allows learners to master icon design in a single day, with free tools at their disposal.</p>
                    <ul className='pb-8'>
                    <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#ffcb3c]"/>Online recordings of our entire course catalouge</li>
                    <li className='text-white text-sm my-2 flex items-center gap-4'><BsFillCheckCircleFill size={16} className="text-[#ffcb3c]"/>Weekly recap meetings with instructors.</li>
                    </ul>
              

                </div>

                <div>
                    <img src={example3} alt="/" className=''/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Process