import React, { useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';



function TalentsFilter() {

    const {talentsSearchTerm, setTalentsSearchTerm, setCurrentTalentsPage } = useContext(CrossContext); 
    
    
  return (
    <div className="flex flex-row items-center large:p-0 large:gap-0 large:justify-between rounded-10 h-100 large:w-83vw text-15px small:w-90vw small:justify-between">
      
        <div className='flex items-center bg-white border rounded large:justify-center large:w-30 h-40px border-crossTextGray small:w-60 small:justify-between'>
          
          
          <input
            type="text"
            placeholder="Search by role, department or skill"
            value={talentsSearchTerm}
            onChange={(e) => {
              setTalentsSearchTerm(e.target.value);
              setCurrentTalentsPage(1);
            }}
            className="px-1 py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-80"
          />

          <IoIosSearch className='text-20px text-cribGray text-crossTextGray'/>
        </div>
      </div>
  )
}

export default TalentsFilter;
