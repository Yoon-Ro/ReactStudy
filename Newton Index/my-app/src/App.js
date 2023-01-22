
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Iphone from './components/Iphone';
import CTA from './components/CTA';
import CTA2 from './components/CTA2'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <CTA2/>
      <CTA/>
      <Iphone />
      <Footer/>
      
    </div>
  );
}

export default App;
