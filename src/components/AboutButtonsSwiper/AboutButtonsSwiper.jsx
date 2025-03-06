import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./AboutButtonsSwiper.css"; 


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
  
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row justify-center overflow-hidden border border-red-500 swiper-container large:w-100 text-15px small:w-90">
      {/* <button className="nav-btn left" onClick={scrollLeft}>&#10094;</button> */}
      
      <div className="flex flex-row justify-center large:w-auto gap-2 px-1 py-0.5 border border-crossFooterText buttons-wrapper rounded-20 small:w-100" ref={scrollContainerRef}>
        {routes.map((item, index) => (
          <Link to={item.route} key={index} className="flex items-center justify-center w-auto px-2 swiper-button h-40px bg-crossLightPurple rounded-20">{item.name}</Link>
        ))}
      </div>

      {/* <button className="nav-btn right" onClick={scrollRight}>&#10095;</button> */}
    </div>
  );
};

export default ButtonSwiper;