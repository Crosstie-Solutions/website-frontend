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




function OpenExecutivePage() {
  const {
    currentPrograms, loadingAllPrograms,
    handleProgramsPageChange,
    currentProgramsPage,
    totalProgramsPages,
    allPrograms, allCourses, downloadScreen, downloadProgramScreen, courseBrochureDownloadScreen, toggleCourseBrochureDownloadScreen,
    toggleDownloadScreen, programsSearchTerm
  } = useContext(CrossContext);

  // toggleCourseContentDownloadScreen,  courseContentDownloadScreen
  
  const downloadUrl = allCourses && allCourses.length > 0 ? allCourses[0].courseBrochure : "";
  const title = allCourses && allCourses.length > 0 && allCourses[0].courseTitle;

  // const executiveProgram = program && program.course.courseTitle === "Open Executive Programmes (OEP)";

  const [openPrograms, setOpenPrograms] = useState([]);

  useEffect(()=>{

    if(programsSearchTerm ==''){
      const open = allPrograms && allPrograms.filter((program)=> {
        return program.category.toLowerCase().includes("open");
      })

      setOpenPrograms(open)
    }else{
      const open = currentPrograms && currentPrograms.filter((program)=> {
        return program.category.toLowerCase().includes("open");
      })

      setOpenPrograms(open)
    } 
  }, []);

  

    // console.log("openPrograms:", openPrograms);


  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-8">
      

      {/* <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
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
            Download OEP course brochure{" "}
            <RiFolderDownloadLine className="large:text-25px small:text-20px" />
          </div>
          
        </div>
      </div> */}

      <AboutHero 
        tag={title}
        buttonText="Download OEP Course Brochure"
      />

      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>

     
      <ProgramsFilter />
      

      <div className="flex flex-row flex-wrap h-auto gap-3 small:justify-center small:w-100 large:w-83vw large:justify-center">
        {openPrograms &&
          openPrograms.map((program, i) => 
            
            
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
      {/* {openPrograms && openPrograms.length > 0 && ()} */}
        {/* <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
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
        </div> */}
      

      {openPrograms && openPrograms.length < 1 && (
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
