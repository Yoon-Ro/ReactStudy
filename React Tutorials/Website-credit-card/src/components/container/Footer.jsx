import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0051A5]'>
        <div>
    <div className='section mt-4 py-8 text-white'>
        <div>
            <h1 className=' py-4 text-3xl  text-center'>Need to talk to us directly? <span className='text-yellow text-2xl pl-8'>Contact Us</span></h1>
        </div>
        <div className='grid grid-cols-4 gap-4'>
        <ul className='py-4 col-span-1'>
            <p className='py-4 text-xl'>About RBC</p>
            <li className='py-2'>&gt; Investor Relations</li>
            <li className='py-2'>&gt; Investor Relations</li>
            <li className='py-2'>&gt; Investor Relations</li>
            
        </ul>
        <ul className='py-4 col-span-1'>
            <p className='py-4 text-xl'>Customer Service</p>
            <li className='py-2'>&gt; Apply Online</li>
            <li className='py-2'>&gt; Branch & ATM Locator</li>
            <li className='py-2'>&gt; Voluntary Codes & Public <br/>Commitments</li>
            <li className='py-2'>&gt; 1-800-123-1233</li>

            
        </ul>
        <ul className='py-4 col-span-1'>
            <p className='py-4 text-xl'>Daily Numbers</p>
            <li className='py-2'>&gt; Foreign Exchange</li>
            <li className='py-2'>&gt; Rates</li>
            <li className='py-2'>&gt; Mortgage Rates</li>
            <li className='py-2'>&gt; Mutual Funds</li>
            
        </ul>
        <ul className='py-4 col-span-1'>
            <p className='py-4 text-xl'>Protecting Your Money</p>
            <li className='py-2'>Canada Deposit Insurance <br/>Corporation Member Info</li>

            
        </ul>
        </div>
    </div>
    </div>
    <div className='bg-gray/40 py-4 text-white'>
        <div className='section'>
            <div className='flex justify-between text-sm'>
                <h1>Privacy & Security</h1>
                <h1>Legal</h1>
                <h1>Accessibility</h1>
                <h1>CDIC Member</h1>
                <h1>About Us</h1>
                <h1>We're Hiring</h1>
                <h1>Ad Choices & Personalization</h1>
                <h1>Site Index</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer