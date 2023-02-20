 import React from 'react'
 import course from "../assets/courses4.jpg";
 import {BsFillCheckCircleFill} from "react-icons/bs"
 
 const CTA = () => {
   return (
     <div className='bg-[#0f2623] pt-16'>
        <div className="section text-white sm:w-3/5">
            <div className='bg-[#FE8643]/40 px-8 py-8 rounded-xl'>





                <div className="grid grid-cols-5 gap-16">
                    <div className='col-span-2 '>

                    <div className=''>

                    <h1 className='text-3xl text-white font-medium my-4 leading-[2rem]'>Start your course with $0 without hesitation</h1>
                    <p className='text-sm leading-6 text-white/80 mb-8 w-4/5'>Try our course for free, no upfront and 0 cost fee. Click the button below to start</p>
                    <p className='text-white text-sm my-4 items-center gap-2 flex '><BsFillCheckCircleFill size={24} className="text-[#3c8aff]"/>start your course with $0</p>
                    <p className='text-white text-sm my-4 items-center gap-2 flex'><BsFillCheckCircleFill size={24} className="text-[#3c8aff]"/>Easy to learn, simple to follow</p>



                    <button className='mt-4 py-4 px-8 bg-[#14322e] rounded-full text-[#ffcb3c] text-bold text-md'>Get Started</button>




                </div>
                    </div>
  
  <img src={course} alt="/" className='w-fill col-span-3 rounded-xl'/>


                    </div>
                </div>

            </div>
        </div>

   )
 }
 
 export default CTA