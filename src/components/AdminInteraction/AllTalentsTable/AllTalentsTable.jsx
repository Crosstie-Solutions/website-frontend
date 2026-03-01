import React, { useContext, useEffect } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from "../../../Context/CrossContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import TalentDetailsModal from "../TalentDetailsModal/TalentDetailsModal";
import TalentsFilter from "@/components/TalentsFilter/TalentsFilter";

function AllTalentsTable() {

  const {
    viewAllTalents,
    baseUrl,


    allTalents,

    currentTalents,
    handleTalentsPageChange,
    currentTalentsPage,
    totalTalentsPages,
  } = useContext(CrossContext);

  
  useEffect(()=>{
    viewAllTalents();
  },[]);

  const [deleting, setDeleting] = useState('');

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

   const deleteTalent = async (itemId) => {
      try {
        setDeleting(itemId);
        const response = await axios.delete(`${baseUrl}/api/talent/${itemId}`);
        
        if(response.status ===200){
          toast.success(response.data.message);
          viewAllTalents();
        }
      } catch (dupError) {
        console.log("error fetching all courses:", dupError);
      } finally {
        setDeleting(null);
      }
    };

    const [selectedTalent, setSelectedTalent] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// When clicking on a talent row
const handleViewDetails = (talent) => {
  setSelectedTalent(talent);
  setIsModalOpen(true);
};

  return (
    <div className="flex flex-col items-center h-auto gap-2 w-100">
      <div className="flex items-center h-auto gap-5 w-100">
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          All Talents({allTalents && allTalents.length})
        </h4>
        <div className='large:w-70 h-40px small:w-100'>
            <TalentsFilter />
        </div>
      </div>

      <div className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px">
       
        <div className="flex justify-start h-auto gap-1 border-b border-gray-200 large:font-semibold small:font-semibold w-100">
          <div>S/N</div>
          <div className="w-20">Name</div>
          <div className="w-20">Email</div>
          <div className="w-20">Role</div>
          <div className="w-20">Date/Time</div>
        </div>

        {currentTalents &&
          currentTalents.map((user, i) => (
            <div
              className={`flex items-center justify-start h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1 gap-1`}
              key={i}
            >
              <div>{(currentTalentsPage - 1) * 10 + i + 1}.</div>

              <div className={`w-20 break-words`}>{user.firstName} {user.lastName}
                <div  
                  className='flex items-center justify-center text-white rounded cursor-pointer h-20px w-90px bg-crossLightPurple text-11px'
                  onClick={()=>handleViewDetails(user)}
                  >view Details</div>
              </div>
              <div className={`w-20 break-words`}>{user.email}</div>
              <div className={`w-20 break-words`}>{user.role}</div>
              <div className={`w-20`}>{formatDate(user.createdAt)}</div>
              
              <button className="cursor-pointer"
              onClick={()=>{
                deleteTalent(user._id)
              }}
              >
                {deleting=== user._id ? <div className="border-t-4 border-r-4 rounded-full border-crossLightPurple w-20px h-20px animate-spin"></div> :
                <RiDeleteBin6Line className="text-vogueRed" />}
              </button>
            </div>
          ))}
      </div>

      {/* Pagination */}
      {allTalents && allTalents.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentTalentsPage === 1}
            onClick={() =>
              handleTalentsPageChange(currentTalentsPage - 1)
            }
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentTalentsPage} of {totalTalentsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentTalentsPage === totalTalentsPages}
            onClick={() =>
              handleTalentsPageChange(currentTalentsPage + 1)
            }
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

      {allTalents && allTalents.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}

      <TalentDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        talent={selectedTalent}
      />
    </div>
  );
}

export default AllTalentsTable;
