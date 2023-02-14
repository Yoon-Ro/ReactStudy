import React from 'react'
import footer from "../../assets/footer.png";
import footer1 from "../../assets/footer1.svg";


const Footer = () => {
  return (
    <div className='section'>
<img src={footer} alt="/" className='w-1/5 mx-auto mt-[-4rem] animate-bounce'/>

<div className='w-1/2 mx-auto'>
<h1 className='text-center text-white py-4 text-6xl font-bold'>JOIN BAF TODAY</h1>
<img src={footer1} alt="/"/>
</div>

<div className='flex justify-between py-16'>

    <div className='grid grid-cols-3 gap-4'>
        <ul className='col-span-1'>
            <p className='font-bold text-xl text-white pb-8'>SITEMAP</p>
            <li className='text-white/50 py-2'>Home</li>
            <li className='text-white/50 py-2'>About</li>
            <li className='text-white/50 py-2'>Programs</li>
            <li className='text-white/50 py-2'>Wall of Love</li>
            <li className='text-white/50 py-2'>Membeship</li>
        </ul>
        <ul className='col-span-1'>
            <p className='font-bold text-xl text-white pb-8'>RESOURCES</p>
            <li className='text-white/50 py-2'>Donate</li>
            <li className='text-white/50 py-2'>Join</li>
            <li className='text-white/50 py-2'>Resource Hub</li>
            <li className='text-white/50 py-2'>Newsletter</li>
            <li className='text-white/50 py-2'>Brand Assets</li>
        </ul>
        <ul className='col-span-1'>
            <p className='font-bold text-xl text-white pb-8'>SOCIAL MEDIA</p>
            <li className='text-white/50 py-2'>Youtube</li>
            <li className='text-white/50 py-2'>Facebook</li>
            <li className='text-white/50 py-2'>Twitter</li>
            <li className='text-white/50 py-2'>LinkedIn</li>
            <li className='text-white/50 py-2'>Spotify</li>
        </ul>
    </div>

    <div className='w-[40%]'>
        <h1 className='text-white font-bold text-3xl'>BLOCKCHAIN ACCELARATION FOUNDATION</h1>
        <p className='text-white text-sm leading-7 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi inventore culpa quis? Ut nisi impedit non quis, eius distinctio! Iure quaerat reprehenderit aliquam laudantium aliquid ducimus, modi dolores error.</p>
        <div className='flex gap-4'>
                <button className='bg-white py-4 px-8 text-Purple text-sm font-medium '>Join BAF</button>
                <button className=' py-4 px-8 border border-white text-sm font-medium text-white'>Donate</button>
            </div>

    </div>


</div>



    </div>
  )
}

export default Footer