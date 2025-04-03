import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';




function UpcomingFilter() {

    const {setUpcomingSearchTerm, upcomingSearchTerm} = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center gap-1 p-1 border-2 border-crossTextGray rounded-10 h-100 w-100 text-15px">
      
        <IoIosSearch className='text-20px text-crossTextGray'/>
        
        <input
          type="text"
          placeholder="Search by topic or presenter..."
          value={upcomingSearchTerm}
          onChange={(e) => {
            setUpcomingSearchTerm(e.target.value);
            // setCurrentProductsPage(1); // Reset to first page on search
          }}
          className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
        />
      </div>
  )
}


function PastFilter() {

  const {setPastSearchTerm, pastSearchTerm} = useContext(CrossContext);
  
  
return (
  <div className="flex flex-row items-center gap-1 p-1 border-2 border-crossTextGray rounded-10 h-100 w-100 text-15px">
    
      <IoIosSearch className='text-20px text-crossTextGray'/>
      
      <input
        type="text"
        placeholder="Search by topic or presenter..."
        value={pastSearchTerm}
        onChange={(e) => {
          setPastSearchTerm(e.target.value);
          // setCurrentProductsPage(1); // Reset to first page on search
        }}
        className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
      />
    </div>
)
}



export {UpcomingFilter, PastFilter};