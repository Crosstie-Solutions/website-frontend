import React, { useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from "../../../Context/CrossContext";
import AdminProgramAction from "../AdminProgramAction/AdminProgramAction";
import AdminCourseRegAction from "../AdminCourseRegAction/AdminCourseRegAction";
import AdminConsultingRegAction from "../AdminConsultingRegAction/AdminConsultingRegAction";

function AllConsultingReqTable() {
  const {
    allConsultingReqs,

    currentConsultingReqs,

    handleConsultingReqsPageChange,

    currentConsultingReqsPage,

    totalConsultingReqsPages,

    activeConsultingReq,
    toggleAdminConsultingReqAction,
  } = useContext(CrossContext);




  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          Course Registrations({allConsultingReqs && allConsultingReqs.length})
        </h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
        <div className="flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100">
          <div className="w-auto">S/N</div>
          <div className="w-20">Name</div>
          <div className="w-20">Service</div>
          <div className="w-20">Phone</div>
          <div className="text-vogueRed w-20">Email</div>
          <div className="w-20">Organization</div>
        </div>

        {currentConsultingReqs &&
          currentConsultingReqs.map((reg, i) => (
            <div
              className={`flex items-center justify-between h-auto w-100 ${
                i % 2 === 0 ? "bg-gray-100" : "bg-white"
              } pl-1 py-1`}
            >
              <div>{i + 1}.</div>
              <div className="flex flex-col gap-1 break-words large:w-15 small:w-20">
                {reg.fullName}

                {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}

                <div
                  className="flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple"
                  onClick={() => toggleAdminConsultingReqAction(i)}
                >
                  View
                </div>
              </div>

              <div className="w-20">{reg.service}</div>
              <div className="w-20">{reg.phone}</div>

              <div
                className={`text-vogueRed w-20`}
              > {reg.email.slice(0, 10)}...</div>

              <div className={`w-20`}>
                {reg.nameOfOrg}
              </div>

              {activeConsultingReq === i && (
                    <div>
                      <AdminConsultingRegAction
                      regNo={i + 1}
                      regEnd={allConsultingReqs.length + 1}
                      regId={reg.id}
                      service={reg.service}
                      nameOfOrg={reg.nameOfOrg}
                      role={reg.role}
                      fullName={reg.fullName}
                      email={reg.email}
                      phone={reg.phone}
                      message={reg.message}
                      />
                    </div>)}
            </div>
          ))}
      </div>

      {/* Pagination */}
      {currentConsultingReqs && currentConsultingReqs.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentConsultingReqsPage === 1}
            onClick={() =>
              handleConsultingReqsPageChange(currentConsultingReqsPage - 1)
            }
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentConsultingReqsPage} of {totalConsultingReqsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentConsultingReqsPage === totalConsultingReqsPages}
            onClick={() =>
              handleConsultingReqsPageChange(currentConsultingReqsPage + 1)
            }
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {currentConsultingReqs && currentConsultingReqs.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  );
}

export default AllConsultingReqTable;
