import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';
import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
import { useState } from 'react';
import AdminEdgeAppAction from '../AdminEdgeAppAction/AdminEdgeAppAction';
// import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';





function AllEdgeAppsTable(props) {

  const { type } = props

    
    const {

        allCourseRegs,

        
        currentCourseRegsPage,
     

        
         toggleAdminCourseRegAction, 
        
        allEdgeApps, activeEdgeApp, toggleAdminEdgeAppAction,
        
      } = useContext(CrossContext);



      
    // edge apps pagination
const filteredEdgeApps = allEdgeApps && allEdgeApps.filter((app) => app.type.toLowerCase().includes(type.toLowerCase())
).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


const [currentEdgeAppsPage, setCurrentEdgeAppsPage] = useState(1);
const  edgeAppsPerPage = 10;

// // Calculate total pages
const totalEdgeAppsPages = filteredEdgeApps && Math.ceil(filteredEdgeApps.length / edgeAppsPerPage);

// Get requests for the current page
const edgeAppsStartIndex = (currentEdgeAppsPage - 1) * edgeAppsPerPage;
const edgeAppsEndIndex = edgeAppsStartIndex + edgeAppsPerPage;
const currentEdgeApps = filteredEdgeApps && filteredEdgeApps.slice(edgeAppsStartIndex, edgeAppsEndIndex).reverse();


// Handle page change
const handleEdgeAppsPageChange = (page) => {
  if (page > 0 && page <= totalEdgeAppsPages) {
    setCurrentEdgeAppsPage(page);
  }
};
    
    

  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">
          {type && type[0].toUpperCase() + type.slice(1)}s({filteredEdgeApps && filteredEdgeApps.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='large:relative large:right-3'>{type==='recruiter' ? 'Company' : ""} Name</div>
            <div className='large:relative large:right-5'>{type==='recruiter' ? 'Preferred' : ""} Course</div>
            <div className='large:relative large:right-7'>Phone</div>
            <div className='large:relative large:right-2 text-vogueRed'>Email</div>
            <div className='large:relative large:right-3'>{type==='applicant' ? 'NYSC' : "Mode"}</div>
        </div>

        {
            currentEdgeApps && currentEdgeApps.map((reg, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col gap-1 break-words large:w-15 small:w-20'>{type==='recruiter' ? reg.nameOfOrg : reg.fullName}
                        
                        {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminEdgeAppAction(i)}
                        >View</div>
                    </div>
                    
                    <div className='relative large:right-5 small:right-2'>{type==='recruiter' ? reg.preferredDiscipline : reg.course}</div>
                    
                    <div className='relative large:right-4 small:right-1'>{reg.phone}</div>
                    
                    <div className={`relative large:right-3 small:right-1 text-vogueRed`}>{reg.email.slice(0, 10)}...</div>

                    <div className={`relative large:right-3 small:right-1`}>{type==='recruiter' ? reg.mode : reg.nysc}</div>
                    
                    
                    {activeEdgeApp === i && (
                    <div>
                      <AdminEdgeAppAction 
                      regNo={i + 1}
                      regEnd={allCourseRegs.length + 1}
                      regId={reg.id}
                      
                      nameOfOrg={reg.nameOfOrg}
                      mode={reg.mode}
                     
                      role={reg.role}
                      address={reg.address}
                      
                      fullName={reg.fullName}
                      email={reg.email}
                      phone={reg.phone}
                      message={reg.message}
                      contactPerson={reg.contactPerson}
                      preferredDiscipline={reg.preferredDiscipline}
                      numberOfCandidates={reg.numberOfCandidates}
                      linkedIn={reg.linkedIn}
                      university={reg.university}
                      course={reg.course}
                      yearOfGrad={reg.yearOfGrad}
                      grade={reg.grade}
                      nysc={reg.nysc}
                      resume={reg.resume}
                      website={reg.website}
                      type={reg.type}
                      dateOfBirth={reg.dateOfBirth}
                     
                      />

                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentEdgeApps && currentEdgeApps.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEdgeAppsPage === 1}
            onClick={() => handleEdgeAppsPageChange(currentEdgeAppsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentEdgeAppsPage} of {totalEdgeAppsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentEdgeAppsPage === totalEdgeAppsPages}
            onClick={() => handleEdgeAppsPageChange(currentEdgeAppsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentEdgeApps && currentEdgeApps.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export { AllEdgeAppsTable }
