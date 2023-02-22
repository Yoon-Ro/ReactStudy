import React from 'react'
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      {/* SECTION 1 */}
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
          <div className='pl-5'>
            <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
              Become <span className='text-Teal'>An Instructor</span> <br/> of Our Platform
            </div>
            <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, accusantium eaque quae voluptatum quo ea voluptatibus consequuntur quos nemo dolor.</p>
            <button className='py-3 px-4 bg-Teal text-white rounded-lg font-bold my-8'>Start Teaching</button>
          </div>
          <div className='md:w-5/5 sm:row-start-1'>
            <img src={teacher1} alt="/" className='rounded-xl'/>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid sm:grid-cols-2 place-items-center gap-8 mt-8">
          <div className='pl-5'>
            <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
              Become <span className='text-Teal'>An Instructor</span> <br/> of Our Platform
            </div>
            <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, accusantium eaque quae voluptatum quo ea voluptatibus consequuntur quos nemo dolor.</p>
            <button className='py-3 px-4 bg-Teal text-white rounded-lg font-bold my-8'>Get Started</button>
          </div>
          <div className='p-4 md:w-5/5'>
            <img src={teacher2} alt="/" className='rounded-xl'/>
          </div>
        </div>
      <div className='text-center my-8 font-bold  sm:text-3xl text-xl mt-24'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
        <div className='mt- max-w-[700px] mx-auto'>
          {accordions.map((accordion) => {
            return <Accordion key={accordion.id} {...accordion} />;
          })}
          </div>
      </div>
  )
}

export default Teacher