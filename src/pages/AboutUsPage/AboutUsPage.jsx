import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./AboutUsPage.css";
import { PHOTOS } from "../../assets/images";
import MobileButtonSwiper from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import ButtonSwiper from "../../components/ButtonSwiper/ButtonSwiper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurReach from "../../components/OurReach/OurReach";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";




function AboutUsPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 mt-8 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto">
      
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-100vh small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">

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
        <ButtonSwiper />
        <MobileButtonSwiper />
      </div>

      <div className="flex items-center justify-center h-auto large:mt-5 large:gap-20 small:flex-col-reverse large:flex-row w-100 small:gap-1">
        <div className="large:w-40 h-auto bg-[#F9F9F9] p-2 rounded small:w-90vw">
         <p className="leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius excepturi labore magnam odit, magni quo eos, ipsa quis cupiditate porro similique deserunt voluptatibus iure laudantium perspiciatis rerum ea eum autem!</p>
        </div>

        <img src={PHOTOS.logo} alt="logo"  className="large:-rotate-90 large:w-200px large:h-50px small:h-40px small:w-150px"/>
      </div>

      <WhoWeAre />

      <OurReach />

      <WhyChooseUs />
    </div>
  );
}

export default AboutUsPage;
