import React, { useContext } from 'react'
import Job from '../../components/Job/Job'
import { CrossContext } from '../../Context/CrossContext'
import JobsFilter from '../../components/JobsFilter/JobsFilter';

function CareersPage() {

    const {allJobs, currentJobs, loadingAllJobs} = useContext(CrossContext);

  return (
    <div className='flex flex-col items-center h-auto large:gap-3 large:mt-20 w-100vw small:mt-15 small:gap-2'>
      
      <h1 className='p-1 text-left text-white large:w-83vw large:text-20px bg-crossLightPurple small:w-90vw'>{allJobs && allJobs.length} Job{allJobs && allJobs.length > 1 ? "s" : ""}</h1>

      <div className='flex items-center justify-start w-auto h-auto'>
        <JobsFilter />
      </div>

      <div className='flex flex-col items-center h-auto large:w-83vw small:w-90vw'>
        {
            currentJobs && currentJobs.map((job, i)=>
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
                jobId={job._id}
                />
            )
        }
       
       {!loadingAllJobs && currentJobs && currentJobs.length < 1 &&
        <p>No job found</p>}

          {loadingAllJobs && <p>Loading jobs...</p>}
      </div>
    </div>
  )
}

export default CareersPage
