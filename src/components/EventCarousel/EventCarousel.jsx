import { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";




const EventCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative large:w-320px large:h-200px small:h-200px small:w-100">
      <div className="overflow-hidden rounded-tl-lg rounded-tr-lg w-100 h-100">
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="object-cover w-100 h-100"
        />
      </div>

      <div className="absolute left-0 right-0 flex justify-between px-4 -translate-y-1/2 -bottom-1">
        <button onClick={prev} className="px-2 py-1 text-white bg-black bg-opacity-50 rounded"><FaLongArrowAltLeft className='text-20px'/></button>
        <button onClick={next} className="px-2 py-1 text-white bg-black bg-opacity-50 rounded"><FaLongArrowAltRight className='text-20px'/></button>
      </div>
      
      {/* Dots */}
      <div className="absolute left-0 right-0 flex justify-center mt-4 space-x-2 -bottom-3">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-10px h-10px rounded-full ${
              currentIndex === index ? 'bg-crossLightPurple' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
