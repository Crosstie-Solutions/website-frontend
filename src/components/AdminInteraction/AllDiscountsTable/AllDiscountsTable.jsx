import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeleteDiscount from "../DeleteDiscount/DeleteDiscount";


function AllDiscountsTable() {

  
  const {
     loadingAllCaseStudies,
     currentCaseStudies,
     currentCaseStudiesPage,
     totalCaseStudiesPages,
     handleCaseStudiesPageChange,
     allCaseStudies,
    
    

     discounts, toggleDiscount, activeDiscount
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Discounts({discounts && discounts.length})</h4>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Type</div>
          <div className="w-20">Percentage</div>
          <div className="w-20">Code</div>
        </div>

        {discounts &&
          discounts.map((post, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto justify-between`}
              >
                <div className="w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20`}>
                  {post.type}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-vogueRed text-11px'
                    onClick={()=>toggleDiscount(i)}
                    >Delete Code</div>
                </div>

                <div className="w-20">{post.percentage}</div>

                <div className="w-20">{post.code}</div>


                {activeDiscount === i && (
                    <div>
                      <DeleteDiscount 
                      postNo={i + 1}
                      postEnd={discounts.length + 1}
                      discountId={post._id}
                      code={post.code}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {discounts && discounts.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">No active discount.</p>
      )}
    </div>
  );
}

export default AllDiscountsTable;
