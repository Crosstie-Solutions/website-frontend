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

// import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";
// import { Protected } from "./Components/Protected/Protected";



function App() {  

  const {aboutDD, solutionsDD, coursesDD} = useContext(CrossContext);

  return (
    <div className="App bg-appBg">

      <Router>
      
        {/* <ScrollToTop /> */}
        
        {/* <HeaderAndFooterWrapper>
          <HeaderWrapper />
        </HeaderAndFooterWrapper> */}
        <HeaderWrapper />

        {aboutDD && <AboutDD />}
        {solutionsDD && <SolutionsDD />}
        {coursesDD && <CoursesDD />}
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/blog-posts" element={<HomePage />} /> */}

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
