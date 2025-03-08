import React, { useContext } from 'react';
import { CrossContext } from '../../Context/CrossContext';
import { IoCloseOutline } from "react-icons/io5";
import { MobileCourseSuggestion } from '../CourseSuggestion/CourseSuggestion';


function MobileSearchBar() {

    const {toggleMobileSearch} = useContext(CrossContext);

  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center gap-1 h-100vh w-100vw bg-overlaySecond small:flex large:hidden'>
        <IoCloseOutline 
        onClick={toggleMobileSearch}
        className='absolute text-white cursor-pointer top-5 right-5 text-30px'
        />
      
      <div className='flex items-center justify-center w-100 h-40px text-13px'>
        <input type="search" name="" id="" placeholder="What would you love to learn today?"
        className='p-1 rounded-tl rounded-bl w-60 text-13px h-40px focus:outline-none focus:border-none'
        />
        
        <button className='flex items-center justify-center p-1 text-white rounded-br-10 rounded-tr-10 bg-crossLightPurple h-40px'>Search</button>
      </div>

      <MobileCourseSuggestion />
    </div>
  )
}

export default MobileSearchBar
