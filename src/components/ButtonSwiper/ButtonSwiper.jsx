import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

//desktop
const AboutButtonSwiper = () => {

  const routes = [{
    name: "Overview",
    route: ""
  },
  {
    name: "Our Story",
    route: "our-story"
  },
  {
    name: "Leadership",
    route: "leadership"
  },
  {
    name: "Our Clients",
    route: "our-clients"
  },
  {
    name: "Participant’s Feedback",
    route: "feedbacks"
  },
  {
    name: "Satisfaction Guaranteed",
    route: "satisfaction"
  },
  {
    name: "Crosstie Photos",
    route: "crosstie-photos"
  }

]


    const location = useLocation()


  return (
    <div className="flex-row justify-center overflow-hidden small:mt-5 large:flex large:w-84vw large:text-15px small:w-90 small:text-10px small:hidden large:mt-2">
   
      
      <div className="flex flex-row justify-between gap-2 px-1 py-1 border large:w-100 border-crossFooterText rounded-20 small:w-100" 
     
      >
        {routes.map((item, index) => (
          <NavLink to={`/about-us/${item.route}`} key={index} 
          className={`${location.pathname===`/about-us/${item.route}` ? "bg-crossLightPurple text-white" : "hover:bg-[#E7E7E7] hover:text-[#959595]"
          } flex items-center justify-center w-auto large:px-1 large:h-40px rounded-20 small:px-1 small:h-30px`}
          >{item.name}</NavLink>
        ))}
      </div>

     
    </div>
  );
};


const CoursesButtonSwiper = () => {

  const routes = [{
    name: "Open Executive Programmes (OEP)",
    route: ""
  },
  {
    name: "Executive Leadership Programmes (ELP)",
    route: "executive-leadership"
  },
  {
    name: "Sales Excellence Series (SES)",
    route: "sales-excellence"
  },
  {
    name: "Complete Employee Series (CES)",
    route: "complete-employee"
  },

  {
    name: "Crosstie Team Bonding",
    route: "team-bonding"
  }
]


    const location = useLocation()

  

  return (
    <div className="flex-row justify-center overflow-hidden large:mt-0 small:mt-5 large:flex large:w-83vw large:text-13px small:w-90 small:text-10px small:hidden">
   
      
      <div className="flex flex-row justify-between gap-2 px-1 py-1 border large:w-100 border-crossFooterText rounded-20 small:w-100" 
      >
        {routes.map((item, index) => (
          <NavLink to={`/our-courses/${item.route}`} key={index} 
          className={`${location.pathname===`/our-courses/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
          } flex items-center justify-center w-auto large:px-1 large:h-50px rounded-20 small:px-1 small:h-30px text-center py-1`}
          >{item.name}</NavLink>
        ))}
      </div>

     
    </div>
  );
};



const SolutionButtonSwiper = () => {

  const routes = [
    {
      name: "Corporate Training",
      route: ""
    },
    
    {
    name: "Management Consulting",
    route: "management-consulting"
  },
  {
    name: "Customized Training",
    route: "customized-training"
  },
  
  {
    name: "Upcoming Webinars",
    route: "webinars"
  }

]


    const location = useLocation()


  return (
    <div className="flex-row justify-center overflow-hidden small:mt-5 large:flex large:w-84vw large:text-15px small:w-90 small:text-10px small:hidden large:mt-0">
   
      
      <div className="flex flex-row justify-between gap-2 px-1 py-1 border large:w-100 border-crossFooterText rounded-20 small:w-100" 
     
      >
        {routes.map((item, index) => (
          <NavLink to={`/our-solutions/${item.route}`} key={index} 
          className={`${location.pathname===`/our-solutions/${item.route}` ? "bg-crossLightPurple text-white" : "hover:bg-[#E7E7E7] hover:text-[#959595]"
          } flex items-center justify-center w-auto large:px-2 large:h-40px rounded-20 small:px-1 small:h-30px`}
          >{item.name}</NavLink>
        ))}
      </div>

     
    </div>
  );
};



export {AboutButtonSwiper, CoursesButtonSwiper, SolutionButtonSwiper};