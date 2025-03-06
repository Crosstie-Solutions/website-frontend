import React, { useState } from 'react';
import { PHOTOS } from '../../assets/images';


function WhoWeAre() {

    
  return (
    <div className='flex flex-col h-auto gap-5 mt-5 large:w-80vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-15px'>CROSSTIE SOLUTIONS</h5>
        </div>
        <h3 className='font-bold text-20px'>Who We Are</h3>
        <p className='text-15px text-crossTextGray'>INSPIRED BY WORLD-CLASS PROFESSIONAL SERVICE</p>
      </div>

    
        <div className='flex flex-row h-auto gap-5 w-100'>
            
            
            <div className='flex items-center justify-between h-auto w-100 large:flex-row small:flex-col small:gap-3 large:gap-0'>
                
                <div className='flex flex-col justify-center gap-2 p-2 border border-crossIconBg large:w-40 h-250px text-15px rounded-20 small:w-100 bg-[#F9F9F9]'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.mission} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Our Mission</h3>
                    
                    <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>                
                </div>  

                <div className='flex flex-col justify-center gap-2 p-2 border border-crossIconBg large:w-40 h-250px text-15px rounded-20 small:w-100 bg-[#F9F9F9]'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.vision} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Our Vision</h3>
                    
                    <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>                
                </div>   
            </div>

        </div>
    </div>
  )
}

export default WhoWeAre;
