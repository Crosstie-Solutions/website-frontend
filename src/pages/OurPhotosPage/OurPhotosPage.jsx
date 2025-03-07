import React from "react";
import ButtonSwiper from "../../components/ButtonSwiper/ButtonSwiper";
import MobileButtonSwiper from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import Feedback from "../../components/Feedback/Feedback";


function OurPhotosPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-10 small:mt-12">
        
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-100vh small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about2} alt="photos" className="w-100 h-100" />

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

      <div className="flex flex-row flex-wrap justify-center h-auto gap-3 px-2 w-100">
        <img src={PHOTOS.about1} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about2} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about3} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about4} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about5} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about6} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about7} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
        <img src={PHOTOS.about8} alt="crosstie photo" className="large:w-300px large:h-200px rounded-10"/>
      </div>

      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">Ready To Get Started?</h4>
        <Link
          to="/our-courses"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default OurPhotosPage;