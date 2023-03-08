import React from 'react'
import icon1 from "../../assets/cq5dam.web.1280.1280.avif";
import icon2 from "../../assets/travel_icon.avif";

const Feature = () => {
  return (
    <div className=' mt-[-30px]'> 

{/* SUB MENU */}
    <div className='section px-20'>
          <div className='flex justify-evenly bg-white px-4 shadow-lg text-sm rounded-full border-2 border-[#eeeeee]/40' >
            <div className='py-4 px-4 border-b-4 border-[#0051A5] font-bold'>Overview</div>

            <div className='py-4 px-4'>Earn and Redeem</div>

            <div className='py-4 px-4'>Debit and Credit Cards</div>

            <div className='py-4 px-4'>Partners</div>

            <div className='py-4 px-4'>Scene+ App</div>

            <div className='py-4 px-4'>Program Tips</div>


      </div>
      </div>
{/* TEXT & GRTD */}
    <div className='section px-16  py-16'>
        {/* TEXT */}
        <h1 className='text-4xl font-bold text-center py-2'>Earn points faster with Royale Avion</h1>
        <p className='text-sm  text-center py-2'>Royale Bank offers the only credit and debit cards that allow you to earn Avion points on every transaction 
</p>


<div className='grid grid-cols-2 bg-white py-16 gap-4'>
    <div className='col-span-1 gap-4 px-12 py-8 bg-[#e6e6e632] rounded-2xl relative'>
    <span className='bg-[#0051A5] px-4 py-2 rounded-full text-xs text-white absolute top-4 right-4'>NEW!</span>

        <img src={icon1} alt="/" className='w-[72px] my-4'/>
        <div className='flex gap-4'>  <p className='text-2xl '>Grocery</p></div>
        <p className='text-sm leading-6  py-4'>Earn points through weekly flyer events and everyday product in stores, and online with Voilà by Sobeys and Voilà by Safeway.</p>

    </div>


    <div className='col-span-1 gap-4 px-12 py-8 bg-[#e6e6e632] rounded-2xl '>

<img src={icon2} alt="/" className='w-[72px] my-4'/>
<p className='text-2xl '>Travel</p>
<p className='text-sm leading-6  py-4'>Earn 3 points for every $1 spent on hotel stays and car rentals when booked through Scene+ Travel1, Powered by Expedia. </p>

</div>

    
<div className='col-span-1 gap-4 px-12 py-8 bg-[#e6e6e632] rounded-2xl '>

<img src={icon2} alt="/" className='w-[72px] my-4'/>
<p className='text-2xl '>Shopping</p>
<p className='text-sm leading-6  py-4'>Earn points when you shop online with Scene+ Rakuten®^, featuring new offers from different stores each week.</p>

</div>

    
<div className='col-span-1 gap-4 px-12 py-8 bg-[#e6e6e632] rounded-2xl '>

<img src={icon2} alt="/" className='w-[72px] my-4'/>
<p className='text-2xl '>Entertainment</p>
<p className='text-sm leading-6  py-4'>Earn points on movie tickets, food and drinks at Cineplex Theatres, the Cineplex Store♢, The Rec Room♢, and Playdium♢. </p>

</div>


    




</div>




</div>
{/* FEATURE 2 */}
<div className='bg-[#0051A5]'>
    <div className='section text-white text-center py-8'>
    <h1 className='text-3xl font-bold py-8'>Groceries are a go with Avion</h1>
    <p className='pb-8 w-3/4 mx-auto'>Available now in most of Canada and coming soon to Quebec in early 2023. Members can earn and redeem Scene+ points for groceries, pharmacy, and more at participating grocery stores including Sobeys, Foodland, FreshCo, Chalo! FreshCo and more.</p>
    </div>
</div>
</div>
  )
}

export default Feature