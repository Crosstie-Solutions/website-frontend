import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



function TopBar() {
  return (
    <div className='flex justify-center large:gap-4 small:gap-2 text-vogueWhite large:h-68px w-100 bg-crossDarkPurple large:text-20px small:text-13px border-t-crossDarkPurple small:h-40px'>
      
      <a href={`tel:08138957283`} className="flex items-center justify-center large:w-20 large:gap-1 large:ml-2 small:text-11px large:text-18px"><FaPhone className='rotate-90 text-20px'/> +234 708 560 4023</a>
      
      
      <a
      href="https://wa.me/2348138957283"
      className='flex items-center justify-center large:w-20 large:gap-1 small:text-11px large:text-18px'
      ><FaWhatsapp className='text-whatsAppGreen text-25px'/> +234 708 560 4023</a>
      
      
      <a 
      href="mailto:info@crosstie.com"
      className='items-center justify-center w-20 large:flex large:gap-1 small:hidden'><MdOutlineMail className='text-25px'/> info@crosstie.com</a>
      
    </div>
  )
}

export default TopBar
