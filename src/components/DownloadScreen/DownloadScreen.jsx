import React, { useContext, useState } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";
import { VscClose } from "react-icons/vsc";
import { RiFolderDownloadLine } from "react-icons/ri";



function DownloadScreen(props) {

    const {downloadUrl, title} = props;

    const [screen, setScreen] = useState("form");

   const {toggleDownloadScreen, baseUrl, setLoading} = useContext(CrossContext);



    //state for download
   
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
  
    
    //to clear fields after submit
    
    const nameField = document.getElementById("nameField");
    const emailField = document.getElementById("emailField");
    
  
    //funtion for enrollment
  
    const [contactErrors, setContactErrors] = useState({});
    
    
    const requestDownload = async () => {
     
     
     const validationErrors = {};
    
     //To ensure valid inputs
     if (!fullName.trim()) {
       validationErrors.fullName = "full name is required";
     }
    if (!email.trim()) {
      validationErrors.email = "email is required";
    }

    
     setContactErrors(validationErrors);
    
     const noError = Object.keys(validationErrors).length === 0;
    
     if (noError) {
       try {
         
         setLoading(true);
         const response = await axios.post(
           `${baseUrl}/api/download`,
           {
            fullName: fullName,
            email: email,
           }
         );
    
         if (response.status === 201) {
          
           toast.success('Details submitted successfully. Proceed to download.');
           nameField.value="";
           emailField.value="";
           setScreen("download");
         }
       } catch (error) {
         
         console.log("Error enrolling:", error);
         
       } finally {
         setLoading(false);
       }
     }
    };

    
    
  return (
    <div className={`absolute left-0 z-20 flex flex-col items-center justify-center py-10 ${window.location.pathname.includes("about") ? "-top-17" : "-top-8"} min-h-100vh w-100vw bg-overlay`}>
        
        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={toggleDownloadScreen}
        />
        
      <div className="flex flex-col items-center justify-center w-100 h-100">
        {/* form */}
        
        {screen==="form" &&
        <div className="flex flex-col items-center justify-center gap-2 py-3 text-black bg-white rounded-5 large:px-5 large:h-100 large:w-40 small:rounded-5 small:w-90 text-15px small:px-1">

            <p>PROVIDE THESE DETAILS TO DOWNLOAD <span className="text-crossLightPurple">{title && title.toUpperCase()}</span> FILE</p>
          
          <div className="flex flex-col items-start h-auto w-100">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="nameField"
              className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
              onChange={(e) => setFullName(e.target.value)}
            />
            <p className="text-vogueRed">
              {contactErrors && contactErrors.fullName}
            </p>
          </div>

          <div className="flex flex-col items-start h-auto w-100">
            <label htmlFor="email">Email</label>
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

          <button
            className="flex items-center justify-center border-none rounded h-40px w-100 bg-crossYellow text-crossLightPurple hover:bg-crossLightPurple hover:text-crossYellow"
            onClick={requestDownload}
          >
            Request Download
          </button>
        </div>}



        {/* download */}

        {screen==="download" &&
            <div className="flex items-center justify-center bg-white rounded h-150px w-300px">
                <a 
                href={downloadUrl}
                className="flex items-center justify-center w-auto gap-2 px-2 text-white rounded bg-crossLightPurple h-40px"
                download="material.pdf"
                >Download Now <RiFolderDownloadLine className="large:text-25px small:text-20px" /></a>
            </div>
        }
       
      </div>
      
    </div>
  );
}

export default DownloadScreen;
