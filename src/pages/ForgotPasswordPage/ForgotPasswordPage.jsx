
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CrossContext } from "../../Context/CrossContext";



function ForgotPasswordPage() {

    const {setLoading, baseUrl} = useContext(CrossContext);

    ///////////forgot password states
    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [recoveryError, setRecoveryError] = useState("");
    const [recoveryResponse, setRecoveryResponse] = useState("");

    const navigate = useNavigate();
  
    //funtion for form submit
    const handleForgotPassword = async (event) => {
      event.preventDefault();

  
      //To ensure valid inputs
  
      if (!recoveryEmail.trim()) {
        setRecoveryError("please provide email.");
      }
  
      const noError = recoveryEmail !=="";
  
      if (noError) {
        try {
          setRecoveryError("");
          setLoading(true);
          const response = await axios.post(
            `${baseUrl}/api/users/forgot-password`,
             {
              'email': recoveryEmail
             },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          console.log("RecoveryStatus:", response.data.status);
          if (response.data.status === 'success') {
            toast.success('Password recovery link sent to your email.');
            navigate("/");
          }
        } catch (error) {
          console.log('error recovering password:', error.response.data.message);
          setRecoveryError(error.response.data.message);
        } finally {
          setLoading(false);
        }
      }
    };

    

  return (
    <div className="large:py-5 large:h-auto large:justify-center large:flex large:w-100 small:w-90vw small:h-80vh small:flex small:flex-col large:flex-row large:mt-17 small:mt-15 small:justify-start">

          <form
            className="large:py-5 large:px-3 large:gap-2 large:h-auto large:items-center large:flex-col large:flex large:w-60 small:w-100 small:h-auto small:flex small:flex-col small:gap-2 small:items-center small:px-1 bg-vogueWhite small:py-5"
            onSubmit={handleForgotPassword}
          >
            <h3 className="font-semibold">Enter email to reset password</h3>
            <div className="flex flex-col h-auto mt-2 w-100 text-15px">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="pl-1 border h-40px w-100 rounded-4"
                name="email"
                placeholder="example@gmail.com"
                onChange={(e) => setRecoveryEmail(e.target.value)}
              />
              <p className="text-vogueRed text-15px">{recoveryError}</p>
              <p className="text-green-500 text-15px">{recoveryResponse}</p>
            </div>

            <Link className="self-start mt-2 cursor-pointer text-13px text-crossBlue"
            to='/login'
            >
              Return to login
            </Link>


            {/* <div className="flex items-center justify-center w-40 gap-1">
              <hr className="bg-gray-400 w-30 h-2px" />
              <p className="text-vogueBlack text-15px">Or</p>
              <hr className="bg-gray-400 w-30 h-2px" />
            </div> */}

            {/* <div className="flex items-center justify-center gap-1 w-50">
              <a href="" className="rounded-full h-30px w-30px">
                <img
                  src={PHOTOS.fb_icon}
                  alt="facebook icon"
                  className="rounded-full w-100 h-100"
                />
              </a>

              <a href={`${baseUrl}/api/google/google-signup`} className="rounded-full h-30px w-30px">
                <img
                  src={PHOTOS.google_icon}
                  alt="google icon"
                  className="w-100 h-100"
                />
              </a>

              <a href="" className="rounded-full h-30px w-30px">
                <img src={PHOTOS.x_icon} alt="x icon" className="w-100 h-100" />
              </a>
            </div> */}

            <button
              type="submit"
              className="mt-2 bg-crossLightPurple w-100 h-40px text-15px text-vogueWhite rounded-5"
            >
              Continue
            </button>
          </form>
        </div>
  )
}

export default ForgotPasswordPage;
