import React, { useState } from 'react';
import { PHOTOS } from '../../assets/images';


function WhoWeAre() {

    
  return (
    <div className='flex flex-col h-auto gap-3 mt-5 large:w-83vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-17px'>CROSSTIE SOLUTIONS</h5>
        </div>

        <h3 className='font-bold text-25px'>Who We Are</h3>
        <p className='text-15px text-crossTextGray large:w-50 small:w-100'>Driven by a commitment to help organisations achieve sustainable growth through expert, competency-based solutions.</p>
      </div>

    
        <div className='flex flex-row h-auto gap-5 w-100'>
            
            
            <div className='flex items-center justify-between h-auto w-100 large:flex-row small:flex-col small:gap-3 large:gap-0'>

                {/* our vision */}
                <div className='flex flex-col justify-center gap-1 py-2 px-1 bg-white border border-crossIconBg large:w-45 h-auto text-15px rounded-20 small:w-100'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.vision} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Our Vision</h3>
                    
                    <p className='text-crossTextGray'>To be the trusted professional service brand chosen by organizations aiming to optimize talents and strategies for sustainable business growth.</p>                
                </div>

                {/* our mission */}
                <div className='flex flex-col justify-center gap-1 py-2 px-1 bg-white border border-crossIconBg large:w-45 h-auto text-15px rounded-20 small:w-100'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.mission} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Our Mission</h3>
                    
                    <p className='text-crossTextGray'>To optimize talents and strategies for sustainable business growth through specialized competency-based development and management consulting solutions.</p>                
                </div>   
            </div>

        </div>
    </div>
  )
}

export default WhoWeAre;
