import React, { useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from "../../../Context/CrossContext";
import AdminCourseRegAction from "../AdminCourseRegAction/AdminCourseRegAction";

function AllCourseRegsTable() {

  const {
    allCourseRegs,
    currentCourseRegs, courseRegsPerPage,
    handleCourseRegsPageChange,
    currentCourseRegsPage,
    totalCourseRegsPages,
    activeCourseReg,
    toggleAdminCourseRegAction,
  } = useContext(CrossContext);


  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          Course Registrations({allCourseRegs && allCourseRegs.length})
        </h4>
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
        
        <div className="flex justify-start h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100 gap-3">
          <div className='w-20px'>S/N</div>
          <div className="w-20">Name</div>
          <div className="w-20">Course</div>
          <div className="w-20">Phone</div>
          <div className="text-vogueRed w-20">
            Email
          </div>
          <div className="w-20">Location</div>
        </div>

        {currentCourseRegs &&
          currentCourseRegs.map((reg, i) => (
            <div
              className={`flex items-center justify-start h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-3`}
            >
              <div className='w-20px'>{(currentCourseRegsPage - 1) * courseRegsPerPage + i + 1}.</div>
              <div className="flex flex-col gap-1 break-words w-20">
                {reg.fullName}
                <div
                  className="flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple"
                  onClick={() => toggleAdminCourseRegAction(i)}
                >
                  View
                </div>
              </div>

              <div className="w-20">
                {reg.program}
              </div>

              <div className="w-20">
                {reg.phone}
              </div>

              <div
                className={`text-vogueRed w-20`}
              >
                {reg.email.slice(0, 10)}...
              </div>

              <div className={`w-20`}>
                {reg.location}
              </div>

              {activeCourseReg === i && (
                <div>
                  <AdminCourseRegAction
                    regNo={i + 1}
                    regEnd={allCourseRegs.length + 1}
                    regId={reg.id}
                    program={reg.program}
                    nameOfOrg={reg.nameOfOrg}
                    mode={reg.mode}
                    participants={reg.participants}
                    location={reg.location}
                    preferredDate={reg.preferredDate}
                    designation={reg.designation}
                    title={reg.title}
                    fullName={reg.fullName}
                    email={reg.email}
                    phone={reg.phone}
                    message={reg.message}
                    duration={reg.duration}
                  />
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Pagination */}
      {currentCourseRegs && currentCourseRegs.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentCourseRegsPage === 1}
            onClick={() =>
              handleCourseRegsPageChange(currentCourseRegsPage - 1)
            }
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentCourseRegsPage} of {totalCourseRegsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentCourseRegsPage === totalCourseRegsPages}
            onClick={() =>
              handleCourseRegsPageChange(currentCourseRegsPage + 1)
            }
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {currentCourseRegs && currentCourseRegs.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  );
}

export default AllCourseRegsTable;
