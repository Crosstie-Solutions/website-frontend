import React, { useContext, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from "../../Context/CrossContext";



function JobApplicationForm(job) {
  const { mode, location, type, budget, jobId, role } = job;

  const { baseUrl, setLoading, setApply } = useContext(CrossContext);


  // state for job application
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [noticePeriod, setNoticePeriod] = useState('')
  const [currentSalary, setCurrentSalary] = useState('')
  const [expectedSalary, setExpectedSalary] = useState('')
  
  const [resume, setResume] = useState(null)


  //to ensure valid inputs
  const [applicationErrors, setApplicationErrors] = useState({});

  // to limit resume to 1MB
  const maxResumeSize = 1 * 1024 * 1024; 

  const [resumeSizeError, setResumeSizeError] = useState("");

  const handleResumeChange = (e)=>{
    const uploadedFile = e.target.files[0];

    setResume(uploadedFile);

    if(uploadedFile.size > maxResumeSize){
      setResumeSizeError("File too large");

      applicationErrors.resume = ''
    }
  }


  


  //funtion for job application
  const apply = async () => {
  
  const validationErrors = {};
  
  //To ensure valid inputs
  if (!firstName.trim()) {
    validationErrors.firstName = "first name is required";
  }

  if (!lastName.trim()) {
    validationErrors.lastName = "last name is required";
  }

  if (!email.trim()) {
    validationErrors.email = "email is required";
  }

  
  if (!phone) {
    validationErrors.phone = "phone number is required";
  }

  if (!address.trim()) {
    validationErrors.address = "address is required";
  }

  if (!noticePeriod.trim()) {
    validationErrors.noticePeriod = "select your notice period";
  }

  if (!currentSalary) {
    validationErrors.currentSalary = "What is your currrent salary?";
  }

  if (!expectedSalary) {
    validationErrors.expectedSalary = "What is your salary expectation?";
  }
  
   if (!resume) {
    validationErrors.resume = "Upload resume";
  }
  
  
  
  setApplicationErrors(validationErrors);
  
  const noError = Object.keys(validationErrors).length === 0;
  
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("noticePeriod", noticePeriod);
      formData.append("currentSalary", currentSalary);
      formData.append("expectedSalary", expectedSalary);
      formData.append("resume", resume);
      formData.append("jobId", jobId);
    
  
  if (noError) {
    try {
      
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/job/apply`,
        formData,
        {
          headers: {
             "Content-Type": "multipart/form-data"
          },
        }
      );
  
      if (response.status === 201) {
        toast.success(`Application submitted successfully`);
        setApply(false);
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
    <div className="flex flex-col h-auto gap-3 large:px-3 w-100 small:p-1">
      
      <div className="flex flex-col items-start h-auto gap-1 w-100">
        <h3 className="font-semibold large:text-20px small:text-17px text-crossDarkPurple">
          Apply For {role}{" "}
          {budget && (
            <span className="font-normal text-black">
              - &#8358;{budget && budget.toLocaleString()}
            </span>
          )}
        </h3>

        <div className='flex items-center h-auto large:gap-1 large:text-15px text-crossTextGray w-100 small:text-12px small:justify-between large:justify-start'>at <span className='text-crossLightPurple'>Crosstie Solutions</span> <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> <span className='text-black small:text-11px'>{mode}</span> 
        
        {location &&
        <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> }
        
        {location} <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> {type}</div>
      </div>


      {/* form */}
      <div className="flex flex-col items-center gap-2 large:px-0 small:px-1 large:w-60 small:w-100 large:text-15px small:text-13px">

        <div className="flex flex-row items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="firstName">First Name</label>

            <input
            name="firstName"
              type="text"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.firstName}</p>
          </div>

          <div className="flex flex-col h-auto w-45">
            <label htmlFor="lastName">Last Name</label>

            <input
              name="lastName"
              type="text"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.lastName}</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="email">Email</label>

            <input
            name="email"
              type="email"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.email}</p>
          </div>

          <div className="flex flex-col h-auto w-45">
            <label htmlFor="phone">Phone</label>

            <input
            name="phone"
              type="number"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.phone}</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="address">Address</label>

            <input
            name="address"
              type="text"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setAddress(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.address}</p>
          </div>

          <div className="flex flex-col h-auto w-45">
            <label htmlFor="noticePeriod">Notice Period</label>

            <select name="noticePeriod" id="" className="p-1 border rounded h-40px w-100" onChange={(e) => setNoticePeriod(e.target.value)}>
              <option value="">-select-</option>
              <option value="1 Week">1 Week</option>
              <option value="2 Weeks">2 Weeks</option>
              <option value="3 Weeks">3 Weeks</option>
              <option value="1 Month">1 Month</option>
              <option value="Can Resume Immediately">Can Resume Immediately</option>
            </select>
            <p className="text-vogueRed">{applicationErrors.noticePeriod}</p>
          </div>
        </div>


        <div className="flex flex-row items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="currentSalary">Current Salary (&#8358;)</label>

            <input
            name="currentSalary"
              type="number"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setCurrentSalary(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.currentSalary}</p>
          </div>

          <div className="flex flex-col h-auto w-45">
            <label htmlFor="expectedSalary">Expected Salary (&#8358;)</label>

            <input
            name="expectedSalary"
              type="number"
              className="p-1 border rounded h-40px w-100"
              onChange={(e) => setExpectedSalary(e.target.value)}
            />
            <p className="text-vogueRed">{applicationErrors.expectedSalary}</p>
          </div>
        </div>
        

        <div className="flex flex-col h-auto gap-1 w-100">
            <label htmlFor="resume">Upload Resume <span className="font-semibold">(Not more than 1MB)</span></label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleResumeChange}
            />
            
            {applicationErrors && (
              <p className="text-13px text-vogueRed">
                {applicationErrors.resume}
              </p>
            )}
            
            {resumeSizeError && 
            <p className="text-15px text-vogueRed">
                {resumeSizeError}
              </p>}

              <button className='flex items-center justify-center mt-2 text-white rounded large:px-2 large:w-200px h-40px bg-crossLightPurple'
                onClick={apply}
                >Submit Application</button>
          </div>
          
      </div>
    </div>
  );
}

export default JobApplicationForm;
