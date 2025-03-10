import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';




function ProgramsFilter() {

    const {setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center large:p-1 large:gap-5 large:justify-center rounded-10 h-100 large:w-100 text-15px small:w-90vw small:justify-between">
      
        <div className='flex items-center bg-white border rounded large:justify-center large:w-30 h-40px border-crossTextGray small:w-60 small:justify-between'>
          
          
          <input
            type="text"
            placeholder="search Courses"
            value={programsSearchTerm}
            onChange={(e) => {
              setProgramsSearchTerm(e.target.value);
              setCurrentProgramsPage(1); // Reset to first page on search
            }}
            className="px-1 py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-80"
          />

          <IoIosSearch className='text-20px text-cribGray text-crossTextGray'/>
        </div>


        <div className='flex items-center justify-center border rounded border-crossTextGray w-30 h-40px small:text-15px large:text-15px'>
          <select className='px-1 rounded cursor-pointer h-100 focus:border-none focus:outline-none w-100'
           onChange={(e) => {
            setProgramsSearchTerm(e.target.value);
            setCurrentProgramsPage(1); // Reset to first page on search
          }}
          >
            <option value="" className='text-crossTextGray'>Filter</option>
            <option value="Open executive programmes (OEP)">Open executive programmes (OEP)</option>
            <option value="Executive Leadership programmes (ELP)">Executive Leadership programmes (ELP)</option>
            <option value="Sales excellence series (SES)">Sales excellence series (SES)</option>
            <option value="Complete employee series (CES)">Complete employee series (CES)</option>
          </select>
        </div>
        
      </div>
  )
}

export default ProgramsFilter;
