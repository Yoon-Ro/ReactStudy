import React from 'react'

const Text = () => {

  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });

  return (
    <div>
     
     <div className="transform">
      <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#services">
        <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Social Media — Email Marketing — Digital Advertising</span>
      </div>
    </div>

    </div>
  )
}

export default Text