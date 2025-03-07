import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import Feedback from "../Feedback/Feedback";

function OurFeedbacks() {
  return (
    <div className="flex flex-col h-auto gap-3 large:w-80vw small:w-90vw">
      <div className="flex flex-col h-auto gap-0.5 w-100">
        <div className="flex items-center w-auto h-auto gap-1">
          <hr className="h-2px w-40px bg-crossLightPurple" />
          <h5 className="text-crossLightPurple text-15px">
            PARTICIPANTS & CLIENTS’ STORIES
          </h5>
        </div>
        <h3 className="font-bold text-20px">Real Stories, Real Impact</h3>
        <p className="text-15px text-crossTextGray">
          Hear how Crosstie’s training and consulting services transformed
          participants and organisations
        </p>
      </div>


      <div className="flex flex-row h-auto p-2 border border-crossIconBg w-100 rounded-10 text-13px">
        <div className="flex flex-col items-center h-auto gap-4 w-100">
          <div className="flex justify-center h-auto gap-3 large:flex-wrap large:flex-row w-100 small:flex-col">
            
            <Feedback />
            <Feedback />
            <Feedback />
          </div>

          <Link className="flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple ">
            Show All <GoArrowRight className="text-25px" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurFeedbacks;
