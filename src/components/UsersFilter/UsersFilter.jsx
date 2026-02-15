import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';



function UsersFilter() {

    const {setUsersSearchTerm, usersSearchTerm, setCurrentUsersPage } = useContext(CrossContext);
    
  return (
    <div className="flex flex-row items-center gap-1 p-1 border rounded-10 h-100 w-100 text-15px">
        <IoIosSearch className='text-20px text-cribGray'/>
        <input
          type="text"
          placeholder="Search by name, email, phone or role"
          value={usersSearchTerm}
          onChange={(e) => {
            setUsersSearchTerm(e.target.value);
            setCurrentUsersPage(1); // Reset to first page on search
          }}
          className="py-2 bg-transparent rounded large:w-90 focus:outline-none h-100 small:w-95"
        />
      </div>
  )
}

export default UsersFilter;
