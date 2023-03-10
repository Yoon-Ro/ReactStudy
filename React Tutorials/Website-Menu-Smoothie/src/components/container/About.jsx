import React from 'react'
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-sold border-Teal rounded-lg'>
          <img src={about} alt="/" className='p-4 rounded-lg'/>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            We provide the <br/> best <span className='text-Teal'>online courses</span>
          </div>
          <p className='text-sm text-gray leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam iure, ullam cum pariatur saepe aliquid expedita nobis ipsa consequatur omnis enim asperiores nihil ab distinctio odit id quos voluptatum.
          </p>
          <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold mt-4'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About