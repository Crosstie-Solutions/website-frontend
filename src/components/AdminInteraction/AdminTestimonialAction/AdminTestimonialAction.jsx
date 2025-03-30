import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../../Context/CrossContext';
import { DeletingBtn } from '../../LoadingBtn/LoadingBtn';
import MarkAsPast from '../MarkAsPast/MarkAsPast';




function AdminTestimonialAction(feedback) {

    const { testimonyNo, testimonyEnd, testimonyId, priorityIndex, name, jobRole, program, testimony, date
    } = feedback;
    
    const { 
       deletingTestimonial, deleteTestimonial,
       toggleAdminTestimonialAction
    } = useContext(CrossContext);
    

    
    const [viewMode, setViewMode] = useState(false);

    
    const toggleViewMode = ()=>{
      setViewMode(!viewMode);
    }


    //to delete Testimonial
    const [deleteTestimonialMode, setDeleteTestimonialMode] = useState(false)

    const toggleDeleteTestimonialMode = ()=>{
      setDeleteTestimonialMode(!deleteTestimonialMode);
    }


    
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center py-10 overflow-y-scroll w-100vw bg-overlay h-100'>

        <VscClose className='absolute text-white cursor-pointer large:top-8 large:right-15 text-30px small:right-5 small:top-5'
        onClick={() => toggleAdminTestimonialAction(testimonyEnd)}
        />

        {/* Testimonial action buttons */}
      {!deleteTestimonialMode && !viewMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-1 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
       
        <div 
        className='flex items-center justify-center font-semibold rounded w-70 h-40px text-[#00a14b] cursor-pointer'
        onClick={toggleViewMode}
        >View Testimonial</div>
        
        
        <Link 
        to={`/about-us/feedbacks/edit/${testimonyId}`}
        className='flex items-center justify-center font-semibold text-[#662d91] rounded w-70 h-40px'
        onClick={()=> toggleAdminTestimonialAction(testimonyEnd)}
        >Edit Testimonial</Link>
        
       
        <button className='flex items-center justify-center font-semibold rounded w-70 h-40px text-vogueRed'
        onClick={toggleDeleteTestimonialMode}
        >Delete Testimonial</button>
        
      </div>}

        {/* delete Testimonial */}
      {deleteTestimonialMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1'>

        {!deletingTestimonial &&
          <h4 className='text-center'>Are you sure you want to delete <span className='font-semibold'>{name}'s feedback?</span></h4>}

        {!deletingTestimonial &&
        <div className='text-vogueRed'>This action can not be reversed</div>}

        
        {!deletingTestimonial &&
        <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple'
          onClick={toggleDeleteTestimonialMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-vogueRed'
          onClick={()=>deleteTestimonial(testimonyId)}
          >Delete</button>
        </div>}
        
        
        {deletingTestimonial &&
        <div className='flex items-center justify-center h-auto w-50'>
          <DeletingBtn />
        </div>}
      </div>}


        {/* testimonial view */}
      {viewMode &&
      <div className={`flex flex-col items-center justify-center h-auto px-2 bg-white large:py-5 small:py-2 large:gap-3 large:w-60vw rounded-10 small:w-90vw small:gap-1 large:mt-30 ${testimony.length > 100 ? "small:mt-30" : "small:mt-5"}`}>
        {/* ${totalAttendees > 0 ? "small:mt-35" : "small:mt-10"} */}

        <h2 className='font-semibold text-20px'>{name}</h2>

     
       <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
        
        <h5 className='pl-2 font-semibold text-white large:w-100 bg-crossLightPurple small:w-100'>Testimonial Details</h5>
        
        <div className='flex flex-col h-auto gap-1 w-100'>
          <div>Name: <span className='font-semibold'>{name}</span></div>
          <div>Position: <span className='font-semibold'>{jobRole}</span></div>
          <div>Program: <span className='font-semibold'>{program}</span></div>
          <div>Date: <span className='font-semibold'>{date}</span></div>
          <div>Index: <span className='font-semibold'>{priorityIndex}</span></div>
          <div>Feedback: <span className='font-semibold'>{testimony}</span></div>
          
        </div>
       </div>       
      </div>}
      
    </div>
  )
};

export default AdminTestimonialAction;
