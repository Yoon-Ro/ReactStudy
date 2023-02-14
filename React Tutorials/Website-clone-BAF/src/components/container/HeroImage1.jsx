import React, {useState, useEffect} from "react";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero5 from "../../assets/hero5.png";
import hero6 from "../../assets/hero6.png";
import hero7 from "../../assets/hero7.png";
import hero8 from "../../assets/hero8.png";


const HeroImage1 = () => {

    const [active,setActive] = useState(null);

    useEffect(()=> {
const scrollActive = () => { setActive(window.scrollY > 120);};

      window.addEventListener("scroll", scrollActive);
      return() => window.removeEventListener("scroll", scrollActive);
    },{active});


    return <div className="section w-4/5 pt-16">
        <div className="relative">
            <img src={hero1} alt='/' className={`${active ? "right-8 transition-all duration-1000" : "right-0"} absolute`}/>
            <img src={hero2} alt='/' className={`${active ? "right-16 transition-all duration-1000" : "right-0"} absolute`}/>
            <img src={hero3} alt='/' className={`${active ? "left-16 transition-all duration-1000" : "left-0"} absolute`}/>
            <img src={hero4} alt='/' className={`${active ? "right-16 transition-all duration-1000" : "right-0"} absolute`}/>
            <img src={hero5} alt='/' className={`${active ? "top-16 transition-all duration-1000" : "top-0"} absolute`}/>
            <img src={hero6} alt='/' className={`${active ? "left-4 transition-all duration-1000" : "left-0"} absolute`}/>
            <img src={hero7} alt='/' className={`${active ? "left-16 transition-all duration-1000" : "left-0"} absolute`}/>
            <img src={hero8} alt='/' className={`${active ? "left-8 transition-all duration-1000" : "left-0"} relative`}/>
        </div>
    </div>
}

export default HeroImage1