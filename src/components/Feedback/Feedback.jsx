import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";

function Feedback() {
  return (
    <div className="flex flex-col items-center h-auto gap-1 px-2 py-3 border shadow-lg large:w-30 border-crossIconBg rounded-10 small:w-100">
      <div className="flex flex-col items-center h-auto gap-1 w-100">
        <h3 className="font-bold text-crossLightPurple">Tariq Al-thani</h3>
        <div className="flex flex-row items-center w-auto h-auto gap-1 px-1 rounded bg-crossIconBg">
          <div className="rounded-full w-10px h-10px bg-crossLightPurple"></div>
          <div>Uyo</div>
        </div>
      </div>

      <p className="text-center text-crossTextGray">
        “Working with Crosstie was the best decision we made for our company."
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
  );
}


export default Feedback
