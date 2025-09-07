import React, { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";
import { toast } from 'react-toastify';



export const CrossContext = createContext(null);


function CrossContextProvider(props) {


  //base URL for API call
  // const baseUrl = "http://127.0.0.1:8000";
  const baseUrl = "https://crosstie-backend.onrender.com";
  // const baseUrl = "https://server.crosstiesolutions.com";


  const copyToClipboard = (text) => {
        try {
          navigator.clipboard.writeText(text)
          toast.success("Feedback link copied!");
        } catch (error) {
          toast.error('failed to copy feedback link');
        }
    };



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
//   function formatDate(dateString) {
//     const date = new Date(dateString);
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   return date.toLocaleDateString('en-US', options);

// }

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


//format webinar date
const formatWebinarDate = (dateString)=> {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.getFullYear();

    const getOrdinalSuffix = (n) => {
      const s = ['th', 'st', 'nd', 'rd'];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
    
  };


  function formatTestimonialDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
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
  const [programsMonthSearchTerm, setProgramsMonthSearchTerm] = useState("");
  const [headerProgramsSearchTerm, setHeaderProgramsSearchTerm] = useState("");
  const programsPerPage = 10;



  // // Filter programs based on search term
  const filteredPrograms = allPrograms && allPrograms.filter((program) =>
    
      `${program.title} ${program.category}`
    .toLowerCase()
    .includes(programsSearchTerm.toLowerCase()) 
    
  );


//to filter programs based on month
  const open = allPrograms && allPrograms.filter((program) =>
    
    program.category.toLowerCase().includes("open")
    
  );

  //sort by index
  const allOpenPrograms = open && open.sort((a, b) => a.priorityIndex - b.priorityIndex);




  const filteredHeaderPrograms = allPrograms && allPrograms.filter((program) =>
    
  `${program.title} ${program.category}`
  .toLowerCase()
  .includes(headerProgramsSearchTerm.toLowerCase())
  
);


  // // Calculate total pages
  const totalProgramsPages = filteredPrograms && Math.ceil(filteredPrograms.length / programsPerPage);

  // Get requests for the current page
  const programsStartIndex = (currentProgramsPage - 1) * programsPerPage;
  const programsEndIndex = programsStartIndex + programsPerPage;
  const currentPrograms = filteredPrograms && filteredPrograms.slice(programsStartIndex, programsEndIndex).reverse();

  
  //Handle page change
  const handleProgramsPageChange = (page) => {
    if (page > 0 && page <= totalProgramsPages) {
      setCurrentProgramsPage(page);
    }
  };
  


  //enrollment form
  const [enrollmentForm, setEnrollmentForm] = useState(null);

  const [program, setProgram] = useState(null);
  console.log('program:', program);


  //for other courses aside open executive
  const toggleEnrollment = async (index)=> {

    console.log('slug received:', index);

    window.scrollTo({ top: 0, behavior: "auto" });
    // setEnrollmentForm(!enrollmentForm);
    setEnrollmentForm((prev) => (prev === index ? null : index));

    try {
      const response = await axios.get(`${baseUrl}/api/program/${index}`);

      setProgram(response.data.data);

    } catch (error) {
      console.error('Error fetching program:', error);
    }

  }



  //for users to enroll once they click on "enroll now" on open executive programs
  const [openEnrollmentForm, setOpenEnrollmentForm] = useState(null);

  const toggleOpenEnrollment = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });
    // setEnrollmentForm(!enrollmentForm);
    setOpenEnrollmentForm((prev) => (prev === index ? null : index));

    try {
      const response = await axios.get(`${baseUrl}/api/program/${index}`);
      setProgram(response.data.data);

    } catch (error) {
      console.error('Error fetching program:', error);
    }

  }


  //for users to enroll after reading more details about open executive programs
  const [secondOpenEnrollmentForm, setSecondOpenEnrollmentForm] = useState(null);
  


  
  const toggleSecondOpenEnrollment = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });
    // setEnrollmentForm(!enrollmentForm);
    setSecondOpenEnrollmentForm((prev) => (prev === index ? null : index));


    try {
      const response = await axios.get(`${baseUrl}/api/program/${index}`);
      setProgram(response.data.data);

    } catch (error) {
      console.error('Error fetching program:', error);
    }

  }






  //active program
  const [activeProgram, setActiveProgram] = useState(null);


  const toggleAdminProgramAction = async (index)=> {

    setActiveProgram((prev) => (prev === index ? null : index));
  };

  

    //to controll form look for different course categories
  // this is the only course that both companies and individuals can register and it has dates. The rest are strictly for HR person to register the staff and they have no dates
  const executiveCourse = program && program.category==="Open Executive Programmes (OEP)";




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
const[loadMe, setLoadMe] = useState(false);
const[me, setMe] = useState(null);

// console.log("me:", me);


// Function to fetch logged in user details
const fetchMe = async () => {
  
  try {
    setLoadMe(true)
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

    
    if(error.response.data.message === 'jwt expired'){
      localStorage.clear();
     }
     if(error.response.data.message === 'Your token has expired, please log in again.'){
      localStorage.clear();
     }  
     if(error.response.data.message === 'User recently changed password! Please log in again.'){
      localStorage.clear();
     }   
  }finally{
    setLoadMe(false);
  }
};



  //fetch my webinars
const[myWebinars, setMyWebinars] = useState(null);



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



  //for admin to delete user
  const [deletingUser, setDeletingUser] = useState(false);

  const deleteUser = async (userId) => {
    
    try {
      setDeletingUser(true);
  
      const response = await axios.delete(`${baseUrl}/api/users/delete-user/${userId && userId}`, {
        headers: {
          Authorization: `Bearer ${loginToken ? loginToken : ""}`
        }
      });
  
      
      if(response.data.status ==='success'){
        toast.success('user deleted successfully.');
        toggleRemoveAdmin('exit')
      }
      
    } catch (error) {
      console.error('Error deleting user:', error);
      if(error.response.data.message.includes('jwt')){
        toast.error('session expired, login to perform action');
      }
    }finally{
      setDeletingUser(false);
    }
  };




  //course registration
const [allCourseRegs, setAllCourseRegs] = useState(null);

const [loadingAllCourseRegs, setLoadingAllCourseRegs] = useState(false);




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
const  courseRegsPerPage = 10;


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





  //Edge apps

const [allEdgeApps, setAllEdgeApps] = useState(null);

console.log('allEdgeApps:', allEdgeApps)

const [loadingAllEdgeApps, setLoadingAllEdgeApps] = useState(false);




const viewAllEdgeApps = async () => {

  try {
    setLoadingAllEdgeApps(true)
    const response = await axios.get(`${baseUrl}/api/edge/applications/all`);

    setAllEdgeApps(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all edge app:", dupError);
  }finally{
    setLoadingAllEdgeApps(false)
  }
};

   //active edge app.
  const [activeEdgeApp, setActiveEdgeApp] = useState(null);

  const toggleAdminEdgeAppAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveEdgeApp((prev) => (prev === index ? null : index));
  }



   //consulting requests
const [consultingReqs, setConsultingReqs] = useState(null);

const [loadingAllConsultingReqs, setLoadingAllConsultingReqs] = useState(false);

const allConsultingReqs = consultingReqs && consultingReqs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));




const viewAllConsultingReqs = async () => {
  try {
    setLoadingAllConsultingReqs(true)
    const response = await axios.get(`${baseUrl}/api/consulting`);

    setConsultingReqs(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all consulting regs:", dupError);
  }finally{
    setLoadingAllConsultingReqs(false)
  }
};



//for admin to filter course regs
const [currentConsultingReqsPage, setCurrentConsultingReqsPage] = useState(1);
const [consultingReqsSearchTerm, setConsultingReqsSearchTerm] = useState("");
const consultingReqsPerPage = 10;


// // Filter ConsultingReqs based on search term
const filteredConsultingReqs = allConsultingReqs && allConsultingReqs.filter((program) =>
  `${program.title} ${program.category}`
    .toLowerCase()
    .includes(consultingReqsSearchTerm.toLowerCase())
);


// // Calculate total pages
const totalConsultingReqsPages = filteredConsultingReqs && Math.ceil(filteredConsultingReqs.length / consultingReqsPerPage);

// Get requests for the current page
const consultingReqsStartIndex = (currentConsultingReqsPage - 1) * consultingReqsPerPage;
const consultingReqsEndIndex = consultingReqsStartIndex + consultingReqsPerPage;
const currentConsultingReqs = filteredConsultingReqs && filteredConsultingReqs.slice(consultingReqsStartIndex, consultingReqsEndIndex);


// Handle page change
const handleConsultingReqsPageChange = (page) => {
  if (page > 0 && page <= totalConsultingReqsPages) {
    setCurrentConsultingReqsPage(page);
  }
};





  //active consulting reg.
  const [activeConsultingReq, setActiveConsultingReq] = useState(null);

  const toggleAdminConsultingReqAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveConsultingReq((prev) => (prev === index ? null : index));
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
    if(response.status === 200){
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


//Enquiries

const [allEnquiries, setAllEnquiries] = useState(null);

const [loadingAllEnquiries, setLoadingAllEnquiries] = useState(false);



const viewAllEnquiries = async () => {
  try {
    setLoadingAllEnquiries(true)
    const response = await axios.get(`${baseUrl}/api/enquiry`);

    setAllEnquiries(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all enquiries:", dupError);
  }finally{
    setLoadingAllEnquiries(false)
  }
};


//for admin to filter Enquiries
const [currentEnquiriesPage, setCurrentEnquiriesPage] = useState(1);
const enquiriesPerPage = 10;


// // Calculate total pages
const totalEnquiriesPages = allEnquiries && Math.ceil(allEnquiries.length / enquiriesPerPage);

// Get requests for the current page
const enquiriesStartIndex = (currentEnquiriesPage - 1) * enquiriesPerPage;
const enquiriesEndIndex = enquiriesStartIndex + enquiriesPerPage;
const currentEnquiries = allEnquiries && allEnquiries.slice(enquiriesStartIndex, enquiriesEndIndex);


// Handle page change
const handleEnquiriesPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalEnquiriesPages) {
    setCurrentEnquiriesPage(page);
  }
};



  //active Enquiry
  const [activeEnquiry, setActiveEnquiry] = useState(null);

  const toggleAdminEnquiryAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveEnquiry((prev) => (prev === index ? null : index));
  };







//downloads

const [allDownloads, setAllDownloads] = useState(null);

console.log('allDownloads:', allDownloads);

const [loadingAllDownloads, setLoadingAllDownloads] = useState(false);


const viewAllDownloads = async () => {
  try {
    setLoadingAllDownloads(true)
    const response = await axios.get(`${baseUrl}/api/download`);

    setAllDownloads(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all Downloads:", dupError);
  }finally{
    setLoadingAllDownloads(false)
  }
};


//for admin to filter downloads
const [currentDownloadsPage, setCurrentDownloadsPage] = useState(1);
const downloadsPerPage = 10;


// // Calculate total pages
const totalDownloadsPages = allDownloads && Math.ceil(allDownloads.length / downloadsPerPage);

// Get requests for the current page
const downloadsStartIndex = (currentDownloadsPage - 1) * downloadsPerPage;
const downloadsEndIndex = downloadsStartIndex + downloadsPerPage;
const currentDownloads = allDownloads && allDownloads.slice(downloadsStartIndex, downloadsEndIndex);


// Handle page change
const handleDownloadsPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalDownloadsPages) {
    setCurrentDownloadsPage(page);
  }
};




  //Newsletters

const [allNewsletters, setAllNewsletters] = useState(null);

const [loadingAllNewsletters, setLoadingAllNewsletters] = useState(false);



const viewAllNewsletters = async () => {
  try {
    setLoadingAllNewsletters(true)
    const response = await axios.get(`${baseUrl}/api/newsletter`);

    setAllNewsletters(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all newsletters:", dupError);
  }finally{
    setLoadingAllNewsletters(false)
  }
};



//Testimonials

const [testimonials, setTestimonials] = useState(null);

const [loadingAllTestimonials, setLoadingAllTestimonials] = useState(false);

const allTestimonials = testimonials && testimonials.sort((a, b) => a.priorityIndex - b.priorityIndex);



  //for admin to filter testimonials
  const [currentTestimonialsPage, setCurrentTestimonialsPage] = useState(1);
  // const [programsSearchTerm, setProgramsSearchTerm] = useState("");
  const testimonialsPerPage = 12;


  // // Calculate total pages
  const totalTestimonialsPages = allTestimonials && Math.ceil(allTestimonials.length / testimonialsPerPage);
  
  // Get requests for the current page
  const testimonialsStartIndex = (currentTestimonialsPage - 1) * testimonialsPerPage;
  const testimonialsEndIndex = testimonialsStartIndex + testimonialsPerPage;
  const currentTestimonials = allTestimonials && allTestimonials.slice(testimonialsStartIndex, testimonialsEndIndex);


  // Handle page change
  const handleTestimonialsPageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (page > 0 && page <= totalTestimonialsPages) {
      setCurrentTestimonialsPage(page);
    }
  };
        


const viewAllTestimonials = async () => {
  try {
    setLoadingAllTestimonials(true)
    const response = await axios.get(`${baseUrl}/api/testimonial`);

    setTestimonials(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all testimonials:", dupError);
  }finally{
    setLoadingAllTestimonials(false)
  }
};



 //active Testimonial
 const [activeTestimonial, setActiveTestimonial] = useState(null);


 const toggleAdminTestimonialAction = async (index)=> {

   setActiveTestimonial((prev) => (prev === index ? null : index));
 }




      //for admin to delete testimonial
const [deletingTestimonial, setDeletingTestimonial] = useState(false);

const deleteTestimonial = async (testimonialId) => {
  
  try {
    setDeletingTestimonial(true);

    const response = await axios.delete(`${baseUrl}/api/testimonial/${testimonialId && testimonialId}`);

    console.log('Testimonial delete response:', response.data);
    if(response.data.status ==='success'){
      toast.success('Testimonial deleted successfully.');
      toggleAdminTestimonialAction("exit")
    }
    
  } catch (error) {
    console.error('Error deleting Testimonial:', error);
  }finally{
    setDeletingTestimonial(false);
  }
};




//Contact form

const [allContactForms, setAllContactForms] = useState(null);



const [loadingAllContactForms, setLoadingAllContactForms] = useState(false);

//for admin to filter contact forms
const [currentContactFormsPage, setCurrentContactFormsPage] = useState(1);
const contactFormsPerPage = 10;


// Calculate total pages
const totalContactFormsPages = allContactForms && Math.ceil(allContactForms.length / contactFormsPerPage);

// Get requests for the current page
const contactFormsStartIndex = (currentContactFormsPage - 1) * contactFormsPerPage;
const contactFormsEndIndex = contactFormsStartIndex + contactFormsPerPage;
const currentContactForms = allContactForms && allContactForms.slice(contactFormsStartIndex, contactFormsEndIndex);



// Handle page change
const handleContactFormsPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalContactFormsPages) {
    setCurrentContactFormsPage(page);
  }
};



const viewAllContactForms = async () => {
  try {
    setLoadingAllContactForms(true)
    const response = await axios.get(`${baseUrl}/api/contact`);

    setAllContactForms(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all contact forms:", dupError);
  }finally{
    setLoadingAllContactForms(false)
  }
};



  //active Contact Form
  const [activeContactForm, setActiveContactForm] = useState(null);

  const toggleAdminContactFormAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveContactForm((prev) => (prev === index ? null : index));
  }



   //downloadScreens
   const [presentationDownloadScreen, setPresentationDownloadScreen] = useState(false);

   const togglePresentationDownloadScreen = ()=> { 
    window.scrollTo({ top: 0, behavior: "auto" });
    setPresentationDownloadScreen(!presentationDownloadScreen);
   }


   const [courseContentDownloadScreen, setCourseContentDownloadScreen] = useState(false);

   const toggleCourseContentDownloadScreen = ()=> { 
    window.scrollTo({ top: 0, behavior: "auto" });
    setCourseContentDownloadScreen(!courseContentDownloadScreen);
   }



   const [courseBrochureDownloadScreen, setCourseBrochureDownloadScreen] = useState(false);

   

   const toggleCourseBrochureDownloadScreen = ()=> { 
    window.scrollTo({ top: 0, behavior: "auto" });
    setCourseBrochureDownloadScreen(!courseBrochureDownloadScreen);
   }

   //corperate presentation file
   const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/image/upload/v1744802770/Crosstie_Corporate_Profile_2025_sap8fs.pdf";
      
    const title = "Our Corporate Presentation";

    //webinar certificate template
    const webinarCertTemplate = "https://res.cloudinary.com/dnq0mhrjs/image/upload/v1748066017/Complete_Webinar_Certificate_4_tutmq2.pdf"


   

    //program download
    const [downloadProgramScreen, setDownloadProgramScreen] = useState(null);


    const toggleDownloadProgramScreen = async (index) => { 
     window.scrollTo({ top: 0, behavior: "auto" });
    //  setDownloadProgramScreen(!downloadProgramScreen);

     setDownloadProgramScreen((prev) => (prev === index ? null : index));
    }


    

   //high demand programs

const [allHighDemands, setAllHighDemands] = useState(null);


const [loadingAllHighDemands, setLoadingAllHighDemands] = useState(false);


const viewAllHighDemands = async () => {
  try {
    setLoadingAllHighDemands(true)
    const response = await axios.get(`${baseUrl}/api/program/high-demand/all`);

    setAllHighDemands(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all high-demand programs:", dupError);
  }finally{
    setLoadingAllHighDemands(false)
  }
};

const [userBio, setBio] = useState(null);

const toggleBio = async (index)=>{
  window.scrollTo({ top: 0, behavior: "auto" });

  setBio((prev) => (prev === index ? null : index));;
}






//blog posts 
const [blogPosts, setBlogPosts] = useState();
const [loadingAllBlogPosts, setLoadingAllBlogPosts] = useState(false);

const allBlogPosts = blogPosts && blogPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));



const viewAllBlogPosts = async () => {
  try {
    setLoadingAllBlogPosts(true)
    const response = await axios.get(`${baseUrl}/api/blog`);

    setBlogPosts(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all BlogPosts:", dupError);
  }finally{
    setLoadingAllBlogPosts(false)
  }
};


//for admin to filter BlogPosts
const [currentBlogPostsPage, setCurrentBlogPostsPage] = useState(1);
const [blogPostsSearchTerm, setBlogPostsSearchTerm] = useState("");
const blogPostsPerPage = 10;



// // Filter BlogPosts based on search term
const filteredBlogPosts = allBlogPosts && allBlogPosts.filter((blogPost) =>
  `${blogPost.title}`
    .toLowerCase()
    .includes(blogPostsSearchTerm.toLowerCase())
);



// // Calculate total pages
const totalBlogPostsPages = filteredBlogPosts && Math.ceil(filteredBlogPosts.length / blogPostsPerPage);

// Get requests for the current page
const blogPostsStartIndex = (currentBlogPostsPage - 1) * blogPostsPerPage;
const blogPostsEndIndex = blogPostsStartIndex + blogPostsPerPage;
const currentBlogPosts = filteredBlogPosts && filteredBlogPosts.slice(blogPostsStartIndex, blogPostsEndIndex).reverse();


// Handle page change
const handleBlogPostsPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalBlogPostsPages) {
    setCurrentBlogPostsPage(page);
  }
};



//active BlogPost
const [activeBlogPost, setActiveBlogPost] = useState(null);



const toggleAdminBlogPostAction = async (index)=> {

  setActiveBlogPost((prev) => (prev === index ? null : index));
}



 //for admin to delete blog post
 const [deletingBlogPost, setDeletingBlogPost] = useState(false);

 const deleteBlogPost = async (postId) => {
   
   try {
     setDeletingBlogPost(true);
 
     const response = await axios.delete(`${baseUrl}/api/blog/${postId && postId}`);
 
     console.log('Blog post delete response:', response.data);
     if(response.data.status ==='success'){
       toast.success('Blog post deleted successfully.');
       toggleAdminBlogPostAction("exit")
     }
     
   } catch (error) {
     console.error('Error deleting blog post:', error);
   }finally{
     setDeletingBlogPost(false);
   }
 };






 //media report

const [reports, setReports] = useState();

const [loadingAllReports, setLoadingAllReports] = useState(false);

const allReports = reports && reports.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));



const viewAllReports = async () => {
  try {
    setLoadingAllReports(true)
    const response = await axios.get(`${baseUrl}/api/report`);

    setReports(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all Reports:", dupError);
  }finally{
    setLoadingAllReports(false)
  }
};


//for admin to filter Reports
const [currentReportsPage, setCurrentReportsPage] = useState(1);
const [reportsSearchTerm, setReportsSearchTerm] = useState("");
const reportsPerPage = 10;



// // Filter Reports based on search term
const filteredReports = allReports && allReports.filter((Report) =>
  `${Report.title}`
    .toLowerCase()
    .includes(reportsSearchTerm.toLowerCase())
);



// // Calculate total pages
const totalReportsPages = filteredReports && Math.ceil(filteredReports.length / reportsPerPage);

// Get requests for the current page
const reportsStartIndex = (currentReportsPage - 1) * reportsPerPage;
const reportsEndIndex = reportsStartIndex + reportsPerPage;
const currentReports = filteredReports && filteredReports.slice(reportsStartIndex, reportsEndIndex).reverse();


// Handle page change
const handleReportsPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalReportsPages) {
    setCurrentReportsPage(page);
  }
};



//active Report
const [activeReport, setActiveReport] = useState(null);



const toggleAdminReportAction = async (index)=> {

  setActiveReport((prev) => (prev === index ? null : index));
}



 //for admin to delete report
 const [deletingReport, setDeletingReport] = useState(false);

 const deleteReport = async (postId) => {
   
   try {
     setDeletingReport(true);
 
     const response = await axios.delete(`${baseUrl}/api/report/${postId && postId}`);
 
     console.log('report delete response:', response.data);
     if(response.data.status ==='success'){
       toast.success('Media report deleted successfully.');
       toggleAdminReportAction("exit")
     }
     
   } catch (error) {
     console.error('Error deleting report:', error);
   }finally{
     setDeletingReport(false);
   }
 };






   //for admin to fetch all users
    
     const [allUsers, setAllUsers] = useState([]);

 
 
     const [loadUsers, setLoadUsers] = useState(false);
     
     const fetchUsers = async () => {
       
       try {
         setLoadUsers(true);
   
         const response = await axios.get(`${baseUrl}/api/users`, {
           headers: {
             Authorization: `Bearer ${loginToken ? loginToken : ""}`
           }
         });
     
         
         setAllUsers(response.data.data.data)
       } catch (error) {
         console.error('Error fetching users:', error);
       }finally{
         setLoadUsers(false);
       }
     };
 

   
 
 
   //for admin to filter users
   const [currentUsersPage, setCurrentUsersPage] = useState(1);
   const [usersSearchTerm, setUsersSearchTerm] = useState("");
   const usersPerPage = 10;
 
   // Filter users based on search term
   const filteredUsers = allUsers && allUsers.filter((user) =>
     `${user.firstName} ${user.lastName} ${user.email} ${user.phone}`
       .toLowerCase()
       .includes(usersSearchTerm.toLowerCase())
   );
 
   // Calculate total pages
   const totalUsersPages = filteredUsers && Math.ceil(filteredUsers.length / usersPerPage);
 
   // Get requests for the current page
   const usersStartIndex = (currentUsersPage - 1) * usersPerPage;
   const usersEndIndex = usersStartIndex + usersPerPage;
   const currentUsers = filteredUsers && filteredUsers.slice(usersStartIndex, usersEndIndex).reverse();
 


   // Handle page change
   const handleUsersPageChange = (page) => {
     if (page > 0 && page <= totalUsersPages) {
       setCurrentUsersPage(page);
     }
   };




   //active admin
  const [activeAdmin, setActiveAdmin] = useState(null);


  const toggleRemoveAdmin = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveAdmin((prev) => (prev === index ? null : index));
  };
 

  




  //for admin to fetch all partners
    
  const [allPartners, setAllPartners] = useState([]);



  const [loadPartners, setLoadPartners] = useState(false);
  
  const fetchPartners = async () => {
    
    try {
      setLoadPartners(true);

      const response = await axios.get(`${baseUrl}/api/partners`, {
        headers: {
          Authorization: `Bearer ${loginToken ? loginToken : ""}`
        }
      });
  
      
      setAllPartners(response.data.data.data)
    } catch (error) {
      console.error('Error fetching partners:', error);
    }finally{
      setLoadPartners(false);
    }
  };


//for admin to filter partners
const [currentPartnersPage, setCurrentPartnersPage] = useState(1);
const [partnersSearchTerm, setPartnersSearchTerm] = useState("");
const partnersPerPage = 10;

// Filter Partners based on search term
const filteredPartners = allPartners && allPartners.filter((partner) =>
  `${partner.partnerName}`
    .toLowerCase()
    .includes(partnersSearchTerm.toLowerCase())
);

// Calculate total pages
const totalPartnersPages = filteredPartners && Math.ceil(filteredPartners.length / partnersPerPage);

// Get requests for the current page
const partnersStartIndex = (currentPartnersPage - 1) * partnersPerPage;
const partnersEndIndex = partnersStartIndex + partnersPerPage;
const currentPartners = filteredPartners && filteredPartners.slice(partnersStartIndex, partnersEndIndex).reverse();





// Handle page change
const handlePartnersPageChange = (page) => {
  if (page > 0 && page <= totalPartnersPages) {
    setCurrentPartnersPage(page);
  }
};





//active Partner
const [activePartner, setActivePartner] = useState(null);

const togglePartner = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActivePartner((prev) => (prev === index ? null : index));
};










  //for admin to fetch all highDemand
    
  const [allHighDemand, setAllHighDemand] = useState([]);



  const [loadAllHighDemand, setLoadAllHighDemand] = useState(false);
  
  const fetchAllHighDemand = async () => {
    
    try {
      setLoadAllHighDemand(true);

      const response = await axios.get(`${baseUrl}/api/program/high-demand/all`);
  
      
      setAllHighDemand(response.data.data.data);

    } catch (error) {
      console.error('Error fetching all high demand:', error);
    }finally{
      setLoadAllHighDemand(false);
    }
  };

  
  //active high demand
const [activeHighDemand, setActiveHighDemand] = useState(null);

const toggleHighDemand = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActiveHighDemand((prev) => (prev === index ? null : index));
};



// for desktop search bar
const [activeSearch, setActiveSearch] = useState(false);





  //states for open executive enrollment
  const [trainingMode, setTrainingMode] = useState("Online");


  const [executiveEnrollmentData, setExecutiveEnrollmentData] = useState({

    program: "",
    nameOfOrg: "",
    mode: trainingMode,
    duration: "",
    participants: "",
    // country: "",
    // city: "",
    // userType: "",
    preferredDate: "",
    designation: "",
    title: "",
    fullName: "",
    email: "",
    phone: "",
    message: ""

  });

  

  const handleExecutiveChange = (e)=>{
    const { name, value } = e.target;
      
    setExecutiveEnrollmentData({ ...executiveEnrollmentData, [name]: value });

    console.log("executiveEnrollmentData:", executiveEnrollmentData);
  }







  //for admin to fetch all Events
    
  const [events, setEvents] = useState([]);


  const [loadEvents, setLoadEvents] = useState(false);

  const allEvents = events && events.sort((a, b) => a.priorityIndex - b.priorityIndex)
  

  console.log('allEvents:', allEvents)

  const fetchEvents = async () => {
    
    try {
      setLoadEvents(true);

      const response = await axios.get(`${baseUrl}/api/event`);
  
      
      setEvents(response.data.data.data)
    } catch (error) {
      console.error('Error fetching Events:', error);
    }finally{
      setLoadEvents(false);
    }
  };


//for admin to filter Events
const [currentEventsPage, setCurrentEventsPage] = useState(1);
const [eventsSearchTerm, setEventsSearchTerm] = useState("");
const eventsPerPage = 10;

// Filter Events based on search term
const filteredEvents = allEvents && allEvents.filter((event) =>
  `${event.title} ${event.client}`
    .toLowerCase()
    .includes(eventsSearchTerm.toLowerCase())
);

// Calculate total pages
const totalEventsPages = filteredEvents && Math.ceil(filteredEvents.length / eventsPerPage);

// Get requests for the current page
const eventsStartIndex = (currentEventsPage - 1) * eventsPerPage;
const eventsEndIndex = eventsStartIndex + eventsPerPage;
const currentEvents = filteredEvents && filteredEvents.slice(eventsStartIndex, eventsEndIndex).reverse();


const handleEventsPageChange = (page) => {
  if (page > 0 && page <= totalEventsPages) {
    setCurrentEventsPage(page);
  }
};



//active Event
const [activeEvent, setActiveEvent] = useState(null);

const toggleEvent = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActiveEvent((prev) => (prev === index ? null : index));
};


const [deletingEvent, setDeletingEvent] = useState(false);
    
    
    const deleteEvent = async (eventId) => {    
     
       try {
         
         setDeletingEvent(true);
         const response = await axios.delete(
           `${baseUrl}/api/event/${eventId}`);
    
         if (response.status === 200) {
          
           toast.success('Event deleted successfully.');
           toggleEvent("exit");
           
         }
       } catch (error) {
         
         console.log("Error deleting Event:", error);
         
       } finally {
        setDeletingEvent(false);
       }
   
    };







// case study
const [allCaseStudies, setAllCaseStudies] = useState([]);
const [loadingAllCaseStudies, setLoadingAllCaseStudies] = useState(false);



const viewAllCaseStudies = async () => {
  try {
    setLoadingAllCaseStudies(true)
    const response = await axios.get(`${baseUrl}/api/case-study`);

    setAllCaseStudies(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all CaseStudies:", dupError);
  }finally{
    setLoadingAllCaseStudies(false)
  }
};


//for admin to filter CaseStudies
const [currentCaseStudiesPage, setCurrentCaseStudiesPage] = useState(1);
const [caseStudiesSearchTerm, setCaseStudiesSearchTerm] = useState("");
const caseStudiesPerPage = 10;


// // Filter CaseStudies based on search term
const filteredCaseStudies = allCaseStudies && allCaseStudies.filter((caseStudy) =>
  `${caseStudy.title} ${caseStudy.author}`
    .toLowerCase()
    .includes(caseStudiesSearchTerm.toLowerCase())
);



// // Calculate total pages
const totalCaseStudiesPages = filteredCaseStudies && Math.ceil(filteredCaseStudies.length / caseStudiesPerPage);

// Get requests for the current page
const caseStudiesStartIndex = (currentCaseStudiesPage - 1) * caseStudiesPerPage;
const caseStudiesEndIndex = caseStudiesStartIndex + caseStudiesPerPage;
const currentCaseStudies = filteredCaseStudies && filteredCaseStudies.slice(caseStudiesStartIndex, caseStudiesEndIndex).reverse();


// Handle page change
const handleCaseStudiesPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalCaseStudiesPages) {
    setCurrentCaseStudiesPage(page);
  }
};



//active CaseStudy
const [activeCaseStudy, setActiveCaseStudy] = useState(null);


const toggleCaseStudy = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActiveCaseStudy((prev) => (prev === index ? null : index));
}






// careers
const [allJobs, setAllJobs] = useState();
const [loadingAllJobs, setLoadingAllJobs] = useState(false);



const viewAllJobs = async () => {
  try {
    setLoadingAllJobs(true)
    const response = await axios.get(`${baseUrl}/api/job`);

    setAllJobs(response.data.data.data);
  } catch (dupError) {
    console.log("error fetching all Jobs:", dupError);
  }finally{
    setLoadingAllJobs(false)
  }
};


//for admin to filter Jobs
const [currentJobsPage, setCurrentJobsPage] = useState(1);
const [jobsSearchTerm, setJobsSearchTerm] = useState("");
const jobsPerPage = 10;


// // Filter Jobs based on search term
const filteredJobs = allJobs && allJobs.filter((job) =>
  `${job.role}`
    .toLowerCase()
    .includes(jobsSearchTerm.toLowerCase())
);



// // Calculate total pages
const totalJobsPages = filteredJobs && Math.ceil(filteredJobs.length / jobsPerPage);

// Get requests for the current page
const jobsStartIndex = (currentJobsPage - 1) * jobsPerPage;
const jobsEndIndex = jobsStartIndex + jobsPerPage;
const currentJobs = filteredJobs && filteredJobs.slice(jobsStartIndex, jobsEndIndex).reverse();


// Handle page change
const handleJobsPageChange = (page) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  if (page > 0 && page <= totalJobsPages) {
    setCurrentJobsPage(page);
  }
};



//active Job
const [activeJob, setActiveJob] = useState(null);


const toggleJob = async (index)=> {

  setActiveJob((prev) => (prev === index ? null : index));
}



 //for admin to delete blog post
 const [deletingJob, setDeletingJob] = useState(false);

 const deleteJob = async (jobId) => {
   
   try {
     setDeletingJob(true);
 
     const response = await axios.delete(`${baseUrl}/api/job/${jobId && jobId}`);
 
     console.log('job delete response:', response.data);
     if(response.status === 200){
       toast.success('Job deleted successfully.');
       toggleJob("exit")
     }
     
   } catch (error) {
     console.error('Error deleting job:', error);
   }finally{
     setDeletingJob(false);
   }
 };

 //to apply for job
  const [apply, setApply] = useState(false);

     const applyNow = ()=>{
         window.scrollTo({ top: 0, behavior: "auto" });
         setApply(true)
     }



     
     



 //To calculate time a document was created
const timeAgo = (timestamp) => {
  const now = new Date();
  const postTime = new Date(timestamp);
  const secondsAgo = Math.floor((now - postTime) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} months ago`;
  }

  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} years ago`;
}


//consulting form
const [consultingTitle, setConsultingTitle] = useState('')

const bookService = (title)=> {
  setConsultingTitle(title)
}



//for resource vault
const [allProducts, setAllProducts] = useState();
  const [loadingAllProducts, setLoadingAllProducts] = useState(false);

  console.log("allProducts:", allProducts);



  const viewAllProducts = async () => {
    try {
      setLoadingAllProducts(true)
      const response = await axios.get(`${baseUrl}/api/product`);

      setAllProducts(response.data.data.data);
    } catch (dupError) {
      console.warn("dupError:", dupError);
    }finally{
      setLoadingAllProducts(false)
    }
  };




    //for admin to filter product
    const [currentProductsPage, setCurrentProductsPage] = useState(1);
    const [productsSearchTerm, setProductsSearchTerm] = useState("");
    const productsPerPage = 10;
  
    // Filter products based on search term
    const filteredProducts = allProducts && allProducts.filter((product) =>
      `${product.title} ${product.price}`
        .toLowerCase()
        .includes(productsSearchTerm.toLowerCase())
    );
  
    // Calculate total pages
    const totalProductsPages = filteredProducts && Math.ceil(filteredProducts.length / productsPerPage);
  
    // Get requests for the current page
    const productsStartIndex = (currentProductsPage - 1) * productsPerPage;
    const productsEndIndex = productsStartIndex + productsPerPage;
    const currentProducts = filteredProducts && filteredProducts.slice(productsStartIndex, productsEndIndex);  
  
    
    // Handle page change
    const handleProductsPageChange = (page) => {
      window.scrollTo({ top: 0, behavior: "auto" });
      if (page > 0 && page <= totalProductsPages) {
        setCurrentProductsPage(page);
      }
    };
  
  
    //for admin to take action on product
  
  const [activeProduct, setActiveProduct] = useState(null);
  
  const toggleAdminProductAction = (index)=>{
    // setAdminAction(!adminAction);
    setActiveProduct((prev) => (prev === index ? null : index));
  };



  //for admin to delete product
  const [deletingProduct, setDeletingProduct] = useState(false);
  
  const deleteProduct = async (productId) => {
    
    try {
      setDeletingProduct(true);
  
      const response = await axios.delete(`${baseUrl}/api/product/delete/${productId && productId}`);
  
      console.error('product delete response:', response.data);
      if(response.data.status ==='success'){
        toast.success('Product deleted successfully.');
        toggleAdminProductAction("exit")
      }
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }finally{
      setDeletingProduct(false);
    }
  };


  
  //to get cart Items from local storage
    const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : {};
    });
    // console.log("cartItems:", cartItems);
  
    //store cart items in local storage
    const storeCartItems = () =>{
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  
  
  
    const addToCart = (itemId) => {
      setCartItems((prevCart) => {
        const newCart = { ...prevCart };
    
        // Check if the item is already in the cart
        if (newCart[itemId]) {
          //  newCart[itemId] += 1; // Increase quantity
            // toast.success(`1 item added to cart.`)
          // Ensure the new quantity does not exceed the available stock
          toast.error('Item already added to cart');
        } else {
           newCart[itemId] = 1; // Add product with quantity 1
            toast.success(`1 item added to cart.`)
        }
    
        return newCart;
      });
    };
  
  
    //remove from cart
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
      toast.success(`Product removed from cart.`)
    };
  
    //decrease cart item
    const decreaseCartItem = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      toast.success(`1 item removed from cart.`)
    };
  
    

    //clear cart
    const clearCart = () => {
  
        let cart = {};
      for (let i = 1; i < allProducts && allProducts.length + 1; i++) {
        cart[i] = 0;
      }
  
      setCartItems(cart);
    };
  
  
    //to manually update cart items
    // const updateCartItemCount = (newAmount, itemId) => {
    //   setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    // };
  
  
    //to get total number of items in the cart
    const getTotalCartItems = () => {
      let totalItem = 0;
      for(const item in cartItems){
          if(cartItems[item]>0){
              totalItem += cartItems[item];
          }
      }
      return totalItem;
  }
  
  
   // to Calculate the total amount for each product
   const productTotalPrice = (productId) => {
    
    const product = allProducts && allProducts.find(p => p._id === productId);
    if (!product) return 0;
  
    if (product.priceDiscount > 0){
      const discount = (product.priceDiscount / 100 ) * product.price;
  
      const discountedPrice = product.price - discount;
  
      return discountedPrice * (cartItems[productId] || 0);
    }
  
  
    return product.price * (cartItems[productId] || 0);
  };
  
    //to get total amount of money for all items
    const getTotalCartAmount = () => {
  
      return Object.keys(cartItems).reduce((total, productId) => {
        return total + productTotalPrice(productId);
      }, 0);
    };




   //Edge apps

const [allWebinarFeedbacks, setAllWebinarFeedbacks] = useState(null);

console.log('allWebinarFeedbacks:', allWebinarFeedbacks)

const [loadingAllWebinarFeedbacks, setLoadingAllWebinarFeedbacks] = useState(false);




const viewAllWebinarFeedbacks = async () => {

  try {
    setLoadingAllWebinarFeedbacks(true)
    const response = await axios.get(`${baseUrl}/api/webinar/feedback/all`);

    setAllWebinarFeedbacks(response.data.data.data);

  } catch (dupError) {
    console.log("error fetching all webinar feedbacks:", dupError);
  }finally{
    setLoadingAllWebinarFeedbacks(false)
  }
};


   //active webinar feedback.
  const [activeWebinarFeedback, setActiveWebinarFeedback] = useState(null);

  const toggleAdminWebinarFeedbackAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveWebinarFeedback((prev) => (prev === index ? null : index));
  }


   //for user to filter webinar feedbacks
  const [webinarFeedbackSearchTerm, setWebinarFeedbackSearchTerm] = useState("");


  // Filter WebinarFeedback based on search term
  const filteredWebinarFeedback = allWebinarFeedbacks && allWebinarFeedbacks.filter((webinar) =>
    `${webinar.webinarId.topic} ${webinar.webinarId.presenter}`
      .toLowerCase()
      .includes(webinarFeedbackSearchTerm.toLowerCase())
  );



    const whatsAppMessage = encodeURIComponent("Hello Crosstie, I have questions about Crosstie EDGE.");
  const emailMessage = encodeURIComponent("Hello Crosstie, I have questions about Crosstie EDGE.");

  const subject = encodeURIComponent("Crosstie EDGE.");



  const [discounts, setDiscounts] = useState([]);

  //get all discounts
  const fetchActiveDiscounts = async () => {

  try {
    const response = await axios.get(`${baseUrl}/api/discount`);

    setDiscounts(response.data.data.data);

  } catch (dupError) {
    console.log("error fetching all discounts:", dupError);
  }

};

useEffect(()=>{
  fetchActiveDiscounts();
}, []);


const [firstTimeDiscount, setFirstTimeDiscount] = useState(0);

const checkFirstTimeBuyer = async (email) => {
  
        try {
          setLoading(true);
          const response = await axios.post(`${baseUrl}/api/users/first-time-buyer-status`, {
            email
          });
  
          if (response.status === 200) {    
            toast.success(response.data.message);
            const subTotal = getTotalCartAmount();
            const percentage = response.data.percentage;
            const discount = (percentage / 100) * subTotal;

            setFirstTimeDiscount(discount);
          }
        } catch (error) {
          if(error){
            console.error("Error checking first time buyer:", error);
            toast.error(error.response.data.message)
          }
          
        } finally {
          setLoading(false);
        }
      
  };


  const [generalDiscount, setGeneralDiscount] = useState(0);
  const [generalDiscountError, setGeneralDiscountError] = useState('');


const checkGeneralDiscount = async (code) => {

      if(!code){
        setGeneralDiscountError('Enter promo code');

        return null;
      }
  
        try {
          setLoading(true);
          const response = await axios.post(`${baseUrl}/api/users/general-discount-status`, {
            code
          });
  
          if (response.status === 200) {    
            toast.success(response.data.message);
            const subTotal = getTotalCartAmount();
            const percentage = response.data.percentage;
            const discount = (percentage / 100) * subTotal;

            setGeneralDiscount(discount);
          }
        } catch (error) {
          if(error){
            console.error("Error checking general discount:", error);
            toast.error(error.response.data.message)
          }
          
        } finally {
          setLoading(false);
        }
      
  };

  //active Discount
const [activeDiscount, setActiveDiscount] = useState(null);


const toggleDiscount = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActiveDiscount((prev) => (prev === index ? null : index));
}

        



  //scroll to top effect
  useEffect(() => {
    if (currentProgramsPage > 0) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [currentProgramsPage, activeProgram, currentCourseRegsPage, activeWebinar]);



  const [count, setCount] = useState(0);

  //value to export
  const contextValue = {
    hideAboutDD, showAboutDD, aboutDD, solutionsDD, showSolutionsDD, hideSolutionsDD, firstTimeDiscount, coursesDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleDiscount, activeDiscount, discounts, generalDiscountError, checkGeneralDiscount, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, navCourses, toggleMobileSearch, mobileSearch, viewAllPrograms, allPrograms, formatDate, setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage, currentPrograms, currentProgramsPage, totalProgramsPages,  programsStartIndex, programsEndIndex, generalDiscount,handleProgramsPageChange, toggleEnrollment, enrollmentForm, viewAllWebinars, upcomingWebinars, pastWebinars, webinarType, setWebinarType, loadingAllWebinars, setUpcomingSearchTerm, filteredUpcoming, setPastSearchTerm, filteredPast, me, baseUrl, loginToken, loading, setLoading, fetchMe, getLoginToken, fetchMyWebinars, myWebinars, current, setActiveScreen, activeScreen, toggleSideBar, viewAllCourses, allCourses, program, toggleAdminProgramAction, activeProgram, deletingProgram, deleteProgram, viewAllCourseRegs, allCourseRegs, currentCourseRegs,  handleCourseRegsPageChange, currentCourseRegsPage, totalCourseRegsPages,
    courseRegsSearchTerm, allCourseRegs, activeCourseReg, toggleAdminCourseRegAction,   activeWebinar, toggleAdminWebinarAction, deletingWebinar, deleteWebinar, currentUpcoming, handleUpcomingPageChange, totalUpcomingPages, currentUpcomingPage,
    currentPast, handlePastPageChange, currentPastPage, totalPastPages, pastSearchTerm,
  pastWebinars, activeWebinar, toggleActiveWebinarView, activeWebinarView, webinarEnrollment, toggleWebinarEnrollment, webinar, setWebinarEnrollment, loadingWebinar, viewAllEnquiries, toggleAdminEnquiryAction, activeEnquiry, allEnquiries, setActiveEnquiry, viewAllNewsletters, allNewsletters, viewAllTestimonials, allTestimonials, loadingAllTestimonials,  activeTestimonial, toggleAdminTestimonialAction, deletingTestimonial, deleteTestimonial,   activeContactForm, toggleAdminContactFormAction, viewAllContactForms, allContactForms, loadingAllContactForms, viewAllHighDemands, allHighDemands, toggleBio, userBio, currentTestimonials, handleTestimonialsPageChange, allBlogPosts, viewAllBlogPosts, handleBlogPostsPageChange, currentBlogPostsPage, deletingBlogPost, deleteBlogPost, blogPostsSearchTerm, activeBlogPost, currentBlogPosts, totalBlogPostsPages,setBlogPostsSearchTerm, toggleAdminBlogPostAction, currentTestimonialsPage, totalTestimonialsPages, loadingAllCaseStudies,
  currentCaseStudies,  caseStudiesSearchTerm, setCaseStudiesSearchTerm, setCurrentCaseStudiesPage, currentCaseStudiesPage, totalCaseStudiesPages,
  handleCaseStudiesPageChange, allCaseStudies, activeCaseStudy, toggleCaseStudy, fetchUsers, loadUsers, fetchPartners, viewAllWebinarFeedbacks,
  currentUsers, setUsersSearchTerm, loadPartners,
  currentPartners, partnersSearchTerm, setPartnersSearchTerm, setCurrentPartnersPage,
  currentPartnersPage, activeHighDemand, toggleHighDemand,
  totalPartnersPages, loadAllHighDemand,
  handlePartnersPageChange, executiveCourse, allJobs,
  allPartners, fetchAllHighDemand, downloadProgramScreen, toggleDownloadProgramScreen,
  currentUsersPage, togglePartner,
  activePartner, downloadUrl, title,
  totalUsersPages, activeSearch, setActiveSearch,
  handleUsersPageChange, setDownloadProgramScreen,
    allUsers, activeAdmin, toggleRemoveAdmin,
   toggleOpenEnrollment, openEnrollmentForm, executiveEnrollmentData, handleExecutiveChange, trainingMode, setTrainingMode, setExecutiveEnrollmentData, toggleSecondOpenEnrollment, secondOpenEnrollmentForm, currentEvents, allEvents, fetchEvents, loadEvents, togglePresentationDownloadScreen, toggleCourseContentDownloadScreen, presentationDownloadScreen, courseContentDownloadScreen, courseBrochureDownloadScreen, toggleCourseBrochureDownloadScreen, eventsSearchTerm, setEventsSearchTerm, setCurrentEventsPage, loadEvents, viewAllEdgeApps,
  currentEvents, viewAllCaseStudies, allCaseStudies,
  currentEventsPage,  handleCaseStudiesPageChange,
  currentCaseStudiesPage, loadingAllCaseStudies,
  totalCaseStudiesPages, viewAllJobs,
  totalEventsPages, timeAgo, apply, applyNow, setApply,
  handleEventsPageChange, jobsSearchTerm, setJobsSearchTerm, setCurrentJobsPage,
  allEvents, activeEvent, toggleEvent, loadingAllJobs,
  currentJobs, deletingJob, loadMe,
  currentJobsPage, headerProgramsSearchTerm, setHeaderProgramsSearchTerm,
  totalJobsPages, currentTestimonials,
  handleTestimonialsPageChange, headerProgramsSearchTerm, setHeaderProgramsSearchTerm,
  currentTestimonialsPage, filteredHeaderPrograms, allOpenPrograms,
  totalTestimonialsPages, loadingAllPrograms, toggleAdminWebinarFeedbackAction,
  handleJobsPageChange, setProgramsMonthSearchTerm,
  allJobs, currentContactForms, deleteUser, deletingUser,
  handleContactFormsPageChange, viewAllDownloads,
  currentContactFormsPage, currentDownloads,
  handleDownloadsPageChange, viewAllConsultingReqs,
  currentDownloadsPage, totalDownloadsPages, allDownloads,
  totalContactFormsPages, allConsultingReqs, currentConsultingReqs, handleConsultingReqsPageChange, currentConsultingReqsPage, totalConsultingReqsPages, activeConsultingReq, toggleAdminConsultingReqAction,
  deleteJob, currentEnquiries, loadingAllReports, allReports,
        currentReports, viewAllReports, activeReport, toggleAdminReportAction,
        handleReportsPageChange, deletingReport, deleteReport, viewAllProducts,
        currentReportsPage, count, setCount, productTotalPrice,
        totalReportsPages, deleteEvent, deletingEvent, allWebinarFeedbacks, webinarFeedbackSearchTerm, setWebinarFeedbackSearchTerm,
  handleEnquiriesPageChange, allEdgeApps, activeEdgeApp, toggleAdminEdgeAppAction,
  currentEnquiriesPage, loadingAllProducts, getTotalCartItems, allProducts,
        currentProducts, addToCart, cartItems, clearCart, removeFromCart,
    storeCartItems, getTotalCartAmount, webinarCertTemplate,
        handleProductsPageChange, formatWebinarDate, copyToClipboard,
        currentProductsPage, productsSearchTerm, setProductsSearchTerm, setCurrentProductsPage, currentProductsPage,
        totalProductsPages, deleteProduct, deletingProduct, formatTestimonialDate,
        handleProductsPageChange, activeWebinarFeedback,
        activeProduct, toggleAdminProductAction, whatsAppMessage, emailMessage, subject,
        totalProductsPages, filteredWebinarFeedback,
  totalEnquiriesPages, checkFirstTimeBuyer,
  activeJob, toggleJob, consultingTitle, bookService
  };

  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
