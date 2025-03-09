import React, { useContext } from 'react';
import { courseData } from '../../assets/data';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';



function CourseSuggestion() {
  return (
    <div className='fixed z-30 flex flex-col items-start p-2 overflow-y-scroll bg-white top-13 w-30vw h-300px right-30vw text-15px rounded'>
      {
        courseData && courseData.map((course, i)=>
        <Link key={i} className='p-1 border-b w-100'>{course.title}</Link>
        )
      }
    </div>
  )
}


function MobileCourseSuggestion() {

    const {toggleMobileSearch} = useContext(CrossContext);
    
    return (
      <div className='flex flex-col items-start p-2 overflow-y-scroll bg-white rounded w-80vw h-250px text-15px'>
        {
          courseData && courseData.map((course, i)=>
          <Link to="/about-us" key={i} className='p-1 border-b w-100'
          onClick={toggleMobileSearch}
          >{course.title}</Link>
          )
        }
      </div>
    )
  }

export {CourseSuggestion, MobileCourseSuggestion};
