import React from "react";
import "./hero.css";
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <div className="newton__header section__padding">
      <div className="newton__header-content">
        <h1>Check and compare the secondary iPhone prices with intractable chart.</h1>
        <p>Compare iPhone prices with our powerful chart. Easily select and compare the prices of all iPhone models based on specification</p>
        <button className="newton__header-button" type='button'>Let's Check</button>
      </div>
      <img className="newton__header-image" src={ heroImage } alt='main_image'/>
    </div>
  );
};

export default Hero;
