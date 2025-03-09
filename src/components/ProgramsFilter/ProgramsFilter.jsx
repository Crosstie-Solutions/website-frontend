import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';




function ProgramsFilter() {

    const {setProductsSearchTerm, productsSearchTerm, setCurrentProductsPage } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center justify-center gap-1 p-1 border border-black rounded-10 h-100 w-100 text-15px">
      
        <div className='flex items-center justify-center w-40 h-40px'>
          <IoIosSearch className='text-20px text-cribGray'/>
          
          <input
            type="text"
            placeholder="search Courses"
            value={productsSearchTerm}
            onChange={(e) => {
              setProductsSearchTerm(e.target.value);
              setCurrentProductsPage(1); // Reset to first page on search
            }}
            className="px-1 py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
          />
        </div>


        <div className='flex items-center justify-center w-40 border border-red-500 h-40px'>
          <select className='px-1 rounded cursor-pointer h-100 focus:border-none focus:outline-none'>
            <option value="" className='text-crossTextGray'>Filter by cateory</option>
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
