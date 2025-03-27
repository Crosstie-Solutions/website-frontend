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


  //for admin to filter programs
  const [currentProgramsPage, setCurrentProgramsPage] = useState(1);
  const [programsSearchTerm, setProgramsSearchTerm] = useState("");
  const programsPerPage = 10;

  console.log("currentProgramsPage:", currentProgramsPage);

  // // Filter programs based on search term
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

    window.scrollTo({ top: 0, behavior: "auto" });
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




  //for user to filter upcoming webinar
  const [upcomingSearchTerm, setUpcomingSearchTerm] = useState("");

  const [currentUpcomingPage, setCurrentUpcomingPage] = useState(1);
 
  const upcomingPerPage = 10;


  // Filter Upcoming webinar based on search term
  const filteredUpcoming = upcomingWebinars && upcomingWebinars.filter((webinar) =>
    `${webinar.topic} ${webinar.presenter}`
      .toLowerCase()
      .includes(upcomingSearchTerm.toLowerCase())
  );

 

  // // Calculate total pages
  const totalUpcomingPages = filteredUpcoming && Math.ceil(filteredUpcoming.length / upcomingPerPage);

  // Get requests for the current page
  const upcomingStartIndex = (currentUpcomingPage - 1) * upcomingPerPage;
  const upcomingEndIndex = upcomingStartIndex + upcomingPerPage;
  const currentUpcoming = filteredUpcoming && filteredUpcoming.slice(upcomingStartIndex, upcomingEndIndex).reverse();

  
  // Handle page change
  const handleUpcomingPageChange = (page) => {
    if (page > 0 && page <= totalUpcomingPages) {
      setCurrentUpcomingPage(page);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  



  //for user to filter past webinar
  const [pastSearchTerm, setPastSearchTerm] = useState("");
  const [currentPastPage, setCurrentPastPage] = useState(1);
 
  const pastPerPage = 10;

  
  // Filter Past webinar based on search term
  const filteredPast = pastWebinars && pastWebinars.filter((webinar) =>
    `${webinar.topic} ${webinar.presenter}`
      .toLowerCase()
      .includes(pastSearchTerm.toLowerCase())
  );


  // Calculate total pages
  const totalPastPages = filteredPast && Math.ceil(filteredPast.length / pastPerPage);

  // Get requests for the current page
  const pastStartIndex = (currentPastPage - 1) * pastPerPage;
  const pastEndIndex = pastStartIndex + pastPerPage;
  const currentPast = filteredPast && filteredPast.slice(pastStartIndex, pastEndIndex).reverse();

  
  // Handle page change
  const handlePastPageChange = (page) => {
    if (page > 0 && page <= totalPastPages) {
      setCurrentPastPage(page);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };


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



  //for admin to delete program
const [deletingProgram, setDeletingProgram] = useState(false);

const deleteProgram = async (programId) => {
  
  try {
    setDeletingProgram(true);

    const response = await axios.delete(`${baseUrl}/api/program/${programId && programId}`);

    console.log('program delete response:', response.data);
    if(response.data.status ==='success'){
      toast.success('Program deleted successfully.');
      toggleAdminProgramAction("exit")
    }
    
  } catch (error) {
    console.error('Error deleting program:', error);
  }finally{
    setDeletingProgram(false);
  }
};




const [allCourseRegs, setAllCourseRegs] = useState(null);

const [loadingAllCourseRegs, setLoadingAllCourseRegs] = useState(false);

console.log("allCourseRegs:", allCourseRegs);


const viewAllCourseRegs = async () => {
  try {
    setLoadingAllCourseRegs(true)
    const response = await axios.get(`${baseUrl}/api/course-reg`);

    setAllCourseRegs(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all course regs:", dupError);
  }finally{
    setLoadingAllCourseRegs(false)
  }
};



//for admin to filter course regs
const [currentCourseRegsPage, setCurrentCourseRegsPage] = useState(1);
const [courseRegsSearchTerm, setCourseRegsSearchTerm] = useState("");
const courseRegsPerPage = 10;

console.log("currentCourseRegsPage:", currentCourseRegsPage);

// // Filter CourseRegs based on search term
const filteredCourseRegs = allCourseRegs && allCourseRegs.filter((program) =>
  `${program.title} ${program.category}`
    .toLowerCase()
    .includes(courseRegsSearchTerm.toLowerCase())
);


// // Calculate total pages
const totalCourseRegsPages = filteredCourseRegs && Math.ceil(filteredCourseRegs.length / courseRegsPerPage);

// Get requests for the current page
const courseRegsStartIndex = (currentCourseRegsPage - 1) * courseRegsPerPage;
const courseRegsEndIndex = courseRegsStartIndex + courseRegsPerPage;
const currentCourseRegs = filteredCourseRegs && filteredCourseRegs.slice(courseRegsStartIndex, courseRegsEndIndex).reverse();


// Handle page change
const handleCourseRegsPageChange = (page) => {
  if (page > 0 && page <= totalCourseRegsPages) {
    setCurrentCourseRegsPage(page);
  }
};





  //active course reg.
  const [activeCourseReg, setActiveCourseReg] = useState(null);

  const toggleAdminCourseRegAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveCourseReg((prev) => (prev === index ? null : index));
  }





   //active webinar
   const [activeWebinar, setActiveWebinar] = useState(null);

   const toggleAdminWebinarAction = async (index)=> {
 
     setActiveWebinar((prev) => (prev === index ? null : index));
   }


     //for admin to delete Webinar
const [deletingWebinar, setDeletingWebinar] = useState(false);

const deleteWebinar = async (webinarId) => {
  
  try {
    setDeletingWebinar(true);

    const response = await axios.delete(`${baseUrl}/api/webinar/${webinarId && webinarId}`);

    console.log('Webinar delete response:', response.data);
    if(response.data.status ==='success'){
      toast.success('Webinar deleted successfully.');
      toggleAdminWebinarAction("exit")
    }
    
  } catch (error) {
    console.error('Error deleting Webinar:', error);
  }finally{
    setDeletingWebinar(false);
  }
};



const [activeWebinarView, setActiveWebinarView] = useState(null);

const toggleActiveWebinarView = async (index)=> {

  setActiveWebinarView((prev) => (prev === index ? null : index));
}




//for webinar enrollment
const [webinarEnrollment, setWebinarEnrollment] = useState(null);


const [webinar, setWebinar] = useState(null);
const [loadingWebinar, setLoadingWebinar] = useState(false);
console.log("webinar:", webinar)


const toggleWebinarEnrollment = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setWebinarEnrollment((prev) => (prev === index ? null : index));

  try {
    setLoadingWebinar(true)
    const response = await axios.get(`${baseUrl}/api/webinar/${index}`);
    setWebinar(response.data.data.data);

  } catch (error) {
    console.error('Error fetching Webinar:', error);
  }finally{
    setLoadingWebinar(false);
  }

}







  //scroll to top effect
  useEffect(() => {
    if (currentProgramsPage > 0) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [currentProgramsPage, activeProgram, currentCourseRegsPage, activeWebinar]);


  //value to export
  const contextValue = {
    hideAboutDD, showAboutDD, aboutDD, solutionsDD, showSolutionsDD, hideSolutionsDD, coursesDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, navCourses, toggleMobileSearch, mobileSearch, viewAllPrograms, allPrograms, formatDate, setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage, currentPrograms, currentProgramsPage, totalProgramsPages,  programsStartIndex, programsEndIndex, handleProgramsPageChange, toggleEnrollment, enrollmentForm, viewAllWebinars, upcomingWebinars, pastWebinars, webinarType, setWebinarType, loadingAllWebinars, setUpcomingSearchTerm, filteredUpcoming, setPastSearchTerm, filteredPast, me, baseUrl, loginToken, loading, setLoading, fetchMe, getLoginToken, fetchMyWebinars, myWebinars, current, setActiveScreen, activeScreen, toggleSideBar, viewAllCourses, allCourses, program, toggleAdminProgramAction, activeProgram, deletingProgram, deleteProgram, viewAllCourseRegs, allCourseRegs, currentCourseRegs,  handleCourseRegsPageChange, currentCourseRegsPage, totalCourseRegsPages,
    courseRegsSearchTerm, allCourseRegs, activeCourseReg, toggleAdminCourseRegAction,   activeWebinar, toggleAdminWebinarAction, deletingWebinar, deleteWebinar, currentUpcoming, handleUpcomingPageChange, totalUpcomingPages, currentUpcomingPage,
    currentPast, handlePastPageChange, currentPastPage, totalPastPages, pastSearchTerm,
  pastWebinars, activeWebinar, toggleActiveWebinarView, activeWebinarView, webinarEnrollment, toggleWebinarEnrollment, webinar, setWebinarEnrollment, loadingWebinar
  };


  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
