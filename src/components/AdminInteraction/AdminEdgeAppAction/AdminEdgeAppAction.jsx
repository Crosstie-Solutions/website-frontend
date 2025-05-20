import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { CrossContext } from '../../../Context/CrossContext';
import { MdOutlineFileDownload } from "react-icons/md";



function AdminEdgeAppAction(reg) {

    const {nameOfOrg, role, fullName, email, phone, address, contactPerson, preferredDiscipline, numberOfCandidates, mode, website, linkedIn, university, course, yearOfGrad, grade, nysc, message, resume, type, dateOfBirth } = reg;

    

    
    const {  
       toggleAdminEdgeAppAction
    } = useContext(CrossContext);


    
  return (
    <div className='absolute top-0 left-0 z-20 flex flex-col items-center justify-center h-auto py-10 w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={() => toggleAdminEdgeAppAction('sdsffdf')}
        />
     
      <div className='flex flex-col items-center justify-center h-auto px-2 py-5 bg-white large:gap-3 large:w-60vw rounded-10 small:w-90vw small:gap-1'>

        <h2 className='font-semibold text-20px'>EDGE Application</h2>

        {/* applicant */}
        
        {type==='applicant' &&
        <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
          <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Applicant</h5>
        
          <div className='flex flex-col h-auto gap-1 w-100'>
            <div>Name: <span className='font-semibold'>{fullName}</span></div>
            <div>Phone number: <span className='font-semibold'>{phone}</span></div>
            <div>Email: <span className='font-semibold'>{email}</span></div>
            <div>Date of birth: <span className='font-semibold'>{dateOfBirth}</span></div>
            <div>University: <span className='font-semibold'>{university}</span></div>
            <div>Course: <span className='font-semibold'>{course}</span></div>
            <div>Grade: <span className='font-semibold'>{grade}</span></div>
            <div>Year of graduation: <span className='font-semibold'>{yearOfGrad}</span></div>
            <div>NYSC Status: <span className='font-semibold'>{nysc}</span></div>
            <div>LinkedIn: <a href={linkedIn} target='_blank' className='underline text-crossBlue'>{linkedIn}</a></div>
            
            <div className='flex w-auto h-auto gap-2'>Resume: <a 
                            href={resume}
                            target='_blank'
                            download="resume.pdf"
                            className='flex items-center large:w-auto small:w-30 gap-0.5 text-13px bg-crossLightPurple text-white h-30px rounded justify-center cursor-pointer px-1'><MdOutlineFileDownload className='text-17px'/> Download</a></div>
            
            <div>Message: <span className='font-semibold'>{message}</span></div>
          </div>
       </div>}


        {/* recruiter */}
       
        {type==='recruiter' &&
        <div className='flex flex-col h-auto gap-1 large:w-90 small:w-100'>
          <h5 className='pl-2 font-semibold text-white large:w-40 bg-crossLightPurple small:w-100'>Recruiter</h5>
        
          <div className='flex flex-col h-auto gap-1 w-100'>
            <div>Company Name: <span className='font-semibold'>{nameOfOrg}</span></div>
            <div>Phone number: <span className='font-semibold'>{phone}</span></div>
            <div>Email: <span className='font-semibold'>{email}</span></div>
            <div>Company Address: <span className='font-semibold'>{address}</span></div>
            <div>Contact Person: <span className='font-semibold'>{contactPerson}</span></div>
            <div>Role: <span className='font-semibold'>{role}</span></div>
            <div>Preferred discipline: <span className='font-semibold'>{preferredDiscipline}</span></div>
            <div>Number of candidates: <span className='font-semibold'>{numberOfCandidates}</span></div>
            <div>Work mode: <span className='font-semibold'>{mode}</span></div>
            <div>Website: <a href={website} target='_blank' className='underline text-crossBlue'>{website}</a></div>
            <div>LinkedIn: <a href={linkedIn} target='_blank' className='underline text-crossBlue'>{linkedIn}</a></div>
            
          </div>
       </div>}
       
      </div>
    </div>
  )
};

export default AdminEdgeAppAction;