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




function CompleteEmployee() {

    const { programsSearchTerm, toggleDownloadScreen, downloadScreen, allCourses, downloadProgramScreen, courseBrochureDownloadScreen, allPrograms} = useContext(CrossContext);
    
    
    const downloadUrl = allCourses && allCourses.length > 0 ? allCourses[3].courseBrochure : "";
  const title = allCourses && allCourses.length > 0 && allCourses[3].courseTitle;


      const completeEmployeePrograms = allPrograms && allPrograms.filter(program=> program.category.toLowerCase().includes("employee"));
          
          
              // // Filter programs based on search term
            const filteredPrograms = completeEmployeePrograms && completeEmployeePrograms.filter((program) =>
              
              `${program.title} ${program.category}`
            .toLowerCase()
            .includes(programsSearchTerm.toLowerCase()) 
            
          );
          
               //for pagination
               const [currentProgramsPage, setCurrentProgramsPage] = useState(1);
               const programsPerPage = 10;
           
               // // Calculate total pages
             const totalProgramsPages = filteredPrograms && Math.ceil(filteredPrograms.length / programsPerPage);
           
             // Get requests for the current page
             const programsStartIndex = (currentProgramsPage - 1) * programsPerPage;
             const programsEndIndex = programsStartIndex + programsPerPage;
             const currentPrograms = filteredPrograms && filteredPrograms.slice(programsStartIndex, programsEndIndex).reverse();
           
             
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
        buttonText="Download CES Course Brochure"
        line1= "Comprehensive. Structured. Growth-Focused"
        line2 = "Transform your entire workforce through a level-centric training methodology to implement all-around growth and development."
      />


      <div className="flex flex-col items-center h-auto w-100">
        <CoursesButtonSwiper />
        <MobileCoursesButtonSwiper />
      </div>


      
       <ProgramsFilter />
       
     

        <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-83vw">
            
            {
                currentPrograms && currentPrograms.sort((a, b) => a.priorityIndex - b.priorityIndex).map((program, i)=>{
                  return(
                    <div>
                            <Program
                            key={i}
                            title={program.title}
                            duration={program.duration}
                            date={program.date}
                            time={program.time}
                            mode={program.mode}
                            slug={program.slug}
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
                  )
                })
            }

        </div>
        
        

          {/* Pagination */}
      {currentPrograms && currentPrograms.length > 0 && (
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
        </div>
      )}
            
            
      {currentPrograms && currentPrograms.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}

      {courseBrochureDownloadScreen && 
        <CourseBrochureDownloadScreen 
        downloadUrl={downloadUrl && downloadUrl}
        title={title && title}
        />}
    </div>
  );
}

export default CompleteEmployee;
