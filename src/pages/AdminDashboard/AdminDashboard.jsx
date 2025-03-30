import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { RiCoupon5Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { BsTrash3 } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

import { VscGift } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5"; 
import { CrossContext } from "../../Context/CrossContext";
import AddProgram from "../../components/AdminInteraction/AddProgram/AddProgram";
import { FaBookBookmark } from "react-icons/fa6";
import AllProgramsTable from "../../components/AdminInteraction/AllProgramsTable/AllProgramsTable";
import AllCourseRegsTable from "../../components/AdminInteraction/AllCourseRegsTable/AllCourseRegsTable";
import { SiGoogleclassroom } from "react-icons/si";
import AddWebinar from "../../components/AdminInteraction/AddWebinar/AddWebinar";
import UpcomingWebinarsTable from "../../components/AdminInteraction/UpcomingWebinarsTable/UpcomingWebinarsTable";
import PastWebinarsTable from "../../components/AdminInteraction/PastWebinarsTable/PastWebinarsTable";
import { GrHelpBook } from "react-icons/gr";
import AllEnquiriesTable from "../../components/AdminInteraction/AllEnquiriesTable/AllEnquiriesTable";
import { RiNewsLine } from "react-icons/ri";
import AllNewsletterTable from "../../components/AdminInteraction/AllNewsletterTable/AllNewsletterTable";
import AllTestimonialsTable from "../../components/AdminInteraction/AllTestimonialsTable/AllTestimonialsTable";
import AddTestimonial from "../../components/AdminInteraction/AddTestimonial/AddTestimonial";








function AdminDashboard() {

  //users dropdown
  const [usersDD, setUsersDD] = useState(false);

  const toggleUsersDD = ()=>{
    setUsersDD(!usersDD);
  }

  //webinars dropdown
  const [webinarsDD, setWebinarsDD] = useState(false);

  const toggleWebinarsDD = ()=>{
    setWebinarsDD(!webinarsDD);
  }

  //Testimonials dropdown
  const [testimonialsDD, setTestimonialsDD] = useState(false);

  const toggleTestimonialsDD = ()=>{
    setTestimonialsDD(!testimonialsDD);
  }
  

  const {
    me,
    baseUrl,
    loginToken,
    setLoading,
    activeScreen,
    setActiveScreen, toggleSideBar, current, allPrograms
  } = useContext(CrossContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeScreen]);
  
  
  
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("signupToken");
    navigate("/");
    window.location.reload(false);
  };



  
  return (
    <div className="large:flex-row large:bg-transparent large:h-auto large:justify-between large:items-start large:flex large:mt-15 large:w-90vw small:flex small:flex-col small:h-auto small:w-90vw small:items-center small:mt-15 small:gap-1">
      
      {/*desktop side menu */}
      <div className="flex-col items-start h-auto gap-2 border large:flex w-25 bg-vogueWhite rounded-10 small:hidden">
      
        
        {/* overview */}
        
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "overview" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("overview")}
        >
          <FaRegUser className="text-20px" />
          Crosstie Admin
        </div>

          
        
        {/* manage programs */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addProgram" || activeScreen === "allPrograms"|| activeScreen === "courseRegistrations" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleUsersDD}
          >
            <div className="flex gap-1">
              <FaBookBookmark className="text-20px" />
              Manage Programs
            </div>

            <IoChevronDown className={`text-20px ${usersDD ? "rotate-180" : ""}`}/>
          </div>

          {usersDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allPrograms")}
            >All Programs</div>
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addProgram")}
            >Add Program</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("courseRegistrations")}
            >Registrations</div>
          </div>}
        </div>

        {/* manage webinars */}
        
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addWebinar" || activeScreen === "upcomingWebinars"|| activeScreen === "pastWebinars" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleWebinarsDD}
          >
            <div className="flex gap-1">
              <SiGoogleclassroom className="text-20px" />
              Manage webinars
            </div>

            <IoChevronDown className={`text-20px ${webinarsDD ? "rotate-180" : ""}`}/>
          </div>

          {webinarsDD &&
          <div className="flex flex-col items-start gap-1 large:pl-5 w-100">
            
            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("addWebinar")}
            >Add Webinar</div>

            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("upcomingWebinars")}
            >Upcoming Webinars</div>

            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("pastWebinars")}
            >Past Webinars</div>

          </div>}
        </div>

        
          {/* enquiries */}
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "enquiries" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("enquiries")}
        >
          <GrHelpBook className="text-20px" />
          Enquiries
        </div>

        {/* newsletter */}
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "newsletter" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("newsletter")}
        >
          <RiNewsLine className="text-20px" />
          Newsletter
        </div>


        {/* testimonials */}


        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addTestimonial" || activeScreen === "allTestimonials" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleTestimonialsDD}
          >
            <div className="flex gap-1">
              <VscFeedback className="text-20px" />
              Manage Testimonials
            </div>

            <IoChevronDown className={`text-20px ${testimonialsDD ? "rotate-180" : ""}`}/>
          </div>

          {testimonialsDD &&
          <div className="flex flex-col items-start gap-1 large:pl-5 w-100">
            
            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("addTestimonial")}
            >Add Testimonial</div>

            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("allTestimonials")}
            >All Testimonials</div>

          </div>}
        </div>


        

        <Link
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "accountManagement" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          to="/admin-profile"
        >
          <LuSettings className="text-20px" />
          Settings
        </Link>


        <div
          className="flex items-center justify-start gap-1 pl-3 border cursor-pointer h-40px w-100 text-15px bg-vogueRed text-vogueWhite hover:bg-transparent hover:text-vogueRed hover:border-vogueRed hover:border"
          onClick={logoutUser}
        >
          <RiLogoutCircleLine className="text-20px" />
          Logout
        </div>

       
      </div>


      {/*desktop active screen*/}
      <div className="flex-col items-center h-auto px-2 py-5 border large:flex w-70 bg-vogueWhite rounded-10 small:hidden">
        
        {/* overview */}
        {activeScreen === "overview" ? (
          <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold">Account Overview</h4>
            <div className="flex items-start justify-between h-auto gap-2 w-100 rounded-5">
              <div className="flex flex-col border h-280px w-47">
                <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                Admin Info
                </span>
                <div className="flex flex-col h-auto gap-2 p-1 text-15px">
                  <p><span className="font-semibold">Role:</span> {me && me.role==='admin'? "Admin" : "Super Admin"}</p>
                  <p><span className="font-semibold">Privileges:</span> {me && me.role==='admin'? "Can manage user engagements and interactions" : "Can manage both user interactions and admins."}</p>
                </div>
              </div>

              <div className="flex flex-col h-auto gap-1 border w-47 rounded-5">
                <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                Basic Info{" "}
                  
                  <Link to="/admin-profile"><MdModeEditOutline className="font-bold text-black cursor-pointer" /></Link>
                  
                </span>
                
                <div className="flex flex-col h-auto gap-3 p-2 text-15px w-100">
                  
                  <div className="flex flex-col h-auto gap-1 w-100">
                    <p><span className="font-bold">Name:</span> {me && me.firstName + " " + me.lastName}</p>
                    
                    <p><span className="font-bold">Phone:</span> {me && me.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}



        {/* savedItems */}
        {/* {activeScreen === "savedItems" ? <SavedItem /> : ""} */}

        {/* All products */}
        {/* {activeScreen === "allProducts" ? <AllProductsTable /> : ""} */}



        {/* add product */}
        {activeScreen === "addProgram" ? <AddProgram /> : ""}

        {activeScreen === "allPrograms" && <AllProgramsTable />}
        
        {activeScreen === "courseRegistrations" && <AllCourseRegsTable />}
        
        {activeScreen === "addWebinar" && <AddWebinar />}
        
        {activeScreen === "upcomingWebinars" && <UpcomingWebinarsTable />}
        
        {activeScreen === "pastWebinars" && <PastWebinarsTable />}
        
        {activeScreen === "enquiries" && <AllEnquiriesTable />}
        
        {activeScreen === "newsletter" && <AllNewsletterTable />}
        
        {activeScreen === "allTestimonials" && <AllTestimonialsTable />}
        
        {activeScreen === "addTestimonial" && <AddTestimonial />}
        
        
      </div>
      
      {!current ?
        <h4 className="text-gray-500 text-15px large:hidden small:flex">Crosstie Admin</h4> : ""
      }

      {/*mobile side menu */}
      {!current ? (
        <div className="flex-col items-start h-auto gap-2 border small:flex w-100 bg-vogueWhite rounded-10 large:hidden">
          
          {/* profile */}
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("overview")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <FaRegUser className="text-20px" />
              Profile
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>


           
            {/* programs */}
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleUsersDD}
            >
              <div className="flex gap-1">
                <FaBookBookmark className="text-20px" />
                Manage Programs
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${usersDD ? "rotate-180" : ""}`}/>
              </div>

              {usersDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Programs");
                    toggleSideBar();
                    toggleUsersDD();
                  }
                  
                }
                >All Programs</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Program");
                  toggleSideBar();
                  toggleUsersDD();
                }}
                >Add Programs</div>

                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all Registrations");
                  toggleSideBar();
                  toggleUsersDD();
                }}
                >Registrations</div>
              </div>}
            </div>


            {/* webinars */}
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleWebinarsDD}
            >
              <div className="flex gap-1">
                <SiGoogleclassroom className="text-20px" />
                Manage Webinars
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${webinarsDD ? "rotate-180" : ""}`}/>
              </div>

              {webinarsDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("add Webinar");
                    toggleSideBar();
                    toggleWebinarsDD();
                  }
                  
                }
                >Add Webinar</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("upcoming Webinars");
                  toggleSideBar();
                  toggleWebinarsDD();
                }}
                >Upcoming Webinars</div>

                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("past Webinars");
                  toggleSideBar();
                  toggleWebinarsDD();
                }}
                >Past Webinars</div>
              </div>}
            </div>

            {/* enquiries */}
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("enquiries")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <GrHelpBook className="text-20px" />
              Enquiries
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>
            

             {/* Newsletter */}
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("newsletter")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <RiNewsLine className="text-20px" />
              Newsletter
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>


          {/* Testimonials */}
          <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleTestimonialsDD}
            >
              <div className="flex gap-1">
                <VscFeedback className="text-20px" />
                Manage Testimonials
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${testimonialsDD ? "rotate-180" : ""}`}/>
              </div>

              {testimonialsDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("add Testimonial");
                    toggleSideBar();
                    toggleTestimonialsDD();
                  }
                  
                }
                >Add Testimonial</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all Testimonials");
                  toggleSideBar();
                  toggleTestimonialsDD();
                }}
                >All Testimonials</div>

              </div>}
            </div>

           
          {/* <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("newsletter")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <FaRegNewspaper className="text-20px" />
              Newsletter
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div> */}


          <Link
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            // to={`/edit/${me && me.id}`}
            
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <LuSettings className="text-20px" />
              Settings
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </Link>

          <div
            className="flex items-center justify-start gap-1 pl-1 border cursor-pointer h-40px w-100 text-15px bg-vogueRed text-vogueWhite"
            onClick={logoutUser}
          >
            <RiLogoutCircleLine className="text-20px" />
            Logout
          </div>

          {/* <div className="flex items-center justify-start gap-1 pl-1 border cursor-pointer text-vogueRed h-40px w-100 text-15px">
            <BsTrash3 className="text-20px" />
            Delete Account
          </div> */}
        </div>
      ) : (
        ""
      )}


      {/* breadcrumb */}
      {current ?
      <div className="items-center justify-start h-auto gap-2 font-semibold small:flex w-100 text-15px large:hidden">
        <IoIosArrowRoundBack 
        className="cursor-pointer text-30px"
        onClick={toggleSideBar}
        /> {activeScreen[0].toUpperCase() + activeScreen.slice(1)}
        
       
      </div> : ""}

      
      {/* mobile active screen */}
      {current ? (
        <div className="flex-col items-center h-auto px-1 py-2 border small:flex w-100 bg-vogueWhite rounded-10 large:hidden text-15px">
          
          
          {/* overview */}
          {activeScreen === "overview" ? (
            <div className="flex flex-col items-start h-auto gap-2 w-100">
              
              
              <div className="flex flex-col items-start justify-between h-auto gap-2 w-100 rounded-5">
                
                <div className="flex flex-col h-auto border w-100">
                  <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                    Admin Info
                  </span>
                  <div className="flex flex-col h-auto gap-2 p-1 text-15px">
                    <p><span className="font-semibold">Role:</span> {me && me.role==='admin' ? "Admin" : "Super Admin"}</p>
                    <p><span className="font-semibold">Privilege:</span> {me && me.role==="admin" ? "Can manage user engagements and interactions" : "Can manage user engagements and admins"}</p>
                  </div>
                </div>

                <div className="flex flex-col h-auto gap-2 border w-100 rounded-5">
                  <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                    Basic Info{" "}
                    <Link to={`/user/edit/${me && me.id}`}><MdModeEditOutline className="font-bold text-black cursor-pointer" /></Link>
                  </span>
                  <div className="flex flex-col h-auto gap-2 p-1 text-15px w-100">
                    

                    <div className="flex flex-col h-auto gap-1 w-100">
                      <p><span className="font-bold">Name:</span> {me && me.firstName + " " + me.lastName}</p>
                      <p><span className="font-bold">Phone:</span> {me && me.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}



          {/* add program */}
          {activeScreen === "add Program" ? 

            <AddProgram />
            
            : ""}

        {activeScreen === "all Programs" &&<AllProgramsTable />}
        
        
        {activeScreen === "all Registrations" &&<AllCourseRegsTable />}
        
        {activeScreen === "all Users" &&<AdminUsersTable />}
        
        {/* add User all Users */}
        {activeScreen === "add User" && <AddNewUser />}
        
        
        {activeScreen === "manage Orders" && <AdminOrdersTable />}

        
        {activeScreen === "newsletter" && <AllNewsletterTable />}
        
        
        {activeScreen === "enquiries" && <AllEnquiriesTable />}
        
        {activeScreen === "add Webinar" && <AddWebinar />}
        
        {activeScreen === "add Testimonial" && <AddTestimonial />}
        
        {activeScreen === "all Testimonials" && <AllTestimonialsTable />}
        
        {activeScreen === "upcoming Webinars" && <UpcomingWebinarsTable />}
        
        {activeScreen === "past Webinars" && <PastWebinarsTable />}
        
        {activeScreen === "testimonials" && <AllTestimonialsTable />}

        
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminDashboard;
