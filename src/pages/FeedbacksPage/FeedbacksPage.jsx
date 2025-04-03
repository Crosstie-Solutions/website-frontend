import React, { useContext, useState } from "react";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import Feedback from "../../components/Feedback/Feedback";
import { CrossContext } from "../../Context/CrossContext";
import AboutHero from "../../components/AboutHero/AboutHero";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";


function FeedbacksPage() {

    const {currentTestimonials,
        handleTestimonialsPageChange,
        currentTestimonialsPage,
        totalTestimonialsPages,
        allTestimonials} = useContext(CrossContext)


    const [expanded, setExpanded] = useState({});
      
        const toggleReadMore = (id) => {
          setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle only for the clicked testimonial
          }));
        };
  
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-17 small:mt-12">
        
        <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex flex-row flex-wrap h-auto gap-3 large:justify-between small:justify-center small:w-100 large:w-83vw">
        {
          currentTestimonials && currentTestimonials.map((testimonial, i)=>
            <Feedback 
            key={i}
            name={testimonial.name}
            jobRole={testimonial.jobRole}
            testimony={testimonial.testimony}
            priorityIndex={testimonial.priorityIndex}
            date={testimonial.date}
            program={testimonial.program}
            id={testimonial.id}
            isExpanded={expanded[testimonial.id]} // Pass state
            toggleReadMore={toggleReadMore} // Pass function
            />
          )
        }
       
      </div>

       {/* Pagination */}
       {currentTestimonials && currentTestimonials.length > 0 && (
          <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
            <button
              className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentTestimonialsPage === 1}
              onClick={() => handleTestimonialsPageChange(currentTestimonialsPage - 1)}
            >
              <CgChevronLeft className="text-20px" />
            </button>
  
            <div className="text-sm">
              Page {currentTestimonialsPage} of {totalTestimonialsPages}
            </div>
  
            <button
              className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentTestimonialsPage === totalTestimonialsPages}
              onClick={() => handleTestimonialsPageChange(currentTestimonialsPage + 1)}
            >
              <HiOutlineChevronRight className="text-20px" />
            </button>
          </div>
        )}

      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">Ready To Get Started?</h4>
        <Link
          to="/our-courses"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default FeedbacksPage;
