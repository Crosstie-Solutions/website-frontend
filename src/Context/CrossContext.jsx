import React, { createContext, useState, useEffect, useRef } from "react";1
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";
import { toast } from 'react-toastify';

export const CrossContext = createContext(null);

function CrossContextProvider(props) {

  //base URL for API calls
  const baseUrl = "http://127.0.0.1:8000";
  // const baseUrl = "https://server.crosstiesolutions.com";



//scroll to top effect
// useEffect(() => {
//   if (gdgdg) {
//     window.scrollTo({ top: 0, behavior: "auto" });
//   }
// }, []);


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
  let navBarRef = useRef();

  useEffect(() =>{
    let handler = (event) =>{
      if(!navBarRef.current?.contains(event.target)){
        SetNavBar(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return ()=>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const [navCourses, setNavCourses] = useState(false);

  console.log("navCourses:", navCourses)


  //value to export
  const contextValue = {
    hideAboutDD, showAboutDD, aboutDD, solutionsDD, showSolutionsDD, hideSolutionsDD, coursesDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, navCourses
  };


  
  return (
    <CrossContext.Provider value={contextValue}>
      {props.children}
    </CrossContext.Provider>
  );
}

export default CrossContextProvider;
