import React, { useEffect, useState } from 'react';
import { heroImages } from '../../assets/images';




const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % heroImages.length);
      }, 5000); // every 5 seconds
  
      return () => clearInterval(slideInterval);
    }, []);

    
  
    return (
      <div className="relative w-full large:h-[90vh] overflow-hidden small:h-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="w-full large:h-[90vh] object-cover flex-shrink-0 small:h-auto"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default HeroSlider;
