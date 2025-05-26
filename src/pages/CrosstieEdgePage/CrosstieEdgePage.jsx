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
import './CrosstieEdgePage.css'
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineViewModule } from "react-icons/md";
import { CourseContentDownloadScreen } from "../../components/DownloadScreen/DownloadScreen";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { TbTimeDuration45 } from "react-icons/tb";
import { LuAlarmClock } from "react-icons/lu";
import AboutHero from "../../components/AboutHero/AboutHero";
import { IoSchool } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { LuNetwork } from "react-icons/lu";
import { FrequentlyAskedQues } from "../../components/FrequentlyAskedQues/FrequentlyAskedQues";





function CrosstieEdgePage() {
  
  const { baseUrl, me, setLoading, } = useContext(CrossContext);
  
  
  //type
  const [messageMode, setMessageMode] = useState("applicant");
  
  //state for recruiter
 
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [nameOfOrg, setNameOfOrg] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [role, setRole] = useState("");
    const [preferredDiscipline, setPreferredDiscipline] = useState("");
    const [numberOfCandidates, setNumberOfCandidates] = useState("");
    const [mode, setMode] = useState("");
    const [website, setWebsite] = useState("");
    const [linkedIn, setLinkedIn] = useState("");

  //message character limit
  const maxChar = 150;

  //states for applicant
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [university, setUniversity] = useState("");
    const [course, setCourse] = useState("");
    const [yearOfGrad, setYearOfGrad] = useState("");
    const [grade, setGrade] = useState("");
    const [nysc, setNysc] = useState("");
    const [message, setMessage] = useState("");
    const [resume, setResume] = useState(null);
  
  

  //funtion for enrollment

  const [enrollmentErrors, setEnrollmentErrors] = useState({});

  console.log('enrollmentErrors:', enrollmentErrors)



   // to limit resume to 1MB
    const maxResumeSize = 1 * 1024 * 1024; 
  
    const [resumeSizeError, setResumeSizeError] = useState("");
  
    const handleResumeChange = (e)=>{
      const uploadedFile = e.target.files[0];
  
      setResume(uploadedFile);
  
      if(uploadedFile.size > maxResumeSize){
        setResumeSizeError("File too large");
  
        enrollmentErrors.resume = ''
      }
    }



  
   const apply = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const validationErrors = {};
  
  //To ensure valid inputs
  if (messageMode ==='applicant' && !fullName.trim()) {
    validationErrors.fullName = "full name is required";
  }


  if (!email.trim()) {
    validationErrors.email = "email is required";
  }

  else if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

  
  if (!phone) {
    validationErrors.phone = "phone number is required";
  }

  if (!linkedIn) {
    validationErrors.linkedIn = "LinkedIn URL is required";
  }

  if (!linkedIn.startsWith('https')) {
    validationErrors.linkedIn = "Invalid URL";
  }

  if (messageMode ==='recruiter' && !address.trim()) {
    validationErrors.address = "address is required";
  }

  if (messageMode ==='recruiter' && !nameOfOrg.trim()) {
    validationErrors.nameOfOrg = "company name is required";
  }

  if (messageMode ==='recruiter' && !contactPerson.trim()) {
    validationErrors.contactPerson = "provide contact person";
  }

  if (messageMode ==='recruiter' && !role.trim()) {
    validationErrors.role = "What is the contact person's role?";
  }

  if (messageMode ==='recruiter' && !preferredDiscipline.trim()) {
    validationErrors.preferredDiscipline = "Preferred discipline is required";
  }

  if (messageMode ==='recruiter' && !numberOfCandidates.trim()) {
    validationErrors.numberOfCandidates = "How many candidates do you want?";
  }

  if (messageMode ==='recruiter' && !mode.trim()) {
    validationErrors.mode = "Job mode is required";
  }

  if (messageMode ==='recruiter' && !website.startsWith('https')) {
    validationErrors.website = "Provide a valid URL";
  }
  

  if (messageMode ==='applicant' && !resume) {
    validationErrors.resume = "Upload resume";
  }
  
  
   if (messageMode ==='applicant' && !dateOfBirth) {
    validationErrors.dateOfBirth = "Date of birth is required";
  }

   if (messageMode ==='applicant' && !university) {
    validationErrors.university = "Provide institution attended";
  }

   if (messageMode ==='applicant' && !course) {
    validationErrors.course = "Course of study is required";
  }

    if (messageMode ==='applicant' && !yearOfGrad) {
    validationErrors.yearOfGrad = "What year did you graduate?";
  }

   if (messageMode ==='applicant' && !grade) {
    validationErrors.grade = "Grade is required";
  } 

   if (messageMode ==='applicant' && !nysc) {
    validationErrors.nysc = "NYSC status is required";
  } 

   if (messageMode ==='applicant' && !message) {
    validationErrors.message = "Why should we pick you?";
  } 
   
  
  
  
  setEnrollmentErrors(validationErrors);
  
  const noError = Object.keys(validationErrors).length === 0;
  
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("dateOfBirth", dateOfBirth);
      
      formData.append("university", university);
      formData.append("course", course);
      formData.append("yearOfGrad", yearOfGrad);
      formData.append("grade", grade);
      formData.append("nysc", nysc);
      formData.append("message", message);
      formData.append("resume", resume);
      
      formData.append("nameOfOrg", nameOfOrg);
      formData.append("contactPerson", contactPerson);
      formData.append("role", role);
      formData.append("preferredDiscipline", preferredDiscipline);
      formData.append("numberOfCandidates", numberOfCandidates);
      formData.append("mode", mode);
      formData.append("website", website);
      formData.append("linkedIn", linkedIn);
      formData.append("type", messageMode);

     
    
  
  if (noError) {
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
      
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/edge/apply`,
        formData,
        {
          headers: {
             "Content-Type": "multipart/form-data"
          },
        }
      );
  
      if (response.status === 201) {
        toast.success(`Application submitted successfully`);
        if(messageMode ==='applicant'){
          setMessageMode('recruiter')
        }else{
          setMessageMode('applicant')
        }
      }
    } catch (error) {
      
      console.log("Error submitting application:", error);
      if(error){
        toast.error(error.response.data.message);
      }
    
    } finally {
      setLoading(false);
    }
  }
  };

  




  return (
    <div className="relative flex flex-col items-center justify-start small:gap-5 large:gap-5 large:mt-15 large:text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-12 small:text-13px">
      
     
      <AboutHero 
      tag = 'Crosstie EDGE: Emerging Graduate Development & Empowerment'
      line1 = 'One Move. One Moment. Your EDGE'
      line2 = 'Crosstie EDGE by Crosstie Solutions transforms top-performing graduates into workplace standouts with elite certification and standout soft skills that make them irresistible to employers IN JUST 30 DAYS.'

      buttonText = 'Download the Crosstie EDGE Brochure'
      />

   
      <div className="flex flex-col items-center bg-transparent large:pb-5 large:gap-5 rounded-tl-20 large:w-83vw rounded-tr-20 small:w-90vw small:gap-3 small:mt-0 large:mt-0">
        
        <div className="flex items-center justify-center text-white rounded-tl-20 rounded-tr-20 large:h-50px w-100 bg-crossLightPurple small:h-auto large:text-20px small:text-13px large:flex-row small:flex-col small:text-center small:py-1">
          <span className="font-bold">  Launch Your Career with the Soft Skills Employers Demand</span>
        </div>
      </div>



        {/* about and modules */}
      <div className="flex justify-between large:items-start large:w-83vw small:flex-col large:flex-row small:w-90vw small:items-center small:gap-3 large:gap-0">
        
        <div className="flex flex-col gap-3 large:w-40 small:w-100 small:px-1 large:px-0 small:py-0 large:py-0">

          <div className="flex flex-col gap-1 bg-white w-100">
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple"><IoSchool className="text-20px" /> What Is Crosstie EDGE?</h4>
            <p className="leading-loose small:p-1 text-crossTextGray">
            Every high achiever has potential. Crosstie EDGE gives it a headway..
            EDGE by Crosstie Solutions is the definitive career readiness accelerator for high-calibre Nigerian graduates and NYSC members.
            This 30-day programme closes the critical gap between academic credentials and workplace excellence. Admission is 100% free, but it is reserved for those serious about standing out.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100"><MdOutlineViewModule className="text-20px" /> Who Can Apply?</h4>
              <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">

                <p className="flex font-semibold text-crossLightPurple w-100">Are You Eligible?</p>

                
                    <li className="text-crossTextGray">First-Class, Second-Class Upper (2:1), or Strong Second-Class Lower (2:2) Graduates</li>

                    <li className="text-crossTextGray">NYSC Members (Serving or Completed)</li>

                    <li className="text-crossTextGray">Graduates from any discipline seeking career readiness</li>
                       
              </ul>
          </div>


          <div className="flex flex-col gap-1 bg-white w-100">
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple"><LuNetwork className="text-20px" /> Built by Experts in Workforce Development</h4>
            <p className="leading-loose small:p-1 text-crossTextGray">
           For over a decade, Crosstie Solutions has transformed the teams behind some of Africa’s largest companies. Crosstie EDGE is not a training program. It is a strategic gateway designed by workforce experts for high-performing future professionals.

            </p>
          </div>


          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100"><MdOutlineViewModule className="text-20px" /> How It Works (Simple 3-Step Graphic)</h4>
              <ol className="flex flex-col gap-0.5 list-decimal w-100 items-start pl-3 py-1">

                <p className="flex font-semibold text-crossLightPurple w-100">Your EDGE  Journey</p>

                
                    <li className="text-crossTextGray">Apply Online</li>

                    <li className="text-crossTextGray">Attend 4 Weeks of COMPULSORY, Virtual Expert-Led Practical Training</li>

                    <li className="text-crossTextGray">Graduate with Certification and Employer Access</li>
                       
              </ol>
          </div>

          {/* desktop FAQ */}

            <div className="large:flex small:hidden">
              <FrequentlyAskedQues />
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
          
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100"><GrWorkshop className="text-20px" /> What You'll Gain (Individuals)</h4>
              <ul className="flex flex-col items-start gap-1 py-1 pl-3 list-disc w-100 text-crossTextGray">
                    <li><span className="font-semibold text-black">Professional Soft Skills Certification</span> <br /> A respected credential that signals leadership, adaptability, and career readiness.</li>    



                    <li><span className="font-semibold text-black">Professional Growth</span> <br /> Master the soft skills employers hire for - communication, leadership, problem-solving, emotional intelligence, and more.</li>

                    <li><span className="font-semibold text-black">Confidence that Commands Respect</span> <br />Walk into any room, interview, or opportunity prepared to lead and deliver value.</li> 

                    <li><span className="font-semibold text-black">Real-World Practice</span> <br /> Gain practical experience with real-world case studies, leadership challenges, and workplace scenarios so you are not just prepared but also proven.</li> 

                    <li><span className="font-semibold text-black">Career Strategy & Personal Branding</span> <br /> Learn how to position yourself, pitch your value, and build a professional identity that attracts the right opportunities and stands out to decision-makers.</li>     
              </ul>
          </div>


          <div className="flex flex-col items-center justify-center h-auto bg-white w-100">
          
            <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100"><GrOrganization className="text-20px" />Why Hire from Crosstie EDGE? (Employers)</h4>
              <ul className="flex flex-col items-start gap-1 py-1 pl-3 list-disc w-100 text-crossTextGray">
                    <li><span className="font-semibold text-black">Pre-Vetted, Job-Ready Talent</span> <br /> Every Crosstie EDGE graduate has been assessed, trained, and prepared to deliver immediate value on the job.</li>    



                    <li><span className="font-semibold text-black">Reduced Onboarding Time</span> <br /> Our graduates already speak the language of your workplace, so no need to start from scratch with basic soft skills training.</li>

                    <li><span className="font-semibold text-black">Aligned with Your Culture</span> <br />Through our tailored employer partnerships, we prepare candidates not just for jobs but for long-term fit and growth within your organisation.</li>

                    <li><span className="font-semibold text-black">Access to the Top 10% of Graduate Talent</span> <br />We select only high-potential candidates, so you get access to the best of the best, ready to contribute from day one.</li> 

                    <li><span className="font-semibold text-black">Support Your Local Talent Goals</span> <br />Build a stronger workforce with top-tier local talent from diverse academic and socio-economic backgrounds.</li>     
              </ul>
          </div>

        </div>
      </div>

        {/* mobile FAQ */}
        
        <div className="h-auto w-90vw large:hidden small:flex">
          <FrequentlyAskedQues />
        </div>  

      {/* Application form */}
      <div className="flex flex-col items-center gap-3 py-5 bg-white rounded large:w-83vw small:w-90vw">
        
        
        <div className="flex items-center w-auto h-auto">
          
          <button className={`flex items-center justify-center w-auto p-2  border h-40px ${messageMode==="applicant" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"} rounded-tl-20 rounded-bl-20`}
          onClick={()=>setMessageMode("applicant")}
          >Applicant</button>
          
          <button className={`flex items-center justify-center w-auto p-2 h-40px rounded-tr-20 rounded-br-20 ${messageMode==="recruiter" ? "bg-crossLightPurple text-white" : "border border-[#D9D9D9] text-crossTextGray"}`}
          onClick={()=>setMessageMode("recruiter")}
          >Recruiter</button>
        </div>

        
        
        <div className="flex flex-col items-center h-auto small:gap-2 large:gap-3 w-100">
          
          <h5 className="font-bold large:text-20px small:text-15px">Application Form</h5>
          
          {/* whatsapp and email */}
          <div className="flex items-center h-auto gap-2 large:w-auto small:w-100 small:justify-center">
            <a
            target="_blank"
              href="mailto:training@crosstiesolutions.com"
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            ><MdOutlineMail className="text-20px" /> Email </a>
            
            <a
              target="_blank"
              href="https://wa.me/2349160901017"
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            >
              <FaWhatsapp className="text-whatsAppGreen text-20px" /> Whatsapp
            </a>
          </div>
          
          
        {/* Recruiter */}
        {messageMode==="recruiter" &&
          <div className="flex flex-col large:gap-4 large:px-2 w-100 small:px-1 small:gap-2">
            
            <h4 className="self-start font-semibold large:text-20px text-crossLightPurple small:text-15px">Recruiter</h4>
            
            
            <div className="flex flex-col items-center h-auto gap-2 w-100">
              <div className="flex items-center justify-between h-auto w-100">

                    <div className="flex flex-col h-auto w-100">
                        <label htmlFor="email">Company Email</label>
                        <input type="email" name="email" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.email}</p>
                    </div>
                    

                </div>
                
                <div className="flex items-center justify-between h-auto w-100">

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setPhone(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.phone}</p>
                    </div>
                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <input type="text" name="contactPerson" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setContactPerson(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.contactPerson}</p>
                    </div>

                </div>

               
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="address">Company Address</label>
                        
                        <input type="text" name="address" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setAddress(e.target.value)}
                        />
                        
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.address}</p>
                    </div>
                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="nameOfOrg">Company Name</label>
                        
                        <input type="text" name="nameOfOrg" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setNameOfOrg(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.nameOfOrg}</p>
                    </div>
                </div>
                

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="role">Role</label>
                        
                        <input type="text" name="role" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setRole(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.role}</p>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="preferredDiscipline">Preferred discipline</label>
                        <input type="text" name="preferredDiscipline" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setPreferredDiscipline(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.preferredDiscipline}</p>
                    </div>
                </div>


                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="numberOfCandidates">Number Of Candidates</label>
                        
                        <input type="text" name="numberOfCandidates" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setNumberOfCandidates(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.numberOfCandidates}</p>
                    </div>


                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="mode">Work Mode</label>
                        
                        <select name="mode" id="" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setMode(e.target.value)}
                        >
                            <option value="">-select-</option>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="on-site">On-site</option>
                        </select>
                        
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.mode}</p>
                    </div>
                </div>


                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="website">Website Address</label>
                        
                         <input type="text" name="website" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setWebsite(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.website}</p>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="linkedIn">Company LinkedIn URL</label>
                        <input type="text" name="linkedIn" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setLinkedIn(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.linkedIn}</p>
                    </div>
                </div>

                {/* <div className="flex items-start justify-between h-auto w-100 large:flex-row small:flex-col small:gap-2 large:gap-0">
                    
                    <div className="flex flex-col h-auto large:w-45 small:w-100">
                        <label htmlFor="resume">Resume <span className="font-semibold">(Not more than 1MB)</span></label>
                        
                        <input type="file" name="resume" className="p-1 border rounded h-40px w-100"
                        accept=".pdf"
                        onChange={handleResumeChange}
                        />

                         {enrollmentErrors && (
                            <p className="text-13px text-vogueRed">
                              {enrollmentErrors.resume}
                            </p>
                          )}
                          
                          {resumeSizeError && 
                          <p className="text-15px text-vogueRed">
                              {resumeSizeError}
                            </p>}
                    </div>

                    <div className="flex flex-col h-auto gap-1 large:w-45 small:w-100">
                        <label htmlFor="message">Short Personal Statement</label>
                        <textarea type="text" name="message" className="p-1 border rounded h-100px w-100"
                        maxLength={maxChar}
                        placeholder="Why should we pick you for Crosstie EDGE?"
                        onChange={(e)=>setMessage(e.target.value)}
                        />

                        <p className="self-end">{message.length}/{maxChar}</p>

                        <p className="text-13px text-vogueRed">
                              {enrollmentErrors.message}
                            </p>
                    </div>
                </div> */}
            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            onClick={apply}
            >Apply</button>
          </div>
          }


          
          {/* Applicant */}

          {messageMode==="applicant" &&
          <div className="flex flex-col large:gap-4 large:px-2 w-100 small:px-1 small:gap-2">
            
            <h4 className="self-start font-semibold large:text-20px text-crossLightPurple small:text-15px">Applicant</h4>
            
            
            <div className="flex flex-col items-center h-auto gap-2 w-100">
                <div className="flex items-center justify-between h-auto w-100">
                    
                    {/* <div className="flex flex-col h-auto w-45">
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
                    </div> */}

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setFullName(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.fullName}</p>
                    </div>


                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.email}</p>
                    </div>
                </div>

               
                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        
                        <input type="date" name="dateOfBirth" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setDateOfBirth(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.dateOfBirth}</p>
                    </div>
                    

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="phone">Phone</label>
                        
                        <input type="text" name="phone" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.phone}</p>
                    </div>
                </div>
                

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="university">University</label>
                        
                        <input type="text" name="university" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setUniversity(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.university}</p>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="course">Course of study</label>
                        <input type="text" name="course" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setCourse(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.course}</p>
                    </div>
                </div>


                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="yearOfGrad">Year of Graduation</label>
                        
                        <input type="text" name="yearOfGrad" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setYearOfGrad(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.yearOfGrad}</p>
                    </div>


                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="grade">Degree Classification</label>
                        
                        <select name="grade" id="" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setGrade(e.target.value)}
                        >
                            <option value="">-select-</option>
                            <option value="first-class">First-Class</option>
                            <option value="2:1">2:1</option>
                            <option value="2:2">2:2</option>
                        </select>
                        
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.grade}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between h-auto w-100">
                    
                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="nysc">NYSC Status</label>
                        
                        <select name="nysc" id="" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setNysc(e.target.value)}
                        >
                            <option value="">-select-</option>
                            <option value="serving">Serving</option>
                            <option value="completed">Completed</option>
                        </select>

                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.nysc}</p>
                    </div>

                    <div className="flex flex-col h-auto w-45">
                        <label htmlFor="linkedIn">LinkedIn URL</label>
                        <input type="text" name="linkedIn" className="p-1 border rounded h-40px w-100"
                        onChange={(e)=>setLinkedIn(e.target.value)}
                        />
                        <p className="text-vogueRed">{enrollmentErrors && enrollmentErrors.linkedIn}</p>
                    </div>
                </div>

                <div className="flex items-start justify-between h-auto w-100 large:flex-row small:flex-col small:gap-2 large:gap-0">
                    
                    <div className="flex flex-col h-auto large:w-45 small:w-100">
                        <label htmlFor="resume">Resume <span className="font-semibold">(Not more than 1MB)</span></label>
                        
                        <input type="file" name="resume" className="p-1 border rounded h-40px w-100"
                        accept=".pdf"
                        onChange={handleResumeChange}
                        />

                         {enrollmentErrors && (
                            <p className="text-13px text-vogueRed">
                              {enrollmentErrors.resume}
                            </p>
                          )}
                          
                          {resumeSizeError && 
                          <p className="text-15px text-vogueRed">
                              {resumeSizeError}
                            </p>}
                    </div>

                    <div className="flex flex-col h-auto gap-1 large:w-45 small:w-100">
                        <label htmlFor="message">Short Personal Statement</label>
                        <textarea type="text" name="message" className="p-1 border rounded h-100px w-100"
                        maxLength={maxChar}
                        placeholder="Why should we pick you for Crosstie EDGE?"
                        onChange={(e)=>setMessage(e.target.value)}
                        />

                        <p className="self-end">{message.length}/{maxChar}</p>

                        <p className="text-13px text-vogueRed">
                              {enrollmentErrors.message}
                            </p>
                    </div>
                </div>
            </div>


            <button className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple"
            onClick={apply}
            >Apply</button>
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

        {/* {program && program.id === downloadProgramScreen &&
          <CourseContentDownloadScreen 
            downloadUrl={program && program.courseContent}
            title={program && program.title}
            id={program && program.id}
          />} */}

          
    </div>
  );
}

export default CrosstieEdgePage;
