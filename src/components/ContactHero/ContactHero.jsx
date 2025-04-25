import React from 'react';
import { PHOTOS } from '../../assets/images';


function ContactHero() {
  return (
    <div className='flex items-center justify-between text-white large:pl-8 bg-crossYellow large:h-400px large:w-100vw large:flex-row small:flex-col-reverse small:w-100vw small:h-auto'>
      
      <div className='flex flex-col h-auto gap-1 large:w-35 small:w-90 small:py-2 large:mt-2'>
        
      <h1 className='font-bold text-crossLightPurple large:text-50px small:text-20px'> Here to Help. Ready to Connect.</h1>

        <p>Have questions or need support? Reach out anytime. Our team is just a message away; responsive, reliable, and committed to satisfying you.</p>
      </div>

      <div className='flex items-center justify-center large:h-auto large:w-50 small:h-auto small:w-100'>
        <img src={PHOTOS.contact} alt="customer service agent image" className='h-auto w-100'/>
      </div>
    </div>
  )
}

export default ContactHero
