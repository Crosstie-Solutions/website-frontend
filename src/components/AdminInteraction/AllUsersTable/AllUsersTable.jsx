import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import UsersFilter from "../../UsersFilter/UsersFilter";
import RemoveAdmin from "../../RemoveAdmin/RemoveAdmin";


function AllUsersTable() {  
  const {
    loadUsers,
    currentUsers,
    currentUsersPage,
    totalUsersPages,
    handleUsersPageChange,
    exportUserData,
    allUsers,
    me,
    usersPerPage,
    activeAdmin, toggleRemoveAdmin
  } = useContext(CrossContext);


      const formatDate = (dateString) => {
    if(!dateString) return 'Not available';
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  // Format time
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const period = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // convert 0 -> 12
  hours = hours.toString().padStart(2, "0");

  return `${day}${getOrdinalSuffix(day)} ${month} ${year} - ${hours}:${minutes}${period}`;
      };

  
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Users({allUsers && allUsers.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <UsersFilter />
        </div>
      </div>
      
      <div className="flex flex-col h-auto gap-1 w-100">
        <div className="flex flex-row justify-between gap-1 font-bold border-b border-blue-300 text-crossBlue">
          <div className="w-auto">S/N</div>
          <div className="w-20">Name</div>
          <div className="w-20">Phone</div>
          <div className="w-20">Email</div>
          <div className="w-10">Role</div>
          <div className="w-10">Date</div>
        </div>

        {currentUsers &&
          currentUsers.map((user, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex gap-1 flex-row justify-between`}
              >
                <div className="w-auto">{(currentUsersPage - 1) * usersPerPage + i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20`}>
                  {user.firstName} {user.lastName}
                  
                  {user.role==='admin' && me && me.role.includes('super') &&
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-crossLightPurple text-11px'
                    onClick={()=>toggleRemoveAdmin(i)}
                    >Remove Admin</div>}


                  {user.role==='user' && me && me.role.includes('super') &&
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-vogueRed text-11px'
                    onClick={()=>toggleRemoveAdmin(i)}
                    >Delete User</div>}
                </div>

                <div className="w-20">{user.phone}</div>
                <div className="w-20 break-words">{user.email}</div>

                <div className={`text-black w-10`}>{user.role}</div>
                <div className={`text-black w-10`}>{formatDate(user.createdAt)}</div>

                {activeAdmin === i && (
                    <div>
                      <RemoveAdmin 
                      adminNo={i + 1}
                      adminEnd={allUsers.length + 1}
                      adminId={user._id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      role={user.role}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadUsers && currentUsers && currentUsers.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentUsersPage === 1}
            onClick={() => handleUsersPageChange(currentUsersPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentUsersPage} of {totalUsersPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentUsersPage === totalUsersPages}
            onClick={() => handleUsersPageChange(currentUsersPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {allUsers && allUsers.length > 0 &&
      <button className="flex items-center self-center justify-center w-auto gap-1 px-1 mt-4 text-white cursor-pointer h-40px bg-tribeBlue rounded-5 large:text-15px small:text-13px"
      onClick={() => exportUserData(allUsers)}
      >Download users data <MdOutlineDownload className="text-20px"/></button>}

      {loadUsers && (
        <p className="mt-5 font-bold text-center w-100">Loading users...</p>
      )}

      {!loadUsers && currentUsers && currentUsers.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">User not found.</p>
      )}
    </div>
  );
}

export default AllUsersTable;
