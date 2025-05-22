import React, { useContext } from "react";
import { PHOTOS } from "../../assets/images";
import { IoCartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";
import { MdOutlineFileDownload } from "react-icons/md";

function Purchase(order) {
  const { bookId, previews, material, title, slug } = order;


  // const productId = useParams();

  return (
    <div className="relative flex flex-col items-start h-auto gap-1 bg-gray-100 large:px-1 small:px-1 large:w-250px small:border-2 small:w-150px small:py-1 small:rounded-4 large:pb-2 large:rounded-10">
      
      <div
        className="flex items-center justify-center bg-white large:h-auto large:w-100 small:w-100 small:h-auto large:px-2 large:py-3 rounded-5 small:px-0 small:py-2"
        
      >
        <img
          src={previews && previews[0]}
          alt="book cover"
          className="shadow-lg shadow-gray-600 -rotate-12 large:h-200px large:w-80 small:w-80 small:h-120px"
        />
      </div>
      
      
      <Link to={`/our-solutions/resource-vault/${slug}`} className="font-semibold large:text-15px small:text-11px small:px-1 large:px-0 text-crossLightPurple">
        {title}
      </Link>
      
      {/* {priceDiscount === 0 &&
      <span className="large:text-15px text-vogueBlack small:text-13px">
        &#8358;{price.toLocaleString()}
      </span>} */}

      <a 
       href={material}
        target='_blank'
        download="resume.pdf"
      className="flex items-center justify-center w-auto gap-1 px-1 text-white rounded cursor-pointer h-40px bg-crossLightPurple"
      >
        <MdOutlineFileDownload className="text-20px"/> Download
      </a>
      

        
    </div>
  );
}

export default Purchase;
