import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileButtonSwiper.css";





function MobileAboutButtonSwiper() {
  
  const routes = [
    {
      name: "Overview",
      route: "",
    },
    {
      name: "Our Story",
      route: "our-story",
    },
    {
      name: "Crosstiens",
      route: "leadership",
    },
    {
      name: "Our Clients",
      route: "our-clients",
    },
    {
      name: "Participant’s Feedback",
      route: "feedbacks",
    },
    {
      name: "Satisfaction Guaranteed",
      route: "satisfaction",
    },
    {
      name: "Crosstie Photos",
      route: "crosstie-photos",
    },
  ];

  return (
   
      <div className="border mobile-swiper-container">

        <div
          className="mobile-buttons-wrapper"
        >

          {routes.map((item, index) => (
                    <NavLink 
                    to={`/about-us/${item.route}`} 
                    key={index} 
                    className={`${location.pathname===`/about-us/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
                    } flex items-center justify-center w-auto px-2 font-semibold mobile-swiper-button text-10px rounded-20 h-30px`}
                    >{item.name}</NavLink>
        ))}
        </div>

        
      </div>


  );
}



function MobileCoursesButtonSwiper() {
  
  const routes = [
    {
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
    name: "Crosstie Team Bonding (CTB)",
    route: "team-bonding",
  },
]

  return (
   
      <div className="border mobile-swiper-container">

        <div
          className="mobile-buttons-wrapper"
        >

          {routes.map((item, index) => (
                    <NavLink 
                    to={`/our-courses/${item.route}`} 
                    key={index} 
                    className={`${location.pathname===`/our-courses/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
                    } flex items-center justify-center w-auto px-2 font-semibold mobile-swiper-button text-10px rounded-20 h-30px`}
                    >{item.name}</NavLink>
        ))}
        </div>

        
      </div>


  );
}


function MobileSolutionButtonSwiper() {
  
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
    name: "Customised Training",
    route: "customized-training"
  },
  
  {
    name: "Upcoming Webinars",
    route: "webinars"
  }

]

  return (
   
      <div className="border mobile-swiper-container">

        <div
          className="mobile-buttons-wrapper"
        >

          {routes.map((item, index) => (
                    <NavLink 
                    to={`/our-solutions/${item.route}`} 
                    key={index} 
                    className={`${location.pathname===`/our-solutions/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
                    } flex items-center justify-center w-auto px-2 font-semibold mobile-swiper-button text-10px rounded-20 h-30px`}
                    >{item.name}</NavLink>
        ))}
        </div>

        
      </div>


  );
}


export {MobileAboutButtonSwiper, MobileCoursesButtonSwiper, MobileSolutionButtonSwiper};
