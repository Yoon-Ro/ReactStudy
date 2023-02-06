import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1240px] h-[500px] bg-black-100  mx-atuo my-20  pt-16 lg:mb-[20%]  md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1  col-span-2'>
            <h3 className='text-2xl py-2'>Find Interior Rooms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusamus voluptatem exercitationem. Voluptates nam cum dicta doloribus error vero eaque ducimus omnis, similique eligendi fugit neque eius alias ipsam reprehenderit.</p>

        </div>


{/* IMAGE */}
        <div className='grid grid-cols-2 col-span-2 gap-2'>
<img className='object-cover w-full h-full'
src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='/'/>
<img className='object-cover w-full h-full row-span-2'
src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='/'/>
<img className='object-cover w-full h-full'
src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='/'/>
        </div>
    </div>
  )
}

export default Rooms