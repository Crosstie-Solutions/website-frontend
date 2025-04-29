import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';




function ProgramsFilter() {

    const {setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage  } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center large:p-0 large:gap-0 large:justify-between rounded-10 h-100 large:w-83vw text-15px small:w-90vw small:justify-between">
      
        <div className='flex items-center bg-white border rounded large:justify-center large:w-30 h-40px border-crossTextGray small:w-60 small:justify-between'>
          
          
          <input
            type="text"
            placeholder="Search Courses"
            value={programsSearchTerm}
            onChange={(e) => {
              setProgramsSearchTerm(e.target.value);
              setCurrentProgramsPage(1); // Reset to first page on search
              // setProgramsMonthSearchTerm("")
            }}
            className="px-1 py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-80"
          />

          <IoIosSearch className='text-20px text-cribGray text-crossTextGray'/>
        </div>


        {/* <div className='flex items-center justify-center border rounded border-crossTextGray w-30 h-40px small:text-15px large:text-15px'>
          <select className='px-1 rounded cursor-pointer h-100 focus:border-none focus:outline-none w-100'
           onChange={(e)=> setProgramsMonthSearchTerm(e.target.value)}
          >
            <option value="" className='text-crossTextGray'>Filter By Month</option>
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
        </div> */}
        
      </div>
  )
}

export default ProgramsFilter;
