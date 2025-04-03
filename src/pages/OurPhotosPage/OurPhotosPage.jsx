import React from "react";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import AboutHero from "../../components/AboutHero/AboutHero";



function OurPhotosPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-17 small:mt-12">
        
        <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex flex-row flex-wrap h-auto gap-3 small:px-2 small:justify-center small:w-100 large:w-83vw large:justify-between large:p-0">
        
        <img src={PHOTOS.about1} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about2} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about3} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about4} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about5} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about6} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about7} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
        <img src={PHOTOS.about8} alt="crosstie photo" className="large:w-320px large:h-200px rounded-10"/>
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