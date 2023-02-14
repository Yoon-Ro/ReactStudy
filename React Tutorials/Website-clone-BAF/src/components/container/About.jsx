import React from 'react'
import aboutimage from "../../assets/aboutimage.svg";

import corner from "../../assets/aboutcorner.svg";
import abouticon1 from "../../assets/abouticon1.svg";
import abouticon2 from "../../assets/abouticon2.svg";
import abouticon3 from "../../assets/abouticon3.svg";


const About = () => {
  return (
    <div className='bg-white py-32 '>
        <div className='section'>

            {/* ABOUT MAIN */}
            <div className='grid grid-cols-5'>
                <div className='col-span-3 w-5/6'>
                    <h1 className='text-6xl font-bold text-Purple font-Sigma'>WHAT IS BAF?</h1>
                    <p className='text-sm leading-[1.5rem] py-8'>A 501(c)(3) nonprofit organization focused on accelerating the development and adoption of Web3. BAF educates its members about blockchain development, sources sponsors and speakers for our university-affiliated blockchain clubs, launches startups, supports academic blockchain researchers, and more!</p>
                    <button className='text-white bg-Purple px-8 my-8 py-4 font-bold text-sm tracking-[0.06rem]  hover:bg-Purple duration-300 shadow-xl hover:animate-pulse'>Donate</button>

                </div>
                <div className='col-span-2 bg-Purple p-16 w-[400px] h-[400px] relative flex justify-center group '>
                    <img src={aboutimage} alt="/" className='w-[80%] group-hover:rotate-[15deg] group-hover:scale-[1.7] duration-300'/>
                    <img src={corner} alt="/" className='w-[30%] absolute top-[-2rem] left-[-2rem]  group-hover:animate-spin'/>
                    <span className='absolute font-bold text-2xl text-[#bcdf40] left-[18rem] rotate-[20deg]	 group-hover:opacity-0 group-hover:text-sm duration-300'>CRYPTO</span>
                    <span className='absolute font-bold text-2xl text-[#df4040] top-[10rem] left-[2rem]  rotate-[-10deg] group-hover:opacity-0 group-hover:text-sm  duration-300'>NFT</span>
                    <span className='absolute font-bold text-2xl text-[#40df82] top-[20rem] left-[20rem] rotate-[-10deg] group-hover:opacity-0 group-hover:text-sm  duration-300'>DAO</span>
                </div>
            </div>

{/* 3 Grid */}
<div className='grid grid-cols-3 mt-24 gap-24'>
    <div>
        <div className='flex justify-between items-center'>
            <h1 className=' text-Purple text-4xl font-bold'>Educate</h1>
            <img src={abouticon1} alt="/" className='w-[54px] mr-4'/>
        </div>
        <div className='py-4'/>
        <p className='text-sm leading-[1.5rem] text-gray font-medium'>
We see blockchain education as an onramp to adoption, and aim to improve access to educational material by building university curriculum, hosting conferences, and offering free online courses and recorded infosessions to anyone.</p>
    </div>

    <div>
        <div className='flex justify-between items-center'>
            <h1 className=' text-Purple text-4xl font-bold'>Connect</h1>
            <img src={abouticon2} alt="/" className='w-[54px] mr-4'/>

        </div>
        <div className='py-4'/>
        <p className='text-sm leading-[1.5rem] text-gray font-medium'>
        BAF connects people to each other, and to the resources, opportunities, and organizations they need to understand and contribute to the blockchain space.</p>
    </div>

    <div>
        <div className='flex justify-between items-center'>
            <h1 className=' text-Purple text-4xl font-bold'>Build</h1>
            <img src={abouticon3} alt="/" className='w-[54px] mr-4'/>

        </div>
        <div className='py-4'/>
        <p className='text-sm leading-[1.5rem] text-gray font-medium'>
        We launch projects to improve the state of the blockchain community by making it easier to learn, connect, and build in the blockchain space.</p>
    </div>

</div>

        </div>
    </div>
  )
}

export default About