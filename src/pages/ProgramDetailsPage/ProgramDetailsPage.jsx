import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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




function ProgramDetailsPage() {
  const {
    programsEndIndex,
    allPrograms, toggleEnrollment
  } = useContext(CrossContext);
  

  const [details, setDetails] = useState("course");

  const [messageMode, setMessageMode] = useState("individual");

  
  const [trainingMode, setTrainingMode] = useState("Online");
//   corporate

  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 large:text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13 small:text-13px">
      
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw small:h-200px small:pl-2 bg-crossLightPurple">
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-17px">
            ELEVATE YOUR LEADERSHIP SKILL, EXPAND YOUR IMPACT!
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-11px large:text-15px">
            Discover new skills and interests with our extensive course
            collection
          </p>

          <Link className="flex items-center justify-center gap-1 px-1 font-semibold large:w-300px rounded-10 h-40px bg-buttonOverlay large:text-15px small:w-250px small:text-11px">
            Download course content{" "}
            <RiFolderDownloadLine className="large:text-25px small:text-20px" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center pb-5 bg-white border large:gap-5 rounded-tl-20 large:w-80 rounded-tr-20 small:w-90vw small:gap-3">
        
        <div className="flex items-center justify-center text-white rounded-tl-20 rounded-tr-20 large:h-50px w-100 bg-crossLightPurple small:h-auto large:text-20px small:text-13px large:flex-row small:flex-col small:text-center small:py-1">
          Purchase this course -  <span className="font-bold"> Mastering Presentation skills and advanced
          powerpoint and canva</span>
        </div>

       
        <div className="flex flex-col items-start h-auto border small:gap-1 large:gap-2 small:pl-1 large:pl-5 w-100 text-crossTextGray small:py-1 large:py-0">
          <div className="flex items-center justify-center w-auto h-auto gap-2">
            <hr className="rotate-45 large:h-20px large:w-20px small:w-10px small:h-10px bg-crossLightPurple"/>
            <div>Duration : 2 Days</div>
          </div>

          <div className="flex items-center justify-center w-auto h-auto gap-2">
            <hr className="rotate-45 large:h-20px large:w-20px small:w-10px small:h-10px bg-crossLightPurple"/>
            <div>Time : 9:00PM</div>
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
            
            <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]">
              <div className="flex flex-col w-auto gap-1">
                <div className="flex items-center justify-start gap-1">
                  <FaRegCalendarAlt className="text-15px"/>
                  06-08 Dec
                </div>

                <div className="flex items-center justify-start gap-1">
                  <IoMdLaptop className="text-15px"/>
                  Online/Physical
                </div>
              </div>

              <div className="flex items-center justify-center w-auto border large:gap-1">
                <TbTimeDuration30 className="text-20px"/>
                9:00 AM - 4:00 PM
              </div>
            </div>

            <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]">
              <div className="flex flex-col w-auto gap-1">
                <div className="flex items-center justify-start gap-1">
                  <FaRegCalendarAlt className="text-15px"/>
                  06-08 Dec
                </div>

                <div className="flex items-center justify-start gap-1">
                  <IoMdLaptop className="text-15px"/>
                  Online/Physical
                </div>
              </div>

              <div className="flex items-center justify-center w-auto large:gap-1">
                <TbTimeDuration30 className="text-20px"/>
                9:00 AM - 4:00 PM
              </div>
            </div>

            <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]">
              <div className="flex flex-col w-auto gap-1">
                <div className="flex items-center justify-start gap-1">
                  <FaRegCalendarAlt className="text-15px"/>
                  06-08 Dec
                </div>

                <div className="flex items-center justify-start gap-1">
                  <IoMdLaptop className="text-15px"/>
                  Online/Physical
                </div>
              </div>

              <div className="flex items-center justify-center w-auto large:gap-1">
                <TbTimeDuration30 className="text-20px"/>
                9:00 AM - 4:00 PM
              </div>
            </div>

            <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]">
              <div className="flex flex-col w-auto gap-1">
                <div className="flex items-center justify-start gap-1">
                  <FaRegCalendarAlt className="text-15px"/>
                  06-08 Dec
                </div>

                <div className="flex items-center justify-start gap-1">
                  <IoMdLaptop className="text-15px"/>
                  Online/Physical
                </div>
              </div>

              <div className="flex items-center justify-center w-auto large:gap-1">
                <TbTimeDuration30 className="text-20px"/>
                9:00 AM - 4:00 PM
              </div>
            </div>

            <div className="flex items-center justify-between large:px-2 py-1 bg-[#F9F9F9]">
              <div className="flex flex-col w-auto gap-1">
                <div className="flex items-center justify-start gap-1">
                  <FaRegCalendarAlt className="text-15px"/>
                  06-08 Dec
                </div>

                <div className="flex items-center justify-start gap-1">
                  <IoMdLaptop className="text-15px"/>
                  Online/Physical
                </div>
              </div>

              <div className="flex items-center justify-center w-auto large:gap-1">
                <TbTimeDuration30 className="text-20px"/>
                9:00 AM - 4:00 PM
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between large:pr-10 w-100 large:flex-row small:flex-col small:gap-2 large:gap-0">
            <div className="flex items-center w-auto h-auto gap-1 font-bold">
              <CiFaceSmile className="text-20px text-crossYellow"/>
              Satisfaction guaranteed?
            </div>

            <button className="flex items-center justify-center w-auto px-2 text-white h-40px bg-crossLightPurple rounded-20"
            onClick={toggleEnrollment}
            >Enroll Now</button>
          </div>
        </div>
      </div>



        {/* about and modules */}
      <div className="flex justify-between large:items-start large:w-80 small:flex-col large:flex-row small:w-90vw small:items-center small:gap-3 large:gap-0">
        <div className="flex flex-col gap-3 bg-white large:w-40 small:w-100 small:px-1 large:px-0 small:py-3 large:py-0">
            
          <ul className="flex flex-col gap-0.5 list-disc w-100 items-center">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Modules</h4>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
          </ul>

          <ul className="flex flex-col gap-0.5 list-disc w-100 items-center">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">Optional Modules</h4>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
          </ul>

          <ul className="flex flex-col list-disc gap-0.5 w-100 items-center pb-3">
            <h4 className="p-1 text-white bg-crossLightPurple w-100">NOTES</h4>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
            <li>Strategic Thinking, Organization and Planning</li>
          </ul>
          
          
        </div>


        <div className="flex flex-col gap-3 border large:w-40 small:w-100">
          
        <div className="flex flex-col gap-1 bg-white w-100">
          <h4 className="p-1 text-white bg-crossLightPurple">About the course</h4>
          <p className="leading-loose small:p-1">
            Whether it is for an in-house project or your company’s clients,
            let’s train your project managers on how to coordinate resources and
            deliver to specifications.
          </p>
        </div>

        <div className="flex flex-col gap-1 bg-white w-100">
          <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple"><FaRegUser className="text-20px"/> Who should attend?</h4>
          <p className="leading-loose small:p-1">Project Officer, Project Manager, Project Head</p>
        </div>
        </div>
      </div>


      {/* Request More Information */}
      <div className="flex flex-col items-center gap-3 py-5 bg-white rounded large:w-80 small:w-90vw">
        <div className="flex items-center w-auto h-auto">
          
          <button className={`flex items-center justify-center w-auto p-2  border h-40px ${messageMode==="individual" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"} rounded-tl-20 rounded-bl-20`}
          onClick={()=>setMessageMode("individual")}
          >Individual</button>
          
          <button className={`flex items-center justify-center w-auto p-2 h-40px rounded-tr-20 rounded-br-20 ${messageMode==="corporate" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"}`}
          onClick={()=>setMessageMode("corporate")}
          >Corporate</button>
        </div>

        
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
          {/* 55, 45, 22 */}
          
          {details==="course" && 
          //   messageMode==='corporate' &&
          <div className="flex flex-col items-center gap-2 large:px-2 w-100 small:px-1">
            <h4 className="self-start font-semibold large:text-20px text-crossLightPurple small:text-15px">Course Details</h4>
            <div className="flex flex-col items-center h-auto gap-2 w-100">
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Selected course</label>
                        <select name="" id="" className="p-1 border rounded h-40px w-100">
                            <option value="Python course">Python course</option>
                        </select>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Preferred Date</label>
                        <input type="date" className="p-1 border rounded h-40px w-100"/>
                    </div>
                </div>

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Training Mode</label>
                        
                        <select name="" id="" className="p-1 border rounded h-40px w-100">
                            <option value="Python course">Classroom/Our Location</option>
                            <option value="Python course">Classroom/Your Location</option>
                            <option value="Python course">Online/Live</option>
                        </select>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Duration</label>
                        
                        <select name="" id="" className="p-1 border rounded h-40px w-100">
                            <option value="Python course">4 Days</option>
                        </select>
                    </div>
                </div>


                {messageMode==='corporate' &&
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Number of participants</label>
                        
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>

                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Name of organization</label>
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>
                </div>}
                

            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            onClick={()=>setDetails("personal")}
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
                        <label htmlFor="">Title</label>
                        
                        <select name="" id="" className="p-1 border rounded h-40px w-100">
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
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>
                </div>

                {messageMode==='corporate' &&
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Designation</label>
                        
                        <input type="text" className="p-1 border rounded h-40px w-100" placeholder="what is your role in the company?"/>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Additional Information</label>
                        
                        <input type="text" className="p-1 border rounded h-40px w-100" placeholder="Anything else we should know about you?"/>
                    </div>
                </div>}


                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Country</label>
                        
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">City</label>
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>
                </div>

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Phone</label>
                        
                        <input type="text" className="p-1 border rounded h-40px w-100"/>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="">Email</label>
                        <input type="email" className="p-1 border rounded h-40px w-100"/>
                    </div>
                </div>
            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            // onClick={()=>setDetails("personal")}
            >Send Message</button>
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
