import React, { createContext, useState, useEffect, useRef } from "react";1
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";
import { toast } from 'react-toastify';
import { courseData } from "../assets/data";




export const CrossContext = createContext(null);

function CrossContextProvider(props) {

  //base URL for API calls
  // const baseUrl = "http://127.0.0.1:8000";
  const baseUrl = "https://server.crosstiesolutions.com";



const [aboutDD, setAboutDD] = useState(false);

const showAboutDD = ()=>{
  setAboutDD(true);
}

const hideAboutDD = ()=>{
  setAboutDD(false);
}


const toggleAboutDD = ()=>{
  setAboutDD(!aboutDD);
}

const [solutionsDD, setSolutionsDD] = useState(false);

const showSolutionsDD = ()=>{
  setSolutionsDD(true);
}

const hideSolutionsDD = ()=>{
  setSolutionsDD(false);
}

const toggleSolutionsDD = ()=>{
  setSolutionsDD(!solutionsDD);
}

const [coursesDD, setCoursesDD] = useState(false);

const showCoursesDD = ()=>{
  setCoursesDD(true);
}

const hideCoursesDD = ()=>{
  setCoursesDD(false);
}

const toggleCoursesDD = ()=>{
  setCoursesDD(!coursesDD);
}

  //Click outside to close drop down
  let dropdownRef = useRef()

  useEffect(() =>{
    let handler = (event) =>{
      if(!dropdownRef.current?.contains(event.target)){
        setAboutDD(false);
        setSolutionsDD(false);
        setCoursesDD(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return ()=>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const [navBar, SetNavBar] = useState(false);

  const toggleNav = () =>{
    SetNavBar(!navBar)
  }

  // click outside to close mobile nav
  // let navBarRef = useRef();

  // useEffect(() =>{
  //   let handler = (event) =>{
  //     if(!navBarRef.current?.contains(event.target)){
  //       SetNavBar(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handler);

  //   return ()=>{
  //     document.removeEventListener("mousedown", handler);
  //   }

  // });

  const [navCourses, setNavCourses] = useState(false);

 
  //to set loading
const[loading, setLoading] = useState(false);


  const [mobileSearch, setMobileSearch] = useState(false);

  const toggleMobileSearch = () =>{
    setMobileSearch(!mobileSearch)
  }



  const [allCourses, setAllCourses] = useState();
  const [loadingAllCourses, setLoadingAllCourses] = useState(false);

  console.log("allCourses:", allCourses);


  const viewAllCourses = async () => {


    try {
      setLoadingAllCourses(true)
      const response = await axios.get(`${baseUrl}/api/course`);

      setAllCourses(response.data.data.data);
    } catch (dupError) {
      console.log("error fetching all courses:", dupError);
    }finally{
      setLoadingAllCourses(false)
    }


  };




  //to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
}


  const [allPrograms, setAllPrograms] = useState();
  const [loadingAllPrograms, setLoadingAllPrograms] = useState(false);

  console.log("allPrograms:", allPrograms);


  const viewAllPrograms = async () => {
    try {
      setLoadingAllPrograms(true)
      const response = await axios.get(`${baseUrl}/api/program`);

      setAllPrograms(response.data.data.data);
    } catch (dupError) {
      console.log("error fetching all programs:", dupError);
    }finally{
      setLoadingAllPrograms(false)
    }
  };


  // //for admin to filter product
  const [currentProgramsPage, setCurrentProgramsPage] = useState(1);
  const [programsSearchTerm, setProgramsSearchTerm] = useState("");
  const programsPerPage = 10;

  console.log("currentProgramsPage:", currentProgramsPage);

  // // Filter products based on search term
  const filteredPrograms = allPrograms && allPrograms.filter((program) =>
    `${program.title} ${program.category}`
      .toLowerCase()
      .includes(programsSearchTerm.toLowerCase())
  );


  // // Calculate total pages
  const totalProgramsPages = filteredPrograms && Math.ceil(filteredPrograms.length / programsPerPage);

  // Get requests for the current page
  const programsStartIndex = (currentProgramsPage - 1) * programsPerPage;
  const programsEndIndex = programsStartIndex + programsPerPage;
  const currentPrograms = filteredPrograms && filteredPrograms.slice(programsStartIndex, programsEndIndex).reverse();

  
  // Handle page change
  const handleProgramsPageChange = (page) => {
    if (page > 0 && page <= totalProgramsPages) {
      setCurrentProgramsPage(page);
    }
  };
  


  //enrollment form
  const [enrollmentForm, setEnrollmentForm] = useState(null);

  const [program, setProgram] = useState(null);


  const toggleEnrollment = async (index)=> {
    // setEnrollmentForm(!enrollmentForm);
    setEnrollmentForm((prev) => (prev === index ? null : index));

    try {
      const response = await axios.get(`${baseUrl}/api/program/${index}`);
      setProgram(response.data.data.data);

    } catch (error) {
      console.error('Error fetching program:', error);
    }

  }


  //active program
  const [activeProgram, setActiveProgram] = useState(null);

  const toggleAdminProgramAction = async (index)=> {

    setActiveProgram((prev) => (prev === index ? null : index));
  }

  



  //to fetch a single program
    // const fetchProgram = async () => {
    //   try {
    //     const response = await axios.get("http://127.0.0.1:8000/api/program/67da300fe4998e2f8c30a75b");
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error('Error fetching program:', error);
    //   }
    // };


  // const [moreDates, setMoreDates] = useState(null);
  
  //     const toggleMoreDates = (index)=>{
  //       setMoreDates((prev) => (prev === index ? null : index));
  //     }



  // to get webinars
  const [allWebinars, setAllWebinars] = useState();
  const [loadingAllWebinars, setLoadingAllWebinars] = useState(false);

  const upcomingWebinars = allWebinars && allWebinars.filter((webinar)=>webinar.past===false);

  const pastWebinars = allWebinars && allWebinars.filter((webinar)=>webinar.past===true);

  console.log("allWebinars:", allWebinars);
  console.log("upcomingWebinars:", upcomingWebinars);
  console.log("pastWebinars:", pastWebinars);

  


  const viewAllWebinars = async () => {
    try {
      setLoadingAllWebinars(true)
      const response = await axios.get(`${baseUrl}/api/webinar`);

      setAllWebinars(response.data.data.data);
    } catch (dupError) {
      console.log("error fetching all Webinars:", dupError);
    }finally{
      setLoadingAllWebinars(false)
    }
  };


  //to toggle webinar types
  const [webinarType, setWebinarType] = useState('upcoming');




  //for user to filter webinar
  const [upcomingSearchTerm, setUpcomingSearchTerm] = useState("");


  // Filter Upcoming webinar based on search term
  const filteredUpcoming = upcomingWebinars && upcomingWebinars.filter((webinar) =>
    `${webinar.topic} ${webinar.presenter}`
      .toLowerCase()
      .includes(upcomingSearchTerm.toLowerCase())
  );


  //for user to filter past webinar
  const [pastSearchTerm, setPastSearchTerm] = useState("");

  
  // Filter Past webinar based on search term
  const filteredPast = pastWebinars && pastWebinars.filter((webinar) =>
    `${webinar.topic} ${webinar.presenter}`
      .toLowerCase()
      .includes(pastSearchTerm.toLowerCase())
  );
  
 

  //to get login Token from local storage
const[loginToken, setLoginToken] = useState('');


const getLoginToken = () =>{
  const savedToken = localStorage.getItem('loginToken');
  const token = savedToken ? JSON.parse(savedToken) : "";
  setLoginToken(token);
};


  //fetch logged in user
const[me, setMe] = useState(null);

console.log("me:", me);


// Function to fetch logged in user details
const fetchMe = async () => {
  
  try {
    const response = await axios.get(`${baseUrl}/api/users/owner/me`, {
      headers: {
        Authorization: `Bearer ${loginToken ? loginToken : ""}`,
        withCredentials: true,
      }
    });

    // console.log('fetchedUser:', response.data.data.data);
    setMe(response.data.data.data)
  } catch (error) {
    console.error('Error fetching user data:', error.response.data.message);

    
    // if(error.response.data.message === 'jwt expired'){
    //   localStorage.clear();
    //  }
    //  if(error.response.data.message === 'Your token has expired, please log in again.'){
    //   localStorage.clear();
    //  }  
    //  if(error.response.data.message === 'User recently changed password! Please log in again.'){
    //   localStorage.clear();
    //  }   

  }
};



  //fetch my webinars
const[myWebinars, setMyWebinars] = useState(null);

console.log("myWebinars:", myWebinars);


// Function to fetch logged in user details
const fetchMyWebinars = async () => {
  
  try {
    const response = await axios.get(`${baseUrl}/api/webinar/my-webinars/${me && me._id}`);

    // console.log('fetchedUser:', response.data.data.data);
    setMyWebinars(response.data.data.webinars)
  } catch (error) {
    console.error('Error fetching my webinars:', error.response.data.message);

  }
};



//admin dashboard active screen
const [activeScreen, setActiveScreen] = useState("overview");
const [current, setCurrent] = useState(false);

const toggleSideBar = () => {
  setCurrent(!current);
};




  //for admin to delete product
const [deletingProduct, setDeletingProduct] = useState(false);

const deleteProduct = async (productId) => {
  
  try {
    setDeletingProduct(true);

    const response = await axios.delete(`${baseUrl}/api/products/delete/${productId && productId}`);

    console.error('product delete response:', response.data);
    if(response.data.status ==='success'){
      toast.success('Product deleted successfully.');
      toggleAdminProgramAction("exit")
    }
    
  } catch (error) {
    console.error('Error deleting product:', error);
  }finally{
    setDeletingProduct(false);
  }
};








  //scroll to top effect
  useEffect(() => {
    if (currentProgramsPage > 0) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [currentProgramsPage, activeProgram]);


  //value to export
  const contextValue = {
    hideAboutDD, showAboutDD, aboutDD, solutionsDD, showSolutionsDD, hideSolutionsDD, coursesDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, navCourses, toggleMobileSearch, mobileSearch, viewAllPrograms, allPrograms, formatDate, setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage, currentPrograms, currentProgramsPage, totalProgramsPages,  programsStartIndex, programsEndIndex, handleProgramsPageChange, toggleEnrollment, enrollmentForm, viewAllWebinars, upcomingWebinars, pastWebinars, webinarType, setWebinarType, loadingAllWebinars, setUpcomingSearchTerm, filteredUpcoming, setPastSearchTerm, filteredPast, me, baseUrl, loginToken, loading, setLoading, fetchMe, getLoginToken, fetchMyWebinars, myWebinars, current, setActiveScreen, activeScreen, toggleSideBar, viewAllCourses, allCourses, program, toggleAdminProgramAction, activeProgram
  };


  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
