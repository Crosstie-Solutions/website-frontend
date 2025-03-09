import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
  BrowserRouter,
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

// import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";
// import { Protected } from "./Components/Protected/Protected";



function App() {  

  const {aboutDD, solutionsDD, coursesDD, mobileSearch, viewAllPrograms} = useContext(CrossContext);


  useEffect(()=>{
    viewAllPrograms();
  },[])

  return (
    <div className="App bg-appBg">

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
        {/* {courseData.length >  0 && <CourseSuggestion />} */}
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ip-geo" element={<IPGeolocation />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/our-clients" element={<OurClientsPage />} />
          <Route path="/feedbacks" element={<FeedbacksPage />} />
          <Route path="/satisfaction" element={<SatisfactionPage />} />
          <Route path="/crosstie-photos" element={<OurPhotosPage />} />

          
          <Route path="/our-courses" element={<OpenExecutivePage />} />

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
    </div>
  );
}

export default App;
