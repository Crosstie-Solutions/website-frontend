import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../../Context/CrossContext';
import { DeletingBtn } from '../../LoadingBtn/LoadingBtn';
import MarkAsPast from '../MarkAsPast/MarkAsPast';
import { IoCopyOutline } from "react-icons/io5";



function AdminWebinarAction(webinar) {

    const { webinarEnd, webinarNo, presenter, topic, description, date, time, webinarLink, duration, past, webinarId, youtubeLink, totalAttendees, attendees} = webinar;

    
    const { 
      deletingWebinar, deleteWebinar,
      toggleAdminWebinarAction, toggleActiveWebinarView, activeWebinarView, copyToClipboard
    } = useContext(CrossContext);
    

    const [markMode, setMarkMode] = useState(false);

    
    const toggleMarkMode = ()=>{
      setMarkMode(!markMode);
    }

    
    const [viewMode, setViewMode] = useState(false);

    
    const toggleViewMode = ()=>{
      setViewMode(!viewMode);
    }

    const [showParticipants, setShowParticipants] = useState(false);
    const toggleParticipants = ()=>{
      setShowParticipants(!showParticipants);
    }

    
    //to delete Webinar
    const [deleteWebinarMode, setDeleteWebinarMode] = useState(false)

    const toggleDeleteWebinarMode = ()=>{
      setDeleteWebinarMode(!deleteWebinarMode);
    }

    const formatDate = (timestamp)=> {
        if (!timestamp) return "Nill";

        const date = new Date(timestamp);

        if (isNaN(date.getTime())) return "Nill";

        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const year = date.getUTCFullYear();

        return `${day}/${month}/${year}`;
      }


    
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center py-10 overflow-y-scroll w-100vw bg-overlay h-100vh'>

        <VscClose className='absolute text-white cursor-pointer large:top-8 large:right-15 text-30px small:right-5 small:top-5'
        onClick={() => toggleAdminWebinarAction('sdsffdf')}
        />

        {/* webinar action buttons */}
      {!markMode && !deleteWebinarMode && !viewMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-1 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
       
        <div 
        // to='/' 
        // to={`/our-solutions/webinars/${webinarId}`}
        className='flex items-center justify-center font-semibold rounded w-70 h-40px text-[#00a14b] cursor-pointer'
        onClick={toggleViewMode}
        >View Webinar</div>
        
        
        <Link 
        to={`/our-solutions/webinars/edit/${webinarId}`}
        className='flex items-center justify-center font-semibold text-[#662d91] rounded w-70 h-40px'
        onClick={()=> toggleAdminWebinarAction(webinarEnd)}
        >Edit Webinar</Link>


        {past===false &&
        <button className='flex items-center justify-center font-semibold rounded w-70 h-40px text-crossBlue'
          onClick={toggleMarkMode}
        >Mark As Past</button>}
       
        <button className='flex items-center justify-center font-semibold rounded w-70 h-40px text-vogueRed'
        onClick={toggleDeleteWebinarMode}
        >Delete Webinar</button>


        <div 
        className='flex items-center justify-center gap-1 font-semibold text-black rounded cursor-pointer w-70 h-40px'
        onClick={()=>{
          copyToClipboard(`https://crosstiesolutions.com/our-solutions/webinars/feedback/${webinarId}`)
        }}
        >Feedback Link <IoCopyOutline className='text-20px' /></div>
        

      </div>}

        {/* delete webinar */}
      {deleteWebinarMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1'>

        {!deletingWebinar &&
          <h4 className='text-center'><span className='font-semibold'>{topic}</span> Is {past===true ? "" : "NOT"} a past event. Are you sure you want to delete this webinar?</h4>}

        {!deletingWebinar &&
        <div className='text-vogueRed'>This action can not be reversed</div>}

        
        {!deletingWebinar &&
        <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple'
          onClick={toggleDeleteWebinarMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-vogueRed'
          onClick={()=>deleteWebinar(webinarId)}
          >Delete</button>
        </div>}
        
        
        {deletingWebinar &&
        <div className='flex items-center justify-center h-auto w-50'>
          <DeletingBtn />
        </div>}
      </div>}

          {/* mark as past */}
      {markMode && <MarkAsPast 
      toggleMarkMode={toggleMarkMode}
      webinarId={webinarId}
      />}

        {/* webinar view */}
      {viewMode &&
      <div className={`flex flex-col items-center justify-center h-100vh px-2 bg-white large:py-2 small:py-2 large:gap-3 large:w-60vw rounded-10 small:w-90vw small:gap-1 large:mt-30 ${totalAttendees > 0 ? "small:mt-35" : "small:mt-10"}`}>

       <div className='flex items-center justify-center gap-5 w-100'>
         <h2 className='font-semibold text-20px'>{topic}</h2>

        {totalAttendees > 0 &&
         <button onClick={()=>toggleParticipants()} className='px-2 border rounded-lg text-crossDarkPurple border-crossDarkPurple py-0.5 text-11px font-semibold'>{showParticipants ? 'Hide' : 'See'} Participants</button>}
       </div>

     {!showParticipants &&
       <div className='flex flex-col gap-1 h-100 large:w-90 small:w-100'>
        
        <h5 className='pl-2 font-semibold text-white large:w-100 bg-crossLightPurple small:w-100'>Webinar Details</h5>
        
        <div className='flex flex-col h-auto gap-1 w-100'>
          <div>Topic: <span className='font-semibold'>{topic}</span></div>
          <div>Description: <span className='font-semibold'>{description}</span></div>
          <div>Presenter: <span className='font-semibold'>{presenter}</span></div>
          <div>Date: <span className='font-semibold'>{date}</span></div>
          <div>Time: <span className='font-semibold'>{time}</span></div>
          <div>Duration: <span className='font-semibold'>{duration}</span></div>
          <div>Total attendees: <span className='font-semibold'>{totalAttendees}</span></div>
          
          <div>Webinar Link: <span className='font-semibold'>{webinarLink}</span></div>
          {past===true &&
          <div>Youtube Link: <span className='font-semibold'>{youtubeLink}</span></div>}
          <div>Webinar Status: <span className='font-semibold'>{past===true ? "Past" : "Upcoming"} Webinar</span></div>
          
        </div>
       </div>}

       
        {totalAttendees > 0 && showParticipants &&
       <div className='flex flex-col gap-2 p-2 pb-3 overflow-y-scroll border h-100 large:w-90 small:w-100'>
          <h5 className='pl-2 font-semibold text-white large:w-100 bg-crossLightPurple small:w-100'>Attendees({totalAttendees})</h5>

          <div className='flex flex-col items-start h-auto gap-2 w-100'>
            <div className='flex gap-5 border-b w-100 border-crossLightPurple'>
              <div className='w-20'>Name</div>
              <div className='w-20'>Email</div>
              <div className='w-20'>Phone</div>
              <div className='w-20'>Date</div>
            </div>

            <div className='flex flex-col items-start h-auto gap-2 w-100'>
              
                {
                  attendees && attendees.map((user, i)=>
                    <div className='flex h-auto gap-5 w-100'
                    key={i}
                    >
                      <div className='w-20 break-words'>{user.firstName} {user.lastName}</div>
                      <div className='w-20 break-words'>{user.email}</div>
                      <div className='w-20 break-words'>{user.phone}</div>
                      <div className='w-20 break-words'>{formatDate(user.createdAt)}</div>
                    </div>
                  )
                }
              
            </div>

            
          </div>
       </div>}
       
      </div>}
      
    </div>
  )
};

export default AdminWebinarAction;
