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

 


  const [mobileSearch, setMobileSearch] = useState(false);

  const toggleMobileSearch = () =>{
    setMobileSearch(!mobileSearch)
  }

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
  const [enrollmentForm, setEnrollmentForm] = useState(false);

  const toggleEnrollment = ()=> {
    setEnrollmentForm(!enrollmentForm);
  }
  
 
  

  //scroll to top effect
useEffect(() => {
  if (currentProgramsPage > 0) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}, [currentProgramsPage]);







  //value to export
  const contextValue = {
    hideAboutDD, showAboutDD, aboutDD, solutionsDD, showSolutionsDD, hideSolutionsDD, coursesDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, navCourses, toggleMobileSearch, mobileSearch, viewAllPrograms, allPrograms, formatDate, setProgramsSearchTerm, programsSearchTerm, setCurrentProgramsPage, currentPrograms, currentProgramsPage, totalProgramsPages,  programsStartIndex, programsEndIndex, handleProgramsPageChange, toggleEnrollment, enrollmentForm
  };


  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
