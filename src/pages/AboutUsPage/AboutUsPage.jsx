import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./AboutUsPage.css";
import { PHOTOS } from "../../assets/images";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurReach from "../../components/OurReach/OurReach";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CrossContext } from "../../Context/CrossContext";
import { TbFileTypePdf } from "react-icons/tb";
import OurValues from "../../components/OurValues/OurValues";
import AboutHero from "../../components/AboutHero/AboutHero";





function AboutUsPage() {

  const {allCourses, toggleDownloadScreen, downloadScreen} = useContext(CrossContext);

  // const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
  
  // const title = "Our Corporate Presentation";

  
  return (
    <div className="relative flex flex-col items-center justify-start gap-3 pb-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-8">

      <AboutHero />


      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex items-center justify-center large:h-350px large:mt-4 large:gap-0 small:flex-col-reverse large:flex-row small:w-90vw large:w-83vw small:gap-3 small:h-auto">

        <img src={PHOTOS.story} alt="logo"  className="shadow-lg large:w-25 large:h-auto small:h-auto small:w-80 "/>
       
        <div className="flex flex-col justify-center gap-1 shadow-xl large:p-3 large:h-380px large:w-75 small:w-90vw bg-purple-50 rounded-10 small:p-1 text-crossTextGray">
          
        <p className="leading-loose">Founded in 2013, <span className="font-semibold">Crosstie Solutions</span> is a trusted partner in <span className="font-semibold">people development, organizational growth</ span>, and management consulting.  From inception, our resilience has come from one clear belief: <span className="font-semibold">transformational change begins with people</span>, and we are committed to helping individuals and organizations understand the possibility of this change.
          Our vision is to optimize talents and strategies, contributing to a future where business growth is sustainable and human-centered. </p>


          <p className="leading-loose">Our passionate team brings expertise and a personal touch to every engagement, creating real impact through learning, coaching, and strategy.
          We believe that real and constant success is found in <span className="font-semibold">Transformation, Experience, and Excellence,</span> and we work to achieve that for both our clients and our team.
          These values are the heart of the <span className="font-semibold">Crosstie's existence</span>, guiding how we work, serve, and grow together.
          We are committed to <span className="font-semibold">continuous improvement</span> in ourselves, in our work, and in the results we deliver.
          </p>
        </div>

      </div>

      <WhoWeAre />
      
      <OurValues />

      <OurReach />

      <WhyChooseUs />


      {/* {downloadScreen && 
      <DownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
      />} */}
    </div>
  );
}

export default AboutUsPage;