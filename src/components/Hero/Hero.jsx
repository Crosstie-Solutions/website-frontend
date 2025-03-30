import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";



function Hero() {
  return (
    <div className="flex flex-col items-start justify-center text-white large:pl-15 large:w-100vw large:h-500px hero small:w-100vw small:h-65vh">
      
      <div className="z-10 flex flex-col items-start justify-center large:gap-1 w-100 h-100 small:px-2 large:p-0 small:gap-2">
        
        
        <div className="flex items-center w-auto gap-1 pr-2 large:pl-1 rounded-20 bg-crossYellow large:h-40px small:h-20px large:text-17px small:text-13px">
          <div className="flex items-center justify-center px-1 bg-white rounded-20 text-crossYellow">
            NEW
          </div>
          <div className="">BRINGING THE BEST OF</div>
        </div>



        <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-100 small:text-20px">
          PEOPLE DEVELOPMENT & MANAGEMENT CONSULTING
        </h1>

        <p className="font-extralight large:w-50 small:w-100 small:text-11px large:text-15px">
          Discover new skills and interests with our extensive course collection
        </p>

        <Link to='/about-us/' className="flex items-center justify-center w-auto gap-1 px-1 mt-2 font-bold rounded-10 h-40px bg-buttonOverlay text-15px">
          More About Us <BsArrowRight />
        </Link>


        <div className="flex flex-row w-auto mt-4 large:gap-10 small:gap-1">
          
          <div className="pl-1 border-l border-crossYellow">
            <h1 className="w-auto h-auto font-extrabold large:text-30px small:text-15px">10+</h1>
            <p className="text-11px">Years Experience</p>
          </div>

          <div className="pl-1 border-l border-crossYellow">
            <h1 className="w-auto h-auto font-extrabold large:text-30px small:text-15px">500+</h1>
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
