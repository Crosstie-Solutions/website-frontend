import React, { useState } from 'react';
import { PHOTOS } from '../../assets/images';


function OurValues() {

    
  return (
    <div className='flex flex-col h-auto gap-3 mt-5 large:w-83vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-17px'>CROSSTIE SOLUTIONS</h5>
        </div>
        <h3 className='font-bold text-25px'>Our Values</h3>
        <p className='text-15px text-crossTextGray'>Who we are as professionals… What we give as partners</p>
      </div>

    
        <div className='flex flex-row h-auto gap-5 w-100'>
            
            
            <div className='flex items-center justify-between h-auto w-100 large:flex-row small:flex-col small:gap-3 large:gap-0'>

                {/* Transformation */}
                <div className='flex flex-col justify-center gap-2 p-2 bg-white border border-crossIconBg large:w-30 h-300px text-15px rounded-20 small:w-100'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.transformation} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Transformation</h3>
                    
                    <p className='text-13px text-crossTextGray'>We are dedicated to providing transformational change for our clients, helping them attain growth that seems unreachable and achieve their goals.</p>                
                </div>

                 {/* Excellence */}
                 <div className='flex flex-col justify-center gap-2 p-2 bg-white border border-crossIconBg large:w-30 h-300px text-15px rounded-20 small:w-100'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.excellence} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Excellence</h3>
                    
                    <p className='text-13px text-crossTextGray'>We strive for excellence in all aspects of our work, delivering high quality services that exceed client expectations.</p>                
                </div>  

                {/* Experience */}
                <div className='flex flex-col justify-center gap-2 p-2 bg-white border border-crossIconBg large:w-30 h-300px text-15px rounded-20 small:w-100'>
                    
                    <div className='flex items-center justify-center h-40px w-40px'><img src={PHOTOS.experience} alt="mission icon" className='h-100 w-100'/></div>
                    
                    <h3 className='font-bold text-black'>Experience</h3>
                    
                    <p className='text-13px text-crossTextGray'>We prioritize providing an exceptional experience for our clients, employees, and partners, striving to exceed expectations and build long-lasting relationships based on trust and mutual respect.</p>                
                </div>               
                
               
            </div>

        </div>
    </div>
  )
}

export default OurValues;
