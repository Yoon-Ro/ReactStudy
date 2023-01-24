import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img 
        className='w-full h-screen top-0 left-0 object-cover'
        src='https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' 
        alt='/'/>
        <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1240px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl py-2'>Private Beachses & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi sint, ipsum qui quia impedit odit numquam suscipit reprehenderit, tenetur deserunt voluptatem temporibus iste. Rem atque praesentium sequi mollitia sapiente?</p>
                <button className='bg-white text-black my-2 font-bold'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero