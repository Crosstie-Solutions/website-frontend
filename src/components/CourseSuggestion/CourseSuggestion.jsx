import React from 'react';
import { courseData } from '../../assets/data';
import { Link } from 'react-router-dom';



function CourseSuggestion() {
  return (
    <div className='fixed z-30 flex flex-col items-start p-2 overflow-y-scroll bg-white top-13 w-30vw h-300px right-30vw text-15px'>
      {
        courseData && courseData.map((course, i)=>
        <Link key={i} className='p-1 border-b w-100'>{course.title}</Link>
        )
      }
    </div>
  )
}

function MobileCourseSuggestion() {
    return (
      <div className='flex flex-col items-start p-2 overflow-y-scroll bg-white w-80vw h-250px text-15px'>
        {
          courseData && courseData.map((course, i)=>
          <Link key={i} className='p-1 border-b w-100'>{course.title}</Link>
          )
        }
      </div>
    )
  }

export {CourseSuggestion, MobileCourseSuggestion};
