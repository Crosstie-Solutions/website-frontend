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
import DownloadScreen from "../../components/DownloadScreen/DownloadScreen";
import { TbFileTypePdf } from "react-icons/tb";
import OurValues from "../../components/OurValues/OurValues";
import AboutHero from "../../components/AboutHero/AboutHero";





function AboutUsPage() {

  const {allCourses, toggleDownloadScreen, downloadScreen} = useContext(CrossContext);

  const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
  
  const title = "Our Corporate Presentation";

  
  return (
    <div className="relative flex flex-col items-center justify-start gap-3 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12">

      <AboutHero />


      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex items-center justify-center large:h-350px large:mt-4 large:gap-0 small:flex-col-reverse large:flex-row small:w-90vw large:w-83vw small:gap-1 small:h-auto">

        <img src={PHOTOS.how} alt="logo"  className="border-2 border-t-crossLightPurple large:w-25 large:h-100 small:h-300px small:w-80 border-l-crossLightPurple border-b-crossLightPurple"/>
       
        <div className="flex flex-col justify-center gap-1 font-semibold shadow-xl large:p-3 h-100 large:w-75 small:w-90vw bg-purple-50 rounded-10 small:p-1">
         <p className="leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius excepturi labore magnam odit, magni quo eos, ipsa quis cupiditate porro similique deserunt voluptatibus iure laudantium perspiciatis rerum ea eum autem!</p>

         <p className="leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius excepturi labore magnam odit, magni quo eos, ipsa quis cupiditate porro similique deserunt voluptatibus iure laudantium perspiciatis rerum ea eum autem!</p>
        </div>

      </div>

      <WhoWeAre />
      
      <OurValues />

      <OurReach />

      <WhyChooseUs />


      {downloadScreen && 
      <DownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
      />}
    </div>
  );
}

export default AboutUsPage;