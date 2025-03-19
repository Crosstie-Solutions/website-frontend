import React, { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbTimeDuration30 } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { CrossContext } from "../../Context/CrossContext";





function CourseEnrollmentForm() {

  

    const {toggleEnrollment, program} = useContext(CrossContext);
    
  return (
    <div className="fixed top-0 left-0 z-20 flex flex-col items-center justify-center py-3 large:h-auto w-100 bg-overlaySecond text-13px small:h-100vh">
        
        
      <div className="relative flex flex-col items-center h-auto gap-3 py-2 bg-white large:px-3 large:w-80 rounded-10 small:w-90vw small:px-1">
        
        <h3 className="font-semibold large:text-17px small:text-13px">
          Purchase Course - <span className="text-crossLightPurple">{program && program.title.slice(0, 50)}...</span>
        </h3>

        <div className="flex gap-2 font-semibold large:px-2 w-100 large:flex-row small:flex-col">
          <div className="flex items-center justify-start gap-1 border rounded h-30px px-0.5">
            <FaRegCalendarAlt className="text-15px text-crossLightPurple" />
            {program && program.date[0]} Dec
          </div>
          
          <div className="flex items-center justify-start gap-1 border rounded h-30px px-0.5">
            <TbTimeDuration30 className="text-20px text-crossLightPurple" />
            {program && program.time}
          </div>

          <div className="flex items-center justify-start gap-1 border rounded h-30px px-0.5">
            <TbMoneybag className="text-20px text-crossLightPurple" />
            &#8358;{program && program.cost.toLocaleString()}
          </div>
        </div>


        <IoIosCloseCircleOutline className="absolute cursor-pointer large:top-5 large:right-5 small:top-4 small:right-2 text-30px text-crossLightPurple"
        onClick={()=>{
          toggleEnrollment()
        }}
        />

        
          <div className="flex flex-col gap-1 large:px-2 w-100">

            <div className="flex flex-col items-center h-auto gap-2 w-100">
              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Title</label>

                  <select
                    name=""
                    id=""
                    className="p-1 border rounded cursor-pointer h-40px w-100"
                  >
                    <option value="Python course">Mr.</option>
                    <option value="Python course">Mrs.</option>
                    <option value="Python course">Ms.</option>
                    <option value="Python course">Dr.</option>
                    <option value="Python course">Eng.</option>
                    <option value="Python course">Prof.</option>
                  </select>
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    className="p-1 border rounded h-40px w-100"
                  />
                </div>
              </div>
              


              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Phone</label>

                  <input
                    type="text"
                    className="p-1 border rounded h-40px w-100"
                  />
                </div>


                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="p-1 border rounded h-40px w-100"
                    name="email"
                  />
                </div>
              </div>


                <div className="flex flex-col h-auto w-100">
                    <label htmlFor="">Please let us know how we can help</label>

                    <textarea name="" id="" className="p-1 border rounded large:h-100px w-100 small:h-50px" placeholder="type your message here..."></textarea>
                </div>
            </div>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
              // onClick={()=>setDetails("personal")}
            >
              Register
            </button>
          </div>
        
      </div>

      
    </div>
  );
}

export default CourseEnrollmentForm;
