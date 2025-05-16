import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../../Context/CrossContext';
import { DeletingBtn } from '../../LoadingBtn/LoadingBtn';




function AdminEventAction(post) {

    const { postEnd, progNo, eventId, title } = post;

    
    const { 

      activeEvent, toggleEvent, deleteEvent, deletingEvent
    } = useContext(CrossContext);


    //to delete report
    const [deleteEventMode, setDeleteEventMode] = useState(false)

    const toggleDeleteEventMode = ()=>{
      setDeleteEventMode(!deleteEventMode);
    }


    
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center h-100vh w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-8 large:right-30 text-30px small:right-5 small:top-12'
        onClick={() => toggleEvent('sdsffdf')}
        />

      {!deleteEventMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-2 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
       
        {/* <Link 
        // to='/' 
        to={`/media-report/${eventId}`}
        className='flex items-center justify-center font-bold rounded w-70 h-40px text-[#00a14b]'
        onClick={() => toggleAdminReportAction(postEnd)}
        >View Post</Link> */}
        
        
        <Link 
        to={`/about-us/crosstie-photos/edit/${eventId}`}
        className='flex items-center justify-center font-bold text-[#662d91] rounded w-70 h-40px'
        onClick={()=> toggleEvent(postEnd)}
        >Edit Event</Link>

       
        <button className='flex items-center justify-center font-bold rounded w-70 h-40px text-vogueRed'
        onClick={toggleDeleteEventMode}
        >Delete Event</button>
        
      </div>}

      {deleteEventMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1'>

        {!deletingEvent &&
          <h4 className='text-center'>Are you sure you want to delete <span className='font-bold'>{title}?</span></h4>}

        {!deletingEvent &&
        <div className='text-vogueRed'>This action can not be reversed</div>}

        
        {!deletingEvent &&
        <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple'
          onClick={toggleDeleteEventMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-vogueRed'
          onClick={()=>deleteEvent(eventId)}
          >Delete</button>
        </div>}
        
        
        {deletingEvent &&
        <div className='flex items-center justify-center h-auto w-50'>
          <DeletingBtn />
        </div>}
      </div>}
    </div>
  )
};

export default AdminEventAction;
