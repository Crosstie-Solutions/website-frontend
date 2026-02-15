import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { CrossContext } from '../../../Context/CrossContext';
import AdminEnquiriesAction from '../AdminEnquiriesAction/AdminEnquiriesAction';
import AdminContactFormAction from '../AdminContactFormAction/AdminContactFormAction';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';




function AllContactFormsTable() {
    
    const {

        currentContactForms,
        handleContactFormsPageChange,
        currentContactFormsPage,
        totalContactFormsPages,


          activeContactForm, toggleAdminContactFormAction, viewAllContactForms, allContactForms, loadingAllContactForms,
        baseUrl,
      } = useContext(CrossContext);

      
      const sortedContactForms = currentContactForms.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

 const formatEnquiryDate = (dateString) => {
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

 const [deleting, setDeleting] = useState(false);

const deleteContactForm = async (itemId) => {
      try {
        setDeleting(true);
        const response = await axios.delete(`${baseUrl}/api/contact/delete/${itemId}`);
        
        if(response.status ===200){
          toast.success('Record deleted');
          viewAllContactForms()
        }
      } catch (dupError) {
        console.log("error deleting contact form:", dupError);
      } finally {
        setDeleting(false);
      }
    };
    
    
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
            <div className='flex justify-start w-20'>Date/Time</div>
        </div>

        {
            sortedContactForms && sortedContactForms.map((enquiry, i)=>
                <div className={`flex items-center justify-start h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} p-1 py-1 gap-1`}
                key={i}
                >
                    <div>{(currentContactFormsPage - 1) * 10 + i + 1}.</div>
                    
                    <div className='w-20'>{enquiry.fullName} 
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminContactFormAction(i)}
                        >View</div>
                    </div>
                    
                    <div className={`w-20`}>{enquiry.email.slice(0, 10)}...</div>

                    <div className={`w-20`}>{enquiry.phone}</div>
                    
                    <div className='w-20'>{enquiry.service}</div>
                    
                    <div className='w-20'>{formatEnquiryDate(enquiry.createdAt)}</div>
                    <button className="cursor-pointer"
                      onClick={()=>{
                        deleteContactForm(enquiry._id)
                      }}
                      >
                        {deleting ? <div className="border-t-4 border-r-4 rounded-full border-crossLightPurple w-20px h-20px animate-spin"></div> :
                        <RiDeleteBin6Line className="text-vogueRed" />}
                      </button>
                    
                  
                    
                    
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
