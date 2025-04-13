import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import DeletePartner from "../../DeletePartner/DeletePartner";
import PartnersFilter from "../../PartnersFilter/PartnersFilter";




function AllPartnersTable() {

  
  const {
    
    loadPartners,
    currentPartners,
    currentPartnersPage,
    totalPartnersPages,
    handlePartnersPageChange,
    allPartners,
    me,

    activePartner, togglePartner
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Partners({allPartners && allPartners.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <PartnersFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-30">Name</div>
          <div className="w-30">Image</div>
        </div>

        {currentPartners &&
          currentPartners.map((partner, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto justify-between`}
              >
                <div className="w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-30`}>
                  {partner.partnerName}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-vogueRed text-11px'
                    onClick={()=>togglePartner(i)}
                    >Delete Partner</div>
                </div>

                <div className="w-30"><img src={partner.partnerLogo} alt="partner logo" className="rounded h-50px w-50px"/></div>

                {activePartner === i && (
                    <div>
                      <DeletePartner 
                      adminNo={i + 1}
                      adminEnd={allPartners.length + 1}
                      partnerId={partner.id}
                      partnerName={partner.partnerName}
                      partnerLogo={partner.partnerLogo}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadPartners && currentPartners && currentPartners.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-tribeBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentPartnersPage === 1}
            onClick={() => handlePartnersPageChange(currentPartnersPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentPartnersPage} of {totalPartnersPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-tribeBlue disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentPartnersPage === totalPartnersPages}
            onClick={() => handlePartnersPageChange(currentPartnersPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadPartners && (
        <p className="mt-5 font-bold text-center w-100">Loading partners...</p>
      )}

      {!loadPartners && currentPartners && currentPartners.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">Partner not found.</p>
      )}
    </div>
  );
}

export default AllPartnersTable;
