import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { CrossContext } from '../../../Context/CrossContext';




function AdminContactFormAction(enquiry) {

    const { enquiryNo, enquiryEnd, enquiryId, program, nameOfOrg, mode, participants,  location, preferredDate, designation, title, fullName, email, phone, message, duration, country, city, userType, service, adminEmail} = enquiry;

    
    const {  
      toggleAdminContactFormAction
    } = useContext(CrossContext);


    
  return (
    <div className='absolute top-0 left-0 z-20 flex flex-col items-center justify-center py-10 min-h-100vh w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={()=>toggleAdminContactFormAction(enquiryEnd)}
        />
     
      <div className='flex flex-col items-center justify-center h-auto px-2 py-5 bg-white large:gap-3 large:w-60vw rounded-10 small:w-90vw small:gap-1'>

        <h2 className='text-20px'>Contact Form - <span className='font-semibold'>{service}</span></h2>

        {/* official */}
       {/* <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
        <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Contact Form Details</h5>
        
        <div className='flex flex-col h-auto gap-1 w-100'>
          <div>Na: <span className='font-semibold'>{program}</span></div>
          <div>Enquiry type: <span className='font-semibold'>{userType}</span></div>
          
          {userType==="corporate" &&
          <div>Company Name: <span className='font-semibold'>{nameOfOrg}</span></div>}
          
          <div>Preferred Mode: <span className='font-semibold'>{mode}</span></div>
          <div>Duration: <span className='font-semibold'>{duration}</span></div>
          {userType==="corporate" &&
          <div>No. of participants: <span className='font-semibold'>{participants}</span></div>}
          
          <div>Location: <span className='font-semibold'>{city}, {country}</span></div>
          <div>Preferred Date: <span className='font-semibold'>{preferredDate}</span></div>

          {userType==="corporate" &&
          <div>Designation: <span className='font-semibold'>{designation}</span></div>}
        </div>
       </div> */}

        {/* personal */}
        <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
          <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Form Details </h5>
          
          <div className='flex flex-col h-auto gap-1 w-100'>
            <div>User Name: <span className='font-semibold'>{fullName}</span></div>
            <div>User Email: <span className='font-semibold'>{email}</span></div>
            <div>Selected Service: <span className='font-semibold'>{service}</span></div>           
            <div>Admin Notified: <span className='font-semibold'>{adminEmail}</span></div>           
            <div>Message: <span className='font-semibold'>{message}</span></div>
          </div>
       </div>
       
      </div>
    </div>
  )
};

export default AdminContactFormAction;