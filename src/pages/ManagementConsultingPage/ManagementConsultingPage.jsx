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
import OurCaseStudy from "../../components/OurCaseStudy/OurCaseStudy";
import AboutHero from "../../components/AboutHero/AboutHero";
import DownloadScreen from "../../components/DownloadScreen/DownloadScreen";




function ManagementConsultingPage() {
    const {downloadScreen} = useContext(CrossContext);
          
    const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
    
    const title = "Our Corporate Presentation";

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13">
      
      <AboutHero 
        tag="Our Solutions"
      />

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>

      <div className="flex items-center h-auto large:justify-center large:flex-row large:w-70vw small:flex-col small:gap-3 large:gap-5 large:flex-wrap">
        
        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaBookOpen className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Culture Assessment and Transformation
          </h3>

          <p className="text-center text-13px text-crossTextGray">
            The business landscape is evolving, and staying ahead requires more
            than just experience—it demands strategic thinking, innovation, and
            executive-level expertise.
          </p>

          {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
        </div>

        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUserTie className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Strategy Development and Execution
          </h3>

          <p className="text-center text-13px text-crossTextGray">
            The business landscape is evolving, and staying ahead requires more
            than just experience—it demands strategic thinking, innovation, and
            executive-level expertise.
          </p>

          {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
        </div>

        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Business Process Documentation and Improvement
          </h3>

          <p className="text-center text-13px text-crossTextGray">
            The business landscape is evolving, and staying ahead requires more
            than just experience—it demands strategic thinking, innovation, and
            executive-level expertise.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Corporate Performance Management
          </h3>

          <p className="text-center text-13px text-crossTextGray">
            The business landscape is evolving, and staying ahead requires more
            than just experience—it demands strategic thinking, innovation, and
            executive-level expertise.
          </p>
        </div>
      </div>


      {/* case study */}
      <OurCaseStudy />

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


      {downloadScreen && 
      <DownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
      />}
    </div>
  );
}

export default ManagementConsultingPage;
