import React, { useContext, useState } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";
import { VscClose } from "react-icons/vsc";
import { RiFolderDownloadLine } from "react-icons/ri";



function ConsultingForm(props) {

    const { consultingTitle } = props;

    const [screen, setScreen] = useState("form");

   const {toggleDownloadScreen, baseUrl, setLoading,  setDownloadScreen, setDownloadProgramScreen, togglePresentationDownloadScreen, bookService} = useContext(CrossContext);



    //state for download
   
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [nameOfOrg, setNameOfOrg] = useState("");
    const [orgSize, setOrgSize] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    
    
  
    //funtion for enrollment
  
    const [contactErrors, setContactErrors] = useState({});
    
    
    const bookSession = async () => {
     
     
     const validationErrors = {};
    
     //To ensure valid inputs
     if (!fullName.trim()) {
       validationErrors.fullName = "full name is required";
     }
    if (!email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!phone.trim()) {
      validationErrors.phone = "phone number is required";
    }

    if (!nameOfOrg.trim()) {
      validationErrors.nameOfOrg = "company name is required";
    }

    if (!orgSize.trim()) {
      validationErrors.orgSize = "What is the size of your organization?";
    }

    if (!role.trim()) {
      validationErrors.role = "role is required";
    }

    
     setContactErrors(validationErrors);
    
     const noError = Object.keys(validationErrors).length === 0;
    
     if (noError) {
       try {
         
         setLoading(true);
         const response = await axios.post(
           `${baseUrl}/api/consulting`,
           {
            fullName: fullName,
            email: email,
            phone: phone,
            nameOfOrg: nameOfOrg,
            orgSize: orgSize,
            message: message,
            role: role,
            service: consultingTitle,
           }
         );
    
         if (response.status === 201) {
          
           toast.success('Message sent successfully, we will reach out as soon as possible.');
           bookService('exit')
         }
       } catch (error) {
         
         console.log("Error enrolling:", error);
         
       } finally {
         setLoading(false);
       }
     }
    };

    
    
  return (
    <div className={`fixed left-0 z-20 flex flex-col items-center justify-start py-5  top-0 min-h-100vh w-100vw bg-overlay large:text-15px small:text-13px`}>
        
        
      <div className="flex flex-col items-center justify-center w-100 h-100">
        {/* form */}
        
        {screen==="form" &&
        <div className="flex flex-col items-center justify-center gap-2 py-3 text-black bg-white rounded-5 large:px-5 large:h-100 large:w-60 small:rounded-5 small:w-90 large:text-15px small:px-1 small:text-13px small:mt-2 large:mt-0 relative">

            <p className="large:w-100 small:w-80 large:text-center small:text-center">SERVICE: <span className="text-crossLightPurple">{consultingTitle && consultingTitle.toUpperCase()}</span></p>

            <VscClose className='absolute text-crossLightPurple cursor-pointer large:top-3 large:right-5 large:text-30px small:text-25px small:right-3 small:top-1'
            onClick={()=>{
                  bookService('exit')
                }}
            />
          
          <div className="w-100 flex items-center justify-between h-auto">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="nameField"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px"
                onChange={(e) => setFullName(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.fullName}
              </p>
            </div>

            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="email">Company Email</label>
              <input
                type="email"
                name="email"
                id="emailField"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.email}
              </p>
            </div>
          </div>

          <div className="w-100 flex items-center justify-between h-auto">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="nameOfOrg">Organization</label>
              <input
                type="text"
                name="nameOfOrg"
                id=""
                placeholder="Enter company name"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setNameOfOrg(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.nameOfOrg}
              </p>
            </div>

            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                id=""
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                placeholder="What is your role in the organization?"
                onChange={(e) => setRole(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.role}
              </p>
            </div>
          </div>

          <div className="w-100 flex items-center justify-between h-auto">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Enter company name"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.phone}
              </p>
            </div>


            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="role">Company Size</label>
              
              <select name="companySize" id="" className="pl-1 border rounded border-crossLightPurple w-100 h-40px"
               onChange={(e) => setOrgSize(e.target.value)}
              >
                <option value="">-select-</option>
                <option value="5 - 10">5 - 10</option>
                <option value="10 - 20">10 - 20</option>
                <option value="20 - 30">20 - 30</option>
                <option value="30 - 50">30 - 50</option>
                <option value="30 - 50">50 - 100</option>
                <option value="above 100">Above 100</option>
              </select>
              <p className="text-vogueRed">
                {contactErrors && contactErrors.orgSize}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center h-auto w-100">
              <label htmlFor="message">Brief overview of how we can be of help</label>
              <textarea name="message" id="" className="h-100px w-100 pl-1 border rounded border-crossLightPurple"
              placeholder="let us know how we can be of help"
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>
          </div>
          

          <button
            className="flex items-center justify-center border-none rounded h-40px w-100 hover:bg-crossYellow hover:text-crossLightPurple bg-crossLightPurple text-white"
            onClick={bookSession}
          >
            Book Now
          </button>
        </div>}



        {/* download */}

        {/* {screen==="download" &&
            <div className="flex items-center justify-center bg-white rounded h-150px w-300px">
                <a 
                target="_blank"
                href={downloadUrl}
                className="flex items-center justify-center w-auto gap-2 px-2 text-white rounded bg-crossLightPurple h-40px"
                download="material.pdf"
                >Download Now <RiFolderDownloadLine className="large:text-25px small:text-20px" /></a>
            </div>
        } */}
       
      </div>
      
    </div>
  );
}



export default ConsultingForm
