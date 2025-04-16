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
import AboutHero from "../../components/AboutHero/AboutHero";




function WebinarPage() {

    const {upcomingWebinars, pastWebinars, webinarType, setWebinarType, loadingAllWebinars, filteredUpcoming, filteredPast} = useContext(CrossContext);

    
    const {downloadScreen} = useContext(CrossContext);
    
      const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
      
      const title = "Our Corporate Presentation";
  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-90vw small:h-auto small:mt-13">
      
        
      <AboutHero 
        tag="Our Solutions"
      />

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>


        {/* Upcoming webinar */}
      <div className="flex flex-col items-center gap-4 large:mt-3 large:w-83vw small:w-90vw">
        
        <div className="flex items-center w-auto h-auto gap-2 border border-crossLightPurple py-0.5 px-1 rounded large:w-auto small:w-auto justify-center">
          
            <button
            className={`flex items-center justify-center large:w-200px small:w-auto large:px-2 small:px-1  h-40px rounded ${webinarType==="upcoming" ? "bg-crossLightPurple text-white" : "hover:border hover:border-[#D9D9D9] hover:text-crossTextGray hover:bg-gray-200"} small:text-11px large:text-15px`}
            
            onClick={()=>setWebinarType('upcoming')}
            >Upcoming Webinars</button>
            
            <button
            className={`flex items-center justify-center large:w-200px small:w-auto  large:px-2 small:px-1  h-40px rounded ${webinarType==="past" ? "bg-crossLightPurple text-white" : "hover:border hover:border-[#D9D9D9] hover:text-crossTextGray hover:bg-gray-200"} small:text-11px large:text-15px`}
            
            onClick={()=>setWebinarType('past')}
            >Past Webinars</button>
        </div>

            { webinarType==='past' ? <h3 className="font-bold text-center large:text-25px small:text-15px">View Our Past Webinars</h3> :
        <h3 className="font-bold text-center large:text-25px small:text-15px">Register Now For Our Upcoming Webinars</h3>}

        
        {/* upcoming search box */}
        {webinarType==='upcoming' &&
        <div className="flex items-center self-start justify-center large:w-30 h-40px small:w-90 small:self-center large:self-start">
          <UpcomingFilter />
        </div>}

        {/* past search box */}
        {webinarType==='past' &&
        <div className="flex items-center self-start justify-center large:w-30 h-40px small:w-90 small:self-center large:self-start">
          <PastFilter />
        </div>}
        

            {/* upcoming */}
        {webinarType==='upcoming' &&
        <div className="flex flex-wrap gap-3 large:justify-between w-100 small:justify-center">
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
                    webinarId={webinar.id}
                    />
                )
            }
        </div>}


        {/* past */}
        {webinarType==='past' &&
        <div className="flex flex-wrap gap-3 large:justify-between w-100 small:justify-center">
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


      {/* {downloadScreen && 
      <DownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
      />} */}
    </div>
  );
}

export default WebinarPage;
;
