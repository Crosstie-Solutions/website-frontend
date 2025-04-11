import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileCoursesButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CoursesButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import Program from "../../components/Program/Program";
import { CrossContext } from "../../Context/CrossContext";
import ProgramsFilter from "../../components/ProgramsFilter/ProgramsFilter";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import DownloadScreen from "../../components/DownloadScreen/DownloadScreen";



function SalesExcellencePage() {

    const {currentPrograms, handleProgramsPageChange, currentProgramsPage, totalProgramsPages, programsSearchTerm,  programsStartIndex, programsEndIndex, allPrograms, allCourses, downloadScreen, toggleDownloadScreen} = useContext(CrossContext);


    const downloadUrl = allCourses && allCourses.length > 0 ? allCourses[2].courseBrochure : "";
  const title = allCourses && allCourses.length > 0 && allCourses[2].courseTitle;
    
    const salesSeriesPrograms = currentPrograms && currentPrograms.filter((program)=> {
      return program.course.courseTitle.includes("Sales Excellence");
    });

    
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12">
      
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
              <img src={PHOTOS.about6} alt="photos" className="w-100 h-100" />
      
              <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw aboutOne small:h-200px small:pl-2">
                <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-17px">
                  ELEVATE YOUR LEADERSHIP SKILL, EXPAND YOUR IMPACT!
                </h1>
      
                <p className="font-extralight large:w-50 small:w-90 small:text-11px large:text-15px">
                  Discover new skills and interests with our extensive course
                  collection
                </p>
    

                <div className="flex items-center justify-center gap-1 px-1 font-semibold cursor-pointer large:w-300px rounded-10 h-40px bg-buttonOverlay large:text-15px small:w-250px small:text-11px"
                  onClick={toggleDownloadScreen}
                  >
                    Download SES Course Brochure{" "}
                    <RiFolderDownloadLine className="large:text-25px small:text-20px" />
                  </div>
                
              </div>
            </div>

      


      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>

       
       <ProgramsFilter />
       

        <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">
            
            {
                salesSeriesPrograms && salesSeriesPrograms.map((program, i)=>
                    <Program 
                      k={i}
                      title={program.title}
                      duration={program.duration}
                      date={program.date}
                      time={program.time}
                      mode={program.mode}
                      id={program._id}
                    />
                )
            }

        </div>
        
        

          {/* Pagination */}
      {salesSeriesPrograms && salesSeriesPrograms.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === 1}
            onClick={() => handleProgramsPageChange(currentProgramsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentProgramsPage} of {totalProgramsPages}
            {/* Showing { programsStartIndex} to {currentPrograms.length} of {allPrograms.length} Courses */}

            
          </div>

          <button
            className="flex items-center justify-center text-white large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === totalProgramsPages}
            onClick={() => handleProgramsPageChange(currentProgramsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}
            
            
            {salesSeriesPrograms && salesSeriesPrograms.length < 1 && (
              <p className="mt-5 text-center w-100 text-15px">No result found.</p>
            )}

        {downloadScreen && 
          <DownloadScreen 
            downloadUrl={downloadUrl && downloadUrl}
            title={title && title}
          />}
    </div>
  );
}

export default SalesExcellencePage;
