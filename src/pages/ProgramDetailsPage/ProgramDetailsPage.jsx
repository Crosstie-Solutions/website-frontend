import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CrossContext } from "../../Context/CrossContext";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { TbTimeDuration30 } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";
import { LuMoveLeft } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { toast } from 'react-toastify';



function ProgramDetailsPage() {
  const {
    toggleEnrollment, baseUrl, me, setLoading
  } = useContext(CrossContext);

  const programId = useParams().programId;
 

  const [program, setProgram] = useState(null);
  const [loadingProgram, setLoadingProgram] = useState(false);

  const executiveProgram = program && program.course.courseTitle === "Open Executive Programmes (OEP)";

  // 67e7db4aaa370840c014ee9d
  
  console.log("program:", program);


  useEffect(()=>{
    const viewProgram = async ()=> {

      try {
        setLoadingProgram(true)
        const response = await axios.get(`${baseUrl}/api/program/${programId}`);
        setProgram(response.data.data.data);
  
      } catch (error) {
        console.error('Error fetching program:', error);
      }finally{
        setLoadingProgram(false);
      }
  
    }

    viewProgram();
  }, [programId]);
  
  



  const [messageMode, setMessageMode] = useState("individual");

  
  const [trainingMode, setTrainingMode] = useState("Online");
//   corporate


  
  
  //state for enrollment
 
  const [nameOfOrg, setNameOfOrg] = useState("");
  const [mode, setMode] = useState("");
  const [participants, setParticipants] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [designation, setDesignation] = useState("");
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  

  //funtion for enrollment

  const [enrollmentErrors, setEnrollmentErrors] = useState({});

  const [details, setDetails] = useState("course");

  const nextForm = () =>{
    const validationErrors = {};
  
    //To ensure valid inputs
    // if (!enrollmentData.program.trim()) {
    //   validationErrors.program = "select program";
    // }

    if (!mode.trim()) {
      validationErrors.mode = "select training mode";
    }

    // if (!preferredDate) {
    //   validationErrors.preferredDate = "select training date";
    // }
   
    setEnrollmentErrors(validationErrors);
   
    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
      setDetails('personal')
    }
  }
  


  const navigate = useNavigate();
  
  const makeEnquiry = async () => {
   
    window.scrollTo({ top: 0, behavior: "auto" });
   
   const validationErrors = {};
  
   //To ensure valid inputs
   if (!fullName.trim()) {
     validationErrors.fullName = "full name is required";
   }
  
   setEnrollmentErrors(validationErrors);
  
   const noError = Object.keys(validationErrors).length === 0;
  
   if (noError) {
     try {
       // setLastErrors("");
       setLoading(true);
       const response = await axios.post(
         `${baseUrl}/api/enquiry`,
         {
          program: program && program.title,
          nameOfOrg: nameOfOrg,
          mode: mode,
          duration: program && program.duration,
          participants: participants,
          country: country,
          city: city,
          userType: messageMode,
          preferredDate: preferredDate,
          designation: designation,
          title: title,
          fullName: fullName,
          email: email,
          phone: phone,
          message: message
         }
       );
  
       if (response.status === 201) {
        
         toast.success('Enquiry form submitted successfully. Our team will reach out via email.');
         navigate("/our-courses/")
       }
     } catch (error) {
       
       console.log("Error enrolling:", error);
       
     } finally {
       setLoading(false);
     }
   }
  };

  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-15 large:text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13 small:text-13px">
      
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw small:w-100vw small:h-200px small:pl-2 bg-crossLightPurple">         
          
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-semibold small:w-80 small:text-17px">
            {program && program.title.toUpperCase()}
            {loadingProgram && "Loading Course Details..."}
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-11px large:text-15px">
          {program && program.description[0].toUpperCase()}
          {program && program.description.slice(1)}
          </p>

          {loadingProgram &&
          <p className="font-bold large:w-50 small:w-90 small:text-11px large:text-20px">
            Please wait
          </p>}

          {
            !loadingProgram &&
          <Link className="flex items-center justify-center gap-1 px-1 large:w-300px rounded-10 h-40px bg-buttonOverlay large:text-15px small:w-250px small:text-11px">
            Download course content{" "}
            <RiFolderDownloadLine className="large:text-25px small:text-20px" />
          </Link>}

            {me && me.role !=="user" &&
          
          <div className="flex items-center w-auto h-auto gap-2">
            <Link to='/admin-dashboard' className="flex items-center justify-center w-auto gap-1 px-1 border rounded large:mt-3 small:mt-0 h-30px"> <LuMoveLeft className="flex text-25px"/> Admin dashboard</Link>


            <Link to={`/our-courses/edit/${programId}`} className="flex items-center justify-center w-auto gap-1 px-1 border rounded large:mt-3 small:mt-0 h-30px"> <CiEdit className="flex text-25px"/> Edit Course</Link>
          </div>}
        </div>
      </div>

      <div className="flex flex-col items-center pb-5 bg-white border large:gap-5 rounded-tl-20 large:w-83vw rounded-tr-20 small:w-90vw small:gap-3">
        
        <div className="flex items-center justify-center text-white rounded-tl-20 rounded-tr-20 large:h-50px w-100 bg-crossLightPurple small:h-auto large:text-20px small:text-13px large:flex-row small:flex-col small:text-center small:py-1">
          Purchase this course -  <span className="font-bold">  {program && program.title}</span>
        </div>

       
        <div className="flex flex-col items-start h-auto small:gap-1 large:gap-2 small:pl-1 large:pl-5 w-100 text-crossTextGray small:py-1 large:py-0">
          <div className="flex items-center justify-center w-auto h-auto gap-2">
            <hr className="rotate-45 large:h-20px large:w-20px small:w-10px small:h-10px bg-crossLightPurple"/>
            <div>Duration :  {program && program.duration}</div>
          </div>

          <div className="flex items-center justify-center w-auto h-auto gap-2">
            <hr className="rotate-45 large:h-20px large:w-20px small:w-10px small:h-10px bg-crossLightPurple"/>
            <div>Time : {program && program.time}</div>
          </div>

          <div className="flex items-center justify-center w-auto h-auto gap-2">
            <hr className="rotate-45 large:h-20px large:w-20px small:w-10px small:h-10px bg-crossLightPurple"/>
            <div>Per Participant</div>
          </div>
        </div>

        <hr className="bg-gray-300 h-2px w-100"/>



        <div className="flex flex-col h-auto gap-2 large:pl-5 w-100 small:px-1">
          <div className="text-crossTextGray">Training mode:</div>
          <div className="flex w-auto h-auto gap-2">
            <button className={`flex items-center justify-center w-auto px-2  h-40px rounded-20 ${trainingMode==="Online" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"}`}
            
            onClick={()=>setTrainingMode('Online')}
            >Online</button>
            <button 
            className={`flex items-center justify-center w-auto px-2  h-40px rounded-20 ${trainingMode==="Physical" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"}`}
            
             onClick={()=>setTrainingMode('Physical')}
            >Physical</button>
          </div>

          
          <div className="flex flex-col gap-2 overflow-y-scroll bg-white h-200px w-100">
            
            {program && program.date.map((day, i)=>
             <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]"
             key={i}
             >
              
             <div className="flex flex-col w-auto gap-1">
               <div className="flex items-center justify-start gap-1">
                 <FaRegCalendarAlt className="text-15px"/>
                 {day}
               </div>

               <div className="flex items-center justify-start gap-1">
                 <IoMdLaptop className="text-15px"/>
                 Online/Physical
               </div>
             </div>

             <div className="flex items-center justify-center w-auto border large:gap-1">
               <TbTimeDuration30 className="text-20px"/>
               {program && program.time}
             </div>
           </div>
          )}

          </div>

          <div className="flex items-center justify-between large:pr-10 w-100 large:flex-row small:flex-col small:gap-2 large:gap-0">
            <div className="flex items-center w-auto h-auto gap-1 font-bold">
              <CiFaceSmile className="text-20px text-crossYellow"/>
              Satisfaction guaranteed?
            </div>

            <button className="flex items-center justify-center w-auto px-2 text-white h-40px bg-crossLightPurple rounded-20"
            onClick={()=>{
              toggleEnrollment(programId)
            }}
            >Enroll Now</button>
          </div>
        </div>
      </div>



        {/* about and modules */}
      <div className="flex justify-between large:items-start large:w-83vw small:flex-col large:flex-row small:w-90vw small:items-center small:gap-3 large:gap-0">
        
        <div className="flex flex-col gap-3 large:w-40 small:w-100 small:px-1 large:px-0 small:py-3 large:py-0">

        <div className="flex flex-col gap-1 bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple">About The Course</h4>
            <p className="leading-loose small:p-1">
            {program && program.description[0].toUpperCase()}
            {program && program.description.slice(1)}.
            </p>
          </div>

        <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Modules</h4>
              <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
                
              {
                  program && program.modules.map((module, i)=>
                    <li key={i} className="">{module}</li>
                  )
                }            
              </ul>
          </div>



          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Optional Modules</h4>
              <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
                
              {
                  program && program.optionalModules.map((module, i)=>
                    <li key={i} className="">{module}</li>
                  )
                }          
              </ul>
          </div>


          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Notes</h4>
              <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
                
              {
                  program && program.notes.map((note, i)=>
                    <li key={i} className="">{note}</li>
                  )
                }         
              </ul>
          </div>         
          
        </div>


        <div className="flex flex-col gap-3 border large:w-40 small:w-100">
          
          {/* <div className="flex flex-col gap-1 bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple">About The Course</h4>
            <p className="leading-loose small:p-1">
            {program && program.description[0].toUpperCase()}
            {program && program.description.slice(1)}.
            </p>
          </div> */}

          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Workshop Objectives</h4>
              <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
                
                {
                  program && program.objectives.map((objective, i)=>
                    <li key={i} className="">{objective}</li>
                  )
                }            
              </ul>
          </div>


          <div className="flex flex-col gap-1 bg-white w-100">
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple"><FaRegUser className="text-20px"/> Who Should Attend?</h4>
            <p className="leading-loose small:p-1">{program && program.targetAudience[0].toUpperCase()}
            {program && program.targetAudience.slice(1)}</p>
          </div>
        </div>
      </div>


      {/* Request More Information */}
      <div className="flex flex-col items-center gap-3 py-5 bg-white rounded large:w-83vw small:w-90vw">
        
        {executiveProgram &&
        <div className="flex items-center w-auto h-auto">
          
          <button className={`flex items-center justify-center w-auto p-2  border h-40px ${messageMode==="individual" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"} rounded-tl-20 rounded-bl-20`}
          onClick={()=>setMessageMode("individual")}
          >Individual</button>
          
          <button className={`flex items-center justify-center w-auto p-2 h-40px rounded-tr-20 rounded-br-20 ${messageMode==="corporate" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"}`}
          onClick={()=>setMessageMode("corporate")}
          >Corporate</button>
        </div>}

        
        
        <div className="flex flex-col items-center h-auto small:gap-2 large:gap-3 w-100">
          
          <h5 className="font-bold large:text-20px small:text-15px">Request More Information</h5>
          
          {/* whatsapp and email */}
          <div className="flex items-center h-auto gap-2 large:w-auto small:w-100 small:justify-center">
            <a
              href="mailto:info@crosstie.com"
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            >
              <MdOutlineMail className="text-15px" /> Email
            </a>

            <a
              href="https://wa.me/2348138957283"
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            >
              <FaWhatsapp className="text-whatsAppGreen text-20px" /> Whatsapp
            </a>
          </div>

          
          
          {/* Course Details */}
          
          {details==="course" && 
          //   messageMode==='corporate' &&
          <div className="flex flex-col items-center gap-2 large:px-2 w-100 small:px-1">
            <h4 className="self-start font-semibold large:text-20px text-crossLightPurple small:text-15px">Course Details</h4>
            <div className="flex flex-col items-center h-auto gap-2 w-100">
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className={`flex flex-col h-auto ${executiveProgram ? "w-45" : "w-100"}`}>
                        <label htmlFor="program">Selected course</label>
                        <select name="program" id="" className="p-1 border rounded h-40px w-100"
                        >
                            <option value={program && program.title}>{program && program.title}</option>
                        </select>

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.program}</p>
                    </div>

                    {executiveProgram &&
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="preferredDate">Preferred Date</label>
                        {/* <input type="date" className="p-1 border rounded h-40px w-100"/> */}
                        <select name="preferredDate" id="" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setPreferredDate(e.target.value)}
                        >
                          {
                            program && program.date.map((day,i)=>
                              <option value={day} key={i}>{day}</option>
                            )
                          }
                           
                        </select>

                        {/* <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.preferredDate}</p> */}
                    </div>}
                </div>

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="mode">Training Mode</label>
                        
                        <select name="mode" id="" className="p-1 border rounded h-40px w-100"
                         onChange={(e)=>setMode(e.target.value)}
                        >
                            <option value="">-select-</option>
                            <option value="Classroom/Our Location">Classroom/Our Location</option>
                            <option value="Classroom/Your Location">Classroom/Your Location</option>
                            <option value="Online/Live">Online/Live</option>
                        </select>
                    </div>


                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="duration">Duration</label>
                        
                        <select name="duration" id="" className="p-1 border rounded h-40px w-100"
                        >
                            <option value={program && program.duration}>{program && program.duration}</option>
                        </select>
                    </div>
                </div>


                {messageMode==='corporate' &&
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Number of participants</label>
                        
                        <input type="text" name="participants" className="p-1 border rounded h-40px w-100"
                         onChange={(e)=>setParticipants(e.target.value)}
                        />
                    </div>

                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="nameOfOrg">Name of organization</label>
                        <input type="text" name="nameOfOrg" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setNameOfOrg(e.target.value)}
                        />
                    </div>
                    
                </div>}
                

            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            onClick={nextForm}
            >Next</button>
          </div>}


          
          {/* Personal Details */}
          {/* messageMode==='corporate' */}
          {details==="personal" &&
          <div className="flex flex-col large:gap-4 large:px-2 w-100 small:px-1 small:gap-2">
            
            <FaArrowLeftLong className="cursor-pointer large:text-25px text-crossLightPurple small:text-20px"
            onClick={()=>setDetails("course")}
            />
            <h4 className="self-start font-semibold large:text-20px text-crossLightPurple small:text-15px">Personal Details</h4>
            
            
            <div className="flex flex-col items-center h-auto gap-2 w-100">
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="title">Title</label>
                        
                        <select name="title" id="" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setTitle(e.target.value)}
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
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setFullName(e.target.value)}
                        />
                    </div>
                </div>

                {messageMode==='corporate' &&
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="designation">Designation</label>
                        
                        <input type="text" name="designation" className="p-1 border rounded h-40px w-100" placeholder="what is your role in the company?"
                        onChange={(e)=>setDesignation(e.target.value)}
                        />
                    </div>
                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="message">Additional Information</label>
                        
                        <input type="text" name="message" className="p-1 border rounded h-40px w-100" placeholder="Anything else we should know about you?"
                        onChange={(e)=>setMessage(e.target.value)}
                        />
                    </div>
                </div>}


                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="country">Country</label>
                        
                        <input type="text" name="country" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setCountry(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setCity(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="phone">Phone</label>
                        
                        <input type="text" name="phone" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            onClick={makeEnquiry}
            >Submit</button>
          </div>}

          
        </div>
      </div>

      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
              <h4 className="font-bold large:text-20px small:text-17px">
                Ready To Get Started?
              </h4>
              <Link
                to="/our-courses/"
                className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
              >
                Explore Our Courses <HiArrowLongRight className="text-20px" />
              </Link>
        </div>
    </div>
  );
}

export default ProgramDetailsPage;
