import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiTeacher } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";

function OurClients() {

    
  return (
    <div className='flex flex-col h-auto gap-3 w-80vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-15px'>TRUSTED BY INDUSTRY LEADERS</h5>
        </div>
        <h3 className='font-bold text-20px'>Our Clientele</h3>
        <p className='text-15px text-crossTextGray'>Proud Partners with Exceptional Organizations</p>
      </div>

        <div className='flex flex-row h-auto p-2 border border-crossIconBg w-100 rounded-10'>
            <div className='flex items-center justify-center w-20 h-auto'>
                <h2 className='font-bold text-30px'>Trusted by</h2>
            </div>

            <div className='flex flex-col items-center h-auto gap-3 w-80'>
                <div className='flex flex-row flex-wrap justify-center h-auto gap-3 w-100'>
                    <img src={PHOTOS.cl1} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl2} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl3} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl4} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl5} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl2} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl4} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>

                    <img src={PHOTOS.cl1} alt="partner" className='px-2 py-1 border border-crossIconBg rounded-5 w-150px h-70px'/>
                </div>

                <Link className='flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple text-15px'>Show All <GoArrowRight className='text-25px'/></Link>
            </div>
        </div>
    </div>
  )
}

export default OurClients;
