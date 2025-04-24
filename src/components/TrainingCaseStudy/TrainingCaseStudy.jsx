import React, { useContext } from 'react';
import { CaseStudy } from '../CaseStudy/CaseStudy';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';


function TrainingCaseStudy() {

  const {allCaseStudies} = useContext(CrossContext);

    const posts = allCaseStudies && allCaseStudies.filter(post => post.category.toLowerCase().includes('training'));


  return (
    <div className="flex flex-col h-auto gap-3 small:w-90vw large:w-83vw">
        <div className="flex flex-col h-auto gap-0.5 w-100">
          <div className="flex items-center w-auto h-auto gap-1">
            <hr className="h-2px w-40px bg-crossLightPurple" />
            <h5 className="text-crossLightPurple text-15px">Get to know more</h5>
          </div>
          <h3 className="font-bold text-20px">Case Studies</h3>
          <p className="text-15px text-crossTextGray">
          Every case study is tailored to inform
          </p>
        </div>

        <div className="flex flex-row h-auto small:p-2 w-100 rounded-10 text-13px large:p-0">
          <div className="flex flex-col items-center h-auto gap-4 w-100">
            <div className="flex h-auto gap-3 small:justify-center small:flex-col large:flex-wrap large:flex-row w-100 large:justify-between">
              {posts && posts.slice(0, 3).map((post, i) => <CaseStudy 
              key={i} 
              title={post.title}
              caseStudyImage={post.caseStudyImage}
              author={post.author}
              challenge={post.challenge}
              solution={post.solution}
              result={post.result}
              date={post.date}
              postId={post._id}
              />)}

              {posts && posts.length < 1 &&
              <p className='self-center mt-3 font-semibold text-17px'>No Article Found.</p>}
            </div>

            {posts && posts.length > 0 &&
            <Link to='/case-studies' className="flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple">
              Show All <GoArrowRight className="text-25px" />
            </Link>}
            
          </div>
        </div>
      </div>
  )
}

export default TrainingCaseStudy
