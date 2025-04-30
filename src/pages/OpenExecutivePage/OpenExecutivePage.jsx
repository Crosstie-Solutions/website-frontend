import React, { useContext, useEffect, useState } from "react";
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
import AboutHero from "../../components/AboutHero/AboutHero";
import { CourseBrochureDownloadScreen, CourseContentDownloadScreen } from "../../components/DownloadScreen/DownloadScreen";
import ProgramsMonthFilter from "../../components/ProgramsMonthFilter/ProgramsMonthFilter";
import OpenProgramsFilter from "../../components/OpenProgramsFilter/OpenProgramsFilter";




function OpenExecutivePage() {

  

  const {
     loadingAllPrograms,

    allPrograms, allCourses, downloadScreen, downloadProgramScreen, courseBrochureDownloadScreen, toggleCourseBrochureDownloadScreen,
    toggleDownloadScreen, allOpenPrograms
  } = useContext(CrossContext);

  // toggleCourseContentDownloadScreen,  courseContentDownloadScreen
  
  const downloadUrl = allCourses && allCourses.length > 0 ? allCourses[0].courseBrochure : "";
  const title = allCourses && allCourses.length > 0 && allCourses[0].courseTitle;

  

  const [filteredPrograms, setFilteredPrograms] = useState(allOpenPrograms);


  //for pagination
    const [currentProgramsPage, setCurrentProgramsPage] = useState(1);
    const programsPerPage = 10;

    // // Calculate total pages
  const totalProgramsPages = filteredPrograms && Math.ceil(filteredPrograms.length / programsPerPage);

  // Get requests for the current page
  const programsStartIndex = (currentProgramsPage - 1) * programsPerPage;
  const programsEndIndex = programsStartIndex + programsPerPage;
  const currentPrograms = filteredPrograms && filteredPrograms.slice(programsStartIndex, programsEndIndex)

  
  //Handle page change
  const handleProgramsPageChange = (page) => {
    if (page > 0 && page <= totalProgramsPages) {
      setCurrentProgramsPage(page);
    }
  };



  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-12 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-8">
    

      <AboutHero 
        tag={title}
        buttonText="Download OEP Course Brochure"
        line2= "Flexible training options for small and medium-sized organisations with limited staff in specific roles, as well as professionals seeking to learn and network with peers across their industry."

      />

      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>

     
      
      <div className="flex justify-between h-auto small:w-90vw large:w-83vw">
        
        <OpenProgramsFilter programs={allOpenPrograms} onFilter={setFilteredPrograms} />

      </div>
      

      <div className="flex flex-row flex-wrap h-auto gap-3 small:justify-center small:w-100 large:w-83vw large:justify-center">
        {currentPrograms &&
          currentPrograms.map((program, i) => 
            
            
              <div key={i}>
                  
                  <Program
                  title={program.title}
                  duration={program.duration}
                  date={program.date}
                  time={program.time}
                  mode={program.mode}
                  id={program._id}
                  courseContent={program.courseContent}
                  category={program.category}
                />



                  {downloadProgramScreen === program._id && 
                      <CourseContentDownloadScreen 
                       downloadUrl={program.courseContent}
                       title={program.title}
                       id={program.id}
                      />}
              </div>
            
          )}


       
      </div>


      {/* Pagination */}
      {filteredPrograms && filteredPrograms.length > 0 && 
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
           
          </div>

          <button
            className="flex items-center justify-center text-white large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === totalProgramsPages}
            onClick={() => handleProgramsPageChange(currentProgramsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>}
      

      {filteredPrograms && filteredPrograms.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">
          No result found.
        </p>
      )}

        {loadingAllPrograms && 
        <p className="text-center w-100 text-15px">
          Loading Programs....
        </p>}

       


      {courseBrochureDownloadScreen && 
      <CourseBrochureDownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
      />}
      
    </div>
  );
}

export default OpenExecutivePage;
