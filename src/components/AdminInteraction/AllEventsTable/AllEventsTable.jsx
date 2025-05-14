import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeletePartner from "../../DeletePartner/DeletePartner";
import PartnersFilter from "../../PartnersFilter/PartnersFilter";
import EventsFilter from "../../EventsFilter/EventsFilter";
import DeleteEvent from "../../DeleteEvent/DeleteEvent";




function AllEventsTable() {

  
  const {
    
    loadPartners,
    currentPartners,
    currentPartnersPage,
    totalPartnersPages,
    handlePartnersPageChange,
    allPartners,

    activePartner, togglePartner,


    loadEvents,
        currentEvents,
        currentEventsPage,
        totalEventsPages,
        handleEventsPageChange,
        allEvents,
    
        activeEvent, toggleEvent
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Events({allEvents && allEvents.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <EventsFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Event</div>
          <div className="w-20">Client</div>
          <div className="w-20">Date</div>
          <div className="w-20">Image</div>
        </div>

        {currentEvents &&
          currentEvents.map((event, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto justify-between`}
              >
                <div className="w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20`}>
                  {event.title}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-vogueRed text-11px'
                    onClick={()=>toggleEvent(i)}
                    >Delete Event</div>
                </div>

                <div className="w-20">{event.client}</div>

                <div className="w-20">{event.date}</div>

                <div className="w-20"><img src={event.eventImages[0]} alt="partner logo" className="rounded h-50px w-50px"/></div>

                {activeEvent === i && (
                    <div>
                      <DeleteEvent 
                      eventNo={i + 1}
                      eventEnd={allEvents.length + 1}
                      eventId={event.id}
                      client={event.client}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadEvents && currentEvents && currentEvents.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEventsPage === 1}
            onClick={() => handleEventsPageChange(currentEventsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentEventsPage} of {totalEventsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEventsPage === totalEventsPages}
            onClick={() => handleEventsPageChange(currentEventsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadEvents && (
        <p className="mt-5 font-bold text-center w-100">Loading events...</p>
      )}

      {!loadEvents && currentEvents && currentEvents.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">Event not found.</p>
      )}
    </div>
  );
}

export default AllEventsTable;
