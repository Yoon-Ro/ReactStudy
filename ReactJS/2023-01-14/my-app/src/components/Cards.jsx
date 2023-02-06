import React from 'react'
import ig from '../assets/igpost-1.png';
import charts from '../assets/NEWTON-CHART.png';
import img1 from '../assets/NEWTON-FEATURE-1.png';
import img2 from '../assets/NEWTON-FEATURE-2.png';
import img3 from '../assets/NEWTON-FEATURE-3.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div>
        <img className='w-[60%] mx-auto mt-[-16rem] bg-slate-50 shadow-xl' src={charts} alt="/"/>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-48'>

            <div className='w-full flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-40 mx-auto bg-slate-50' src={img1} alt="/"/>
                <h2 className='text-3xl font-bold text-[#0012B8] text-center py-8 px-24'>Real-time 
price data </h2>
                <div className='text-center font-medium'>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin fauci</p>
                </div>
              
            </div>

            <div className='w-full flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-40 mx-auto bg-slate-50' src={img2} alt="/"/>
                <h2 className='text-3xl font-bold text-[#FC8D0A] text-center py-8 px-8'>Find the correct 
& reasonable price</h2>
                 <div className='text-center font-medium'>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin fauci</p>
                
                </div>
              
            </div>

            <div className='w-full flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-40 mx-auto bg-slate-50' src={img3} alt="/"/>
                <h2 className='text-3xl font-bold text-[#D3302A] text-center py-8 px-8'>Direct support
 to sell or purchase</h2>
                  <div className='text-center font-medium'>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin fauci</p>
                </div>
                
               
            </div>

        </div>


    </div>
  )
}

export default Cards
