import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1240px] m-auto py-16 px-4 md:grid-cols-2 grid gap-4'>
        {/* LEFT SIDE */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover  w-full h-full  p-2 '
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt='/'/>
            <img className='row-span-2 object-cover  w-full h-full  p-2 '
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt='/'/>
            <img className='row-span-2 object-cover  w-full h-full  p-2 '
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt='/'/>
            <img className='row-span-3 object-cover  w-full h-full  p-2 '
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt='/'/>
            <img className='row-span-2 object-cover  w-full h-full  p-2 '
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt='/'/>
        </div>
        {/* RIGHT SIDE */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:6xl py-4'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti earum eveniet in dolorum fugiat quod tenetur voluptatibus beatae laborum enim deserunt soluta, cum sint unde inventore et. Expedita, quos!</p>
            <p className='pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quas aspernatur illo enim at ab ducimus, fugiat quo esse magnam pariatur ut possimus fugit neque, nisi sed. Tenetur, explicabo? Labore?</p>
            <div>
                <button className='border-black mr-4 hover:shadow-md'>Learn More</button>
                <button className='bg-black text-white hover:shadow-md'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan