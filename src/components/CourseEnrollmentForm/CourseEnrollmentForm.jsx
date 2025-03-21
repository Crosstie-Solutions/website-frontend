import React, { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbTimeDuration30 } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { CrossContext } from "../../Context/CrossContext";
import { LuMoveLeft } from "react-icons/lu";
import { toast } from 'react-toastify';
import axios from 'axios';


function CourseEnrollmentForm() {
  const { toggleEnrollment, program, setLoading, baseUrl } = useContext(CrossContext);

  
  const [activeForm, setActiveForm] = useState("courseDetails");


  //state for enrollment
  const [enrollmentData, setEnrollmentData] =useState({
    
    program: "",
    nameOfOrg: "",
    mode: "",
    duration: "",
    participants: 1,
    location: "",
    preferredDate: "",
    designation: "",
    title: "",
    fullName: "",
    email: "",
    phone: "",
    message: ""
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEnrollmentData({ ...enrollmentData, [name]: value });

    console.log("enrollmentData:", enrollmentData);
  };

  

  

  //to controll form look for different course categories
  const executiveCourse = program && program.category=== "Open Executive Programmes (OEP)";

  console.log("executiveCourse:", executiveCourse);
  

  //funtion for enrollment

  const [enrollmentErrors, setEnrollmentErrors] = useState({});
  
  const handleCourseEnrollment = async (event) => {
    window.scrollTo({ top: 0, behavior: "auto" });
   event.preventDefault();
  
   const validationErrors = {};
  
   //To ensure valid inputs
   if (!enrollmentData.fullName.trim()) {
     validationErrors.fullName = "full name is required";
   }
  
   setEnrollmentErrors(validationErrors);
  
   const noError = Object.keys(validationErrors).length === 0;
  
   if (noError) {
     try {
       // setLastErrors("");
       setLoading(true);
       const response = await axios.post(
         `${baseUrl}/api/course-reg`,
         enrollmentData
       );
  
       if (response.status === 201) {
         // setNewUser(response.data.data.user);
         toast.success('Course registration successful.');
         toggleEnrollment();
       }
     } catch (error) {
       
       console.log("Error enrolling:", error);
       
     } finally {
       setLoading(false);
     }
   }
  };
  
  

  return (
    <div className="absolute top-0 left-0 z-20 flex flex-col items-center justify-center py-3 large:h-auto w-100 bg-overlaySecond text-13px small:h-auto">
      
      
      <div className="relative flex flex-col items-center h-auto gap-3 py-5 mt-5 bg-white large:px-3 large:w-80 rounded-10 small:w-90vw small:px-1">
        
        <h3 className="font-semibold large:text-17px small:text-13px">
          Purchase Course -{" "}
          <span className="text-crossLightPurple">
            {program && program.title.slice(0, 50)}...
          </span>
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

        <IoIosCloseCircleOutline
          className="absolute cursor-pointer large:top-5 large:right-5 small:top-2 small:right-2 text-30px text-crossLightPurple"
          onClick={() => {
            toggleEnrollment();
          }}
        />




        {/* course */}
        {activeForm === "courseDetails" && (
          <div className="flex flex-col gap-1 large:px-2 w-100">
            <div className="flex flex-col items-center h-auto gap-2 w-100">
              <h5 className="self-start font-semibold text-crossLightPurple text-20px">
                Course Details
              </h5>

              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Course</label>

                  <select
                    name="program"
                    id="program"
                    className="p-1 border rounded cursor-pointer h-40px w-100"
                    onChange={handleChange}
                  >
                    <option value="">-select-</option>
                    <option value={program && program.title}>
                      {program && program.title}
                    </option>
                  </select>
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Name Of Organization</label>
                  <input
                    type="text"
                    name="nameOfOrg"
                    className="p-1 border rounded h-40px w-100"
                    placeholder="Enter name of organization"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Mode of training</label>

                  <select
                    name="mode"
                    id=""
                    className="p-1 border rounded cursor-pointer h-40px w-100"
                    onChange={handleChange}
                  >
                    <option value="">-Select mode-</option>
                    <option value="Classroom/Our location">Classroom/Our location</option>
                    <option value="Classroom/Your location">Classroom/Your location</option>
                    <option value="Online/Live">Online/Live</option>
                  </select>
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Duration</label>

                  <select
                    name="duration"
                    id=""
                    className="p-1 border rounded cursor-pointer h-40px w-100"
                    onChange={handleChange}
                  >
                    <option value="">-select-</option>
                    <option value={program && program.duration}>{program && program.duration}</option>
                  </select>
                </div>
              </div>


              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Number of participants</label>

                  <input
                    type="number"
                    name="participants"
                    className="p-1 border rounded h-40px w-100"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="p-1 border rounded h-40px w-100"
                    name="location"
                    placeholder="Enter company address"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Designation</label>

                  <input
                    type="text"
                    name="designation"
                    className="p-1 border rounded h-40px w-100"
                    placeholder="what is your role in the organization?"
                    onChange={handleChange}
                  />
                </div>


                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="location">Preferred date</label>
                  
                  <input
                    type="date"
                    className="p-1 border rounded h-40px w-100"
                    name="preferredDate"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
              onClick={()=>setActiveForm("personalDetails")}
            >
              Next
            </button>
          </div>
        )}



        {/* personal */}
        {activeForm === "personalDetails" && (
          <div className="flex flex-col gap-1 large:px-2 w-100">
            <div className="flex flex-col items-center h-auto gap-2 w-100">
              <h5 className="self-start font-semibold text-crossLightPurple text-20px">
                Personal Details
              </h5>

              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Title</label>

                  <select
                    name="title"
                    id=""
                    className="p-1 border rounded cursor-pointer h-40px w-100"
                    onChange={handleChange}
                  >
                    <option value="">-select-</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Eng.">Eng.</option>
                    <option value="Prof.">Prof.</option>
                  </select>
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="p-1 border rounded h-40px w-100"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between h-auto w-100">
                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="">Phone</label>

                  <input
                    type="text"
                    className="p-1 border rounded h-40px w-100"
                    onChange={handleChange}
                    name="phone"
                  />
                </div>

                <div className="flex flex-col h-auto w-45">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="p-1 border rounded h-40px w-100"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col h-auto w-100">
                <label htmlFor="">Additional information</label>

                <textarea
                  name="message"
                  id=""
                  className="p-1 border rounded large:h-100px w-100 small:h-50px"
                  placeholder="Any extra details we should know about you?"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center gap-5 w-100">
              <button
                className="flex items-center justify-center w-auto gap-1 px-2 border rounded h-40px text-crossLightPurple text-15px border-crossLightPurple"
                onClick={()=>setActiveForm("courseDetails")}
              >
                Previous
              </button>

              <button
                className="flex items-center justify-center w-auto px-2 text-white rounded h-40px bg-crossLightPurple text-15px"
                onClick={handleCourseEnrollment}
              >
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseEnrollmentForm;

