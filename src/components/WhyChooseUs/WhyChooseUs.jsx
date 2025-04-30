import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiCertificateLight } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineClass } from "react-icons/md";




function WhyChooseUs() {
    
  return (
    <div className='flex flex-col h-auto gap-3 mt-2 large:w-83vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-15px'>OUR EXPERTISE</h5>
        </div>
        <h3 className='font-bold text-20px'>Why Choose Us</h3>
        {/* <p className='text-15px text-crossTextGray'>We provide Industry Expertise in the Design and Delivery of Our Solutions</p> */}
      </div>

    
    <div className='flex flex-col h-auto gap-5 w-100'>
        
        
        {/* Training Programmes */}
        
        
        <div className='flex flex-wrap small:items-center large:items-start justify-between h-auto large:flex-row w-100 small:flex-col small:gap-3 large:gap-3'>
            
            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-auto text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Interactive Engaging Courses</h3>
                
                <p className='text-15px text-crossTextGray'>Experience alone does not guarantee long-term growth. What is required is clear strategy, fresh thinking, and agile leadership. Our immersive sessions, led by certified professionals, improve critical reasoning, deepen learning, and build meaningful transformation in a focused setting.
                </p>
                
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100 large:pb-5'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><PiCertificateLight className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Recognized Certificates</h3>
                
                <p className='text-15px text-crossTextGray'>Credibility matters where change is constant. Certified by IFTDO, our training programs offer unmatched, quality, accredited courses recognized by top professional bodies across various fields.</p>
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-auto text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>

                <h3 className='font-bold text-crossLightPurple'>Team of knowledge experts</h3>
                
                <p className='text-15px text-crossTextGray'>Crosstie Solutions constitutes experienced trainers, consultants, and strategists who bring practical expertise to every engagement. With insights from over 100 organizations, we offer tailored solutions grounded in real-world experience, not just best practices.</p>
                
               
            </div>


            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-auto text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Solution Oriented</h3>
                
                <p className='text-15px text-crossTextGray'>Our consulting services are rooted in experience and delivered with professionalism. We tailor every solution to your specific needs, working closely with you to ensure meaningful results and the best value for your investment.
                </p>
                
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border h-auto border-crossIconBg large:w-30 text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><PiCertificateLight className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Operational Edge</h3>
                
                <p className='text-15px text-crossTextGray'>We help companies move faster, think sharper, and execute better in the most crucial sector: operations. Strategy means nothing without execution, which is why we focus on movement from the inside out. We design solutions that work in the day-to-day.</p>
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-auto text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>

                <h3 className='font-bold text-crossLightPurple'>People-Powered Performance</h3>
                
                <p className='text-15px text-crossTextGray'>Your strategy succeeds or fails on one thing: people.
                We connect executive strategy to frontline action, aligning leadership, culture, and talent for lasting performance. Together, we co-create solutions that bring clarity, accountability, and engagement.
                  </p>
                
               
            </div>
            
        </div>

        <div className='flex flex-col items-center h-auto gap-1 mt-3 w-100'>
            <h4 className='font-bold text-20px'>Ready To Get Started?</h4>
            <Link to="/our-courses" className='flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple'>Explore Our Courses <HiArrowLongRight className='text-20px'/></Link>
        </div>
    </div>
    </div>
  )
}

export default WhyChooseUs;
