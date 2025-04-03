import React, { useContext, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import Feedback from "../Feedback/Feedback";
import { CrossContext } from "../../Context/CrossContext";



function OurFeedbacks() {

  const [expanded, setExpanded] = useState({});
  
    const toggleReadMore = (id) => {
      setExpanded((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle only for the clicked testimonial
      }));
    };
    

  const {allTestimonials, loadingAllTestimonials} = useContext(CrossContext);

  return (
    <div className="flex flex-col h-auto gap-3 large:w-83vw small:w-90vw">
      <div className="flex flex-col h-auto gap-0.5 w-100">
        <div className="flex items-center w-auto h-auto gap-1">
          <hr className="h-2px w-40px bg-crossLightPurple" />
          <h5 className="text-crossLightPurple text-20px">
            PARTICIPANTS & CLIENTS’ STORIES
          </h5>
        </div>
        <h3 className="font-semibold text-30px">Real Stories, Real Impact</h3>
        <p className="text-15px text-crossTextGray">
          Hear how Crosstie’s training and consulting services transformed
          participants and organisations
        </p>
      </div>


      <div className="flex flex-row h-auto py-2 border-crossIconBg w-100 rounded-10 text-13px">
        <div className="flex flex-col items-center h-auto gap-4 w-100">
          
          <div className="flex justify-between h-auto gap-3 large:items-start large:flex-wrap large:flex-row w-100 small:flex-col small:items-center">
            
          {
          allTestimonials && allTestimonials.slice(0, 3).map((testimonial, i)=>
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

              {loadingAllTestimonials &&<p className="font-semibold text-20px">Loading testimonials...</p>}
          </div>

          <Link 
          to='/about-us/feedbacks'
          className="flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple">
            Show All <GoArrowRight className="text-25px" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurFeedbacks;
