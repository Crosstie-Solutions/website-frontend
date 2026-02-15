import React, { useContext, useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CrossContext } from "../../../Context/CrossContext";
import { DeletingBtn } from "../../LoadingBtn/LoadingBtn";
import axios from "axios";
import { toast } from "react-toastify";

function AdminProgramAction(program) {
  const { progEnd, progNo, programId, title, slug, isPrivate } = program;

  const { toggleAdminProgramAction, deletingProgram, deleteProgram, viewAllPrograms, baseUrl } =
    useContext(CrossContext);

  //to delete program
  const [deleteProgramMode, setDeleteProgramMode] = useState(false);

  const toggleDeleteProgramMode = () => {
    setDeleteProgramMode(!deleteProgramMode);
  };

  const [marking, setMarking] = useState(false);

  const toggleProgramPrivacy = async () => {
  try {
      setMarking(true);
    const response = await axios.patch(`${baseUrl}/api/program/privacy/${programId}`,
      {}
    );

    if(response.status === 200){
      toast.success(response.data.message);
      viewAllPrograms();
    }
    // console.log(response.data);

  } catch (error) {
    console.error(error.response?.data || error.message);
  }finally{
setMarking(false);
  }
};


  return (
    <div className="fixed top-0 left-0 z-20 flex flex-col items-center justify-center h-100vh w-100vw bg-overlay">
      <VscClose
        className="absolute text-white cursor-pointer large:top-8 large:right-30 text-30px small:right-5 small:top-12"
        onClick={() => toggleAdminProgramAction("sdsffdf")}
      />

      {!deleteProgramMode && (
        <div className="flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-2 large:w-30vw rounded-10 small:w-90vw small:gap-1">
          
          <div className="flex flex-col items-end h-auto gap-1 w-100">
            <span className="text-crossBlue text-13px">Make private</span>
            <button
              onClick={toggleProgramPrivacy}
              disabled={marking}
              className={`h-20px w-50px rounded-full transition-all duration-300 ${
                isPrivate ? "bg-[#7232A1]" : "bg-gray-600"
              } ${marking ? "opacity-50 cursor-not-allowed" : ""} flex items-center`}
              
            >
              <span
                className={`h-15px w-15px rounded-full bg-white shadow-md transition-transform duration-300 ${
                  isPrivate ? "translate-x-3" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <Link
            // to='/'
            to={`/our-courses/${slug}`}
            className="flex items-center justify-center font-bold rounded w-70 h-40px text-[#00a14b]"
            onClick={() => toggleAdminProgramAction(progEnd)}
          >
            View program
          </Link>

          <Link
            to={`/our-courses/edit/${slug}`}
            className="flex items-center justify-center font-bold text-[#662d91] rounded w-70 h-40px"
            onClick={() => toggleAdminProgramAction(progEnd)}
          >
            Edit program
          </Link>

          <button
            className="flex items-center justify-center font-bold rounded w-70 h-40px text-vogueRed"
            onClick={toggleDeleteProgramMode}
          >
            Delete program
          </button>
        </div>
      )}

      {deleteProgramMode && (
        <div className="flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1">
          {!deletingProgram && (
            <h4 className="text-center">
              Are you sure you want to delete{" "}
              <span className="font-bold">{title}?</span> If it is a high demand
              program, ensure to delete it from the{" "}
              <span className="font-bold">High Demand Programs</span> table, to
              avoid error on the interface.
            </h4>
          )}

          {!deletingProgram && (
            <div className="text-vogueRed">This action can not be reversed</div>
          )}

          {!deletingProgram && (
            <div className="flex items-center justify-around h-auto w-100">
              <button
                className="w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple"
                onClick={toggleDeleteProgramMode}
              >
                Cancel
              </button>

              <button
                className="w-auto px-1 text-white rounded h-30px bg-vogueRed"
                onClick={() => deleteProgram(programId)}
              >
                Delete
              </button>
            </div>
          )}

          {deletingProgram && (
            <div className="flex items-center justify-center h-auto w-50">
              <DeletingBtn />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminProgramAction;
