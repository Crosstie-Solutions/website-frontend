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
    

 function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
    

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

         <div className='flex justify-start h-auto gap-1 border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='w-20'>Attendee</div>
            <div className='w-20'>Webinar</div>
            <div className='w-20'>Phone</div>
            <div className='w-20'>Date</div>
            <div className='w-20'>Rating</div>
        </div>


        {
            currentWebinarFeedbacks && currentWebinarFeedbacks.map((reg, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col w-20 gap-1 break-words'>{type==='recruiter' ? reg.nameOfOrg : reg.fullName}
                        
                        {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminWebinarFeedbackAction(i)}
                        >View</div>
                    </div>
                    
                    <div className='w-20'>{reg.webinarId.topic.slice(0, 10)}...</div>
                    
                    <div className='w-20'>{reg.phone}</div>
                    
                    <div className={`w-20`}>{formatTimestamp(reg.createdAt)}</div>

                    <div className={`w-20`}>{reg.rating}</div>
                    
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
                      isRelatable={reg.isRelatable ? reg.isRelatable : "N/A"}
                      isClear={reg.isClear ? reg.isClear : "N/A"}
                      isEngaging={reg.isEngaging ? reg.isEngaging : "N/A"}
                      topic={reg.topic ? reg.topic : "N/A"}
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
