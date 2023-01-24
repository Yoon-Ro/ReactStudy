
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Cards2 from './components/Cards2';
import Iphone from './components/Iphone';
import CTA from './components/CTA';
import CTA2 from './components/CTA2'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards2/>

      <CTA2/>
      <CTA/>
      <Iphone />
      <Footer/>
      
    </div>
  );
}

export default App;
