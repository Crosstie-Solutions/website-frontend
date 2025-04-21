import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";


function BackToTop() {

    const backToTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    

  return (
    <div className={`fixed z-30 ${showButton ? "flex" : "hidden"} items-center justify-center text-white rounded cursor-pointer top-80vh large:right-5 h-50px small:right-3 w-50px bg-crossFooterText hover:bg-white hover:border hover:border-black hover:text-black`}
    onClick={backToTop}
    ><IoIosArrowRoundUp className='text-35px'/></div>
  )
}

export default BackToTop
