import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./AboutUsPage.css";
import { PHOTOS } from "../../assets/images";
import AboutButtonsSwiper from "../../components/AboutButtonsSwiper/AboutButtonsSwiper";



function AboutUsPage() {
  return (
    <div className="relative flex flex-col items-start justify-center gap-3 text-white large:w-100vw large:h-auto small:w-100vw small:h-auto">
      
      <div className="flex flex-col items-start justify-center border border-red-500 large:gap-1 large:w-100vw large:h-100vh small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">

        <img src={PHOTOS.about1} alt="photos" className="w-100 h-100"/>

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-100vh large:w-100vw aboutOne small:h-200px small:pl-3">
          
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-20px">
          TRANSFORMING BUSINESS THROUGH PEOPLE DEVELOPMENT
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-13px large:text-15px">
            Discover new skills and interests with our extensive course collection
          </p>
        </div>

        {/* <Link className="flex items-center justify-center w-auto gap-1 px-1 mt-2 rounded-10 h-30px bg-buttonOverlay text-15px">
          Download our corporate presentation <BsArrowRight />
        </Link> */}
        
      </div>


      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonsSwiper />
      </div>
    </div>
  );
}

export default AboutUsPage;
