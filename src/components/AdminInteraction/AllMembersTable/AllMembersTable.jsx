import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeletePartner from "../../DeletePartner/DeletePartner";
import PartnersFilter from "../../PartnersFilter/PartnersFilter";
import EventsFilter from "../../MembersFilter/MembersFilter";
import DeleteEvent from "../../DeleteEvent/DeleteEvent";
import AdminEventAction from "../AdminEventAction/AdminEventAction";
import MembersFilter from "../../MembersFilter/MembersFilter";
import AdminMemberAction from "../AdminMemberAction/AdminMemberAction";


function AllMembersTable() {

  
  const {
    loadMembers,
    currentMembers,
    currentMembersPage,
    totalMembersPages,
    handleMembersPageChange,
    allMembers,
    activeMember, 
    toggleMember,
    fetchMembers
  } = useContext(CrossContext);

  useEffect(()=>{
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Members({allMembers && allMembers.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <MembersFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Name</div>
          <div className="w-20">Tier</div>
          <div className="w-20">Role</div>
          <div className="w-10">Index</div>
          <div className="w-10">Image</div>
        </div>

        {currentMembers &&
          currentMembers.map((event, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto gap-2`}
              >
                <div className="flex justify-start w-10">{(currentMembersPage - 1) * 10 + i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20 break-words items-start`}>
                  {event.name}
                  
                <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-crossLightPurple text-11px'
                    onClick={()=>toggleMember(i)}
                    >Action</div>
                </div>

                <div className="flex justify-start w-20 break-words">{event.tier}</div>

                <div className="flex justify-start w-10">{event.role}</div>
                <div className="flex justify-end w-10">{event.priorityIndex}</div>

                {event.memberImage &&
                <div className="flex justify-end w-10"><img src={event.memberImage ? event.memberImage.url : ''} alt="member image" className="rounded h-50px w-50px"/></div>}

                {activeMember === i && (
                    <div>
                      <AdminMemberAction 
                      eventNo={i + 1}
                      eventEnd={allMembers.length + 1}
                      eventId={event._id}
                      name={event.name}
                      tier={event.tier}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadMembers && currentMembers && currentMembers.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentMembersPage === 1}
            onClick={() => handleMembersPageChange(currentMembersPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentMembersPage} of {totalMembersPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentMembersPage === totalMembersPages}
            onClick={() => handleMembersPageChange(currentMembersPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadMembers && (
        <p className="mt-5 text-center w-100">Loading members...</p>
      )}

      {!loadMembers && currentMembers && currentMembers.length < 1 && (
        <p className="mt-5 text-center w-100">Members not found.</p>
      )}
    </div>
  );
}

export default AllMembersTable;
