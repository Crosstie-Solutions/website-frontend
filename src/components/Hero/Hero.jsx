import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";
import HeroSlider from "../HeroSlider/HeroSlider";



function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-white large:pl-0 large:w-100vw large:h-auto hero small:w-100vw small:h-auto large:mt-4 small:py-5 large:py-0">

      <HeroSlider />
      
      <div className="absolute z-10 flex flex-col items-start large:justify-start large:gap-1 w-100 h-100 small:px-2 large:pl-10 large:pt-3 small:gap-2 small:justify-center">
        
        
        <div className="flex items-center w-auto gap-1 pr-2 large:pl-0.5 rounded-20 bg-crossYellow large:h-30px small:h-20px large:text-13px small:text-13px">
          
          <div className="flex items-center justify-center px-1 bg-white rounded-20 text-crossYellow">
            NEW
          </div>
          
          <div className="">BRINGING THE BEST OF</div>
        </div>



        <h1 className="font-extrabold large:text-35px large:w-50 large:leading-8 small:leading-5 small:w-100 small:text-17px large:mt-2">
          PEOPLE DEVELOPMENT & MANAGEMENT CONSULTING
        </h1>

        <p className="font-normal large:w-40 small:w-100 small:text-11px large:text-17px">
          Your trusted partner in all-around organisation development
        </p>

        <Link to='/about-us/' className="flex items-center justify-center w-auto gap-1 px-1 mt-2 font-bold rounded-10 h-40px bg-buttonOverlay text-15px">
          More About Us <BsArrowRight className="text-20px"/>
        </Link>


        <div className="flex flex-row w-auto large:mt-4 large:gap-10 small:gap-1">
          
          <div className="pl-1 border-l border-crossYellow">
            <h1 className="w-auto h-auto font-extrabold large:text-30px small:text-15px">10+</h1>
            <p className="text-11px">Years Experience</p>
          </div>

          <div className="pl-1 border-l border-crossYellow">
            <h1 className="w-auto h-auto font-extrabold large:text-30px small:text-15px">300+</h1>
            <p className="text-11px">Projects Completed</p>
          </div>

          <div className="pl-1 border-l border-crossYellow">
            <h1 className="w-auto h-auto font-extrabold large:text-30px small:text-15px">95%</h1>
            <p className="text-11px">Client Satisfaction</p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
