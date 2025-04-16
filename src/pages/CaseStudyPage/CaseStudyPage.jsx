import React, { useContext } from 'react';
import { SecondBlogPost } from '../../components/BlogPost/BlogPost';
import { CrossContext } from '../../Context/CrossContext';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import BlogSideBar from '../../components/BlogSideBar/BlogSideBar';
import { SecondCaseStudy } from '../../components/CaseStudy/CaseStudy';
import { PHOTOS } from '../../assets/images'



function CaseStudyPage() {

    const {loadingAllCaseStudies,

         handleBlogPostsPageChange,
        currentBlogPostsPage,
        totalBlogPostsPages,

        handleCaseStudiesPageChange,
        currentCaseStudiesPage,
        totalCaseStudiesPages,
        
        allCaseStudies 
      
    } = useContext(CrossContext);

    
    
  return (
    <div className='flex flex-col items-center p-2 mt-20 bg-white w-83vw rounded-10'>
      
     <div className='flex flex-row items-start justify-between h-auto w-100'>
        <div className='flex flex-col items-center justify-center h-auto gap-3 w-100'>
          {
              allCaseStudies && allCaseStudies.map((post, i)=>
                  <SecondCaseStudy 
                  key={i}
                  title={post.title}
                  caseStudyImage={post.caseStudyImage}
                  author={post.author}
                  challenge={post.challenge}
                  solution={post.solution}
                  result={post.result}
                  date={post.date}
                  postId={post._id}
                  />
              )
          }
          
          {!loadingAllCaseStudies && allCaseStudies && allCaseStudies.length < 1 && <p className='mt-10'>No Article found.</p>}
        </div>

     </div>

      {/* Pagination */}
           {allCaseStudies && allCaseStudies.length > 0 && (
             <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
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

        {loadingAllCaseStudies && <p>Loading articles</p>}
    </div>
  )
}




export default CaseStudyPage;
