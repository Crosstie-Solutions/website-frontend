import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



function TopBar() {
  return (
    <div className='flex justify-center large:gap-10 small:gap-2 text-vogueWhite h-50px w-100 bg-crossDarkPurple large:text-20px small:text-13px'>
      
      <a href={`tel:08138957283`} className="flex items-center justify-center large:gap-1 small:gap-1"><FaPhone /> +234 708 560 4023</a>
      
      
      <a
      href="https://wa.me/2348138957283"
      className='flex items-center justify-center large:gap-1 small:gap-1'
      ><FaWhatsapp className='text-whatsAppGreen'/> +234 708 560 4023</a>
      
      
      <a 
      href="mailto:info@crosstie.com"
      className='items-center justify-center large:flex large:gap-1 small:hidden'><MdOutlineMail /> info@crosstie.com</a>
    </div>
  )
}

export default TopBar
