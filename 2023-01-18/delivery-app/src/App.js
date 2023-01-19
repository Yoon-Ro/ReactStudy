import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HeadlineCards from './components/HeadlineCards.jsx';
import Foods from './components/Foods.jsx';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards/>
      <Foods/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
