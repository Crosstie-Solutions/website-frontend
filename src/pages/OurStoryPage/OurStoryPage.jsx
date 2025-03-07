import React from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import MobileButtonSwiper from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import ButtonSwiper from "../../components/ButtonSwiper/ButtonSwiper";
import { HiArrowLongRight } from "react-icons/hi2";



function OurStoryPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto">
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-100vh small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about3} alt="photos" className="w-100 h-100" />

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-100vh large:w-100vw aboutOne small:h-200px small:pl-3">
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-20px">
            TRANSFORMING BUSINESS THROUGH PEOPLE DEVELOPMENT
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-13px large:text-15px">
            Discover new skills and interests with our extensive course
            collection
          </p>
        </div>

        {/* <Link className="flex items-center justify-center w-auto gap-1 px-1 mt-2 rounded-10 h-30px bg-buttonOverlay text-15px">
          Download our corporate presentation <BsArrowRight />
        </Link> */}
      </div>

      <div className="flex flex-col items-center h-auto w-100">
        <ButtonSwiper />
        <MobileButtonSwiper />
      </div>

      <div className="flex items-center justify-center h-auto large:mt-5 large:gap-5 small:flex-col-reverse large:flex-row w-100 small:gap-1">
        <img
          src={PHOTOS.story}
          alt="logo"
          className="large:w-350px large:h-400px small:h-40px small:w-150px rounded-5"
        />

        <div className="large:w-40 h-auto bg-[#F9F9F9] p-2 rounded small:w-90vw">
          <p className="leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            excepturi labore magnam odit, magni quo eos, ipsa quis cupiditate
            porro similique deserunt voluptatibus iure laudantium perspiciatis
            rerum ea eum autem!
          </p>
        </div>
      </div>

      <div className="flex flex-col h-auto gap-1 p-2 border rounded w-80 border-crossFooterText">
        <h3 className="font-bold text-20px">
          Crosstie’s Story of destination training
        </h3>

        <ul className="h-auto pl-2 list-disc w-80">
          <li>
            Lorem ipsum dolor sit amet aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </li>
          <li>
            Lorem ipsum dolor aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </li>
        </ul>
      </div>

      <div className="flex flex-col h-auto gap-1 p-2 border rounded w-80 border-crossFooterText">
        <ul className="h-auto pl-2 list-disc w-80">
          <li>
            Lorem ipsum dolor sit amet aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </li>
          <li>
            Lorem ipsum dolor aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center h-auto large:mt-5 large:gap-5 small:flex-col-reverse large:flex-col w-100 small:gap-1">

      <h2 className="font-bold text-20px">Our Journey in visual</h2>
      
        <img
          src={PHOTOS.journey}
          alt="logo"
          className="border large:w-60 large:h-300px small:h-40px small:w-150px rounded-5 border-crossFooterText"
        />

        <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
          <h4 className="font-bold text-20px">Ready To Get Started?</h4>
          <Link to="/our-courses" className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple">
            Explore Our Courses <HiArrowLongRight className="text-20px" />
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default OurStoryPage;
