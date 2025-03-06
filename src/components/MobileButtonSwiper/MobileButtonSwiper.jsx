import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MobileButtonSwiper.css";
import { MdChevronRight } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";



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
    <div className="flex flex-col items-center h-auto gap-1 w-90vw">
      <div className="border mobile-swiper-container">
        {/* <button className="nav-btn left" onClick={scrollLeft}>&#10094;</button> */}

        <div
          className="mobile-buttons-wrapper"
          // ref={scrollContainerRef}
        >
          {routes.map((item, index) => (
            <NavLink
              to={`/${item.route}`}
              key={index}
              className="flex items-center justify-center w-auto px-1 font-semibold mobile-swiper-button text-10px rounded-20 h-30px bg-crossLightPurple"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        
      </div>

        <div className="flex items-center justify-center h-auto gap-2 text-black w-100">
            <RiArrowLeftSLine className="text-gray-600 text-30px"/>
            <MdChevronRight className="text-gray-600 text-30px"/>
        </div>
      {/* <button className="nav-btn right">this is</button> */}
    </div>
  );
}

export default MobileButtonSwiper;
