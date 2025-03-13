import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileSolutionButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { SolutionButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { FaBookOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineDesktop } from "react-icons/ai";
import { TbChartHistogram } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { CrossContext } from "../../Context/CrossContext";
import Webinar from "../../components/Webinar/Webinar";
import { PastFilter, UpcomingFilter } from "../../components/WebinarFilter/WebinarFilter";



function WebinarPage() {

    const {upcomingWebinars, pastWebinars, webinarType, setWebinarType, loadingAllWebinars, filteredUpcoming, filteredPast} = useContext(CrossContext);

    
  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 text-15px large:w-100vw large:h-auto small:w-90vw small:h-auto small:mt-13">
      
        
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about3} alt="photos" className="w-100 h-100" />

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw aboutOne small:h-200px small:pl-2">
          <h1 class="large:text-35px large:w-60 large:leading-10 small:leading-5 font-extrabold small:w-80 small:text-17px">
            ELEVATE YOUR LEADERSHIP SKILL, EXPAND YOUR IMPACT!
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-11px large:text-15px">
            Discover new skills and interests with our extensive course
            collection
          </p>

          {/* <Link className="flex items-center justify-center gap-1 px-1 font-semibold large:w-300px rounded-10 h-40px bg-buttonOverlay large:text-15px small:w-250px small:text-11px">
            Download OEP course brochure{" "}
            <RiFolderDownloadLine className="large:text-25px small:text-20px" />
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>


        {/* Upcoming webinar */}
      <div className="flex flex-col items-center gap-4 large:mt-3 large:w-90 small:w-90vw">
        
        <div className="flex items-center w-auto h-auto gap-2 border border-crossLightPurple py-0.5 px-1 rounded large:w-auto small:w-100 justify-center">
          
            <button
            className={`flex items-center justify-center large:w-200px small:w-auto large:px-2 small:px-1  h-40px rounded ${webinarType==="upcoming" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray bg-gray-200"} small:text-11px large:text-15px`}
            
            onClick={()=>setWebinarType('upcoming')}
            >Upcoming Webinars</button>
            
            <button
            className={`flex items-center justify-center large:w-200px small:w-auto  large:px-2 small:px-1  h-40px rounded ${webinarType==="past" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray bg-gray-200"} small:text-11px large:text-15px`}
            
            onClick={()=>setWebinarType('past')}
            >Past Webinars</button>
        </div>

            { webinarType==='past' ? <h3 className="font-bold text-center large:text-25px small:text-15px">View Our Past Webinars</h3> :
        <h3 className="font-bold text-center large:text-25px small:text-15px">Register Now For Our Upcoming Webinars</h3>}

        
        {/* upcoming search box */}
        {webinarType==='upcoming' &&
        <div className="flex items-center self-start justify-center large:relative large:w-30 h-40px large:left-10 small:w-90 small:self-center large:self-start">
          <UpcomingFilter />
        </div>}

        {/* past search box */}
        {webinarType==='past' &&
        <div className="flex items-center self-start justify-center large:relative large:w-30 h-40px large:left-10 small:w-90 small:self-center large:self-start">
          <PastFilter />
        </div>}
        

            {/* upcoming */}
        {webinarType==='upcoming' &&
        <div className="flex flex-wrap justify-center gap-3 border w-100">
            {
                filteredUpcoming && filteredUpcoming.map((webinar, i)=>
                    <Webinar 
                    key={i}
                    presenter={webinar.presenter}
                    topic={webinar.topic}
                    description={webinar.description}
                    date={webinar.date}
                    time={webinar.time}
                    totalAttendees={webinar.totalAttendees}
                    duration={webinar.duration}
                    youtubeLink={webinar.youtubeLink}
                    />
                )
            }
        </div>}


        {/* past */}
        {webinarType==='past' &&
        <div className="flex flex-wrap justify-center gap-3 border w-100">
            {
                filteredPast && filteredPast.map((webinar, i)=>
                    <Webinar 
                        key={i}
                        presenter={webinar.presenter}
                        youtubeLink={webinar.youtubeLink}
                        topic={webinar.topic}
                    />
                )
            }
        </div>}
        
      </div>

      {loadingAllWebinars && <p className="">Loading webinars...</p>}
      
      {filteredUpcoming && filteredUpcoming.length < 1 && webinarType==='upcoming' ? <p className="">No upcoming webinar.</p> : ""}

      {filteredPast && filteredPast.length < 1 && webinarType==='past' ? <p className="">No past webinar.</p> : ""}

      


      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">
          Ready To Get Started?
        </h4>
        <Link
          to="/our-courses/"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default WebinarPage;
;
