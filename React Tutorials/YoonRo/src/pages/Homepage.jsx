import React from 'react'
import {
    Navbar,
    Home,
    About,
    Footer,
    Work,
    About2
  } from "../components/index"
  import { ParallaxProvider } from 'react-scroll-parallax';

const Homepage = () => {
  return (
    <ParallaxProvider>
    <div className=" font-Gloock bg-white">

      <Home />
      <Work/>
      <About />
      <About2 />

 
    </div>
    </ParallaxProvider>
  )
}

export default Homepage