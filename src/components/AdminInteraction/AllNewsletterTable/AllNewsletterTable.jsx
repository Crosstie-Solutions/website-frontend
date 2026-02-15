import React, { useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from "../../../Context/CrossContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

function AllNewsletterTable() {

  const {
    allNewsletters,

    currentNewsletters,
    handleNewslettersPageChange,
    currentNewslettersPage,
    totalNewslettersPages,baseUrl
  } = useContext(CrossContext);

  const [deleting, setDeleting] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "long" });
    const year = date.getFullYear();

    const getOrdinalSuffix = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
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

   const deleteNewsletter = async (itemId) => {
      try {
        setDeleting(true);
        const response = await axios.delete(`${baseUrl}/api/newsletter/delete/${itemId}`);
        
        if(response.status ===200){
          toast.success('Record deleted');
        }
      } catch (dupError) {
        console.log("error fetching all courses:", dupError);
      } finally {
        setDeleting(false);
      }
    };

  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          Newsletter subscribers({allNewsletters && allNewsletters.length})
        </h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
       
        <div className="flex justify-start h-auto gap-1 border-b border-gray-200 large:font-semibold small:font-semibold w-100">
          <div>S/N</div>
          <div className="w-30">Name</div>
          <div className="w-30">Email</div>
          <div className="w-30">Date/Time</div>
        </div>

        {currentNewsletters &&
          currentNewsletters.map((user, i) => (
            <div
              className={`flex items-center justify-start h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-1`}
            >
              <div>{(currentNewslettersPage - 1) * 10 + i + 1}.</div>

              <div className={`w-30 break-words`}>{user.firstName} {user.lastName}</div>
              <div className={`text-vogueRed w-30 break-words`}>{user.email}</div>
              <div className={`w-30`}>{formatDate(user.createdAt)}</div>
              
              <button className="cursor-pointer"
              onClick={()=>{
                deleteNewsletter(user._id)
              }}
              >
                {deleting ? <div className="border-t-4 border-r-4 rounded-full border-crossLightPurple w-20px h-20px animate-spin"></div> :
                <RiDeleteBin6Line className="text-vogueRed" />}
              </button>
            </div>
          ))}
      </div>

      {/* Pagination */}
      {allNewsletters && allNewsletters.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentNewslettersPage === 1}
            onClick={() =>
              handleNewslettersPageChange(currentNewslettersPage - 1)
            }
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentNewslettersPage} of {totalNewslettersPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentNewslettersPage === totalNewslettersPages}
            onClick={() =>
              handleNewslettersPageChange(currentNewslettersPage + 1)
            }
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {allNewsletters && allNewsletters.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  );
}

export default AllNewsletterTable;
