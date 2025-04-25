import React, { useContext } from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { CrossContext } from "../../Context/CrossContext";



function CaseStudy(post) {

  const {title, blogImage, mainContent, postId, createdAt, caseStudyImage, author, challenge, solution, date} = post;

  const {formatDate} = useContext(CrossContext);
  
  return (
    <div className="flex flex-col items-start h-auto gap-1 px-1 py-2 border large:w-30 border-crossIconBg rounded-10 small:w-100 text-15px">
      
      <img
        src={caseStudyImage}
        alt="blog image"
        className="w-100 h-170px rounded-5"
      />

      <div className="flex flex-row justify-between h-auto w-100 text-crossTextGray">
        <div>Case Study</div>
        <div>{date}</div>
      </div>

      <h3 className="font-semibold">
       {title}
      </h3>

      <p className="text-crossTextGray">
      {challenge.slice(0, 80)}...
      </p>

      <Link 
       to={`/case-studies/${postId}`} 
      className="flex flex-row items-center justify-center w-auto text-crossLightPurple">
        Read More
      </Link>
    </div>
  );
}


function SecondCaseStudy(post) {

  const {title, blogImage, mainContent, postId, createdAt, caseStudyImage, author, challenge, solution, date} = post;

  

  const {formatDate} = useContext(CrossContext);
  
  return (
    <div className="flex items-start h-auto gap-2 px-1 py-1 border small:flex-col large:w-100 border-crossIconBg rounded-10 small:w-100 large:flex-row">
      
      <img
        src={caseStudyImage}
        alt="blog image"
        className="large:w-auto h-200px rounded-5"
      />

      <div className="flex flex-col items-start h-auto gap-2 w-60">
        <div className="flex flex-row justify-between h-auto w-100 text-crossTextGray">
          <div>Case Study</div>
          <div>{formatDate(date)}</div>
        </div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-crossTextGray">
          {challenge.slice(0, 80)}...
        </p>

        <Link className="flex flex-row items-center justify-center w-auto gap-1 text-crossLightPurple"
        to={`/case-studies/${postId}`}
        >
          Read More <GoArrowRight className="text-18px"/>
        </Link>
      </div>
    </div>
  );
}


export {CaseStudy, SecondCaseStudy};