import React from 'react'
import Image1 from '../assets/image_8.png';
import problem1 from '../assets/problem1.png';
import problem2 from '../assets/problem2.png';
import problem3 from '../assets/problem3.png';
import table from '../assets/table.png';
import journey from '../assets/USERJOURNEY.png';
import logo1 from '../assets/LOGO.png';
import logo2 from '../assets/LOGO_1.png';
import logo3 from '../assets/LOGO_2.png';


const Newton = () => {
  return (
    <div className='w-[1420px] mx-auto mt-48 py-32'>
        <div>
     <h1 className='text-center text-xl tracking-wider  w-fit mx-auto px-8 py-2 bg-black/10 rounded-full'>IPHONE PRICE INDICE
     </h1>
     <h1 className='text-center w-fit mx-auto text-6xl py-4 leading-[4rem]'>Pricing old iphones easier <br/>with Newton Index.</h1>
     <h1 className='text-center text-3xl tracking-wider  w-fit mx-auto '>Save your time to find correct price
     </h1>
     <img src={Image1} alt="/" className='w-2/3 mx-auto my-32 shadow-xl'/>

     {/* OVERVIEW */}

     <h1 className='py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>Overview
     </h1>

<div className='pt-4 pb-8 w-3/5 mx-auto tracking-wider text-xl leading-[2rem]'>Zoho Sheet is an online SaaS-based spreadsheet application in the Zoho docs suite. Given the role of the product designer, I was responsible for designing mobile products for the existing web application. </div>
</div>

<div className='grid grid-cols-3 gap-4 w-3/5 mx-auto'>
    <div className='col-span-1'>
        <h1 className='text-xl border-y-2  py-4'>Participants</h1> <br/>
        Yoon Ro <br/>
        Jiwoo Shim
    </div>
    <div className='col-span-1'>
        <h1 className='text-xl border-y-2  py-4'>Timeline</h1> <br/>
        Jan 2023 ~ Mar 2023
    </div>
    <div className='col-span-1'>
        <h1 className='text-xl border-y-2  py-4'>Platform</h1> <br/>
        Web
    </div>
</div>

{/* PROBLEM */}
<h1 className='mt-64 py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>1. Problem Definition
     </h1>

     <h1 className='text-center  mx-auto text-6xl py-4 leading-[4rem] w-4/5'>When finding good price, users spend a significant amount of time filtering.</h1>

<div className='grid grid-cols-3 gap-8 py-16'>
<div className='col-span-1 group relative overflow-y-clip'>
    <img src={problem1} alt="/" className='w-1/3 absolute bottom-[-16rem] group-hover:bottom-[1rem] trnasition-all duration-300 right-0'/>
    <h1 className='text-4xl py-8'>Opague & Uncertain</h1>
    <p>The information on pricing for used iPhones is not transparent and there are too many price ranges that differ from one another.</p>
    </div>
    <div className='col-span-1 group relative overflow-y-clip'>
    <img src={problem2} alt="/" className='w-1/3 absolute bottom-[-16rem] group-hover:bottom-[1rem] trnasition-all duration-300 right-0'/>
    <h1 className='text-4xl py-8'>Time-consuming</h1>
    <p>To measure the price of an iPhone by comparing it to other resources and prices , and there is no quick information available at a glance, which takes time to choose the best price and product.</p>
    </div>
    <div className='col-span-1 group relative overflow-y-clip'>
    <img src={problem3} alt="/" className='w-1/3 absolute bottom-[-16rem] group-hover:bottom-[1rem] trnasition-all duration-300 right-0'/>
    <h1 className='text-4xl py-8'>Platform diversity</h1>
    <p>Each platform has different purposes and methods, and they list related products rather than a specific product.</p>
    </div>
</div>

<div className='text-center border-2 rounded-full w-2/3 mx-auto mt-16 group hover:bg-black transition-all duration-300 hover:shadow-xl'>
<p className='pt-8 pb-4 text-4xl group-hover:text-white'>Initial Idea</p>
<p className='pt-4 pb-8 text-xl group-hover:text-white'>Ways to minimize time and make price comparisons <br/>and product selection more intuitive for desired items.</p>
</div>

{/* COMPETITVE */}
<h1 className='mt-64 py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>2. RESEARCH
     </h1>



<div className='pt-4 pb-8 w-3/5 mx-auto tracking-wider text-xl leading-[2rem]'>

We looked at three types of products to compare them. We checkex how the chart works and looks in a table. All three products have similar basic functions and information, but they have some differences. The interactive chart did not work perfectly. <span className='hover:bg-yellow/40  hover:m-4 hover:p-1 rounded-xl transition-all duration-150 underline'>None of the products allowed us to compare prices by model or specifications.</span></div>

<img src={table} alt="/" className='w-2/3 mx-auto rounded-xl shadow-xl hover:scale-125 transition-all duration-300'/>

   

   {/* USER INTERVIEW  */}
<h1 className='mt-32 py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>3. USER INTERVIEW
     </h1>

     <div className='pt-4 pb-8 w-3/5 mx-auto tracking-wider text-xl leading-[2rem]'>We've conducted interviews with suers to discover the problems, needs, experiences that the user faces in similar platforms </div>
<div className='grid grid-cols-5 gap-4 w-4/5 mx-auto py-8'>
    {/* top */}
    <div className='col-span-2 border-2 border-black border-dashed rounded-xl p-4'>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1  className='py-8 bg-orange-200 px-4  rounded-2xl'>"I was looking for a used iPhone online, but all of the listings were really expensive. Unfortunately, I couldn't find a good deal."</h1>
    
    </div>
    <div className='col-span-2 border-2 border-black border-dashed rounded-xl p-4'>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1  className='py-8 bg-[#e7d488] px-4  rounded-2xl'>"I had a tough time searching for used iPhones online. The selection was really limited and I couldn't find one that met my criteria. Unfortunately, I had to end up buying a new phone."</h1>
  
    </div>
    <div className='col-span-1'></div>
    {/* bottom */}
    <div className='col-span-1'></div>

    <div className='col-span-2 border-2 border-black border-dashed rounded-xl p-4'>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1  className='py-8 bg-blue-200 px-4  rounded-2xl'>"I spent hours searching for a used iPhone online, and I wasn’t sure the price was reasonable."</h1>

    </div>
    <div className='col-span-2 border-2 border-black border-dashed rounded-xl p-4'>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1  className='py-8 bg-[#8ee788] px-4  rounded-2xl'>"I found a used iPhone online that seemed too good to be true, and unfortunately it wasn’t."</h1>
           </div>
</div>
  {/* USER INTERVIEW  */}
  <h1 className='mt-32 py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>4. Journey Mapping
     </h1>
     <img src={journey} alt="/" className='w-2/3 mx-auto rounded-xl hover:scale-125 transition-all duration-150 hover:shadow-xl'/>

       {/* Branding  */}
  <h1 className='mt-32 py-8 text-center text-3xl tracking-wider  w-fit mx-auto'>5. Branding
     </h1>
     <div className='pt-4 pb-8 w-3/5 mx-auto tracking-wider text-xl leading-[2rem] text-center'>The Newton Index provides a comprehensive price chart that allows users to compare the prices of different secondary iPhones. </div>
     <img src={logo1} alt="/" className='w-1/2 mx-auto rounded-xl hover:scale-125 transition-all duration-150 hover:shadow-xl py-8'/>
     <div className='grid grid-cols-5 gap-8 w-1/2 mx-auto py-4 px-8 items-center border-dashed border-2 border-black/40 rounded-2xl mt-16'>
        <div className='col-span-1'>
            <img src={logo2} alt="/"/>
        </div>
        <div className='col-span-4'>
        <h1 className='text-xl pb-4'>Falling Apple</h1>
        <p>It's named after Sir Isaac Newton, who is famous for discovering the laws of gravity through his observation of a falling apple which represent the decend price of secondary iPhone.</p>
        </div>
     </div>
     <div className='grid grid-cols-5 gap-8 w-1/2 mx-auto py-4 px-8 items-center border-dashed border-2 border-black/40 rounded-2xl mt-8'>
        <div className='col-span-1'>
            <img src={logo3} alt="/"/>
        </div>
        <div className='col-span-4'>
        <h1 className='text-xl pb-4'>Arrow</h1>
        <p>It's named after Sir Isaac Newton, who is famous for discovering the laws of gravity through his observation of a falling apple which represent the decend price of secondary iPhone.</p>
        </div>
     </div>

    </div>
  )
}

export default Newton