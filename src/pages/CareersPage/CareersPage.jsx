import React, { useContext } from "react";
import Job from "../../components/Job/Job";
import { CrossContext } from "../../Context/CrossContext";
import JobsFilter from "../../components/JobsFilter/JobsFilter";
import { PiUsersThree } from "react-icons/pi";
import { Link } from "react-router-dom";

function CareersPage() {
  const { allJobs, currentJobs, loadingAllJobs } = useContext(CrossContext);

  return (
    <div className="flex flex-col items-center h-auto border large:gap-3 large:mt-20 w-100vw small:mt-15 small:gap-2">
      <h1 className="p-1 text-left text-white large:w-83vw large:text-20px bg-crossLightPurple small:w-90vw">
        {allJobs && allJobs.length} Job
        {allJobs && allJobs.length > 1 ? "s" : ""}
      </h1>

      <div className="flex items-center justify-start w-auto h-auto">
        <JobsFilter />
      </div>

      <div className="flex flex-col items-center h-auto large:w-83vw small:w-90vw">
        {currentJobs &&
          currentJobs.map((job, i) => (
            <Job
              key={i}
              role={job.role}
              mode={job.mode}
              location={job.location}
              type={job.type}
              description={job.description}
              responsibilites={job.responsibilites}
              requirements={job.requirements}
              benefits={job.benefits}
              budget={job.budget}
              recruitmentProcess={job.recruitmentProcess}
              createdAt={job.createdAt}
              expired={job.expired}
              jobId={job._id}
            />
          ))}

        {!loadingAllJobs && currentJobs && currentJobs.length < 1 && (
          <p>No job found</p>
        )}

        {loadingAllJobs && <p>Loading jobs...</p>}
      </div>
      
      <div className="flex items-center justify-start h-auto mt-3 large:w-83vw small:w-90vw">
        
        <div className="flex flex-row items-center gap-2 bg-white border rounded-lg large:w-50 small:w-90vw h-130px">
          
          <div className="flex flex-col items-start justify-center w-40 gap-1 text-white rounded-tl-lg rounded-bl-lg bg-crossBlue large:p-2 h-100 small:p-1">
            
            <div className="p-0.5 border rounded-full"><PiUsersThree className="text-40px" /></div>
            <div className="font-semibold text-15px">Crosstie Talent Network</div>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 p-1 text-black rounded-tl-lg rounded-bl-lg w-60 h-100">
            <div className="text-13px">Get career insights and job opportunities.</div>
            <Link to='/careers/talent-community' className="flex items-center w-auto px-1 border rounded h-30px text-crossBlue border-crossBlue hover:bg-crossBlue hover:text-white">Join our network</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default CareersPage;
