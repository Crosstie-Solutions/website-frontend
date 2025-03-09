import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileCoursesButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurReach from "../../components/OurReach/OurReach";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CoursesButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import Program from "../../components/Program/Program";
import { CrossContext } from "../../Context/CrossContext";
import ProgramsFilter from "../../components/ProgramsFilter/ProgramsFilter";



function OpenExecutivePage() {

    const {allPrograms} = useContext(CrossContext);

    
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12">
      
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">

        <img src={PHOTOS.about6} alt="photos" className="w-100 h-100"/>

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw aboutOne small:h-200px small:pl-3">
          
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-20px">
          ELEVATE YOUR LEADERSHIP SKILL, EXPAND YOUR IMPACT!
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-13px large:text-15px">
            Discover new skills and interests with our extensive course collection
          </p>

            <Link className="flex items-center justify-center gap-1 px-1 w-300px rounded-10 h-40px bg-buttonOverlay text-15px">
            Download OEP course brochure <RiFolderDownloadLine className="text-25px"/>
            </Link>
        </div>

        
        
      </div>


      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>

        <div className="h-auto w-100">
            <ProgramsFilter />
        </div>

        <div className="flex flex-row flex-wrap justify-center h-auto gap-3 border border-red-500 w-100">
            
            {
                allPrograms && allPrograms.map((program)=>
                    <Program 
                    title={program.title}
                    duration={program.duration}
                    startDate={program.startDate}
                    endDate={program.endDate}
                    startTime={program.startTime}
                    endTime={program.endTime}
                    mode={program.mode}
                    />
                )
            }
            
            
        </div>
        
        
    </div>
  );
}

export default OpenExecutivePage;
