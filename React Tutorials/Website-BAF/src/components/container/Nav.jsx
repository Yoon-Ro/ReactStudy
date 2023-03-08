import React from 'react'
import logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <div className=' py-8 border-b border-white/10 sticky top-0 z-50 bg-Purple'>
        <div className='section flex justify-between items-center text-white'>
            <div>
                <img src={logo} alt="/"/></div>
            <div >
                <ul  className='flex justify-evenly text-sm'>
                    <li className='px-4'>About</li>
                    <li className='px-4'>Programs</li>
                    <li className='px-4'>Resource Hub</li>
                    <li className='px-4'>Wall Of Love</li>
                    <li className='px-4'>Event</li>
                </ul>
            </div>
            <div>
                <button className='bg-white py-4 px-8 text-Purple text-sm font-medium mx-4'>Join BAF</button>
                <button className=' py-4 px-8 border border-white text-sm font-medium'>Donate</button>
            </div>

        </div>
    </div>
  )
}

export default Nav