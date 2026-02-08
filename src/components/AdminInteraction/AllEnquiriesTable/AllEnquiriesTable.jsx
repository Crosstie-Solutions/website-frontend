import React, { useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { CrossContext } from "../../../Context/CrossContext";
import AdminEnquiriesAction from "../AdminEnquiriesAction/AdminEnquiriesAction";

function AllEnquiriesTable() {
  // const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages, toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);

  const {
    currentPrograms,
    handleProgramsPageChange,
    currentProgramsPage,
    totalProgramsPages,

    allEnquiries,

    activeEnquiry,

    activeCourseReg,
    toggleAdminEnquiryAction,

    currentEnquiries,
    handleEnquiriesPageChange,
    currentEnquiriesPage,
    totalEnquiriesPages,
  } = useContext(CrossContext);

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


  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          Training Enquiries({allEnquiries && allEnquiries.length})
        </h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
        <div className="flex justify-between h-auto gap-2 border-b border-gray-200 large:font-semibold small:font-semibold w-100">
          <div>S/N</div>
          <div className="w-20 large:relative">Name</div>
          <div className="w-20 large:relative">Course</div>
          <div className="w-20 large:relative">Phone</div>
          <div className="w-20 large:relative text-vogueRed small:hidden large:flex">
            Email
          </div>
          <div className="w-20 large:relative small:hidden large:flex">
            Date/Time
          </div>
        </div>

        {currentEnquiries &&
          currentEnquiries.map((enquiry, i) => (
            <div
              className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-2`}
            >
              <div>{i + 1}.</div>

              <div className="flex flex-col gap-1 break-words large:w-20 small:w-20">
                {enquiry.fullName}

                <div
                  className="flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple"
                  onClick={() => toggleAdminEnquiryAction(i)}
                >
                  View
                </div>
              </div>

              <div className="relative small:right-2 large:w-20">
                {enquiry.program}
              </div>
              <div className="relative small:right-1 large:w-20">
                {enquiry.phone}
              </div>

              <div
                className={`relative  small:right-1 text-vogueRed large:w-20 small:hidden large:flex`}
              >
                {enquiry.email.slice(0, 10)}...
              </div>

              <div
                className={`relative small:right-1 large:w-20 small:hidden large:flex`}
              >
                {formatEnquiryDate(enquiry.createdAt)}
              </div>

              {activeEnquiry === i && (
                <div>
                  <AdminEnquiriesAction
                    enquiryNo={i + 1}
                    enquiryEnd={allEnquiries.length + 1}
                    enquiryId={enquiry.id}
                    program={enquiry.program}
                    nameOfOrg={enquiry.nameOfOrg}
                    mode={enquiry.mode}
                    participants={enquiry.participants}
                    location={enquiry.location}
                    preferredDate={enquiry.preferredDate}
                    designation={enquiry.designation}
                    title={enquiry.title}
                    fullName={enquiry.fullName}
                    email={enquiry.email}
                    phone={enquiry.phone}
                    message={enquiry.message}
                    duration={enquiry.duration}
                    country={enquiry.country}
                    city={enquiry.city}
                    userType={enquiry.userType}
                  />
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Pagination */}
      {currentEnquiries && currentEnquiries.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEnquiriesPage === 1}
            onClick={() => handleEnquiriesPageChange(currentEnquiriesPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentEnquiriesPage} of {totalEnquiriesPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEnquiriesPage === totalEnquiriesPages}
            onClick={() => handleEnquiriesPageChange(currentEnquiriesPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {currentEnquiries && currentEnquiries.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  );
}

export default AllEnquiriesTable;
