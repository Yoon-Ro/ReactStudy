import React from 'react'
import profile1 from "../../assets/profile1.jpg";
import review1 from "../../assets/reviewimage1.png";
import CTA from "./CTA";


const Review = () => {
  return (
    <div className=' bg-white'>
        <div className='section py-24'>
<div className='grid grid-cols-6'>
    <div className='col-span-3 py-24 px-8'>
        <div className='relative'>
        <div className='bg-[#e4e4e4] px-8 flex flex-col gap-8 py-8 relative z-20'>
            <img src={profile1} alt="/" className='w-1/6'/>
            <h1 className='text-3xl text-Purple font-bold tracking-wide '>SHANEL HUANG</h1>
            <p className='leading-[1.5rem] text-sm'>The network and tight-knit community at BAF was super valuable to me when I was first exploring the blockchain space.</p>
        </div>

        <div className='bg-Purple w-64 h-64 z-10 absolute top-[-2rem] left-[-2rem] ' />
        </div>


        <div className='relative mt-48'>
        <div className='bg-[#e4e4e4] px-8 flex flex-col gap-8 py-8 relative z-20'>
            <img src={profile1} alt="/" className='w-1/6'/>
            <h1 className='text-3xl text-Purple font-bold tracking-wide '>SHANEL HUANG</h1>
            <p className='leading-[1.5rem] text-sm'>The network and tight-knit community at BAF was super valuable to me when I was first exploring the blockchain space.</p>
        </div>

        <div className='bg-[#6bfa96] w-64 h-64 z-10 absolute bottom-[-2rem] right-[-2rem] ' />
        </div>

        <div className='relative mt-48'>
        <div className='bg-[#e4e4e4] px-8 flex flex-col gap-8 py-8 relative z-20'>
            <img src={profile1} alt="/" className='w-1/6'/>
            <h1 className='text-3xl text-Purple font-bold tracking-wide '>SHANEL HUANG</h1>
            <p className='leading-[1.5rem] text-sm'>The network and tight-knit community at BAF was super valuable to me when I was first exploring the blockchain space.</p>
        </div>

        <div className='bg-[#faf86b] w-64 h-64 z-10 absolute bottom-[-2rem] left-[-2rem] ' />
        </div>

        <div className='relative mt-48'>
        <div className='bg-[#e4e4e4] px-8 flex flex-col gap-8 py-8 relative z-20'>
            <img src={profile1} alt="/" className='w-1/6'/>
            <h1 className='text-3xl text-Purple font-bold tracking-wide '>SHANEL HUANG</h1>
            <p className='leading-[1.5rem] text-sm'>The network and tight-knit community at BAF was super valuable to me when I was first exploring the blockchain space.</p>
        </div>

        <div className='bg-[#6d6bfa] w-64 h-64 z-10 absolute top-[-2rem] right-[-2rem] ' />
        </div>

        
        <div className='relative mt-48'>
        <div className='bg-[#e4e4e4] px-8 flex flex-col gap-8 py-8 relative z-20'>
            <img src={profile1} alt="/" className='w-1/6'/>
            <h1 className='text-3xl text-Purple font-bold tracking-wide '>SHANEL HUANG</h1>
            <p className='leading-[1.5rem] text-sm'>The network and tight-knit community at BAF was super valuable to me when I was first exploring the blockchain space.</p>
        </div>

        <div className='bg-[#fa6bee] w-64 h-64 z-10 absolute top-[1rem] right-[-2rem] ' />
        </div>





    </div>


<div className="col-span-1"/>


    <div className='col-span-2 sticky top-32 self-start'>
        <div>
        <img src={review1} alt="/" className='px-16 relative z-20'/>
        <div className='bg-Purple w-full h-64 z-10 absolute top-24' />
        </div>
<div className='py-24'>
        <h1 className='text-4xl text-Purple font-bold font-Sigma'>THEY LOVE US</h1>
        <p className='py-8 leading-[1.5rem] text-sm'>How we helped aspiring blockchain students navigate their journey in their careers.</p>
        <button className=' py-4 px-8 text-white bg-Purple text-xl font-medium'>Donate</button>
        </div>

    </div>
</div>
        
        </div>

        <CTA/>
    </div>
  )
}

export default Review