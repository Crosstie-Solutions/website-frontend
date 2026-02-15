import React, { useContext, useEffect, useState } from 'react'
import Job from '../../components/Job/Job'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { CrossContext } from '../../Context/CrossContext'
import { IoIosArrowRoundBack } from "react-icons/io";
import JobApplicationForm from '../../components/JobApplicationForm/JobApplicationForm'
import { MdOutlineFileDownload } from "react-icons/md";




function JobDetailsPage() {

    const {baseUrl, apply, applyNow, me} = useContext(CrossContext);

    const jobId = useParams().jobId

    // view job

    const [job, setJob] = useState();
        const [loadingJob, setLoadingJob] = useState(false);
        
     console.log("job:", job)
    
    useEffect(()=>{
      
        
        const viewJob = async () => {
          try {
            setLoadingJob(true)
            const response = await axios.get(`${baseUrl}/api/job/${jobId}`);
        
            setJob(response.data.data.data);
          } catch (dupError) {
            console.log("error fetching job:", dupError);
          }finally{
            setLoadingJob(false)
          }
        };

        viewJob();
    }, [jobId]);

    
    
  return (
    <div className='flex flex-col items-center large:mt-20 w-100vw small:mt-15'>

        <div className='flex justify-between h-auto large:w-83vw small:w-90vw'>
             <Link 
             to='/careers'
             className='flex items-center self-start justify-center w-auto gap-1 bg-white border rounded large:px-2 h-40px border-crossLightPurple text-crossLightPurple small:px-1'><IoIosArrowRoundBack className='text-30px'/> See More Jobs</Link>

              { me && me.role.toLowerCase().includes('admin') &&
              <Link 
                  to='/admin-dashboard'
                  className='flex items-center self-start justify-center w-auto gap-1 text-white border rounded large:px-2 h-40px bg-crossLightPurple small:px-1'>Admin Dashboard <IoIosArrowRoundBack className='rotate-180 text-30px'/></Link>}
        </div>
        
        {!apply &&
      <div className='mt-2 large:w-83vw small:w-90vw'>
        <Job 
            role={job && job.role}
            mode={job && job.mode}
            location={job && job.location}
            type={job && job.type}
            description={job && job.description}
            responsibilites={job && job.responsibilites}
            requirements={job && job.requirements}
            benefits={job && job.benefits}
            budget={job && job.budget}
            recruitmentProcess={job && job.recruitmentProcess}
            createdAt={job && job.createdAt}
            expired={job && job.expired}
            jobId={job && job._id}
        />
      </div>}
      
      
      {!apply &&
      <div className='flex flex-col items-start h-auto gap-3 pt-3 pb-5 bg-white large:px-3 large:w-83vw small:w-90vw small:px-2'>
        
        <div className='flex flex-col h-auto gap-2 w-100 small:px-1 large:px-0'>
            
            <div className='flex items-center justify-between h-auto large:w-30 '>
                <h3 className='font-semibold text-17px'>Description</h3>

                <button className='flex items-center justify-center w-auto px-2 text-white rounded h-40px bg-crossLightPurple disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-gray-400'
                disabled={job && job.expired}
                onClick={applyNow}
                >Apply Now</button>
                
            </div>

            <p className='text-15px text-crossTextGray'>{job && job.description}</p>
        </div>


        <div className='flex flex-col h-auto gap-2 w-100'>
            <h3 className='font-semibold text-17px'>Responsibilities</h3>
           
            <ul className='flex flex-col h-auto gap-1 list-disc text-15px text-crossTextGray w-100'>
            {job && job.responsibilities.map((res, i)=>
                <li key={i}>{res}</li>
            )}
            </ul>
        </div>

        <div className='flex flex-col h-auto gap-2 w-100'>
            <h3 className='font-semibold text-17px'>Requirements</h3>
           
            <ul className='flex flex-col h-auto gap-1 list-disc text-15px text-crossTextGray w-100'>
            {job && job.requirements.map((req, i)=>
            <li key={i}>{req}</li>
            )
            }
            </ul>
        </div>

        <div className='flex flex-col h-auto gap-2 w-100'>
            <h3 className='font-semibold text-17px'>Benefits</h3>
           
            <ul className='flex flex-col h-auto gap-1 list-disc text-15px text-crossTextGray w-100'>
            {job && job.benefits.map((ben, i)=>
            <li key={i}>{ben}</li>
            )
            }
            </ul>
        </div>

        <div className='flex flex-col h-auto gap-2 w-100'>
            <h3 className='font-semibold text-17px'>Recruitment Process</h3>
           
            <ul className='flex flex-col h-auto gap-1 list-disc text-15px text-crossTextGray w-100'>
                {job && job.recruitmentProcess.map((rec, i)=>
                <li key={i}>{rec}</li>
                )
                }
            </ul>
        </div>

        <button className='flex items-center justify-center w-auto px-2 text-white rounded h-40px bg-crossLightPurple disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-gray-400'
        onClick={applyNow}
         disabled={job && job.expired}
        >Apply Now</button>

        
      </div>}

    {apply &&
      <div className='flex items-center h-auto pt-3 pb-5 mt-3 bg-white large:w-83vw small:w-90vw'>
        <JobApplicationForm 
             role={job && job.role}
             mode={job && job.mode}
             location={job && job.location}
             type={job && job.type}
             budget={job && job.budget}
             jobId={job && job._id}
        />
      </div>}


      {/* applicants
      for admins only */}
      {
        me && me.role.toLowerCase().includes('admin') &&
        
      <div className='flex flex-col items-start h-auto gap-2 pt-3 pb-5 mt-3 bg-white large:w-83vw small:w-90vw'>
        
        <h3 className='p-1 text-left text-white large:w-100 large:text-20px bg-crossLightPurple small:w-90vw'>Applicants({job && job.applicants.length})</h3>

        <div className='flex flex-col items-center h-auto gap-1 w-100 large:pl-2 large:pr-1'>
          
        {job && job.applicants.length > 0 &&
          <div className='flex flex-row items-center justify-between h-auto font-semibold w-100'>
            
            <div className=''>S/N</div>
            <div className='large:w-10 small:w-20'>Name</div>
            <div className='large:w-10 small:w-20'>Phone</div>
            <div className='large:w-10 small:w-20'>Email</div>
            <div className='w-10 small:hidden large:flex'>Address</div>
            <div className='w-10 small:hidden large:flex'>Notice Period</div>
            <div className='w-10 small:hidden large:flex'>Current salary</div>
            <div className='w-10 small:hidden large:flex'>Expected salary</div>
            <div className='large:w-10 small:w-20'>Resume</div>
          </div>}

          {
            job && job.applicants.map((app, i)=>
              <div key={i} className='flex flex-row items-center justify-between h-auto gap-1 w-100'>
                <div className=''>{i + 1}</div>
                <div className='large:w-10 small:w-20'>{app.firstName} {app.lastName}</div>
                <div className='break-words large:w-10 small:w-20'>{app.phone}</div>
                <div className='break-words large:w-10 small:w-20'>{app.email}</div>
                
                <div className='w-10 small:hidden large:flex'>{app.address}</div>
                <div className='w-10 small:hidden large:flex'>{app.noticePeriod}</div>
                <div className='w-10 small:hidden large:flex'>&#8358;{app.currentSalary.toLocaleString()}</div>
                <div className='w-10 small:hidden large:flex'>&#8358;{app.expectedSalary.toLocaleString()}</div>
                <a 
                href={app.resume}
                target='_blank'
                download="material.pdf"
                className='flex items-center large:w-10 small:w-30 gap-0.5 text-13px bg-crossLightPurple text-white h-30px rounded justify-center cursor-pointer'><MdOutlineFileDownload className='text-17px'/> Download</a>
              </div>
            )
          }

          {job && job.applicants.length < 1 && <p className='font-semibold'>No Applicant.</p>}
          
        </div>
      </div>}
    </div>
  )
}

export default JobDetailsPage
