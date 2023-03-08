import React from 'react'
import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
import { accordions, accordions2 } from "../../Data";


const Cards = () => {
  return (
    <div className=''>
        <div className='section'>
        <div className=' text-black text-center'>
    <h1 className='text-3xl font-bold py-8'>More Ways to Use Your Card</h1>

<div className='grid grid-cols-3 gap-4 text-center'>
    <div className='col-span-1 bg-white px-4 py-8 '>
        <h1 className='py-4  text-xl font-medium'>Automatically pay bills</h1>
        <p className='py-4  leading-6'>Pre-Authorized Payment on your TD Credit Card and stay on top of your payments.</p>
        <button className='my-4 w-full py-4 border-[4px] border-[#0051A5] text-[#0051A5] font-bold  '>
        Open Account
        </button>
    </div>

    <div className='col-span-1 bg-white px-4 py-8'>
        <h1 className='py-4  text-xl font-medium '>Add Additional Cardholders</h1>
        <p className='py-4  leading-6'>Share the benefits of your TD Credit Card Account with up to 3 Additional Cardholders.</p>
        <button className='my-4 w-full py-4 border-[4px] border-[#0051A5] text-[#0051A5] font-bold  '>
        Open Account
        </button>
    </div>

    <div className='col-span-1 bg-white px-4 py-8'>
        <h1 className='py-4  text-xl font-medium'>Make Contactless Purchases</h1>
        <p className='py-4  leading-6'>Easily turn purchases of $100 or more into manageable 6, 12 or 18 month Payment Plans.</p>
                <button className='my-4 w-full py-4 border-[4px] border-[#0051A5] text-[#0051A5] font-bold  '>
        Open Account
        </button>
    </div>

</div>
    </div>
        </div>

<div className='section text-center pt-16 pb-8'>
<h1 className='text-3xl font-bold py-8'>More Ways to Use Your Card</h1>

</div>
        <div className=''>
        
            
<div className=' grid grid-cols-2 section gap-[4rem]'>
        <div className='col-span-1'>
          {accordions.map((accordion) => {
            return <Accordion key={accordion.id} {...accordion} />;
          })}
          </div>
          <div className='col-span-1'>
          {accordions2.map((accordion) => {
            return <Accordion2 key={accordion.id} {...accordion} />;
          })}
          </div>
          </div>
          <p className='text-center py-8'>View FAQs</p>
          </div>

        
    </div>
  )
}

export default Cards