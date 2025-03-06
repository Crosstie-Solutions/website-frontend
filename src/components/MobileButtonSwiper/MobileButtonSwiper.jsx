import React from 'react';
import { Link } from 'react-router-dom';
import './MobileButtonSwiper.css';



function MobileButtonSwiper() {
    const routes = [
        {
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
    
      return (
        <div className="border mobile-swiper-container">
          {/* <button className="nav-btn left" onClick={scrollLeft}>&#10094;</button> */}
          
          <div className="mobile-buttons-wrapper" 
          // ref={scrollContainerRef}
          >
            {routes.map((item, index) => (
              <Link to={`/${item.route}`} key={index} className="flex items-center justify-center w-auto px-1 mobile-swiper-button text-10px rounded-20 h-30px bg-crossLightPurple">{item.name}</Link>
            ))}
          </div>
    
          {/* <button className="nav-btn right" onClick={scrollRight}>&#10095;</button> */}
        </div>
      );
}

export default MobileButtonSwiper;





