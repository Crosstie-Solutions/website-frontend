import React, { useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from "../../components/LoadingBtn/LoadingBtn";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import { CrossContext } from "../../Context/CrossContext";
import MyWebinars from "../../components/MyWebinars/MyWebinars";
import { useNavigate } from "react-router-dom";
import MyPurchases from "../../components/MyPurchases/MyPurchases";




function UserProfile() {
  const { me, baseUrl, loginToken } = useContext(CrossContext);

  const navigate = useNavigate();

  const [editErrors, setEditErrors] = useState({});

  //change first name
  const [editFirstName, setEditFirstName] = useState(false);
  const [updatingFirstName, setUpdatingFirstName] = useState(false);

  const [firstName, setFirstName] = useState("");

  const toggleFirstName = () => {
    setEditFirstName(!editFirstName);
  };

  const changeFirstName = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!firstName.trim()) {
      validationErrors.firstName = "first name is required";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingFirstName(true);
        setEditFirstName(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/update-me`,
          {
            firstName: firstName,
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("profile update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "profile updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        if (error) {
          setLastErrors(error.response.data.message);
        }
        if (error.response.data.message === "jwt expired") {
          setLastErrors(
            "Session expired. Please login again to change password."
          );
        }
      } finally {
        setUpdatingFirstName(false);
      }
    }
  };


  
  //change last name
  const [editLastName, setEditLastName] = useState(false);
  const [updatingLastName, setUpdatingLastName] = useState(false);

  const [lastName, setLastName] = useState("");

  const toggleLastName = () => {
    setEditLastName(!editLastName);
  };

  const changeLastName = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingLastName(true);
        setEditLastName(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/update-me`,
          {
            lastName: lastName,
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("profile update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "profile updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        if (error) {
          setLastErrors(error.response.data.message);
        }
        if (error.response.data.message === "jwt expired") {
          setLastErrors(
            "Session expired. Please login again to change password."
          );
        }
      } finally {
        setUpdatingLastName(false);
      }
    }
  };

  //change email
  const [editEmail, setEditEmail] = useState(false);
  const [updatingEmail, setUpdatingEmail] = useState(false);

  const [email, setEmail] = useState("");

  const toggleEmail = () => {
    setEditEmail(!editEmail);
  };

  const changeEmail = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingEmail(true);
        setEditEmail(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/update-me`,
          {
            email: email,
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("profile update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "profile updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        if (error) {
          setLastErrors(error.response.data.message);
        }
        if (error.response.data.message === "jwt expired") {
          setLastErrors(
            "Session expired. Please login again to change password."
          );
        }
        if (error.response.data.message.includes("duplicate")) {
          setLastErrors("Email already exist.");
        }
      } finally {
        setUpdatingEmail(false);
      }
    }
  };

  //change phone
  const [editPhone, setEditPhone] = useState(false);
  const [updatingPhone, setUpdatingPhone] = useState(false);

  const [phone, setPhone] = useState("");

  const togglePhone = () => {
    setEditPhone(!editPhone);
  };

  const changePhone = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!phone.trim()) {
      validationErrors.phone = "phone number is required";
    } else if (phone.length < 11) {
      validationErrors.phone = "phone number should be atleast 11 digits.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingPhone(true);
        setEditPhone(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/update-me`,
          {
            phone: phone,
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("profile update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "profile updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        if (error) {
          setLastErrors(error.response.data.message);
        }
        if (error.response.data.message === "jwt expired") {
          setLastErrors(
            "Session expired. Please login again to change password."
          );
        }
      } finally {
        setUpdatingPhone(false);
      }
    }
  };

  //to change password
  const [updatingPassword, setUpdatingPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [lastErrors, setLastErrors] = useState("");

  const [passwordError, setPasswordError] = useState("");

  //form data for password update
  const passwordData = {
    currentPassword: passwordCurrent,
    newPassword: password,
    userId: me && me.id,
  };

  const changePassword = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!passwordCurrent.trim()) {
      validationErrors.passwordCurrent = "Enter your current password";
    }
    if (!password.trim()) {
      validationErrors.password = "Enter new password";
    } else if (password.length < 8) {
      validationErrors.password = "password must be atleast 8 characters";
    }
    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm your new password";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingPassword(true);

        const response = await axios.patch(
          `${baseUrl}/api/users/update-password`,
          passwordData,
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("password response:", response.data);
        if ((response.data.status = "success")) {
          toast.success("password changed successfully.");
        }
      } catch (error) {
        console.error("Error changing password:", error);
        if (error) {
          setPasswordError(error.response.data.message);
        }
        if (error.response.data.message === "jwt expired") {
          setPasswordError(
            "Session expired. Please login again to change password."
          );
        }
      } finally {
        setUpdatingPassword(false);
      }
    }
  };






  //change exchange rate
  const [editExchangeRate, setEditExchangeRate] = useState(false);
  const [updatingExchangeRate, setUpdatingExchangeRate] = useState(false);

  const [newExchangeRate, setNewExchangeRate] = useState("");

  const toggleExchangeRate = () => {
    setEditExchangeRate(!editExchangeRate);
  };

  const changeExchangeRate = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!newExchangeRate.trim()) {
      validationErrors.newExchangeRate = "exchange rate is required";
    };

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingExchangeRate(true);
        setEditExchangeRate(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/admin-wallet/6773b20080d16a022cd9e378`,
          {
            exchangeRate: Number(newExchangeRate),
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("exchange rate update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Exchange rate updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating exchange rate:", error);
        if (error) {
        //   setLastErrors(error.response.data.message);
          validationErrors.newExchangeRate = error.response.data.message;
        }
        if (error.response.data.message === "jwt expired") {
        validationErrors.newExchangeRate = "Session expired. Please login again to change password.";
        }
        if (error.response.data.message === "read ECONNRESET") {
            validationErrors.newExchangeRate = "Network error. Unable to connect to the server.";
        }
      } finally {
        setUpdatingExchangeRate(false);
      }
    }
  };



  //change wallet address
  const [editWalletAddress, setEditWalletAddress] = useState(false);
  const [updatingWalletAddress, setUpdatingWalletAddress] = useState(false);

  const [newWalletAddress, setNewWalletAddress] = useState("");

  const toggleWalletAddress = () => {
    setEditWalletAddress(!editWalletAddress);
  };

  const changeWalletAddress = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!newWalletAddress.trim()) {
      validationErrors.newWalletAddress = "wallet address is required";
    };

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingWalletAddress(true);
        setEditWalletAddress(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/admin-wallet/6773b20080d16a022cd9e378`,
          {
            walletAddress: newWalletAddress,
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );

        console.log("wallet address update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Wallet address updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating wallet address:", error);
        if (error) {
        
          validationErrors.newWalletAddress = error.response.data.message;
        }
        if (error.response.data.message === "jwt expired") {
        validationErrors.newWalletAddress = "Session expired. Please login again to change password.";
        }
        if (error.response.data.message === "read ECONNRESET") {
            validationErrors.newWalletAddress = "Network error. Unable to connect to the server.";
        }
      } finally {
        setUpdatingWalletAddress(false);
      }
    }
  };
  
  
  //change apr
  const [editApr, setEditApr] = useState(false);
  const [updatingApr, setUpdatingApr] = useState(false);

  const [newApr, setNewApr] = useState("");

  const toggleApr = () => {
    setEditApr(!editApr);
  };

  const changeApr = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!newApr.trim()) {
      validationErrors.newApr = "APR is required";
    };

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingApr(true);
        setEditApr(false);
        const response = await axios.patch(
          `${baseUrl}/api/users/admin-wallet/6773b20080d16a022cd9e378`,
          {
            apr: Number(newApr/100),
          },
          {
            headers: {
              Authorization: `Bearer ${
                loginToken ? loginToken : signupToken ? signupToken : ""
              }`,
              withCredentials: true,
            },
          }
        );


        
        console.log("exchange rate update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "APR updated successfully."
          );
        }
      } catch (error) {
        console.error("Error updating exchange rate:", error);
        if (error) {
        //   setLastErrors(error.response.data.message);
          validationErrors.newApr = error.response.data.message;
        }
        if (error.response.data.message === "jwt expired") {
        validationErrors.newApr = "Session expired. Please login again to change password.";
        }
        if (error.response.data.message === "read ECONNRESET") {
            validationErrors.newApr = "Network error. Unable to connect to the server.";
        }
      } finally {
        setUpdatingApr(false);
      }
    }
  };



  //logout button
  const logoutUser = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
    window.location.reload(false);
  };


  const [screen, setScreen] = useState('profile');


  

  return (
    <div className="flex flex-col h-auto py-3 large:mt-18 small:gap-3 large:px-2 rounded-10 large:w-83vw bg-vogueWhite text-15px text-cribGray small:w-90vw small:px-1 large:gap-5 small:mt-15">

      <div className="flex items-center justify-start h-auto gap-3 border-b w-100">
        <button className={`flex items-center justify-center w-auto h-40px ${screen === 'profile' ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-crossLightPurple" : ""}`} 
        onClick={()=>setScreen('profile')}
        >Profile</button>
        
        <button
        className={`flex items-center justify-center w-auto h-40px ${screen === 'purchase' ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-crossLightPurple" : ""}`}
         onClick={()=>setScreen('purchase')}
        >My Purchases</button>
        
        <button
        className={`flex items-center justify-center w-auto h-40px ${screen === 'webinar' ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-crossLightPurple" : ""}`}
        
        onClick={()=>setScreen('webinar')}
        >Webinars</button>
      </div>

       {screen === 'purchase' &&
      <MyPurchases />}

      {/* My webinars */}
      {screen === 'webinar' &&
      <MyWebinars />}
      
      {/* general settings */}
      {screen === 'profile' &&
      <div className="flex flex-col h-auto gap-2 w-100">
        <div className="flex flex-col h-auto w-100">
          <h3 className="font-bold text-black text-20px">General</h3>
          <p>Public Information about your account</p>
        </div>

        {/* General settings */}
        <div className="h-auto large:gap-5 large:items-c enter large:flex large:flex-row w-100 small:flex small:flex-col small:gap-2">
          
          <div className="flex items-center justify-center text-white border rounded-full w-70px h-70px bg-vogueBlack text-30px">
            {me && me.firstName.charAt(0).toUpperCase()}  {me && me.lastName.charAt(0).toUpperCase()}
            {/* <img src={me && me.displayPhoto} alt="user photo" className="border rounded-full w-100 h-100 border-crossLightPurple"/> */}
          </div>

          {/* personal info */}
          <div className="flex flex-col h-auto large:gap-2 large:w-90 small:w-100 small:gap-1">
            {/* first name */}
            <div className="h-auto large:gap-2 large:justify-between large:items-center large:flex large:flex-row w-100 small:flex small:flex-col small:gap-1">
              <label htmlFor="">First Name</label>

              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-100">
                <div className="flex items-center justify-between border large:px-1 rounded-5 w-100 h-40px small:pl-1">
                  {editFirstName ? (
                    <input
                      type="text"
                      placeholder="enter your first name"
                      name="firstName"
                      className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                      defaultValue={me && me.firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  ) : (
                    <div>{me && me.firstName}</div>
                  )}

                  <div className="flex items-center justify-center w-auto h-auto gap-1">
                    {editFirstName && !updatingFirstName && (
                      <button
                        className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
                        onClick={changeFirstName}
                      >
                        save
                      </button>
                    )}

                    {editFirstName && !updatingFirstName && (
                      <button
                        className="flex items-center justify-center w-auto px-1 border rounded border-crossLightPurple h-40px text-crossLightPurple"
                        onClick={toggleFirstName}
                      >
                        Cancel
                      </button>
                    )}

                    {!editFirstName && !updatingFirstName && (
                      <CiEdit
                        className="relative cursor-pointer text-20px text-vogueBlack right-2"
                        onClick={toggleFirstName}
                      />
                    )}

                    {updatingFirstName && <UpdatingBtn />}
                  </div>
                </div>
                <p className="text-vogueRed">
                  {editErrors && editErrors.firstName}
                </p>
              </div>
            </div>

            {/* last name */}
            <div className="h-auto large:gap-2 large:justify-between large:items-center large:flex large:flex-row w-100 small:flex small:flex-col small:gap-1">
              <label htmlFor="">Last Name</label>

              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-100">
                <div className="flex items-center justify-between border large:px-1 rounded-5 w-100 h-40px small:pl-1">
                  {editLastName ? (
                    <input
                      type="text"
                      placeholder="enter your last name"
                      name="lastName"
                      className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                      defaultValue={me && me.lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  ) : (
                    <div>{me && me.lastName}</div>
                  )}

                  <div className="flex items-center justify-center w-auto h-auto gap-1">
                    {editLastName && (
                      <button
                        className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
                        onClick={changeLastName}
                      >
                        save
                      </button>
                    )}

                    {editLastName && !updatingLastName && (
                      <button
                        className="flex items-center justify-center w-auto px-1 border rounded border-crossLightPurple h-40px text-crossLightPurple"
                        onClick={toggleLastName}
                      >
                        Cancel
                      </button>
                    )}

                    {!editLastName && (
                      <CiEdit
                        className="relative cursor-pointer text-20px text-vogueBlack right-2"
                        onClick={toggleLastName}
                      />
                    )}

                    {updatingLastName && <UpdatingBtn />}
                  </div>
                </div>
                <p className="text-vogueRed">
                  {editErrors && editErrors.lastName}
                </p>
              </div>
            </div>

            {/* email */}
            <div className="h-auto large:gap-2 large:justify-between large:items-center large:flex large:flex-row w-100 small:flex small:flex-col small:gap-1">
              <label htmlFor="">Email</label>

              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-100">
                <div className="flex items-center justify-between pl-1 border large:px-1 rounded-5 w-100 h-40px">
                  {editEmail ? (
                    <input
                      type="email"
                      placeholder="enter your email"
                      name="email"
                      className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                      defaultValue={me && me.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <div>{me && me.email}</div>
                  )}

                  <div className="flex items-center justify-center w-auto h-auto gap-1">
                    {editEmail && (
                      <button
                        className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
                        onClick={changeEmail}
                      >
                        save
                      </button>
                    )}

                    {editEmail && (
                      <button
                        className="flex items-center justify-center w-auto px-1 border rounded border-crossLightPurple h-40px text-crossLightPurple"
                        onClick={toggleEmail}
                      >
                        Cancel
                      </button>
                    )}

                    {!editEmail && (
                      <CiEdit
                        className="relative cursor-pointer text-20px text-vogueBlack right-2"
                        onClick={toggleEmail}
                      />
                    )}

                    {updatingEmail && <UpdatingBtn />}
                  </div>
                </div>
                <p className="text-vogueRed">
                  {editErrors && editErrors.email}
                </p>

                <p className="text-vogueRed">{lastErrors && lastErrors}</p>

                {editEmail && editErrors.email !== "Email is required" && (
                  <p className="text-black text-15px">
                    <span className="font-bold text-vogueRed">Note:</span> You
                    will be required to verify your new email.
                  </p>
                )}
              </div>
            </div>

            {/* phone */}
            <div className="h-auto large:gap-2 large:justify-between large:items-center large:flex large:flex-row w-100 small:flex small:flex-col small:gap-1">
              <label htmlFor="">Phone</label>

              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-100">
                <div className="flex items-center justify-between border large:px-1 rounded-5 w-100 h-40px small:pl-1">
                  {editPhone ? (
                    <input
                      type="text"
                      placeholder="enter your phone number"
                      name="phone"
                      className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                      defaultValue={me && me.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <div>{me && me.phone}</div>
                  )}

                  <div className="flex items-center justify-center w-auto h-auto gap-1">
                    {editPhone && (
                      <button
                        className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
                        onClick={changePhone}
                      >
                        save
                      </button>
                    )}

                    {editPhone && !updatingLastName && (
                      <button
                        className="flex items-center justify-center w-auto px-1 border rounded border-crossLightPurple h-40px text-crossLightPurple"
                        onClick={togglePhone}
                      >
                        Cancel
                      </button>
                    )}

                    {!editPhone && (
                      <CiEdit
                        className="relative cursor-pointer text-20px text-vogueBlack right-2"
                        onClick={togglePhone}
                      />
                    )}

                    {updatingPhone && <UpdatingBtn />}
                  </div>
                </div>
                <p className="text-vogueRed">
                  {editErrors && editErrors.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>}



      {/* password settings */}
      {screen === 'profile' &&
      <div className="flex flex-col items-end h-auto gap-2 w-100">
        <div className="flex flex-col h-auto w-100">
          <h4 className="font-bold text-black text-20px">Change Password</h4>
        </div>

        <div className="flex flex-col items-start h-auto large:gap-2 large:w-90 small:w-100 small:gap-1">
          <div className="h-auto gap-2 large:justify-between large:items-center large:flex w-100 large:flex-row">
            <label htmlFor="">Current Password</label>

            <div className="flex flex-col h-auto gap-1 large:w-70 small:w-100">
              <div className="flex items-center justify-between px-1 border rounded-5 w-100 h-40px">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                  onChange={(e) => setPasswordCurrent(e.target.value)}
                />

                {showPassword ? (
                  <HiOutlineEyeOff
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                ) : (
                  <HiOutlineEye
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                )}
              </div>

              <p className="text-15px text-vogueRed">
                {passwordError && passwordError}
              </p>

              <p className="text-15px text-vogueRed">
                {editErrors && editErrors.passwordCurrent}
              </p>
            </div>
          </div>

          <div className="h-auto gap-2 large:justify-between large:items-center large:flex w-100 large:flex-row">
            <label htmlFor="">New Password</label>

            <div className="flex flex-col h-auto gap-1 large:w-70 small:w-100">
              <div className="flex items-center justify-between px-1 border rounded-5 w-100 h-40px">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {showPassword ? (
                  <HiOutlineEyeOff
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                ) : (
                  <HiOutlineEye
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                )}
              </div>

              <p className="text-15px text-vogueRed">
                {editErrors && editErrors.password}
              </p>
            </div>
          </div>

          <div className="h-auto gap-2 large:justify-between large:items-center large:flex w-100 large:flex-row">
            <label htmlFor="">Confirm New Password</label>

            <div className="flex flex-col h-auto gap-1 large:w-70 small:w-100">
              <div className="flex items-center justify-between px-1 border rounded-5 w-100 h-40px">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="border-none h-100 w-90 focus:border-none focus:outline-none text-vogueBlack"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {showPassword ? (
                  <HiOutlineEyeOff
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                ) : (
                  <HiOutlineEye
                    className="cursor-pointer text-25px"
                    onClick={toggleEye}
                  />
                )}
              </div>

              <p className="text-15px text-vogueRed">
                {editErrors && editErrors.confirmPassword}
              </p>
            </div>
          </div>

          {!updatingPassword && (
            <button
              className="w-auto px-2 rounded-5 bg-crossLightPurple text-vogueWhite h-40px "
              onClick={changePassword}
            >
              Change Password
            </button>
          )}

          {updatingPassword && <UpdatingBtn />}
        </div>
      </div>}


      
      {me && screen === 'profile' &&
    <button className="relative items-center justify-center px-2 mt-5 text-white border large:flex w-150px h-40px bg-vogueRed rounded-10 left-10 small:hidden"
            onClick={logoutUser}
            >Log Out</button>}
    </div>
  );
}

export default UserProfile;