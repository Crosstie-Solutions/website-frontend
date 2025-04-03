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

import { GoArrowRight } from "react-icons/go";

import { MdOutlineChevronRight } from "react-icons/md";

import CaseStudy from "../../components/CaseStudy/CaseStudy";
import OurCaseStudy from "../../components/OurCaseStudy/OurCaseStudy";




function ManagementConsultingPage() {
    const posts = [1, 2, 3];

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13">
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about4} alt="photos" className="w-100 h-100" />

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

    </div>
  );
}

export default ManagementConsultingPage;
