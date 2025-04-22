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
        
        
        <div className='flex flex-wrap items-center justify-between h-auto large:flex-row w-100 small:flex-col small:gap-3 large:gap-2'>
            
            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-450px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Interactive Engaging Courses</h3>
                
                <p className='text-15px text-crossTextGray'>Experience alone is not enough for sustainable growth. You need a sharp strategy, fresh thinking, and leadership that adapts. Our <span className="text-black">interactive, engaging programs</span> are delivered by internationally certified instructors in an atmosphere that builds critical thinking, intensive learning, and transformation.
                </p>
                
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border large:h-450px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><PiCertificateLight className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Recognized Certificates</h3>
                
                <p className='text-15px text-crossTextGray'>Credibility matters where change is constant, and our certification programs provide just that. We are certified by the <span className="text-black"> International Federation of Training and Development Organisations</span> (IFTDO) as a training and consultancy provider. And not only are our selection of courses broad and unrivalled, but they are also accredited by relevant professional bodies.</p>
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-450px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>

                <h3 className='font-bold text-crossLightPurple'>Team of knowledge experts</h3>
                
                <p className='text-15px text-crossTextGray'>At the core of Crosstie Solutions is a team of seasoned professionals: <span className="text-black">trainers, consultants, and strategists</span>  who bring practical experience and deep industry knowledge to every engagement. We have researched challenges common to over 100 different organisations. As a result, we are equipped with insights and expertise to proffer solutions tailored to your unique corporate needs. We don’t just teach best practices, we have lived them.</p>
                
               
            </div>











            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-450px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Solution Oriented</h3>
                
                <p className='text-15px text-crossTextGray'>Our consultation services are delivered from a standpoint of experience and utmost professionalism and tailored to your specific needs. We work with you to achieve your goal, as your success is our success. This ensures that you get the best value for your time and money.
                </p>
                
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border large:h-450px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><PiCertificateLight className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Operational Edge</h3>
                
                <p className='text-15px text-crossTextGray'>We help companies move faster, think sharper, and execute better in the most crucial sector: operations. Strategy means nothing without execution, which is why we focus on movement from the inside out. We design solutions that work in the day-to-day.</p>
                
            </div>

            <div className='flex flex-col justify-start gap-2 p-1 bg-white border border-crossIconBg large:w-30 h-450px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>

                <h3 className='font-bold text-crossLightPurple'>People-Powered Performance</h3>
                
                <p className='text-15px text-crossTextGray'>Your strategy succeeds or fails on one thing: people.
                  Our approach connects executive-level strategy and frontline actions. We help organisations align leadership, enhance culture, and improve talent not just for today, but for long-term performance. From restructuring teams to resetting culture, we co-create solutions that bring clarity, accountability, and engagement across teams.
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
