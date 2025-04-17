import React, { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";
import { toast } from 'react-toastify';



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
    // const options = { day: '2-digit', month: 'short' };
    // return date.toLocaleDateString('en-GB', options);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);

}


  const [allPrograms, setAllPrograms] = useState();
  const [loadingAllPrograms, setLoadingAllPrograms] = useState(false);

  console.log("allPrograms:", allPrograms)


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


  //for other courses aside open executive
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



  //for users to enroll once they click on "enroll now" on open executive programs
  const [openEnrollmentForm, setOpenEnrollmentForm] = useState(null);

  const toggleOpenEnrollment = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });
    // setEnrollmentForm(!enrollmentForm);
    setOpenEnrollmentForm((prev) => (prev === index ? null : index));

    try {
      const response = await axios.get(`${baseUrl}/api/program/${index}`);
      setProgram(response.data.data.data);

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
      setProgram(response.data.data.data);

    } catch (error) {
      console.error('Error fetching program:', error);
    }

  }






  //active program
  const [activeProgram, setActiveProgram] = useState(null);

  console.log("activeProgram:", activeProgram);

  const toggleAdminProgramAction = async (index)=> {

    setActiveProgram((prev) => (prev === index ? null : index));
  };

  

    //to controll form look for different course categories
  // this is the only course that both companies and individuals can register and it has dates. The rest are strictly for HR person to register the staff and they have no dates
  const executiveCourse = program && program.category==="Open Executive Programmes (OEP)";

  console.log("executiveCourse:", executiveCourse);



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
    // setLoading(true)
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



  //active Enquiry
  const [activeEnquiry, setActiveEnquiry] = useState(null);

  const toggleAdminEnquiryAction = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveEnquiry((prev) => (prev === index ? null : index));
  }




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

console.log("allTestimonials:", allTestimonials);


  //for admin to filter testimonials
  const [currentTestimonialsPage, setCurrentTestimonialsPage] = useState(1);
  // const [programsSearchTerm, setProgramsSearchTerm] = useState("");
  const testimonialsPerPage = 12;

  console.log("currentProgramsPage:", currentProgramsPage);

  // // Filter programs based on search term
  // const filteredPrograms = allPrograms && allPrograms.filter((program) =>
  //   `${program.title} ${program.category}`
  //     .toLowerCase()
  //     .includes(programsSearchTerm.toLowerCase())
  // );


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

 console.log("activeTestimonial:", activeTestimonial);

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

console.log("allContactForms:", allContactForms);

const [loadingAllContactForms, setLoadingAllContactForms] = useState(false);



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

   const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/image/upload/v1744802770/Crosstie_Corporate_Profile_2025_sap8fs.pdf";
      
    const title = "Our Corporate Presentation";


   

    //program download
    const [downloadProgramScreen, setDownloadProgramScreen] = useState(false);

    const toggleDownloadProgramScreen = () => { 
     window.scrollTo({ top: 0, behavior: "auto" });
     setDownloadProgramScreen(!downloadProgramScreen);
    }

    

   //high demand programs

const [allHighDemands, setAllHighDemands] = useState(null);

console.log("allHighDemands:", allHighDemands);

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

const [bio, setBio] = useState(false);

const toggleBio = ()=>{
  setBio(!bio);
}



// blogPost
//blog posts 
const [allBlogPosts, setAllBlogPosts] = useState();
const [loadingAllBlogPosts, setLoadingAllBlogPosts] = useState(false);

console.log("allBlogPosts:", allBlogPosts)


const viewAllBlogPosts = async () => {
  try {
    setLoadingAllBlogPosts(true)
    const response = await axios.get(`${baseUrl}/api/blog`);

    setAllBlogPosts(response.data.data.data);
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

console.log("currentBlogPostsPage:", currentBlogPostsPage);

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

console.log("activeBlogPost:", activeBlogPost);

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





   //for admin to fetch all users
    
     const [allUsers, setAllUsers] = useState([]);

     console.log("allUsers:", allUsers);
 
 
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

  console.log("activeAdmin:", activeAdmin);

  const toggleRemoveAdmin = async (index)=> {

    window.scrollTo({ top: 0, behavior: "auto" });

    setActiveAdmin((prev) => (prev === index ? null : index));
  };
 

  




  //for admin to fetch all partners
    
  const [allPartners, setAllPartners] = useState([]);

  console.log("allPartners:", allPartners);


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

  console.log("allHighDemand:", allHighDemand);


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
    
  const [allEvents, setAllEvents] = useState([]);

  console.log("allEvents:", allEvents);


  const [loadEvents, setLoadEvents] = useState(false);
  
  const fetchEvents = async () => {
    
    try {
      setLoadEvents(true);

      const response = await axios.get(`${baseUrl}/api/event`);
  
      
      setAllEvents(response.data.data.data)
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






// case study
const [allCaseStudies, setAllCaseStudies] = useState([]);
const [loadingAllCaseStudies, setLoadingAllCaseStudies] = useState(false);

console.log("allCaseStudies:", allCaseStudies)


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

console.log("currentCaseStudiesPage:", currentCaseStudiesPage);

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

console.log("activeCaseStudy:", activeCaseStudy);

const toggleCaseStudy = async (index)=> {

  window.scrollTo({ top: 0, behavior: "auto" });

  setActiveCaseStudy((prev) => (prev === index ? null : index));
}






// careers
const [allJobs, setAllJobs] = useState();
const [loadingAllJobs, setLoadingAllJobs] = useState(false);

console.log("allJobs:", allJobs)


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

console.log("currentJobsPage:", currentJobsPage);

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

console.log("activeJob:", activeJob);

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
  pastWebinars, activeWebinar, toggleActiveWebinarView, activeWebinarView, webinarEnrollment, toggleWebinarEnrollment, webinar, setWebinarEnrollment, loadingWebinar, viewAllEnquiries, toggleAdminEnquiryAction, activeEnquiry, allEnquiries, setActiveEnquiry, viewAllNewsletters, allNewsletters, viewAllTestimonials, allTestimonials, loadingAllTestimonials,  activeTestimonial, toggleAdminTestimonialAction, deletingTestimonial, deleteTestimonial,   activeContactForm, toggleAdminContactFormAction, viewAllContactForms, allContactForms, loadingAllContactForms, viewAllHighDemands, allHighDemands, toggleBio, bio, currentTestimonials,
  handleTestimonialsPageChange, allBlogPosts, viewAllBlogPosts, currentTestimonialsPage, totalTestimonialsPages, currentBlogPosts, handleBlogPostsPageChange,  loadingAllCaseStudies,
  currentCaseStudies,  caseStudiesSearchTerm, setCaseStudiesSearchTerm, setCurrentCaseStudiesPage,
  currentCaseStudiesPage,
  totalCaseStudiesPages,
  handleCaseStudiesPageChange,
  allCaseStudies, activeCaseStudy, toggleCaseStudy,
  currentBlogPostsPage, deletingBlogPost, deleteBlogPost,
  totalBlogPostsPages,setBlogPostsSearchTerm,
  blogPostsSearchTerm, fetchUsers,
  toggleAdminBlogPostAction, loadUsers, fetchPartners,
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
  activeBlogPost, toggleOpenEnrollment, openEnrollmentForm, executiveEnrollmentData, handleExecutiveChange, trainingMode, setTrainingMode, setExecutiveEnrollmentData, toggleSecondOpenEnrollment, secondOpenEnrollmentForm, currentEvents, allEvents, fetchEvents, loadEvents, togglePresentationDownloadScreen, toggleCourseContentDownloadScreen, presentationDownloadScreen, courseContentDownloadScreen, courseBrochureDownloadScreen, toggleCourseBrochureDownloadScreen, eventsSearchTerm, setEventsSearchTerm, setCurrentEventsPage, loadEvents,
  currentEvents, viewAllCaseStudies, allCaseStudies,
  currentEventsPage,  handleCaseStudiesPageChange,
  currentCaseStudiesPage, loadingAllCaseStudies,
  totalCaseStudiesPages, viewAllJobs,
  totalEventsPages, timeAgo, apply, applyNow, setApply,
  handleEventsPageChange, jobsSearchTerm, setJobsSearchTerm, setCurrentJobsPage,
  allEvents, activeEvent, toggleEvent, loadingAllJobs,
  currentJobs, deletingJob,
  currentJobsPage,
  totalJobsPages,
  handleJobsPageChange,
  allJobs,
  deleteJob,
  activeJob, toggleJob
  };

  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
