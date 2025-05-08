import React, { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { CrossContext } from "../../Context/CrossContext";



function PasswordResetPage() {
  const { setLoading, baseUrl } = useContext(CrossContext);

  
  // Use useParams to get the token from the URL
  const { resetToken } = useParams();

  console.log("resetToken:", resetToken);
  
  ///////////forgot password states

  const [seePassword, setSeePassword] = useState(false);
  const toggLeEye = () =>{
    setSeePassword(!seePassword);
  };
  
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const [resetErrors, setResetErrors] = useState({});

  
  const navigate = useNavigate();

  //funtion to reset password
  const handlePasswordReset = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs

    if (newPassword==='') {
      validationErrors.newPassword = "Enter new password.";
    }
    else if(newPassword.length < 8){
      validationErrors.newPassword = "Password must be atleast 8 characters.";
    }

    if (newPasswordConfirm==='') {
      validationErrors.newPasswordConfirm = "Please confirm new password.";
    }

    else if(newPasswordConfirm !== newPassword){
      validationErrors.newPasswordConfirm = "password not matched.";
    }

  
    setResetErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setLoading(true);
        const response = await axios.patch(
          `${baseUrl}/api/users/reset-password/${resetToken && resetToken}`,
          {
            'password': newPassword,
          }
        );

        console.log("resetResponse:", response.data);
        if (response.data.status === "success") {
          toast.success('Password reset successfully. You can now login with your new password.');
          navigate("/");
        }
      } catch (error) {
        if(error){
          console.log("resetError:", error.response.data.message);
        }
        if(error.response.data.message ==='Token is invalid or has expired.'){
          toast.error(error.response.data.message)
        }
        
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-auto gap-1 py-5 mt-10 large:w-80vw rounded-5 small:w-90vw">
      
      <h1 className="font-bold">Reset Your Password</h1>

      <form
          className="py-3 large:px-3 large:gap-1 large:h-auto large:items-center large:flex-col large:flex large:w-60 small:w-100 small:h-auto small:flex small:flex-col small:gap-1 small:items-center small:px-1 small:mt-1 bg-vogueWhite"
          onSubmit={handlePasswordReset}
        >
          <div className="flex flex-col h-auto mt-2 w-100 text-15px">
            <label htmlFor="email">New Password</label>
            <input
              type={seePassword ? 'text' : 'password'}
              className="pl-1 border h-40px w-100 rounded-4"
              name="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p className="text-vogueRed text-15px">{resetErrors && resetErrors.newPassword}</p>
            {/* <p className="text-green-500 text-15px">{recoveryResponse}</p> */}
            
            {seePassword ?
            <FaRegEyeSlash className="relative self-end mr-2 cursor-pointer bottom-3 text-20px"
            onClick={toggLeEye}
            /> :
            <FaRegEye 
            className="relative self-end mr-2 cursor-pointer bottom-3 text-20px"
            onClick={toggLeEye}
            />}
          </div>

          <div className="flex flex-col h-auto mt-2 w-100 text-15px">
            <label htmlFor="email">Confirm New Password</label>
            <input
              type={seePassword ? 'text' : 'password'}
              className="pl-1 border h-40px w-100 rounded-4"
              name="password"
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
            <p className="text-vogueRed text-15px">{resetErrors && resetErrors.newPasswordConfirm}</p>
            {/* <p className="text-green-500 text-15px">{recoveryResponse}</p> */}

            {seePassword ?
            <FaRegEyeSlash className="relative self-end mr-2 cursor-pointer bottom-3 text-20px"
            onClick={toggLeEye}
            /> :
            <FaRegEye 
            className="relative self-end mr-2 cursor-pointer bottom-3 text-20px"
            onClick={toggLeEye}
            />}
          </div>          

          <button
            type="submit"
            className="mt-2 bg-crossLightPurple w-100 h-40px text-15px text-vogueWhite rounded-5"
          >
            Reset Password
          </button>
        </form>
    </div>
  );

}

export default PasswordResetPage;
