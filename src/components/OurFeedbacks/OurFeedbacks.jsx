import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";

function OurFeedbacks() {
  return (
    <div className="flex flex-col h-auto gap-3 w-80vw">
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
          <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 px-2 py-3 border shadow-lg w-30 border-crossIconBg rounded-10">
              
              <div className="flex flex-col items-center h-auto gap-1 w-100">
                <h3 className="font-bold text-crossLightPurple">
                  Tariq Al-thani
                </h3>
                <div className="flex flex-row items-center w-auto h-auto gap-1 px-1 rounded bg-crossIconBg">
                  <div className="rounded-full w-10px h-10px bg-crossLightPurple"></div>
                  <div>Uyo</div>
                </div>
              </div>

              <p className="text-center text-crossTextGray">
                “Working with Crosstie was the best decision we made for our
                company."
              </p>

              <Link
                to="/"
                className="flex items-center justify-center w-auto h-auto gap-1 px-1 mt-1 rounded text-crossLightPurple bg-crossIconBg"
              >
                Show More <MdOutlineChevronRight className="text-20px" />
              </Link>

              <div className="flex flex-col items-center h-auto">
                <p className="text-center text-crossTextGray">
                  Preventive maintenance and service
                </p>

                <div className="text-[#B56DEE]">23rd Feb 2025</div>
              </div>
            </div>

            <div className="flex flex-col items-center h-auto gap-1 px-2 py-3 border shadow-lg w-30 border-crossIconBg rounded-10">
              
              <div className="flex flex-col items-center h-auto gap-1 w-100">
                <h3 className="font-bold text-crossLightPurple">
                  Tariq Al-thani
                </h3>
                <div className="flex flex-row items-center w-auto h-auto gap-1 px-1 rounded bg-crossIconBg">
                  <div className="rounded-full w-10px h-10px bg-crossLightPurple"></div>
                  <div>Uyo</div>
                </div>
              </div>

              <p className="text-center text-crossTextGray">
                “Working with Crosstie was the best decision we made for our
                company."
              </p>

              <Link
                to="/"
                className="flex items-center justify-center w-auto h-auto gap-1 px-1 mt-1 rounded text-crossLightPurple bg-crossIconBg"
              >
                Show More <MdOutlineChevronRight className="text-20px" />
              </Link>

              <div className="flex flex-col items-center h-auto">
                <p className="text-center text-crossTextGray">
                  Preventive maintenance and service
                </p>

                <div className="text-[#B56DEE]">23rd Feb 2025</div>
              </div>
            </div>

            <div className="flex flex-col items-center h-auto gap-1 px-2 py-3 border shadow-lg w-30 border-crossIconBg rounded-10">
              
              <div className="flex flex-col items-center h-auto gap-1 w-100">
                <h3 className="font-bold text-crossLightPurple">
                  Tariq Al-thani
                </h3>
                <div className="flex flex-row items-center w-auto h-auto gap-1 px-1 rounded bg-crossIconBg">
                  <div className="rounded-full w-10px h-10px bg-crossLightPurple"></div>
                  <div>Uyo</div>
                </div>
              </div>

              <p className="text-center text-crossTextGray">
                “Working with Crosstie was the best decision we made for our
                company."
              </p>

              <Link
                to="/"
                className="flex items-center justify-center w-auto h-auto gap-1 px-1 mt-1 rounded text-crossLightPurple bg-crossIconBg"
              >
                Show More <MdOutlineChevronRight className="text-20px" />
              </Link>

              <div className="flex flex-col items-center h-auto">
                <p className="text-center text-crossTextGray">
                  Preventive maintenance and service
                </p>

                <div className="text-[#B56DEE]">23rd Feb 2025</div>
              </div>
            </div>
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
