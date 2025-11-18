import React, { useContext } from 'react';
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CrossContext } from '../../Context/CrossContext';
import CartIcon from '../CartIcon/CartIcon';



function TopBar() {

  const {whatsAppMessage, emailMessage, subject} = useContext(CrossContext);

  return (
    <div className='flex justify-center large:gap-4 small:gap-4 text-vogueWhite large:h-68px w-100 bg-crossDarkPurple large:text-20px small:text-13px border-t-crossDarkPurple small:h-40px'>
      
      <a href={`tel:09160901017`} target='_blank' className="flex items-center justify-center large:w-20 large:gap-1 large:ml-2 small:text-11px large:text-18px small:gap-1"><FaPhone className='rotate-90 text-20px'/> +234 916 090 1017</a>
 
      
      <a
      target='_blank'
      href={`https://wa.me/2349160901017?text=${whatsAppMessage}`}
      className='flex items-center justify-center large:w-20 large:gap-1 small:text-11px large:text-18px small:gap-1'
      ><FaWhatsapp className='text-whatsAppGreen text-25px'/> +234 916 090 1017</a>
      
     
      <a 
      target='_blank'
      href= {`mailto:enquiries@crosstiesolutions.com?subject=${subject}&body=${emailMessage}`}
      className='items-center justify-center w-30 large:flex large:gap-1 small:hidden'><MdOutlineMail className='text-25px'/> enquiries@crosstiesolutions.com</a>

      <CartIcon />
      
    </div>
  )
}

export default TopBar
