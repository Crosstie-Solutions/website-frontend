import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



function TopBar() {
  return (
    <div className='flex justify-center large:gap-5 small:gap-2 text-vogueWhite h-50px w-100 bg-crossDarkPurple large:text-20px small:text-13px large:pr-10'>
      
      <a href={`tel:08138957283`} className="flex items-center justify-center large:gap-1"><FaPhone className='rotate-90 text-20px'/> +234 708 560 4023</a>
      
      
      <a
      href="https://wa.me/2348138957283"
      className='flex items-center justify-center large:gap-1'
      ><FaWhatsapp className='text-whatsAppGreen text-25px'/> +234 708 560 4023</a>
      
      
      <a 
      href="mailto:info@crosstie.com"
      className='items-center justify-center large:flex large:gap-1 small:hidden'><MdOutlineMail className='text-25px'/> info@crosstie.com</a>
      
    </div>
  )
}

export default TopBar
