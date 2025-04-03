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

    const [solution, setSolution] = useState("Training Programmes");

    
  return (
    <div className='flex flex-col h-auto gap-3 mt-2 large:w-83vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-15px'>OUR EXPERTISE</h5>
        </div>
        <h3 className='font-bold text-20px'>Why Choose us</h3>
        <p className='text-15px text-crossTextGray'>We provide Industry Expertise in the Design and Delivery of Our Solutions</p>
      </div>

    
    <div className='flex flex-col h-auto gap-5 w-100'>
        
        
        {/* Training Programmes */}
        
        {solution==="Training Programmes" &&
        <div className='flex flex-wrap items-center justify-between h-auto large:flex-row w-100 small:flex-col small:gap-3 large:gap-2'>
            
            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Interactive Engaging Courses</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
                
            </div>

            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><PiCertificateLight className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Recognized Certificates</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
            </div>

            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>

                <h3 className='font-bold text-crossLightPurple'>Team of knowledge experts</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
            </div>

            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><GiAutoRepair className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Interactive Engaging Courses</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
                
            </div>

            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><MdOutlineClass className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Recognized Certificates</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
            </div>

            <div className='flex flex-col justify-center gap-1 p-1 bg-white border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><RiTeamLine className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Team of knowledge experts</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                {/* <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link> */}
            </div>
            
        </div>}

                <div className='flex flex-col items-center h-auto gap-1 mt-3 w-100'>
                    <h4 className='font-bold text-20px'>Ready To Get Started?</h4>
                    <Link to="/our-courses" className='flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple'>Explore Our Courses <HiArrowLongRight className='text-20px'/></Link>
                </div>
    </div>
    </div>
  )
}

export default WhyChooseUs;
