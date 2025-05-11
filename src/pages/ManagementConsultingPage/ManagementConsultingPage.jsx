import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileSolutionButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { RiFolderDownloadLine } from "react-icons/ri";
import { SolutionButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { CrossContext } from "../../Context/CrossContext";
import { FaBookOpen } from "react-icons/fa";
// import { MdOutlineChevronRight } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

import {CaseStudy} from "../../components/CaseStudy/CaseStudy";
import ConsultingCaseStudy from "../../components/ConsultingCaseStudy/ConsultingCaseStudy";
import AboutHero from "../../components/AboutHero/AboutHero";
import { useState } from "react";
import ConsultingForm from "../../components/ConsultingForm/ConsultingForm";





function ManagementConsultingPage() {
    const {downloadScreen, consultingTitle, bookService} = useContext(CrossContext);
          
    const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
    


  return (
    <div className="relative flex flex-col items-center justify-start gap-5 py-5 large:bg-white large:mt-12 text-15px large:w-100vw large:h-auto small:w-90vw small:h-auto small:mt-13 small:pt-0">
      
      <AboutHero 
        tag="Management Consulting"
        line1="People. Strategy. Performance. Process. Finance"
      line2="Walk with us to reinvent ideas, refine operations, and create resilient strategies through tailored organisation development practices."
      />

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>


      <div className="flex items-center h-auto large:justify-center large:flex-row large:w-70vw small:flex-col small:gap-3 large:gap-5 large:flex-wrap">
        
        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaBookOpen className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Culture Assessment and Transformation
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          Your strategy depends on culture. Using our Six-Dimension Framework, we assess, identify gaps, and guide transformation, building a culture aligned with your goals, industry, and growth stage, with hands-on support throughout.
          </p>

          <button
            className="flex items-center justify-center w-auto bg-crossLightPurple text-white px-2 h-40px rounded hover:bg-white hover:text-crossLightPurple hover:border-crossLightPurple hover:border"
            onClick={()=>{
              bookService('Culture Assessment and Transformation')
            }}
          >
            Book Now
          </button>

          {consultingTitle && consultingTitle.includes('Culture Assessment and Transformation') &&
          <ConsultingForm 
          consultingTitle={consultingTitle}
          />}

        </div>



        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUserTie className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Strategy Development and Execution
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          As businesses grow, instinct must give way to strategy. We diagnose key pillars, co-create actionable plans, and support execution, helping you shift from founder-driven decisions to intentional, scalable strategy.
          </p>

          <button
            className="flex items-center justify-center w-auto bg-crossLightPurple text-white px-2 h-40px rounded hover:bg-white hover:text-crossLightPurple hover:border-crossLightPurple hover:border"

             onClick={()=>{
              bookService('Strategy Development and Execution')
            }}
          >
            Book Now
          </button>

          {consultingTitle && consultingTitle.includes('Strategy Development and Execution') &&
          <ConsultingForm 
          consultingTitle={consultingTitle}
          />}
        </div>



        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">

          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Business Process Documentation and Improvement
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          High-performing organisations know operational excellence is intentional, built on well-designed, documented, and improved processes. We capture core workflows, create process maps, and support systems that can run smoothly and scale with structure.
          </p>

          <button
            className="flex items-center justify-center w-auto bg-crossLightPurple text-white px-2 h-40px rounded hover:bg-white hover:text-crossLightPurple hover:border-crossLightPurple hover:border"

            onClick={()=>{
              bookService('Business Process Documentation and Improvement')
            }}
          >
            Book Now
          </button>

          {consultingTitle && consultingTitle.includes('Business Process Documentation and Improvement') &&
          <ConsultingForm 
          consultingTitle={consultingTitle}
          />}
        </div>



        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Corporate Performance Management
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          Aligning strategy with execution drives sustainable growth. We integrate planning, performance metrics, budgeting, forecasting, and analytics, designing dashboards, defining KPIs, and enhancing capabilities through process redesign and effective change management.
          </p>

          <button
            className="flex items-center justify-center w-auto bg-crossLightPurple text-white px-2 h-40px rounded hover:bg-white hover:text-crossLightPurple hover:border-crossLightPurple hover:border"
             onClick={()=>{
              bookService('Corporate Performance Management')
            }}
          >
            Book Now
          </button>


          {consultingTitle && consultingTitle.includes('Corporate Performance Management') &&
          <ConsultingForm 
          consultingTitle={consultingTitle}
          />}
        </div>
      </div>


      {/* case study */}
      <ConsultingCaseStudy />

            {/* explore */}
      <div className="flex flex-col items-center h-auto gap-1 w-100">
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

export default ManagementConsultingPage;
