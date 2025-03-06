import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

//desktop
const ButtonSwiper = () => {

  const routes = [{
    name: "Overview",
    route: "about-us"
  },
  {
    name: "Our story",
    route: "our-story"
  },
  {
    name: "Leadership",
    route: "leadership"
  },
  {
    name: "Our clients",
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
    name: "Crosstie photos",
    route: "crosstie-photos"
  }

]



    const location = useLocation()

  

  return (
    <div className="flex-row justify-center mt-5 overflow-hidden large:flex large:w-100 large:text-15px small:w-90 small:text-10px small:hidden">
   
      
      <div className="flex flex-row justify-center large:w-auto gap-2 px-1 py-0.5 border border-crossFooterText  rounded-20 small:w-100" 
     
      >
        {routes.map((item, index) => (
          <NavLink to={`/${item.route}`} key={index} 
          className={`${location.pathname===`/${item.route}` ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-[#959595]"
          } flex items-center justify-center w-auto large:px-2 large:h-40px rounded-20 small:px-1 small:h-30px`}
          >{item.name}</NavLink>
        ))}
      </div>

     
    </div>
  );
};


export default ButtonSwiper;