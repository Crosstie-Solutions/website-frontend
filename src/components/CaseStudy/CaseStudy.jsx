import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";



function CaseStudy() {
  return (
    <div className="flex flex-col items-start h-auto gap-1 px-1 py-2 border large:w-30 border-crossIconBg rounded-10 small:w-100 text-15px">
      
      <img
        src={PHOTOS.case}
        alt="blog image"
        className="w-100 h-170px rounded-5"
      />

      <div className="flex flex-row justify-between h-auto w-100 text-crossTextGray">
        <div>Article</div>
        <div>24 Feb 2025</div>
      </div>

      <h3 className="font-semibold">
        Emotional Intelligence in the workplace: What you should know
      </h3>

      <p className="text-crossTextGray">
        The business landscape is evolving, and staying ahead requires more than
        just experience—it demands strategic thinking, innovation, and
        executive-level expertise.
      </p>

      <Link to='/our-solutions/case-study/id' className="flex flex-row items-center justify-center w-auto text-crossLightPurple">
        Read More
      </Link>
    </div>
  );
}



function SecondCaseStudy() {
  return (
    <div className="flex flex-col items-start h-auto gap-1 px-1 py-2 border large:w-30 border-crossIconBg rounded-10 small:w-100 text-15px">
      
      <img
        src={PHOTOS.case}
        alt="blog image"
        className="w-100 h-170px rounded-5"
      />

      <div className="flex flex-row justify-between h-auto w-100 text-crossTextGray">
        <div>Article</div>
        <div>24 Feb 2025</div>
      </div>

      <h3 className="font-semibold">
        Emotional Intelligence in the workplace: What you should know
      </h3>

      <p className="text-crossTextGray">
        The business landscape is evolving, and staying ahead requires more than
        just experience—it demands strategic thinking, innovation, and
        executive-level expertise.
      </p>

      <Link to='/our-solutions/case-study/id' className="flex flex-row items-center justify-center w-auto text-crossLightPurple">
        Read More
      </Link>
    </div>
  );
}


export {CaseStudy, SecondCaseStudy};