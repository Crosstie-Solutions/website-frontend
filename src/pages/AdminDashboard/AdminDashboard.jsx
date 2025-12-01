import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { BsTrash3 } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { LuBadgeHelp } from "react-icons/lu";
import AllContactFormsTable from "../../components/AdminInteraction/AllContactFormsTable/AllContactFormsTable";
import { BiMessageAltEdit } from "react-icons/bi";
import AddPost from "../../components/AdminInteraction/AddPost/AddPost";
import AllBlogPostsTable from "../../components/AdminInteraction/AllBlogPostsTable/AllBlogPostsTable";
import AllUsersTable from "../../components/AdminInteraction/AllUsersTable/AllUsersTable";
import AddNewAdmin from "../../components/AdminInteraction/AddNewAdmin/AddNewAdmin";
import { LuUsers } from "react-icons/lu";
import { GiThreeFriends } from "react-icons/gi";
import AllPartnersTable from "../../components/AdminInteraction/AllPartnersTable/AllPartnersTable";
import AddPartner from "../../components/AdminInteraction/AddPartner/AddPartner";
import AllHighDemandTable from "../../components/AdminInteraction/AllHighDemandTable/AllHighDemandTable";
import AddHighDemand from "../../components/AdminInteraction/AddHighDemand/AddHighDemand";
import { MdOutlineEventAvailable } from "react-icons/md";
import AllEventsTable from "../../components/AdminInteraction/AllEventsTable/AllEventsTable";
import AddEvent from "../../components/AdminInteraction/AddEvent/AddEvent";
import { GrGallery } from "react-icons/gr";
import { GiArchiveResearch } from "react-icons/gi";
import AllCaseStudiesTable from "../../components/AdminInteraction/AllCaseStudiesTable/AllCaseStudiesTable";
import AddCaseStudy from "../../components/AdminInteraction/AddCaseStudy/AddCaseStudy.jsx";
import { MdOutlineWork } from "react-icons/md";
import AllJobsTable from "../../components/AdminInteraction/AllJobsTable/AllJobsTable.jsx";
import AddJob from "../../components/AdminInteraction/AddJob/AddJob.jsx";
import AddPostWithEditor from "../../components/AdminInteraction/AddPostWithEditor/AddPostWithEditor.jsx";
import { MdFileDownload } from "react-icons/md";
import AllDownloadsTable from "../../components/AdminInteraction/AllDownloadsTable/AllDownloadsTable.jsx";
import { CiSquareQuestion } from "react-icons/ci";
import AllConsultingReqTable from "../../components/AdminInteraction/AllConsultingReqTable/AllConsultingReqTable.jsx";
import { SiSimpleanalytics } from "react-icons/si";
import AddReport from "../../components/AdminInteraction/AddReport/AddReport.jsx";
import AllReportsTable from "../../components/AdminInteraction/AllReportsTable/AllReportsTable.jsx";
import { IoSchool } from "react-icons/io5";
import { AllEdgeAppsTable } from "../../components/AdminInteraction/AllEdgeAppsTable/AllEdgeAppsTable.jsx";
import { AiOutlineProduct } from "react-icons/ai";
import AddProduct from "../../components/AdminInteraction/AddProduct/AddProduct.jsx";
import AllProductsTable from "../../components/AdminInteraction/AllProductsTable/AllProductsTable.jsx";
import { AllWebinarFeedbacksTable } from "../../components/AdminInteraction/AllWebinarFeedbacksTable/AllWebinarFeedbacksTable.jsx";
import AddDiscount from "../../components/AdminInteraction/AddDiscount/AddDiscount.jsx";
import AllDiscountsTable from "../../components/AdminInteraction/AllDiscountsTable/AllDiscountsTable.jsx";
import { GrUserAdmin } from "react-icons/gr";
import AllMembersTable from "../../components/AdminInteraction/AllMembersTable/AllMembersTable.jsx";
import AddMember from "../../components/AdminInteraction/AddMember/AddMember.jsx";


function AdminDashboard() {

  //users dropdown
  const [usersDD, setUsersDD] = useState(false);

  const toggleUsersDD = ()=>{
    setUsersDD(!usersDD);
  }

   //edge apps dropdown
  const [edgeDD, setEdgeDD] = useState(false);

  const toggleEdgeDD = ()=>{
    setEdgeDD(!edgeDD);
  }

   //partners dropdown
   const [partnersDD, setPartnersDD] = useState(false);

   const togglePartnersDD = ()=>{
     setPartnersDD(!partnersDD);
   }


   //Products dropdown
   const [productsDD, setProductsDD] = useState(false);

   const toggleProductsDD = ()=>{
     setProductsDD(!productsDD);
   }

    //report dropdown
   const [reportDD, setReportDD] = useState(false);

   const toggleReportDD = ()=>{
     setReportDD(!reportDD);
   }

    //case study dropdown
    const [caseStudiesDD, setCaseStudiesDD] = useState(false);

    const toggleCaseStudiesDD = ()=>{
      setCaseStudiesDD(!caseStudiesDD);
    }

    //events dropdown
    const [eventsDD, setEventsDD] = useState(false);

    const toggleEventsDD = ()=>{
      setEventsDD(!eventsDD);
    }

      //members dropdown
    const [membersDD, setMembersDD] = useState(false);

    const toggleMembersDD = ()=>{
      setMembersDD(!membersDD);
    }

    //jobs dropdown
    const [jobsDD, setJobsDD] = useState(false);

    const toggleJobsDD = ()=>{
      setJobsDD(!jobsDD);
    }


  //Programs dropdown
  const [programsDD, setProgramsDD] = useState(false);

  const toggleProgramsDD = ()=>{
    setProgramsDD(!programsDD);
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

  //blog dropdown
  const [blogDD, setBlogDD] = useState(false);

  const toggleBlogDD = ()=>{
    setBlogDD(!blogDD);
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
    <div className="large:flex-row large:bg-transparent large:h-auto large:justify-between large:items-start large:flex large:mt-20 large:w-90vw small:flex small:flex-col small:h-auto small:w-90vw small:items-center small:mt-15 small:gap-1">
      
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
          onClick={toggleProgramsDD}
          >
            <div className="flex gap-1">
              <FaBookBookmark className="text-20px" />
              Manage Programs
            </div>

            <IoChevronDown className={`text-20px ${programsDD ? "rotate-180" : ""}`}/>
          </div>

          {programsDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allPrograms")}
            >All Programs</div>
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addProgram")}
            >Add Program</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("courseRegistrations")}
            >Course Registrations</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allHighDemand")}
            >All High Demand Programs</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addHighDemand")}
            >Add High Demand Program</div>

            
          </div>}
          
          
        </div>

          
        
        {/* manage users */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addAdmin" || activeScreen === "allUsers" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleUsersDD}
          >
            <div className="flex gap-1">
              <LuUsers className="text-20px" />
              Manage Users
            </div>

            <IoChevronDown className={`text-20px ${usersDD ? "rotate-180" : ""}`}/>
          </div>

          {usersDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allUsers")}
            >All Users</div>
            
            {me && me.role.includes("super") &&
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addAdmin")}
            >Add Admin</div>}

          </div>}
        </div>


        {/* manage webinars */}
        
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addWebinar" || activeScreen === "upcomingWebinars" || activeScreen === "pastWebinars"  || activeScreen === "webinarFeedbacks" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
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

            <div className="h-auto pl-1 cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("webinarFeedbacks")}
            >Webinar Feedbacks</div>

          </div>}
        </div>

        {/* Manage Members */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          <div className={`${ activeScreen === "addMember" || activeScreen === "allMembers" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleMembersDD}
          >            
            <div className="flex gap-1">
              <GrUserAdmin className="text-20px" />
              Crosstiens
            </div>
            
            <IoChevronDown className={`text-20px ${membersDD ? "rotate-180" : ""}`}/>
          </div>

          {membersDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allMembers")}
            >All Members</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addMember")}
            >Add Member</div>

          </div>}
        </div>


         {/* manage Partners */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addPartner" || activeScreen === "allPartners" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={togglePartnersDD}
          >            
            <div className="flex gap-1">
              <GiThreeFriends className="text-20px" />
              Manage Partners
            </div>

            <IoChevronDown className={`text-20px ${partnersDD ? "rotate-180" : ""}`}/>
          </div>

          {partnersDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allPartners")}
            >All Partners</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addPartner")}
            >Add Partner</div>

          </div>}
        </div>

        {/* Manage Event */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addEvent" || activeScreen === "allEvents" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleEventsDD}
          >            
            <div className="flex gap-1">
              <GrGallery className="text-20px" />
              Crosstie Photos
            </div>
            
            
            <IoChevronDown className={`text-20px ${eventsDD ? "rotate-180" : ""}`}/>
          </div>

          {eventsDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allEvents")}
            >All Events</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addEvent")}
            >Add Event</div>

          </div>}
        </div>

        {/* Manage Products */}

         <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addProduct" || activeScreen === "allProducts" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleProductsDD}
          >            
            <div className="flex gap-1">
              <AiOutlineProduct className="text-20px" />
              Resource Vault
            </div>
            
            
            <IoChevronDown className={`text-20px ${productsDD ? "rotate-180" : ""}`}/>
          </div>

          {productsDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allProducts")}
            >All Products</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addProduct")}
            >Add Product</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addDiscount")}
            >Add Discount</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("activeDiscounts")}
            >Active Discounts</div>

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

        
        {/* downloads */}
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "downloads" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("downloads")}
        >
          <MdFileDownload className="text-20px" />
          File Downloads
        </div>


        {/* Consulting Request */}
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "consulting" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("consulting")}
        >
          <CiSquareQuestion className="text-20px" />
          Consulting Requests
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


        {/* Manage Jobs */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addJob" || activeScreen === "allJobs" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleJobsDD}
          >            
            <div className="flex gap-1">
              <MdOutlineWork className="text-20px" />
              Manage Careers
            </div>
            
            
            <IoChevronDown className={`text-20px ${jobsDD ? "rotate-180" : ""}`}/>
          </div>

          {jobsDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allJobs")}
            >All Jobs</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addJob")}
            >Add Job</div>

          </div>}
        </div>


        {/* Manage Croostie Edge */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "edgeApplicants" || activeScreen === "edgeRecruiters" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleEdgeDD}
          >            
            <div className="flex gap-1">
              <IoSchool className="text-20px" />
              Crosstie EDGE
            </div>
            
            
            <IoChevronDown className={`text-20px ${edgeDD ? "rotate-180" : ""}`}/>
          </div>

          {edgeDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("edgeApplicants")}
            >Applicants</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("edgeRecruiters")}
            >Recruiters</div>

          </div>}
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


         {/* contact form */}
         <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "contact" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("contact")}
        >
          <LuBadgeHelp className="text-20px" />
          Contact Form
        </div>


        {/* manage blog */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addPost" || activeScreen === "allPosts" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleBlogDD}
          >
            <div className="flex gap-1">
              <BiMessageAltEdit className="text-20px" />
              Manage Blog
            </div>

            <IoChevronDown className={`text-20px ${blogDD ? "rotate-180" : ""}`}/>
          </div>

          {blogDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            <div className="flex justify-center h-auto cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("allPosts")}
            >All Posts</div>
            
            <div className="flex justify-center h-auto cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("addPost")}
            >Add Post</div>
            
          </div>}
        </div>


        {/* manage reports */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addReport" || activeScreen === "allReports" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleReportDD}
          >

            <div className="flex gap-1">
              <SiSimpleanalytics className="text-20px" />
              Media Reports
            </div>

            <IoChevronDown className={`text-20px ${reportDD ? "rotate-180" : ""}`}/>
          </div>

          {reportDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            <div className="flex justify-center h-auto cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("allReports")}
            >All Reports</div>
            
            <div className="flex justify-center h-auto cursor-pointer w-100 hover:bg-gray-300"
             onClick={() => setActiveScreen("addReport")}
            >Add Report</div>
            
          </div>}
        </div>


        {/* manage Case studies */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addCaseStudy" || activeScreen === "allCaseStudies" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleCaseStudiesDD}
          >            
            <div className="flex gap-1">
              <GiArchiveResearch className="text-20px" />
              Case Studies
            </div>

            <IoChevronDown className={`text-20px ${caseStudiesDD ? "rotate-180" : ""}`}/>
          </div>

          {caseStudiesDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allCaseStudies")}
            >All Case Studies</div>
            
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addCaseStudy")}
            >Add Case Study</div>

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



        {/* add program */}
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
        
        {activeScreen === "contact" && <AllContactFormsTable />}
        
        {activeScreen === "downloads" && <AllDownloadsTable />}
        
        {activeScreen === "addPost" && <AddPostWithEditor />}
        
        {activeScreen === "allPosts" && <AllBlogPostsTable />}
        
        {activeScreen === "allUsers" && <AllUsersTable />}
        
        {activeScreen === "allPartners" && <AllPartnersTable />}
        
        {activeScreen === "allEvents" && <AllEventsTable />}
        
        {activeScreen === "allMembers" && <AllMembersTable />}
        
        {activeScreen === "addPartner" && <AddPartner />}
        
        {activeScreen === "addEvent" && <AddEvent />}
        
        {activeScreen === "addMember" && <AddMember />}
        
        {activeScreen === "addAdmin" && <AddNewAdmin />}

        {activeScreen === "allHighDemand" && <AllHighDemandTable />}
        
        {activeScreen === "addHighDemand" && <AddHighDemand />}
        
        {activeScreen === "allCaseStudies" && <AllCaseStudiesTable />}
        
        {activeScreen === "addCaseStudy" && <AddCaseStudy />}
        
        {activeScreen === "allJobs" && <AllJobsTable />}
        
        {activeScreen === "addJob" && <AddJob />}

        {activeScreen === "consulting" && <AllConsultingReqTable />}

        {activeScreen === "addReport" && <AddReport />}

        {activeScreen === "allReports" && <AllReportsTable />}
        
        {activeScreen === "edgeApplicants" && <AllEdgeAppsTable type="applicant" />}
        
        {activeScreen === "edgeRecruiters" && <AllEdgeAppsTable type="recruiter" />}
        
        {activeScreen === "addProduct" && <AddProduct />}
        
        {activeScreen === "allProducts" && <AllProductsTable />}
        
        {activeScreen === "webinarFeedbacks" && <AllWebinarFeedbacksTable />}
        
        {activeScreen === "addDiscount" && <AddDiscount />}
        
        {activeScreen === "activeDiscounts" && <AllDiscountsTable />}
        
        
        
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
            onClick={toggleProgramsDD}>
              
              <div className="flex gap-1">
                <FaBookBookmark className="text-20px" />
                Manage Programs
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${programsDD ? "rotate-180" : ""}`}/>
              </div>

              {programsDD &&
              <div className="flex flex-col items-center gap-1 w-100">
               
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Programs");
                    toggleSideBar();
                    toggleProgramsDD();
                  }
                  
                }
                >All Programs</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Program");
                  toggleSideBar();
                  toggleProgramsDD();
                }}
                >Add Programs</div>
                

                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all Registrations");
                  toggleSideBar();
                  toggleProgramsDD();
                }}
                >Course Registrations</div>

                  <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all HighDemands");
                  toggleSideBar();
                  toggleProgramsDD();
                }}
                >All High Demand Programs</div>


                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add HighDemand");
                  toggleSideBar();
                  toggleProgramsDD();
                }}
                >Add High Demand Program</div>
              </div>}
            </div>



            {/* users */}
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleUsersDD}
            >
              <div className="flex gap-1">
                <LuUsers className="text-20px" />
                Manage Users
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${usersDD ? "rotate-180" : ""}`}/>
              </div>

              {usersDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Users");
                    toggleSideBar();
                    toggleUsersDD();
                  }
                  
                }
                >All Users</div>
                
                {me && me.role.includes("super") &&
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Admin");
                  toggleSideBar();
                  toggleUsersDD();
                }}
                >Add Admin</div>}

                
              </div>}
            </div>


            {/* webinars */}
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
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


            {/* partners */}
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={togglePartnersDD}
            >
              <div className="flex gap-1">
                <GiThreeFriends className="text-20px" />
                Manage Partners
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${partnersDD ? "rotate-180" : ""}`}/>
              </div>


              {partnersDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Partners");
                    toggleSideBar();
                    togglePartnersDD();
                  }
                  
                }
                >All Partners</div>
                
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Partner");
                  toggleSideBar();
                  togglePartnersDD();
                }}
                >Add Partner</div>
                
              </div>}
            </div>

            

             {/* events */}
             <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleEventsDD}
            >
              <div className="flex gap-1">
                <GrGallery className="text-20px" />
                Crosstie Photos
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${eventsDD ? "rotate-180" : ""}`}/>
              </div>


              {eventsDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Events");
                    toggleSideBar();
                    toggleEventsDD();
                  }
                  
                }
                >All Events</div>
                
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Event");
                  toggleSideBar();
                  toggleEventsDD();
                }}
                >Add Event</div>
                
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


           {/* jobs */}
           <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleJobsDD}
            >
              <div className="flex gap-1">
                <MdOutlineWork className="text-20px" />
                Manage Careers
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${jobsDD ? "rotate-180" : ""}`}/>
              </div>


              {jobsDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Jobs");
                    toggleSideBar();
                    toggleJobsDD();
                  }
                  
                }
                >All Jobs</div>
                
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Job");
                  toggleSideBar();
                  toggleJobsDD();
                }}
                >Add Job</div>
                
              </div>}
            </div>


          {/* Testimonials */}
          <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
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

          {/* contact form */}
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("contact")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <LuBadgeHelp className="text-20px" />
              Contact Forms
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>


           {/* Consulting Requests */}
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("consulting")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <CiSquareQuestion className="text-20px" />
              Consulting Requests
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>



          {/* blog */}
          <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-13px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 large:pr-2 small:pr-1`}
            onClick={toggleBlogDD}
            >
              <div className="flex gap-1">
                <SiGoogleclassroom className="text-20px" />
                Manage Blog
              </div>

              <IoChevronDown className={`large:text-20px small:text-15px ${blogDD ? "rotate-180" : ""}`}/>
              </div>

              {blogDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("add Post");
                    toggleSideBar();
                    toggleBlogDD();
                  }
                  
                }
                >Add Post</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all Posts");
                  toggleSideBar();
                  toggleBlogDD();
                }}
                >All Posts</div>

              </div>}
          </div>



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
        
        {activeScreen === "all Users" &&<AllUsersTable />}
        
        {/* add admin */}
        {activeScreen === "add Admin" && <AddNewAdmin />}
        
        
        {/* {activeScreen === "manage Orders" && <AdminOrdersTable />} */}

        
        {activeScreen === "newsletter" && <AllNewsletterTable />}
        
        
        {activeScreen === "enquiries" && <AllEnquiriesTable />}
        
        {activeScreen === "add Webinar" && <AddWebinar />}
        
        {activeScreen === "add Testimonial" && <AddTestimonial />}
        
        {activeScreen === "all Testimonials" && <AllTestimonialsTable />}
        
        {activeScreen === "upcoming Webinars" && <UpcomingWebinarsTable />}
        
        {activeScreen === "past Webinars" && <PastWebinarsTable />}
        
        {activeScreen === "testimonials" && <AllTestimonialsTable />}
        
        {activeScreen === "contact" && <AllContactFormsTable />}
        
        {/* {activeScreen === "add Post" && <AddPost />} */}
        
        {activeScreen === "add Post" && <AddPostWithEditor />}
        
        {activeScreen === "all Posts" && <AllBlogPostsTable />}
        
        {activeScreen === "all Partners" && <AllPartnersTable />}
        
        {activeScreen === "all Events" && <AllEventsTable />}
        
        {activeScreen === "add Event" && <AddEvent />}
        
        {activeScreen === "add Partner" && <AddPartner />}
        
        {activeScreen === "add HighDemand" && <AddHighDemand />}
        
        {activeScreen === "all HighDemands" && <AllHighDemandTable />}
        
        {activeScreen === "all Jobs" && <AllJobsTable />}
        
        {activeScreen === "add Job" && <AddJob />}

        {activeScreen === "consulting" && <Allconsu />}

        
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminDashboard;
