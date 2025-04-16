import React from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { HiArrowLongRight } from "react-icons/hi2";
import AboutHero from "../../components/AboutHero/AboutHero";



function OurStoryPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12">
      
     <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      {/* <div className="flex items-center justify-center h-auto large:mt-5 large:gap-5 small:flex-col-reverse large:flex-row w-100 small:gap-1">
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
      </div> */}

      <div className="flex items-center justify-center large:h-380px large:mt-4 large:gap-0 small:flex-col-reverse large:flex-row small:w-90vw large:w-83vw small:gap-1 small:h-auto">
      
        <img src={PHOTOS.how} alt="logo"  className="border-2 border-t-crossLightPurple large:w-25 large:h-100 small:h-300px small:w-80 border-l-crossLightPurple border-b-crossLightPurple"/>
        
        <div className="flex flex-col justify-center gap-2 shadow-xl large:p-3 h-100 large:w-75 small:w-90vw bg-purple-50 rounded-10 small:p-1 ">
          <p className="leading-loose">Founded in 2013, <span className="font-semibold">Crosstie Solutions</span> is a trusted partner in <span className="font-semibold">people development, organizational growth</span>, and management consulting.
          From inception, our resilience has come from one clear belief: <span className="font-semibold">transformational change begins with people</span>, and we are committed to helping individuals and organizations understand the possibility of this change.
          Our vision is to optimize talents and strategies, contributing to a future where business growth is sustainable and human-centered. </p>


          <p className="leading-loose">Our passionate team brings expertise and a personal touch to every engagement, creating real impact through learning, coaching, and strategy.
          We believe that real and constant success is found in <span className="font-semibold">Transformation, Experience, and Excellence,</span> and we work to achieve that for both our clients and our team.
          These values are the heart of the <span className="font-semibold">Crosstie's existence</span>, guiding how we work, serve, and grow together.
          We are committed to <span className="font-semibold">continuous improvement</span> in ourselves, in our work, and in the results we deliver.
          </p>
        </div>

      </div>

      <div className="flex flex-col h-auto gap-1 p-2 border rounded w-83vw border-crossFooterText">
        <h3 className="font-bold text-20px">
          Crosstie’s Story Of Destination Training
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

      <div className="flex flex-col h-auto gap-1 p-2 border rounded w-83vw border-crossFooterText">
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

      <div className="flex items-center justify-center h-auto large:mt-2 large:gap-2 small:flex-col-reverse large:flex-col w-83vw small:gap-1">

      <h2 className="font-bold text-20px">Our Journey In Visual</h2>
      
        <img
          src={PHOTOS.journey}
          alt="logo"
          className="border large:w-100 large:h-400px small:h-40px small:w-150px rounded-5 border-crossFooterText"
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
