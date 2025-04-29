import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileSolutionButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { RiFolderDownloadLine } from "react-icons/ri";
import { SolutionButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { CrossContext } from "../../Context/CrossContext";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import {CaseStudy} from "../../components/CaseStudy/CaseStudy";
import { GoArrowRight } from "react-icons/go";
import TrainingCaseStudy from "../../components/TrainingCaseStudy/TrainingCaseStudy";
import AboutHero from "../../components/AboutHero/AboutHero";




function CorporateTrainingPage() {
  const { allPrograms } = useContext(CrossContext);

  const {downloadScreen} = useContext(CrossContext);
      
    const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
    
    const title = "Our Corporate Presentation";

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-12 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13">
      
      <AboutHero 
      tag="Corporate Training"
      line1="Transformational Upskilling for Leverage in the Professional Space."
      line2="Learn technical and soft skills important for growth in the corporate world. Network with fellow professionals or get tailored content specific to your industry, organisation, role and level."
      />

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>

      <div className="flex items-center h-auto large:justify-center large:flex-row large:w-70vw small:flex-col small:gap-3 large:gap-5 large:flex-wrap">
        
        <Link to='/our-courses/' className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaBookOpen className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Open Executive Programmes (OEP)
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          A program built for growth, networking, and transformation. Crosstie’s Open Executive Programmes unite professionals to learn, network, and grow. In 2–4 days, you will get new insights, practical knowledge, and a recognised certificate to accelerate your next growth phase.
          </p>

          {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
        </Link>

        <Link to='/executive-leadership' className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUserTie className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Executive Leadership Programmes (ELP)
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          Designed for leaders at all levels, these premium two—to three-day programs explore strategy, influence, and decision-making. They blend expert-led sessions with real case studies and optional coaching to reinforce lasting, effective leadership.
          </p>

          {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
        </Link>

        <Link to='/complete-employee' className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
            Complete Employee Series (CES)
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          The Complete Employee Series (CES) equips employees at all levels with the knowledge, skills, and attributes needed to grow, perform better, and contribute meaningfully across your entire organisation.
          </p>
        </Link>



        <Link to='/sales-excellence' className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
          Sales Excellence  Series (SES)
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          The Sales Excellence Series (SES) transforms sales professionals at every level, building skills in prospecting, negotiation, and relationship-building with practical tools, proven techniques, and a mindset for consistent, sustainable results.
          </p>
        </Link>

        <Link to='/sales-excellence' className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
          <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
            <FaUser className="text-crossLightPurple text-30px" />
          </div>

          <h3 className="font-bold text-center text-crossLightPurple">
          Crosstie Team Bonding (CTB)
          </h3>

          <p className="text-center text-13px text-crossTextGray">
          Crosstie Team Bonding strengthens collaboration through customised bonding experiences. Organisations choose the duration, and we deliver meaningful activities that boost connection, trust, and teamwork across every level.
          </p>
        </Link>
      </div>

      {/* case study */}
      <TrainingCaseStudy />

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

export default CorporateTrainingPage;
