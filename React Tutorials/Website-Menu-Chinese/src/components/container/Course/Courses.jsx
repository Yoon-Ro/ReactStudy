import React from 'react'
import { categories, subcategories } from "../../../Data";
import Categories from "./Categories";
import SubCategories from "./Subcategories";



const Courses = () => {



  return (
    <div className='section' id='courses'>


<h1 className='text-6xl font-bold text-[#c02727]  py-4 my-4 border-t-4 border-b-4 text-center'>THIS WEEK'S SPECIAL!</h1>

          <div 

className='grid md:grid-cols-2  md:gap-16 gap-4'>
  {categories.map((category) => {
    return <Categories key={category.id} {...category}/>
  })}
</div>



<div className='border-[#b41414] border-4 p-8 rounded-2xl my-16'>



<div className='flex flex-row'>
<h1 className='text-center text-4xl font-bold text-[#c02727] mx-auto border-b-4 border-dashed pb-2 mb-8'>Create your own combo: 锅包锅包</h1>
</div>
    <div 

    className='grid md:grid-cols-2  md:gap-x-16 '>
      {subcategories.map((category) => {
        return <SubCategories key={category.id} {...category}/>
      })}
    </div>
    </div>


    <div 

className='grid md:grid-cols-3  md:gap-16 gap-4'>
  {categories.map((category) => {
    return <Categories key={category.id} {...category}/>
  })}
</div>

    </div>
  )
}

export default Courses