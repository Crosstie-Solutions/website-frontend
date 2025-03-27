import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import { PastFilter } from '../../WebinarFilter/WebinarFilter';
import AdminWebinarAction from '../AdminWebinarAction/AdminWebinarAction';
// import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';





function PastWebinarsTable() {

    
    const {
        
        currentPrograms,
        handleProgramsPageChange,
        currentProgramsPage,
        totalProgramsPages,


        activeWebinarView,
      toggleAdminWebinarAction,
      
      currentPast, handlePastPageChange, currentPastPage, totalPastPages, pastSearchTerm,
  pastWebinars, activeWebinar,
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start font-semibold text-crossLightPurple small:hidden large:block large:text-17px w-30">Past Webinars({pastWebinars && pastWebinars.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <PastFilter />
        </div>
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='large:relative large:right-3'>Topic</div>
            <div className='large:relative large:right-2'>Date</div>
            <div className='large:relative large:right-2'>Time</div>
            <div className='large:relative large:right-2'>Duration</div>
            <div className='large:relative large:right-3'>Presenter</div>
        </div>

        {
            currentPast && currentPast.map((webinar, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col gap-1 break-words large:w-10 small:w-20'>{webinar.topic}
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminWebinarAction(i)}
                        >Action</div>
                    </div>
                    
                    <div className='relative large:right-2 small:right-2'>{webinar.date}</div>
                    <div className='relative large:right-2 small:right-1'>{webinar.time}</div>
                    
                    <div className={`relative large:right-3 small:right-1`}>{webinar.duration}</div>

                    <div className={`relative large:right-3 small:right-1`}>{webinar.presenter}</div>
                    
                    
                    {activeWebinar === i && (
                    <div>
                      <AdminWebinarAction 
                      webinarNo={i + 1}
                      webinarEnd={currentPast.length + 1}
                      webinarId={webinar.id}
                      topic={webinar.topic}
                      past={webinar.past}
                      presenter={webinar.presenter}
                      description={webinar.description}
                      date={webinar.date}
                      time={webinar.time}
                      webinarLink={webinar.webinarLink}
                      duration={webinar.duration}
                      youtubeLink={webinar.youtubeLink}
                      totalAttendees={webinar.totalAttendees}
                      attendees={webinar.attendees}
                      />
                    </div>)}

                    
                    
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentPast && currentPast.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentPastPage === 1}
            onClick={() => handlePastPageChange(currentPastPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentPastPage} of {totalPastPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentPastPage === totalPastPages}
            onClick={() => handlePastPageChange(currentPastPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentPast && currentPast.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export default PastWebinarsTable;
