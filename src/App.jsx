import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import HeaderWrapper from "./components/HeaderWrapper/HeaderWrapper";
// import HomePage from "./Pages/HomePage/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import { AboutDD, CoursesDD, SolutionsDD } from "./components/AllDropDowns/AllDropDowns";
import { CrossContext } from "./Context/CrossContext";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import IPGeolocation from "./components/IpGeolocation/IpGeolocation";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import OurStoryPage from "./pages/OurStoryPage/OurStoryPage";
import LeadershipPage from "./pages/LeadershipPage/LeadershipPage";
import OurClientsPage from "./pages/OurClientsPage/OurClientsPage";
import FeedbacksPage from "./pages/FeedbacksPage/FeedbacksPage";
import SatisfactionPage from "./pages/SatisfactionPage/SatisfactionPage";
import OurPhotosPage from "./pages/OurPhotosPage/OurPhotosPage";
import MobileSearchBar from "./components/MobileSearchBar/MobileSearchBar";
import {CourseSuggestion} from "./components/CourseSuggestion/CourseSuggestion";
import { courseData } from "./assets/data";
import OpenExecutivePage from "./pages/OpenExecutivePage/OpenExecutivePage";
import ExecutiveLeadership from "./pages/ExecutiveLeadership/ExecutiveLeadership";
import SalesExcellencePage from "./pages/SalesExcellencePage/SalesExcellencePage";
import CompleteEmployee from "./pages/CompleteEmployee/CompleteEmployee";
import ProgramDetailsPage from "./pages/ProgramDetailsPage/ProgramDetailsPage";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import CorporateTrainingPage from "./pages/CorporateTrainingPage/CorporateTrainingPage";
import ManagementConsultingPage from "./pages/ManagementConsultingPage/ManagementConsultingPage";
import CustomizedTrainingPage from "./pages/CustomizedTrainingPage/CustomizedTrainingPage";
import WebinarPage from "./pages/WebinarPage/WebinarPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import { LoadingBtn } from "./components/LoadingBtn/LoadingBtn";
import Loading from "./components/Loading/Loading";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import EditProgramPage from "./pages/EditProgramPage/EditProgramPage";
import CourseEnrollmentForm from "./components/CourseEnrollmentForm/CourseEnrollmentForm";
import AdminProfile from "./pages/AdminProfile/AdminProfile";
import BackToTop from "./components/BackToTop/BackToTop";
import EditWebinarPage from "./pages/EditWebinarPage/EditWebinarPage";
import WebinarEnrollmentForm from "./components/WebinarEnrollmentForm/WebinarEnrollmentForm";
import EditTestimonialPage from "./pages/EditTestimonialPage/EditTestimonialPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { PresentationDownloadScreen } from "./components/DownloadScreen/DownloadScreen";
import Bio from "./components/Bio/Bio";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogPostDetails from "./pages/BlogPostDetails/BlogPostDetails";
import EditBlogPostPage from "./pages/EditBlogPostPage/EditBlogPostPage";
import CaseStudyPage from "./pages/CaseStudyPage/CaseStudyPage";
import { ProtectedAdmin } from "./components/ProtectedAdmin/ProtectedAdmin";
import { ProtectedUser } from "./components/ProtectedUser/ProtectedUser";
import {OpenCourseEnrollment, SecondOpenCourseEnrollment} from "./components/OpenCourseEnrollment/OpenCourseEnrollment";
import TeamBondingPage from "./pages/TeamBondingPage/TeamBondingPage";
import ViewCaseStudy from "./pages/ViewCaseStudy/ViewCaseStudy";
import CareersPage from "./pages/CareersPage/CareersPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import ViewBlogPost from "./pages/ViewBlogPost/ViewBlogPost";
import EditPostWithEditor from "./pages/EditPostWithEditor/EditPostWithEditor";


// import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";
// import { Protected } from "./Components/Protected/Protected";



function App() {  

  const {aboutDD, solutionsDD, coursesDD, mobileSearch, 
    viewAllPrograms, enrollmentForm, viewAllWebinars, 
    loading, fetchMe, getLoginToken, loginToken, fetchMyWebinars, me, viewAllCourses, viewAllCourseRegs, webinarEnrollment, viewAllEnquiries, viewAllNewsletters, viewAllTestimonials, viewAllContactForms, presentationDownloadScreen, viewAllHighDemands, viewAllBlogPosts, fetchUsers, fetchPartners, fetchAllHighDemand, activeSearch, openEnrollmentForm, secondOpenEnrollmentForm, fetchEvents, downloadUrl, title, viewAllCaseStudies, viewAllJobs} = useContext(CrossContext);


  useEffect(()=>{
    viewAllPrograms();
  },[]);
  
  
  useEffect(()=>{
    viewAllBlogPosts();
  },[]);

  useEffect(()=>{
    viewAllCaseStudies();
  },[]);

  
  useEffect(()=>{
    viewAllCourseRegs();
  },[]);

  

  useEffect(()=>{
    viewAllWebinars();
  },[]);


  
  useEffect(()=>{
    fetchMe();
  },[loginToken]);

  

  useEffect(()=>{
    getLoginToken();
  });


  useEffect(()=>{
    fetchMyWebinars();
  }, [me]);
  
  
  
  useEffect(()=>{
    viewAllCourses();
  }, []);
  
  
  useEffect(()=>{
    viewAllEnquiries();
  }, []);

  
  useEffect(()=>{
    viewAllNewsletters();
  }, []);


  useEffect(()=>{
    viewAllTestimonials();
  }, []);

  
  useEffect(()=>{
    viewAllContactForms();
  }, []);

  

  useEffect(()=>{
    viewAllHighDemands();
  }, []);

  useEffect(()=>{
    fetchUsers();
  }, [loginToken]);

  

  useEffect(()=>{
    fetchPartners();
  }, [loginToken]);


  
  useEffect(()=>{
    fetchAllHighDemand();
  }, []);

  useEffect(()=>{
    fetchEvents();
  }, []);

  useEffect(()=>{
    viewAllJobs();
  }, []);

  

   
  
  
  return (
    <div className="App bg-appBg">
      <BackToTop />

      <Router>
      
        <ScrollToTop />
        
        {/* <HeaderAndFooterWrapper>
          <HeaderWrapper />
        </HeaderAndFooterWrapper> */}
        <HeaderWrapper />

        {aboutDD && <AboutDD />}
        {solutionsDD && <SolutionsDD />}
        {coursesDD && <CoursesDD />}
        {mobileSearch && <MobileSearchBar />}
        {activeSearch && <CourseSuggestion />}
        
        {enrollmentForm && <CourseEnrollmentForm />}
        
        {openEnrollmentForm && <OpenCourseEnrollment />}
        
        {secondOpenEnrollmentForm && <SecondOpenCourseEnrollment />}

        
        {loading && <Loading />}
        {webinarEnrollment && <WebinarEnrollmentForm />}
        {/* {bio && <Bio />} */}
       
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ip-geo" element={<IPGeolocation />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us/our-story" element={<OurStoryPage />} />
          <Route path="/about-us/leadership" element={<LeadershipPage />} />
          <Route path="/about-us/our-clients" element={<OurClientsPage />} />
          <Route path="/about-us/feedbacks" element={<FeedbacksPage />} />
          <Route path="/about-us/satisfaction" element={<SatisfactionPage />} />
          <Route path="/about-us/crosstie-photos" element={<OurPhotosPage />} />

          
          <Route path="/our-courses" element={<OpenExecutivePage />} />
          <Route path="/our-courses/executive-leadership" element={<ExecutiveLeadership />} />
          
          <Route path="/our-courses/sales-excellence" element={<SalesExcellencePage />} />
          <Route path="/our-courses/complete-employee" element={<CompleteEmployee />} />
          <Route path="/our-courses/team-bonding" element={<TeamBondingPage />} />

          
          <Route path="/our-courses/:programId" element={<ProgramDetailsPage />} />
          <Route path="/our-courses/edit/:programId" element={<EditProgramPage />} />
          <Route path="/our-solutions/webinars/edit/:webinarId" element={<EditWebinarPage />} />
          
          
          <Route path="/about-us/feedbacks/edit/:testimonyId" element={<EditTestimonialPage />} />
          
          <Route path="/login" element={<LoginSignupPage />} />
          
          <Route path="/blog" element={<BlogPage />} />
          
          <Route path="/case-studies" element={<CaseStudyPage />} />
          
          <Route path="/careers" element={<CareersPage />} />
          
          <Route path="/careers/job/:jobId" element={<JobDetailsPage />} />
          
          
          <Route path="/case-studies/:postId" element={<ViewCaseStudy />} />
          
          <Route path="/blog/:postId" element={<BlogPostDetails />} />
          {/* <Route path="/blog/:postId" element={<ViewBlogPost />} /> */}
          {/* <Route path="/blog/edit/:postId" element={<EditBlogPostPage />} /> */}
          <Route path="/blog/edit/:postId" element={<EditPostWithEditor />} />

          

          
          <Route path="/our-solutions/" element={<CorporateTrainingPage />} />
          <Route path="/our-solutions/management-consulting" element={<ManagementConsultingPage />} />
          <Route path="/our-solutions/customized-training" element={<CustomizedTrainingPage />} />
          
          <Route path="/our-solutions/webinars" element={<WebinarPage />} />
          
          
          

          <Route element={<ProtectedUser />}>
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>

          <Route element={<ProtectedAdmin />}>
            <Route path="/admin-profile" element={<AdminProfile />} />
            
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
          
          

          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* <Route path="/shop/product" element={<ProductDetailPage />}>
            <Route path=":productId" element={<ProductDetailPage />} />
            
          </Route> */}


          {/* <Route element={<Protected />}>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Route> */}
          
          {/* <Route
            path="/password-reset/:resetToken"
            element={<PasswordResetPage />}
          /> */}

          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* <HeaderAndFooterWrapper>
                <Footer />
        </HeaderAndFooterWrapper> */}

        <Footer />
        
      </Router>

       {presentationDownloadScreen && 
        <PresentationDownloadScreen 
          downloadUrl={downloadUrl && downloadUrl}
          title={title && title}
        />}
    </div>
  );
}

export default App;
