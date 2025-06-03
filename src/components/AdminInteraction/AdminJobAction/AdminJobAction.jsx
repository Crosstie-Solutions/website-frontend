import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../../Context/CrossContext';
import { DeletingBtn } from '../../LoadingBtn/LoadingBtn';




function AdminJobAction(job) {

    const { jobId, role } = job;

    
    const { 
      toggleJob,
      deleteJob,
      deletingJob,
      
    } = useContext(CrossContext);


    //to delete Job
    const [deleteJobMode, setDeleteJobMode] = useState(false)

    const toggledeleteJobMode = ()=>{
      setDeleteJobMode(!deleteJobMode);
    }


    
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center h-100vh w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-8 large:right-30 text-30px small:right-5 small:top-12'
        onClick={() => toggleJob('sdsffdf')}
        />

      {!deleteJobMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-2 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
       
        <Link 
        // to='/' 
        to={`/careers/job/${jobId}`}
        className='flex items-center justify-center font-bold rounded w-70 h-40px text-[#00a14b]'
        onClick={() => toggleJob(progEnd)}
        >View Job</Link>
        
        
        <Link 
        to={`/careers/job/edit/${jobId}`}
        className='flex items-center justify-center font-bold rounded text-crossBlue w-70 h-40px'
        onClick={()=> toggleJob(progEnd)}
        >Edit Job</Link>

       
        <button className='flex items-center justify-center font-bold rounded w-70 h-40px text-vogueRed'
        onClick={toggledeleteJobMode}
        >Delete Job</button>
        
      </div>}

      {deleteJobMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1'>

        {!deletingJob &&
          <h4 className='text-center'>Are you sure you want to delete the <span className='font-bold'>{role}</span> role?</h4>}

        {!deletingJob &&
        <div className='text-vogueRed'>This action can not be reversed</div>}

        
        {!deletingJob &&
        <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple'
          onClick={toggledeleteJobMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-vogueRed'
          onClick={()=>deleteJob(jobId)}
          >Delete</button>
        </div>}
        
        
        {deletingJob &&
        <div className='flex items-center justify-center h-auto w-50'>
          <DeletingBtn />
        </div>}
      </div>}
    </div>
  )
};

export default AdminJobAction;
