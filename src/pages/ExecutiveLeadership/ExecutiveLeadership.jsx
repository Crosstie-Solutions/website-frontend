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
import AboutHero from "../../components/AboutHero/AboutHero";





function ExecutiveLeadership() {

    const {currentPrograms, handleProgramsPageChange, currentProgramsPage, totalProgramsPages, programsSearchTerm, allCourses, downloadScreen, toggleDownloadScreen, downloadProgramScreen} = useContext(CrossContext);

    const downloadUrl = allCourses && allCourses.length > 0 ? allCourses[1].courseBrochure : "";
  const title = allCourses && allCourses.length > 0 && allCourses[1].courseTitle;

    const executiveLeadershipPrograms = currentPrograms && currentPrograms.filter((program)=> {
      return program.course.courseTitle.includes("Executive Leadership");
    });
    
    
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12 ">
      
      <AboutHero 
        tag={title}
        buttonText="Download ELP Course Brochure"
      />


      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>

       
        <ProgramsFilter />
      

        <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">
            
            {
                executiveLeadershipPrograms && executiveLeadershipPrograms.map((program, i)=>{
                  return(
                    <div>
                            <Program
                            key={i}
                            title={program.title}
                            duration={program.duration}
                            date={program.date}
                            time={program.time}
                            mode={program.mode}
                            id={program._id}
                            courseContent={program.courseContent}
                            // slug={slug}
                          />
          
                          {downloadProgramScreen && 
                              <DownloadScreen 
                                downloadUrl={program.courseContent}
                                title={program.title}
                              />}
                      </div>
                  )
                })
            }

        </div>
        
        

          {/* Pagination */}
      {executiveLeadershipPrograms && executiveLeadershipPrograms.length > 0 && (
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
            
            
            {executiveLeadershipPrograms && executiveLeadershipPrograms.length < 1 && (
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

export default ExecutiveLeadership;
