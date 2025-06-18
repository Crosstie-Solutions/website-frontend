import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { CrossContext } from '../../../Context/CrossContext';
import AdminEnquiriesAction from '../AdminEnquiriesAction/AdminEnquiriesAction';
import AdminContactFormAction from '../AdminContactFormAction/AdminContactFormAction';




function AllContactFormsTable() {

    // const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages, toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);

    
    const {
        currentPrograms,
        handleProgramsPageChange,
        currentProgramsPage,
        totalProgramsPages,

        currentContactForms,
        handleContactFormsPageChange,
        currentContactFormsPage,
        totalContactFormsPages,


          activeContactForm, toggleAdminContactFormAction, viewAllContactForms, allContactForms, loadingAllContactForms
        
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">Contact Forms({allContactForms && allContactForms.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex h-auto gap-1 border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='flex justify-start w-20'>Name</div>
            <div className='flex justify-start w-20 text-vogueRed'>Email</div>
            <div className='flex justify-start w-20'>Phone</div>
            <div className='flex justify-start w-20'>Service</div>
            <div className='flex justify-start w-20'>Message</div>
        </div>

        {
            currentContactForms && currentContactForms.map((enquiry, i)=>
                <div className={`flex items-center justify-start h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-1`}
                key={i}
                >
                    <div>{i + 1}.</div>
                    
                    <div className='flex flex-col gap-1 break-words large:w-20 small:w-20'>{enquiry.fullName} 
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminContactFormAction(i)}
                        >View</div>
                    </div>
                    
                    <div className={`small:right-1 text-vogueRed large:w-20 small:hidden large:flex justify-start`}>{enquiry.email.slice(0, 10)}...</div>

                    <div className={`small:right-1 large:w-20 small:hidden large:flex justify-start`}>{enquiry.phone}</div>
                    
                    <div className='flex justify-start small:right-2 large:w-20'>{enquiry.service}</div>
                    
                    <div className='flex justify-start text-center small:right-1 large:w-20'>{enquiry.message.slice(0, 80)}...</div>
                    
                  
                    
                    
                    {activeContactForm === i && (
                    <div>
                      <AdminContactFormAction 
                      enquiryNo={i + 1}
                      enquiryEnd={allContactForms.length + 1}
                      enquiryId={enquiry.id}
                      service={enquiry.service}
                      fullName={enquiry.fullName}
                      email={enquiry.email}
                      phone={enquiry.phone}
                      message={enquiry.message}
                      adminEmail={enquiry.adminEmail}
                      />
                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {allContactForms && allContactForms.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentContactFormsPage === 1}
            onClick={() => handleContactFormsPageChange(currentContactFormsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentContactFormsPage} of {totalContactFormsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentContactFormsPage === totalContactFormsPages}
            onClick={() => handleContactFormsPageChange(currentContactFormsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {allContactForms && allContactForms.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export default AllContactFormsTable;
