import React, { useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { CrossContext } from "../../../Context/CrossContext";
import AdminEnquiriesAction from "../AdminEnquiriesAction/AdminEnquiriesAction";

function AllDownloadsTable() {
  const {
    currentDownloads,
    handleDownloadsPageChange,
    currentDownloadsPage,
    totalDownloadsPages,
    allDownloads,
  } = useContext(CrossContext);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          File Downloads({allDownloads && allDownloads.length})
        </h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
        <div className="flex justify-between h-auto gap-2 border-b border-gray-200 large:font-semibold small:font-semibold w-100">
          <div>S/N</div>
          <div className="w-20 large:relative">Name</div>
          <div className="w-20 large:relative">Email</div>
          <div className="w-20 large:relative">File Title</div>
          <div className="w-20 large:relative">Date</div>
        </div>

        {currentDownloads &&
          currentDownloads.map((file, i) => (
            <div
              className={`flex items-center justify-between h-auto w-100 ${
                i % 2 === 0 ? "bg-gray-100" : "bg-white"
              } pl-1 py-1 gap-2`}
            >
              <div>{(currentDownloadsPage - 1) * 10 + i + 1}.</div>

              <div className="flex flex-col gap-1 break-words large:w-10 small:w-20">
                {file.fullName}
              </div>

              <div
                className={`text-vogueRed large:flex flex-col gap-1 break-words large:w-20 small:hidden`}
              >
                {file.email}
              </div>

              <div
                className={`relative small:right-1 large:w-20 small:hidden large:flex`}
              >
                {file.title}
              </div>

              <div
                className={`relative small:right-1 large:w-20 small:hidden large:flex`}
              >
                {formatTimestamp(file.createdAt)}
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      {currentDownloads && currentDownloads.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentDownloadsPage === 1}
            onClick={() => handleDownloadsPageChange(currentDownloadsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentDownloadsPage} of {totalDownloadsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentDownloadsPage === totalDownloadsPages}
            onClick={() => handleDownloadsPageChange(currentDownloadsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {currentDownloads && currentDownloads.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  );
}

export default AllDownloadsTable;
