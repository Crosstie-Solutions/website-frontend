import React, { useContext } from 'react';
import { CrossContext } from '../../Context/CrossContext';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import BlogSideBar from '../../components/BlogSideBar/BlogSideBar';
import { Report } from '../Report/Report';



function ReportPage() {


    const {
        loadingAllReports,
        currentReports, 
        handleReportsPageChange,
        currentReportsPage,
        totalReportsPages,
    } = useContext(CrossContext);

    
  return (
    <div className='flex flex-col gap-2 pt-1 pb-5 bg-white large:items-center large:p-2 large:mt-20 large:w-83vw rounded-10 small:w-90vw small:mt-13 small:items-center'>

      <h2 className='font-semibold text-center w-100 large:text-30px text-crossDarkPurple small:text-20px'>Media Report</h2>
      
      
     <div className='flex flex-row items-start justify-center h-auto w-100'>
        
        <div className='flex flex-col items-center justify-center h-auto gap-3 large:w-70 small:w-100'>
          {
              currentReports && currentReports.map((post, i)=>
                  <Report 
                    key={i}
                    title={post.title}
                    reportImage={post.reportImage}
                    preview={post.preview}
                    content={post.content}
                    date={post.date}
                    link={post.link}
                    type={post.type}
                    createdAt={post.createdAt}
                    postId={post._id}
                  />
                 
              )
          }

          {/* {loadingAllReports && <p>Loading articles</p>} */}
          
          {!loadingAllReports && currentReports && currentReports.length < 1 && <p className='mt-10'>No Article found.</p>}
        </div>


        {/* <div className='h-auto w-25 large:flex small:hidden'>
          <BlogSideBar />
        </div> */}
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

        {loadingAllReports && <p>Loading articles</p>}
    </div>
  )
}

export default ReportPage
