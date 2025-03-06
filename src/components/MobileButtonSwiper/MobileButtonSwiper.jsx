import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileButtonSwiper.css";



function MobileButtonSwiper() {
  const routes = [
    {
      name: "Overview",
      route: "about-us",
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
                    to={`/${item.route}`} 
                    key={index} 
                    className={`${location.pathname===`/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
                    } flex items-center justify-center w-auto px-2 font-semibold mobile-swiper-button text-10px rounded-20 h-30px`}
                    >{item.name}</NavLink>
        ))}
        </div>

        
      </div>


  );
}

export default MobileButtonSwiper;
