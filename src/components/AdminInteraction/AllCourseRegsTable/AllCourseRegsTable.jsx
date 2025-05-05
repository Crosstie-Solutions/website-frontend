import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';
import AdminCourseRegAction from '../AdminCourseRegAction/AdminCourseRegAction';
// import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';





function AllCourseRegsTable() {

    // const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages, toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);

    
    const {
        currentPrograms,
        handleProgramsPageChange,
        currentProgramsPage,
        totalProgramsPages,
        programsSearchTerm,
        allPrograms,
        toggleAdminProgramAction,
        activeProgram,

        allCourseRegs,


        currentCourseRegs,
        
        handleCourseRegsPageChange,
        
        currentCourseRegsPage,
        
        totalCourseRegsPages,
        
        courseRegsSearchTerm,

        activeCourseReg, toggleAdminCourseRegAction
        
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">Course Registrations({allCourseRegs && allCourseRegs.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='large:relative large:right-3'>Name</div>
            <div className='large:relative large:right-5'>Course</div>
            <div className='large:relative large:right-7'>Phone</div>
            <div className='large:relative large:right-2 text-vogueRed'>Email</div>
            <div className='large:relative large:right-3'>Location</div>
        </div>

        {
            allCourseRegs && allCourseRegs.map((reg, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col gap-1 break-words large:w-15 small:w-20'>{reg.fullName}
                        
                        {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminCourseRegAction(i)}
                        >View</div>
                    </div>
                    
                    <div className='relative large:right-5 small:right-2'>{reg.program}</div>
                    <div className='relative large:right-4 small:right-1'>{reg.phone}</div>
                    
                    <div className={`relative large:right-3 small:right-1 text-vogueRed`}>{reg.email.slice(0, 10)}...</div>

                    <div className={`relative large:right-3 small:right-1`}>{reg.location}</div>
                    
                    
                    {activeCourseReg === i && (
                    <div>
                      <AdminCourseRegAction 
                      regNo={i + 1}
                      regEnd={allCourseRegs.length + 1}
                      regId={reg.id}
                      program={reg.program}
                      nameOfOrg={reg.nameOfOrg}
                      mode={reg.mode}
                      participants={reg.participants}
                      location={reg.location}
                      preferredDate={reg.preferredDate}
                      designation={reg.designation}
                      title={reg.title}
                      fullName={reg.fullName}
                      email={reg.email}
                      phone={reg.phone}
                      message={reg.message}
                      duration={reg.duration}
                      />
                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentPrograms && currentPrograms.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === 1}
            onClick={() => handleProgramsPageChange(currentProgramsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentProgramsPage} of {totalProgramsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === totalProgramsPages}
            onClick={() => handleProgramsPageChange(currentProgramsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentPrograms && currentPrograms.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export default AllCourseRegsTable
