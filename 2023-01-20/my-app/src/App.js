import Navbar from './components/Navbar.jsx';
import React from 'react';
import Hero from './components/Hero.jsx';
import Category from './components/Category.jsx';
import CTA from './components/CTA.jsx';
import Advant from './components/Advant.jsx';


function App() {
  return (
    <div className="bg-black">
        <Navbar/>
        <Hero/>
        <Category/>
        <Advant/>
        <CTA/>
    </div>
  );
}

export default App;
