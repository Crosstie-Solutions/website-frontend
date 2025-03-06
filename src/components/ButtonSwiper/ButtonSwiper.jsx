import React, { useRef } from "react";
import "./ButtonSwiper.css"; // Import CSS for styling

const ButtonSwiper = () => {
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
    <div className="swiper-container">
      <button className="nav-btn left" onClick={scrollLeft}>&#10094;</button>
      
      <div className="buttons-wrapper" ref={scrollContainerRef}>
        {[...Array(8)].map((_, index) => (
          <button key={index} className="swiper-button">Button {index + 1}</button>
        ))}
      </div>

      <button className="nav-btn right" onClick={scrollRight}>&#10095;</button>
    </div>
  );
};

export default ButtonSwiper;