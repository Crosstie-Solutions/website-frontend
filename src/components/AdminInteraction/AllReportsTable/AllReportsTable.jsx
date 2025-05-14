import React, { useContext } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { CrossContext } from '../../../Context/CrossContext';
import AdminReportAction from '../AdminReportAction/AdminReportAction';


function AllReportsTable() {

    
    const {        

        allReports,
        loadingAllReports,
        currentReports, 
        handleReportsPageChange,
        currentReportsPage,
        totalReportsPages,
        activeReport, toggleAdminReportAction,
      } = useContext(CrossContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start text-crossLightPurple small:hidden large:block">All Media Reports({allReports && allReports.length})</h4>
        {/* <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div> */}
      </div>
      
      

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b border-gray-200 large:font-semibold small:font-semibold w-100'>
            <div>S/N</div>
            <div className='w-20'>Title</div>
            <div className='w-30'>Overview</div>
            <div className='w-50px'>Image</div>
        </div>

        {
            currentReports && currentReports.map((post, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    
                    <div className='flex flex-col gap-1 break-words large:w-20 small:w-20'>{post.title}
                        
                        
                        <div  
                        className='flex items-center justify-center h-auto text-white rounded cursor-pointer w-60px bg-crossLightPurple'
                        onClick={()=>toggleAdminReportAction(i)}
                        >Action</div>
                    </div>
                    
                    <div className='relative large:w-30'>{post.preview.slice(0, 50)}...</div>
                    

                    <div className='w-auto h-auto'>
                      <img src={post.reportImage} alt="media report image"  className='w-50px h-50px'/>
                    </div>
                    
                    
                    
                    {activeReport === i && (
                    <div>
                      <AdminReportAction 
                      postNo={i + 1}
                      postEnd={allReports.length + 1}
                      postId={post._id}
                      title={post.title}
                      />
                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentReports && currentReports.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentReportsPage === 1}
            onClick={() => handleReportsPageChange(currentReportsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentReportsPage} of {totalReportsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentReportsPage === totalReportsPages}
            onClick={() => handleReportsPageChange(currentReportsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentReports && currentReports.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">No result found.</p>
      )}
    </div>
  )
}

export default AllReportsTable
