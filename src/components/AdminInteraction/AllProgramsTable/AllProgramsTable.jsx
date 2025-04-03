import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';
// import AdminProgramAction from '../AdminProgramAction/AdminProgramAction';





function AllProgramsTable() {

    // const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages, toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);

    
    const {
        currentPrograms,
        handleProgramsPageChange,
        currentProgramsPage,
        totalProgramsPages,
        
        programsSearchTerm,
        allPrograms,
        toggleAdminProgramAction,
        activeProgram
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">All Programs({allPrograms && allPrograms.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='large:relative large:right-3'>Title</div>
            <div className='large:relative large:right-2'>Mode</div>
            <div className='large:relative large:right-2'>Duration</div>
            <div className='large:relative large:right-2'>Cost</div>
            <div className='large:relative large:right-3'>Time</div>
        </div>

        {
            currentPrograms && currentPrograms.map((program, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    
                    <div className='flex flex-col gap-1 break-words large:w-15 small:w-20'>{program.title}
                        
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminProgramAction(i)}
                        >Action</div>
                    </div>
                    
                    <div className='relative large:right-5 small:right-2'>{program.mode}</div>
                    <div className='relative large:right-4 small:right-1'>{program.duration}</div>
                    
                    <div className={`relative large:right-3 small:right-1`}>&#8358;{program.cost}</div>

                    <div className={`relative large:right-3 small:right-1`}>{program.time}</div>
                    
                    
                    {activeProgram === i && (
                    <div>
                      <AdminProgramAction 
                      progNo={i + 1}
                      progEnd={allPrograms.length + 1}
                      programId={program.id}
                      title={program.title}
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
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-qxDarkGreen disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProgramsPage === 1}
            onClick={() => handleProgramsPageChange(currentProgramsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentProgramsPage} of {totalProgramsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-qxDarkGreen disabled:bg-gray-300 disabled:cursor-not-allowed"
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

export default AllProgramsTable
