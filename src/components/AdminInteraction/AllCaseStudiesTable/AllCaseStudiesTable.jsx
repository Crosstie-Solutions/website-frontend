import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeleteCaseStudy from "../../DeleteCaseStudy/DeleteCaseStudy";
import CaseStudyFilter from "../../CaseStudyFilter/CaseStudyFilter";





function AllCaseStudiesTable() {

  
  const {
    
    loadPartners,
    currentPartners,
    currentPartnersPage,
    totalPartnersPages,
    handlePartnersPageChange,
    allPartners,


    activePartner, togglePartner,


     loadingAllCaseStudies,
     currentCaseStudies,
     currentCaseStudiesPage,
     totalCaseStudiesPages,
     handleCaseStudiesPageChange,
     allCaseStudies,
    
    
     activeCaseStudy, toggleCaseStudy
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Case Studies({allCaseStudies && allCaseStudies.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <CaseStudyFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Title</div>
          <div className="w-20">Author</div>
          <div className="w-20">Date</div>
          <div className="w-20">Image</div>
        </div>

        {currentCaseStudies &&
          currentCaseStudies.map((post, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto justify-between`}
              >
                <div className="w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20`}>
                  {post.title}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-vogueRed text-11px'
                    onClick={()=>toggleCaseStudy(i)}
                    >Delete Post</div>
                </div>

                <div className="w-20">{post.author}</div>

                <div className="w-20">{post.date}</div>

                <div className="w-20"><img src={post.caseStudyImage} alt="image" className="rounded h-50px w-50px"/></div>

                {activeCaseStudy === i && (
                    <div>
                      <DeleteCaseStudy 
                      postNo={i + 1}
                      postEnd={allCaseStudies.length + 1}
                      postId={post._id}
                      title={post.title}
                      caseStudyImage={post.caseStudyImage}
                      date={post.date}
                      author={post.author}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadingAllCaseStudies && currentCaseStudies && currentCaseStudies.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentCaseStudiesPage === 1}
            onClick={() => handleCaseStudiesPageChange(currentCaseStudiesPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentCaseStudiesPage} of {totalCaseStudiesPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentCaseStudiesPage === totalCaseStudiesPages}
            onClick={() => handleCaseStudiesPageChange(currentCaseStudiesPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadingAllCaseStudies && (
        <p className="mt-5 font-bold text-center w-100">Loading case studies...</p>
      )}

      {!loadingAllCaseStudies && currentCaseStudies && currentCaseStudies.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">Case study not found.</p>
      )}
    </div>
  );
}

export default AllCaseStudiesTable;
