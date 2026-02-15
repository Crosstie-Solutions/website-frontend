import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeletePartner from "../../DeletePartner/DeletePartner";
import JobsFilter from "../../JobsFilter/JobsFilter";
import AdminJobAction from "../AdminJobAction/AdminJobAction";




function AllJobsTable() {

  
  const {
    loadingAllJobs,
     currentJobs,
     currentJobsPage,
     totalJobsPages,
     handleJobsPageChange,
     allJobs,
     deleteJob,

     activeJob, toggleJob
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Jobs({allJobs && allJobs.length})</h4>
        
        <div className='large:w-70 h-40px small:w-100'>
            <JobsFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Role</div>
          <div className="w-20">Mode</div>
          <div className="w-20">Type</div>
          <div className="w-20">Total Applicants</div>
        </div>

        {currentJobs &&
          currentJobs.map((job, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto justify-between`}
              >
                <div className="w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20`}>
                  {job.role}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px large:w-80px small:w-50px bg-crossLightPurple text-13px'
                    onClick={()=>toggleJob(i)}
                    >Action</div>
                </div>

                <div className="w-20">{job.mode}</div>
                
                <div className="w-20">{job.type}</div>
                
                <div className="w-20">{job.totalApplicants}</div>

                {activeJob === i && (
                    <div>
                      <AdminJobAction 
                      jobId={job._id}
                      role={job.role}
                      expired={job.expired}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadingAllJobs && currentJobs && currentJobs.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentJobsPage === 1}
            onClick={() => handleJobsPageChange(currentJobsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentJobsPage} of {totalJobsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentJobsPage === totalJobsPages}
            onClick={() => handleJobsPageChange(currentJobsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadingAllJobs && (
        <p className="mt-5 font-bold text-center w-100">Loading jobs...</p>
      )}

      {!loadingAllJobs && currentJobs && currentJobs.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">No job found.</p>
      )}
    </div>
  );
}

export default AllJobsTable;
