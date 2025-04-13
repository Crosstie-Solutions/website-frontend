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

    activeAdmin, toggleRemoveAdmin
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Users({allUsers && allUsers.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <UsersFilter />
        </div>
      </div>
      
      <table className="h-auto w-100">
        <tr className="font-bold border-b border-blue-300 text-crossBlue">
          <td>S/N</td>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Role</td>
          {/* <td>Verif. status</td> */}
        </tr>

        {currentUsers &&
          currentUsers.map((user, i) => {
            return (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td>{i + 1}.</td>
                <td className={`flex flex-col gap-0.5`}>
                  {user.firstName} {user.lastName}
                  
                  {user.role==='admin' && me && me.role.includes('super') &&
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-crossLightPurple text-11px'
                    onClick={()=>toggleRemoveAdmin(i)}
                    >Remove Admin</div>}
                </td>

                <td>{user.phone}</td>
                <td className="">{user.email}</td>

                <td className={`text-black`}>{user.role}</td>

                {activeAdmin === i && (
                    <div>
                      <RemoveAdmin 
                      adminNo={i + 1}
                      adminEnd={allUsers.length + 1}
                      adminId={user.id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      />
                    </div>)}
              </tr>
            );
          })}
      </table>


      {/* Pagination */}
      {!loadUsers && currentUsers && currentUsers.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-tribeBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentUsersPage === 1}
            onClick={() => handleUsersPageChange(currentUsersPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentUsersPage} of {totalUsersPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-tribeBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
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
