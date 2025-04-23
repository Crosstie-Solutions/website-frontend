import React, { useContext, useEffect, useRef } from 'react';
import { courseData } from '../../assets/data';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';



function CourseSuggestion() {

  const {setActiveSearch, filteredHeaderPrograms} = useContext(CrossContext);

  //Click outside to close drop down
    let dropdownRef = useRef()
  
    useEffect(() =>{
      let handler = (event) =>{
        if(!dropdownRef.current?.contains(event.target)){
          setActiveSearch(false)
        }
      }
  
      document.addEventListener("mousedown", handler);
  
      return ()=>{
        document.removeEventListener("mousedown", handler);
      }
  
    });

  return (
    <div className='fixed z-30 flex flex-col items-center px-2 py-5 overflow-y-scroll bg-white border border-t-2 rounded shadow-lg h-400px top-13 w-30vw right-30vw text-15px border-crossLightPurple'
    ref={dropdownRef}
    >
      {
        filteredHeaderPrograms && filteredHeaderPrograms.map((program, i)=>
        <Link key={i}
        onClick={()=>{
          setActiveSearch(false);
        }}
        to={`/our-courses/${program.id}`}
        className='p-1 border-b w-100 hover:bg-gray-200 hover:text-crossLightPurple'>{program.title}</Link>
        )
      }

      {filteredHeaderPrograms && filteredHeaderPrograms.length < 1 &&
      <p className='font-semibold'>No Result Found.</p>}
    </div>
  )
}


function MobileCourseSuggestion() {

    const {toggleMobileSearch, filteredHeaderPrograms} = useContext(CrossContext);
    
    return (
      <div className='flex flex-col items-center justify-center px-2 py-5 overflow-y-scroll bg-white border-t-2 rounded w-80vw h-250px text-15px border-crossLightPurple'>
        {
          filteredHeaderPrograms && filteredHeaderPrograms.map((program, i)=>
          <Link 
          to={`/our-courses/${program.id}`}
          key={i} 
          className='p-1 mt-1 border-b w-100'
          onClick={toggleMobileSearch}
          >{program.title}</Link>
          )
        }

        {filteredHeaderPrograms && filteredHeaderPrograms.length < 1 &&
        <p className='font-semibold'>No Result Found.</p>}
        
      </div>
    )
  }

export {CourseSuggestion, MobileCourseSuggestion};
