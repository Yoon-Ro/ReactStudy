import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='bg-white w-full md:py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto md:mt-[-3rem] mt-2 bg-white' src={Single} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className="text-4xl  text-center font-bold">$149</p>
                <div className='font-medium  text-center '>
                    <p className='py-2 border-b  mt-8'>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                </div>
                <button className='bg-gray-500 w-[200px] rounded-lg font-medium text-medium mx-auto my-8 px-6 py-4 text-white'> Get Started </button>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto md:mt-[-3rem] mt-2' src={Double} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className="text-4xl  text-center font-bold">$149</p>
                <div className='font-medium  text-center '>
                    <p className='py-2 border-b  mt-8'>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                </div>
                <button className='bg-gray-800 w-[200px] rounded-lg font-medium text-medium mx-auto my-8 px-6 py-4 text-white'> Get Started </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto md:mt-[-3rem] mt-2 bg-white' src={Triple} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className="text-4xl  text-center font-bold">$149</p>
                <div className='font-medium  text-center '>
                    <p className='py-2 border-b  mt-8'>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                    <p className='py-2 border-b '>500gb</p>
                </div>
                <button className='bg-gray-500 w-[200px] rounded-lg font-medium text-medium mx-auto my-8 px-6 py-4 text-white'> Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Cards