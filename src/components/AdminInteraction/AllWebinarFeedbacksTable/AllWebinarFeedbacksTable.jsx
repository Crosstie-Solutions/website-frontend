import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import { useState } from 'react';
import AdminWebinarFeedbackAction from '../AdminWebinarFeedbackAction/AdminWebinarFeedbackAction';
import { WebinarFeedbackFilter } from '../../WebinarFeedbackFilter/WebinarFeedbackFilter';
// import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';





function AllWebinarFeedbacksTable(props) {

  const { type } = props

    
    const {

        allCourseRegs,
        activeWebinarFeedback,
         allWebinarFeedbacks,

         toggleAdminWebinarFeedbackAction,
         filteredWebinarFeedback
        
      } = useContext(CrossContext);




const [currentWebinarFeedbacksPage, setCurrentWebinarFeedbacksPage] = useState(1);

const  webinarFeedbacksPerPage = 10;

// // Calculate total pages
const totalWebinarFeedbacksPages = allWebinarFeedbacks && Math.ceil(allWebinarFeedbacks.length / webinarFeedbacksPerPage);

// Get requests for the current page
const webinarFeedbacksStartIndex = (currentWebinarFeedbacksPage - 1) * webinarFeedbacksPerPage;
const webinarFeedbacksEndIndex = webinarFeedbacksStartIndex + webinarFeedbacksPerPage;
const currentWebinarFeedbacks = filteredWebinarFeedback && filteredWebinarFeedback.slice(webinarFeedbacksStartIndex, webinarFeedbacksEndIndex).reverse();


// Handle page change
const handleWebinarFeedbacksPageChange = (page) => {
  if (page > 0 && page <= totalWebinarFeedbacksPages) {
    setCurrentWebinarFeedbacksPage(page);
  }
};
    
    

  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          Webinar Feedbacks ({allWebinarFeedbacks && allWebinarFeedbacks.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <WebinarFeedbackFilter />
        </div>
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='large:relative large:right-3'>{type==='recruiter' ? 'Company' : ""} Attendee</div>
            <div className='large:relative large:right-5'>{type==='recruiter' ? 'Preferred' : ""} Webinar</div>
            <div className='large:relative large:right-7'>Phone</div>
            <div className='large:relative large:right-2 text-vogueRed'>Email</div>
            <div className='large:relative large:right-3'>Rating</div>
        </div>


        {
            currentWebinarFeedbacks && currentWebinarFeedbacks.map((reg, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col gap-1 break-words large:w-15 small:w-20'>{type==='recruiter' ? reg.nameOfOrg : reg.fullName}
                        
                        {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminWebinarFeedbackAction(i)}
                        >View</div>
                    </div>
                    
                    <div className='relative large:right-5 small:right-2'>{reg.webinarId.topic}</div>
                    
                    <div className='relative large:right-4 small:right-1'>{reg.phone}</div>
                    
                    <div className={`relative large:right-3 small:right-1 text-vogueRed`}>{reg.email.slice(0, 10)}...</div>

                    <div className={`relative large:right-3 small:right-1`}>{reg.rating}</div>
                    
                    
                    {activeWebinarFeedback === i && (
                    <div>
                      <AdminWebinarFeedbackAction 
                      regNo={i + 1}
                      regEnd={allCourseRegs.length + 1}
                      regId={reg.id}
                      
                      fullName={reg.fullName}
                      webinar={reg.webinarId.topic}
                      email={reg.email}
                      phone={reg.phone}
                      rating={reg.rating}
                      topic={reg.topic}
                      suggestion={reg.suggestion}
                                           
                      />

                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentWebinarFeedbacks && currentWebinarFeedbacks.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentWebinarFeedbacksPage === 1}
            onClick={() => handleWebinarFeedbacksPageChange(currentWebinarFeedbacksPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentWebinarFeedbacksPage} of {totalWebinarFeedbacksPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentWebinarFeedbacksPage === totalWebinarFeedbacksPages}
            onClick={() => handleWebinarFeedbacksPageChange(currentWebinarFeedbacksPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentWebinarFeedbacks && currentWebinarFeedbacks.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export { AllWebinarFeedbacksTable }
