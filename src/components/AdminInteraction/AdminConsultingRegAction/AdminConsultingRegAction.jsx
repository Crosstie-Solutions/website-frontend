import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { CrossContext } from '../../../Context/CrossContext';




function AdminConsultingRegAction(reg) {

    const { regNo, regEnd, regId, service, nameOfOrg, role, fullName, email, phone, message } = reg;

    
    const {  
       toggleAdminConsultingReqAction
    } = useContext(CrossContext);


    
  return (
    <div className='absolute top-0 left-0 z-20 flex flex-col items-center justify-center h-auto py-10 w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={() => toggleAdminConsultingReqAction('exit')}
        />
     
      <div className='flex flex-col items-center justify-center h-auto px-2 py-5 bg-white large:gap-3 large:w-60vw rounded-10 small:w-90vw small:gap-1'>

        <h2 className='font-semibold text-20px'>Consulting Request</h2>

        {/* official */}
       <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
        <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Course details</h5>
        
        <div className='flex flex-col h-auto gap-1 w-100'>
          <div>Area of Interest: <span className='font-semibold'>{service}</span></div>
          <div>Company Name: <span className='font-semibold'>{nameOfOrg}</span></div>
          
          <div>Role: <span className='font-semibold'>{role}</span></div>
        </div>
       </div>

        {/* personal */}
        <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
        <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Personal details</h5>
        
        <div className='flex flex-col h-auto gap-1 w-100'>
          <div>Name: <span className='font-semibold'>{fullName}</span></div>
          <div>Phone number: <span className='font-semibold'>{phone}</span></div>
          <div>Email: <span className='font-semibold'>{email}</span></div>
          <div>Message: <span className='font-semibold'>{message}</span></div>
        </div>
       </div>
       
      </div>
    </div>
  )
};

export default AdminConsultingRegAction;