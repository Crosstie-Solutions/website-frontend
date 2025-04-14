import React, { useContext } from "react";
import { TbFileTypePdf } from "react-icons/tb";
import { CrossContext } from "../../Context/CrossContext";


function AboutHero(props) {

  const {tag, buttonText} = props;

    const {toggleDownloadScreen} = useContext(CrossContext);
    
  return (
    <div className="flex justify-center text-black large:items-center large:flex-row bg-purple-50 large:gap-5 large:w-100vw large:h-400px small:px-0 large:py-2 small:gap-2 small:h-auto small:w-90vw small:flex-col small:mt-5 small:items-start large:mt-0">
        
      <div className="flex flex-col items-start justify-center large:gap-2 small:pt-2 large:pl-0 large:h-100 large:w-50 small:h-auto small:w-90vw large:pt-0 small:gap-1">
        
        <h1 class="large:text-35px large:w-70 large:leading-tight small:leading-5 font-semibold small:w-80 small:text-20px">
          {tag ? tag : "About Us"}
        </h1>

        <p className="font-light large:w-90 small:w-100 small:text-13px large:text-15px">
          Discover new skills and interests with our extensive course collection
        </p>

        <h1 class="large:text-25px large:w-90 large:leading-8 small:leading-5 font-semibold small:w-100 small:text-20px">
          We empower you to earn money, respect and peace of mind.
        </h1>

        <div
          className="flex items-center justify-center gap-1 px-1 mt-2 text-center text-white cursor-pointer large:w-auto large:rounded-5 bg-buttonOverlay large:text-15px h-40px bg-crossLightPurple small:text-13px small:w-100 small:rounded-10"
          onClick={toggleDownloadScreen}
        >
          <TbFileTypePdf className="text-20px" />
          {buttonText ? buttonText : "Download Our Corporate Presentation"}
        </div>
      </div>

      <iframe
        src="https://www.youtube.com/embed/7fZPkt-ogSw?si=Eh29pmD5wBtdRnpH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullscreen
        className="bg-gray-400 large:h-95 large:w-30 large:rounded-10 small:h-300px small:w-100 small:rounded-5"
      ></iframe>
    </div>
  );
}

export default AboutHero;
