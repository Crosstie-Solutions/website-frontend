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
      name: "Our story",
      route: "our-story",
    },
    {
      name: "Leadership",
      route: "leadership",
    },
    {
      name: "Our clients",
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
      name: "Crosstie photos",
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
    name: "Open executive programmes (OEP)",
    route: ""
  },
  {
    name: "Executive Leadership programmes (ELP)",
    route: "executive-leadership"
  },
  {
    name: "Sales excellence series (SES)",
    route: "sales-excellence"
  },
  {
    name: "Complete employee series (CES)",
    route: "complete-employee"
  }
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

export {MobileAboutButtonSwiper, MobileCoursesButtonSwiper};
