import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';



function PartnersFilter() {

    const {
      partnersSearchTerm, setPartnersSearchTerm, setCurrentPartnersPage
    } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center gap-1 p-1 border rounded-10 h-100 w-100 text-15px">
        <IoIosSearch className='text-20px text-cribGray'/>
        <input
          type="text"
          placeholder="Search by name..."
          value={partnersSearchTerm}
          onChange={(e) => {
            setPartnersSearchTerm(e.target.value);
            setCurrentPartnersPage(1); // Reset to first page on search
          }}
          className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
        />
      </div>
  )
}

export default PartnersFilter;
