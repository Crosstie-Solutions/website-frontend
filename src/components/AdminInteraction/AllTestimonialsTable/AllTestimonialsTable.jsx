import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { CrossContext } from '../../../Context/CrossContext';
import AdminEnquiriesAction from '../AdminEnquiriesAction/AdminEnquiriesAction';
import AdminTestimonialAction from '../AdminTestimonialAction/AdminTestimonialAction';




function AllTestimonialsTable() {

    // const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages, toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);

    
    const {
        currentPrograms,
        handleProgramsPageChange,
        currentProgramsPage,
        totalProgramsPages,

        
        allTestimonials,

        activeTestimonial,
        toggleAdminTestimonialAction,


        currentTestimonials,
  handleTestimonialsPageChange,
  currentTestimonialsPage,
  totalTestimonialsPages,
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">Testimonials({allTestimonials && allTestimonials.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto gap-5 border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>Index</div>
            <div className='w-20'>Name</div>
            <div className='w-20'>Role</div>
            <div className='w-20'>Course</div>
            <div className='w-20 small:hidden large:flex'>Feedback</div>
            <div className='w-20 small:hidden large:flex'>Date</div>
           
        </div>

        {
            currentTestimonials && currentTestimonials.map((testimony, i)=>
                <div className={`flex items-center h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-5`}
                key={i}
                >
                  
                    <div className=''>{testimony.priorityIndex}.</div>
                    
                    
                    <div className='flex flex-col gap-1 break-words large:w-20 small:w-20'>{testimony.name}
                        
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminTestimonialAction(i)}
                        >Action</div>
                    </div>
                   
                    <div className={`w-20`}>{testimony.jobRole}</div>
                    <div className={`w-20`}>{testimony.program}</div>
                    <div className={`w-20 small:hidden large:flex`}>{testimony.testimony.slice(0, 30)}...</div>
                    <div className={`w-20 small:hidden large:flex`}>{testimony.date}</div>

                    
                    {activeTestimonial === i &&
                      <div>
                        <AdminTestimonialAction 
                        testimonyNo={i + 1}
                        testimonyEnd={allTestimonials.length + 1}
                        testimonyId={testimony.id}
                        priorityIndex={testimony.priorityIndex}
                        name={testimony.name}
                        jobRole={testimony.jobRole}
                        program={testimony.program}
                        testimony={testimony.testimony}
                        date={testimony.date}
                        />
                      </div>}
                      {/* {activeTestimonial === i &&   */}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentTestimonials && currentTestimonials.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentTestimonialsPage === 1}
            onClick={() => handleTestimonialsPageChange(currentTestimonialsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentTestimonialsPage} of {totalTestimonialsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentTestimonialsPage === totalTestimonialsPages}
            onClick={() => handleTestimonialsPageChange(currentTestimonialsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentTestimonials && currentTestimonials.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export default AllTestimonialsTable;
