import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';
import { CiFilter } from "react-icons/ci";



function ProgramsMonthFilter() {

    const {
      partnersSearchTerm, setPartnersSearchTerm, setCurrentPartnersPage
    } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center gap-1 p-1 border rounded-10 h-100 w-100 text-15px">
        <CiFilter className='text-20px text-cribGray'/>
        {/* <input
          type="text"
          placeholder="Search by name..."
          value={partnersSearchTerm}
          onChange={(e) => {
            setPartnersSearchTerm(e.target.value);
            setCurrentPartnersPage(1); // Reset to first page on search
          }}
          className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
        /> */}
        
        <select className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95 cursor-pointer text-black">
          <option value="">-select-</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
  )
}

export default ProgramsMonthFilter;
