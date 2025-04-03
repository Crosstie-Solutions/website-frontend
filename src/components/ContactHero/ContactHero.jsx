import React from 'react';
import { PHOTOS } from '../../assets/images';


function ContactHero() {
  return (
    <div className='flex items-center justify-between text-white large:pl-8 bg-crossYellow large:h-400px large:w-100vw large:flex-row small:flex-col-reverse small:w-100vw small:h-auto'>
      
      <div className='flex flex-col h-auto gap-1 large:w-35 small:w-90 small:py-2'>
        
      <h1 className='large:text-20px small:text-15px'>FEEL AT HOME! <br /> <span className='font-bold text-crossLightPurple large:text-50px small:text-20px'>WE’RE HERE
      FOR YOU</span></h1>

        <p>Your happiness is our number one priority! Feel free to reach out with any questions or concerns <br /> – We can’t wait to see you soon!</p>
      </div>

      <div className='flex items-center justify-center large:h-100 large:w-50 small:h-250px small:w-100'>
        <img src={PHOTOS.contact} alt="customer service agent image" className='w-100 h-100'/>
      </div>
    </div>
  )
}

export default ContactHero
